const Oe = 2.54, $e = 19, ze = 1.6, je = 8.4, Fe = 0.2, Ke = 1.2, Ue = 0.64;
function oe() {
  return -45.72 / 2;
}
function re(e) {
  const s = Math.max(0, Math.min(18, e));
  return oe() + s * 2.54;
}
function fe(e) {
  return Math.max(
    0,
    Math.min(18, Math.round((e - oe()) / 2.54))
  );
}
function ie(e, s) {
  const n = e / 2 - 1.27;
  return s === "left" ? n : -n;
}
function me() {
  return 1.6 / 2 - 0.2 + 8.4;
}
function ae() {
  return me() + 1.2;
}
function pe(e) {
  const s = e.lastIndexOf(".");
  return s <= 0 || s === e.length - 1 ? null : { componentId: e.slice(0, s), pinId: e.slice(s + 1) };
}
function Me(e, s, n) {
  for (const t of s.pins) {
    const { index: o, count: r } = Y(s, t), a = ce(e, s, t, o, r);
    n.set(`${s.id}.${t.id}`, a);
  }
}
function Z(e, s, n, t) {
  if (s.position) return s.position;
  if (e.kind === "esp32")
    return [
      re(n),
      ae(),
      ie(e.dimensions[2], s.side)
    ];
  const [o, r, a] = e.dimensions, u = s.side === "left" ? -o / 2 : o / 2, c = n + 1, l = Math.max(t, 1) + 1, f = a * (c / l - 0.5), h = r * 0.08;
  return [u, h, f];
}
function we(e, s) {
  const { index: n, count: t } = Y(e, s);
  return Z(e, s, n, t);
}
function ce(e, s, n, t, o) {
  const r = Z(s, n, t, o), [a, u, c] = s.position;
  return new e.Vector3(a + r[0], u + r[1], c + r[2]);
}
function ge(e) {
  const s = [], n = [];
  for (const t of e.pins)
    t.side === "left" ? s.push(t) : n.push(t);
  return { left: s, right: n };
}
function Y(e, s) {
  const n = ge(e), t = s.side === "left" ? n.left : n.right, o = t.findIndex((r) => r.id === s.id);
  return { index: Math.max(o, 0), count: t.length };
}
function le(e, s, n = "#888888") {
  try {
    return new e.Color(s);
  } catch {
    return new e.Color(n);
  }
}
function Se(e) {
  const s = e.material;
  return Array.isArray(s) ? s.filter((n) => !!n) : s ? [s] : [];
}
function ee(e) {
  const s = [], n = [], t = [];
  for (const o of e)
    for (const r of Se(o))
      s.push(r), n.push(r.emissiveIntensity ?? 0), t.push(r.color.clone());
  return { materials: s, baseEmissive: n, baseColor: t };
}
function ye(e, s, n = "#f5f5f5") {
  const t = document.createElement("canvas"), o = t.getContext("2d");
  if (!o) throw new Error("2D canvas unavailable");
  const r = 28;
  o.font = `600 ${r}px system-ui, sans-serif`;
  const a = o.measureText(s), u = 16, c = 10;
  t.width = Math.ceil(a.width + u * 2), t.height = r + c * 2, o.font = `600 ${r}px system-ui, sans-serif`, o.fillStyle = "rgba(12, 14, 18, 0.82)";
  const l = 8, f = t.width, h = t.height;
  o.beginPath(), o.moveTo(l, 0), o.lineTo(f - l, 0), o.quadraticCurveTo(f, 0, f, l), o.lineTo(f, h - l), o.quadraticCurveTo(f, h, f - l, h), o.lineTo(l, h), o.quadraticCurveTo(0, h, 0, h - l), o.lineTo(0, l), o.quadraticCurveTo(0, 0, l, 0), o.closePath(), o.fill(), o.fillStyle = n, o.textBaseline = "middle", o.fillText(s, u, h / 2);
  const d = new e.CanvasTexture(t);
  d.colorSpace = e.SRGBColorSpace;
  const g = new e.SpriteMaterial({ map: d, transparent: !0, depthTest: !1 }), m = new e.Sprite(g), b = t.width / 18;
  return m.scale.set(b, t.height / t.width * b, 1), m.renderOrder = 10, m;
}
function w(e, s, n, t, o, r) {
  const a = new e.Mesh(n, t);
  return a.castShadow = !0, a.receiveShadow = !0, o && a.position.set(o[0], o[1], o[2]), r && a.rotation.set(r[0], r[1], r[2]), s.add(a), a;
}
function _e(e, s) {
  const n = new e.Group(), t = [], [o, r, a] = s.dimensions, u = s.color ? le(e, s.color) : new e.Color("#1f6b42"), c = w(
    e,
    n,
    new e.BoxGeometry(o, r * 0.12, a),
    new e.MeshStandardMaterial({
      color: u,
      roughness: 0.55,
      metalness: 0.08
    }),
    [0, 0, 0]
  );
  t.push(c);
  const l = w(
    e,
    n,
    new e.BoxGeometry(o * 0.55, 0.15, a * 0.35),
    new e.MeshStandardMaterial({ color: "#ececec", roughness: 0.85, metalness: 0 }),
    [0, r * 0.07, 0]
  );
  return t.push(l), { group: n, meshes: t };
}
function te(e, s) {
  return `${e}:${s}`;
}
function be(e, s) {
  const n = new e.Group(), t = [], [o, , r] = s.dimensions, a = 1.6 / 2, u = ae(), c = -a - 0.5, l = u - c, f = (u + c) / 2, h = w(
    e,
    n,
    new e.BoxGeometry(o, 1.6, r),
    new e.MeshStandardMaterial({ color: "#0f2d1d", roughness: 0.62, metalness: 0.12 })
  );
  h.name = "esp32-pcb", t.push(h);
  const d = 3.1, g = w(
    e,
    n,
    new e.BoxGeometry(Math.min(o * 0.42, 18), d, Math.min(r * 0.58, 16)),
    new e.MeshStandardMaterial({ color: "#b8bcc4", roughness: 0.28, metalness: 0.92 }),
    [o * 0.06, a + d / 2 - 0.2, 0]
  );
  g.name = "esp32-shield", t.push(g);
  const m = [7.5, 3.2, 8], b = w(
    e,
    n,
    new e.BoxGeometry(m[0], m[1], m[2]),
    new e.MeshStandardMaterial({ color: "#c5c8ce", roughness: 0.35, metalness: 0.85 }),
    [-o / 2 + m[0] / 2, a + m[1] / 2 - 0.2, 0]
  );
  b.name = "esp32-usb", t.push(b);
  const S = 0.3, x = w(
    e,
    n,
    new e.BoxGeometry(o * 0.12, S, r * 0.42),
    new e.MeshStandardMaterial({ color: "#d4af37", roughness: 0.45, metalness: 0.75 }),
    [o / 2 - o * 0.08, a + S / 2 - 0.08, 0]
  );
  x.name = "esp32-antenna", t.push(x);
  const N = 19 * 2.54, L = a - 0.2 + 8.4 / 2, k = new e.MeshStandardMaterial({ color: "#151515", roughness: 0.72, metalness: 0.04 }), q = new e.MeshStandardMaterial({ color: "#d7c089", roughness: 0.28, metalness: 0.92 }), I = /* @__PURE__ */ new Map();
  for (const C of s.pins) {
    const G = we(s, C), A = C.position ? fe(G[0]) : Y(s, C).index;
    I.set(te(C.side, A), C);
  }
  for (const C of ["left", "right"]) {
    const G = ie(r, C), A = w(
      e,
      n,
      new e.BoxGeometry(N, 8.4, 2.54),
      k,
      [0, L, G]
    );
    A.name = `esp32-header-housing:${C}`, t.push(A);
    for (let O = 0; O < 19; O += 1) {
      const F = I.get(te(C, O)), X = re(O), V = w(
        e,
        n,
        new e.BoxGeometry(0.64, l, 0.64),
        q,
        [X, f, G]
      );
      V.name = F ? `esp32-header-pin:${F.id}` : `esp32-header-pin:${C}:${O}`, V.userData = { kind: "esp32-header-pin", pinId: F?.id, side: C, index: O }, t.push(V);
    }
  }
  return { group: n, meshes: t };
}
function Pe(e, s) {
  const n = new e.Group(), t = [], [o, r, a] = s.dimensions, u = w(
    e,
    n,
    new e.BoxGeometry(o, r * 0.08, a),
    new e.MeshStandardMaterial({ color: "#1f7a3a", roughness: 0.58, metalness: 0.1 })
  );
  t.push(u);
  const c = w(
    e,
    n,
    new e.BoxGeometry(o * 0.28, r * 0.07, a * 0.38),
    new e.MeshStandardMaterial({ color: "#101010", roughness: 0.35, metalness: 0.25 }),
    [0, r * 0.08, 0]
  );
  t.push(c);
  for (let l = 0; l < 2; l += 1) {
    const f = w(
      e,
      n,
      new e.BoxGeometry(o * 0.12, r * 0.14, a * 0.18),
      new e.MeshStandardMaterial({ color: "#1a1a1a", roughness: 0.55, metalness: 0.35 }),
      [(l === 0 ? -1 : 1) * o * 0.28, r * 0.06, 0]
    );
    t.push(f);
    const h = w(
      e,
      n,
      new e.CylinderGeometry(o * 0.025, o * 0.025, r * 0.03, 16),
      new e.MeshStandardMaterial({ color: "#9aa0a6", roughness: 0.25, metalness: 0.9 }),
      [(l === 0 ? -1 : 1) * o * 0.28, r * 0.14, 0]
    );
    t.push(h);
  }
  return { group: n, meshes: t };
}
function ve(e, s) {
  const n = new e.Group(), t = [], [o, r, a] = s.dimensions, u = new e.MeshStandardMaterial({
    color: "#c5ccd3",
    roughness: 0.28,
    metalness: 0.85
  }), c = o * 0.28, l = Math.max(o - c * 2, o * 0.3), f = r * 0.22, h = a * 0.22, d = Math.min(r, a) * 0.22;
  for (const S of [-1, 1]) {
    const x = w(
      e,
      n,
      new e.BoxGeometry(c, r, a),
      u,
      [S * (o / 2 - c / 2), 0, 0]
    );
    x.name = S < 0 ? "load-cell-end-neg" : "load-cell-end-pos", t.push(x);
    const N = w(
      e,
      n,
      new e.CylinderGeometry(d, d, r * 1.08, 20),
      new e.MeshStandardMaterial({ color: "#1a1d22", roughness: 0.82, metalness: 0.08 }),
      [S * (o / 2 - c * 0.45), 0, 0]
    );
    N.name = "load-cell-hole", t.push(N);
  }
  for (const S of [-1, 1]) {
    const x = w(
      e,
      n,
      new e.BoxGeometry(l, f, a),
      u,
      [0, S * (r / 2 - f / 2), 0]
    );
    x.name = S > 0 ? "load-cell-flange-top" : "load-cell-flange-bottom", t.push(x);
  }
  const g = w(
    e,
    n,
    new e.BoxGeometry(l * 0.55, Math.max(r - f * 2, r * 0.2), h),
    u
  );
  g.name = "load-cell-web", t.push(g);
  const m = w(
    e,
    n,
    new e.BoxGeometry(l * 0.28, 0.4, a * 0.55),
    new e.MeshStandardMaterial({ color: "#141414", roughness: 0.7, metalness: 0.05 }),
    [0, r / 2 + 0.15, 0]
  );
  m.name = "load-cell-gauge", t.push(m);
  const b = w(
    e,
    n,
    new e.CylinderGeometry(1.1, 1.1, 12, 12),
    new e.MeshStandardMaterial({ color: "#222222", roughness: 0.75, metalness: 0.05 }),
    [-o * 0.08, 0, a / 2 + 6],
    [Math.PI / 2, 0, 0]
  );
  return b.name = "load-cell-cable", t.push(b), { group: n, meshes: t };
}
function Ce(e, s) {
  const n = new e.Group(), t = [], [o, r, a] = s.dimensions, u = o, c = Math.min(r, a) / 2, l = u * 0.16, f = u - l, h = [0, 0, Math.PI / 2], d = new e.MeshStandardMaterial({ color: "#9aa3ad", roughness: 0.18, metalness: 0.96 }), g = w(
    e,
    n,
    new e.CylinderGeometry(c * 1.04, c * 1.04, l, 24),
    new e.MeshStandardMaterial({ color: "#141414", roughness: 0.82, metalness: 0.08 }),
    [-u / 2 + l / 2, 0, 0],
    h
  );
  g.name = "probe-shrink", t.push(g);
  const m = w(
    e,
    n,
    new e.CylinderGeometry(c, c, f, 28),
    d,
    [-u / 2 + l + f / 2, 0, 0],
    h
  );
  return m.name = "probe-shaft", t.push(m), { group: n, meshes: t };
}
function xe(e, s) {
  const n = new e.Group(), t = [], [o, r, a] = s.dimensions, u = Math.max(o, a), c = Math.min(o, a) * 0.35, l = w(
    e,
    n,
    new e.CylinderGeometry(c, c, u, 24),
    new e.MeshStandardMaterial({ color: "#d8cbb8", roughness: 0.72, metalness: 0.05 }),
    [0, 0, 0],
    [0, 0, Math.PI / 2]
  );
  if (t.push(l), Ne(s, "4.7 kΩ")) {
    const f = ["#f1c40f", "#7d3c98", "#c0392b", "#d4a017"];
    for (let h = 0; h < f.length; h += 1) {
      const d = w(
        e,
        n,
        new e.CylinderGeometry(c * 1.02, c * 1.02, u * 0.07, 24),
        new e.MeshStandardMaterial({ color: f[h], roughness: 0.6, metalness: 0.1 }),
        [u * (-0.24 + h * 0.16), 0, 0],
        [0, 0, Math.PI / 2]
      );
      d.name = `resistor-band-${h}`, t.push(d);
    }
  }
  for (const f of [-1, 1]) {
    const h = w(
      e,
      n,
      new e.CylinderGeometry(c * 0.12, c * 0.12, u * 0.45, 12),
      new e.MeshStandardMaterial({ color: "#b0b4ba", roughness: 0.25, metalness: 0.9 }),
      [f * u * 0.62, 0, 0],
      [0, 0, Math.PI / 2]
    );
    t.push(h);
  }
  return { group: n, meshes: t };
}
function Ie(e, s) {
  const n = new e.Group(), t = [], [o, r, a] = s.dimensions, u = w(
    e,
    n,
    new e.BoxGeometry(o, r, a),
    new e.MeshStandardMaterial({ color: "#20242b", roughness: 0.68, metalness: 0.12 })
  );
  u.name = "power-housing", t.push(u);
  const c = Math.max(r * 0.1, 1.4), l = c * 0.4, f = w(
    e,
    n,
    new e.BoxGeometry(o * 0.78, c, a * 0.72),
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
    [0, r / 2 + c / 2 - l, 0]
  );
  f.name = "power-accent", f.receiveShadow = !1, t.push(f);
  const h = r / 2 + c - l, d = Math.max(r * 0.08, 1.1);
  for (let g = 0; g < 2; g += 1) {
    const m = w(
      e,
      n,
      new e.CylinderGeometry(o * 0.05, o * 0.05, d, 16),
      new e.MeshStandardMaterial({ color: "#d4af37", roughness: 0.3, metalness: 0.85 }),
      [(g === 0 ? -1 : 1) * o * 0.28, h + d / 2, 0]
    );
    m.name = "power-terminal", t.push(m);
  }
  return { group: n, meshes: t };
}
function Ge(e, s) {
  return {
    board: _e,
    esp32: be,
    hx711: Pe,
    "load-cell": ve,
    probe: Ce,
    resistor: xe,
    power: Ie
  }[s.kind](e, s);
}
function De(e, s, n) {
  if (n.kind === "esp32") return [];
  const t = [], o = new e.MeshStandardMaterial({
    color: "#facc15",
    emissive: "#ca8a04",
    emissiveIntensity: 0.45,
    roughness: 0.35,
    metalness: 0.15
  });
  for (const r of n.pins) {
    const { index: a, count: u } = Y(n, r), c = Z(n, r, a, u), l = w(
      e,
      s,
      new e.SphereGeometry(1.4, 14, 14),
      o,
      c
    );
    l.name = `pin-marker:${n.id}.${r.id}`, l.userData = { pinId: r.id, kind: "pin-marker" }, t.push(l);
  }
  return t;
}
function Ae(e) {
  let s = 0;
  for (const n of e.components) {
    const [, t] = n.position, o = n.dimensions[1] / 2;
    s = Math.min(s, t - o);
  }
  return s;
}
function Be(e, s, n, t) {
  const o = n.distanceTo(t), r = n.clone().add(t).multiplyScalar(0.5);
  r.y += Math.max(o * 0.22, 8);
  const a = new e.CatmullRomCurve3([n.clone(), r, t.clone()]), u = (s.diameterMm ?? 1.6) / 2, c = Math.max(12, Math.ceil(o / 4)), l = new e.TubeGeometry(a, c, u, 10, !1), f = new e.MeshStandardMaterial({
    color: le(e, s.color, "#cccccc"),
    roughness: 0.45,
    metalness: 0.08
  }), h = new e.Mesh(l, f);
  return h.castShadow = !0, h.receiveShadow = !0, h;
}
function Le(e) {
  const s = [];
  return e.traverse((n) => {
    n.isMesh && s.push(n);
  }), s;
}
function ne(e, s) {
  if (!s.has(e)) {
    s.add(e), e.dispose();
    for (const n of Object.keys(e)) {
      const t = e[n];
      t && typeof t == "object" && "dispose" in t && typeof t.dispose == "function" && t.dispose();
    }
  }
}
function U(e, s = /* @__PURE__ */ new Set()) {
  e.traverse((n) => {
    const t = n;
    if (t.isMesh) {
      t.geometry?.dispose();
      const r = Array.isArray(t.material) ? t.material : [t.material];
      for (const a of r)
        a && ne(a, s);
    }
    const o = n;
    o.isSprite && (o.material.map?.dispose(), ne(o.material, s));
  });
}
function ke(e) {
  e.traverse((s) => {
    const n = s;
    if (!(!n.isMesh || !n.material)) {
      if (Array.isArray(n.material)) {
        n.material = n.material.map((t) => t.clone());
        return;
      }
      n.material = n.material.clone();
    }
  });
}
function se(e) {
  return e.replace(/\s+/g, "").replace(/Ω/gi, "ω").toLowerCase();
}
function Ne(e, s) {
  const n = e.properties?.resistance;
  return typeof n != "string" ? !1 : se(n) === se(s);
}
function Ve(e, s, n) {
  let t = !1, o = null, r = null, a = !1, u = 0;
  const c = document.createElement("canvas");
  c.style.display = "block", c.style.width = "100%", c.style.height = "100%", c.setAttribute("role", "img"), c.setAttribute("aria-label", `${s.title} 3D wiring diagram`), e.replaceChildren(c);
  const l = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), h = [];
  let d, g, m, b, S, x, N, L, k, q, I = !1;
  const C = () => {
    cancelAnimationFrame(u), a = !1, S?.dispose();
    for (const i of l.values()) U(i.object);
    l.clear(), f.clear(), m && U(m), g?.dispose(), I = !1;
  }, G = () => {
    if (t || !I || a) return;
    a = !0;
    const i = () => {
      if (t || !I) {
        a = !1;
        return;
      }
      const p = S.update();
      g.render(m, b), p ? u = requestAnimationFrame(i) : a = !1;
    };
    u = requestAnimationFrame(i);
  }, A = (i, p) => {
    if (!(!I || t)) {
      for (const y of l.values()) {
        const _ = i === y.id, M = p === y.id && p !== i;
        y.materials.forEach((v, D) => {
          v.emissive && (v.color.copy(y.baseColor[D] ?? v.color), v.emissive.set(y.baseColor[D] ?? v.color), v.emissiveIntensity = _ ? 0.55 : M ? 0.28 : y.baseEmissive[D] ?? 0, _ && v.color.offsetHSL(0, 0, 0.08));
        });
      }
      G();
    }
  }, O = () => {
    if (!I || t) return;
    const i = new d.Box3();
    for (const v of l.values())
      v.object.traverse((D) => {
        const B = D;
        B.isMesh && i.expandByObject(B);
      });
    if (i.isEmpty()) {
      L = new d.Vector3(120, 90, 140), k = new d.Vector3(0, 0, 0), b.position.copy(L), S.target.copy(k), S.update();
      return;
    }
    const p = i.getCenter(new d.Vector3()), y = i.getSize(new d.Vector3()), M = Math.max(y.x, y.y, y.z, 40) * 1.15;
    k = p.clone(), L = p.clone().add(new d.Vector3(-M * 0.18, M * 0.42, M * 0.92)), b.position.copy(L), S.target.copy(k), S.update();
  }, F = (i) => {
    const p = f.get(i);
    if (p) return p.clone();
    const y = pe(i);
    if (!y) return null;
    const _ = s.components.find((B) => B.id === y.componentId);
    if (!_) return null;
    const M = _.pins.find((B) => B.id === y.pinId);
    if (!M) return null;
    const { index: v, count: D } = Y(_, M);
    return ce(d, _, M, v, D);
  }, X = (i, p) => {
    const y = Le(p), _ = ee(y);
    l.set(i, {
      id: i,
      kind: "component",
      object: p,
      materials: _.materials,
      baseEmissive: _.baseEmissive,
      baseColor: _.baseColor
    });
  }, V = (i) => {
    const [p, y, _] = i.position;
    Me(d, i, f);
    const M = new d.Group();
    M.position.set(p, y, _), M.userData = { id: i.id, kind: "component" };
    const v = Ge(d, i);
    v.group.name = "builtin-model", M.add(v.group);
    const D = De(d, M, i);
    for (const z of D)
      z.renderOrder = 5;
    const B = ye(d, i.label);
    B.position.set(0, i.dimensions[1] / 2 + 4, 0), M.add(B), m.add(M), X(i.id, M), i.model?.url && new q().load(
      i.model.url,
      (P) => {
        if (t) {
          U(P.scene);
          return;
        }
        const j = M.getObjectByName("builtin-model");
        j && (M.remove(j), U(j));
        const $ = P.scene;
        $.name = "external-model", ke($);
        const K = i.model?.scale ?? 1;
        if ($.scale.setScalar(K), i.model?.rotation) {
          const [W, ue, he] = i.model.rotation;
          $.rotation.set(W, ue, he);
        }
        M.add($), X(i.id, M), O(), A(o, r), G();
      },
      void 0,
      (P) => {
        t || (n.onError?.(
          `Failed to load model for ${i.id}: ${P instanceof Error ? P.message : String(P)}`
        ), G());
      }
    );
  }, de = async () => {
    try {
      const [i, p, y] = await Promise.all([
        import("./three.module-BWYgh0Id.js"),
        import("./OrbitControls-Cc2hnvV3.js"),
        import("./GLTFLoader-D0p79_T6.js")
      ]);
      if (t) return;
      d = i;
      const _ = p.OrbitControls;
      if (q = y.GLTFLoader, g = new d.WebGLRenderer({ canvas: c, antialias: !0, alpha: !0 }), !g.getContext())
        throw g.dispose(), new Error("WebGL not available");
      g.outputColorSpace = d.SRGBColorSpace, g.shadowMap.enabled = !0, g.shadowMap.type = d.PCFSoftShadowMap, g.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)), m = new d.Scene(), m.background = new d.Color("#eef1f5"), b = new d.PerspectiveCamera(45, 1, 0.1, 5e3), L = new d.Vector3(120, 90, 140), k = new d.Vector3(0, 0, 0), b.position.copy(L), S = new _(b, c), S.enableDamping = !0, S.dampingFactor = 0.08, S.target.copy(k), S.addEventListener("change", G), x = new d.Raycaster(), N = new d.Vector2(), m.add(new d.HemisphereLight("#f7f9fc", "#5a6472", 0.72));
      const M = new d.DirectionalLight("#ffffff", 1.35);
      M.position.set(120, 180, 80), M.castShadow = !0, M.shadow.mapSize.set(1024, 1024), m.add(M);
      const v = new d.DirectionalLight("#d8e4ff", 0.58);
      v.position.set(-90, 60, -120), m.add(v);
      const D = new d.DirectionalLight("#ffffff", 0.62);
      D.position.set(-60, 70, 150), m.add(D);
      const B = Ae(s) - 2, z = new d.Mesh(
        new d.PlaneGeometry(2e3, 2e3),
        new d.MeshStandardMaterial({ color: "#e3e7ed", roughness: 0.95, metalness: 0 })
      );
      z.rotation.x = -Math.PI / 2, z.position.y = B, z.receiveShadow = !0, m.add(z), m.add(new d.GridHelper(800, 40, "#c5ccd6", "#d8dde6"));
      for (const P of s.components)
        V(P);
      for (const P of s.wires) {
        const j = F(P.from), $ = F(P.to);
        if (!j || !$) {
          t || n.onError?.(`Wire ${P.id}: invalid endpoint ${j ? P.to : P.from}`);
          continue;
        }
        const K = Be(d, P, j, $);
        K.userData = { id: P.id, kind: "wire" }, m.add(K);
        const W = ee([K]);
        l.set(P.id, {
          id: P.id,
          kind: "wire",
          object: K,
          materials: W.materials,
          baseEmissive: W.baseEmissive,
          baseColor: W.baseColor
        });
      }
      I = !0, O(), J(), A(o, r), G();
    } catch (i) {
      C(), t || n.onError?.(
        `Failed to initialize 3D view: ${i instanceof Error ? i.message : String(i)}`
      );
    }
  }, J = () => {
    if (!I || t) return;
    const i = e.clientWidth || 640, p = e.clientHeight || 480;
    b.aspect = i / p, b.updateProjectionMatrix(), g.setSize(i, p, !1), G();
  }, Q = new ResizeObserver(() => J());
  Q.observe(e), h.push(() => Q.disconnect());
  const H = (i) => {
    if (!I || t) return null;
    const p = c.getBoundingClientRect();
    N.x = (i.clientX - p.left) / p.width * 2 - 1, N.y = -((i.clientY - p.top) / p.height) * 2 + 1, x.setFromCamera(N, b);
    const y = x.intersectObjects(
      [...l.values()].map((_) => _.object),
      !0
    );
    for (const _ of y) {
      let M = _.object;
      for (; M; ) {
        if (M.userData?.id) return M.userData.id;
        M = M.parent;
      }
    }
    return null;
  }, R = (i) => {
    if (t) return;
    const p = H(i);
    p !== r && (r = p, A(o, r), n.onHover(p));
  }, T = (i) => {
    if (t) return;
    const p = H(i);
    o = p, A(o, r), n.onSelect(p);
  }, E = () => {
    t || (r = null, A(o, r), n.onHover(null));
  };
  return c.addEventListener("pointermove", R), c.addEventListener("pointerdown", T), c.addEventListener("pointerleave", E), h.push(() => {
    c.removeEventListener("pointermove", R), c.removeEventListener("pointerdown", T), c.removeEventListener("pointerleave", E);
  }), de(), {
    select(i) {
      o = i, A(o, r);
    },
    reset() {
      t || !I || !L || !k || (b.position.copy(L), S.target.copy(k), S.update(), G());
    },
    destroy() {
      if (!t) {
        t = !0, cancelAnimationFrame(u);
        for (const i of h) i();
        for (const i of l.values()) U(i.object);
        l.clear(), f.clear(), m && U(m), S?.dispose(), g?.dispose(), e.replaceChildren();
      }
    }
  };
}
export {
  je as ESP32_HEADER_HEIGHT_MM,
  $e as ESP32_HEADER_PIN_COUNT,
  Oe as ESP32_HEADER_PITCH_MM,
  Fe as ESP32_HEADER_SINK_MM,
  ze as ESP32_PCB_THICKNESS_MM,
  Ke as ESP32_PIN_PROUD_MM,
  Ue as ESP32_PIN_SIZE_MM,
  be as buildEsp32,
  ve as buildLoadCell,
  Ie as buildPowerBlock,
  Ce as buildProbe,
  xe as buildResistor,
  Ve as create3DView,
  me as esp32HeaderHousingTopY,
  re as esp32HeaderPinX,
  ie as esp32HeaderRowZ,
  fe as esp32HeaderSlotIndex,
  oe as esp32HeaderStartX,
  ae as esp32PinTipY,
  we as localPinPosition,
  Ne as matchesResistance,
  pe as parseEndpoint
};
