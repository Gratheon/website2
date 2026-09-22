import { c as Xe, a as l, H as Y, h as Ge, b as _e, d as ht, U as fn, e as ne, f as fe, g as mt, i as pt, j as Mt, k as ft, l as We, m as ie, n as an, o as wt, p as bt, q as gt, r as cn, s as ke, M as ae, t as K, u as ye, v as Ln, w as yt, x as xt, y as St, z as Pt, A as Gt } from "./index-CA6P4v4q.js";
function _t(e, s) {
  const n = new e.Group(), t = [], [o, r, a] = s.dimensions, i = s.color ? Xe(e, s.color) : new e.Color("#1f6b42"), c = l(
    e,
    n,
    new e.BoxGeometry(o, r * 0.12, a),
    new e.MeshStandardMaterial({
      color: i,
      roughness: 0.55,
      metalness: 0.08
    }),
    [0, 0, 0]
  );
  t.push(c);
  const d = l(
    e,
    n,
    new e.BoxGeometry(o * 0.55, 0.15, a * 0.35),
    new e.MeshStandardMaterial({ color: "#ececec", roughness: 0.85, metalness: 0 }),
    [0, r * 0.07, 0]
  );
  return t.push(d), { group: n, meshes: t };
}
const On = {
  kind: "board",
  build: _t
}, xe = 1.6, Bt = 68.58, $n = 53.34, jn = 8.4, zn = 18, Un = 14, Yn = Y, dn = 17.78, ln = 44.45, wn = 1.6, Ct = [
  [13.97, 2.54],
  [15.24, 50.8],
  [66.04, 7.62],
  [66.04, 35.56]
];
function It(e) {
  return e / Bt;
}
function vt(e) {
  return e / $n;
}
function Ne(e, s, n, t) {
  return {
    x: -e / 2 + n * It(e),
    z: -s / 2 + t * vt(s)
  };
}
function Xn(e) {
  return e / 2 - Yn / 2;
}
function Wn(e) {
  return -e / 2 + Yn / 2;
}
function Se(e, s) {
  return Ne(e, $n, s, 0).x;
}
function Zn(e, s) {
  const n = Math.max(0, Math.min(zn - 1, s));
  return n < 8 ? Se(e, dn) + n * Y : Se(e, ln) + (n - 8) * Y;
}
function Dt(e, s) {
  const n = Math.max(0, Math.min(Un - 1, s));
  return n < 8 ? Se(e, dn) + n * Y : Se(e, ln) + (n - 8) * Y;
}
function At(e, s) {
  return s === "digital" ? Xn(e) : Wn(e);
}
function kt() {
  return Ge(xe / 2, "female", jn);
}
function Vn(e) {
  return e.trim().toUpperCase().replace(/[\s_]+/g, "");
}
function bn(e) {
  const s = Vn(e), n = s.match(/^(?:D|DPIN|PIN)?(\d{1,2})$/);
  if (n) {
    const o = Number(n[1]);
    if (o >= 0 && o <= 13) return o;
  }
  return {
    RX: 0,
    RXD: 0,
    RX0: 0,
    TX: 1,
    TXD: 1,
    TX0: 1,
    SS: 10,
    MOSI: 11,
    MISO: 12,
    SCK: 13,
    LED: 13,
    LEDBUILTIN: 13,
    L: 13,
    GND: 14,
    AREF: 15,
    SDA: 16,
    SCL: 17
  }[s];
}
function gn(e) {
  const s = Vn(e), n = s.match(/^A(\d)$/);
  if (n) {
    const o = Number(n[1]);
    if (o >= 0 && o <= 5) return 8 + o;
  }
  return {
    NC: 0,
    NCON: 0,
    IOREF: 1,
    RESET: 2,
    RST: 2,
    "3V3": 3,
    "3.3V": 3,
    "3V": 3,
    "5V": 4,
    VCC: 4,
    VDD: 4,
    GND: 5,
    GND1: 5,
    GND2: 6,
    VIN: 7,
    VM: 7
  }[s];
}
function Nt(e) {
  const s = e.id;
  if (e.side === "left") {
    const o = bn(s);
    if (o !== void 0) return { bank: "digital", index: o };
    const r = gn(s);
    return r !== void 0 ? { bank: "power", index: r } : void 0;
  }
  const n = gn(s);
  if (n !== void 0) return { bank: "power", index: n };
  const t = bn(s);
  if (t !== void 0) return { bank: "digital", index: t };
}
function Lt(e, s) {
  return e.side === "left" ? { bank: "digital", index: Math.max(0, Math.min(zn - 1, s.index)) } : { bank: "power", index: Math.max(0, Math.min(Un - 1, s.index)) };
}
function Ot(e, s, n) {
  const [t, , o] = e.dimensions, r = Nt(s) ?? Lt(s, n);
  return [r.bank === "digital" ? Zn(t, r.index) : Dt(t, r.index), kt(), At(o, r.bank)];
}
function $t(e) {
  return xe / 2 + e / 2 - 0.15;
}
function jt(e, s, n, t, o, r) {
  const a = l(
    e,
    s,
    new e.CylinderGeometry(wn, wn, xe + 0.35, 18),
    new e.MeshStandardMaterial({ color: "#141414", roughness: 0.85, metalness: 0.04 }),
    [t, 0, o]
  );
  a.name = r, n.push(a);
}
function De(e, s, n, t, o, r) {
  const a = l(
    e,
    s,
    new e.BoxGeometry(1.6, 0.7, 0.9),
    new e.MeshStandardMaterial({ color: o, roughness: 0.35, metalness: 0.08, emissive: o, emissiveIntensity: 0.22 }),
    t
  );
  a.name = r, n.push(a);
}
function Ae(e, s, n, t, o) {
  const r = o.firstX + (o.columns - 1) * Y / 2;
  ne(e, s, n, {
    columns: o.columns,
    rows: 1,
    contact: "female",
    heightMm: jn,
    pcbTopY: xe / 2,
    center: [r, 0, o.z],
    look: t,
    pinBottomY: o.pinBottomY,
    namePrefix: o.name,
    housingName: o.name,
    pinName: (a, i) => `${o.name}-pin:${o.pinIdAt(i)}`,
    pinUserData: (a, i) => ({
      kind: "arduino-uno-header-pin",
      pinId: o.pinIdAt(i),
      column: i
    })
  });
}
function zt(e, s) {
  const n = new e.Group(), t = [], [o, , r] = s.dimensions, a = xe / 2, i = -a - 1.1, c = _e(e), d = new e.MeshStandardMaterial({ color: "#1a1d22", roughness: 0.62, metalness: 0.12 }), u = new e.MeshStandardMaterial({ color: "#c5ccd3", roughness: 0.32, metalness: 0.4 }), h = new e.MeshStandardMaterial({ color: "#d7c089", roughness: 0.32, metalness: 0.42 }), M = new e.MeshStandardMaterial({ color: "#151515", roughness: 0.48, metalness: 0.18 }), f = l(
    e,
    n,
    new e.BoxGeometry(o, xe, r),
    new e.MeshStandardMaterial({ color: "#0a6e74", roughness: 0.58, metalness: 0.08 })
  );
  f.name = "arduino-uno-pcb", t.push(f), Ct.forEach(([p, S], G) => {
    const v = Ne(o, r, p, S);
    jt(e, n, t, v.x, v.z, `arduino-uno-hole:${G}`);
  });
  const m = Ne(o, r, 0, 40.5).z;
  ht(e, n, t, {
    position: [-o / 2 + fn.depth / 2 - 1.6, $t(fn.height), m],
    facing: "-x",
    namePrefix: "arduino-uno-usb"
  });
  const w = 14.2, b = 4.6, x = Ne(o, r, 0, 13.2).z, g = -o / 2 + w / 2 - 1.8, P = a + b - 0.35, I = [0, 0, Math.PI / 2], O = l(
    e,
    n,
    new e.CylinderGeometry(b, b, w * 0.72, 22),
    d,
    [g + 1.2, P, x],
    I
  );
  O.name = "arduino-uno-jack", t.push(O);
  const N = l(
    e,
    n,
    new e.CylinderGeometry(b * 0.78, b * 0.78, w * 0.28, 22),
    u,
    [g - w * 0.28, P, x],
    I
  );
  N.name = "arduino-uno-jack-sleeve", t.push(N);
  const $ = l(
    e,
    n,
    new e.CylinderGeometry(0.85, 0.85, w * 0.4, 12),
    h,
    [g - 0.6, P, x],
    I
  );
  $.name = "arduino-uno-jack-pin", t.push($);
  const D = Xn(r), Z = Wn(r), z = Se(o, dn), j = Se(o, ln);
  Ae(e, n, t, c, {
    columns: 8,
    firstX: z,
    z: D,
    name: "arduino-uno-digital-lo",
    pinBottomY: i,
    pinIdAt: (p) => `D${p}`
  }), Ae(e, n, t, c, {
    columns: 10,
    firstX: j,
    z: D,
    name: "arduino-uno-digital-hi",
    pinBottomY: i,
    pinIdAt: (p) => ["D8", "D9", "D10", "D11", "D12", "D13", "GND", "AREF", "SDA", "SCL"][p]
  }), Ae(e, n, t, c, {
    columns: 8,
    firstX: z,
    z: Z,
    name: "arduino-uno-power",
    pinBottomY: i,
    pinIdAt: (p) => ["NC", "IOREF", "RESET", "3V3", "5V", "GND", "GND2", "VIN"][p]
  }), Ae(e, n, t, c, {
    columns: 6,
    firstX: j,
    z: Z,
    name: "arduino-uno-analog",
    pinBottomY: i,
    pinIdAt: (p) => `A${p}`
  });
  const k = o * 0.1, U = r * 0.04, q = l(
    e,
    n,
    new e.BoxGeometry(37.2, 4.2, 10.2),
    d,
    [k, a + 2.1, U]
  );
  q.name = "arduino-uno-socket", t.push(q);
  const V = l(
    e,
    n,
    new e.BoxGeometry(34.6, 3.4, 7.6),
    M,
    [k, a + 4.2 + 1.5, U]
  );
  V.name = "arduino-uno-mcu", t.push(V);
  const Q = l(
    e,
    n,
    new e.CylinderGeometry(1.15, 1.15, 3.6, 14),
    new e.MeshStandardMaterial({ color: "#2a2d32", roughness: 0.5, metalness: 0.12 }),
    [k - 16.4, a + 5.7, U]
  );
  Q.name = "arduino-uno-mcu-notch", t.push(Q);
  for (let p = 0; p < 14; p += 1) {
    const S = k - 6.5 * Y + p * Y;
    for (const G of [-1, 1]) {
      const v = l(
        e,
        n,
        new e.BoxGeometry(0.55, 3.2, 0.55),
        h,
        [S, a + 1.5, U + G * 4.7]
      );
      v.name = `arduino-uno-mcu-pin:${G < 0 ? "neg" : "pos"}:${p}`, t.push(v);
    }
  }
  ne(e, n, t, {
    columns: 3,
    rows: 2,
    contact: "male",
    heightMm: 5.8,
    pcbTopY: a,
    center: [o * 0.36, 0, D - Y * 2.15],
    along: "x",
    look: c,
    pinBottomY: i,
    namePrefix: "arduino-uno-icsp",
    housingName: "arduino-uno-icsp"
  });
  const F = l(
    e,
    n,
    new e.BoxGeometry(7.2, 1.15, 7.2),
    M,
    [-o * 0.26, a + 0.58, r * 0.14]
  );
  F.name = "arduino-uno-16u2", t.push(F), ne(e, n, t, {
    columns: 3,
    rows: 2,
    contact: "male",
    heightMm: 5.2,
    pcbTopY: a,
    center: [-o * 0.18, 0, r * 0.28],
    along: "x",
    look: c,
    pinBottomY: i,
    namePrefix: "arduino-uno-icsp-usb",
    housingName: "arduino-uno-icsp-usb"
  });
  const y = l(
    e,
    n,
    new e.BoxGeometry(11.5, 3.6, 4.7),
    u,
    [o * 0.02, a + 1.8, -r * 0.12]
  );
  y.name = "arduino-uno-crystal", t.push(y);
  const A = l(
    e,
    n,
    new e.BoxGeometry(6.2, 4.2, 6.2),
    d,
    [-o * 0.2, a + 2.1, r * 0.3]
  );
  A.name = "arduino-uno-reset", t.push(A);
  const C = l(
    e,
    n,
    new e.CylinderGeometry(1.7, 1.7, 1.4, 16),
    new e.MeshStandardMaterial({ color: "#3a3d44", roughness: 0.55, metalness: 0.08 }),
    [-o * 0.2, a + 4.8, r * 0.3]
  );
  C.name = "arduino-uno-reset-cap", t.push(C);
  const L = l(
    e,
    n,
    new e.BoxGeometry(6.6, 2.2, 6.6),
    M,
    [-o * 0.22, a + 1.1, -r * 0.16]
  );
  L.name = "arduino-uno-regulator", t.push(L);
  const H = new e.MeshStandardMaterial({ color: "#1c3f8c", roughness: 0.48, metalness: 0.18 });
  for (const [p, S] of [-0.22, -0.08].entries()) {
    const G = l(
      e,
      n,
      new e.CylinderGeometry(2.4, 2.4, 6.4, 16),
      H,
      [-o * 0.08 + p * 6.2, a + 3.2, r * S]
    );
    G.name = `arduino-uno-cap:${p}`, t.push(G);
  }
  return De(e, n, t, [Zn(o, 13) - 3.2, a + 0.45, D - 4.2], "#e2b03a", "arduino-uno-led-l"), De(e, n, t, [-o * 0.12, a + 0.45, Z + 5.5], "#3dcc6a", "arduino-uno-led-on"), De(e, n, t, [-o * 0.3, a + 0.45, r * 0.08], "#d94a3a", "arduino-uno-led-tx"), De(e, n, t, [-o * 0.3, a + 0.45, r * 0.02], "#d94a3a", "arduino-uno-led-rx"), { group: n, meshes: t };
}
const Ut = {
  kind: "arduino-uno",
  build: zt,
  resolvePinPosition: Ot,
  hidePinMarkers: !0
};
function Yt(e, s) {
  const n = new e.Group(), t = [], [o, r, a] = s.dimensions, i = [0, 0, Math.PI / 2], c = Math.min(r, a) / 2, d = l(
    e,
    n,
    new e.CylinderGeometry(c, c, o * 0.72, 24),
    new e.MeshStandardMaterial({ color: "#1a1d22", roughness: 0.55, metalness: 0.25 }),
    [o * 0.08, 0, 0],
    i
  );
  d.name = "barrel-jack-shell", t.push(d);
  const u = l(
    e,
    n,
    new e.CylinderGeometry(c * 0.78, c * 0.78, o * 0.22, 24),
    new e.MeshStandardMaterial({ color: "#c5ccd3", roughness: 0.28, metalness: 0.9 }),
    [-o / 2 + o * 0.12, 0, 0],
    i
  );
  u.name = "barrel-jack-sleeve", t.push(u);
  const h = l(
    e,
    n,
    new e.CylinderGeometry(c * 0.18, c * 0.18, o * 0.35, 12),
    new e.MeshStandardMaterial({ color: "#d7c089", roughness: 0.3, metalness: 0.88 }),
    [-o * 0.12, 0, 0],
    i
  );
  h.name = "barrel-jack-pin", t.push(h);
  const M = l(
    e,
    n,
    new e.BoxGeometry(o * 0.22, r * 0.72, a),
    new e.MeshStandardMaterial({ color: "#2a2d32", roughness: 0.6, metalness: 0.2 }),
    [o / 2 - o * 0.12, -r * 0.08, 0]
  );
  return M.name = "barrel-jack-flange", t.push(M), { group: n, meshes: t };
}
const Xt = {
  kind: "barrel-jack",
  build: Yt
}, Fn = 1.6, Wt = 4.8, Zt = 3.9, Vt = 4.8, Ft = 1.27, Jt = 1.55, Jn = 5.4;
function Kn() {
  return Fn / 2;
}
function Re(e) {
  return -e / 2 + Y / 2;
}
function Kt(e) {
  const s = e.id.trim().toUpperCase();
  return s === "GND" || s === "G" || s === "-" ? 0 : s === "DQ" || s === "DATA" || s === "DAT" || s === "Q" ? 1 : 2;
}
function Ee(e) {
  return fe(e, 3);
}
function qt() {
  return Ge(Kn(), "male", Jn);
}
function Qt(e, s) {
  return [
    Re(e.dimensions[0]),
    qt(),
    Ee(Kt(s))
  ];
}
function yn(e, s, n, t) {
  const o = s / 2, r = Math.max(n - o, 0.25), a = new e.Shape();
  a.moveTo(0, -o), a.lineTo(r, -o), a.absarc(r, 0, o, -Math.PI / 2, Math.PI / 2, !1), a.lineTo(0, o), a.lineTo(0, -o);
  const i = new e.ExtrudeGeometry(a, {
    depth: t,
    bevelEnabled: !1,
    curveSegments: 20
  });
  return i.rotateX(-Math.PI / 2), i.rotateY(-Math.PI / 2), i.translate(0, -t / 2, n / 2), i.computeVertexNormals(), i;
}
function Ke(e, s, n, t) {
  const o = Math.min(0.45, t.length * 0.22), r = Math.max(t.length - o * 2, t.length * 0.5), a = t.position[1], i = t.position[2], c = l(
    e,
    s,
    new e.BoxGeometry(r, t.height, t.width),
    new e.MeshStandardMaterial({ color: t.body, roughness: 0.55, metalness: 0.08 }),
    t.position
  );
  c.name = t.name, n.push(c);
  const d = new e.MeshStandardMaterial({
    color: t.cap ?? "#c5ccd3",
    roughness: 0.32,
    metalness: 0.4
  });
  for (const u of [-1, 1]) {
    const h = l(
      e,
      s,
      new e.BoxGeometry(o, t.height * 0.92, t.width),
      d,
      [t.position[0] + u * (r / 2 + o / 2 - 0.04), a, i]
    );
    h.name = `${t.name}-cap`, n.push(h);
  }
}
function Tt(e, s) {
  const n = new e.Group(), t = [], [o, , r] = s.dimensions, a = Fn, i = Kn(), c = Math.min(1, o / 16, r / 9), d = Wt * c, u = Zt * c, h = Vt * c, M = Ft * c, f = Jt * c, m = l(
    e,
    n,
    new e.BoxGeometry(o, a, r),
    new e.MeshStandardMaterial({ color: "#1560b8", roughness: 0.55, metalness: 0.08 })
  );
  m.name = "ds18b20-pcb", t.push(m);
  const w = o / 2 - 1.15, b = Math.min(o * 0.18, w - d / 2 - 1.2), x = i + f + h / 2, g = new e.MeshStandardMaterial({ color: "#1a1a1a", roughness: 0.55, metalness: 0.04 }), P = l(e, n, yn(e, d, u, h), g, [b, x, 0]);
  P.name = "ds18b20-to92", t.push(P);
  const I = l(
    e,
    n,
    new e.BoxGeometry(d * 0.62, h * 0.62, 0.12),
    new e.MeshStandardMaterial({ color: "#2a2a2a", roughness: 0.7, metalness: 0.02 }),
    [b, x, u / 2 + 0.02]
  );
  I.name = "ds18b20-to92-mark", t.push(I);
  const O = l(
    e,
    n,
    yn(e, d * 1.22, u * 1.18, 0.12),
    new e.MeshStandardMaterial({ color: "#f4f6f8", roughness: 0.7, metalness: 0.02 }),
    [b, i + 0.06, 0]
  );
  O.name = "ds18b20-to92-silk", t.push(O);
  const N = new e.MeshStandardMaterial({ color: "#c5ccd3", roughness: 0.32, metalness: 0.4 }), $ = new e.MeshStandardMaterial({ color: "#b7c0c8", roughness: 0.38, metalness: 0.45 }), D = 0.42 * c, Z = i + f + 0.2, z = Math.max(Z - -i, 1.2);
  for (let y = 0; y < 3; y += 1) {
    const A = b + (y - 1) * M, C = u / 2 - 0.35, L = l(
      e,
      n,
      new e.BoxGeometry(D, z, D),
      N,
      [A, (Z + -i) / 2, C]
    );
    L.name = `ds18b20-lead:${y}`, t.push(L);
    const H = l(
      e,
      n,
      new e.SphereGeometry(0.45 * c, 10, 8),
      $,
      [A, i + 0.12, C]
    );
    H.scale.set(1, 0.55, 1), H.name = `ds18b20-solder:${y}`, t.push(H);
  }
  const j = i + 0.32, k = (Re(o) + Y / 2 + b - d / 2) / 2;
  Ke(e, n, t, {
    length: 3.2 * c,
    width: 1.6 * c,
    height: 0.55,
    position: [k, j, r * 0.22],
    name: "ds18b20-r1",
    body: "#1c1c1c"
  }), Ke(e, n, t, {
    length: 2 * c,
    width: 1.25 * c,
    height: 0.45,
    position: [k, j - 0.04, r * 0.02],
    name: "ds18b20-r2",
    body: "#1c1c1c"
  });
  const U = new e.Color("#e23d28");
  Ke(e, n, t, {
    length: 2 * c,
    width: 1.25 * c,
    height: 0.5,
    position: [k + 0.35, j, -r * 0.22],
    name: "ds18b20-led",
    body: "#f2d9c8",
    cap: "#c5ccd3"
  });
  const q = l(
    e,
    n,
    new e.BoxGeometry(1.1 * c, 0.22, 0.85 * c),
    new e.MeshStandardMaterial({
      color: U,
      roughness: 0.28,
      metalness: 0.05,
      emissive: U,
      emissiveIntensity: 0.35
    }),
    [k + 0.35, j + 0.28, -r * 0.22]
  );
  q.name = "ds18b20-led-lens", t.push(q);
  const V = new e.MeshStandardMaterial({ color: "#d7c089", roughness: 0.32, metalness: 0.4 }), Q = new e.MeshStandardMaterial({ color: "#0b0b0b", roughness: 0.78, metalness: 0.08 });
  for (let y = 0; y < 3; y += 1) {
    const A = Ee(y), C = l(
      e,
      n,
      new e.CylinderGeometry(0.7, 0.7, 0.22, 12),
      V,
      [w, i + 0.04, A]
    );
    C.name = `ds18b20-pad:${y}`, t.push(C);
    const L = l(
      e,
      n,
      new e.CylinderGeometry(0.32, 0.32, a + 0.2, 10),
      Q,
      [w, 0, A]
    );
    L.name = `ds18b20-pad-hole:${y}`, t.push(L);
  }
  const F = ["GND", "DQ", "VDD"];
  for (let y = 0; y < 3; y += 1)
    ne(e, n, t, {
      columns: 1,
      rows: 1,
      along: "z",
      contact: "male",
      heightMm: Jn,
      pcbTopY: i,
      center: [Re(o), 0, Ee(y)],
      namePrefix: "ds18b20-header",
      housingName: `ds18b20-header:${y}`,
      pinName: () => `ds18b20-header-pin:${F[y]}`,
      pinUserData: () => ({ kind: "ds18b20-header-pin", pinId: F[y], column: y }),
      pinBottomY: -i - 0.5
    });
  return { group: n, meshes: t };
}
const Ht = {
  kind: "ds18b20",
  build: Tt,
  resolvePinPosition: Qt,
  hidePinMarkers: !0
}, Rt = Y, Ze = 19, Ie = 1.6, $s = mt, js = pt, zs = Mt, Us = ft, Et = 25.5, eo = 18, no = 3.1, re = 0.8, Ce = 6.2;
function Ys() {
  return gt(Ze);
}
function xn(e) {
  return fe(e, Ze);
}
function to(e) {
  return bt(e, Ze);
}
function en(e, s) {
  const n = e / 2 - Rt / 2;
  return s === "left" ? n : -n;
}
function Xs() {
  return wt(Ie / 2);
}
function Sn() {
  return Ge(Ie / 2, "male");
}
function oo(e, s, n) {
  const t = cn(e, s);
  if (t !== void 0) {
    const o = t <= 19 ? 19 - t : t - 20, r = t <= 19 ? "right" : "left";
    return [xn(o), Sn(), en(e.dimensions[2], r)];
  }
  return [xn(n.index), Sn(), en(e.dimensions[2], s.side)];
}
function qe(e, s) {
  return `${e}:${s}`;
}
function Qe(e, s, n, t, o, r) {
  const a = l(
    e,
    s,
    new e.BoxGeometry(1.6, 0.55, 0.8),
    new e.MeshStandardMaterial({ color: o, roughness: 0.32, metalness: 0.08, emissive: o, emissiveIntensity: 0.28 }),
    t
  );
  a.name = r, n.push(a);
}
function Pn(e, s, n, t, o, r) {
  const a = Ie / 2, i = l(
    e,
    s,
    new e.BoxGeometry(6, 3.4, 6),
    r,
    [t[0], a + 1.7, t[2]]
  );
  i.name = o, n.push(i);
  const c = l(
    e,
    s,
    new e.CylinderGeometry(1.45, 1.45, 1.15, 14),
    new e.MeshStandardMaterial({ color: "#ece6d8", roughness: 0.55, metalness: 0.04 }),
    [t[0], a + 3.85, t[2]]
  );
  c.name = `${o}-cap`, n.push(c);
}
function so(e, s) {
  const n = new e.Group(), t = [], [o, , r] = s.dimensions, a = Ie / 2, i = new e.MeshStandardMaterial({ color: "#1a1d22", roughness: 0.62, metalness: 0.1 }), c = new e.MeshStandardMaterial({ color: "#141414", roughness: 0.48, metalness: 0.16 }), d = new e.MeshStandardMaterial({ color: "#c5ccd3", roughness: 0.34, metalness: 0.4 }), u = new e.MeshStandardMaterial({ color: "#d7c089", roughness: 0.32, metalness: 0.42 }), h = new e.MeshStandardMaterial({ color: "#161616", roughness: 0.58, metalness: 0.08 }), M = l(
    e,
    n,
    new e.BoxGeometry(o, Ie, r),
    new e.MeshStandardMaterial({ color: "#2a2f36", roughness: 0.58, metalness: 0.08 })
  );
  M.name = "esp32-pcb", t.push(M), We(e, n, t, {
    position: [-o / 2 + ie.depth / 2 - 1.3, a + ie.height / 2 - 0.12, 0],
    facing: "-x",
    namePrefix: "esp32-usb",
    // WHY: default USB silver blows out to white on this dark board under hemisphere light.
    look: {
      shell: d,
      cavity: new e.MeshStandardMaterial({ color: "#14161a", roughness: 0.72, metalness: 0.12 }),
      tongue: new e.MeshStandardMaterial({ color: "#c5cad1", roughness: 0.48, metalness: 0.18 })
    }
  }), Pn(e, n, t, [-o / 2 + 11, 0, 6.4], "esp32-boot", i), Pn(e, n, t, [-o / 2 + 11, 0, -6.4], "esp32-en", i);
  const f = l(
    e,
    n,
    new e.BoxGeometry(9.9, 1.15, 6),
    c,
    [-o / 2 + 19.5, a + 0.58, 2.6]
  );
  f.name = "esp32-uart", t.push(f);
  const m = l(
    e,
    n,
    new e.BoxGeometry(6.6, 1.7, 3.6),
    c,
    [-o / 2 + 19.2, a + 0.85, -3.6]
  );
  m.name = "esp32-ldo", t.push(m);
  const w = l(
    e,
    n,
    new e.BoxGeometry(3.2, 0.45, 3.2),
    d,
    [-o / 2 + 22.6, a + 0.28, -3.6]
  );
  w.name = "esp32-ldo-tab", t.push(w);
  const b = l(
    e,
    n,
    new e.BoxGeometry(5, 1.25, 3.2),
    d,
    [-o / 2 + 19.6, a + 0.62, -0.2]
  );
  b.name = "esp32-crystal", t.push(b);
  const x = l(
    e,
    n,
    new e.CylinderGeometry(1.7, 1.7, 3.8, 14),
    new e.MeshStandardMaterial({ color: "#1c3f8c", roughness: 0.48, metalness: 0.16 }),
    [-o / 2 + 24.2, a + 1.9, -4]
  );
  x.name = "esp32-cap", t.push(x), Qe(e, n, t, [-o / 2 + 23.6, a + 0.35, 8], "#d94a3a", "esp32-led-pwr"), Qe(e, n, t, [-o / 2 + 23.6, a + 0.35, 9.2], "#3dcc6a", "esp32-led-tx"), Qe(e, n, t, [-o / 2 + 23.6, a + 0.35, 10.4], "#3dcc6a", "esp32-led-rx");
  const g = Math.min(eo, Math.max(12, r - 7)), P = Math.min(Et, o * 0.55), I = o / 2 - P / 2 - 0.4, O = a + re / 2, N = l(
    e,
    n,
    new e.BoxGeometry(P, re, g),
    h,
    [I, O, 0]
  );
  N.name = "esp32-module", t.push(N);
  const $ = P - Ce - 0.9, D = no - re, Z = I - P / 2 + 0.45 + $ / 2, z = l(
    e,
    n,
    new e.BoxGeometry($, D, g - 1.6),
    d,
    [Z, a + re + D / 2, 0]
  );
  z.name = "esp32-shield", t.push(z);
  const j = l(
    e,
    n,
    new e.BoxGeometry($ * 0.42, 0.22, (g - 1.6) * 0.38),
    new e.MeshStandardMaterial({ color: "#9aa3ad", roughness: 0.4, metalness: 0.28 }),
    [Z - 1.2, a + re + D - 0.02, 0]
  );
  j.name = "esp32-shield-mark", j.receiveShadow = !1, t.push(j);
  const k = I + P / 2 - Ce / 2, U = l(
    e,
    n,
    new e.BoxGeometry(Ce - 0.4, 0.12, g * 0.78),
    new e.MeshStandardMaterial({ color: "#3a3228", roughness: 0.62, metalness: 0.08 }),
    [k, a + re + 0.02, 0]
  );
  U.name = "esp32-antenna", t.push(U), [
    { size: [0.45, 0.16, g * 0.62], pos: [k + 1.9, a + re + 0.12, 0] },
    { size: [Ce * 0.72, 0.16, 0.45], pos: [k, a + re + 0.12, g * 0.28] },
    { size: [Ce * 0.42, 0.16, 0.45], pos: [k - 0.4, a + re + 0.12, 0.2] },
    { size: [0.45, 0.16, g * 0.22], pos: [k - 1.4, a + re + 0.12, -g * 0.12] }
  ].forEach((y, A) => {
    const C = l(e, n, new e.BoxGeometry(...y.size), u, y.pos);
    C.name = `esp32-antenna-trace:${A}`, t.push(C);
  });
  for (let y = 0; y < 8; y += 1) {
    const A = I - P / 2 + 1.6 + y * (($ - 1.2) / 7);
    for (const C of [-1, 1]) {
      const L = l(
        e,
        n,
        new e.BoxGeometry(1.05, 0.28, 0.7),
        u,
        [A, a + re / 2, C * (g / 2 - 0.15)]
      );
      L.name = `esp32-module-pad:${C < 0 ? "neg" : "pos"}:${y}`, t.push(L);
    }
  }
  const V = /* @__PURE__ */ new Map();
  for (const y of s.pins) {
    const A = an(s, y), C = to(A[0]), L = A[2] >= 0 ? "left" : "right";
    V.set(qe(L, C), y);
  }
  const Q = _e(e), F = -a - 0.5;
  for (const y of ["left", "right"])
    ne(e, n, t, {
      columns: Ze,
      rows: 1,
      contact: "male",
      pcbTopY: a,
      center: [0, 0, en(r, y)],
      look: Q,
      pinBottomY: F,
      namePrefix: "esp32-header",
      housingName: `esp32-header-housing:${y}`,
      pinName: (A, C) => {
        const L = V.get(qe(y, C));
        return L ? `esp32-header-pin:${L.id}` : `esp32-header-pin:${y}:${C}`;
      },
      pinUserData: (A, C) => ({ kind: "esp32-header-pin", pinId: V.get(qe(y, C))?.id, side: y, index: C, row: A })
    });
  return { group: n, meshes: t };
}
const ro = {
  kind: "esp32",
  build: so,
  resolvePinPosition: oo,
  hidePinMarkers: !0
};
function ao(e, s) {
  const n = new e.Group(), t = [], [o, r, a] = s.dimensions, i = l(
    e,
    n,
    new e.BoxGeometry(o, r * 0.08, a),
    new e.MeshStandardMaterial({ color: "#1f7a3a", roughness: 0.58, metalness: 0.1 })
  );
  t.push(i);
  const c = l(
    e,
    n,
    new e.BoxGeometry(o * 0.28, r * 0.07, a * 0.38),
    new e.MeshStandardMaterial({ color: "#101010", roughness: 0.35, metalness: 0.25 }),
    [0, r * 0.08, 0]
  );
  t.push(c);
  for (let d = 0; d < 2; d += 1) {
    const u = l(
      e,
      n,
      new e.BoxGeometry(o * 0.12, r * 0.14, a * 0.18),
      new e.MeshStandardMaterial({ color: "#1a1a1a", roughness: 0.55, metalness: 0.35 }),
      [(d === 0 ? -1 : 1) * o * 0.28, r * 0.06, 0]
    );
    t.push(u);
    const h = l(
      e,
      n,
      new e.CylinderGeometry(o * 0.025, o * 0.025, r * 0.03, 16),
      new e.MeshStandardMaterial({ color: "#9aa0a6", roughness: 0.25, metalness: 0.9 }),
      [(d === 0 ? -1 : 1) * o * 0.28, r * 0.14, 0]
    );
    t.push(h);
  }
  return { group: n, meshes: t };
}
const io = {
  kind: "hx711",
  build: ao
}, qn = 1.6, un = 20, we = { depth: 21.2, width: 16, height: 13.5 }, $e = { depth: 14.5, width: 12.5, height: 5.2 }, je = { depth: 10.5, width: 8.8, height: 4.8 }, ee = { depth: 12, radius: 5.5 }, co = 2.4;
function te() {
  return qn / 2;
}
function T(e) {
  return te() + e / 2 - 0.15;
}
function Qn(e) {
  const [s, , n] = e.dimensions, t = n / 2 - Y;
  return [-s * 0.02, 0, t];
}
function lo() {
  return Ge(te(), "male");
}
function Gn(e, s) {
  const n = Math.max(1, Math.min(40, s)), t = Math.floor((n - 1) / 2), o = n % 2 === 1 ? 1 : 0;
  return {
    x: e[0] + fe(t, un),
    z: e[2] + Ln(o, 2)
  };
}
function uo(e, s) {
  const n = s * 2 + (e === 1 ? 1 : 2);
  return { kind: "jetson-gpio-pin", row: e, column: s, pinNumber: n };
}
function Tn(e, s, n, t, o, r, a) {
  const i = l(
    e,
    s,
    new e.BoxGeometry(t, qn, o),
    new e.MeshStandardMaterial({ color: r, roughness: 0.55, metalness: 0.12 })
  );
  i.name = a, n.push(i);
}
function Hn(e, s, n, t, o, r) {
  const a = _e(e);
  ne(e, s, n, {
    columns: un,
    rows: 2,
    contact: "male",
    pcbTopY: te(),
    center: Qn(t),
    look: a,
    namePrefix: o,
    housingName: r,
    pinUserData: uo
  });
}
function ho(e, s, n, t, o, r, a) {
  const i = te(), c = l(
    e,
    s,
    new e.BoxGeometry(r, 2.2, r),
    new e.MeshStandardMaterial({ color: "#8a9098", roughness: 0.42, metalness: 0.55 }),
    [t, i + 1.1, o]
  );
  c.name = `${a}-base`, n.push(c);
  const d = 5;
  for (let u = 0; u < d; u += 1) {
    const h = -r / 2 + (u + 0.5) * (r / d), M = l(
      e,
      s,
      new e.BoxGeometry(r * 0.82, 8.5, 0.75),
      new e.MeshStandardMaterial({ color: "#a8b0b8", roughness: 0.38, metalness: 0.62 }),
      [t, i + 5.8, o + h]
    );
    M.name = `${a}-fin:${u}`, n.push(M);
  }
}
function mo(e, s, n, t, o, r, a) {
  const i = te(), c = 6.8, d = l(
    e,
    s,
    new e.BoxGeometry(r, c, r),
    new e.MeshStandardMaterial({ color: "#1a1d22", roughness: 0.62, metalness: 0.1 }),
    [t, i + c / 2, o]
  );
  d.name = `${a}-housing`, n.push(d);
  const u = i + c + 1.4, h = l(
    e,
    s,
    new e.CylinderGeometry(r * 0.12, r * 0.12, 1, 16),
    new e.MeshStandardMaterial({ color: "#2a2f36", roughness: 0.5, metalness: 0.2 }),
    [t, u, o]
  );
  h.name = `${a}-hub`, n.push(h);
  const M = new e.MeshStandardMaterial({ color: "#6a7580", roughness: 0.48, metalness: 0.22 });
  for (let w = 0; w < 4; w += 1) {
    const b = l(
      e,
      s,
      new e.BoxGeometry(r * 0.36, 0.42, r * 0.11),
      M,
      [t + (w % 2 === 0 ? r * 0.17 : -r * 0.17), u, o + (w < 2 ? r * 0.17 : -r * 0.17)]
    );
    b.name = `${a}-blade:${w}`, n.push(b);
  }
  const f = u + 1.35, m = new e.MeshStandardMaterial({ color: "#2a2f36", roughness: 0.68, metalness: 0.12 });
  for (const [w, b] of [[0, 0], [1, Math.PI / 2]]) {
    const x = l(
      e,
      s,
      new e.BoxGeometry(r * 0.78, 0.28, r * 0.07),
      m,
      [t, f, o],
      [0, 0, b]
    );
    x.name = `${a}-grille:${w}`, n.push(x);
  }
}
function Pe(e, s) {
  const n = e * 0.2;
  return s === 0 ? n : n - K.width - co;
}
function po(e) {
  const s = T(K.height), n = e === 0 ? -K.height * 0.22 : K.height * 0.22;
  return s + n;
}
function Me(e, s, n) {
  return [e / 2 - K.depth / 2 + 1.4, po(n), s];
}
function Mo(e, s, n, t, o, r, a) {
  const { depth: i, width: c, height: d } = $e, u = l(e, s, new e.BoxGeometry(i, d, c), o, t);
  u.name = a, n.push(u);
  const h = l(
    e,
    s,
    new e.BoxGeometry(i * 0.5, d * 0.55, c * 0.62),
    r,
    [t[0] - i / 2 + i * 0.28, t[1], t[2]]
  );
  h.name = `${a}:cavity`, n.push(h);
}
function fo(e, s, n, t, o, r, a) {
  const { depth: i, width: c, height: d } = je, u = l(e, s, new e.BoxGeometry(i, d, c), o, t);
  u.name = a, n.push(u);
  const h = l(
    e,
    s,
    new e.BoxGeometry(i * 0.48, d * 0.5, c * 0.55),
    r,
    [t[0] - i / 2 + i * 0.26, t[1], t[2]]
  );
  h.name = `${a}:cavity`, n.push(h);
}
function Rn(e, s, n, t, o, r, a) {
  const i = [0, 0, Math.PI / 2], c = l(
    e,
    s,
    new e.CylinderGeometry(ee.radius, ee.radius, ee.depth * 0.72, 20),
    o,
    t,
    i
  );
  c.name = a, n.push(c);
  const d = l(
    e,
    s,
    new e.CylinderGeometry(ee.radius * 0.82, ee.radius * 0.82, ee.depth * 0.22, 20),
    r,
    [t[0] - ee.depth * 0.34, t[1], t[2]],
    i
  );
  d.name = `${a}-sleeve`, n.push(d);
}
function En(e, s, n, t, o, r, a) {
  const { depth: i, width: c, height: d } = we, u = l(e, s, new e.BoxGeometry(i, d, c), o, t);
  u.name = a, n.push(u);
  const h = l(
    e,
    s,
    new e.BoxGeometry(i * 0.42, d * 0.62, c * 0.7),
    r,
    [t[0] + i / 2 - i * 0.24, t[1] - d * 0.04, t[2]]
  );
  h.name = `${a}:cavity`, n.push(h);
}
function et(e, s, n, t, o, r) {
  const a = te(), i = l(
    e,
    s,
    new e.BoxGeometry(22, 1.1, 16.5),
    new e.MeshStandardMaterial({ color: "#151515", roughness: 0.58, metalness: 0.12 }),
    [t, a + 0.55, o]
  );
  i.name = r, n.push(i);
}
function nt(e, s, n, t, o, r) {
  const a = te(), i = l(
    e,
    s,
    new e.BoxGeometry(20, 2.2, 4.2),
    new e.MeshStandardMaterial({ color: "#1a1d22", roughness: 0.62, metalness: 0.1 }),
    [t, a + 1.1, o]
  );
  i.name = r, n.push(i);
}
function wo(e, s) {
  const n = new e.Group(), t = [], [o, , r] = s.dimensions, a = new e.MeshStandardMaterial({ color: "#b7bec6", roughness: 0.34, metalness: 0.4 }), i = new e.MeshStandardMaterial({ color: "#151515", roughness: 0.62, metalness: 0.12 }), c = new e.MeshStandardMaterial({ color: "#14161a", roughness: 0.72, metalness: 0.12 });
  Tn(e, n, t, o, r, "#3d6f8a", "jetson-nano-pcb"), Hn(e, n, t, s, "jetson-nano-gpio", "jetson-nano-gpio"), ho(e, n, t, o * 0.12, -r * 0.08, 34, "jetson-nano-heatsink"), et(e, n, t, -o * 0.28, -r * 0.22, "jetson-nano-m2"), nt(e, n, t, o * 0.3, -r / 2 + 4, "jetson-nano-camera"), Rn(
    e,
    n,
    t,
    [-o / 2 + ee.depth / 2 - 1.5, te() + ee.radius - 0.4, r * 0.28],
    i,
    a,
    "jetson-nano-power"
  ), ke(e, n, t, {
    position: [-o / 2 + ae.depth / 2 - 1.2, T(ae.height), r * 0.08],
    facing: "-x",
    namePrefix: "jetson-nano-micro-usb"
  }), Mo(
    e,
    n,
    t,
    [-o / 2 + $e.depth / 2 - 1.4, T($e.height), -r * 0.22],
    a,
    c,
    "jetson-nano-hdmi"
  );
  const d = o / 2 - K.depth / 2 + 1.4, u = T(K.height);
  for (const [M, f] of [[0, "jetson-nano-usb:0"], [1, "jetson-nano-usb:2"]])
    ye(e, n, t, {
      position: [d, u, Pe(r, M)],
      facing: "+x",
      stacked: !0,
      generation: 3,
      namePrefix: f
    });
  En(
    e,
    n,
    t,
    [o / 2 - we.depth / 2 + 1.5, T(we.height), r * 0.3],
    a,
    i,
    "jetson-nano-eth"
  );
  const h = l(
    e,
    n,
    new e.BoxGeometry(69, 1.2, 45),
    new e.MeshStandardMaterial({ color: "#1a1a1a", roughness: 0.48, metalness: 0.18 }),
    [o * 0.1, te() + 0.6, -r * 0.06]
  );
  return h.name = "jetson-nano-module", t.push(h), { group: n, meshes: t };
}
function bo(e, s) {
  const n = new e.Group(), t = [], [o, , r] = s.dimensions, a = new e.MeshStandardMaterial({ color: "#b7bec6", roughness: 0.34, metalness: 0.4 }), i = new e.MeshStandardMaterial({ color: "#151515", roughness: 0.62, metalness: 0.12 }), c = new e.MeshStandardMaterial({ color: "#14161a", roughness: 0.72, metalness: 0.12 });
  Tn(e, n, t, o, r, "#1f2429", "jetson-orin-nano-pcb"), Hn(e, n, t, s, "jetson-orin-nano-gpio", "jetson-orin-nano-gpio"), mo(e, n, t, o * 0.1, -r * 0.06, 36, "jetson-orin-nano-fan"), et(e, n, t, -o * 0.26, -r * 0.2, "jetson-orin-nano-m2"), nt(e, n, t, o * 0.28, -r / 2 + 4, "jetson-orin-nano-camera"), Rn(
    e,
    n,
    t,
    [-o / 2 + ee.depth / 2 - 1.5, te() + ee.radius - 0.4, r * 0.28],
    i,
    a,
    "jetson-orin-nano-power"
  ), We(e, n, t, {
    position: [-o / 2 + ie.depth / 2 - 1.2, T(ie.height), r * 0.08],
    facing: "-x",
    namePrefix: "jetson-orin-nano-usbc"
  }), fo(
    e,
    n,
    t,
    [-o / 2 + je.depth / 2 - 1.3, T(je.height), -r * 0.18],
    a,
    c,
    "jetson-orin-nano-dp"
  );
  const d = o / 2 - K.depth / 2 + 1.4, u = T(K.height);
  for (const [M, f] of [[0, "jetson-orin-nano-usb:0"], [1, "jetson-orin-nano-usb:2"]])
    ye(e, n, t, {
      position: [d, u, Pe(r, M)],
      facing: "+x",
      stacked: !0,
      generation: 3,
      namePrefix: f
    });
  En(
    e,
    n,
    t,
    [o / 2 - we.depth / 2 + 1.5, T(we.height), r * 0.28],
    a,
    i,
    "jetson-orin-nano-eth"
  );
  const h = l(
    e,
    n,
    new e.BoxGeometry(70, 1.2, 45),
    new e.MeshStandardMaterial({ color: "#141414", roughness: 0.48, metalness: 0.18 }),
    [o * 0.08, te() + 0.6, -r * 0.05]
  );
  return h.name = "jetson-orin-nano-module", t.push(h), { group: n, meshes: t };
}
function go(e) {
  return e.trim().toUpperCase().replace(/[\s_\-]+/g, "");
}
function yo(e, s) {
  const [n, , t] = e.dimensions;
  if (s === "POWER" || s === "DC" || s === "BARREL" || s === "VIN")
    return [-n / 2, te() + ee.radius - 0.4, t * 0.28];
  if (s === "MICROUSB" || s === "USB" || s === "OTG")
    return [-n / 2, T(ae.height), t * 0.08];
  if (s === "HDMI") return [-n / 2, T($e.height), -t * 0.22];
  if (s === "ETH" || s === "RJ45" || s === "LAN" || s === "ETHERNET")
    return [n / 2, T(we.height), t * 0.3];
  const o = Pe(t, 0), r = Pe(t, 1);
  if (s === "USB0") return Me(n, o, 0);
  if (s === "USB1") return Me(n, o, 1);
  if (s === "USB2") return Me(n, r, 0);
  if (s === "USB3") return Me(n, r, 1);
}
function xo(e, s) {
  const [n, , t] = e.dimensions;
  if (s === "POWER" || s === "DC" || s === "BARREL" || s === "VIN")
    return [-n / 2, te() + ee.radius - 0.4, t * 0.28];
  if (s === "USBC" || s === "OTG")
    return [-n / 2, T(ie.height), t * 0.08];
  if (s === "DP" || s === "DISPLAYPORT" || s === "DISPLAY")
    return [-n / 2, T(je.height), -t * 0.18];
  if (s === "ETH" || s === "RJ45" || s === "LAN" || s === "ETHERNET")
    return [n / 2, T(we.height), t * 0.28];
  const o = Pe(t, 0), r = Pe(t, 1);
  if (s === "USB0") return Me(n, o, 0);
  if (s === "USB1") return Me(n, o, 1);
  if (s === "USB2") return Me(n, r, 0);
  if (s === "USB3") return Me(n, r, 1);
}
function tt(e, s, n) {
  const t = go(s.id), o = lo(), r = Qn(e);
  if (t === "GPIO" || t === "HEADER" || t === "HAT")
    return [r[0], o, r[2]];
  const a = cn(e, s);
  if (a !== void 0) {
    const u = Gn(r, a);
    return [u.x, o, u.z];
  }
  const i = e.kind === "jetson-orin-nano" ? xo(e, t) : yo(e, t);
  if (i) return i;
  const c = Math.max(0, Math.min(un - 1, n.index)), d = Gn(r, c * 2 + 1);
  return [d.x, o, d.z];
}
const So = {
  kind: "jetson-nano",
  build: wo,
  resolvePinPosition: tt,
  hidePinMarkers: !0
}, Po = {
  kind: "jetson-orin-nano",
  build: bo,
  resolvePinPosition: tt,
  hidePinMarkers: !0
};
function Go(e) {
  const s = e.properties?.pins, n = typeof s == "number" ? s : Number(s);
  return Number.isInteger(n) && n >= 2 && n <= 6 ? n : 4;
}
function _o(e, s) {
  const n = new e.Group(), t = [], [o, r, a] = s.dimensions, i = Go(s), c = 2.54, d = (i - 1) * c, u = l(
    e,
    n,
    new e.BoxGeometry(o, r * 0.72, a),
    new e.MeshStandardMaterial({ color: "#f2f0e8", roughness: 0.72, metalness: 0.04 })
  );
  u.name = "jst-housing", t.push(u);
  const h = l(
    e,
    n,
    new e.BoxGeometry(o * 0.35, r * 0.22, a * 0.28),
    new e.MeshStandardMaterial({ color: "#e7e4da", roughness: 0.7, metalness: 0.04 }),
    [0, r * 0.42, 0]
  );
  h.name = "jst-latch", t.push(h);
  const M = -d / 2;
  for (let f = 0; f < i; f += 1) {
    const m = l(
      e,
      n,
      new e.BoxGeometry(1.2, r * 0.35, 1.2),
      new e.MeshStandardMaterial({ color: "#d7c089", roughness: 0.3, metalness: 0.88 }),
      [M + f * c, -r * 0.12, 0]
    );
    m.name = "jst-pin", t.push(m);
  }
  return { group: n, meshes: t };
}
const Bo = {
  kind: "jst-connector",
  build: _o
}, nn = ["GND", "VCC", "SDA", "SCL"], _n = 3.2, Co = 0.4;
function Bn(e, s) {
  const [n, t, o] = e.dimensions, r = Math.max(t * 0.14, 1.6), a = -t / 2, i = a + r, c = 7.2, d = Math.max(t * 0.42, 5.6), u = n * 0.86, h = Math.max(o - c - 1.2, o * 0.58), M = -o / 2 + 1.05 + h / 2, f = i + d / 2, m = i + d, w = Math.min(u * s.canWindowScale, s.windowWMm * (n / s.referenceW)), b = w / s.windowAspect, x = 1.5, g = Math.min(42, n * 0.55), P = 16, I = o / 2 - 1.2, O = a - 2.7, N = O - x / 2, $ = [n * 0.1, 0, I + P / 2 - Y / 2];
  return {
    w: n,
    h: t,
    d: o,
    pcbH: r,
    pcbBottomY: a,
    pcbTopY: i,
    pcbCenterY: a + r / 2,
    canH: d,
    canW: u,
    canD: h,
    canY: f,
    canZ: M,
    canTop: m,
    windowW: w,
    windowD: b,
    packH: x,
    packW: g,
    packD: P,
    packY: N,
    packZ: I,
    packTopY: O,
    i2cCenter: $
  };
}
function Io(e) {
  const s = e.id.trim().toUpperCase(), n = nn.indexOf(s);
  return n >= 0 ? n : 0;
}
function vo(e, s, n, t, o, r, a) {
  const { canZ: i, windowW: c, windowD: d } = t, u = new e.MeshStandardMaterial({ color: "#141618", roughness: 0.62, metalness: 0.06 }), h = 4, M = 3.6, f = c + h * 2, m = [
    { name: "n", size: [f, r, M], pos: [0, o, i + d / 2 + M / 2] },
    { name: "s", size: [f, r, M], pos: [0, o, i - d / 2 - M / 2] },
    { name: "w", size: [h, r, d], pos: [-c / 2 - h / 2, o, i] },
    { name: "e", size: [h, r, d], pos: [c / 2 + h / 2, o, i] }
  ];
  for (const w of m) {
    const b = l(e, s, new e.BoxGeometry(...w.size), u, w.pos);
    b.name = `${a}-bezel:${w.name}`, n.push(b);
  }
}
function ot(e) {
  const { kind: s, columns: n, rows: t } = e;
  function o(a, i) {
    const c = Bn(a, e), { i2cCenter: d, packTopY: u } = c;
    return [
      d[0] + fe(Io(i), nn.length),
      Ge(u, "male", _n),
      d[2]
    ];
  }
  function r(a, i) {
    const c = new a.Group(), d = [], u = Bn(i, e), {
      w: h,
      d: M,
      pcbH: f,
      pcbBottomY: m,
      pcbCenterY: w,
      canH: b,
      canW: x,
      canD: g,
      canY: P,
      canZ: I,
      canTop: O,
      windowW: N,
      windowD: $,
      packH: D,
      packW: Z,
      packD: z,
      packY: j,
      packZ: k,
      packTopY: U,
      i2cCenter: q
    } = u, V = l(
      a,
      c,
      new a.BoxGeometry(h, f, M),
      new a.MeshStandardMaterial({ color: "#1f6b42", roughness: 0.58, metalness: 0.1 }),
      [0, w, 0]
    );
    V.name = `${s}-pcb`, d.push(V);
    const Q = 1.15, F = 2.6, y = 2.5;
    for (const [me, be] of [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1]
    ]) {
      const Be = l(
        a,
        c,
        new a.CylinderGeometry(Q, Q, f + 0.45, 12),
        new a.MeshStandardMaterial({ color: "#1a1a1a", roughness: 0.7, metalness: 0.08 }),
        [me * (h / 2 - F), w, be * (M / 2 - y)]
      );
      Be.name = `${s}-hole`, d.push(Be);
    }
    const A = l(
      a,
      c,
      new a.BoxGeometry(x, b, g),
      new a.MeshStandardMaterial({ color: "#9aa3ad", roughness: 0.36, metalness: Co }),
      [0, P, I]
    );
    A.name = `${s}-can`, d.push(A);
    const C = 1.2, L = l(
      a,
      c,
      new a.BoxGeometry(N, C, $),
      new a.MeshStandardMaterial({
        color: "#8fbf3a",
        roughness: 0.18,
        metalness: 0.06,
        emissive: "#5a8a22",
        emissiveIntensity: 0.38
      }),
      [0, O + C * 0.18, I]
    );
    L.name = `${s}-glass`, d.push(L);
    const H = 1.7, S = L.position.y + C / 2 - H / 2 + 0.55;
    vo(a, c, d, u, S, H, s);
    const G = N / n * 0.84, v = $ / t * 0.74, _ = N / n, X = $ / t, R = 0.28, de = L.position.y + C / 2 + R / 2 + 0.08, le = new a.MeshStandardMaterial({
      color: "#243218",
      roughness: 0.45,
      metalness: 0.04,
      emissive: "#1a2810",
      emissiveIntensity: 0.12
    });
    for (let me = 0; me < t; me += 1)
      for (let be = 0; be < n; be += 1) {
        const Be = l(
          a,
          c,
          new a.BoxGeometry(G, R, v),
          le,
          [
            -N / 2 + _ * (be + 0.5),
            de,
            I + $ / 2 - X * (me + 0.5)
          ]
        );
        Be.name = `${s}-cell:${me}:${be}`, d.push(Be);
      }
    const W = Math.max(m - U, 2.2), ce = l(
      a,
      c,
      new a.BoxGeometry(Math.min(41, h * 0.52), W, 2.6),
      new a.MeshStandardMaterial({ color: "#151515", roughness: 0.7, metalness: 0.05 }),
      [0, U + W / 2, M / 2 - 3.2]
    );
    ce.name = `${s}-header`, d.push(ce);
    const oe = l(
      a,
      c,
      new a.BoxGeometry(Z, D, z),
      new a.MeshStandardMaterial({ color: "#1f6b42", roughness: 0.55, metalness: 0.1 }),
      [0, j, k]
    );
    oe.name = `${s}-backpack`, d.push(oe);
    const ue = l(
      a,
      c,
      new a.BoxGeometry(10, 0.8, 6),
      new a.MeshStandardMaterial({ color: "#121212", roughness: 0.42, metalness: 0.18 }),
      [-Z * 0.12, j - D / 2 - 0.4, k - 2]
    );
    ue.name = `${s}-chip`, d.push(ue);
    const se = l(
      a,
      c,
      new a.BoxGeometry(6.2, 4.2, 6.2),
      new a.MeshStandardMaterial({ color: "#2c4fa0", roughness: 0.42, metalness: 0.08 }),
      [-Z * 0.22, U + 2.1, k + z * 0.28]
    );
    se.name = `${s}-trimmer`, d.push(se);
    const ve = l(
      a,
      c,
      new a.CylinderGeometry(1.15, 1.15, 0.55, 10),
      new a.MeshStandardMaterial({ color: "#d7c089", roughness: 0.35, metalness: 0.45 }),
      [se.position.x, se.position.y + 2.2, se.position.z]
    );
    return ve.name = `${s}-trimmer-screw`, d.push(ve), ne(a, c, d, {
      columns: nn.length,
      rows: 1,
      along: "x",
      contact: "male",
      heightMm: _n,
      pcbTopY: U,
      center: q,
      namePrefix: `${s}-i2c`,
      housingName: `${s}-i2c`
    }), { group: c, meshes: d };
  }
  return {
    build: r,
    resolvePinPosition: o,
    model: {
      kind: s,
      build: r,
      resolvePinPosition: o,
      hidePinMarkers: !0
    }
  };
}
const hn = ot({
  kind: "lcd1602",
  columns: 16,
  rows: 2,
  // WHY: real 1602 windows are ~64.5 x 16 mm (about 4:1). Keep that ratio as size changes.
  windowWMm: 64.5,
  windowAspect: 4.03,
  referenceW: 80,
  canWindowScale: 0.84
}), Ws = hn.build, Zs = hn.resolvePinPosition, Do = hn.model, mn = ot({
  kind: "lcd2004",
  columns: 20,
  rows: 4,
  // WHY: typical 2004A/I2C modules are 98 x 60 mm with a ~76 x 25.2 mm window (~3:1, not 1602's 4:1).
  windowWMm: 76,
  windowAspect: 76 / 25.2,
  referenceW: 98,
  canWindowScale: 0.9
}), Vs = mn.build, Fs = mn.resolvePinPosition, Ao = mn.model, ko = 2.54, Te = 0.85, No = 0.4;
function st(e) {
  return -e * 0.08;
}
function tn(e, s, n) {
  const t = Math.min(e, s) / 2, o = Math.min(ko, Math.max(t * 0.85, 1.2)) / 2;
  return n === "left" ? -o : o;
}
function Lo(e) {
  return st(e) - 1.15;
}
function Oo(e) {
  const s = e.id.trim().toUpperCase();
  return s === "A" || s === "ANODE" ? "A" : s === "K" || s === "CATHODE" ? "K" : e.side === "left" ? "A" : "K";
}
function $o(e, s) {
  const n = Oo(s), [t, o, r] = e.dimensions;
  return [tn(t, r, n === "A" ? "left" : "right"), Lo(o), 0];
}
function jo(e) {
  return new e.MeshStandardMaterial({
    color: "#c5ccd3",
    roughness: 0.32,
    metalness: No
  });
}
function zo(e, s) {
  const n = new e.Group(), t = [], [o, r, a] = s.dimensions, i = Math.min(o, a) / 2, c = s.color ? Xe(e, s.color) : new e.Color("#e23d28"), d = new e.MeshStandardMaterial({
    color: c,
    roughness: 0.28,
    metalness: 0.05,
    emissive: c,
    emissiveIntensity: 0.22
  }), u = jo(e), h = st(r), f = r / 2 - i, m = Math.max(f - h, i * 0.35), w = h + m / 2, b = l(
    e,
    n,
    new e.CylinderGeometry(i, i, m, 20),
    d,
    [0, w, 0]
  );
  b.name = "led-body", t.push(b);
  const x = l(
    e,
    n,
    new e.SphereGeometry(i, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2),
    d,
    [0, f, 0]
  );
  x.name = "led-dome", t.push(x);
  const g = Math.min(0.5, m * 0.18), P = l(
    e,
    n,
    new e.CylinderGeometry(i * 1.12, i * 1.12, g, 20),
    d,
    [0, h + g / 2, 0]
  );
  P.name = "led-rim", t.push(P);
  const I = 0.25, O = -r / 2, N = [
    { role: "A", x: tn(o, a, "left"), anvil: [0.8, 1.25, 0.8], leadBottom: O + 0.05 },
    { role: "K", x: tn(o, a, "right"), anvil: [1.9, 0.95, 1.6], leadBottom: O + 1.2 }
  ];
  for (const { role: $, x: D, anvil: Z, leadBottom: z } of N) {
    const [j, k, U] = Z, q = h - k / 2 + I, V = l(
      e,
      n,
      new e.BoxGeometry(j, k, U),
      u,
      [D, q, 0]
    );
    V.name = `led-anvil:${$}`, V.userData = { kind: "led-anvil", pinId: $ }, t.push(V);
    const Q = q - k / 2 + 0.18, F = Math.max(Q - z, Te), y = (Q + z) / 2, A = l(
      e,
      n,
      new e.BoxGeometry(Te, F, Te),
      u,
      [D, y, 0]
    );
    A.name = `led-lead:${$}`, A.userData = { kind: "led-lead", pinId: $ }, t.push(A);
  }
  return { group: n, meshes: t };
}
const Uo = {
  kind: "led",
  build: zo,
  resolvePinPosition: $o,
  hidePinMarkers: !0
};
function Yo(e, s) {
  const n = new e.Group(), t = [], [o, r, a] = s.dimensions, i = new e.MeshStandardMaterial({
    color: "#c5ccd3",
    roughness: 0.28,
    metalness: 0.85
  }), c = o * 0.28, d = Math.max(o - c * 2, o * 0.3), u = r * 0.22, h = a * 0.22, M = Math.min(r, a) * 0.22;
  for (const b of [-1, 1]) {
    const x = l(
      e,
      n,
      new e.BoxGeometry(c, r, a),
      i,
      [b * (o / 2 - c / 2), 0, 0]
    );
    x.name = b < 0 ? "load-cell-end-neg" : "load-cell-end-pos", t.push(x);
    const g = l(
      e,
      n,
      new e.CylinderGeometry(M, M, r * 1.08, 20),
      new e.MeshStandardMaterial({ color: "#1a1d22", roughness: 0.82, metalness: 0.08 }),
      [b * (o / 2 - c * 0.45), 0, 0]
    );
    g.name = "load-cell-hole", t.push(g);
  }
  for (const b of [-1, 1]) {
    const x = l(
      e,
      n,
      new e.BoxGeometry(d, u, a),
      i,
      [0, b * (r / 2 - u / 2), 0]
    );
    x.name = b > 0 ? "load-cell-flange-top" : "load-cell-flange-bottom", t.push(x);
  }
  const f = l(
    e,
    n,
    new e.BoxGeometry(d * 0.55, Math.max(r - u * 2, r * 0.2), h),
    i
  );
  f.name = "load-cell-web", t.push(f);
  const m = l(
    e,
    n,
    new e.BoxGeometry(d * 0.28, 0.4, a * 0.55),
    new e.MeshStandardMaterial({ color: "#141414", roughness: 0.7, metalness: 0.05 }),
    [0, r / 2 + 0.15, 0]
  );
  m.name = "load-cell-gauge", t.push(m);
  const w = l(
    e,
    n,
    new e.CylinderGeometry(1.1, 1.1, 12, 12),
    new e.MeshStandardMaterial({ color: "#222222", roughness: 0.75, metalness: 0.05 }),
    [-o * 0.08, 0, a / 2 + 6],
    [Math.PI / 2, 0, 0]
  );
  return w.name = "load-cell-cable", t.push(w), { group: n, meshes: t };
}
const Xo = {
  kind: "load-cell",
  build: Yo
};
function Wo(e, s) {
  const n = new e.Group(), t = [], [o, r, a] = s.dimensions, i = Math.max(r * 0.28, 1.2), c = l(
    e,
    n,
    new e.BoxGeometry(o, i, a),
    new e.MeshStandardMaterial({ color: "#1f6b42", roughness: 0.55, metalness: 0.1 })
  );
  c.name = "max4466-pcb", t.push(c);
  const d = Math.min(a, o) * 0.22, u = Math.max(r * 0.9, 4.2), h = l(
    e,
    n,
    new e.CylinderGeometry(d, d, u, 20),
    new e.MeshStandardMaterial({ color: "#c5ccd3", roughness: 0.32, metalness: 0.88 }),
    [o * 0.28, i / 2 + u / 2, 0]
  );
  h.name = "max4466-mic", t.push(h);
  const M = l(
    e,
    n,
    new e.CylinderGeometry(d * 0.72, d * 0.72, 0.4, 16),
    new e.MeshStandardMaterial({ color: "#2a2d32", roughness: 0.55, metalness: 0.4 }),
    [o * 0.28, i / 2 + u + 0.15, 0]
  );
  M.name = "max4466-grill", t.push(M);
  const f = Math.max(r * 0.45, 2.2), m = l(
    e,
    n,
    new e.CylinderGeometry(a * 0.16, a * 0.16, f, 12),
    new e.MeshStandardMaterial({ color: "#d4af37", roughness: 0.4, metalness: 0.55 }),
    [-o * 0.22, i / 2 + f / 2, a * 0.12]
  );
  m.name = "max4466-trimmer", t.push(m);
  const w = l(
    e,
    n,
    new e.BoxGeometry(o * 0.22, 0.7, a * 0.28),
    new e.MeshStandardMaterial({ color: "#121212", roughness: 0.4, metalness: 0.2 }),
    [-o * 0.08, i / 2 + 0.35, -a * 0.12]
  );
  return w.name = "max4466-chip", t.push(w), ne(e, n, t, {
    columns: 3,
    rows: 1,
    along: "z",
    contact: "male",
    heightMm: 3.2,
    pcbTopY: i / 2,
    center: [-o / 2 + Y / 2, 0, 0],
    namePrefix: "max4466-header",
    housingName: "max4466-header"
  }), { group: n, meshes: t };
}
const Zo = {
  kind: "max4466",
  build: Wo
};
function Vo(e, s) {
  const n = new e.Group(), t = [], [o, r, a] = s.dimensions, i = Math.max(r * 0.28, 1.2), c = l(
    e,
    n,
    new e.BoxGeometry(o, i, a),
    new e.MeshStandardMaterial({ color: "#1a4a8c", roughness: 0.52, metalness: 0.12 })
  );
  c.name = "max9814-pcb", t.push(c);
  const d = Math.min(a, o) * 0.2, u = Math.max(r * 0.95, 4.4), h = l(
    e,
    n,
    new e.CylinderGeometry(d, d, u, 20),
    new e.MeshStandardMaterial({ color: "#c5ccd3", roughness: 0.32, metalness: 0.88 }),
    [o * 0.32, i / 2 + u / 2, 0]
  );
  h.name = "max9814-mic", t.push(h);
  const M = l(
    e,
    n,
    new e.BoxGeometry(o * 0.3, 0.85, a * 0.38),
    new e.MeshStandardMaterial({ color: "#101010", roughness: 0.38, metalness: 0.22 }),
    [0, i / 2 + 0.42, 0]
  );
  M.name = "max9814-chip", t.push(M);
  for (let f = 0; f < 3; f += 1) {
    const m = l(
      e,
      n,
      new e.BoxGeometry(2.2, 0.25, 2.2),
      new e.MeshStandardMaterial({ color: "#d7c089", roughness: 0.28, metalness: 0.9 }),
      [-o * 0.28 + f * 3.1, i / 2 + 0.18, -a * 0.32]
    );
    m.name = "max9814-gain-pad", t.push(m);
  }
  return ne(e, n, t, {
    columns: 5,
    rows: 1,
    along: "z",
    contact: "male",
    heightMm: 3.2,
    pcbTopY: i / 2,
    center: [-o / 2 + Y / 2, 0, 0],
    namePrefix: "max9814-header",
    housingName: "max9814-header"
  }), { group: n, meshes: t };
}
const Fo = {
  kind: "max9814",
  build: Vo
};
function Jo(e, s) {
  const n = new e.Group(), t = [], [o, r, a] = s.dimensions, i = l(
    e,
    n,
    new e.BoxGeometry(o, r, a),
    new e.MeshStandardMaterial({ color: "#20242b", roughness: 0.68, metalness: 0.12 })
  );
  i.name = "power-housing", t.push(i);
  const c = Math.max(r * 0.1, 1.4), d = c * 0.4, u = l(
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
    [0, r / 2 + c / 2 - d, 0]
  );
  u.name = "power-accent", u.receiveShadow = !1, t.push(u);
  const h = r / 2 + c - d, M = Math.max(r * 0.08, 1.1);
  for (let f = 0; f < 2; f += 1) {
    const m = l(
      e,
      n,
      new e.CylinderGeometry(o * 0.05, o * 0.05, M, 16),
      new e.MeshStandardMaterial({ color: "#d4af37", roughness: 0.3, metalness: 0.85 }),
      [(f === 0 ? -1 : 1) * o * 0.28, h + M / 2, 0]
    );
    m.name = "power-terminal", t.push(m);
  }
  return { group: n, meshes: t };
}
const Ko = {
  kind: "power",
  build: Jo
};
function qo(e, s) {
  const n = new e.Group(), t = [], [o, r, a] = s.dimensions, i = o, c = Math.min(r, a) / 2, d = i * 0.16, u = i - d, h = [0, 0, Math.PI / 2], M = new e.MeshStandardMaterial({ color: "#9aa3ad", roughness: 0.18, metalness: 0.96 }), f = l(
    e,
    n,
    new e.CylinderGeometry(c * 1.04, c * 1.04, d, 24),
    new e.MeshStandardMaterial({ color: "#141414", roughness: 0.82, metalness: 0.08 }),
    [-i / 2 + d / 2, 0, 0],
    h
  );
  f.name = "probe-shrink", t.push(f);
  const m = l(
    e,
    n,
    new e.CylinderGeometry(c, c, u, 28),
    M,
    [-i / 2 + d + u / 2, 0, 0],
    h
  );
  return m.name = "probe-shaft", t.push(m), { group: n, meshes: t };
}
const Qo = {
  kind: "probe",
  build: qo
}, To = 85, pn = 56, Ve = 1.5, Cn = 1.35, Le = 58, In = 49, E = 3.5, Ho = E + Le / 2, Ro = E + 25.75, Eo = 32.5, vn = 15, pe = pn - E - 7.7, Mn = pe - 14.8, rt = Mn - 13.5, at = 7.5, it = 45.75, on = 27, ct = 9, Dn = 3, es = 6.14, ze = { depth: 8.1, width: 7.1, height: 3.5 }, Ue = { depth: 21.2, width: 16, height: 13.5 }, Ye = { depth: 14.9, radius: 3 };
function Fe(e) {
  const s = String(e.properties?.variant ?? "4").toLowerCase().replace(/[\s_]+/g, "");
  return s === "5" || s === "5b" || s === "pi5" || s === "raspberrypi5" ? "5" : s.includes("zero") ? "zero" : s.includes("pico") ? "pico" : "4";
}
function dt(e) {
  return e / To;
}
function ns(e) {
  return e / pn;
}
function B(e, s, n, t) {
  return {
    x: -e / 2 + n * dt(e),
    z: -s / 2 + t * ns(s)
  };
}
function Je(e) {
  if (Fe(e) === "4") return Ve;
  const [, s] = e.dimensions;
  return Math.min(s * 0.18, 1.6);
}
function lt(e) {
  const [s, , n] = e.dimensions, t = n / 2 - Y;
  return Fe(e) === "4" ? [B(s, n, Ho, 0).x, 0, t] : [-s * 0.08, 0, t];
}
function ts(e) {
  return Ge(Je(e) / 2, "male");
}
function Oe(e, s, n, t, o, r, a) {
  const i = l(
    e,
    s,
    new e.BoxGeometry(t, o, r),
    new e.MeshStandardMaterial({ color: a, roughness: 0.55, metalness: 0.12 })
  );
  i.name = "raspberry-pi-pcb", n.push(i);
}
function sn(e, s, n, t, o) {
  const r = Je(t);
  ne(e, s, n, {
    columns: 20,
    rows: 2,
    // Stacking-style contacts: recessed female wells vanish from the default +Z camera.
    contact: "male",
    pcbTopY: r / 2,
    center: lt(t),
    look: o,
    namePrefix: "raspberry-pi-gpio",
    housingName: "raspberry-pi-gpio"
  });
}
function He(e, s, n, t, o, r, a, i = "#1a1a1a") {
  const c = l(
    e,
    s,
    new e.BoxGeometry(a, 1.4, a),
    new e.MeshStandardMaterial({ color: i, roughness: 0.4, metalness: 0.25 }),
    [t, o / 2 + 0.7, r]
  );
  c.name = "raspberry-pi-soc", n.push(c);
}
function J(e, s) {
  return e / 2 + s / 2 - 0.15;
}
function os(e, s, n, t, o, r) {
  const a = l(
    e,
    s,
    new e.CylinderGeometry(Cn, Cn, Ve + 0.35, 18),
    new e.MeshStandardMaterial({ color: "#141414", roughness: 0.85, metalness: 0.04 }),
    [t, 0, o]
  );
  a.name = r, n.push(a);
}
function rn(e, s, n, t, o, r) {
  const a = l(
    e,
    s,
    new e.BoxGeometry(1.6, 0.55, 0.9),
    new e.MeshStandardMaterial({ color: o, roughness: 0.35, metalness: 0.08, emissive: o, emissiveIntensity: 0.28 }),
    t
  );
  a.name = r, n.push(a);
}
function ss(e, s, n, t, o, r, a, i) {
  const { depth: c, width: d, height: u } = ze, h = l(e, s, new e.BoxGeometry(c, u, d), o, t);
  h.name = i, n.push(h);
  const M = c * 0.55, f = t[0] - c / 2 + M / 2 - 0.35, m = l(
    e,
    s,
    new e.BoxGeometry(M, u * 0.52, d * 0.62),
    r,
    [f, t[1], t[2]]
  );
  m.name = `${i}:cavity`, n.push(m);
  const w = l(
    e,
    s,
    new e.BoxGeometry(c * 0.4, 0.45, d * 0.42),
    a,
    [f + 0.2, t[1] - u * 0.08, t[2]]
  );
  w.name = `${i}:tongue`, n.push(w);
}
function rs(e, s, n, t, o, r) {
  const { depth: a, width: i, height: c } = Ue, d = l(e, s, new e.BoxGeometry(a, c, i), o, t);
  d.name = "raspberry-pi-rj45", n.push(d);
  const u = a * 0.42, h = t[0] + a / 2, M = l(
    e,
    s,
    new e.BoxGeometry(u, c * 0.62, i * 0.7),
    r,
    [h - u / 2 + 0.35, t[1] - c * 0.04, t[2]]
  );
  M.name = "raspberry-pi-rj45:cavity", n.push(M);
  const f = l(
    e,
    s,
    new e.BoxGeometry(u * 0.55, 0.7, i * 0.5),
    new e.MeshStandardMaterial({ color: "#d7c089", roughness: 0.32, metalness: 0.42 }),
    [h - u * 0.45, t[1] - c * 0.18, t[2]]
  );
  f.name = "raspberry-pi-rj45:contacts", n.push(f);
  for (const [m, w] of ["#3dcc6a", "#e2b03a"].entries())
    rn(
      e,
      s,
      n,
      [h - 1.1, t[1] + c * 0.28, t[2] + (m === 0 ? -i * 0.28 : i * 0.28)],
      w,
      `raspberry-pi-rj45-led:${m}`
    );
}
function as(e, s, n, t, o, r) {
  const a = [0, 0, Math.PI / 2], { depth: i, radius: c } = Ye, d = l(
    e,
    s,
    new e.CylinderGeometry(c, c, i * 0.72, 20),
    o,
    [t[0] + 1.2, t[1], t[2]],
    a
  );
  d.name = "raspberry-pi-audio", n.push(d);
  const u = l(
    e,
    s,
    new e.CylinderGeometry(c * 0.82, c * 0.82, i * 0.22, 20),
    r,
    [t[0] - i * 0.32, t[1], t[2]],
    a
  );
  u.name = "raspberry-pi-audio-sleeve", n.push(u);
  const h = l(
    e,
    s,
    new e.CylinderGeometry(c * 0.42, c * 0.42, i * 0.28, 14),
    new e.MeshStandardMaterial({ color: "#0b0b0b", roughness: 0.78, metalness: 0.08 }),
    [t[0] - i * 0.34, t[1], t[2]],
    a
  );
  h.name = "raspberry-pi-audio-bore", n.push(h);
}
function is(e, s, n, t) {
  const [o, , r] = s.dimensions, a = Ve, i = a / 2, c = _e(e), d = new e.MeshStandardMaterial({ color: "#c5ccd3", roughness: 0.32, metalness: 0.4 }), u = new e.MeshStandardMaterial({ color: "#8e97a1", roughness: 0.36, metalness: 0.38 }), h = new e.MeshStandardMaterial({ color: "#151515", roughness: 0.62, metalness: 0.12 }), M = new e.MeshStandardMaterial({ color: "#14161a", roughness: 0.72, metalness: 0.12 }), f = new e.MeshStandardMaterial({ color: "#1a1a1a", roughness: 0.48, metalness: 0.18 }), m = new e.MeshStandardMaterial({ color: "#d8d2c0", roughness: 0.7, metalness: 0.04 });
  Oe(e, n, t, o, a, r, "#5fa83a"), [
    [E, E],
    [E + Le, E],
    [E, E + In],
    [E + Le, E + In]
  ].forEach(([S, G], v) => {
    const _ = B(o, r, S, G);
    os(e, n, t, _.x, _.z, `raspberry-pi-hole:${v}`);
  }), sn(e, n, t, s, c);
  const b = B(o, r, Ro, Eo), x = 2.4, g = l(
    e,
    n,
    new e.BoxGeometry(vn, x, vn),
    d,
    [b.x, i + x / 2, b.z]
  );
  g.name = "raspberry-pi-soc", t.push(g);
  const P = l(
    e,
    n,
    new e.BoxGeometry(12.2, 1.05, 14.2),
    f,
    [b.x + 14.2 * dt(o), i + 0.55, b.z]
  );
  P.name = "raspberry-pi-ram", t.push(P);
  const I = B(o, r, 12, pe - 6), O = l(e, n, new e.BoxGeometry(6.4, 1.1, 6.4), f, [I.x, i + 0.55, I.z]);
  O.name = "raspberry-pi-pmic", t.push(O);
  const N = B(o, r, 62, on), $ = l(e, n, new e.BoxGeometry(8.2, 1.05, 8.2), f, [N.x, i + 0.55, N.z]);
  $.name = "raspberry-pi-usbctl", t.push($);
  const D = B(o, r, 14, 41), Z = l(e, n, new e.BoxGeometry(4.8, 0.7, 6.2), d, [D.x, i + 0.4, D.z]);
  Z.name = "raspberry-pi-wifi", t.push(Z);
  const z = B(o, r, 5.2, 53.2), j = l(e, n, new e.BoxGeometry(8.5, 0.22, 1.6), m, [z.x, i + 0.12, z.z]);
  j.name = "raspberry-pi-antenna", t.push(j);
  const k = l(
    e,
    n,
    new e.BoxGeometry(1.6, 0.22, 7.2),
    m,
    [B(o, r, 2.2, 50.2).x, i + 0.12, B(o, r, 2.2, 50.2).z]
  );
  k.name = "raspberry-pi-antenna-arm", t.push(k);
  const U = B(o, r, 0, pe);
  We(e, n, t, {
    position: [-o / 2 + ie.depth / 2 - 1.2, J(a, ie.height), U.z],
    facing: "-x",
    namePrefix: "raspberry-pi-usbc"
  });
  const q = new e.MeshStandardMaterial({ color: "#b7bec6", roughness: 0.34, metalness: 0.4 }), V = new e.MeshStandardMaterial({ color: "#d8dde3", roughness: 0.48, metalness: 0.18 });
  for (const [S, G] of [Mn, rt].entries()) {
    const v = B(o, r, 0, G);
    ss(
      e,
      n,
      t,
      [-o / 2 + ze.depth / 2 - 1.5, J(a, ze.height), v.z],
      q,
      M,
      V,
      S === 0 ? "raspberry-pi-hdmi:0" : "raspberry-pi-hdmi:1"
    );
  }
  const Q = B(o, r, 0, at);
  as(
    e,
    n,
    t,
    [-o / 2 + Ye.depth / 2 - 2.2, i + Ye.radius - 0.35, Q.z],
    h,
    d
  );
  const F = o / 2 - K.depth / 2 + Dn, y = J(a, K.height);
  ye(e, n, t, {
    position: [F, y, B(o, r, 0, on).z],
    facing: "+x",
    stacked: !0,
    generation: 3,
    namePrefix: "raspberry-pi-usba:3"
  }), ye(e, n, t, {
    position: [F, y, B(o, r, 0, ct).z],
    facing: "+x",
    stacked: !0,
    generation: 2,
    namePrefix: "raspberry-pi-usba:2"
  });
  const A = B(o, r, 0, it);
  rs(e, n, t, [o / 2 - Ue.depth / 2 + Dn, J(a, Ue.height), A.z], u, h);
  const C = l(
    e,
    n,
    new e.BoxGeometry(20, 2.4, 4.2),
    h,
    [B(o, r, 24.5, 2.2).x, i + 1.2, B(o, r, 24.5, 2.2).z]
  );
  C.name = "raspberry-pi-dsi", t.push(C);
  const L = l(
    e,
    n,
    new e.BoxGeometry(22, 2.4, 4.2),
    h,
    [B(o, r, 62, 2.2).x, i + 1.2, B(o, r, 62, 2.2).z]
  );
  L.name = "raspberry-pi-csi", t.push(L), ne(e, n, t, {
    columns: 2,
    rows: 2,
    contact: "male",
    heightMm: 8.5,
    pcbTopY: i,
    center: [
      B(o, r, E + Le, 0).x,
      0,
      B(o, r, 0, pn - E - es).z
    ],
    along: "x",
    look: c,
    namePrefix: "raspberry-pi-poe",
    housingName: "raspberry-pi-poe"
  });
  const H = l(
    e,
    n,
    new e.BoxGeometry(11.5, 1.5, 12),
    h,
    [-o / 2 + 4.2, -i - 0.35, B(o, r, 0, 26).z]
  );
  H.name = "raspberry-pi-sd", t.push(H);
  const p = l(
    e,
    n,
    new e.BoxGeometry(4.2, 0.8, 11),
    m,
    [-o / 2 - 0.4, -i - 0.35, B(o, r, 0, 26).z]
  );
  p.name = "raspberry-pi-sd-card", t.push(p), rn(e, n, t, [B(o, r, 11.5, pe - 3.2).x, i + 0.35, B(o, r, 11.5, pe - 3.2).z], "#d94a3a", "raspberry-pi-led-pwr"), rn(e, n, t, [B(o, r, 11.5, pe - 5.4).x, i + 0.35, B(o, r, 11.5, pe - 5.4).z], "#3dcc6a", "raspberry-pi-led-act");
}
function cs(e, s) {
  const n = new e.Group(), t = [], [o, , r] = s.dimensions, a = Fe(s), i = Je(s), c = new e.MeshStandardMaterial({ color: "#2a2d32", roughness: 0.45, metalness: 0.4 });
  if (a === "pico") {
    Oe(e, n, t, o, i, r, "#78c2e0"), He(e, n, t, -o * 0.08, i, 0, Math.min(o, r) * 0.28), ke(e, n, t, {
      position: [-o / 2 + ae.depth / 2, J(i, ae.height), 0],
      facing: "-x",
      namePrefix: "raspberry-pi-usb"
    });
    const g = _e(e);
    for (const P of [-1, 1])
      ne(e, n, t, {
        columns: 20,
        rows: 1,
        contact: "male",
        pcbTopY: i / 2,
        center: [0, 0, P * (r / 2 - Y / 2)],
        look: g,
        namePrefix: "raspberry-pi-header",
        housingName: `raspberry-pi-header:${P < 0 ? "neg" : "pos"}`
      });
    return { group: n, meshes: t };
  }
  if (a === "zero") {
    Oe(e, n, t, o, i, r, "#6cc04a"), sn(e, n, t, s), He(e, n, t, 0, i, 0, Math.min(o, r) * 0.22);
    const g = l(
      e,
      n,
      new e.BoxGeometry(6.5, 3.2, 7.5),
      new e.MeshStandardMaterial({ color: "#8d6e2f", roughness: 0.4, metalness: 0.55 }),
      [-o / 2 + 3.4, i / 2 + 1.5, r * 0.28]
    );
    g.name = "raspberry-pi-hdmi", t.push(g), ke(e, n, t, {
      position: [-o / 2 + ae.depth / 2, J(i, ae.height), 0.02 * r],
      facing: "-x",
      namePrefix: "raspberry-pi-usb:otg"
    }), ke(e, n, t, {
      position: [-o / 2 + ae.depth / 2, J(i, ae.height), -r * 0.28],
      facing: "-x",
      namePrefix: "raspberry-pi-usb:power"
    });
    const P = l(
      e,
      n,
      new e.BoxGeometry(4, 1.2, Math.min(r * 0.42, 16)),
      c,
      [o / 2 - 3, i / 2 + 0.7, 0]
    );
    return P.name = "raspberry-pi-csi", t.push(P), { group: n, meshes: t };
  }
  if (a === "4")
    return is(e, s, n, t), { group: n, meshes: t };
  Oe(e, n, t, o, i, r, "#6cc04a"), sn(e, n, t, s), He(e, n, t, o * 0.08, i, r * 0.08, 14), We(e, n, t, {
    position: [-o / 2 + ie.depth / 2, J(i, ie.height), r * 0.32],
    facing: "-x",
    namePrefix: "raspberry-pi-usbc"
  });
  for (const [g, P] of [0.08, -0.12].entries()) {
    const I = l(
      e,
      n,
      new e.BoxGeometry(7.5, 3.4, 8.5),
      new e.MeshStandardMaterial({ color: "#8d6e2f", roughness: 0.4, metalness: 0.55 }),
      [-o / 2 + 3.8, i / 2 + 1.6, r * P]
    );
    I.name = g === 0 ? "raspberry-pi-hdmi:0" : "raspberry-pi-hdmi:1", t.push(I);
  }
  const d = o / 2 - K.depth / 2 + 1.2, u = J(i, K.height), h = 2.2, M = r * 0.28, f = M - 8 - h - K.width / 2, m = f - K.width - h;
  ye(e, n, t, {
    position: [d, u, f],
    facing: "+x",
    stacked: !0,
    generation: 3,
    namePrefix: "raspberry-pi-usba:3"
  }), ye(e, n, t, {
    position: [d, u, m],
    facing: "+x",
    stacked: !0,
    generation: 2,
    namePrefix: "raspberry-pi-usba:2"
  });
  const w = l(
    e,
    n,
    new e.BoxGeometry(16, 13.5, 16),
    new e.MeshStandardMaterial({ color: "#c9a227", roughness: 0.45, metalness: 0.35 }),
    [o / 2 - 8, i / 2 + 6.6, M]
  );
  w.name = "raspberry-pi-rj45", t.push(w);
  const b = l(
    e,
    n,
    new e.BoxGeometry(6, 1.4, 22),
    c,
    [-o * 0.08, i / 2 + 0.8, -r / 2 + 4]
  );
  b.name = "raspberry-pi-pcie", t.push(b);
  const x = l(
    e,
    n,
    new e.BoxGeometry(8, 4.5, 8),
    new e.MeshStandardMaterial({ color: "#151515", roughness: 0.65, metalness: 0.12 }),
    [o * 0.22, i / 2 + 2.4, r * 0.08]
  );
  return x.name = "raspberry-pi-fan", t.push(x), { group: n, meshes: t };
}
function ds(e) {
  return e.trim().toUpperCase().replace(/[\s_\-]+/g, "");
}
function ls(e, s) {
  const n = Math.max(1, Math.min(40, s)), t = Math.floor((n - 1) / 2), o = n % 2 === 1 ? 1 : 0;
  return {
    x: e[0] + fe(t, 20),
    z: e[2] + Ln(o, 2)
  };
}
function he(e, s) {
  const [n, , t] = e.dimensions, o = Ve;
  if (s === "usbc")
    return [-n / 2, J(o, ie.height), B(n, t, 0, pe).z];
  if (s === "hdmi0" || s === "hdmi1") {
    const a = s === "hdmi0" ? Mn : rt;
    return [-n / 2, J(o, ze.height), B(n, t, 0, a).z];
  }
  if (s === "audio")
    return [-n / 2, o / 2 + Ye.radius, B(n, t, 0, at).z];
  if (s === "eth")
    return [n / 2, J(o, Ue.height), B(n, t, 0, it).z];
  if (s === "usb3")
    return [n / 2, J(o, K.height), B(n, t, 0, on).z];
  if (s === "usb2")
    return [n / 2, J(o, K.height), B(n, t, 0, ct).z];
  if (s === "csi") {
    const a = B(n, t, 62, 2.2);
    return [a.x, o / 2 + 1.2, a.z];
  }
  const r = B(n, t, 24.5, 2.2);
  return [r.x, o / 2 + 1.2, r.z];
}
function us(e, s, n) {
  const t = Fe(e), [o, , r] = e.dimensions, a = Je(e), i = ds(s.id), c = ts(e), d = cn(e, s);
  if (t === "pico") {
    if (d !== void 0) {
      const b = d <= 20 ? d - 1 : 40 - d, x = (d <= 20 ? -1 : 1) * (r / 2 - Y / 2);
      return [fe(b, 20), c, x];
    }
    if (i === "USB" || i === "VBUS" || i === "5V")
      return [-o / 2, J(a, ae.height), 0];
    const f = i.match(/^GP(\d{1,2})$/), m = f ? Math.max(0, Math.min(19, Number(f[1]))) : Math.max(0, Math.min(19, n.index)), w = s.side === "left" ? -(r / 2 - Y / 2) : r / 2 - Y / 2;
    return [fe(m, 20), c, w];
  }
  const u = lt(e), h = d;
  if (h !== void 0) {
    const f = ls(u, h);
    return [f.x, c, f.z];
  }
  if (i === "GPIO" || i === "HEADER" || i === "HAT")
    return [u[0], c, u[2]];
  if (t === "4") {
    if (i === "USBC" || i === "POWER" || i === "PD") return he(e, "usbc");
    if (i === "HDMI" || i === "HDMI0") return he(e, "hdmi0");
    if (i === "HDMI1") return he(e, "hdmi1");
    if (i === "AUDIO" || i === "JACK" || i === "AV" || i === "TRRS") return he(e, "audio");
    if (i === "ETH" || i === "RJ45" || i === "LAN" || i === "ETHERNET") return he(e, "eth");
    if (i === "USB3" || i === "USB") return he(e, "usb3");
    if (i === "USB2") return he(e, "usb2");
    if (i === "CSI" || i === "CAM" || i === "CAMERA") return he(e, "csi");
    if (i === "DSI" || i === "DISPLAY") return he(e, "dsi");
  }
  if (t === "5") {
    if (i === "USBC" || i === "POWER" || i === "PD")
      return [-o / 2, J(a, ie.height), r * 0.32];
    if (i === "HDMI" || i === "HDMI0") return [-o / 2, a / 2 + 1.6, r * 0.08];
    if (i === "PCIE" || i === "PCI") return [-o * 0.08, a / 2 + 0.8, -r / 2 + 4];
    if (i === "ETH" || i === "RJ45" || i === "LAN") return [o / 2, a / 2 + 6.6, r * 0.28];
  }
  if (t === "zero") {
    if (i === "USB" || i === "OTG" || i === "5V")
      return [-o / 2, J(a, ae.height), 0.02 * r];
    if (i === "HDMI") return [-o / 2 + 3.4, a / 2 + 1.5, r * 0.28];
  }
  const M = Math.max(0, Math.min(19, n.index));
  return [u[0] + fe(M, 20), c, u[2]];
}
const hs = {
  kind: "raspberry-pi",
  build: cs,
  resolvePinPosition: us,
  hidePinMarkers: !0
};
function An(e) {
  return e.replace(/\s+/g, "").replace(/Ω/gi, "ω").toLowerCase();
}
function ms(e, s) {
  const n = e.properties?.resistance;
  return typeof n != "string" ? !1 : An(n) === An(s);
}
function ps(e, s) {
  const n = new e.Group(), t = [], [o, , r] = s.dimensions, a = Math.max(o, r), i = Math.min(o, r) * 0.35, c = l(
    e,
    n,
    new e.CylinderGeometry(i, i, a, 24),
    new e.MeshStandardMaterial({ color: "#d8cbb8", roughness: 0.72, metalness: 0.05 }),
    [0, 0, 0],
    [0, 0, Math.PI / 2]
  );
  if (t.push(c), ms(s, "4.7 kΩ")) {
    const d = ["#f1c40f", "#7d3c98", "#c0392b", "#d4a017"];
    for (let u = 0; u < d.length; u += 1) {
      const h = l(
        e,
        n,
        new e.CylinderGeometry(i * 1.02, i * 1.02, a * 0.07, 24),
        new e.MeshStandardMaterial({ color: d[u], roughness: 0.6, metalness: 0.1 }),
        [a * (-0.24 + u * 0.16), 0, 0],
        [0, 0, Math.PI / 2]
      );
      h.name = `resistor-band-${u}`, t.push(h);
    }
  }
  for (const d of [-1, 1]) {
    const u = l(
      e,
      n,
      new e.CylinderGeometry(i * 0.12, i * 0.12, a * 0.45, 12),
      new e.MeshStandardMaterial({ color: "#b0b4ba", roughness: 0.25, metalness: 0.9 }),
      [d * a * 0.62, 0, 0],
      [0, 0, Math.PI / 2]
    );
    t.push(u);
  }
  return { group: n, meshes: t };
}
const Ms = {
  kind: "resistor",
  build: ps
};
function fs(e, s) {
  const n = new e.Group(), t = [], [o, r, a] = s.dimensions, i = Math.min(o, a) / 2, c = s.color ? Xe(e, s.color) : new e.Color("#3dcc6a"), d = [0, 0, Math.PI / 2], u = l(
    e,
    n,
    new e.CylinderGeometry(i, i, o * 0.35, 24),
    new e.MeshStandardMaterial({ color: "#c5ccd3", roughness: 0.28, metalness: 0.88 }),
    [0, 0, 0],
    d
  );
  u.name = "status-led-bezel", t.push(u);
  const h = l(
    e,
    n,
    new e.CylinderGeometry(i * 0.55, i * 0.55, o * 0.22, 20),
    new e.MeshStandardMaterial({
      color: c,
      roughness: 0.22,
      metalness: 0.05,
      emissive: c,
      emissiveIntensity: 0.45
    }),
    [-o * 0.12, 0, 0],
    d
  );
  h.name = "status-led-lens", t.push(h);
  const M = l(
    e,
    n,
    new e.CylinderGeometry(i * 0.82, i * 0.82, o * 0.18, 6),
    new e.MeshStandardMaterial({ color: "#9aa3ad", roughness: 0.35, metalness: 0.8 }),
    [o * 0.22, 0, 0],
    d
  );
  return M.name = "status-led-nut", t.push(M), { group: n, meshes: t };
}
const ws = {
  kind: "status-led",
  build: fs
};
function bs(e, s) {
  const n = new e.Group(), t = [], [o, r, a] = s.dimensions, i = Math.max(r * 0.18, 1.4), c = l(
    e,
    n,
    new e.BoxGeometry(o, i, a),
    new e.MeshStandardMaterial({ color: "#1f6b42", roughness: 0.55, metalness: 0.1 })
  );
  c.name = "stepper-driver-pcb", t.push(c);
  const d = Math.max(r * 0.55, 4.5), u = l(
    e,
    n,
    new e.BoxGeometry(o * 0.42, d, a * 0.55),
    new e.MeshStandardMaterial({ color: "#c5ccd3", roughness: 0.28, metalness: 0.88 }),
    [0, i / 2 + d / 2, 0]
  );
  u.name = "stepper-driver-heatsink", t.push(u);
  const h = l(
    e,
    n,
    new e.BoxGeometry(o * 0.28, 0.7, a * 0.32),
    new e.MeshStandardMaterial({ color: "#101010", roughness: 0.4, metalness: 0.2 }),
    [0, i / 2 + 0.35, 0]
  );
  h.name = "stepper-driver-chip", t.push(h);
  const M = _e(e);
  for (const m of [-1, 1])
    ne(e, n, t, {
      columns: 8,
      rows: 1,
      contact: "male",
      heightMm: 2.8,
      pcbTopY: i / 2,
      center: [0, 0, m * (a / 2 - Y / 2)],
      look: M,
      namePrefix: "stepper-driver-header",
      housingName: `stepper-driver-header:${m < 0 ? "neg" : "pos"}`
    });
  const f = l(
    e,
    n,
    new e.CylinderGeometry(1.4, 1.4, 1.6, 12),
    new e.MeshStandardMaterial({ color: "#d4af37", roughness: 0.4, metalness: 0.5 }),
    [o * 0.32, i / 2 + 0.9, 0]
  );
  return f.name = "stepper-driver-pot", t.push(f), { group: n, meshes: t };
}
const gs = {
  kind: "stepper-driver",
  build: bs
};
function ys(e, s) {
  const n = new e.Group(), t = [], [o, r, a] = s.dimensions, i = o * 0.72, c = [0, 0, Math.PI / 2], d = l(
    e,
    n,
    new e.BoxGeometry(i, r, a),
    new e.MeshStandardMaterial({ color: "#1a1d22", roughness: 0.55, metalness: 0.35 }),
    [-o * 0.08, 0, 0]
  );
  d.name = "stepper-motor-body", t.push(d);
  const u = Math.min(r, a) * 0.26, h = l(
    e,
    n,
    new e.CylinderGeometry(u, u, o * 0.08, 24),
    new e.MeshStandardMaterial({ color: "#c5ccd3", roughness: 0.3, metalness: 0.82 }),
    [o * 0.28, 0, 0],
    c
  );
  h.name = "stepper-motor-boss", t.push(h);
  const M = l(
    e,
    n,
    new e.CylinderGeometry(Math.min(r, a) * 0.07, Math.min(r, a) * 0.07, o * 0.28, 16),
    new e.MeshStandardMaterial({ color: "#d7dee6", roughness: 0.22, metalness: 0.92 }),
    [o / 2 - o * 0.08, 0, 0],
    c
  );
  M.name = "stepper-motor-shaft", t.push(M);
  const f = Math.min(r, a) * 0.04;
  for (const [w, b] of [
    [r * 0.32, a * 0.32],
    [r * 0.32, -a * 0.32],
    [-r * 0.32, a * 0.32],
    [-r * 0.32, -a * 0.32]
  ]) {
    const x = l(
      e,
      n,
      new e.CylinderGeometry(f, f, o * 0.1, 10),
      new e.MeshStandardMaterial({ color: "#0e1014", roughness: 0.8, metalness: 0.1 }),
      [o * 0.28, w, b],
      c
    );
    x.name = "stepper-motor-hole", t.push(x);
  }
  const m = l(
    e,
    n,
    new e.BoxGeometry(6, 4, 8),
    new e.MeshStandardMaterial({ color: "#151515", roughness: 0.7, metalness: 0.08 }),
    [-o / 2 + 2, -r * 0.12, 0]
  );
  return m.name = "stepper-motor-cable", t.push(m), { group: n, meshes: t };
}
const xs = {
  kind: "stepper-motor",
  build: ys
}, Ss = [
  On,
  ro,
  io,
  Xo,
  Qo,
  Ms,
  Ko,
  Zo,
  Fo,
  Ht,
  Do,
  Ao,
  hs,
  Xt,
  Bo,
  So,
  Po,
  xs,
  gs,
  Uo,
  ws,
  Ut
];
yt(On);
for (const e of Ss)
  xt(e.kind) || St(e);
