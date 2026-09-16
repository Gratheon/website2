const ns = /* @__PURE__ */ Symbol.for("yaml.alias"), Zn = /* @__PURE__ */ Symbol.for("yaml.document"), $e = /* @__PURE__ */ Symbol.for("yaml.map"), Mi = /* @__PURE__ */ Symbol.for("yaml.pair"), he = /* @__PURE__ */ Symbol.for("yaml.scalar"), rt = /* @__PURE__ */ Symbol.for("yaml.seq"), re = /* @__PURE__ */ Symbol.for("yaml.node.type"), Ze = (t) => !!t && typeof t == "object" && t[re] === ns, Re = (t) => !!t && typeof t == "object" && t[re] === Zn, ot = (t) => !!t && typeof t == "object" && t[re] === $e, B = (t) => !!t && typeof t == "object" && t[re] === Mi, j = (t) => !!t && typeof t == "object" && t[re] === he, ct = (t) => !!t && typeof t == "object" && t[re] === rt;
function F(t) {
  if (t && typeof t == "object")
    switch (t[re]) {
      case $e:
      case rt:
        return !0;
    }
  return !1;
}
function K(t) {
  if (t && typeof t == "object")
    switch (t[re]) {
      case ns:
      case $e:
      case he:
      case rt:
        return !0;
    }
  return !1;
}
const ji = (t) => (j(t) || F(t)) && !!t.anchor, H = /* @__PURE__ */ Symbol("break visit"), Di = /* @__PURE__ */ Symbol("skip children"), de = /* @__PURE__ */ Symbol("remove node");
function Be(t, e) {
  const n = Zi(e);
  Re(t) ? Ve(null, t.contents, n, Object.freeze([t])) === de && (t.contents = null) : Ve(null, t, n, Object.freeze([]));
}
Be.BREAK = H;
Be.SKIP = Di;
Be.REMOVE = de;
function Ve(t, e, n, s) {
  const i = Ri(t, e, n, s);
  if (K(i) || B(i))
    return Bi(t, s, i), Ve(t, i, n, s);
  if (typeof i != "symbol") {
    if (F(e)) {
      s = Object.freeze(s.concat(e));
      for (let r = 0; r < e.items.length; ++r) {
        const o = Ve(r, e.items[r], n, s);
        if (typeof o == "number")
          r = o - 1;
        else {
          if (o === H)
            return H;
          o === de && (e.items.splice(r, 1), r -= 1);
        }
      }
    } else if (B(e)) {
      s = Object.freeze(s.concat(e));
      const r = Ve("key", e.key, n, s);
      if (r === H)
        return H;
      r === de && (e.key = null);
      const o = Ve("value", e.value, n, s);
      if (o === H)
        return H;
      o === de && (e.value = null);
    }
  }
  return i;
}
async function an(t, e) {
  const n = Zi(e);
  Re(t) ? await qe(null, t.contents, n, Object.freeze([t])) === de && (t.contents = null) : await qe(null, t, n, Object.freeze([]));
}
an.BREAK = H;
an.SKIP = Di;
an.REMOVE = de;
async function qe(t, e, n, s) {
  const i = await Ri(t, e, n, s);
  if (K(i) || B(i))
    return Bi(t, s, i), qe(t, i, n, s);
  if (typeof i != "symbol") {
    if (F(e)) {
      s = Object.freeze(s.concat(e));
      for (let r = 0; r < e.items.length; ++r) {
        const o = await qe(r, e.items[r], n, s);
        if (typeof o == "number")
          r = o - 1;
        else {
          if (o === H)
            return H;
          o === de && (e.items.splice(r, 1), r -= 1);
        }
      }
    } else if (B(e)) {
      s = Object.freeze(s.concat(e));
      const r = await qe("key", e.key, n, s);
      if (r === H)
        return H;
      r === de && (e.key = null);
      const o = await qe("value", e.value, n, s);
      if (o === H)
        return H;
      o === de && (e.value = null);
    }
  }
  return i;
}
function Zi(t) {
  return typeof t == "object" && (t.Collection || t.Node || t.Value) ? Object.assign({
    Alias: t.Node,
    Map: t.Node,
    Scalar: t.Node,
    Seq: t.Node
  }, t.Value && {
    Map: t.Value,
    Scalar: t.Value,
    Seq: t.Value
  }, t.Collection && {
    Map: t.Collection,
    Seq: t.Collection
  }, t) : t;
}
function Ri(t, e, n, s) {
  if (typeof n == "function")
    return n(t, e, s);
  if (ot(e))
    return n.Map?.(t, e, s);
  if (ct(e))
    return n.Seq?.(t, e, s);
  if (B(e))
    return n.Pair?.(t, e, s);
  if (j(e))
    return n.Scalar?.(t, e, s);
  if (Ze(e))
    return n.Alias?.(t, e, s);
}
function Bi(t, e, n) {
  const s = e[e.length - 1];
  if (F(s))
    s.items[t] = n;
  else if (B(s))
    t === "key" ? s.key = n : s.value = n;
  else if (Re(s))
    s.contents = n;
  else {
    const i = Ze(s) ? "alias" : "scalar";
    throw new Error(`Cannot replace node with ${i} parent`);
  }
}
const Mo = {
  "!": "%21",
  ",": "%2C",
  "[": "%5B",
  "]": "%5D",
  "{": "%7B",
  "}": "%7D"
}, jo = (t) => t.replace(/[!,[\]{}]/g, (e) => Mo[e]);
class X {
  constructor(e, n) {
    this.docStart = null, this.docEnd = !1, this.yaml = Object.assign({}, X.defaultYaml, e), this.tags = Object.assign({}, X.defaultTags, n);
  }
  clone() {
    const e = new X(this.yaml, this.tags);
    return e.docStart = this.docStart, e;
  }
  /**
   * During parsing, get a Directives instance for the current document and
   * update the stream state according to the current version's spec.
   */
  atDocument() {
    const e = new X(this.yaml, this.tags);
    switch (this.yaml.version) {
      case "1.1":
        this.atNextDocument = !0;
        break;
      case "1.2":
        this.atNextDocument = !1, this.yaml = {
          explicit: X.defaultYaml.explicit,
          version: "1.2"
        }, this.tags = Object.assign({}, X.defaultTags);
        break;
    }
    return e;
  }
  /**
   * @param onError - May be called even if the action was successful
   * @returns `true` on success
   */
  add(e, n) {
    this.atNextDocument && (this.yaml = { explicit: X.defaultYaml.explicit, version: "1.1" }, this.tags = Object.assign({}, X.defaultTags), this.atNextDocument = !1);
    const s = e.trim().split(/[ \t]+/), i = s.shift();
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
  tagName(e, n) {
    if (e === "!")
      return "!";
    if (e[0] !== "!")
      return n(`Not a valid tag: ${e}`), null;
    if (e[1] === "<") {
      const o = e.slice(2, -1);
      return o === "!" || o === "!!" ? (n(`Verbatim tags aren't resolved, so ${e} is invalid.`), null) : (e[e.length - 1] !== ">" && n("Verbatim tags must end with a >"), o);
    }
    const [, s, i] = e.match(/^(.*!)([^!]*)$/s);
    i || n(`The ${e} tag has no suffix`);
    const r = this.tags[s];
    if (r)
      try {
        return r + decodeURIComponent(i);
      } catch (o) {
        return n(String(o)), null;
      }
    return s === "!" ? e : (n(`Could not resolve tag: ${e}`), null);
  }
  /**
   * Given a fully resolved tag, returns its printable string form,
   * taking into account current tag prefixes and defaults.
   */
  tagString(e) {
    for (const [n, s] of Object.entries(this.tags))
      if (e.startsWith(s))
        return n + jo(e.substring(s.length));
    return e[0] === "!" ? e : `!<${e}>`;
  }
  toString(e) {
    const n = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [], s = Object.entries(this.tags);
    let i;
    if (e && s.length > 0 && K(e.contents)) {
      const r = {};
      Be(e.contents, (o, c) => {
        K(c) && c.tag && (r[c.tag] = !0);
      }), i = Object.keys(r);
    } else
      i = [];
    for (const [r, o] of s)
      r === "!!" && o === "tag:yaml.org,2002:" || (!e || i.some((c) => c.startsWith(o))) && n.push(`%TAG ${r} ${o}`);
    return n.join(`
`);
  }
}
X.defaultYaml = { explicit: !1, version: "1.2" };
X.defaultTags = { "!!": "tag:yaml.org,2002:" };
function Ui(t) {
  if (/[\x00-\x19\s,[\]{}]/.test(t)) {
    const n = `Anchor must not contain whitespace or control characters: ${JSON.stringify(t)}`;
    throw new Error(n);
  }
  return !0;
}
function xi(t) {
  const e = /* @__PURE__ */ new Set();
  return Be(t, {
    Value(n, s) {
      s.anchor && e.add(s.anchor);
    }
  }), e;
}
function Fi(t, e) {
  for (let n = 1; ; ++n) {
    const s = `${t}${n}`;
    if (!e.has(s))
      return s;
  }
}
function Do(t, e) {
  const n = [], s = /* @__PURE__ */ new Map();
  let i = null;
  return {
    onAnchor: (r) => {
      n.push(r), i ?? (i = xi(t));
      const o = Fi(e, i);
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
        if (typeof o == "object" && o.anchor && (j(o.node) || F(o.node)))
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
function Je(t, e, n, s) {
  if (s && typeof s == "object")
    if (Array.isArray(s))
      for (let i = 0, r = s.length; i < r; ++i) {
        const o = s[i], c = Je(t, s, String(i), o);
        c === void 0 ? delete s[i] : c !== o && (s[i] = c);
      }
    else if (s instanceof Map)
      for (const i of Array.from(s.keys())) {
        const r = s.get(i), o = Je(t, s, i, r);
        o === void 0 ? s.delete(i) : o !== r && s.set(i, o);
      }
    else if (s instanceof Set)
      for (const i of Array.from(s)) {
        const r = Je(t, s, i, i);
        r === void 0 ? s.delete(i) : r !== i && (s.delete(i), s.add(r));
      }
    else
      for (const [i, r] of Object.entries(s)) {
        const o = Je(t, s, i, r);
        o === void 0 ? delete s[i] : o !== r && (s[i] = o);
      }
  return t.call(e, n, s);
}
function ie(t, e, n) {
  if (Array.isArray(t))
    return t.map((s, i) => ie(s, String(i), n));
  if (t && typeof t.toJSON == "function") {
    if (!n || !ji(t))
      return t.toJSON(e, n);
    const s = { aliasCount: 0, count: 1, res: void 0 };
    n.anchors.set(t, s), n.onCreate = (r) => {
      s.res = r, delete n.onCreate;
    };
    const i = t.toJSON(e, n);
    return n.onCreate && n.onCreate(i), i;
  }
  return typeof t == "bigint" && !n?.keep ? Number(t) : t;
}
class ss {
  constructor(e) {
    Object.defineProperty(this, re, { value: e });
  }
  /** Create a copy of this node.  */
  clone() {
    const e = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    return this.range && (e.range = this.range.slice()), e;
  }
  /** A plain JavaScript representation of this node. */
  toJS(e, { mapAsMap: n, maxAliasCount: s, onAnchor: i, reviver: r } = {}) {
    if (!Re(e))
      throw new TypeError("A document argument is required");
    const o = {
      anchors: /* @__PURE__ */ new Map(),
      doc: e,
      keep: !0,
      mapAsMap: n === !0,
      mapKeyWarned: !1,
      maxAliasCount: typeof s == "number" ? s : 100
    }, c = ie(this, "", o);
    if (typeof i == "function")
      for (const { count: a, res: l } of o.anchors.values())
        i(l, a);
    return typeof r == "function" ? Je(r, { "": c }, "", c) : c;
  }
}
class ln extends ss {
  constructor(e) {
    super(ns), this.source = e, Object.defineProperty(this, "tag", {
      set() {
        throw new Error("Alias nodes cannot have tags");
      }
    });
  }
  /**
   * Resolve the value of this alias within `doc`, finding the last
   * instance of the `source` anchor before this node.
   */
  resolve(e, n) {
    if (n?.maxAliasCount === 0)
      throw new ReferenceError("Alias resolution is disabled");
    let s;
    n?.aliasResolveCache ? s = n.aliasResolveCache : (s = [], Be(e, {
      Node: (r, o) => {
        (Ze(o) || ji(o)) && s.push(o);
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
      let a = r.get(i);
      if (a || (ie(i, null, n), a = r.get(i)), a?.res === void 0) {
        const l = "This should not happen: Alias anchor was not resolved?";
        throw new ReferenceError(l);
      }
      if (c >= 0 && (a.count += 1, a.aliasCount === 0 && (a.aliasCount = Kt(o, i, r)), a.count * a.aliasCount > c)) {
        const l = "Excessive alias count indicates a resource exhaustion attack";
        throw new ReferenceError(l);
      }
    }
    return i;
  }
  toJSON(e, n) {
    if (!n)
      return { source: this.source };
    const s = this.resolve(n.doc, n);
    if (!s) {
      const i = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
      throw new ReferenceError(i);
    }
    return n.anchors.get(s).res;
  }
  toString(e, n, s) {
    const i = `*${this.source}`;
    if (e) {
      if (Ui(this.source), e.options.verifyAliasOrder && !e.anchors.has(this.source)) {
        const r = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new Error(r);
      }
      if (e.implicitKey)
        return `${i} `;
    }
    return i;
  }
}
function Kt(t, e, n) {
  if (Ze(e)) {
    const s = e.resolve(t), i = n && s && n.get(s);
    return i ? i.count * i.aliasCount : 0;
  } else if (F(e)) {
    let s = 0;
    for (const i of e.items) {
      const r = Kt(t, i, n);
      r > s && (s = r);
    }
    return s;
  } else if (B(e)) {
    const s = Kt(t, e.key, n), i = Kt(t, e.value, n);
    return Math.max(s, i);
  }
  return 1;
}
const Ki = (t) => !t || typeof t != "function" && typeof t != "object";
class A extends ss {
  constructor(e) {
    super(he), this.value = e;
  }
  toJSON(e, n) {
    return n?.keep ? this.value : ie(this.value, e, n);
  }
  toString() {
    return String(this.value);
  }
}
A.BLOCK_FOLDED = "BLOCK_FOLDED";
A.BLOCK_LITERAL = "BLOCK_LITERAL";
A.PLAIN = "PLAIN";
A.QUOTE_DOUBLE = "QUOTE_DOUBLE";
A.QUOTE_SINGLE = "QUOTE_SINGLE";
const Zo = "tag:yaml.org,2002:";
function Ro(t, e, n) {
  if (e) {
    const s = n.filter((r) => r.tag === e), i = s.find((r) => !r.format) ?? s[0];
    if (!i)
      throw new Error(`Tag ${e} not found`);
    return i;
  }
  return n.find((s) => s.identify?.(t) && !s.format);
}
function vt(t, e, n) {
  if (Re(t) && (t = t.contents), K(t))
    return t;
  if (B(t)) {
    const f = n.schema[$e].createNode?.(n.schema, null, n);
    return f.items.push(t), f;
  }
  (t instanceof String || t instanceof Number || t instanceof Boolean || typeof BigInt < "u" && t instanceof BigInt) && (t = t.valueOf());
  const { aliasDuplicateObjects: s, onAnchor: i, onTagObj: r, schema: o, sourceObjects: c } = n;
  let a;
  if (s && t && typeof t == "object") {
    if (a = c.get(t), a)
      return a.anchor ?? (a.anchor = i(t)), new ln(a.anchor);
    a = { anchor: null, node: null }, c.set(t, a);
  }
  e?.startsWith("!!") && (e = Zo + e.slice(2));
  let l = Ro(t, e, o.tags);
  if (!l) {
    if (t && typeof t.toJSON == "function" && (t = t.toJSON()), !t || typeof t != "object") {
      const f = new A(t);
      return a && (a.node = f), f;
    }
    l = t instanceof Map ? o[$e] : Symbol.iterator in Object(t) ? o[rt] : o[$e];
  }
  r && (r(l), delete n.onTagObj);
  const u = l?.createNode ? l.createNode(n.schema, t, n) : typeof l?.nodeClass?.from == "function" ? l.nodeClass.from(n.schema, t, n) : new A(t);
  return e ? u.tag = e : l.default || (u.tag = l.tag), a && (a.node = u), u;
}
function Wt(t, e, n) {
  let s = n;
  for (let i = e.length - 1; i >= 0; --i) {
    const r = e[i];
    if (typeof r == "number" && Number.isInteger(r) && r >= 0) {
      const o = [];
      o[r] = s, s = o;
    } else
      s = /* @__PURE__ */ new Map([[r, s]]);
  }
  return vt(s, void 0, {
    aliasDuplicateObjects: !1,
    keepUndefined: !1,
    onAnchor: () => {
      throw new Error("This should not happen, please report a bug.");
    },
    schema: t,
    sourceObjects: /* @__PURE__ */ new Map()
  });
}
const mt = (t) => t == null || typeof t == "object" && !!t[Symbol.iterator]().next().done;
class Vi extends ss {
  constructor(e, n) {
    super(e), Object.defineProperty(this, "schema", {
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
  clone(e) {
    const n = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    return e && (n.schema = e), n.items = n.items.map((s) => K(s) || B(s) ? s.clone(e) : s), this.range && (n.range = this.range.slice()), n;
  }
  /**
   * Adds a value to the collection. For `!!map` and `!!omap` the value must
   * be a Pair instance or a `{ key, value }` object, which may not have a key
   * that already exists in the map.
   */
  addIn(e, n) {
    if (mt(e))
      this.add(n);
    else {
      const [s, ...i] = e, r = this.get(s, !0);
      if (F(r))
        r.addIn(i, n);
      else if (r === void 0 && this.schema)
        this.set(s, Wt(this.schema, i, n));
      else
        throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`);
    }
  }
  /**
   * Removes a value from the collection.
   * @returns `true` if the item was found and removed.
   */
  deleteIn(e) {
    const [n, ...s] = e;
    if (s.length === 0)
      return this.delete(n);
    const i = this.get(n, !0);
    if (F(i))
      return i.deleteIn(s);
    throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`);
  }
  /**
   * Returns item at `key`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  getIn(e, n) {
    const [s, ...i] = e, r = this.get(s, !0);
    return i.length === 0 ? !n && j(r) ? r.value : r : F(r) ? r.getIn(i, n) : void 0;
  }
  hasAllNullValues(e) {
    return this.items.every((n) => {
      if (!B(n))
        return !1;
      const s = n.value;
      return s == null || e && j(s) && s.value == null && !s.commentBefore && !s.comment && !s.tag;
    });
  }
  /**
   * Checks if the collection includes a value with the key `key`.
   */
  hasIn(e) {
    const [n, ...s] = e;
    if (s.length === 0)
      return this.has(n);
    const i = this.get(n, !0);
    return F(i) ? i.hasIn(s) : !1;
  }
  /**
   * Sets a value in this collection. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  setIn(e, n) {
    const [s, ...i] = e;
    if (i.length === 0)
      this.set(s, n);
    else {
      const r = this.get(s, !0);
      if (F(r))
        r.setIn(i, n);
      else if (r === void 0 && this.schema)
        this.set(s, Wt(this.schema, i, n));
      else
        throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`);
    }
  }
}
const Bo = (t) => t.replace(/^(?!$)(?: $)?/gm, "#");
function me(t, e) {
  return /^\n+$/.test(t) ? t.substring(1) : e ? t.replace(/^(?! *$)/gm, e) : t;
}
const ze = (t, e, n) => t.endsWith(`
`) ? me(n, e) : n.includes(`
`) ? `
` + me(n, e) : (t.endsWith(" ") ? "" : " ") + n, qi = "flow", Rn = "block", Vt = "quoted";
function un(t, e, n = "flow", { indentAtStart: s, lineWidth: i = 80, minContentWidth: r = 20, onFold: o, onOverflow: c } = {}) {
  if (!i || i < 0)
    return t;
  i < r && (r = 0);
  const a = Math.max(1 + r, 1 + i - e.length);
  if (t.length <= a)
    return t;
  const l = [], u = {};
  let f = i - e.length;
  typeof s == "number" && (s > i - Math.max(2, r) ? l.push(0) : f = i - s);
  let d, p, m = !1, h = -1, g = -1, b = -1;
  n === Rn && (h = Ds(t, h, e.length), h !== -1 && (f = h + a));
  for (let S; S = t[h += 1]; ) {
    if (n === Vt && S === "\\") {
      switch (g = h, t[h + 1]) {
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
      n === Rn && (h = Ds(t, h, e.length)), f = h + e.length + a, d = void 0;
    else {
      if (S === " " && p && p !== " " && p !== `
` && p !== "	") {
        const $ = t[h + 1];
        $ && $ !== " " && $ !== `
` && $ !== "	" && (d = h);
      }
      if (h >= f)
        if (d)
          l.push(d), f = d + a, d = void 0;
        else if (n === Vt) {
          for (; p === " " || p === "	"; )
            p = S, S = t[h += 1], m = !0;
          const $ = h > b + 1 ? h - 2 : g - 1;
          if (u[$])
            return t;
          l.push($), u[$] = !0, f = $ + a, d = void 0;
        } else
          m = !0;
    }
    p = S;
  }
  if (m && c && c(), l.length === 0)
    return t;
  o && o();
  let w = t.slice(0, l[0]);
  for (let S = 0; S < l.length; ++S) {
    const $ = l[S], _ = l[S + 1] || t.length;
    $ === 0 ? w = `
${e}${t.slice(0, _)}` : (n === Vt && u[$] && (w += `${t[$]}\\`), w += `
${e}${t.slice($ + 1, _)}`);
  }
  return w;
}
function Ds(t, e, n) {
  let s = e, i = e + 1, r = t[i];
  for (; r === " " || r === "	"; )
    if (e < i + n)
      r = t[++e];
    else {
      do
        r = t[++e];
      while (r && r !== `
`);
      s = e, i = e + 1, r = t[i];
    }
  return s;
}
const fn = (t, e) => ({
  indentAtStart: e ? t.indent.length : t.indentAtStart,
  lineWidth: t.options.lineWidth,
  minContentWidth: t.options.minContentWidth
}), dn = (t) => /^(%|---|\.\.\.)/m.test(t);
function Uo(t, e, n) {
  if (!e || e < 0)
    return !1;
  const s = e - n, i = t.length;
  if (i <= s)
    return !1;
  for (let r = 0, o = 0; r < i; ++r)
    if (t[r] === `
`) {
      if (r - o > s)
        return !0;
      if (o = r + 1, i - o <= s)
        return !1;
    }
  return !0;
}
function bt(t, e) {
  const n = JSON.stringify(t);
  if (e.options.doubleQuotedAsJSON)
    return n;
  const { implicitKey: s } = e, i = e.options.doubleQuotedMinMultiLineLength, r = e.indent || (dn(t) ? "  " : "");
  let o = "", c = 0;
  for (let a = 0, l = n[a]; l; l = n[++a])
    if (l === " " && n[a + 1] === "\\" && n[a + 2] === "n" && (o += n.slice(c, a) + "\\ ", a += 1, c = a, l = "\\"), l === "\\")
      switch (n[a + 1]) {
        case "u":
          {
            o += n.slice(c, a);
            const u = n.substr(a + 2, 4);
            switch (u) {
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
                u.substr(0, 2) === "00" ? o += "\\x" + u.substr(2) : o += n.substr(a, 6);
            }
            a += 5, c = a + 1;
          }
          break;
        case "n":
          if (s || n[a + 2] === '"' || n.length < i)
            a += 1;
          else {
            for (o += n.slice(c, a) + `

`; n[a + 2] === "\\" && n[a + 3] === "n" && n[a + 4] !== '"'; )
              o += `
`, a += 2;
            o += r, n[a + 2] === " " && (o += "\\"), a += 1, c = a + 1;
          }
          break;
        default:
          a += 1;
      }
  return o = c ? o + n.slice(c) : n, s ? o : un(o, r, Vt, fn(e, !1));
}
function Bn(t, e) {
  if (e.options.singleQuote === !1 || e.implicitKey && t.includes(`
`) || /[ \t]\n|\n[ \t]/.test(t))
    return bt(t, e);
  const n = e.indent || (dn(t) ? "  " : ""), s = "'" + t.replace(/'/g, "''").replace(/\n+/g, `$&
${n}`) + "'";
  return e.implicitKey ? s : un(s, n, qi, fn(e, !1));
}
function Ye(t, e) {
  const { singleQuote: n } = e.options;
  let s;
  if (n === !1)
    s = bt;
  else {
    const i = t.includes('"'), r = t.includes("'");
    i && !r ? s = Bn : r && !i ? s = bt : s = n ? Bn : bt;
  }
  return s(t, e);
}
let Un;
try {
  Un = new RegExp(`(^|(?<!
))
+(?!
|$)`, "g");
} catch {
  Un = /\n+(?!\n|$)/g;
}
function qt({ comment: t, type: e, value: n }, s, i, r) {
  const { blockQuote: o, commentString: c, lineWidth: a } = s.options;
  if (!o || /\n[\t ]+$/.test(n))
    return Ye(n, s);
  const l = s.indent || (s.forceBlockIndent || dn(n) ? "  " : ""), u = o === "literal" ? !0 : o === "folded" || e === A.BLOCK_FOLDED ? !1 : e === A.BLOCK_LITERAL ? !0 : !Uo(n, a, l.length);
  if (!n)
    return u ? `|
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
` && (p = p.slice(0, -1)), p = p.replace(Un, `$&${l}`));
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
  let w = n.substring(0, b < g ? b + 1 : g);
  w && (n = n.substring(w.length), w = w.replace(/\n+/g, `$&${l}`));
  let $ = (h ? l ? "2" : "1" : "") + f;
  if (t && ($ += " " + c(t.replace(/ ?[\r\n]+/g, " ")), i && i()), !u) {
    const _ = n.replace(/\n+/g, `
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${l}`);
    let v = !1;
    const E = fn(s, !0);
    o !== "folded" && e !== A.BLOCK_FOLDED && (E.onOverflow = () => {
      v = !0;
    });
    const k = un(`${w}${_}${p}`, l, Rn, E);
    if (!v)
      return `>${$}
${l}${k}`;
  }
  return n = n.replace(/\n+/g, `$&${l}`), `|${$}
${l}${w}${n}${p}`;
}
function xo(t, e, n, s) {
  const { type: i, value: r } = t, { actualString: o, implicitKey: c, indent: a, indentStep: l, inFlow: u } = e;
  if (c && r.includes(`
`) || u && /[[\]{},]/.test(r))
    return Ye(r, e);
  if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))
    return c || u || !r.includes(`
`) ? Ye(r, e) : qt(t, e, n, s);
  if (!c && !u && i !== A.PLAIN && r.includes(`
`))
    return qt(t, e, n, s);
  if (dn(r)) {
    if (a === "")
      return e.forceBlockIndent = !0, qt(t, e, n, s);
    if (c && a === l)
      return Ye(r, e);
  }
  const f = r.replace(/\n+/g, `$&
${a}`);
  if (o) {
    const d = (h) => h.default && h.tag !== "tag:yaml.org,2002:str" && h.test?.test(f), { compat: p, tags: m } = e.doc.schema;
    if (m.some(d) || p?.some(d))
      return Ye(r, e);
  }
  return c ? f : un(f, a, qi, fn(e, !1));
}
function Et(t, e, n, s) {
  const { implicitKey: i, inFlow: r } = e, o = typeof t.value == "string" ? t : Object.assign({}, t, { value: String(t.value) });
  let { type: c } = t;
  c !== A.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value) && (c = A.QUOTE_DOUBLE);
  const a = (u) => {
    switch (u) {
      case A.BLOCK_FOLDED:
      case A.BLOCK_LITERAL:
        return i || r ? Ye(o.value, e) : qt(o, e, n, s);
      case A.QUOTE_DOUBLE:
        return bt(o.value, e);
      case A.QUOTE_SINGLE:
        return Bn(o.value, e);
      case A.PLAIN:
        return xo(o, e, n, s);
      default:
        return null;
    }
  };
  let l = a(c);
  if (l === null) {
    const { defaultKeyType: u, defaultStringType: f } = e.options, d = i && u || f;
    if (l = a(d), l === null)
      throw new Error(`Unsupported default string type ${d}`);
  }
  return l;
}
function Ji(t, e) {
  const n = Object.assign({
    blockQuote: !0,
    commentString: Bo,
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
  }, t.schema.toStringOptions, e);
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
    doc: t,
    flowCollectionPadding: n.flowCollectionPadding ? " " : "",
    indent: "",
    indentStep: typeof n.indent == "number" ? " ".repeat(n.indent) : "  ",
    inFlow: s,
    options: n
  };
}
function Fo(t, e) {
  if (e.tag) {
    const i = t.filter((r) => r.tag === e.tag);
    if (i.length > 0)
      return i.find((r) => r.format === e.format) ?? i[0];
  }
  let n, s;
  if (j(e)) {
    s = e.value;
    let i = t.filter((r) => r.identify?.(s));
    if (i.length > 1) {
      const r = i.filter((o) => o.test);
      r.length > 0 && (i = r);
    }
    n = i.find((r) => r.format === e.format) ?? i.find((r) => !r.format);
  } else
    s = e, n = t.find((i) => i.nodeClass && s instanceof i.nodeClass);
  if (!n) {
    const i = s?.constructor?.name ?? (s === null ? "null" : typeof s);
    throw new Error(`Tag not resolved for ${i} value`);
  }
  return n;
}
function Ko(t, e, { anchors: n, doc: s }) {
  if (!s.directives)
    return "";
  const i = [], r = (j(t) || F(t)) && t.anchor;
  r && Ui(r) && (n.add(r), i.push(`&${r}`));
  const o = t.tag ?? (e.default ? null : e.tag);
  return o && i.push(s.directives.tagString(o)), i.join(" ");
}
function Qe(t, e, n, s) {
  if (B(t))
    return t.toString(e, n, s);
  if (Ze(t)) {
    if (e.doc.directives)
      return t.toString(e);
    if (e.resolvedAliases?.has(t))
      throw new TypeError("Cannot stringify circular structure without alias nodes");
    e.resolvedAliases ? e.resolvedAliases.add(t) : e.resolvedAliases = /* @__PURE__ */ new Set([t]), t = t.resolve(e.doc);
  }
  let i;
  const r = K(t) ? t : e.doc.createNode(t, { onTagObj: (a) => i = a });
  i ?? (i = Fo(e.doc.schema.tags, r));
  const o = Ko(r, i, e);
  o.length > 0 && (e.indentAtStart = (e.indentAtStart ?? 0) + o.length + 1);
  const c = typeof i.stringify == "function" ? i.stringify(r, e, n, s) : j(r) ? Et(r, e, n, s) : r.toString(e, n, s);
  return o ? j(r) || c[0] === "{" || c[0] === "[" ? `${o} ${c}` : `${o}
${e.indent}${c}` : c;
}
function Vo({ key: t, value: e }, n, s, i) {
  const { allNullValues: r, doc: o, indent: c, indentStep: a, options: { commentString: l, indentSeq: u, simpleKeys: f } } = n;
  let d = K(t) && t.comment || null;
  if (f) {
    if (d)
      throw new Error("With simple keys, key nodes cannot have comments");
    if (F(t) || !K(t) && typeof t == "object") {
      const E = "With simple keys, collection cannot be used as a key value";
      throw new Error(E);
    }
  }
  let p = !f && (!t || d && e == null && !n.inFlow || F(t) || (j(t) ? t.type === A.BLOCK_FOLDED || t.type === A.BLOCK_LITERAL : typeof t == "object"));
  n = Object.assign({}, n, {
    allNullValues: !1,
    implicitKey: !p && (f || !r),
    indent: c + a
  });
  let m = !1, h = !1, g = Qe(t, n, () => m = !0, () => h = !0);
  if (!p && !n.inFlow && g.length > 1024) {
    if (f)
      throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
    p = !0;
  }
  if (n.inFlow) {
    if (r || e == null)
      return m && s && s(), g === "" ? "?" : p ? `? ${g}` : g;
  } else if (r && !f || e == null && p)
    return g = `? ${g}`, d && !m ? g += ze(g, n.indent, l(d)) : h && i && i(), g;
  m && (d = null), p ? (d && (g += ze(g, n.indent, l(d))), g = `? ${g}
${c}:`) : (g = `${g}:`, d && (g += ze(g, n.indent, l(d))));
  let b, w, S;
  K(e) ? (b = !!e.spaceBefore, w = e.commentBefore, S = e.comment) : (b = !1, w = null, S = null, e && typeof e == "object" && (e = o.createNode(e))), n.implicitKey = !1, !p && !d && j(e) && (n.indentAtStart = g.length + 1), h = !1, !u && a.length >= 2 && !n.inFlow && !p && ct(e) && !e.flow && !e.tag && !e.anchor && (n.indent = n.indent.substring(2));
  let $ = !1;
  const _ = Qe(e, n, () => $ = !0, () => h = !0);
  let v = " ";
  if (d || b || w) {
    if (v = b ? `
` : "", w) {
      const E = l(w);
      v += `
${me(E, n.indent)}`;
    }
    _ === "" && !n.inFlow ? v === `
` && S && (v = `

`) : v += `
${n.indent}`;
  } else if (!p && F(e)) {
    const E = _[0], k = _.indexOf(`
`), z = k !== -1, Y = n.inFlow ?? e.flow ?? e.items.length === 0;
    if (z || !Y) {
      let N = !1;
      if (z && (E === "&" || E === "!")) {
        let I = _.indexOf(" ");
        E === "&" && I !== -1 && I < k && _[I + 1] === "!" && (I = _.indexOf(" ", I + 1)), (I === -1 || k < I) && (N = !0);
      }
      N || (v = `
${n.indent}`);
    }
  } else (_ === "" || _[0] === `
`) && (v = "");
  return g += v + _, n.inFlow ? $ && s && s() : S && !$ ? g += ze(g, n.indent, l(S)) : h && i && i(), g;
}
function Yi(t, e) {
  (t === "debug" || t === "warn") && console.warn(e);
}
const Lt = "<<", ge = {
  identify: (t) => t === Lt || typeof t == "symbol" && t.description === Lt,
  default: "key",
  tag: "tag:yaml.org,2002:merge",
  test: /^<<$/,
  resolve: () => Object.assign(new A(Symbol(Lt)), {
    addToJSMap: Gi
  }),
  stringify: () => Lt
}, qo = (t, e) => (ge.identify(e) || j(e) && (!e.type || e.type === A.PLAIN) && ge.identify(e.value)) && t?.doc.schema.tags.some((n) => n.tag === ge.tag && n.default);
function Gi(t, e, n) {
  const s = Wi(t, n);
  if (ct(s))
    for (const i of s.items)
      On(t, e, i);
  else if (Array.isArray(s))
    for (const i of s)
      On(t, e, i);
  else
    On(t, e, s);
}
function On(t, e, n) {
  const s = Wi(t, n);
  if (!ot(s))
    throw new Error("Merge sources must be maps or map aliases");
  const i = s.toJSON(null, t, Map);
  for (const [r, o] of i)
    e instanceof Map ? e.has(r) || e.set(r, o) : e instanceof Set ? e.add(r) : Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(e, r, {
      value: o,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  return e;
}
function Wi(t, e) {
  return t && Ze(e) ? e.resolve(t.doc, t) : e;
}
function Xi(t, e, { key: n, value: s }) {
  if (K(n) && n.addToJSMap)
    n.addToJSMap(t, e, s);
  else if (qo(t, n))
    Gi(t, e, s);
  else {
    const i = ie(n, "", t);
    if (e instanceof Map)
      e.set(i, ie(s, i, t));
    else if (e instanceof Set)
      e.add(i);
    else {
      const r = Jo(n, i, t), o = ie(s, r, t);
      r in e ? Object.defineProperty(e, r, {
        value: o,
        writable: !0,
        enumerable: !0,
        configurable: !0
      }) : e[r] = o;
    }
  }
  return e;
}
function Jo(t, e, n) {
  if (e === null)
    return "";
  if (typeof e != "object")
    return String(e);
  if (K(t) && n?.doc) {
    const s = Ji(n.doc, {});
    s.anchors = /* @__PURE__ */ new Set();
    for (const r of n.anchors.keys())
      s.anchors.add(r.anchor);
    s.inFlow = !0, s.inStringifyKey = !0;
    const i = t.toString(s);
    if (!n.mapKeyWarned) {
      let r = JSON.stringify(i);
      r.length > 40 && (r = r.substring(0, 36) + '..."'), Yi(n.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`), n.mapKeyWarned = !0;
    }
    return i;
  }
  return JSON.stringify(e);
}
function is(t, e, n) {
  const s = vt(t, void 0, n), i = vt(e, void 0, n);
  return new G(s, i);
}
class G {
  constructor(e, n = null) {
    Object.defineProperty(this, re, { value: Mi }), this.key = e, this.value = n;
  }
  clone(e) {
    let { key: n, value: s } = this;
    return K(n) && (n = n.clone(e)), K(s) && (s = s.clone(e)), new G(n, s);
  }
  toJSON(e, n) {
    const s = n?.mapAsMap ? /* @__PURE__ */ new Map() : {};
    return Xi(n, s, this);
  }
  toString(e, n, s) {
    return e?.doc ? Vo(this, e, n, s) : JSON.stringify(this);
  }
}
function Hi(t, e, n) {
  return (e.inFlow ?? t.flow ? Go : Yo)(t, e, n);
}
function Yo({ comment: t, items: e }, n, { blockItemPrefix: s, flowChars: i, itemIndent: r, onChompKeep: o, onComment: c }) {
  const { indent: a, options: { commentString: l } } = n, u = Object.assign({}, n, { indent: r, type: null });
  let f = !1;
  const d = [];
  for (let m = 0; m < e.length; ++m) {
    const h = e[m];
    let g = null;
    if (K(h))
      !f && h.spaceBefore && d.push(""), Xt(n, d, h.commentBefore, f), h.comment && (g = h.comment);
    else if (B(h)) {
      const w = K(h.key) ? h.key : null;
      w && (!f && w.spaceBefore && d.push(""), Xt(n, d, w.commentBefore, f));
    }
    f = !1;
    let b = Qe(h, u, () => g = null, () => f = !0);
    g && (b += ze(b, r, l(g))), f && g && (f = !1), d.push(s + b);
  }
  let p;
  if (d.length === 0)
    p = i.start + i.end;
  else {
    p = d[0];
    for (let m = 1; m < d.length; ++m) {
      const h = d[m];
      p += h ? `
${a}${h}` : `
`;
    }
  }
  return t ? (p += `
` + me(l(t), a), c && c()) : f && o && o(), p;
}
function Go({ items: t }, e, { flowChars: n, itemIndent: s }) {
  const { indent: i, indentStep: r, flowCollectionPadding: o, options: { commentString: c } } = e;
  s += r;
  const a = Object.assign({}, e, {
    indent: s,
    inFlow: !0,
    type: null
  });
  let l = !1, u = 0;
  const f = [];
  for (let m = 0; m < t.length; ++m) {
    const h = t[m];
    let g = null;
    if (K(h))
      h.spaceBefore && f.push(""), Xt(e, f, h.commentBefore, !1), h.comment && (g = h.comment);
    else if (B(h)) {
      const w = K(h.key) ? h.key : null;
      w && (w.spaceBefore && f.push(""), Xt(e, f, w.commentBefore, !1), w.comment && (l = !0));
      const S = K(h.value) ? h.value : null;
      S ? (S.comment && (g = S.comment), S.commentBefore && (l = !0)) : h.value == null && w?.comment && (g = w.comment);
    }
    g && (l = !0);
    let b = Qe(h, a, () => g = null);
    l || (l = f.length > u || b.includes(`
`)), m < t.length - 1 ? b += "," : e.options.trailingComma && (e.options.lineWidth > 0 && (l || (l = f.reduce((w, S) => w + S.length + 2, 2) + (b.length + 2) > e.options.lineWidth)), l && (b += ",")), g && (b += ze(b, s, c(g))), f.push(b), u = f.length;
  }
  const { start: d, end: p } = n;
  if (f.length === 0)
    return d + p;
  if (!l) {
    const m = f.reduce((h, g) => h + g.length + 2, 2);
    l = e.options.lineWidth > 0 && m > e.options.lineWidth;
  }
  if (l) {
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
function Xt({ indent: t, options: { commentString: e } }, n, s, i) {
  if (s && i && (s = s.replace(/^\n+/, "")), s) {
    const r = me(e(s), t);
    n.push(r.trimStart());
  }
}
function Pe(t, e) {
  const n = j(e) ? e.value : e;
  for (const s of t)
    if (B(s) && (s.key === e || s.key === n || j(s.key) && s.key.value === n))
      return s;
}
class te extends Vi {
  static get tagName() {
    return "tag:yaml.org,2002:map";
  }
  constructor(e) {
    super($e, e), this.items = [];
  }
  /**
   * A generic collection parsing method that can be extended
   * to other node classes that inherit from YAMLMap
   */
  static from(e, n, s) {
    const { keepUndefined: i, replacer: r } = s, o = new this(e), c = (a, l) => {
      if (typeof r == "function")
        l = r.call(n, a, l);
      else if (Array.isArray(r) && !r.includes(a))
        return;
      (l !== void 0 || i) && o.items.push(is(a, l, s));
    };
    if (n instanceof Map)
      for (const [a, l] of n)
        c(a, l);
    else if (n && typeof n == "object")
      for (const a of Object.keys(n))
        c(a, n[a]);
    return typeof e.sortMapEntries == "function" && o.items.sort(e.sortMapEntries), o;
  }
  /**
   * Adds a value to the collection.
   *
   * @param overwrite - If not set `true`, using a key that is already in the
   *   collection will throw. Otherwise, overwrites the previous value.
   */
  add(e, n) {
    let s;
    B(e) ? s = e : !e || typeof e != "object" || !("key" in e) ? s = new G(e, e?.value) : s = new G(e.key, e.value);
    const i = Pe(this.items, s.key), r = this.schema?.sortMapEntries;
    if (i) {
      if (!n)
        throw new Error(`Key ${s.key} already set`);
      j(i.value) && Ki(s.value) ? i.value.value = s.value : i.value = s.value;
    } else if (r) {
      const o = this.items.findIndex((c) => r(s, c) < 0);
      o === -1 ? this.items.push(s) : this.items.splice(o, 0, s);
    } else
      this.items.push(s);
  }
  delete(e) {
    const n = Pe(this.items, e);
    return n ? this.items.splice(this.items.indexOf(n), 1).length > 0 : !1;
  }
  get(e, n) {
    const i = Pe(this.items, e)?.value;
    return (!n && j(i) ? i.value : i) ?? void 0;
  }
  has(e) {
    return !!Pe(this.items, e);
  }
  set(e, n) {
    this.add(new G(e, n), !0);
  }
  /**
   * @param ctx - Conversion context, originally set in Document#toJS()
   * @param {Class} Type - If set, forces the returned collection type
   * @returns Instance of Type, Map, or Object
   */
  toJSON(e, n, s) {
    const i = s ? new s() : n?.mapAsMap ? /* @__PURE__ */ new Map() : {};
    n?.onCreate && n.onCreate(i);
    for (const r of this.items)
      Xi(n, i, r);
    return i;
  }
  toString(e, n, s) {
    if (!e)
      return JSON.stringify(this);
    for (const i of this.items)
      if (!B(i))
        throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);
    return !e.allNullValues && this.hasAllNullValues(!1) && (e = Object.assign({}, e, { allNullValues: !0 })), Hi(this, e, {
      blockItemPrefix: "",
      flowChars: { start: "{", end: "}" },
      itemIndent: e.indent || "",
      onChompKeep: s,
      onComment: n
    });
  }
}
const at = {
  collection: "map",
  default: !0,
  nodeClass: te,
  tag: "tag:yaml.org,2002:map",
  resolve(t, e) {
    return ot(t) || e("Expected a mapping for this tag"), t;
  },
  createNode: (t, e, n) => te.from(t, e, n)
};
class Oe extends Vi {
  static get tagName() {
    return "tag:yaml.org,2002:seq";
  }
  constructor(e) {
    super(rt, e), this.items = [];
  }
  add(e) {
    this.items.push(e);
  }
  /**
   * Removes a value from the collection.
   *
   * `key` must contain a representation of an integer for this to succeed.
   * It may be wrapped in a `Scalar`.
   *
   * @returns `true` if the item was found and removed.
   */
  delete(e) {
    const n = Ct(e);
    return typeof n != "number" ? !1 : this.items.splice(n, 1).length > 0;
  }
  get(e, n) {
    const s = Ct(e);
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
  has(e) {
    const n = Ct(e);
    return typeof n == "number" && n < this.items.length;
  }
  /**
   * Sets a value in this collection. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   *
   * If `key` does not contain a representation of an integer, this will throw.
   * It may be wrapped in a `Scalar`.
   */
  set(e, n) {
    const s = Ct(e);
    if (typeof s != "number")
      throw new Error(`Expected a valid index, not ${e}.`);
    const i = this.items[s];
    j(i) && Ki(n) ? i.value = n : this.items[s] = n;
  }
  toJSON(e, n) {
    const s = [];
    n?.onCreate && n.onCreate(s);
    let i = 0;
    for (const r of this.items)
      s.push(ie(r, String(i++), n));
    return s;
  }
  toString(e, n, s) {
    return e ? Hi(this, e, {
      blockItemPrefix: "- ",
      flowChars: { start: "[", end: "]" },
      itemIndent: (e.indent || "") + "  ",
      onChompKeep: s,
      onComment: n
    }) : JSON.stringify(this);
  }
  static from(e, n, s) {
    const { replacer: i } = s, r = new this(e);
    if (n && Symbol.iterator in Object(n)) {
      let o = 0;
      for (let c of n) {
        if (typeof i == "function") {
          const a = n instanceof Set ? c : String(o++);
          c = i.call(n, a, c);
        }
        r.items.push(vt(c, void 0, s));
      }
    }
    return r;
  }
}
function Ct(t) {
  let e = j(t) ? t.value : t;
  return e && typeof e == "string" && (e = Number(e)), typeof e == "number" && Number.isInteger(e) && e >= 0 ? e : null;
}
const lt = {
  collection: "seq",
  default: !0,
  nodeClass: Oe,
  tag: "tag:yaml.org,2002:seq",
  resolve(t, e) {
    return ct(t) || e("Expected a sequence for this tag"), t;
  },
  createNode: (t, e, n) => Oe.from(t, e, n)
}, hn = {
  identify: (t) => typeof t == "string",
  default: !0,
  tag: "tag:yaml.org,2002:str",
  resolve: (t) => t,
  stringify(t, e, n, s) {
    return e = Object.assign({ actualString: !0 }, e), Et(t, e, n, s);
  }
}, pn = {
  identify: (t) => t == null,
  createNode: () => new A(null),
  default: !0,
  tag: "tag:yaml.org,2002:null",
  test: /^(?:~|[Nn]ull|NULL)?$/,
  resolve: () => new A(null),
  stringify: ({ source: t }, e) => typeof t == "string" && pn.test.test(t) ? t : e.options.nullStr
}, rs = {
  identify: (t) => typeof t == "boolean",
  default: !0,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
  resolve: (t) => new A(t[0] === "t" || t[0] === "T"),
  stringify({ source: t, value: e }, n) {
    if (t && rs.test.test(t)) {
      const s = t[0] === "t" || t[0] === "T";
      if (e === s)
        return t;
    }
    return e ? n.options.trueStr : n.options.falseStr;
  }
};
function fe({ format: t, minFractionDigits: e, tag: n, value: s }) {
  if (typeof s == "bigint")
    return String(s);
  const i = typeof s == "number" ? s : Number(s);
  if (!isFinite(i))
    return isNaN(i) ? ".nan" : i < 0 ? "-.inf" : ".inf";
  let r = Object.is(s, -0) ? "-0" : JSON.stringify(s);
  if (!t && e && (!n || n === "tag:yaml.org,2002:float") && /^-?\d/.test(r) && !r.includes("e")) {
    let o = r.indexOf(".");
    o < 0 && (o = r.length, r += ".");
    let c = e - (r.length - o - 1);
    for (; c-- > 0; )
      r += "0";
  }
  return r;
}
const Qi = {
  identify: (t) => typeof t == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
  resolve: (t) => t.slice(-3).toLowerCase() === "nan" ? NaN : t[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
  stringify: fe
}, er = {
  identify: (t) => typeof t == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  format: "EXP",
  test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
  resolve: (t) => parseFloat(t),
  stringify(t) {
    const e = Number(t.value);
    return isFinite(e) ? e.toExponential() : fe(t);
  }
}, tr = {
  identify: (t) => typeof t == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
  resolve(t) {
    const e = new A(parseFloat(t)), n = t.indexOf(".");
    return n !== -1 && t[t.length - 1] === "0" && (e.minFractionDigits = t.length - n - 1), e;
  },
  stringify: fe
}, mn = (t) => typeof t == "bigint" || Number.isInteger(t), os = (t, e, n, { intAsBigInt: s }) => s ? BigInt(t) : parseInt(t.substring(e), n);
function nr(t, e, n) {
  const { value: s } = t;
  return mn(s) && s >= 0 ? n + s.toString(e) : fe(t);
}
const sr = {
  identify: (t) => mn(t) && t >= 0,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "OCT",
  test: /^0o[0-7]+$/,
  resolve: (t, e, n) => os(t, 2, 8, n),
  stringify: (t) => nr(t, 8, "0o")
}, ir = {
  identify: mn,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  test: /^[-+]?[0-9]+$/,
  resolve: (t, e, n) => os(t, 0, 10, n),
  stringify: fe
}, rr = {
  identify: (t) => mn(t) && t >= 0,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "HEX",
  test: /^0x[0-9a-fA-F]+$/,
  resolve: (t, e, n) => os(t, 2, 16, n),
  stringify: (t) => nr(t, 16, "0x")
}, Wo = [
  at,
  lt,
  hn,
  pn,
  rs,
  sr,
  ir,
  rr,
  Qi,
  er,
  tr
];
function Zs(t) {
  return typeof t == "bigint" || Number.isInteger(t);
}
const Mt = ({ value: t }) => JSON.stringify(t), Xo = [
  {
    identify: (t) => typeof t == "string",
    default: !0,
    tag: "tag:yaml.org,2002:str",
    resolve: (t) => t,
    stringify: Mt
  },
  {
    identify: (t) => t == null,
    createNode: () => new A(null),
    default: !0,
    tag: "tag:yaml.org,2002:null",
    test: /^null$/,
    resolve: () => null,
    stringify: Mt
  },
  {
    identify: (t) => typeof t == "boolean",
    default: !0,
    tag: "tag:yaml.org,2002:bool",
    test: /^true$|^false$/,
    resolve: (t) => t === "true",
    stringify: Mt
  },
  {
    identify: Zs,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    test: /^-?(?:0|[1-9][0-9]*)$/,
    resolve: (t, e, { intAsBigInt: n }) => n ? BigInt(t) : parseInt(t, 10),
    stringify: ({ value: t }) => Zs(t) ? t.toString() : JSON.stringify(t)
  },
  {
    identify: (t) => typeof t == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
    resolve: (t) => parseFloat(t),
    stringify: Mt
  }
], Ho = {
  default: !0,
  tag: "",
  test: /^/,
  resolve(t, e) {
    return e(`Unresolved plain scalar ${JSON.stringify(t)}`), t;
  }
}, Qo = [at, lt].concat(Xo, Ho), cs = {
  identify: (t) => t instanceof Uint8Array,
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
  resolve(t, e) {
    if (typeof atob == "function") {
      const n = atob(t.replace(/[\n\r]/g, "")), s = new Uint8Array(n.length);
      for (let i = 0; i < n.length; ++i)
        s[i] = n.charCodeAt(i);
      return s;
    } else
      return e("This environment does not support reading binary tags; either Buffer or atob is required"), t;
  },
  stringify({ comment: t, type: e, value: n }, s, i, r) {
    if (!n)
      return "";
    const o = n;
    let c;
    if (typeof btoa == "function") {
      let a = "";
      for (let l = 0; l < o.length; ++l)
        a += String.fromCharCode(o[l]);
      c = btoa(a);
    } else
      throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
    if (e ?? (e = A.BLOCK_LITERAL), e !== A.QUOTE_DOUBLE) {
      const a = Math.max(s.options.lineWidth - s.indent.length, s.options.minContentWidth), l = Math.ceil(c.length / a), u = new Array(l);
      for (let f = 0, d = 0; f < l; ++f, d += a)
        u[f] = c.substr(d, a);
      c = u.join(e === A.BLOCK_LITERAL ? `
` : " ");
    }
    return Et({ comment: t, type: e, value: c }, s, i, r);
  }
};
function or(t, e) {
  if (ct(t))
    for (let n = 0; n < t.items.length; ++n) {
      let s = t.items[n];
      if (!B(s)) {
        if (ot(s)) {
          s.items.length > 1 && e("Each pair must have its own sequence indicator");
          const i = s.items[0] || new G(new A(null));
          if (s.commentBefore && (i.key.commentBefore = i.key.commentBefore ? `${s.commentBefore}
${i.key.commentBefore}` : s.commentBefore), s.comment) {
            const r = i.value ?? i.key;
            r.comment = r.comment ? `${s.comment}
${r.comment}` : s.comment;
          }
          s = i;
        }
        t.items[n] = B(s) ? s : new G(s);
      }
    }
  else
    e("Expected a sequence for this tag");
  return t;
}
function cr(t, e, n) {
  const { replacer: s } = n, i = new Oe(t);
  i.tag = "tag:yaml.org,2002:pairs";
  let r = 0;
  if (e && Symbol.iterator in Object(e))
    for (let o of e) {
      typeof s == "function" && (o = s.call(e, String(r++), o));
      let c, a;
      if (Array.isArray(o))
        if (o.length === 2)
          c = o[0], a = o[1];
        else
          throw new TypeError(`Expected [key, value] tuple: ${o}`);
      else if (o && o instanceof Object) {
        const l = Object.keys(o);
        if (l.length === 1)
          c = l[0], a = o[c];
        else
          throw new TypeError(`Expected tuple with one key, not ${l.length} keys`);
      } else
        c = o;
      i.items.push(is(c, a, n));
    }
  return i;
}
const as = {
  collection: "seq",
  default: !1,
  tag: "tag:yaml.org,2002:pairs",
  resolve: or,
  createNode: cr
};
class Xe extends Oe {
  constructor() {
    super(), this.add = te.prototype.add.bind(this), this.delete = te.prototype.delete.bind(this), this.get = te.prototype.get.bind(this), this.has = te.prototype.has.bind(this), this.set = te.prototype.set.bind(this), this.tag = Xe.tag;
  }
  /**
   * If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
   * but TypeScript won't allow widening the signature of a child method.
   */
  toJSON(e, n) {
    if (!n)
      return super.toJSON(e);
    const s = /* @__PURE__ */ new Map();
    n?.onCreate && n.onCreate(s);
    for (const i of this.items) {
      let r, o;
      if (B(i) ? (r = ie(i.key, "", n), o = ie(i.value, r, n)) : r = ie(i, "", n), s.has(r))
        throw new Error("Ordered maps must not include duplicate keys");
      s.set(r, o);
    }
    return s;
  }
  static from(e, n, s) {
    const i = cr(e, n, s), r = new this();
    return r.items = i.items, r;
  }
}
Xe.tag = "tag:yaml.org,2002:omap";
const ls = {
  collection: "seq",
  identify: (t) => t instanceof Map,
  nodeClass: Xe,
  default: !1,
  tag: "tag:yaml.org,2002:omap",
  resolve(t, e) {
    const n = or(t, e), s = [];
    for (const { key: i } of n.items)
      j(i) && (s.includes(i.value) ? e(`Ordered maps must not include duplicate keys: ${i.value}`) : s.push(i.value));
    return Object.assign(new Xe(), n);
  },
  createNode: (t, e, n) => Xe.from(t, e, n)
};
function ar({ value: t, source: e }, n) {
  return e && (t ? lr : ur).test.test(e) ? e : t ? n.options.trueStr : n.options.falseStr;
}
const lr = {
  identify: (t) => t === !0,
  default: !0,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
  resolve: () => new A(!0),
  stringify: ar
}, ur = {
  identify: (t) => t === !1,
  default: !0,
  tag: "tag:yaml.org,2002:bool",
  test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
  resolve: () => new A(!1),
  stringify: ar
}, ec = {
  identify: (t) => typeof t == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
  resolve: (t) => t.slice(-3).toLowerCase() === "nan" ? NaN : t[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
  stringify: fe
}, tc = {
  identify: (t) => typeof t == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  format: "EXP",
  test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
  resolve: (t) => parseFloat(t.replace(/_/g, "")),
  stringify(t) {
    const e = Number(t.value);
    return isFinite(e) ? e.toExponential() : fe(t);
  }
}, nc = {
  identify: (t) => typeof t == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
  resolve(t) {
    const e = new A(parseFloat(t.replace(/_/g, ""))), n = t.indexOf(".");
    if (n !== -1) {
      const s = t.substring(n + 1).replace(/_/g, "");
      s[s.length - 1] === "0" && (e.minFractionDigits = s.length);
    }
    return e;
  },
  stringify: fe
}, Nt = (t) => typeof t == "bigint" || Number.isInteger(t);
function gn(t, e, n, { intAsBigInt: s }) {
  const i = t[0];
  if ((i === "-" || i === "+") && (e += 1), t = t.substring(e).replace(/_/g, ""), s) {
    switch (n) {
      case 2:
        t = `0b${t}`;
        break;
      case 8:
        t = `0o${t}`;
        break;
      case 16:
        t = `0x${t}`;
        break;
    }
    const o = BigInt(t);
    return i === "-" ? BigInt(-1) * o : o;
  }
  const r = parseInt(t, n);
  return i === "-" ? -1 * r : r;
}
function us(t, e, n) {
  const { value: s } = t;
  if (Nt(s)) {
    const i = s.toString(e);
    return s < 0 ? "-" + n + i.substr(1) : n + i;
  }
  return fe(t);
}
const sc = {
  identify: Nt,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "BIN",
  test: /^[-+]?0b[0-1_]+$/,
  resolve: (t, e, n) => gn(t, 2, 2, n),
  stringify: (t) => us(t, 2, "0b")
}, ic = {
  identify: Nt,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "OCT",
  test: /^[-+]?0[0-7_]+$/,
  resolve: (t, e, n) => gn(t, 1, 8, n),
  stringify: (t) => us(t, 8, "0")
}, rc = {
  identify: Nt,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  test: /^[-+]?[0-9][0-9_]*$/,
  resolve: (t, e, n) => gn(t, 0, 10, n),
  stringify: fe
}, oc = {
  identify: Nt,
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "HEX",
  test: /^[-+]?0x[0-9a-fA-F_]+$/,
  resolve: (t, e, n) => gn(t, 2, 16, n),
  stringify: (t) => us(t, 16, "0x")
};
class He extends te {
  constructor(e) {
    super(e), this.tag = He.tag;
  }
  add(e) {
    let n;
    B(e) ? n = e : e && typeof e == "object" && "key" in e && "value" in e && e.value === null ? n = new G(e.key, null) : n = new G(e, null), Pe(this.items, n.key) || this.items.push(n);
  }
  /**
   * If `keepPair` is `true`, returns the Pair matching `key`.
   * Otherwise, returns the value of that Pair's key.
   */
  get(e, n) {
    const s = Pe(this.items, e);
    return !n && B(s) ? j(s.key) ? s.key.value : s.key : s;
  }
  set(e, n) {
    if (typeof n != "boolean")
      throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);
    const s = Pe(this.items, e);
    s && !n ? this.items.splice(this.items.indexOf(s), 1) : !s && n && this.items.push(new G(e));
  }
  toJSON(e, n) {
    return super.toJSON(e, n, Set);
  }
  toString(e, n, s) {
    if (!e)
      return JSON.stringify(this);
    if (this.hasAllNullValues(!0))
      return super.toString(Object.assign({}, e, { allNullValues: !0 }), n, s);
    throw new Error("Set items must all have null values");
  }
  static from(e, n, s) {
    const { replacer: i } = s, r = new this(e);
    if (n && Symbol.iterator in Object(n))
      for (let o of n)
        typeof i == "function" && (o = i.call(n, o, o)), r.items.push(is(o, null, s));
    return r;
  }
}
He.tag = "tag:yaml.org,2002:set";
const fs = {
  collection: "map",
  identify: (t) => t instanceof Set,
  nodeClass: He,
  default: !1,
  tag: "tag:yaml.org,2002:set",
  createNode: (t, e, n) => He.from(t, e, n),
  resolve(t, e) {
    if (ot(t)) {
      if (t.hasAllNullValues(!0))
        return Object.assign(new He(), t);
      e("Set items must all have null values");
    } else
      e("Expected a mapping for this tag");
    return t;
  }
};
function ds(t, e) {
  const n = t[0], s = n === "-" || n === "+" ? t.substring(1) : t, i = (o) => e ? BigInt(o) : Number(o), r = s.replace(/_/g, "").split(":").reduce((o, c) => o * i(60) + i(c), i(0));
  return n === "-" ? i(-1) * r : r;
}
function fr(t) {
  let { value: e } = t, n = (o) => o;
  if (typeof e == "bigint")
    n = (o) => BigInt(o);
  else if (isNaN(e) || !isFinite(e))
    return fe(t);
  let s = "";
  e < 0 && (s = "-", e *= n(-1));
  const i = n(60), r = [e % i];
  return e < 60 ? r.unshift(0) : (e = (e - r[0]) / i, r.unshift(e % i), e >= 60 && (e = (e - r[0]) / i, r.unshift(e))), s + r.map((o) => String(o).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
}
const dr = {
  identify: (t) => typeof t == "bigint" || Number.isInteger(t),
  default: !0,
  tag: "tag:yaml.org,2002:int",
  format: "TIME",
  test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
  resolve: (t, e, { intAsBigInt: n }) => ds(t, n),
  stringify: fr
}, hr = {
  identify: (t) => typeof t == "number",
  default: !0,
  tag: "tag:yaml.org,2002:float",
  format: "TIME",
  test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
  resolve: (t) => ds(t, !1),
  stringify: fr
}, yn = {
  identify: (t) => t instanceof Date,
  default: !0,
  tag: "tag:yaml.org,2002:timestamp",
  // If the time zone is omitted, the timestamp is assumed to be specified in UTC. The time part
  // may be omitted altogether, resulting in a date format. In such a case, the time part is
  // assumed to be 00:00:00Z (start of day, UTC).
  test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
  resolve(t) {
    const e = t.match(yn.test);
    if (!e)
      throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
    const [, n, s, i, r, o, c] = e.map(Number), a = e[7] ? Number((e[7] + "00").substr(1, 3)) : 0;
    let l = Date.UTC(n, s - 1, i, r || 0, o || 0, c || 0, a);
    const u = e[8];
    if (u && u !== "Z") {
      let f = ds(u, !1);
      Math.abs(f) < 30 && (f *= 60), l -= 6e4 * f;
    }
    return new Date(l);
  },
  stringify: ({ value: t }) => t?.toISOString().replace(/(T00:00:00)?\.000Z$/, "") ?? ""
}, Rs = [
  at,
  lt,
  hn,
  pn,
  lr,
  ur,
  sc,
  ic,
  rc,
  oc,
  ec,
  tc,
  nc,
  cs,
  ge,
  ls,
  as,
  fs,
  dr,
  hr,
  yn
], Bs = /* @__PURE__ */ new Map([
  ["core", Wo],
  ["failsafe", [at, lt, hn]],
  ["json", Qo],
  ["yaml11", Rs],
  ["yaml-1.1", Rs]
]), Us = {
  binary: cs,
  bool: rs,
  float: tr,
  floatExp: er,
  floatNaN: Qi,
  floatTime: hr,
  int: ir,
  intHex: rr,
  intOct: sr,
  intTime: dr,
  map: at,
  merge: ge,
  null: pn,
  omap: ls,
  pairs: as,
  seq: lt,
  set: fs,
  timestamp: yn
}, cc = {
  "tag:yaml.org,2002:binary": cs,
  "tag:yaml.org,2002:merge": ge,
  "tag:yaml.org,2002:omap": ls,
  "tag:yaml.org,2002:pairs": as,
  "tag:yaml.org,2002:set": fs,
  "tag:yaml.org,2002:timestamp": yn
};
function In(t, e, n) {
  const s = Bs.get(e);
  if (s && !t)
    return n && !s.includes(ge) ? s.concat(ge) : s.slice();
  let i = s;
  if (!i)
    if (Array.isArray(t))
      i = [];
    else {
      const r = Array.from(Bs.keys()).filter((o) => o !== "yaml11").map((o) => JSON.stringify(o)).join(", ");
      throw new Error(`Unknown schema "${e}"; use one of ${r} or define customTags array`);
    }
  if (Array.isArray(t))
    for (const r of t)
      i = i.concat(r);
  else typeof t == "function" && (i = t(i.slice()));
  return n && (i = i.concat(ge)), i.reduce((r, o) => {
    const c = typeof o == "string" ? Us[o] : o;
    if (!c) {
      const a = JSON.stringify(o), l = Object.keys(Us).map((u) => JSON.stringify(u)).join(", ");
      throw new Error(`Unknown custom tag ${a}; use one of ${l}`);
    }
    return r.includes(c) || r.push(c), r;
  }, []);
}
const ac = (t, e) => t.key < e.key ? -1 : t.key > e.key ? 1 : 0;
class bn {
  constructor({ compat: e, customTags: n, merge: s, resolveKnownTags: i, schema: r, sortMapEntries: o, toStringDefaults: c }) {
    this.compat = Array.isArray(e) ? In(e, "compat") : e ? In(null, e) : null, this.name = typeof r == "string" && r || "core", this.knownTags = i ? cc : {}, this.tags = In(n, this.name, s), this.toStringOptions = c ?? null, Object.defineProperty(this, $e, { value: at }), Object.defineProperty(this, he, { value: hn }), Object.defineProperty(this, rt, { value: lt }), this.sortMapEntries = typeof o == "function" ? o : o === !0 ? ac : null;
  }
  clone() {
    const e = Object.create(bn.prototype, Object.getOwnPropertyDescriptors(this));
    return e.tags = this.tags.slice(), e;
  }
}
function lc(t, e) {
  const n = [];
  let s = e.directives === !0;
  if (e.directives !== !1 && t.directives) {
    const a = t.directives.toString(t);
    a ? (n.push(a), s = !0) : t.directives.docStart && (s = !0);
  }
  s && n.push("---");
  const i = Ji(t, e), { commentString: r } = i.options;
  if (t.commentBefore) {
    n.length !== 1 && n.unshift("");
    const a = r(t.commentBefore);
    n.unshift(me(a, ""));
  }
  let o = !1, c = null;
  if (t.contents) {
    if (K(t.contents)) {
      if (t.contents.spaceBefore && s && n.push(""), t.contents.commentBefore) {
        const u = r(t.contents.commentBefore);
        n.push(me(u, ""));
      }
      i.forceBlockIndent = !!t.comment, c = t.contents.comment;
    }
    const a = c ? void 0 : () => o = !0;
    let l = Qe(t.contents, i, () => c = null, a);
    c && (l += ze(l, "", r(c))), (l[0] === "|" || l[0] === ">") && n[n.length - 1] === "---" ? n[n.length - 1] = `--- ${l}` : n.push(l);
  } else
    n.push(Qe(t.contents, i));
  if (t.directives?.docEnd)
    if (t.comment) {
      const a = r(t.comment);
      a.includes(`
`) ? (n.push("..."), n.push(me(a, ""))) : n.push(`... ${a}`);
    } else
      n.push("...");
  else {
    let a = t.comment;
    a && o && (a = a.replace(/^\n+/, "")), a && ((!o || c) && n[n.length - 1] !== "" && n.push(""), n.push(me(r(a), "")));
  }
  return n.join(`
`) + `
`;
}
class ut {
  constructor(e, n, s) {
    this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, re, { value: Zn });
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
    s?._directives ? (this.directives = s._directives.atDocument(), this.directives.yaml.explicit && (o = this.directives.yaml.version)) : this.directives = new X({ version: o }), this.setSchema(o, s), this.contents = e === void 0 ? null : this.createNode(e, i, s);
  }
  /**
   * Create a deep copy of this Document and its contents.
   *
   * Custom Node values that inherit from `Object` still refer to their original instances.
   */
  clone() {
    const e = Object.create(ut.prototype, {
      [re]: { value: Zn }
    });
    return e.commentBefore = this.commentBefore, e.comment = this.comment, e.errors = this.errors.slice(), e.warnings = this.warnings.slice(), e.options = Object.assign({}, this.options), this.directives && (e.directives = this.directives.clone()), e.schema = this.schema.clone(), e.contents = K(this.contents) ? this.contents.clone(e.schema) : this.contents, this.range && (e.range = this.range.slice()), e;
  }
  /** Adds a value to the document. */
  add(e) {
    Fe(this.contents) && this.contents.add(e);
  }
  /** Adds a value to the document. */
  addIn(e, n) {
    Fe(this.contents) && this.contents.addIn(e, n);
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
  createAlias(e, n) {
    if (!e.anchor) {
      const s = xi(this);
      e.anchor = // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      !n || s.has(n) ? Fi(n || "a", s) : n;
    }
    return new ln(e.anchor);
  }
  createNode(e, n, s) {
    let i;
    if (typeof n == "function")
      e = n.call({ "": e }, "", e), i = n;
    else if (Array.isArray(n)) {
      const g = (w) => typeof w == "number" || w instanceof String || w instanceof Number, b = n.filter(g).map(String);
      b.length > 0 && (n = n.concat(b)), i = n;
    } else s === void 0 && n && (s = n, n = void 0);
    const { aliasDuplicateObjects: r, anchorPrefix: o, flow: c, keepUndefined: a, onTagObj: l, tag: u } = s ?? {}, { onAnchor: f, setAnchors: d, sourceObjects: p } = Do(
      this,
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      o || "a"
    ), m = {
      aliasDuplicateObjects: r ?? !0,
      keepUndefined: a ?? !1,
      onAnchor: f,
      onTagObj: l,
      replacer: i,
      schema: this.schema,
      sourceObjects: p
    }, h = vt(e, u, m);
    return c && F(h) && (h.flow = !0), d(), h;
  }
  /**
   * Convert a key and a value into a `Pair` using the current schema,
   * recursively wrapping all values as `Scalar` or `Collection` nodes.
   */
  createPair(e, n, s = {}) {
    const i = this.createNode(e, null, s), r = this.createNode(n, null, s);
    return new G(i, r);
  }
  /**
   * Removes a value from the document.
   * @returns `true` if the item was found and removed.
   */
  delete(e) {
    return Fe(this.contents) ? this.contents.delete(e) : !1;
  }
  /**
   * Removes a value from the document.
   * @returns `true` if the item was found and removed.
   */
  deleteIn(e) {
    return mt(e) ? this.contents == null ? !1 : (this.contents = null, !0) : Fe(this.contents) ? this.contents.deleteIn(e) : !1;
  }
  /**
   * Returns item at `key`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  get(e, n) {
    return F(this.contents) ? this.contents.get(e, n) : void 0;
  }
  /**
   * Returns item at `path`, or `undefined` if not found. By default unwraps
   * scalar values from their surrounding node; to disable set `keepScalar` to
   * `true` (collections are always returned intact).
   */
  getIn(e, n) {
    return mt(e) ? !n && j(this.contents) ? this.contents.value : this.contents : F(this.contents) ? this.contents.getIn(e, n) : void 0;
  }
  /**
   * Checks if the document includes a value with the key `key`.
   */
  has(e) {
    return F(this.contents) ? this.contents.has(e) : !1;
  }
  /**
   * Checks if the document includes a value at `path`.
   */
  hasIn(e) {
    return mt(e) ? this.contents !== void 0 : F(this.contents) ? this.contents.hasIn(e) : !1;
  }
  /**
   * Sets a value in this document. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  set(e, n) {
    this.contents == null ? this.contents = Wt(this.schema, [e], n) : Fe(this.contents) && this.contents.set(e, n);
  }
  /**
   * Sets a value in this document. For `!!set`, `value` needs to be a
   * boolean to add/remove the item from the set.
   */
  setIn(e, n) {
    mt(e) ? this.contents = n : this.contents == null ? this.contents = Wt(this.schema, Array.from(e), n) : Fe(this.contents) && this.contents.setIn(e, n);
  }
  /**
   * Change the YAML version and schema used by the document.
   * A `null` version disables support for directives, explicit tags, anchors, and aliases.
   * It also requires the `schema` option to be given as a `Schema` instance value.
   *
   * Overrides all previously set schema options.
   */
  setSchema(e, n = {}) {
    typeof e == "number" && (e = String(e));
    let s;
    switch (e) {
      case "1.1":
        this.directives ? this.directives.yaml.version = "1.1" : this.directives = new X({ version: "1.1" }), s = { resolveKnownTags: !1, schema: "yaml-1.1" };
        break;
      case "1.2":
      case "next":
        this.directives ? this.directives.yaml.version = e : this.directives = new X({ version: e }), s = { resolveKnownTags: !0, schema: "core" };
        break;
      case null:
        this.directives && delete this.directives, s = null;
        break;
      default: {
        const i = JSON.stringify(e);
        throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`);
      }
    }
    if (n.schema instanceof Object)
      this.schema = n.schema;
    else if (s)
      this.schema = new bn(Object.assign(s, n));
    else
      throw new Error("With a null YAML version, the { schema: Schema } option is required");
  }
  // json & jsonArg are only used from toJSON()
  toJS({ json: e, jsonArg: n, mapAsMap: s, maxAliasCount: i, onAnchor: r, reviver: o } = {}) {
    const c = {
      anchors: /* @__PURE__ */ new Map(),
      doc: this,
      keep: !e,
      mapAsMap: s === !0,
      mapKeyWarned: !1,
      maxAliasCount: typeof i == "number" ? i : 100
    }, a = ie(this.contents, n ?? "", c);
    if (typeof r == "function")
      for (const { count: l, res: u } of c.anchors.values())
        r(u, l);
    return typeof o == "function" ? Je(o, { "": a }, "", a) : a;
  }
  /**
   * A JSON representation of the document `contents`.
   *
   * @param jsonArg Used by `JSON.stringify` to indicate the array index or
   *   property name.
   */
  toJSON(e, n) {
    return this.toJS({ json: !0, jsonArg: e, mapAsMap: !1, onAnchor: n });
  }
  /** A YAML representation of the document. */
  toString(e = {}) {
    if (this.errors.length > 0)
      throw new Error("Document with errors cannot be stringified");
    if ("indent" in e && (!Number.isInteger(e.indent) || Number(e.indent) <= 0)) {
      const n = JSON.stringify(e.indent);
      throw new Error(`"indent" option must be a positive integer, not ${n}`);
    }
    return lc(this, e);
  }
}
function Fe(t) {
  if (F(t))
    return !0;
  throw new Error("Expected a YAML collection as document contents");
}
class hs extends Error {
  constructor(e, n, s, i) {
    super(), this.name = e, this.code = s, this.message = i, this.pos = n;
  }
}
class Le extends hs {
  constructor(e, n, s) {
    super("YAMLParseError", e, n, s);
  }
}
class pr extends hs {
  constructor(e, n, s) {
    super("YAMLWarning", e, n, s);
  }
}
const Ht = (t, e) => (n) => {
  if (n.pos[0] === -1)
    return;
  n.linePos = n.pos.map((c) => e.linePos(c));
  const { line: s, col: i } = n.linePos[0];
  n.message += ` at line ${s}, column ${i}`;
  let r = i - 1, o = t.substring(e.lineStarts[s - 1], e.lineStarts[s]).replace(/[\n\r]+$/, "");
  if (r >= 60 && o.length > 80) {
    const c = Math.min(r - 39, o.length - 79);
    o = "…" + o.substring(c), r -= c - 1;
  }
  if (o.length > 80 && (o = o.substring(0, 79) + "…"), s > 1 && /^ *$/.test(o.substring(0, r))) {
    let c = t.substring(e.lineStarts[s - 2], e.lineStarts[s - 1]);
    c.length > 80 && (c = c.substring(0, 79) + `…
`), o = c + o;
  }
  if (/[^ ]/.test(o)) {
    let c = 1;
    const a = n.linePos[1];
    a?.line === s && a.col > i && (c = Math.max(1, Math.min(a.col - i, 80 - r)));
    const l = " ".repeat(r) + "^".repeat(c);
    n.message += `:

${o}
${l}
`;
  }
};
function et(t, { flow: e, indicator: n, next: s, offset: i, onError: r, parentIndent: o, startOnNewline: c }) {
  let a = !1, l = c, u = c, f = "", d = "", p = !1, m = !1, h = null, g = null, b = null, w = null, S = null, $ = null, _ = null;
  for (const k of t)
    switch (m && (k.type !== "space" && k.type !== "newline" && k.type !== "comma" && r(k.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), m = !1), h && (l && k.type !== "comment" && k.type !== "newline" && r(h, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), h = null), k.type) {
      case "space":
        !e && (n !== "doc-start" || s?.type !== "flow-collection") && k.source.includes("	") && (h = k), u = !0;
        break;
      case "comment": {
        u || r(k, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
        const z = k.source.substring(1) || " ";
        f ? f += d + z : f = z, d = "", l = !1;
        break;
      }
      case "newline":
        l ? f ? f += k.source : (!$ || n !== "seq-item-ind") && (a = !0) : d += k.source, l = !0, p = !0, (g || b) && (w = k), u = !0;
        break;
      case "anchor":
        g && r(k, "MULTIPLE_ANCHORS", "A node can have at most one anchor"), k.source.endsWith(":") && r(k.offset + k.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", !0), g = k, _ ?? (_ = k.offset), l = !1, u = !1, m = !0;
        break;
      case "tag": {
        b && r(k, "MULTIPLE_TAGS", "A node can have at most one tag"), b = k, _ ?? (_ = k.offset), l = !1, u = !1, m = !0;
        break;
      }
      case n:
        (g || b) && r(k, "BAD_PROP_ORDER", `Anchors and tags must be after the ${k.source} indicator`), $ && r(k, "UNEXPECTED_TOKEN", `Unexpected ${k.source} in ${e ?? "collection"}`), $ = k, l = n === "seq-item-ind" || n === "explicit-key-ind", u = !1;
        break;
      case "comma":
        if (e) {
          S && r(k, "UNEXPECTED_TOKEN", `Unexpected , in ${e}`), S = k, l = !1, u = !1;
          break;
        }
      // else fallthrough
      default:
        r(k, "UNEXPECTED_TOKEN", `Unexpected ${k.type} token`), l = !1, u = !1;
    }
  const v = t[t.length - 1], E = v ? v.offset + v.source.length : i;
  return m && s && s.type !== "space" && s.type !== "newline" && s.type !== "comma" && (s.type !== "scalar" || s.source !== "") && r(s.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), h && (l && h.indent <= o || s?.type === "block-map" || s?.type === "block-seq") && r(h, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), {
    comma: S,
    found: $,
    spaceBefore: a,
    comment: f,
    hasNewline: p,
    anchor: g,
    tag: b,
    newlineAfterProp: w,
    end: E,
    start: _ ?? E
  };
}
function kt(t) {
  if (!t)
    return null;
  switch (t.type) {
    case "alias":
    case "scalar":
    case "double-quoted-scalar":
    case "single-quoted-scalar":
      if (t.source.includes(`
`))
        return !0;
      if (t.end) {
        for (const e of t.end)
          if (e.type === "newline")
            return !0;
      }
      return !1;
    case "flow-collection":
      for (const e of t.items) {
        for (const n of e.start)
          if (n.type === "newline")
            return !0;
        if (e.sep) {
          for (const n of e.sep)
            if (n.type === "newline")
              return !0;
        }
        if (kt(e.key) || kt(e.value))
          return !0;
      }
      return !1;
    default:
      return !0;
  }
}
function xn(t, e, n) {
  if (e?.type === "flow-collection") {
    const s = e.end[0];
    s.indent === t && (s.source === "]" || s.source === "}") && kt(e) && n(s, "BAD_INDENT", "Flow end indicator should be more indented than parent", !0);
  }
}
function mr(t, e, n) {
  const { uniqueKeys: s } = t.options;
  if (s === !1)
    return !1;
  const i = typeof s == "function" ? s : (r, o) => r === o || j(r) && j(o) && r.value === o.value;
  return e.some((r) => i(r.key, n));
}
const xs = "All mapping items must start at the same column";
function uc({ composeNode: t, composeEmptyNode: e }, n, s, i, r) {
  const o = r?.nodeClass ?? te, c = new o(n.schema);
  n.atRoot && (n.atRoot = !1);
  let a = s.offset, l = null;
  for (const u of s.items) {
    const { start: f, key: d, sep: p, value: m } = u, h = et(f, {
      indicator: "explicit-key-ind",
      next: d ?? p?.[0],
      offset: a,
      onError: i,
      parentIndent: s.indent,
      startOnNewline: !0
    }), g = !h.found;
    if (g) {
      if (d && (d.type === "block-seq" ? i(a, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key") : "indent" in d && d.indent !== s.indent && i(a, "BAD_INDENT", xs)), !h.anchor && !h.tag && !p) {
        l = h.end, h.comment && (c.comment ? c.comment += `
` + h.comment : c.comment = h.comment);
        continue;
      }
      (h.newlineAfterProp || kt(d)) && i(d ?? f[f.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
    } else h.found?.indent !== s.indent && i(a, "BAD_INDENT", xs);
    n.atKey = !0;
    const b = h.end, w = d ? t(n, d, h, i) : e(n, b, f, null, h, i);
    n.schema.compat && xn(s.indent, d, i), n.atKey = !1, mr(n, c.items, w) && i(b, "DUPLICATE_KEY", "Map keys must be unique");
    const S = et(p ?? [], {
      indicator: "map-value-ind",
      next: m,
      offset: w.range[2],
      onError: i,
      parentIndent: s.indent,
      startOnNewline: !d || d.type === "block-scalar"
    });
    if (a = S.end, S.found) {
      g && (m?.type === "block-map" && !S.hasNewline && i(a, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings"), n.options.strict && h.start < S.found.offset - 1024 && i(w.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));
      const $ = m ? t(n, m, S, i) : e(n, a, p, null, S, i);
      n.schema.compat && xn(s.indent, m, i), a = $.range[2];
      const _ = new G(w, $);
      n.options.keepSourceTokens && (_.srcToken = u), c.items.push(_);
    } else {
      g && i(w.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values"), S.comment && (w.comment ? w.comment += `
` + S.comment : w.comment = S.comment);
      const $ = new G(w);
      n.options.keepSourceTokens && ($.srcToken = u), c.items.push($);
    }
  }
  return l && l < a && i(l, "IMPOSSIBLE", "Map comment with trailing content"), c.range = [s.offset, a, l ?? a], c;
}
function fc({ composeNode: t, composeEmptyNode: e }, n, s, i, r) {
  const o = r?.nodeClass ?? Oe, c = new o(n.schema);
  n.atRoot && (n.atRoot = !1), n.atKey && (n.atKey = !1);
  let a = s.offset, l = null;
  for (const { start: u, value: f } of s.items) {
    const d = et(u, {
      indicator: "seq-item-ind",
      next: f,
      offset: a,
      onError: i,
      parentIndent: s.indent,
      startOnNewline: !0
    });
    if (!d.found)
      if (d.anchor || d.tag || f)
        f?.type === "block-seq" ? i(d.end, "BAD_INDENT", "All sequence items must start at the same column") : i(a, "MISSING_CHAR", "Sequence item without - indicator");
      else {
        l = d.end, d.comment && (c.comment = d.comment);
        continue;
      }
    const p = f ? t(n, f, d, i) : e(n, d.end, u, null, d, i);
    n.schema.compat && xn(s.indent, f, i), a = p.range[2], c.items.push(p);
  }
  return c.range = [s.offset, a, l ?? a], c;
}
function At(t, e, n, s) {
  let i = "";
  if (t) {
    let r = !1, o = "";
    for (const c of t) {
      const { source: a, type: l } = c;
      switch (l) {
        case "space":
          r = !0;
          break;
        case "comment": {
          n && !r && s(c, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
          const u = a.substring(1) || " ";
          i ? i += o + u : i = u, o = "";
          break;
        }
        case "newline":
          i && (o += a), r = !0;
          break;
        default:
          s(c, "UNEXPECTED_TOKEN", `Unexpected ${l} at node end`);
      }
      e += a.length;
    }
  }
  return { comment: i, offset: e };
}
const En = "Block collections are not allowed within flow collections", Nn = (t) => t && (t.type === "block-map" || t.type === "block-seq");
function dc({ composeNode: t, composeEmptyNode: e }, n, s, i, r) {
  const o = s.start.source === "{", c = o ? "flow map" : "flow sequence", a = r?.nodeClass ?? (o ? te : Oe), l = new a(n.schema);
  l.flow = !0;
  const u = n.atRoot;
  u && (n.atRoot = !1), n.atKey && (n.atKey = !1);
  let f = s.offset + s.start.source.length;
  for (let g = 0; g < s.items.length; ++g) {
    const b = s.items[g], { start: w, key: S, sep: $, value: _ } = b, v = et(w, {
      flow: c,
      indicator: "explicit-key-ind",
      next: S ?? $?.[0],
      offset: f,
      onError: i,
      parentIndent: s.indent,
      startOnNewline: !1
    });
    if (!v.found) {
      if (!v.anchor && !v.tag && !$ && !_) {
        g === 0 && v.comma ? i(v.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${c}`) : g < s.items.length - 1 && i(v.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${c}`), v.comment && (l.comment ? l.comment += `
` + v.comment : l.comment = v.comment), f = v.end;
        continue;
      }
      !o && n.options.strict && kt(S) && i(
        S,
        // checked by containsNewline()
        "MULTILINE_IMPLICIT_KEY",
        "Implicit keys of flow sequence pairs need to be on a single line"
      );
    }
    if (g === 0)
      v.comma && i(v.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${c}`);
    else if (v.comma || i(v.start, "MISSING_CHAR", `Missing , between ${c} items`), v.comment) {
      let E = "";
      e: for (const k of w)
        switch (k.type) {
          case "comma":
          case "space":
            break;
          case "comment":
            E = k.source.substring(1);
            break e;
          default:
            break e;
        }
      if (E) {
        let k = l.items[l.items.length - 1];
        B(k) && (k = k.value ?? k.key), k.comment ? k.comment += `
` + E : k.comment = E, v.comment = v.comment.substring(E.length + 1);
      }
    }
    if (!o && !$ && !v.found) {
      const E = _ ? t(n, _, v, i) : e(n, v.end, $, null, v, i);
      l.items.push(E), f = E.range[2], Nn(_) && i(E.range, "BLOCK_IN_FLOW", En);
    } else {
      n.atKey = !0;
      const E = v.end, k = S ? t(n, S, v, i) : e(n, E, w, null, v, i);
      Nn(S) && i(k.range, "BLOCK_IN_FLOW", En), n.atKey = !1;
      const z = et($ ?? [], {
        flow: c,
        indicator: "map-value-ind",
        next: _,
        offset: k.range[2],
        onError: i,
        parentIndent: s.indent,
        startOnNewline: !1
      });
      if (z.found) {
        if (!o && !v.found && n.options.strict) {
          if ($)
            for (const I of $) {
              if (I === z.found)
                break;
              if (I.type === "newline") {
                i(I, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
                break;
              }
            }
          v.start < z.found.offset - 1024 && i(z.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
        }
      } else _ && ("source" in _ && _.source?.[0] === ":" ? i(_, "MISSING_CHAR", `Missing space after : in ${c}`) : i(z.start, "MISSING_CHAR", `Missing , or : between ${c} items`));
      const Y = _ ? t(n, _, z, i) : z.found ? e(n, z.end, $, null, z, i) : null;
      Y ? Nn(_) && i(Y.range, "BLOCK_IN_FLOW", En) : z.comment && (k.comment ? k.comment += `
` + z.comment : k.comment = z.comment);
      const N = new G(k, Y);
      if (n.options.keepSourceTokens && (N.srcToken = b), o) {
        const I = l;
        mr(n, I.items, k) && i(E, "DUPLICATE_KEY", "Map keys must be unique"), I.items.push(N);
      } else {
        const I = new te(n.schema);
        I.flow = !0, I.items.push(N);
        const D = (Y ?? k).range;
        I.range = [k.range[0], D[1], D[2]], l.items.push(I);
      }
      f = Y ? Y.range[2] : z.end;
    }
  }
  const d = o ? "}" : "]", [p, ...m] = s.end;
  let h = f;
  if (p?.source === d)
    h = p.offset + p.source.length;
  else {
    const g = c[0].toUpperCase() + c.substring(1), b = u ? `${g} must end with a ${d}` : `${g} in block collection must be sufficiently indented and end with a ${d}`;
    i(f, u ? "MISSING_CHAR" : "BAD_INDENT", b), p && p.source.length !== 1 && m.unshift(p);
  }
  if (m.length > 0) {
    const g = At(m, h, n.options.strict, i);
    g.comment && (l.comment ? l.comment += `
` + g.comment : l.comment = g.comment), l.range = [s.offset, h, g.offset];
  } else
    l.range = [s.offset, h, h];
  return l;
}
function An(t, e, n, s, i, r) {
  const o = n.type === "block-map" ? uc(t, e, n, s, r) : n.type === "block-seq" ? fc(t, e, n, s, r) : dc(t, e, n, s, r), c = o.constructor;
  return i === "!" || i === c.tagName ? (o.tag = c.tagName, o) : (i && (o.tag = i), o);
}
function hc(t, e, n, s, i) {
  const r = s.tag, o = r ? e.directives.tagName(r.source, (d) => i(r, "TAG_RESOLVE_FAILED", d)) : null;
  if (n.type === "block-seq") {
    const { anchor: d, newlineAfterProp: p } = s, m = d && r ? d.offset > r.offset ? d : r : d ?? r;
    m && (!p || p.offset < m.offset) && i(m, "MISSING_CHAR", "Missing newline after block sequence props");
  }
  const c = n.type === "block-map" ? "map" : n.type === "block-seq" ? "seq" : n.start.source === "{" ? "map" : "seq";
  if (!r || !o || o === "!" || o === te.tagName && c === "map" || o === Oe.tagName && c === "seq")
    return An(t, e, n, i, o);
  let a = e.schema.tags.find((d) => d.tag === o && d.collection === c);
  if (!a) {
    const d = e.schema.knownTags[o];
    if (d?.collection === c)
      e.schema.tags.push(Object.assign({}, d, { default: !1 })), a = d;
    else
      return d ? i(r, "BAD_COLLECTION_TYPE", `${d.tag} used for ${c} collection, but expects ${d.collection ?? "scalar"}`, !0) : i(r, "TAG_RESOLVE_FAILED", `Unresolved tag: ${o}`, !0), An(t, e, n, i, o);
  }
  const l = An(t, e, n, i, o, a), u = a.resolve?.(l, (d) => i(r, "TAG_RESOLVE_FAILED", d), e.options) ?? l, f = K(u) ? u : new A(u);
  return f.range = l.range, f.tag = o, a?.format && (f.format = a.format), f;
}
function gr(t, e, n) {
  const s = e.offset, i = pc(e, t.options.strict, n);
  if (!i)
    return { value: "", type: null, comment: "", range: [s, s, s] };
  const r = i.mode === ">" ? A.BLOCK_FOLDED : A.BLOCK_LITERAL, o = e.source ? mc(e.source) : [];
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
    return e.source && (g += e.source.length), { value: h, type: r, comment: i.comment, range: [s, g, g] };
  }
  let a = e.indent + i.indent, l = e.offset + i.length, u = 0;
  for (let h = 0; h < c; ++h) {
    const [g, b] = o[h];
    if (b === "" || b === "\r")
      i.indent === 0 && g.length > a && (a = g.length);
    else {
      g.length < a && n(l + g.length, "MISSING_CHAR", "Block scalars with more-indented leading empty lines must use an explicit indentation indicator"), i.indent === 0 && (a = g.length), u = h, a === 0 && !t.atRoot && n(l, "BAD_INDENT", "Block scalar values in collections must be indented");
      break;
    }
    l += g.length + b.length + 1;
  }
  for (let h = o.length - 1; h >= c; --h)
    o[h][0].length > a && (c = h + 1);
  let f = "", d = "", p = !1;
  for (let h = 0; h < u; ++h)
    f += o[h][0].slice(a) + `
`;
  for (let h = u; h < c; ++h) {
    let [g, b] = o[h];
    l += g.length + b.length + 1;
    const w = b[b.length - 1] === "\r";
    if (w && (b = b.slice(0, -1)), b && g.length < a) {
      const $ = `Block scalar lines must not be less indented than their ${i.indent ? "explicit indentation indicator" : "first line"}`;
      n(l - b.length - (w ? 2 : 1), "BAD_INDENT", $), g = "";
    }
    r === A.BLOCK_LITERAL ? (f += d + g.slice(a) + b, d = `
`) : g.length > a || b[0] === "	" ? (d === " " ? d = `
` : !p && d === `
` && (d = `

`), f += d + g.slice(a) + b, d = `
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
` + o[h][0].slice(a);
      f[f.length - 1] !== `
` && (f += `
`);
      break;
    default:
      f += `
`;
  }
  const m = s + i.length + e.source.length;
  return { value: f, type: r, comment: i.comment, range: [s, m, m] };
}
function pc({ offset: t, props: e }, n, s) {
  if (e[0].type !== "block-scalar-header")
    return s(e[0], "IMPOSSIBLE", "Block scalar header not found"), null;
  const { source: i } = e[0], r = i[0];
  let o = 0, c = "", a = -1;
  for (let d = 1; d < i.length; ++d) {
    const p = i[d];
    if (!c && (p === "-" || p === "+"))
      c = p;
    else {
      const m = Number(p);
      !o && m ? o = m : a === -1 && (a = t + d);
    }
  }
  a !== -1 && s(a, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${i}`);
  let l = !1, u = "", f = i.length;
  for (let d = 1; d < e.length; ++d) {
    const p = e[d];
    switch (p.type) {
      case "space":
        l = !0;
      // fallthrough
      case "newline":
        f += p.source.length;
        break;
      case "comment":
        n && !l && s(p, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters"), f += p.source.length, u = p.source.substring(1);
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
  return { mode: r, indent: o, chomp: c, comment: u, length: f };
}
function mc(t) {
  const e = t.split(/\n( *)/), n = e[0], s = n.match(/^( *)/), r = [s?.[1] ? [s[1], n.slice(s[1].length)] : ["", n]];
  for (let o = 1; o < e.length; o += 2)
    r.push([e[o], e[o + 1]]);
  return r;
}
function yr(t, e, n) {
  const { offset: s, type: i, source: r, end: o } = t;
  let c, a;
  const l = (d, p, m) => n(s + d, p, m);
  switch (i) {
    case "scalar":
      c = A.PLAIN, a = gc(r, l);
      break;
    case "single-quoted-scalar":
      c = A.QUOTE_SINGLE, a = yc(r, l);
      break;
    case "double-quoted-scalar":
      c = A.QUOTE_DOUBLE, a = bc(r, l);
      break;
    /* istanbul ignore next should not happen */
    default:
      return n(t, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${i}`), {
        value: "",
        type: null,
        comment: "",
        range: [s, s + r.length, s + r.length]
      };
  }
  const u = s + r.length, f = At(o, u, e, n);
  return {
    value: a,
    type: c,
    comment: f.comment,
    range: [s, u, f.offset]
  };
}
function gc(t, e) {
  let n = "";
  switch (t[0]) {
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
      n = `block scalar indicator ${t[0]}`;
      break;
    }
    case "@":
    case "`": {
      n = `reserved character ${t[0]}`;
      break;
    }
  }
  return n && e(0, "BAD_SCALAR_START", `Plain value cannot start with ${n}`), br(t);
}
function yc(t, e) {
  return (t[t.length - 1] !== "'" || t.length === 1) && e(t.length, "MISSING_CHAR", "Missing closing 'quote"), br(t.slice(1, -1)).replace(/''/g, "'");
}
function br(t) {
  const e = /(.*?)\r?\n/sy;
  let n = e.exec(t);
  if (!n)
    return t;
  let s, i;
  try {
    s = new RegExp("(?<![ 	])[ 	]+$"), i = new RegExp("^[ 	]+|(?<![ 	])[ 	]+$", "g");
  } catch {
    s = /[ \t]+$/, i = /^[ \t]+|[ \t]+$/g;
  }
  let r = n[1].replace(s, ""), o = " ", c = e.lastIndex;
  for (; n = e.exec(t); ) {
    const l = n[1].replace(i, "");
    l === "" ? o === `
` ? r += o : o = `
` : (r += o + l, o = " "), c = e.lastIndex;
  }
  const a = /[ \t]*(.*)/sy;
  return a.lastIndex = c, n = a.exec(t), r + o + (n?.[1] ?? "");
}
function bc(t, e) {
  let n = "";
  for (let s = 1; s < t.length - 1; ++s) {
    const i = t[s];
    if (!(i === "\r" && t[s + 1] === `
`))
      if (i === `
`) {
        const { fold: r, offset: o } = wc(t, s);
        n += r, s = o;
      } else if (i === "\\") {
        let r = t[++s];
        const o = _c[r];
        if (o)
          n += o;
        else if (r === `
`)
          for (r = t[s + 1]; r === " " || r === "	"; )
            r = t[++s + 1];
        else if (r === "\r" && t[s + 1] === `
`)
          for (r = t[++s + 1]; r === " " || r === "	"; )
            r = t[++s + 1];
        else if (r === "x" || r === "u" || r === "U") {
          const c = r === "x" ? 2 : r === "u" ? 4 : 8;
          n += vc(t, s + 1, c, e), s += c;
        } else {
          const c = t.substr(s - 1, 2);
          e(s - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${c}`), n += c;
        }
      } else if (i === " " || i === "	") {
        const r = s;
        let o = t[s + 1];
        for (; o === " " || o === "	"; )
          o = t[++s + 1];
        o !== `
` && !(o === "\r" && t[s + 2] === `
`) && (n += s > r ? t.slice(r, s + 1) : i);
      } else
        n += i;
  }
  return (t[t.length - 1] !== '"' || t.length === 1) && e(t.length, "MISSING_CHAR", 'Missing closing "quote'), n;
}
function wc(t, e) {
  let n = "", s = t[e + 1];
  for (; (s === " " || s === "	" || s === `
` || s === "\r") && !(s === "\r" && t[e + 2] !== `
`); )
    s === `
` && (n += `
`), e += 1, s = t[e + 1];
  return n || (n = " "), { fold: n, offset: e };
}
const _c = {
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
function vc(t, e, n, s) {
  const i = t.substr(e, n), o = i.length === n && /^[0-9a-fA-F]+$/.test(i) ? parseInt(i, 16) : NaN;
  try {
    return String.fromCodePoint(o);
  } catch {
    const c = t.substr(e - 2, n + 2);
    return s(e - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${c}`), c;
  }
}
function wr(t, e, n, s) {
  const { value: i, type: r, comment: o, range: c } = e.type === "block-scalar" ? gr(t, e, s) : yr(e, t.options.strict, s), a = n ? t.directives.tagName(n.source, (f) => s(n, "TAG_RESOLVE_FAILED", f)) : null;
  let l;
  t.options.stringKeys && t.atKey ? l = t.schema[he] : a ? l = kc(t.schema, i, a, n, s) : e.type === "scalar" ? l = Sc(t, i, e, s) : l = t.schema[he];
  let u;
  try {
    const f = l.resolve(i, (d) => s(n ?? e, "TAG_RESOLVE_FAILED", d), t.options);
    u = j(f) ? f : new A(f);
  } catch (f) {
    const d = f instanceof Error ? f.message : String(f);
    s(n ?? e, "TAG_RESOLVE_FAILED", d), u = new A(i);
  }
  return u.range = c, u.source = i, r && (u.type = r), a && (u.tag = a), l.format && (u.format = l.format), o && (u.comment = o), u;
}
function kc(t, e, n, s, i) {
  if (n === "!")
    return t[he];
  const r = [];
  for (const c of t.tags)
    if (!c.collection && c.tag === n)
      if (c.default && c.test)
        r.push(c);
      else
        return c;
  for (const c of r)
    if (c.test?.test(e))
      return c;
  const o = t.knownTags[n];
  return o && !o.collection ? (t.tags.push(Object.assign({}, o, { default: !1, test: void 0 })), o) : (i(s, "TAG_RESOLVE_FAILED", `Unresolved tag: ${n}`, n !== "tag:yaml.org,2002:str"), t[he]);
}
function Sc({ atKey: t, directives: e, schema: n }, s, i, r) {
  const o = n.tags.find((c) => (c.default === !0 || t && c.default === "key") && c.test?.test(s)) || n[he];
  if (n.compat) {
    const c = n.compat.find((a) => a.default && a.test?.test(s)) ?? n[he];
    if (o.tag !== c.tag) {
      const a = e.tagString(o.tag), l = e.tagString(c.tag), u = `Value may be parsed as either ${a} or ${l}`;
      r(i, "TAG_RESOLVE_FAILED", u, !0);
    }
  }
  return o;
}
function $c(t, e, n) {
  if (e) {
    n ?? (n = e.length);
    for (let s = n - 1; s >= 0; --s) {
      let i = e[s];
      switch (i.type) {
        case "space":
        case "comment":
        case "newline":
          t -= i.source.length;
          continue;
      }
      for (i = e[++s]; i?.type === "space"; )
        t += i.source.length, i = e[++s];
      break;
    }
  }
  return t;
}
const Oc = { composeNode: _r, composeEmptyNode: ps };
function _r(t, e, n, s) {
  const i = t.atKey, { spaceBefore: r, comment: o, anchor: c, tag: a } = n;
  let l, u = !0;
  switch (e.type) {
    case "alias":
      l = Ic(t, e, s), (c || a) && s(e, "ALIAS_PROPS", "An alias node must not specify any properties");
      break;
    case "scalar":
    case "single-quoted-scalar":
    case "double-quoted-scalar":
    case "block-scalar":
      l = wr(t, e, a, s), c && (l.anchor = c.source.substring(1));
      break;
    case "block-map":
    case "block-seq":
    case "flow-collection":
      try {
        l = hc(Oc, t, e, n, s), c && (l.anchor = c.source.substring(1));
      } catch (f) {
        const d = f instanceof Error ? f.message : String(f);
        s(e, "RESOURCE_EXHAUSTION", d);
      }
      break;
    default: {
      const f = e.type === "error" ? e.message : `Unsupported token (type: ${e.type})`;
      s(e, "UNEXPECTED_TOKEN", f), u = !1;
    }
  }
  return l ?? (l = ps(t, e.offset, void 0, null, n, s)), c && l.anchor === "" && s(c, "BAD_ALIAS", "Anchor cannot be an empty string"), i && t.options.stringKeys && (!j(l) || typeof l.value != "string" || l.tag && l.tag !== "tag:yaml.org,2002:str") && s(a ?? e, "NON_STRING_KEY", "With stringKeys, all keys must be strings"), r && (l.spaceBefore = !0), o && (e.type === "scalar" && e.source === "" ? l.comment = o : l.commentBefore = o), t.options.keepSourceTokens && u && (l.srcToken = e), l;
}
function ps(t, e, n, s, { spaceBefore: i, comment: r, anchor: o, tag: c, end: a }, l) {
  const u = {
    type: "scalar",
    offset: $c(e, n, s),
    indent: -1,
    source: ""
  }, f = wr(t, u, c, l);
  return o && (f.anchor = o.source.substring(1), f.anchor === "" && l(o, "BAD_ALIAS", "Anchor cannot be an empty string")), i && (f.spaceBefore = !0), r && (f.comment = r, f.range[2] = a), f;
}
function Ic({ options: t }, { offset: e, source: n, end: s }, i) {
  const r = new ln(n.substring(1));
  r.source === "" && i(e, "BAD_ALIAS", "Alias cannot be an empty string"), r.source.endsWith(":") && i(e + n.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", !0);
  const o = e + n.length, c = At(s, o, t.strict, i);
  return r.range = [e, o, c.offset], c.comment && (r.comment = c.comment), r;
}
function Ec(t, e, { offset: n, start: s, value: i, end: r }, o) {
  const c = Object.assign({ _directives: e }, t), a = new ut(void 0, c), l = {
    atKey: !1,
    atRoot: !0,
    directives: a.directives,
    options: a.options,
    schema: a.schema
  }, u = et(s, {
    indicator: "doc-start",
    next: i ?? r?.[0],
    offset: n,
    onError: o,
    parentIndent: 0,
    startOnNewline: !0
  });
  u.found && (a.directives.docStart = !0, i && (i.type === "block-map" || i.type === "block-seq") && !u.hasNewline && o(u.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker")), a.contents = i ? _r(l, i, u, o) : ps(l, u.end, s, null, u, o);
  const f = a.contents.range[2], d = At(r, f, !1, o);
  return d.comment && (a.comment = d.comment), a.range = [n, f, d.offset], a;
}
function ht(t) {
  if (typeof t == "number")
    return [t, t + 1];
  if (Array.isArray(t))
    return t.length === 2 ? t : [t[0], t[1]];
  const { offset: e, source: n } = t;
  return [e, e + (typeof n == "string" ? n.length : 1)];
}
function Fs(t) {
  let e = "", n = !1, s = !1;
  for (let i = 0; i < t.length; ++i) {
    const r = t[i];
    switch (r[0]) {
      case "#":
        e += (e === "" ? "" : s ? `

` : `
`) + (r.substring(1) || " "), n = !0, s = !1;
        break;
      case "%":
        t[i + 1]?.[0] !== "#" && (i += 1), n = !1;
        break;
      default:
        n || (s = !0), n = !1;
    }
  }
  return { comment: e, afterEmptyLine: s };
}
class ms {
  constructor(e = {}) {
    this.doc = null, this.atDirectives = !1, this.prelude = [], this.errors = [], this.warnings = [], this.onError = (n, s, i, r) => {
      const o = ht(n);
      r ? this.warnings.push(new pr(o, s, i)) : this.errors.push(new Le(o, s, i));
    }, this.directives = new X({ version: e.version || "1.2" }), this.options = e;
  }
  decorate(e, n) {
    const { comment: s, afterEmptyLine: i } = Fs(this.prelude);
    if (s) {
      const r = e.contents;
      if (n)
        e.comment = e.comment ? `${e.comment}
${s}` : s;
      else if (i || e.directives.docStart || !r)
        e.commentBefore = s;
      else if (F(r) && !r.flow && r.items.length > 0) {
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
        e.errors.push(this.errors[r]);
      for (let r = 0; r < this.warnings.length; ++r)
        e.warnings.push(this.warnings[r]);
    } else
      e.errors = this.errors, e.warnings = this.warnings;
    this.prelude = [], this.errors = [], this.warnings = [];
  }
  /**
   * Current stream status information.
   *
   * Mostly useful at the end of input for an empty stream.
   */
  streamInfo() {
    return {
      comment: Fs(this.prelude).comment,
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
  *compose(e, n = !1, s = -1) {
    for (const i of e)
      yield* this.next(i);
    yield* this.end(n, s);
  }
  /** Advance the composer by one CST token. */
  *next(e) {
    switch (e.type) {
      case "directive":
        this.directives.add(e.source, (n, s, i) => {
          const r = ht(e);
          r[0] += n, this.onError(r, "BAD_DIRECTIVE", s, i);
        }), this.prelude.push(e.source), this.atDirectives = !0;
        break;
      case "document": {
        const n = Ec(this.options, this.directives, e, this.onError);
        this.atDirectives && !n.directives.docStart && this.onError(e, "MISSING_CHAR", "Missing directives-end/doc-start indicator line"), this.decorate(n, !1), this.doc && (yield this.doc), this.doc = n, this.atDirectives = !1;
        break;
      }
      case "byte-order-mark":
      case "space":
        break;
      case "comment":
      case "newline":
        this.prelude.push(e.source);
        break;
      case "error": {
        const n = e.source ? `${e.message}: ${JSON.stringify(e.source)}` : e.message, s = new Le(ht(e), "UNEXPECTED_TOKEN", n);
        this.atDirectives || !this.doc ? this.errors.push(s) : this.doc.errors.push(s);
        break;
      }
      case "doc-end": {
        if (!this.doc) {
          const s = "Unexpected doc-end without preceding document";
          this.errors.push(new Le(ht(e), "UNEXPECTED_TOKEN", s));
          break;
        }
        this.doc.directives.docEnd = !0;
        const n = At(e.end, e.offset + e.source.length, this.doc.options.strict, this.onError);
        if (this.decorate(this.doc, !0), n.comment) {
          const s = this.doc.comment;
          this.doc.comment = s ? `${s}
${n.comment}` : n.comment;
        }
        this.doc.range[2] = n.offset;
        break;
      }
      default:
        this.errors.push(new Le(ht(e), "UNEXPECTED_TOKEN", `Unsupported token ${e.type}`));
    }
  }
  /**
   * Call at end of input to yield any remaining document.
   *
   * @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
   * @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
   */
  *end(e = !1, n = -1) {
    if (this.doc)
      this.decorate(this.doc, !0), yield this.doc, this.doc = null;
    else if (e) {
      const s = Object.assign({ _directives: this.directives }, this.options), i = new ut(void 0, s);
      this.atDirectives && this.onError(n, "MISSING_CHAR", "Missing directives-end indicator line"), i.range = [0, n, n], this.decorate(i, !1), yield i;
    }
  }
}
function Nc(t, e = !0, n) {
  if (t) {
    const s = (i, r, o) => {
      const c = typeof i == "number" ? i : Array.isArray(i) ? i[0] : i.offset;
      if (n)
        n(c, r, o);
      else
        throw new Le([c, c + 1], r, o);
    };
    switch (t.type) {
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return yr(t, e, s);
      case "block-scalar":
        return gr({ options: { strict: e } }, t, s);
    }
  }
  return null;
}
function Ac(t, e) {
  const { implicitKey: n = !1, indent: s, inFlow: i = !1, offset: r = -1, type: o = "PLAIN" } = e, c = Et({ type: o, value: t }, {
    implicitKey: n,
    indent: s > 0 ? " ".repeat(s) : "",
    inFlow: i,
    options: { blockQuote: !0, lineWidth: -1 }
  }), a = e.end ?? [
    { type: "newline", offset: -1, indent: s, source: `
` }
  ];
  switch (c[0]) {
    case "|":
    case ">": {
      const l = c.indexOf(`
`), u = c.substring(0, l), f = c.substring(l + 1) + `
`, d = [
        { type: "block-scalar-header", offset: r, indent: s, source: u }
      ];
      return vr(d, a) || d.push({ type: "newline", offset: -1, indent: s, source: `
` }), { type: "block-scalar", offset: r, indent: s, props: d, source: f };
    }
    case '"':
      return { type: "double-quoted-scalar", offset: r, indent: s, source: c, end: a };
    case "'":
      return { type: "single-quoted-scalar", offset: r, indent: s, source: c, end: a };
    default:
      return { type: "scalar", offset: r, indent: s, source: c, end: a };
  }
}
function Tc(t, e, n = {}) {
  let { afterKey: s = !1, implicitKey: i = !1, inFlow: r = !1, type: o } = n, c = "indent" in t ? t.indent : null;
  if (s && typeof c == "number" && (c += 2), !o)
    switch (t.type) {
      case "single-quoted-scalar":
        o = "QUOTE_SINGLE";
        break;
      case "double-quoted-scalar":
        o = "QUOTE_DOUBLE";
        break;
      case "block-scalar": {
        const l = t.props[0];
        if (l.type !== "block-scalar-header")
          throw new Error("Invalid block scalar header");
        o = l.source[0] === ">" ? "BLOCK_FOLDED" : "BLOCK_LITERAL";
        break;
      }
      default:
        o = "PLAIN";
    }
  const a = Et({ type: o, value: e }, {
    implicitKey: i || c === null,
    indent: c !== null && c > 0 ? " ".repeat(c) : "",
    inFlow: r,
    options: { blockQuote: !0, lineWidth: -1 }
  });
  switch (a[0]) {
    case "|":
    case ">":
      zc(t, a);
      break;
    case '"':
      Tn(t, a, "double-quoted-scalar");
      break;
    case "'":
      Tn(t, a, "single-quoted-scalar");
      break;
    default:
      Tn(t, a, "scalar");
  }
}
function zc(t, e) {
  const n = e.indexOf(`
`), s = e.substring(0, n), i = e.substring(n + 1) + `
`;
  if (t.type === "block-scalar") {
    const r = t.props[0];
    if (r.type !== "block-scalar-header")
      throw new Error("Invalid block scalar header");
    r.source = s, t.source = i;
  } else {
    const { offset: r } = t, o = "indent" in t ? t.indent : -1, c = [
      { type: "block-scalar-header", offset: r, indent: o, source: s }
    ];
    vr(c, "end" in t ? t.end : void 0) || c.push({ type: "newline", offset: -1, indent: o, source: `
` });
    for (const a of Object.keys(t))
      a !== "type" && a !== "offset" && delete t[a];
    Object.assign(t, { type: "block-scalar", indent: o, props: c, source: i });
  }
}
function vr(t, e) {
  if (e)
    for (const n of e)
      switch (n.type) {
        case "space":
        case "comment":
          t.push(n);
          break;
        case "newline":
          return t.push(n), !0;
      }
  return !1;
}
function Tn(t, e, n) {
  switch (t.type) {
    case "scalar":
    case "double-quoted-scalar":
    case "single-quoted-scalar":
      t.type = n, t.source = e;
      break;
    case "block-scalar": {
      const s = t.props.slice(1);
      let i = e.length;
      t.props[0].type === "block-scalar-header" && (i -= t.props[0].source.length);
      for (const r of s)
        r.offset += i;
      delete t.props, Object.assign(t, { type: n, source: e, end: s });
      break;
    }
    case "block-map":
    case "block-seq": {
      const i = { type: "newline", offset: t.offset + e.length, indent: t.indent, source: `
` };
      delete t.items, Object.assign(t, { type: n, source: e, end: [i] });
      break;
    }
    default: {
      const s = "indent" in t ? t.indent : -1, i = "end" in t && Array.isArray(t.end) ? t.end.filter((r) => r.type === "space" || r.type === "comment" || r.type === "newline") : [];
      for (const r of Object.keys(t))
        r !== "type" && r !== "offset" && delete t[r];
      Object.assign(t, { type: n, indent: s, source: e, end: i });
    }
  }
}
const Pc = (t) => "type" in t ? Qt(t) : Jt(t);
function Qt(t) {
  switch (t.type) {
    case "block-scalar": {
      let e = "";
      for (const n of t.props)
        e += Qt(n);
      return e + t.source;
    }
    case "block-map":
    case "block-seq": {
      let e = "";
      for (const n of t.items)
        e += Jt(n);
      return e;
    }
    case "flow-collection": {
      let e = t.start.source;
      for (const n of t.items)
        e += Jt(n);
      for (const n of t.end)
        e += n.source;
      return e;
    }
    case "document": {
      let e = Jt(t);
      if (t.end)
        for (const n of t.end)
          e += n.source;
      return e;
    }
    default: {
      let e = t.source;
      if ("end" in t && t.end)
        for (const n of t.end)
          e += n.source;
      return e;
    }
  }
}
function Jt({ start: t, key: e, sep: n, value: s }) {
  let i = "";
  for (const r of t)
    i += r.source;
  if (e && (i += Qt(e)), n)
    for (const r of n)
      i += r.source;
  return s && (i += Qt(s)), i;
}
const Fn = /* @__PURE__ */ Symbol("break visit"), Lc = /* @__PURE__ */ Symbol("skip children"), kr = /* @__PURE__ */ Symbol("remove item");
function je(t, e) {
  "type" in t && t.type === "document" && (t = { start: t.start, value: t.value }), Sr(Object.freeze([]), t, e);
}
je.BREAK = Fn;
je.SKIP = Lc;
je.REMOVE = kr;
je.itemAtPath = (t, e) => {
  let n = t;
  for (const [s, i] of e) {
    const r = n?.[s];
    if (r && "items" in r)
      n = r.items[i];
    else
      return;
  }
  return n;
};
je.parentCollection = (t, e) => {
  const n = je.itemAtPath(t, e.slice(0, -1)), s = e[e.length - 1][0], i = n?.[s];
  if (i && "items" in i)
    return i;
  throw new Error("Parent collection not found");
};
function Sr(t, e, n) {
  let s = n(e, t);
  if (typeof s == "symbol")
    return s;
  for (const i of ["key", "value"]) {
    const r = e[i];
    if (r && "items" in r) {
      for (let o = 0; o < r.items.length; ++o) {
        const c = Sr(Object.freeze(t.concat([[i, o]])), r.items[o], n);
        if (typeof c == "number")
          o = c - 1;
        else {
          if (c === Fn)
            return Fn;
          c === kr && (r.items.splice(o, 1), o -= 1);
        }
      }
      typeof s == "function" && i === "key" && (s = s(e, t));
    }
  }
  return typeof s == "function" ? s(e, t) : s;
}
const wn = "\uFEFF", _n = "", vn = "", St = "", Cc = (t) => !!t && "items" in t, Mc = (t) => !!t && (t.type === "scalar" || t.type === "single-quoted-scalar" || t.type === "double-quoted-scalar" || t.type === "block-scalar");
function jc(t) {
  switch (t) {
    case wn:
      return "<BOM>";
    case _n:
      return "<DOC>";
    case vn:
      return "<FLOW_END>";
    case St:
      return "<SCALAR>";
    default:
      return JSON.stringify(t);
  }
}
function $r(t) {
  switch (t) {
    case wn:
      return "byte-order-mark";
    case _n:
      return "doc-mode";
    case vn:
      return "flow-error-end";
    case St:
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
  switch (t[0]) {
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
const Dc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BOM: wn,
  DOCUMENT: _n,
  FLOW_END: vn,
  SCALAR: St,
  createScalarToken: Ac,
  isCollection: Cc,
  isScalar: Mc,
  prettyToken: jc,
  resolveAsScalar: Nc,
  setScalarValue: Tc,
  stringify: Pc,
  tokenType: $r,
  visit: je
}, Symbol.toStringTag, { value: "Module" }));
function ae(t) {
  switch (t) {
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
const Ks = new Set("0123456789ABCDEFabcdef"), Zc = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"), jt = new Set(",[]{}"), Rc = new Set(` ,[]{}
\r	`), zn = (t) => !t || Rc.has(t);
class Or {
  constructor() {
    this.atEnd = !1, this.blockScalarIndent = -1, this.blockScalarKeep = !1, this.buffer = "", this.flowKey = !1, this.flowLevel = 0, this.indentNext = 0, this.indentValue = 0, this.lineEndPos = null, this.next = null, this.pos = 0;
  }
  /**
   * Generate YAML tokens from the `source` string. If `incomplete`,
   * a part of the last line may be left as a buffer for the next call.
   *
   * @returns A generator of lexical tokens
   */
  *lex(e, n = !1) {
    if (e) {
      if (typeof e != "string")
        throw TypeError("source is not a string");
      this.buffer = this.buffer ? this.buffer + e : e, this.lineEndPos = null;
    }
    this.atEnd = !n;
    let s = this.next ?? "stream";
    for (; s && (n || this.hasChars(1)); )
      s = yield* this.parseNext(s);
  }
  atLineEnd() {
    let e = this.pos, n = this.buffer[e];
    for (; n === " " || n === "	"; )
      n = this.buffer[++e];
    return !n || n === "#" || n === `
` ? !0 : n === "\r" ? this.buffer[e + 1] === `
` : !1;
  }
  charAt(e) {
    return this.buffer[this.pos + e];
  }
  continueScalar(e) {
    let n = this.buffer[e];
    if (this.indentNext > 0) {
      let s = 0;
      for (; n === " "; )
        n = this.buffer[++s + e];
      if (n === "\r") {
        const i = this.buffer[s + e + 1];
        if (i === `
` || !i && !this.atEnd)
          return e + s + 1;
      }
      return n === `
` || s >= this.indentNext || !n && !this.atEnd ? e + s : -1;
    }
    if (n === "-" || n === ".") {
      const s = this.buffer.substr(e, 3);
      if ((s === "---" || s === "...") && ae(this.buffer[e + 3]))
        return -1;
    }
    return e;
  }
  getLine() {
    let e = this.lineEndPos;
    return (typeof e != "number" || e !== -1 && e < this.pos) && (e = this.buffer.indexOf(`
`, this.pos), this.lineEndPos = e), e === -1 ? this.atEnd ? this.buffer.substring(this.pos) : null : (this.buffer[e - 1] === "\r" && (e -= 1), this.buffer.substring(this.pos, e));
  }
  hasChars(e) {
    return this.pos + e <= this.buffer.length;
  }
  setNext(e) {
    return this.buffer = this.buffer.substring(this.pos), this.pos = 0, this.lineEndPos = null, this.next = e, null;
  }
  peek(e) {
    return this.buffer.substr(this.pos, e);
  }
  *parseNext(e) {
    switch (e) {
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
    let e = this.getLine();
    if (e === null)
      return this.setNext("stream");
    if (e[0] === wn && (yield* this.pushCount(1), e = e.substring(1)), e[0] === "%") {
      let n = e.length, s = e.indexOf("#");
      for (; s !== -1; ) {
        const r = e[s - 1];
        if (r === " " || r === "	") {
          n = s - 1;
          break;
        } else
          s = e.indexOf("#", s + 1);
      }
      for (; ; ) {
        const r = e[n - 1];
        if (r === " " || r === "	")
          n -= 1;
        else
          break;
      }
      const i = (yield* this.pushCount(n)) + (yield* this.pushSpaces(!0));
      return yield* this.pushCount(e.length - i), this.pushNewline(), "stream";
    }
    if (this.atLineEnd()) {
      const n = yield* this.pushSpaces(!0);
      return yield* this.pushCount(e.length - n), yield* this.pushNewline(), "stream";
    }
    return yield _n, yield* this.parseLineStart();
  }
  *parseLineStart() {
    const e = this.charAt(0);
    if (!e && !this.atEnd)
      return this.setNext("line-start");
    if (e === "-" || e === ".") {
      if (!this.atEnd && !this.hasChars(4))
        return this.setNext("line-start");
      const n = this.peek(3);
      if ((n === "---" || n === "...") && ae(this.charAt(3)))
        return yield* this.pushCount(3), this.indentValue = 0, this.indentNext = 0, n === "---" ? "doc" : "stream";
    }
    return this.indentValue = yield* this.pushSpaces(!1), this.indentNext > this.indentValue && !ae(this.charAt(1)) && (this.indentNext = this.indentValue), yield* this.parseBlockStart();
  }
  *parseBlockStart() {
    const [e, n] = this.peek(2);
    if (!n && !this.atEnd)
      return this.setNext("block-start");
    if ((e === "-" || e === "?" || e === ":") && ae(n)) {
      const s = (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0));
      return this.indentNext = this.indentValue + 1, this.indentValue += s, "block-start";
    }
    return "doc";
  }
  *parseDocument() {
    yield* this.pushSpaces(!0);
    const e = this.getLine();
    if (e === null)
      return this.setNext("doc");
    let n = yield* this.pushIndicators();
    switch (e[n]) {
      case "#":
        yield* this.pushCount(e.length - n);
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
        return yield* this.pushUntil(zn), "doc";
      case '"':
      case "'":
        return yield* this.parseQuotedScalar();
      case "|":
      case ">":
        return n += yield* this.parseBlockScalarHeader(), n += yield* this.pushSpaces(!0), yield* this.pushCount(e.length - n), yield* this.pushNewline(), yield* this.parseBlockScalar();
      default:
        return yield* this.parsePlainScalar();
    }
  }
  *parseFlowCollection() {
    let e, n, s = -1;
    do
      e = yield* this.pushNewline(), e > 0 ? (n = yield* this.pushSpaces(!1), this.indentValue = s = n) : n = 0, n += yield* this.pushSpaces(!0);
    while (e + n > 0);
    const i = this.getLine();
    if (i === null)
      return this.setNext("flow");
    if ((s !== -1 && s < this.indentNext && i[0] !== "#" || s === 0 && (i.startsWith("---") || i.startsWith("...")) && ae(i[3])) && !(s === this.indentNext - 1 && this.flowLevel === 1 && (i[0] === "]" || i[0] === "}")))
      return this.flowLevel = 0, yield vn, yield* this.parseLineStart();
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
        return yield* this.pushUntil(zn), "flow";
      case '"':
      case "'":
        return this.flowKey = !0, yield* this.parseQuotedScalar();
      case ":": {
        const o = this.charAt(1);
        if (this.flowKey || ae(o) || o === ",")
          return this.flowKey = !1, yield* this.pushCount(1), yield* this.pushSpaces(!0), "flow";
      }
      // fallthrough
      default:
        return this.flowKey = !1, yield* this.parsePlainScalar();
    }
  }
  *parseQuotedScalar() {
    const e = this.charAt(0);
    let n = this.buffer.indexOf(e, this.pos + 1);
    if (e === "'")
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
    let e = this.pos;
    for (; ; ) {
      const n = this.buffer[++e];
      if (n === "+")
        this.blockScalarKeep = !0;
      else if (n > "0" && n <= "9")
        this.blockScalarIndent = Number(n) - 1;
      else if (n !== "-")
        break;
    }
    return yield* this.pushUntil((n) => ae(n) || n === "#");
  }
  *parseBlockScalar() {
    let e = this.pos - 1, n = 0, s;
    e: for (let r = this.pos; s = this.buffer[r]; ++r)
      switch (s) {
        case " ":
          n += 1;
          break;
        case `
`:
          e = r, n = 0;
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
        const r = this.continueScalar(e + 1);
        if (r === -1)
          break;
        e = this.buffer.indexOf(`
`, r);
      } while (e !== -1);
      if (e === -1) {
        if (!this.atEnd)
          return this.setNext("block-scalar");
        e = this.buffer.length;
      }
    }
    let i = e + 1;
    for (s = this.buffer[i]; s === " "; )
      s = this.buffer[++i];
    if (s === "	") {
      for (; s === "	" || s === " " || s === "\r" || s === `
`; )
        s = this.buffer[++i];
      e = i - 1;
    } else if (!this.blockScalarKeep)
      do {
        let r = e - 1, o = this.buffer[r];
        o === "\r" && (o = this.buffer[--r]);
        const c = r;
        for (; o === " "; )
          o = this.buffer[--r];
        if (o === `
` && r >= this.pos && r + 1 + n > c)
          e = r;
        else
          break;
      } while (!0);
    return yield St, yield* this.pushToIndex(e + 1, !0), yield* this.parseLineStart();
  }
  *parsePlainScalar() {
    const e = this.flowLevel > 0;
    let n = this.pos - 1, s = this.pos - 1, i;
    for (; i = this.buffer[++s]; )
      if (i === ":") {
        const r = this.buffer[s + 1];
        if (ae(r) || e && jt.has(r))
          break;
        n = s;
      } else if (ae(i)) {
        let r = this.buffer[s + 1];
        if (i === "\r" && (r === `
` ? (s += 1, i = `
`, r = this.buffer[s + 1]) : n = s), r === "#" || e && jt.has(r))
          break;
        if (i === `
`) {
          const o = this.continueScalar(s + 1);
          if (o === -1)
            break;
          s = Math.max(s, o - 2);
        }
      } else {
        if (e && jt.has(i))
          break;
        n = s;
      }
    return !i && !this.atEnd ? this.setNext("plain-scalar") : (yield St, yield* this.pushToIndex(n + 1, !0), e ? "flow" : "doc");
  }
  *pushCount(e) {
    return e > 0 ? (yield this.buffer.substr(this.pos, e), this.pos += e, e) : 0;
  }
  *pushToIndex(e, n) {
    const s = this.buffer.slice(this.pos, e);
    return s ? (yield s, this.pos += s.length, s.length) : (n && (yield ""), 0);
  }
  *pushIndicators() {
    let e = 0;
    e: for (; ; ) {
      switch (this.charAt(0)) {
        case "!":
          e += yield* this.pushTag(), e += yield* this.pushSpaces(!0);
          continue e;
        case "&":
          e += yield* this.pushUntil(zn), e += yield* this.pushSpaces(!0);
          continue e;
        case "-":
        // this is an error
        case "?":
        // this is an error outside flow collections
        case ":": {
          const n = this.flowLevel > 0, s = this.charAt(1);
          if (ae(s) || n && jt.has(s)) {
            n ? this.flowKey && (this.flowKey = !1) : this.indentNext = this.indentValue + 1, e += yield* this.pushCount(1), e += yield* this.pushSpaces(!0);
            continue e;
          }
        }
      }
      break e;
    }
    return e;
  }
  *pushTag() {
    if (this.charAt(1) === "<") {
      let e = this.pos + 2, n = this.buffer[e];
      for (; !ae(n) && n !== ">"; )
        n = this.buffer[++e];
      return yield* this.pushToIndex(n === ">" ? e + 1 : e, !1);
    } else {
      let e = this.pos + 1, n = this.buffer[e];
      for (; n; )
        if (Zc.has(n))
          n = this.buffer[++e];
        else if (n === "%" && Ks.has(this.buffer[e + 1]) && Ks.has(this.buffer[e + 2]))
          n = this.buffer[e += 3];
        else
          break;
      return yield* this.pushToIndex(e, !1);
    }
  }
  *pushNewline() {
    const e = this.buffer[this.pos];
    return e === `
` ? yield* this.pushCount(1) : e === "\r" && this.charAt(1) === `
` ? yield* this.pushCount(2) : 0;
  }
  *pushSpaces(e) {
    let n = this.pos - 1, s;
    do
      s = this.buffer[++n];
    while (s === " " || e && s === "	");
    const i = n - this.pos;
    return i > 0 && (yield this.buffer.substr(this.pos, i), this.pos = n), i;
  }
  *pushUntil(e) {
    let n = this.pos, s = this.buffer[n];
    for (; !e(s); )
      s = this.buffer[++n];
    return yield* this.pushToIndex(n, !1);
  }
}
class Ir {
  constructor() {
    this.lineStarts = [], this.addNewLine = (e) => this.lineStarts.push(e), this.linePos = (e) => {
      let n = 0, s = this.lineStarts.length;
      for (; n < s; ) {
        const r = n + s >> 1;
        this.lineStarts[r] < e ? n = r + 1 : s = r;
      }
      if (this.lineStarts[n] === e)
        return { line: n + 1, col: 1 };
      if (n === 0)
        return { line: 0, col: e };
      const i = this.lineStarts[n - 1];
      return { line: n, col: e - i + 1 };
    };
  }
}
function _e(t, e) {
  for (let n = 0; n < t.length; ++n)
    if (t[n].type === e)
      return !0;
  return !1;
}
function Vs(t) {
  for (let e = 0; e < t.length; ++e)
    switch (t[e].type) {
      case "space":
      case "comment":
      case "newline":
        break;
      default:
        return e;
    }
  return -1;
}
function Er(t) {
  switch (t?.type) {
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
function Dt(t) {
  switch (t.type) {
    case "document":
      return t.start;
    case "block-map": {
      const e = t.items[t.items.length - 1];
      return e.sep ?? e.start;
    }
    case "block-seq":
      return t.items[t.items.length - 1].start;
    /* istanbul ignore next should not happen */
    default:
      return [];
  }
}
function Ke(t) {
  if (t.length === 0)
    return [];
  let e = t.length;
  e: for (; --e >= 0; )
    switch (t[e].type) {
      case "doc-start":
      case "explicit-key-ind":
      case "map-value-ind":
      case "seq-item-ind":
      case "newline":
        break e;
    }
  for (; t[++e]?.type === "space"; )
    ;
  return t.splice(e, t.length);
}
function en(t, e) {
  if (e.length < 1e5)
    Array.prototype.push.apply(t, e);
  else
    for (let n = 0; n < e.length; ++n)
      t.push(e[n]);
}
function qs(t) {
  if (t.start.type === "flow-seq-start")
    for (const e of t.items)
      e.sep && !e.value && !_e(e.start, "explicit-key-ind") && !_e(e.sep, "map-value-ind") && (e.key && (e.value = e.key), delete e.key, Er(e.value) ? e.value.end ? en(e.value.end, e.sep) : e.value.end = e.sep : en(e.start, e.sep), delete e.sep);
}
class gs {
  /**
   * @param onNewLine - If defined, called separately with the start position of
   *   each new line (in `parse()`, including the start of input).
   */
  constructor(e) {
    this.atNewLine = !0, this.atScalar = !1, this.indent = 0, this.offset = 0, this.onKeyLine = !1, this.stack = [], this.source = "", this.type = "", this.lexer = new Or(), this.onNewLine = e;
  }
  /**
   * Parse `source` as a YAML stream.
   * If `incomplete`, a part of the last line may be left as a buffer for the next call.
   *
   * Errors are not thrown, but yielded as `{ type: 'error', message }` tokens.
   *
   * @returns A generator of tokens representing each directive, document, and other structure.
   */
  *parse(e, n = !1) {
    this.onNewLine && this.offset === 0 && this.onNewLine(0);
    for (const s of this.lexer.lex(e, n))
      yield* this.next(s);
    n || (yield* this.end());
  }
  /**
   * Advance the parser by the `source` of one lexical token.
   */
  *next(e) {
    if (this.source = e, this.atScalar) {
      this.atScalar = !1, yield* this.step(), this.offset += e.length;
      return;
    }
    const n = $r(e);
    if (n)
      if (n === "scalar")
        this.atNewLine = !1, this.atScalar = !0, this.type = "scalar";
      else {
        switch (this.type = n, yield* this.step(), n) {
          case "newline":
            this.atNewLine = !0, this.indent = 0, this.onNewLine && this.onNewLine(this.offset + e.length);
            break;
          case "space":
            this.atNewLine && e[0] === " " && (this.indent += e.length);
            break;
          case "explicit-key-ind":
          case "map-value-ind":
          case "seq-item-ind":
            this.atNewLine && (this.indent += e.length);
            break;
          case "doc-mode":
          case "flow-error-end":
            return;
          default:
            this.atNewLine = !1;
        }
        this.offset += e.length;
      }
    else {
      const s = `Not a YAML token: ${e}`;
      yield* this.pop({ type: "error", offset: this.offset, message: s, source: e }), this.offset += e.length;
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
    const e = this.peek(1);
    if (this.type === "doc-end" && e?.type !== "doc-end") {
      for (; this.stack.length > 0; )
        yield* this.pop();
      this.stack.push({
        type: "doc-end",
        offset: this.offset,
        source: this.source
      });
      return;
    }
    if (!e)
      return yield* this.stream();
    switch (e.type) {
      case "document":
        return yield* this.document(e);
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return yield* this.scalar(e);
      case "block-scalar":
        return yield* this.blockScalar(e);
      case "block-map":
        return yield* this.blockMap(e);
      case "block-seq":
        return yield* this.blockSequence(e);
      case "flow-collection":
        return yield* this.flowCollection(e);
      case "doc-end":
        return yield* this.documentEnd(e);
    }
    yield* this.pop();
  }
  peek(e) {
    return this.stack[this.stack.length - e];
  }
  *pop(e) {
    const n = e ?? this.stack.pop();
    if (!n)
      yield { type: "error", offset: this.offset, source: "", message: "Tried to pop an empty stack" };
    else if (this.stack.length === 0)
      yield n;
    else {
      const s = this.peek(1);
      switch (n.type === "block-scalar" ? n.indent = "indent" in s ? s.indent : 0 : n.type === "flow-collection" && s.type === "document" && (n.indent = 0), n.type === "flow-collection" && qs(n), s.type) {
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
        i && !i.sep && !i.value && i.start.length > 0 && Vs(i.start) === -1 && (n.indent === 0 || i.start.every((r) => r.type !== "comment" || r.indent < n.indent)) && (s.type === "document" ? s.end = i.start : s.items.push({ start: i.start }), n.items.splice(-1, 1));
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
        const e = {
          type: "document",
          offset: this.offset,
          start: []
        };
        this.type === "doc-start" && e.start.push(this.sourceToken), this.stack.push(e);
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
  *document(e) {
    if (e.value)
      return yield* this.lineEnd(e);
    switch (this.type) {
      case "doc-start": {
        Vs(e.start) !== -1 ? (yield* this.pop(), yield* this.step()) : e.start.push(this.sourceToken);
        return;
      }
      case "anchor":
      case "tag":
      case "space":
      case "comment":
      case "newline":
        e.start.push(this.sourceToken);
        return;
    }
    const n = this.startBlockValue(e);
    n ? this.stack.push(n) : yield {
      type: "error",
      offset: this.offset,
      message: `Unexpected ${this.type} token in YAML document`,
      source: this.source
    };
  }
  *scalar(e) {
    if (this.type === "map-value-ind") {
      const n = Dt(this.peek(2)), s = Ke(n);
      let i;
      e.end ? (i = e.end, i.push(this.sourceToken), delete e.end) : i = [this.sourceToken];
      const r = {
        type: "block-map",
        offset: e.offset,
        indent: e.indent,
        items: [{ start: s, key: e, sep: i }]
      };
      this.onKeyLine = !0, this.stack[this.stack.length - 1] = r;
    } else
      yield* this.lineEnd(e);
  }
  *blockScalar(e) {
    switch (this.type) {
      case "space":
      case "comment":
      case "newline":
        e.props.push(this.sourceToken);
        return;
      case "scalar":
        if (e.source = this.source, this.atNewLine = !0, this.indent = 0, this.onNewLine) {
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
  *blockMap(e) {
    const n = e.items[e.items.length - 1];
    switch (this.type) {
      case "newline":
        if (this.onKeyLine = !1, n.value) {
          const s = "end" in n.value ? n.value.end : void 0;
          (Array.isArray(s) ? s[s.length - 1] : void 0)?.type === "comment" ? s?.push(this.sourceToken) : e.items.push({ start: [this.sourceToken] });
        } else n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (n.value)
          e.items.push({ start: [this.sourceToken] });
        else if (n.sep)
          n.sep.push(this.sourceToken);
        else {
          if (this.atIndentedComment(n.start, e.indent)) {
            const i = e.items[e.items.length - 2]?.value?.end;
            if (Array.isArray(i)) {
              en(i, n.start), i.push(this.sourceToken), e.items.pop();
              return;
            }
          }
          n.start.push(this.sourceToken);
        }
        return;
    }
    if (this.indent >= e.indent) {
      const s = !this.onKeyLine && this.indent === e.indent, i = s && (n.sep || n.explicitKey) && this.type !== "seq-item-ind";
      let r = [];
      if (i && n.sep && !n.value) {
        const o = [];
        for (let c = 0; c < n.sep.length; ++c) {
          const a = n.sep[c];
          switch (a.type) {
            case "newline":
              o.push(c);
              break;
            case "space":
              break;
            case "comment":
              a.indent > e.indent && (o.length = 0);
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
          i || n.value ? (r.push(this.sourceToken), e.items.push({ start: r }), this.onKeyLine = !0) : n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
          return;
        case "explicit-key-ind":
          !n.sep && !n.explicitKey ? (n.start.push(this.sourceToken), n.explicitKey = !0) : i || n.value ? (r.push(this.sourceToken), e.items.push({ start: r, explicitKey: !0 })) : this.stack.push({
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
                e.items.push({ start: [], key: null, sep: [this.sourceToken] });
              else if (_e(n.sep, "map-value-ind"))
                this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: r, key: null, sep: [this.sourceToken] }]
                });
              else if (Er(n.key) && !_e(n.sep, "newline")) {
                const o = Ke(n.start), c = n.key, a = n.sep;
                a.push(this.sourceToken), delete n.key, delete n.sep, this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: o, key: c, sep: a }]
                });
              } else r.length > 0 ? n.sep = n.sep.concat(r, this.sourceToken) : n.sep.push(this.sourceToken);
            else if (_e(n.start, "newline"))
              Object.assign(n, { key: null, sep: [this.sourceToken] });
            else {
              const o = Ke(n.start);
              this.stack.push({
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [{ start: o, key: null, sep: [this.sourceToken] }]
              });
            }
          else
            n.sep ? n.value || i ? e.items.push({ start: r, key: null, sep: [this.sourceToken] }) : _e(n.sep, "map-value-ind") ? this.stack.push({
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
          i || n.value ? (e.items.push({ start: r, key: o, sep: [] }), this.onKeyLine = !0) : n.sep ? this.stack.push(o) : (Object.assign(n, { key: o, sep: [] }), this.onKeyLine = !0);
          return;
        }
        default: {
          const o = this.startBlockValue(e);
          if (o) {
            if (o.type === "block-seq") {
              if (!n.explicitKey && n.sep && !_e(n.sep, "newline")) {
                yield* this.pop({
                  type: "error",
                  offset: this.offset,
                  message: "Unexpected block-seq-ind on same line with key",
                  source: this.source
                });
                return;
              }
            } else s && e.items.push({ start: r });
            this.stack.push(o);
            return;
          }
        }
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *blockSequence(e) {
    const n = e.items[e.items.length - 1];
    switch (this.type) {
      case "newline":
        if (n.value) {
          const s = "end" in n.value ? n.value.end : void 0;
          (Array.isArray(s) ? s[s.length - 1] : void 0)?.type === "comment" ? s?.push(this.sourceToken) : e.items.push({ start: [this.sourceToken] });
        } else
          n.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (n.value)
          e.items.push({ start: [this.sourceToken] });
        else {
          if (this.atIndentedComment(n.start, e.indent)) {
            const i = e.items[e.items.length - 2]?.value?.end;
            if (Array.isArray(i)) {
              en(i, n.start), i.push(this.sourceToken), e.items.pop();
              return;
            }
          }
          n.start.push(this.sourceToken);
        }
        return;
      case "anchor":
      case "tag":
        if (n.value || this.indent <= e.indent)
          break;
        n.start.push(this.sourceToken);
        return;
      case "seq-item-ind":
        if (this.indent !== e.indent)
          break;
        n.value || _e(n.start, "seq-item-ind") ? e.items.push({ start: [this.sourceToken] }) : n.start.push(this.sourceToken);
        return;
    }
    if (this.indent > e.indent) {
      const s = this.startBlockValue(e);
      if (s) {
        this.stack.push(s);
        return;
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *flowCollection(e) {
    const n = e.items[e.items.length - 1];
    if (this.type === "flow-error-end") {
      let s;
      do
        yield* this.pop(), s = this.peek(1);
      while (s?.type === "flow-collection");
    } else if (e.end.length === 0) {
      switch (this.type) {
        case "comma":
        case "explicit-key-ind":
          !n || n.sep ? e.items.push({ start: [this.sourceToken] }) : n.start.push(this.sourceToken);
          return;
        case "map-value-ind":
          !n || n.value ? e.items.push({ start: [], key: null, sep: [this.sourceToken] }) : n.sep ? n.sep.push(this.sourceToken) : Object.assign(n, { key: null, sep: [this.sourceToken] });
          return;
        case "space":
        case "comment":
        case "newline":
        case "anchor":
        case "tag":
          !n || n.value ? e.items.push({ start: [this.sourceToken] }) : n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
          return;
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar": {
          const i = this.flowScalar(this.type);
          !n || n.value ? e.items.push({ start: [], key: i, sep: [] }) : n.sep ? this.stack.push(i) : Object.assign(n, { key: i, sep: [] });
          return;
        }
        case "flow-map-end":
        case "flow-seq-end":
          e.end.push(this.sourceToken);
          return;
      }
      const s = this.startBlockValue(e);
      s ? this.stack.push(s) : (yield* this.pop(), yield* this.step());
    } else {
      const s = this.peek(2);
      if (s.type === "block-map" && (this.type === "map-value-ind" && s.indent === e.indent || this.type === "newline" && !s.items[s.items.length - 1].sep))
        yield* this.pop(), yield* this.step();
      else if (this.type === "map-value-ind" && s.type !== "flow-collection") {
        const i = Dt(s), r = Ke(i);
        qs(e);
        const o = e.end.splice(1, e.end.length);
        o.push(this.sourceToken);
        const c = {
          type: "block-map",
          offset: e.offset,
          indent: e.indent,
          items: [{ start: r, key: e, sep: o }]
        };
        this.onKeyLine = !0, this.stack[this.stack.length - 1] = c;
      } else
        yield* this.lineEnd(e);
    }
  }
  flowScalar(e) {
    if (this.onNewLine) {
      let n = this.source.indexOf(`
`) + 1;
      for (; n !== 0; )
        this.onNewLine(this.offset + n), n = this.source.indexOf(`
`, n) + 1;
    }
    return {
      type: e,
      offset: this.offset,
      indent: this.indent,
      source: this.source
    };
  }
  startBlockValue(e) {
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
        const n = Dt(e), s = Ke(n);
        return s.push(this.sourceToken), {
          type: "block-map",
          offset: this.offset,
          indent: this.indent,
          items: [{ start: s, explicitKey: !0 }]
        };
      }
      case "map-value-ind": {
        this.onKeyLine = !0;
        const n = Dt(e), s = Ke(n);
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
  atIndentedComment(e, n) {
    return this.type !== "comment" || this.indent <= n ? !1 : e.every((s) => s.type === "newline" || s.type === "space");
  }
  *documentEnd(e) {
    this.type !== "doc-mode" && (e.end ? e.end.push(this.sourceToken) : e.end = [this.sourceToken], this.type === "newline" && (yield* this.pop()));
  }
  *lineEnd(e) {
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
        e.end ? e.end.push(this.sourceToken) : e.end = [this.sourceToken], this.type === "newline" && (yield* this.pop());
    }
  }
}
function Nr(t) {
  const e = t.prettyErrors !== !1;
  return { lineCounter: t.lineCounter || e && new Ir() || null, prettyErrors: e };
}
function Bc(t, e = {}) {
  const { lineCounter: n, prettyErrors: s } = Nr(e), i = new gs(n?.addNewLine), r = new ms(e), o = Array.from(r.compose(i.parse(t)));
  if (s && n)
    for (const c of o)
      c.errors.forEach(Ht(t, n)), c.warnings.forEach(Ht(t, n));
  return o.length > 0 ? o : Object.assign([], { empty: !0 }, r.streamInfo());
}
function Ar(t, e = {}) {
  const { lineCounter: n, prettyErrors: s } = Nr(e), i = new gs(n?.addNewLine), r = new ms(e);
  let o = null;
  for (const c of r.compose(i.parse(t), !0, t.length))
    if (!o)
      o = c;
    else if (o.options.logLevel !== "silent") {
      o.errors.push(new Le(c.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
      break;
    }
  return s && n && (o.errors.forEach(Ht(t, n)), o.warnings.forEach(Ht(t, n))), o;
}
function Uc(t, e, n) {
  let s;
  typeof e == "function" ? s = e : n === void 0 && e && typeof e == "object" && (n = e);
  const i = Ar(t, n);
  if (!i)
    return null;
  if (i.warnings.forEach((r) => Yi(i.options.logLevel, r)), i.errors.length > 0) {
    if (i.options.logLevel !== "silent")
      throw i.errors[0];
    i.errors = [];
  }
  return i.toJS(Object.assign({ reviver: s }, n));
}
function xc(t, e, n) {
  let s = null;
  if (typeof e == "function" || Array.isArray(e) ? s = e : n === void 0 && e && (n = e), typeof n == "string" && (n = n.length), typeof n == "number") {
    const i = Math.round(n);
    n = i < 1 ? void 0 : i > 8 ? { indent: 8 } : { indent: i };
  }
  if (t === void 0) {
    const { keepUndefined: i } = n ?? e ?? {};
    if (!i)
      return;
  }
  return Re(t) && !s ? t.toString(n) : new ut(t, s, n).toString(n);
}
const Fc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Alias: ln,
  CST: Dc,
  Composer: ms,
  Document: ut,
  Lexer: Or,
  LineCounter: Ir,
  Pair: G,
  Parser: gs,
  Scalar: A,
  Schema: bn,
  YAMLError: hs,
  YAMLMap: te,
  YAMLParseError: Le,
  YAMLSeq: Oe,
  YAMLWarning: pr,
  isAlias: Ze,
  isCollection: F,
  isDocument: Re,
  isMap: ot,
  isNode: K,
  isPair: B,
  isScalar: j,
  isSeq: ct,
  parse: Uc,
  parseAllDocuments: Bc,
  parseDocument: Ar,
  stringify: xc,
  visit: Be,
  visitAsync: an
}, Symbol.toStringTag, { value: "Module" }));
function Kn(t) {
  const e = Object.values(t).filter((s) => typeof s == "number");
  return Object.entries(t).filter(([s, i]) => e.indexOf(+s) === -1).map(([s, i]) => i);
}
function Js(t, e = "|") {
  return t.map((n) => Mr(n)).join(e);
}
function Vn(t, e) {
  return typeof e == "bigint" ? e.toString() : e;
}
class Kc {
  constructor(e) {
    this._getter = e, this._value = void 0;
  }
  get value() {
    const e = this._getter;
    return e !== void 0 && (this._value = e(), this._getter = void 0), this._value;
  }
}
function ys(t) {
  return new Kc(t);
}
function Vc(t) {
  return t == null;
}
function bs(t) {
  const e = t.startsWith("^") ? 1 : 0, n = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(e, n);
}
function qc(t, e) {
  const n = t / e, s = Math.round(n), i = 4 * Number.EPSILON * Math.max(Math.abs(n), 1);
  return Math.abs(n - s) < i ? 0 : n - s;
}
function Ae(t, e, n) {
  Object.defineProperty(t, e, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Tr(t) {
  const e = Object.getOwnPropertyDescriptor(t, "shape");
  return e?.get ? e.get.raw : e?.value;
}
function be(t) {
  return Tr(t._zod.def) ?? t._zod.def.shape;
}
function zr(t, e, n) {
  Object.defineProperty(t, e, {
    get() {
      const s = n();
      return Ae(this, e, s), s;
    },
    enumerable: !0,
    configurable: !0
  });
}
function Pr(t, e, n) {
  e in t ? Ae(t, e, n) : t[e] = n;
}
function De(t, e, n, s) {
  const i = be(e);
  for (const r of n) {
    const o = Object.getOwnPropertyDescriptor(i, r);
    o.enumerable && (o.get ? zr(t, r, () => {
      const c = e._zod.def.shape[r];
      return s ? s(c, r) : c;
    }) : Pr(t, r, s ? s(o.value, r) : o.value));
  }
}
function Jc(t, e) {
  for (const n of Reflect.ownKeys(e)) {
    const s = Object.getOwnPropertyDescriptor(e, n);
    s.enumerable && (s.get ? zr(t, n, () => e[n]) : Pr(t, n, s.value));
  }
}
function ne(...t) {
  const e = {};
  for (const n of t) {
    const s = Object.getOwnPropertyDescriptors(n);
    Object.assign(e, s);
  }
  return Object.defineProperties({}, e);
}
function Yc(t) {
  return JSON.stringify(t);
}
function Gc(t) {
  return t.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Lr = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function tn(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const Wc = /* @__PURE__ */ ys(() => {
  if (oe.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function tt(t) {
  if (tn(t) === !1)
    return !1;
  const e = t.constructor;
  if (e === void 0 || typeof e != "function")
    return !0;
  const n = e.prototype;
  return !(tn(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function Cr(t) {
  return tt(t) ? { ...t } : Array.isArray(t) ? [...t] : t instanceof Map ? new Map(t) : t instanceof Set ? new Set(t) : t;
}
const Xc = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function nt(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Te(t, e, n) {
  const s = new t._zod.constr(e ?? t._zod.def);
  return (!e || n?.parent) && (s._zod.parent = t), s;
}
function O(t) {
  const e = t;
  if (!e)
    return {};
  if (typeof e == "string")
    return { error: () => e };
  if (e?.message !== void 0) {
    if (e?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    e.error = e.message;
  }
  return delete e.message, typeof e.error == "string" ? { ...e, error: () => e.error } : e;
}
function Mr(t) {
  return typeof t == "bigint" ? t.toString() + "n" : typeof t == "string" ? `"${t}"` : `${t}`;
}
function Hc(t) {
  return Object.keys(t).filter((e) => t[e]._zod.optin !== void 0 && t[e]._zod.optout === "optional");
}
const jr = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, Qc = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function ea(t, e) {
  const n = t._zod.def, s = n.checks;
  if (s && s.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const r = {};
  return De(r, t, kn(t, e)), Te(t, ne(n, { shape: r, checks: [] }));
}
function kn(t, e) {
  const n = be(t), s = [];
  for (const i of Reflect.ownKeys(e)) {
    if (!Object.getOwnPropertyDescriptor(n, i)?.enumerable)
      throw new Error(`Unrecognized key: "${String(i)}"`);
    e[i] && s.push(i);
  }
  return s;
}
function ta(t, e) {
  const n = t._zod.def, s = n.checks;
  if (s && s.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const r = new Set(kn(t, e)), o = {};
  return De(o, t, Reflect.ownKeys(be(t)).filter((c) => !r.has(c))), Te(t, ne(n, { shape: o, checks: [] }));
}
function na(t, e) {
  if (!tt(e))
    throw new Error("Invalid input to extend: expected a plain object");
  const n = t._zod.def.checks;
  if (n && n.length > 0) {
    const i = be(t);
    for (const r of Reflect.ownKeys(e))
      if (Object.getOwnPropertyDescriptor(i, r) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  return Te(t, ne(t._zod.def, { shape: Dr(t, e) }));
}
function Dr(t, e) {
  const n = {};
  return De(n, t, Reflect.ownKeys(be(t))), Jc(n, e), n;
}
function sa(t, e) {
  if (!tt(e))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  return Te(t, ne(t._zod.def, { shape: Dr(t, e) }));
}
function ia(t, e) {
  if (!e?._zod?.def)
    throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
  if (t._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const n = {};
  De(n, t, Reflect.ownKeys(be(t))), De(n, e, Reflect.ownKeys(be(e)));
  const s = ne(t._zod.def, {
    shape: n,
    get catchall() {
      return e._zod.def.catchall;
    },
    checks: e._zod.def.checks ?? []
  });
  return Te(t, s);
}
function Ys(t, e, n, s = "partial") {
  const r = e._zod.def.checks;
  if (r && r.length > 0)
    throw new Error(`.${s}() cannot be used on object schemas containing refinements`);
  const c = n ? new Set(kn(e, n)) : void 0, a = {};
  return De(a, e, Reflect.ownKeys(be(e)), t && ((l, u) => c && !c.has(u) ? l : new t({ type: "optional", innerType: l }))), Te(e, ne(e._zod.def, { shape: a, checks: [] }));
}
function ra(t, e, n) {
  const s = n ? new Set(kn(e, n)) : void 0, i = {};
  return De(i, e, Reflect.ownKeys(be(e)), (r, o) => (
    // overwrite with non-optional
    s && !s.has(o) ? r : new t({ type: "nonoptional", innerType: r })
  )), Te(e, ne(e._zod.def, { shape: i }));
}
function ue(t, e = 0) {
  if (t.aborted === !0)
    return !0;
  for (let n = e; n < t.issues.length; n++)
    if (t.issues[n]?.continue !== !0)
      return !0;
  return !1;
}
function oa(t, e = 0) {
  if (t.aborted === !0)
    return !0;
  for (let n = e; n < t.issues.length; n++)
    if (t.issues[n]?.continue === !1)
      return !0;
  return !1;
}
function ve(t, e) {
  return e.map((n) => {
    var s;
    return (s = n).path ?? (s.path = []), n.path.unshift(t), n;
  });
}
function pt(t) {
  return typeof t == "string" ? t : t?.message;
}
function Gs(t, e, n) {
  var s;
  for (let i = e; i < t.length; i++)
    (s = t[i]).schema ?? (s.schema = n);
}
function Ie(t, e, n) {
  var s;
  const i = t.inst?._zod?.traits;
  i?.has("$ZodType") && (i.has("$ZodCheck") ? (s = t).schema ?? (s.schema = t.inst) : t.schema = t.inst);
  const r = t.schema !== t.inst ? t.schema?._zod.def?.error : void 0, o = t.message ? t.message : pt(t.inst?._zod.def?.error?.(t)) ?? pt(r?.(t)) ?? pt(e?.error?.(t)) ?? pt(n.customError?.(t)) ?? pt(n.localeError?.(t)) ?? "Invalid input", c = {};
  for (const a of Object.keys(t))
    a === "inst" || a === "schema" || a === "continue" || a === "input" || a === "__proto__" || (c[a] = t[a]);
  return c.path ?? (c.path = []), c.message = o, e?.reportInput && (c.input = t.input), c;
}
const ca = /[\uD800-\uDBFF]/;
function ws(t) {
  const e = t.length;
  if (!ca.test(t))
    return e;
  let n = e;
  for (let s = 0; s < e - 1; s++)
    (t.charCodeAt(s) & 64512) === 55296 && (t.charCodeAt(s + 1) & 64512) === 56320 && (n--, s++);
  return n;
}
function _s(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function aa(t) {
  const e = typeof t;
  switch (e) {
    case "number":
      return Number.isNaN(t) ? "nan" : "number";
    case "object": {
      if (t === null)
        return "null";
      if (Array.isArray(t))
        return "array";
      const n = t;
      if (n && Object.getPrototypeOf(n) !== Object.prototype && "constructor" in n && n.constructor)
        return n.constructor.name;
    }
  }
  return e;
}
function $t(...t) {
  const [e, n, s] = t;
  return typeof e == "string" ? {
    message: e,
    code: "custom",
    input: n,
    inst: s
  } : { ...e };
}
function la(t, e) {
  for (const n in e) {
    const s = Object.getOwnPropertyDescriptor(e, n);
    s.get ? Object.defineProperty(t, n, { ...s, enumerable: !1 }) : ua(t, n, s.value);
  }
}
function Ee(t, e, n, s = !0) {
  return Object.defineProperty(t, e, { configurable: !0, writable: !0, enumerable: s, value: n }), n;
}
function Zr(t, e, n) {
  return Ee(t, e, n, !1);
}
function Rr(t, e) {
  for (const n in t) {
    const s = t[n];
    Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !0,
      get() {
        return Ee(this, n, s(this));
      },
      set(i) {
        Ee(this, n, i);
      }
    });
  }
  return e;
}
function ua(t, e, n) {
  Object.defineProperty(t, e, {
    configurable: !0,
    get() {
      return this == null ? n : Ee(this, e, n.bind(this));
    },
    set(s) {
      Ee(this, e, s);
    }
  });
}
function fa(t, e) {
  const n = Object.getPrototypeOf(t);
  return e in n ? void 0 : n;
}
let Pn, we = !1;
const da = {
  configurable: !0,
  get() {
    we = !0;
  }
};
function L(t, e, n) {
  const s = Object.getPrototypeOf(t._zod);
  if (e in s && Pn !== t._zod) {
    Pn = void 0;
    return;
  }
  Pn = t._zod, Object.defineProperty(s, e, {
    configurable: !0,
    get() {
      Object.defineProperty(this, e, da);
      const i = we;
      we = !1;
      try {
        const r = n(this);
        return we ? delete this[e] : Object.defineProperty(this, e, { configurable: !0, writable: !0, value: r }), we = we || i, r;
      } catch (r) {
        throw delete this[e], we = we || i, r;
      }
    },
    set(i) {
      Object.defineProperty(this, e, { configurable: !0, writable: !0, value: i });
    }
  });
}
function ha(t, e, n, s) {
  const i = fa(t, e);
  i && Object.defineProperty(i, e, {
    configurable: !0,
    get() {
      const r = { configurable: !0, writable: !0, enumerable: s, value: void 0 };
      return Object.defineProperty(this, e, r), r.value = n(this), Object.defineProperty(this, e, r), r.value;
    },
    set(r) {
      Object.defineProperty(this, e, { configurable: !0, writable: !0, enumerable: s, value: r });
    }
  });
}
const pa = "~constantCatch";
function ma(t) {
  const e = () => t;
  return e[pa] = !0, e;
}
var Ws;
const Ln = { value: void 0, enumerable: !1 };
let Xs = "captureStackTrace" in Error ? Error : null;
function ga(t) {
  const e = Xs;
  if (e) {
    const n = e.stackTraceLimit;
    if (typeof n == "number") {
      try {
        e.stackTraceLimit = 0;
      } catch {
        return Xs = null, new t();
      }
      try {
        return new t();
      } finally {
        e.stackTraceLimit = n;
      }
    }
  }
  return new t();
}
function y(t, e, n, s) {
  const i = {};
  function r(d) {
    this.def = d, this.constr = f, this.traits = /* @__PURE__ */ new Set();
  }
  r.prototype = i;
  const o = n, c = o && /* @__PURE__ */ new WeakSet();
  function a(d, p) {
    if (d._zod) {
      if (d._zod.traits.has(t))
        return;
    } else {
      Ln.value = new r(p);
      try {
        Object.defineProperty(d, "_zod", Ln);
      } finally {
        Ln.value = void 0;
      }
    }
    if (d._zod.traits.add(t), e(d, p), c) {
      const h = Object.getPrototypeOf(d), g = d._zod.constr.prototype;
      let b = h;
      for (; b && b !== g; )
        b = Object.getPrototypeOf(b);
      const w = b ?? h;
      c.has(w) || (c.add(w), la(w, o));
    }
    const m = f.prototype;
    for (const h in m)
      Object.prototype.hasOwnProperty.call(m, h) && (h in d || (d[h] = m[h].bind(d)));
  }
  const l = s?.Parent ?? Object;
  class u extends l {
  }
  Object.defineProperty(u, "name", { value: t });
  function f(d) {
    const p = s?.Parent ? ga(u) : this;
    a(p, d);
    const m = p._zod.deferred;
    if (m) {
      for (const g of m)
        g();
      p._zod.deferred = void 0;
    }
    const h = globalThis.__zod_globalConfig?.postProcessor;
    return h && h(p), p;
  }
  return Object.defineProperty(f, "init", { value: a }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (d) => s?.Parent && d instanceof s.Parent ? !0 : d?._zod?.traits?.has(t)
  }), Object.defineProperty(f, "name", { value: t }), f;
}
class Ce extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Br extends Error {
  constructor(e) {
    super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
  }
}
(Ws = globalThis).__zod_globalConfig ?? (Ws.__zod_globalConfig = {});
const oe = globalThis.__zod_globalConfig;
function pe(t) {
  return t && Object.assign(oe, t), oe;
}
function ya() {
  const t = this._zod;
  return t.message ?? (t.message = JSON.stringify(t.def, Vn, 2)), t.message;
}
function ba(t) {
  this._zod.message = t;
}
const wa = {
  get: ya,
  set: ba,
  enumerable: !0,
  configurable: !0
}, Cn = { value: void 0, enumerable: !1 }, Hs = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), _a = (t, e) => {
  t.name = "$ZodError", Cn.value = e, Object.defineProperty(t, "issues", Cn), Cn.value = void 0, Object.defineProperty(t, "message", wa);
  const n = Object.getPrototypeOf(t);
  Hs.has(n) || (Hs.add(n), Object.defineProperty(n, "toString", {
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
}, va = y("$ZodError", _a);
function ka(t, e, n) {
  return Object.prototype.hasOwnProperty.call(t, e) || (e === "__proto__" ? Object.defineProperty(t, e, { value: n(), writable: !0, enumerable: !0, configurable: !0 }) : t[e] = n()), t[e];
}
function Sa(t, e = (n) => n.message) {
  const n = {}, s = [];
  for (const i of t.issues)
    i.path.length > 0 ? ka(n, i.path[0], () => []).push(e(i)) : s.push(e(i));
  return { formErrors: s, fieldErrors: n };
}
function $a(t, e = (n) => n.message) {
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
          n._errors.push(e(o));
        else {
          let a = n, l = 0;
          for (; l < c.length; ) {
            const u = c[l], f = l === c.length - 1;
            if (u === "_errors") {
              f && a._errors.push(e(o)), l++;
              continue;
            }
            Object.prototype.hasOwnProperty.call(a, u) || Object.defineProperty(a, u, {
              value: { _errors: [] },
              enumerable: !0,
              writable: !0,
              configurable: !0
            });
            const d = a[u];
            f && d._errors.push(e(o)), a = d, l++;
          }
        }
      }
  };
  return s(t), n;
}
function Sn(t, e) {
  return { callee: e?.callee ?? t, Err: e?.Err };
}
const vs = (t) => {
  const e = (n, s, i, r) => {
    const o = i ? { ...i, async: !1 } : { async: !1 }, c = n._zod.run({ value: s, issues: [] }, o);
    if (c instanceof Promise)
      throw new Ce();
    if (c.issues.length) {
      const a = new (r?.Err ?? t)(c.issues.map((l) => Ie(l, o, pe())));
      throw Lr(a, r?.callee ?? e), a;
    }
    return c.value;
  };
  return e;
}, ks = (t) => {
  const e = async (n, s, i, r) => {
    const o = i ? { ...i, async: !0 } : { async: !0 };
    let c = n._zod.run({ value: s, issues: [] }, o);
    if (c instanceof Promise && (c = await c), c.issues.length) {
      const a = new (r?.Err ?? t)(c.issues.map((l) => Ie(l, o, pe())));
      throw Lr(a, r?.callee ?? e), a;
    }
    return c.value;
  };
  return e;
}, Ss = (t) => (e, n, s) => {
  const i = s ? { ...s, async: !1 } : { async: !1 }, r = e._zod.run({ value: n, issues: [] }, i);
  if (r instanceof Promise)
    throw new Ce();
  return r.issues.length ? Ur(t, r.issues, i) : { success: !0, data: r.value };
};
function Ur(t, e, n) {
  let s;
  return {
    success: !1,
    get error() {
      return s || (s = new t(e.map((i) => Ie(i, n, pe()))), e = void 0, n = void 0), s;
    },
    set error(i) {
      s = i, e = void 0, n = void 0;
    }
  };
}
const $s = (t) => async (e, n, s) => {
  const i = s ? { ...s, async: !0 } : { async: !0 };
  let r = e._zod.run({ value: n, issues: [] }, i);
  return r instanceof Promise && (r = await r), r.issues.length ? Ur(t, r.issues, i) : { success: !0, data: r.value };
}, Oa = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), Ia = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), Ea = ((t, e, n) => {
  const s = t._zod.bag.validator;
  if (s !== void 0) {
    if (s(e) !== Oa)
      return !0;
    if (s.definite === !0 && n === void 0)
      return !1;
  }
  return Na(t, e, n);
});
function Na(t, e, n) {
  const s = n ? { ...n, async: !1, abortEarly: !0 } : { async: !1, abortEarly: !0 }, i = t._zod.bag.fallbackRun;
  let r;
  if (i ? (s[Ia] = !0, r = i({ value: e, issues: [] }, s)) : r = t._zod.run({ value: e, issues: [] }, s), r instanceof Promise)
    throw new Ce();
  return r.issues.length === 0;
}
const Aa = async (t, e, n) => {
  const s = n ? { ...n, async: !0, abortEarly: !0 } : { async: !0, abortEarly: !0 };
  let i = t._zod.run({ value: e, issues: [] }, s);
  return i instanceof Promise && (i = await i), i.issues.length === 0;
}, Ta = (t) => {
  const e = vs(t), n = (s, i, r, o) => {
    const c = r ? { ...r, direction: "backward" } : { direction: "backward" };
    return e(s, i, c, Sn(n, o));
  };
  return n;
}, za = (t) => {
  const e = vs(t), n = (s, i, r, o) => e(s, i, r, Sn(n, o));
  return n;
}, Pa = (t) => {
  const e = ks(t), n = async (s, i, r, o) => {
    const c = r ? { ...r, direction: "backward" } : { direction: "backward" };
    return await e(s, i, c, Sn(n, o));
  };
  return n;
}, La = (t) => {
  const e = ks(t), n = async (s, i, r, o) => await e(s, i, r, Sn(n, o));
  return n;
}, Ca = (t) => (e, n, s) => {
  const i = s ? { ...s, direction: "backward" } : { direction: "backward" };
  return Ss(t)(e, n, i);
}, Ma = (t) => (e, n, s) => Ss(t)(e, n, s), ja = (t) => async (e, n, s) => {
  const i = s ? { ...s, direction: "backward" } : { direction: "backward" };
  return $s(t)(e, n, i);
}, Da = (t) => async (e, n, s) => $s(t)(e, n, s), Za = /^[cC][0-9a-z]{6,}$/, Ra = /^[0-9a-z]+$/, Ba = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Ua = /^[0-9a-vA-V]{20}$/, xa = /^[A-Za-z0-9]{27}$/, Fa = /^[a-zA-Z0-9_-]{21}$/;
function Ka(t) {
  return new RegExp(`^[a-zA-Z0-9_-]{${t}}$`);
}
const Va = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, qa = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Qs = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Ja = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Ya = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function Ga() {
  return new RegExp(Ya, "u");
}
const Wa = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Xa = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Ha = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Qa = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, el = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, tl = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, nl = /^https?$/, sl = /^\+[1-9]\d{6,14}$/, xr = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function il(t) {
  return new RegExp(`^${t}$`);
}
const rl = /* @__PURE__ */ il(xr);
function qn(t) {
  const e = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${e}` : t.precision === 0 ? `${e}:[0-5]\\d` : `${e}:[0-5]\\d\\.\\d{${t.precision}}` : t.seconds ? `${e}:[0-5]\\d(?:\\.\\d+)?` : `${e}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function ol(t) {
  return new RegExp(`^${qn(t)}$`);
}
function cl(t) {
  const e = ["Z"];
  t.offset && e.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const n = `${qn({ precision: t.precision, seconds: !0 })}(?:${e.join("|")})`, s = t.local ? `${n}|${qn({ precision: t.precision })}` : n;
  return new RegExp(`^${xr}T(?:${s})$`);
}
const al = /^[\s\S]{0,}$/, ll = /^-?\d+$/, Os = /^-?\d+(?:\.\d+)?$/, ul = /^(?:true|false)$/i, fl = /^[^A-Z]*$/, dl = /^[^a-z]*$/, ee = /* @__PURE__ */ y("$ZodCheck", (t, e) => {
  var n;
  t._zod ?? (t._zod = {}), t._zod.def = e, (n = t._zod).onattach ?? (n.onattach = []);
}), Is = (t) => {
  const e = t.value;
  return !Vc(e) && e.length !== void 0;
}, nn = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Fr = /* @__PURE__ */ y("$ZodCheckLessThan", (t, e) => {
  ee.init(t, e);
  const n = nn[typeof e.value];
  t._zod.check = (s) => {
    (e.inclusive ? s.value <= e.value : s.value < e.value) || s.issues.push({
      origin: nn[typeof s.value] ?? n,
      code: "too_big",
      maximum: typeof e.value == "object" ? e.value.getTime() : e.value,
      input: s.value,
      inclusive: e.inclusive,
      inst: t,
      continue: !e.abort
    });
  };
}), Kr = /* @__PURE__ */ y("$ZodCheckGreaterThan", (t, e) => {
  ee.init(t, e);
  const n = nn[typeof e.value];
  t._zod.check = (s) => {
    (e.inclusive ? s.value >= e.value : s.value > e.value) || s.issues.push({
      origin: nn[typeof s.value] ?? n,
      code: "too_small",
      minimum: typeof e.value == "object" ? e.value.getTime() : e.value,
      input: s.value,
      inclusive: e.inclusive,
      inst: t,
      continue: !e.abort
    });
  };
}), hl = /* @__PURE__ */ y("$ZodCheckMultipleOf", (t, e) => {
  ee.init(t, e), t._zod.check = (n) => {
    if (typeof n.value != typeof e.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof n.value == "bigint" ? (
      // `value % 0n` throws, and nothing is a multiple of zero — the number branch already fails this way via NaN
      e.value !== BigInt(0) && n.value % e.value === BigInt(0)
    ) : qc(n.value, e.value) === 0) || n.issues.push({
      origin: typeof n.value,
      code: "not_multiple_of",
      divisor: e.value,
      input: n.value,
      inst: t,
      continue: !e.abort
    });
  };
}), pl = /* @__PURE__ */ y("$ZodCheckNumberFormat", (t, e) => {
  ee.init(t, e), e.format = e.format || "float64";
  const n = e.format?.includes("int"), s = n ? "int" : "number", [i, r] = jr[e.format];
  t._zod.check = (o) => {
    const c = o.value;
    if (n) {
      if (!Number.isInteger(c)) {
        o.issues.push({
          expected: s,
          format: e.format,
          code: "invalid_type",
          continue: !1,
          input: c,
          inst: t
        });
        return;
      }
      if (!Number.isSafeInteger(c)) {
        c > 0 ? o.issues.push({
          input: c,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: s,
          inclusive: !0,
          continue: !e.abort
        }) : o.issues.push({
          input: c,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: s,
          inclusive: !0,
          continue: !e.abort
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
      inst: t,
      continue: !e.abort
    }), c > r && o.issues.push({
      origin: "number",
      input: c,
      code: "too_big",
      maximum: r,
      inclusive: !0,
      inst: t,
      continue: !e.abort
    });
  };
}), ml = /* @__PURE__ */ y("$ZodCheckMaxLength", (t, e) => {
  var n;
  ee.init(t, e), (n = t._zod.def).when ?? (n.when = Is), t._zod.check = (s) => {
    const i = s.value, r = i.length;
    if ((typeof i == "string" && r > e.maximum ? ws(i) : r) <= e.maximum)
      return;
    const c = _s(i);
    s.issues.push({
      origin: c,
      code: "too_big",
      maximum: e.maximum,
      inclusive: !0,
      input: i,
      inst: t,
      continue: !e.abort
    });
  };
}), gl = /* @__PURE__ */ y("$ZodCheckMinLength", (t, e) => {
  var n;
  ee.init(t, e), (n = t._zod.def).when ?? (n.when = Is), t._zod.check = (s) => {
    const i = s.value, r = i.length;
    if ((typeof i == "string" && r >= e.minimum && r < e.minimum * 2 ? ws(i) : r) >= e.minimum)
      return;
    const c = _s(i);
    s.issues.push({
      origin: c,
      code: "too_small",
      minimum: e.minimum,
      inclusive: !0,
      input: i,
      inst: t,
      continue: !e.abort
    });
  };
}), yl = /* @__PURE__ */ y("$ZodCheckLengthEquals", (t, e) => {
  var n;
  ee.init(t, e), (n = t._zod.def).when ?? (n.when = Is), t._zod.check = (s) => {
    const i = s.value, r = i.length, o = typeof i == "string" && r >= e.length && r <= e.length * 2 ? ws(i) : r;
    if (o === e.length)
      return;
    const c = _s(i), a = o > e.length;
    s.issues.push({
      origin: c,
      ...a ? { code: "too_big", maximum: e.length } : { code: "too_small", minimum: e.length },
      inclusive: !0,
      exact: !0,
      input: s.value,
      inst: t,
      continue: !e.abort
    });
  };
}), $n = /* @__PURE__ */ y("$ZodCheckStringFormat", (t, e) => {
  var n, s;
  ee.init(t, e), e.pattern ? (n = t._zod).check ?? (n.check = (i) => {
    e.pattern.lastIndex = 0, !e.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: e.format,
      input: i.value,
      ...e.pattern ? { pattern: e.pattern.toString() } : {},
      inst: t,
      continue: !e.abort
    });
  }) : (s = t._zod).check ?? (s.check = () => {
  });
}), bl = /* @__PURE__ */ y("$ZodCheckRegex", (t, e) => {
  $n.init(t, e), t._zod.check = (n) => {
    e.pattern.lastIndex = 0, !e.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: n.value,
      pattern: e.pattern.toString(),
      inst: t,
      continue: !e.abort
    });
  };
}), wl = /* @__PURE__ */ y("$ZodCheckLowerCase", (t, e) => {
  e.pattern ?? (e.pattern = fl), $n.init(t, e);
}), _l = /* @__PURE__ */ y("$ZodCheckUpperCase", (t, e) => {
  e.pattern ?? (e.pattern = dl), $n.init(t, e);
}), vl = /* @__PURE__ */ y("$ZodCheckIncludes", (t, e) => {
  ee.init(t, e);
  const n = nt(e.includes), s = new RegExp(typeof e.position == "number" ? `^.{${e.position},}${n}` : n);
  e.pattern = s, t._zod.check = (i) => {
    i.value.includes(e.includes, e.position) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: e.includes,
      input: i.value,
      inst: t,
      continue: !e.abort
    });
  };
}), kl = /* @__PURE__ */ y("$ZodCheckStartsWith", (t, e) => {
  ee.init(t, e);
  const n = new RegExp(`^${nt(e.prefix)}.*`);
  e.pattern ?? (e.pattern = n), t._zod.check = (s) => {
    s.value.startsWith(e.prefix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: e.prefix,
      input: s.value,
      inst: t,
      continue: !e.abort
    });
  };
}), Sl = /* @__PURE__ */ y("$ZodCheckEndsWith", (t, e) => {
  ee.init(t, e);
  const n = new RegExp(`.*${nt(e.suffix)}$`);
  e.pattern ?? (e.pattern = n), t._zod.check = (s) => {
    s.value.endsWith(e.suffix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: e.suffix,
      input: s.value,
      inst: t,
      continue: !e.abort
    });
  };
}), $l = /* @__PURE__ */ y("$ZodCheckOverwrite", (t, e) => {
  ee.init(t, e), t._zod.check = (n) => {
    n.value = e.tx(n.value);
  };
});
class Ol {
  constructor(e = [], n = {}) {
    this.content = [], this.indent = 0, this.args = e, this.closed = n;
  }
  // the compiler catches a child's throw and keeps writing into this doc, so the indent has to unwind with it
  indented(e) {
    this.indent += 1;
    try {
      e(this);
    } finally {
      this.indent -= 1;
    }
  }
  write(e) {
    if (typeof e == "function") {
      e(this, { execution: "sync" }), e(this, { execution: "async" });
      return;
    }
    const s = e.split(`
`).filter((o) => o), i = Math.min(...s.map((o) => o.length - o.trimStart().length)), r = s.map((o) => o.slice(i)).map((o) => " ".repeat(this.indent * 2) + o);
    for (const o of r)
      this.content.push(o);
  }
  compile() {
    const e = Function, n = this?.content ?? [""];
    return new e(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {
${n.join(`
`)}
};`)(...Object.values(this.closed));
  }
}
const Il = {
  major: 4,
  minor: 6,
  patch: 5
}, Z = /* @__PURE__ */ y("$ZodType", (t, e) => {
  var n;
  t ?? (t = {}), t._zod.def = e, t._zod.bag = t._zod.bag || {}, t._zod.version = Il;
  const s = t._zod.def.checks, i = t._zod.traits.has("$ZodCheck") ? [t, ...s ?? []] : s?.length ? [...s] : [];
  for (const r of i)
    for (const o of r._zod.onattach)
      o(t);
  if (i.length === 0)
    (n = t._zod).deferred ?? (n.deferred = []), t._zod.deferred?.push(() => {
      t._zod.run = t._zod.parse;
    });
  else {
    const r = (c, a, l) => {
      if (c.memo)
        return c;
      let u = ue(c), f;
      for (const d of a) {
        if (d._zod.def.when) {
          if (oa(c) || !d._zod.def.when(c))
            continue;
        } else if (u)
          continue;
        const p = c.issues.length, m = d._zod.check(c);
        if (m instanceof Promise && l?.async === !1)
          throw new Ce();
        if (f || m instanceof Promise)
          f = (f ?? Promise.resolve()).then(async () => {
            await m, c.issues.length !== p && (Gs(c.issues, p, t), u || (u = ue(c, p)));
          });
        else {
          if (c.issues.length === p)
            continue;
          Gs(c.issues, p, t), u || (u = ue(c, p));
        }
      }
      return f ? f.then(() => c) : c;
    }, o = (c, a, l) => {
      if (ue(c))
        return c.aborted = !0, c;
      const u = r(a, i, l);
      if (u instanceof Promise) {
        if (l.async === !1)
          throw new Ce();
        return u.then((f) => t._zod.parse(f, l));
      }
      return t._zod.parse(u, l);
    };
    t._zod.run = (c, a) => {
      if (a.skipChecks)
        return t._zod.parse(c, a);
      if (a.direction === "backward") {
        const u = t._zod.parse({ value: c.value, issues: [] }, { ...a, skipChecks: !0 });
        return u instanceof Promise ? u.then((f) => o(f, c, a)) : o(u, c, a);
      }
      const l = t._zod.parse(c, a);
      if (l instanceof Promise) {
        if (a.async === !1)
          throw new Ce();
        return l.then((u) => r(u, i, a));
      }
      return r(l, i, a);
    };
  }
}, {
  // Wrappers extend this by installing a richer factory over it; reading it eagerly would defeat the laziness.
  get "~standard"() {
    return Zr(this, "~standard", qr(this));
  },
  set "~standard"(t) {
    Ee(this, "~standard", t);
  }
}), Vr = (t, e) => t.issues.length ? { issues: t.issues.map((n) => Ie(n, e, pe())) } : { value: t.value };
async function El(t, e) {
  const n = { async: !0 };
  return Vr(await t._zod.run({ value: e, issues: [] }, n), n);
}
function qr(t) {
  return {
    validate: (e) => {
      const n = { async: !1 };
      try {
        const s = t._zod.run({ value: e, issues: [] }, n);
        if (!(s instanceof Promise))
          return Vr(s, n);
      } catch {
      }
      return El(t, e);
    },
    vendor: "zod",
    version: 1
  };
}
const Es = /* @__PURE__ */ y("$ZodString", (t, e) => {
  Z.init(t, e), t._zod.pattern = e.pattern ?? al, t._zod.parse = (n, s) => {
    if (e.coerce)
      try {
        n.value = String(n.value);
      } catch {
      }
    return typeof n.value == "string" || n.issues.push({
      expected: "string",
      code: "invalid_type",
      input: n.value,
      inst: t
    }), n;
  };
}), U = /* @__PURE__ */ y("$ZodStringFormat", (t, e) => {
  $n.init(t, e), Es.init(t, e);
}), Nl = /* @__PURE__ */ y("$ZodGUID", (t, e) => {
  e.pattern ?? (e.pattern = qa), U.init(t, e);
}), Al = /* @__PURE__ */ y("$ZodUUID", (t, e) => {
  if (e.version) {
    const s = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[e.version];
    if (s === void 0)
      throw new Error(`Invalid UUID version: "${e.version}"`);
    e.pattern ?? (e.pattern = Qs(s));
  } else
    e.pattern ?? (e.pattern = Qs());
  U.init(t, e);
}), Tl = /* @__PURE__ */ y("$ZodEmail", (t, e) => {
  e.pattern ?? (e.pattern = Ja), U.init(t, e);
}), Jr = 1, sn = 2;
function Yr(t) {
  try {
    return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(t) : (new URL(t), !0);
  } catch {
    return !1;
  }
}
function zl(t, e) {
  return !("normalize" in e) && !("hostname" in e) && !("protocol" in e) ? Yr(t) || sn : Pl(t, e);
}
function Pl(t, e) {
  if (!e.normalize && e.protocol?.source === nl.source && !/^https?:\/\//i.test(t))
    return Jr;
  try {
    if (typeof URL < "u") {
      const n = URL;
      if (typeof n.parse == "function")
        return n.parse(t) ?? sn;
    }
    return new URL(t);
  } catch {
    return sn;
  }
}
const Ll = /[\t\n\r]/g;
function ei(t) {
  return t.replace(Ll, "");
}
function Cl(t, e) {
  return e.lastIndex = 0, e.test(t.hostname);
}
function Ml(t, e) {
  return e.lastIndex = 0, e.test(t.protocol.endsWith(":") ? t.protocol.slice(0, -1) : t.protocol);
}
const jl = /* @__PURE__ */ y("$ZodURL", (t, e) => {
  U.init(t, e), t._zod.check = (n) => {
    try {
      const s = n.value.trim(), i = zl(s, e);
      if (i === Jr) {
        n.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: n.value,
          inst: t,
          continue: !e.abort
        });
        return;
      }
      if (i === sn) {
        n.issues.push({
          code: "invalid_format",
          format: "url",
          input: n.value,
          inst: t,
          continue: !e.abort
        });
        return;
      }
      if (i === !0) {
        n.value = ei(s);
        return;
      }
      e.hostname && !Cl(i, e.hostname) && n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: e.hostname.source,
        input: n.value,
        inst: t,
        continue: !e.abort
      }), e.protocol && !Ml(i, e.protocol) && n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: e.protocol.source,
        input: n.value,
        inst: t,
        continue: !e.abort
      }), n.value = e.normalize ? i.href : ei(s);
      return;
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "url",
        input: n.value,
        inst: t,
        continue: !e.abort
      });
    }
  };
}), Dl = /* @__PURE__ */ y("$ZodEmoji", (t, e) => {
  e.pattern ?? (e.pattern = Ga()), U.init(t, e);
}), Zl = /* @__PURE__ */ y("$ZodNanoID", (t, e) => {
  if (e.length !== void 0 && (!Number.isInteger(e.length) || e.length < 1))
    throw new Error(`Invalid nanoid length: ${e.length}`);
  e.pattern ?? (e.pattern = e.length === void 0 ? Fa : Ka(e.length)), U.init(t, e);
}), Rl = /* @__PURE__ */ y("$ZodCUID", (t, e) => {
  e.pattern ?? (e.pattern = Za), U.init(t, e);
}), Bl = /* @__PURE__ */ y("$ZodCUID2", (t, e) => {
  e.pattern ?? (e.pattern = Ra), U.init(t, e);
}), Ul = /* @__PURE__ */ y("$ZodULID", (t, e) => {
  e.pattern ?? (e.pattern = Ba), U.init(t, e);
}), xl = /* @__PURE__ */ y("$ZodXID", (t, e) => {
  e.pattern ?? (e.pattern = Ua), U.init(t, e);
}), Fl = /* @__PURE__ */ y("$ZodKSUID", (t, e) => {
  e.pattern ?? (e.pattern = xa), U.init(t, e);
}), Kl = /* @__PURE__ */ y("$ZodISODateTime", (t, e) => {
  e.pattern ?? (e.pattern = cl(e)), U.init(t, e);
}), Vl = /* @__PURE__ */ y("$ZodISODate", (t, e) => {
  e.pattern ?? (e.pattern = rl), U.init(t, e);
}), ql = /* @__PURE__ */ y("$ZodISOTime", (t, e) => {
  e.pattern ?? (e.pattern = ol(e)), U.init(t, e);
}), Jl = /* @__PURE__ */ y("$ZodISODuration", (t, e) => {
  e.pattern ?? (e.pattern = Va), U.init(t, e);
}), Yl = /* @__PURE__ */ y("$ZodIPv4", (t, e) => {
  e.pattern ?? (e.pattern = Wa), U.init(t, e);
}), Gl = /^[0-9a-fA-F:.]+$/;
function Gr(t) {
  return Gl.test(t) ? Yr(`http://[${t}]`) : !1;
}
const Wl = /* @__PURE__ */ y("$ZodIPv6", (t, e) => {
  e.pattern ?? (e.pattern = Xa), U.init(t, e), t._zod.check = (n) => {
    Gr(n.value) || n.issues.push({
      code: "invalid_format",
      format: "ipv6",
      input: n.value,
      inst: t,
      continue: !e.abort
    });
  };
}), Xl = /* @__PURE__ */ y("$ZodCIDRv4", (t, e) => {
  e.pattern ?? (e.pattern = Ha), U.init(t, e);
});
function Hl(t) {
  const e = t.split("/");
  if (e.length !== 2)
    return !1;
  const [n, s] = e;
  if (!s)
    return !1;
  const i = Number(s);
  return `${i}` !== s || i < 0 || i > 128 ? !1 : Gr(n);
}
const Ql = /* @__PURE__ */ y("$ZodCIDRv6", (t, e) => {
  e.pattern ?? (e.pattern = Qa), U.init(t, e), t._zod.check = (n) => {
    Hl(n.value) || n.issues.push({
      code: "invalid_format",
      format: "cidrv6",
      input: n.value,
      inst: t,
      continue: !e.abort
    });
  };
});
function Wr(t) {
  if (t === "")
    return !0;
  if (/\s/.test(t) || t.length % 4 !== 0)
    return !1;
  try {
    return atob(t), !0;
  } catch {
    return !1;
  }
}
const Xr = /^[0-9a-zA-Z+/]*={0,2}$/, eu = /* @__PURE__ */ y("$ZodBase64", (t, e) => {
  e.pattern ?? (e.pattern = Xr), U.init(t, e), t._zod.check = (n) => {
    Wr(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64",
      input: n.value,
      inst: t,
      continue: !e.abort
    });
  };
}), Ns = /^[A-Za-z0-9_-]*$/;
function tu(t) {
  if (!Ns.test(t))
    return !1;
  const e = t.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), n = e.padEnd(Math.ceil(e.length / 4) * 4, "=");
  return Wr(n);
}
const nu = /* @__PURE__ */ y("$ZodBase64URL", (t, e) => {
  e.pattern ?? (e.pattern = Ns), U.init(t, e), t._zod.check = (n) => {
    tu(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: n.value,
      inst: t,
      continue: !e.abort
    });
  };
}), su = /* @__PURE__ */ y("$ZodE164", (t, e) => {
  e.pattern ?? (e.pattern = sl), U.init(t, e);
});
function iu(t, e = null) {
  try {
    const n = t.split(".");
    if (n.length !== 3)
      return !1;
    const [s] = n;
    if (!s)
      return !1;
    const i = JSON.parse(atob(s));
    return !("typ" in i && i?.typ !== "JWT" || !i.alg || e && (!("alg" in i) || i.alg !== e));
  } catch {
    return !1;
  }
}
const ru = /* @__PURE__ */ y("$ZodJWT", (t, e) => {
  U.init(t, e), t._zod.check = (n) => {
    iu(n.value, e.alg) || n.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: n.value,
      inst: t,
      continue: !e.abort
    });
  };
}), Hr = /* @__PURE__ */ y("$ZodNumber", (t, e) => {
  Z.init(t, e), t._zod.pattern = Os, t._zod.parse = (n, s) => {
    if (e.coerce)
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
      inst: t,
      ...r ? { received: r } : {}
    }), n;
  };
}), ou = /* @__PURE__ */ y("$ZodNumberFormat", (t, e) => {
  pl.init(t, e), Hr.init(t, e);
}), cu = /* @__PURE__ */ y("$ZodBoolean", (t, e) => {
  Z.init(t, e), t._zod.pattern = ul, t._zod.parse = (n, s) => {
    if (e.coerce)
      try {
        n.value = !!n.value;
      } catch {
      }
    const i = n.value;
    return typeof i == "boolean" || n.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: i,
      inst: t
    }), n;
  };
}), au = /* @__PURE__ */ y("$ZodUnknown", (t, e) => {
  Z.init(t, e), t._zod.parse = (n) => n;
}), lu = /* @__PURE__ */ y("$ZodNever", (t, e) => {
  Z.init(t, e), t._zod.parse = (n, s) => (n.issues.push({
    expected: "never",
    code: "invalid_type",
    input: n.value,
    inst: t
  }), n);
});
function ti(t, e, n) {
  t.issues.length && e.issues.push(...ve(n, t.issues)), e.value[n] = t.value;
}
const uu = /* @__PURE__ */ y("$ZodArray", (t, e) => {
  Z.init(t, e);
  const n = oe.memoizer;
  n?.attach(t), t._zod.parse = (s, i) => {
    const r = s.value;
    if (!Array.isArray(r))
      return s.issues.push({
        expected: "array",
        code: "invalid_type",
        input: r,
        inst: t
      }), s;
    s.value = n ? n.alloc(t, s, Array(r.length), i) : Array(r.length);
    const o = [], c = i?.abortEarly;
    for (let a = 0; a < r.length; a++) {
      const l = r[a], u = e.element._zod.run({
        value: l,
        issues: []
      }, i);
      if (u instanceof Promise)
        o.push(u.then((f) => ti(f, s, a)));
      else if (ti(u, s, a), c && u.issues.length !== 0 && ue(u))
        break;
    }
    return o.length ? Promise.all(o).then(() => s) : s;
  };
});
function rn(t, e, n, s, i, r) {
  const o = n in s, c = r === "optional";
  if (!(!o && c && i === "optional")) {
    if (t.issues.length) {
      if (i !== void 0 && c && !o)
        return;
      e.issues.push(...ve(n, t.issues));
    }
    if (!o && i === void 0) {
      t.issues.length || e.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: void 0,
        path: [n]
      });
      return;
    }
    t.value === void 0 ? (o || i === "defaulted" && !c) && (e.value[n] = void 0) : e.value[n] = t.value;
  }
}
const fu = [];
function Qr(t) {
  const e = Object.keys(t.shape), n = Object.getOwnPropertySymbols(t.shape), s = n.length ? n : fu, i = s.length ? [...e, ...s] : e;
  for (const o of i)
    if (!t.shape?.[o]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${String(o)}": expected a Zod schema`);
  const r = Hc(t.shape);
  return {
    ...t,
    allKeys: i,
    symbolKeys: s,
    // string-only: handleCatchall matches it against `for...in`, which never yields a symbol
    keySet: new Set(e),
    numKeys: e.length,
    optionalKeys: new Set(r)
  };
}
function eo(t, e, n, s, i, r, o) {
  const c = [], a = i.keySet, l = i.catchall._zod, u = l.def.type, f = l.optin, d = l.optout;
  let p = 0;
  for (const m in e) {
    if (o && n.issues.length !== p) {
      if (ue(n, p))
        break;
      p = n.issues.length;
    }
    if (a.has(m))
      continue;
    if (m === "__proto__") {
      u === "never" && c.push(m);
      continue;
    }
    if (u === "never") {
      c.push(m);
      continue;
    }
    const h = l.run({ value: e[m], issues: [] }, s);
    h instanceof Promise ? t.push(h.then((g) => rn(g, n, m, e, f, d))) : rn(h, n, m, e, f, d);
  }
  return c.length && n.issues.push({
    code: "unrecognized_keys",
    keys: c,
    input: e,
    inst: r,
    // Describes the shape of the input, not the validity of the parsed value, so it never aborts. The parse still fails; the schema's own checks just get to run first, and an enclosing intersection can reconcile the key against a sibling operand.
    continue: !0
  }), t.length ? Promise.all(t).then(() => n) : n;
}
const du = /* @__PURE__ */ y("$ZodObject", (t, e) => {
  Z.init(t, e);
  const n = Object.getOwnPropertyDescriptor(e, "shape"), s = n?.get ? n.get.raw : e.shape ?? {};
  if (s) {
    const l = () => {
      const u = { ...s };
      return Object.defineProperty(e, "shape", { value: u }), l.raw = u, u;
    };
    l.raw = s, Object.defineProperty(e, "shape", { get: l });
  }
  const i = ys(() => Qr(e));
  L(t, "propValues", (l) => {
    const u = l.def.shape, f = {};
    for (const d in u) {
      const p = u[d]._zod;
      if (p.values) {
        Object.prototype.hasOwnProperty.call(f, d) || Ae(f, d, /* @__PURE__ */ new Set());
        for (const m of p.values)
          f[d].add(m);
        p.optin !== void 0 && f[d].add(void 0);
      }
    }
    return f;
  });
  const r = tn, o = e.catchall;
  let c;
  const a = oe.memoizer;
  a?.attach(t), t._zod.parse = (l, u) => {
    c ?? (c = i.value);
    const f = l.value;
    if (!r(f))
      return l.issues.push({
        expected: "object",
        code: "invalid_type",
        input: f,
        inst: t
      }), l;
    l.value = a ? a.alloc(t, l, {}, u) : {};
    const d = [], p = c.shape, m = u?.abortEarly;
    let h = l.issues.length;
    for (const g of c.allKeys) {
      if (m && l.issues.length !== h) {
        if (ue(l, h))
          break;
        h = l.issues.length;
      }
      if (g === "__proto__")
        continue;
      const b = p[g], w = b._zod.optin, S = b._zod.optout, $ = b._zod.run({ value: f[g], issues: [] }, u);
      $ instanceof Promise ? d.push($.then((_) => rn(_, l, g, f, w, S))) : rn($, l, g, f, w, S);
    }
    return o ? eo(d, f, l, u, i.value, t, m === !0) : d.length ? Promise.all(d).then(() => l) : l;
  };
}), hu = /* @__PURE__ */ y("$ZodObjectJIT", (t, e) => {
  du.init(t, e);
  const n = t._zod.parse, s = ys(() => Qr(e)), i = oe.memoizer, r = (p) => {
    const m = s.value, h = m.symbolKeys, g = new Ol(["payload", "ctx"], { shape: p, inst: t, memo: i, syms: h }), b = (_) => `shape[${_}]._zod.run({ value: input[${_}], issues: [] }, ctx)`, w = (_, v) => `
          let ${_}_ab = false;
          for (let i = 0; i < ${_}.issues.length; i++) {
            const iss = ${_}.issues[i];
            iss.path = iss.path ? [${v}, ...iss.path] : [${v}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${_}_ab = true;
          }
          if (${_}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
    g.write("const input = payload.value;");
    const S = /* @__PURE__ */ Object.create(null);
    let $ = 0;
    for (const _ of m.allKeys)
      S[_] = `key_${$++}`;
    g.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
    for (const _ of m.allKeys) {
      if (_ === "__proto__")
        continue;
      const v = S[_], E = typeof _ == "symbol" ? `syms[${h.indexOf(_)}]` : Yc(_), k = `${E} in input`, z = p[_], Y = z?._zod?.optin, N = Y !== void 0, I = z?._zod?.optout === "optional";
      if (g.write(`const ${v} = ${b(E)};`), N && I) {
        const D = Y === "optional" ? `${v}_present` : `${v}.value !== undefined || ${v}_present`;
        g.write(`
        const ${v}_present = ${k};
        if (!${v}.issues.length || ${v}_present) {
          if (${v}.issues.length) {${w(v, E)}
          }

          if (${D}) {
            newResult[${E}] = ${v}.value;
          }
        }

      `);
      } else N ? (g.write(`
        if (${v}.issues.length) {${w(v, E)}
        }
      `), Y === "defaulted" ? g.write(`newResult[${E}] = ${v}.value;`) : g.write(`
        if (${v}.value !== undefined || ${k}) {
          newResult[${E}] = ${v}.value;
        }
      `)) : g.write(`
        const ${v}_present = ${k};
        if (${v}.issues.length) {${w(v, E)}
        }
        if (!${v}_present && !${v}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${E}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${v}_present) {
          newResult[${E}] = ${v}.value;
        }

      `);
    }
    return g.write("payload.value = newResult;"), g.write("return payload;"), g.compile();
  };
  let o;
  const c = tn, a = !oe.jitless, u = a && Wc.value, f = e.catchall;
  let d;
  t._zod.parse = (p, m) => {
    d ?? (d = s.value);
    const h = p.value;
    return c(h) ? a && u && m?.async === !1 && m.jitless !== !0 ? (o || (o = r(e.shape)), p = o(p, m), f ? eo([], h, p, m, d, t, m?.abortEarly === !0) : p) : n(p, m) : (p.issues.push({
      expected: "object",
      code: "invalid_type",
      input: h,
      inst: t
    }), p);
  };
});
function ni(t, e, n, s) {
  for (const r of t)
    if (r.issues.length === 0)
      return e.value = r.value, e;
  const i = t.filter((r) => !ue(r));
  return i.length === 1 ? (e.value = i[0].value, i[0]) : (e.issues.push({
    code: "invalid_union",
    input: e.value,
    inst: n,
    errors: t.map((r) => r.issues.map((o) => Ie(o, s, pe())))
  }), e);
}
const pu = /* @__PURE__ */ y("$ZodUnion", (t, e) => {
  Z.init(t, e), L(t, "optin", (s) => s.def.options.some((i) => i._zod.optin === "defaulted") ? "defaulted" : s.def.options.some((i) => i._zod.optin !== void 0) ? "optional" : void 0), L(t, "optout", (s) => s.def.options.some((i) => i._zod.optout === "optional") ? "optional" : void 0), L(t, "values", (s) => {
    if (s.def.options.every((i) => i._zod.values))
      return new Set(s.def.options.flatMap((i) => Array.from(i._zod.values)));
  }), L(t, "pattern", (s) => {
    if (s.def.options.every((i) => i._zod.pattern)) {
      const i = s.def.options.map((r) => r._zod.pattern);
      return new RegExp(`^(${i.map((r) => bs(r.source)).join("|")})$`);
    }
  });
  const n = e.options.length === 1 ? e.options[0]._zod.run : null;
  t._zod.parse = (s, i) => {
    if (n)
      return n(s, i);
    let r = !1;
    const o = [];
    for (const c of e.options) {
      const a = c._zod.run({
        value: s.value,
        issues: []
      }, i);
      if (a instanceof Promise)
        o.push(a), r = !0;
      else {
        if (a.issues.length === 0)
          return a;
        o.push(a);
      }
    }
    return r ? Promise.all(o).then((c) => ni(c, s, t, i)) : ni(o, s, t, i);
  };
}), mu = /* @__PURE__ */ y("$ZodIntersection", (t, e) => {
  Z.init(t, e), t._zod.parse = (n, s) => {
    const i = n.value, r = e.left._zod.run({ value: i, issues: [] }, s), o = e.right._zod.run({ value: i, issues: [] }, s);
    return r instanceof Promise || o instanceof Promise ? Promise.all([r, o]).then(([a, l]) => si(n, a, l)) : si(n, r, o);
  };
});
function Jn(t, e) {
  if (t === e)
    return { valid: !0, data: t };
  if (t instanceof Date && e instanceof Date && +t == +e)
    return { valid: !0, data: t };
  if (tt(t) && tt(e)) {
    const n = Object.keys(e), s = Object.keys(t).filter((r) => n.indexOf(r) !== -1), i = { ...t, ...e };
    Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
    for (const r of s) {
      if (r === "__proto__")
        continue;
      const o = Jn(t[r], e[r]);
      if (!o.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...o.mergeErrorPath]
        };
      i[r] = o.data;
    }
    return { valid: !0, data: i };
  }
  if (Array.isArray(t) && Array.isArray(e)) {
    if (t.length !== e.length)
      return { valid: !1, mergeErrorPath: [] };
    const n = [];
    for (let s = 0; s < t.length; s++) {
      const i = t[s], r = e[s], o = Jn(i, r);
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
function si(t, e, n) {
  const s = /* @__PURE__ */ new Map();
  let i;
  const r = /* @__PURE__ */ new Map(), o = (l, u) => {
    let f;
    if (l.code === "unrecognized_keys" && !l.path?.length)
      i ?? (i = l), f = l.keys;
    else if (l.code === "invalid_key" && l.origin === "record" && l.path?.length === 1) {
      const d = String(l.path[0]);
      r.has(d) || r.set(d, l), f = [d];
    } else
      return !1;
    for (const d of f)
      s.has(d) || s.set(d, {}), s.get(d)[u] = !0;
    return !0;
  };
  for (const l of e.issues)
    o(l, "l") || t.issues.push(l);
  for (const l of n.issues)
    o(l, "r") || t.issues.push(l);
  const c = [...s].filter(([, l]) => l.l && l.r).map(([l]) => l);
  if (c.length) {
    const l = i ? c.filter((u) => i.keys.includes(u)) : [];
    l.length && t.issues.push({ ...i, keys: l });
    for (const u of c)
      !l.includes(u) && r.has(u) && t.issues.push(r.get(u));
  }
  const a = Jn(e.value, n.value);
  if (!a.valid) {
    if (ue(t))
      return t;
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  }
  return t.value = a.data, t;
}
const gu = /* @__PURE__ */ y("$ZodTuple", (t, e) => {
  Z.init(t, e);
  const n = e.items, s = oe.memoizer;
  s?.attach(t), t._zod.parse = (i, r) => {
    const o = i.value;
    if (!Array.isArray(o))
      return i.issues.push({
        input: o,
        inst: t,
        expected: "tuple",
        code: "invalid_type"
      }), i;
    i.value = s ? s.alloc(t, i, [], r) : [];
    const c = [], a = ii(n, "optin"), l = ii(n, "optout");
    if (!e.rest) {
      if (o.length < a)
        return i.issues.push({
          code: "too_small",
          minimum: a,
          inclusive: !0,
          input: o,
          inst: t,
          origin: "array"
        }), i;
      o.length > n.length && i.issues.push({
        code: "too_big",
        maximum: n.length,
        inclusive: !0,
        input: o,
        inst: t,
        origin: "array"
      });
    }
    const u = new Array(n.length), f = e.rest ? r?.abortEarly : void 0;
    let d = !1;
    for (let p = 0; p < n.length; p++) {
      const m = n[p]._zod.run({ value: o[p], issues: [] }, r);
      m instanceof Promise ? c.push(m.then((h) => {
        u[p] = h;
      })) : (u[p] = m, f && !d && m.issues.length && (d = ue(m)));
    }
    if (e.rest && !d) {
      let p = n.length - 1;
      const m = o.slice(n.length);
      let h = i.issues.length;
      for (const g of m) {
        if (f && i.issues.length !== h) {
          if (ue(i, h))
            break;
          h = i.issues.length;
        }
        p++;
        const b = e.rest._zod.run({ value: g, issues: [] }, r);
        b instanceof Promise ? c.push(b.then((w) => ri(w, i, p))) : ri(b, i, p);
      }
    }
    return c.length ? Promise.all(c).then(() => oi(u, i, n, o, l)) : oi(u, i, n, o, l);
  };
});
function ii(t, e) {
  for (let n = t.length - 1; n >= 0; n--)
    if (!(e === "optin" ? t[n]._zod.optin !== void 0 : t[n]._zod.optout === "optional"))
      return n + 1;
  return 0;
}
function ri(t, e, n) {
  t.issues.length && e.issues.push(...ve(n, t.issues)), e.value[n] = t.value;
}
function oi(t, e, n, s, i) {
  for (let r = 0; r < n.length; r++) {
    const o = t[r], c = r < s.length;
    if (!c && r >= i && n[r]._zod.optin === "optional") {
      e.value.length = r;
      break;
    }
    if (o.issues.length) {
      if (!c && r >= i) {
        e.value.length = r;
        break;
      }
      e.issues.push(...ve(r, o.issues));
    }
    e.value[r] = o.value;
  }
  for (let r = e.value.length - 1; r >= s.length && (n[r]._zod.optout === "optional" && e.value[r] === void 0); r--)
    e.value.length = r;
  return e;
}
const yu = /* @__PURE__ */ y("$ZodRecord", (t, e) => {
  Z.init(t, e);
  const n = oe.memoizer;
  n?.attach(t), t._zod.parse = (s, i) => {
    const r = s.value;
    if (!tt(r))
      return s.issues.push({
        expected: "record",
        code: "invalid_type",
        input: r,
        inst: t
      }), s;
    const o = [], c = e.keyType._zod.values;
    if (c && !e.partial) {
      s.value = n ? n.alloc(t, s, {}, i) : {};
      const a = /* @__PURE__ */ new Set();
      for (const u of c)
        if (typeof u == "string" || typeof u == "number" || typeof u == "symbol") {
          if (a.add(typeof u == "number" ? u.toString() : u), u === "__proto__")
            continue;
          const f = e.keyType._zod.run({ value: u, issues: [] }, i);
          if (f instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          if (f.issues.length) {
            s.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: f.issues.map((m) => Ie(m, i, pe())),
              input: u,
              path: [u],
              inst: t
            });
            continue;
          }
          const d = f.value;
          if (d === "__proto__")
            continue;
          const p = e.valueType._zod.run({ value: r[u], issues: [] }, i);
          p instanceof Promise ? o.push(p.then((m) => {
            m.issues.length && s.issues.push(...ve(u, m.issues)), s.value[d] = m.value;
          })) : (p.issues.length && s.issues.push(...ve(u, p.issues)), s.value[d] = p.value);
        }
      let l;
      for (const u in r)
        if (!a.has(u))
          if (e.mode === "loose") {
            if (u === "__proto__")
              continue;
            s.value[u] = r[u];
          } else
            l = l ?? [], l.push(u);
      l && l.length > 0 && s.issues.push({
        code: "unrecognized_keys",
        input: r,
        inst: t,
        keys: l,
        continue: !0
      });
    } else {
      s.value = n ? n.alloc(t, s, {}, i) : {};
      let a;
      for (const l of Reflect.ownKeys(r)) {
        if (l === "__proto__" || !Object.prototype.propertyIsEnumerable.call(r, l))
          continue;
        let u = e.keyType._zod.run({ value: l, issues: [] }, i);
        if (u instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (typeof l == "string" && Os.test(l) && u.issues.length) {
          const m = e.keyType._zod.run({ value: Number(l), issues: [] }, i);
          if (m instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          m.issues.length === 0 && (u = m);
        }
        if (u.issues.length) {
          e.mode === "loose" ? s.value[l] = r[l] : c ? (a = a ?? [], a.push(l)) : s.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: u.issues.map((m) => Ie(m, i, pe())),
            input: l,
            path: [l],
            inst: t
          });
          continue;
        }
        const d = u.value;
        if (d === "__proto__")
          continue;
        const p = e.valueType._zod.run({ value: r[l], issues: [] }, i);
        p instanceof Promise ? o.push(p.then((m) => {
          m.issues.length && s.issues.push(...ve(l, m.issues)), s.value[d] = m.value;
        })) : (p.issues.length && s.issues.push(...ve(l, p.issues)), s.value[d] = p.value);
      }
      a && a.length > 0 && s.issues.push({
        code: "unrecognized_keys",
        input: r,
        inst: t,
        keys: a,
        continue: !0
      });
    }
    return o.length ? Promise.all(o).then(() => s) : s;
  };
}), bu = /* @__PURE__ */ y("$ZodEnum", (t, e) => {
  Z.init(t, e);
  const n = Kn(e.entries), s = new Set(n);
  t._zod.values = s, L(t, "pattern", (i) => {
    const r = Kn(i.def.entries).filter((o) => Xc.has(typeof o));
    return new RegExp(r.length ? `^(${r.map((o) => nt(o.toString())).join("|")})$` : "^[^\\s\\S]$");
  }), t._zod.parse = (i, r) => {
    const o = i.value;
    return s.has(o) || i.issues.push({
      code: "invalid_value",
      values: n,
      input: o,
      inst: t
    }), i;
  };
}), wu = /* @__PURE__ */ y("$ZodLiteral", (t, e) => {
  Z.init(t, e);
  const n = new Set(e.values);
  t._zod.values = n, L(t, "pattern", (s) => {
    const i = s.def.values;
    return new RegExp(i.length ? `^(${i.map((r) => typeof r == "string" ? nt(r) : r ? nt(r.toString()) : String(r)).join("|")})$` : "^[^\\s\\S]$");
  }), t._zod.parse = (s, i) => {
    const r = s.value;
    return n.has(r) || s.issues.push({
      code: "invalid_value",
      values: e.values,
      input: r,
      inst: t
    }), s;
  };
}), _u = /* @__PURE__ */ y("$ZodTransform", (t, e) => {
  Z.init(t, e), t._zod.optin = "optional", oe.memoizer?.guard(t), t._zod.parse = (n, s) => {
    if (s.direction === "backward")
      throw new Br(t.constructor.name);
    const i = e.transform(n.value, n);
    if (s.async)
      return (i instanceof Promise ? i : Promise.resolve(i)).then((o) => (n.value = o, n));
    if (i instanceof Promise)
      throw new Ce();
    return n.value = i, n;
  };
});
function ci(t, e) {
  return t.value = e.issues.length ? void 0 : e.value, t;
}
const to = /* @__PURE__ */ y("$ZodOptional", (t, e) => {
  Z.init(t, e), L(t, "optin", (n) => n.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), t._zod.optout = "optional", L(t, "values", (n) => {
    const s = n.def.innerType._zod.values;
    return s ? /* @__PURE__ */ new Set([...s, void 0]) : void 0;
  }), L(t, "pattern", (n) => {
    const s = n.def.innerType._zod.pattern;
    return s ? new RegExp(`^(${bs(s.source)})?$`) : void 0;
  }), t._zod.parse = (n, s) => {
    if (n.value === void 0) {
      if (e.innerType._zod.optin !== "defaulted")
        return n;
      const i = e.innerType._zod.run({ value: n.value, issues: [] }, s);
      return i instanceof Promise ? i.then((r) => ci(n, r)) : ci(n, i);
    }
    return e.innerType._zod.run(n, s);
  };
}), vu = /* @__PURE__ */ y("$ZodExactOptional", (t, e) => {
  to.init(t, e), L(t, "values", (n) => n.def.innerType._zod.values), L(t, "pattern", (n) => n.def.innerType._zod.pattern), t._zod.parse = (n, s) => e.innerType._zod.run(n, s);
}), ku = /* @__PURE__ */ y("$ZodNullable", (t, e) => {
  Z.init(t, e), L(t, "optin", (n) => n.def.innerType._zod.optin), L(t, "optout", (n) => n.def.innerType._zod.optout), L(t, "pattern", (n) => {
    const s = n.def.innerType._zod.pattern;
    return s ? new RegExp(`^(${bs(s.source)}|null)$`) : void 0;
  }), L(t, "values", (n) => n.def.innerType._zod.values ? /* @__PURE__ */ new Set([...n.def.innerType._zod.values, null]) : void 0), t._zod.parse = (n, s) => n.value === null ? n : e.innerType._zod.run(n, s);
}), Su = /* @__PURE__ */ y("$ZodDefault", (t, e) => {
  Z.init(t, e), t._zod.optin = "defaulted", L(t, "values", (n) => n.def.innerType._zod.values), t._zod.parse = (n, s) => {
    if (s.direction === "backward")
      return e.innerType._zod.run(n, s);
    if (n.value === void 0)
      return n.value = e.defaultValue, n;
    const i = e.innerType._zod.run(n, s);
    return i instanceof Promise ? i.then((r) => ai(r, e)) : ai(i, e);
  };
});
function ai(t, e) {
  return t.value === void 0 && (t.value = e.defaultValue), t;
}
const $u = /* @__PURE__ */ y("$ZodPrefault", (t, e) => {
  Z.init(t, e), t._zod.optin = "defaulted", L(t, "values", (n) => n.def.innerType._zod.values), t._zod.parse = (n, s) => (s.direction === "backward" || n.value === void 0 && (n.value = e.defaultValue), e.innerType._zod.run(n, s));
}), Ou = /* @__PURE__ */ y("$ZodNonOptional", (t, e) => {
  Z.init(t, e), L(t, "values", (n) => {
    const s = n.def.innerType._zod.values;
    return s ? new Set([...s].filter((i) => i !== void 0)) : void 0;
  }), t._zod.parse = (n, s) => {
    const i = e.innerType._zod.run(n, s);
    return i instanceof Promise ? i.then((r) => li(r, t)) : li(i, t);
  };
});
function li(t, e) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: e
  }), t;
}
function ui(t, e, n, s) {
  return e.issues.length ? (t.value = n.catchValue({
    ...e,
    value: t.value,
    error: {
      issues: e.issues.map((i) => Ie(i, s, pe()))
    },
    input: t.value
  }), t) : (t.value = e.value, e.memo && (t.memo = !0), t);
}
const Iu = /* @__PURE__ */ y("$ZodCatch", (t, e) => {
  Z.init(t, e), L(t, "optin", (n) => n.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), L(t, "optout", (n) => n.def.innerType._zod.optout), L(t, "values", (n) => n.def.innerType._zod.values), t._zod.parse = (n, s) => {
    if (s.direction === "backward")
      return e.innerType._zod.run(n, s);
    const i = e.innerType._zod.run({ value: n.value, issues: [] }, s);
    return i instanceof Promise ? i.then((r) => ui(n, r, e, s)) : ui(n, i, e, s);
  };
}), Eu = /* @__PURE__ */ y("$ZodPipe", (t, e) => {
  Z.init(t, e), L(t, "values", (n) => n.def.in._zod.values), L(t, "optin", (n) => n.def.in._zod.optin), L(t, "optout", (n) => n.def.out._zod.optout), L(t, "propValues", (n) => n.def.in._zod.propValues), t._zod.parse = (n, s) => {
    if (s.direction === "backward") {
      const r = e.out._zod.run(n, s);
      return r instanceof Promise ? r.then((o) => Zt(o, e.in, s)) : Zt(r, e.in, s);
    }
    const i = e.in._zod.run(n, s);
    return i instanceof Promise ? i.then((r) => Zt(r, e.out, s)) : Zt(i, e.out, s);
  };
});
function Zt(t, e, n) {
  return t.issues.some((s) => s.code !== "unrecognized_keys") ? (t.aborted = !0, t) : e._zod.run({ value: t.value, issues: t.issues }, n);
}
const Nu = /* @__PURE__ */ y("$ZodReadonly", (t, e) => {
  Z.init(t, e), L(t, "propValues", (n) => n.def.innerType._zod.propValues), L(t, "values", (n) => n.def.innerType._zod.values), L(t, "optin", (n) => n.def.innerType?._zod?.optin), L(t, "optout", (n) => n.def.innerType?._zod?.optout), t._zod.parse = (n, s) => {
    if (s.direction === "backward")
      return e.innerType._zod.run(n, s);
    const i = e.innerType._zod.run(n, s);
    return i instanceof Promise ? i.then(fi) : fi(i);
  };
});
function fi(t) {
  return t.memo || (t.value = Object.freeze(t.value)), t;
}
const Au = /* @__PURE__ */ y("$ZodCustom", (t, e) => {
  ee.init(t, e), Z.init(t, e), t._zod.parse = (n, s) => n, t._zod.check = (n) => {
    const s = n.value, i = e.fn(s);
    if (i instanceof Promise)
      return i.then((r) => di(r, n, s, t));
    di(i, n, s, t);
  };
});
function di(t, e, n, s) {
  if (!t) {
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
    s._zod.def.params && (i.params = s._zod.def.params), e.issues.push($t(i));
  }
}
class Tu extends Error {
  constructor() {
    super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
  }
}
const Yn = "~memo", hi = [];
function no(t) {
  return t !== null && typeof t == "object";
}
function Mn(t) {
  return t.map((e) => e.path ? { ...e, path: e.path.slice() } : { ...e });
}
const so = /* @__PURE__ */ new WeakMap(), gt = 0, Yt = 1, wt = 2;
function Gt(t, e, n) {
  const s = so.get(t);
  if (s !== void 0)
    return s ? wt : gt;
  if (e.has(t))
    return wt;
  e.add(t);
  let i = gt;
  const r = (u) => {
    if (i !== wt && u?._zod) {
      const f = Gt(u, e);
      f > i && (i = f);
    }
  }, o = (u, f) => {
    let d = gt;
    for (const p of Reflect.ownKeys(u)) {
      const m = Object.getOwnPropertyDescriptor(u, p);
      if (!m.enumerable)
        continue;
      const h = m.get ? Yt : m.value?._zod ? Gt(m.value, e) : gt;
      h > d && (d = h);
    }
    return d;
  }, c = (u) => {
    u > i && (i = u);
  }, a = t._zod.def;
  switch (a.type) {
    case "object": {
      const u = Tr(a);
      c(u ? o(u) : Yt), r(a.catchall);
      break;
    }
    case "array":
      r(a.element);
      break;
    case "tuple":
      for (const u of a.items)
        r(u);
      r(a.rest);
      break;
    case "record":
    case "map":
      r(a.keyType), r(a.valueType);
      break;
    case "set":
      r(a.valueType);
      break;
    case "union":
      for (const u of a.options)
        r(u);
      break;
    case "intersection":
      r(a.left), r(a.right);
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
      r(a.innerType);
      break;
    case "pipe":
      r(a.in), r(a.out);
      break;
    case "function":
      r(a.input), r(a.output);
      break;
    // `$ZodLazy` caches its inner on the def, so a resolved edge is followed exactly
    case "lazy": {
      const u = a._cachedInner ?? void 0;
      c(u ? Gt(u, e) : Yt);
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
      for (const u in a) {
        const f = Object.getOwnPropertyDescriptor(a, u);
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
  return e.delete(t), zu(t, i);
}
function zu(t, e) {
  return e !== Yt && so.set(t, e === wt), e;
}
function Pu(t, e) {
  let n = t.buckets.get(e);
  return n || (n = /* @__PURE__ */ new WeakMap(), t.buckets.set(e, n)), n;
}
let Rt;
const Bt = [], Lu = {
  alloc(t, e, n) {
    const s = Rt;
    if (!s)
      return n;
    Rt = void 0;
    const i = { value: n, issues: null };
    return s.set(e.value, i), Bt.push(i), n;
  },
  guard(t) {
    var e;
    (e = t._zod).deferred ?? (e.deferred = []), t._zod.deferred.push(() => {
      const n = t._zod.parse, s = (i, r) => {
        if (r.direction !== "backward" && Mu(r, i.value))
          throw new Tu();
        return n(i, r);
      };
      t._zod.parse = s, t._zod.run === n && (t._zod.run = s);
    });
  },
  attach(t) {
    var e;
    let n, s = !1, i, r;
    (e = t._zod).deferred ?? (e.deferred = []), t._zod.deferred.push(() => {
      const o = t._zod.parse, c = (a, l) => {
        if (n === void 0) {
          const b = Gt(t, /* @__PURE__ */ new Set());
          if (b === gt)
            return t._zod.parse = o, t._zod.run === c && (t._zod.run = o), o(a, l);
          b === wt || s ? n = !0 : s = !0;
        }
        const u = a.value;
        if (!no(u))
          return o(a, l);
        let f = l[Yn];
        f || (f = { buckets: /* @__PURE__ */ new WeakMap(), backEdges: void 0 }, l[Yn] = f);
        let d;
        i === l ? d = r : (d = Pu(f, t), i = l, r = d);
        const p = d.get(u);
        if (p)
          return a.value = p.value, p.issues ? p.issues.length && a.issues.push(...Mn(p.issues)) : (a.memo = !0, f.backEdges ?? (f.backEdges = /* @__PURE__ */ new WeakSet()), f.backEdges.add(p.value)), a;
        Rt = d;
        const m = Bt.length, h = o(a, l);
        Rt = void 0;
        const g = Bt.length > m ? Bt.pop() : void 0;
        return h instanceof Promise ? h.then((b) => (g && (g.issues = b.issues.length ? Mn(b.issues) : hi), b)) : (g && (g.issues = h.issues.length ? Mn(h.issues) : hi), h);
      };
      t._zod.parse = c, t._zod.run === o && (t._zod.run = c);
    });
  }
};
function Cu() {
  return Lu;
}
function Mu(t, e) {
  const n = t[Yn]?.backEdges;
  return n !== void 0 && no(e) && n.has(e);
}
const ju = () => {
  const t = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function e(r) {
    return t[r] ?? null;
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
        const o = i(r.expected), c = aa(r.input), a = i(c, r.input);
        return `Invalid input: expected ${o}, received ${a}`;
      }
      case "invalid_value":
        return r.values.length === 1 ? `Invalid input: expected ${Mr(r.values[0])}` : `Invalid option: expected one of ${Js(r.values, "|")}`;
      case "too_big": {
        const o = r.exact ? "exactly " : r.inclusive ? "<=" : "<", c = e(r.origin);
        return c ? `Too big: expected ${r.origin ?? "value"} to have ${o}${r.maximum.toString()} ${c.unit ?? "elements"}` : `Too big: expected ${r.origin ?? "value"} to be ${o}${r.maximum.toString()}`;
      }
      case "too_small": {
        const o = r.exact ? "exactly " : r.inclusive ? ">=" : ">", c = e(r.origin);
        return c ? `Too small: expected ${r.origin} to have ${o}${r.minimum.toString()} ${c.unit}` : `Too small: expected ${r.origin} to be ${o}${r.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = r;
        return o.format === "starts_with" ? `Invalid string: must start with "${o.prefix}"` : o.format === "ends_with" ? `Invalid string: must end with "${o.suffix}"` : o.format === "includes" ? `Invalid string: must include "${o.includes}"` : o.format === "regex" ? `Invalid string: must match pattern ${o.pattern}` : `Invalid ${n[o.format] ?? r.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${r.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${r.keys.length > 1 ? "s" : ""}: ${Js(r.keys, ", ")}`;
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
function Du() {
  return {
    localeError: ju()
  };
}
var pi;
class Zu {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(e, ...n) {
    const s = n[0];
    return this._map.set(e, s), s && typeof s == "object" && "id" in s && this._idmap.set(s.id, e), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(e) {
    const n = this._map.get(e);
    return n && typeof n == "object" && "id" in n && this._idmap.delete(n.id), this._map.delete(e), this;
  }
  get(e) {
    const n = e._zod.parent;
    if (n) {
      const s = { ...this.get(n) ?? {} };
      delete s.id;
      const i = { ...s, ...this._map.get(e) };
      return Object.keys(i).length ? i : void 0;
    }
    return this._map.get(e);
  }
  has(e) {
    return this._map.has(e);
  }
}
function Ru() {
  return new Zu();
}
(pi = globalThis).__zod_globalRegistry ?? (pi.__zod_globalRegistry = Ru());
const yt = globalThis.__zod_globalRegistry;
function io(t) {
  return t.checks && (t.checks = [...t.checks]), t;
}
// @__NO_SIDE_EFFECTS__
function Bu(t, e) {
  return new t(io({ type: "string", ...O(e) }));
}
// @__NO_SIDE_EFFECTS__
function Uu(t, e) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function xu(t, e) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Fu(t, e) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Ku(t, e) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Vu(t, e) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function qu(t, e) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Ju(t, e) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Yu(t, e) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Gu(t, e) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Wu(t, e) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Xu(t, e) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Hu(t, e) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Qu(t, e) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function ef(t, e) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function tf(t, e) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function nf(t, e) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function sf(t, e) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function rf(t, e) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function of(t, e) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function cf(t, e) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function af(t, e) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function lf(t, e) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function uf(t, e) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function ff(t, e) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function df(t, e) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function hf(t, e) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function pf(t, e) {
  return new t(io({ type: "number", checks: [], ...O(e) }));
}
// @__NO_SIDE_EFFECTS__
function mf(t, e) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function gf(t, e) {
  return new t({
    type: "boolean",
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function yf(t) {
  return new t({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function bf(t, e) {
  return new t({
    type: "never",
    ...O(e)
  });
}
// @__NO_SIDE_EFFECTS__
function mi(t, e) {
  return new Fr({
    check: "less_than",
    ...O(e),
    value: t,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function jn(t, e) {
  return new Fr({
    check: "less_than",
    ...O(e),
    value: t,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function gi(t, e) {
  return new Kr({
    check: "greater_than",
    ...O(e),
    value: t,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Dn(t, e) {
  return new Kr({
    check: "greater_than",
    ...O(e),
    value: t,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function yi(t, e) {
  return new hl({
    check: "multiple_of",
    ...O(e),
    value: t
  });
}
// @__NO_SIDE_EFFECTS__
function ro(t, e) {
  return new ml({
    check: "max_length",
    ...O(e),
    maximum: t
  });
}
// @__NO_SIDE_EFFECTS__
function on(t, e) {
  return new gl({
    check: "min_length",
    ...O(e),
    minimum: t
  });
}
// @__NO_SIDE_EFFECTS__
function oo(t, e) {
  return new yl({
    check: "length_equals",
    ...O(e),
    length: t
  });
}
// @__NO_SIDE_EFFECTS__
function wf(t, e) {
  return new bl({
    check: "string_format",
    format: "regex",
    ...O(e),
    pattern: t
  });
}
// @__NO_SIDE_EFFECTS__
function _f(t) {
  return new wl({
    check: "string_format",
    format: "lowercase",
    ...O(t)
  });
}
// @__NO_SIDE_EFFECTS__
function vf(t) {
  return new _l({
    check: "string_format",
    format: "uppercase",
    ...O(t)
  });
}
// @__NO_SIDE_EFFECTS__
function kf(t, e) {
  return new vl({
    check: "string_format",
    format: "includes",
    ...O(e),
    includes: t
  });
}
// @__NO_SIDE_EFFECTS__
function Sf(t, e) {
  return new kl({
    check: "string_format",
    format: "starts_with",
    ...O(e),
    prefix: t
  });
}
// @__NO_SIDE_EFFECTS__
function $f(t, e) {
  return new Sl({
    check: "string_format",
    format: "ends_with",
    ...O(e),
    suffix: t
  });
}
// @__NO_SIDE_EFFECTS__
function ft(t) {
  return new $l({
    check: "overwrite",
    tx: t
  });
}
// @__NO_SIDE_EFFECTS__
function Of(t) {
  return /* @__PURE__ */ ft((e) => e.normalize(t));
}
// @__NO_SIDE_EFFECTS__
function If() {
  return /* @__PURE__ */ ft((t) => t.trim());
}
// @__NO_SIDE_EFFECTS__
function Ef() {
  return /* @__PURE__ */ ft((t) => t.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Nf() {
  return /* @__PURE__ */ ft((t) => t.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Af() {
  return /* @__PURE__ */ ft((t) => Gc(t));
}
// @__NO_SIDE_EFFECTS__
function Tf(t, e, n) {
  return new t({
    type: "array",
    element: e,
    // get element() {
    //   return element;
    // },
    ...O(n)
  });
}
// @__NO_SIDE_EFFECTS__
function zf(t, e, n) {
  return new t({
    type: "custom",
    check: "custom",
    fn: e,
    ...O(n)
  });
}
// @__NO_SIDE_EFFECTS__
function Pf(t, e) {
  const n = /* @__PURE__ */ Lf((s) => (s.addIssue = (i) => {
    if (typeof i == "string")
      s.issues.push($t(i, s.value, n._zod.def));
    else {
      const r = i;
      r.fatal && (r.continue = !1), r.code ?? (r.code = "custom"), "input" in r || (r.input = s.value), r.inst ?? (r.inst = n), r.continue ?? (r.continue = !n._zod.def.abort), s.issues.push($t(r));
    }
  }, t(s.value, s)), e);
  return n;
}
// @__NO_SIDE_EFFECTS__
function Lf(t, e) {
  const n = new ee({
    check: "custom",
    ...O(e)
  });
  return n._zod.check = t, n;
}
function _t(t, ...e) {
  for (const n of e)
    for (const s of Reflect.ownKeys(n))
      Object.prototype.propertyIsEnumerable.call(n, s) && Ae(t, s, n[s]);
  return t;
}
function co(t) {
  let e = t?.target ?? "draft-2020-12";
  return e === "draft-4" && (e = "draft-04"), e === "draft-7" && (e = "draft-07"), {
    processors: t.processors ?? {},
    metadataRegistry: t?.metadata ?? yt,
    target: e,
    unrepresentable: t?.unrepresentable ?? "throw",
    override: t?.override ?? (() => {
    }),
    io: t?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    sharedDefsExtractedFor: void 0,
    sharedEmitDoneFor: void 0,
    cycles: t?.cycles ?? "ref",
    reused: t?.reused ?? "inline",
    intersections: [],
    deferred: [],
    external: t?.external ?? void 0
  };
}
function Ne(t, e, n, s, i) {
  const r = typeof e.unrepresentable == "function" ? e.unrepresentable({ zodSchema: t, path: s.path, message: i }) : e.unrepresentable;
  if (r === "any")
    return !1;
  if (r === void 0 || r === "throw")
    throw new Error(i);
  return Object.assign(n, r), !0;
}
function J(t, e, n = { path: [], schemaPath: [] }) {
  var s;
  const i = t._zod.def, r = e.seen.get(t);
  if (r)
    return r.count++, n.schemaPath.includes(t) && (r.cycle = n.path), r.schema;
  const o = { schema: {}, count: 1, cycle: void 0, path: n.path };
  e.seen.set(t, o), e.sharedDefsExtractedFor = void 0, e.sharedEmitDoneFor = void 0;
  const c = t._zod.toJSONSchema?.();
  if (c)
    o.schema = c;
  else {
    const u = {
      ...n,
      schemaPath: [...n.schemaPath, t],
      path: n.path
    };
    if (t._zod.processJSONSchema)
      t._zod.processJSONSchema(e, o.schema, u);
    else {
      const d = o.schema, p = e.processors[i.type];
      if (!p)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
      p(t, e, d, u);
    }
    const f = t._zod.parent;
    f && (o.ref || (o.ref = f), J(f, e, u), e.seen.get(f).isParent = !0);
  }
  const a = e.metadataRegistry.get(t);
  return a && _t(o.schema, a), e.io === "input" && W(t) && (delete o.schema.examples, delete o.schema.default), e.io === "input" && "_prefault" in o.schema && ((s = o.schema).default ?? (s.default = o.schema._prefault)), delete o.schema._prefault, e.seen.get(t).schema;
}
function bi(t) {
  return t.replace(/~/g, "~0").replace(/\//g, "~1");
}
function ao(t, e) {
  const n = t.seen.get(e);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  if (t.external && t.sharedDefsExtractedFor === t.external)
    return;
  const s = /* @__PURE__ */ new Map();
  for (const o of t.seen.entries()) {
    const c = t.metadataRegistry.get(o[0])?.id;
    if (c) {
      const a = s.get(c);
      if (a && a !== o[0])
        throw new Error(`Duplicate schema id "${c}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      s.set(c, o[0]);
    }
  }
  const i = (o) => {
    const c = t.target === "draft-2020-12" ? "$defs" : "definitions";
    if (t.external) {
      const f = t.external.registry.get(o[0])?.id, d = t.external.uri ?? ((m) => m);
      if (f)
        return { ref: d(f) };
      const p = o[1].defId ?? o[1].schema.id ?? `schema${t.counter++}`;
      return o[1].defId = p, { defId: p, ref: `${d("__shared")}#/${c}/${bi(p)}` };
    }
    const a = "#", l = `${a}/${c}/`;
    if (o[1] === n && !o[1].schema.id)
      return { ref: a };
    const u = o[1].schema.id ?? `__schema${t.counter++}`;
    return { defId: u, ref: l + bi(u) };
  }, r = (o) => {
    if (o[1].schema.$ref)
      return;
    const c = o[1], { ref: a, defId: l } = i(o);
    c.def = { ...c.schema }, l && (c.defId = l);
    const u = c.schema;
    for (const f in u)
      delete u[f];
    u.$ref = a;
  };
  if (t.cycles === "throw")
    for (const o of t.seen.entries()) {
      const c = o[1];
      if (c.cycle)
        throw new Error(`Cycle detected: #/${c.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const o of t.seen.entries()) {
    const c = o[1];
    if (e === o[0]) {
      r(o);
      continue;
    }
    if (t.external) {
      const l = t.external.registry.get(o[0])?.id;
      if (e !== o[0] && l) {
        r(o);
        continue;
      }
    }
    if (t.metadataRegistry.get(o[0])?.id) {
      r(o);
      continue;
    }
    if (c.cycle) {
      r(o);
      continue;
    }
    c.count > 1 && t.reused === "ref" && r(o);
  }
  t.external && (t.sharedDefsExtractedFor = t.external);
}
function lo(t) {
  const e = t.anyOf;
  if (!Array.isArray(e) || e.length === 0 || t.type !== void 0)
    return;
  const n = [];
  for (const s of e) {
    if (!s || typeof s != "object")
      return;
    lo(s);
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
  delete t.anyOf, t.type = n.length === 1 ? n[0] : n;
}
const uo = /* @__PURE__ */ new Set(["type", "properties", "required", "additionalProperties"]), wi = ["oneOf", "anyOf"];
function _i(t) {
  const e = t.additionalProperties;
  return e === void 0 || e === !1 || typeof e != "object" || e === null ? null : Object.keys(e).length ? e : null;
}
function Gn(t) {
  const e = [];
  for (const r of t) {
    if (typeof r != "object" || r.type !== "object")
      return null;
    for (const o in r)
      if (!uo.has(o))
        return null;
    e.push(r);
  }
  const n = {}, s = /* @__PURE__ */ new Set();
  for (const r of e) {
    for (const o in r.properties) {
      if (Object.prototype.hasOwnProperty.call(n, o))
        continue;
      const c = [];
      for (const l of e) {
        const u = l.properties?.[o] ?? _i(l);
        u != null && (c.some((f) => JSON.stringify(f) === JSON.stringify(u)) || c.push(u));
      }
      const a = c.length === 1 ? c[0] : Gn(c) ?? { allOf: c };
      Ae(n, o, a);
    }
    for (const o of r.required ?? [])
      s.add(o);
  }
  const i = { type: "object", properties: n };
  if (s.size && (i.required = [...s]), e.every((r) => r.additionalProperties === !1))
    i.additionalProperties = !1;
  else {
    const r = [];
    for (const o of e) {
      const c = _i(o);
      c && !r.some((a) => JSON.stringify(a) === JSON.stringify(c)) && r.push(c);
    }
    r.length === 1 ? i.additionalProperties = r[0] : r.length > 1 && (i.additionalProperties = { allOf: r });
  }
  return i;
}
function Cf(t) {
  const e = t.allOf;
  if (!Array.isArray(e) || e.length < 2)
    return;
  for (const i of uo)
    if (i in t)
      return;
  const n = e.filter((i) => wi.some((r) => Array.isArray(i[r])));
  let s = null;
  if (!n.length)
    s = Gn(e);
  else {
    const i = n[0], r = wi.find((a) => Array.isArray(i[a]));
    if (Object.keys(i).length !== 1)
      return;
    const o = e.filter((a) => a !== i), c = i[r].map((a) => Gn([...o, a]));
    if (c.some((a) => !a))
      return;
    s = { [r]: c };
  }
  s && (delete t.allOf, _t(t, s));
}
function fo(t, e) {
  const n = t.seen.get(e);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const s = (c) => {
    const a = t.seen.get(c);
    if (a.ref === null)
      return;
    const l = a.def ?? a.schema, u = { ...l }, f = a.ref;
    if (a.ref = null, f) {
      s(f);
      const p = t.seen.get(f), m = p.schema;
      if (m.$ref && (t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0") ? (l.allOf = l.allOf ?? [], l.allOf.push(m)) : _t(l, m), _t(l, u), c._zod.parent === f)
        for (const g in l)
          g === "$ref" || g === "allOf" || g in u || delete l[g];
      if (m.$ref && p.def)
        for (const g in l)
          g === "$ref" || g === "allOf" || g in p.def && JSON.stringify(l[g]) === JSON.stringify(p.def[g]) && delete l[g];
    }
    const d = c._zod.parent;
    if (d && d !== f) {
      s(d);
      const p = t.seen.get(d);
      if (p?.schema.$ref && (l.$ref = p.schema.$ref, p.def))
        for (const m in l)
          m === "$ref" || m === "allOf" || m in p.def && JSON.stringify(l[m]) === JSON.stringify(p.def[m]) && delete l[m];
    }
    t.override({
      zodSchema: c,
      jsonSchema: l,
      path: a.path ?? []
    });
  };
  if (!t.external || t.sharedEmitDoneFor !== t.external) {
    for (const c of [...t.seen.entries()].reverse())
      s(c[0]);
    if (t.target !== "openapi-3.0")
      for (const c of t.seen.entries())
        lo(c[1].def ?? c[1].schema);
    for (const c of t.deferred)
      c();
    if (t.intersections.length) {
      const c = /* @__PURE__ */ new Map();
      for (const a of t.seen.values())
        for (const l of [a.schema, a.def]) {
          const u = l?.allOf;
          if (!Array.isArray(u))
            continue;
          const f = c.get(u);
          f ? f.push(l) : c.set(u, [l]);
        }
      for (const a of t.intersections)
        for (const l of c.get(a) ?? [])
          Cf(l);
    }
  }
  const i = {};
  if (t.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : t.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : t.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : t.target, t.external?.uri) {
    const c = t.external.registry.get(e)?.id;
    if (!c)
      throw new Error("Schema is missing an `id` property");
    i.$id = t.external.uri(c);
  }
  _t(i, n.defId ? n.schema : n.def ?? n.schema);
  const r = t.metadataRegistry.get(e)?.id;
  r !== void 0 && i.id === r && delete i.id;
  const o = t.external?.defs ?? {};
  if (!t.external || t.sharedEmitDoneFor !== t.external)
    for (const c of t.seen.entries()) {
      const a = c[1];
      a.def && a.defId && (a.def.id === a.defId && delete a.def.id, Ae(o, a.defId, a.def));
    }
  t.external && (t.sharedEmitDoneFor = t.external), t.external || Object.keys(o).length > 0 && (t.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
  try {
    const c = JSON.parse(JSON.stringify(i));
    return Object.defineProperty(c, "~standard", {
      value: {
        ...e["~standard"],
        jsonSchema: {
          input: cn(e, "input", t.processors),
          output: cn(e, "output", t.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), c;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function W(t, e) {
  const n = e ?? { seen: /* @__PURE__ */ new Set() };
  if (n.seen.has(t))
    return !1;
  n.seen.add(t);
  const s = t._zod.def;
  if (s.type === "transform")
    return !0;
  if (s.type === "array")
    return W(s.element, n);
  if (s.type === "set")
    return W(s.valueType, n);
  if (s.type === "lazy")
    return W(s.getter(), n);
  if (s.type === "promise" || s.type === "optional" || s.type === "nonoptional" || s.type === "nullable" || s.type === "readonly" || s.type === "default" || s.type === "prefault" || s.type === "catch")
    return W(s.innerType, n);
  if (s.type === "intersection")
    return W(s.left, n) || W(s.right, n);
  if (s.type === "record" || s.type === "map")
    return W(s.keyType, n) || W(s.valueType, n);
  if (s.type === "pipe")
    return t._zod.traits.has("$ZodCodec") ? !0 : W(s.in, n) || W(s.out, n);
  if (s.type === "object") {
    for (const i in s.shape)
      if (W(s.shape[i], n))
        return !0;
    return !1;
  }
  if (s.type === "union") {
    for (const i of s.options)
      if (W(i, n))
        return !0;
    return !1;
  }
  if (s.type === "tuple") {
    for (const i of s.items)
      if (W(i, n))
        return !0;
    return !!(s.rest && W(s.rest, n));
  }
  return !1;
}
const Mf = (t, e = {}) => (n) => {
  const s = co({ ...n, processors: e });
  return J(t, s), ao(s, t), fo(s, t);
}, cn = (t, e, n = {}) => (s) => {
  const { libraryOptions: i, target: r } = s ?? {}, o = co({ ...i ?? {}, target: r, io: e, processors: n });
  return J(t, o), ao(o, t), fo(o, t);
}, st = (t, e, n) => {
  (t[e] === void 0 || n > t[e]) && (t[e] = n);
}, it = (t, e, n) => {
  (t[e] === void 0 || n < t[e]) && (t[e] = n);
}, vi = (t, e) => {
  st(t, "minimum", e), it(t, "maximum", e);
}, ho = (t, e) => {
  t.multipleOf ?? (t.multipleOf = []), t.multipleOf.includes(e) || t.multipleOf.push(e);
}, po = (t, e) => {
  t.patterns ?? (t.patterns = /* @__PURE__ */ new Set()), t.patterns.add(e);
}, mo = (t, e) => {
  t.mime = t.mime ? t.mime.filter((n) => e.includes(n)) : [...e];
}, go = (t, e) => {
  t.format = e, e.includes("int") && (t.isInt = !0);
}, ki = (t, e) => st(t, "minimum", e.minimum), Si = (t, e) => it(t, "maximum", e.maximum), $i = (t) => (e, n) => {
  go(e, n.format);
  const [s, i] = t[n.format];
  st(e, "minimum", s), it(e, "maximum", i);
}, jf = {
  greater_than: (t, e) => st(t, e.inclusive ? "minimum" : "exclusiveMinimum", e.value),
  less_than: (t, e) => it(t, e.inclusive ? "maximum" : "exclusiveMaximum", e.value),
  multiple_of: (t, e) => ho(t, e.value),
  number_format: $i(jr),
  bigint_format: $i(Qc),
  min_length: ki,
  max_length: Si,
  length_equals: (t, e) => vi(t, e.length),
  min_size: ki,
  max_size: Si,
  size_equals: (t, e) => vi(t, e.size),
  string_format: (t, e) => {
    go(t, e.format), e.pattern && po(t, e.pattern), (e.format === "base64" || e.format === "base64url") && (t.contentEncoding = e.format), (e.local || e.precision === -1) && (t.laxFormat = !0);
  },
  mime_type: (t, e) => mo(t, e.mime)
};
function se(t) {
  const e = {}, n = t._zod.def, s = t._zod.traits.has("$ZodCheck") ? [t, ...n.checks ?? []] : n.checks ?? [];
  for (const r of s)
    jf[r._zod.def.check]?.(e, r._zod.def);
  const i = t._zod.bag;
  i.minimum !== void 0 && st(e, "minimum", i.minimum), i.exclusiveMinimum !== void 0 && st(e, "exclusiveMinimum", i.exclusiveMinimum), i.maximum !== void 0 && it(e, "maximum", i.maximum), i.exclusiveMaximum !== void 0 && it(e, "exclusiveMaximum", i.exclusiveMaximum), i.multipleOf !== void 0 && ho(e, i.multipleOf), i.format !== void 0 && (e.format ?? (e.format = i.format), i.format.includes("int") && (e.isInt = !0)), i.mime && mo(e, i.mime);
  for (const r of i.patterns ?? [])
    po(e, r);
  return e;
}
const Df = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, Zf = /* @__PURE__ */ new Map([
  [Xr, el],
  [Ns, tl]
]), yo = (t) => Zf.get(t) ?? t, Rf = (t, e, n, s) => {
  const i = n;
  i.type = "string";
  const { minimum: r, maximum: o, format: c, patterns: a, contentEncoding: l, laxFormat: u } = se(t);
  if (typeof r == "number" && (i.minLength = r), typeof o == "number" && (i.maxLength = o), c && (i.format = Df[c] ?? c, i.format === "" && delete i.format, (c === "time" || u) && delete i.format), l && (i.contentEncoding = l), a && a.size > 0) {
    const f = [...a].map(yo);
    f.length === 1 ? i.pattern = f[0].source : f.length > 1 && (i.allOf = [
      ...f.map((d) => ({
        ...e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: d.source
      }))
    ]);
  }
}, Bf = (t, e, n, s) => {
  const i = n, { minimum: r, maximum: o, multipleOf: c, exclusiveMaximum: a, exclusiveMinimum: l, isInt: u } = se(t);
  i.type = u ? "integer" : "number";
  const f = typeof l == "number" && l >= (r ?? Number.NEGATIVE_INFINITY), d = typeof a == "number" && a <= (o ?? Number.POSITIVE_INFINITY), p = e.target === "draft-04" || e.target === "openapi-3.0";
  if (f ? p ? (i.minimum = l, i.exclusiveMinimum = !0) : i.exclusiveMinimum = l : typeof r == "number" && (i.minimum = r), d ? p ? (i.maximum = a, i.exclusiveMaximum = !0) : i.exclusiveMaximum = a : typeof o == "number" && (i.maximum = o), c) {
    const m = /* @__PURE__ */ new Set();
    for (const b of c)
      Number.isFinite(b) && b !== 0 ? m.add(Math.abs(b)) : Ne(t, e, i, s, `A multipleOf divisor of ${b} cannot be represented in JSON Schema`);
    const [h, ...g] = m;
    h !== void 0 && (i.multipleOf = h), g.length && (i.allOf = [...i.allOf ?? [], ...g.map((b) => ({ multipleOf: b }))]);
  }
}, Uf = (t, e, n, s) => {
  n.type = "boolean";
}, xf = (t, e, n, s) => {
  n.not = {};
}, Ff = (t, e, n, s) => {
}, Kf = (t, e, n, s) => {
  const i = t._zod.def, r = Kn(i.entries);
  if (r.length === 0) {
    n.not = {};
    return;
  }
  r.every((o) => typeof o == "number") && (n.type = "number"), r.every((o) => typeof o == "string") && (n.type = "string"), n.enum = r;
}, Vf = (t, e, n, s) => {
  const i = t._zod.def;
  if (i.values.length === 0) {
    n.not = {};
    return;
  }
  const r = [];
  for (const o of i.values)
    if (o === void 0) {
      if (Ne(t, e, n, s, "Literal `undefined` cannot be represented in JSON Schema"))
        return;
    } else if (typeof o == "bigint") {
      if (Ne(t, e, n, s, "BigInt literals cannot be represented in JSON Schema"))
        return;
      r.push(Number(o));
    } else
      r.push(o);
  if (r.length !== 0) if (r.length === 1) {
    const o = r[0];
    n.type = o === null ? "null" : typeof o, e.target === "draft-04" || e.target === "openapi-3.0" ? n.enum = [o] : n.const = o;
  } else
    r.every((o) => typeof o == "number") && (n.type = "number"), r.every((o) => typeof o == "string") && (n.type = "string"), r.every((o) => typeof o == "boolean") && (n.type = "boolean"), r.every((o) => o === null) && (n.type = "null"), n.enum = r;
}, qf = (t, e, n, s) => {
  Ne(t, e, n, s, "Custom types cannot be represented in JSON Schema");
}, Jf = (t, e, n, s) => {
  Ne(t, e, n, s, "Transforms cannot be represented in JSON Schema");
}, Yf = (t, e, n, s) => {
  const i = n, r = t._zod.def, { minimum: o, maximum: c } = se(t);
  typeof o == "number" && (i.minItems = o), typeof c == "number" && (i.maxItems = c), i.type = "array", i.items = J(r.element, e, {
    ...s,
    path: [...s.path, "items"]
  });
};
function Ot(t) {
  const e = t._zod.def;
  return e.type === "pipe" && e.in._zod.traits.has("$ZodTransform") ? Ot(e.out) : e.type === "catch" ? Ot(e.innerType) : t._zod.optin;
}
const Gf = (t, e, n, s) => {
  const i = n, r = t._zod.def, o = r.shape;
  if (Object.getOwnPropertySymbols(o).length && Ne(t, e, i, s, "Symbol keys cannot be represented in JSON Schema"))
    return;
  i.type = "object", i.properties = {};
  for (const l in o)
    Ae(i.properties, l, J(o[l], e, {
      ...s,
      path: [...s.path, "properties", l]
    }));
  const a = [];
  for (const l of Object.keys(o)) {
    const u = r.shape[l];
    (e.io === "input" ? Ot(u) === void 0 : u._zod.optout === void 0) && a.push(l);
  }
  a.length > 0 && (i.required = a), r.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : r.catchall ? r.catchall && (i.additionalProperties = J(r.catchall, e, {
    ...s,
    path: [...s.path, "additionalProperties"]
  })) : e.io === "output" && (i.additionalProperties = !1);
}, Wf = (t, e, n, s) => {
  const i = t._zod.def, r = i.inclusive === !1, o = i.options.map((c, a) => J(c, e, {
    ...s,
    path: [...s.path, r ? "oneOf" : "anyOf", a]
  }));
  r ? n.oneOf = o : n.anyOf = o;
}, Xf = (t, e, n, s) => {
  const i = t._zod.def, r = J(i.left, e, {
    ...s,
    path: [...s.path, "allOf", 0]
  }), o = J(i.right, e, {
    ...s,
    path: [...s.path, "allOf", 1]
  }), c = (l) => "allOf" in l && Object.keys(l).length === 1, a = [
    ...c(r) ? r.allOf : [r],
    ...c(o) ? o.allOf : [o]
  ];
  n.allOf = a, e.intersections.push(a);
}, Hf = (t, e, n, s) => {
  const i = n, r = t._zod.def;
  i.type = "array";
  const o = e.target === "draft-2020-12" ? "prefixItems" : "items", c = e.target === "draft-2020-12" || e.target === "openapi-3.0" ? "items" : "additionalItems", a = r.items.map((h, g) => J(h, e, {
    ...s,
    path: [...s.path, o, g]
  })), l = r.rest ? J(r.rest, e, {
    ...s,
    path: [...s.path, c, ...e.target === "openapi-3.0" ? [r.items.length] : []]
  }) : null;
  let u = r.items.length;
  for (; u > 0; ) {
    const h = r.items[u - 1];
    if (!(e.io === "input" ? Ot(h) !== void 0 : h._zod.optout === "optional"))
      break;
    u--;
  }
  const f = r.items.length, d = !r.rest;
  e.target === "draft-2020-12" ? (i.prefixItems = a, d ? i.items = !1 : l && (i.items = l), u > 0 && (i.minItems = u), d && (i.maxItems = f)) : e.target === "openapi-3.0" ? (i.items = {
    anyOf: a
  }, l && i.items.anyOf.push(l), u > 0 && (i.minItems = u), d && (i.maxItems = f)) : (i.items = a, d ? i.additionalItems = !1 : l && (i.additionalItems = l), u > 0 && (i.minItems = u), d && (i.maxItems = f));
  const { minimum: p, maximum: m } = se(t);
  typeof p == "number" && (i.minItems = p), typeof m == "number" && (i.maxItems = m);
};
function Wn(t, e, n) {
  if (e.$ref) {
    if (n.has(e))
      return e;
    n.add(e);
    const m = t.get(e)?.def;
    if (!m)
      return e;
    const h = Wn(t, m, n);
    return h === m ? e : h;
  }
  for (const m of ["anyOf", "oneOf"]) {
    const h = e[m];
    if (!Array.isArray(h))
      continue;
    const g = h.map((b) => Wn(t, b, n));
    g.some((b, w) => b !== h[w]) && (e = { ...e, [m]: g });
  }
  const s = Array.isArray(e.type) ? e.type : [e.type], i = !s.includes("string") && s.some((m) => m === "number" || m === "integer"), r = e.enum ?? (e.const !== void 0 ? [e.const] : void 0);
  if (!i && !r?.some((m) => typeof m == "number"))
    return e;
  const { minimum: o, maximum: c, exclusiveMinimum: a, exclusiveMaximum: l, multipleOf: u, format: f, id: d, ...p } = e;
  return p.enum ? p.enum = p.enum.map((m) => typeof m == "number" ? String(m) : m) : typeof p.const == "number" && (p.const = String(p.const)), i && (p.type = "string", r || (p.pattern = (s.includes("number") ? Os : ll).source)), p;
}
const Xn = /* @__PURE__ */ new WeakMap();
function Qf(t) {
  const e = /* @__PURE__ */ new Map();
  for (const s of t.seen.values())
    s.def && !e.has(s.schema) && e.set(s.schema, s);
  const n = /* @__PURE__ */ new Map();
  for (const s of Xn.get(t) ?? []) {
    const i = t.seen.get(s), r = (i?.def ?? i?.schema)?.propertyNames;
    if (!r || r === !0 || n.has(r))
      continue;
    const o = Wn(e, r, /* @__PURE__ */ new Set());
    o !== r && n.set(r, o);
  }
  if (n.size)
    for (const s of t.seen.values())
      for (const i of [s.schema, s.def]) {
        const r = i && n.get(i.propertyNames);
        r && (i.propertyNames = r);
      }
}
const ed = (t, e, n, s) => {
  const i = n, r = t._zod.def;
  i.type = "object";
  const o = r.keyType, c = se(o).patterns;
  if (r.mode === "loose" && c && c.size > 0) {
    const u = J(r.valueType, e, {
      ...s,
      path: [...s.path, "patternProperties", "*"]
    });
    i.patternProperties = {};
    for (const f of c)
      Ae(i.patternProperties, yo(f).source, u);
  } else {
    if (e.target === "draft-07" || e.target === "draft-2020-12") {
      i.propertyNames = J(r.keyType, e, {
        ...s,
        path: [...s.path, "propertyNames"]
      });
      let u = Xn.get(e);
      u || (u = [], Xn.set(e, u), e.deferred.push(() => Qf(e))), u.push(t);
    }
    i.additionalProperties = J(r.valueType, e, {
      ...s,
      path: [...s.path, "additionalProperties"]
    });
  }
  const a = o._zod.values, l = e.io === "input" && Ot(r.valueType) !== void 0;
  if (a && !r.partial && !l) {
    const u = [...a].filter((f) => typeof f == "string" || typeof f == "number");
    u.length > 0 && (i.required = u.map(String));
  }
}, td = (t, e, n, s) => {
  const i = t._zod.def, r = J(i.innerType, e, s), o = e.seen.get(t);
  e.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [r, { type: "null" }];
}, nd = (t, e, n, s) => {
  const i = t._zod.def;
  J(i.innerType, e, s);
  const r = e.seen.get(t);
  r.ref = i.innerType;
}, As = /* @__PURE__ */ Symbol();
function bo(t, e, n, s, i) {
  let r = !1;
  const o = JSON.stringify(t, (c, a) => typeof a != "bigint" ? a : (r = !0, null));
  return r ? (Ne(e, n, s, i, "BigInt defaults cannot be represented in JSON Schema"), As) : JSON.parse(o);
}
const sd = (t, e, n, s) => {
  const i = t._zod.def;
  J(i.innerType, e, s);
  const r = e.seen.get(t);
  r.ref = i.innerType;
  const o = bo(i.defaultValue, t, e, n, s);
  o !== As && (n.default = o);
}, id = (t, e, n, s) => {
  const i = t._zod.def;
  J(i.innerType, e, s);
  const r = e.seen.get(t);
  if (r.ref = i.innerType, e.io !== "input")
    return;
  const o = bo(i.defaultValue, t, e, n, s);
  o !== As && (n._prefault = o);
}, rd = (t, e, n, s) => {
  const i = t._zod.def;
  J(i.innerType, e, s);
  const r = e.seen.get(t);
  r.ref = i.innerType;
  let o;
  try {
    o = i.catchValue(void 0);
  } catch {
    Ne(t, e, n, s, "Dynamic catch values are not supported in JSON Schema");
    return;
  }
  n.default = o;
}, od = (t, e, n, s) => {
  const i = t._zod.def, r = i.in._zod.traits.has("$ZodTransform"), o = e.io === "input" ? r ? i.out : i.in : i.out;
  J(o, e, s);
  const c = e.seen.get(t);
  c.ref = o;
}, cd = (t, e, n, s) => {
  const i = t._zod.def;
  J(i.innerType, e, s);
  const r = e.seen.get(t);
  r.ref = i.innerType, n.readOnly = !0;
}, wo = (t, e, n, s) => {
  const i = t._zod.def;
  J(i.innerType, e, s);
  const r = e.seen.get(t);
  r.ref = i.innerType;
}, Oi = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function Ut(t, e, n) {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    get() {
      const s = n(this);
      return Object.defineProperty(this, e, { value: s, configurable: !0, writable: !0 }), s;
    },
    set(s) {
      Object.defineProperty(this, e, { value: s, configurable: !0, writable: !0 });
    }
  });
}
const ad = (t, e) => {
  va.init(t, e), t.name = "ZodError";
  const n = Object.getPrototypeOf(t);
  Oi.has(n) || (Oi.add(n), Ut(n, "format", (s) => (i) => $a(s, i)), Ut(n, "flatten", (s) => (i) => Sa(s, i)), Ut(n, "addIssue", (s) => (i) => {
    s.issues.push(i), s.message = JSON.stringify(s.issues, Vn, 2);
  }), Ut(n, "addIssues", (s) => (i) => {
    s.issues.push(...i), s.message = JSON.stringify(s.issues, Vn, 2);
  }), Object.defineProperty(n, "isEmpty", {
    configurable: !0,
    enumerable: !1,
    get() {
      return this.issues.length === 0;
    }
  }));
}, ce = /* @__PURE__ */ y("ZodError", ad, void 0, {
  Parent: Error
}), ld = /* @__PURE__ */ vs(ce), ud = /* @__PURE__ */ ks(ce), fd = /* @__PURE__ */ Ss(ce), dd = /* @__PURE__ */ $s(ce), hd = /* @__PURE__ */ Ta(ce), pd = /* @__PURE__ */ za(ce), md = /* @__PURE__ */ Pa(ce), gd = /* @__PURE__ */ La(ce), yd = /* @__PURE__ */ Ca(ce), bd = /* @__PURE__ */ Ma(ce), wd = /* @__PURE__ */ ja(ce), _d = /* @__PURE__ */ Da(ce);
function vd() {
  oe.localeError || pe(Du());
}
function Tt() {
  oe.memoizer || pe({ memoizer: Cu() });
}
const x = /* @__PURE__ */ y("ZodType", (t, e) => (vd(), Z.init(t, e), t.def = e, t.type = e.type, t), {
  check(...t) {
    const e = this.def;
    return this.clone(ne(e, {
      checks: [
        ...e.checks ?? [],
        ...t.map((n) => typeof n == "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n)
      ]
    }), { parent: !0 });
  },
  with(...t) {
    return this.check(...t);
  },
  clone(t, e) {
    return Te(this, t, e);
  },
  brand() {
    return this;
  },
  register(t, e) {
    return t.add(this, e), this;
  },
  refine(t, e) {
    return this.check(wh(t, e));
  },
  superRefine(t, e) {
    return this.check(_h(t, e));
  },
  overwrite(t) {
    return this.check(/* @__PURE__ */ ft(t));
  },
  optional() {
    return Ai(this);
  },
  exactOptional() {
    return oh(this);
  },
  nullable() {
    return Ti(this);
  },
  nullish() {
    return Ai(Ti(this));
  },
  nonoptional(t) {
    return dh(this, t);
  },
  array() {
    return Ge(this);
  },
  or(t) {
    return Oo([this, t]);
  },
  and(t) {
    return Qd(this, t);
  },
  transform(t) {
    return zi(this, rh(t));
  },
  default(t) {
    return lh(this, t);
  },
  prefault(t) {
    return fh(this, t);
  },
  catch(t) {
    return ph(this, t);
  },
  pipe(t) {
    return zi(this, t);
  },
  readonly() {
    return yh(this);
  },
  describe(t) {
    const e = this.clone();
    return yt.add(e, { description: t }), e;
  },
  meta(...t) {
    if (t.length === 0)
      return yt.get(this);
    const e = this.clone();
    return yt.add(e, t[0]), e;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(t, ...e) {
    return e.length === 0 ? t(this) : t(this, ...e);
  },
  // Overrides core's `~standard` to add `jsonSchema`. Must stay a prototype entry: redefining it per instance demotes instances to dictionary mode.
  get "~standard"() {
    return Zr(this, "~standard", {
      ...qr(this),
      jsonSchema: {
        input: cn(this, "input"),
        output: cn(this, "output")
      }
    });
  },
  set "~standard"(t) {
    Ee(this, "~standard", t);
  },
  parse: function t(e, n) {
    return ld(this, e, n, { callee: t });
  },
  parseAsync: async function t(e, n) {
    return await ud(this, e, n, { callee: t });
  },
  safeParse(t, e) {
    return fd(this, t, e);
  },
  async safeParseAsync(t, e) {
    return dd(this, t, e);
  },
  // `spa` is an alias: same function object as `safeParseAsync`, as before.
  get spa() {
    return this?.safeParseAsync;
  },
  set spa(t) {
    Ee(this, "spa", t);
  },
  validate(t, e) {
    return Ea(this, t, e);
  },
  validateAsync(t, e) {
    return Aa(this, t, e);
  },
  encode: function t(e, n) {
    return hd(this, e, n, { callee: t });
  },
  decode: function t(e, n) {
    return pd(this, e, n, { callee: t });
  },
  encodeAsync: async function t(e, n) {
    return await md(this, e, n, { callee: t });
  },
  decodeAsync: async function t(e, n) {
    return await gd(this, e, n, { callee: t });
  },
  safeEncode(t, e) {
    return yd(this, t, e);
  },
  safeDecode(t, e) {
    return bd(this, t, e);
  },
  async safeEncodeAsync(t, e) {
    return wd(this, t, e);
  },
  async safeDecodeAsync(t, e) {
    return _d(this, t, e);
  },
  toJSONSchema(t) {
    return Mf(this, {})(t);
  },
  // Reads through to the registry on every access, so it must not cache.
  get description() {
    return yt.get(this)?.description;
  },
  // No setter: `schema._def = x` throws, as it did when `_def` was a non-writable own property.
  get _def() {
    return this._zod.def;
  }
}), _o = /* @__PURE__ */ y(
  "_ZodString",
  (t, e) => {
    Es.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => Rf(t, n, s);
  },
  /* @__PURE__ */ Rr({
    format: (t) => se(t).format ?? null,
    minLength: (t) => se(t).minimum ?? null,
    maxLength: (t) => se(t).maximum ?? null
  }, {
    regex(...t) {
      return this.check(/* @__PURE__ */ wf(...t));
    },
    includes(...t) {
      return this.check(/* @__PURE__ */ kf(...t));
    },
    startsWith(...t) {
      return this.check(/* @__PURE__ */ Sf(...t));
    },
    endsWith(...t) {
      return this.check(/* @__PURE__ */ $f(...t));
    },
    min(...t) {
      return this.check(/* @__PURE__ */ on(...t));
    },
    max(...t) {
      return this.check(/* @__PURE__ */ ro(...t));
    },
    length(...t) {
      return this.check(/* @__PURE__ */ oo(...t));
    },
    nonempty(...t) {
      return this.check(/* @__PURE__ */ on(1, ...t));
    },
    lowercase(t) {
      return this.check(/* @__PURE__ */ _f(t));
    },
    uppercase(t) {
      return this.check(/* @__PURE__ */ vf(t));
    },
    trim() {
      return this.check(/* @__PURE__ */ If());
    },
    normalize(...t) {
      return this.check(/* @__PURE__ */ Of(...t));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ Ef());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ Nf());
    },
    slugify() {
      return this.check(/* @__PURE__ */ Af());
    }
  })
), kd = /* @__PURE__ */ y("ZodString", (t, e) => {
  Es.init(t, e), _o.init(t, e);
}, {
  email(t) {
    return this.check(/* @__PURE__ */ Uu(Ed, t));
  },
  url(t) {
    return this.check(/* @__PURE__ */ Ju(Ad, t));
  },
  jwt(t) {
    return this.check(/* @__PURE__ */ lf(Kd, t));
  },
  emoji(t) {
    return this.check(/* @__PURE__ */ Yu(Td, t));
  },
  guid(t) {
    return this.check(/* @__PURE__ */ xu(Nd, t));
  },
  uuid(t) {
    return this.check(/* @__PURE__ */ Fu(xt, t));
  },
  uuidv4(t) {
    return this.check(/* @__PURE__ */ Ku(xt, t));
  },
  uuidv6(t) {
    return this.check(/* @__PURE__ */ Vu(xt, t));
  },
  uuidv7(t) {
    return this.check(/* @__PURE__ */ qu(xt, t));
  },
  nanoid(t) {
    return this.check(/* @__PURE__ */ Gu(zd, t));
  },
  cuid(t) {
    return this.check(/* @__PURE__ */ Wu(Pd, t));
  },
  cuid2(t) {
    return this.check(/* @__PURE__ */ Xu(Ld, t));
  },
  ulid(t) {
    return this.check(/* @__PURE__ */ Hu(Cd, t));
  },
  base64(t) {
    return this.check(/* @__PURE__ */ of(Ud, t));
  },
  base64url(t) {
    return this.check(/* @__PURE__ */ cf(xd, t));
  },
  xid(t) {
    return this.check(/* @__PURE__ */ Qu(Md, t));
  },
  ksuid(t) {
    return this.check(/* @__PURE__ */ ef(jd, t));
  },
  ipv4(t) {
    return this.check(/* @__PURE__ */ tf(Dd, t));
  },
  ipv6(t) {
    return this.check(/* @__PURE__ */ nf(Zd, t));
  },
  cidrv4(t) {
    return this.check(/* @__PURE__ */ sf(Rd, t));
  },
  cidrv6(t) {
    return this.check(/* @__PURE__ */ rf(Bd, t));
  },
  e164(t) {
    return this.check(/* @__PURE__ */ af(Fd, t));
  },
  datetime(t) {
    return this.check(/* @__PURE__ */ uf(Sd, t));
  },
  date(t) {
    return this.check(/* @__PURE__ */ ff($d, t));
  },
  time(t) {
    return this.check(/* @__PURE__ */ df(Od, t));
  },
  duration(t) {
    return this.check(/* @__PURE__ */ hf(Id, t));
  }
});
function R(t) {
  return /* @__PURE__ */ Bu(kd, t);
}
const V = /* @__PURE__ */ y("ZodStringFormat", (t, e) => {
  U.init(t, e), _o.init(t, e);
}), Sd = /* @__PURE__ */ y("ZodISODateTime", (t, e) => {
  Kl.init(t, e), V.init(t, e);
}), $d = /* @__PURE__ */ y("ZodISODate", (t, e) => {
  Vl.init(t, e), V.init(t, e);
}), Od = /* @__PURE__ */ y("ZodISOTime", (t, e) => {
  ql.init(t, e), V.init(t, e);
}), Id = /* @__PURE__ */ y("ZodISODuration", (t, e) => {
  Jl.init(t, e), V.init(t, e);
}), Ed = /* @__PURE__ */ y("ZodEmail", (t, e) => {
  Tl.init(t, e), V.init(t, e);
}), Nd = /* @__PURE__ */ y("ZodGUID", (t, e) => {
  Nl.init(t, e), V.init(t, e);
}), xt = /* @__PURE__ */ y("ZodUUID", (t, e) => {
  Al.init(t, e), V.init(t, e);
}), Ad = /* @__PURE__ */ y("ZodURL", (t, e) => {
  jl.init(t, e), V.init(t, e);
}), Td = /* @__PURE__ */ y("ZodEmoji", (t, e) => {
  Dl.init(t, e), V.init(t, e);
}), zd = /* @__PURE__ */ y("ZodNanoID", (t, e) => {
  Zl.init(t, e), V.init(t, e);
}), Pd = /* @__PURE__ */ y("ZodCUID", (t, e) => {
  Rl.init(t, e), V.init(t, e);
}), Ld = /* @__PURE__ */ y("ZodCUID2", (t, e) => {
  Bl.init(t, e), V.init(t, e);
}), Cd = /* @__PURE__ */ y("ZodULID", (t, e) => {
  Ul.init(t, e), V.init(t, e);
}), Md = /* @__PURE__ */ y("ZodXID", (t, e) => {
  xl.init(t, e), V.init(t, e);
}), jd = /* @__PURE__ */ y("ZodKSUID", (t, e) => {
  Fl.init(t, e), V.init(t, e);
}), Dd = /* @__PURE__ */ y("ZodIPv4", (t, e) => {
  Yl.init(t, e), V.init(t, e);
}), Zd = /* @__PURE__ */ y("ZodIPv6", (t, e) => {
  Wl.init(t, e), V.init(t, e);
}), Rd = /* @__PURE__ */ y("ZodCIDRv4", (t, e) => {
  Xl.init(t, e), V.init(t, e);
}), Bd = /* @__PURE__ */ y("ZodCIDRv6", (t, e) => {
  Ql.init(t, e), V.init(t, e);
}), Ud = /* @__PURE__ */ y("ZodBase64", (t, e) => {
  eu.init(t, e), V.init(t, e);
}), xd = /* @__PURE__ */ y("ZodBase64URL", (t, e) => {
  nu.init(t, e), V.init(t, e);
}), Fd = /* @__PURE__ */ y("ZodE164", (t, e) => {
  su.init(t, e), V.init(t, e);
}), Kd = /* @__PURE__ */ y("ZodJWT", (t, e) => {
  ru.init(t, e), V.init(t, e);
}), vo = /* @__PURE__ */ y(
  "ZodNumber",
  (t, e) => {
    Hr.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => Bf(t, n, s, i), t.isFinite = !0;
  },
  /* @__PURE__ */ Rr({
    minValue: (t) => {
      const { minimum: e, exclusiveMinimum: n } = se(t);
      return Math.max(e ?? Number.NEGATIVE_INFINITY, n ?? Number.NEGATIVE_INFINITY);
    },
    maxValue: (t) => {
      const { maximum: e, exclusiveMaximum: n } = se(t);
      return Math.min(e ?? Number.POSITIVE_INFINITY, n ?? Number.POSITIVE_INFINITY);
    },
    isInt: (t) => {
      const { isInt: e, multipleOf: n } = se(t);
      return !!e || !!n?.some(Number.isSafeInteger);
    },
    format: (t) => se(t).format ?? null
  }, {
    gt(t, e) {
      return this.check(/* @__PURE__ */ gi(t, e));
    },
    gte(t, e) {
      return this.check(/* @__PURE__ */ Dn(t, e));
    },
    min(t, e) {
      return this.check(/* @__PURE__ */ Dn(t, e));
    },
    lt(t, e) {
      return this.check(/* @__PURE__ */ mi(t, e));
    },
    lte(t, e) {
      return this.check(/* @__PURE__ */ jn(t, e));
    },
    max(t, e) {
      return this.check(/* @__PURE__ */ jn(t, e));
    },
    int(t) {
      return this.check(Ii(t));
    },
    safe(t) {
      return this.check(Ii(t));
    },
    positive(t) {
      return this.check(/* @__PURE__ */ gi(0, t));
    },
    nonnegative(t) {
      return this.check(/* @__PURE__ */ Dn(0, t));
    },
    negative(t) {
      return this.check(/* @__PURE__ */ mi(0, t));
    },
    nonpositive(t) {
      return this.check(/* @__PURE__ */ jn(0, t));
    },
    multipleOf(t, e) {
      return this.check(/* @__PURE__ */ yi(t, e));
    },
    step(t, e) {
      return this.check(/* @__PURE__ */ yi(t, e));
    },
    finite() {
      return this;
    }
  })
);
function ko(t) {
  return /* @__PURE__ */ pf(vo, t);
}
const Vd = /* @__PURE__ */ y("ZodNumberFormat", (t, e) => {
  ou.init(t, e), vo.init(t, e);
});
function Ii(t) {
  return /* @__PURE__ */ mf(Vd, t);
}
const qd = /* @__PURE__ */ y("ZodBoolean", (t, e) => {
  cu.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => Uf(t, n, s);
});
function So(t) {
  return /* @__PURE__ */ gf(qd, t);
}
const Jd = /* @__PURE__ */ y("ZodUnknown", (t, e) => {
  au.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => Ff();
});
function Ei() {
  return /* @__PURE__ */ yf(Jd);
}
const Yd = /* @__PURE__ */ y("ZodNever", (t, e) => {
  lu.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => xf(t, n, s);
});
function $o(t) {
  return /* @__PURE__ */ bf(Yd, t);
}
const Gd = /* @__PURE__ */ y("ZodArray", (t, e) => {
  Tt(), uu.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => Yf(t, n, s, i), t.element = e.element;
}, {
  min(t, e) {
    return this.check(/* @__PURE__ */ on(t, e));
  },
  nonempty(t) {
    return this.check(/* @__PURE__ */ on(1, t));
  },
  max(t, e) {
    return this.check(/* @__PURE__ */ ro(t, e));
  },
  length(t, e) {
    return this.check(/* @__PURE__ */ oo(t, e));
  },
  unwrap() {
    return this.element;
  }
});
function Ge(t, e) {
  return /* @__PURE__ */ Tf(Gd, t, e);
}
const Wd = /* @__PURE__ */ y("ZodObject", (t, e) => {
  Tt(), hu.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => Gf(t, n, s, i), ha(t, "shape", (n) => n._zod.def.shape, !1);
}, {
  keyof() {
    return zs(Object.keys(this._zod.def.shape));
  },
  catchall(t) {
    return this.clone(ne(this._zod.def, { catchall: t }));
  },
  passthrough() {
    return this.clone(ne(this._zod.def, { catchall: Ei() }));
  },
  loose() {
    return this.clone(ne(this._zod.def, { catchall: Ei() }));
  },
  strict() {
    return this.clone(ne(this._zod.def, { catchall: $o() }));
  },
  strip() {
    return this.clone(ne(this._zod.def, { catchall: void 0 }));
  },
  extend(t) {
    return na(this, t);
  },
  safeExtend(t) {
    return sa(this, t);
  },
  merge(t) {
    return ia(this, t);
  },
  pick(t) {
    return ea(this, t);
  },
  omit(t) {
    return ta(this, t);
  },
  partial(...t) {
    return Ys(Ps, this, t[0]);
  },
  exactPartial(...t) {
    return Ys(Io, this, t[0], "exactPartial");
  },
  required(...t) {
    return ra(Eo, this, t[0]);
  }
});
function Ue(t, e) {
  return new Wd({
    type: "object",
    shape: t,
    catchall: $o(),
    ...O(e)
  });
}
const Xd = /* @__PURE__ */ y("ZodUnion", (t, e) => {
  pu.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => Wf(t, n, s, i), t.options = e.options;
});
function Oo(t, e) {
  return new Xd({
    type: "union",
    options: t,
    ...O(e)
  });
}
const Hd = /* @__PURE__ */ y("ZodIntersection", (t, e) => {
  mu.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => Xf(t, n, s, i);
});
function Qd(t, e) {
  return new Hd({
    type: "intersection",
    left: t,
    right: e
  });
}
const eh = /* @__PURE__ */ y("ZodTuple", (t, e) => {
  Tt(), gu.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => Hf(t, n, s, i);
}, {
  rest(t) {
    return this.clone({
      ...this._zod.def,
      rest: t
    });
  },
  partial() {
    const t = this._zod.def;
    if (t.checks?.length)
      throw new Error(".partial() cannot be used on tuple schemas containing refinements");
    return this.clone({
      ...t,
      items: t.items.map((e) => new Ps({ type: "optional", innerType: e }))
    });
  }
});
function Ts(t, e, n) {
  const s = e instanceof Z, i = s ? n : e, r = s ? e : null;
  return new eh({
    type: "tuple",
    items: t,
    rest: r,
    ...O(i)
  });
}
const Ni = /* @__PURE__ */ y("ZodRecord", (t, e) => {
  Tt(), yu.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => ed(t, n, s, i), t.keyType = e.keyType, t.valueType = e.valueType;
});
function th(t, e, n) {
  return !e || !e._zod ? new Ni({
    type: "record",
    keyType: R(),
    valueType: t,
    ...O(e)
  }) : new Ni({
    type: "record",
    keyType: t,
    valueType: e,
    ...O(n)
  });
}
const Hn = /* @__PURE__ */ y("ZodEnum", (t, e) => {
  bu.init(t, e), x.init(t, e), t._zod.processJSONSchema = (s, i, r) => Kf(t, s, i), t.enum = e.entries, t.options = [...t._zod.values];
  const n = new Set(Object.keys(e.entries));
  t.extract = (s, i) => {
    const r = {};
    for (const o of s)
      if (n.has(o))
        r[o] = e.entries[o];
      else
        throw new Error(`Key ${o} not found in enum`);
    return new Hn({
      ...e,
      checks: [],
      ...O(i),
      entries: r
    });
  }, t.exclude = (s, i) => {
    const r = { ...e.entries };
    for (const o of s)
      if (n.has(o))
        delete r[o];
      else
        throw new Error(`Key ${o} not found in enum`);
    return new Hn({
      ...e,
      checks: [],
      ...O(i),
      entries: r
    });
  };
});
function zs(t, e) {
  const n = Array.isArray(t) ? Object.fromEntries(t.map((s) => [s, s])) : t;
  return new Hn({
    type: "enum",
    entries: n,
    ...O(e)
  });
}
const nh = /* @__PURE__ */ y("ZodLiteral", (t, e) => {
  wu.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => Vf(t, n, s, i), t.values = new Set(e.values), Object.defineProperty(t, "value", {
    get() {
      if (e.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return e.values[0];
    }
  });
});
function sh(t, e) {
  return new nh({
    type: "literal",
    values: Array.isArray(t) ? t : [t],
    ...O(e)
  });
}
const ih = /* @__PURE__ */ y("ZodTransform", (t, e) => {
  Tt(), _u.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => Jf(t, n, s, i), t._zod.parse = (n, s) => {
    if (s.direction === "backward")
      throw new Br(t.constructor.name);
    n.addIssue = (r) => {
      if (typeof r == "string")
        n.issues.push($t(r, n.value, e));
      else {
        const o = r;
        o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), "input" in o || (o.input = n.value), o.inst ?? (o.inst = t), n.issues.push($t(o));
      }
    };
    const i = e.transform(n.value, n);
    return i instanceof Promise ? i.then((r) => (n.value = r, n)) : (n.value = i, n);
  };
});
function rh(t) {
  return new ih({
    type: "transform",
    transform: t
  });
}
const Ps = /* @__PURE__ */ y("ZodOptional", (t, e) => {
  to.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => wo(t, n, s, i), t.unwrap = () => t._zod.def.innerType;
});
function Ai(t) {
  return new Ps({
    type: "optional",
    innerType: t
  });
}
const Io = /* @__PURE__ */ y("ZodExactOptional", (t, e) => {
  vu.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => wo(t, n, s, i), t.unwrap = () => t._zod.def.innerType;
});
function oh(t) {
  return new Io({
    type: "optional",
    innerType: t
  });
}
const ch = /* @__PURE__ */ y("ZodNullable", (t, e) => {
  ku.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => td(t, n, s, i), t.unwrap = () => t._zod.def.innerType;
});
function Ti(t) {
  return new ch({
    type: "nullable",
    innerType: t
  });
}
const ah = /* @__PURE__ */ y("ZodDefault", (t, e) => {
  Su.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => sd(t, n, s, i), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function lh(t, e) {
  return new ah({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof e == "function" ? e() : Cr(e);
    }
  });
}
const uh = /* @__PURE__ */ y("ZodPrefault", (t, e) => {
  $u.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => id(t, n, s, i), t.unwrap = () => t._zod.def.innerType;
});
function fh(t, e) {
  return new uh({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof e == "function" ? e() : Cr(e);
    }
  });
}
const Eo = /* @__PURE__ */ y("ZodNonOptional", (t, e) => {
  Ou.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => nd(t, n, s, i), t.unwrap = () => t._zod.def.innerType;
});
function dh(t, e) {
  return new Eo({
    type: "nonoptional",
    innerType: t,
    ...O(e)
  });
}
const hh = /* @__PURE__ */ y("ZodCatch", (t, e) => {
  Iu.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => rd(t, n, s, i), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function ph(t, e) {
  return new hh({
    type: "catch",
    innerType: t,
    catchValue: typeof e == "function" ? e : ma(e)
  });
}
const mh = /* @__PURE__ */ y("ZodPipe", (t, e) => {
  Eu.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => od(t, n, s, i), t.in = e.in, t.out = e.out;
});
function zi(t, e) {
  return new mh({
    type: "pipe",
    in: t,
    out: e
    // ...util.normalizeParams(params),
  });
}
const gh = /* @__PURE__ */ y("ZodReadonly", (t, e) => {
  Nu.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => cd(t, n, s, i), t.unwrap = () => t._zod.def.innerType;
});
function yh(t) {
  return new gh({
    type: "readonly",
    innerType: t
  });
}
const bh = /* @__PURE__ */ y("ZodCustom", (t, e) => {
  Au.init(t, e), x.init(t, e), t._zod.processJSONSchema = (n, s, i) => qf(t, n, s, i);
});
function wh(t, e = {}) {
  return /* @__PURE__ */ zf(bh, t, e);
}
function _h(t, e) {
  return /* @__PURE__ */ Pf(t, e);
}
const vh = 64, kh = [40, 3, 25], Sh = "#475569", Pi = 3, $h = 90, Oh = 70, Ih = ["board", "esp32", "hx711", "load-cell", "probe", "resistor", "power"];
class le extends Error {
  constructor(e) {
    super(e), this.name = "DiagramParseError";
  }
}
const ye = ko().finite(), Me = ye.positive(), Ls = R().min(1).refine((t) => !t.includes("."), { message: "Component id must not contain dots" }), Eh = Ls, Cs = R().regex(/^#[0-9a-f]{6}$/i, "Color must be six-digit hex, for example #cf3740"), Nh = Ts([Me, Me, Me]), Ms = Ts([ye, ye, ye]), Ah = Ts([ye, ye]);
function Th(t) {
  try {
    const e = new URL(t);
    return e.protocol === "http:" || e.protocol === "https:";
  } catch {
    return !1;
  }
}
function zh(t) {
  const e = t.trim();
  if (!e || e.includes("\\")) return !1;
  const n = e.toLowerCase();
  return n.startsWith("data:") || n.startsWith("javascript:") ? !1 : /^[a-z][a-z0-9+.-]*:/i.test(e) ? n.startsWith("http://") || n.startsWith("https://") : e.startsWith("//") ? !1 : /^[\w./-]+$/.test(e);
}
const Ph = Ue({
  url: R().refine(Th, { message: "Purchase URL must use http or https" }),
  label: R().optional(),
  partNumber: R().optional()
}), Lh = Ue({
  url: R().refine(zh, { message: "Model URL must be a safe http(s) or relative path" }),
  scale: Me,
  rotation: Ms.optional()
}), Ch = Ue({
  id: Eh,
  label: R().optional(),
  side: zs(["left", "right"]).optional(),
  position: Ms.optional(),
  voltage: ye.optional()
}), Mh = Ue({
  id: Ls,
  label: R().min(1),
  kind: zs(Ih).optional(),
  group: R().optional(),
  notes: R().optional(),
  dimensions: Nh.optional(),
  position: Ms.optional(),
  schematic: Ah.optional(),
  color: Cs.optional(),
  pins: Ge(Ch).default([]),
  properties: th(R(), Oo([R(), ko(), So()])).optional(),
  model: Lh.optional(),
  purchase: Ph.optional(),
  quantity: Me.int().optional()
}), jh = Ue({
  id: Ls,
  from: R().min(1),
  to: R().min(1),
  color: Cs.optional(),
  label: R().optional(),
  net: R().optional(),
  voltage: ye.optional(),
  lengthMm: Me.optional(),
  diameterMm: Me.optional(),
  gaugeAwg: ye.int().min(0).max(40).optional(),
  notes: R().optional(),
  dashed: So().optional()
}), Dh = Ue({
  id: R().min(1),
  label: R().min(1),
  color: Cs.optional(),
  notes: R().optional()
}), Zh = Ue({
  version: sh(1),
  title: R().min(1),
  description: R().optional(),
  groups: Ge(Dh).optional(),
  components: Ge(Mh).default([]),
  wires: Ge(jh).default([]),
  notes: Ge(R()).optional()
});
function Rh(t) {
  const e = t % Pi, n = Math.floor(t / Pi);
  return [e * $h, 0, n * Oh];
}
function Bh(t) {
  const e = t.lastIndexOf(".");
  return e <= 0 || e === t.length - 1 ? null : { componentId: t.slice(0, e), pinId: t.slice(e + 1) };
}
function Uh(t) {
  const e = /* @__PURE__ */ new Set();
  for (const i of t.components) {
    if (e.has(i.id))
      throw new le(`Duplicate id: ${i.id}`);
    e.add(i.id);
    const r = /* @__PURE__ */ new Set();
    for (const o of i.pins) {
      if (r.has(o.id))
        throw new le(`Duplicate pin id ${o.id} on component ${i.id}`);
      r.add(o.id);
    }
  }
  for (const i of t.wires) {
    if (e.has(i.id))
      throw new le(`Duplicate id: ${i.id}`);
    e.add(i.id);
  }
  const n = /* @__PURE__ */ new Set();
  for (const i of t.groups ?? []) {
    if (n.has(i.id))
      throw new le(`Duplicate group id: ${i.id}`);
    n.add(i.id);
  }
  const s = new Map(t.components.map((i) => [i.id, i]));
  for (const i of t.components)
    if (i.group && !n.has(i.group))
      throw new le(`Unknown group ${i.group} referenced by component ${i.id}`);
  for (const i of t.wires)
    for (const r of [i.from, i.to]) {
      const o = Bh(r);
      if (!o)
        throw new le(`Invalid wire endpoint ${r}`);
      const c = s.get(o.componentId);
      if (!c)
        throw new le(`Unknown component in endpoint ${r}`);
      if (!c.pins.some((a) => a.id === o.pinId))
        throw new le(`Unknown pin in endpoint ${r}`);
    }
}
function xh(t) {
  Uh(t);
  const e = t.components.map((s, i) => ({
    id: s.id,
    label: s.label,
    kind: s.kind ?? "board",
    group: s.group,
    notes: s.notes,
    dimensions: s.dimensions ?? [...kh],
    position: s.position ?? Rh(i),
    schematic: s.schematic,
    color: s.color,
    pins: s.pins.map((r) => ({
      id: r.id,
      label: r.label,
      side: r.side ?? "left",
      position: r.position,
      voltage: r.voltage
    })),
    properties: s.properties,
    model: s.model,
    purchase: s.purchase,
    quantity: s.quantity ?? 1
  })), n = t.wires.map((s) => ({
    id: s.id,
    from: s.from,
    to: s.to,
    color: s.color ?? Sh,
    label: s.label,
    net: s.net,
    voltage: s.voltage,
    lengthMm: s.lengthMm,
    diameterMm: s.diameterMm,
    gaugeAwg: s.gaugeAwg,
    notes: s.notes,
    dashed: s.dashed
  }));
  return {
    version: 1,
    title: t.title,
    description: t.description,
    groups: t.groups ?? [],
    components: e,
    wires: n,
    notes: t.notes ?? []
  };
}
function Fh(t) {
  try {
    return Fc.parse(t, { maxAliasCount: vh });
  } catch (e) {
    const n = e instanceof Error ? e.message : String(e);
    throw /alias/i.test(n) ? new le("YAML alias limit exceeded") : new le(`Invalid YAML: ${n}`);
  }
}
function Li(t) {
  const e = Zh.safeParse(t);
  if (!e.success) {
    const n = e.error.issues[0], s = n.path.length ? `${n.path.join(".")}: ` : "";
    throw new le(`${s}${n.message}`);
  }
  return xh(e.data);
}
function Ci(t) {
  return Li(typeof t == "string" ? Fh(t) : t);
}
function op(t) {
  return t.components.map((e) => ({
    componentId: e.id,
    label: e.label,
    kind: e.kind,
    quantity: e.quantity,
    partNumber: e.purchase?.partNumber,
    purchaseUrl: e.purchase?.url,
    purchaseLabel: e.purchase?.label,
    group: e.group
  }));
}
const Qn = 230, It = 28, js = 22, We = 24, es = 3, Kh = 90, Vh = 50, ke = 18, ts = 38, Se = 16, No = 8, Ft = 40;
function Q(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function Ao(t) {
  const e = [], n = [];
  for (const s of t.pins)
    s.side === "left" ? e.push(s) : n.push(s);
  return { left: e, right: n };
}
function To(t) {
  const { left: e, right: n } = Ao(t), s = Math.max(e.length, n.length, 1);
  return js + It + s * We + It / 2;
}
const zo = js + It + We + It / 2;
function qh(t) {
  const e = [];
  return t.forEach((n, s) => {
    if (n.schematic) return;
    const i = Math.floor(s / es);
    e[i] = Math.max(e[i] ?? zo, To(n));
  }), e;
}
function Jh(t, e) {
  const n = t % es, s = Math.floor(t / es);
  let i = 0;
  for (let r = 0; r < s; r += 1)
    i += (e[r] ?? zo) + Vh;
  return [n * (Qn + Kh), i];
}
function Yh(t) {
  const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), s = qh(t.components), i = t.components.map((l, u) => {
    const [f, d] = l.schematic ?? Jh(u, s), p = To(l), { left: m, right: h } = Ao(l), g = [], b = d + js + It;
    m.forEach((S, $) => {
      const _ = {
        componentId: l.id,
        pin: S,
        x: f,
        y: b + $ * We + We / 2,
        side: "left"
      };
      g.push(_), e.set(`${l.id}.${S.id}`, _);
    }), h.forEach((S, $) => {
      const _ = {
        componentId: l.id,
        pin: S,
        x: f + Qn,
        y: b + $ * We + We / 2,
        side: "right"
      };
      g.push(_), e.set(`${l.id}.${S.id}`, _);
    });
    const w = { component: l, x: f, y: d, width: Qn, height: p, pins: g };
    return n.set(l.id, w), w;
  });
  let r = 1 / 0, o = 1 / 0, c = -1 / 0, a = -1 / 0;
  for (const l of i)
    r = Math.min(r, l.x), o = Math.min(o, l.y), c = Math.max(c, l.x + l.width), a = Math.max(a, l.y + l.height);
  return Number.isFinite(r) || (r = 0, o = 0, c = 320, a = 240), r -= Ft, o -= Ft, c += Ft, a += Ft, {
    components: i,
    minX: r,
    minY: o,
    width: c - r,
    height: a - o,
    pinByEndpoint: e,
    layoutByComponentId: n
  };
}
function Gh(t, e) {
  let { minX: n, minY: s, width: i, height: r } = e, o = n + i, c = s + r;
  if (!t.groups.length) return { minX: n, minY: s, maxX: o, maxY: c };
  const a = /* @__PURE__ */ new Map();
  for (const l of e.components) {
    const u = l.component.group;
    if (!u) continue;
    const f = a.get(u) ?? [];
    f.push(l), a.set(u, f);
  }
  for (const l of t.groups) {
    const u = a.get(l.id);
    if (!u?.length) continue;
    let f = 1 / 0, d = 1 / 0, p = -1 / 0, m = -1 / 0;
    for (const h of u)
      f = Math.min(f, h.x), d = Math.min(d, h.y), p = Math.max(p, h.x + h.width), m = Math.max(m, h.y + h.height);
    n = Math.min(n, f - ke), s = Math.min(s, d - ke - ts), o = Math.max(o, p + ke), c = Math.max(c, m + ke);
  }
  return { minX: n, minY: s, maxX: o, maxY: c };
}
function Wh(t, e) {
  if (!t.groups.length) return "";
  const n = /* @__PURE__ */ new Map();
  for (const i of e.components) {
    const r = i.component.group;
    if (!r) continue;
    const o = n.get(r) ?? [];
    o.push(i), n.set(r, o);
  }
  const s = [];
  for (const i of t.groups) {
    const r = n.get(i.id);
    if (!r?.length) continue;
    let o = 1 / 0, c = 1 / 0, a = -1 / 0, l = -1 / 0;
    for (const h of r)
      o = Math.min(o, h.x), c = Math.min(c, h.y), a = Math.max(a, h.x + h.width), l = Math.max(l, h.y + h.height);
    const u = i.color ?? "#94a3b8", f = o - ke, d = c - ke - ts, p = a - o + ke * 2, m = l - c + ke * 2 + ts;
    s.push(
      `<rect x="${f}" y="${d}" width="${p}" height="${m}" rx="14" fill="${Q(u)}" fill-opacity="0.14" stroke="${Q(u)}" stroke-opacity="0.35" data-group="${Q(i.id)}" />`,
      `<text x="${f + 12}" y="${d + 26}" class="wd-group-label">${Q(i.label)}</text>`
    );
  }
  return s.join("");
}
function Xh(t, e) {
  if (t.side === e.side) return !0;
  const n = t.x + (t.side === "left" ? -Se : Se), s = e.x + (e.side === "left" ? -Se : Se);
  return t.side === "right" && e.side === "left" && s <= n || t.side === "left" && e.side === "right" && s <= n;
}
function Hh(t, e, n) {
  return Math.max(t.y + t.height, e.y + e.height) + 20 + n * No;
}
function Po(t, e, n, s, i) {
  const r = t.x, o = t.y, c = e.x, a = e.y, l = r + (t.side === "left" ? -Se : Se), u = c + (e.side === "left" ? -Se : Se);
  if (Xh(t, e)) {
    const p = Hh(n, s, i);
    return `M ${r} ${o} H ${l} V ${p} H ${u} V ${a} H ${c}`;
  }
  const f = i * No;
  if (Math.abs(o - a) < 0.5)
    return `M ${r} ${o} H ${l} H ${u} H ${c}`;
  const d = (o + a) / 2 + f;
  return `M ${r} ${o} H ${l} V ${d} H ${u} V ${a} H ${c}`;
}
function Qh(t) {
  const e = [];
  let n = 0, s = 0;
  const i = t.match(/[MHV][^MHV]*/g);
  if (!i) return null;
  for (const c of i) {
    const a = c[0], l = c.slice(1).trim().split(/\s+/).map(Number).filter((u) => !Number.isNaN(u));
    a === "M" && l.length >= 2 ? (n = l[0], s = l[1], e.push([n, s])) : a === "H" && l.length >= 1 ? (n = l[l.length - 1], e.push([n, s])) : a === "V" && l.length >= 1 && (s = l[l.length - 1], e.push([n, s]));
  }
  if (!e.length) return null;
  const r = e.map(([c]) => c), o = e.map(([, c]) => c);
  return [(Math.min(...r) + Math.max(...r)) / 2, (Math.min(...o) + Math.max(...o)) / 2];
}
function ep(t, e) {
  const { component: n, x: s, y: i, width: r, height: o } = t, c = n.color ?? "#f8fafc", a = e ? ` tabindex="0" role="button" aria-label="${Q(n.label)}" data-kind="component" data-id="${Q(n.id)}" class="wd-focusable wd-component"` : "", l = `<text x="${s + r / 2}" y="${i + 16}" text-anchor="middle" class="wd-component-title">${Q(n.label)}</text>`, u = `<rect x="${s}" y="${i}" width="${r}" height="${o}" rx="10" fill="${Q(c)}" stroke="#334155" stroke-width="1.5"${a} />`, f = t.pins.map((d) => {
    const p = d.pin.label ?? d.pin.id, m = d.x, h = d.side === "left" ? "start" : "end", g = d.side === "left" ? d.x + 10 : d.x - 10;
    return [
      `<circle cx="${m}" cy="${d.y}" r="4" fill="#0f172a" />`,
      `<text x="${g}" y="${d.y + 4}" text-anchor="${h}" class="wd-pin-label">${Q(p)}</text>`
    ].join("");
  });
  return `${u}${l}${f.join("")}`;
}
function tp(t, e, n) {
  const s = [];
  return t.wires.forEach((i, r) => {
    const o = e.pinByEndpoint.get(i.from), c = e.pinByEndpoint.get(i.to);
    if (!o || !c) return;
    const a = e.layoutByComponentId.get(o.componentId), l = e.layoutByComponentId.get(c.componentId);
    if (!a || !l) return;
    const u = Po(o, c, a, l, r), f = i.dashed ? ' stroke-dasharray="8 6"' : "", d = n ? ` tabindex="0" role="button" aria-label="${Q(i.label || `${i.from} to ${i.to}`)}" data-kind="wire" data-id="${Q(i.id)}" class="wd-focusable wd-wire"` : "";
    if (s.push(
      `<path d="${u}" fill="none" stroke="${Q(i.color)}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"${f}${d} />`
    ), i.label) {
      const p = Qh(u);
      if (p) {
        const [m, h] = p;
        s.push(`<text x="${m}" y="${h - 6}" text-anchor="middle" class="wd-wire-label">${Q(i.label)}</text>`);
      }
    }
  }), s.join("");
}
function np() {
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
function Lo(t, e) {
  const n = Yh(t), s = Gh(t, n);
  t.wires.forEach((a, l) => {
    const u = n.pinByEndpoint.get(a.from), f = n.pinByEndpoint.get(a.to);
    if (!u || !f) return;
    const d = n.layoutByComponentId.get(u.componentId), p = n.layoutByComponentId.get(f.componentId), m = Po(u, f, d, p, l);
    for (const h of m.match(/[MHV][^MHV]*/g) || []) {
      const g = h.slice(1).trim().split(/\s+/).map(Number);
      (h[0] === "H" || h[0] === "M") && (s.minX = Math.min(s.minX, g[0] - 20), s.maxX = Math.max(s.maxX, g[0] + 20));
      const b = h[0] === "M" ? g[1] : h[0] === "V" ? g[0] : void 0;
      b !== void 0 && (s.minY = Math.min(s.minY, b - 20), s.maxY = Math.max(s.maxY, b + 20));
    }
  });
  const i = `${s.minX} ${s.minY} ${s.maxX - s.minX} ${s.maxY - s.minY}`, r = Wh(t, n), o = n.components.map((a) => ep(a, e)).join(""), c = tp(t, n, e);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${i}" class="wd-schematic" role="img" aria-label="${Q(t.title)}">
${np()}
<rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}" fill="#f1f5f9" />
<g class="wd-layer-groups">${r}</g>
<g class="wd-layer-wires">${c}</g>
<g class="wd-layer-components">${o}</g>
</svg>`;
}
function sp(t) {
  return Lo(t, !1);
}
function ip(t, e, n) {
  const s = t.getBoundingClientRect(), i = t.viewBox.baseVal;
  if (s.width <= 0 || s.height <= 0 || i.width <= 0 || i.height <= 0) return null;
  const r = Math.min(s.width / i.width, s.height / i.height), o = (s.width - i.width * r) / 2, c = (s.height - i.height * r) / 2;
  return {
    x: i.x + (e - s.left - o) / r,
    y: i.y + (n - s.top - c) / r
  };
}
function rp(t, e, n) {
  t.innerHTML = Lo(e, !0);
  const s = t.querySelector("svg"), i = document.createElement("div");
  i.style.width = "100%", i.style.height = "100%", i.style.overflow = "hidden", i.style.position = "relative", i.style.background = "#f1f5f9", i.style.touchAction = "none", s && (s.style.display = "block", s.style.width = "100%", s.style.height = "100%", t.replaceChildren(i), i.appendChild(s));
  const r = document.createElementNS("http://www.w3.org/2000/svg", "g");
  for (; s && s.childNodes.length > 0; )
    r.appendChild(s.firstChild);
  s?.appendChild(r);
  let o = null, c = null, a = 1, l = 0, u = 0, f = !1, d = 0, p = 0, m = 0, h = 0;
  const g = () => {
    r.setAttribute("transform", `translate(${l} ${u}) scale(${a})`);
  }, b = () => {
    t.querySelectorAll("[data-id]").forEach((I) => {
      const D = I.getAttribute("data-id");
      I.classList.toggle("wd-selected", D === o), I.classList.toggle("wd-hovered", D === c && D !== o);
    });
  }, w = (N) => {
    o = N, b(), n.onSelect(N);
  }, S = (N) => {
    c = N, b(), n.onHover(N);
  }, $ = (N) => {
    let I = N;
    for (; I && I !== t; ) {
      const D = I.getAttribute?.("data-id");
      if (D) return D;
      I = I.parentElement;
    }
    return null;
  }, _ = (N) => {
    const I = $(N.target);
    if (I) {
      w(I);
      return;
    }
    f = !0, d = N.clientX, p = N.clientY, m = l, h = u, i.setPointerCapture(N.pointerId);
  }, v = (N) => {
    if (f) {
      const I = s.getBoundingClientRect(), D = s.viewBox.baseVal, dt = Math.max(D.width / I.width, D.height / I.height);
      l = m + (N.clientX - d) * dt, u = h + (N.clientY - p) * dt, g();
      return;
    }
    S($(N.target));
  }, E = (N) => {
    f = !1, i.hasPointerCapture(N.pointerId) && i.releasePointerCapture(N.pointerId);
  }, k = () => {
    f || S(null);
  }, z = (N) => {
    N.preventDefault();
    const I = Math.min(4, Math.max(0.35, a * (N.deltaY > 0 ? 0.9 : 1.1)));
    if (I !== a) {
      if (s) {
        const D = ip(s, N.clientX, N.clientY);
        D && (l = D.x - (D.x - l) / a * I, u = D.y - (D.y - u) / a * I);
      }
      a = I, g();
    }
  }, Y = (N) => {
    const D = N.target?.getAttribute?.("data-id");
    D && (N.key === "Enter" || N.key === " ") && (N.preventDefault(), w(D));
  };
  return i.addEventListener("pointerdown", _), i.addEventListener("pointermove", v), i.addEventListener("pointerup", E), i.addEventListener("pointercancel", E), i.addEventListener("pointerleave", k), i.addEventListener("wheel", z, { passive: !1 }), t.addEventListener("keydown", Y), g(), b(), {
    select(N) {
      o = N, b();
    },
    reset() {
      a = 1, l = 0, u = 0, g();
    },
    destroy() {
      i.removeEventListener("pointerdown", _), i.removeEventListener("pointermove", v), i.removeEventListener("pointerup", E), i.removeEventListener("pointercancel", E), i.removeEventListener("pointerleave", k), i.removeEventListener("wheel", z), t.removeEventListener("keydown", Y), t.replaceChildren();
    }
  };
}
function P(t, e = "", n) {
  const s = document.createElement(t);
  return s.className = e, n !== void 0 && (s.textContent = n), s;
}
function cp(t, e, n = {}) {
  let s = Ci(e), i = !1, r = 0, o = null, c = "2d", a;
  const l = P("section", "wd-widget"), u = P("header", "wd-toolbar"), f = P("div", "wd-heading"), d = P("h2");
  f.append(d), u.append(f);
  const p = P("div", "wd-body"), m = P("div", "wd-viewport"), h = P("div", "wd-stage"), g = P("div", "wd-tooltip");
  g.hidden = !0;
  const b = P("div", "wd-canvas-tools"), w = P("div", "wd-view-switch"), S = P("span", "wd-view-caption", "Schematic"), $ = P("label", "wd-switch"), _ = P("input");
  _.type = "checkbox", _.setAttribute("role", "switch"), _.setAttribute("aria-label", "3D view"), $.append(_, P("span", "wd-switch-track"));
  const v = P("span", "wd-view-caption", "3D");
  w.append(S, $, v);
  const E = P("a", "wd-reset", "Reset");
  E.href = "#", b.append(w, E);
  const k = P("button", "wd-export", "Export SVG");
  k.type = "button", m.append(h, g, b, k);
  const z = P("aside", "wd-inspector");
  z.hidden = !0, z.setAttribute("aria-label", "Connection inspector"), z.setAttribute("aria-live", "polite"), p.append(m, z);
  const Y = P("p", "wd-status");
  Y.setAttribute("role", "status"), l.append(u, p, Y), t.append(l);
  function N(T) {
    const C = s.components.find((M) => M.id === T);
    if (C) return C.label;
    const q = s.wires.find((M) => M.id === T);
    return q ? `${q.label || q.id}: ${q.from} → ${q.to}` : T;
  }
  function I(T, C) {
    if (C === void 0) return;
    const q = P("div", "wd-detail");
    q.append(P("dt", "", T), P("dd", "", String(C))), z.append(q);
  }
  function D() {
    if (z.replaceChildren(), !o) {
      z.hidden = !0;
      return;
    }
    z.hidden = !1;
    const T = s.components.find((M) => M.id === o), C = s.wires.find((M) => M.id === o);
    if (T) {
      z.append(P("h3", "", T.label)), I("Size", `${T.dimensions.join(" × ")} mm`), T.notes && z.append(P("p", "", T.notes));
      for (const [M, Co] of Object.entries(T.properties ?? {})) I(M, Co);
      z.append(P("h4", "", "Contacts"));
      for (const M of T.pins) I(M.label || M.id, M.voltage === void 0 ? M.id : `${M.id} · ${M.voltage} V`);
      if (T.purchase) {
        const M = P("a", "wd-buy", T.purchase.label || "Find this component ↗");
        M.href = T.purchase.url, M.target = "_blank", M.rel = "noopener noreferrer", z.append(M);
      }
    } else if (C) {
      z.append(P("h3", "", C.label || C.id));
      const M = P("div", "wd-swatch");
      M.style.backgroundColor = C.color, z.append(M), I("From", C.from), I("To", C.to), I("Voltage", C.voltage === void 0 ? void 0 : `${C.voltage} V`), I("Length", C.lengthMm === void 0 ? void 0 : `${C.lengthMm} mm`), C.notes && z.append(P("p", "", C.notes));
    }
    const q = P("select", "wd-select");
    q.setAttribute("aria-label", "Select component or wire"), q.append(new Option("Select a component or wire…", ""));
    for (const M of [...s.components, ...s.wires]) q.append(new Option(N(M.id), M.id));
    q.value = o || "", q.addEventListener("change", () => Pt.select(q.value || null)), z.append(q);
  }
  function dt() {
    d.textContent = s.title, D();
  }
  const zt = {
    onSelect: (T) => Pt.select(T),
    onHover: (T) => {
      g.hidden = !T, g.textContent = T ? N(T) : "";
    },
    onError: (T) => {
      i || (Y.textContent = T);
    }
  };
  async function xe(T) {
    if (i) return;
    if (T !== "2d" && T !== "3d") throw new Error("View must be 2d or 3d");
    const C = ++r;
    if (c = T, a?.destroy(), a = void 0, h.replaceChildren(), g.hidden = !0, _.checked = T === "3d", S.classList.toggle("wd-view-active", T === "2d"), v.classList.toggle("wd-view-active", T === "3d"), Y.textContent = "", T === "2d") a = rp(h, s, zt);
    else {
      h.append(P("p", "wd-loading", "Loading 3D assembly…"));
      try {
        const { create3DView: q } = await import("./view3d-D033GX9b.js");
        if (i || C !== r) return;
        a = q(h, s, { ...zt, onError: (M) => {
          C === r && zt.onError(M);
        } });
      } catch (q) {
        if (i || C !== r) return;
        h.replaceChildren(P("p", "wd-loading", "3D could not start. The schematic is still available.")), zt.onError(q instanceof Error ? q.message : String(q));
      }
    }
    a?.select(o);
  }
  const Pt = {
    update(T) {
      if (i) throw new Error("Widget has been destroyed");
      s = Ci(T), o = null, dt(), xe(c);
    },
    setView: xe,
    select(T) {
      i || (o = T && [...s.components, ...s.wires].some((C) => C.id === T) ? T : null, a?.select(o), D());
    },
    exportSVG: () => sp(s),
    destroy() {
      i || (i = !0, r++, a?.destroy(), l.remove());
    }
  };
  return S.addEventListener("click", () => {
    xe("2d");
  }), v.addEventListener("click", () => {
    xe("3d");
  }), _.addEventListener("change", () => {
    xe(_.checked ? "3d" : "2d");
  }), E.addEventListener("click", (T) => {
    T.preventDefault(), a?.reset();
  }), k.addEventListener("click", () => {
    const T = URL.createObjectURL(new Blob([Pt.exportSVG()], { type: "image/svg+xml" })), C = P("a");
    C.href = T, C.download = "wiring-diagram.svg", C.click(), setTimeout(() => URL.revokeObjectURL(T), 1e3);
  }), dt(), xe(n.view ?? "2d"), Pt;
}
export {
  le as DiagramParseError,
  cp as createWiringDiagram,
  op as getBom,
  Ci as parseDiagram,
  sp as renderSVG
};
