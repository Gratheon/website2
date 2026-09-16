const qe = 2.54, Xe = 19, Ze = 1.6, Je = 8.4, Qe = 0.2, He = 1.2, Te = 0.64;
function oe() {
  return -45.72 / 2;
}
function re(e) {
  const o = Math.max(0, Math.min(18, e));
  return oe() + o * 2.54;
}
function me(e) {
  return Math.max(
    0,
    Math.min(18, Math.round((e - oe()) / 2.54))
  );
}
function ae(e, o) {
  const s = e / 2 - 1.27;
  return o === "left" ? s : -s;
}
function pe() {
  return 1.6 / 2 - 0.2 + 8.4;
}
function ie() {
  return pe() + 1.2;
}
function Me(e) {
  const o = e.lastIndexOf(".");
  return o <= 0 || o === e.length - 1 ? null : { componentId: e.slice(0, o), pinId: e.slice(o + 1) };
}
function fe(e, o, s) {
  for (const n of o.pins) {
    const { index: t, count: r } = q(o, n), a = ce(e, o, n, t, r);
    s.set(`${o.id}.${n.id}`, a);
  }
}
function Z(e, o, s, n) {
  if (o.position) return o.position;
  if (e.kind === "esp32")
    return [
      re(s),
      ie(),
      ae(e.dimensions[2], o.side)
    ];
  const [t, r, a] = e.dimensions, c = o.side === "left" ? -t / 2 : t / 2, i = s + 1, l = Math.max(n, 1) + 1, m = a * (i / l - 0.5), p = r * 0.08;
  return [c, p, m];
}
function we(e, o) {
  const { index: s, count: n } = q(e, o);
  return Z(e, o, s, n);
}
function ce(e, o, s, n, t) {
  const r = Z(o, s, n, t), [a, c, i] = o.position;
  return new e.Vector3(a + r[0], c + r[1], i + r[2]);
}
function ge(e) {
  const o = [], s = [];
  for (const n of e.pins)
    n.side === "left" ? o.push(n) : s.push(n);
  return { left: o, right: s };
}
function q(e, o) {
  const s = ge(e), n = o.side === "left" ? s.left : s.right, t = n.findIndex((r) => r.id === o.id);
  return { index: Math.max(t, 0), count: n.length };
}
function le(e, o, s = "#888888") {
  try {
    return new e.Color(o);
  } catch {
    return new e.Color(s);
  }
}
function ye(e) {
  const o = e.material;
  return Array.isArray(o) ? o.filter((s) => !!s) : o ? [o] : [];
}
function ee(e) {
  const o = [], s = [], n = [];
  for (const t of e)
    for (const r of ye(t))
      o.push(r), s.push(r.emissiveIntensity ?? 0), n.push(r.color.clone());
  return { materials: o, baseEmissive: s, baseColor: n };
}
function Se(e, o, s = "#f5f5f5") {
  const n = document.createElement("canvas"), t = n.getContext("2d");
  if (!t) throw new Error("2D canvas unavailable");
  const r = 28;
  t.font = `600 ${r}px system-ui, sans-serif`;
  const a = t.measureText(o), c = 16, i = 10;
  n.width = Math.ceil(a.width + c * 2), n.height = r + i * 2, t.font = `600 ${r}px system-ui, sans-serif`, t.fillStyle = "rgba(12, 14, 18, 0.82)";
  const l = 8, m = n.width, p = n.height;
  t.beginPath(), t.moveTo(l, 0), t.lineTo(m - l, 0), t.quadraticCurveTo(m, 0, m, l), t.lineTo(m, p - l), t.quadraticCurveTo(m, p, m - l, p), t.lineTo(l, p), t.quadraticCurveTo(0, p, 0, p - l), t.lineTo(0, l), t.quadraticCurveTo(0, 0, l, 0), t.closePath(), t.fill(), t.fillStyle = s, t.textBaseline = "middle", t.fillText(o, c, p / 2);
  const u = new e.CanvasTexture(n);
  u.colorSpace = e.SRGBColorSpace;
  const g = new e.SpriteMaterial({ map: u, transparent: !0, depthTest: !1 }), M = new e.Sprite(g), b = n.width / 18;
  return M.scale.set(b, n.height / n.width * b, 1), M.renderOrder = 10, M;
}
function d(e, o, s, n, t, r) {
  const a = new e.Mesh(s, n);
  return a.castShadow = !0, a.receiveShadow = !0, t && a.position.set(t[0], t[1], t[2]), r && a.rotation.set(r[0], r[1], r[2]), o.add(a), a;
}
function be(e, o) {
  const s = new e.Group(), n = [], [t, r, a] = o.dimensions, c = o.color ? le(e, o.color) : new e.Color("#1f6b42"), i = d(
    e,
    s,
    new e.BoxGeometry(t, r * 0.12, a),
    new e.MeshStandardMaterial({
      color: c,
      roughness: 0.55,
      metalness: 0.08
    }),
    [0, 0, 0]
  );
  n.push(i);
  const l = d(
    e,
    s,
    new e.BoxGeometry(t * 0.55, 0.15, a * 0.35),
    new e.MeshStandardMaterial({ color: "#ececec", roughness: 0.85, metalness: 0 }),
    [0, r * 0.07, 0]
  );
  return n.push(l), { group: s, meshes: n };
}
function ne(e, o) {
  return `${e}:${o}`;
}
function xe(e, o) {
  const s = new e.Group(), n = [], [t, , r] = o.dimensions, a = 1.6 / 2, c = ie(), i = -a - 0.5, l = c - i, m = (c + i) / 2, p = d(
    e,
    s,
    new e.BoxGeometry(t, 1.6, r),
    new e.MeshStandardMaterial({ color: "#0f2d1d", roughness: 0.62, metalness: 0.12 })
  );
  p.name = "esp32-pcb", n.push(p);
  const u = 3.1, g = d(
    e,
    s,
    new e.BoxGeometry(Math.min(t * 0.42, 18), u, Math.min(r * 0.58, 16)),
    new e.MeshStandardMaterial({ color: "#b8bcc4", roughness: 0.28, metalness: 0.92 }),
    [t * 0.06, a + u / 2 - 0.2, 0]
  );
  g.name = "esp32-shield", n.push(g);
  const M = [7.5, 3.2, 8], b = d(
    e,
    s,
    new e.BoxGeometry(M[0], M[1], M[2]),
    new e.MeshStandardMaterial({ color: "#c5c8ce", roughness: 0.35, metalness: 0.85 }),
    [-t / 2 + M[0] / 2, a + M[1] / 2 - 0.2, 0]
  );
  b.name = "esp32-usb", n.push(b);
  const y = 0.3, D = d(
    e,
    s,
    new e.BoxGeometry(t * 0.12, y, r * 0.42),
    new e.MeshStandardMaterial({ color: "#d4af37", roughness: 0.45, metalness: 0.75 }),
    [t / 2 - t * 0.08, a + y / 2 - 0.08, 0]
  );
  D.name = "esp32-antenna", n.push(D);
  const L = 19 * 2.54, A = a - 0.2 + 8.4 / 2, v = new e.MeshStandardMaterial({ color: "#151515", roughness: 0.72, metalness: 0.04 }), $ = new e.MeshStandardMaterial({ color: "#d7c089", roughness: 0.28, metalness: 0.92 }), I = /* @__PURE__ */ new Map();
  for (const C of o.pins) {
    const B = we(o, C), G = C.position ? me(B[0]) : q(o, C).index;
    I.set(ne(C.side, G), C);
  }
  for (const C of ["left", "right"]) {
    const B = ae(r, C), G = d(
      e,
      s,
      new e.BoxGeometry(L, 8.4, 2.54),
      v,
      [0, A, B]
    );
    G.name = `esp32-header-housing:${C}`, n.push(G);
    for (let j = 0; j < 19; j += 1) {
      const O = I.get(ne(C, j)), X = re(j), V = d(
        e,
        s,
        new e.BoxGeometry(0.64, l, 0.64),
        $,
        [X, m, B]
      );
      V.name = O ? `esp32-header-pin:${O.id}` : `esp32-header-pin:${C}:${j}`, V.userData = { kind: "esp32-header-pin", pinId: O?.id, side: C, index: j }, n.push(V);
    }
  }
  return { group: s, meshes: n };
}
function _e(e, o) {
  const s = new e.Group(), n = [], [t, r, a] = o.dimensions, c = d(
    e,
    s,
    new e.BoxGeometry(t, r * 0.08, a),
    new e.MeshStandardMaterial({ color: "#1f7a3a", roughness: 0.58, metalness: 0.1 })
  );
  n.push(c);
  const i = d(
    e,
    s,
    new e.BoxGeometry(t * 0.28, r * 0.07, a * 0.38),
    new e.MeshStandardMaterial({ color: "#101010", roughness: 0.35, metalness: 0.25 }),
    [0, r * 0.08, 0]
  );
  n.push(i);
  for (let l = 0; l < 2; l += 1) {
    const m = d(
      e,
      s,
      new e.BoxGeometry(t * 0.12, r * 0.14, a * 0.18),
      new e.MeshStandardMaterial({ color: "#1a1a1a", roughness: 0.55, metalness: 0.35 }),
      [(l === 0 ? -1 : 1) * t * 0.28, r * 0.06, 0]
    );
    n.push(m);
    const p = d(
      e,
      s,
      new e.CylinderGeometry(t * 0.025, t * 0.025, r * 0.03, 16),
      new e.MeshStandardMaterial({ color: "#9aa0a6", roughness: 0.25, metalness: 0.9 }),
      [(l === 0 ? -1 : 1) * t * 0.28, r * 0.14, 0]
    );
    n.push(p);
  }
  return { group: s, meshes: n };
}
function Ge(e, o) {
  const s = new e.Group(), n = [], [t, r, a] = o.dimensions, c = new e.MeshStandardMaterial({
    color: "#c5ccd3",
    roughness: 0.28,
    metalness: 0.85
  }), i = t * 0.28, l = Math.max(t - i * 2, t * 0.3), m = r * 0.22, p = a * 0.22, u = Math.min(r, a) * 0.22;
  for (const y of [-1, 1]) {
    const D = d(
      e,
      s,
      new e.BoxGeometry(i, r, a),
      c,
      [y * (t / 2 - i / 2), 0, 0]
    );
    D.name = y < 0 ? "load-cell-end-neg" : "load-cell-end-pos", n.push(D);
    const L = d(
      e,
      s,
      new e.CylinderGeometry(u, u, r * 1.08, 20),
      new e.MeshStandardMaterial({ color: "#1a1d22", roughness: 0.82, metalness: 0.08 }),
      [y * (t / 2 - i * 0.45), 0, 0]
    );
    L.name = "load-cell-hole", n.push(L);
  }
  for (const y of [-1, 1]) {
    const D = d(
      e,
      s,
      new e.BoxGeometry(l, m, a),
      c,
      [0, y * (r / 2 - m / 2), 0]
    );
    D.name = y > 0 ? "load-cell-flange-top" : "load-cell-flange-bottom", n.push(D);
  }
  const g = d(
    e,
    s,
    new e.BoxGeometry(l * 0.55, Math.max(r - m * 2, r * 0.2), p),
    c
  );
  g.name = "load-cell-web", n.push(g);
  const M = d(
    e,
    s,
    new e.BoxGeometry(l * 0.28, 0.4, a * 0.55),
    new e.MeshStandardMaterial({ color: "#141414", roughness: 0.7, metalness: 0.05 }),
    [0, r / 2 + 0.15, 0]
  );
  M.name = "load-cell-gauge", n.push(M);
  const b = d(
    e,
    s,
    new e.CylinderGeometry(1.1, 1.1, 12, 12),
    new e.MeshStandardMaterial({ color: "#222222", roughness: 0.75, metalness: 0.05 }),
    [-t * 0.08, 0, a / 2 + 6],
    [Math.PI / 2, 0, 0]
  );
  return b.name = "load-cell-cable", n.push(b), { group: s, meshes: n };
}
function Pe(e, o) {
  const s = new e.Group(), n = [], [t, r, a] = o.dimensions, c = t, i = Math.min(r, a) / 2, l = c * 0.16, m = c - l, p = [0, 0, Math.PI / 2], u = new e.MeshStandardMaterial({ color: "#9aa3ad", roughness: 0.18, metalness: 0.96 }), g = d(
    e,
    s,
    new e.CylinderGeometry(i * 1.04, i * 1.04, l, 24),
    new e.MeshStandardMaterial({ color: "#141414", roughness: 0.82, metalness: 0.08 }),
    [-c / 2 + l / 2, 0, 0],
    p
  );
  g.name = "probe-shrink", n.push(g);
  const M = d(
    e,
    s,
    new e.CylinderGeometry(i, i, m, 28),
    u,
    [-c / 2 + l + m / 2, 0, 0],
    p
  );
  return M.name = "probe-shaft", n.push(M), { group: s, meshes: n };
}
function Ce(e, o) {
  const s = new e.Group(), n = [], [t, r, a] = o.dimensions, c = Math.max(t, a), i = Math.min(t, a) * 0.35, l = d(
    e,
    s,
    new e.CylinderGeometry(i, i, c, 24),
    new e.MeshStandardMaterial({ color: "#d8cbb8", roughness: 0.72, metalness: 0.05 }),
    [0, 0, 0],
    [0, 0, Math.PI / 2]
  );
  if (n.push(l), Ye(o, "4.7 kΩ")) {
    const m = ["#f1c40f", "#7d3c98", "#c0392b", "#d4a017"];
    for (let p = 0; p < m.length; p += 1) {
      const u = d(
        e,
        s,
        new e.CylinderGeometry(i * 1.02, i * 1.02, c * 0.07, 24),
        new e.MeshStandardMaterial({ color: m[p], roughness: 0.6, metalness: 0.1 }),
        [c * (-0.24 + p * 0.16), 0, 0],
        [0, 0, Math.PI / 2]
      );
      u.name = `resistor-band-${p}`, n.push(u);
    }
  }
  for (const m of [-1, 1]) {
    const p = d(
      e,
      s,
      new e.CylinderGeometry(i * 0.12, i * 0.12, c * 0.45, 12),
      new e.MeshStandardMaterial({ color: "#b0b4ba", roughness: 0.25, metalness: 0.9 }),
      [m * c * 0.62, 0, 0],
      [0, 0, Math.PI / 2]
    );
    n.push(p);
  }
  return { group: s, meshes: n };
}
function ve(e, o) {
  const s = new e.Group(), n = [], [t, r, a] = o.dimensions, c = d(
    e,
    s,
    new e.BoxGeometry(t, r, a),
    new e.MeshStandardMaterial({ color: "#20242b", roughness: 0.68, metalness: 0.12 })
  );
  c.name = "power-housing", n.push(c);
  const i = Math.max(r * 0.1, 1.4), l = i * 0.4, m = d(
    e,
    s,
    new e.BoxGeometry(t * 0.78, i, a * 0.72),
    new e.MeshStandardMaterial({
      color: "#3d7be0",
      roughness: 0.45,
      metalness: 0.2,
      emissive: "#1a3f80",
      emissiveIntensity: 0.25,
      polygonOffset: !0,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    }),
    [0, r / 2 + i / 2 - l, 0]
  );
  m.name = "power-accent", m.receiveShadow = !1, n.push(m);
  const p = r / 2 + i - l, u = Math.max(r * 0.08, 1.1);
  for (let g = 0; g < 2; g += 1) {
    const M = d(
      e,
      s,
      new e.CylinderGeometry(t * 0.05, t * 0.05, u, 16),
      new e.MeshStandardMaterial({ color: "#d4af37", roughness: 0.3, metalness: 0.85 }),
      [(g === 0 ? -1 : 1) * t * 0.28, p + u / 2, 0]
    );
    M.name = "power-terminal", n.push(M);
  }
  return { group: s, meshes: n };
}
function Ie(e, o) {
  const s = new e.Group(), n = [], [t, r, a] = o.dimensions, c = Math.min(r * 0.12, 1.8), i = d(
    e,
    s,
    new e.BoxGeometry(t, c, a),
    new e.MeshStandardMaterial({ color: "#15233a", roughness: 0.58, metalness: 0.18 })
  );
  i.name = "jetson-pcb", n.push(i);
  const l = d(
    e,
    s,
    new e.BoxGeometry(t * 0.92, 0.35, 3.2),
    new e.MeshStandardMaterial({ color: "#76b900", roughness: 0.4, metalness: 0.2 }),
    [0, c / 2 + 0.2, -a / 2 + 4]
  );
  l.name = "jetson-stripe", n.push(l);
  const m = t * 0.52, p = Math.max(r - c - 2, 8), u = a * 0.48, g = d(
    e,
    s,
    new e.BoxGeometry(m, p * 0.35, u),
    new e.MeshStandardMaterial({ color: "#c5cdd6", roughness: 0.28, metalness: 0.86 }),
    [t * 0.04, c / 2 + p * 0.18, 0]
  );
  g.name = "jetson-heatsink", n.push(g);
  const M = 8, b = m * 0.9, y = p * 0.55, D = Math.max(u / (M * 2.4), 0.7);
  for (let G = 0; G < M; G += 1) {
    const j = -u / 2 + (G + 0.5) * (u / M), O = d(
      e,
      s,
      new e.BoxGeometry(b, y, D),
      new e.MeshStandardMaterial({ color: "#d7dee6", roughness: 0.32, metalness: 0.82 }),
      [t * 0.04, c / 2 + p * 0.35 + y / 2, j]
    );
    O.name = "jetson-fin", n.push(O);
  }
  const L = d(
    e,
    s,
    new e.CylinderGeometry(Math.min(m, u) * 0.22, Math.min(m, u) * 0.22, 2.2, 20),
    new e.MeshStandardMaterial({ color: "#1b1d22", roughness: 0.55, metalness: 0.3 }),
    [t * 0.04, c / 2 + p * 0.35 + y + 1.2, 0]
  );
  L.name = "jetson-fan", n.push(L);
  const A = 1.6, v = (G) => G, $ = d(
    e,
    s,
    new e.BoxGeometry(8.4, 3.2, 9),
    new e.MeshStandardMaterial({ color: "#c9cdd3", roughness: 0.35, metalness: 0.8 }),
    [-t / 2 + 4.2, A, v(28)]
  );
  $.name = "jetson-usbc", n.push($);
  const I = d(
    e,
    s,
    new e.BoxGeometry(12, 4.5, 14),
    new e.MeshStandardMaterial({ color: "#3a3d44", roughness: 0.45, metalness: 0.4 }),
    [-t / 2 + 6, A, v(10)]
  );
  I.name = "jetson-usba", n.push(I);
  const C = d(
    e,
    s,
    new e.BoxGeometry(10, 3.6, 14),
    new e.MeshStandardMaterial({ color: "#8d6e2f", roughness: 0.4, metalness: 0.55 }),
    [-t / 2 + 5, A, v(-8)]
  );
  C.name = "jetson-hdmi", n.push(C);
  const B = d(
    e,
    s,
    new e.BoxGeometry(14, 8, 16),
    new e.MeshStandardMaterial({ color: "#c9a227", roughness: 0.45, metalness: 0.35 }),
    [-t / 2 + 7, 3.2, v(-28)]
  );
  return B.name = "jetson-rj45", n.push(B), { group: s, meshes: n };
}
function Be(e, o) {
  const s = new e.Group(), n = [], [t, r, a] = o.dimensions, c = d(
    e,
    s,
    new e.BoxGeometry(t * 0.82, r, a),
    new e.MeshStandardMaterial({ color: "#1a1c20", roughness: 0.62, metalness: 0.18 })
  );
  c.name = "camera-body", n.push(c);
  const i = Math.min(r, a) * 0.28, l = d(
    e,
    s,
    new e.CylinderGeometry(i, i * 1.08, t * 0.22, 24),
    new e.MeshStandardMaterial({ color: "#2f3238", roughness: 0.4, metalness: 0.45 }),
    [t / 2 - t * 0.08, 0, 0],
    [0, 0, Math.PI / 2]
  );
  l.name = "camera-cs-ring", n.push(l);
  const m = d(
    e,
    s,
    new e.BoxGeometry(8, 3.2, 9),
    new e.MeshStandardMaterial({ color: "#c5c8ce", roughness: 0.35, metalness: 0.8 }),
    [-t / 2 + 3.5, 0, 0]
  );
  m.name = "camera-usb", n.push(m);
  const p = d(
    e,
    s,
    new e.CylinderGeometry(2.2, 2.2, 4, 12),
    new e.MeshStandardMaterial({ color: "#9aa0a8", roughness: 0.3, metalness: 0.85 }),
    [0, -r / 2 - 1.6, 0]
  );
  return p.name = "camera-tripod", n.push(p), { group: s, meshes: n };
}
function De(e, o) {
  const s = new e.Group(), n = [], [t, r, a] = o.dimensions, c = Math.min(r, a) / 2, i = d(
    e,
    s,
    new e.CylinderGeometry(c * 0.88, c * 0.92, t * 0.72, 24),
    new e.MeshStandardMaterial({ color: "#15171b", roughness: 0.48, metalness: 0.35 }),
    [0, 0, 0],
    [0, 0, Math.PI / 2]
  );
  i.name = "lens-barrel", n.push(i);
  const l = d(
    e,
    s,
    new e.CylinderGeometry(c * 1.02, c * 1.02, t * 0.14, 24),
    new e.MeshStandardMaterial({ color: "#2a2d33", roughness: 0.42, metalness: 0.4 }),
    [t * 0.08, 0, 0],
    [0, 0, Math.PI / 2]
  );
  l.name = "lens-ring", n.push(l);
  const m = d(
    e,
    s,
    new e.CylinderGeometry(c * 0.72, c * 0.72, 1.4, 24),
    new e.MeshStandardMaterial({
      color: "#7ea4c9",
      roughness: 0.08,
      metalness: 0.2,
      emissive: "#1a3350",
      emissiveIntensity: 0.2
    }),
    [t / 2 - 0.8, 0, 0],
    [0, 0, Math.PI / 2]
  );
  return m.name = "lens-glass", n.push(m), { group: s, meshes: n };
}
function Ae(e, o) {
  const s = new e.Group(), n = [], [t, r, a] = o.dimensions, c = d(
    e,
    s,
    new e.BoxGeometry(t, r, a),
    new e.MeshStandardMaterial({ color: "#1c1f24", roughness: 0.55, metalness: 0.2 })
  );
  c.name = "ssd-body", n.push(c);
  const i = d(
    e,
    s,
    new e.BoxGeometry(Math.min(t * 0.12, 8), r * 1.15, a * 0.92),
    new e.MeshStandardMaterial({ color: "#d4af37", roughness: 0.28, metalness: 0.9 }),
    [-t / 2 + Math.min(t * 0.06, 4), 0, 0]
  );
  i.name = "ssd-gold", n.push(i);
  const l = d(
    e,
    s,
    new e.BoxGeometry(t * 0.42, 0.2, a * 0.5),
    new e.MeshStandardMaterial({ color: "#ececec", roughness: 0.85, metalness: 0 }),
    [t * 0.08, r / 2 + 0.12, 0]
  );
  return l.name = "ssd-label", n.push(l), { group: s, meshes: n };
}
function Le(e, o) {
  const s = new e.Group(), n = [], [t, r, a] = o.dimensions, c = d(
    e,
    s,
    new e.BoxGeometry(t, r, a),
    new e.MeshStandardMaterial({ color: "#1f6b42", roughness: 0.55, metalness: 0.1 })
  );
  c.name = "wifi-pcb", n.push(c);
  const i = d(
    e,
    s,
    new e.BoxGeometry(t * 0.48, Math.max(r * 1.8, 1.6), a * 0.55),
    new e.MeshStandardMaterial({ color: "#b8bcc4", roughness: 0.28, metalness: 0.9 }),
    [t * 0.08, r / 2 + 0.6, 0]
  );
  i.name = "wifi-shield", n.push(i);
  for (const l of [-a * 0.22, a * 0.22]) {
    const m = d(
      e,
      s,
      new e.CylinderGeometry(1.1, 1.1, 2.4, 10),
      new e.MeshStandardMaterial({ color: "#d7c089", roughness: 0.3, metalness: 0.85 }),
      [t / 2 - 1.4, r / 2 + 1.4, l]
    );
    m.name = "wifi-ipex", n.push(m);
  }
  return { group: s, meshes: n };
}
function ke(e, o) {
  const s = new e.Group(), n = [], [t, r, a] = o.dimensions, c = d(
    e,
    s,
    new e.BoxGeometry(t, r, a),
    new e.MeshStandardMaterial({ color: "#16181c", roughness: 0.6, metalness: 0.15 })
  );
  c.name = "display-bezel", n.push(c);
  const i = Math.max(a * 0.28, 1.2), l = d(
    e,
    s,
    new e.BoxGeometry(t * 0.9, r * 0.86, i),
    new e.MeshStandardMaterial({
      color: "#2b4c78",
      roughness: 0.18,
      metalness: 0.12,
      emissive: "#163152",
      emissiveIntensity: 0.35
    }),
    [0, 0, a / 2 - i * 0.35]
  );
  l.name = "display-screen", n.push(l);
  const m = d(
    e,
    s,
    new e.BoxGeometry(8, 3.2, Math.min(a, 8)),
    new e.MeshStandardMaterial({ color: "#8d6e2f", roughness: 0.4, metalness: 0.55 }),
    [-t / 2 + 4, -r / 2 + 4, 0]
  );
  return m.name = "display-hdmi", n.push(m), { group: s, meshes: n };
}
function je(e, o) {
  const s = new e.Group(), n = [], [t, r, a] = o.dimensions, c = d(
    e,
    s,
    new e.BoxGeometry(t, Math.max(r * 0.18, 3), a),
    new e.MeshStandardMaterial({ color: "#8a9098", roughness: 0.4, metalness: 0.7 }),
    [0, -r / 2 + 1.6, 0]
  );
  c.name = "mount-base", n.push(c);
  const i = d(
    e,
    s,
    new e.BoxGeometry(Math.max(t * 0.22, 6), r * 0.85, Math.max(a * 0.22, 6)),
    new e.MeshStandardMaterial({ color: "#6f757c", roughness: 0.42, metalness: 0.68 }),
    [0, 0, 0]
  );
  i.name = "mount-arm", n.push(i);
  const l = d(
    e,
    s,
    new e.CylinderGeometry(2, 2, Math.max(r * 0.35, 8), 12),
    new e.MeshStandardMaterial({ color: "#d0d4da", roughness: 0.28, metalness: 0.88 }),
    [0, r / 2 - 1, 0]
  );
  return l.name = "mount-screw", n.push(l), { group: s, meshes: n };
}
function Ne(e, o) {
  const s = new e.Group(), n = [], [t, r, a] = o.dimensions, c = d(
    e,
    s,
    new e.BoxGeometry(t, r, a),
    new e.MeshStandardMaterial({ color: "#2a2d32", roughness: 0.45, metalness: 0.55 })
  );
  c.name = "extrusion-body", n.push(c);
  const i = d(
    e,
    s,
    new e.BoxGeometry(t * 0.98, Math.max(r * 0.22, 3), Math.max(a * 0.28, 4)),
    new e.MeshStandardMaterial({ color: "#15171a", roughness: 0.55, metalness: 0.4 }),
    [0, r / 2 - Math.max(r * 0.08, 1.2), 0]
  );
  return i.name = "extrusion-groove", n.push(i), { group: s, meshes: n };
}
function Oe(e, o) {
  const s = new e.Group(), n = [], [t, r, a] = o.dimensions, c = d(
    e,
    s,
    new e.BoxGeometry(Math.max(t, 1.2), r, a),
    new e.MeshStandardMaterial({
      color: "#c5d8e8",
      roughness: 0.12,
      metalness: 0.05,
      transparent: !0,
      opacity: 0.42
    })
  );
  return c.name = "cover-sheet", n.push(c), { group: s, meshes: n };
}
function ze(e, o) {
  const s = new e.Group(), n = [], [t, r, a] = o.dimensions, c = d(
    e,
    s,
    new e.BoxGeometry(Math.max(t * 0.35, 4), r * 0.72, Math.max(a * 0.55, 8)),
    new e.MeshStandardMaterial({ color: "#1f2126", roughness: 0.55, metalness: 0.2 }),
    [0, r * 0.08, 0]
  );
  c.name = "antenna-paddle", n.push(c);
  const i = d(
    e,
    s,
    new e.CylinderGeometry(1.1, 1.1, r * 0.45, 10),
    new e.MeshStandardMaterial({ color: "#22262c", roughness: 0.5, metalness: 0.15 }),
    [0, -r / 2 + r * 0.18, 0]
  );
  return i.name = "antenna-coax", n.push(i), { group: s, meshes: n };
}
function $e(e, o) {
  return {
    board: be,
    esp32: xe,
    hx711: _e,
    "load-cell": Ge,
    probe: Pe,
    resistor: Ce,
    power: ve,
    jetson: Ie,
    camera: Be,
    lens: De,
    ssd: Ae,
    wifi: Le,
    display: ke,
    mount: je,
    extrusion: Ne,
    cover: Oe,
    antenna: ze
  }[o.kind](e, o);
}
function Fe(e, o, s) {
  if (s.kind === "esp32") return [];
  const n = [], t = new e.MeshStandardMaterial({
    color: "#facc15",
    emissive: "#ca8a04",
    emissiveIntensity: 0.45,
    roughness: 0.35,
    metalness: 0.15
  });
  for (const r of s.pins) {
    const { index: a, count: c } = q(s, r), i = Z(s, r, a, c), l = d(
      e,
      o,
      new e.SphereGeometry(1.4, 14, 14),
      t,
      i
    );
    l.name = `pin-marker:${s.id}.${r.id}`, l.userData = { pinId: r.id, kind: "pin-marker" }, n.push(l);
  }
  return n;
}
function We(e) {
  let o = 0;
  for (const s of e.components) {
    const [, n] = s.position, t = s.dimensions[1] / 2;
    o = Math.min(o, n - t);
  }
  return o;
}
function Ke(e, o, s, n) {
  const t = s.distanceTo(n), r = s.clone().add(n).multiplyScalar(0.5);
  r.y += Math.max(t * 0.22, 8);
  const a = new e.CatmullRomCurve3([s.clone(), r, n.clone()]), c = (o.diameterMm ?? 1.6) / 2, i = Math.max(12, Math.ceil(t / 4)), l = new e.TubeGeometry(a, i, c, 10, !1), m = new e.MeshStandardMaterial({
    color: le(e, o.color, "#cccccc"),
    roughness: 0.45,
    metalness: 0.08
  }), p = new e.Mesh(l, m);
  return p.castShadow = !0, p.receiveShadow = !0, p;
}
function Ue(e) {
  const o = [];
  return e.traverse((s) => {
    s.isMesh && o.push(s);
  }), o;
}
function se(e, o) {
  if (!o.has(e)) {
    o.add(e), e.dispose();
    for (const s of Object.keys(e)) {
      const n = e[s];
      n && typeof n == "object" && "dispose" in n && typeof n.dispose == "function" && n.dispose();
    }
  }
}
function U(e, o = /* @__PURE__ */ new Set()) {
  e.traverse((s) => {
    const n = s;
    if (n.isMesh) {
      n.geometry?.dispose();
      const r = Array.isArray(n.material) ? n.material : [n.material];
      for (const a of r)
        a && se(a, o);
    }
    const t = s;
    t.isSprite && (t.material.map?.dispose(), se(t.material, o));
  });
}
function Ve(e) {
  e.traverse((o) => {
    const s = o;
    if (!(!s.isMesh || !s.material)) {
      if (Array.isArray(s.material)) {
        s.material = s.material.map((n) => n.clone());
        return;
      }
      s.material = s.material.clone();
    }
  });
}
function te(e) {
  return e.replace(/\s+/g, "").replace(/Ω/gi, "ω").toLowerCase();
}
function Ye(e, o) {
  const s = e.properties?.resistance;
  return typeof s != "string" ? !1 : te(s) === te(o);
}
function Re(e, o, s) {
  let n = !1, t = null, r = null, a = !1, c = 0;
  const i = document.createElement("canvas");
  i.style.display = "block", i.style.width = "100%", i.style.height = "100%", i.setAttribute("role", "img"), i.setAttribute("aria-label", `${o.title} 3D wiring diagram`), e.replaceChildren(i);
  const l = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), p = [];
  let u, g, M, b, y, D, L, A, v, $, I = !1;
  const C = () => {
    cancelAnimationFrame(c), a = !1, y?.dispose();
    for (const h of l.values()) U(h.object);
    l.clear(), m.clear(), M && U(M), g?.dispose(), I = !1;
  }, B = () => {
    if (n || !I || a) return;
    a = !0;
    const h = () => {
      if (n || !I) {
        a = !1;
        return;
      }
      const f = y.update();
      g.render(M, b), f ? c = requestAnimationFrame(h) : a = !1;
    };
    c = requestAnimationFrame(h);
  }, G = (h, f) => {
    if (!(!I || n)) {
      for (const S of l.values()) {
        const x = h === S.id, w = f === S.id && f !== h;
        S.materials.forEach((P, k) => {
          P.emissive && (P.color.copy(S.baseColor[k] ?? P.color), P.emissive.set(S.baseColor[k] ?? P.color), P.emissiveIntensity = x ? 0.55 : w ? 0.28 : S.baseEmissive[k] ?? 0, x && P.color.offsetHSL(0, 0, 0.08));
        });
      }
      B();
    }
  }, j = () => {
    if (!I || n) return;
    const h = new u.Box3();
    for (const P of l.values())
      P.object.traverse((k) => {
        const N = k;
        N.isMesh && h.expandByObject(N);
      });
    if (h.isEmpty()) {
      A = new u.Vector3(120, 90, 140), v = new u.Vector3(0, 0, 0), b.position.copy(A), y.target.copy(v), y.update();
      return;
    }
    const f = h.getCenter(new u.Vector3()), S = h.getSize(new u.Vector3()), w = Math.max(S.x, S.y, S.z, 40) * 1.15;
    v = f.clone(), A = f.clone().add(new u.Vector3(-w * 0.18, w * 0.42, w * 0.92)), b.position.copy(A), y.target.copy(v), y.update();
  }, O = (h) => {
    const f = m.get(h);
    if (f) return f.clone();
    const S = Me(h);
    if (!S) return null;
    const x = o.components.find((N) => N.id === S.componentId);
    if (!x) return null;
    const w = x.pins.find((N) => N.id === S.pinId);
    if (!w) return null;
    const { index: P, count: k } = q(x, w);
    return ce(u, x, w, P, k);
  }, X = (h, f) => {
    const S = Ue(f), x = ee(S);
    l.set(h, {
      id: h,
      kind: "component",
      object: f,
      materials: x.materials,
      baseEmissive: x.baseEmissive,
      baseColor: x.baseColor
    });
  }, V = (h) => {
    const [f, S, x] = h.position;
    fe(u, h, m);
    const w = new u.Group();
    w.position.set(f, S, x), w.userData = { id: h.id, kind: "component" };
    const P = $e(u, h);
    P.group.name = "builtin-model", w.add(P.group);
    const k = Fe(u, w, h);
    for (const F of k)
      F.renderOrder = 5;
    const N = Se(u, h.label);
    N.position.set(0, h.dimensions[1] / 2 + 4, 0), w.add(N), M.add(w), X(h.id, w), h.model?.url && new $().load(
      h.model.url,
      (_) => {
        if (n) {
          U(_.scene);
          return;
        }
        const W = w.getObjectByName("builtin-model");
        W && (w.remove(W), U(W));
        const z = _.scene;
        z.name = "external-model", Ve(z);
        const K = h.model?.scale ?? 1;
        if (z.scale.setScalar(K), h.model?.rotation) {
          const [Y, ue, he] = h.model.rotation;
          z.rotation.set(Y, ue, he);
        }
        w.add(z), X(h.id, w), j(), G(t, r), B();
      },
      void 0,
      (_) => {
        n || (s.onError?.(
          `Failed to load model for ${h.id}: ${_ instanceof Error ? _.message : String(_)}`
        ), B());
      }
    );
  }, de = async () => {
    try {
      const [h, f, S] = await Promise.all([
        import("./three.module-BWYgh0Id.js"),
        import("./OrbitControls-Cc2hnvV3.js"),
        import("./GLTFLoader-D0p79_T6.js")
      ]);
      if (n) return;
      u = h;
      const x = f.OrbitControls;
      if ($ = S.GLTFLoader, g = new u.WebGLRenderer({ canvas: i, antialias: !0, alpha: !0 }), !g.getContext())
        throw g.dispose(), new Error("WebGL not available");
      g.outputColorSpace = u.SRGBColorSpace, g.shadowMap.enabled = !0, g.shadowMap.type = u.PCFSoftShadowMap, g.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)), M = new u.Scene(), M.background = new u.Color("#eef1f5"), b = new u.PerspectiveCamera(45, 1, 0.1, 5e3), A = new u.Vector3(120, 90, 140), v = new u.Vector3(0, 0, 0), b.position.copy(A), y = new x(b, i), y.enableDamping = !0, y.dampingFactor = 0.08, y.target.copy(v), y.addEventListener("change", B), D = new u.Raycaster(), L = new u.Vector2(), M.add(new u.HemisphereLight("#f7f9fc", "#5a6472", 0.72));
      const w = new u.DirectionalLight("#ffffff", 1.35);
      w.position.set(120, 180, 80), w.castShadow = !0, w.shadow.mapSize.set(1024, 1024), M.add(w);
      const P = new u.DirectionalLight("#d8e4ff", 0.58);
      P.position.set(-90, 60, -120), M.add(P);
      const k = new u.DirectionalLight("#ffffff", 0.62);
      k.position.set(-60, 70, 150), M.add(k);
      const N = We(o) - 2, F = new u.Mesh(
        new u.PlaneGeometry(2e3, 2e3),
        new u.MeshStandardMaterial({ color: "#e3e7ed", roughness: 0.95, metalness: 0 })
      );
      F.rotation.x = -Math.PI / 2, F.position.y = N, F.receiveShadow = !0, M.add(F), M.add(new u.GridHelper(800, 40, "#c5ccd6", "#d8dde6"));
      for (const _ of o.components)
        V(_);
      for (const _ of o.wires) {
        const W = O(_.from), z = O(_.to);
        if (!W || !z) {
          n || s.onError?.(`Wire ${_.id}: invalid endpoint ${W ? _.to : _.from}`);
          continue;
        }
        const K = Ke(u, _, W, z);
        K.userData = { id: _.id, kind: "wire" }, M.add(K);
        const Y = ee([K]);
        l.set(_.id, {
          id: _.id,
          kind: "wire",
          object: K,
          materials: Y.materials,
          baseEmissive: Y.baseEmissive,
          baseColor: Y.baseColor
        });
      }
      I = !0, j(), J(), G(t, r), B();
    } catch (h) {
      C(), n || s.onError?.(
        `Failed to initialize 3D view: ${h instanceof Error ? h.message : String(h)}`
      );
    }
  }, J = () => {
    if (!I || n) return;
    const h = e.clientWidth || 640, f = e.clientHeight || 480;
    b.aspect = h / f, b.updateProjectionMatrix(), g.setSize(h, f, !1), B();
  }, Q = new ResizeObserver(() => J());
  Q.observe(e), p.push(() => Q.disconnect());
  const H = (h) => {
    if (!I || n) return null;
    const f = i.getBoundingClientRect();
    L.x = (h.clientX - f.left) / f.width * 2 - 1, L.y = -((h.clientY - f.top) / f.height) * 2 + 1, D.setFromCamera(L, b);
    const S = D.intersectObjects(
      [...l.values()].map((x) => x.object),
      !0
    );
    for (const x of S) {
      let w = x.object;
      for (; w; ) {
        if (w.userData?.id) return w.userData.id;
        w = w.parent;
      }
    }
    return null;
  }, T = (h) => {
    if (n) return;
    const f = H(h);
    f !== r && (r = f, G(t, r), s.onHover(f));
  }, R = (h) => {
    if (n) return;
    const f = H(h);
    t = f, G(t, r), s.onSelect(f);
  }, E = () => {
    n || (r = null, G(t, r), s.onHover(null));
  };
  return i.addEventListener("pointermove", T), i.addEventListener("pointerdown", R), i.addEventListener("pointerleave", E), p.push(() => {
    i.removeEventListener("pointermove", T), i.removeEventListener("pointerdown", R), i.removeEventListener("pointerleave", E);
  }), de(), {
    select(h) {
      t = h, G(t, r);
    },
    reset() {
      n || !I || !A || !v || (b.position.copy(A), y.target.copy(v), y.update(), B());
    },
    destroy() {
      if (!n) {
        n = !0, cancelAnimationFrame(c);
        for (const h of p) h();
        for (const h of l.values()) U(h.object);
        l.clear(), m.clear(), M && U(M), y?.dispose(), g?.dispose(), e.replaceChildren();
      }
    }
  };
}
export {
  Je as ESP32_HEADER_HEIGHT_MM,
  Xe as ESP32_HEADER_PIN_COUNT,
  qe as ESP32_HEADER_PITCH_MM,
  Qe as ESP32_HEADER_SINK_MM,
  Ze as ESP32_PCB_THICKNESS_MM,
  He as ESP32_PIN_PROUD_MM,
  Te as ESP32_PIN_SIZE_MM,
  ze as buildAntenna,
  Be as buildCamera,
  Oe as buildCover,
  ke as buildDisplay,
  xe as buildEsp32,
  Ne as buildExtrusion,
  Ie as buildJetson,
  De as buildLens,
  Ge as buildLoadCell,
  je as buildMount,
  ve as buildPowerBlock,
  Pe as buildProbe,
  Ce as buildResistor,
  Ae as buildSsd,
  Le as buildWifi,
  Re as create3DView,
  pe as esp32HeaderHousingTopY,
  re as esp32HeaderPinX,
  ae as esp32HeaderRowZ,
  me as esp32HeaderSlotIndex,
  oe as esp32HeaderStartX,
  ie as esp32PinTipY,
  we as localPinPosition,
  Ye as matchesResistance,
  Me as parseEndpoint
};
