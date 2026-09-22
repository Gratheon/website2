const hc = {
  0: 27,
  1: 28,
  2: 3,
  3: 5,
  4: 7,
  5: 29,
  6: 31,
  7: 26,
  8: 24,
  9: 21,
  10: 19,
  11: 23,
  12: 32,
  13: 33,
  14: 8,
  15: 10,
  16: 36,
  17: 11,
  18: 12,
  19: 35,
  20: 38,
  21: 40,
  22: 15,
  23: 16,
  24: 18,
  25: 22,
  26: 37,
  27: 13
};
function Rn(e) {
  return Array.from({ length: 40 }, (t, n) => {
    const s = n + 1, i = Object.entries(hc).find(([u, a]) => a === s && (!e || ![0, 1, 2, 3, 14, 15].includes(Number(u)))), r = i ? Number(i[0]) : void 0, o = [1, 17].includes(s) ? "3V3" : [2, 4].includes(s) ? "5V" : [6, 9, 14, 20, 25, 30, 34, 39].includes(s) ? "GND" : void 0;
    return { number: s, gpio: r, name: o ?? { 3: "SDA", 5: "SCL", 8: "TX", 10: "RX", 27: "ID_SD", 28: "ID_SC" }[s] ?? `GPIO${r}` };
  });
}
const pc = [
  "3V3",
  "EN",
  "GPIO36",
  "GPIO39",
  "GPIO34",
  "GPIO35",
  "GPIO32",
  "GPIO33",
  "GPIO25",
  "GPIO26",
  "GPIO27",
  "GPIO14",
  "GPIO12",
  "GND",
  "GPIO13",
  "GPIO9",
  "GPIO10",
  "GPIO11",
  "5V",
  "GPIO6",
  "GPIO7",
  "GPIO8",
  "GPIO15",
  "GPIO2",
  "GPIO0",
  "GPIO4",
  "GPIO16",
  "GPIO17",
  "GPIO5",
  "GPIO18",
  "GPIO19",
  "GND",
  "GPIO21",
  "GPIO3",
  "GPIO1",
  "GPIO22",
  "GPIO23",
  "GND"
], mc = [
  "GPIO0",
  "GPIO1",
  "GND",
  "GPIO2",
  "GPIO3",
  "GPIO4",
  "GPIO5",
  "GND",
  "GPIO6",
  "GPIO7",
  "GPIO8",
  "GPIO9",
  "GND",
  "GPIO10",
  "GPIO11",
  "GPIO12",
  "GPIO13",
  "GND",
  "GPIO14",
  "GPIO15",
  "GPIO16",
  "GPIO17",
  "GND",
  "GPIO18",
  "GPIO19",
  "GPIO20",
  "GPIO21",
  "GND",
  "GPIO22",
  "RUN",
  "GPIO26",
  "GPIO27",
  "AGND",
  "GPIO28",
  "ADC_VREF",
  "3V3",
  "3V3_EN",
  "GND",
  "VSYS",
  "VBUS"
];
function ii(e) {
  return e.map((t, n) => ({
    number: n + 1,
    name: t,
    gpio: t.startsWith("GPIO") ? Number(t.slice(4)) : void 0
  }));
}
const gc = {
  "esp32-devkit-38": { id: "esp32-devkit-38", dimensions: [52, 3, 28], gpioScheme: "GPIO", contacts: ii(pc) },
  "raspberry-pi-40": { id: "raspberry-pi-40", dimensions: [85, 18, 56], gpioScheme: "BCM", contacts: Rn(!1) },
  "raspberry-pi-pico": { id: "raspberry-pi-pico", dimensions: [51, 3, 21], gpioScheme: "GPIO", contacts: ii(mc) },
  "jetson-nano": { id: "jetson-nano", dimensions: [100, 18, 80], gpioScheme: "BCM", contacts: Rn(!0) },
  "jetson-orin-nano": { id: "jetson-orin-nano", dimensions: [100, 18, 79], gpioScheme: "BCM", contacts: Rn(!0) }
};
function rr(e) {
  if (e.kind === "esp32") return "esp32-devkit-38";
  if (e.kind === "raspberry-pi")
    return String(e.properties?.variant ?? "").toLowerCase().includes("pico") ? "raspberry-pi-pico" : "raspberry-pi-40";
  if (e.kind === "jetson-nano" || e.kind === "jetson-orin-nano") return e.kind;
}
function Dt(e) {
  const t = e.pinout ?? rr(e);
  return t ? gc[t] : void 0;
}
function yc(e) {
  if (e.kind === "raspberry-pi" && String(e.properties?.variant).toLowerCase().includes("zero")) return [65, 3, 30];
  const t = Dt(e)?.dimensions;
  return t ? [...t] : void 0;
}
const ts = (e) => e.trim().toUpperCase().replace(/[\s_-]+/g, "");
function ri(e) {
  return /^(?:(?:PIN|GPIO|IO|GP|BCM))?\d+$/.test(ts(e));
}
function vs(e, t) {
  const n = ts(t), s = n.match(/^(?:PIN)?(\d+)$/);
  if (s) return e.contacts.find((a) => a.number === Number(s[1]));
  const i = n.match(/^(GPIO|IO|GP|BCM)(\d+)$/);
  if (i)
    return i[1] === "BCM" && e.gpioScheme !== "BCM" ? void 0 : e.contacts.find((a) => a.gpio === Number(i[2]));
  if (n === "VIN" && e.id.startsWith("jetson-")) return;
  const o = { VIN: "5V", VCC: "5V", VDD: "5V", GROUND: "GND", TXD: "TX", RXD: "RX", "3V": "3V3" }[n] ?? n, c = e.contacts.find((a) => ts(a.name) === o);
  if (c) return c;
  if (e.id === "esp32-devkit-38") {
    const a = { VP: 36, VN: 39, TX: 1, RX: 3, SDA: 21, SCL: 22 };
    return e.contacts.find((l) => l.gpio !== void 0 && l.gpio === a[n]);
  }
  if (e.id === "raspberry-pi-pico") return;
  const u = { MOSI: 19, MISO: 21, SCLK: 23, SCK: 23, CE0: 24, CE1: 26 };
  return e.contacts.find((a) => a.number === u[n]);
}
function cm(e, t) {
  const n = Dt(e);
  return n ? t.number !== void 0 ? n.contacts.find((s) => s.number === t.number)?.number : t.gpio !== void 0 ? n.contacts.find((s) => s.gpio === t.gpio)?.number : vs(n, t.id)?.number : t.number;
}
function or(e, t) {
  return e.id === "esp32-devkit-38" ? t <= 19 ? "right" : "left" : e.id === "raspberry-pi-pico" ? t <= 20 ? "left" : "right" : t % 2 ? "left" : "right";
}
function ns(e) {
  if (e.number === void 0 && e.gpio === void 0) return e.label || e.id;
  const t = [e.number === void 0 ? "" : `Pin ${e.number}`, e.gpio === void 0 ? "" : `GPIO${e.gpio}`].filter(Boolean).join(" / "), n = e.label;
  return n && n !== `GPIO${e.gpio}` && n !== `PIN${e.number}` ? `${t} · ${n}` : t;
}
const ks = /* @__PURE__ */ Symbol.for("yaml.alias"), ss = /* @__PURE__ */ Symbol.for("yaml.document"), Ee = /* @__PURE__ */ Symbol.for("yaml.map"), cr = /* @__PURE__ */ Symbol.for("yaml.pair"), ye = /* @__PURE__ */ Symbol.for("yaml.scalar"), pt = /* @__PURE__ */ Symbol.for("yaml.seq"), ae = /* @__PURE__ */ Symbol.for("yaml.node.type"), Ve = (e) => !!e && typeof e == "object" && e[ae] === ks, qe = (e) => !!e && typeof e == "object" && e[ae] === ss, mt = (e) => !!e && typeof e == "object" && e[ae] === Ee, B = (e) => !!e && typeof e == "object" && e[ae] === cr, j = (e) => !!e && typeof e == "object" && e[ae] === ye, gt = (e) => !!e && typeof e == "object" && e[ae] === pt;
function K(e) {
  if (e && typeof e == "object")
    switch (e[ae]) {
      case Ee:
      case pt:
        return !0;
    }
  return !1;
}
function G(e) {
  if (e && typeof e == "object")
    switch (e[ae]) {
      case ks:
      case Ee:
      case ye:
      case pt:
        return !0;
    }
  return !1;
}
const ar = (e) => (j(e) || K(e)) && !!e.anchor, ee = /* @__PURE__ */ Symbol("break visit"), ur = /* @__PURE__ */ Symbol("skip children"), ge = /* @__PURE__ */ Symbol("remove node");
function Je(e, t) {
  const n = lr(t);
  qe(e) ? Qe(null, e.contents, n, Object.freeze([e])) === ge && (e.contents = null) : Qe(null, e, n, Object.freeze([]));
}
Je.BREAK = ee;
Je.SKIP = ur;
Je.REMOVE = ge;
function Qe(e, t, n, s) {
  const i = fr(e, t, n, s);
  if (G(i) || B(i))
    return dr(e, s, i), Qe(e, i, n, s);
  if (typeof i != "symbol") {
    if (K(t)) {
      s = Object.freeze(s.concat(t));
      for (let r = 0; r < t.items.length; ++r) {
        const o = Qe(r, t.items[r], n, s);
        if (typeof o == "number")
          r = o - 1;
        else {
          if (o === ee)
            return ee;
          o === ge && (t.items.splice(r, 1), r -= 1);
        }
      }
    } else if (B(t)) {
      s = Object.freeze(s.concat(t));
      const r = Qe("key", t.key, n, s);
      if (r === ee)
        return ee;
      r === ge && (t.key = null);
      const o = Qe("value", t.value, n, s);
      if (o === ee)
        return ee;
      o === ge && (t.value = null);
    }
  }
  return i;
}
async function wn(e, t) {
  const n = lr(t);
  qe(e) ? await et(null, e.contents, n, Object.freeze([e])) === ge && (e.contents = null) : await et(null, e, n, Object.freeze([]));
}
wn.BREAK = ee;
wn.SKIP = ur;
wn.REMOVE = ge;
async function et(e, t, n, s) {
  const i = await fr(e, t, n, s);
  if (G(i) || B(i))
    return dr(e, s, i), et(e, i, n, s);
  if (typeof i != "symbol") {
    if (K(t)) {
      s = Object.freeze(s.concat(t));
      for (let r = 0; r < t.items.length; ++r) {
        const o = await et(r, t.items[r], n, s);
        if (typeof o == "number")
          r = o - 1;
        else {
          if (o === ee)
            return ee;
          o === ge && (t.items.splice(r, 1), r -= 1);
        }
      }
    } else if (B(t)) {
      s = Object.freeze(s.concat(t));
      const r = await et("key", t.key, n, s);
      if (r === ee)
        return ee;
      r === ge && (t.key = null);
      const o = await et("value", t.value, n, s);
      if (o === ee)
        return ee;
      o === ge && (t.value = null);
    }
  }
  return i;
}
function lr(e) {
  return typeof e == "object" && (e.Collection || e.Node || e.Value) ? Object.assign({
    Alias: e.Node,
    Map: e.Node,
    Scalar: e.Node,
    Seq: e.Node
  }, e.Value && {
    Map: e.Value,
    Scalar: e.Value,
    Seq: e.Value
  }, e.Collection && {
    Map: e.Collection,
    Seq: e.Collection
  }, e) : e;
}
function fr(e, t, n, s) {
  if (typeof n == "function")
    return n(e, t, s);
  if (mt(t))
    return n.Map?.(e, t, s);
  if (gt(t))
    return n.Seq?.(e, t, s);
  if (B(t))
    return n.Pair?.(e, t, s);
  if (j(t))
    return n.Scalar?.(e, t, s);
  if (Ve(t))
    return n.Alias?.(e, t, s);
}
function dr(e, t, n) {
  const s = t[t.length - 1];
  if (K(s))
    s.items[e] = n;
  else if (B(s))
    e === "key" ? s.key = n : s.value = n;
  else if (qe(s))
    s.contents = n;
  else {
    const i = Ve(s) ? "alias" : "scalar";
    throw new Error(`Cannot replace node with ${i} parent`);
  }
}
const bc = {
  "!": "%21",
  ",": "%2C",
  "[": "%5B",
  "]": "%5D",
  "{": "%7B",
  "}": "%7D"
}, wc = (e) => e.replace(/[!,[\]{}]/g, (t) => bc[t]);
class Q {
  constructor(t, n) {
    this.docStart = null, this.docEnd = !1, this.yaml = Object.assign({}, Q.defaultYaml, t), this.tags = Object.assign({}, Q.defaultTags, n);
  }
  clone() {
    const t = new Q(this.yaml, this.tags);
    return t.docStart = this.docStart, t;
  }
  /**
   * During parsing, get a Directives instance for the current document and
   * update the stream state according to the current version's spec.
   */
  atDocument() {
    const t = new Q(this.yaml, this.tags);
    switch (this.yaml.version) {
      case "1.1":
        this.atNextDocument = !0;
        break;
      case "1.2":
        this.atNextDocument = !1, this.yaml = {
          explicit: Q.defaultYaml.explicit,
          version: "1.2"
        }, this.tags = Object.assign({}, Q.defaultTags);
        break;
    }
    return t;
  }
  /**
   * @param onError - May be called even if the action was successful
   * @returns `true` on success
   */
  add(t, n) {
    this.atNextDocument && (this.yaml = { explicit: Q.defaultYaml.explicit, version: "1.1" }, this.tags = Object.assign({}, Q.defaultTags), this.atNextDocument = !1);
    const s = t.trim().split(/[ \t]+/), i = s.shift();
    switch (i) {
      case "%TAG": {
        if (s.length !== 2 && (n(0, "%TAG directive should contain exactly two parts"), s.length < 2))
          return !1;
        const [r, o] = s;
        return this.tags[r] = o, !0;
      }
      case "%YAML": {
        if (this.yaml.explicit = !0, s.length !== 1)
          return n(0, "%YAML directive should contain exactly one part"), !1;
        const [r] = s;
        if (r === "1.1" || r === "1.2")
          return this.yaml.version = r, !0;
        {
          const o = /^\d+\.\d+$/.test(r);
          return n(6, `Unsupported YAML version ${r}`, o), !1;
        }
      }
      default:
        return n(0, `Unknown directive ${i}`, !0), !1;
    }
  }
  /**
   * Resolves a tag, matching handles to those defined in %TAG directives.
   *
   * @returns Resolved tag, which may also be the non-specific tag `'!'` or a
   *   `'!local'` tag, or `null` if unresolvable.
   */
  tagName(t, n) {
    if (t === "!")
      return "!";
    if (t[0] !== "!")
      return n(`Not a valid tag: ${t}`), null;
    if (t[1] === "<") {
      const o = t.slice(2, -1);
      return o === "!" || o === "!!" ? (n(`Verbatim tags aren't resolved, so ${t} is invalid.`), null) : (t[t.length - 1] !== ">" && n("Verbatim tags must end with a >"), o);
    }
    const [, s, i] = t.match(/^(.*!)([^!]*)$/s);
    i || n(`The ${t} tag has no suffix`);
    const r = this.tags[s];
    if (r)
      try {
        return r + decodeURIComponent(i);
      } catch (o) {
        return n(String(o)), null;
      }
    return s === "!" ? t : (n(`Could not resolve tag: ${t}`), null);
  }
  /**
   * Given a fully resolved tag, returns its printable string form,
   * taking into account current tag prefixes and defaults.
   */
  tagString(t) {
    for (const [n, s] of Object.entries(this.tags))
      if (t.startsWith(s))
        return n + wc(t.substring(s.length));
    return t[0] === "!" ? t : `!<${t}>`;
  }
  toString(t) {
    const n = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [], s = Object.entries(this.tags);
    let i;
    if (t && s.length > 0 && G(t.contents)) {
      const r = {};
      Je(t.contents, (o, c) => {
        G(c) && c.tag && (r[c.tag] = !0);
      }), i = Object.keys(r);
    } else
      i = [];
    for (const [r, o] of s)
      r === "!!" && o === "tag:yaml.org,2002:" || (!t || i.some((c) => c.startsWith(o))) && n.push(`%TAG ${r} ${o}`);
    return n.join(`
`);
  }
}
Q.defaultYaml = { explicit: !1, version: "1.2" };
Q.defaultTags = { "!!": "tag:yaml.org,2002:" };
function hr(e) {
  if (/[\x00-\x19\s,[\]{}]/.test(e)) {
    const n = `Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;
    throw new Error(n);
  }
  return !0;
}
function pr(e) {
  const t = /* @__PURE__ */ new Set();
  return Je(e, {
    Value(n, s) {
      s.anchor && t.add(s.anchor);
    }
  }), t;
}
function mr(e, t) {
  for (let n = 1; ; ++n) {
    const s = `${e}${n}`;
    if (!t.has(s))
      return s;
  }
}
function _c(e, t) {
  const n = [], s = /* @__PURE__ */ new Map();
  let i = null;
  return {
    onAnchor: (r) => {
      n.push(r), i ?? (i = pr(e));
      const o = mr(t, i);
      return i.add(o), o;
    },
    /**
     * With circular references, the source node is only resolved after all
     * of its child nodes are. This is why anchors are set only after all of
     * the nodes have been created.
     */
    setAnchors: () => {
      for (const r of n) {
        const o = s.get(r);
        if (typeof o == "object" && o.anchor && (j(o.node) || K(o.node)))
          o.node.anchor = o.anchor;
        else {
          const c = new Error("Failed to resolve repeated object (this should not happen)");
          throw c.source = r, c;
        }
      }
    },
    sourceObjects: s
  };
}
function tt(e, t, n, s) {
  if (s && typeof s == "object")
    if (Array.isArray(s))
      for (let i = 0, r = s.length; i < r; ++i) {
        const o = s[i], c = tt(e, s, String(i), o);
        c === void 0 ? delete s[i] : c !== o && (s[i] = c);
      }
    else if (s instanceof Map)
      for (const i of Array.from(s.keys())) {
        const r = s.get(i), o = tt(e, s, i, r);
        o === void 0 ? s.delete(i) : o !== r && s.set(i, o);
      }
    else if (s instanceof Set)
      for (const i of Array.from(s)) {
        const r = tt(e, s, i, i);
        r === void 0 ? s.delete(i) : r !== i && (s.delete(i), s.add(r));
      }
    else
      for (const [i, r] of Object.entries(s)) {
        const o = tt(e, s, i, r);
        o === void 0 ? delete s[i] : o !== r && (s[i] = o);
      }
  return e.call(t, n, s);
}
function ce(e, t, n) {
  if (Array.isArray(e))
    return e.map((s, i) => ce(s, String(i), n));
  if (e && typeof e.toJSON == "function") {
    if (!n || !ar(e))
      return e.toJSON(t, n);
    const s = { aliasCount: 0, count: 1, res: void 0 };
    n.anchors.set(e, s), n.onCreate = (r) => {
      s.res = r, delete n.onCreate;
    };
    const i = e.toJSON(t, n);
    return n.onCreate && n.onCreate(i), i;
  }
  return typeof e == "bigint" && !n?.keep ? Number(e) : e;
}
class Ss {
  constructor(t) {
    Object.defineProperty(this, ae, { value: t });
  }
  /** Create a copy of this node.  */
  clone() {
    const t = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    return this.range && (t.range = this.range.slice()), t;
  }
  /** A plain JavaScript representation of this node. */
  toJS(t, { mapAsMap: n, maxAliasCount: s, onAnchor: i, reviver: r } = {}) {
    if (!qe(t))
      throw new TypeError("A document argument is required");
    const o = {
      anchors: /* @__PURE__ */ new Map(),
      doc: t,
      keep: !0,
      mapAsMap: n === !0,
      mapKeyWarned: !1,
      maxAliasCount: typeof s == "number" ? s : 100
    }, c = ce(this, "", o);
    if (typeof i == "function")
      for (const { count: u, res: a } of o.anchors.values())
        i(a, u);
    return typeof r == "function" ? tt(r, { "": c }, "", c) : c;
  }
}
class _n extends Ss {
  constructor(t) {
    super(ks), this.source = t, Object.defineProperty(this, "tag", {
      set() {
        throw new Error("Alias nodes cannot have tags");
      }
    });
  }
  /**
   * Resolve the value of this alias within `doc`, finding the last
   * instance of the `source` anchor before this node.
   */
  resolve(t, n) {
    if (n?.maxAliasCount === 0)
      throw new ReferenceError("Alias resolution is disabled");
    let s;
    n?.aliasResolveCache ? s = n.aliasResolveCache : (s = [], Je(t, {
      Node: (r, o) => {
        (Ve(o) || ar(o)) && s.push(o);
      }
    }), n && (n.aliasResolveCache = s));
    let i;
    for (const r of s) {
      if (r === this)
        break;
      r.anchor === this.source && (i = r);
    }
    if (i && n) {
      const { anchors: r, doc: o, maxAliasCount: c } = n;
      let u = r.get(i);
      if (u || (ce(i, null, n), u = r.get(i)), u?.res === void 0) {
        const a = "This should not happen: Alias anchor was not resolved?";
        throw new ReferenceError(a);
      }
      if (c >= 0 && (u.count += 1, u.aliasCount === 0 && (u.aliasCount = en(o, i, r)), u.count * u.aliasCount > c)) {
        const a = "Excessive alias count indicates a resource exhaustion attack";
        throw new ReferenceError(a);
      }
    }
    return i;
  }
  toJSON(t, n) {
    if (!n)
      return { source: this.source };
    const s = this.resolve(n.doc, n);
    if (!s) {
      const i = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
      throw new ReferenceError(i);
    }
    return n.anchors.get(s).res;
  }
  toString(t, n, s) {
    const i = `*${this.source}`;
    if (t) {
      if (hr(this.source), t.options.verifyAliasOrder && !t.anchors.has(this.source)) {
        const r = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new Error(r);
      }
      if (t.implicitKey)
        return `${i} `;
    }
    return i;
  }
}
function en(e, t, n) {
  if (Ve(t)) {
    const s = t.resolve(e), i = n && s && n.get(s);
    return i ? i.count * i.aliasCount : 0;
  } else if (K(t)) {
    let s = 0;
    for (const i of t.items) {
      const r = en(e, i, n);
      r > s && (s = r);
    }
    return s;
  } else if (B(t)) {
    const s = en(e, t.key, n), i = en(e, t.value, n);
    return Math.max(s, i);
  }
  return 1;
}
const gr = (e) => !e || typeof e != "function" && typeof e != "object";
class T extends Ss {
  constructor(t) {
    super(ye), this.value = t;
  }
  toJSON(t, n) {
    return n?.keep ? this.value : ce(this.value, t, n);
  }
  toString() {
    return String(this.value);
  }
}
T.BLOCK_FOLDED = "BLOCK_FOLDED";
T.BLOCK_LITERAL = "BLOCK_LITERAL";
T.PLAIN = "PLAIN";
T.QUOTE_DOUBLE = "QUOTE_DOUBLE";
T.QUOTE_SINGLE = "QUOTE_SINGLE";
const vc = "tag:yaml.org,2002:";
function kc(e, t, n) {
  if (t) {
    const s = n.filter((r) => r.tag === t), i = s.find((r) => !r.format) ?? s[0];
    if (!i)
      throw new Error(`Tag ${t} not found`);
    return i;
  }
  return n.find((s) => s.identify?.(e) && !s.format);
}
function At(e, t, n) {
  if (qe(e) && (e = e.contents), G(e))
    return e;
  if (B(e)) {
    const f = n.schema[Ee].createNode?.(n.schema, null, n);
    return f.items.push(e), f;
  }
  (e instanceof String || e instanceof Number || e instanceof Boolean || typeof BigInt < "u" && e instanceof BigInt) && (e = e.valueOf());
  const { aliasDuplicateObjects: s, onAnchor: i, onTagObj: r, schema: o, sourceObjects: c } = n;
  let u;
  if (s && e && typeof e == "object") {
    if (u = c.get(e), u)
      return u.anchor ?? (u.anchor = i(e)), new _n(u.anchor);
    u = { anchor: null, node: null }, c.set(e, u);
  }
  t?.startsWith("!!") && (t = vc + t.slice(2));
  let a = kc(e, t, o.tags);
  if (!a) {
    if (e && typeof e.toJSON == "function" && (e = e.toJSON()), !e || typeof e != "object") {
      const f = new T(e);
      return u && (u.node = f), f;
    }
    a = e instanceof Map ? o[Ee] : Symbol.iterator in Object(e) ? o[pt] : o[Ee];
  }
  r && (r(a), delete n.onTagObj);
  const l = a?.createNode ? a.createNode(n.schema, e, n) : typeof a?.nodeClass?.from == "function" ? a.nodeClass.from(n.schema, e, n) : new T(e);
  return t ? l.tag = t : a.default || (l.tag = a.tag), u && (u.node = l), l;
}
function an(e, t, n) {
  let s = n;
  for (let i = t.length - 1; i >= 0; --i) {
    const r = t[i];
    if (typeof r == "number" && Number.isInteger(r) && r >= 0) {
      const o = [];
      o[r] = s, s = o;
    } else
      s = /* @__PURE__ */ new Map([[r, s]]);
  }
  return At(s, void 0, {
    aliasDuplicateObjects: !1,
    keepUndefined: !1,
    onAnchor: () => {
      throw new Error("This should not happen, please report a bug.");
    },
    schema: e,
    sourceObjects: /* @__PURE__ */ new Map()
  });
}
const Ot = (e) => e == null || typeof e == "object" && !!e[Symbol.iterator]().next().done;
class yr extends Ss {
  constructor(t, n) {
    super(t), Object.defineProperty(this, "schema", {
      value: n,
      configurable: !0,
      enumerable: !1,
      writable: !0
    });
  }
  /**
   * Create a copy of this collection.
   *
   * @param schema - If defined, overwrites the original's schema
   */
  clone(t) {
    const n = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    return t && (n.schema = t), n.items = n.items.map((s) => G(s) || B(s) ? s.clone(t) : s), this.range && (n.range = this.range.slice()), n;
  }
  /**
   * Adds a value to the collection. For `!!map` and `!!omap` the value must
   * be a Pair instance or a `{ key, value }` object, which may not have a key
   * that already exists in the map.
   */
  addIn(t, n) {
    if (Ot(t))
      this.add(n);
    else {
      const [s, ...i] = t, r = this.get(s, !0);
      if (K(r))
        r.addIn(i, n);
      else if (r === void 0 && this.schema)
        this.set(s, an(this.schema, i, n));
      else
        throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`);
    }
  }
  /**
   * Removes a value from the collection.
   * @returns `true` if the item was found and removed.
   */
  deleteIn(t) {
    const [n, ...s] = t;
    if (s.length === 0)
      return this.delete(n);
    const i = this.get(n, !0);
    if (K(i))
      return i.deleteIn(s);
    throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`);
  }
  /**
   * Returns item at `key`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  getIn(t, n) {
    const [s, ...i] = t, r = this.get(s, !0);
    return i.length === 0 ? !n && j(r) ? r.value : r : K(r) ? r.getIn(i, n) : void 0;
  }
  hasAllNullValues(t) {
    return this.items.every((n) => {
      if (!B(n))
        return !1;
      const s = n.value;
      return s == null || t && j(s) && s.value == null && !s.commentBefore && !s.comment && !s.tag;
    });
  }
  /**
   * Checks if the collection includes a value with the key `key`.
   */
  hasIn(t) {
    const [n, ...s] = t;
    if (s.length === 0)
      return this.has(n);
    const i = this.get(n, !0);
    return K(i) ? i.hasIn(s) : !1;
  }
  /**
   * Sets a value in this collection. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  setIn(t, n) {
    const [s, ...i] = t;
    if (i.length === 0)
      this.set(s, n);
    else {
      const r = this.get(s, !0);
      if (K(r))
        r.setIn(i, n);
      else if (r === void 0 && this.schema)
        this.set(s, an(this.schema, i, n));
      else
        throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`);
    }
  }
}
const Sc = (e) => e.replace(/^(?!$)(?: $)?/gm, "#");
function ve(e, t) {
  return /^\n+$/.test(e) ? e.substring(1) : t ? e.replace(/^(?! *$)/gm, t) : e;
}
const Ze = (e, t, n) => e.endsWith(`
`) ? ve(n, t) : n.includes(`
`) ? `
` + ve(n, t) : (e.endsWith(" ") ? "" : " ") + n, br = "flow", is = "block", tn = "quoted";
function vn(e, t, n = "flow", { indentAtStart: s, lineWidth: i = 80, minContentWidth: r = 20, onFold: o, onOverflow: c } = {}) {
  if (!i || i < 0)
    return e;
  i < r && (r = 0);
  const u = Math.max(1 + r, 1 + i - t.length);
  if (e.length <= u)
    return e;
  const a = [], l = {};
  let f = i - t.length;
  typeof s == "number" && (s > i - Math.max(2, r) ? a.push(0) : f = i - s);
  let d, p, m = !1, h = -1, g = -1, b = -1;
  n === is && (h = oi(e, h, t.length), h !== -1 && (f = h + u));
  for (let S; S = e[h += 1]; ) {
    if (n === tn && S === "\\") {
      switch (g = h, e[h + 1]) {
        case "x":
          h += 3;
          break;
        case "u":
          h += 5;
          break;
        case "U":
          h += 9;
          break;
        default:
          h += 1;
      }
      b = h;
    }
    if (S === `
`)
      n === is && (h = oi(e, h, t.length)), f = h + t.length + u, d = void 0;
    else {
      if (S === " " && p && p !== " " && p !== `
` && p !== "	") {
        const O = e[h + 1];
        O && O !== " " && O !== `
` && O !== "	" && (d = h);
      }
      if (h >= f)
        if (d)
          a.push(d), f = d + u, d = void 0;
        else if (n === tn) {
          for (; p === " " || p === "	"; )
            p = S, S = e[h += 1], m = !0;
          const O = h > b + 1 ? h - 2 : g - 1;
          if (l[O])
            return e;
          a.push(O), l[O] = !0, f = O + u, d = void 0;
        } else
          m = !0;
    }
    p = S;
  }
  if (m && c && c(), a.length === 0)
    return e;
  o && o();
  let v = e.slice(0, a[0]);
  for (let S = 0; S < a.length; ++S) {
    const O = a[S], _ = a[S + 1] || e.length;
    O === 0 ? v = `
${t}${e.slice(0, _)}` : (n === tn && l[O] && (v += `${e[O]}\\`), v += `
${t}${e.slice(O + 1, _)}`);
  }
  return v;
}
function oi(e, t, n) {
  let s = t, i = t + 1, r = e[i];
  for (; r === " " || r === "	"; )
    if (t < i + n)
      r = e[++t];
    else {
      do
        r = e[++t];
      while (r && r !== `
`);
      s = t, i = t + 1, r = e[i];
    }
  return s;
}
const kn = (e, t) => ({
  indentAtStart: t ? e.indent.length : e.indentAtStart,
  lineWidth: e.options.lineWidth,
  minContentWidth: e.options.minContentWidth
}), Sn = (e) => /^(%|---|\.\.\.)/m.test(e);
function Oc(e, t, n) {
  if (!t || t < 0)
    return !1;
  const s = t - n, i = e.length;
  if (i <= s)
    return !1;
  for (let r = 0, o = 0; r < i; ++r)
    if (e[r] === `
`) {
      if (r - o > s)
        return !0;
      if (o = r + 1, i - o <= s)
        return !1;
    }
  return !0;
}
function Nt(e, t) {
  const n = JSON.stringify(e);
  if (t.options.doubleQuotedAsJSON)
    return n;
  const { implicitKey: s } = t, i = t.options.doubleQuotedMinMultiLineLength, r = t.indent || (Sn(e) ? "  " : "");
  let o = "", c = 0;
  for (let u = 0, a = n[u]; a; a = n[++u])
    if (a === " " && n[u + 1] === "\\" && n[u + 2] === "n" && (o += n.slice(c, u) + "\\ ", u += 1, c = u, a = "\\"), a === "\\")
      switch (n[u + 1]) {
        case "u":
          {
            o += n.slice(c, u);
            const l = n.substr(u + 2, 4);
            switch (l) {
              case "0000":
                o += "\\0";
                break;
              case "0007":
                o += "\\a";
                break;
              case "000b":
                o += "\\v";
                break;
              case "001b":
                o += "\\e";
                break;
              case "0085":
                o += "\\N";
                break;
              case "00a0":
                o += "\\_";
                break;
              case "2028":
                o += "\\L";
                break;
              case "2029":
                o += "\\P";
                break;
              default:
                l.substr(0, 2) === "00" ? o += "\\x" + l.substr(2) : o += n.substr(u, 6);
            }
            u += 5, c = u + 1;
          }
          break;
        case "n":
          if (s || n[u + 2] === '"' || n.length < i)
            u += 1;
          else {
            for (o += n.slice(c, u) + `

`; n[u + 2] === "\\" && n[u + 3] === "n" && n[u + 4] !== '"'; )
              o += `
`, u += 2;
            o += r, n[u + 2] === " " && (o += "\\"), u += 1, c = u + 1;
          }
          break;
        default:
          u += 1;
      }
  return o = c ? o + n.slice(c) : n, s ? o : vn(o, r, tn, kn(t, !1));
}
function rs(e, t) {
  if (t.options.singleQuote === !1 || t.implicitKey && e.includes(`
`) || /[ \t]\n|\n[ \t]/.test(e))
    return Nt(e, t);
  const n = t.indent || (Sn(e) ? "  " : ""), s = "'" + e.replace(/'/g, "''").replace(/\n+/g, `$&
${n}`) + "'";
  return t.implicitKey ? s : vn(s, n, br, kn(t, !1));
}
function nt(e, t) {
  const { singleQuote: n } = t.options;
  let s;
  if (n === !1)
    s = Nt;
  else {
    const i = e.includes('"'), r = e.includes("'");
    i && !r ? s = rs : r && !i ? s = Nt : s = n ? rs : Nt;
  }
  return s(e, t);
}
let os;
try {
  os = new RegExp(`(^|(?<!
))
+(?!
|$)`, "g");
} catch {
  os = /\n+(?!\n|$)/g;
}
function nn({ comment: e, type: t, value: n }, s, i, r) {
  const { blockQuote: o, commentString: c, lineWidth: u } = s.options;
  if (!o || /\n[\t ]+$/.test(n))
    return nt(n, s);
  const a = s.indent || (s.forceBlockIndent || Sn(n) ? "  " : ""), l = o === "literal" ? !0 : o === "folded" || t === T.BLOCK_FOLDED ? !1 : t === T.BLOCK_LITERAL ? !0 : !Oc(n, u, a.length);
  if (!n)
    return l ? `|
` : `>
`;
  let f, d;
  for (d = n.length; d > 0; --d) {
    const _ = n[d - 1];
    if (_ !== `
` && _ !== "	" && _ !== " ")
      break;
  }
  let p = n.substring(d);
  const m = p.indexOf(`
`);
  m === -1 ? f = "-" : n === p || m !== p.length - 1 ? (f = "+", r && r()) : f = "", p && (n = n.slice(0, -p.length), p[p.length - 1] === `
` && (p = p.slice(0, -1)), p = p.replace(os, `$&${a}`));
  let h = !1, g, b = -1;
  for (g = 0; g < n.length; ++g) {
    const _ = n[g];
    if (_ === " ")
      h = !0;
    else if (_ === `
`)
      b = g;
    else
      break;
  }
  let v = n.substring(0, b < g ? b + 1 : g);
  v && (n = n.substring(v.length), v = v.replace(/\n+/g, `$&${a}`));
  let O = (h ? a ? "2" : "1" : "") + f;
  if (e && (O += " " + c(e.replace(/ ?[\r\n]+/g, " ")), i && i()), !l) {
    const _ = n.replace(/\n+/g, `
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${a}`);
    let w = !1;
    const $ = kn(s, !0);
    o !== "folded" && t !== T.BLOCK_FOLDED && ($.onOverflow = () => {
      w = !0;
    });
    const k = vn(`${v}${_}${p}`, a, is, $);
    if (!w)
      return `>${O}
${a}${k}`;
  }
  return n = n.replace(/\n+/g, `$&${a}`), `|${O}
${a}${v}${n}${p}`;
}
function $c(e, t, n, s) {
  const { type: i, value: r } = e, { actualString: o, implicitKey: c, indent: u, indentStep: a, inFlow: l } = t;
  if (c && r.includes(`
`) || l && /[[\]{},]/.test(r))
    return nt(r, t);
  if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))
    return c || l || !r.includes(`
`) ? nt(r, t) : nn(e, t, n, s);
  if (!c && !l && i !== T.PLAIN && r.includes(`
`))
    return nn(e, t, n, s);
  if (Sn(r)) {
    if (u === "")
      return t.forceBlockIndent = !0, nn(e, t, n, s);
    if (c && u === a)
      return nt(r, t);
  }
  const f = r.replace(/\n+/g, `$&
${u}`);
  if (o) {
    const d = (h) => h.default && h.tag !== "tag:yaml.org,2002:str" && h.test?.test(f), { compat: p, tags: m } = t.doc.schema;
    if (m.some(d) || p?.some(d))
      return nt(r, t);
  }
  return c ? f : vn(f, u, br, kn(t, !1));
}
function jt(e, t, n, s) {
  const { implicitKey: i, inFlow: r } = t, o = typeof e.value == "string" ? e : Object.assign({}, e, { value: String(e.value) });
  let { type: c } = e;
  c !== T.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value) && (c = T.QUOTE_DOUBLE);
  const u = (l) => {
    switch (l) {
      case T.BLOCK_FOLDED:
      case T.BLOCK_LITERAL:
        return i || r ? nt(o.value, t) : nn(o, t, n, s);
      case T.QUOTE_DOUBLE:
        return Nt(o.value, t);
      case T.QUOTE_SINGLE:
        return rs(o.value, t);
      case T.PLAIN:
        return $c(o, t, n, s);
      default:
        return null;
    }
  };
  let a = u(c);
  if (a === null) {
    const { defaultKeyType: l, defaultStringType: f } = t.options, d = i && l || f;
    if (a = u(d), a === null)
      throw new Error(`Unsupported default string type ${d}`);
  }
  return a;
}
function wr(e, t) {
  const n = Object.assign({
    blockQuote: !0,
    commentString: Sc,
    defaultKeyType: null,
    defaultStringType: "PLAIN",
    directives: null,
    doubleQuotedAsJSON: !1,
    doubleQuotedMinMultiLineLength: 40,
    falseStr: "false",
    flowCollectionPadding: !0,
    indentSeq: !0,
    lineWidth: 80,
    minContentWidth: 20,
    nullStr: "null",
    simpleKeys: !1,
    singleQuote: null,
    trailingComma: !1,
    trueStr: "true",
    verifyAliasOrder: !0
  }, e.schema.toStringOptions, t);
  let s;
  switch (n.collectionStyle) {
    case "block":
      s = !1;
      break;
    case "flow":
      s = !0;
      break;
    default:
      s = null;
  }
  return {
    anchors: /* @__PURE__ */ new Set(),
    doc: e,
    flowCollectionPadding: n.flowCollectionPadding ? " " : "",
    indent: "",
    indentStep: typeof n.indent == "number" ? " ".repeat(n.indent) : "  ",
    inFlow: s,
    options: n
  };
}
function Ic(e, t) {
  if (t.tag) {
    const i = e.filter((r) => r.tag === t.tag);
    if (i.length > 0)
      return i.find((r) => r.format === t.format) ?? i[0];
  }
  let n, s;
  if (j(t)) {
    s = t.value;
    let i = e.filter((r) => r.identify?.(s));
    if (i.length > 1) {
      const r = i.filter((o) => o.test);
      r.length > 0 && (i = r);
    }
    n = i.find((r) => r.format === t.format) ?? i.find((r) => !r.format);
  } else
    s = t, n = e.find((i) => i.nodeClass && s instanceof i.nodeClass);
  if (!n) {
    const i = s?.constructor?.name ?? (s === null ? "null" : typeof s);
    throw new Error(`Tag not resolved for ${i} value`);
  }
  return n;
}
function Nc(e, t, { anchors: n, doc: s }) {
  if (!s.directives)
    return "";
  const i = [], r = (j(e) || K(e)) && e.anchor;
  r && hr(r) && (n.add(r), i.push(`&${r}`));
  const o = e.tag ?? (t.default ? null : t.tag);
  return o && i.push(s.directives.tagString(o)), i.join(" ");
}
function ct(e, t, n, s) {
  if (B(e))
    return e.toString(t, n, s);
  if (Ve(e)) {
    if (t.doc.directives)
      return e.toString(t);
    if (t.resolvedAliases?.has(e))
      throw new TypeError("Cannot stringify circular structure without alias nodes");
    t.resolvedAliases ? t.resolvedAliases.add(e) : t.resolvedAliases = /* @__PURE__ */ new Set([e]), e = e.resolve(t.doc);
  }
  let i;
  const r = G(e) ? e : t.doc.createNode(e, { onTagObj: (u) => i = u });
  i ?? (i = Ic(t.doc.schema.tags, r));
  const o = Nc(r, i, t);
  o.length > 0 && (t.indentAtStart = (t.indentAtStart ?? 0) + o.length + 1);
  const c = typeof i.stringify == "function" ? i.stringify(r, t, n, s) : j(r) ? jt(r, t, n, s) : r.toString(t, n, s);
  return o ? j(r) || c[0] === "{" || c[0] === "[" ? `${o} ${c}` : `${o}
${t.indent}${c}` : c;
}
function Pc({ key: e, value: t }, n, s, i) {
  const { allNullValues: r, doc: o, indent: c, indentStep: u, options: { commentString: a, indentSeq: l, simpleKeys: f } } = n;
  let d = G(e) && e.comment || null;
  if (f) {
    if (d)
      throw new Error("With simple keys, key nodes cannot have comments");
    if (K(e) || !G(e) && typeof e == "object") {
      const $ = "With simple keys, collection cannot be used as a key value";
      throw new Error($);
    }
  }
  let p = !f && (!e || d && t == null && !n.inFlow || K(e) || (j(e) ? e.type === T.BLOCK_FOLDED || e.type === T.BLOCK_LITERAL : typeof e == "object"));
  n = Object.assign({}, n, {
    allNullValues: !1,
    implicitKey: !p && (f || !r),
    indent: c + u
  });
  let m = !1, h = !1, g = ct(e, n, () => m = !0, () => h = !0);
  if (!p && !n.inFlow && g.length > 1024) {
    if (f)
      throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
    p = !0;
  }
  if (n.inFlow) {
    if (r || t == null)
      return m && s && s(), g === "" ? "?" : p ? `? ${g}` : g;
  } else if (r && !f || t == null && p)
    return g = `? ${g}`, d && !m ? g += Ze(g, n.indent, a(d)) : h && i && i(), g;
  m && (d = null), p ? (d && (g += Ze(g, n.indent, a(d))), g = `? ${g}
${c}:`) : (g = `${g}:`, d && (g += Ze(g, n.indent, a(d))));
  let b, v, S;
  G(t) ? (b = !!t.spaceBefore, v = t.commentBefore, S = t.comment) : (b = !1, v = null, S = null, t && typeof t == "object" && (t = o.createNode(t))), n.implicitKey = !1, !p && !d && j(t) && (n.indentAtStart = g.length + 1), h = !1, !l && u.length >= 2 && !n.inFlow && !p && gt(t) && !t.flow && !t.tag && !t.anchor && (n.indent = n.indent.substring(2));
  let O = !1;
  const _ = ct(t, n, () => O = !0, () => h = !0);
  let w = " ";
  if (d || b || v) {
    if (w = b ? `
` : "", v) {
      const $ = a(v);
      w += `
${ve($, n.indent)}`;
    }
    _ === "" && !n.inFlow ? w === `
` && S && (w = `

`) : w += `
${n.indent}`;
  } else if (!p && K(t)) {
    const $ = _[0], k = _.indexOf(`
`), A = k !== -1, D = n.inFlow ?? t.flow ?? t.items.length === 0;
    if (A || !D) {
      let N = !1;
      if (A && ($ === "&" || $ === "!")) {
        let P = _.indexOf(" ");
        $ === "&" && P !== -1 && P < k && _[P + 1] === "!" && (P = _.indexOf(" ", P + 1)), (P === -1 || k < P) && (N = !0);
      }
      N || (w = `
${n.indent}`);
    }
  } else (_ === "" || _[0] === `
`) && (w = "");
  return g += w + _, n.inFlow ? O && s && s() : S && !O ? g += Ze(g, n.indent, a(S)) : h && i && i(), g;
}
function _r(e, t) {
  (e === "debug" || e === "warn") && console.warn(t);
}
const Ft = "<<", ke = {
  identify: (e) => e === Ft || typeof e == "symbol" && e.description === Ft,
  default: "key",
  tag: "tag:yaml.org,2002:merge",
  test: /^<<$/,
  resolve: () => Object.assign(new T(Symbol(Ft)), {
    addToJSMap: vr
  }),
  stringify: () => Ft
}, Ec = (e, t) => (ke.identify(t) || j(t) && (!t.type || t.type === T.PLAIN) && ke.identify(t.value)) && e?.doc.schema.tags.some((n) => n.tag === ke.tag && n.default);
function vr(e, t, n) {
  const s = kr(e, n);
  if (gt(s))
    for (const i of s.items)
      Bn(e, t, i);
  else if (Array.isArray(s))
    for (const i of s)
      Bn(e, t, i);
  else
    Bn(e, t, s);
}
function Bn(e, t, n) {
  const s = kr(e, n);
  if (!mt(s))
    throw new Error("Merge sources must be maps or map aliases");
  const i = s.toJSON(null, e, Map);
  for (const [r, o] of i)
    t instanceof Map ? t.has(r) || t.set(r, o) : t instanceof Set ? t.add(r) : Object.prototype.hasOwnProperty.call(t, r) || Object.defineProperty(t, r, {
      value: o,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  return t;
}
function kr(e, t) {
  return e && Ve(t) ? t.resolve(e.doc, e) : t;
}
function Sr(e, t, { key: n, value: s }) {
  if (G(n) && n.addToJSMap)
    n.addToJSMap(e, t, s);
  else if (Ec(e, n))
    vr(e, t, s);
  else {
    const i = ce(n, "", e);
    if (t instanceof Map)
      t.set(i, ce(s, i, e));
    else if (t instanceof Set)
      t.add(i);
    else {
      const r = Ac(n, i, e), o = ce(s, r, e);
      r in t ? Object.defineProperty(t, r, {
        value: o,
        writable: !0,
        enumerable: !0,
        configurable: !0
      }) : t[r] = o;
    }
  }
  return t;
}
function Ac(e, t, n) {
  if (t === null)
    return "";
  if (typeof t != "object")
    return String(t);
  if (G(e) && n?.doc) {
    const s = wr(n.doc, {});
    s.anchors = /* @__PURE__ */ new Set();
    for (const r of n.anchors.keys())
      s.anchors.add(r.anchor);
    s.inFlow = !0, s.inStringifyKey = !0;
    const i = e.toString(s);
    if (!n.mapKeyWarned) {
      let r = JSON.stringify(i);
      r.length > 40 && (r = r.substring(0, 36) + '..."'), _r(n.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`), n.mapKeyWarned = !0;
    }
    return i;
  }
  return JSON.stringify(t);
}
function Os(e, t, n) {
  const s = At(e, void 0, n), i = At(t, void 0, n);
  return new X(s, i);
}
class X {
  constructor(t, n = null) {
    Object.defineProperty(this, ae, { value: cr }), this.key = t, this.value = n;
  }
  clone(t) {
    let { key: n, value: s } = this;
    return G(n) && (n = n.clone(t)), G(s) && (s = s.clone(t)), new X(n, s);
  }
  toJSON(t, n) {
    const s = n?.mapAsMap ? /* @__PURE__ */ new Map() : {};
    return Sr(n, s, this);
  }
  toString(t, n, s) {
    return t?.doc ? Pc(this, t, n, s) : JSON.stringify(this);
  }
}
function Or(e, t, n) {
  return (t.inFlow ?? e.flow ? zc : Tc)(e, t, n);
}
function Tc({ comment: e, items: t }, n, { blockItemPrefix: s, flowChars: i, itemIndent: r, onChompKeep: o, onComment: c }) {
  const { indent: u, options: { commentString: a } } = n, l = Object.assign({}, n, { indent: r, type: null });
  let f = !1;
  const d = [];
  for (let m = 0; m < t.length; ++m) {
    const h = t[m];
    let g = null;
    if (G(h))
      !f && h.spaceBefore && d.push(""), un(n, d, h.commentBefore, f), h.comment && (g = h.comment);
    else if (B(h)) {
      const v = G(h.key) ? h.key : null;
      v && (!f && v.spaceBefore && d.push(""), un(n, d, v.commentBefore, f));
    }
    f = !1;
    let b = ct(h, l, () => g = null, () => f = !0);
    g && (b += Ze(b, r, a(g))), f && g && (f = !1), d.push(s + b);
  }
  let p;
  if (d.length === 0)
    p = i.start + i.end;
  else {
    p = d[0];
    for (let m = 1; m < d.length; ++m) {
      const h = d[m];
      p += h ? `
${u}${h}` : `
`;
    }
  }
  return e ? (p += `
` + ve(a(e), u), c && c()) : f && o && o(), p;
}
function zc({ items: e }, t, { flowChars: n, itemIndent: s }) {
  const { indent: i, indentStep: r, flowCollectionPadding: o, options: { commentString: c } } = t;
  s += r;
  const u = Object.assign({}, t, {
    indent: s,
    inFlow: !0,
    type: null
  });
  let a = !1, l = 0;
  const f = [];
  for (let m = 0; m < e.length; ++m) {
    const h = e[m];
    let g = null;
    if (G(h))
      h.spaceBefore && f.push(""), un(t, f, h.commentBefore, !1), h.comment && (g = h.comment);
    else if (B(h)) {
      const v = G(h.key) ? h.key : null;
      v && (v.spaceBefore && f.push(""), un(t, f, v.commentBefore, !1), v.comment && (a = !0));
      const S = G(h.value) ? h.value : null;
      S ? (S.comment && (g = S.comment), S.commentBefore && (a = !0)) : h.value == null && v?.comment && (g = v.comment);
    }
    g && (a = !0);
    let b = ct(h, u, () => g = null);
    a || (a = f.length > l || b.includes(`
`)), m < e.length - 1 ? b += "," : t.options.trailingComma && (t.options.lineWidth > 0 && (a || (a = f.reduce((v, S) => v + S.length + 2, 2) + (b.length + 2) > t.options.lineWidth)), a && (b += ",")), g && (b += Ze(b, s, c(g))), f.push(b), l = f.length;
  }
  const { start: d, end: p } = n;
  if (f.length === 0)
    return d + p;
  if (!a) {
    const m = f.reduce((h, g) => h + g.length + 2, 2);
    a = t.options.lineWidth > 0 && m > t.options.lineWidth;
  }
  if (a) {
    let m = d;
    for (const h of f)
      m += h ? `
${r}${i}${h}` : `
`;
    return `${m}
${i}${p}`;
  } else
    return `${d}${o}${f.join(" ")}${o}${p}`;
}
function un({ indent: e, options: { commentString: t } }, n, s, i) {
  if (s && i && (s = s.replace(/^\n+/, "")), s) {
    const r = ve(t(s), e);
    n.push(r.trimStart());
  }
}
function xe(e, t) {
  const n = j(t) ? t.value : t;
  for (const s of e)
    if (B(s) && (s.key === t || s.key === n || j(s.key) && s.key.value === n))
      return s;
}
class se extends yr {
  static get tagName() {
    return "tag:yaml.org,2002:map";
  }
  constructor(t) {
    super(Ee, t), this.items = [];
  }
  /**
   * A generic collection parsing method that can be extended
   * to other node classes that inherit from YAMLMap
   */
  static from(t, n, s) {
    const { keepUndefined: i, replacer: r } = s, o = new this(t), c = (u, a) => {
      if (typeof r == "function")
        a = r.call(n, u, a);
      else if (Array.isArray(r) && !r.includes(u))
        return;
      (a !== void 0 || i) && o.items.push(Os(u, a, s));
    };
    if (n instanceof Map)
      for (const [u, a] of n)
        c(u, a);
    else if (n && typeof n == "object")
      for (const u of Object.keys(n))
        c(u, n[u]);
    return typeof t.sortMapEntries == "function" && o.items.sort(t.sortMapEntries), o;
  }
  /**
   * Adds a value to the collection.
   *
   * @param overwrite - If not set `true`, using a key that is already in the
   *   collection will throw. Otherwise, overwrites the previous value.
   */
  add(t, n) {
    let s;
    B(t) ? s = t : !t || typeof t != "object" || !("key" in t) ? s = new X(t, t?.value) : s = new X(t.key, t.value);
    const i = xe(this.items, s.key), r = this.schema?.sortMapEntries;
    if (i) {
      if (!n)
        throw new Error(`Key ${s.key} already set`);
      j(i.value) && gr(s.value) ? i.value.value = s.value : i.value = s.value;
    } else if (r) {
      const o = this.items.findIndex((c) => r(s, c) < 0);
      o === -1 ? this.items.push(s) : this.items.splice(o, 0, s);
    } else
      this.items.push(s);
  }
  delete(t) {
    const n = xe(this.items, t);
    return n ? this.items.splice(this.items.indexOf(n), 1).length > 0 : !1;
  }
  get(t, n) {
    const i = xe(this.items, t)?.value;
    return (!n && j(i) ? i.value : i) ?? void 0;
  }
  has(t) {
    return !!xe(this.items, t);
  }
  set(t, n) {
    this.add(new X(t, n), !0);
  }
  /**
   * @param ctx - Conversion context, originally set in Document#toJS()
   * @param {Class} Type - If set, forces the returned collection type
   * @returns Instance of Type, Map, or Object
   */
  toJSON(t, n, s) {
    const i = s ? new s() : n?.mapAsMap ? /* @__PURE__ */ new Map() : {};
    n?.onCreate && n.onCreate(i);
    for (const r of this.items)
      Sr(n, i, r);
    return i;
  }
  toString(t, n, s) {
    if (!t)
      return JSON.stringify(this);
    for (const i of this.items)
      if (!B(i))
        throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);
    return !t.allNullValues && this.hasAllNullValues(!1) && (t = Object.assign({}, t, { allNullValues: !0 })), Or(this, t, {
      blockItemPrefix: "",
      flowChars: { start: "{", end: "}" },
      itemIndent: t.indent || "",
      onChompKeep: s,
      onComment: n
    });
  }
}
const yt = {
  collection: "map",
  default: !0,
  nodeClass: se,
  tag: "tag:yaml.org,2002:map",
  resolve(e, t) {
    return mt(e) || t("Expected a mapping for this tag"), e;
  },
  createNode: (e, t, n) => se.from(e, t, n)
};
class Ae extends yr {
  static get tagName() {
    return "tag:yaml.org,2002:seq";
  }
  constructor(t) {
    super(pt, t), this.items = [];
  }
  add(t) {
    this.items.push(t);
  }
  /**
   * Removes a value from the collection.
   *
   * `key` must contain a representation of an integer for this to succeed.
   * It may be wrapped in a `Scalar`.
   *
   * @returns `true` if the item was found and removed.
   */
  delete(t) {
    const n = Kt(t);
    return typeof n != "number" ? !1 : this.items.splice(n, 1).length > 0;
  }
  get(t, n) {
    const s = Kt(t);
    if (typeof s != "number")
      return;
    const i = this.items[s];
    return !n && j(i) ? i.value : i;
  }
  /**
   * Checks if the collection includes a value with the key `key`.
   *
   * `key` must contain a representation of an integer for this to succeed.
   * It may be wrapped in a `Scalar`.
   */
  has(t) {
    const n = Kt(t);
    return typeof n == "number" && n < this.items.length;
  }
  /**
   * Sets a value in this collection. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   *
   * If `key` does not contain a representation of an integer, this will throw.
   * It may be wrapped in a `Scalar`.
   */
  set(t, n) {
    const s = Kt(t);
    if (typeof s != "number")
      throw new Error(`Expected a valid index, not ${t}.`);
    const i = this.items[s];
    j(i) && gr(n) ? i.value = n : this.items[s] = n;
  }
  toJSON(t, n) {
    const s = [];
    n?.onCreate && n.onCreate(s);
    let i = 0;
    for (const r of this.items)
      s.push(ce(r, String(i++), n));
    return s;
  }
  toString(t, n, s) {
    return t ? Or(this, t, {
      blockItemPrefix: "- ",
      flowChars: { start: "[", end: "]" },
      itemIndent: (t.indent || "") + "  ",
      onChompKeep: s,
      onComment: n
    }) : JSON.stringify(this);
  }
  static from(t, n, s) {
    const { replacer: i } = s, r = new this(t);
    if (n && Symbol.iterator in Object(n)) {
      let o = 0;
      for (let c of n) {
        if (typeof i == "function") {
          const u = n instanceof Set ? c : String(o++);
          c = i.call(n, u, c);
        }
        r.items.push(At(c, void 0, s));
      }
    }
    return r;
  }
}
function Kt(e) {
  let t = j(e) ? e.value : e;
  return t && typeof t == "string" && (t = Number(t)), typeof t == "number" && Number.isInteger(t) && t >= 0 ? t : null;
}
const bt = {
  collection: "seq",
  default: !0,
  nodeClass: Ae,
  tag: "tag:yaml.org,2002:seq",
  resolve(e, t) {
    return gt(e) || t("Expected a sequence for this tag"), e;
  },
  createNode: (e, t, n) => Ae.from(e, t, n)
}, On = {
  identify: (e) => typeof e == "string",
  default: !0,
  tag: "tag:yaml.org,2002:str",
  resolve: (e) => e,
  stringify(e, t, n, s) {
    return t = Object.assign({ actualString: !0 }, t), jt(e, t, n, s);
  }
}, $n = {
  identify: (e) => e == null,
  createNode: () => new T(null),
  default: !0,
  tag: "tag:yaml.org,2002:null",
  test: /^(?:~|[Nn]ull|NULL)?$/,
  resolve: () => new T(null),
  stringify: ({ source: e }, t) => typeof e == "string" && $n.test.test(e) ? e : t.options.nullStr
}, $s = {
  identify: (e) => typeof e == "boolean",
  default: !0,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
  resolve: (e) => new T(e[0] === "t" || e[0] === "T"),
  stringify({ source: e, value: t }, n) {
    if (e && $s.test.test(e)) {
      const s = e[0] === "t" || e[0] === "T";
      if (t === s)
        return e;
    }
    return t ? n.options.trueStr : n.options.falseStr;
  }
};
function pe({ format: e, minFractionDigits: t, tag: n, value: s }) {
  if (typeof s == "bigint")
    return String(s);
  const i = typeof s == "number" ? s : Number(s);
  if (!isFinite(i))
    return isNaN(i) ? ".nan" : i < 0 ? "-.inf" : ".inf";
  let r = Object.is(s, -0) ? "-0" : JSON.stringify(s);
  if (!e && t && (!n || n === "tag:yaml.org,2002:float") && /^-?\d/.test(r) && !r.includes("e")) {
    let o = r.indexOf(".");
    o < 0 && (o = r.length, r += ".");
    let c = t - (r.length - o - 1);
    for (; c-- > 0; )
      r += "0";
  }
  return r;
}
const $r = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
  resolve: (e) => e.slice(-3).toLowerCase() === "nan" ? NaN : e[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
  stringify: pe
}, Ir = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  format: "EXP",
  test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
  resolve: (e) => parseFloat(e),
  stringify(e) {
    const t = Number(e.value);
    return isFinite(t) ? t.toExponential() : pe(e);
  }
}, Nr = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
  resolve(e) {
    const t = new T(parseFloat(e)), n = e.indexOf(".");
    return n !== -1 && e[e.length - 1] === "0" && (t.minFractionDigits = e.length - n - 1), t;
  },
  stringify: pe
}, In = (e) => typeof e == "bigint" || Number.isInteger(e), Is = (e, t, n, { intAsBigInt: s }) => s ? BigInt(e) : parseInt(e.substring(t), n);
function Pr(e, t, n) {
  const { value: s } = e;
  return In(s) && s >= 0 ? n + s.toString(t) : pe(e);
}
const Er = {
  identify: (e) => In(e) && e >= 0,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "OCT",
  test: /^0o[0-7]+$/,
  resolve: (e, t, n) => Is(e, 2, 8, n),
  stringify: (e) => Pr(e, 8, "0o")
}, Ar = {
  identify: In,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  test: /^[-+]?[0-9]+$/,
  resolve: (e, t, n) => Is(e, 0, 10, n),
  stringify: pe
}, Tr = {
  identify: (e) => In(e) && e >= 0,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "HEX",
  test: /^0x[0-9a-fA-F]+$/,
  resolve: (e, t, n) => Is(e, 2, 16, n),
  stringify: (e) => Pr(e, 16, "0x")
}, Cc = [
  yt,
  bt,
  On,
  $n,
  $s,
  Er,
  Ar,
  Tr,
  $r,
  Ir,
  Nr
];
function ci(e) {
  return typeof e == "bigint" || Number.isInteger(e);
}
const Gt = ({ value: e }) => JSON.stringify(e), Lc = [
  {
    identify: (e) => typeof e == "string",
    default: !0,
    tag: "tag:yaml.org,2002:str",
    resolve: (e) => e,
    stringify: Gt
  },
  {
    identify: (e) => e == null,
    createNode: () => new T(null),
    default: !0,
    tag: "tag:yaml.org,2002:null",
    test: /^null$/,
    resolve: () => null,
    stringify: Gt
  },
  {
    identify: (e) => typeof e == "boolean",
    default: !0,
    tag: "tag:yaml.org,2002:bool",
    test: /^true$|^false$/,
    resolve: (e) => e === "true",
    stringify: Gt
  },
  {
    identify: ci,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    test: /^-?(?:0|[1-9][0-9]*)$/,
    resolve: (e, t, { intAsBigInt: n }) => n ? BigInt(e) : parseInt(e, 10),
    stringify: ({ value: e }) => ci(e) ? e.toString() : JSON.stringify(e)
  },
  {
    identify: (e) => typeof e == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
    resolve: (e) => parseFloat(e),
    stringify: Gt
  }
], Mc = {
  default: !0,
  tag: "",
  test: /^/,
  resolve(e, t) {
    return t(`Unresolved plain scalar ${JSON.stringify(e)}`), e;
  }
}, Dc = [yt, bt].concat(Lc, Mc), Ns = {
  identify: (e) => e instanceof Uint8Array,
  // Buffer inherits from Uint8Array
  default: !1,
  tag: "tag:yaml.org,2002:binary",
  /**
   * Returns a Buffer in node and an Uint8Array in browsers
   *
   * To use the resulting buffer as an image, you'll want to do something like:
   *
   *   const blob = new Blob([buffer], { type: 'image/jpeg' })
   *   document.querySelector('#photo').src = URL.createObjectURL(blob)
   */
  resolve(e, t) {
    if (typeof atob == "function") {
      const n = atob(e.replace(/[\n\r]/g, "")), s = new Uint8Array(n.length);
      for (let i = 0; i < n.length; ++i)
        s[i] = n.charCodeAt(i);
      return s;
    } else
      return t("This environment does not support reading binary tags; either Buffer or atob is required"), e;
  },
  stringify({ comment: e, type: t, value: n }, s, i, r) {
    if (!n)
      return "";
    const o = n;
    let c;
    if (typeof btoa == "function") {
      let u = "";
      for (let a = 0; a < o.length; ++a)
        u += String.fromCharCode(o[a]);
      c = btoa(u);
    } else
      throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
    if (t ?? (t = T.BLOCK_LITERAL), t !== T.QUOTE_DOUBLE) {
      const u = Math.max(s.options.lineWidth - s.indent.length, s.options.minContentWidth), a = Math.ceil(c.length / u), l = new Array(a);
      for (let f = 0, d = 0; f < a; ++f, d += u)
        l[f] = c.substr(d, u);
      c = l.join(t === T.BLOCK_LITERAL ? `
` : " ");
    }
    return jt({ comment: e, type: t, value: c }, s, i, r);
  }
};
function zr(e, t) {
  if (gt(e))
    for (let n = 0; n < e.items.length; ++n) {
      let s = e.items[n];
      if (!B(s)) {
        if (mt(s)) {
          s.items.length > 1 && t("Each pair must have its own sequence indicator");
          const i = s.items[0] || new X(new T(null));
          if (s.commentBefore && (i.key.commentBefore = i.key.commentBefore ? `${s.commentBefore}
${i.key.commentBefore}` : s.commentBefore), s.comment) {
            const r = i.value ?? i.key;
            r.comment = r.comment ? `${s.comment}
${r.comment}` : s.comment;
          }
          s = i;
        }
        e.items[n] = B(s) ? s : new X(s);
      }
    }
  else
    t("Expected a sequence for this tag");
  return e;
}
function Cr(e, t, n) {
  const { replacer: s } = n, i = new Ae(e);
  i.tag = "tag:yaml.org,2002:pairs";
  let r = 0;
  if (t && Symbol.iterator in Object(t))
    for (let o of t) {
      typeof s == "function" && (o = s.call(t, String(r++), o));
      let c, u;
      if (Array.isArray(o))
        if (o.length === 2)
          c = o[0], u = o[1];
        else
          throw new TypeError(`Expected [key, value] tuple: ${o}`);
      else if (o && o instanceof Object) {
        const a = Object.keys(o);
        if (a.length === 1)
          c = a[0], u = o[c];
        else
          throw new TypeError(`Expected tuple with one key, not ${a.length} keys`);
      } else
        c = o;
      i.items.push(Os(c, u, n));
    }
  return i;
}
const Ps = {
  collection: "seq",
  default: !1,
  tag: "tag:yaml.org,2002:pairs",
  resolve: zr,
  createNode: Cr
};
class rt extends Ae {
  constructor() {
    super(), this.add = se.prototype.add.bind(this), this.delete = se.prototype.delete.bind(this), this.get = se.prototype.get.bind(this), this.has = se.prototype.has.bind(this), this.set = se.prototype.set.bind(this), this.tag = rt.tag;
  }
  /**
   * If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
   * but TypeScript won't allow widening the signature of a child method.
   */
  toJSON(t, n) {
    if (!n)
      return super.toJSON(t);
    const s = /* @__PURE__ */ new Map();
    n?.onCreate && n.onCreate(s);
    for (const i of this.items) {
      let r, o;
      if (B(i) ? (r = ce(i.key, "", n), o = ce(i.value, r, n)) : r = ce(i, "", n), s.has(r))
        throw new Error("Ordered maps must not include duplicate keys");
      s.set(r, o);
    }
    return s;
  }
  static from(t, n, s) {
    const i = Cr(t, n, s), r = new this();
    return r.items = i.items, r;
  }
}
rt.tag = "tag:yaml.org,2002:omap";
const Es = {
  collection: "seq",
  identify: (e) => e instanceof Map,
  nodeClass: rt,
  default: !1,
  tag: "tag:yaml.org,2002:omap",
  resolve(e, t) {
    const n = zr(e, t), s = [];
    for (const { key: i } of n.items)
      j(i) && (s.includes(i.value) ? t(`Ordered maps must not include duplicate keys: ${i.value}`) : s.push(i.value));
    return Object.assign(new rt(), n);
  },
  createNode: (e, t, n) => rt.from(e, t, n)
};
function Lr({ value: e, source: t }, n) {
  return t && (e ? Mr : Dr).test.test(t) ? t : e ? n.options.trueStr : n.options.falseStr;
}
const Mr = {
  identify: (e) => e === !0,
  default: !0,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
  resolve: () => new T(!0),
  stringify: Lr
}, Dr = {
  identify: (e) => e === !1,
  default: !0,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
  resolve: () => new T(!1),
  stringify: Lr
}, jc = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
  resolve: (e) => e.slice(-3).toLowerCase() === "nan" ? NaN : e[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
  stringify: pe
}, Zc = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  format: "EXP",
  test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
  resolve: (e) => parseFloat(e.replace(/_/g, "")),
  stringify(e) {
    const t = Number(e.value);
    return isFinite(t) ? t.toExponential() : pe(e);
  }
}, xc = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
  resolve(e) {
    const t = new T(parseFloat(e.replace(/_/g, ""))), n = e.indexOf(".");
    if (n !== -1) {
      const s = e.substring(n + 1).replace(/_/g, "");
      s[s.length - 1] === "0" && (t.minFractionDigits = s.length);
    }
    return t;
  },
  stringify: pe
}, Zt = (e) => typeof e == "bigint" || Number.isInteger(e);
function Nn(e, t, n, { intAsBigInt: s }) {
  const i = e[0];
  if ((i === "-" || i === "+") && (t += 1), e = e.substring(t).replace(/_/g, ""), s) {
    switch (n) {
      case 2:
        e = `0b${e}`;
        break;
      case 8:
        e = `0o${e}`;
        break;
      case 16:
        e = `0x${e}`;
        break;
    }
    const o = BigInt(e);
    return i === "-" ? BigInt(-1) * o : o;
  }
  const r = parseInt(e, n);
  return i === "-" ? -1 * r : r;
}
function As(e, t, n) {
  const { value: s } = e;
  if (Zt(s)) {
    const i = s.toString(t);
    return s < 0 ? "-" + n + i.substr(1) : n + i;
  }
  return pe(e);
}
const Rc = {
  identify: Zt,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "BIN",
  test: /^[-+]?0b[0-1_]+$/,
  resolve: (e, t, n) => Nn(e, 2, 2, n),
  stringify: (e) => As(e, 2, "0b")
}, Bc = {
  identify: Zt,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "OCT",
  test: /^[-+]?0[0-7_]+$/,
  resolve: (e, t, n) => Nn(e, 1, 8, n),
  stringify: (e) => As(e, 8, "0")
}, Uc = {
  identify: Zt,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  test: /^[-+]?[0-9][0-9_]*$/,
  resolve: (e, t, n) => Nn(e, 0, 10, n),
  stringify: pe
}, Fc = {
  identify: Zt,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "HEX",
  test: /^[-+]?0x[0-9a-fA-F_]+$/,
  resolve: (e, t, n) => Nn(e, 2, 16, n),
  stringify: (e) => As(e, 16, "0x")
};
class ot extends se {
  constructor(t) {
    super(t), this.tag = ot.tag;
  }
  add(t) {
    let n;
    B(t) ? n = t : t && typeof t == "object" && "key" in t && "value" in t && t.value === null ? n = new X(t.key, null) : n = new X(t, null), xe(this.items, n.key) || this.items.push(n);
  }
  /**
   * If `keepPair` is `true`, returns the Pair matching `key`.
   * Otherwise, returns the value of that Pair's key.
   */
  get(t, n) {
    const s = xe(this.items, t);
    return !n && B(s) ? j(s.key) ? s.key.value : s.key : s;
  }
  set(t, n) {
    if (typeof n != "boolean")
      throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);
    const s = xe(this.items, t);
    s && !n ? this.items.splice(this.items.indexOf(s), 1) : !s && n && this.items.push(new X(t));
  }
  toJSON(t, n) {
    return super.toJSON(t, n, Set);
  }
  toString(t, n, s) {
    if (!t)
      return JSON.stringify(this);
    if (this.hasAllNullValues(!0))
      return super.toString(Object.assign({}, t, { allNullValues: !0 }), n, s);
    throw new Error("Set items must all have null values");
  }
  static from(t, n, s) {
    const { replacer: i } = s, r = new this(t);
    if (n && Symbol.iterator in Object(n))
      for (let o of n)
        typeof i == "function" && (o = i.call(n, o, o)), r.items.push(Os(o, null, s));
    return r;
  }
}
ot.tag = "tag:yaml.org,2002:set";
const Ts = {
  collection: "map",
  identify: (e) => e instanceof Set,
  nodeClass: ot,
  default: !1,
  tag: "tag:yaml.org,2002:set",
  createNode: (e, t, n) => ot.from(e, t, n),
  resolve(e, t) {
    if (mt(e)) {
      if (e.hasAllNullValues(!0))
        return Object.assign(new ot(), e);
      t("Set items must all have null values");
    } else
      t("Expected a mapping for this tag");
    return e;
  }
};
function zs(e, t) {
  const n = e[0], s = n === "-" || n === "+" ? e.substring(1) : e, i = (o) => t ? BigInt(o) : Number(o), r = s.replace(/_/g, "").split(":").reduce((o, c) => o * i(60) + i(c), i(0));
  return n === "-" ? i(-1) * r : r;
}
function jr(e) {
  let { value: t } = e, n = (o) => o;
  if (typeof t == "bigint")
    n = (o) => BigInt(o);
  else if (isNaN(t) || !isFinite(t))
    return pe(e);
  let s = "";
  t < 0 && (s = "-", t *= n(-1));
  const i = n(60), r = [t % i];
  return t < 60 ? r.unshift(0) : (t = (t - r[0]) / i, r.unshift(t % i), t >= 60 && (t = (t - r[0]) / i, r.unshift(t))), s + r.map((o) => String(o).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
}
const Zr = {
  identify: (e) => typeof e == "bigint" || Number.isInteger(e),
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "TIME",
  test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
  resolve: (e, t, { intAsBigInt: n }) => zs(e, n),
  stringify: jr
}, xr = {
  identify: (e) => typeof e == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  format: "TIME",
  test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
  resolve: (e) => zs(e, !1),
  stringify: jr
}, Pn = {
  identify: (e) => e instanceof Date,
  default: !0,
  tag: "tag:yaml.org,2002:timestamp",
  // If the time zone is omitted, the timestamp is assumed to be specified in UTC. The time part
  // may be omitted altogether, resulting in a date format. In such a case, the time part is
  // assumed to be 00:00:00Z (start of day, UTC).
  test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
  resolve(e) {
    const t = e.match(Pn.test);
    if (!t)
      throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
    const [, n, s, i, r, o, c] = t.map(Number), u = t[7] ? Number((t[7] + "00").substr(1, 3)) : 0;
    let a = Date.UTC(n, s - 1, i, r || 0, o || 0, c || 0, u);
    const l = t[8];
    if (l && l !== "Z") {
      let f = zs(l, !1);
      Math.abs(f) < 30 && (f *= 60), a -= 6e4 * f;
    }
    return new Date(a);
  },
  stringify: ({ value: e }) => e?.toISOString().replace(/(T00:00:00)?\.000Z$/, "") ?? ""
}, ai = [
  yt,
  bt,
  On,
  $n,
  Mr,
  Dr,
  Rc,
  Bc,
  Uc,
  Fc,
  jc,
  Zc,
  xc,
  Ns,
  ke,
  Es,
  Ps,
  Ts,
  Zr,
  xr,
  Pn
], ui = /* @__PURE__ */ new Map([
  ["core", Cc],
  ["failsafe", [yt, bt, On]],
  ["json", Dc],
  ["yaml11", ai],
  ["yaml-1.1", ai]
]), li = {
  binary: Ns,
  bool: $s,
  float: Nr,
  floatExp: Ir,
  floatNaN: $r,
  floatTime: xr,
  int: Ar,
  intHex: Tr,
  intOct: Er,
  intTime: Zr,
  map: yt,
  merge: ke,
  null: $n,
  omap: Es,
  pairs: Ps,
  seq: bt,
  set: Ts,
  timestamp: Pn
}, Kc = {
  "tag:yaml.org,2002:binary": Ns,
  "tag:yaml.org,2002:merge": ke,
  "tag:yaml.org,2002:omap": Es,
  "tag:yaml.org,2002:pairs": Ps,
  "tag:yaml.org,2002:set": Ts,
  "tag:yaml.org,2002:timestamp": Pn
};
function Un(e, t, n) {
  const s = ui.get(t);
  if (s && !e)
    return n && !s.includes(ke) ? s.concat(ke) : s.slice();
  let i = s;
  if (!i)
    if (Array.isArray(e))
      i = [];
    else {
      const r = Array.from(ui.keys()).filter((o) => o !== "yaml11").map((o) => JSON.stringify(o)).join(", ");
      throw new Error(`Unknown schema "${t}"; use one of ${r} or define customTags array`);
    }
  if (Array.isArray(e))
    for (const r of e)
      i = i.concat(r);
  else typeof e == "function" && (i = e(i.slice()));
  return n && (i = i.concat(ke)), i.reduce((r, o) => {
    const c = typeof o == "string" ? li[o] : o;
    if (!c) {
      const u = JSON.stringify(o), a = Object.keys(li).map((l) => JSON.stringify(l)).join(", ");
      throw new Error(`Unknown custom tag ${u}; use one of ${a}`);
    }
    return r.includes(c) || r.push(c), r;
  }, []);
}
const Gc = (e, t) => e.key < t.key ? -1 : e.key > t.key ? 1 : 0;
class En {
  constructor({ compat: t, customTags: n, merge: s, resolveKnownTags: i, schema: r, sortMapEntries: o, toStringDefaults: c }) {
    this.compat = Array.isArray(t) ? Un(t, "compat") : t ? Un(null, t) : null, this.name = typeof r == "string" && r || "core", this.knownTags = i ? Kc : {}, this.tags = Un(n, this.name, s), this.toStringOptions = c ?? null, Object.defineProperty(this, Ee, { value: yt }), Object.defineProperty(this, ye, { value: On }), Object.defineProperty(this, pt, { value: bt }), this.sortMapEntries = typeof o == "function" ? o : o === !0 ? Gc : null;
  }
  clone() {
    const t = Object.create(En.prototype, Object.getOwnPropertyDescriptors(this));
    return t.tags = this.tags.slice(), t;
  }
}
function Vc(e, t) {
  const n = [];
  let s = t.directives === !0;
  if (t.directives !== !1 && e.directives) {
    const u = e.directives.toString(e);
    u ? (n.push(u), s = !0) : e.directives.docStart && (s = !0);
  }
  s && n.push("---");
  const i = wr(e, t), { commentString: r } = i.options;
  if (e.commentBefore) {
    n.length !== 1 && n.unshift("");
    const u = r(e.commentBefore);
    n.unshift(ve(u, ""));
  }
  let o = !1, c = null;
  if (e.contents) {
    if (G(e.contents)) {
      if (e.contents.spaceBefore && s && n.push(""), e.contents.commentBefore) {
        const l = r(e.contents.commentBefore);
        n.push(ve(l, ""));
      }
      i.forceBlockIndent = !!e.comment, c = e.contents.comment;
    }
    const u = c ? void 0 : () => o = !0;
    let a = ct(e.contents, i, () => c = null, u);
    c && (a += Ze(a, "", r(c))), (a[0] === "|" || a[0] === ">") && n[n.length - 1] === "---" ? n[n.length - 1] = `--- ${a}` : n.push(a);
  } else
    n.push(ct(e.contents, i));
  if (e.directives?.docEnd)
    if (e.comment) {
      const u = r(e.comment);
      u.includes(`
`) ? (n.push("..."), n.push(ve(u, ""))) : n.push(`... ${u}`);
    } else
      n.push("...");
  else {
    let u = e.comment;
    u && o && (u = u.replace(/^\n+/, "")), u && ((!o || c) && n[n.length - 1] !== "" && n.push(""), n.push(ve(r(u), "")));
  }
  return n.join(`
`) + `
`;
}
class wt {
  constructor(t, n, s) {
    this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, ae, { value: ss });
    let i = null;
    typeof n == "function" || Array.isArray(n) ? i = n : s === void 0 && n && (s = n, n = void 0);
    const r = Object.assign({
      intAsBigInt: !1,
      keepSourceTokens: !1,
      logLevel: "warn",
      prettyErrors: !0,
      strict: !0,
      stringKeys: !1,
      uniqueKeys: !0,
      version: "1.2"
    }, s);
    this.options = r;
    let { version: o } = r;
    s?._directives ? (this.directives = s._directives.atDocument(), this.directives.yaml.explicit && (o = this.directives.yaml.version)) : this.directives = new Q({ version: o }), this.setSchema(o, s), this.contents = t === void 0 ? null : this.createNode(t, i, s);
  }
  /**
   * Create a deep copy of this Document and its contents.
   *
   * Custom Node values that inherit from `Object` still refer to their original instances.
   */
  clone() {
    const t = Object.create(wt.prototype, {
      [ae]: { value: ss }
    });
    return t.commentBefore = this.commentBefore, t.comment = this.comment, t.errors = this.errors.slice(), t.warnings = this.warnings.slice(), t.options = Object.assign({}, this.options), this.directives && (t.directives = this.directives.clone()), t.schema = this.schema.clone(), t.contents = G(this.contents) ? this.contents.clone(t.schema) : this.contents, this.range && (t.range = this.range.slice()), t;
  }
  /** Adds a value to the document. */
  add(t) {
    Xe(this.contents) && this.contents.add(t);
  }
  /** Adds a value to the document. */
  addIn(t, n) {
    Xe(this.contents) && this.contents.addIn(t, n);
  }
  /**
   * Create a new `Alias` node, ensuring that the target `node` has the required anchor.
   *
   * If `node` already has an anchor, `name` is ignored.
   * Otherwise, the `node.anchor` value will be set to `name`,
   * or if an anchor with that name is already present in the document,
   * `name` will be used as a prefix for a new unique anchor.
   * If `name` is undefined, the generated anchor will use 'a' as a prefix.
   */
  createAlias(t, n) {
    if (!t.anchor) {
      const s = pr(this);
      t.anchor = // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      !n || s.has(n) ? mr(n || "a", s) : n;
    }
    return new _n(t.anchor);
  }
  createNode(t, n, s) {
    let i;
    if (typeof n == "function")
      t = n.call({ "": t }, "", t), i = n;
    else if (Array.isArray(n)) {
      const g = (v) => typeof v == "number" || v instanceof String || v instanceof Number, b = n.filter(g).map(String);
      b.length > 0 && (n = n.concat(b)), i = n;
    } else s === void 0 && n && (s = n, n = void 0);
    const { aliasDuplicateObjects: r, anchorPrefix: o, flow: c, keepUndefined: u, onTagObj: a, tag: l } = s ?? {}, { onAnchor: f, setAnchors: d, sourceObjects: p } = _c(
      this,
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      o || "a"
    ), m = {
      aliasDuplicateObjects: r ?? !0,
      keepUndefined: u ?? !1,
      onAnchor: f,
      onTagObj: a,
      replacer: i,
      schema: this.schema,
      sourceObjects: p
    }, h = At(t, l, m);
    return c && K(h) && (h.flow = !0), d(), h;
  }
  /**
   * Convert a key and a value into a `Pair` using the current schema,
   * recursively wrapping all values as `Scalar` or `Collection` nodes.
   */
  createPair(t, n, s = {}) {
    const i = this.createNode(t, null, s), r = this.createNode(n, null, s);
    return new X(i, r);
  }
  /**
   * Removes a value from the document.
   * @returns `true` if the item was found and removed.
   */
  delete(t) {
    return Xe(this.contents) ? this.contents.delete(t) : !1;
  }
  /**
   * Removes a value from the document.
   * @returns `true` if the item was found and removed.
   */
  deleteIn(t) {
    return Ot(t) ? this.contents == null ? !1 : (this.contents = null, !0) : Xe(this.contents) ? this.contents.deleteIn(t) : !1;
  }
  /**
   * Returns item at `key`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  get(t, n) {
    return K(this.contents) ? this.contents.get(t, n) : void 0;
  }
  /**
   * Returns item at `path`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  getIn(t, n) {
    return Ot(t) ? !n && j(this.contents) ? this.contents.value : this.contents : K(this.contents) ? this.contents.getIn(t, n) : void 0;
  }
  /**
   * Checks if the document includes a value with the key `key`.
   */
  has(t) {
    return K(this.contents) ? this.contents.has(t) : !1;
  }
  /**
   * Checks if the document includes a value at `path`.
   */
  hasIn(t) {
    return Ot(t) ? this.contents !== void 0 : K(this.contents) ? this.contents.hasIn(t) : !1;
  }
  /**
   * Sets a value in this document. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  set(t, n) {
    this.contents == null ? this.contents = an(this.schema, [t], n) : Xe(this.contents) && this.contents.set(t, n);
  }
  /**
   * Sets a value in this document. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  setIn(t, n) {
    Ot(t) ? this.contents = n : this.contents == null ? this.contents = an(this.schema, Array.from(t), n) : Xe(this.contents) && this.contents.setIn(t, n);
  }
  /**
   * Change the YAML version and schema used by the document.
   * A `null` version disables support for directives, explicit tags, anchors, and aliases.
   * It also requires the `schema` option to be given as a `Schema` instance value.
   *
   * Overrides all previously set schema options.
   */
  setSchema(t, n = {}) {
    typeof t == "number" && (t = String(t));
    let s;
    switch (t) {
      case "1.1":
        this.directives ? this.directives.yaml.version = "1.1" : this.directives = new Q({ version: "1.1" }), s = { resolveKnownTags: !1, schema: "yaml-1.1" };
        break;
      case "1.2":
      case "next":
        this.directives ? this.directives.yaml.version = t : this.directives = new Q({ version: t }), s = { resolveKnownTags: !0, schema: "core" };
        break;
      case null:
        this.directives && delete this.directives, s = null;
        break;
      default: {
        const i = JSON.stringify(t);
        throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`);
      }
    }
    if (n.schema instanceof Object)
      this.schema = n.schema;
    else if (s)
      this.schema = new En(Object.assign(s, n));
    else
      throw new Error("With a null YAML version, the { schema: Schema } option is required");
  }
  // json & jsonArg are only used from toJSON()
  toJS({ json: t, jsonArg: n, mapAsMap: s, maxAliasCount: i, onAnchor: r, reviver: o } = {}) {
    const c = {
      anchors: /* @__PURE__ */ new Map(),
      doc: this,
      keep: !t,
      mapAsMap: s === !0,
      mapKeyWarned: !1,
      maxAliasCount: typeof i == "number" ? i : 100
    }, u = ce(this.contents, n ?? "", c);
    if (typeof r == "function")
      for (const { count: a, res: l } of c.anchors.values())
        r(l, a);
    return typeof o == "function" ? tt(o, { "": u }, "", u) : u;
  }
  /**
   * A JSON representation of the document `contents`.
   *
   * @param jsonArg Used by `JSON.stringify` to indicate the array index or
   *   property name.
   */
  toJSON(t, n) {
    return this.toJS({ json: !0, jsonArg: t, mapAsMap: !1, onAnchor: n });
  }
  /** A YAML representation of the document. */
  toString(t = {}) {
    if (this.errors.length > 0)
      throw new Error("Document with errors cannot be stringified");
    if ("indent" in t && (!Number.isInteger(t.indent) || Number(t.indent) <= 0)) {
      const n = JSON.stringify(t.indent);
      throw new Error(`"indent" option must be a positive integer, not ${n}`);
    }
    return Vc(this, t);
  }
}
function Xe(e) {
  if (K(e))
    return !0;
  throw new Error("Expected a YAML collection as document contents");
}
class Cs extends Error {
  constructor(t, n, s, i) {
    super(), this.name = t, this.code = s, this.message = i, this.pos = n;
  }
}
class Re extends Cs {
  constructor(t, n, s) {
    super("YAMLParseError", t, n, s);
  }
}
class Rr extends Cs {
  constructor(t, n, s) {
    super("YAMLWarning", t, n, s);
  }
}
const ln = (e, t) => (n) => {
  if (n.pos[0] === -1)
    return;
  n.linePos = n.pos.map((c) => t.linePos(c));
  const { line: s, col: i } = n.linePos[0];
  n.message += ` at line ${s}, column ${i}`;
  let r = i - 1, o = e.substring(t.lineStarts[s - 1], t.lineStarts[s]).replace(/[\n\r]+$/, "");
  if (r >= 60 && o.length > 80) {
    const c = Math.min(r - 39, o.length - 79);
    o = "…" + o.substring(c), r -= c - 1;
  }
  if (o.length > 80 && (o = o.substring(0, 79) + "…"), s > 1 && /^ *$/.test(o.substring(0, r))) {
    let c = e.substring(t.lineStarts[s - 2], t.lineStarts[s - 1]);
    c.length > 80 && (c = c.substring(0, 79) + `…
`), o = c + o;
  }
  if (/[^ ]/.test(o)) {
    let c = 1;
    const u = n.linePos[1];
    u?.line === s && u.col > i && (c = Math.max(1, Math.min(u.col - i, 80 - r)));
    const a = " ".repeat(r) + "^".repeat(c);
    n.message += `:

${o}
${a}
`;
  }
};
function at(e, { flow: t, indicator: n, next: s, offset: i, onError: r, parentIndent: o, startOnNewline: c }) {
  let u = !1, a = c, l = c, f = "", d = "", p = !1, m = !1, h = null, g = null, b = null, v = null, S = null, O = null, _ = null;
  for (const k of e)
    switch (m && (k.type !== "space" && k.type !== "newline" && k.type !== "comma" && r(k.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), m = !1), h && (a && k.type !== "comment" && k.type !== "newline" && r(h, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), h = null), k.type) {
      case "space":
        !t && (n !== "doc-start" || s?.type !== "flow-collection") && k.source.includes("	") && (h = k), l = !0;
        break;
      case "comment": {
        l || r(k, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
        const A = k.source.substring(1) || " ";
        f ? f += d + A : f = A, d = "", a = !1;
        break;
      }
      case "newline":
        a ? f ? f += k.source : (!O || n !== "seq-item-ind") && (u = !0) : d += k.source, a = !0, p = !0, (g || b) && (v = k), l = !0;
        break;
      case "anchor":
        g && r(k, "MULTIPLE_ANCHORS", "A node can have at most one anchor"), k.source.endsWith(":") && r(k.offset + k.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", !0), g = k, _ ?? (_ = k.offset), a = !1, l = !1, m = !0;
        break;
      case "tag": {
        b && r(k, "MULTIPLE_TAGS", "A node can have at most one tag"), b = k, _ ?? (_ = k.offset), a = !1, l = !1, m = !0;
        break;
      }
      case n:
        (g || b) && r(k, "BAD_PROP_ORDER", `Anchors and tags must be after the ${k.source} indicator`), O && r(k, "UNEXPECTED_TOKEN", `Unexpected ${k.source} in ${t ?? "collection"}`), O = k, a = n === "seq-item-ind" || n === "explicit-key-ind", l = !1;
        break;
      case "comma":
        if (t) {
          S && r(k, "UNEXPECTED_TOKEN", `Unexpected , in ${t}`), S = k, a = !1, l = !1;
          break;
        }
      // else fallthrough
      default:
        r(k, "UNEXPECTED_TOKEN", `Unexpected ${k.type} token`), a = !1, l = !1;
    }
  const w = e[e.length - 1], $ = w ? w.offset + w.source.length : i;
  return m && s && s.type !== "space" && s.type !== "newline" && s.type !== "comma" && (s.type !== "scalar" || s.source !== "") && r(s.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), h && (a && h.indent <= o || s?.type === "block-map" || s?.type === "block-seq") && r(h, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), {
    comma: S,
    found: O,
    spaceBefore: u,
    comment: f,
    hasNewline: p,
    anchor: g,
    tag: b,
    newlineAfterProp: v,
    end: $,
    start: _ ?? $
  };
}
function Tt(e) {
  if (!e)
    return null;
  switch (e.type) {
    case "alias":
    case "scalar":
    case "double-quoted-scalar":
    case "single-quoted-scalar":
      if (e.source.includes(`
`))
        return !0;
      if (e.end) {
        for (const t of e.end)
          if (t.type === "newline")
            return !0;
      }
      return !1;
    case "flow-collection":
      for (const t of e.items) {
        for (const n of t.start)
          if (n.type === "newline")
            return !0;
        if (t.sep) {
          for (const n of t.sep)
            if (n.type === "newline")
              return !0;
        }
        if (Tt(t.key) || Tt(t.value))
          return !0;
      }
      return !1;
    default:
      return !0;
  }
}
function cs(e, t, n) {
  if (t?.type === "flow-collection") {
    const s = t.end[0];
    s.indent === e && (s.source === "]" || s.source === "}") && Tt(t) && n(s, "BAD_INDENT", "Flow end indicator should be more indented than parent", !0);
  }
}
function Br(e, t, n) {
  const { uniqueKeys: s } = e.options;
  if (s === !1)
    return !1;
  const i = typeof s == "function" ? s : (r, o) => r === o || j(r) && j(o) && r.value === o.value;
  return t.some((r) => i(r.key, n));
}
const fi = "All mapping items must start at the same column";
function qc({ composeNode: e, composeEmptyNode: t }, n, s, i, r) {
  const o = r?.nodeClass ?? se, c = new o(n.schema);
  n.atRoot && (n.atRoot = !1);
  let u = s.offset, a = null;
  for (const l of s.items) {
    const { start: f, key: d, sep: p, value: m } = l, h = at(f, {
      indicator: "explicit-key-ind",
      next: d ?? p?.[0],
      offset: u,
      onError: i,
      parentIndent: s.indent,
      startOnNewline: !0
    }), g = !h.found;
    if (g) {
      if (d && (d.type === "block-seq" ? i(u, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key") : "indent" in d && d.indent !== s.indent && i(u, "BAD_INDENT", fi)), !h.anchor && !h.tag && !p) {
        a = h.end, h.comment && (c.comment ? c.comment += `
` + h.comment : c.comment = h.comment);
        continue;
      }
      (h.newlineAfterProp || Tt(d)) && i(d ?? f[f.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
    } else h.found?.indent !== s.indent && i(u, "BAD_INDENT", fi);
    n.atKey = !0;
    const b = h.end, v = d ? e(n, d, h, i) : t(n, b, f, null, h, i);
    n.schema.compat && cs(s.indent, d, i), n.atKey = !1, Br(n, c.items, v) && i(b, "DUPLICATE_KEY", "Map keys must be unique");
    const S = at(p ?? [], {
      indicator: "map-value-ind",
      next: m,
      offset: v.range[2],
      onError: i,
      parentIndent: s.indent,
      startOnNewline: !d || d.type === "block-scalar"
    });
    if (u = S.end, S.found) {
      g && (m?.type === "block-map" && !S.hasNewline && i(u, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings"), n.options.strict && h.start < S.found.offset - 1024 && i(v.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));
      const O = m ? e(n, m, S, i) : t(n, u, p, null, S, i);
      n.schema.compat && cs(s.indent, m, i), u = O.range[2];
      const _ = new X(v, O);
      n.options.keepSourceTokens && (_.srcToken = l), c.items.push(_);
    } else {
      g && i(v.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values"), S.comment && (v.comment ? v.comment += `
` + S.comment : v.comment = S.comment);
      const O = new X(v);
      n.options.keepSourceTokens && (O.srcToken = l), c.items.push(O);
    }
  }
  return a && a < u && i(a, "IMPOSSIBLE", "Map comment with trailing content"), c.range = [s.offset, u, a ?? u], c;
}
function Jc({ composeNode: e, composeEmptyNode: t }, n, s, i, r) {
  const o = r?.nodeClass ?? Ae, c = new o(n.schema);
  n.atRoot && (n.atRoot = !1), n.atKey && (n.atKey = !1);
  let u = s.offset, a = null;
  for (const { start: l, value: f } of s.items) {
    const d = at(l, {
      indicator: "seq-item-ind",
      next: f,
      offset: u,
      onError: i,
      parentIndent: s.indent,
      startOnNewline: !0
    });
    if (!d.found)
      if (d.anchor || d.tag || f)
        f?.type === "block-seq" ? i(d.end, "BAD_INDENT", "All sequence items must start at the same column") : i(u, "MISSING_CHAR", "Sequence item without - indicator");
      else {
        a = d.end, d.comment && (c.comment = d.comment);
        continue;
      }
    const p = f ? e(n, f, d, i) : t(n, d.end, l, null, d, i);
    n.schema.compat && cs(s.indent, f, i), u = p.range[2], c.items.push(p);
  }
  return c.range = [s.offset, u, a ?? u], c;
}
function xt(e, t, n, s) {
  let i = "";
  if (e) {
    let r = !1, o = "";
    for (const c of e) {
      const { source: u, type: a } = c;
      switch (a) {
        case "space":
          r = !0;
          break;
        case "comment": {
          n && !r && s(c, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
          const l = u.substring(1) || " ";
          i ? i += o + l : i = l, o = "";
          break;
        }
        case "newline":
          i && (o += u), r = !0;
          break;
        default:
          s(c, "UNEXPECTED_TOKEN", `Unexpected ${a} at node end`);
      }
      t += u.length;
    }
  }
  return { comment: i, offset: t };
}
const Fn = "Block collections are not allowed within flow collections", Kn = (e) => e && (e.type === "block-map" || e.type === "block-seq");
function Yc({ composeNode: e, composeEmptyNode: t }, n, s, i, r) {
  const o = s.start.source === "{", c = o ? "flow map" : "flow sequence", u = r?.nodeClass ?? (o ? se : Ae), a = new u(n.schema);
  a.flow = !0;
  const l = n.atRoot;
  l && (n.atRoot = !1), n.atKey && (n.atKey = !1);
  let f = s.offset + s.start.source.length;
  for (let g = 0; g < s.items.length; ++g) {
    const b = s.items[g], { start: v, key: S, sep: O, value: _ } = b, w = at(v, {
      flow: c,
      indicator: "explicit-key-ind",
      next: S ?? O?.[0],
      offset: f,
      onError: i,
      parentIndent: s.indent,
      startOnNewline: !1
    });
    if (!w.found) {
      if (!w.anchor && !w.tag && !O && !_) {
        g === 0 && w.comma ? i(w.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${c}`) : g < s.items.length - 1 && i(w.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${c}`), w.comment && (a.comment ? a.comment += `
` + w.comment : a.comment = w.comment), f = w.end;
        continue;
      }
      !o && n.options.strict && Tt(S) && i(
        S,
        // checked by containsNewline()
        "MULTILINE_IMPLICIT_KEY",
        "Implicit keys of flow sequence pairs need to be on a single line"
      );
    }
    if (g === 0)
      w.comma && i(w.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${c}`);
    else if (w.comma || i(w.start, "MISSING_CHAR", `Missing , between ${c} items`), w.comment) {
      let $ = "";
      e: for (const k of v)
        switch (k.type) {
          case "comma":
          case "space":
            break;
          case "comment":
            $ = k.source.substring(1);
            break e;
          default:
            break e;
        }
      if ($) {
        let k = a.items[a.items.length - 1];
        B(k) && (k = k.value ?? k.key), k.comment ? k.comment += `
` + $ : k.comment = $, w.comment = w.comment.substring($.length + 1);
      }
    }
    if (!o && !O && !w.found) {
      const $ = _ ? e(n, _, w, i) : t(n, w.end, O, null, w, i);
      a.items.push($), f = $.range[2], Kn(_) && i($.range, "BLOCK_IN_FLOW", Fn);
    } else {
      n.atKey = !0;
      const $ = w.end, k = S ? e(n, S, w, i) : t(n, $, v, null, w, i);
      Kn(S) && i(k.range, "BLOCK_IN_FLOW", Fn), n.atKey = !1;
      const A = at(O ?? [], {
        flow: c,
        indicator: "map-value-ind",
        next: _,
        offset: k.range[2],
        onError: i,
        parentIndent: s.indent,
        startOnNewline: !1
      });
      if (A.found) {
        if (!o && !w.found && n.options.strict) {
          if (O)
            for (const P of O) {
              if (P === A.found)
                break;
              if (P.type === "newline") {
                i(P, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
                break;
              }
            }
          w.start < A.found.offset - 1024 && i(A.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
        }
      } else _ && ("source" in _ && _.source?.[0] === ":" ? i(_, "MISSING_CHAR", `Missing space after : in ${c}`) : i(A.start, "MISSING_CHAR", `Missing , or : between ${c} items`));
      const D = _ ? e(n, _, A, i) : A.found ? t(n, A.end, O, null, A, i) : null;
      D ? Kn(_) && i(D.range, "BLOCK_IN_FLOW", Fn) : A.comment && (k.comment ? k.comment += `
` + A.comment : k.comment = A.comment);
      const N = new X(k, D);
      if (n.options.keepSourceTokens && (N.srcToken = b), o) {
        const P = a;
        Br(n, P.items, k) && i($, "DUPLICATE_KEY", "Map keys must be unique"), P.items.push(N);
      } else {
        const P = new se(n.schema);
        P.flow = !0, P.items.push(N);
        const z = (D ?? k).range;
        P.range = [k.range[0], z[1], z[2]], a.items.push(P);
      }
      f = D ? D.range[2] : A.end;
    }
  }
  const d = o ? "}" : "]", [p, ...m] = s.end;
  let h = f;
  if (p?.source === d)
    h = p.offset + p.source.length;
  else {
    const g = c[0].toUpperCase() + c.substring(1), b = l ? `${g} must end with a ${d}` : `${g} in block collection must be sufficiently indented and end with a ${d}`;
    i(f, l ? "MISSING_CHAR" : "BAD_INDENT", b), p && p.source.length !== 1 && m.unshift(p);
  }
  if (m.length > 0) {
    const g = xt(m, h, n.options.strict, i);
    g.comment && (a.comment ? a.comment += `
` + g.comment : a.comment = g.comment), a.range = [s.offset, h, g.offset];
  } else
    a.range = [s.offset, h, h];
  return a;
}
function Gn(e, t, n, s, i, r) {
  const o = n.type === "block-map" ? qc(e, t, n, s, r) : n.type === "block-seq" ? Jc(e, t, n, s, r) : Yc(e, t, n, s, r), c = o.constructor;
  return i === "!" || i === c.tagName ? (o.tag = c.tagName, o) : (i && (o.tag = i), o);
}
function Wc(e, t, n, s, i) {
  const r = s.tag, o = r ? t.directives.tagName(r.source, (d) => i(r, "TAG_RESOLVE_FAILED", d)) : null;
  if (n.type === "block-seq") {
    const { anchor: d, newlineAfterProp: p } = s, m = d && r ? d.offset > r.offset ? d : r : d ?? r;
    m && (!p || p.offset < m.offset) && i(m, "MISSING_CHAR", "Missing newline after block sequence props");
  }
  const c = n.type === "block-map" ? "map" : n.type === "block-seq" ? "seq" : n.start.source === "{" ? "map" : "seq";
  if (!r || !o || o === "!" || o === se.tagName && c === "map" || o === Ae.tagName && c === "seq")
    return Gn(e, t, n, i, o);
  let u = t.schema.tags.find((d) => d.tag === o && d.collection === c);
  if (!u) {
    const d = t.schema.knownTags[o];
    if (d?.collection === c)
      t.schema.tags.push(Object.assign({}, d, { default: !1 })), u = d;
    else
      return d ? i(r, "BAD_COLLECTION_TYPE", `${d.tag} used for ${c} collection, but expects ${d.collection ?? "scalar"}`, !0) : i(r, "TAG_RESOLVE_FAILED", `Unresolved tag: ${o}`, !0), Gn(e, t, n, i, o);
  }
  const a = Gn(e, t, n, i, o, u), l = u.resolve?.(a, (d) => i(r, "TAG_RESOLVE_FAILED", d), t.options) ?? a, f = G(l) ? l : new T(l);
  return f.range = a.range, f.tag = o, u?.format && (f.format = u.format), f;
}
function Ur(e, t, n) {
  const s = t.offset, i = Xc(t, e.options.strict, n);
  if (!i)
    return { value: "", type: null, comment: "", range: [s, s, s] };
  const r = i.mode === ">" ? T.BLOCK_FOLDED : T.BLOCK_LITERAL, o = t.source ? Hc(t.source) : [];
  let c = o.length;
  for (let h = o.length - 1; h >= 0; --h) {
    const g = o[h][1];
    if (g === "" || g === "\r")
      c = h;
    else
      break;
  }
  if (c === 0) {
    const h = i.chomp === "+" && o.length > 0 ? `
`.repeat(Math.max(1, o.length - 1)) : "";
    let g = s + i.length;
    return t.source && (g += t.source.length), { value: h, type: r, comment: i.comment, range: [s, g, g] };
  }
  let u = t.indent + i.indent, a = t.offset + i.length, l = 0;
  for (let h = 0; h < c; ++h) {
    const [g, b] = o[h];
    if (b === "" || b === "\r")
      i.indent === 0 && g.length > u && (u = g.length);
    else {
      g.length < u && n(a + g.length, "MISSING_CHAR", "Block scalars with more-indented leading empty lines must use an explicit indentation indicator"), i.indent === 0 && (u = g.length), l = h, u === 0 && !e.atRoot && n(a, "BAD_INDENT", "Block scalar values in collections must be indented");
      break;
    }
    a += g.length + b.length + 1;
  }
  for (let h = o.length - 1; h >= c; --h)
    o[h][0].length > u && (c = h + 1);
  let f = "", d = "", p = !1;
  for (let h = 0; h < l; ++h)
    f += o[h][0].slice(u) + `
`;
  for (let h = l; h < c; ++h) {
    let [g, b] = o[h];
    a += g.length + b.length + 1;
    const v = b[b.length - 1] === "\r";
    if (v && (b = b.slice(0, -1)), b && g.length < u) {
      const O = `Block scalar lines must not be less indented than their ${i.indent ? "explicit indentation indicator" : "first line"}`;
      n(a - b.length - (v ? 2 : 1), "BAD_INDENT", O), g = "";
    }
    r === T.BLOCK_LITERAL ? (f += d + g.slice(u) + b, d = `
`) : g.length > u || b[0] === "	" ? (d === " " ? d = `
` : !p && d === `
` && (d = `

`), f += d + g.slice(u) + b, d = `
`, p = !0) : b === "" ? d === `
` ? f += `
` : d = `
` : (f += d + b, d = " ", p = !1);
  }
  switch (i.chomp) {
    case "-":
      break;
    case "+":
      for (let h = c; h < o.length; ++h)
        f += `
` + o[h][0].slice(u);
      f[f.length - 1] !== `
` && (f += `
`);
      break;
    default:
      f += `
`;
  }
  const m = s + i.length + t.source.length;
  return { value: f, type: r, comment: i.comment, range: [s, m, m] };
}
function Xc({ offset: e, props: t }, n, s) {
  if (t[0].type !== "block-scalar-header")
    return s(t[0], "IMPOSSIBLE", "Block scalar header not found"), null;
  const { source: i } = t[0], r = i[0];
  let o = 0, c = "", u = -1;
  for (let d = 1; d < i.length; ++d) {
    const p = i[d];
    if (!c && (p === "-" || p === "+"))
      c = p;
    else {
      const m = Number(p);
      !o && m ? o = m : u === -1 && (u = e + d);
    }
  }
  u !== -1 && s(u, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${i}`);
  let a = !1, l = "", f = i.length;
  for (let d = 1; d < t.length; ++d) {
    const p = t[d];
    switch (p.type) {
      case "space":
        a = !0;
      // fallthrough
      case "newline":
        f += p.source.length;
        break;
      case "comment":
        n && !a && s(p, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters"), f += p.source.length, l = p.source.substring(1);
        break;
      case "error":
        s(p, "UNEXPECTED_TOKEN", p.message), f += p.source.length;
        break;
      /* istanbul ignore next should not happen */
      default: {
        const m = `Unexpected token in block scalar header: ${p.type}`;
        s(p, "UNEXPECTED_TOKEN", m);
        const h = p.source;
        h && typeof h == "string" && (f += h.length);
      }
    }
  }
  return { mode: r, indent: o, chomp: c, comment: l, length: f };
}
function Hc(e) {
  const t = e.split(/\n( *)/), n = t[0], s = n.match(/^( *)/), r = [s?.[1] ? [s[1], n.slice(s[1].length)] : ["", n]];
  for (let o = 1; o < t.length; o += 2)
    r.push([t[o], t[o + 1]]);
  return r;
}
function Fr(e, t, n) {
  const { offset: s, type: i, source: r, end: o } = e;
  let c, u;
  const a = (d, p, m) => n(s + d, p, m);
  switch (i) {
    case "scalar":
      c = T.PLAIN, u = Qc(r, a);
      break;
    case "single-quoted-scalar":
      c = T.QUOTE_SINGLE, u = ea(r, a);
      break;
    case "double-quoted-scalar":
      c = T.QUOTE_DOUBLE, u = ta(r, a);
      break;
    /* istanbul ignore next should not happen */
    default:
      return n(e, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${i}`), {
        value: "",
        type: null,
        comment: "",
        range: [s, s + r.length, s + r.length]
      };
  }
  const l = s + r.length, f = xt(o, l, t, n);
  return {
    value: u,
    type: c,
    comment: f.comment,
    range: [s, l, f.offset]
  };
}
function Qc(e, t) {
  let n = "";
  switch (e[0]) {
    /* istanbul ignore next should not happen */
    case "	":
      n = "a tab character";
      break;
    case ",":
      n = "flow indicator character ,";
      break;
    case "%":
      n = "directive indicator character %";
      break;
    case "|":
    case ">": {
      n = `block scalar indicator ${e[0]}`;
      break;
    }
    case "@":
    case "`": {
      n = `reserved character ${e[0]}`;
      break;
    }
  }
  return n && t(0, "BAD_SCALAR_START", `Plain value cannot start with ${n}`), Kr(e);
}
function ea(e, t) {
  return (e[e.length - 1] !== "'" || e.length === 1) && t(e.length, "MISSING_CHAR", "Missing closing 'quote"), Kr(e.slice(1, -1)).replace(/''/g, "'");
}
function Kr(e) {
  const t = /(.*?)\r?\n/sy;
  let n = t.exec(e);
  if (!n)
    return e;
  let s, i;
  try {
    s = new RegExp("(?<![ 	])[ 	]+$"), i = new RegExp("^[ 	]+|(?<![ 	])[ 	]+$", "g");
  } catch {
    s = /[ \t]+$/, i = /^[ \t]+|[ \t]+$/g;
  }
  let r = n[1].replace(s, ""), o = " ", c = t.lastIndex;
  for (; n = t.exec(e); ) {
    const a = n[1].replace(i, "");
    a === "" ? o === `
` ? r += o : o = `
` : (r += o + a, o = " "), c = t.lastIndex;
  }
  const u = /[ \t]*(.*)/sy;
  return u.lastIndex = c, n = u.exec(e), r + o + (n?.[1] ?? "");
}
function ta(e, t) {
  let n = "";
  for (let s = 1; s < e.length - 1; ++s) {
    const i = e[s];
    if (!(i === "\r" && e[s + 1] === `
`))
      if (i === `
`) {
        const { fold: r, offset: o } = na(e, s);
        n += r, s = o;
      } else if (i === "\\") {
        let r = e[++s];
        const o = sa[r];
        if (o)
          n += o;
        else if (r === `
`)
          for (r = e[s + 1]; r === " " || r === "	"; )
            r = e[++s + 1];
        else if (r === "\r" && e[s + 1] === `
`)
          for (r = e[++s + 1]; r === " " || r === "	"; )
            r = e[++s + 1];
        else if (r === "x" || r === "u" || r === "U") {
          const c = r === "x" ? 2 : r === "u" ? 4 : 8;
          n += ia(e, s + 1, c, t), s += c;
        } else {
          const c = e.substr(s - 1, 2);
          t(s - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${c}`), n += c;
        }
      } else if (i === " " || i === "	") {
        const r = s;
        let o = e[s + 1];
        for (; o === " " || o === "	"; )
          o = e[++s + 1];
        o !== `
` && !(o === "\r" && e[s + 2] === `
`) && (n += s > r ? e.slice(r, s + 1) : i);
      } else
        n += i;
  }
  return (e[e.length - 1] !== '"' || e.length === 1) && t(e.length, "MISSING_CHAR", 'Missing closing "quote'), n;
}
function na(e, t) {
  let n = "", s = e[t + 1];
  for (; (s === " " || s === "	" || s === `
` || s === "\r") && !(s === "\r" && e[t + 2] !== `
`); )
    s === `
` && (n += `
`), t += 1, s = e[t + 1];
  return n || (n = " "), { fold: n, offset: t };
}
const sa = {
  0: "\0",
  // null character
  a: "\x07",
  // bell character
  b: "\b",
  // backspace
  e: "\x1B",
  // escape character
  f: "\f",
  // form feed
  n: `
`,
  // line feed
  r: "\r",
  // carriage return
  t: "	",
  // horizontal tab
  v: "\v",
  // vertical tab
  N: "",
  // Unicode next line
  _: " ",
  // Unicode non-breaking space
  L: "\u2028",
  // Unicode line separator
  P: "\u2029",
  // Unicode paragraph separator
  " ": " ",
  '"': '"',
  "/": "/",
  "\\": "\\",
  "	": "	"
};
function ia(e, t, n, s) {
  const i = e.substr(t, n), o = i.length === n && /^[0-9a-fA-F]+$/.test(i) ? parseInt(i, 16) : NaN;
  try {
    return String.fromCodePoint(o);
  } catch {
    const c = e.substr(t - 2, n + 2);
    return s(t - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${c}`), c;
  }
}
function Gr(e, t, n, s) {
  const { value: i, type: r, comment: o, range: c } = t.type === "block-scalar" ? Ur(e, t, s) : Fr(t, e.options.strict, s), u = n ? e.directives.tagName(n.source, (f) => s(n, "TAG_RESOLVE_FAILED", f)) : null;
  let a;
  e.options.stringKeys && e.atKey ? a = e.schema[ye] : u ? a = ra(e.schema, i, u, n, s) : t.type === "scalar" ? a = oa(e, i, t, s) : a = e.schema[ye];
  let l;
  try {
    const f = a.resolve(i, (d) => s(n ?? t, "TAG_RESOLVE_FAILED", d), e.options);
    l = j(f) ? f : new T(f);
  } catch (f) {
    const d = f instanceof Error ? f.message : String(f);
    s(n ?? t, "TAG_RESOLVE_FAILED", d), l = new T(i);
  }
  return l.range = c, l.source = i, r && (l.type = r), u && (l.tag = u), a.format && (l.format = a.format), o && (l.comment = o), l;
}
function ra(e, t, n, s, i) {
  if (n === "!")
    return e[ye];
  const r = [];
  for (const c of e.tags)
    if (!c.collection && c.tag === n)
      if (c.default && c.test)
        r.push(c);
      else
        return c;
  for (const c of r)
    if (c.test?.test(t))
      return c;
  const o = e.knownTags[n];
  return o && !o.collection ? (e.tags.push(Object.assign({}, o, { default: !1, test: void 0 })), o) : (i(s, "TAG_RESOLVE_FAILED", `Unresolved tag: ${n}`, n !== "tag:yaml.org,2002:str"), e[ye]);
}
function oa({ atKey: e, directives: t, schema: n }, s, i, r) {
  const o = n.tags.find((c) => (c.default === !0 || e && c.default === "key") && c.test?.test(s)) || n[ye];
  if (n.compat) {
    const c = n.compat.find((u) => u.default && u.test?.test(s)) ?? n[ye];
    if (o.tag !== c.tag) {
      const u = t.tagString(o.tag), a = t.tagString(c.tag), l = `Value may be parsed as either ${u} or ${a}`;
      r(i, "TAG_RESOLVE_FAILED", l, !0);
    }
  }
  return o;
}
function ca(e, t, n) {
  if (t) {
    n ?? (n = t.length);
    for (let s = n - 1; s >= 0; --s) {
      let i = t[s];
      switch (i.type) {
        case "space":
        case "comment":
        case "newline":
          e -= i.source.length;
          continue;
      }
      for (i = t[++s]; i?.type === "space"; )
        e += i.source.length, i = t[++s];
      break;
    }
  }
  return e;
}
const aa = { composeNode: Vr, composeEmptyNode: Ls };
function Vr(e, t, n, s) {
  const i = e.atKey, { spaceBefore: r, comment: o, anchor: c, tag: u } = n;
  let a, l = !0;
  switch (t.type) {
    case "alias":
      a = ua(e, t, s), (c || u) && s(t, "ALIAS_PROPS", "An alias node must not specify any properties");
      break;
    case "scalar":
    case "single-quoted-scalar":
    case "double-quoted-scalar":
    case "block-scalar":
      a = Gr(e, t, u, s), c && (a.anchor = c.source.substring(1));
      break;
    case "block-map":
    case "block-seq":
    case "flow-collection":
      try {
        a = Wc(aa, e, t, n, s), c && (a.anchor = c.source.substring(1));
      } catch (f) {
        const d = f instanceof Error ? f.message : String(f);
        s(t, "RESOURCE_EXHAUSTION", d);
      }
      break;
    default: {
      const f = t.type === "error" ? t.message : `Unsupported token (type: ${t.type})`;
      s(t, "UNEXPECTED_TOKEN", f), l = !1;
    }
  }
  return a ?? (a = Ls(e, t.offset, void 0, null, n, s)), c && a.anchor === "" && s(c, "BAD_ALIAS", "Anchor cannot be an empty string"), i && e.options.stringKeys && (!j(a) || typeof a.value != "string" || a.tag && a.tag !== "tag:yaml.org,2002:str") && s(u ?? t, "NON_STRING_KEY", "With stringKeys, all keys must be strings"), r && (a.spaceBefore = !0), o && (t.type === "scalar" && t.source === "" ? a.comment = o : a.commentBefore = o), e.options.keepSourceTokens && l && (a.srcToken = t), a;
}
function Ls(e, t, n, s, { spaceBefore: i, comment: r, anchor: o, tag: c, end: u }, a) {
  const l = {
    type: "scalar",
    offset: ca(t, n, s),
    indent: -1,
    source: ""
  }, f = Gr(e, l, c, a);
  return o && (f.anchor = o.source.substring(1), f.anchor === "" && a(o, "BAD_ALIAS", "Anchor cannot be an empty string")), i && (f.spaceBefore = !0), r && (f.comment = r, f.range[2] = u), f;
}
function ua({ options: e }, { offset: t, source: n, end: s }, i) {
  const r = new _n(n.substring(1));
  r.source === "" && i(t, "BAD_ALIAS", "Alias cannot be an empty string"), r.source.endsWith(":") && i(t + n.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", !0);
  const o = t + n.length, c = xt(s, o, e.strict, i);
  return r.range = [t, o, c.offset], c.comment && (r.comment = c.comment), r;
}
function la(e, t, { offset: n, start: s, value: i, end: r }, o) {
  const c = Object.assign({ _directives: t }, e), u = new wt(void 0, c), a = {
    atKey: !1,
    atRoot: !0,
    directives: u.directives,
    options: u.options,
    schema: u.schema
  }, l = at(s, {
    indicator: "doc-start",
    next: i ?? r?.[0],
    offset: n,
    onError: o,
    parentIndent: 0,
    startOnNewline: !0
  });
  l.found && (u.directives.docStart = !0, i && (i.type === "block-map" || i.type === "block-seq") && !l.hasNewline && o(l.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker")), u.contents = i ? Vr(a, i, l, o) : Ls(a, l.end, s, null, l, o);
  const f = u.contents.range[2], d = xt(r, f, !1, o);
  return d.comment && (u.comment = d.comment), u.range = [n, f, d.offset], u;
}
function kt(e) {
  if (typeof e == "number")
    return [e, e + 1];
  if (Array.isArray(e))
    return e.length === 2 ? e : [e[0], e[1]];
  const { offset: t, source: n } = e;
  return [t, t + (typeof n == "string" ? n.length : 1)];
}
function di(e) {
  let t = "", n = !1, s = !1;
  for (let i = 0; i < e.length; ++i) {
    const r = e[i];
    switch (r[0]) {
      case "#":
        t += (t === "" ? "" : s ? `

` : `
`) + (r.substring(1) || " "), n = !0, s = !1;
        break;
      case "%":
        e[i + 1]?.[0] !== "#" && (i += 1), n = !1;
        break;
      default:
        n || (s = !0), n = !1;
    }
  }
  return { comment: t, afterEmptyLine: s };
}
class Ms {
  constructor(t = {}) {
    this.doc = null, this.atDirectives = !1, this.prelude = [], this.errors = [], this.warnings = [], this.onError = (n, s, i, r) => {
      const o = kt(n);
      r ? this.warnings.push(new Rr(o, s, i)) : this.errors.push(new Re(o, s, i));
    }, this.directives = new Q({ version: t.version || "1.2" }), this.options = t;
  }
  decorate(t, n) {
    const { comment: s, afterEmptyLine: i } = di(this.prelude);
    if (s) {
      const r = t.contents;
      if (n)
        t.comment = t.comment ? `${t.comment}
${s}` : s;
      else if (i || t.directives.docStart || !r)
        t.commentBefore = s;
      else if (K(r) && !r.flow && r.items.length > 0) {
        let o = r.items[0];
        B(o) && (o = o.key);
        const c = o.commentBefore;
        o.commentBefore = c ? `${s}
${c}` : s;
      } else {
        const o = r.commentBefore;
        r.commentBefore = o ? `${s}
${o}` : s;
      }
    }
    if (n) {
      for (let r = 0; r < this.errors.length; ++r)
        t.errors.push(this.errors[r]);
      for (let r = 0; r < this.warnings.length; ++r)
        t.warnings.push(this.warnings[r]);
    } else
      t.errors = this.errors, t.warnings = this.warnings;
    this.prelude = [], this.errors = [], this.warnings = [];
  }
  /**
   * Current stream status information.
   *
   * Mostly useful at the end of input for an empty stream.
   */
  streamInfo() {
    return {
      comment: di(this.prelude).comment,
      directives: this.directives,
      errors: this.errors,
      warnings: this.warnings
    };
  }
  /**
   * Compose tokens into documents.
   *
   * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
   * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
   */
  *compose(t, n = !1, s = -1) {
    for (const i of t)
      yield* this.next(i);
    yield* this.end(n, s);
  }
  /** Advance the composer by one CST token. */
  *next(t) {
    switch (t.type) {
      case "directive":
        this.directives.add(t.source, (n, s, i) => {
          const r = kt(t);
          r[0] += n, this.onError(r, "BAD_DIRECTIVE", s, i);
        }), this.prelude.push(t.source), this.atDirectives = !0;
        break;
      case "document": {
        const n = la(this.options, this.directives, t, this.onError);
        this.atDirectives && !n.directives.docStart && this.onError(t, "MISSING_CHAR", "Missing directives-end/doc-start indicator line"), this.decorate(n, !1), this.doc && (yield this.doc), this.doc = n, this.atDirectives = !1;
        break;
      }
      case "byte-order-mark":
      case "space":
        break;
      case "comment":
      case "newline":
        this.prelude.push(t.source);
        break;
      case "error": {
        const n = t.source ? `${t.message}: ${JSON.stringify(t.source)}` : t.message, s = new Re(kt(t), "UNEXPECTED_TOKEN", n);
        this.atDirectives || !this.doc ? this.errors.push(s) : this.doc.errors.push(s);
        break;
      }
      case "doc-end": {
        if (!this.doc) {
          const s = "Unexpected doc-end without preceding document";
          this.errors.push(new Re(kt(t), "UNEXPECTED_TOKEN", s));
          break;
        }
        this.doc.directives.docEnd = !0;
        const n = xt(t.end, t.offset + t.source.length, this.doc.options.strict, this.onError);
        if (this.decorate(this.doc, !0), n.comment) {
          const s = this.doc.comment;
          this.doc.comment = s ? `${s}
${n.comment}` : n.comment;
        }
        this.doc.range[2] = n.offset;
        break;
      }
      default:
        this.errors.push(new Re(kt(t), "UNEXPECTED_TOKEN", `Unsupported token ${t.type}`));
    }
  }
  /**
   * Call at end of input to yield any remaining document.
   *
   * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
   * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
   */
  *end(t = !1, n = -1) {
    if (this.doc)
      this.decorate(this.doc, !0), yield this.doc, this.doc = null;
    else if (t) {
      const s = Object.assign({ _directives: this.directives }, this.options), i = new wt(void 0, s);
      this.atDirectives && this.onError(n, "MISSING_CHAR", "Missing directives-end indicator line"), i.range = [0, n, n], this.decorate(i, !1), yield i;
    }
  }
}
function fa(e, t = !0, n) {
  if (e) {
    const s = (i, r, o) => {
      const c = typeof i == "number" ? i : Array.isArray(i) ? i[0] : i.offset;
      if (n)
        n(c, r, o);
      else
        throw new Re([c, c + 1], r, o);
    };
    switch (e.type) {
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return Fr(e, t, s);
      case "block-scalar":
        return Ur({ options: { strict: t } }, e, s);
    }
  }
  return null;
}
function da(e, t) {
  const { implicitKey: n = !1, indent: s, inFlow: i = !1, offset: r = -1, type: o = "PLAIN" } = t, c = jt({ type: o, value: e }, {
    implicitKey: n,
    indent: s > 0 ? " ".repeat(s) : "",
    inFlow: i,
    options: { blockQuote: !0, lineWidth: -1 }
  }), u = t.end ?? [
    { type: "newline", offset: -1, indent: s, source: `
` }
  ];
  switch (c[0]) {
    case "|":
    case ">": {
      const a = c.indexOf(`
`), l = c.substring(0, a), f = c.substring(a + 1) + `
`, d = [
        { type: "block-scalar-header", offset: r, indent: s, source: l }
      ];
      return qr(d, u) || d.push({ type: "newline", offset: -1, indent: s, source: `
` }), { type: "block-scalar", offset: r, indent: s, props: d, source: f };
    }
    case '"':
      return { type: "double-quoted-scalar", offset: r, indent: s, source: c, end: u };
    case "'":
      return { type: "single-quoted-scalar", offset: r, indent: s, source: c, end: u };
    default:
      return { type: "scalar", offset: r, indent: s, source: c, end: u };
  }
}
function ha(e, t, n = {}) {
  let { afterKey: s = !1, implicitKey: i = !1, inFlow: r = !1, type: o } = n, c = "indent" in e ? e.indent : null;
  if (s && typeof c == "number" && (c += 2), !o)
    switch (e.type) {
      case "single-quoted-scalar":
        o = "QUOTE_SINGLE";
        break;
      case "double-quoted-scalar":
        o = "QUOTE_DOUBLE";
        break;
      case "block-scalar": {
        const a = e.props[0];
        if (a.type !== "block-scalar-header")
          throw new Error("Invalid block scalar header");
        o = a.source[0] === ">" ? "BLOCK_FOLDED" : "BLOCK_LITERAL";
        break;
      }
      default:
        o = "PLAIN";
    }
  const u = jt({ type: o, value: t }, {
    implicitKey: i || c === null,
    indent: c !== null && c > 0 ? " ".repeat(c) : "",
    inFlow: r,
    options: { blockQuote: !0, lineWidth: -1 }
  });
  switch (u[0]) {
    case "|":
    case ">":
      pa(e, u);
      break;
    case '"':
      Vn(e, u, "double-quoted-scalar");
      break;
    case "'":
      Vn(e, u, "single-quoted-scalar");
      break;
    default:
      Vn(e, u, "scalar");
  }
}
function pa(e, t) {
  const n = t.indexOf(`
`), s = t.substring(0, n), i = t.substring(n + 1) + `
`;
  if (e.type === "block-scalar") {
    const r = e.props[0];
    if (r.type !== "block-scalar-header")
      throw new Error("Invalid block scalar header");
    r.source = s, e.source = i;
  } else {
    const { offset: r } = e, o = "indent" in e ? e.indent : -1, c = [
      { type: "block-scalar-header", offset: r, indent: o, source: s }
    ];
    qr(c, "end" in e ? e.end : void 0) || c.push({ type: "newline", offset: -1, indent: o, source: `
` });
    for (const u of Object.keys(e))
      u !== "type" && u !== "offset" && delete e[u];
    Object.assign(e, { type: "block-scalar", indent: o, props: c, source: i });
  }
}
function qr(e, t) {
  if (t)
    for (const n of t)
      switch (n.type) {
        case "space":
        case "comment":
          e.push(n);
          break;
        case "newline":
          return e.push(n), !0;
      }
  return !1;
}
function Vn(e, t, n) {
  switch (e.type) {
    case "scalar":
    case "double-quoted-scalar":
    case "single-quoted-scalar":
      e.type = n, e.source = t;
      break;
    case "block-scalar": {
      const s = e.props.slice(1);
      let i = t.length;
      e.props[0].type === "block-scalar-header" && (i -= e.props[0].source.length);
      for (const r of s)
        r.offset += i;
      delete e.props, Object.assign(e, { type: n, source: t, end: s });
      break;
    }
    case "block-map":
    case "block-seq": {
      const i = { type: "newline", offset: e.offset + t.length, indent: e.indent, source: `
` };
      delete e.items, Object.assign(e, { type: n, source: t, end: [i] });
      break;
    }
    default: {
      const s = "indent" in e ? e.indent : -1, i = "end" in e && Array.isArray(e.end) ? e.end.filter((r) => r.type === "space" || r.type === "comment" || r.type === "newline") : [];
      for (const r of Object.keys(e))
        r !== "type" && r !== "offset" && delete e[r];
      Object.assign(e, { type: n, indent: s, source: t, end: i });
    }
  }
}
const ma = (e) => "type" in e ? fn(e) : sn(e);
function fn(e) {
  switch (e.type) {
    case "block-scalar": {
      let t = "";
      for (const n of e.props)
        t += fn(n);
      return t + e.source;
    }
    case "block-map":
    case "block-seq": {
      let t = "";
      for (const n of e.items)
        t += sn(n);
      return t;
    }
    case "flow-collection": {
      let t = e.start.source;
      for (const n of e.items)
        t += sn(n);
      for (const n of e.end)
        t += n.source;
      return t;
    }
    case "document": {
      let t = sn(e);
      if (e.end)
        for (const n of e.end)
          t += n.source;
      return t;
    }
    default: {
      let t = e.source;
      if ("end" in e && e.end)
        for (const n of e.end)
          t += n.source;
      return t;
    }
  }
}
function sn({ start: e, key: t, sep: n, value: s }) {
  let i = "";
  for (const r of e)
    i += r.source;
  if (t && (i += fn(t)), n)
    for (const r of n)
      i += r.source;
  return s && (i += fn(s)), i;
}
const as = /* @__PURE__ */ Symbol("break visit"), ga = /* @__PURE__ */ Symbol("skip children"), Jr = /* @__PURE__ */ Symbol("remove item");
function Fe(e, t) {
  "type" in e && e.type === "document" && (e = { start: e.start, value: e.value }), Yr(Object.freeze([]), e, t);
}
Fe.BREAK = as;
Fe.SKIP = ga;
Fe.REMOVE = Jr;
Fe.itemAtPath = (e, t) => {
  let n = e;
  for (const [s, i] of t) {
    const r = n?.[s];
    if (r && "items" in r)
      n = r.items[i];
    else
      return;
  }
  return n;
};
Fe.parentCollection = (e, t) => {
  const n = Fe.itemAtPath(e, t.slice(0, -1)), s = t[t.length - 1][0], i = n?.[s];
  if (i && "items" in i)
    return i;
  throw new Error("Parent collection not found");
};
function Yr(e, t, n) {
  let s = n(t, e);
  if (typeof s == "symbol")
    return s;
  for (const i of ["key", "value"]) {
    const r = t[i];
    if (r && "items" in r) {
      for (let o = 0; o < r.items.length; ++o) {
        const c = Yr(Object.freeze(e.concat([[i, o]])), r.items[o], n);
        if (typeof c == "number")
          o = c - 1;
        else {
          if (c === as)
            return as;
          c === Jr && (r.items.splice(o, 1), o -= 1);
        }
      }
      typeof s == "function" && i === "key" && (s = s(t, e));
    }
  }
  return typeof s == "function" ? s(t, e) : s;
}
const An = "\uFEFF", Tn = "", zn = "", zt = "", ya = (e) => !!e && "items" in e, ba = (e) => !!e && (e.type === "scalar" || e.type === "single-quoted-scalar" || e.type === "double-quoted-scalar" || e.type === "block-scalar");
function wa(e) {
  switch (e) {
    case An:
      return "<BOM>";
    case Tn:
      return "<DOC>";
    case zn:
      return "<FLOW_END>";
    case zt:
      return "<SCALAR>";
    default:
      return JSON.stringify(e);
  }
}
function Wr(e) {
  switch (e) {
    case An:
      return "byte-order-mark";
    case Tn:
      return "doc-mode";
    case zn:
      return "flow-error-end";
    case zt:
      return "scalar";
    case "---":
      return "doc-start";
    case "...":
      return "doc-end";
    case "":
    case `
`:
    case `\r
`:
      return "newline";
    case "-":
      return "seq-item-ind";
    case "?":
      return "explicit-key-ind";
    case ":":
      return "map-value-ind";
    case "{":
      return "flow-map-start";
    case "}":
      return "flow-map-end";
    case "[":
      return "flow-seq-start";
    case "]":
      return "flow-seq-end";
    case ",":
      return "comma";
  }
  switch (e[0]) {
    case " ":
    case "	":
      return "space";
    case "#":
      return "comment";
    case "%":
      return "directive-line";
    case "*":
      return "alias";
    case "&":
      return "anchor";
    case "!":
      return "tag";
    case "'":
      return "single-quoted-scalar";
    case '"':
      return "double-quoted-scalar";
    case "|":
    case ">":
      return "block-scalar-header";
  }
  return null;
}
const _a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BOM: An,
  DOCUMENT: Tn,
  FLOW_END: zn,
  SCALAR: zt,
  createScalarToken: da,
  isCollection: ya,
  isScalar: ba,
  prettyToken: wa,
  resolveAsScalar: fa,
  setScalarValue: ha,
  stringify: ma,
  tokenType: Wr,
  visit: Fe
}, Symbol.toStringTag, { value: "Module" }));
function fe(e) {
  switch (e) {
    case void 0:
    case " ":
    case `
`:
    case "\r":
    case "	":
      return !0;
    default:
      return !1;
  }
}
const hi = new Set("0123456789ABCDEFabcdef"), va = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"), Vt = new Set(",[]{}"), ka = new Set(` ,[]{}
\r	`), qn = (e) => !e || ka.has(e);
class Xr {
  constructor() {
    this.atEnd = !1, this.blockScalarIndent = -1, this.blockScalarKeep = !1, this.buffer = "", this.flowKey = !1, this.flowLevel = 0, this.indentNext = 0, this.indentValue = 0, this.lineEndPos = null, this.next = null, this.pos = 0;
  }
  /**
   * Generate YAML tokens from the `source` string. If `incomplete`,
   * a part of the last line may be left as a buffer for the next call.
   *
   * @returns A generator of lexical tokens
   */
  *lex(t, n = !1) {
    if (t) {
      if (typeof t != "string")
        throw TypeError("source is not a string");
      this.buffer = this.buffer ? this.buffer + t : t, this.lineEndPos = null;
    }
    this.atEnd = !n;
    let s = this.next ?? "stream";
    for (; s && (n || this.hasChars(1)); )
      s = yield* this.parseNext(s);
  }
  atLineEnd() {
    let t = this.pos, n = this.buffer[t];
    for (; n === " " || n === "	"; )
      n = this.buffer[++t];
    return !n || n === "#" || n === `
` ? !0 : n === "\r" ? this.buffer[t + 1] === `
` : !1;
  }
  charAt(t) {
    return this.buffer[this.pos + t];
  }
  continueScalar(t) {
    let n = this.buffer[t];
    if (this.indentNext > 0) {
      let s = 0;
      for (; n === " "; )
        n = this.buffer[++s + t];
      if (n === "\r") {
        const i = this.buffer[s + t + 1];
        if (i === `
` || !i && !this.atEnd)
          return t + s + 1;
      }
      return n === `
` || s >= this.indentNext || !n && !this.atEnd ? t + s : -1;
    }
    if (n === "-" || n === ".") {
      const s = this.buffer.substr(t, 3);
      if ((s === "---" || s === "...") && fe(this.buffer[t + 3]))
        return -1;
    }
    return t;
  }
  getLine() {
    let t = this.lineEndPos;
    return (typeof t != "number" || t !== -1 && t < this.pos) && (t = this.buffer.indexOf(`
`, this.pos), this.lineEndPos = t), t === -1 ? this.atEnd ? this.buffer.substring(this.pos) : null : (this.buffer[t - 1] === "\r" && (t -= 1), this.buffer.substring(this.pos, t));
  }
  hasChars(t) {
    return this.pos + t <= this.buffer.length;
  }
  setNext(t) {
    return this.buffer = this.buffer.substring(this.pos), this.pos = 0, this.lineEndPos = null, this.next = t, null;
  }
  peek(t) {
    return this.buffer.substr(this.pos, t);
  }
  *parseNext(t) {
    switch (t) {
      case "stream":
        return yield* this.parseStream();
      case "line-start":
        return yield* this.parseLineStart();
      case "block-start":
        return yield* this.parseBlockStart();
      case "doc":
        return yield* this.parseDocument();
      case "flow":
        return yield* this.parseFlowCollection();
      case "quoted-scalar":
        return yield* this.parseQuotedScalar();
      case "block-scalar":
        return yield* this.parseBlockScalar();
      case "plain-scalar":
        return yield* this.parsePlainScalar();
    }
  }
  *parseStream() {
    let t = this.getLine();
    if (t === null)
      return this.setNext("stream");
    if (t[0] === An && (yield* this.pushCount(1), t = t.substring(1)), t[0] === "%") {
      let n = t.length, s = t.indexOf("#");
      for (; s !== -1; ) {
        const r = t[s - 1];
        if (r === " " || r === "	") {
          n = s - 1;
          break;
        } else
          s = t.indexOf("#", s + 1);
      }
      for (; ; ) {
        const r = t[n - 1];
        if (r === " " || r === "	")
          n -= 1;
        else
          break;
      }
      const i = (yield* this.pushCount(n)) + (yield* this.pushSpaces(!0));
      return yield* this.pushCount(t.length - i), this.pushNewline(), "stream";
    }
    if (this.atLineEnd()) {
      const n = yield* this.pushSpaces(!0);
      return yield* this.pushCount(t.length - n), yield* this.pushNewline(), "stream";
    }
    return yield Tn, yield* this.parseLineStart();
  }
  *parseLineStart() {
    const t = this.charAt(0);
    if (!t && !this.atEnd)
      return this.setNext("line-start");
    if (t === "-" || t === ".") {
      if (!this.atEnd && !this.hasChars(4))
        return this.setNext("line-start");
      const n = this.peek(3);
      if ((n === "---" || n === "...") && fe(this.charAt(3)))
        return yield* this.pushCount(3), this.indentValue = 0, this.indentNext = 0, n === "---" ? "doc" : "stream";
    }
    return this.indentValue = yield* this.pushSpaces(!1), this.indentNext > this.indentValue && !fe(this.charAt(1)) && (this.indentNext = this.indentValue), yield* this.parseBlockStart();
  }
  *parseBlockStart() {
    const [t, n] = this.peek(2);
    if (!n && !this.atEnd)
      return this.setNext("block-start");
    if ((t === "-" || t === "?" || t === ":") && fe(n)) {
      const s = (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0));
      return this.indentNext = this.indentValue + 1, this.indentValue += s, "block-start";
    }
    return "doc";
  }
  *parseDocument() {
    yield* this.pushSpaces(!0);
    const t = this.getLine();
    if (t === null)
      return this.setNext("doc");
    let n = yield* this.pushIndicators();
    switch (t[n]) {
      case "#":
        yield* this.pushCount(t.length - n);
      // fallthrough
      case void 0:
        return yield* this.pushNewline(), yield* this.parseLineStart();
      case "{":
      case "[":
        return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel = 1, "flow";
      case "}":
      case "]":
        return yield* this.pushCount(1), "doc";
      case "*":
        return yield* this.pushUntil(qn), "doc";
      case '"':
      case "'":
        return yield* this.parseQuotedScalar();
      case "|":
      case ">":
        return n += yield* this.parseBlockScalarHeader(), n += yield* this.pushSpaces(!0), yield* this.pushCount(t.length - n), yield* this.pushNewline(), yield* this.parseBlockScalar();
      default:
        return yield* this.parsePlainScalar();
    }
  }
  *parseFlowCollection() {
    let t, n, s = -1;
    do
      t = yield* this.pushNewline(), t > 0 ? (n = yield* this.pushSpaces(!1), this.indentValue = s = n) : n = 0, n += yield* this.pushSpaces(!0);
    while (t + n > 0);
    const i = this.getLine();
    if (i === null)
      return this.setNext("flow");
    if ((s !== -1 && s < this.indentNext && i[0] !== "#" || s === 0 && (i.startsWith("---") || i.startsWith("...")) && fe(i[3])) && !(s === this.indentNext - 1 && this.flowLevel === 1 && (i[0] === "]" || i[0] === "}")))
      return this.flowLevel = 0, yield zn, yield* this.parseLineStart();
    let r = 0;
    for (; i[r] === ","; )
      r += yield* this.pushCount(1), r += yield* this.pushSpaces(!0), this.flowKey = !1;
    switch (r += yield* this.pushIndicators(), i[r]) {
      case void 0:
        return "flow";
      case "#":
        return yield* this.pushCount(i.length - r), "flow";
      case "{":
      case "[":
        return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel += 1, "flow";
      case "}":
      case "]":
        return yield* this.pushCount(1), this.flowKey = !0, this.flowLevel -= 1, this.flowLevel ? "flow" : "doc";
      case "*":
        return yield* this.pushUntil(qn), "flow";
      case '"':
      case "'":
        return this.flowKey = !0, yield* this.parseQuotedScalar();
      case ":": {
        const o = this.charAt(1);
        if (this.flowKey || fe(o) || o === ",")
          return this.flowKey = !1, yield* this.pushCount(1), yield* this.pushSpaces(!0), "flow";
      }
      // fallthrough
      default:
        return this.flowKey = !1, yield* this.parsePlainScalar();
    }
  }
  *parseQuotedScalar() {
    const t = this.charAt(0);
    let n = this.buffer.indexOf(t, this.pos + 1);
    if (t === "'")
      for (; n !== -1 && this.buffer[n + 1] === "'"; )
        n = this.buffer.indexOf("'", n + 2);
    else
      for (; n !== -1; ) {
        let r = 0;
        for (; this.buffer[n - 1 - r] === "\\"; )
          r += 1;
        if (r % 2 === 0)
          break;
        n = this.buffer.indexOf('"', n + 1);
      }
    const s = this.buffer.substring(0, n);
    let i = s.indexOf(`
`, this.pos);
    if (i !== -1) {
      for (; i !== -1; ) {
        const r = this.continueScalar(i + 1);
        if (r === -1)
          break;
        i = s.indexOf(`
`, r);
      }
      i !== -1 && (n = i - (s[i - 1] === "\r" ? 2 : 1));
    }
    if (n === -1) {
      if (!this.atEnd)
        return this.setNext("quoted-scalar");
      n = this.buffer.length;
    }
    return yield* this.pushToIndex(n + 1, !1), this.flowLevel ? "flow" : "doc";
  }
  *parseBlockScalarHeader() {
    this.blockScalarIndent = -1, this.blockScalarKeep = !1;
    let t = this.pos;
    for (; ; ) {
      const n = this.buffer[++t];
      if (n === "+")
        this.blockScalarKeep = !0;
      else if (n > "0" && n <= "9")
        this.blockScalarIndent = Number(n) - 1;
      else if (n !== "-")
        break;
    }
    return yield* this.pushUntil((n) => fe(n) || n === "#");
  }
  *parseBlockScalar() {
    let t = this.pos - 1, n = 0, s;
    e: for (let r = this.pos; s = this.buffer[r]; ++r)
      switch (s) {
        case " ":
          n += 1;
          break;
        case `
`:
          t = r, n = 0;
          break;
        case "\r": {
          const o = this.buffer[r + 1];
          if (!o && !this.atEnd)
            return this.setNext("block-scalar");
          if (o === `
`)
            break;
        }
        // fallthrough
        default:
          break e;
      }
    if (!s && !this.atEnd)
      return this.setNext("block-scalar");
    if (n >= this.indentNext) {
      this.blockScalarIndent === -1 ? this.indentNext = n : this.indentNext = this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
      do {
        const r = this.continueScalar(t + 1);
        if (r === -1)
          break;
        t = this.buffer.indexOf(`
`, r);
      } while (t !== -1);
      if (t === -1) {
        if (!this.atEnd)
          return this.setNext("block-scalar");
        t = this.buffer.length;
      }
    }
    let i = t + 1;
    for (s = this.buffer[i]; s === " "; )
      s = this.buffer[++i];
    if (s === "	") {
      for (; s === "	" || s === " " || s === "\r" || s === `
`; )
        s = this.buffer[++i];
      t = i - 1;
    } else if (!this.blockScalarKeep)
      do {
        let r = t - 1, o = this.buffer[r];
        o === "\r" && (o = this.buffer[--r]);
        const c = r;
        for (; o === " "; )
          o = this.buffer[--r];
        if (o === `
` && r >= this.pos && r + 1 + n > c)
          t = r;
        else
          break;
      } while (!0);
    return yield zt, yield* this.pushToIndex(t + 1, !0), yield* this.parseLineStart();
  }
  *parsePlainScalar() {
    const t = this.flowLevel > 0;
    let n = this.pos - 1, s = this.pos - 1, i;
    for (; i = this.buffer[++s]; )
      if (i === ":") {
        const r = this.buffer[s + 1];
        if (fe(r) || t && Vt.has(r))
          break;
        n = s;
      } else if (fe(i)) {
        let r = this.buffer[s + 1];
        if (i === "\r" && (r === `
` ? (s += 1, i = `
`, r = this.buffer[s + 1]) : n = s), r === "#" || t && Vt.has(r))
          break;
        if (i === `
`) {
          const o = this.continueScalar(s + 1);
          if (o === -1)
            break;
          s = Math.max(s, o - 2);
        }
      } else {
        if (t && Vt.has(i))
          break;
        n = s;
      }
    return !i && !this.atEnd ? this.setNext("plain-scalar") : (yield zt, yield* this.pushToIndex(n + 1, !0), t ? "flow" : "doc");
  }
  *pushCount(t) {
    return t > 0 ? (yield this.buffer.substr(this.pos, t), this.pos += t, t) : 0;
  }
  *pushToIndex(t, n) {
    const s = this.buffer.slice(this.pos, t);
    return s ? (yield s, this.pos += s.length, s.length) : (n && (yield ""), 0);
  }
  *pushIndicators() {
    let t = 0;
    e: for (; ; ) {
      switch (this.charAt(0)) {
        case "!":
          t += yield* this.pushTag(), t += yield* this.pushSpaces(!0);
          continue e;
        case "&":
          t += yield* this.pushUntil(qn), t += yield* this.pushSpaces(!0);
          continue e;
        case "-":
        // this is an error
        case "?":
        // this is an error outside flow collections
        case ":": {
          const n = this.flowLevel > 0, s = this.charAt(1);
          if (fe(s) || n && Vt.has(s)) {
            n ? this.flowKey && (this.flowKey = !1) : this.indentNext = this.indentValue + 1, t += yield* this.pushCount(1), t += yield* this.pushSpaces(!0);
            continue e;
          }
        }
      }
      break e;
    }
    return t;
  }
  *pushTag() {
    if (this.charAt(1) === "<") {
      let t = this.pos + 2, n = this.buffer[t];
      for (; !fe(n) && n !== ">"; )
        n = this.buffer[++t];
      return yield* this.pushToIndex(n === ">" ? t + 1 : t, !1);
    } else {
      let t = this.pos + 1, n = this.buffer[t];
      for (; n; )
        if (va.has(n))
          n = this.buffer[++t];
        else if (n === "%" && hi.has(this.buffer[t + 1]) && hi.has(this.buffer[t + 2]))
          n = this.buffer[t += 3];
        else
          break;
      return yield* this.pushToIndex(t, !1);
    }
  }
  *pushNewline() {
    const t = this.buffer[this.pos];
    return t === `
` ? yield* this.pushCount(1) : t === "\r" && this.charAt(1) === `
` ? yield* this.pushCount(2) : 0;
  }
  *pushSpaces(t) {
    let n = this.pos - 1, s;
    do
      s = this.buffer[++n];
    while (s === " " || t && s === "	");
    const i = n - this.pos;
    return i > 0 && (yield this.buffer.substr(this.pos, i), this.pos = n), i;
  }
  *pushUntil(t) {
    let n = this.pos, s = this.buffer[n];
    for (; !t(s); )
      s = this.buffer[++n];
    return yield* this.pushToIndex(n, !1);
  }
}
class Hr {
  constructor() {
    this.lineStarts = [], this.addNewLine = (t) => this.lineStarts.push(t), this.linePos = (t) => {
      let n = 0, s = this.lineStarts.length;
      for (; n < s; ) {
        const r = n + s >> 1;
        this.lineStarts[r] < t ? n = r + 1 : s = r;
      }
      if (this.lineStarts[n] === t)
        return { line: n + 1, col: 1 };
      if (n === 0)
        return { line: 0, col: t };
      const i = this.lineStarts[n - 1];
      return { line: n, col: t - i + 1 };
    };
  }
}
function $e(e, t) {
  for (let n = 0; n < e.length; ++n)
    if (e[n].type === t)
      return !0;
  return !1;
}
function pi(e) {
  for (let t = 0; t < e.length; ++t)
    switch (e[t].type) {
      case "space":
      case "comment":
      case "newline":
        break;
      default:
        return t;
    }
  return -1;
}
function Qr(e) {
  switch (e?.type) {
    case "alias":
    case "scalar":
    case "single-quoted-scalar":
    case "double-quoted-scalar":
    case "flow-collection":
      return !0;
    default:
      return !1;
  }
}
function qt(e) {
  switch (e.type) {
    case "document":
      return e.start;
    case "block-map": {
      const t = e.items[e.items.length - 1];
      return t.sep ?? t.start;
    }
    case "block-seq":
      return e.items[e.items.length - 1].start;
    /* istanbul ignore next should not happen */
    default:
      return [];
  }
}
function He(e) {
  if (e.length === 0)
    return [];
  let t = e.length;
  e: for (; --t >= 0; )
    switch (e[t].type) {
      case "doc-start":
      case "explicit-key-ind":
      case "map-value-ind":
      case "seq-item-ind":
      case "newline":
        break e;
    }
  for (; e[++t]?.type === "space"; )
    ;
  return e.splice(t, e.length);
}
function dn(e, t) {
  if (t.length < 1e5)
    Array.prototype.push.apply(e, t);
  else
    for (let n = 0; n < t.length; ++n)
      e.push(t[n]);
}
function mi(e) {
  if (e.start.type === "flow-seq-start")
    for (const t of e.items)
      t.sep && !t.value && !$e(t.start, "explicit-key-ind") && !$e(t.sep, "map-value-ind") && (t.key && (t.value = t.key), delete t.key, Qr(t.value) ? t.value.end ? dn(t.value.end, t.sep) : t.value.end = t.sep : dn(t.start, t.sep), delete t.sep);
}
class Ds {
  /**
   * @param onNewLine - If defined, called separately with the start position of
   *   each new line (in `parse()`, including the start of input).
   */
  constructor(t) {
    this.atNewLine = !0, this.atScalar = !1, this.indent = 0, this.offset = 0, this.onKeyLine = !1, this.stack = [], this.source = "", this.type = "", this.lexer = new Xr(), this.onNewLine = t;
  }
  /**
   * Parse `source` as a YAML stream.
   * If `incomplete`, a part of the last line may be left as a buffer for the next call.
   *
   * Errors are not thrown, but yielded as `{ type: 'error', message }` tokens.
   *
   * @returns A generator of tokens representing each directive, document, and other structure.
   */
  *parse(t, n = !1) {
    this.onNewLine && this.offset === 0 && this.onNewLine(0);
    for (const s of this.lexer.lex(t, n))
      yield* this.next(s);
    n || (yield* this.end());
  }
  /**
   * Advance the parser by the `source` of one lexical token.
   */
  *next(t) {
    if (this.source = t, this.atScalar) {
      this.atScalar = !1, yield* this.step(), this.offset += t.length;
      return;
    }
    const n = Wr(t);
    if (n)
      if (n === "scalar")
        this.atNewLine = !1, this.atScalar = !0, this.type = "scalar";
      else {
        switch (this.type = n, yield* this.step(), n) {
          case "newline":
            this.atNewLine = !0, this.indent = 0, this.onNewLine && this.onNewLine(this.offset + t.length);
            break;
          case "space":
            this.atNewLine && t[0] === " " && (this.indent += t.length);
            break;
          case "explicit-key-ind":
          case "map-value-ind":
          case "seq-item-ind":
            this.atNewLine && (this.indent += t.length);
            break;
          case "doc-mode":
          case "flow-error-end":
            return;
          default:
            this.atNewLine = !1;
        }
        this.offset += t.length;
      }
    else {
      const s = `Not a YAML token: ${t}`;
      yield* this.pop({ type: "error", offset: this.offset, message: s, source: t }), this.offset += t.length;
    }
  }
  /** Call at end of input to push out any remaining constructions */
  *end() {
    for (; this.stack.length > 0; )
      yield* this.pop();
  }
  get sourceToken() {
    return {
      type: this.type,
      offset: this.offset,
      indent: this.indent,
      source: this.source
    };
  }
  *step() {
    const t = this.peek(1);
    if (this.type === "doc-end" && t?.type !== "doc-end") {
      for (; this.stack.length > 0; )
        yield* this.pop();
      this.stack.push({
        type: "doc-end",
        offset: this.offset,
        source: this.source
      });
      return;
    }
    if (!t)
      return yield* this.stream();
    switch (t.type) {
      case "document":
        return yield* this.document(t);
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return yield* this.scalar(t);
      case "block-scalar":
        return yield* this.blockScalar(t);
      case "block-map":
        return yield* this.blockMap(t);
      case "block-seq":
        return yield* this.blockSequence(t);
      case "flow-collection":
        return yield* this.flowCollection(t);
      case "doc-end":
        return yield* this.documentEnd(t);
    }
    yield* this.pop();
  }
  peek(t) {
    return this.stack[this.stack.length - t];
  }
  *pop(t) {
    const n = t ?? this.stack.pop();
    if (!n)
      yield { type: "error", offset: this.offset, source: "", message: "Tried to pop an empty stack" };
    else if (this.stack.length === 0)
      yield n;
    else {
      const s = this.peek(1);
      switch (n.type === "block-scalar" ? n.indent = "indent" in s ? s.indent : 0 : n.type === "flow-collection" && s.type === "document" && (n.indent = 0), n.type === "flow-collection" && mi(n), s.type) {
        case "document":
          s.value = n;
          break;
        case "block-scalar":
          s.props.push(n);
          break;
        case "block-map": {
          const i = s.items[s.items.length - 1];
          if (i.value) {
            s.items.push({ start: [], key: n, sep: [] }), this.onKeyLine = !0;
            return;
          } else if (i.sep)
            i.value = n;
          else {
            Object.assign(i, { key: n, sep: [] }), this.onKeyLine = !i.explicitKey;
            return;
          }
          break;
        }
        case "block-seq": {
          const i = s.items[s.items.length - 1];
          i.value ? s.items.push({ start: [], value: n }) : i.value = n;
          break;
        }
        case "flow-collection": {
          const i = s.items[s.items.length - 1];
          !i || i.value ? s.items.push({ start: [], key: n, sep: [] }) : i.sep ? i.value = n : Object.assign(i, { key: n, sep: [] });
          return;
        }
        /* istanbul ignore next should not happen */
        default:
          yield* this.pop(), yield* this.pop(n);
      }
      if ((s.type === "document" || s.type === "block-map" || s.type === "block-seq") && (n.type === "block-map" || n.type === "block-seq")) {
        const i = n.items[n.items.length - 1];
        i && !i.sep && !i.value && i.start.length > 0 && pi(i.start) === -1 && (n.indent === 0 || i.start.every((r) => r.type !== "comment" || r.indent < n.indent)) && (s.type === "document" ? s.end = i.start : s.items.push({ start: i.start }), n.items.splice(-1, 1));
      }
    }
  }
  *stream() {
    switch (this.type) {
      case "directive-line":
        yield { type: "directive", offset: this.offset, source: this.source };
        return;
      case "byte-order-mark":
      case "space":
      case "comment":
      case "newline":
        yield this.sourceToken;
        return;
      case "doc-mode":
      case "doc-start": {
        const t = {
          type: "document",
          offset: this.offset,
          start: []
        };
        this.type === "doc-start" && t.start.push(this.sourceToken), this.stack.push(t);
        return;
      }
    }
    yield {
      type: "error",
      offset: this.offset,
      message: `Unexpected ${this.type} token in YAML stream`,
      source: this.source
    };
  }
  *document(t) {
    if (t.value)
      return yield* this.lineEnd(t);
    switch (this.type) {
      case "doc-start": {
        pi(t.start) !== -1 ? (yield* this.pop(), yield* this.step()) : t.start.push(this.sourceToken);
        return;
      }
      case "anchor":
      case "tag":
      case "space":
      case "comment":
      case "newline":
        t.start.push(this.sourceToken);
        return;
    }
    const n = this.startBlockValue(t);
    n ? this.stack.push(n) : yield {
      type: "error",
      offset: this.offset,
      message: `Unexpected ${this.type} token in YAML document`,
      source: this.source
    };
  }
  *scalar(t) {
    if (this.type === "map-value-ind") {
      const n = qt(this.peek(2)), s = He(n);
      let i;
      t.end ? (i = t.end, i.push(this.sourceToken), delete t.end) : i = [this.sourceToken];
      const r = {
        type: "block-map",
        offset: t.offset,
        indent: t.indent,
        items: [{ start: s, key: t, sep: i }]
      };
      this.onKeyLine = !0, this.stack[this.stack.length - 1] = r;
    } else
      yield* this.lineEnd(t);
  }
  *blockScalar(t) {
    switch (this.type) {
      case "space":
      case "comment":
      case "newline":
        t.props.push(this.sourceToken);
        return;
      case "scalar":
        if (t.source = this.source, this.atNewLine = !0, this.indent = 0, this.onNewLine) {
          let n = this.source.indexOf(`
`) + 1;
          for (; n !== 0; )
            this.onNewLine(this.offset + n), n = this.source.indexOf(`
`, n) + 1;
        }
        yield* this.pop();
        break;
      /* istanbul ignore next should not happen */
      default:
        yield* this.pop(), yield* this.step();
    }
  }
  *blockMap(t) {
    const n = t.items[t.items.length - 1];
    switch (this.type) {
      case "newline":
        if (this.onKeyLine = !1, n.value) {
          const s = "end" in n.value ? n.value.end : void 0;
          (Array.isArray(s) ? s[s.length - 1] : void 0)?.type === "comment" ? s?.push(this.sourceToken) : t.items.push({ start: [this.sourceToken] });
        } else n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (n.value)
          t.items.push({ start: [this.sourceToken] });
        else if (n.sep)
          n.sep.push(this.sourceToken);
        else {
          if (this.atIndentedComment(n.start, t.indent)) {
            const i = t.items[t.items.length - 2]?.value?.end;
            if (Array.isArray(i)) {
              dn(i, n.start), i.push(this.sourceToken), t.items.pop();
              return;
            }
          }
          n.start.push(this.sourceToken);
        }
        return;
    }
    if (this.indent >= t.indent) {
      const s = !this.onKeyLine && this.indent === t.indent, i = s && (n.sep || n.explicitKey) && this.type !== "seq-item-ind";
      let r = [];
      if (i && n.sep && !n.value) {
        const o = [];
        for (let c = 0; c < n.sep.length; ++c) {
          const u = n.sep[c];
          switch (u.type) {
            case "newline":
              o.push(c);
              break;
            case "space":
              break;
            case "comment":
              u.indent > t.indent && (o.length = 0);
              break;
            default:
              o.length = 0;
          }
        }
        o.length >= 2 && (r = n.sep.splice(o[1]));
      }
      switch (this.type) {
        case "anchor":
        case "tag":
          i || n.value ? (r.push(this.sourceToken), t.items.push({ start: r }), this.onKeyLine = !0) : n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
          return;
        case "explicit-key-ind":
          !n.sep && !n.explicitKey ? (n.start.push(this.sourceToken), n.explicitKey = !0) : i || n.value ? (r.push(this.sourceToken), t.items.push({ start: r, explicitKey: !0 })) : this.stack.push({
            type: "block-map",
            offset: this.offset,
            indent: this.indent,
            items: [{ start: [this.sourceToken], explicitKey: !0 }]
          }), this.onKeyLine = !0;
          return;
        case "map-value-ind":
          if (n.explicitKey)
            if (n.sep)
              if (n.value)
                t.items.push({ start: [], key: null, sep: [this.sourceToken] });
              else if ($e(n.sep, "map-value-ind"))
                this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: r, key: null, sep: [this.sourceToken] }]
                });
              else if (Qr(n.key) && !$e(n.sep, "newline")) {
                const o = He(n.start), c = n.key, u = n.sep;
                u.push(this.sourceToken), delete n.key, delete n.sep, this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: o, key: c, sep: u }]
                });
              } else r.length > 0 ? n.sep = n.sep.concat(r, this.sourceToken) : n.sep.push(this.sourceToken);
            else if ($e(n.start, "newline"))
              Object.assign(n, { key: null, sep: [this.sourceToken] });
            else {
              const o = He(n.start);
              this.stack.push({
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [{ start: o, key: null, sep: [this.sourceToken] }]
              });
            }
          else
            n.sep ? n.value || i ? t.items.push({ start: r, key: null, sep: [this.sourceToken] }) : $e(n.sep, "map-value-ind") ? this.stack.push({
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [{ start: [], key: null, sep: [this.sourceToken] }]
            }) : n.sep.push(this.sourceToken) : Object.assign(n, { key: null, sep: [this.sourceToken] });
          this.onKeyLine = !0;
          return;
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar": {
          const o = this.flowScalar(this.type);
          i || n.value ? (t.items.push({ start: r, key: o, sep: [] }), this.onKeyLine = !0) : n.sep ? this.stack.push(o) : (Object.assign(n, { key: o, sep: [] }), this.onKeyLine = !0);
          return;
        }
        default: {
          const o = this.startBlockValue(t);
          if (o) {
            if (o.type === "block-seq") {
              if (!n.explicitKey && n.sep && !$e(n.sep, "newline")) {
                yield* this.pop({
                  type: "error",
                  offset: this.offset,
                  message: "Unexpected block-seq-ind on same line with key",
                  source: this.source
                });
                return;
              }
            } else s && t.items.push({ start: r });
            this.stack.push(o);
            return;
          }
        }
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *blockSequence(t) {
    const n = t.items[t.items.length - 1];
    switch (this.type) {
      case "newline":
        if (n.value) {
          const s = "end" in n.value ? n.value.end : void 0;
          (Array.isArray(s) ? s[s.length - 1] : void 0)?.type === "comment" ? s?.push(this.sourceToken) : t.items.push({ start: [this.sourceToken] });
        } else
          n.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (n.value)
          t.items.push({ start: [this.sourceToken] });
        else {
          if (this.atIndentedComment(n.start, t.indent)) {
            const i = t.items[t.items.length - 2]?.value?.end;
            if (Array.isArray(i)) {
              dn(i, n.start), i.push(this.sourceToken), t.items.pop();
              return;
            }
          }
          n.start.push(this.sourceToken);
        }
        return;
      case "anchor":
      case "tag":
        if (n.value || this.indent <= t.indent)
          break;
        n.start.push(this.sourceToken);
        return;
      case "seq-item-ind":
        if (this.indent !== t.indent)
          break;
        n.value || $e(n.start, "seq-item-ind") ? t.items.push({ start: [this.sourceToken] }) : n.start.push(this.sourceToken);
        return;
    }
    if (this.indent > t.indent) {
      const s = this.startBlockValue(t);
      if (s) {
        this.stack.push(s);
        return;
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *flowCollection(t) {
    const n = t.items[t.items.length - 1];
    if (this.type === "flow-error-end") {
      let s;
      do
        yield* this.pop(), s = this.peek(1);
      while (s?.type === "flow-collection");
    } else if (t.end.length === 0) {
      switch (this.type) {
        case "comma":
        case "explicit-key-ind":
          !n || n.sep ? t.items.push({ start: [this.sourceToken] }) : n.start.push(this.sourceToken);
          return;
        case "map-value-ind":
          !n || n.value ? t.items.push({ start: [], key: null, sep: [this.sourceToken] }) : n.sep ? n.sep.push(this.sourceToken) : Object.assign(n, { key: null, sep: [this.sourceToken] });
          return;
        case "space":
        case "comment":
        case "newline":
        case "anchor":
        case "tag":
          !n || n.value ? t.items.push({ start: [this.sourceToken] }) : n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
          return;
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar": {
          const i = this.flowScalar(this.type);
          !n || n.value ? t.items.push({ start: [], key: i, sep: [] }) : n.sep ? this.stack.push(i) : Object.assign(n, { key: i, sep: [] });
          return;
        }
        case "flow-map-end":
        case "flow-seq-end":
          t.end.push(this.sourceToken);
          return;
      }
      const s = this.startBlockValue(t);
      s ? this.stack.push(s) : (yield* this.pop(), yield* this.step());
    } else {
      const s = this.peek(2);
      if (s.type === "block-map" && (this.type === "map-value-ind" && s.indent === t.indent || this.type === "newline" && !s.items[s.items.length - 1].sep))
        yield* this.pop(), yield* this.step();
      else if (this.type === "map-value-ind" && s.type !== "flow-collection") {
        const i = qt(s), r = He(i);
        mi(t);
        const o = t.end.splice(1, t.end.length);
        o.push(this.sourceToken);
        const c = {
          type: "block-map",
          offset: t.offset,
          indent: t.indent,
          items: [{ start: r, key: t, sep: o }]
        };
        this.onKeyLine = !0, this.stack[this.stack.length - 1] = c;
      } else
        yield* this.lineEnd(t);
    }
  }
  flowScalar(t) {
    if (this.onNewLine) {
      let n = this.source.indexOf(`
`) + 1;
      for (; n !== 0; )
        this.onNewLine(this.offset + n), n = this.source.indexOf(`
`, n) + 1;
    }
    return {
      type: t,
      offset: this.offset,
      indent: this.indent,
      source: this.source
    };
  }
  startBlockValue(t) {
    switch (this.type) {
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return this.flowScalar(this.type);
      case "block-scalar-header":
        return {
          type: "block-scalar",
          offset: this.offset,
          indent: this.indent,
          props: [this.sourceToken],
          source: ""
        };
      case "flow-map-start":
      case "flow-seq-start":
        return {
          type: "flow-collection",
          offset: this.offset,
          indent: this.indent,
          start: this.sourceToken,
          items: [],
          end: []
        };
      case "seq-item-ind":
        return {
          type: "block-seq",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: [this.sourceToken] }]
        };
      case "explicit-key-ind": {
        this.onKeyLine = !0;
        const n = qt(t), s = He(n);
        return s.push(this.sourceToken), {
          type: "block-map",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: s, explicitKey: !0 }]
        };
      }
      case "map-value-ind": {
        this.onKeyLine = !0;
        const n = qt(t), s = He(n);
        return {
          type: "block-map",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: s, key: null, sep: [this.sourceToken] }]
        };
      }
    }
    return null;
  }
  atIndentedComment(t, n) {
    return this.type !== "comment" || this.indent <= n ? !1 : t.every((s) => s.type === "newline" || s.type === "space");
  }
  *documentEnd(t) {
    this.type !== "doc-mode" && (t.end ? t.end.push(this.sourceToken) : t.end = [this.sourceToken], this.type === "newline" && (yield* this.pop()));
  }
  *lineEnd(t) {
    switch (this.type) {
      case "comma":
      case "doc-start":
      case "doc-end":
      case "flow-seq-end":
      case "flow-map-end":
      case "map-value-ind":
        yield* this.pop(), yield* this.step();
        break;
      case "newline":
        this.onKeyLine = !1;
      default:
        t.end ? t.end.push(this.sourceToken) : t.end = [this.sourceToken], this.type === "newline" && (yield* this.pop());
    }
  }
}
function eo(e) {
  const t = e.prettyErrors !== !1;
  return { lineCounter: e.lineCounter || t && new Hr() || null, prettyErrors: t };
}
function Sa(e, t = {}) {
  const { lineCounter: n, prettyErrors: s } = eo(t), i = new Ds(n?.addNewLine), r = new Ms(t), o = Array.from(r.compose(i.parse(e)));
  if (s && n)
    for (const c of o)
      c.errors.forEach(ln(e, n)), c.warnings.forEach(ln(e, n));
  return o.length > 0 ? o : Object.assign([], { empty: !0 }, r.streamInfo());
}
function to(e, t = {}) {
  const { lineCounter: n, prettyErrors: s } = eo(t), i = new Ds(n?.addNewLine), r = new Ms(t);
  let o = null;
  for (const c of r.compose(i.parse(e), !0, e.length))
    if (!o)
      o = c;
    else if (o.options.logLevel !== "silent") {
      o.errors.push(new Re(c.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
      break;
    }
  return s && n && (o.errors.forEach(ln(e, n)), o.warnings.forEach(ln(e, n))), o;
}
function Oa(e, t, n) {
  let s;
  typeof t == "function" ? s = t : n === void 0 && t && typeof t == "object" && (n = t);
  const i = to(e, n);
  if (!i)
    return null;
  if (i.warnings.forEach((r) => _r(i.options.logLevel, r)), i.errors.length > 0) {
    if (i.options.logLevel !== "silent")
      throw i.errors[0];
    i.errors = [];
  }
  return i.toJS(Object.assign({ reviver: s }, n));
}
function $a(e, t, n) {
  let s = null;
  if (typeof t == "function" || Array.isArray(t) ? s = t : n === void 0 && t && (n = t), typeof n == "string" && (n = n.length), typeof n == "number") {
    const i = Math.round(n);
    n = i < 1 ? void 0 : i > 8 ? { indent: 8 } : { indent: i };
  }
  if (e === void 0) {
    const { keepUndefined: i } = n ?? t ?? {};
    if (!i)
      return;
  }
  return qe(e) && !s ? e.toString(n) : new wt(e, s, n).toString(n);
}
const Ia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Alias: _n,
  CST: _a,
  Composer: Ms,
  Document: wt,
  Lexer: Xr,
  LineCounter: Hr,
  Pair: X,
  Parser: Ds,
  Scalar: T,
  Schema: En,
  YAMLError: Cs,
  YAMLMap: se,
  YAMLParseError: Re,
  YAMLSeq: Ae,
  YAMLWarning: Rr,
  isAlias: Ve,
  isCollection: K,
  isDocument: qe,
  isMap: mt,
  isNode: G,
  isPair: B,
  isScalar: j,
  isSeq: gt,
  parse: Oa,
  parseAllDocuments: Sa,
  parseDocument: to,
  stringify: $a,
  visit: Je,
  visitAsync: wn
}, Symbol.toStringTag, { value: "Module" }));
function us(e) {
  const t = Object.values(e).filter((s) => typeof s == "number");
  return Object.entries(e).filter(([s, i]) => t.indexOf(+s) === -1).map(([s, i]) => i);
}
function gi(e, t = "|") {
  return e.map((n) => co(n)).join(t);
}
function ls(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
class Na {
  constructor(t) {
    this._getter = t, this._value = void 0;
  }
  get value() {
    const t = this._getter;
    return t !== void 0 && (this._value = t(), this._getter = void 0), this._value;
  }
}
function js(e) {
  return new Na(e);
}
function Pa(e) {
  return e == null;
}
function Zs(e) {
  const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
function Ea(e, t) {
  const n = e / t, s = Math.round(n), i = 4 * Number.EPSILON * Math.max(Math.abs(n), 1);
  return Math.abs(n - s) < i ? 0 : n - s;
}
function De(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function no(e) {
  const t = Object.getOwnPropertyDescriptor(e, "shape");
  return t?.get ? t.get.raw : t?.value;
}
function Se(e) {
  return no(e._zod.def) ?? e._zod.def.shape;
}
function so(e, t, n) {
  Object.defineProperty(e, t, {
    get() {
      const s = n();
      return De(this, t, s), s;
    },
    enumerable: !0,
    configurable: !0
  });
}
function io(e, t, n) {
  t in e ? De(e, t, n) : e[t] = n;
}
function Ke(e, t, n, s) {
  const i = Se(t);
  for (const r of n) {
    const o = Object.getOwnPropertyDescriptor(i, r);
    o.enumerable && (o.get ? so(e, r, () => {
      const c = t._zod.def.shape[r];
      return s ? s(c, r) : c;
    }) : io(e, r, s ? s(o.value, r) : o.value));
  }
}
function Aa(e, t) {
  for (const n of Reflect.ownKeys(t)) {
    const s = Object.getOwnPropertyDescriptor(t, n);
    s.enumerable && (s.get ? so(e, n, () => t[n]) : io(e, n, s.value));
  }
}
function ie(...e) {
  const t = {};
  for (const n of e) {
    const s = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, s);
  }
  return Object.defineProperties({}, t);
}
function Ta(e) {
  return JSON.stringify(e);
}
function za(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const ro = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function hn(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Ca = /* @__PURE__ */ js(() => {
  if (ue.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function ut(e) {
  if (hn(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const n = t.prototype;
  return !(hn(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function oo(e) {
  return ut(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
const La = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function lt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function je(e, t, n) {
  const s = new e._zod.constr(t ?? e._zod.def);
  return (!t || n?.parent) && (s._zod.parent = e), s;
}
function I(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function co(e) {
  return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Ma(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
const ao = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, Da = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function ja(e, t) {
  const n = e._zod.def, s = n.checks;
  if (s && s.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const r = {};
  return Ke(r, e, Cn(e, t)), je(e, ie(n, { shape: r, checks: [] }));
}
function Cn(e, t) {
  const n = Se(e), s = [];
  for (const i of Reflect.ownKeys(t)) {
    if (!Object.getOwnPropertyDescriptor(n, i)?.enumerable)
      throw new Error(`Unrecognized key: "${String(i)}"`);
    t[i] && s.push(i);
  }
  return s;
}
function Za(e, t) {
  const n = e._zod.def, s = n.checks;
  if (s && s.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const r = new Set(Cn(e, t)), o = {};
  return Ke(o, e, Reflect.ownKeys(Se(e)).filter((c) => !r.has(c))), je(e, ie(n, { shape: o, checks: [] }));
}
function xa(e, t) {
  if (!ut(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const n = e._zod.def.checks;
  if (n && n.length > 0) {
    const i = Se(e);
    for (const r of Reflect.ownKeys(t))
      if (Object.getOwnPropertyDescriptor(i, r) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  return je(e, ie(e._zod.def, { shape: uo(e, t) }));
}
function uo(e, t) {
  const n = {};
  return Ke(n, e, Reflect.ownKeys(Se(e))), Aa(n, t), n;
}
function Ra(e, t) {
  if (!ut(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  return je(e, ie(e._zod.def, { shape: uo(e, t) }));
}
function Ba(e, t) {
  if (!t?._zod?.def)
    throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
  if (e._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const n = {};
  Ke(n, e, Reflect.ownKeys(Se(e))), Ke(n, t, Reflect.ownKeys(Se(t)));
  const s = ie(e._zod.def, {
    shape: n,
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: t._zod.def.checks ?? []
  });
  return je(e, s);
}
function yi(e, t, n, s = "partial") {
  const r = t._zod.def.checks;
  if (r && r.length > 0)
    throw new Error(`.${s}() cannot be used on object schemas containing refinements`);
  const c = n ? new Set(Cn(t, n)) : void 0, u = {};
  return Ke(u, t, Reflect.ownKeys(Se(t)), e && ((a, l) => c && !c.has(l) ? a : new e({ type: "optional", innerType: a }))), je(t, ie(t._zod.def, { shape: u, checks: [] }));
}
function Ua(e, t, n) {
  const s = n ? new Set(Cn(t, n)) : void 0, i = {};
  return Ke(i, t, Reflect.ownKeys(Se(t)), (r, o) => (
    // overwrite with non-optional
    s && !s.has(o) ? r : new e({ type: "nonoptional", innerType: r })
  )), je(t, ie(t._zod.def, { shape: i }));
}
function de(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue !== !0)
      return !0;
  return !1;
}
function Fa(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue === !1)
      return !0;
  return !1;
}
function Ie(e, t) {
  return t.map((n) => {
    var s;
    return (s = n).path ?? (s.path = []), n.path.unshift(e), n;
  });
}
function St(e) {
  return typeof e == "string" ? e : e?.message;
}
function bi(e, t, n) {
  var s;
  for (let i = t; i < e.length; i++)
    (s = e[i]).schema ?? (s.schema = n);
}
function Te(e, t, n) {
  var s;
  const i = e.inst?._zod?.traits;
  i?.has("$ZodType") && (i.has("$ZodCheck") ? (s = e).schema ?? (s.schema = e.inst) : e.schema = e.inst);
  const r = e.schema !== e.inst ? e.schema?._zod.def?.error : void 0, o = e.message ? e.message : St(e.inst?._zod.def?.error?.(e)) ?? St(r?.(e)) ?? St(t?.error?.(e)) ?? St(n.customError?.(e)) ?? St(n.localeError?.(e)) ?? "Invalid input", c = {};
  for (const u of Object.keys(e))
    u === "inst" || u === "schema" || u === "continue" || u === "input" || u === "__proto__" || (c[u] = e[u]);
  return c.path ?? (c.path = []), c.message = o, t?.reportInput && (c.input = e.input), c;
}
const Ka = /[\uD800-\uDBFF]/;
function xs(e) {
  const t = e.length;
  if (!Ka.test(e))
    return t;
  let n = t;
  for (let s = 0; s < t - 1; s++)
    (e.charCodeAt(s) & 64512) === 55296 && (e.charCodeAt(s + 1) & 64512) === 56320 && (n--, s++);
  return n;
}
function Rs(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Ga(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "nan" : "number";
    case "object": {
      if (e === null)
        return "null";
      if (Array.isArray(e))
        return "array";
      const n = e;
      if (n && Object.getPrototypeOf(n) !== Object.prototype && "constructor" in n && n.constructor)
        return n.constructor.name;
    }
  }
  return t;
}
function Ct(...e) {
  const [t, n, s] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: n,
    inst: s
  } : { ...t };
}
function Va(e, t) {
  for (const n in t) {
    const s = Object.getOwnPropertyDescriptor(t, n);
    s.get ? Object.defineProperty(e, n, { ...s, enumerable: !1 }) : qa(e, n, s.value);
  }
}
function ze(e, t, n, s = !0) {
  return Object.defineProperty(e, t, { configurable: !0, writable: !0, enumerable: s, value: n }), n;
}
function lo(e, t, n) {
  return ze(e, t, n, !1);
}
function fo(e, t) {
  for (const n in e) {
    const s = e[n];
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !0,
      get() {
        return ze(this, n, s(this));
      },
      set(i) {
        ze(this, n, i);
      }
    });
  }
  return t;
}
function qa(e, t, n) {
  Object.defineProperty(e, t, {
    configurable: !0,
    get() {
      return this == null ? n : ze(this, t, n.bind(this));
    },
    set(s) {
      ze(this, t, s);
    }
  });
}
function Ja(e, t) {
  const n = Object.getPrototypeOf(e);
  return t in n ? void 0 : n;
}
let Jn, Oe = !1;
const Ya = {
  configurable: !0,
  get() {
    Oe = !0;
  }
};
function M(e, t, n) {
  const s = Object.getPrototypeOf(e._zod);
  if (t in s && Jn !== e._zod) {
    Jn = void 0;
    return;
  }
  Jn = e._zod, Object.defineProperty(s, t, {
    configurable: !0,
    get() {
      Object.defineProperty(this, t, Ya);
      const i = Oe;
      Oe = !1;
      try {
        const r = n(this);
        return Oe ? delete this[t] : Object.defineProperty(this, t, { configurable: !0, writable: !0, value: r }), Oe = Oe || i, r;
      } catch (r) {
        throw delete this[t], Oe = Oe || i, r;
      }
    },
    set(i) {
      Object.defineProperty(this, t, { configurable: !0, writable: !0, value: i });
    }
  });
}
function Wa(e, t, n, s) {
  const i = Ja(e, t);
  i && Object.defineProperty(i, t, {
    configurable: !0,
    get() {
      const r = { configurable: !0, writable: !0, enumerable: s, value: void 0 };
      return Object.defineProperty(this, t, r), r.value = n(this), Object.defineProperty(this, t, r), r.value;
    },
    set(r) {
      Object.defineProperty(this, t, { configurable: !0, writable: !0, enumerable: s, value: r });
    }
  });
}
const Xa = "~constantCatch";
function Ha(e) {
  const t = () => e;
  return t[Xa] = !0, t;
}
var wi;
const Yn = { value: void 0, enumerable: !1 };
let _i = "captureStackTrace" in Error ? Error : null;
function Qa(e) {
  const t = _i;
  if (t) {
    const n = t.stackTraceLimit;
    if (typeof n == "number") {
      try {
        t.stackTraceLimit = 0;
      } catch {
        return _i = null, new e();
      }
      try {
        return new e();
      } finally {
        t.stackTraceLimit = n;
      }
    }
  }
  return new e();
}
function y(e, t, n, s) {
  const i = {};
  function r(d) {
    this.def = d, this.constr = f, this.traits = /* @__PURE__ */ new Set();
  }
  r.prototype = i;
  const o = n, c = o && /* @__PURE__ */ new WeakSet();
  function u(d, p) {
    if (d._zod) {
      if (d._zod.traits.has(e))
        return;
    } else {
      Yn.value = new r(p);
      try {
        Object.defineProperty(d, "_zod", Yn);
      } finally {
        Yn.value = void 0;
      }
    }
    if (d._zod.traits.add(e), t(d, p), c) {
      const h = Object.getPrototypeOf(d), g = d._zod.constr.prototype;
      let b = h;
      for (; b && b !== g; )
        b = Object.getPrototypeOf(b);
      const v = b ?? h;
      c.has(v) || (c.add(v), Va(v, o));
    }
    const m = f.prototype;
    for (const h in m)
      Object.prototype.hasOwnProperty.call(m, h) && (h in d || (d[h] = m[h].bind(d)));
  }
  const a = s?.Parent ?? Object;
  class l extends a {
  }
  Object.defineProperty(l, "name", { value: e });
  function f(d) {
    const p = s?.Parent ? Qa(l) : this;
    u(p, d);
    const m = p._zod.deferred;
    if (m) {
      for (const g of m)
        g();
      p._zod.deferred = void 0;
    }
    const h = globalThis.__zod_globalConfig?.postProcessor;
    return h && h(p), p;
  }
  return Object.defineProperty(f, "init", { value: u }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (d) => s?.Parent && d instanceof s.Parent ? !0 : d?._zod?.traits?.has(e)
  }), Object.defineProperty(f, "name", { value: e }), f;
}
class Be extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class ho extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
(wi = globalThis).__zod_globalConfig ?? (wi.__zod_globalConfig = {});
const ue = globalThis.__zod_globalConfig;
function be(e) {
  return e && Object.assign(ue, e), ue;
}
function eu() {
  const e = this._zod;
  return e.message ?? (e.message = JSON.stringify(e.def, ls, 2)), e.message;
}
function tu(e) {
  this._zod.message = e;
}
const nu = {
  get: eu,
  set: tu,
  enumerable: !0,
  configurable: !0
}, Wn = { value: void 0, enumerable: !1 }, vi = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), su = (e, t) => {
  e.name = "$ZodError", Wn.value = t, Object.defineProperty(e, "issues", Wn), Wn.value = void 0, Object.defineProperty(e, "message", nu);
  const n = Object.getPrototypeOf(e);
  vi.has(n) || (vi.add(n), Object.defineProperty(n, "toString", {
    configurable: !0,
    enumerable: !1,
    get() {
      const s = () => this.message;
      return Object.defineProperty(this, "toString", { value: s, configurable: !0, writable: !0 }), s;
    },
    set(s) {
      Object.defineProperty(this, "toString", { value: s, configurable: !0, writable: !0 });
    }
  }));
}, iu = y("$ZodError", su);
function ru(e, t, n) {
  return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, { value: n(), writable: !0, enumerable: !0, configurable: !0 }) : e[t] = n()), e[t];
}
function ou(e, t = (n) => n.message) {
  const n = {}, s = [];
  for (const i of e.issues)
    i.path.length > 0 ? ru(n, i.path[0], () => []).push(t(i)) : s.push(t(i));
  return { formErrors: s, fieldErrors: n };
}
function cu(e, t = (n) => n.message) {
  const n = { _errors: [] }, s = (i, r = []) => {
    for (const o of i.issues)
      if (o.code === "invalid_union" && o.errors.length)
        o.errors.map((c) => s({ issues: c }, [...r, ...o.path]));
      else if (o.code === "invalid_key")
        s({ issues: o.issues }, [...r, ...o.path]);
      else if (o.code === "invalid_element")
        s({ issues: o.issues }, [...r, ...o.path]);
      else {
        const c = [...r, ...o.path];
        if (c.length === 0)
          n._errors.push(t(o));
        else {
          let u = n, a = 0;
          for (; a < c.length; ) {
            const l = c[a], f = a === c.length - 1;
            if (l === "_errors") {
              f && u._errors.push(t(o)), a++;
              continue;
            }
            Object.prototype.hasOwnProperty.call(u, l) || Object.defineProperty(u, l, {
              value: { _errors: [] },
              enumerable: !0,
              writable: !0,
              configurable: !0
            });
            const d = u[l];
            f && d._errors.push(t(o)), u = d, a++;
          }
        }
      }
  };
  return s(e), n;
}
function Ln(e, t) {
  return { callee: t?.callee ?? e, Err: t?.Err };
}
const Bs = (e) => {
  const t = (n, s, i, r) => {
    const o = i ? { ...i, async: !1 } : { async: !1 }, c = n._zod.run({ value: s, issues: [] }, o);
    if (c instanceof Promise)
      throw new Be();
    if (c.issues.length) {
      const u = new (r?.Err ?? e)(c.issues.map((a) => Te(a, o, be())));
      throw ro(u, r?.callee ?? t), u;
    }
    return c.value;
  };
  return t;
}, Us = (e) => {
  const t = async (n, s, i, r) => {
    const o = i ? { ...i, async: !0 } : { async: !0 };
    let c = n._zod.run({ value: s, issues: [] }, o);
    if (c instanceof Promise && (c = await c), c.issues.length) {
      const u = new (r?.Err ?? e)(c.issues.map((a) => Te(a, o, be())));
      throw ro(u, r?.callee ?? t), u;
    }
    return c.value;
  };
  return t;
}, Fs = (e) => (t, n, s) => {
  const i = s ? { ...s, async: !1 } : { async: !1 }, r = t._zod.run({ value: n, issues: [] }, i);
  if (r instanceof Promise)
    throw new Be();
  return r.issues.length ? po(e, r.issues, i) : { success: !0, data: r.value };
};
function po(e, t, n) {
  let s;
  return {
    success: !1,
    get error() {
      return s || (s = new e(t.map((i) => Te(i, n, be()))), t = void 0, n = void 0), s;
    },
    set error(i) {
      s = i, t = void 0, n = void 0;
    }
  };
}
const Ks = (e) => async (t, n, s) => {
  const i = s ? { ...s, async: !0 } : { async: !0 };
  let r = t._zod.run({ value: n, issues: [] }, i);
  return r instanceof Promise && (r = await r), r.issues.length ? po(e, r.issues, i) : { success: !0, data: r.value };
}, au = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), uu = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), lu = ((e, t, n) => {
  const s = e._zod.bag.validator;
  if (s !== void 0) {
    if (s(t) !== au)
      return !0;
    if (s.definite === !0 && n === void 0)
      return !1;
  }
  return fu(e, t, n);
});
function fu(e, t, n) {
  const s = n ? { ...n, async: !1, abortEarly: !0 } : { async: !1, abortEarly: !0 }, i = e._zod.bag.fallbackRun;
  let r;
  if (i ? (s[uu] = !0, r = i({ value: t, issues: [] }, s)) : r = e._zod.run({ value: t, issues: [] }, s), r instanceof Promise)
    throw new Be();
  return r.issues.length === 0;
}
const du = async (e, t, n) => {
  const s = n ? { ...n, async: !0, abortEarly: !0 } : { async: !0, abortEarly: !0 };
  let i = e._zod.run({ value: t, issues: [] }, s);
  return i instanceof Promise && (i = await i), i.issues.length === 0;
}, hu = (e) => {
  const t = Bs(e), n = (s, i, r, o) => {
    const c = r ? { ...r, direction: "backward" } : { direction: "backward" };
    return t(s, i, c, Ln(n, o));
  };
  return n;
}, pu = (e) => {
  const t = Bs(e), n = (s, i, r, o) => t(s, i, r, Ln(n, o));
  return n;
}, mu = (e) => {
  const t = Us(e), n = async (s, i, r, o) => {
    const c = r ? { ...r, direction: "backward" } : { direction: "backward" };
    return await t(s, i, c, Ln(n, o));
  };
  return n;
}, gu = (e) => {
  const t = Us(e), n = async (s, i, r, o) => await t(s, i, r, Ln(n, o));
  return n;
}, yu = (e) => (t, n, s) => {
  const i = s ? { ...s, direction: "backward" } : { direction: "backward" };
  return Fs(e)(t, n, i);
}, bu = (e) => (t, n, s) => Fs(e)(t, n, s), wu = (e) => async (t, n, s) => {
  const i = s ? { ...s, direction: "backward" } : { direction: "backward" };
  return Ks(e)(t, n, i);
}, _u = (e) => async (t, n, s) => Ks(e)(t, n, s), vu = /^[cC][0-9a-z]{6,}$/, ku = /^[0-9a-z]+$/, Su = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Ou = /^[0-9a-vA-V]{20}$/, $u = /^[A-Za-z0-9]{27}$/, Iu = /^[a-zA-Z0-9_-]{21}$/;
function Nu(e) {
  return new RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
const Pu = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Eu = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ki = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Au = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Tu = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function zu() {
  return new RegExp(Tu, "u");
}
const Cu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Lu = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Mu = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Du = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, ju = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Zu = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, xu = /^https?$/, Ru = /^\+[1-9]\d{6,14}$/, mo = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function Bu(e) {
  return new RegExp(`^${e}$`);
}
const Uu = /* @__PURE__ */ Bu(mo);
function fs(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Fu(e) {
  return new RegExp(`^${fs(e)}$`);
}
function Ku(e) {
  const t = ["Z"];
  e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const n = `${fs({ precision: e.precision, seconds: !0 })}(?:${t.join("|")})`, s = e.local ? `${n}|${fs({ precision: e.precision })}` : n;
  return new RegExp(`^${mo}T(?:${s})$`);
}
const Gu = /^[\s\S]{0,}$/, Vu = /^-?\d+$/, Gs = /^-?\d+(?:\.\d+)?$/, qu = /^(?:true|false)$/i, Ju = /^[^A-Z]*$/, Yu = /^[^a-z]*$/, ne = /* @__PURE__ */ y("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Vs = (e) => {
  const t = e.value;
  return !Pa(t) && t.length !== void 0;
}, pn = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, go = /* @__PURE__ */ y("$ZodCheckLessThan", (e, t) => {
  ne.init(e, t);
  const n = pn[typeof t.value];
  e._zod.check = (s) => {
    (t.inclusive ? s.value <= t.value : s.value < t.value) || s.issues.push({
      origin: pn[typeof s.value] ?? n,
      code: "too_big",
      maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: s.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), yo = /* @__PURE__ */ y("$ZodCheckGreaterThan", (e, t) => {
  ne.init(e, t);
  const n = pn[typeof t.value];
  e._zod.check = (s) => {
    (t.inclusive ? s.value >= t.value : s.value > t.value) || s.issues.push({
      origin: pn[typeof s.value] ?? n,
      code: "too_small",
      minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: s.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Wu = /* @__PURE__ */ y("$ZodCheckMultipleOf", (e, t) => {
  ne.init(e, t), e._zod.check = (n) => {
    if (typeof n.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof n.value == "bigint" ? (
      // `value % 0n` throws, and nothing is a multiple of zero — the number branch already fails this way via NaN
      t.value !== BigInt(0) && n.value % t.value === BigInt(0)
    ) : Ea(n.value, t.value) === 0) || n.issues.push({
      origin: typeof n.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Xu = /* @__PURE__ */ y("$ZodCheckNumberFormat", (e, t) => {
  ne.init(e, t), t.format = t.format || "float64";
  const n = t.format?.includes("int"), s = n ? "int" : "number", [i, r] = ao[t.format];
  e._zod.check = (o) => {
    const c = o.value;
    if (n) {
      if (!Number.isInteger(c)) {
        o.issues.push({
          expected: s,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: c,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(c)) {
        c > 0 ? o.issues.push({
          input: c,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: s,
          inclusive: !0,
          continue: !t.abort
        }) : o.issues.push({
          input: c,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: s,
          inclusive: !0,
          continue: !t.abort
        });
        return;
      }
    }
    c < i && o.issues.push({
      origin: "number",
      input: c,
      code: "too_small",
      minimum: i,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), c > r && o.issues.push({
      origin: "number",
      input: c,
      code: "too_big",
      maximum: r,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    });
  };
}), Hu = /* @__PURE__ */ y("$ZodCheckMaxLength", (e, t) => {
  var n;
  ne.init(e, t), (n = e._zod.def).when ?? (n.when = Vs), e._zod.check = (s) => {
    const i = s.value, r = i.length;
    if ((typeof i == "string" && r > t.maximum ? xs(i) : r) <= t.maximum)
      return;
    const c = Rs(i);
    s.issues.push({
      origin: c,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: i,
      inst: e,
      continue: !t.abort
    });
  };
}), Qu = /* @__PURE__ */ y("$ZodCheckMinLength", (e, t) => {
  var n;
  ne.init(e, t), (n = e._zod.def).when ?? (n.when = Vs), e._zod.check = (s) => {
    const i = s.value, r = i.length;
    if ((typeof i == "string" && r >= t.minimum && r < t.minimum * 2 ? xs(i) : r) >= t.minimum)
      return;
    const c = Rs(i);
    s.issues.push({
      origin: c,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: i,
      inst: e,
      continue: !t.abort
    });
  };
}), el = /* @__PURE__ */ y("$ZodCheckLengthEquals", (e, t) => {
  var n;
  ne.init(e, t), (n = e._zod.def).when ?? (n.when = Vs), e._zod.check = (s) => {
    const i = s.value, r = i.length, o = typeof i == "string" && r >= t.length && r <= t.length * 2 ? xs(i) : r;
    if (o === t.length)
      return;
    const c = Rs(i), u = o > t.length;
    s.issues.push({
      origin: c,
      ...u ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: s.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Mn = /* @__PURE__ */ y("$ZodCheckStringFormat", (e, t) => {
  var n, s;
  ne.init(e, t), t.pattern ? (n = e._zod).check ?? (n.check = (i) => {
    t.pattern.lastIndex = 0, !t.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: i.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (s = e._zod).check ?? (s.check = () => {
  });
}), tl = /* @__PURE__ */ y("$ZodCheckRegex", (e, t) => {
  Mn.init(e, t), e._zod.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: n.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), nl = /* @__PURE__ */ y("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Ju), Mn.init(e, t);
}), sl = /* @__PURE__ */ y("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = Yu), Mn.init(e, t);
}), il = /* @__PURE__ */ y("$ZodCheckIncludes", (e, t) => {
  ne.init(e, t);
  const n = lt(t.includes), s = new RegExp(typeof t.position == "number" ? `^.{${t.position},}${n}` : n);
  t.pattern = s, e._zod.check = (i) => {
    i.value.includes(t.includes, t.position) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: i.value,
      inst: e,
      continue: !t.abort
    });
  };
}), rl = /* @__PURE__ */ y("$ZodCheckStartsWith", (e, t) => {
  ne.init(e, t);
  const n = new RegExp(`^${lt(t.prefix)}.*`);
  t.pattern ?? (t.pattern = n), e._zod.check = (s) => {
    s.value.startsWith(t.prefix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: s.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ol = /* @__PURE__ */ y("$ZodCheckEndsWith", (e, t) => {
  ne.init(e, t);
  const n = new RegExp(`.*${lt(t.suffix)}$`);
  t.pattern ?? (t.pattern = n), e._zod.check = (s) => {
    s.value.endsWith(t.suffix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: s.value,
      inst: e,
      continue: !t.abort
    });
  };
}), cl = /* @__PURE__ */ y("$ZodCheckOverwrite", (e, t) => {
  ne.init(e, t), e._zod.check = (n) => {
    n.value = t.tx(n.value);
  };
});
class al {
  constructor(t = [], n = {}) {
    this.content = [], this.indent = 0, this.args = t, this.closed = n;
  }
  // the compiler catches a child's throw and keeps writing into this doc, so the indent has to unwind with it
  indented(t) {
    this.indent += 1;
    try {
      t(this);
    } finally {
      this.indent -= 1;
    }
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const s = t.split(`
`).filter((o) => o), i = Math.min(...s.map((o) => o.length - o.trimStart().length)), r = s.map((o) => o.slice(i)).map((o) => " ".repeat(this.indent * 2) + o);
    for (const o of r)
      this.content.push(o);
  }
  compile() {
    const t = Function, n = this?.content ?? [""];
    return new t(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {
${n.join(`
`)}
};`)(...Object.values(this.closed));
  }
}
const ul = {
  major: 4,
  minor: 6,
  patch: 5
}, x = /* @__PURE__ */ y("$ZodType", (e, t) => {
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = ul;
  const s = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...s ?? []] : s?.length ? [...s] : [];
  for (const r of i)
    for (const o of r._zod.onattach)
      o(e);
  if (i.length === 0)
    (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const r = (c, u, a) => {
      if (c.memo)
        return c;
      let l = de(c), f;
      for (const d of u) {
        if (d._zod.def.when) {
          if (Fa(c) || !d._zod.def.when(c))
            continue;
        } else if (l)
          continue;
        const p = c.issues.length, m = d._zod.check(c);
        if (m instanceof Promise && a?.async === !1)
          throw new Be();
        if (f || m instanceof Promise)
          f = (f ?? Promise.resolve()).then(async () => {
            await m, c.issues.length !== p && (bi(c.issues, p, e), l || (l = de(c, p)));
          });
        else {
          if (c.issues.length === p)
            continue;
          bi(c.issues, p, e), l || (l = de(c, p));
        }
      }
      return f ? f.then(() => c) : c;
    }, o = (c, u, a) => {
      if (de(c))
        return c.aborted = !0, c;
      const l = r(u, i, a);
      if (l instanceof Promise) {
        if (a.async === !1)
          throw new Be();
        return l.then((f) => e._zod.parse(f, a));
      }
      return e._zod.parse(l, a);
    };
    e._zod.run = (c, u) => {
      if (u.skipChecks)
        return e._zod.parse(c, u);
      if (u.direction === "backward") {
        const l = e._zod.parse({ value: c.value, issues: [] }, { ...u, skipChecks: !0 });
        return l instanceof Promise ? l.then((f) => o(f, c, u)) : o(l, c, u);
      }
      const a = e._zod.parse(c, u);
      if (a instanceof Promise) {
        if (u.async === !1)
          throw new Be();
        return a.then((l) => r(l, i, u));
      }
      return r(a, i, u);
    };
  }
}, {
  // Wrappers extend this by installing a richer factory over it; reading it eagerly would defeat the laziness.
  get "~standard"() {
    return lo(this, "~standard", wo(this));
  },
  set "~standard"(e) {
    ze(this, "~standard", e);
  }
}), bo = (e, t) => e.issues.length ? { issues: e.issues.map((n) => Te(n, t, be())) } : { value: e.value };
async function ll(e, t) {
  const n = { async: !0 };
  return bo(await e._zod.run({ value: t, issues: [] }, n), n);
}
function wo(e) {
  return {
    validate: (t) => {
      const n = { async: !1 };
      try {
        const s = e._zod.run({ value: t, issues: [] }, n);
        if (!(s instanceof Promise))
          return bo(s, n);
      } catch {
      }
      return ll(e, t);
    },
    vendor: "zod",
    version: 1
  };
}
const qs = /* @__PURE__ */ y("$ZodString", (e, t) => {
  x.init(e, t), e._zod.pattern = t.pattern ?? Gu, e._zod.parse = (n, s) => {
    if (t.coerce)
      try {
        n.value = String(n.value);
      } catch {
      }
    return typeof n.value == "string" || n.issues.push({
      expected: "string",
      code: "invalid_type",
      input: n.value,
      inst: e
    }), n;
  };
}), U = /* @__PURE__ */ y("$ZodStringFormat", (e, t) => {
  Mn.init(e, t), qs.init(e, t);
}), fl = /* @__PURE__ */ y("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = Eu), U.init(e, t);
}), dl = /* @__PURE__ */ y("$ZodUUID", (e, t) => {
  if (t.version) {
    const s = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (s === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = ki(s));
  } else
    t.pattern ?? (t.pattern = ki());
  U.init(e, t);
}), hl = /* @__PURE__ */ y("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = Au), U.init(e, t);
}), _o = 1, mn = 2;
function vo(e) {
  try {
    return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(e) : (new URL(e), !0);
  } catch {
    return !1;
  }
}
function pl(e, t) {
  return !("normalize" in t) && !("hostname" in t) && !("protocol" in t) ? vo(e) || mn : ml(e, t);
}
function ml(e, t) {
  if (!t.normalize && t.protocol?.source === xu.source && !/^https?:\/\//i.test(e))
    return _o;
  try {
    if (typeof URL < "u") {
      const n = URL;
      if (typeof n.parse == "function")
        return n.parse(e) ?? mn;
    }
    return new URL(e);
  } catch {
    return mn;
  }
}
const gl = /[\t\n\r]/g;
function Si(e) {
  return e.replace(gl, "");
}
function yl(e, t) {
  return t.lastIndex = 0, t.test(e.hostname);
}
function bl(e, t) {
  return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
const wl = /* @__PURE__ */ y("$ZodURL", (e, t) => {
  U.init(e, t), e._zod.check = (n) => {
    try {
      const s = n.value.trim(), i = pl(s, t);
      if (i === _o) {
        n.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: n.value,
          inst: e,
          continue: !t.abort
        });
        return;
      }
      if (i === mn) {
        n.issues.push({
          code: "invalid_format",
          format: "url",
          input: n.value,
          inst: e,
          continue: !t.abort
        });
        return;
      }
      if (i === !0) {
        n.value = Si(s);
        return;
      }
      t.hostname && !yl(i, t.hostname) && n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      }), t.protocol && !bl(i, t.protocol) && n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      }), n.value = t.normalize ? i.href : Si(s);
      return;
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "url",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), _l = /* @__PURE__ */ y("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = zu()), U.init(e, t);
}), vl = /* @__PURE__ */ y("$ZodNanoID", (e, t) => {
  if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1))
    throw new Error(`Invalid nanoid length: ${t.length}`);
  t.pattern ?? (t.pattern = t.length === void 0 ? Iu : Nu(t.length)), U.init(e, t);
}), kl = /* @__PURE__ */ y("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = vu), U.init(e, t);
}), Sl = /* @__PURE__ */ y("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = ku), U.init(e, t);
}), Ol = /* @__PURE__ */ y("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Su), U.init(e, t);
}), $l = /* @__PURE__ */ y("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = Ou), U.init(e, t);
}), Il = /* @__PURE__ */ y("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = $u), U.init(e, t);
}), Nl = /* @__PURE__ */ y("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = Ku(t)), U.init(e, t);
}), Pl = /* @__PURE__ */ y("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = Uu), U.init(e, t);
}), El = /* @__PURE__ */ y("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Fu(t)), U.init(e, t);
}), Al = /* @__PURE__ */ y("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Pu), U.init(e, t);
}), Tl = /* @__PURE__ */ y("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = Cu), U.init(e, t);
}), zl = /^[0-9a-fA-F:.]+$/;
function ko(e) {
  return zl.test(e) ? vo(`http://[${e}]`) : !1;
}
const Cl = /* @__PURE__ */ y("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = Lu), U.init(e, t), e._zod.check = (n) => {
    ko(n.value) || n.issues.push({
      code: "invalid_format",
      format: "ipv6",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ll = /* @__PURE__ */ y("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = Mu), U.init(e, t);
});
function Ml(e) {
  const t = e.split("/");
  if (t.length !== 2)
    return !1;
  const [n, s] = t;
  if (!s)
    return !1;
  const i = Number(s);
  return `${i}` !== s || i < 0 || i > 128 ? !1 : ko(n);
}
const Dl = /* @__PURE__ */ y("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = Du), U.init(e, t), e._zod.check = (n) => {
    Ml(n.value) || n.issues.push({
      code: "invalid_format",
      format: "cidrv6",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function So(e) {
  if (e === "")
    return !0;
  if (/\s/.test(e) || e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const Oo = /^[0-9a-zA-Z+/]*={0,2}$/, jl = /* @__PURE__ */ y("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Oo), U.init(e, t), e._zod.check = (n) => {
    So(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Js = /^[A-Za-z0-9_-]*$/;
function Zl(e) {
  if (!Js.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return So(n);
}
const xl = /* @__PURE__ */ y("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = Js), U.init(e, t), e._zod.check = (n) => {
    Zl(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Rl = /* @__PURE__ */ y("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = Ru), U.init(e, t);
});
function Bl(e, t = null) {
  try {
    const n = e.split(".");
    if (n.length !== 3)
      return !1;
    const [s] = n;
    if (!s)
      return !1;
    const i = JSON.parse(atob(s));
    return !("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
  } catch {
    return !1;
  }
}
const Ul = /* @__PURE__ */ y("$ZodJWT", (e, t) => {
  U.init(e, t), e._zod.check = (n) => {
    Bl(n.value, t.alg) || n.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), $o = /* @__PURE__ */ y("$ZodNumber", (e, t) => {
  x.init(e, t), e._zod.pattern = Gs, e._zod.parse = (n, s) => {
    if (t.coerce)
      try {
        n.value = Number(n.value);
      } catch {
      }
    const i = n.value;
    if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i))
      return n;
    const r = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : String(i) : void 0;
    return n.issues.push({
      expected: "number",
      code: "invalid_type",
      input: i,
      inst: e,
      ...r ? { received: r } : {}
    }), n;
  };
}), Fl = /* @__PURE__ */ y("$ZodNumberFormat", (e, t) => {
  Xu.init(e, t), $o.init(e, t);
}), Kl = /* @__PURE__ */ y("$ZodBoolean", (e, t) => {
  x.init(e, t), e._zod.pattern = qu, e._zod.parse = (n, s) => {
    if (t.coerce)
      try {
        n.value = !!n.value;
      } catch {
      }
    const i = n.value;
    return typeof i == "boolean" || n.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: i,
      inst: e
    }), n;
  };
}), Gl = /* @__PURE__ */ y("$ZodUnknown", (e, t) => {
  x.init(e, t), e._zod.parse = (n) => n;
}), Vl = /* @__PURE__ */ y("$ZodNever", (e, t) => {
  x.init(e, t), e._zod.parse = (n, s) => (n.issues.push({
    expected: "never",
    code: "invalid_type",
    input: n.value,
    inst: e
  }), n);
});
function Oi(e, t, n) {
  e.issues.length && t.issues.push(...Ie(n, e.issues)), t.value[n] = e.value;
}
const ql = /* @__PURE__ */ y("$ZodArray", (e, t) => {
  x.init(e, t);
  const n = ue.memoizer;
  n?.attach(e), e._zod.parse = (s, i) => {
    const r = s.value;
    if (!Array.isArray(r))
      return s.issues.push({
        expected: "array",
        code: "invalid_type",
        input: r,
        inst: e
      }), s;
    s.value = n ? n.alloc(e, s, Array(r.length), i) : Array(r.length);
    const o = [], c = i?.abortEarly;
    for (let u = 0; u < r.length; u++) {
      const a = r[u], l = t.element._zod.run({
        value: a,
        issues: []
      }, i);
      if (l instanceof Promise)
        o.push(l.then((f) => Oi(f, s, u)));
      else if (Oi(l, s, u), c && l.issues.length !== 0 && de(l))
        break;
    }
    return o.length ? Promise.all(o).then(() => s) : s;
  };
});
function gn(e, t, n, s, i, r) {
  const o = n in s, c = r === "optional";
  if (!(!o && c && i === "optional")) {
    if (e.issues.length) {
      if (i !== void 0 && c && !o)
        return;
      t.issues.push(...Ie(n, e.issues));
    }
    if (!o && i === void 0) {
      e.issues.length || t.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: void 0,
        path: [n]
      });
      return;
    }
    e.value === void 0 ? (o || i === "defaulted" && !c) && (t.value[n] = void 0) : t.value[n] = e.value;
  }
}
const Jl = [];
function Io(e) {
  const t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), s = n.length ? n : Jl, i = s.length ? [...t, ...s] : t;
  for (const o of i)
    if (!e.shape?.[o]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${String(o)}": expected a Zod schema`);
  const r = Ma(e.shape);
  return {
    ...e,
    allKeys: i,
    symbolKeys: s,
    // string-only: handleCatchall matches it against `for...in`, which never yields a symbol
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r)
  };
}
function No(e, t, n, s, i, r, o) {
  const c = [], u = i.keySet, a = i.catchall._zod, l = a.def.type, f = a.optin, d = a.optout;
  let p = 0;
  for (const m in t) {
    if (o && n.issues.length !== p) {
      if (de(n, p))
        break;
      p = n.issues.length;
    }
    if (u.has(m))
      continue;
    if (m === "__proto__") {
      l === "never" && c.push(m);
      continue;
    }
    if (l === "never") {
      c.push(m);
      continue;
    }
    const h = a.run({ value: t[m], issues: [] }, s);
    h instanceof Promise ? e.push(h.then((g) => gn(g, n, m, t, f, d))) : gn(h, n, m, t, f, d);
  }
  return c.length && n.issues.push({
    code: "unrecognized_keys",
    keys: c,
    input: t,
    inst: r,
    // Describes the shape of the input, not the validity of the parsed value, so it never aborts. The parse still fails; the schema's own checks just get to run first, and an enclosing intersection can reconcile the key against a sibling operand.
    continue: !0
  }), e.length ? Promise.all(e).then(() => n) : n;
}
const Yl = /* @__PURE__ */ y("$ZodObject", (e, t) => {
  x.init(e, t);
  const n = Object.getOwnPropertyDescriptor(t, "shape"), s = n?.get ? n.get.raw : t.shape ?? {};
  if (s) {
    const a = () => {
      const l = { ...s };
      return Object.defineProperty(t, "shape", { value: l }), a.raw = l, l;
    };
    a.raw = s, Object.defineProperty(t, "shape", { get: a });
  }
  const i = js(() => Io(t));
  M(e, "propValues", (a) => {
    const l = a.def.shape, f = {};
    for (const d in l) {
      const p = l[d]._zod;
      if (p.values) {
        Object.prototype.hasOwnProperty.call(f, d) || De(f, d, /* @__PURE__ */ new Set());
        for (const m of p.values)
          f[d].add(m);
        p.optin !== void 0 && f[d].add(void 0);
      }
    }
    return f;
  });
  const r = hn, o = t.catchall;
  let c;
  const u = ue.memoizer;
  u?.attach(e), e._zod.parse = (a, l) => {
    c ?? (c = i.value);
    const f = a.value;
    if (!r(f))
      return a.issues.push({
        expected: "object",
        code: "invalid_type",
        input: f,
        inst: e
      }), a;
    a.value = u ? u.alloc(e, a, {}, l) : {};
    const d = [], p = c.shape, m = l?.abortEarly;
    let h = a.issues.length;
    for (const g of c.allKeys) {
      if (m && a.issues.length !== h) {
        if (de(a, h))
          break;
        h = a.issues.length;
      }
      if (g === "__proto__")
        continue;
      const b = p[g], v = b._zod.optin, S = b._zod.optout, O = b._zod.run({ value: f[g], issues: [] }, l);
      O instanceof Promise ? d.push(O.then((_) => gn(_, a, g, f, v, S))) : gn(O, a, g, f, v, S);
    }
    return o ? No(d, f, a, l, i.value, e, m === !0) : d.length ? Promise.all(d).then(() => a) : a;
  };
}), Wl = /* @__PURE__ */ y("$ZodObjectJIT", (e, t) => {
  Yl.init(e, t);
  const n = e._zod.parse, s = js(() => Io(t)), i = ue.memoizer, r = (p) => {
    const m = s.value, h = m.symbolKeys, g = new al(["payload", "ctx"], { shape: p, inst: e, memo: i, syms: h }), b = (_) => `shape[${_}]._zod.run({ value: input[${_}], issues: [] }, ctx)`, v = (_, w) => `
          let ${_}_ab = false;
          for (let i = 0; i < ${_}.issues.length; i++) {
            const iss = ${_}.issues[i];
            iss.path = iss.path ? [${w}, ...iss.path] : [${w}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${_}_ab = true;
          }
          if (${_}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
    g.write("const input = payload.value;");
    const S = /* @__PURE__ */ Object.create(null);
    let O = 0;
    for (const _ of m.allKeys)
      S[_] = `key_${O++}`;
    g.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
    for (const _ of m.allKeys) {
      if (_ === "__proto__")
        continue;
      const w = S[_], $ = typeof _ == "symbol" ? `syms[${h.indexOf(_)}]` : Ta(_), k = `${$} in input`, A = p[_], D = A?._zod?.optin, N = D !== void 0, P = A?._zod?.optout === "optional";
      if (g.write(`const ${w} = ${b($)};`), N && P) {
        const z = D === "optional" ? `${w}_present` : `${w}.value !== undefined || ${w}_present`;
        g.write(`
        const ${w}_present = ${k};
        if (!${w}.issues.length || ${w}_present) {
          if (${w}.issues.length) {${v(w, $)}
          }

          if (${z}) {
            newResult[${$}] = ${w}.value;
          }
        }

      `);
      } else N ? (g.write(`
        if (${w}.issues.length) {${v(w, $)}
        }
      `), D === "defaulted" ? g.write(`newResult[${$}] = ${w}.value;`) : g.write(`
        if (${w}.value !== undefined || ${k}) {
          newResult[${$}] = ${w}.value;
        }
      `)) : g.write(`
        const ${w}_present = ${k};
        if (${w}.issues.length) {${v(w, $)}
        }
        if (!${w}_present && !${w}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${$}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${w}_present) {
          newResult[${$}] = ${w}.value;
        }

      `);
    }
    return g.write("payload.value = newResult;"), g.write("return payload;"), g.compile();
  };
  let o;
  const c = hn, u = !ue.jitless, l = u && Ca.value, f = t.catchall;
  let d;
  e._zod.parse = (p, m) => {
    d ?? (d = s.value);
    const h = p.value;
    return c(h) ? u && l && m?.async === !1 && m.jitless !== !0 ? (o || (o = r(t.shape)), p = o(p, m), f ? No([], h, p, m, d, e, m?.abortEarly === !0) : p) : n(p, m) : (p.issues.push({
      expected: "object",
      code: "invalid_type",
      input: h,
      inst: e
    }), p);
  };
});
function $i(e, t, n, s) {
  for (const r of e)
    if (r.issues.length === 0)
      return t.value = r.value, t;
  const i = e.filter((r) => !de(r));
  return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: n,
    errors: e.map((r) => r.issues.map((o) => Te(o, s, be())))
  }), t);
}
const Xl = /* @__PURE__ */ y("$ZodUnion", (e, t) => {
  x.init(e, t), M(e, "optin", (s) => s.def.options.some((i) => i._zod.optin === "defaulted") ? "defaulted" : s.def.options.some((i) => i._zod.optin !== void 0) ? "optional" : void 0), M(e, "optout", (s) => s.def.options.some((i) => i._zod.optout === "optional") ? "optional" : void 0), M(e, "values", (s) => {
    if (s.def.options.every((i) => i._zod.values))
      return new Set(s.def.options.flatMap((i) => Array.from(i._zod.values)));
  }), M(e, "pattern", (s) => {
    if (s.def.options.every((i) => i._zod.pattern)) {
      const i = s.def.options.map((r) => r._zod.pattern);
      return new RegExp(`^(${i.map((r) => Zs(r.source)).join("|")})$`);
    }
  });
  const n = t.options.length === 1 ? t.options[0]._zod.run : null;
  e._zod.parse = (s, i) => {
    if (n)
      return n(s, i);
    let r = !1;
    const o = [];
    for (const c of t.options) {
      const u = c._zod.run({
        value: s.value,
        issues: []
      }, i);
      if (u instanceof Promise)
        o.push(u), r = !0;
      else {
        if (u.issues.length === 0)
          return u;
        o.push(u);
      }
    }
    return r ? Promise.all(o).then((c) => $i(c, s, e, i)) : $i(o, s, e, i);
  };
}), Hl = /* @__PURE__ */ y("$ZodIntersection", (e, t) => {
  x.init(e, t), e._zod.parse = (n, s) => {
    const i = n.value, r = t.left._zod.run({ value: i, issues: [] }, s), o = t.right._zod.run({ value: i, issues: [] }, s);
    return r instanceof Promise || o instanceof Promise ? Promise.all([r, o]).then(([u, a]) => Ii(n, u, a)) : Ii(n, r, o);
  };
});
function ds(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (ut(e) && ut(t)) {
    const n = Object.keys(t), s = Object.keys(e).filter((r) => n.indexOf(r) !== -1), i = { ...e, ...t };
    Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
    for (const r of s) {
      if (r === "__proto__")
        continue;
      const o = ds(e[r], t[r]);
      if (!o.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...o.mergeErrorPath]
        };
      i[r] = o.data;
    }
    return { valid: !0, data: i };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const n = [];
    for (let s = 0; s < e.length; s++) {
      const i = e[s], r = t[s], o = ds(i, r);
      if (!o.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...o.mergeErrorPath]
        };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Ii(e, t, n) {
  const s = /* @__PURE__ */ new Map();
  let i;
  const r = /* @__PURE__ */ new Map(), o = (a, l) => {
    let f;
    if (a.code === "unrecognized_keys" && !a.path?.length)
      i ?? (i = a), f = a.keys;
    else if (a.code === "invalid_key" && a.origin === "record" && a.path?.length === 1) {
      const d = String(a.path[0]);
      r.has(d) || r.set(d, a), f = [d];
    } else
      return !1;
    for (const d of f)
      s.has(d) || s.set(d, {}), s.get(d)[l] = !0;
    return !0;
  };
  for (const a of t.issues)
    o(a, "l") || e.issues.push(a);
  for (const a of n.issues)
    o(a, "r") || e.issues.push(a);
  const c = [...s].filter(([, a]) => a.l && a.r).map(([a]) => a);
  if (c.length) {
    const a = i ? c.filter((l) => i.keys.includes(l)) : [];
    a.length && e.issues.push({ ...i, keys: a });
    for (const l of c)
      !a.includes(l) && r.has(l) && e.issues.push(r.get(l));
  }
  const u = ds(t.value, n.value);
  if (!u.valid) {
    if (de(e))
      return e;
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(u.mergeErrorPath)}`);
  }
  return e.value = u.data, e;
}
const Ql = /* @__PURE__ */ y("$ZodTuple", (e, t) => {
  x.init(e, t);
  const n = t.items, s = ue.memoizer;
  s?.attach(e), e._zod.parse = (i, r) => {
    const o = i.value;
    if (!Array.isArray(o))
      return i.issues.push({
        input: o,
        inst: e,
        expected: "tuple",
        code: "invalid_type"
      }), i;
    i.value = s ? s.alloc(e, i, [], r) : [];
    const c = [], u = Ni(n, "optin"), a = Ni(n, "optout");
    if (!t.rest) {
      if (o.length < u)
        return i.issues.push({
          code: "too_small",
          minimum: u,
          inclusive: !0,
          input: o,
          inst: e,
          origin: "array"
        }), i;
      o.length > n.length && i.issues.push({
        code: "too_big",
        maximum: n.length,
        inclusive: !0,
        input: o,
        inst: e,
        origin: "array"
      });
    }
    const l = new Array(n.length), f = t.rest ? r?.abortEarly : void 0;
    let d = !1;
    for (let p = 0; p < n.length; p++) {
      const m = n[p]._zod.run({ value: o[p], issues: [] }, r);
      m instanceof Promise ? c.push(m.then((h) => {
        l[p] = h;
      })) : (l[p] = m, f && !d && m.issues.length && (d = de(m)));
    }
    if (t.rest && !d) {
      let p = n.length - 1;
      const m = o.slice(n.length);
      let h = i.issues.length;
      for (const g of m) {
        if (f && i.issues.length !== h) {
          if (de(i, h))
            break;
          h = i.issues.length;
        }
        p++;
        const b = t.rest._zod.run({ value: g, issues: [] }, r);
        b instanceof Promise ? c.push(b.then((v) => Pi(v, i, p))) : Pi(b, i, p);
      }
    }
    return c.length ? Promise.all(c).then(() => Ei(l, i, n, o, a)) : Ei(l, i, n, o, a);
  };
});
function Ni(e, t) {
  for (let n = e.length - 1; n >= 0; n--)
    if (!(t === "optin" ? e[n]._zod.optin !== void 0 : e[n]._zod.optout === "optional"))
      return n + 1;
  return 0;
}
function Pi(e, t, n) {
  e.issues.length && t.issues.push(...Ie(n, e.issues)), t.value[n] = e.value;
}
function Ei(e, t, n, s, i) {
  for (let r = 0; r < n.length; r++) {
    const o = e[r], c = r < s.length;
    if (!c && r >= i && n[r]._zod.optin === "optional") {
      t.value.length = r;
      break;
    }
    if (o.issues.length) {
      if (!c && r >= i) {
        t.value.length = r;
        break;
      }
      t.issues.push(...Ie(r, o.issues));
    }
    t.value[r] = o.value;
  }
  for (let r = t.value.length - 1; r >= s.length && (n[r]._zod.optout === "optional" && t.value[r] === void 0); r--)
    t.value.length = r;
  return t;
}
const ef = /* @__PURE__ */ y("$ZodRecord", (e, t) => {
  x.init(e, t);
  const n = ue.memoizer;
  n?.attach(e), e._zod.parse = (s, i) => {
    const r = s.value;
    if (!ut(r))
      return s.issues.push({
        expected: "record",
        code: "invalid_type",
        input: r,
        inst: e
      }), s;
    const o = [], c = t.keyType._zod.values;
    if (c && !t.partial) {
      s.value = n ? n.alloc(e, s, {}, i) : {};
      const u = /* @__PURE__ */ new Set();
      for (const l of c)
        if (typeof l == "string" || typeof l == "number" || typeof l == "symbol") {
          if (u.add(typeof l == "number" ? l.toString() : l), l === "__proto__")
            continue;
          const f = t.keyType._zod.run({ value: l, issues: [] }, i);
          if (f instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          if (f.issues.length) {
            s.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: f.issues.map((m) => Te(m, i, be())),
              input: l,
              path: [l],
              inst: e
            });
            continue;
          }
          const d = f.value;
          if (d === "__proto__")
            continue;
          const p = t.valueType._zod.run({ value: r[l], issues: [] }, i);
          p instanceof Promise ? o.push(p.then((m) => {
            m.issues.length && s.issues.push(...Ie(l, m.issues)), s.value[d] = m.value;
          })) : (p.issues.length && s.issues.push(...Ie(l, p.issues)), s.value[d] = p.value);
        }
      let a;
      for (const l in r)
        if (!u.has(l))
          if (t.mode === "loose") {
            if (l === "__proto__")
              continue;
            s.value[l] = r[l];
          } else
            a = a ?? [], a.push(l);
      a && a.length > 0 && s.issues.push({
        code: "unrecognized_keys",
        input: r,
        inst: e,
        keys: a,
        continue: !0
      });
    } else {
      s.value = n ? n.alloc(e, s, {}, i) : {};
      let u;
      for (const a of Reflect.ownKeys(r)) {
        if (a === "__proto__" || !Object.prototype.propertyIsEnumerable.call(r, a))
          continue;
        let l = t.keyType._zod.run({ value: a, issues: [] }, i);
        if (l instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (typeof a == "string" && Gs.test(a) && l.issues.length) {
          const m = t.keyType._zod.run({ value: Number(a), issues: [] }, i);
          if (m instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          m.issues.length === 0 && (l = m);
        }
        if (l.issues.length) {
          t.mode === "loose" ? s.value[a] = r[a] : c ? (u = u ?? [], u.push(a)) : s.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: l.issues.map((m) => Te(m, i, be())),
            input: a,
            path: [a],
            inst: e
          });
          continue;
        }
        const d = l.value;
        if (d === "__proto__")
          continue;
        const p = t.valueType._zod.run({ value: r[a], issues: [] }, i);
        p instanceof Promise ? o.push(p.then((m) => {
          m.issues.length && s.issues.push(...Ie(a, m.issues)), s.value[d] = m.value;
        })) : (p.issues.length && s.issues.push(...Ie(a, p.issues)), s.value[d] = p.value);
      }
      u && u.length > 0 && s.issues.push({
        code: "unrecognized_keys",
        input: r,
        inst: e,
        keys: u,
        continue: !0
      });
    }
    return o.length ? Promise.all(o).then(() => s) : s;
  };
}), tf = /* @__PURE__ */ y("$ZodEnum", (e, t) => {
  x.init(e, t);
  const n = us(t.entries), s = new Set(n);
  e._zod.values = s, M(e, "pattern", (i) => {
    const r = us(i.def.entries).filter((o) => La.has(typeof o));
    return new RegExp(r.length ? `^(${r.map((o) => lt(o.toString())).join("|")})$` : "^[^\\s\\S]$");
  }), e._zod.parse = (i, r) => {
    const o = i.value;
    return s.has(o) || i.issues.push({
      code: "invalid_value",
      values: n,
      input: o,
      inst: e
    }), i;
  };
}), nf = /* @__PURE__ */ y("$ZodLiteral", (e, t) => {
  x.init(e, t);
  const n = new Set(t.values);
  e._zod.values = n, M(e, "pattern", (s) => {
    const i = s.def.values;
    return new RegExp(i.length ? `^(${i.map((r) => typeof r == "string" ? lt(r) : r ? lt(r.toString()) : String(r)).join("|")})$` : "^[^\\s\\S]$");
  }), e._zod.parse = (s, i) => {
    const r = s.value;
    return n.has(r) || s.issues.push({
      code: "invalid_value",
      values: t.values,
      input: r,
      inst: e
    }), s;
  };
}), sf = /* @__PURE__ */ y("$ZodTransform", (e, t) => {
  x.init(e, t), e._zod.optin = "optional", ue.memoizer?.guard(e), e._zod.parse = (n, s) => {
    if (s.direction === "backward")
      throw new ho(e.constructor.name);
    const i = t.transform(n.value, n);
    if (s.async)
      return (i instanceof Promise ? i : Promise.resolve(i)).then((o) => (n.value = o, n));
    if (i instanceof Promise)
      throw new Be();
    return n.value = i, n;
  };
});
function Ai(e, t) {
  return e.value = t.issues.length ? void 0 : t.value, e;
}
const Po = /* @__PURE__ */ y("$ZodOptional", (e, t) => {
  x.init(e, t), M(e, "optin", (n) => n.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", M(e, "values", (n) => {
    const s = n.def.innerType._zod.values;
    return s ? /* @__PURE__ */ new Set([...s, void 0]) : void 0;
  }), M(e, "pattern", (n) => {
    const s = n.def.innerType._zod.pattern;
    return s ? new RegExp(`^(${Zs(s.source)})?$`) : void 0;
  }), e._zod.parse = (n, s) => {
    if (n.value === void 0) {
      if (t.innerType._zod.optin !== "defaulted")
        return n;
      const i = t.innerType._zod.run({ value: n.value, issues: [] }, s);
      return i instanceof Promise ? i.then((r) => Ai(n, r)) : Ai(n, i);
    }
    return t.innerType._zod.run(n, s);
  };
}), rf = /* @__PURE__ */ y("$ZodExactOptional", (e, t) => {
  Po.init(e, t), M(e, "values", (n) => n.def.innerType._zod.values), M(e, "pattern", (n) => n.def.innerType._zod.pattern), e._zod.parse = (n, s) => t.innerType._zod.run(n, s);
}), of = /* @__PURE__ */ y("$ZodNullable", (e, t) => {
  x.init(e, t), M(e, "optin", (n) => n.def.innerType._zod.optin), M(e, "optout", (n) => n.def.innerType._zod.optout), M(e, "pattern", (n) => {
    const s = n.def.innerType._zod.pattern;
    return s ? new RegExp(`^(${Zs(s.source)}|null)$`) : void 0;
  }), M(e, "values", (n) => n.def.innerType._zod.values ? /* @__PURE__ */ new Set([...n.def.innerType._zod.values, null]) : void 0), e._zod.parse = (n, s) => n.value === null ? n : t.innerType._zod.run(n, s);
}), cf = /* @__PURE__ */ y("$ZodDefault", (e, t) => {
  x.init(e, t), e._zod.optin = "defaulted", M(e, "values", (n) => n.def.innerType._zod.values), e._zod.parse = (n, s) => {
    if (s.direction === "backward")
      return t.innerType._zod.run(n, s);
    if (n.value === void 0)
      return n.value = t.defaultValue, n;
    const i = t.innerType._zod.run(n, s);
    return i instanceof Promise ? i.then((r) => Ti(r, t)) : Ti(i, t);
  };
});
function Ti(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const af = /* @__PURE__ */ y("$ZodPrefault", (e, t) => {
  x.init(e, t), e._zod.optin = "defaulted", M(e, "values", (n) => n.def.innerType._zod.values), e._zod.parse = (n, s) => (s.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, s));
}), uf = /* @__PURE__ */ y("$ZodNonOptional", (e, t) => {
  x.init(e, t), M(e, "values", (n) => {
    const s = n.def.innerType._zod.values;
    return s ? new Set([...s].filter((i) => i !== void 0)) : void 0;
  }), e._zod.parse = (n, s) => {
    const i = t.innerType._zod.run(n, s);
    return i instanceof Promise ? i.then((r) => zi(r, e)) : zi(i, e);
  };
});
function zi(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
function Ci(e, t, n, s) {
  return t.issues.length ? (e.value = n.catchValue({
    ...t,
    value: e.value,
    error: {
      issues: t.issues.map((i) => Te(i, s, be()))
    },
    input: e.value
  }), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
const lf = /* @__PURE__ */ y("$ZodCatch", (e, t) => {
  x.init(e, t), M(e, "optin", (n) => n.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), M(e, "optout", (n) => n.def.innerType._zod.optout), M(e, "values", (n) => n.def.innerType._zod.values), e._zod.parse = (n, s) => {
    if (s.direction === "backward")
      return t.innerType._zod.run(n, s);
    const i = t.innerType._zod.run({ value: n.value, issues: [] }, s);
    return i instanceof Promise ? i.then((r) => Ci(n, r, t, s)) : Ci(n, i, t, s);
  };
}), ff = /* @__PURE__ */ y("$ZodPipe", (e, t) => {
  x.init(e, t), M(e, "values", (n) => n.def.in._zod.values), M(e, "optin", (n) => n.def.in._zod.optin), M(e, "optout", (n) => n.def.out._zod.optout), M(e, "propValues", (n) => n.def.in._zod.propValues), e._zod.parse = (n, s) => {
    if (s.direction === "backward") {
      const r = t.out._zod.run(n, s);
      return r instanceof Promise ? r.then((o) => Jt(o, t.in, s)) : Jt(r, t.in, s);
    }
    const i = t.in._zod.run(n, s);
    return i instanceof Promise ? i.then((r) => Jt(r, t.out, s)) : Jt(i, t.out, s);
  };
});
function Jt(e, t, n) {
  return e.issues.some((s) => s.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, n);
}
const df = /* @__PURE__ */ y("$ZodReadonly", (e, t) => {
  x.init(e, t), M(e, "propValues", (n) => n.def.innerType._zod.propValues), M(e, "values", (n) => n.def.innerType._zod.values), M(e, "optin", (n) => n.def.innerType?._zod?.optin), M(e, "optout", (n) => n.def.innerType?._zod?.optout), e._zod.parse = (n, s) => {
    if (s.direction === "backward")
      return t.innerType._zod.run(n, s);
    const i = t.innerType._zod.run(n, s);
    return i instanceof Promise ? i.then(Li) : Li(i);
  };
});
function Li(e) {
  return e.memo || (e.value = Object.freeze(e.value)), e;
}
const hf = /* @__PURE__ */ y("$ZodCustom", (e, t) => {
  ne.init(e, t), x.init(e, t), e._zod.parse = (n, s) => n, e._zod.check = (n) => {
    const s = n.value, i = t.fn(s);
    if (i instanceof Promise)
      return i.then((r) => Mi(r, n, s, e));
    Mi(i, n, s, e);
  };
});
function Mi(e, t, n, s) {
  if (!e) {
    const i = {
      code: "custom",
      input: n,
      inst: s,
      // incorporates params.error into issue reporting
      path: [...s._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !s._zod.def.abort
      // params: inst._zod.def.params,
    };
    s._zod.def.params && (i.params = s._zod.def.params), t.issues.push(Ct(i));
  }
}
class pf extends Error {
  constructor() {
    super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
  }
}
const hs = "~memo", Di = [];
function Eo(e) {
  return e !== null && typeof e == "object";
}
function Xn(e) {
  return e.map((t) => t.path ? { ...t, path: t.path.slice() } : { ...t });
}
const Ao = /* @__PURE__ */ new WeakMap(), $t = 0, rn = 1, Pt = 2;
function on(e, t, n) {
  const s = Ao.get(e);
  if (s !== void 0)
    return s ? Pt : $t;
  if (t.has(e))
    return Pt;
  t.add(e);
  let i = $t;
  const r = (l) => {
    if (i !== Pt && l?._zod) {
      const f = on(l, t);
      f > i && (i = f);
    }
  }, o = (l, f) => {
    let d = $t;
    for (const p of Reflect.ownKeys(l)) {
      const m = Object.getOwnPropertyDescriptor(l, p);
      if (!m.enumerable)
        continue;
      const h = m.get ? rn : m.value?._zod ? on(m.value, t) : $t;
      h > d && (d = h);
    }
    return d;
  }, c = (l) => {
    l > i && (i = l);
  }, u = e._zod.def;
  switch (u.type) {
    case "object": {
      const l = no(u);
      c(l ? o(l) : rn), r(u.catchall);
      break;
    }
    case "array":
      r(u.element);
      break;
    case "tuple":
      for (const l of u.items)
        r(l);
      r(u.rest);
      break;
    case "record":
    case "map":
      r(u.keyType), r(u.valueType);
      break;
    case "set":
      r(u.valueType);
      break;
    case "union":
      for (const l of u.options)
        r(l);
      break;
    case "intersection":
      r(u.left), r(u.right);
      break;
    case "optional":
    case "nullable":
    case "default":
    case "prefault":
    case "catch":
    case "readonly":
    case "nonoptional":
    case "promise":
    case "success":
      r(u.innerType);
      break;
    case "pipe":
      r(u.in), r(u.out);
      break;
    case "function":
      r(u.input), r(u.output);
      break;
    // `$ZodLazy` caches its inner on the def, so a resolved edge is followed exactly
    case "lazy": {
      const l = u._cachedInner ?? void 0;
      c(l ? on(l, t) : rn);
      break;
    }
    // a leaf by choice: `parts` are regex fragments, not data positions
    case "template_literal":
    // leaves
    case "string":
    case "number":
    case "int":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
    case "void":
    case "never":
    case "any":
    case "unknown":
    case "date":
    case "nan":
    case "enum":
    case "literal":
    case "file":
    case "transform":
    case "custom":
      break;
    default:
      for (const l in u) {
        const f = Object.getOwnPropertyDescriptor(u, l);
        if (!f || f.get)
          continue;
        const d = f.value;
        if (!(!d || typeof d != "object")) {
          if (d._zod)
            r(d);
          else if (Array.isArray(d))
            for (const p of d)
              r(p);
        }
      }
  }
  return t.delete(e), mf(e, i);
}
function mf(e, t) {
  return t !== rn && Ao.set(e, t === Pt), t;
}
function gf(e, t) {
  let n = e.buckets.get(t);
  return n || (n = /* @__PURE__ */ new WeakMap(), e.buckets.set(t, n)), n;
}
let Yt;
const Wt = [], yf = {
  alloc(e, t, n) {
    const s = Yt;
    if (!s)
      return n;
    Yt = void 0;
    const i = { value: n, issues: null };
    return s.set(t.value, i), Wt.push(i), n;
  },
  guard(e) {
    var t;
    (t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
      const n = e._zod.parse, s = (i, r) => {
        if (r.direction !== "backward" && wf(r, i.value))
          throw new pf();
        return n(i, r);
      };
      e._zod.parse = s, e._zod.run === n && (e._zod.run = s);
    });
  },
  attach(e) {
    var t;
    let n, s = !1, i, r;
    (t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
      const o = e._zod.parse, c = (u, a) => {
        if (n === void 0) {
          const b = on(e, /* @__PURE__ */ new Set());
          if (b === $t)
            return e._zod.parse = o, e._zod.run === c && (e._zod.run = o), o(u, a);
          b === Pt || s ? n = !0 : s = !0;
        }
        const l = u.value;
        if (!Eo(l))
          return o(u, a);
        let f = a[hs];
        f || (f = { buckets: /* @__PURE__ */ new WeakMap(), backEdges: void 0 }, a[hs] = f);
        let d;
        i === a ? d = r : (d = gf(f, e), i = a, r = d);
        const p = d.get(l);
        if (p)
          return u.value = p.value, p.issues ? p.issues.length && u.issues.push(...Xn(p.issues)) : (u.memo = !0, f.backEdges ?? (f.backEdges = /* @__PURE__ */ new WeakSet()), f.backEdges.add(p.value)), u;
        Yt = d;
        const m = Wt.length, h = o(u, a);
        Yt = void 0;
        const g = Wt.length > m ? Wt.pop() : void 0;
        return h instanceof Promise ? h.then((b) => (g && (g.issues = b.issues.length ? Xn(b.issues) : Di), b)) : (g && (g.issues = h.issues.length ? Xn(h.issues) : Di), h);
      };
      e._zod.parse = c, e._zod.run === o && (e._zod.run = c);
    });
  }
};
function bf() {
  return yf;
}
function wf(e, t) {
  const n = e[hs]?.backEdges;
  return n !== void 0 && Eo(t) && n.has(t);
}
const _f = () => {
  const e = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function t(r) {
    return e[r] ?? null;
  }
  const n = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    currency_code: "currency code",
    credit_card: "credit card number",
    iban: "IBAN",
    jwt: "JWT",
    template_literal: "input"
  }, s = {
    // Compatibility: "nan" -> "NaN" for display
    nan: "NaN"
    // All other type names omitted - they fall back to raw values via ?? operator
  };
  function i(r, o) {
    return r === "number" && typeof o == "number" && !Number.isFinite(o) ? String(o) : s[r] ?? r;
  }
  return (r) => {
    switch (r.code) {
      case "invalid_type": {
        const o = i(r.expected), c = Ga(r.input), u = i(c, r.input);
        return `Invalid input: expected ${o}, received ${u}`;
      }
      case "invalid_value":
        return r.values.length === 1 ? `Invalid input: expected ${co(r.values[0])}` : `Invalid option: expected one of ${gi(r.values, "|")}`;
      case "too_big": {
        const o = r.exact ? "exactly " : r.inclusive ? "<=" : "<", c = t(r.origin);
        return c ? `Too big: expected ${r.origin ?? "value"} to have ${o}${r.maximum.toString()} ${c.unit ?? "elements"}` : `Too big: expected ${r.origin ?? "value"} to be ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        const o = r.exact ? "exactly " : r.inclusive ? ">=" : ">", c = t(r.origin);
        return c ? `Too small: expected ${r.origin} to have ${o}${r.minimum.toString()} ${c.unit}` : `Too small: expected ${r.origin} to be ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = r;
        return o.format === "starts_with" ? `Invalid string: must start with "${o.prefix}"` : o.format === "ends_with" ? `Invalid string: must end with "${o.suffix}"` : o.format === "includes" ? `Invalid string: must include "${o.includes}"` : o.format === "regex" ? `Invalid string: must match pattern ${o.pattern}` : `Invalid ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${r.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${r.keys.length > 1 ? "s" : ""}: ${gi(r.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${r.origin}`;
      case "invalid_union":
        return r.options && Array.isArray(r.options) && r.options.length > 0 ? `Invalid discriminator value. Expected ${r.options.map((c) => `'${c}'`).join(" | ")}` : r.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
      case "invalid_element":
        return `Invalid value in ${r.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function vf() {
  return {
    localeError: _f()
  };
}
var ji;
class kf {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...n) {
    const s = n[0];
    return this._map.set(t, s), s && typeof s == "object" && "id" in s && this._idmap.set(s.id, t), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const n = this._map.get(t);
    return n && typeof n == "object" && "id" in n && this._idmap.delete(n.id), this._map.delete(t), this;
  }
  get(t) {
    const n = t._zod.parent;
    if (n) {
      const s = { ...this.get(n) ?? {} };
      delete s.id;
      const i = { ...s, ...this._map.get(t) };
      return Object.keys(i).length ? i : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function Sf() {
  return new kf();
}
(ji = globalThis).__zod_globalRegistry ?? (ji.__zod_globalRegistry = Sf());
const It = globalThis.__zod_globalRegistry;
function To(e) {
  return e.checks && (e.checks = [...e.checks]), e;
}
// @__NO_SIDE_EFFECTS__
function Of(e, t) {
  return new e(To({ type: "string", ...I(t) }));
}
// @__NO_SIDE_EFFECTS__
function $f(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function If(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Nf(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Pf(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ef(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Af(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Tf(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function zf(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Cf(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Lf(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Mf(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Df(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function jf(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Zf(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function xf(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Rf(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Bf(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Uf(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ff(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Kf(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Gf(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Vf(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function qf(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Jf(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Yf(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Wf(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Xf(e, t) {
  return new e(To({ type: "number", checks: [], ...I(t) }));
}
// @__NO_SIDE_EFFECTS__
function Hf(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Qf(e, t) {
  return new e({
    type: "boolean",
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ed(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function td(e, t) {
  return new e({
    type: "never",
    ...I(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Zi(e, t) {
  return new go({
    check: "less_than",
    ...I(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Hn(e, t) {
  return new go({
    check: "less_than",
    ...I(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function xi(e, t) {
  return new yo({
    check: "greater_than",
    ...I(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Qn(e, t) {
  return new yo({
    check: "greater_than",
    ...I(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Ri(e, t) {
  return new Wu({
    check: "multiple_of",
    ...I(t),
    value: e
  });
}
// @__NO_SIDE_EFFECTS__
function zo(e, t) {
  return new Hu({
    check: "max_length",
    ...I(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function yn(e, t) {
  return new Qu({
    check: "min_length",
    ...I(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Co(e, t) {
  return new el({
    check: "length_equals",
    ...I(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function nd(e, t) {
  return new tl({
    check: "string_format",
    format: "regex",
    ...I(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function sd(e) {
  return new nl({
    check: "string_format",
    format: "lowercase",
    ...I(e)
  });
}
// @__NO_SIDE_EFFECTS__
function id(e) {
  return new sl({
    check: "string_format",
    format: "uppercase",
    ...I(e)
  });
}
// @__NO_SIDE_EFFECTS__
function rd(e, t) {
  return new il({
    check: "string_format",
    format: "includes",
    ...I(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function od(e, t) {
  return new rl({
    check: "string_format",
    format: "starts_with",
    ...I(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function cd(e, t) {
  return new ol({
    check: "string_format",
    format: "ends_with",
    ...I(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function _t(e) {
  return new cl({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function ad(e) {
  return /* @__PURE__ */ _t((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function ud() {
  return /* @__PURE__ */ _t((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function ld() {
  return /* @__PURE__ */ _t((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function fd() {
  return /* @__PURE__ */ _t((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function dd() {
  return /* @__PURE__ */ _t((e) => za(e));
}
// @__NO_SIDE_EFFECTS__
function hd(e, t, n) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...I(n)
  });
}
// @__NO_SIDE_EFFECTS__
function pd(e, t, n) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...I(n)
  });
}
// @__NO_SIDE_EFFECTS__
function md(e, t) {
  const n = /* @__PURE__ */ gd((s) => (s.addIssue = (i) => {
    if (typeof i == "string")
      s.issues.push(Ct(i, s.value, n._zod.def));
    else {
      const r = i;
      r.fatal && (r.continue = !1), r.code ?? (r.code = "custom"), "input" in r || (r.input = s.value), r.inst ?? (r.inst = n), r.continue ?? (r.continue = !n._zod.def.abort), s.issues.push(Ct(r));
    }
  }, e(s.value, s)), t);
  return n;
}
// @__NO_SIDE_EFFECTS__
function gd(e, t) {
  const n = new ne({
    check: "custom",
    ...I(t)
  });
  return n._zod.check = e, n;
}
function Et(e, ...t) {
  for (const n of t)
    for (const s of Reflect.ownKeys(n))
      Object.prototype.propertyIsEnumerable.call(n, s) && De(e, s, n[s]);
  return e;
}
function Lo(e) {
  let t = e?.target ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? It,
    target: t,
    unrepresentable: e?.unrepresentable ?? "throw",
    override: e?.override ?? (() => {
    }),
    io: e?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    sharedDefsExtractedFor: void 0,
    sharedEmitDoneFor: void 0,
    cycles: e?.cycles ?? "ref",
    reused: e?.reused ?? "inline",
    intersections: [],
    deferred: [],
    external: e?.external ?? void 0
  };
}
function Ce(e, t, n, s, i) {
  const r = typeof t.unrepresentable == "function" ? t.unrepresentable({ zodSchema: e, path: s.path, message: i }) : t.unrepresentable;
  if (r === "any")
    return !1;
  if (r === void 0 || r === "throw")
    throw new Error(i);
  return Object.assign(n, r), !0;
}
function J(e, t, n = { path: [], schemaPath: [] }) {
  var s;
  const i = e._zod.def, r = t.seen.get(e);
  if (r)
    return r.count++, n.schemaPath.includes(e) && (r.cycle = n.path), r.schema;
  const o = { schema: {}, count: 1, cycle: void 0, path: n.path };
  t.seen.set(e, o), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
  const c = e._zod.toJSONSchema?.();
  if (c)
    o.schema = c;
  else {
    const l = {
      ...n,
      schemaPath: [...n.schemaPath, e],
      path: n.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, o.schema, l);
    else {
      const d = o.schema, p = t.processors[i.type];
      if (!p)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
      p(e, t, d, l);
    }
    const f = e._zod.parent;
    f && (o.ref || (o.ref = f), J(f, t, l), t.seen.get(f).isParent = !0);
  }
  const u = t.metadataRegistry.get(e);
  return u && Et(o.schema, u), t.io === "input" && H(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((s = o.schema).default ?? (s.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function Bi(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Mo(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  if (e.external && e.sharedDefsExtractedFor === e.external)
    return;
  const s = /* @__PURE__ */ new Map();
  for (const o of e.seen.entries()) {
    const c = e.metadataRegistry.get(o[0])?.id;
    if (c) {
      const u = s.get(c);
      if (u && u !== o[0])
        throw new Error(`Duplicate schema id "${c}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      s.set(c, o[0]);
    }
  }
  const i = (o) => {
    const c = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const f = e.external.registry.get(o[0])?.id, d = e.external.uri ?? ((m) => m);
      if (f)
        return { ref: d(f) };
      const p = o[1].defId ?? o[1].schema.id ?? `schema${e.counter++}`;
      return o[1].defId = p, { defId: p, ref: `${d("__shared")}#/${c}/${Bi(p)}` };
    }
    const u = "#", a = `${u}/${c}/`;
    if (o[1] === n && !o[1].schema.id)
      return { ref: u };
    const l = o[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: l, ref: a + Bi(l) };
  }, r = (o) => {
    if (o[1].schema.$ref)
      return;
    const c = o[1], { ref: u, defId: a } = i(o);
    c.def = { ...c.schema }, a && (c.defId = a);
    const l = c.schema;
    for (const f in l)
      delete l[f];
    l.$ref = u;
  };
  if (e.cycles === "throw")
    for (const o of e.seen.entries()) {
      const c = o[1];
      if (c.cycle)
        throw new Error(`Cycle detected: #/${c.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const o of e.seen.entries()) {
    const c = o[1];
    if (t === o[0]) {
      r(o);
      continue;
    }
    if (e.external) {
      const a = e.external.registry.get(o[0])?.id;
      if (t !== o[0] && a) {
        r(o);
        continue;
      }
    }
    if (e.metadataRegistry.get(o[0])?.id) {
      r(o);
      continue;
    }
    if (c.cycle) {
      r(o);
      continue;
    }
    c.count > 1 && e.reused === "ref" && r(o);
  }
  e.external && (e.sharedDefsExtractedFor = e.external);
}
function Do(e) {
  const t = e.anyOf;
  if (!Array.isArray(t) || t.length === 0 || e.type !== void 0)
    return;
  const n = [];
  for (const s of t) {
    if (!s || typeof s != "object")
      return;
    Do(s);
    const i = Object.keys(s);
    if (i.length !== 1 || i[0] !== "type")
      return;
    const r = s.type;
    for (const o of Array.isArray(r) ? r : [r]) {
      if (typeof o != "string")
        return;
      n.includes(o) || n.push(o);
    }
  }
  delete e.anyOf, e.type = n.length === 1 ? n[0] : n;
}
const jo = /* @__PURE__ */ new Set(["type", "properties", "required", "additionalProperties"]), Ui = ["oneOf", "anyOf"];
function Fi(e) {
  const t = e.additionalProperties;
  return t === void 0 || t === !1 || typeof t != "object" || t === null ? null : Object.keys(t).length ? t : null;
}
function ps(e) {
  const t = [];
  for (const r of e) {
    if (typeof r != "object" || r.type !== "object")
      return null;
    for (const o in r)
      if (!jo.has(o))
        return null;
    t.push(r);
  }
  const n = {}, s = /* @__PURE__ */ new Set();
  for (const r of t) {
    for (const o in r.properties) {
      if (Object.prototype.hasOwnProperty.call(n, o))
        continue;
      const c = [];
      for (const a of t) {
        const l = a.properties?.[o] ?? Fi(a);
        l != null && (c.some((f) => JSON.stringify(f) === JSON.stringify(l)) || c.push(l));
      }
      const u = c.length === 1 ? c[0] : ps(c) ?? { allOf: c };
      De(n, o, u);
    }
    for (const o of r.required ?? [])
      s.add(o);
  }
  const i = { type: "object", properties: n };
  if (s.size && (i.required = [...s]), t.every((r) => r.additionalProperties === !1))
    i.additionalProperties = !1;
  else {
    const r = [];
    for (const o of t) {
      const c = Fi(o);
      c && !r.some((u) => JSON.stringify(u) === JSON.stringify(c)) && r.push(c);
    }
    r.length === 1 ? i.additionalProperties = r[0] : r.length > 1 && (i.additionalProperties = { allOf: r });
  }
  return i;
}
function yd(e) {
  const t = e.allOf;
  if (!Array.isArray(t) || t.length < 2)
    return;
  for (const i of jo)
    if (i in e)
      return;
  const n = t.filter((i) => Ui.some((r) => Array.isArray(i[r])));
  let s = null;
  if (!n.length)
    s = ps(t);
  else {
    const i = n[0], r = Ui.find((u) => Array.isArray(i[u]));
    if (Object.keys(i).length !== 1)
      return;
    const o = t.filter((u) => u !== i), c = i[r].map((u) => ps([...o, u]));
    if (c.some((u) => !u))
      return;
    s = { [r]: c };
  }
  s && (delete e.allOf, Et(e, s));
}
function Zo(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const s = (c) => {
    const u = e.seen.get(c);
    if (u.ref === null)
      return;
    const a = u.def ?? u.schema, l = { ...a }, f = u.ref;
    if (u.ref = null, f) {
      s(f);
      const p = e.seen.get(f), m = p.schema;
      if (m.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (a.allOf = a.allOf ?? [], a.allOf.push(m)) : Et(a, m), Et(a, l), c._zod.parent === f)
        for (const g in a)
          g === "$ref" || g === "allOf" || g in l || delete a[g];
      if (m.$ref && p.def)
        for (const g in a)
          g === "$ref" || g === "allOf" || g in p.def && JSON.stringify(a[g]) === JSON.stringify(p.def[g]) && delete a[g];
    }
    const d = c._zod.parent;
    if (d && d !== f) {
      s(d);
      const p = e.seen.get(d);
      if (p?.schema.$ref && (a.$ref = p.schema.$ref, p.def))
        for (const m in a)
          m === "$ref" || m === "allOf" || m in p.def && JSON.stringify(a[m]) === JSON.stringify(p.def[m]) && delete a[m];
    }
    e.override({
      zodSchema: c,
      jsonSchema: a,
      path: u.path ?? []
    });
  };
  if (!e.external || e.sharedEmitDoneFor !== e.external) {
    for (const c of [...e.seen.entries()].reverse())
      s(c[0]);
    if (e.target !== "openapi-3.0")
      for (const c of e.seen.entries())
        Do(c[1].def ?? c[1].schema);
    for (const c of e.deferred)
      c();
    if (e.intersections.length) {
      const c = /* @__PURE__ */ new Map();
      for (const u of e.seen.values())
        for (const a of [u.schema, u.def]) {
          const l = a?.allOf;
          if (!Array.isArray(l))
            continue;
          const f = c.get(l);
          f ? f.push(a) : c.set(l, [a]);
        }
      for (const u of e.intersections)
        for (const a of c.get(u) ?? [])
          yd(a);
    }
  }
  const i = {};
  if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
    const c = e.external.registry.get(t)?.id;
    if (!c)
      throw new Error("Schema is missing an `id` property");
    i.$id = e.external.uri(c);
  }
  Et(i, n.defId ? n.schema : n.def ?? n.schema);
  const r = e.metadataRegistry.get(t)?.id;
  r !== void 0 && i.id === r && delete i.id;
  const o = e.external?.defs ?? {};
  if (!e.external || e.sharedEmitDoneFor !== e.external)
    for (const c of e.seen.entries()) {
      const u = c[1];
      u.def && u.defId && (u.def.id === u.defId && delete u.def.id, De(o, u.defId, u.def));
    }
  e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
  try {
    const c = JSON.parse(JSON.stringify(i));
    return Object.defineProperty(c, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: bn(t, "input", e.processors),
          output: bn(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), c;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function H(e, t) {
  const n = t ?? { seen: /* @__PURE__ */ new Set() };
  if (n.seen.has(e))
    return !1;
  n.seen.add(e);
  const s = e._zod.def;
  if (s.type === "transform")
    return !0;
  if (s.type === "array")
    return H(s.element, n);
  if (s.type === "set")
    return H(s.valueType, n);
  if (s.type === "lazy")
    return H(s.getter(), n);
  if (s.type === "promise" || s.type === "optional" || s.type === "nonoptional" || s.type === "nullable" || s.type === "readonly" || s.type === "default" || s.type === "prefault" || s.type === "catch")
    return H(s.innerType, n);
  if (s.type === "intersection")
    return H(s.left, n) || H(s.right, n);
  if (s.type === "record" || s.type === "map")
    return H(s.keyType, n) || H(s.valueType, n);
  if (s.type === "pipe")
    return e._zod.traits.has("$ZodCodec") ? !0 : H(s.in, n) || H(s.out, n);
  if (s.type === "object") {
    for (const i in s.shape)
      if (H(s.shape[i], n))
        return !0;
    return !1;
  }
  if (s.type === "union") {
    for (const i of s.options)
      if (H(i, n))
        return !0;
    return !1;
  }
  if (s.type === "tuple") {
    for (const i of s.items)
      if (H(i, n))
        return !0;
    return !!(s.rest && H(s.rest, n));
  }
  return !1;
}
const bd = (e, t = {}) => (n) => {
  const s = Lo({ ...n, processors: t });
  return J(e, s), Mo(s, e), Zo(s, e);
}, bn = (e, t, n = {}) => (s) => {
  const { libraryOptions: i, target: r } = s ?? {}, o = Lo({ ...i ?? {}, target: r, io: t, processors: n });
  return J(e, o), Mo(o, e), Zo(o, e);
}, ft = (e, t, n) => {
  (e[t] === void 0 || n > e[t]) && (e[t] = n);
}, dt = (e, t, n) => {
  (e[t] === void 0 || n < e[t]) && (e[t] = n);
}, Ki = (e, t) => {
  ft(e, "minimum", t), dt(e, "maximum", t);
}, xo = (e, t) => {
  e.multipleOf ?? (e.multipleOf = []), e.multipleOf.includes(t) || e.multipleOf.push(t);
}, Ro = (e, t) => {
  e.patterns ?? (e.patterns = /* @__PURE__ */ new Set()), e.patterns.add(t);
}, Bo = (e, t) => {
  e.mime = e.mime ? e.mime.filter((n) => t.includes(n)) : [...t];
}, Uo = (e, t) => {
  e.format = t, t.includes("int") && (e.isInt = !0);
}, Gi = (e, t) => ft(e, "minimum", t.minimum), Vi = (e, t) => dt(e, "maximum", t.maximum), qi = (e) => (t, n) => {
  Uo(t, n.format);
  const [s, i] = e[n.format];
  ft(t, "minimum", s), dt(t, "maximum", i);
}, wd = {
  greater_than: (e, t) => ft(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
  less_than: (e, t) => dt(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
  multiple_of: (e, t) => xo(e, t.value),
  number_format: qi(ao),
  bigint_format: qi(Da),
  min_length: Gi,
  max_length: Vi,
  length_equals: (e, t) => Ki(e, t.length),
  min_size: Gi,
  max_size: Vi,
  size_equals: (e, t) => Ki(e, t.size),
  string_format: (e, t) => {
    Uo(e, t.format), t.pattern && Ro(e, t.pattern), (t.format === "base64" || t.format === "base64url") && (e.contentEncoding = t.format), (t.local || t.precision === -1) && (e.laxFormat = !0);
  },
  mime_type: (e, t) => Bo(e, t.mime)
};
function oe(e) {
  const t = {}, n = e._zod.def, s = e._zod.traits.has("$ZodCheck") ? [e, ...n.checks ?? []] : n.checks ?? [];
  for (const r of s)
    wd[r._zod.def.check]?.(t, r._zod.def);
  const i = e._zod.bag;
  i.minimum !== void 0 && ft(t, "minimum", i.minimum), i.exclusiveMinimum !== void 0 && ft(t, "exclusiveMinimum", i.exclusiveMinimum), i.maximum !== void 0 && dt(t, "maximum", i.maximum), i.exclusiveMaximum !== void 0 && dt(t, "exclusiveMaximum", i.exclusiveMaximum), i.multipleOf !== void 0 && xo(t, i.multipleOf), i.format !== void 0 && (t.format ?? (t.format = i.format), i.format.includes("int") && (t.isInt = !0)), i.mime && Bo(t, i.mime);
  for (const r of i.patterns ?? [])
    Ro(t, r);
  return t;
}
const _d = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, vd = /* @__PURE__ */ new Map([
  [Oo, ju],
  [Js, Zu]
]), Fo = (e) => vd.get(e) ?? e, kd = (e, t, n, s) => {
  const i = n;
  i.type = "string";
  const { minimum: r, maximum: o, format: c, patterns: u, contentEncoding: a, laxFormat: l } = oe(e);
  if (typeof r == "number" && (i.minLength = r), typeof o == "number" && (i.maxLength = o), c && (i.format = _d[c] ?? c, i.format === "" && delete i.format, (c === "time" || l) && delete i.format), a && (i.contentEncoding = a), u && u.size > 0) {
    const f = [...u].map(Fo);
    f.length === 1 ? i.pattern = f[0].source : f.length > 1 && (i.allOf = [
      ...f.map((d) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: d.source
      }))
    ]);
  }
}, Sd = (e, t, n, s) => {
  const i = n, { minimum: r, maximum: o, multipleOf: c, exclusiveMaximum: u, exclusiveMinimum: a, isInt: l } = oe(e);
  i.type = l ? "integer" : "number";
  const f = typeof a == "number" && a >= (r ?? Number.NEGATIVE_INFINITY), d = typeof u == "number" && u <= (o ?? Number.POSITIVE_INFINITY), p = t.target === "draft-04" || t.target === "openapi-3.0";
  if (f ? p ? (i.minimum = a, i.exclusiveMinimum = !0) : i.exclusiveMinimum = a : typeof r == "number" && (i.minimum = r), d ? p ? (i.maximum = u, i.exclusiveMaximum = !0) : i.exclusiveMaximum = u : typeof o == "number" && (i.maximum = o), c) {
    const m = /* @__PURE__ */ new Set();
    for (const b of c)
      Number.isFinite(b) && b !== 0 ? m.add(Math.abs(b)) : Ce(e, t, i, s, `A multipleOf divisor of ${b} cannot be represented in JSON Schema`);
    const [h, ...g] = m;
    h !== void 0 && (i.multipleOf = h), g.length && (i.allOf = [...i.allOf ?? [], ...g.map((b) => ({ multipleOf: b }))]);
  }
}, Od = (e, t, n, s) => {
  n.type = "boolean";
}, $d = (e, t, n, s) => {
  n.not = {};
}, Id = (e, t, n, s) => {
}, Nd = (e, t, n, s) => {
  const i = e._zod.def, r = us(i.entries);
  if (r.length === 0) {
    n.not = {};
    return;
  }
  r.every((o) => typeof o == "number") && (n.type = "number"), r.every((o) => typeof o == "string") && (n.type = "string"), n.enum = r;
}, Pd = (e, t, n, s) => {
  const i = e._zod.def;
  if (i.values.length === 0) {
    n.not = {};
    return;
  }
  const r = [];
  for (const o of i.values)
    if (o === void 0) {
      if (Ce(e, t, n, s, "Literal `undefined` cannot be represented in JSON Schema"))
        return;
    } else if (typeof o == "bigint") {
      if (Ce(e, t, n, s, "BigInt literals cannot be represented in JSON Schema"))
        return;
      r.push(Number(o));
    } else
      r.push(o);
  if (r.length !== 0) if (r.length === 1) {
    const o = r[0];
    n.type = o === null ? "null" : typeof o, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [o] : n.const = o;
  } else
    r.every((o) => typeof o == "number") && (n.type = "number"), r.every((o) => typeof o == "string") && (n.type = "string"), r.every((o) => typeof o == "boolean") && (n.type = "boolean"), r.every((o) => o === null) && (n.type = "null"), n.enum = r;
}, Ed = (e, t, n, s) => {
  Ce(e, t, n, s, "Custom types cannot be represented in JSON Schema");
}, Ad = (e, t, n, s) => {
  Ce(e, t, n, s, "Transforms cannot be represented in JSON Schema");
}, Td = (e, t, n, s) => {
  const i = n, r = e._zod.def, { minimum: o, maximum: c } = oe(e);
  typeof o == "number" && (i.minItems = o), typeof c == "number" && (i.maxItems = c), i.type = "array", i.items = J(r.element, t, {
    ...s,
    path: [...s.path, "items"]
  });
};
function Lt(e) {
  const t = e._zod.def;
  return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? Lt(t.out) : t.type === "catch" ? Lt(t.innerType) : e._zod.optin;
}
const zd = (e, t, n, s) => {
  const i = n, r = e._zod.def, o = r.shape;
  if (Object.getOwnPropertySymbols(o).length && Ce(e, t, i, s, "Symbol keys cannot be represented in JSON Schema"))
    return;
  i.type = "object", i.properties = {};
  for (const a in o)
    De(i.properties, a, J(o[a], t, {
      ...s,
      path: [...s.path, "properties", a]
    }));
  const u = [];
  for (const a of Object.keys(o)) {
    const l = r.shape[a];
    (t.io === "input" ? Lt(l) === void 0 : l._zod.optout === void 0) && u.push(a);
  }
  u.length > 0 && (i.required = u), r.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : r.catchall ? r.catchall && (i.additionalProperties = J(r.catchall, t, {
    ...s,
    path: [...s.path, "additionalProperties"]
  })) : t.io === "output" && (i.additionalProperties = !1);
}, Cd = (e, t, n, s) => {
  const i = e._zod.def, r = i.inclusive === !1, o = i.options.map((c, u) => J(c, t, {
    ...s,
    path: [...s.path, r ? "oneOf" : "anyOf", u]
  }));
  r ? n.oneOf = o : n.anyOf = o;
}, Ld = (e, t, n, s) => {
  const i = e._zod.def, r = J(i.left, t, {
    ...s,
    path: [...s.path, "allOf", 0]
  }), o = J(i.right, t, {
    ...s,
    path: [...s.path, "allOf", 1]
  }), c = (a) => "allOf" in a && Object.keys(a).length === 1, u = [
    ...c(r) ? r.allOf : [r],
    ...c(o) ? o.allOf : [o]
  ];
  n.allOf = u, t.intersections.push(u);
}, Md = (e, t, n, s) => {
  const i = n, r = e._zod.def;
  i.type = "array";
  const o = t.target === "draft-2020-12" ? "prefixItems" : "items", c = t.target === "draft-2020-12" || t.target === "openapi-3.0" ? "items" : "additionalItems", u = r.items.map((h, g) => J(h, t, {
    ...s,
    path: [...s.path, o, g]
  })), a = r.rest ? J(r.rest, t, {
    ...s,
    path: [...s.path, c, ...t.target === "openapi-3.0" ? [r.items.length] : []]
  }) : null;
  let l = r.items.length;
  for (; l > 0; ) {
    const h = r.items[l - 1];
    if (!(t.io === "input" ? Lt(h) !== void 0 : h._zod.optout === "optional"))
      break;
    l--;
  }
  const f = r.items.length, d = !r.rest;
  t.target === "draft-2020-12" ? (i.prefixItems = u, d ? i.items = !1 : a && (i.items = a), l > 0 && (i.minItems = l), d && (i.maxItems = f)) : t.target === "openapi-3.0" ? (i.items = {
    anyOf: u
  }, a && i.items.anyOf.push(a), l > 0 && (i.minItems = l), d && (i.maxItems = f)) : (i.items = u, d ? i.additionalItems = !1 : a && (i.additionalItems = a), l > 0 && (i.minItems = l), d && (i.maxItems = f));
  const { minimum: p, maximum: m } = oe(e);
  typeof p == "number" && (i.minItems = p), typeof m == "number" && (i.maxItems = m);
};
function ms(e, t, n) {
  if (t.$ref) {
    if (n.has(t))
      return t;
    n.add(t);
    const m = e.get(t)?.def;
    if (!m)
      return t;
    const h = ms(e, m, n);
    return h === m ? t : h;
  }
  for (const m of ["anyOf", "oneOf"]) {
    const h = t[m];
    if (!Array.isArray(h))
      continue;
    const g = h.map((b) => ms(e, b, n));
    g.some((b, v) => b !== h[v]) && (t = { ...t, [m]: g });
  }
  const s = Array.isArray(t.type) ? t.type : [t.type], i = !s.includes("string") && s.some((m) => m === "number" || m === "integer"), r = t.enum ?? (t.const !== void 0 ? [t.const] : void 0);
  if (!i && !r?.some((m) => typeof m == "number"))
    return t;
  const { minimum: o, maximum: c, exclusiveMinimum: u, exclusiveMaximum: a, multipleOf: l, format: f, id: d, ...p } = t;
  return p.enum ? p.enum = p.enum.map((m) => typeof m == "number" ? String(m) : m) : typeof p.const == "number" && (p.const = String(p.const)), i && (p.type = "string", r || (p.pattern = (s.includes("number") ? Gs : Vu).source)), p;
}
const gs = /* @__PURE__ */ new WeakMap();
function Dd(e) {
  const t = /* @__PURE__ */ new Map();
  for (const s of e.seen.values())
    s.def && !t.has(s.schema) && t.set(s.schema, s);
  const n = /* @__PURE__ */ new Map();
  for (const s of gs.get(e) ?? []) {
    const i = e.seen.get(s), r = (i?.def ?? i?.schema)?.propertyNames;
    if (!r || r === !0 || n.has(r))
      continue;
    const o = ms(t, r, /* @__PURE__ */ new Set());
    o !== r && n.set(r, o);
  }
  if (n.size)
    for (const s of e.seen.values())
      for (const i of [s.schema, s.def]) {
        const r = i && n.get(i.propertyNames);
        r && (i.propertyNames = r);
      }
}
const jd = (e, t, n, s) => {
  const i = n, r = e._zod.def;
  i.type = "object";
  const o = r.keyType, c = oe(o).patterns;
  if (r.mode === "loose" && c && c.size > 0) {
    const l = J(r.valueType, t, {
      ...s,
      path: [...s.path, "patternProperties", "*"]
    });
    i.patternProperties = {};
    for (const f of c)
      De(i.patternProperties, Fo(f).source, l);
  } else {
    if (t.target === "draft-07" || t.target === "draft-2020-12") {
      i.propertyNames = J(r.keyType, t, {
        ...s,
        path: [...s.path, "propertyNames"]
      });
      let l = gs.get(t);
      l || (l = [], gs.set(t, l), t.deferred.push(() => Dd(t))), l.push(e);
    }
    i.additionalProperties = J(r.valueType, t, {
      ...s,
      path: [...s.path, "additionalProperties"]
    });
  }
  const u = o._zod.values, a = t.io === "input" && Lt(r.valueType) !== void 0;
  if (u && !r.partial && !a) {
    const l = [...u].filter((f) => typeof f == "string" || typeof f == "number");
    l.length > 0 && (i.required = l.map(String));
  }
}, Zd = (e, t, n, s) => {
  const i = e._zod.def, r = J(i.innerType, t, s), o = t.seen.get(e);
  t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [r, { type: "null" }];
}, xd = (e, t, n, s) => {
  const i = e._zod.def;
  J(i.innerType, t, s);
  const r = t.seen.get(e);
  r.ref = i.innerType;
}, Ys = /* @__PURE__ */ Symbol();
function Ko(e, t, n, s, i) {
  let r = !1;
  const o = JSON.stringify(e, (c, u) => typeof u != "bigint" ? u : (r = !0, null));
  return r ? (Ce(t, n, s, i, "BigInt defaults cannot be represented in JSON Schema"), Ys) : JSON.parse(o);
}
const Rd = (e, t, n, s) => {
  const i = e._zod.def;
  J(i.innerType, t, s);
  const r = t.seen.get(e);
  r.ref = i.innerType;
  const o = Ko(i.defaultValue, e, t, n, s);
  o !== Ys && (n.default = o);
}, Bd = (e, t, n, s) => {
  const i = e._zod.def;
  J(i.innerType, t, s);
  const r = t.seen.get(e);
  if (r.ref = i.innerType, t.io !== "input")
    return;
  const o = Ko(i.defaultValue, e, t, n, s);
  o !== Ys && (n._prefault = o);
}, Ud = (e, t, n, s) => {
  const i = e._zod.def;
  J(i.innerType, t, s);
  const r = t.seen.get(e);
  r.ref = i.innerType;
  let o;
  try {
    o = i.catchValue(void 0);
  } catch {
    Ce(e, t, n, s, "Dynamic catch values are not supported in JSON Schema");
    return;
  }
  n.default = o;
}, Fd = (e, t, n, s) => {
  const i = e._zod.def, r = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? r ? i.out : i.in : i.out;
  J(o, t, s);
  const c = t.seen.get(e);
  c.ref = o;
}, Kd = (e, t, n, s) => {
  const i = e._zod.def;
  J(i.innerType, t, s);
  const r = t.seen.get(e);
  r.ref = i.innerType, n.readOnly = !0;
}, Go = (e, t, n, s) => {
  const i = e._zod.def;
  J(i.innerType, t, s);
  const r = t.seen.get(e);
  r.ref = i.innerType;
}, Ji = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function Xt(e, t, n) {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    get() {
      const s = n(this);
      return Object.defineProperty(this, t, { value: s, configurable: !0, writable: !0 }), s;
    },
    set(s) {
      Object.defineProperty(this, t, { value: s, configurable: !0, writable: !0 });
    }
  });
}
const Gd = (e, t) => {
  iu.init(e, t), e.name = "ZodError";
  const n = Object.getPrototypeOf(e);
  Ji.has(n) || (Ji.add(n), Xt(n, "format", (s) => (i) => cu(s, i)), Xt(n, "flatten", (s) => (i) => ou(s, i)), Xt(n, "addIssue", (s) => (i) => {
    s.issues.push(i), s.message = JSON.stringify(s.issues, ls, 2);
  }), Xt(n, "addIssues", (s) => (i) => {
    s.issues.push(...i), s.message = JSON.stringify(s.issues, ls, 2);
  }), Object.defineProperty(n, "isEmpty", {
    configurable: !0,
    enumerable: !1,
    get() {
      return this.issues.length === 0;
    }
  }));
}, le = /* @__PURE__ */ y("ZodError", Gd, void 0, {
  Parent: Error
}), Vd = /* @__PURE__ */ Bs(le), qd = /* @__PURE__ */ Us(le), Jd = /* @__PURE__ */ Fs(le), Yd = /* @__PURE__ */ Ks(le), Wd = /* @__PURE__ */ hu(le), Xd = /* @__PURE__ */ pu(le), Hd = /* @__PURE__ */ mu(le), Qd = /* @__PURE__ */ gu(le), eh = /* @__PURE__ */ yu(le), th = /* @__PURE__ */ bu(le), nh = /* @__PURE__ */ wu(le), sh = /* @__PURE__ */ _u(le);
function ih() {
  ue.localeError || be(vf());
}
function Rt() {
  ue.memoizer || be({ memoizer: bf() });
}
const F = /* @__PURE__ */ y("ZodType", (e, t) => (ih(), x.init(e, t), e.def = t, e.type = t.type, e), {
  check(...e) {
    const t = this.def;
    return this.clone(ie(t, {
      checks: [
        ...t.checks ?? [],
        ...e.map((n) => typeof n == "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n)
      ]
    }), { parent: !0 });
  },
  with(...e) {
    return this.check(...e);
  },
  clone(e, t) {
    return je(this, e, t);
  },
  brand() {
    return this;
  },
  register(e, t) {
    return e.add(this, t), this;
  },
  refine(e, t) {
    return this.check(np(e, t));
  },
  superRefine(e, t) {
    return this.check(sp(e, t));
  },
  overwrite(e) {
    return this.check(/* @__PURE__ */ _t(e));
  },
  optional() {
    return Hi(this);
  },
  exactOptional() {
    return Fh(this);
  },
  nullable() {
    return Qi(this);
  },
  nullish() {
    return Hi(Qi(this));
  },
  nonoptional(e) {
    return Yh(this, e);
  },
  array() {
    return st(this);
  },
  or(e) {
    return Xo([this, e]);
  },
  and(e) {
    return Dh(this, e);
  },
  transform(e) {
    return er(this, Uh(e));
  },
  default(e) {
    return Vh(this, e);
  },
  prefault(e) {
    return Jh(this, e);
  },
  catch(e) {
    return Xh(this, e);
  },
  pipe(e) {
    return er(this, e);
  },
  readonly() {
    return ep(this);
  },
  describe(e) {
    const t = this.clone();
    return It.add(t, { description: e }), t;
  },
  meta(...e) {
    if (e.length === 0)
      return It.get(this);
    const t = this.clone();
    return It.add(t, e[0]), t;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(e, ...t) {
    return t.length === 0 ? e(this) : e(this, ...t);
  },
  // Overrides core's `~standard` to add `jsonSchema`. Must stay a prototype entry: redefining it per instance demotes instances to dictionary mode.
  get "~standard"() {
    return lo(this, "~standard", {
      ...wo(this),
      jsonSchema: {
        input: bn(this, "input"),
        output: bn(this, "output")
      }
    });
  },
  set "~standard"(e) {
    ze(this, "~standard", e);
  },
  parse: function e(t, n) {
    return Vd(this, t, n, { callee: e });
  },
  parseAsync: async function e(t, n) {
    return await qd(this, t, n, { callee: e });
  },
  safeParse(e, t) {
    return Jd(this, e, t);
  },
  async safeParseAsync(e, t) {
    return Yd(this, e, t);
  },
  // `spa` is an alias: same function object as `safeParseAsync`, as before.
  get spa() {
    return this?.safeParseAsync;
  },
  set spa(e) {
    ze(this, "spa", e);
  },
  validate(e, t) {
    return lu(this, e, t);
  },
  validateAsync(e, t) {
    return du(this, e, t);
  },
  encode: function e(t, n) {
    return Wd(this, t, n, { callee: e });
  },
  decode: function e(t, n) {
    return Xd(this, t, n, { callee: e });
  },
  encodeAsync: async function e(t, n) {
    return await Hd(this, t, n, { callee: e });
  },
  decodeAsync: async function e(t, n) {
    return await Qd(this, t, n, { callee: e });
  },
  safeEncode(e, t) {
    return eh(this, e, t);
  },
  safeDecode(e, t) {
    return th(this, e, t);
  },
  async safeEncodeAsync(e, t) {
    return nh(this, e, t);
  },
  async safeDecodeAsync(e, t) {
    return sh(this, e, t);
  },
  toJSONSchema(e) {
    return bd(this, {})(e);
  },
  // Reads through to the registry on every access, so it must not cache.
  get description() {
    return It.get(this)?.description;
  },
  // No setter: `schema._def = x` throws, as it did when `_def` was a non-writable own property.
  get _def() {
    return this._zod.def;
  }
}), Vo = /* @__PURE__ */ y(
  "_ZodString",
  (e, t) => {
    qs.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => kd(e, n, s);
  },
  /* @__PURE__ */ fo({
    format: (e) => oe(e).format ?? null,
    minLength: (e) => oe(e).minimum ?? null,
    maxLength: (e) => oe(e).maximum ?? null
  }, {
    regex(...e) {
      return this.check(/* @__PURE__ */ nd(...e));
    },
    includes(...e) {
      return this.check(/* @__PURE__ */ rd(...e));
    },
    startsWith(...e) {
      return this.check(/* @__PURE__ */ od(...e));
    },
    endsWith(...e) {
      return this.check(/* @__PURE__ */ cd(...e));
    },
    min(...e) {
      return this.check(/* @__PURE__ */ yn(...e));
    },
    max(...e) {
      return this.check(/* @__PURE__ */ zo(...e));
    },
    length(...e) {
      return this.check(/* @__PURE__ */ Co(...e));
    },
    nonempty(...e) {
      return this.check(/* @__PURE__ */ yn(1, ...e));
    },
    lowercase(e) {
      return this.check(/* @__PURE__ */ sd(e));
    },
    uppercase(e) {
      return this.check(/* @__PURE__ */ id(e));
    },
    trim() {
      return this.check(/* @__PURE__ */ ud());
    },
    normalize(...e) {
      return this.check(/* @__PURE__ */ ad(...e));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ ld());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ fd());
    },
    slugify() {
      return this.check(/* @__PURE__ */ dd());
    }
  })
), rh = /* @__PURE__ */ y("ZodString", (e, t) => {
  qs.init(e, t), Vo.init(e, t);
}, {
  email(e) {
    return this.check(/* @__PURE__ */ $f(lh, e));
  },
  url(e) {
    return this.check(/* @__PURE__ */ Tf(dh, e));
  },
  jwt(e) {
    return this.check(/* @__PURE__ */ Vf(Nh, e));
  },
  emoji(e) {
    return this.check(/* @__PURE__ */ zf(hh, e));
  },
  guid(e) {
    return this.check(/* @__PURE__ */ If(fh, e));
  },
  uuid(e) {
    return this.check(/* @__PURE__ */ Nf(Ht, e));
  },
  uuidv4(e) {
    return this.check(/* @__PURE__ */ Pf(Ht, e));
  },
  uuidv6(e) {
    return this.check(/* @__PURE__ */ Ef(Ht, e));
  },
  uuidv7(e) {
    return this.check(/* @__PURE__ */ Af(Ht, e));
  },
  nanoid(e) {
    return this.check(/* @__PURE__ */ Cf(ph, e));
  },
  cuid(e) {
    return this.check(/* @__PURE__ */ Lf(mh, e));
  },
  cuid2(e) {
    return this.check(/* @__PURE__ */ Mf(gh, e));
  },
  ulid(e) {
    return this.check(/* @__PURE__ */ Df(yh, e));
  },
  base64(e) {
    return this.check(/* @__PURE__ */ Ff(Oh, e));
  },
  base64url(e) {
    return this.check(/* @__PURE__ */ Kf($h, e));
  },
  xid(e) {
    return this.check(/* @__PURE__ */ jf(bh, e));
  },
  ksuid(e) {
    return this.check(/* @__PURE__ */ Zf(wh, e));
  },
  ipv4(e) {
    return this.check(/* @__PURE__ */ xf(_h, e));
  },
  ipv6(e) {
    return this.check(/* @__PURE__ */ Rf(vh, e));
  },
  cidrv4(e) {
    return this.check(/* @__PURE__ */ Bf(kh, e));
  },
  cidrv6(e) {
    return this.check(/* @__PURE__ */ Uf(Sh, e));
  },
  e164(e) {
    return this.check(/* @__PURE__ */ Gf(Ih, e));
  },
  datetime(e) {
    return this.check(/* @__PURE__ */ qf(oh, e));
  },
  date(e) {
    return this.check(/* @__PURE__ */ Jf(ch, e));
  },
  time(e) {
    return this.check(/* @__PURE__ */ Yf(ah, e));
  },
  duration(e) {
    return this.check(/* @__PURE__ */ Wf(uh, e));
  }
});
function Z(e) {
  return /* @__PURE__ */ Of(rh, e);
}
const V = /* @__PURE__ */ y("ZodStringFormat", (e, t) => {
  U.init(e, t), Vo.init(e, t);
}), oh = /* @__PURE__ */ y("ZodISODateTime", (e, t) => {
  Nl.init(e, t), V.init(e, t);
}), ch = /* @__PURE__ */ y("ZodISODate", (e, t) => {
  Pl.init(e, t), V.init(e, t);
}), ah = /* @__PURE__ */ y("ZodISOTime", (e, t) => {
  El.init(e, t), V.init(e, t);
}), uh = /* @__PURE__ */ y("ZodISODuration", (e, t) => {
  Al.init(e, t), V.init(e, t);
}), lh = /* @__PURE__ */ y("ZodEmail", (e, t) => {
  hl.init(e, t), V.init(e, t);
}), fh = /* @__PURE__ */ y("ZodGUID", (e, t) => {
  fl.init(e, t), V.init(e, t);
}), Ht = /* @__PURE__ */ y("ZodUUID", (e, t) => {
  dl.init(e, t), V.init(e, t);
}), dh = /* @__PURE__ */ y("ZodURL", (e, t) => {
  wl.init(e, t), V.init(e, t);
}), hh = /* @__PURE__ */ y("ZodEmoji", (e, t) => {
  _l.init(e, t), V.init(e, t);
}), ph = /* @__PURE__ */ y("ZodNanoID", (e, t) => {
  vl.init(e, t), V.init(e, t);
}), mh = /* @__PURE__ */ y("ZodCUID", (e, t) => {
  kl.init(e, t), V.init(e, t);
}), gh = /* @__PURE__ */ y("ZodCUID2", (e, t) => {
  Sl.init(e, t), V.init(e, t);
}), yh = /* @__PURE__ */ y("ZodULID", (e, t) => {
  Ol.init(e, t), V.init(e, t);
}), bh = /* @__PURE__ */ y("ZodXID", (e, t) => {
  $l.init(e, t), V.init(e, t);
}), wh = /* @__PURE__ */ y("ZodKSUID", (e, t) => {
  Il.init(e, t), V.init(e, t);
}), _h = /* @__PURE__ */ y("ZodIPv4", (e, t) => {
  Tl.init(e, t), V.init(e, t);
}), vh = /* @__PURE__ */ y("ZodIPv6", (e, t) => {
  Cl.init(e, t), V.init(e, t);
}), kh = /* @__PURE__ */ y("ZodCIDRv4", (e, t) => {
  Ll.init(e, t), V.init(e, t);
}), Sh = /* @__PURE__ */ y("ZodCIDRv6", (e, t) => {
  Dl.init(e, t), V.init(e, t);
}), Oh = /* @__PURE__ */ y("ZodBase64", (e, t) => {
  jl.init(e, t), V.init(e, t);
}), $h = /* @__PURE__ */ y("ZodBase64URL", (e, t) => {
  xl.init(e, t), V.init(e, t);
}), Ih = /* @__PURE__ */ y("ZodE164", (e, t) => {
  Rl.init(e, t), V.init(e, t);
}), Nh = /* @__PURE__ */ y("ZodJWT", (e, t) => {
  Ul.init(e, t), V.init(e, t);
}), qo = /* @__PURE__ */ y(
  "ZodNumber",
  (e, t) => {
    $o.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => Sd(e, n, s, i), e.isFinite = !0;
  },
  /* @__PURE__ */ fo({
    minValue: (e) => {
      const { minimum: t, exclusiveMinimum: n } = oe(e);
      return Math.max(t ?? Number.NEGATIVE_INFINITY, n ?? Number.NEGATIVE_INFINITY);
    },
    maxValue: (e) => {
      const { maximum: t, exclusiveMaximum: n } = oe(e);
      return Math.min(t ?? Number.POSITIVE_INFINITY, n ?? Number.POSITIVE_INFINITY);
    },
    isInt: (e) => {
      const { isInt: t, multipleOf: n } = oe(e);
      return !!t || !!n?.some(Number.isSafeInteger);
    },
    format: (e) => oe(e).format ?? null
  }, {
    gt(e, t) {
      return this.check(/* @__PURE__ */ xi(e, t));
    },
    gte(e, t) {
      return this.check(/* @__PURE__ */ Qn(e, t));
    },
    min(e, t) {
      return this.check(/* @__PURE__ */ Qn(e, t));
    },
    lt(e, t) {
      return this.check(/* @__PURE__ */ Zi(e, t));
    },
    lte(e, t) {
      return this.check(/* @__PURE__ */ Hn(e, t));
    },
    max(e, t) {
      return this.check(/* @__PURE__ */ Hn(e, t));
    },
    int(e) {
      return this.check(Yi(e));
    },
    safe(e) {
      return this.check(Yi(e));
    },
    positive(e) {
      return this.check(/* @__PURE__ */ xi(0, e));
    },
    nonnegative(e) {
      return this.check(/* @__PURE__ */ Qn(0, e));
    },
    negative(e) {
      return this.check(/* @__PURE__ */ Zi(0, e));
    },
    nonpositive(e) {
      return this.check(/* @__PURE__ */ Hn(0, e));
    },
    multipleOf(e, t) {
      return this.check(/* @__PURE__ */ Ri(e, t));
    },
    step(e, t) {
      return this.check(/* @__PURE__ */ Ri(e, t));
    },
    finite() {
      return this;
    }
  })
);
function Jo(e) {
  return /* @__PURE__ */ Xf(qo, e);
}
const Ph = /* @__PURE__ */ y("ZodNumberFormat", (e, t) => {
  Fl.init(e, t), qo.init(e, t);
});
function Yi(e) {
  return /* @__PURE__ */ Hf(Ph, e);
}
const Eh = /* @__PURE__ */ y("ZodBoolean", (e, t) => {
  Kl.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => Od(e, n, s);
});
function Yo(e) {
  return /* @__PURE__ */ Qf(Eh, e);
}
const Ah = /* @__PURE__ */ y("ZodUnknown", (e, t) => {
  Gl.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => Id();
});
function Wi() {
  return /* @__PURE__ */ ed(Ah);
}
const Th = /* @__PURE__ */ y("ZodNever", (e, t) => {
  Vl.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => $d(e, n, s);
});
function Wo(e) {
  return /* @__PURE__ */ td(Th, e);
}
const zh = /* @__PURE__ */ y("ZodArray", (e, t) => {
  Rt(), ql.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => Td(e, n, s, i), e.element = t.element;
}, {
  min(e, t) {
    return this.check(/* @__PURE__ */ yn(e, t));
  },
  nonempty(e) {
    return this.check(/* @__PURE__ */ yn(1, e));
  },
  max(e, t) {
    return this.check(/* @__PURE__ */ zo(e, t));
  },
  length(e, t) {
    return this.check(/* @__PURE__ */ Co(e, t));
  },
  unwrap() {
    return this.element;
  }
});
function st(e, t) {
  return /* @__PURE__ */ hd(zh, e, t);
}
const Ch = /* @__PURE__ */ y("ZodObject", (e, t) => {
  Rt(), Wl.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => zd(e, n, s, i), Wa(e, "shape", (n) => n._zod.def.shape, !1);
}, {
  keyof() {
    return Xs(Object.keys(this._zod.def.shape));
  },
  catchall(e) {
    return this.clone(ie(this._zod.def, { catchall: e }));
  },
  passthrough() {
    return this.clone(ie(this._zod.def, { catchall: Wi() }));
  },
  loose() {
    return this.clone(ie(this._zod.def, { catchall: Wi() }));
  },
  strict() {
    return this.clone(ie(this._zod.def, { catchall: Wo() }));
  },
  strip() {
    return this.clone(ie(this._zod.def, { catchall: void 0 }));
  },
  extend(e) {
    return xa(this, e);
  },
  safeExtend(e) {
    return Ra(this, e);
  },
  merge(e) {
    return Ba(this, e);
  },
  pick(e) {
    return ja(this, e);
  },
  omit(e) {
    return Za(this, e);
  },
  partial(...e) {
    return yi(Hs, this, e[0]);
  },
  exactPartial(...e) {
    return yi(Ho, this, e[0], "exactPartial");
  },
  required(...e) {
    return Ua(Qo, this, e[0]);
  }
});
function Ye(e, t) {
  return new Ch({
    type: "object",
    shape: e,
    catchall: Wo(),
    ...I(t)
  });
}
const Lh = /* @__PURE__ */ y("ZodUnion", (e, t) => {
  Xl.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => Cd(e, n, s, i), e.options = t.options;
});
function Xo(e, t) {
  return new Lh({
    type: "union",
    options: e,
    ...I(t)
  });
}
const Mh = /* @__PURE__ */ y("ZodIntersection", (e, t) => {
  Hl.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => Ld(e, n, s, i);
});
function Dh(e, t) {
  return new Mh({
    type: "intersection",
    left: e,
    right: t
  });
}
const jh = /* @__PURE__ */ y("ZodTuple", (e, t) => {
  Rt(), Ql.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => Md(e, n, s, i);
}, {
  rest(e) {
    return this.clone({
      ...this._zod.def,
      rest: e
    });
  },
  partial() {
    const e = this._zod.def;
    if (e.checks?.length)
      throw new Error(".partial() cannot be used on tuple schemas containing refinements");
    return this.clone({
      ...e,
      items: e.items.map((t) => new Hs({ type: "optional", innerType: t }))
    });
  }
});
function Ws(e, t, n) {
  const s = t instanceof x, i = s ? n : t, r = s ? t : null;
  return new jh({
    type: "tuple",
    items: e,
    rest: r,
    ...I(i)
  });
}
const Xi = /* @__PURE__ */ y("ZodRecord", (e, t) => {
  Rt(), ef.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => jd(e, n, s, i), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Zh(e, t, n) {
  return !t || !t._zod ? new Xi({
    type: "record",
    keyType: Z(),
    valueType: e,
    ...I(t)
  }) : new Xi({
    type: "record",
    keyType: e,
    valueType: t,
    ...I(n)
  });
}
const ys = /* @__PURE__ */ y("ZodEnum", (e, t) => {
  tf.init(e, t), F.init(e, t), e._zod.processJSONSchema = (s, i, r) => Nd(e, s, i), e.enum = t.entries, e.options = [...e._zod.values];
  const n = new Set(Object.keys(t.entries));
  e.extract = (s, i) => {
    const r = {};
    for (const o of s)
      if (n.has(o))
        r[o] = t.entries[o];
      else
        throw new Error(`Key ${o} not found in enum`);
    return new ys({
      ...t,
      checks: [],
      ...I(i),
      entries: r
    });
  }, e.exclude = (s, i) => {
    const r = { ...t.entries };
    for (const o of s)
      if (n.has(o))
        delete r[o];
      else
        throw new Error(`Key ${o} not found in enum`);
    return new ys({
      ...t,
      checks: [],
      ...I(i),
      entries: r
    });
  };
});
function Xs(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((s) => [s, s])) : e;
  return new ys({
    type: "enum",
    entries: n,
    ...I(t)
  });
}
const xh = /* @__PURE__ */ y("ZodLiteral", (e, t) => {
  nf.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => Pd(e, n, s, i), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function Rh(e, t) {
  return new xh({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...I(t)
  });
}
const Bh = /* @__PURE__ */ y("ZodTransform", (e, t) => {
  Rt(), sf.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => Ad(e, n, s, i), e._zod.parse = (n, s) => {
    if (s.direction === "backward")
      throw new ho(e.constructor.name);
    n.addIssue = (r) => {
      if (typeof r == "string")
        n.issues.push(Ct(r, n.value, t));
      else {
        const o = r;
        o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), "input" in o || (o.input = n.value), o.inst ?? (o.inst = e), n.issues.push(Ct(o));
      }
    };
    const i = t.transform(n.value, n);
    return i instanceof Promise ? i.then((r) => (n.value = r, n)) : (n.value = i, n);
  };
});
function Uh(e) {
  return new Bh({
    type: "transform",
    transform: e
  });
}
const Hs = /* @__PURE__ */ y("ZodOptional", (e, t) => {
  Po.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => Go(e, n, s, i), e.unwrap = () => e._zod.def.innerType;
});
function Hi(e) {
  return new Hs({
    type: "optional",
    innerType: e
  });
}
const Ho = /* @__PURE__ */ y("ZodExactOptional", (e, t) => {
  rf.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => Go(e, n, s, i), e.unwrap = () => e._zod.def.innerType;
});
function Fh(e) {
  return new Ho({
    type: "optional",
    innerType: e
  });
}
const Kh = /* @__PURE__ */ y("ZodNullable", (e, t) => {
  of.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => Zd(e, n, s, i), e.unwrap = () => e._zod.def.innerType;
});
function Qi(e) {
  return new Kh({
    type: "nullable",
    innerType: e
  });
}
const Gh = /* @__PURE__ */ y("ZodDefault", (e, t) => {
  cf.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => Rd(e, n, s, i), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Vh(e, t) {
  return new Gh({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : oo(t);
    }
  });
}
const qh = /* @__PURE__ */ y("ZodPrefault", (e, t) => {
  af.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => Bd(e, n, s, i), e.unwrap = () => e._zod.def.innerType;
});
function Jh(e, t) {
  return new qh({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : oo(t);
    }
  });
}
const Qo = /* @__PURE__ */ y("ZodNonOptional", (e, t) => {
  uf.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => xd(e, n, s, i), e.unwrap = () => e._zod.def.innerType;
});
function Yh(e, t) {
  return new Qo({
    type: "nonoptional",
    innerType: e,
    ...I(t)
  });
}
const Wh = /* @__PURE__ */ y("ZodCatch", (e, t) => {
  lf.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => Ud(e, n, s, i), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Xh(e, t) {
  return new Wh({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : Ha(t)
  });
}
const Hh = /* @__PURE__ */ y("ZodPipe", (e, t) => {
  ff.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => Fd(e, n, s, i), e.in = t.in, e.out = t.out;
});
function er(e, t) {
  return new Hh({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Qh = /* @__PURE__ */ y("ZodReadonly", (e, t) => {
  df.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => Kd(e, n, s, i), e.unwrap = () => e._zod.def.innerType;
});
function ep(e) {
  return new Qh({
    type: "readonly",
    innerType: e
  });
}
const tp = /* @__PURE__ */ y("ZodCustom", (e, t) => {
  hf.init(e, t), F.init(e, t), e._zod.processJSONSchema = (n, s, i) => Ed(e, n, s, i);
});
function np(e, t = {}) {
  return /* @__PURE__ */ pd(tp, e, t);
}
function sp(e, t) {
  return /* @__PURE__ */ md(e, t);
}
const ip = 64, rp = [40, 3, 25], op = "#475569", tr = 3, cp = 90, ap = 70, up = Z().regex(/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/, "kind must be a lowercase kebab-case identifier");
class Y extends Error {
  constructor(t) {
    super(t), this.name = "DiagramParseError";
  }
}
const he = Jo().finite(), Ue = he.positive(), Qs = Z().min(1).refine((e) => !e.includes("."), { message: "Component id must not contain dots" }), lp = Qs, ei = Z().regex(/^#[0-9a-f]{6}$/i, "Color must be six-digit hex, for example #cf3740"), fp = Ws([Ue, Ue, Ue]), ti = Ws([he, he, he]), dp = Ws([he, he]);
function hp(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return !1;
  }
}
function pp(e) {
  const t = e.trim();
  if (!t || t.includes("\\")) return !1;
  const n = t.toLowerCase();
  return n.startsWith("data:") || n.startsWith("javascript:") ? !1 : /^[a-z][a-z0-9+.-]*:/i.test(t) ? n.startsWith("http://") || n.startsWith("https://") : t.startsWith("//") ? !1 : /^[\w./-]+$/.test(t);
}
const mp = Ye({
  url: Z().refine(hp, { message: "Purchase URL must use http or https" }),
  label: Z().optional(),
  partNumber: Z().optional()
}), gp = Ye({
  url: Z().refine(pp, { message: "Model URL must be a safe http(s) or relative path" }),
  scale: Ue,
  rotation: ti.optional()
}), yp = Ye({
  id: lp,
  number: he.int().positive().optional(),
  gpio: he.int().nonnegative().optional(),
  label: Z().optional(),
  side: Xs(["left", "right"]).optional(),
  position: ti.optional(),
  voltage: he.optional()
}), bp = Ye({
  id: Qs,
  label: Z().min(1),
  kind: up.optional(),
  pinout: Xs(["esp32-devkit-38", "raspberry-pi-40", "raspberry-pi-pico", "jetson-nano", "jetson-orin-nano"]).optional(),
  group: Z().optional(),
  notes: Z().optional(),
  dimensions: fp.optional(),
  position: ti.optional(),
  schematic: dp.optional(),
  color: ei.optional(),
  pins: st(yp).default([]),
  properties: Zh(Z(), Xo([Z(), Jo(), Yo()])).optional(),
  model: gp.optional(),
  purchase: mp.optional(),
  quantity: Ue.int().optional()
}), wp = Ye({
  id: Qs,
  from: Z().min(1),
  to: Z().min(1),
  color: ei.optional(),
  label: Z().optional(),
  net: Z().optional(),
  voltage: he.optional(),
  lengthMm: Ue.optional(),
  diameterMm: Ue.optional(),
  gaugeAwg: he.int().min(0).max(40).optional(),
  notes: Z().optional(),
  dashed: Yo().optional()
}), _p = Ye({
  id: Z().min(1),
  label: Z().min(1),
  color: ei.optional(),
  notes: Z().optional()
}), vp = Ye({
  version: Rh(1),
  title: Z().min(1),
  description: Z().optional(),
  groups: st(_p).optional(),
  components: st(bp).default([]),
  wires: st(wp).default([]),
  notes: st(Z()).optional()
});
function kp(e) {
  const t = e % tr, n = Math.floor(e / tr);
  return [t * cp, 0, n * ap];
}
function ec(e) {
  const t = e.lastIndexOf(".");
  return t <= 0 || t === e.length - 1 ? null : { componentId: e.slice(0, t), pinId: e.slice(t + 1) };
}
function Sp(e) {
  const t = /* @__PURE__ */ new Set();
  for (const i of e.components) {
    if (t.has(i.id))
      throw new Y(`Duplicate id: ${i.id}`);
    t.add(i.id);
    const r = /* @__PURE__ */ new Set();
    for (const o of i.pins) {
      if (r.has(o.id))
        throw new Y(`Duplicate pin id ${o.id} on component ${i.id}`);
      r.add(o.id);
    }
  }
  for (const i of e.wires) {
    if (t.has(i.id))
      throw new Y(`Duplicate id: ${i.id}`);
    t.add(i.id);
  }
  const n = /* @__PURE__ */ new Set();
  for (const i of e.groups ?? []) {
    if (n.has(i.id))
      throw new Y(`Duplicate group id: ${i.id}`);
    n.add(i.id);
  }
  const s = new Map(e.components.map((i) => [i.id, i]));
  for (const i of e.components)
    if (i.group && !n.has(i.group))
      throw new Y(`Unknown group ${i.group} referenced by component ${i.id}`);
  for (const i of e.wires)
    for (const r of [i.from, i.to]) {
      const o = ec(r);
      if (!o)
        throw new Y(`Invalid wire endpoint ${r}`);
      const c = s.get(o.componentId);
      if (!c)
        throw new Y(`Unknown component in endpoint ${r}`);
      if (!c.pins.some((u) => u.id === o.pinId))
        throw new Y(`Unknown pin in endpoint ${r}`);
    }
}
function Op(e, t) {
  e.forEach((n, s) => {
    const i = Dt(n), r = rr(n);
    if (n.pinout && r && n.pinout !== r)
      throw new Y(`Pinout ${n.pinout} does not match component ${n.id} (${r})`);
    const o = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
    for (const [u, a] of n.pins.entries()) {
      if (i) {
        const l = vs(i, a.id), f = a.number === void 0 ? void 0 : i.contacts.find((h) => h.number === a.number), d = a.gpio === void 0 ? void 0 : i.contacts.find((h) => h.gpio === a.gpio);
        if (a.number !== void 0 && !f || a.gpio !== void 0 && !d || ri(a.id) && !l)
          throw new Y(`Unknown pin number or GPIO on ${n.id}.${a.id} (${i.id})`);
        const p = [f, d, ri(a.id) ? l : void 0].filter(Boolean);
        if (p.some((h) => h.number !== p[0].number))
          throw new Y(`Conflicting pin number and GPIO on ${n.id}.${a.id}`);
        const m = f ?? d ?? l;
        if (m && l && m.number !== l.number && m.name !== l.name)
          throw new Y(`Conflicting named pin and number/GPIO on ${n.id}.${a.id}`);
        m && (a.number = m.number, a.gpio = m.gpio, a.label ??= m.name, t[s].pins[u].side || (a.side = or(i, m.number)));
      } else if ((a.number !== void 0 || a.gpio !== void 0) && !a.position)
        throw new Y(`Numbered pin ${n.id}.${a.id} needs a pinout or explicit position`);
      if (a.number !== void 0 && o.has(a.number) || a.gpio !== void 0 && c.has(a.gpio))
        throw new Y(`Duplicate physical pin or GPIO on ${n.id}.${a.id}; use one pin definition and reference its aliases`);
      a.number !== void 0 && o.add(a.number), a.gpio !== void 0 && c.add(a.gpio);
    }
  });
}
function nr(e, t) {
  const n = ec(t);
  if (!n) return t;
  const s = e.find((f) => f.id === n.componentId);
  if (!s || s.pins.find((f) => f.id === n.pinId)) return t;
  const r = Dt(s), o = r ? vs(r, n.pinId) : void 0, c = n.pinId.match(/^(?:PIN)?(\d+)$/i), u = n.pinId.match(/^(?:GPIO|IO|GP|BCM)(\d+)$/i), a = s.pins.find((f) => o ? f.number === o.number : c && f.number === Number(c[1]) || u && f.gpio === Number(u[1]));
  if (a) return `${s.id}.${a.id}`;
  if (!o || !r) return t;
  const l = {
    id: `PIN${o.number}`,
    number: o.number,
    gpio: o.gpio,
    label: o.name,
    side: or(r, o.number)
  };
  return s.pins.push(l), `${s.id}.${l.id}`;
}
function $p(e) {
  const t = e.components.map((s, i) => ({
    id: s.id,
    label: s.label,
    kind: s.kind ?? "board",
    pinout: s.pinout,
    group: s.group,
    notes: s.notes,
    dimensions: s.dimensions ?? yc(s) ?? [...rp],
    position: s.position ?? kp(i),
    schematic: s.schematic,
    color: s.color,
    pins: s.pins.map((r) => ({
      id: r.id,
      number: r.number,
      gpio: r.gpio,
      label: r.label,
      side: r.side ?? "left",
      position: r.position,
      voltage: r.voltage
    })),
    properties: s.properties,
    model: s.model,
    purchase: s.purchase,
    quantity: s.quantity ?? 1
  }));
  Op(t, e.components);
  const n = e.wires.map((s) => ({
    id: s.id,
    from: nr(t, s.from),
    to: nr(t, s.to),
    color: s.color ?? op,
    label: s.label,
    net: s.net,
    voltage: s.voltage,
    lengthMm: s.lengthMm,
    diameterMm: s.diameterMm,
    gaugeAwg: s.gaugeAwg,
    notes: s.notes,
    dashed: s.dashed
  }));
  return Sp({ ...e, components: t, wires: n }), {
    version: 1,
    title: e.title,
    description: e.description,
    groups: e.groups ?? [],
    components: t,
    wires: n,
    notes: e.notes ?? []
  };
}
function Ip(e) {
  try {
    return Ia.parse(e, { maxAliasCount: ip });
  } catch (t) {
    const n = t instanceof Error ? t.message : String(t);
    throw /alias/i.test(n) ? new Y("YAML alias limit exceeded") : new Y(`Invalid YAML: ${n}`);
  }
}
function sr(e) {
  const t = vp.safeParse(e);
  if (!t.success) {
    const n = t.error.issues[0], s = n.path.length ? `${n.path.join(".")}: ` : "";
    throw new Y(`${s}${n.message}`);
  }
  return $p(t.data);
}
function ir(e) {
  return sr(typeof e == "string" ? Ip(e) : e);
}
function am(e) {
  return e.components.map((t) => ({
    componentId: t.id,
    label: t.label,
    kind: t.kind,
    quantity: t.quantity,
    partNumber: t.purchase?.partNumber,
    purchaseUrl: t.purchase?.url,
    purchaseLabel: t.purchase?.label,
    group: t.group
  }));
}
const bs = 230, Mt = 28, ni = 22, it = 24, ws = 3, Np = 90, Pp = 50, Ne = 18, _s = 38, Pe = 16, tc = 8, Qt = 40;
function te(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function nc(e) {
  const t = [], n = [];
  for (const s of e.pins)
    s.side === "left" ? t.push(s) : n.push(s);
  return { left: t, right: n };
}
function sc(e) {
  const { left: t, right: n } = nc(e), s = Math.max(t.length, n.length, 1);
  return ni + Mt + s * it + Mt / 2;
}
const ic = ni + Mt + it + Mt / 2;
function Ep(e) {
  const t = [];
  return e.forEach((n, s) => {
    if (n.schematic) return;
    const i = Math.floor(s / ws);
    t[i] = Math.max(t[i] ?? ic, sc(n));
  }), t;
}
function Ap(e, t) {
  const n = e % ws, s = Math.floor(e / ws);
  let i = 0;
  for (let r = 0; r < s; r += 1)
    i += (t[r] ?? ic) + Pp;
  return [n * (bs + Np), i];
}
function Tp(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = Ep(e.components), i = e.components.map((a, l) => {
    const [f, d] = a.schematic ?? Ap(l, s), p = sc(a), { left: m, right: h } = nc(a), g = [], b = d + ni + Mt;
    m.forEach((S, O) => {
      const _ = {
        componentId: a.id,
        pin: S,
        x: f,
        y: b + O * it + it / 2,
        side: "left"
      };
      g.push(_), t.set(`${a.id}.${S.id}`, _);
    }), h.forEach((S, O) => {
      const _ = {
        componentId: a.id,
        pin: S,
        x: f + bs,
        y: b + O * it + it / 2,
        side: "right"
      };
      g.push(_), t.set(`${a.id}.${S.id}`, _);
    });
    const v = { component: a, x: f, y: d, width: bs, height: p, pins: g };
    return n.set(a.id, v), v;
  });
  let r = 1 / 0, o = 1 / 0, c = -1 / 0, u = -1 / 0;
  for (const a of i)
    r = Math.min(r, a.x), o = Math.min(o, a.y), c = Math.max(c, a.x + a.width), u = Math.max(u, a.y + a.height);
  return Number.isFinite(r) || (r = 0, o = 0, c = 320, u = 240), r -= Qt, o -= Qt, c += Qt, u += Qt, {
    components: i,
    minX: r,
    minY: o,
    width: c - r,
    height: u - o,
    pinByEndpoint: t,
    layoutByComponentId: n
  };
}
function zp(e, t) {
  let { minX: n, minY: s, width: i, height: r } = t, o = n + i, c = s + r;
  if (!e.groups.length) return { minX: n, minY: s, maxX: o, maxY: c };
  const u = /* @__PURE__ */ new Map();
  for (const a of t.components) {
    const l = a.component.group;
    if (!l) continue;
    const f = u.get(l) ?? [];
    f.push(a), u.set(l, f);
  }
  for (const a of e.groups) {
    const l = u.get(a.id);
    if (!l?.length) continue;
    let f = 1 / 0, d = 1 / 0, p = -1 / 0, m = -1 / 0;
    for (const h of l)
      f = Math.min(f, h.x), d = Math.min(d, h.y), p = Math.max(p, h.x + h.width), m = Math.max(m, h.y + h.height);
    n = Math.min(n, f - Ne), s = Math.min(s, d - Ne - _s), o = Math.max(o, p + Ne), c = Math.max(c, m + Ne);
  }
  return { minX: n, minY: s, maxX: o, maxY: c };
}
function Cp(e, t) {
  if (!e.groups.length) return "";
  const n = /* @__PURE__ */ new Map();
  for (const i of t.components) {
    const r = i.component.group;
    if (!r) continue;
    const o = n.get(r) ?? [];
    o.push(i), n.set(r, o);
  }
  const s = [];
  for (const i of e.groups) {
    const r = n.get(i.id);
    if (!r?.length) continue;
    let o = 1 / 0, c = 1 / 0, u = -1 / 0, a = -1 / 0;
    for (const h of r)
      o = Math.min(o, h.x), c = Math.min(c, h.y), u = Math.max(u, h.x + h.width), a = Math.max(a, h.y + h.height);
    const l = i.color ?? "#94a3b8", f = o - Ne, d = c - Ne - _s, p = u - o + Ne * 2, m = a - c + Ne * 2 + _s;
    s.push(
      `<rect x="${f}" y="${d}" width="${p}" height="${m}" rx="14" fill="${te(l)}" fill-opacity="0.14" stroke="${te(l)}" stroke-opacity="0.35" data-group="${te(i.id)}" />`,
      `<text x="${f + 12}" y="${d + 26}" class="wd-group-label">${te(i.label)}</text>`
    );
  }
  return s.join("");
}
function Lp(e, t) {
  if (e.side === t.side) return !0;
  const n = e.x + (e.side === "left" ? -Pe : Pe), s = t.x + (t.side === "left" ? -Pe : Pe);
  return e.side === "right" && t.side === "left" && s <= n || e.side === "left" && t.side === "right" && s <= n;
}
function Mp(e, t, n) {
  return Math.max(e.y + e.height, t.y + t.height) + 20 + n * tc;
}
function rc(e, t, n, s, i) {
  const r = e.x, o = e.y, c = t.x, u = t.y, a = r + (e.side === "left" ? -Pe : Pe), l = c + (t.side === "left" ? -Pe : Pe);
  if (Lp(e, t)) {
    const p = Mp(n, s, i);
    return `M ${r} ${o} H ${a} V ${p} H ${l} V ${u} H ${c}`;
  }
  const f = i * tc;
  if (Math.abs(o - u) < 0.5)
    return `M ${r} ${o} H ${a} H ${l} H ${c}`;
  const d = (o + u) / 2 + f;
  return `M ${r} ${o} H ${a} V ${d} H ${l} V ${u} H ${c}`;
}
function Dp(e) {
  const t = [];
  let n = 0, s = 0;
  const i = e.match(/[MHV][^MHV]*/g);
  if (!i) return null;
  for (const c of i) {
    const u = c[0], a = c.slice(1).trim().split(/\s+/).map(Number).filter((l) => !Number.isNaN(l));
    u === "M" && a.length >= 2 ? (n = a[0], s = a[1], t.push([n, s])) : u === "H" && a.length >= 1 ? (n = a[a.length - 1], t.push([n, s])) : u === "V" && a.length >= 1 && (s = a[a.length - 1], t.push([n, s]));
  }
  if (!t.length) return null;
  const r = t.map(([c]) => c), o = t.map(([, c]) => c);
  return [(Math.min(...r) + Math.max(...r)) / 2, (Math.min(...o) + Math.max(...o)) / 2];
}
function jp(e, t) {
  const { component: n, x: s, y: i, width: r, height: o } = e, c = n.color ?? "#f8fafc", u = t ? ` tabindex="0" role="button" aria-label="${te(n.label)}" data-kind="component" data-id="${te(n.id)}" class="wd-focusable wd-component"` : "", a = `<text x="${s + r / 2}" y="${i + 16}" text-anchor="middle" class="wd-component-title">${te(n.label)}</text>`, l = `<rect x="${s}" y="${i}" width="${r}" height="${o}" rx="10" fill="${te(c)}" stroke="#334155" stroke-width="1.5"${u} />`, f = e.pins.map((d) => {
    const p = ns(d.pin), m = d.x, h = d.side === "left" ? "start" : "end", g = d.side === "left" ? d.x + 10 : d.x - 10;
    return [
      `<circle cx="${m}" cy="${d.y}" r="4" fill="#0f172a" />`,
      `<text x="${g}" y="${d.y + 4}" text-anchor="${h}" class="wd-pin-label">${te(p)}</text>`
    ].join("");
  });
  return `${l}${a}${f.join("")}`;
}
function Zp(e, t, n) {
  const s = [];
  return e.wires.forEach((i, r) => {
    const o = t.pinByEndpoint.get(i.from), c = t.pinByEndpoint.get(i.to);
    if (!o || !c) return;
    const u = t.layoutByComponentId.get(o.componentId), a = t.layoutByComponentId.get(c.componentId);
    if (!u || !a) return;
    const l = rc(o, c, u, a, r), f = i.dashed ? ' stroke-dasharray="8 6"' : "", d = n ? ` tabindex="0" role="button" aria-label="${te(i.label || `${i.from} to ${i.to}`)}" data-kind="wire" data-id="${te(i.id)}" class="wd-focusable wd-wire"` : "";
    if (s.push(
      `<path d="${l}" fill="none" stroke="${te(i.color)}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"${f}${d} />`
    ), i.label) {
      const p = Dp(l);
      if (p) {
        const [m, h] = p;
        s.push(`<text x="${m}" y="${h - 6}" text-anchor="middle" class="wd-wire-label">${te(i.label)}</text>`);
      }
    }
  }), s.join("");
}
function xp() {
  return `<style>
    .wd-schematic { font-family: system-ui, -apple-system, Segoe UI, sans-serif; background: #f1f5f9; }
    .wd-component-title, .wd-pin-label, .wd-wire-label, .wd-group-label { pointer-events: none; }
    .wd-component-title { font-size: 13px; font-weight: 700; fill: #0f172a; }
    .wd-pin-label { font-size: 11px; font-weight: 600; fill: #1e293b; paint-order: stroke fill; stroke: #f8fafc; stroke-width: 3px; }
    .wd-wire-label { font-size: 10px; fill: #334155; font-weight: 700; paint-order: stroke fill; stroke: #f1f5f9; stroke-width: 3px; }
    .wd-group-label { font-size: 12px; fill: #334155; font-weight: 700; }
    .wd-focusable { cursor: pointer; outline: none; }
    .wd-focusable:focus { stroke: #2563eb; stroke-width: 3; }
    .wd-component.wd-selected { stroke: #2563eb; stroke-width: 3; }
    .wd-wire.wd-selected { stroke-width: 4; filter: drop-shadow(0 0 2px #2563eb); }
    .wd-component.wd-hovered:not(.wd-selected) { stroke: #64748b; stroke-width: 2.5; }
    .wd-wire.wd-hovered:not(.wd-selected) { stroke-width: 3.5; opacity: 0.92; }
  </style>`;
}
function oc(e, t) {
  const n = Tp(e), s = zp(e, n);
  e.wires.forEach((u, a) => {
    const l = n.pinByEndpoint.get(u.from), f = n.pinByEndpoint.get(u.to);
    if (!l || !f) return;
    const d = n.layoutByComponentId.get(l.componentId), p = n.layoutByComponentId.get(f.componentId), m = rc(l, f, d, p, a);
    for (const h of m.match(/[MHV][^MHV]*/g) || []) {
      const g = h.slice(1).trim().split(/\s+/).map(Number);
      (h[0] === "H" || h[0] === "M") && (s.minX = Math.min(s.minX, g[0] - 20), s.maxX = Math.max(s.maxX, g[0] + 20));
      const b = h[0] === "M" ? g[1] : h[0] === "V" ? g[0] : void 0;
      b !== void 0 && (s.minY = Math.min(s.minY, b - 20), s.maxY = Math.max(s.maxY, b + 20));
    }
  });
  const i = `${s.minX} ${s.minY} ${s.maxX - s.minX} ${s.maxY - s.minY}`, r = Cp(e, n), o = n.components.map((u) => jp(u, t)).join(""), c = Zp(e, n, t);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${i}" class="wd-schematic" role="img" aria-label="${te(e.title)}">
${xp()}
<rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}" fill="#f1f5f9" />
<g class="wd-layer-groups">${r}</g>
<g class="wd-layer-wires">${c}</g>
<g class="wd-layer-components">${o}</g>
</svg>`;
}
function Rp(e) {
  return oc(e, !1);
}
function Bp(e, t, n) {
  const s = e.getBoundingClientRect(), i = e.viewBox.baseVal;
  if (s.width <= 0 || s.height <= 0 || i.width <= 0 || i.height <= 0) return null;
  const r = Math.min(s.width / i.width, s.height / i.height), o = (s.width - i.width * r) / 2, c = (s.height - i.height * r) / 2;
  return {
    x: i.x + (t - s.left - o) / r,
    y: i.y + (n - s.top - c) / r
  };
}
function Up(e, t, n) {
  e.innerHTML = oc(t, !0);
  const s = e.querySelector("svg"), i = document.createElement("div");
  i.style.width = "100%", i.style.height = "100%", i.style.overflow = "hidden", i.style.position = "relative", i.style.background = "#f1f5f9", i.style.touchAction = "none", s && (s.style.display = "block", s.style.width = "100%", s.style.height = "100%", e.replaceChildren(i), i.appendChild(s));
  const r = document.createElementNS("http://www.w3.org/2000/svg", "g");
  for (; s && s.childNodes.length > 0; )
    r.appendChild(s.firstChild);
  s?.appendChild(r);
  let o = null, c = null, u = 1, a = 0, l = 0, f = !1, d = 0, p = 0, m = 0, h = 0;
  const g = () => {
    r.setAttribute("transform", `translate(${a} ${l}) scale(${u})`);
  }, b = () => {
    e.querySelectorAll("[data-id]").forEach((P) => {
      const z = P.getAttribute("data-id");
      P.classList.toggle("wd-selected", z === o), P.classList.toggle("wd-hovered", z === c && z !== o);
    });
  }, v = (N) => {
    o = N, b(), n.onSelect(N);
  }, S = (N) => {
    c = N, b(), n.onHover(N);
  }, O = (N) => {
    let P = N;
    for (; P && P !== e; ) {
      const z = P.getAttribute?.("data-id");
      if (z) return z;
      P = P.parentElement;
    }
    return null;
  }, _ = (N) => {
    const P = O(N.target);
    if (P) {
      v(P);
      return;
    }
    f = !0, d = N.clientX, p = N.clientY, m = a, h = l, i.setPointerCapture(N.pointerId);
  }, w = (N) => {
    if (f) {
      const P = s.getBoundingClientRect(), z = s.viewBox.baseVal, vt = Math.max(z.width / P.width, z.height / P.height);
      a = m + (N.clientX - d) * vt, l = h + (N.clientY - p) * vt, g();
      return;
    }
    S(O(N.target));
  }, $ = (N) => {
    f = !1, i.hasPointerCapture(N.pointerId) && i.releasePointerCapture(N.pointerId);
  }, k = () => {
    f || S(null);
  }, A = (N) => {
    N.preventDefault();
    const P = Math.min(4, Math.max(0.35, u * (N.deltaY > 0 ? 0.9 : 1.1)));
    if (P !== u) {
      if (s) {
        const z = Bp(s, N.clientX, N.clientY);
        z && (a = z.x - (z.x - a) / u * P, l = z.y - (z.y - l) / u * P);
      }
      u = P, g();
    }
  }, D = (N) => {
    const z = N.target?.getAttribute?.("data-id");
    z && (N.key === "Enter" || N.key === " ") && (N.preventDefault(), v(z));
  };
  return i.addEventListener("pointerdown", _), i.addEventListener("pointermove", w), i.addEventListener("pointerup", $), i.addEventListener("pointercancel", $), i.addEventListener("pointerleave", k), i.addEventListener("wheel", A, { passive: !1 }), e.addEventListener("keydown", D), g(), b(), {
    select(N) {
      o = N, b();
    },
    reset() {
      u = 1, a = 0, l = 0, g();
    },
    destroy() {
      i.removeEventListener("pointerdown", _), i.removeEventListener("pointermove", w), i.removeEventListener("pointerup", $), i.removeEventListener("pointercancel", $), i.removeEventListener("pointerleave", k), i.removeEventListener("wheel", A), e.removeEventListener("keydown", D), e.replaceChildren();
    }
  };
}
const um = [
  "board",
  "esp32",
  "hx711",
  "load-cell",
  "probe",
  "resistor",
  "power",
  "max4466",
  "max9814",
  "ds18b20",
  "lcd1602",
  "lcd2004",
  "raspberry-pi",
  "barrel-jack",
  "jst-connector",
  "jetson-nano",
  "jetson-orin-nano",
  "stepper-motor",
  "stepper-driver",
  "led",
  "status-led",
  "arduino-uno"
];
function lm(e, t, n = "#888888") {
  try {
    return new e.Color(t);
  } catch {
    return new e.Color(n);
  }
}
function cn(e, t, n, s, i, r) {
  const o = new e.Mesh(n, s);
  return o.castShadow = !0, o.receiveShadow = !0, i && o.position.set(i[0], i[1], i[2]), r && o.rotation.set(r[0], r[1], r[2]), t.add(o), o;
}
const ht = 2.54, Dn = 8.4, cc = 0.2, Fp = 1.2, es = 0.64, Kp = 0.45;
function Gp(e) {
  return {
    // Metalness stays moderate: this scene has no environment map, so 0.9 silver/gold goes black.
    housing: new e.MeshStandardMaterial({ color: "#151515", roughness: 0.72, metalness: 0.04 }),
    pin: new e.MeshStandardMaterial({ color: "#d7c089", roughness: 0.32, metalness: 0.55 }),
    well: new e.MeshStandardMaterial({ color: "#0b0b0b", roughness: 0.78, metalness: 0.08 })
  };
}
function ac(e, t = ht) {
  return -((e - 1) * t) / 2;
}
function Vp(e, t, n = ht) {
  const s = Math.max(0, Math.min(t - 1, e));
  return ac(t, n) + s * n;
}
function fm(e, t, n = ht) {
  return Math.max(0, Math.min(t - 1, Math.round((e - ac(t, n)) / n)));
}
function qp(e, t, n = ht) {
  return t === 1 ? 0 : (e <= 0 ? -0.5 : 0.5) * n;
}
function uc(e, t = Dn) {
  return e - cc + t;
}
function Jp(e, t = Dn) {
  return e - cc + t / 2;
}
function Yp(e, t = "male", n = Dn) {
  const s = uc(e, n);
  return t === "female" ? s - Kp : s + Fp;
}
function Wp(e, t, n, s, i, r) {
  const o = Vp(s, i), c = qp(n, r);
  return t === "x" ? { x: e[0] + o, z: e[2] + c } : { x: e[0] + c, z: e[2] + o };
}
function dm(e, t, n, s) {
  const i = Math.max(1, Math.floor(s.columns)), r = s.rows ?? 1, o = s.along ?? "x", c = s.contact ?? "male", u = s.heightMm ?? Dn, a = s.look ?? Gp(e), l = [], f = i * ht, d = r * ht, p = o === "x" ? [f, u, d] : [d, u, f], m = Jp(s.pcbTopY, u), h = cn(
    e,
    t,
    new e.BoxGeometry(p[0], p[1], p[2]),
    a.housing,
    [s.center[0], m, s.center[2]]
  );
  h.name = s.housingName ?? `${s.namePrefix}-housing`, h.userData = { kind: `${s.namePrefix}-housing`, columns: i, rows: r, contact: c }, n.push(h), l.push(h);
  const g = Yp(s.pcbTopY, c, u), b = s.pinBottomY ?? -Math.abs(s.pcbTopY) - 0.5, v = Math.max(g - b, es), S = (g + b) / 2, O = a.well ?? a.housing, _ = uc(s.pcbTopY, u);
  for (let w = 0; w < r; w += 1)
    for (let $ = 0; $ < i; $ += 1) {
      const { x: k, z: A } = Wp(s.center, o, w, $, i, r), D = cn(
        e,
        t,
        new e.BoxGeometry(es, v, es),
        a.pin,
        [k, S, A]
      );
      if (D.name = s.pinName?.(w, $) ?? `${s.namePrefix}-pin:${w}:${$}`, D.userData = s.pinUserData?.(w, $) ?? {
        kind: `${s.namePrefix}-pin`,
        row: w,
        column: $
      }, n.push(D), l.push(D), c !== "female") continue;
      const N = cn(
        e,
        t,
        new e.BoxGeometry(1.15, 0.8, 1.15),
        O,
        [k, _ - 0.25, A]
      );
      N.name = `${s.namePrefix}-well:${w}:${$}`, N.userData = { kind: `${s.namePrefix}-well`, row: w, column: $ }, n.push(N), l.push(N);
    }
  return l;
}
const Xp = { depth: 14, width: 14.5, height: 7 }, Hp = { depth: 16.5, width: 14.8, height: 15.8 }, we = { depth: 7.5, width: 9, height: 3.2 }, _e = { depth: 5.6, width: 7.8, height: 2.6 }, me = { depth: 16.3, width: 12, height: 10.9 };
function jn(e, t) {
  return {
    shell: new e.MeshStandardMaterial({ color: "#d8dee6", roughness: 0.38, metalness: 0.42 }),
    cavity: new e.MeshStandardMaterial({ color: "#14161a", roughness: 0.72, metalness: 0.12 }),
    tongue: new e.MeshStandardMaterial({ color: t, roughness: 0.48, metalness: 0.18 })
  };
}
function Qp(e = 2) {
  return e === 3 ? "#2f5aa8" : "#1a1a1a";
}
function re(e, t, n, s) {
  return s === "+x" || s === "-x" ? [e, t, n] : [n, t, e];
}
function em(e, t) {
  return e === "+x" ? [t, 0, 0] : e === "-x" ? [-t, 0, 0] : e === "+z" ? [0, 0, t] : [0, 0, -t];
}
function Le(e, t) {
  return [e[0] + t[0], e[1] + t[1], e[2] + t[2]];
}
function tm(e, t) {
  return t === "+x" || t === "-x" ? e[0] : e[2];
}
function Ge(e, t, n, s, i, r, o, c, u) {
  const a = cn(e, t, i, r, o);
  return a.name = c, a.userData = u, n.push(a), s.push(a), a;
}
function Zn(e, t, n, s, i) {
  Ge(
    e,
    t,
    n,
    s,
    new e.BoxGeometry(i.cavitySize[0], i.cavitySize[1], i.cavitySize[2]),
    i.look.cavity,
    i.cavityPos,
    `${i.namePrefix}:cavity:${i.index}`,
    { kind: "usb-cavity", index: i.index }
  ), Ge(
    e,
    t,
    n,
    s,
    new e.BoxGeometry(i.tongueSize[0], i.tongueSize[1], i.tongueSize[2]),
    i.look.tongue,
    i.tonguePos,
    `${i.namePrefix}:tongue:${i.index}`,
    { kind: "usb-tongue", index: i.index }
  );
}
function Me(e, t, n, s = 0.35) {
  const r = tm(e, n) / 2 - t / 2 + s;
  return em(n, r);
}
function hm(e, t, n, s) {
  const i = s.stacked === !0, r = s.generation ?? 2, o = i ? Hp : Xp, c = s.look ?? jn(e, Qp(r)), u = [], a = re(o.depth, o.height, o.width, s.facing);
  Ge(
    e,
    t,
    n,
    u,
    new e.BoxGeometry(a[0], a[1], a[2]),
    c.shell,
    s.position,
    s.namePrefix,
    { kind: "usb-a", stacked: i, generation: r }
  );
  const l = i ? 2 : 1, f = i ? o.height * 0.32 : o.height * 0.52, d = o.width * 0.58, p = o.depth * 0.5, m = 1.1, h = o.width * 0.42, g = o.depth * 0.38;
  for (let _ = 0; _ < l; _ += 1) {
    const w = i ? _ === 0 ? -o.height * 0.22 : o.height * 0.22 : 0, $ = re(p, f, d, s.facing), k = re(g, m, h, s.facing), A = [s.position[0], s.position[1] + w, s.position[2]], D = Le(A, Me(a, p, s.facing)), N = w - f * 0.22, P = [s.position[0], s.position[1] + N, s.position[2]], z = Le(P, Me(a, g, s.facing, 0.15));
    Zn(e, t, n, u, {
      cavitySize: $,
      cavityPos: D,
      tongueSize: k,
      tonguePos: z,
      look: c,
      namePrefix: s.namePrefix,
      index: _
    });
  }
  const v = re(o.depth * 0.72, 0.7, o.width * 0.72, s.facing), S = s.position[1] + o.height / 2, O = Ge(
    e,
    t,
    n,
    u,
    new e.BoxGeometry(v[0], v[1], v[2]),
    c.tongue,
    [s.position[0], S, s.position[2]],
    `${s.namePrefix}:cap`,
    { kind: "usb-cap", generation: r }
  );
  return O.receiveShadow = !1, u;
}
function pm(e, t, n, s) {
  const i = s.look ?? jn(e, "#d8dde3"), r = [], o = re(we.depth, we.height, we.width, s.facing);
  Ge(
    e,
    t,
    n,
    r,
    new e.BoxGeometry(o[0], o[1], o[2]),
    i.shell,
    s.position,
    s.namePrefix,
    { kind: "usb-c" }
  );
  const c = we.depth * 0.7, u = re(c, we.height * 0.55, we.width * 0.78, s.facing), a = re(we.depth * 0.5, 0.45, we.width * 0.62, s.facing);
  return Zn(e, t, n, r, {
    cavitySize: u,
    cavityPos: Le(s.position, Me(o, c, s.facing)),
    tongueSize: a,
    tonguePos: Le(s.position, Me(o, we.depth * 0.5, s.facing, 0.12)),
    look: i,
    namePrefix: s.namePrefix,
    index: 0
  }), r;
}
function mm(e, t, n, s) {
  const i = s.look ?? jn(e, "#d8dde3"), r = [], o = re(_e.depth, _e.height, _e.width, s.facing);
  Ge(
    e,
    t,
    n,
    r,
    new e.BoxGeometry(o[0], o[1], o[2]),
    i.shell,
    s.position,
    s.namePrefix,
    { kind: "micro-usb" }
  );
  const c = _e.depth * 0.68, u = re(c, _e.height * 0.58, _e.width * 0.72, s.facing), a = re(_e.depth * 0.48, 0.4, _e.width * 0.5, s.facing);
  return Zn(e, t, n, r, {
    cavitySize: u,
    cavityPos: Le(s.position, Me(o, c, s.facing)),
    tongueSize: a,
    tonguePos: Le(s.position, Me(o, _e.depth * 0.48, s.facing, 0.1)),
    look: i,
    namePrefix: s.namePrefix,
    index: 0
  }), r;
}
function gm(e, t, n, s) {
  const i = s.look ?? jn(e, "#d8dde3"), r = [], o = re(me.depth, me.height, me.width, s.facing);
  Ge(
    e,
    t,
    n,
    r,
    new e.BoxGeometry(o[0], o[1], o[2]),
    i.shell,
    s.position,
    s.namePrefix,
    { kind: "usb-b" }
  );
  const c = me.depth * 0.62, u = re(c, me.height * 0.62, me.width * 0.7, s.facing), a = re(me.depth * 0.42, me.height * 0.28, me.width * 0.38, s.facing);
  return Zn(e, t, n, r, {
    cavitySize: u,
    cavityPos: Le(s.position, Me(o, c, s.facing)),
    tongueSize: a,
    tonguePos: Le(s.position, Me(o, me.depth * 0.42, s.facing, 0.12)),
    look: i,
    namePrefix: s.namePrefix,
    index: 0
  }), r;
}
const xn = /* @__PURE__ */ new Map();
let lc;
function ym(e) {
  if (!e.kind)
    throw new Error("Model definition requires a kind");
  xn.set(e.kind, e);
}
function bm(e) {
  xn.delete(e);
}
function wm(e) {
  return xn.get(e);
}
function _m(e) {
  lc = e;
}
function fc(e, t) {
  return t?.find((n) => n.kind === e) ?? xn.get(e) ?? lc;
}
function nm(e, t) {
  return fc(e, t) ?? sm(e);
}
function vm(e, t, n) {
  return nm(t.kind, n).build(e, t);
}
function sm(e) {
  throw new Error(`No 3D model registered for kind "${e}" and no fallback model is installed`);
}
function im(e) {
  const t = [], n = [];
  for (const s of e.pins)
    s.side === "left" ? t.push(s) : n.push(s);
  return { left: t, right: n };
}
function rm(e, t) {
  const n = im(e), s = t.side === "left" ? n.left : n.right, i = s.findIndex((r) => r.id === t.id);
  return { index: Math.max(i, 0), count: s.length };
}
function om(e, t, n, s) {
  const [i, r, o] = e.dimensions, c = t.side === "left" ? -i / 2 : i / 2, u = n + 1, a = Math.max(s, 1) + 1, l = o * (u / a - 0.5), f = r * 0.08;
  return [c, f, l];
}
function km(e, t, n) {
  if (t.position) return t.position;
  const { index: s, count: i } = rm(e, t), r = fc(e.kind, n);
  return r?.resolvePinPosition ? r.resolvePinPosition(e, t, { index: s, count: i }) : om(e, t, s, i);
}
function C(e, t = "", n) {
  const s = document.createElement(e);
  return s.className = t, n !== void 0 && (s.textContent = n), s;
}
function Sm(e, t, n = {}) {
  let s = ir(t), i = !1, r = 0, o = null, c = "2d", u;
  const a = C("section", "wd-widget"), l = C("header", "wd-toolbar"), f = C("div", "wd-heading"), d = C("h2");
  f.append(d), l.append(f);
  const p = C("div", "wd-body"), m = C("div", "wd-viewport"), h = C("div", "wd-stage"), g = C("div", "wd-tooltip");
  g.hidden = !0;
  const b = C("div", "wd-canvas-tools"), v = C("div", "wd-view-switch"), S = C("span", "wd-view-caption", "Schematic"), O = C("label", "wd-switch"), _ = C("input");
  _.type = "checkbox", _.setAttribute("role", "switch"), _.setAttribute("aria-label", "3D view"), O.append(_, C("span", "wd-switch-track"));
  const w = C("span", "wd-view-caption", "3D");
  v.append(S, O, w);
  const $ = C("a", "wd-reset", "Reset");
  $.href = "#", b.append(v, $);
  const k = C("button", "wd-export", "Export SVG");
  k.type = "button", m.append(h, g, b, k);
  const A = C("aside", "wd-inspector");
  A.hidden = !0, A.setAttribute("aria-label", "Connection inspector"), A.setAttribute("aria-live", "polite"), p.append(m, A);
  const D = C("p", "wd-status");
  D.setAttribute("role", "status"), a.append(l, p, D), e.append(a);
  function N(E) {
    const [L, R] = E.split("."), q = s.components.find((W) => W.id === L)?.pins.find((W) => W.id === R);
    return q ? `${E} (${ns(q)})` : E;
  }
  function P(E) {
    const L = s.components.find((q) => q.id === E);
    if (L) return L.label;
    const R = s.wires.find((q) => q.id === E);
    return R ? `${R.label || R.id}: ${N(R.from)} → ${N(R.to)}` : E;
  }
  function z(E, L) {
    if (L === void 0) return;
    const R = C("div", "wd-detail");
    R.append(C("dt", "", E), C("dd", "", String(L))), A.append(R);
  }
  function vt() {
    if (A.replaceChildren(), !o) {
      A.hidden = !0;
      return;
    }
    A.hidden = !1;
    const E = s.components.find((q) => q.id === o), L = s.wires.find((q) => q.id === o);
    if (E) {
      A.append(C("h3", "", E.label)), z("Size", `${E.dimensions.join(" × ")} mm`), E.notes && A.append(C("p", "", E.notes));
      for (const [W, dc] of Object.entries(E.properties ?? {})) z(W, dc);
      const q = Dt(E);
      q && z("Pinout", `${q.id} · GPIO numbering: ${q.gpioScheme}`), A.append(C("h4", "", "Contacts"));
      for (const W of E.pins) z(ns(W), W.voltage === void 0 ? W.id : `${W.id} · ${W.voltage} V`);
      if (E.purchase) {
        const W = C("a", "wd-buy", E.purchase.label || "Find this component ↗");
        W.href = E.purchase.url, W.target = "_blank", W.rel = "noopener noreferrer", A.append(W);
      }
    } else if (L) {
      A.append(C("h3", "", L.label || L.id));
      const q = C("div", "wd-swatch");
      q.style.backgroundColor = L.color, A.append(q), z("From", N(L.from)), z("To", N(L.to)), z("Voltage", L.voltage === void 0 ? void 0 : `${L.voltage} V`), z("Length", L.lengthMm === void 0 ? void 0 : `${L.lengthMm} mm`), L.notes && A.append(C("p", "", L.notes));
    }
    const R = C("select", "wd-select");
    R.setAttribute("aria-label", "Select component or wire"), R.append(new Option("Select a component or wire…", ""));
    for (const q of [...s.components, ...s.wires]) R.append(new Option(P(q.id), q.id));
    R.value = o || "", R.addEventListener("change", () => Ut.select(R.value || null)), A.append(R);
  }
  function si() {
    d.textContent = s.title, vt();
  }
  const Bt = {
    onSelect: (E) => Ut.select(E),
    onHover: (E) => {
      g.hidden = !E, g.textContent = E ? P(E) : "";
    },
    onError: (E) => {
      i || (D.textContent = E);
    }
  };
  async function We(E) {
    if (i) return;
    if (E !== "2d" && E !== "3d") throw new Error("View must be 2d or 3d");
    const L = ++r;
    if (c = E, u?.destroy(), u = void 0, h.replaceChildren(), g.hidden = !0, _.checked = E === "3d", S.classList.toggle("wd-view-active", E === "2d"), w.classList.toggle("wd-view-active", E === "3d"), D.textContent = "", E === "2d") u = Up(h, s, Bt);
    else {
      h.append(C("p", "wd-loading", "Loading 3D assembly…"));
      try {
        const { create3DView: R } = await import("./view3d-D55_BrQy.js");
        if (i || L !== r) return;
        u = R(h, s, {
          ...Bt,
          onError: (q) => {
            L === r && Bt.onError(q);
          }
        }, { models: n.models });
      } catch (R) {
        if (i || L !== r) return;
        h.replaceChildren(C("p", "wd-loading", "3D could not start. The schematic is still available.")), Bt.onError(R instanceof Error ? R.message : String(R));
      }
    }
    u?.select(o);
  }
  const Ut = {
    update(E) {
      if (i) throw new Error("Widget has been destroyed");
      s = ir(E), o = null, si(), We(c);
    },
    setView: We,
    select(E) {
      i || (o = E && [...s.components, ...s.wires].some((L) => L.id === E) ? E : null, u?.select(o), vt());
    },
    exportSVG: () => Rp(s),
    destroy() {
      i || (i = !0, r++, u?.destroy(), a.remove());
    }
  };
  return S.addEventListener("click", () => {
    We("2d");
  }), w.addEventListener("click", () => {
    We("3d");
  }), _.addEventListener("change", () => {
    We(_.checked ? "3d" : "2d");
  }), $.addEventListener("click", (E) => {
    E.preventDefault(), u?.reset();
  }), k.addEventListener("click", () => {
    const E = URL.createObjectURL(new Blob([Ut.exportSVG()], { type: "image/svg+xml" })), L = C("a");
    L.href = E, L.download = "wiring-diagram.svg", L.click(), setTimeout(() => URL.revokeObjectURL(E), 1e3);
  }), si(), We(n.view ?? "2d"), Ut;
}
export {
  nm as A,
  um as B,
  Xp as C,
  Y as D,
  Sm as E,
  am as F,
  Dt as G,
  ht as H,
  ir as I,
  ns as J,
  Rp as K,
  bm as L,
  _e as M,
  me as U,
  cn as a,
  Gp as b,
  lm as c,
  gm as d,
  dm as e,
  Vp as f,
  Dn as g,
  Yp as h,
  cc as i,
  Fp as j,
  es as k,
  pm as l,
  we as m,
  km as n,
  uc as o,
  fm as p,
  ac as q,
  cm as r,
  mm as s,
  Hp as t,
  hm as u,
  qp as v,
  _m as w,
  wm as x,
  ym as y,
  vm as z
};
