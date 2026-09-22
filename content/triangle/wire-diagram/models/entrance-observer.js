// WHY: camera / fixture silhouettes are product-specific. Jetson Orin Nano uses the wire-diagram builtin.
// WHAT: register host models on the Entrance Observer widget via createWiringDiagram({ models }).
import { addMesh, addUsbC, USB_C_MM } from '../wire-diagram.js';

function buildCamera(THREE, component) {
  const group = new THREE.Group();
  const meshes = [];
  const [w, h, d] = component.dimensions;

  const body = addMesh(
    THREE,
    group,
    new THREE.BoxGeometry(w * 0.82, h, d),
    new THREE.MeshStandardMaterial({ color: '#1a1c20', roughness: 0.62, metalness: 0.18 }),
  );
  body.name = 'camera-body';
  meshes.push(body);

  const ringR = Math.min(h, d) * 0.28;
  const ring = addMesh(
    THREE,
    group,
    new THREE.CylinderGeometry(ringR, ringR * 1.08, w * 0.22, 24),
    new THREE.MeshStandardMaterial({ color: '#2f3238', roughness: 0.4, metalness: 0.45 }),
    [w / 2 - w * 0.08, 0, 0],
    [0, 0, Math.PI / 2],
  );
  ring.name = 'camera-cs-ring';
  meshes.push(ring);

  addUsbC(THREE, group, meshes, {
    position: [-w / 2 + USB_C_MM.depth / 2, 0, 0],
    facing: '-x',
    namePrefix: 'camera-usb',
  });

  const tripod = addMesh(
    THREE,
    group,
    new THREE.CylinderGeometry(2.2, 2.2, 4, 12),
    new THREE.MeshStandardMaterial({ color: '#9aa0a8', roughness: 0.3, metalness: 0.85 }),
    [0, -h / 2 - 1.6, 0],
  );
  tripod.name = 'camera-tripod';
  meshes.push(tripod);

  return { group, meshes };
}

function buildLens(THREE, component) {
  const group = new THREE.Group();
  const meshes = [];
  const [w, h, d] = component.dimensions;
  const radius = Math.min(h, d) / 2;

  const barrel = addMesh(
    THREE,
    group,
    new THREE.CylinderGeometry(radius * 0.88, radius * 0.92, w * 0.72, 24),
    new THREE.MeshStandardMaterial({ color: '#15171b', roughness: 0.48, metalness: 0.35 }),
    [0, 0, 0],
    [0, 0, Math.PI / 2],
  );
  barrel.name = 'lens-barrel';
  meshes.push(barrel);

  const ring = addMesh(
    THREE,
    group,
    new THREE.CylinderGeometry(radius * 1.02, radius * 1.02, w * 0.14, 24),
    new THREE.MeshStandardMaterial({ color: '#2a2d33', roughness: 0.42, metalness: 0.4 }),
    [w * 0.08, 0, 0],
    [0, 0, Math.PI / 2],
  );
  ring.name = 'lens-ring';
  meshes.push(ring);

  const glass = addMesh(
    THREE,
    group,
    new THREE.CylinderGeometry(radius * 0.72, radius * 0.72, 1.4, 24),
    new THREE.MeshStandardMaterial({
      color: '#7ea4c9',
      roughness: 0.08,
      metalness: 0.2,
      emissive: '#1a3350',
      emissiveIntensity: 0.2,
    }),
    [w / 2 - 0.8, 0, 0],
    [0, 0, Math.PI / 2],
  );
  glass.name = 'lens-glass';
  meshes.push(glass);

  return { group, meshes };
}

