import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Lanyard3D() {
  const containerRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Canvas size
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 530;

    // Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(3, 5, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const redRimLight = new THREE.PointLight(0x4A74A7, 3.8, 12);
    redRimLight.position.set(-3, -1, 3);
    scene.add(redRimLight);

    const bottomGlow = new THREE.PointLight(0x142A44, 2.5, 8);
    bottomGlow.position.set(0, -3, 2);
    scene.add(bottomGlow);

    // ==========================================
    // 1. LOAD HIGH-RESOLUTION CARD TEXTURES
    // ==========================================
    const textureLoader = new THREE.TextureLoader();
    
    const frontTexture = textureLoader.load('/images/id-card-front.png', () => {
      renderer.render(scene, camera);
    });
    frontTexture.colorSpace = THREE.SRGBColorSpace;
    frontTexture.minFilter = THREE.LinearFilter;
    frontTexture.generateMipmaps = true;

    const backTexture = textureLoader.load('/images/id-card-back.png', () => {
      renderer.render(scene, camera);
    });
    backTexture.colorSpace = THREE.SRGBColorSpace;
    backTexture.minFilter = THREE.LinearFilter;
    backTexture.generateMipmaps = true;

    // ==========================================
    // 2. CREATE 3D BADGE MESH WITH HARDWARE CLAMP
    // ==========================================
    const cardW = 2.2;
    const cardH = 3.3;
    const cardThick = 0.04;

    const cardGroup = new THREE.Group();

    // Core Frame (Deep Galaxy Blue Metallic Bezel)
    const frameGeo = new THREE.BoxGeometry(cardW, cardH, cardThick);
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x142A44,
      metalness: 0.85,
      roughness: 0.2,
    });
    const frameMesh = new THREE.Mesh(frameGeo, frameMat);
    frameMesh.castShadow = true;
    frameMesh.receiveShadow = true;
    cardGroup.add(frameMesh);

    // Front Face (Sitting proud of front face at +0.021)
    const faceGeo = new THREE.PlaneGeometry(cardW - 0.02, cardH - 0.02);
    const frontMat = new THREE.MeshStandardMaterial({
      map: frontTexture,
      roughness: 0.35,
      metalness: 0.15,
      side: THREE.FrontSide,
    });
    const frontMesh = new THREE.Mesh(faceGeo, frontMat);
    frontMesh.position.z = cardThick / 2 + 0.002;
    cardGroup.add(frontMesh);

    // Back Face (Sitting behind at -0.021, rotated 180 deg)
    const backMat = new THREE.MeshStandardMaterial({
      map: backTexture,
      roughness: 0.35,
      metalness: 0.15,
      side: THREE.FrontSide,
    });
    const backMesh = new THREE.Mesh(faceGeo, backMat);
    backMesh.position.z = -(cardThick / 2 + 0.002);
    backMesh.rotation.y = Math.PI;
    cardGroup.add(backMesh);

    // Metallic Swivel Clasp Hardware at Top of Card
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0xe4e4e7,
      metalness: 0.95,
      roughness: 0.18,
    });

    // Metallic Eyelet on Card Top
    const eyeletGeo = new THREE.TorusGeometry(0.09, 0.025, 16, 24);
    const eyeletMesh = new THREE.Mesh(eyeletGeo, metalMat);
    eyeletMesh.position.set(0, cardH / 2 - 0.04, 0);
    cardGroup.add(eyeletMesh);

    // Snap Clip / Lobster Claw Hook
    const hookGeo = new THREE.TorusGeometry(0.12, 0.032, 16, 24, Math.PI * 1.5);
    const hookMesh = new THREE.Mesh(hookGeo, metalMat);
    hookMesh.rotation.z = Math.PI * 0.25;
    hookMesh.position.set(0, cardH / 2 + 0.09, 0);
    cardGroup.add(hookMesh);

    // Swivel Barrel
    const barrelGeo = new THREE.CylinderGeometry(0.065, 0.065, 0.18, 16);
    const barrelMesh = new THREE.Mesh(barrelGeo, metalMat);
    barrelMesh.position.set(0, cardH / 2 + 0.23, 0);
    cardGroup.add(barrelMesh);

    // Strap Loop Ring (where ribbon fabric attaches)
    const strapLoopGeo = new THREE.BoxGeometry(0.36, 0.05, 0.06);
    const strapLoopMesh = new THREE.Mesh(strapLoopGeo, metalMat);
    strapLoopMesh.position.set(0, cardH / 2 + 0.33, 0);
    cardGroup.add(strapLoopMesh);

    // Ribbon Fabric Crimp Hardware (Clamps the folded lanyard strap to the loop)
    const crimpGeo = new THREE.BoxGeometry(0.38, 0.14, 0.08);
    const crimpMesh = new THREE.Mesh(crimpGeo, metalMat);
    crimpMesh.position.set(0, cardH / 2 + 0.39, 0);
    cardGroup.add(crimpMesh);

    // Anchor Marker Object - 100% attached to cardGroup at the crimp
    const strapAnchor = new THREE.Object3D();
    strapAnchor.position.set(0, cardH / 2 + 0.40, 0);
    cardGroup.add(strapAnchor);

    // Initial position
    cardGroup.position.set(0, -0.4, 0);
    scene.add(cardGroup);

    // ==========================================
    // 3. WOVEN RIBBON LANYARD (MATCHING ALFARI REFERENCE)
    // ==========================================
    const strapTexture = textureLoader.load('/images/bandd.webp');
    strapTexture.wrapS = THREE.RepeatWrapping;
    strapTexture.wrapT = THREE.RepeatWrapping;
    strapTexture.repeat.set(1, 12);

    const strapMat = new THREE.MeshStandardMaterial({
      map: strapTexture,
      color: 0x4A74A7,
      roughness: 0.55,
      metalness: 0.25,
      side: THREE.DoubleSide,
    });

    // Top neck anchors (Left and Right extending naturally beyond canvas)
    const neckLeft = new THREE.Vector3(-0.45, 3.8, -0.2);
    const neckRight = new THREE.Vector3(0.45, 3.8, -0.2);

    let leftStrapMesh = null;
    let rightStrapMesh = null;

    function updateLanyardStraps() {
      // 1. Force update world matrix to guarantee exact 3D position
      cardGroup.updateMatrixWorld(true);
      const hookWorldPos = new THREE.Vector3();
      strapAnchor.getWorldPosition(hookWorldPos);

      // Clean up previous meshes
      if (leftStrapMesh) {
        scene.remove(leftStrapMesh);
        leftStrapMesh.geometry.dispose();
      }
      if (rightStrapMesh) {
        scene.remove(rightStrapMesh);
        rightStrapMesh.geometry.dispose();
      }

      // Natural catenary mid-point for Left Strap
      const midLeft = new THREE.Vector3(
        (neckLeft.x + hookWorldPos.x) * 0.5 - 0.05,
        (neckLeft.y + hookWorldPos.y) * 0.5 - 0.12,
        (neckLeft.z + hookWorldPos.z) * 0.5 + 0.1
      );
      const curveLeft = new THREE.QuadraticBezierCurve3(neckLeft, midLeft, hookWorldPos);
      const geoLeft = new THREE.TubeGeometry(curveLeft, 20, 0.045, 8, false);
      leftStrapMesh = new THREE.Mesh(geoLeft, strapMat);
      scene.add(leftStrapMesh);

      // Natural catenary mid-point for Right Strap
      const midRight = new THREE.Vector3(
        (neckRight.x + hookWorldPos.x) * 0.5 + 0.05,
        (neckRight.y + hookWorldPos.y) * 0.5 - 0.12,
        (neckRight.z + hookWorldPos.z) * 0.5 + 0.1
      );
      const curveRight = new THREE.QuadraticBezierCurve3(neckRight, midRight, hookWorldPos);
      const geoRight = new THREE.TubeGeometry(curveRight, 20, 0.045, 8, false);
      rightStrapMesh = new THREE.Mesh(geoRight, strapMat);
      scene.add(rightStrapMesh);
    }

    updateLanyardStraps();

    // ==========================================
    // 4. INTERACTION & PENDULUM DAMPING PHYSICS
    // ==========================================
    let isDragging = false;
    let targetX = 0;
    let targetY = -0.4;
    let currentX = 0;
    let currentY = -0.4;
    let velX = 0;
    let velY = 0;

    let rotX = 0;
    let rotY = 0;
    let rotZ = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let targetRotZ = 0;

    const onPointerDown = (e) => {
      isDragging = true;
      setIsInteracting(true);
      container.style.cursor = 'grabbing';
      onPointerMove(e);
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      // Move card within bounds
      targetX = Math.max(-1.8, Math.min(1.8, mouseX * 2.8));
      targetY = Math.max(-1.5, Math.min(0.5, mouseY * 2.2 - 0.4));

      // Dynamic tilt based on displacement
      targetRotZ = -targetX * 0.35;
      targetRotY = targetX * 0.45;
      targetRotX = (targetY + 0.4) * 0.35;
    };

    const onPointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
      container.style.cursor = 'grab';
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // ==========================================
    // 5. ANIMATION LOOP WITH OSCILLATING PENDULUM
    // ==========================================
    let reqId;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      if (!isDragging) {
        // Natural idle breathing swing
        const idleSwingX = Math.sin(time * 1.5) * 0.12;
        const idleSwingY = -0.4 + Math.cos(time * 2.0) * 0.04;
        const idleRotY = Math.sin(time * 1.2) * 0.18;
        const idleRotZ = Math.cos(time * 1.5) * 0.08;

        targetX = idleSwingX;
        targetY = idleSwingY;
        targetRotX = 0;
        targetRotY = idleRotY;
        targetRotZ = idleRotZ;
      }

      // Spring physics
      const spring = 0.085;
      const damping = 0.88;

      const forceX = (targetX - currentX) * spring;
      const forceY = (targetY - currentY) * spring;

      velX = (velX + forceX) * damping;
      velY = (velY + forceY) * damping;

      currentX += velX;
      currentY += velY;

      cardGroup.position.x = currentX;
      cardGroup.position.y = currentY;

      // Angular smoothing
      rotX += (targetRotX - rotX) * 0.1;
      rotY += (targetRotY - rotY) * 0.1;
      rotZ += (targetRotZ - rotZ) * 0.1;

      cardGroup.rotation.x = rotX;
      cardGroup.rotation.y = rotY;
      cardGroup.rotation.z = rotZ;

      updateLanyardStraps();
      renderer.render(scene, camera);
    };

    animate();

    // Responsive Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto h-[480px] sm:h-[530px] flex flex-col items-center justify-center">
      {/* 3D Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing select-none touch-none"
        title="Klik dan geser untuk mengayunkan ID Card 3D"
      />

      {/* Floating Action Pill */}
      <div className="absolute bottom-2 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#081426]/85 backdrop-blur-md border border-[#4A74A7]/40 text-[11px] text-[#DCEAF7] pointer-events-none shadow-lg font-heading">
        <span className="w-2 h-2 rounded-full bg-[#4A74A7] animate-ping" />
        <span>Tarik / ayunkan ID Card 3D dengan mouse</span>
      </div>
    </div>
  );
}
