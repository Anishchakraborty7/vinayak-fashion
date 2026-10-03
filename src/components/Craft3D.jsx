import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Craft3D({ onOpenModal }) {
  const canvasContainerRef = useRef(null);

  useEffect(() => {
    const canvasContainer = canvasContainerRef.current;
    if (!canvasContainer) return;

    let scene, camera, renderer, animId;
    let mainGroup, spindleMesh, ringGroup, weavePoints;
    let targetRotY = 0, targetRotX = 0;
    let currentRotY = 0, currentRotX = 0;

    try {
      const width = canvasContainer.clientWidth || 450;
      const height = canvasContainer.clientHeight || 450;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 0, 7.5);

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      canvasContainerRef.current.appendChild(renderer.domElement);

      mainGroup = new THREE.Group();
      scene.add(mainGroup);

      // Gold wireframe & metallic materials
      const goldWireMat = new THREE.MeshStandardMaterial({
        color: 0xEED58E,
        metalness: 0.95,
        roughness: 0.2,
        wireframe: true,
      });

      const goldSolidMat = new THREE.MeshStandardMaterial({
        color: 0xC59B3F,
        metalness: 0.9,
        roughness: 0.3,
      });

      const rubyMat = new THREE.MeshStandardMaterial({
        color: 0x8F1D2C,
        metalness: 0.2,
        roughness: 0.2,
      });

      // 1. Central Textile Spindle / Sacred Loom Cylinder
      const cylinderGeo = new THREE.CylinderGeometry(0.8, 0.8, 2.6, 32, 12, true);
      spindleMesh = new THREE.Mesh(cylinderGeo, goldWireMat);
      mainGroup.add(spindleMesh);

      // 2. Intersecting Geometric Mandala Rings (representing pure zari thread paths)
      ringGroup = new THREE.Group();
      for (let i = 0; i < 3; i++) {
        const torusGeo = new THREE.TorusGeometry(1.6 + i * 0.3, 0.03, 16, 100);
        const torus = new THREE.Mesh(torusGeo, goldSolidMat);
        torus.rotation.x = (i * Math.PI) / 3;
        torus.rotation.y = (i * Math.PI) / 4;
        ringGroup.add(torus);
      }
      mainGroup.add(ringGroup);

      // 3. Floating Ruby Loom Weights / Gems
      for (let j = 0; j < 6; j++) {
        const angle = (j / 6) * Math.PI * 2;
        const gemGeo = new THREE.OctahedronGeometry(0.2, 0);
        const gem = new THREE.Mesh(gemGeo, rubyMat);
        gem.position.set(Math.cos(angle) * 2.2, Math.sin(angle) * 0.8, Math.sin(angle) * 2.2);
        mainGroup.add(gem);
      }

      // 4. Floating Golden Weft Particles
      const particleCount = 80;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 8;
        positions[i + 1] = (Math.random() - 0.5) * 8;
        positions[i + 2] = (Math.random() - 0.5) * 6;
      }
      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: 0xFDF6C7,
        size: 0.05,
        transparent: true,
        opacity: 0.8
      });
      weavePoints = new THREE.Points(particleGeo, particleMat);
      scene.add(weavePoints);

      // Lights
      const ambLight = new THREE.AmbientLight(0xFFF3E0, 1.2);
      scene.add(ambLight);

      const dirLight = new THREE.DirectionalLight(0xFDF6C7, 3);
      dirLight.position.set(5, 5, 5);
      scene.add(dirLight);

      const burgundyFill = new THREE.PointLight(0x7A1C28, 4, 12);
      burgundyFill.position.set(-5, -3, 2);
      scene.add(burgundyFill);

      // Mouse Listener
      const onMove = (e) => {
        const rect = canvasContainerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        targetRotY = x * 1.8;
        targetRotX = y * 1.8;
      };

      window.addEventListener('mousemove', onMove);

      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const { width: w, height: h } = entry.contentRect;
          if (w > 0 && h > 0 && renderer && camera) {
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
          }
        }
      });
      resizeObserver.observe(canvasContainerRef.current);

      const startTime = performance.now();
      const loop = () => {
        animId = requestAnimationFrame(loop);
        const time = (performance.now() - startTime) * 0.001;

        currentRotY += (targetRotY - currentRotY) * 0.06;
        currentRotX += (targetRotX - currentRotX) * 0.06;

        if (mainGroup) {
          mainGroup.rotation.y = time * 0.4 + currentRotY;
          mainGroup.rotation.x = Math.sin(time * 0.3) * 0.2 + currentRotX;
          mainGroup.position.y = Math.sin(time * 1.4) * 0.15;
        }

        if (ringGroup) {
          ringGroup.rotation.z = time * 0.2;
        }

        if (weavePoints) {
          weavePoints.rotation.y = -time * 0.08;
        }

        renderer.render(scene, camera);
      };
      loop();

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('mousemove', onMove);
        resizeObserver.disconnect();
        if (renderer?.domElement && canvasContainer?.contains(renderer.domElement)) {
          canvasContainer.removeChild(renderer.domElement);
        }
        renderer?.dispose();
      };
    } catch (err) {
      console.warn("Craft3D animation note:", err);
    }
  }, []);

  return (
    <section className="site-section craft-3d-section" id="craft" style={{
      background: 'linear-gradient(180deg, rgba(22, 16, 18, 0.4) 0%, rgba(43, 8, 14, 0.45) 50%, rgba(13, 9, 10, 0.6) 100%)',
      borderTop: '1px solid var(--border-gold-subtle)',
      borderBottom: '1px solid var(--border-gold-subtle)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Mandala Backdrop */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="site-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(2.5rem, 6vw, 5rem)',
          alignItems: 'center'
        }}>
          {/* Left: 3D Kinetic Sculpture */}
          <div style={{
            position: 'relative',
            height: '460px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle at center, rgba(35, 12, 18, 0.6) 0%, rgba(14, 8, 10, 0.8) 75%)',
            border: '1px solid var(--border-gold-subtle)',
            borderRadius: '12px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(212, 175, 55, 0.05)',
            overflow: 'hidden'
          }}>
            <div ref={canvasContainerRef} style={{ width: '100%', height: '100%', position: 'relative' }} />
            
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '24px',
              right: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pointerEvents: 'none'
            }}>
              <span style={{
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gold-primary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Sparkles size={14} color="var(--gold-primary)" />
                Kinetic Handloom Geometry
              </span>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Interactive 3D</span>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div>
            <div className="section-label">
              <span>Sacred Artistry</span>
            </div>
            <h2 className="section-heading" style={{ marginBottom: '1.5rem' }}>
              THE ART OF <span className="gold-gradient-text">INDIAN CRAFT</span>
            </h2>
            <p style={{
              fontSize: '1.08rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.85,
              marginBottom: '1.5rem'
            }}>
              Before a Vinayak Fashion garment graces the body, it spends weeks resting upon traditional wooden handlooms. Each warp thread is strung by hand; every zari motif is woven with the precision of ancestral knowledge passed down through generations of master karigars.
            </p>
            <p style={{
              fontSize: '0.96rem',
              color: 'var(--text-muted)',
              lineHeight: 1.75,
              marginBottom: '2.5rem'
            }}>
              From the ghats of Varanasi to the royal ateliers of Rajasthan, our creations embody the living soul of Indian craftsmanship — where pure metal bullion, natural dye baths, and silk cocoons unite into wearable poetry.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center' }}>
              <button 
                onClick={() => onOpenModal('The Art of Indian Craft — Bespoke Atelier')}
                className="btn-luxury"
                id="btn-discover-craft"
              >
                <span>Discover the Craft</span>
                <ArrowRight size={16} />
              </button>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 18px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '4px',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)'
              }}>
                <ShieldCheck size={16} color="var(--gold-primary)" />
                <span>100% Certified Authentic Weaves</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