function buildSsd(THREE, component) {
  const group = new THREE.Group();
  const meshes = [];
  const [w, h, d] = component.dimensions;

  const body = addMesh(
    THREE,
    group,
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshStandardMaterial({ color: '#1c1f24', roughness: 0.55, metalness: 0.2 }),
  );
  body.name = 'ssd-body';
  meshes.push(body);

  const gold = addMesh(
    THREE,
    group,
    new THREE.BoxGeometry(Math.min(w * 0.12, 8), h * 1.15, d * 0.92),
    new THREE.MeshStandardMaterial({ color: '#d4af37', roughness: 0.28, metalness: 0.9 }),
    [-w / 2 + Math.min(w * 0.06, 4), 0, 0],
  );
  gold.name = 'ssd-gold';
  meshes.push(gold);

  const label = addMesh(
    THREE,
    group,
    new THREE.BoxGeometry(w * 0.42, 0.2, d * 0.5),
    new THREE.MeshStandardMaterial({ color: '#ececec', roughness: 0.85, metalness: 0 }),
    [w * 0.08, h / 2 + 0.12, 0],
  );
  label.name = 'ssd-label';
  meshes.push(label);

  return { group, meshes };
}

function buildWifi(THREE, component) {
  const group = new THREE.Group();
  const meshes = [];
  const [w, h, d] = component.dimensions;

  const pcb = addMesh(
    THREE,
    group,
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshStandardMaterial({ color: '#1f6b42', roughness: 0.55, metalness: 0.1 }),
  );
  pcb.name = 'wifi-pcb';
  meshes.push(pcb);

  const shield = addMesh(
    THREE,
    group,
    new THREE.BoxGeometry(w * 0.48, Math.max(h * 1.8, 1.6), d * 0.55),
    new THREE.MeshStandardMaterial({ color: '#b8bcc4', roughness: 0.28, metalness: 0.9 }),
    [w * 0.08, h / 2 + 0.6, 0],
  );
  shield.name = 'wifi-shield';
  meshes.push(shield);

  for (const z of [-d * 0.22, d * 0.22]) {
    const ipex = addMesh(
      THREE,
      group,
      new THREE.CylinderGeometry(1.1, 1.1, 2.4, 10),
      new THREE.MeshStandardMaterial({ color: '#d7c089', roughness: 0.3, metalness: 0.85 }),
      [w / 2 - 1.4, h / 2 + 1.4, z],
    );
    ipex.name = 'wifi-ipex';
    meshes.push(ipex);
  }

  return { group, meshes };
}

function buildDisplay(THREE, component) {
  const group = new THREE.Group();
  const meshes = [];
  const [w, h, d] = component.dimensions;

  const bezel = addMesh(
    THREE,
    group,
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshStandardMaterial({ color: '#16181c', roughness: 0.6, metalness: 0.15 }),
  );
  bezel.name = 'display-bezel';
  meshes.push(bezel);

  const screenT = Math.max(d * 0.28, 1.2);
  const screen = addMesh(
    THREE,
    group,
    new THREE.BoxGeometry(w * 0.9, h * 0.86, screenT),
    new THREE.MeshStandardMaterial({
      color: '#2b4c78',
      roughness: 0.18,
      metalness: 0.12,
      emissive: '#163152',
      emissiveIntensity: 0.35,
    }),
    [0, 0, d / 2 - screenT * 0.35],
  );
  screen.name = 'display-screen';
  meshes.push(screen);

  const hdmi = addMesh(
    THREE,
    group,
    new THREE.BoxGeometry(8, 3.2, Math.min(d, 8)),
    new THREE.MeshStandardMaterial({ color: '#8d6e2f', roughness: 0.4, metalness: 0.55 }),
    [-w / 2 + 4, -h / 2 + 4, 0],
  );
  hdmi.name = 'display-hdmi';
  meshes.push(hdmi);

  return { group, meshes };
}

