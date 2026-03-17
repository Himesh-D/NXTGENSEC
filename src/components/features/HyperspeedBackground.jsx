import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HyperspeedBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0f, 0.0015); // Matches var(--bg-primary)

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Geometry and Materials
    const starGeo = new THREE.BufferGeometry();
    const starCount = 6000;
    const starPositions = new Float32Array(starCount * 3);
    const starVelocities = [];

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 4000; // x
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 4000; // y
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 4000; // z
      starVelocities.push(0);
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

    // Glow Material using colors matching the theme
    const starMat = new THREE.PointsMaterial({
      color: 0x8b5cf6, // Violet
      size: 1.5,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // Animation loop
    const animate = () => {
      const positions = starGeo.attributes.position.array;
      for (let i = 0; i < starCount; i++) {
        starVelocities[i] += 0.02; // Acceleration
        positions[i * 3 + 2] += starVelocities[i]; // Move Z

        // Rest star when closer to camera
        if (positions[i * 3 + 2] > 1000) {
          positions[i * 3 + 2] = -2000;
          starVelocities[i] = 0;
        }
      }
      starGeo.attributes.position.needsUpdate = true;
      stars.rotation.z += 0.002;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      starGeo.dispose();
      starMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.4,
        pointerEvents: 'none'
      }}
    />
  );
};

export default HyperspeedBackground;
