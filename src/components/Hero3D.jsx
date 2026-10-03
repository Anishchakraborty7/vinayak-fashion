import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Hero3D() {
  const containerRef = useRef(null);
  const [hasWebGL] = useState(() => {
    try {
      const canvas = document.createElement('canvas');
      return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !hasWebGL) return;

    let scene, camera, renderer, animationFrameId;
    let group, ringMesh, coreGem, outerGems = [], particleSystem;
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    try {
      const width = container.clientWidth || 400;
      const height = container.clientHeight || 500;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.z = 6;

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      containerRef.current.appendChild(renderer.domElement);

      // Main Heirloom Jewelry 3D Group
      group = new THREE.Group();
      scene.add(group);

      // Gold Metallic Material
      const goldMaterial = new THREE.MeshStandardMaterial({
        color: 0xD4AF37,
        metalness: 0.92,
        roughness: 0.18,
        wireframe: false,
      });

      const brightGoldMaterial = new THREE.MeshStandardMaterial({
        color: 0xF7E5A9,
        metalness: 0.96,
        roughness: 0.12,
      });

      const emeraldMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x1E5936,
        metalness: 0.1,
        roughness: 0.1,
        transmission: 0.85,
        thickness: 0.8,
        reflectivity: 0.9,
        clearcoat: 1.0,
      });

      const rubyMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x8F1D2C,
        metalness: 0.1,
        roughness: 0.1,
        transmission: 0.85,
        thickness: 0.8,
        reflectivity: 0.9,
        clearcoat: 1.0,
      });

      // 1. Central Sacred Torus / Royal Kundan Ring
      const torusGeo = new THREE.TorusGeometry(1.4, 0.08, 24, 80);
      ringMesh = new THREE.Mesh(torusGeo, goldMaterial);
      group.add(ringMesh);

      // 2. Inner Sacred Kalash / Mandala Ring with Ornate Nodes
      const innerTorusGeo = new THREE.TorusGeometry(0.9, 0.04, 16, 60);
      const innerRing = new THREE.Mesh(innerTorusGeo, brightGoldMaterial);
      group.add(innerRing);

      // 3. Central Faceted Emerald Jewel (Octahedron)
      const coreGeo = new THREE.OctahedronGeometry(0.55, 1);
      coreGem = new THREE.Mesh(coreGeo, emeraldMaterial);
      group.add(coreGem);

      // 4. Orbiting Royal Ruby / Pearl Beads (Traditional Indian Navratna Accents)
      const beadCount = 8;
      for (let i = 0; i < beadCount; i++) {
        const angle = (i / beadCount) * Math.PI * 2;
        const beadGeo = new THREE.DodecahedronGeometry(0.12, 0);
        const beadMat = i % 2 === 0 ? rubyMaterial : brightGoldMaterial;
        const bead = new THREE.Mesh(beadGeo, beadMat);
        bead.position.set(Math.cos(angle) * 1.4, Math.sin(angle) * 1.4, 0);
        group.add(bead);
        outerGems.push({ mesh: bead, angle, radius: 1.4, speed: 0.015 });
      }

      // 5. Floating Gold Dust / Starlight Particle Field
      const particleCount = 60;
      const particleGeo = new THREE.BufferGeometry();
      const posArray = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 6;
        posArray[i + 1] = (Math.random() - 0.5) * 6;
        posArray[i + 2] = (Math.random() - 0.5) * 4;
      }
      particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      const particleMat = new THREE.PointsMaterial({
        size: 0.04,
        color: 0xF7E5A9,
        transparent: true,
        opacity: 0.7,
      });
      particleSystem = new THREE.Points(particleGeo, particleMat);
      scene.add(particleSystem);

      // Lighting: Warm Luxury Chandelier Atmosphere
      const ambientLight = new THREE.AmbientLight(0xFFEACC, 0.85);
      scene.add(ambientLight);

      const goldSpot1 = new THREE.DirectionalLight(0xFDF6C7, 2.8);
      goldSpot1.position.set(4, 5, 5);
      scene.add(goldSpot1);

      const wineSpot2 = new THREE.PointLight(0xB33B4D, 3.5, 10);
      wineSpot2.position.set(-4, -3, 3);
      scene.add(wineSpot2);

      const rimLight = new THREE.DirectionalLight(0xD4AF37, 2.2);
      rimLight.position.set(0, -4, -3);
      scene.add(rimLight);

      // Mouse & Scroll Listeners
      const handleMouseMove = (e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        targetX = x * 1.5;
        targetY = y * 1.5;
      };

      const handleScroll = () => {
        const scrollY = window.scrollY;
        if (group) {
          group.position.y = -scrollY * 0.0012;
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll, { passive: true });

      // Resize observer
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
      resizeObserver.observe(containerRef.current);

      // Render Loop using high-res performance timer
      const startTime = performance.now();
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = (performance.now() - startTime) * 0.001;

        // Smooth mouse lerping
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        // Graceful jewelry rotation
        if (group) {
          group.rotation.y = elapsedTime * 0.35 + mouseX;
          group.rotation.x = Math.sin(elapsedTime * 0.4) * 0.15 - mouseY;
          group.rotation.z = Math.cos(elapsedTime * 0.25) * 0.08;
          group.position.y = Math.sin(elapsedTime * 1.2) * 0.12 - (window.scrollY * 0.001);
        }

        if (coreGem) {
          coreGem.rotation.x = elapsedTime * 0.6;
          coreGem.rotation.y = elapsedTime * 0.8;
        }

        if (particleSystem) {
          particleSystem.rotation.y = elapsedTime * 0.05;
        }

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
        resizeObserver.disconnect();
        if (renderer?.domElement && container?.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer?.dispose();
      };
    } catch (err) {
      console.warn("WebGL initialization note, using luxury fallback:", err);
    }
  }, [hasWebGL]);

  return (
    <div 
      ref={containerRef}
      className="hero-3d-wrapper"
      style={{
        width: '100%',
        height: '100%',
        minHeight: '380px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none'
      }}
    >
      {/* 2D Luxury Animated Fallback if WebGL isn't enabled */}
      {!hasWebGL && (
        <div className="hero-3d-fallback" style={{
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          border: '2px solid var(--gold-primary)',
          boxShadow: '0 0 50px rgba(212, 175, 55, 0.4), inset 0 0 30px rgba(212, 175, 55, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'rotateFallback 20s linear infinite',
          background: 'radial-gradient(circle, rgba(143, 29, 44, 0.4) 0%, rgba(26, 7, 11, 0.8) 70%)'
        }}>
          <div style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            border: '1px dashed var(--gold-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'var(--gold-gradient)',
              transform: 'rotate(45deg)',
              boxShadow: '0 0 20px var(--gold-primary)'
            }} />
          </div>
        </div>
      )}

      {/* Floating Traditional Badge */}
      <div 
        className="hero-3d-caption"
        style={{
          position: 'absolute',
          bottom: '12px',
          padding: '6px 16px',
          background: 'rgba(26, 7, 11, 0.75)',
          border: '1px solid var(--border-gold-subtle)',
          borderRadius: '30px',
          backdropFilter: 'blur(10px)',
          fontSize: '0.72rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--gold-light)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-primary)', display: 'inline-block', boxShadow: '0 0 8px var(--gold-primary)' }} />
        3D Interactive Heirloom Regalia
      </div>
    </div>
  );
}