const Ps = 1.6, Gs = 4, _s = 1.4;
function Bs(e) {
  const s = e.lastIndexOf(".");
  return s <= 0 || s === e.length - 1 ? null : { componentId: e.slice(0, s), pinId: e.slice(s + 1) };
}
function Cs(e, s, n, t) {
  for (const o of s.pins) {
    const r = ut(e, s, o, t);
    n.set(`${s.id}.${o.id}`, r);
  }
}
function ut(e, s, n, t) {
  const o = an(s, n, t), [r, a, i] = s.position;
  return new e.Vector3(r + o[0], a + o[1], i + o[2]);
}
function Is(e) {
  const s = e.material;
  return Array.isArray(s) ? s.filter((n) => !!n) : s ? [s] : [];
}
function kn(e) {
  const s = [], n = [], t = [];
  for (const o of e)
    for (const r of Is(o))
      s.push(r), n.push(r.emissiveIntensity ?? 0), t.push(r.color.clone());
  return { materials: s, baseEmissive: n, baseColor: t };
}
function vs(e, s, n = "#f5f5f5") {
  const t = document.createElement("canvas"), o = t.getContext("2d");
  if (!o) throw new Error("2D canvas unavailable");
  const r = 28;
  o.font = `600 ${r}px system-ui, sans-serif`;
  const a = o.measureText(s), i = 16, c = 10;
  t.width = Math.ceil(a.width + i * 2), t.height = r + c * 2, o.font = `600 ${r}px system-ui, sans-serif`, o.fillStyle = "rgba(12, 14, 18, 0.82)";
  const d = 8, u = t.width, h = t.height;
  o.beginPath(), o.moveTo(d, 0), o.lineTo(u - d, 0), o.quadraticCurveTo(u, 0, u, d), o.lineTo(u, h - d), o.quadraticCurveTo(u, h, u - d, h), o.lineTo(d, h), o.quadraticCurveTo(0, h, 0, h - d), o.lineTo(0, d), o.quadraticCurveTo(0, 0, d, 0), o.closePath(), o.fill(), o.fillStyle = n, o.textBaseline = "middle", o.fillText(s, i, h / 2);
  const M = new e.CanvasTexture(t);
  M.colorSpace = e.SRGBColorSpace;
  const f = new e.SpriteMaterial({ map: M, transparent: !0, depthTest: !1 }), m = new e.Sprite(f), w = t.width / 18;
  return m.scale.set(w, t.height / t.width * w, 1), m.renderOrder = 10, m;
}
function Ds(e, s, n, t) {
  if (Gt(n.kind, t).hidePinMarkers) return [];
  const o = [], r = new e.MeshStandardMaterial({
    color: "#facc15",
    emissive: "#ca8a04",
    emissiveIntensity: 0.45,
    roughness: 0.35,
    metalness: 0.15
  });
  for (const a of n.pins) {
    const i = an(n, a, t), c = l(
      e,
      s,
      new e.SphereGeometry(_s, 14, 14),
      r,
      i
    );
    c.name = `pin-marker:${n.id}.${a.id}`, c.userData = { pinId: a.id, kind: "pin-marker" }, o.push(c);
  }
  return o;
}
function As(e) {
  let s = 0;
  for (const n of e.components) {
    const [, t] = n.position, o = n.dimensions[1] / 2;
    s = Math.min(s, t - o);
  }
  return s;
}
function ks(e, s, n, t) {
  const o = n.distanceTo(t), r = n.clone().add(t).multiplyScalar(0.5);
  r.y += Math.max(o * 0.22, 8);
  const a = new e.CatmullRomCurve3([n.clone(), r, t.clone()]), i = (s.diameterMm ?? Ps) / 2, c = Math.max(12, Math.ceil(o / 4)), d = new e.TubeGeometry(a, c, i, 10, !1), u = new e.MeshStandardMaterial({
    color: Xe(e, s.color, "#cccccc"),
    roughness: 0.45,
    metalness: 0.08
  }), h = new e.Mesh(d, u);
  return h.castShadow = !0, h.receiveShadow = !0, h;
}
function Ns(e) {
  const s = [];
  return e.traverse((n) => {
    n.isMesh && s.push(n);
  }), s;
}
function Nn(e, s) {
  if (!s.has(e)) {
    s.add(e), e.dispose();
    for (const n of Object.keys(e)) {
      const t = e[n];
      t && typeof t == "object" && "dispose" in t && typeof t.dispose == "function" && t.dispose();
    }
  }
}
function ge(e, s = /* @__PURE__ */ new Set()) {
  e.traverse((n) => {
    const t = n;
    if (t.isMesh) {
      t.geometry?.dispose();
      const r = Array.isArray(t.material) ? t.material : [t.material];
      for (const a of r)
        a && Nn(a, s);
    }
    const o = n;
    o.isSprite && (o.material.map?.dispose(), Nn(o.material, s));
  });
}
function Ls(e) {
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
function Js(e, s, n, t = {}) {
  let o = !1, r = null, a = null, i = !1, c = 0;
  const d = t.models, u = document.createElement("canvas");
  u.style.display = "block", u.style.width = "100%", u.style.height = "100%", u.setAttribute("role", "img"), u.setAttribute("aria-label", `${s.title} 3D wiring diagram`), e.replaceChildren(u);
  const h = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), f = [];
  let m, w, b, x, g, P, I, O, N, $, D = !1;
  const Z = () => {
    cancelAnimationFrame(c), i = !1, g?.dispose();
    for (const p of h.values()) ge(p.object);
    h.clear(), M.clear(), b && ge(b), w?.dispose(), D = !1;
  }, z = () => {
    if (o || !D || i) return;
    i = !0;
    const p = () => {
      if (o || !D) {
        i = !1;
        return;
      }
      const S = g.update();
      w.render(b, x), S ? c = requestAnimationFrame(p) : i = !1;
    };
    c = requestAnimationFrame(p);
  }, j = (p, S) => {
    if (!(!D || o)) {
      for (const G of h.values()) {
        const v = p === G.id, _ = S === G.id && S !== p;
        G.materials.forEach((X, R) => {
          X.emissive && (X.color.copy(G.baseColor[R] ?? X.color), X.emissive.set(G.baseColor[R] ?? X.color), X.emissiveIntensity = v ? 0.55 : _ ? 0.28 : G.baseEmissive[R] ?? 0, v && X.color.offsetHSL(0, 0, 0.08));
        });
      }
      z();
    }
  }, k = () => {
    if (!D || o) return;
    const p = new m.Box3();
    for (const X of h.values())
      X.object.traverse((R) => {
        const de = R;
        de.isMesh && p.expandByObject(de);
      });
    if (p.isEmpty()) {
      O = new m.Vector3(120, 90, 140), N = new m.Vector3(0, 0, 0), x.position.copy(O), g.target.copy(N), g.update();
      return;
    }
    const S = p.getCenter(new m.Vector3()), G = p.getSize(new m.Vector3()), _ = Math.max(G.x, G.y, G.z, 40) * (s.components.length <= 1 ? 2.4 : 1.15);
    N = S.clone(), O = S.clone().add(new m.Vector3(-_ * 0.18, _ * 0.42, _ * 0.92)), x.position.copy(O), g.target.copy(N), g.update();
  }, U = (p) => {
    const S = M.get(p);
    if (S) return S.clone();
    const G = Bs(p);
    if (!G) return null;
    const v = s.components.find((X) => X.id === G.componentId);
    if (!v) return null;
    const _ = v.pins.find((X) => X.id === G.pinId);
    return _ ? ut(m, v, _, d) : null;
  }, q = (p, S) => {
    const G = Ns(S), v = kn(G);
    h.set(p, {
      id: p,
      kind: "component",
      object: S,
      materials: v.materials,
      baseEmissive: v.baseEmissive,
      baseColor: v.baseColor
    });
  }, V = (p) => {
    const [S, G, v] = p.position;
    Cs(m, p, M, d);
    const _ = new m.Group();
    _.position.set(S, G, v), _.userData = { id: p.id, kind: "component" };
    const X = Pt(m, p, d);
    X.group.name = "builtin-model", _.add(X.group);
    const R = Ds(m, _, p, d);
    for (const le of R)
      le.renderOrder = 5;
    const de = vs(m, p.label);
    de.position.set(0, p.dimensions[1] / 2 + Gs, 0), _.add(de), b.add(_), q(p.id, _), p.model?.url && new $().load(
      p.model.url,
      (W) => {
        if (o) {
          ge(W.scene);
          return;
        }
        const ce = _.getObjectByName("builtin-model");
        ce && (_.remove(ce), ge(ce));
        const oe = W.scene;
        oe.name = "external-model", Ls(oe);
        const ue = p.model?.scale ?? 1;
        if (oe.scale.setScalar(ue), p.model?.rotation) {
          const [se, ve, me] = p.model.rotation;
          oe.rotation.set(se, ve, me);
        }
        _.add(oe), q(p.id, _), k(), j(r, a), z();
      },
      void 0,
      (W) => {
        o || (n.onError?.(
          `Failed to load model for ${p.id}: ${W instanceof Error ? W.message : String(W)}`
        ), z());
      }
    );
  }, Q = async () => {
    try {
      const [p, S, G] = await Promise.all([
        import("./three.module-BWYgh0Id.js"),
        import("./OrbitControls-Cc2hnvV3.js"),
        import("./GLTFLoader-D0p79_T6.js")
      ]);
      if (o) return;
      m = p;
      const v = S.OrbitControls;
      if ($ = G.GLTFLoader, w = new m.WebGLRenderer({ canvas: u, antialias: !0, alpha: !0 }), !w.getContext())
        throw w.dispose(), new Error("WebGL not available");
      w.outputColorSpace = m.SRGBColorSpace, w.shadowMap.enabled = !0, w.shadowMap.type = m.PCFSoftShadowMap, w.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)), b = new m.Scene(), b.background = new m.Color("#eef1f5"), x = new m.PerspectiveCamera(45, 1, 0.1, 5e3), O = new m.Vector3(120, 90, 140), N = new m.Vector3(0, 0, 0), x.position.copy(O), g = new v(x, u), g.enableDamping = !0, g.dampingFactor = 0.08, g.target.copy(N), g.addEventListener("change", z), P = new m.Raycaster(), I = new m.Vector2(), b.add(new m.HemisphereLight("#f7f9fc", "#5a6472", 0.72));
      const _ = new m.DirectionalLight("#ffffff", 1.35);
      _.position.set(120, 180, 80), _.castShadow = !0, _.shadow.mapSize.set(1024, 1024), b.add(_);
      const X = new m.DirectionalLight("#d8e4ff", 0.58);
      X.position.set(-90, 60, -120), b.add(X);
      const R = new m.DirectionalLight("#ffffff", 0.62);
      R.position.set(-60, 70, 150), b.add(R);
      const de = As(s) - 2, le = new m.Mesh(
        new m.PlaneGeometry(2e3, 2e3),
        new m.MeshStandardMaterial({ color: "#e3e7ed", roughness: 0.95, metalness: 0 })
      );
      le.rotation.x = -Math.PI / 2, le.position.y = de, le.receiveShadow = !0, b.add(le), b.add(new m.GridHelper(800, 40, "#c5ccd6", "#d8dde6"));
      for (const W of s.components)
        V(W);
      for (const W of s.wires) {
        const ce = U(W.from), oe = U(W.to);
        if (!ce || !oe) {
          o || n.onError?.(`Wire ${W.id}: invalid endpoint ${ce ? W.to : W.from}`);
          continue;
        }
        const ue = ks(m, W, ce, oe);
        ue.userData = { id: W.id, kind: "wire" }, b.add(ue);
        const se = kn([ue]);
        h.set(W.id, {
          id: W.id,
          kind: "wire",
          object: ue,
          materials: se.materials,
          baseEmissive: se.baseEmissive,
          baseColor: se.baseColor
        });
      }
      D = !0, k(), F(), j(r, a), z();
    } catch (p) {
      Z(), o || n.onError?.(
        `Failed to initialize 3D view: ${p instanceof Error ? p.message : String(p)}`
      );
    }
  }, F = () => {
    if (!D || o) return;
    const p = e.clientWidth || 640, S = e.clientHeight || 480;
    x.aspect = p / S, x.updateProjectionMatrix(), w.setSize(p, S, !1), z();
  }, y = new ResizeObserver(() => F());
  y.observe(e), f.push(() => y.disconnect());
  const A = (p) => {
    if (!D || o) return null;
    const S = u.getBoundingClientRect();
    I.x = (p.clientX - S.left) / S.width * 2 - 1, I.y = -((p.clientY - S.top) / S.height) * 2 + 1, P.setFromCamera(I, x);
    const G = P.intersectObjects(
      [...h.values()].map((v) => v.object),
      !0
    );
    for (const v of G) {
      let _ = v.object;
      for (; _; ) {
        if (_.userData?.id) return _.userData.id;
        _ = _.parent;
      }
    }
    return null;
  }, C = (p) => {
    if (o) return;
    const S = A(p);
    S !== a && (a = S, j(r, a), n.onHover(S));
  }, L = (p) => {
    if (o) return;
    const S = A(p);
    r = S, j(r, a), n.onSelect(S);
  }, H = () => {
    o || (a = null, j(r, a), n.onHover(null));
  };
  return u.addEventListener("pointermove", C), u.addEventListener("pointerdown", L), u.addEventListener("pointerleave", H), f.push(() => {
    u.removeEventListener("pointermove", C), u.removeEventListener("pointerdown", L), u.removeEventListener("pointerleave", H);
  }), Q(), {
    select(p) {
      r = p, j(r, a);
    },
    reset() {
      o || !D || !O || !N || (x.position.copy(O), g.target.copy(N), g.update(), z());
    },
    destroy() {
      if (!o) {
        o = !0, cancelAnimationFrame(c);
        for (const p of f) p();
        for (const p of h.values()) ge(p.object);
        h.clear(), M.clear(), b && ge(b), g?.dispose(), w?.dispose(), e.replaceChildren();
      }
    }
  };
}
export {
  $s as ESP32_HEADER_HEIGHT_MM,
  Ze as ESP32_HEADER_PIN_COUNT,
  Rt as ESP32_HEADER_PITCH_MM,
  js as ESP32_HEADER_SINK_MM,
  Ie as ESP32_PCB_THICKNESS_MM,
  zs as ESP32_PIN_PROUD_MM,
  Us as ESP32_PIN_SIZE_MM,
  Zn as arduinoUnoDigitalPinX,
  At as arduinoUnoHeaderRowZ,
  kt as arduinoUnoPinTipY,
  Dt as arduinoUnoPowerPinX,
  zt as buildArduinoUno,
  Yt as buildBarrelJack,
  Tt as buildDs18b20,
  so as buildEsp32,
  _o as buildJstConnector,
  Ws as buildLcd1602,
  Vs as buildLcd2004,
  zo as buildLed,
  Yo as buildLoadCell,
  Wo as buildMax4466,
  Vo as buildMax9814,
  Jo as buildPowerBlock,
  qo as buildProbe,
  cs as buildRaspberryPi,
  ps as buildResistor,
  fs as buildStatusLed,
  bs as buildStepperDriver,
  ys as buildStepperMotor,
  Js as create3DView,
  Xs as esp32HeaderHousingTopY,
  xn as esp32HeaderPinX,
  en as esp32HeaderRowZ,
  to as esp32HeaderSlotIndex,
  Ys as esp32HeaderStartX,
  Sn as esp32PinTipY,
  Go as jstPinCount,
  st as ledEpoxyBottomY,
  Lo as ledLeadAttachY,
  tn as ledLeadX,
  an as localPinPosition,
  ms as matchesResistance,
  Bs as parseEndpoint,
  B as pi4FromCorner,
  ts as raspberryPiPinTipY,
  Fe as raspberryPiVariant,
  Ot as resolveArduinoUnoPinPosition,
  Qt as resolveDs18b20PinPosition,
  Zs as resolveLcd1602PinPosition,
  Fs as resolveLcd2004PinPosition,
  $o as resolveLedPinPosition,
  us as resolveRaspberryPiPinPosition
};