function buildMount(THREE, component) {
  const group = new THREE.Group();
  const meshes = [];
  const [w, h, d] = component.dimensions;

  const base = addMesh(
    THREE,
    group,
    new THREE.BoxGeometry(w, Math.max(h * 0.18, 3), d),
    new THREE.MeshStandardMaterial({ color: '#8a9098', roughness: 0.4, metalness: 0.7 }),
    [0, -h / 2 + 1.6, 0],
  );
  base.name = 'mount-base';
  meshes.push(base);

  const arm = addMesh(
    THREE,
    group,
    new THREE.BoxGeometry(Math.max(w * 0.22, 6), h * 0.85, Math.max(d * 0.22, 6)),
    new THREE.MeshStandardMaterial({ color: '#6f757c', roughness: 0.42, metalness: 0.68 }),
    [0, 0, 0],
  );
  arm.name = 'mount-arm';
  meshes.push(arm);

  const screw = addMesh(
    THREE,
    group,
    new THREE.CylinderGeometry(2, 2, Math.max(h * 0.35, 8), 12),
    new THREE.MeshStandardMaterial({ color: '#d0d4da', roughness: 0.28, metalness: 0.88 }),
    [0, h / 2 - 1, 0],
  );
  screw.name = 'mount-screw';
  meshes.push(screw);

  return { group, meshes };
}

function buildExtrusion(THREE, component) {
  const group = new THREE.Group();
  const meshes = [];
  const [w, h, d] = component.dimensions;

  const body = addMesh(
    THREE,
    group,
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshStandardMaterial({ color: '#2a2d32', roughness: 0.45, metalness: 0.55 }),
  );
  body.name = 'extrusion-body';
  meshes.push(body);

  const groove = addMesh(
    THREE,
    group,
    new THREE.BoxGeometry(w * 0.98, Math.max(h * 0.22, 3), Math.max(d * 0.28, 4)),
    new THREE.MeshStandardMaterial({ color: '#15171a', roughness: 0.55, metalness: 0.4 }),
    [0, h / 2 - Math.max(h * 0.08, 1.2), 0],
  );
  groove.name = 'extrusion-groove';
  meshes.push(groove);

  return { group, meshes };
}

function buildCover(THREE, component) {
  const group = new THREE.Group();
  const meshes = [];
  const [w, h, d] = component.dimensions;

  const sheet = addMesh(
    THREE,
    group,
    new THREE.BoxGeometry(Math.max(w, 1.2), h, d),
    new THREE.MeshStandardMaterial({
      color: '#c5d8e8',
      roughness: 0.12,
      metalness: 0.05,
      transparent: true,
      opacity: 0.42,
    }),
  );
  sheet.name = 'cover-sheet';
  meshes.push(sheet);

  return { group, meshes };
}

function buildAntenna(THREE, component) {
  const group = new THREE.Group();
  const meshes = [];
  const [w, h, d] = component.dimensions;

  const paddle = addMesh(
    THREE,
    group,
    new THREE.BoxGeometry(Math.max(w * 0.35, 4), h * 0.72, Math.max(d * 0.55, 8)),
    new THREE.MeshStandardMaterial({ color: '#1f2126', roughness: 0.55, metalness: 0.2 }),
    [0, h * 0.08, 0],
  );
  paddle.name = 'antenna-paddle';
  meshes.push(paddle);

  const coax = addMesh(
    THREE,
    group,
    new THREE.CylinderGeometry(1.1, 1.1, h * 0.45, 10),
    new THREE.MeshStandardMaterial({ color: '#22262c', roughness: 0.5, metalness: 0.15 }),
    [0, -h / 2 + h * 0.18, 0],
  );
  coax.name = 'antenna-coax';
  meshes.push(coax);

  return { group, meshes };
}

export const entranceObserverModels = [
  { kind: 'camera', build: buildCamera },
  { kind: 'lens', build: buildLens },
  { kind: 'ssd', build: buildSsd },
  { kind: 'wifi', build: buildWifi },
  { kind: 'display', build: buildDisplay },
  { kind: 'mount', build: buildMount },
  { kind: 'extrusion', build: buildExtrusion },
  { kind: 'cover', build: buildCover },
  { kind: 'antenna', build: buildAntenna },
];
