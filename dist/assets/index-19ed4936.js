function Fu(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != 'string' && !Array.isArray(r)) {
			for (const i in r)
				if (i !== 'default' && !(i in e)) {
					const o = Object.getOwnPropertyDescriptor(r, i);
					o &&
						Object.defineProperty(
							e,
							i,
							o.get ? o : { enumerable: !0, get: () => r[i] }
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
	);
}
(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
	new MutationObserver((i) => {
		for (const o of i)
			if (o.type === 'childList')
				for (const s of o.addedNodes)
					s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(i) {
		const o = {};
		return (
			i.integrity && (o.integrity = i.integrity),
			i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === 'use-credentials'
				? (o.credentials = 'include')
				: i.crossOrigin === 'anonymous'
				? (o.credentials = 'omit')
				: (o.credentials = 'same-origin'),
			o
		);
	}
	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const o = n(i);
		fetch(i.href, o);
	}
})();
var _f =
	typeof globalThis < 'u'
		? globalThis
		: typeof window < 'u'
		? window
		: typeof global < 'u'
		? global
		: typeof self < 'u'
		? self
		: {};
function Mu(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var bu = { exports: {} },
	Gi = {},
	Bu = { exports: {} },
	U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ar = Symbol.for('react.element'),
	wf = Symbol.for('react.portal'),
	Sf = Symbol.for('react.fragment'),
	kf = Symbol.for('react.strict_mode'),
	Ef = Symbol.for('react.profiler'),
	xf = Symbol.for('react.provider'),
	Cf = Symbol.for('react.context'),
	Tf = Symbol.for('react.forward_ref'),
	Pf = Symbol.for('react.suspense'),
	Of = Symbol.for('react.memo'),
	Rf = Symbol.for('react.lazy'),
	sa = Symbol.iterator;
function jf(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (sa && e[sa]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var Hu = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	Vu = Object.assign,
	Wu = {};
function Un(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Wu),
		(this.updater = n || Hu);
}
Un.prototype.isReactComponent = {};
Un.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		);
	this.updater.enqueueSetState(this, e, t, 'setState');
};
Un.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Ku() {}
Ku.prototype = Un.prototype;
function rl(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Wu),
		(this.updater = n || Hu);
}
var il = (rl.prototype = new Ku());
il.constructor = rl;
Vu(il, Un.prototype);
il.isPureReactComponent = !0;
var la = Array.isArray,
	Qu = Object.prototype.hasOwnProperty,
	ol = { current: null },
	Gu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ju(e, t, n) {
	var r,
		i = {},
		o = null,
		s = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (s = t.ref),
		t.key !== void 0 && (o = '' + t.key),
		t))
			Qu.call(t, r) && !Gu.hasOwnProperty(r) && (i[r] = t[r]);
	var l = arguments.length - 2;
	if (l === 1) i.children = n;
	else if (1 < l) {
		for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
		i.children = a;
	}
	if (e && e.defaultProps)
		for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
	return {
		$$typeof: Ar,
		type: e,
		key: o,
		ref: s,
		props: i,
		_owner: ol.current,
	};
}
function $f(e, t) {
	return {
		$$typeof: Ar,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function sl(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === Ar;
}
function Nf(e) {
	var t = { '=': '=0', ':': '=2' };
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var aa = /\/+/g;
function So(e, t) {
	return typeof e == 'object' && e !== null && e.key != null
		? Nf('' + e.key)
		: t.toString(36);
}
function ci(e, t, n, r, i) {
	var o = typeof e;
	(o === 'undefined' || o === 'boolean') && (e = null);
	var s = !1;
	if (e === null) s = !0;
	else
		switch (o) {
			case 'string':
			case 'number':
				s = !0;
				break;
			case 'object':
				switch (e.$$typeof) {
					case Ar:
					case wf:
						s = !0;
				}
		}
	if (s)
		return (
			(s = e),
			(i = i(s)),
			(e = r === '' ? '.' + So(s, 0) : r),
			la(i)
				? ((n = ''),
				  e != null && (n = e.replace(aa, '$&/') + '/'),
				  ci(i, t, n, '', function (u) {
						return u;
				  }))
				: i != null &&
				  (sl(i) &&
						(i = $f(
							i,
							n +
								(!i.key || (s && s.key === i.key)
									? ''
									: ('' + i.key).replace(aa, '$&/') + '/') +
								e
						)),
				  t.push(i)),
			1
		);
	if (((s = 0), (r = r === '' ? '.' : r + ':'), la(e)))
		for (var l = 0; l < e.length; l++) {
			o = e[l];
			var a = r + So(o, l);
			s += ci(o, t, n, a, i);
		}
	else if (((a = jf(e)), typeof a == 'function'))
		for (e = a.call(e), l = 0; !(o = e.next()).done; )
			(o = o.value), (a = r + So(o, l++)), (s += ci(o, t, n, a, i));
	else if (o === 'object')
		throw (
			((t = String(e)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(t === '[object Object]'
						? 'object with keys {' + Object.keys(e).join(', ') + '}'
						: t) +
					'). If you meant to render a collection of children, use an array instead.'
			))
		);
	return s;
}
function Br(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return (
		ci(e, r, '', '', function (o) {
			return t.call(n, o, i++);
		}),
		r
	);
}
function Lf(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var _e = { current: null },
	di = { transition: null },
	If = {
		ReactCurrentDispatcher: _e,
		ReactCurrentBatchConfig: di,
		ReactCurrentOwner: ol,
	};
U.Children = {
	map: Br,
	forEach: function (e, t, n) {
		Br(
			e,
			function () {
				t.apply(this, arguments);
			},
			n
		);
	},
	count: function (e) {
		var t = 0;
		return (
			Br(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			Br(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!sl(e))
			throw Error(
				'React.Children.only expected to receive a single React element child.'
			);
		return e;
	},
};
U.Component = Un;
U.Fragment = Sf;
U.Profiler = Ef;
U.PureComponent = rl;
U.StrictMode = kf;
U.Suspense = Pf;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = If;
U.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				e +
				'.'
		);
	var r = Vu({}, e.props),
		i = e.key,
		o = e.ref,
		s = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((o = t.ref), (s = ol.current)),
			t.key !== void 0 && (i = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var l = e.type.defaultProps;
		for (a in t)
			Qu.call(t, a) &&
				!Gu.hasOwnProperty(a) &&
				(r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
	}
	var a = arguments.length - 2;
	if (a === 1) r.children = n;
	else if (1 < a) {
		l = Array(a);
		for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
		r.children = l;
	}
	return { $$typeof: Ar, type: e.type, key: i, ref: o, props: r, _owner: s };
};
U.createContext = function (e) {
	return (
		(e = {
			$$typeof: Cf,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: xf, _context: e }),
		(e.Consumer = e)
	);
};
U.createElement = Ju;
U.createFactory = function (e) {
	var t = Ju.bind(null, e);
	return (t.type = e), t;
};
U.createRef = function () {
	return { current: null };
};
U.forwardRef = function (e) {
	return { $$typeof: Tf, render: e };
};
U.isValidElement = sl;
U.lazy = function (e) {
	return { $$typeof: Rf, _payload: { _status: -1, _result: e }, _init: Lf };
};
U.memo = function (e, t) {
	return { $$typeof: Of, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
	var t = di.transition;
	di.transition = {};
	try {
		e();
	} finally {
		di.transition = t;
	}
};
U.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.');
};
U.useCallback = function (e, t) {
	return _e.current.useCallback(e, t);
};
U.useContext = function (e) {
	return _e.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
	return _e.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
	return _e.current.useEffect(e, t);
};
U.useId = function () {
	return _e.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
	return _e.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
	return _e.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
	return _e.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
	return _e.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
	return _e.current.useReducer(e, t, n);
};
U.useRef = function (e) {
	return _e.current.useRef(e);
};
U.useState = function (e) {
	return _e.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
	return _e.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
	return _e.current.useTransition();
};
U.version = '18.2.0';
Bu.exports = U;
var O = Bu.exports;
const qu = Mu(O),
	Af = Fu({ __proto__: null, default: qu }, [O]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Df = O,
	Uf = Symbol.for('react.element'),
	zf = Symbol.for('react.fragment'),
	Ff = Object.prototype.hasOwnProperty,
	Mf = Df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	bf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yu(e, t, n) {
	var r,
		i = {},
		o = null,
		s = null;
	n !== void 0 && (o = '' + n),
		t.key !== void 0 && (o = '' + t.key),
		t.ref !== void 0 && (s = t.ref);
	for (r in t) Ff.call(t, r) && !bf.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
	return {
		$$typeof: Uf,
		type: e,
		key: o,
		ref: s,
		props: i,
		_owner: Mf.current,
	};
}
Gi.Fragment = zf;
Gi.jsx = Yu;
Gi.jsxs = Yu;
bu.exports = Gi;
var D = bu.exports,
	ts = {},
	Xu = { exports: {} },
	Ne = {},
	Zu = { exports: {} },
	ec = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(E, T) {
		var L = E.length;
		E.push(T);
		e: for (; 0 < L; ) {
			var B = (L - 1) >>> 1,
				Z = E[B];
			if (0 < i(Z, T)) (E[B] = T), (E[L] = Z), (L = B);
			else break e;
		}
	}
	function n(E) {
		return E.length === 0 ? null : E[0];
	}
	function r(E) {
		if (E.length === 0) return null;
		var T = E[0],
			L = E.pop();
		if (L !== T) {
			E[0] = L;
			e: for (var B = 0, Z = E.length, Mr = Z >>> 1; B < Mr; ) {
				var zt = 2 * (B + 1) - 1,
					wo = E[zt],
					Ft = zt + 1,
					br = E[Ft];
				if (0 > i(wo, L))
					Ft < Z && 0 > i(br, wo)
						? ((E[B] = br), (E[Ft] = L), (B = Ft))
						: ((E[B] = wo), (E[zt] = L), (B = zt));
				else if (Ft < Z && 0 > i(br, L)) (E[B] = br), (E[Ft] = L), (B = Ft);
				else break e;
			}
		}
		return T;
	}
	function i(E, T) {
		var L = E.sortIndex - T.sortIndex;
		return L !== 0 ? L : E.id - T.id;
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var o = performance;
		e.unstable_now = function () {
			return o.now();
		};
	} else {
		var s = Date,
			l = s.now();
		e.unstable_now = function () {
			return s.now() - l;
		};
	}
	var a = [],
		u = [],
		c = 1,
		d = null,
		p = 3,
		g = !1,
		m = !1,
		y = !1,
		S = typeof setTimeout == 'function' ? setTimeout : null,
		h = typeof clearTimeout == 'function' ? clearTimeout : null,
		f = typeof setImmediate < 'u' ? setImmediate : null;
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function v(E) {
		for (var T = n(u); T !== null; ) {
			if (T.callback === null) r(u);
			else if (T.startTime <= E)
				r(u), (T.sortIndex = T.expirationTime), t(a, T);
			else break;
			T = n(u);
		}
	}
	function w(E) {
		if (((y = !1), v(E), !m))
			if (n(a) !== null) (m = !0), I(x);
			else {
				var T = n(u);
				T !== null && ne(w, T.startTime - E);
			}
	}
	function x(E, T) {
		(m = !1), y && ((y = !1), h(R), (R = -1)), (g = !0);
		var L = p;
		try {
			for (
				v(T), d = n(a);
				d !== null && (!(d.expirationTime > T) || (E && !X()));

			) {
				var B = d.callback;
				if (typeof B == 'function') {
					(d.callback = null), (p = d.priorityLevel);
					var Z = B(d.expirationTime <= T);
					(T = e.unstable_now()),
						typeof Z == 'function' ? (d.callback = Z) : d === n(a) && r(a),
						v(T);
				} else r(a);
				d = n(a);
			}
			if (d !== null) var Mr = !0;
			else {
				var zt = n(u);
				zt !== null && ne(w, zt.startTime - T), (Mr = !1);
			}
			return Mr;
		} finally {
			(d = null), (p = L), (g = !1);
		}
	}
	var j = !1,
		$ = null,
		R = -1,
		G = 5,
		A = -1;
	function X() {
		return !(e.unstable_now() - A < G);
	}
	function Ut() {
		if ($ !== null) {
			var E = e.unstable_now();
			A = E;
			var T = !0;
			try {
				T = $(!0, E);
			} finally {
				T ? tt() : ((j = !1), ($ = null));
			}
		} else j = !1;
	}
	var tt;
	if (typeof f == 'function')
		tt = function () {
			f(Ut);
		};
	else if (typeof MessageChannel < 'u') {
		var _ = new MessageChannel(),
			C = _.port2;
		(_.port1.onmessage = Ut),
			(tt = function () {
				C.postMessage(null);
			});
	} else
		tt = function () {
			S(Ut, 0);
		};
	function I(E) {
		($ = E), j || ((j = !0), tt());
	}
	function ne(E, T) {
		R = S(function () {
			E(e.unstable_now());
		}, T);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (E) {
			E.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			m || g || ((m = !0), I(x));
		}),
		(e.unstable_forceFrameRate = function (E) {
			0 > E || 125 < E
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
				  )
				: (G = 0 < E ? Math.floor(1e3 / E) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return p;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(a);
		}),
		(e.unstable_next = function (E) {
			switch (p) {
				case 1:
				case 2:
				case 3:
					var T = 3;
					break;
				default:
					T = p;
			}
			var L = p;
			p = T;
			try {
				return E();
			} finally {
				p = L;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (E, T) {
			switch (E) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					E = 3;
			}
			var L = p;
			p = E;
			try {
				return T();
			} finally {
				p = L;
			}
		}),
		(e.unstable_scheduleCallback = function (E, T, L) {
			var B = e.unstable_now();
			switch (
				(typeof L == 'object' && L !== null
					? ((L = L.delay), (L = typeof L == 'number' && 0 < L ? B + L : B))
					: (L = B),
				E)
			) {
				case 1:
					var Z = -1;
					break;
				case 2:
					Z = 250;
					break;
				case 5:
					Z = 1073741823;
					break;
				case 4:
					Z = 1e4;
					break;
				default:
					Z = 5e3;
			}
			return (
				(Z = L + Z),
				(E = {
					id: c++,
					callback: T,
					priorityLevel: E,
					startTime: L,
					expirationTime: Z,
					sortIndex: -1,
				}),
				L > B
					? ((E.sortIndex = L),
					  t(u, E),
					  n(a) === null &&
							E === n(u) &&
							(y ? (h(R), (R = -1)) : (y = !0), ne(w, L - B)))
					: ((E.sortIndex = Z), t(a, E), m || g || ((m = !0), I(x))),
				E
			);
		}),
		(e.unstable_shouldYield = X),
		(e.unstable_wrapCallback = function (E) {
			var T = p;
			return function () {
				var L = p;
				p = T;
				try {
					return E.apply(this, arguments);
				} finally {
					p = L;
				}
			};
		});
})(ec);
Zu.exports = ec;
var Bf = Zu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tc = O,
	$e = Bf;
function k(e) {
	for (
		var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
		n < arguments.length;
		n++
	)
		t += '&args[]=' + encodeURIComponent(arguments[n]);
	return (
		'Minified React error #' +
		e +
		'; visit ' +
		t +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	);
}
var nc = new Set(),
	pr = {};
function rn(e, t) {
	jn(e, t), jn(e + 'Capture', t);
}
function jn(e, t) {
	for (pr[e] = t, e = 0; e < t.length; e++) nc.add(t[e]);
}
var ut = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	ns = Object.prototype.hasOwnProperty,
	Hf =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	ua = {},
	ca = {};
function Vf(e) {
	return ns.call(ca, e)
		? !0
		: ns.call(ua, e)
		? !1
		: Hf.test(e)
		? (ca[e] = !0)
		: ((ua[e] = !0), !1);
}
function Wf(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case 'function':
		case 'symbol':
			return !0;
		case 'boolean':
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
		default:
			return !1;
	}
}
function Kf(e, t, n, r) {
	if (t === null || typeof t > 'u' || Wf(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function we(e, t, n, r, i, o, s) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = o),
		(this.removeEmptyString = s);
}
var de = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		de[e] = new we(e, 0, !1, e, null, !1, !1);
	});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0];
	de[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	de[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha',
].forEach(function (e) {
	de[e] = new we(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		de[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	de[e] = new we(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
	de[e] = new we(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
	de[e] = new we(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
	de[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ll = /[\-:]([a-z])/g;
function al(e) {
	return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(ll, al);
		de[t] = new we(t, 1, !1, e, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(ll, al);
		de[t] = new we(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
	});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(ll, al);
	de[t] = new we(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
	de[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new we(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
	de[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ul(e, t, n, r) {
	var i = de.hasOwnProperty(t) ? de[t] : null;
	(i !== null
		? i.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== 'o' && t[0] !== 'O') ||
		  (t[1] !== 'n' && t[1] !== 'N')) &&
		(Kf(t, n, i, r) && (n = null),
		r || i === null
			? Vf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
			: i.mustUseProperty
			? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
			: ((t = i.attributeName),
			  (r = i.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((i = i.type),
					  (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ht = tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Hr = Symbol.for('react.element'),
	fn = Symbol.for('react.portal'),
	hn = Symbol.for('react.fragment'),
	cl = Symbol.for('react.strict_mode'),
	rs = Symbol.for('react.profiler'),
	rc = Symbol.for('react.provider'),
	ic = Symbol.for('react.context'),
	dl = Symbol.for('react.forward_ref'),
	is = Symbol.for('react.suspense'),
	os = Symbol.for('react.suspense_list'),
	fl = Symbol.for('react.memo'),
	mt = Symbol.for('react.lazy'),
	oc = Symbol.for('react.offscreen'),
	da = Symbol.iterator;
function Hn(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (da && e[da]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var Y = Object.assign,
	ko;
function Xn(e) {
	if (ko === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			ko = (t && t[1]) || '';
		}
	return (
		`
` +
		ko +
		e
	);
}
var Eo = !1;
function xo(e, t) {
	if (!e || Eo) return '';
	Eo = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, 'props', {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (u) {
					var r = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					r = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				r = u;
			}
			e();
		}
	} catch (u) {
		if (u && r && typeof u.stack == 'string') {
			for (
				var i = u.stack.split(`
`),
					o = r.stack.split(`
`),
					s = i.length - 1,
					l = o.length - 1;
				1 <= s && 0 <= l && i[s] !== o[l];

			)
				l--;
			for (; 1 <= s && 0 <= l; s--, l--)
				if (i[s] !== o[l]) {
					if (s !== 1 || l !== 1)
						do
							if ((s--, l--, 0 > l || i[s] !== o[l])) {
								var a =
									`
` + i[s].replace(' at new ', ' at ');
								return (
									e.displayName &&
										a.includes('<anonymous>') &&
										(a = a.replace('<anonymous>', e.displayName)),
									a
								);
							}
						while (1 <= s && 0 <= l);
					break;
				}
		}
	} finally {
		(Eo = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : '') ? Xn(e) : '';
}
function Qf(e) {
	switch (e.tag) {
		case 5:
			return Xn(e.type);
		case 16:
			return Xn('Lazy');
		case 13:
			return Xn('Suspense');
		case 19:
			return Xn('SuspenseList');
		case 0:
		case 2:
		case 15:
			return (e = xo(e.type, !1)), e;
		case 11:
			return (e = xo(e.type.render, !1)), e;
		case 1:
			return (e = xo(e.type, !0)), e;
		default:
			return '';
	}
}
function ss(e) {
	if (e == null) return null;
	if (typeof e == 'function') return e.displayName || e.name || null;
	if (typeof e == 'string') return e;
	switch (e) {
		case hn:
			return 'Fragment';
		case fn:
			return 'Portal';
		case rs:
			return 'Profiler';
		case cl:
			return 'StrictMode';
		case is:
			return 'Suspense';
		case os:
			return 'SuspenseList';
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case ic:
				return (e.displayName || 'Context') + '.Consumer';
			case rc:
				return (e._context.displayName || 'Context') + '.Provider';
			case dl:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ''),
						(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				);
			case fl:
				return (
					(t = e.displayName || null), t !== null ? t : ss(e.type) || 'Memo'
				);
			case mt:
				(t = e._payload), (e = e._init);
				try {
					return ss(e(t));
				} catch {}
		}
	return null;
}
function Gf(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return 'Cache';
		case 9:
			return (t.displayName || 'Context') + '.Consumer';
		case 10:
			return (t._context.displayName || 'Context') + '.Provider';
		case 18:
			return 'DehydratedFragment';
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ''),
				t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
			);
		case 7:
			return 'Fragment';
		case 5:
			return t;
		case 4:
			return 'Portal';
		case 3:
			return 'Root';
		case 6:
			return 'Text';
		case 16:
			return ss(t);
		case 8:
			return t === cl ? 'StrictMode' : 'Mode';
		case 22:
			return 'Offscreen';
		case 12:
			return 'Profiler';
		case 21:
			return 'Scope';
		case 13:
			return 'Suspense';
		case 19:
			return 'SuspenseList';
		case 25:
			return 'TracingMarker';
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == 'function') return t.displayName || t.name || null;
			if (typeof t == 'string') return t;
	}
	return null;
}
function Nt(e) {
	switch (typeof e) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return e;
		case 'object':
			return e;
		default:
			return '';
	}
}
function sc(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === 'input' &&
		(t === 'checkbox' || t === 'radio')
	);
}
function Jf(e) {
	var t = sc(e) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = '' + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < 'u' &&
		typeof n.get == 'function' &&
		typeof n.set == 'function'
	) {
		var i = n.get,
			o = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return i.call(this);
				},
				set: function (s) {
					(r = '' + s), o.call(this, s);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (s) {
					r = '' + s;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function Vr(e) {
	e._valueTracker || (e._valueTracker = Jf(e));
}
function lc(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = '';
	return (
		e && (r = sc(e) ? (e.checked ? 'true' : 'false') : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function Ei(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function ls(e, t) {
	var n = t.checked;
	return Y({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function fa(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = Nt(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === 'checkbox' || t.type === 'radio'
					? t.checked != null
					: t.value != null,
		});
}
function ac(e, t) {
	(t = t.checked), t != null && ul(e, 'checked', t, !1);
}
function as(e, t) {
	ac(e, t);
	var n = Nt(t.value),
		r = t.type;
	if (n != null)
		r === 'number'
			? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
			: e.value !== '' + n && (e.value = '' + n);
	else if (r === 'submit' || r === 'reset') {
		e.removeAttribute('value');
		return;
	}
	t.hasOwnProperty('value')
		? us(e, t.type, n)
		: t.hasOwnProperty('defaultValue') && us(e, t.type, Nt(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function ha(e, t, n) {
	if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
		var r = t.type;
		if (
			!(
				(r !== 'submit' && r !== 'reset') ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = '' + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== '' && (e.name = ''),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== '' && (e.name = n);
}
function us(e, t, n) {
	(t !== 'number' || Ei(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Zn = Array.isArray;
function xn(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
		for (n = 0; n < e.length; n++)
			(i = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== i && (e[n].selected = i),
				i && r && (e[n].defaultSelected = !0);
	} else {
		for (n = '' + Nt(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				(e[i].selected = !0), r && (e[i].defaultSelected = !0);
				return;
			}
			t !== null || e[i].disabled || (t = e[i]);
		}
		t !== null && (t.selected = !0);
	}
}
function cs(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
	return Y({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: '' + e._wrapperState.initialValue,
	});
}
function pa(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(k(92));
			if (Zn(n)) {
				if (1 < n.length) throw Error(k(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ''), (n = t);
	}
	e._wrapperState = { initialValue: Nt(n) };
}
function uc(e, t) {
	var n = Nt(t.value),
		r = Nt(t.defaultValue);
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r);
}
function va(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function cc(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function ds(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? cc(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e;
}
var Wr,
	dc = (function (e) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (t, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, i);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
			e.innerHTML = t;
		else {
			for (
				Wr = Wr || document.createElement('div'),
					Wr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = Wr.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function vr(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var rr = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	qf = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(rr).forEach(function (e) {
	qf.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (rr[t] = rr[e]);
	});
});
function fc(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (rr.hasOwnProperty(e) && rr[e])
		? ('' + t).trim()
		: t + 'px';
}
function hc(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				i = fc(n, t[n], r);
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
		}
}
var Yf = Y(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	}
);
function fs(e, t) {
	if (t) {
		if (Yf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(k(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(k(60));
			if (
				typeof t.dangerouslySetInnerHTML != 'object' ||
				!('__html' in t.dangerouslySetInnerHTML)
			)
				throw Error(k(61));
		}
		if (t.style != null && typeof t.style != 'object') throw Error(k(62));
	}
}
function hs(e, t) {
	if (e.indexOf('-') === -1) return typeof t.is == 'string';
	switch (e) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1;
		default:
			return !0;
	}
}
var ps = null;
function hl(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var vs = null,
	Cn = null,
	Tn = null;
function ma(e) {
	if ((e = zr(e))) {
		if (typeof vs != 'function') throw Error(k(280));
		var t = e.stateNode;
		t && ((t = Zi(t)), vs(e.stateNode, e.type, t));
	}
}
function pc(e) {
	Cn ? (Tn ? Tn.push(e) : (Tn = [e])) : (Cn = e);
}
function vc() {
	if (Cn) {
		var e = Cn,
			t = Tn;
		if (((Tn = Cn = null), ma(e), t)) for (e = 0; e < t.length; e++) ma(t[e]);
	}
}
function mc(e, t) {
	return e(t);
}
function yc() {}
var Co = !1;
function gc(e, t, n) {
	if (Co) return e(t, n);
	Co = !0;
	try {
		return mc(e, t, n);
	} finally {
		(Co = !1), (Cn !== null || Tn !== null) && (yc(), vc());
	}
}
function mr(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = Zi(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === 'button' ||
					e === 'input' ||
					e === 'select' ||
					e === 'textarea'
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != 'function') throw Error(k(231, t, typeof n));
	return n;
}
var ms = !1;
if (ut)
	try {
		var Vn = {};
		Object.defineProperty(Vn, 'passive', {
			get: function () {
				ms = !0;
			},
		}),
			window.addEventListener('test', Vn, Vn),
			window.removeEventListener('test', Vn, Vn);
	} catch {
		ms = !1;
	}
function Xf(e, t, n, r, i, o, s, l, a) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u);
	} catch (c) {
		this.onError(c);
	}
}
var ir = !1,
	xi = null,
	Ci = !1,
	ys = null,
	Zf = {
		onError: function (e) {
			(ir = !0), (xi = e);
		},
	};
function eh(e, t, n, r, i, o, s, l, a) {
	(ir = !1), (xi = null), Xf.apply(Zf, arguments);
}
function th(e, t, n, r, i, o, s, l, a) {
	if ((eh.apply(this, arguments), ir)) {
		if (ir) {
			var u = xi;
			(ir = !1), (xi = null);
		} else throw Error(k(198));
		Ci || ((Ci = !0), (ys = u));
	}
}
function on(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function _c(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function ya(e) {
	if (on(e) !== e) throw Error(k(188));
}
function nh(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = on(e)), t === null)) throw Error(k(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var i = n.return;
		if (i === null) break;
		var o = i.alternate;
		if (o === null) {
			if (((r = i.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (i.child === o.child) {
			for (o = i.child; o; ) {
				if (o === n) return ya(i), e;
				if (o === r) return ya(i), t;
				o = o.sibling;
			}
			throw Error(k(188));
		}
		if (n.return !== r.return) (n = i), (r = o);
		else {
			for (var s = !1, l = i.child; l; ) {
				if (l === n) {
					(s = !0), (n = i), (r = o);
					break;
				}
				if (l === r) {
					(s = !0), (r = i), (n = o);
					break;
				}
				l = l.sibling;
			}
			if (!s) {
				for (l = o.child; l; ) {
					if (l === n) {
						(s = !0), (n = o), (r = i);
						break;
					}
					if (l === r) {
						(s = !0), (r = o), (n = i);
						break;
					}
					l = l.sibling;
				}
				if (!s) throw Error(k(189));
			}
		}
		if (n.alternate !== r) throw Error(k(190));
	}
	if (n.tag !== 3) throw Error(k(188));
	return n.stateNode.current === n ? e : t;
}
function wc(e) {
	return (e = nh(e)), e !== null ? Sc(e) : null;
}
function Sc(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = Sc(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var kc = $e.unstable_scheduleCallback,
	ga = $e.unstable_cancelCallback,
	rh = $e.unstable_shouldYield,
	ih = $e.unstable_requestPaint,
	te = $e.unstable_now,
	oh = $e.unstable_getCurrentPriorityLevel,
	pl = $e.unstable_ImmediatePriority,
	Ec = $e.unstable_UserBlockingPriority,
	Ti = $e.unstable_NormalPriority,
	sh = $e.unstable_LowPriority,
	xc = $e.unstable_IdlePriority,
	Ji = null,
	Ze = null;
function lh(e) {
	if (Ze && typeof Ze.onCommitFiberRoot == 'function')
		try {
			Ze.onCommitFiberRoot(Ji, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Ke = Math.clz32 ? Math.clz32 : ch,
	ah = Math.log,
	uh = Math.LN2;
function ch(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((ah(e) / uh) | 0)) | 0;
}
var Kr = 64,
	Qr = 4194304;
function er(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function Pi(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		o = e.pingedLanes,
		s = n & 268435455;
	if (s !== 0) {
		var l = s & ~i;
		l !== 0 ? (r = er(l)) : ((o &= s), o !== 0 && (r = er(o)));
	} else (s = n & ~i), s !== 0 ? (r = er(s)) : o !== 0 && (r = er(o));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & i) &&
		((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Ke(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
	return r;
}
function dh(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function fh(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			i = e.expirationTimes,
			o = e.pendingLanes;
		0 < o;

	) {
		var s = 31 - Ke(o),
			l = 1 << s,
			a = i[s];
		a === -1
			? (!(l & n) || l & r) && (i[s] = dh(l, t))
			: a <= t && (e.expiredLanes |= l),
			(o &= ~l);
	}
}
function gs(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function Cc() {
	var e = Kr;
	return (Kr <<= 1), !(Kr & 4194240) && (Kr = 64), e;
}
function To(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function Dr(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Ke(t)),
		(e[t] = n);
}
function hh(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var i = 31 - Ke(n),
			o = 1 << i;
		(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
	}
}
function vl(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Ke(n),
			i = 1 << r;
		(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
	}
}
var b = 0;
function Tc(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Pc,
	ml,
	Oc,
	Rc,
	jc,
	_s = !1,
	Gr = [],
	xt = null,
	Ct = null,
	Tt = null,
	yr = new Map(),
	gr = new Map(),
	_t = [],
	ph =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		);
function _a(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			xt = null;
			break;
		case 'dragenter':
		case 'dragleave':
			Ct = null;
			break;
		case 'mouseover':
		case 'mouseout':
			Tt = null;
			break;
		case 'pointerover':
		case 'pointerout':
			yr.delete(t.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			gr.delete(t.pointerId);
	}
}
function Wn(e, t, n, r, i, o) {
	return e === null || e.nativeEvent !== o
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [i],
		  }),
		  t !== null && ((t = zr(t)), t !== null && ml(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  i !== null && t.indexOf(i) === -1 && t.push(i),
		  e);
}
function vh(e, t, n, r, i) {
	switch (t) {
		case 'focusin':
			return (xt = Wn(xt, e, t, n, r, i)), !0;
		case 'dragenter':
			return (Ct = Wn(Ct, e, t, n, r, i)), !0;
		case 'mouseover':
			return (Tt = Wn(Tt, e, t, n, r, i)), !0;
		case 'pointerover':
			var o = i.pointerId;
			return yr.set(o, Wn(yr.get(o) || null, e, t, n, r, i)), !0;
		case 'gotpointercapture':
			return (
				(o = i.pointerId), gr.set(o, Wn(gr.get(o) || null, e, t, n, r, i)), !0
			);
	}
	return !1;
}
function $c(e) {
	var t = Kt(e.target);
	if (t !== null) {
		var n = on(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = _c(n)), t !== null)) {
					(e.blockedOn = t),
						jc(e.priority, function () {
							Oc(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function fi(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = ws(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(ps = r), n.target.dispatchEvent(r), (ps = null);
		} else return (t = zr(n)), t !== null && ml(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function wa(e, t, n) {
	fi(e) && n.delete(t);
}
function mh() {
	(_s = !1),
		xt !== null && fi(xt) && (xt = null),
		Ct !== null && fi(Ct) && (Ct = null),
		Tt !== null && fi(Tt) && (Tt = null),
		yr.forEach(wa),
		gr.forEach(wa);
}
function Kn(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		_s ||
			((_s = !0),
			$e.unstable_scheduleCallback($e.unstable_NormalPriority, mh)));
}
function _r(e) {
	function t(i) {
		return Kn(i, e);
	}
	if (0 < Gr.length) {
		Kn(Gr[0], e);
		for (var n = 1; n < Gr.length; n++) {
			var r = Gr[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		xt !== null && Kn(xt, e),
			Ct !== null && Kn(Ct, e),
			Tt !== null && Kn(Tt, e),
			yr.forEach(t),
			gr.forEach(t),
			n = 0;
		n < _t.length;
		n++
	)
		(r = _t[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < _t.length && ((n = _t[0]), n.blockedOn === null); )
		$c(n), n.blockedOn === null && _t.shift();
}
var Pn = ht.ReactCurrentBatchConfig,
	Oi = !0;
function yh(e, t, n, r) {
	var i = b,
		o = Pn.transition;
	Pn.transition = null;
	try {
		(b = 1), yl(e, t, n, r);
	} finally {
		(b = i), (Pn.transition = o);
	}
}
function gh(e, t, n, r) {
	var i = b,
		o = Pn.transition;
	Pn.transition = null;
	try {
		(b = 4), yl(e, t, n, r);
	} finally {
		(b = i), (Pn.transition = o);
	}
}
function yl(e, t, n, r) {
	if (Oi) {
		var i = ws(e, t, n, r);
		if (i === null) Do(e, t, r, Ri, n), _a(e, r);
		else if (vh(i, e, t, n, r)) r.stopPropagation();
		else if ((_a(e, r), t & 4 && -1 < ph.indexOf(e))) {
			for (; i !== null; ) {
				var o = zr(i);
				if (
					(o !== null && Pc(o),
					(o = ws(e, t, n, r)),
					o === null && Do(e, t, r, Ri, n),
					o === i)
				)
					break;
				i = o;
			}
			i !== null && r.stopPropagation();
		} else Do(e, t, r, null, n);
	}
}
var Ri = null;
function ws(e, t, n, r) {
	if (((Ri = null), (e = hl(r)), (e = Kt(e)), e !== null))
		if (((t = on(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = _c(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (Ri = e), null;
}
function Nc(e) {
	switch (e) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1;
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4;
		case 'message':
			switch (oh()) {
				case pl:
					return 1;
				case Ec:
					return 4;
				case Ti:
				case sh:
					return 16;
				case xc:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var St = null,
	gl = null,
	hi = null;
function Lc() {
	if (hi) return hi;
	var e,
		t = gl,
		n = t.length,
		r,
		i = 'value' in St ? St.value : St.textContent,
		o = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var s = n - e;
	for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
	return (hi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function pi(e) {
	var t = e.keyCode;
	return (
		'charCode' in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function Jr() {
	return !0;
}
function Sa() {
	return !1;
}
function Le(e) {
	function t(n, r, i, o, s) {
		(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = s),
			(this.currentTarget = null);
		for (var l in e)
			e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
			)
				? Jr
				: Sa),
			(this.isPropagationStopped = Sa),
			this
		);
	}
	return (
		Y(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = Jr));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = Jr));
			},
			persist: function () {},
			isPersistent: Jr,
		}),
		t
	);
}
var zn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	_l = Le(zn),
	Ur = Y({}, zn, { view: 0, detail: 0 }),
	_h = Le(Ur),
	Po,
	Oo,
	Qn,
	qi = Y({}, Ur, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: wl,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return 'movementX' in e
				? e.movementX
				: (e !== Qn &&
						(Qn && e.type === 'mousemove'
							? ((Po = e.screenX - Qn.screenX), (Oo = e.screenY - Qn.screenY))
							: (Oo = Po = 0),
						(Qn = e)),
				  Po);
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : Oo;
		},
	}),
	ka = Le(qi),
	wh = Y({}, qi, { dataTransfer: 0 }),
	Sh = Le(wh),
	kh = Y({}, Ur, { relatedTarget: 0 }),
	Ro = Le(kh),
	Eh = Y({}, zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	xh = Le(Eh),
	Ch = Y({}, zn, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
		},
	}),
	Th = Le(Ch),
	Ph = Y({}, zn, { data: 0 }),
	Ea = Le(Ph),
	Oh = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified',
	},
	Rh = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta',
	},
	jh = {
		Alt: 'altKey',
		Control: 'ctrlKey',
		Meta: 'metaKey',
		Shift: 'shiftKey',
	};
function $h(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = jh[e]) ? !!t[e] : !1;
}
function wl() {
	return $h;
}
var Nh = Y({}, Ur, {
		key: function (e) {
			if (e.key) {
				var t = Oh[e.key] || e.key;
				if (t !== 'Unidentified') return t;
			}
			return e.type === 'keypress'
				? ((e = pi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? Rh[e.keyCode] || 'Unidentified'
				: '';
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: wl,
		charCode: function (e) {
			return e.type === 'keypress' ? pi(e) : 0;
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === 'keypress'
				? pi(e)
				: e.type === 'keydown' || e.type === 'keyup'
				? e.keyCode
				: 0;
		},
	}),
	Lh = Le(Nh),
	Ih = Y({}, qi, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	xa = Le(Ih),
	Ah = Y({}, Ur, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: wl,
	}),
	Dh = Le(Ah),
	Uh = Y({}, zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	zh = Le(Uh),
	Fh = Y({}, qi, {
		deltaX: function (e) {
			return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return 'deltaY' in e
				? e.deltaY
				: 'wheelDeltaY' in e
				? -e.wheelDeltaY
				: 'wheelDelta' in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	Mh = Le(Fh),
	bh = [9, 13, 27, 32],
	Sl = ut && 'CompositionEvent' in window,
	or = null;
ut && 'documentMode' in document && (or = document.documentMode);
var Bh = ut && 'TextEvent' in window && !or,
	Ic = ut && (!Sl || (or && 8 < or && 11 >= or)),
	Ca = String.fromCharCode(32),
	Ta = !1;
function Ac(e, t) {
	switch (e) {
		case 'keyup':
			return bh.indexOf(t.keyCode) !== -1;
		case 'keydown':
			return t.keyCode !== 229;
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0;
		default:
			return !1;
	}
}
function Dc(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var pn = !1;
function Hh(e, t) {
	switch (e) {
		case 'compositionend':
			return Dc(t);
		case 'keypress':
			return t.which !== 32 ? null : ((Ta = !0), Ca);
		case 'textInput':
			return (e = t.data), e === Ca && Ta ? null : e;
		default:
			return null;
	}
}
function Vh(e, t) {
	if (pn)
		return e === 'compositionend' || (!Sl && Ac(e, t))
			? ((e = Lc()), (hi = gl = St = null), (pn = !1), e)
			: null;
	switch (e) {
		case 'paste':
			return null;
		case 'keypress':
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case 'compositionend':
			return Ic && t.locale !== 'ko' ? null : t.data;
		default:
			return null;
	}
}
var Wh = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function Pa(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === 'input' ? !!Wh[e.type] : t === 'textarea';
}
function Uc(e, t, n, r) {
	pc(r),
		(t = ji(t, 'onChange')),
		0 < t.length &&
			((n = new _l('onChange', 'change', null, n, r)),
			e.push({ event: n, listeners: t }));
}
var sr = null,
	wr = null;
function Kh(e) {
	Gc(e, 0);
}
function Yi(e) {
	var t = yn(e);
	if (lc(t)) return e;
}
function Qh(e, t) {
	if (e === 'change') return t;
}
var zc = !1;
if (ut) {
	var jo;
	if (ut) {
		var $o = 'oninput' in document;
		if (!$o) {
			var Oa = document.createElement('div');
			Oa.setAttribute('oninput', 'return;'),
				($o = typeof Oa.oninput == 'function');
		}
		jo = $o;
	} else jo = !1;
	zc = jo && (!document.documentMode || 9 < document.documentMode);
}
function Ra() {
	sr && (sr.detachEvent('onpropertychange', Fc), (wr = sr = null));
}
function Fc(e) {
	if (e.propertyName === 'value' && Yi(wr)) {
		var t = [];
		Uc(t, wr, e, hl(e)), gc(Kh, t);
	}
}
function Gh(e, t, n) {
	e === 'focusin'
		? (Ra(), (sr = t), (wr = n), sr.attachEvent('onpropertychange', Fc))
		: e === 'focusout' && Ra();
}
function Jh(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
		return Yi(wr);
}
function qh(e, t) {
	if (e === 'click') return Yi(t);
}
function Yh(e, t) {
	if (e === 'input' || e === 'change') return Yi(t);
}
function Xh(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ge = typeof Object.is == 'function' ? Object.is : Xh;
function Sr(e, t) {
	if (Ge(e, t)) return !0;
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!ns.call(t, i) || !Ge(e[i], t[i])) return !1;
	}
	return !0;
}
function ja(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function $a(e, t) {
	var n = ja(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = ja(n);
	}
}
function Mc(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? Mc(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function bc() {
	for (var e = window, t = Ei(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string';
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = Ei(e.document);
	}
	return t;
}
function kl(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === 'input' &&
			(e.type === 'text' ||
				e.type === 'search' ||
				e.type === 'tel' ||
				e.type === 'url' ||
				e.type === 'password')) ||
			t === 'textarea' ||
			e.contentEditable === 'true')
	);
}
function Zh(e) {
	var t = bc(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Mc(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && kl(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				'selectionStart' in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var i = n.textContent.length,
					o = Math.min(r.start, i);
				(r = r.end === void 0 ? o : Math.min(r.end, i)),
					!e.extend && o > r && ((i = r), (r = o), (o = i)),
					(i = $a(n, o));
				var s = $a(n, r);
				i &&
					s &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== i.node ||
						e.anchorOffset !== i.offset ||
						e.focusNode !== s.node ||
						e.focusOffset !== s.offset) &&
					((t = t.createRange()),
					t.setStart(i.node, i.offset),
					e.removeAllRanges(),
					o > r
						? (e.addRange(t), e.extend(s.node, s.offset))
						: (t.setEnd(s.node, s.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var ep = ut && 'documentMode' in document && 11 >= document.documentMode,
	vn = null,
	Ss = null,
	lr = null,
	ks = !1;
function Na(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	ks ||
		vn == null ||
		vn !== Ei(r) ||
		((r = vn),
		'selectionStart' in r && kl(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(lr && Sr(lr, r)) ||
			((lr = r),
			(r = ji(Ss, 'onSelect')),
			0 < r.length &&
				((t = new _l('onSelect', 'select', null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = vn))));
}
function qr(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n['Webkit' + e] = 'webkit' + t),
		(n['Moz' + e] = 'moz' + t),
		n
	);
}
var mn = {
		animationend: qr('Animation', 'AnimationEnd'),
		animationiteration: qr('Animation', 'AnimationIteration'),
		animationstart: qr('Animation', 'AnimationStart'),
		transitionend: qr('Transition', 'TransitionEnd'),
	},
	No = {},
	Bc = {};
ut &&
	((Bc = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete mn.animationend.animation,
		delete mn.animationiteration.animation,
		delete mn.animationstart.animation),
	'TransitionEvent' in window || delete mn.transitionend.transition);
function Xi(e) {
	if (No[e]) return No[e];
	if (!mn[e]) return e;
	var t = mn[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in Bc) return (No[e] = t[n]);
	return e;
}
var Hc = Xi('animationend'),
	Vc = Xi('animationiteration'),
	Wc = Xi('animationstart'),
	Kc = Xi('transitionend'),
	Qc = new Map(),
	La =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		);
function It(e, t) {
	Qc.set(e, t), rn(t, [e]);
}
for (var Lo = 0; Lo < La.length; Lo++) {
	var Io = La[Lo],
		tp = Io.toLowerCase(),
		np = Io[0].toUpperCase() + Io.slice(1);
	It(tp, 'on' + np);
}
It(Hc, 'onAnimationEnd');
It(Vc, 'onAnimationIteration');
It(Wc, 'onAnimationStart');
It('dblclick', 'onDoubleClick');
It('focusin', 'onFocus');
It('focusout', 'onBlur');
It(Kc, 'onTransitionEnd');
jn('onMouseEnter', ['mouseout', 'mouseover']);
jn('onMouseLeave', ['mouseout', 'mouseover']);
jn('onPointerEnter', ['pointerout', 'pointerover']);
jn('onPointerLeave', ['pointerout', 'pointerover']);
rn(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
rn(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' '
	)
);
rn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
rn(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
rn(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
rn(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var tr =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	rp = new Set('cancel close invalid load scroll toggle'.split(' ').concat(tr));
function Ia(e, t, n) {
	var r = e.type || 'unknown-event';
	(e.currentTarget = n), th(r, t, void 0, e), (e.currentTarget = null);
}
function Gc(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event;
		r = r.listeners;
		e: {
			var o = void 0;
			if (t)
				for (var s = r.length - 1; 0 <= s; s--) {
					var l = r[s],
						a = l.instance,
						u = l.currentTarget;
					if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
					Ia(i, l, u), (o = a);
				}
			else
				for (s = 0; s < r.length; s++) {
					if (
						((l = r[s]),
						(a = l.instance),
						(u = l.currentTarget),
						(l = l.listener),
						a !== o && i.isPropagationStopped())
					)
						break e;
					Ia(i, l, u), (o = a);
				}
		}
	}
	if (Ci) throw ((e = ys), (Ci = !1), (ys = null), e);
}
function W(e, t) {
	var n = t[Ps];
	n === void 0 && (n = t[Ps] = new Set());
	var r = e + '__bubble';
	n.has(r) || (Jc(t, e, 2, !1), n.add(r));
}
function Ao(e, t, n) {
	var r = 0;
	t && (r |= 4), Jc(n, e, r, t);
}
var Yr = '_reactListening' + Math.random().toString(36).slice(2);
function kr(e) {
	if (!e[Yr]) {
		(e[Yr] = !0),
			nc.forEach(function (n) {
				n !== 'selectionchange' && (rp.has(n) || Ao(n, !1, e), Ao(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[Yr] || ((t[Yr] = !0), Ao('selectionchange', !1, t));
	}
}
function Jc(e, t, n, r) {
	switch (Nc(t)) {
		case 1:
			var i = yh;
			break;
		case 4:
			i = gh;
			break;
		default:
			i = yl;
	}
	(n = i.bind(null, t, n, e)),
		(i = void 0),
		!ms ||
			(t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
			(i = !0),
		r
			? i !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: i })
				: e.addEventListener(t, n, !0)
			: i !== void 0
			? e.addEventListener(t, n, { passive: i })
			: e.addEventListener(t, n, !1);
}
function Do(e, t, n, r, i) {
	var o = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var l = r.stateNode.containerInfo;
				if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
				if (s === 4)
					for (s = r.return; s !== null; ) {
						var a = s.tag;
						if (
							(a === 3 || a === 4) &&
							((a = s.stateNode.containerInfo),
							a === i || (a.nodeType === 8 && a.parentNode === i))
						)
							return;
						s = s.return;
					}
				for (; l !== null; ) {
					if (((s = Kt(l)), s === null)) return;
					if (((a = s.tag), a === 5 || a === 6)) {
						r = o = s;
						continue e;
					}
					l = l.parentNode;
				}
			}
			r = r.return;
		}
	gc(function () {
		var u = o,
			c = hl(n),
			d = [];
		e: {
			var p = Qc.get(e);
			if (p !== void 0) {
				var g = _l,
					m = e;
				switch (e) {
					case 'keypress':
						if (pi(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						g = Lh;
						break;
					case 'focusin':
						(m = 'focus'), (g = Ro);
						break;
					case 'focusout':
						(m = 'blur'), (g = Ro);
						break;
					case 'beforeblur':
					case 'afterblur':
						g = Ro;
						break;
					case 'click':
						if (n.button === 2) break e;
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						g = ka;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						g = Sh;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						g = Dh;
						break;
					case Hc:
					case Vc:
					case Wc:
						g = xh;
						break;
					case Kc:
						g = zh;
						break;
					case 'scroll':
						g = _h;
						break;
					case 'wheel':
						g = Mh;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						g = Th;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						g = xa;
				}
				var y = (t & 4) !== 0,
					S = !y && e === 'scroll',
					h = y ? (p !== null ? p + 'Capture' : null) : p;
				y = [];
				for (var f = u, v; f !== null; ) {
					v = f;
					var w = v.stateNode;
					if (
						(v.tag === 5 &&
							w !== null &&
							((v = w),
							h !== null && ((w = mr(f, h)), w != null && y.push(Er(f, w, v)))),
						S)
					)
						break;
					f = f.return;
				}
				0 < y.length &&
					((p = new g(p, m, null, n, c)), d.push({ event: p, listeners: y }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((p = e === 'mouseover' || e === 'pointerover'),
					(g = e === 'mouseout' || e === 'pointerout'),
					p &&
						n !== ps &&
						(m = n.relatedTarget || n.fromElement) &&
						(Kt(m) || m[ct]))
				)
					break e;
				if (
					(g || p) &&
					((p =
						c.window === c
							? c
							: (p = c.ownerDocument)
							? p.defaultView || p.parentWindow
							: window),
					g
						? ((m = n.relatedTarget || n.toElement),
						  (g = u),
						  (m = m ? Kt(m) : null),
						  m !== null &&
								((S = on(m)), m !== S || (m.tag !== 5 && m.tag !== 6)) &&
								(m = null))
						: ((g = null), (m = u)),
					g !== m)
				) {
					if (
						((y = ka),
						(w = 'onMouseLeave'),
						(h = 'onMouseEnter'),
						(f = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((y = xa),
							(w = 'onPointerLeave'),
							(h = 'onPointerEnter'),
							(f = 'pointer')),
						(S = g == null ? p : yn(g)),
						(v = m == null ? p : yn(m)),
						(p = new y(w, f + 'leave', g, n, c)),
						(p.target = S),
						(p.relatedTarget = v),
						(w = null),
						Kt(c) === u &&
							((y = new y(h, f + 'enter', m, n, c)),
							(y.target = v),
							(y.relatedTarget = S),
							(w = y)),
						(S = w),
						g && m)
					)
						t: {
							for (y = g, h = m, f = 0, v = y; v; v = an(v)) f++;
							for (v = 0, w = h; w; w = an(w)) v++;
							for (; 0 < f - v; ) (y = an(y)), f--;
							for (; 0 < v - f; ) (h = an(h)), v--;
							for (; f--; ) {
								if (y === h || (h !== null && y === h.alternate)) break t;
								(y = an(y)), (h = an(h));
							}
							y = null;
						}
					else y = null;
					g !== null && Aa(d, p, g, y, !1),
						m !== null && S !== null && Aa(d, S, m, y, !0);
				}
			}
			e: {
				if (
					((p = u ? yn(u) : window),
					(g = p.nodeName && p.nodeName.toLowerCase()),
					g === 'select' || (g === 'input' && p.type === 'file'))
				)
					var x = Qh;
				else if (Pa(p))
					if (zc) x = Yh;
					else {
						x = Jh;
						var j = Gh;
					}
				else
					(g = p.nodeName) &&
						g.toLowerCase() === 'input' &&
						(p.type === 'checkbox' || p.type === 'radio') &&
						(x = qh);
				if (x && (x = x(e, u))) {
					Uc(d, x, n, c);
					break e;
				}
				j && j(e, p, u),
					e === 'focusout' &&
						(j = p._wrapperState) &&
						j.controlled &&
						p.type === 'number' &&
						us(p, 'number', p.value);
			}
			switch (((j = u ? yn(u) : window), e)) {
				case 'focusin':
					(Pa(j) || j.contentEditable === 'true') &&
						((vn = j), (Ss = u), (lr = null));
					break;
				case 'focusout':
					lr = Ss = vn = null;
					break;
				case 'mousedown':
					ks = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(ks = !1), Na(d, n, c);
					break;
				case 'selectionchange':
					if (ep) break;
				case 'keydown':
				case 'keyup':
					Na(d, n, c);
			}
			var $;
			if (Sl)
				e: {
					switch (e) {
						case 'compositionstart':
							var R = 'onCompositionStart';
							break e;
						case 'compositionend':
							R = 'onCompositionEnd';
							break e;
						case 'compositionupdate':
							R = 'onCompositionUpdate';
							break e;
					}
					R = void 0;
				}
			else
				pn
					? Ac(e, n) && (R = 'onCompositionEnd')
					: e === 'keydown' && n.keyCode === 229 && (R = 'onCompositionStart');
			R &&
				(Ic &&
					n.locale !== 'ko' &&
					(pn || R !== 'onCompositionStart'
						? R === 'onCompositionEnd' && pn && ($ = Lc())
						: ((St = c),
						  (gl = 'value' in St ? St.value : St.textContent),
						  (pn = !0))),
				(j = ji(u, R)),
				0 < j.length &&
					((R = new Ea(R, e, null, n, c)),
					d.push({ event: R, listeners: j }),
					$ ? (R.data = $) : (($ = Dc(n)), $ !== null && (R.data = $)))),
				($ = Bh ? Hh(e, n) : Vh(e, n)) &&
					((u = ji(u, 'onBeforeInput')),
					0 < u.length &&
						((c = new Ea('onBeforeInput', 'beforeinput', null, n, c)),
						d.push({ event: c, listeners: u }),
						(c.data = $)));
		}
		Gc(d, t);
	});
}
function Er(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function ji(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var i = e,
			o = i.stateNode;
		i.tag === 5 &&
			o !== null &&
			((i = o),
			(o = mr(e, n)),
			o != null && r.unshift(Er(e, o, i)),
			(o = mr(e, t)),
			o != null && r.push(Er(e, o, i))),
			(e = e.return);
	}
	return r;
}
function an(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function Aa(e, t, n, r, i) {
	for (var o = t._reactName, s = []; n !== null && n !== r; ) {
		var l = n,
			a = l.alternate,
			u = l.stateNode;
		if (a !== null && a === r) break;
		l.tag === 5 &&
			u !== null &&
			((l = u),
			i
				? ((a = mr(n, o)), a != null && s.unshift(Er(n, a, l)))
				: i || ((a = mr(n, o)), a != null && s.push(Er(n, a, l)))),
			(n = n.return);
	}
	s.length !== 0 && e.push({ event: t, listeners: s });
}
var ip = /\r\n?/g,
	op = /\u0000|\uFFFD/g;
function Da(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			ip,
			`
`
		)
		.replace(op, '');
}
function Xr(e, t, n) {
	if (((t = Da(t)), Da(e) !== t && n)) throw Error(k(425));
}
function $i() {}
var Es = null,
	xs = null;
function Cs(e, t) {
	return (
		e === 'textarea' ||
		e === 'noscript' ||
		typeof t.children == 'string' ||
		typeof t.children == 'number' ||
		(typeof t.dangerouslySetInnerHTML == 'object' &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var Ts = typeof setTimeout == 'function' ? setTimeout : void 0,
	sp = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	Ua = typeof Promise == 'function' ? Promise : void 0,
	lp =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof Ua < 'u'
			? function (e) {
					return Ua.resolve(null).then(e).catch(ap);
			  }
			: Ts;
function ap(e) {
	setTimeout(function () {
		throw e;
	});
}
function Uo(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if ((e.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(i), _r(t);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = i;
	} while (n);
	_r(t);
}
function Pt(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
			if (t === '/$') return null;
		}
	}
	return e;
}
function za(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === '$' || n === '$!' || n === '$?') {
				if (t === 0) return e;
				t--;
			} else n === '/$' && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var Fn = Math.random().toString(36).slice(2),
	Xe = '__reactFiber$' + Fn,
	xr = '__reactProps$' + Fn,
	ct = '__reactContainer$' + Fn,
	Ps = '__reactEvents$' + Fn,
	up = '__reactListeners$' + Fn,
	cp = '__reactHandles$' + Fn;
function Kt(e) {
	var t = e[Xe];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[ct] || n[Xe])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = za(e); e !== null; ) {
					if ((n = e[Xe])) return n;
					e = za(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function zr(e) {
	return (
		(e = e[Xe] || e[ct]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function yn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(k(33));
}
function Zi(e) {
	return e[xr] || null;
}
var Os = [],
	gn = -1;
function At(e) {
	return { current: e };
}
function K(e) {
	0 > gn || ((e.current = Os[gn]), (Os[gn] = null), gn--);
}
function V(e, t) {
	gn++, (Os[gn] = e.current), (e.current = t);
}
var Lt = {},
	me = At(Lt),
	xe = At(!1),
	Xt = Lt;
function $n(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Lt;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		o;
	for (o in n) i[o] = t[o];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		i
	);
}
function Ce(e) {
	return (e = e.childContextTypes), e != null;
}
function Ni() {
	K(xe), K(me);
}
function Fa(e, t, n) {
	if (me.current !== Lt) throw Error(k(168));
	V(me, t), V(xe, n);
}
function qc(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
		return n;
	r = r.getChildContext();
	for (var i in r) if (!(i in t)) throw Error(k(108, Gf(e) || 'Unknown', i));
	return Y({}, n, r);
}
function Li(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Lt),
		(Xt = me.current),
		V(me, e),
		V(xe, xe.current),
		!0
	);
}
function Ma(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(k(169));
	n
		? ((e = qc(e, t, Xt)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  K(xe),
		  K(me),
		  V(me, e))
		: K(xe),
		V(xe, n);
}
var ot = null,
	eo = !1,
	zo = !1;
function Yc(e) {
	ot === null ? (ot = [e]) : ot.push(e);
}
function dp(e) {
	(eo = !0), Yc(e);
}
function Dt() {
	if (!zo && ot !== null) {
		zo = !0;
		var e = 0,
			t = b;
		try {
			var n = ot;
			for (b = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(ot = null), (eo = !1);
		} catch (i) {
			throw (ot !== null && (ot = ot.slice(e + 1)), kc(pl, Dt), i);
		} finally {
			(b = t), (zo = !1);
		}
	}
	return null;
}
var _n = [],
	wn = 0,
	Ii = null,
	Ai = 0,
	Ae = [],
	De = 0,
	Zt = null,
	st = 1,
	lt = '';
function bt(e, t) {
	(_n[wn++] = Ai), (_n[wn++] = Ii), (Ii = e), (Ai = t);
}
function Xc(e, t, n) {
	(Ae[De++] = st), (Ae[De++] = lt), (Ae[De++] = Zt), (Zt = e);
	var r = st;
	e = lt;
	var i = 32 - Ke(r) - 1;
	(r &= ~(1 << i)), (n += 1);
	var o = 32 - Ke(t) + i;
	if (30 < o) {
		var s = i - (i % 5);
		(o = (r & ((1 << s) - 1)).toString(32)),
			(r >>= s),
			(i -= s),
			(st = (1 << (32 - Ke(t) + i)) | (n << i) | r),
			(lt = o + e);
	} else (st = (1 << o) | (n << i) | r), (lt = e);
}
function El(e) {
	e.return !== null && (bt(e, 1), Xc(e, 1, 0));
}
function xl(e) {
	for (; e === Ii; )
		(Ii = _n[--wn]), (_n[wn] = null), (Ai = _n[--wn]), (_n[wn] = null);
	for (; e === Zt; )
		(Zt = Ae[--De]),
			(Ae[De] = null),
			(lt = Ae[--De]),
			(Ae[De] = null),
			(st = Ae[--De]),
			(Ae[De] = null);
}
var je = null,
	Re = null,
	Q = !1,
	We = null;
function Zc(e, t) {
	var n = Ue(5, null, null, 0);
	(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ba(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (je = e), (Re = Pt(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (je = e), (Re = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = Zt !== null ? { id: st, overflow: lt } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = Ue(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (je = e),
					  (Re = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function Rs(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function js(e) {
	if (Q) {
		var t = Re;
		if (t) {
			var n = t;
			if (!ba(e, t)) {
				if (Rs(e)) throw Error(k(418));
				t = Pt(n.nextSibling);
				var r = je;
				t && ba(e, t)
					? Zc(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (Q = !1), (je = e));
			}
		} else {
			if (Rs(e)) throw Error(k(418));
			(e.flags = (e.flags & -4097) | 2), (Q = !1), (je = e);
		}
	}
}
function Ba(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	je = e;
}
function Zr(e) {
	if (e !== je) return !1;
	if (!Q) return Ba(e), (Q = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== 'head' && t !== 'body' && !Cs(e.type, e.memoizedProps))),
		t && (t = Re))
	) {
		if (Rs(e)) throw (ed(), Error(k(418)));
		for (; t; ) Zc(e, t), (t = Pt(t.nextSibling));
	}
	if ((Ba(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(k(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === '/$') {
						if (t === 0) {
							Re = Pt(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++;
				}
				e = e.nextSibling;
			}
			Re = null;
		}
	} else Re = je ? Pt(e.stateNode.nextSibling) : null;
	return !0;
}
function ed() {
	for (var e = Re; e; ) e = Pt(e.nextSibling);
}
function Nn() {
	(Re = je = null), (Q = !1);
}
function Cl(e) {
	We === null ? (We = [e]) : We.push(e);
}
var fp = ht.ReactCurrentBatchConfig;
function Be(e, t) {
	if (e && e.defaultProps) {
		(t = Y({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var Di = At(null),
	Ui = null,
	Sn = null,
	Tl = null;
function Pl() {
	Tl = Sn = Ui = null;
}
function Ol(e) {
	var t = Di.current;
	K(Di), (e._currentValue = t);
}
function $s(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function On(e, t) {
	(Ui = e),
		(Tl = Sn = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Ee = !0), (e.firstContext = null));
}
function Fe(e) {
	var t = e._currentValue;
	if (Tl !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Sn === null)) {
			if (Ui === null) throw Error(k(308));
			(Sn = e), (Ui.dependencies = { lanes: 0, firstContext: e });
		} else Sn = Sn.next = e;
	return t;
}
var Qt = null;
function Rl(e) {
	Qt === null ? (Qt = [e]) : Qt.push(e);
}
function td(e, t, n, r) {
	var i = t.interleaved;
	return (
		i === null ? ((n.next = n), Rl(t)) : ((n.next = i.next), (i.next = n)),
		(t.interleaved = n),
		dt(e, r)
	);
}
function dt(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var yt = !1;
function jl(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function nd(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function at(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function Ot(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), F & 2)) {
		var i = r.pending;
		return (
			i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
			(r.pending = t),
			dt(e, n)
		);
	}
	return (
		(i = r.interleaved),
		i === null ? ((t.next = t), Rl(r)) : ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		dt(e, n)
	);
}
function vi(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), vl(e, n);
	}
}
function Ha(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			o = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var s = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
			} while (n !== null);
			o === null ? (i = o = t) : (o = o.next = t);
		} else i = o = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: o,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function zi(e, t, n, r) {
	var i = e.updateQueue;
	yt = !1;
	var o = i.firstBaseUpdate,
		s = i.lastBaseUpdate,
		l = i.shared.pending;
	if (l !== null) {
		i.shared.pending = null;
		var a = l,
			u = a.next;
		(a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
		var c = e.alternate;
		c !== null &&
			((c = c.updateQueue),
			(l = c.lastBaseUpdate),
			l !== s &&
				(l === null ? (c.firstBaseUpdate = u) : (l.next = u),
				(c.lastBaseUpdate = a)));
	}
	if (o !== null) {
		var d = i.baseState;
		(s = 0), (c = u = a = null), (l = o);
		do {
			var p = l.lane,
				g = l.eventTime;
			if ((r & p) === p) {
				c !== null &&
					(c = c.next =
						{
							eventTime: g,
							lane: 0,
							tag: l.tag,
							payload: l.payload,
							callback: l.callback,
							next: null,
						});
				e: {
					var m = e,
						y = l;
					switch (((p = t), (g = n), y.tag)) {
						case 1:
							if (((m = y.payload), typeof m == 'function')) {
								d = m.call(g, d, p);
								break e;
							}
							d = m;
							break e;
						case 3:
							m.flags = (m.flags & -65537) | 128;
						case 0:
							if (
								((m = y.payload),
								(p = typeof m == 'function' ? m.call(g, d, p) : m),
								p == null)
							)
								break e;
							d = Y({}, d, p);
							break e;
						case 2:
							yt = !0;
					}
				}
				l.callback !== null &&
					l.lane !== 0 &&
					((e.flags |= 64),
					(p = i.effects),
					p === null ? (i.effects = [l]) : p.push(l));
			} else
				(g = {
					eventTime: g,
					lane: p,
					tag: l.tag,
					payload: l.payload,
					callback: l.callback,
					next: null,
				}),
					c === null ? ((u = c = g), (a = d)) : (c = c.next = g),
					(s |= p);
			if (((l = l.next), l === null)) {
				if (((l = i.shared.pending), l === null)) break;
				(p = l),
					(l = p.next),
					(p.next = null),
					(i.lastBaseUpdate = p),
					(i.shared.pending = null);
			}
		} while (1);
		if (
			(c === null && (a = d),
			(i.baseState = a),
			(i.firstBaseUpdate = u),
			(i.lastBaseUpdate = c),
			(t = i.shared.interleaved),
			t !== null)
		) {
			i = t;
			do (s |= i.lane), (i = i.next);
			while (i !== t);
		} else o === null && (i.shared.lanes = 0);
		(tn |= s), (e.lanes = s), (e.memoizedState = d);
	}
}
function Va(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != 'function'))
					throw Error(k(191, i));
				i.call(r);
			}
		}
}
var rd = new tc.Component().refs;
function Ns(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : Y({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var to = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? on(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = ge(),
			i = jt(e),
			o = at(r, i);
		(o.payload = t),
			n != null && (o.callback = n),
			(t = Ot(e, o, i)),
			t !== null && (Qe(t, e, i, r), vi(t, e, i));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = ge(),
			i = jt(e),
			o = at(r, i);
		(o.tag = 1),
			(o.payload = t),
			n != null && (o.callback = n),
			(t = Ot(e, o, i)),
			t !== null && (Qe(t, e, i, r), vi(t, e, i));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = ge(),
			r = jt(e),
			i = at(n, r);
		(i.tag = 2),
			t != null && (i.callback = t),
			(t = Ot(e, i, r)),
			t !== null && (Qe(t, e, r, n), vi(t, e, r));
	},
};
function Wa(e, t, n, r, i, o, s) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, o, s)
			: t.prototype && t.prototype.isPureReactComponent
			? !Sr(n, r) || !Sr(i, o)
			: !0
	);
}
function id(e, t, n) {
	var r = !1,
		i = Lt,
		o = t.contextType;
	return (
		typeof o == 'object' && o !== null
			? (o = Fe(o))
			: ((i = Ce(t) ? Xt : me.current),
			  (r = t.contextTypes),
			  (o = (r = r != null) ? $n(e, i) : Lt)),
		(t = new t(n, o)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = to),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = i),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		t
	);
}
function Ka(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == 'function' &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && to.enqueueReplaceState(t, t.state, null);
}
function Ls(e, t, n, r) {
	var i = e.stateNode;
	(i.props = n), (i.state = e.memoizedState), (i.refs = rd), jl(e);
	var o = t.contextType;
	typeof o == 'object' && o !== null
		? (i.context = Fe(o))
		: ((o = Ce(t) ? Xt : me.current), (i.context = $n(e, o))),
		(i.state = e.memoizedState),
		(o = t.getDerivedStateFromProps),
		typeof o == 'function' && (Ns(e, t, o, n), (i.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof i.getSnapshotBeforeUpdate == 'function' ||
			(typeof i.UNSAFE_componentWillMount != 'function' &&
				typeof i.componentWillMount != 'function') ||
			((t = i.state),
			typeof i.componentWillMount == 'function' && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == 'function' &&
				i.UNSAFE_componentWillMount(),
			t !== i.state && to.enqueueReplaceState(i, i.state, null),
			zi(e, n, i, r),
			(i.state = e.memoizedState)),
		typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Gn(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(k(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(k(147, e));
			var i = r,
				o = '' + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == 'function' &&
				t.ref._stringRef === o
				? t.ref
				: ((t = function (s) {
						var l = i.refs;
						l === rd && (l = i.refs = {}),
							s === null ? delete l[o] : (l[o] = s);
				  }),
				  (t._stringRef = o),
				  t);
		}
		if (typeof e != 'string') throw Error(k(284));
		if (!n._owner) throw Error(k(290, e));
	}
	return e;
}
function ei(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			k(
				31,
				e === '[object Object]'
					? 'object with keys {' + Object.keys(t).join(', ') + '}'
					: e
			)
		))
	);
}
function Qa(e) {
	var t = e._init;
	return t(e._payload);
}
function od(e) {
	function t(h, f) {
		if (e) {
			var v = h.deletions;
			v === null ? ((h.deletions = [f]), (h.flags |= 16)) : v.push(f);
		}
	}
	function n(h, f) {
		if (!e) return null;
		for (; f !== null; ) t(h, f), (f = f.sibling);
		return null;
	}
	function r(h, f) {
		for (h = new Map(); f !== null; )
			f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
		return h;
	}
	function i(h, f) {
		return (h = $t(h, f)), (h.index = 0), (h.sibling = null), h;
	}
	function o(h, f, v) {
		return (
			(h.index = v),
			e
				? ((v = h.alternate),
				  v !== null
						? ((v = v.index), v < f ? ((h.flags |= 2), f) : v)
						: ((h.flags |= 2), f))
				: ((h.flags |= 1048576), f)
		);
	}
	function s(h) {
		return e && h.alternate === null && (h.flags |= 2), h;
	}
	function l(h, f, v, w) {
		return f === null || f.tag !== 6
			? ((f = Wo(v, h.mode, w)), (f.return = h), f)
			: ((f = i(f, v)), (f.return = h), f);
	}
	function a(h, f, v, w) {
		var x = v.type;
		return x === hn
			? c(h, f, v.props.children, w, v.key)
			: f !== null &&
			  (f.elementType === x ||
					(typeof x == 'object' &&
						x !== null &&
						x.$$typeof === mt &&
						Qa(x) === f.type))
			? ((w = i(f, v.props)), (w.ref = Gn(h, f, v)), (w.return = h), w)
			: ((w = Si(v.type, v.key, v.props, null, h.mode, w)),
			  (w.ref = Gn(h, f, v)),
			  (w.return = h),
			  w);
	}
	function u(h, f, v, w) {
		return f === null ||
			f.tag !== 4 ||
			f.stateNode.containerInfo !== v.containerInfo ||
			f.stateNode.implementation !== v.implementation
			? ((f = Ko(v, h.mode, w)), (f.return = h), f)
			: ((f = i(f, v.children || [])), (f.return = h), f);
	}
	function c(h, f, v, w, x) {
		return f === null || f.tag !== 7
			? ((f = qt(v, h.mode, w, x)), (f.return = h), f)
			: ((f = i(f, v)), (f.return = h), f);
	}
	function d(h, f, v) {
		if ((typeof f == 'string' && f !== '') || typeof f == 'number')
			return (f = Wo('' + f, h.mode, v)), (f.return = h), f;
		if (typeof f == 'object' && f !== null) {
			switch (f.$$typeof) {
				case Hr:
					return (
						(v = Si(f.type, f.key, f.props, null, h.mode, v)),
						(v.ref = Gn(h, null, f)),
						(v.return = h),
						v
					);
				case fn:
					return (f = Ko(f, h.mode, v)), (f.return = h), f;
				case mt:
					var w = f._init;
					return d(h, w(f._payload), v);
			}
			if (Zn(f) || Hn(f))
				return (f = qt(f, h.mode, v, null)), (f.return = h), f;
			ei(h, f);
		}
		return null;
	}
	function p(h, f, v, w) {
		var x = f !== null ? f.key : null;
		if ((typeof v == 'string' && v !== '') || typeof v == 'number')
			return x !== null ? null : l(h, f, '' + v, w);
		if (typeof v == 'object' && v !== null) {
			switch (v.$$typeof) {
				case Hr:
					return v.key === x ? a(h, f, v, w) : null;
				case fn:
					return v.key === x ? u(h, f, v, w) : null;
				case mt:
					return (x = v._init), p(h, f, x(v._payload), w);
			}
			if (Zn(v) || Hn(v)) return x !== null ? null : c(h, f, v, w, null);
			ei(h, v);
		}
		return null;
	}
	function g(h, f, v, w, x) {
		if ((typeof w == 'string' && w !== '') || typeof w == 'number')
			return (h = h.get(v) || null), l(f, h, '' + w, x);
		if (typeof w == 'object' && w !== null) {
			switch (w.$$typeof) {
				case Hr:
					return (h = h.get(w.key === null ? v : w.key) || null), a(f, h, w, x);
				case fn:
					return (h = h.get(w.key === null ? v : w.key) || null), u(f, h, w, x);
				case mt:
					var j = w._init;
					return g(h, f, v, j(w._payload), x);
			}
			if (Zn(w) || Hn(w)) return (h = h.get(v) || null), c(f, h, w, x, null);
			ei(f, w);
		}
		return null;
	}
	function m(h, f, v, w) {
		for (
			var x = null, j = null, $ = f, R = (f = 0), G = null;
			$ !== null && R < v.length;
			R++
		) {
			$.index > R ? ((G = $), ($ = null)) : (G = $.sibling);
			var A = p(h, $, v[R], w);
			if (A === null) {
				$ === null && ($ = G);
				break;
			}
			e && $ && A.alternate === null && t(h, $),
				(f = o(A, f, R)),
				j === null ? (x = A) : (j.sibling = A),
				(j = A),
				($ = G);
		}
		if (R === v.length) return n(h, $), Q && bt(h, R), x;
		if ($ === null) {
			for (; R < v.length; R++)
				($ = d(h, v[R], w)),
					$ !== null &&
						((f = o($, f, R)), j === null ? (x = $) : (j.sibling = $), (j = $));
			return Q && bt(h, R), x;
		}
		for ($ = r(h, $); R < v.length; R++)
			(G = g($, h, R, v[R], w)),
				G !== null &&
					(e && G.alternate !== null && $.delete(G.key === null ? R : G.key),
					(f = o(G, f, R)),
					j === null ? (x = G) : (j.sibling = G),
					(j = G));
		return (
			e &&
				$.forEach(function (X) {
					return t(h, X);
				}),
			Q && bt(h, R),
			x
		);
	}
	function y(h, f, v, w) {
		var x = Hn(v);
		if (typeof x != 'function') throw Error(k(150));
		if (((v = x.call(v)), v == null)) throw Error(k(151));
		for (
			var j = (x = null), $ = f, R = (f = 0), G = null, A = v.next();
			$ !== null && !A.done;
			R++, A = v.next()
		) {
			$.index > R ? ((G = $), ($ = null)) : (G = $.sibling);
			var X = p(h, $, A.value, w);
			if (X === null) {
				$ === null && ($ = G);
				break;
			}
			e && $ && X.alternate === null && t(h, $),
				(f = o(X, f, R)),
				j === null ? (x = X) : (j.sibling = X),
				(j = X),
				($ = G);
		}
		if (A.done) return n(h, $), Q && bt(h, R), x;
		if ($ === null) {
			for (; !A.done; R++, A = v.next())
				(A = d(h, A.value, w)),
					A !== null &&
						((f = o(A, f, R)), j === null ? (x = A) : (j.sibling = A), (j = A));
			return Q && bt(h, R), x;
		}
		for ($ = r(h, $); !A.done; R++, A = v.next())
			(A = g($, h, R, A.value, w)),
				A !== null &&
					(e && A.alternate !== null && $.delete(A.key === null ? R : A.key),
					(f = o(A, f, R)),
					j === null ? (x = A) : (j.sibling = A),
					(j = A));
		return (
			e &&
				$.forEach(function (Ut) {
					return t(h, Ut);
				}),
			Q && bt(h, R),
			x
		);
	}
	function S(h, f, v, w) {
		if (
			(typeof v == 'object' &&
				v !== null &&
				v.type === hn &&
				v.key === null &&
				(v = v.props.children),
			typeof v == 'object' && v !== null)
		) {
			switch (v.$$typeof) {
				case Hr:
					e: {
						for (var x = v.key, j = f; j !== null; ) {
							if (j.key === x) {
								if (((x = v.type), x === hn)) {
									if (j.tag === 7) {
										n(h, j.sibling),
											(f = i(j, v.props.children)),
											(f.return = h),
											(h = f);
										break e;
									}
								} else if (
									j.elementType === x ||
									(typeof x == 'object' &&
										x !== null &&
										x.$$typeof === mt &&
										Qa(x) === j.type)
								) {
									n(h, j.sibling),
										(f = i(j, v.props)),
										(f.ref = Gn(h, j, v)),
										(f.return = h),
										(h = f);
									break e;
								}
								n(h, j);
								break;
							} else t(h, j);
							j = j.sibling;
						}
						v.type === hn
							? ((f = qt(v.props.children, h.mode, w, v.key)),
							  (f.return = h),
							  (h = f))
							: ((w = Si(v.type, v.key, v.props, null, h.mode, w)),
							  (w.ref = Gn(h, f, v)),
							  (w.return = h),
							  (h = w));
					}
					return s(h);
				case fn:
					e: {
						for (j = v.key; f !== null; ) {
							if (f.key === j)
								if (
									f.tag === 4 &&
									f.stateNode.containerInfo === v.containerInfo &&
									f.stateNode.implementation === v.implementation
								) {
									n(h, f.sibling),
										(f = i(f, v.children || [])),
										(f.return = h),
										(h = f);
									break e;
								} else {
									n(h, f);
									break;
								}
							else t(h, f);
							f = f.sibling;
						}
						(f = Ko(v, h.mode, w)), (f.return = h), (h = f);
					}
					return s(h);
				case mt:
					return (j = v._init), S(h, f, j(v._payload), w);
			}
			if (Zn(v)) return m(h, f, v, w);
			if (Hn(v)) return y(h, f, v, w);
			ei(h, v);
		}
		return (typeof v == 'string' && v !== '') || typeof v == 'number'
			? ((v = '' + v),
			  f !== null && f.tag === 6
					? (n(h, f.sibling), (f = i(f, v)), (f.return = h), (h = f))
					: (n(h, f), (f = Wo(v, h.mode, w)), (f.return = h), (h = f)),
			  s(h))
			: n(h, f);
	}
	return S;
}
var Ln = od(!0),
	sd = od(!1),
	Fr = {},
	et = At(Fr),
	Cr = At(Fr),
	Tr = At(Fr);
function Gt(e) {
	if (e === Fr) throw Error(k(174));
	return e;
}
function $l(e, t) {
	switch ((V(Tr, t), V(Cr, e), V(et, Fr), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : ds(null, '');
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = ds(t, e));
	}
	K(et), V(et, t);
}
function In() {
	K(et), K(Cr), K(Tr);
}
function ld(e) {
	Gt(Tr.current);
	var t = Gt(et.current),
		n = ds(t, e.type);
	t !== n && (V(Cr, e), V(et, n));
}
function Nl(e) {
	Cr.current === e && (K(et), K(Cr));
}
var J = At(0);
function Fi(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var Fo = [];
function Ll() {
	for (var e = 0; e < Fo.length; e++)
		Fo[e]._workInProgressVersionPrimary = null;
	Fo.length = 0;
}
var mi = ht.ReactCurrentDispatcher,
	Mo = ht.ReactCurrentBatchConfig,
	en = 0,
	q = null,
	ie = null,
	le = null,
	Mi = !1,
	ar = !1,
	Pr = 0,
	hp = 0;
function fe() {
	throw Error(k(321));
}
function Il(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!Ge(e[n], t[n])) return !1;
	return !0;
}
function Al(e, t, n, r, i, o) {
	if (
		((en = o),
		(q = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(mi.current = e === null || e.memoizedState === null ? yp : gp),
		(e = n(r, i)),
		ar)
	) {
		o = 0;
		do {
			if (((ar = !1), (Pr = 0), 25 <= o)) throw Error(k(301));
			(o += 1),
				(le = ie = null),
				(t.updateQueue = null),
				(mi.current = _p),
				(e = n(r, i));
		} while (ar);
	}
	if (
		((mi.current = bi),
		(t = ie !== null && ie.next !== null),
		(en = 0),
		(le = ie = q = null),
		(Mi = !1),
		t)
	)
		throw Error(k(300));
	return e;
}
function Dl() {
	var e = Pr !== 0;
	return (Pr = 0), e;
}
function Ye() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return le === null ? (q.memoizedState = le = e) : (le = le.next = e), le;
}
function Me() {
	if (ie === null) {
		var e = q.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = ie.next;
	var t = le === null ? q.memoizedState : le.next;
	if (t !== null) (le = t), (ie = e);
	else {
		if (e === null) throw Error(k(310));
		(ie = e),
			(e = {
				memoizedState: ie.memoizedState,
				baseState: ie.baseState,
				baseQueue: ie.baseQueue,
				queue: ie.queue,
				next: null,
			}),
			le === null ? (q.memoizedState = le = e) : (le = le.next = e);
	}
	return le;
}
function Or(e, t) {
	return typeof t == 'function' ? t(e) : t;
}
function bo(e) {
	var t = Me(),
		n = t.queue;
	if (n === null) throw Error(k(311));
	n.lastRenderedReducer = e;
	var r = ie,
		i = r.baseQueue,
		o = n.pending;
	if (o !== null) {
		if (i !== null) {
			var s = i.next;
			(i.next = o.next), (o.next = s);
		}
		(r.baseQueue = i = o), (n.pending = null);
	}
	if (i !== null) {
		(o = i.next), (r = r.baseState);
		var l = (s = null),
			a = null,
			u = o;
		do {
			var c = u.lane;
			if ((en & c) === c)
				a !== null &&
					(a = a.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action));
			else {
				var d = {
					lane: c,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				};
				a === null ? ((l = a = d), (s = r)) : (a = a.next = d),
					(q.lanes |= c),
					(tn |= c);
			}
			u = u.next;
		} while (u !== null && u !== o);
		a === null ? (s = r) : (a.next = l),
			Ge(r, t.memoizedState) || (Ee = !0),
			(t.memoizedState = r),
			(t.baseState = s),
			(t.baseQueue = a),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		i = e;
		do (o = i.lane), (q.lanes |= o), (tn |= o), (i = i.next);
		while (i !== e);
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function Bo(e) {
	var t = Me(),
		n = t.queue;
	if (n === null) throw Error(k(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		i = n.pending,
		o = t.memoizedState;
	if (i !== null) {
		n.pending = null;
		var s = (i = i.next);
		do (o = e(o, s.action)), (s = s.next);
		while (s !== i);
		Ge(o, t.memoizedState) || (Ee = !0),
			(t.memoizedState = o),
			t.baseQueue === null && (t.baseState = o),
			(n.lastRenderedState = o);
	}
	return [o, r];
}
function ad() {}
function ud(e, t) {
	var n = q,
		r = Me(),
		i = t(),
		o = !Ge(r.memoizedState, i);
	if (
		(o && ((r.memoizedState = i), (Ee = !0)),
		(r = r.queue),
		Ul(fd.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || o || (le !== null && le.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Rr(9, dd.bind(null, n, r, i, t), void 0, null),
			ae === null)
		)
			throw Error(k(349));
		en & 30 || cd(n, t, i);
	}
	return i;
}
function cd(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = q.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (q.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function dd(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), hd(t) && pd(e);
}
function fd(e, t, n) {
	return n(function () {
		hd(t) && pd(e);
	});
}
function hd(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Ge(e, n);
	} catch {
		return !0;
	}
}
function pd(e) {
	var t = dt(e, 1);
	t !== null && Qe(t, e, 1, -1);
}
function Ga(e) {
	var t = Ye();
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Or,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = mp.bind(null, q, e)),
		[t.memoizedState, e]
	);
}
function Rr(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = q.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (q.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function vd() {
	return Me().memoizedState;
}
function yi(e, t, n, r) {
	var i = Ye();
	(q.flags |= e),
		(i.memoizedState = Rr(1 | t, n, void 0, r === void 0 ? null : r));
}
function no(e, t, n, r) {
	var i = Me();
	r = r === void 0 ? null : r;
	var o = void 0;
	if (ie !== null) {
		var s = ie.memoizedState;
		if (((o = s.destroy), r !== null && Il(r, s.deps))) {
			i.memoizedState = Rr(t, n, o, r);
			return;
		}
	}
	(q.flags |= e), (i.memoizedState = Rr(1 | t, n, o, r));
}
function Ja(e, t) {
	return yi(8390656, 8, e, t);
}
function Ul(e, t) {
	return no(2048, 8, e, t);
}
function md(e, t) {
	return no(4, 2, e, t);
}
function yd(e, t) {
	return no(4, 4, e, t);
}
function gd(e, t) {
	if (typeof t == 'function')
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function _d(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), no(4, 4, gd.bind(null, t, e), n)
	);
}
function zl() {}
function wd(e, t) {
	var n = Me();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Il(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function Sd(e, t) {
	var n = Me();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Il(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function kd(e, t, n) {
	return en & 21
		? (Ge(n, t) || ((n = Cc()), (q.lanes |= n), (tn |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (Ee = !0)), (e.memoizedState = n));
}
function pp(e, t) {
	var n = b;
	(b = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = Mo.transition;
	Mo.transition = {};
	try {
		e(!1), t();
	} finally {
		(b = n), (Mo.transition = r);
	}
}
function Ed() {
	return Me().memoizedState;
}
function vp(e, t, n) {
	var r = jt(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		xd(e))
	)
		Cd(t, n);
	else if (((n = td(e, t, n, r)), n !== null)) {
		var i = ge();
		Qe(n, e, r, i), Td(n, t, r);
	}
}
function mp(e, t, n) {
	var r = jt(e),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (xd(e)) Cd(t, i);
	else {
		var o = e.alternate;
		if (
			e.lanes === 0 &&
			(o === null || o.lanes === 0) &&
			((o = t.lastRenderedReducer), o !== null)
		)
			try {
				var s = t.lastRenderedState,
					l = o(s, n);
				if (((i.hasEagerState = !0), (i.eagerState = l), Ge(l, s))) {
					var a = t.interleaved;
					a === null
						? ((i.next = i), Rl(t))
						: ((i.next = a.next), (a.next = i)),
						(t.interleaved = i);
					return;
				}
			} catch {
			} finally {
			}
		(n = td(e, t, i, r)),
			n !== null && ((i = ge()), Qe(n, e, r, i), Td(n, t, r));
	}
}
function xd(e) {
	var t = e.alternate;
	return e === q || (t !== null && t === q);
}
function Cd(e, t) {
	ar = Mi = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function Td(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), vl(e, n);
	}
}
var bi = {
		readContext: Fe,
		useCallback: fe,
		useContext: fe,
		useEffect: fe,
		useImperativeHandle: fe,
		useInsertionEffect: fe,
		useLayoutEffect: fe,
		useMemo: fe,
		useReducer: fe,
		useRef: fe,
		useState: fe,
		useDebugValue: fe,
		useDeferredValue: fe,
		useTransition: fe,
		useMutableSource: fe,
		useSyncExternalStore: fe,
		useId: fe,
		unstable_isNewReconciler: !1,
	},
	yp = {
		readContext: Fe,
		useCallback: function (e, t) {
			return (Ye().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: Fe,
		useEffect: Ja,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				yi(4194308, 4, gd.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return yi(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return yi(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = Ye();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var r = Ye();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = vp.bind(null, q, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = Ye();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: Ga,
		useDebugValue: zl,
		useDeferredValue: function (e) {
			return (Ye().memoizedState = e);
		},
		useTransition: function () {
			var e = Ga(!1),
				t = e[0];
			return (e = pp.bind(null, e[1])), (Ye().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = q,
				i = Ye();
			if (Q) {
				if (n === void 0) throw Error(k(407));
				n = n();
			} else {
				if (((n = t()), ae === null)) throw Error(k(349));
				en & 30 || cd(r, t, n);
			}
			i.memoizedState = n;
			var o = { value: n, getSnapshot: t };
			return (
				(i.queue = o),
				Ja(fd.bind(null, r, o, e), [e]),
				(r.flags |= 2048),
				Rr(9, dd.bind(null, r, o, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = Ye(),
				t = ae.identifierPrefix;
			if (Q) {
				var n = lt,
					r = st;
				(n = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = Pr++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':');
			} else (n = hp++), (t = ':' + t + 'r' + n.toString(32) + ':');
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	gp = {
		readContext: Fe,
		useCallback: wd,
		useContext: Fe,
		useEffect: Ul,
		useImperativeHandle: _d,
		useInsertionEffect: md,
		useLayoutEffect: yd,
		useMemo: Sd,
		useReducer: bo,
		useRef: vd,
		useState: function () {
			return bo(Or);
		},
		useDebugValue: zl,
		useDeferredValue: function (e) {
			var t = Me();
			return kd(t, ie.memoizedState, e);
		},
		useTransition: function () {
			var e = bo(Or)[0],
				t = Me().memoizedState;
			return [e, t];
		},
		useMutableSource: ad,
		useSyncExternalStore: ud,
		useId: Ed,
		unstable_isNewReconciler: !1,
	},
	_p = {
		readContext: Fe,
		useCallback: wd,
		useContext: Fe,
		useEffect: Ul,
		useImperativeHandle: _d,
		useInsertionEffect: md,
		useLayoutEffect: yd,
		useMemo: Sd,
		useReducer: Bo,
		useRef: vd,
		useState: function () {
			return Bo(Or);
		},
		useDebugValue: zl,
		useDeferredValue: function (e) {
			var t = Me();
			return ie === null ? (t.memoizedState = e) : kd(t, ie.memoizedState, e);
		},
		useTransition: function () {
			var e = Bo(Or)[0],
				t = Me().memoizedState;
			return [e, t];
		},
		useMutableSource: ad,
		useSyncExternalStore: ud,
		useId: Ed,
		unstable_isNewReconciler: !1,
	};
function An(e, t) {
	try {
		var n = '',
			r = t;
		do (n += Qf(r)), (r = r.return);
		while (r);
		var i = n;
	} catch (o) {
		i =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack;
	}
	return { value: e, source: t, stack: i, digest: null };
}
function Ho(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Is(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var wp = typeof WeakMap == 'function' ? WeakMap : Map;
function Pd(e, t, n) {
	(n = at(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			Hi || ((Hi = !0), (Vs = r)), Is(e, t);
		}),
		n
	);
}
function Od(e, t, n) {
	(n = at(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var i = t.value;
		(n.payload = function () {
			return r(i);
		}),
			(n.callback = function () {
				Is(e, t);
			});
	}
	var o = e.stateNode;
	return (
		o !== null &&
			typeof o.componentDidCatch == 'function' &&
			(n.callback = function () {
				Is(e, t),
					typeof r != 'function' &&
						(Rt === null ? (Rt = new Set([this])) : Rt.add(this));
				var s = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: s !== null ? s : '',
				});
			}),
		n
	);
}
function qa(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new wp();
		var i = new Set();
		r.set(t, i);
	} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
	i.has(n) || (i.add(n), (e = Ip.bind(null, e, t, n)), t.then(e, e));
}
function Ya(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function Xa(e, t, n, r, i) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = i), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = at(-1, 1)), (t.tag = 2), Ot(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var Sp = ht.ReactCurrentOwner,
	Ee = !1;
function ye(e, t, n, r) {
	t.child = e === null ? sd(t, null, n, r) : Ln(t, e.child, n, r);
}
function Za(e, t, n, r, i) {
	n = n.render;
	var o = t.ref;
	return (
		On(t, i),
		(r = Al(e, t, n, r, o, i)),
		(n = Dl()),
		e !== null && !Ee
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  ft(e, t, i))
			: (Q && n && El(t), (t.flags |= 1), ye(e, t, r, i), t.child)
	);
}
function eu(e, t, n, r, i) {
	if (e === null) {
		var o = n.type;
		return typeof o == 'function' &&
			!Kl(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = o), Rd(e, t, o, r, i))
			: ((e = Si(n.type, null, r, t, t.mode, i)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((o = e.child), !(e.lanes & i))) {
		var s = o.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : Sr), n(s, r) && e.ref === t.ref)
		)
			return ft(e, t, i);
	}
	return (
		(t.flags |= 1),
		(e = $t(o, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function Rd(e, t, n, r, i) {
	if (e !== null) {
		var o = e.memoizedProps;
		if (Sr(o, r) && e.ref === t.ref)
			if (((Ee = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
				e.flags & 131072 && (Ee = !0);
			else return (t.lanes = e.lanes), ft(e, t, i);
	}
	return As(e, t, n, r, i);
}
function jd(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		o = e !== null ? e.memoizedState : null;
	if (r.mode === 'hidden')
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				V(En, Oe),
				(Oe |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = o !== null ? o.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					V(En, Oe),
					(Oe |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = o !== null ? o.baseLanes : n),
				V(En, Oe),
				(Oe |= r);
		}
	else
		o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
			V(En, Oe),
			(Oe |= r);
	return ye(e, t, i, n), t.child;
}
function $d(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function As(e, t, n, r, i) {
	var o = Ce(n) ? Xt : me.current;
	return (
		(o = $n(t, o)),
		On(t, i),
		(n = Al(e, t, n, r, o, i)),
		(r = Dl()),
		e !== null && !Ee
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  ft(e, t, i))
			: (Q && r && El(t), (t.flags |= 1), ye(e, t, n, i), t.child)
	);
}
function tu(e, t, n, r, i) {
	if (Ce(n)) {
		var o = !0;
		Li(t);
	} else o = !1;
	if ((On(t, i), t.stateNode === null))
		gi(e, t), id(t, n, r), Ls(t, n, r, i), (r = !0);
	else if (e === null) {
		var s = t.stateNode,
			l = t.memoizedProps;
		s.props = l;
		var a = s.context,
			u = n.contextType;
		typeof u == 'object' && u !== null
			? (u = Fe(u))
			: ((u = Ce(n) ? Xt : me.current), (u = $n(t, u)));
		var c = n.getDerivedStateFromProps,
			d =
				typeof c == 'function' ||
				typeof s.getSnapshotBeforeUpdate == 'function';
		d ||
			(typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof s.componentWillReceiveProps != 'function') ||
			((l !== r || a !== u) && Ka(t, s, r, u)),
			(yt = !1);
		var p = t.memoizedState;
		(s.state = p),
			zi(t, r, s, i),
			(a = t.memoizedState),
			l !== r || p !== a || xe.current || yt
				? (typeof c == 'function' && (Ns(t, n, c, r), (a = t.memoizedState)),
				  (l = yt || Wa(t, n, l, r, p, a, u))
						? (d ||
								(typeof s.UNSAFE_componentWillMount != 'function' &&
									typeof s.componentWillMount != 'function') ||
								(typeof s.componentWillMount == 'function' &&
									s.componentWillMount(),
								typeof s.UNSAFE_componentWillMount == 'function' &&
									s.UNSAFE_componentWillMount()),
						  typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
						: (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = a)),
				  (s.props = r),
				  (s.state = a),
				  (s.context = u),
				  (r = l))
				: (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
				  (r = !1));
	} else {
		(s = t.stateNode),
			nd(e, t),
			(l = t.memoizedProps),
			(u = t.type === t.elementType ? l : Be(t.type, l)),
			(s.props = u),
			(d = t.pendingProps),
			(p = s.context),
			(a = n.contextType),
			typeof a == 'object' && a !== null
				? (a = Fe(a))
				: ((a = Ce(n) ? Xt : me.current), (a = $n(t, a)));
		var g = n.getDerivedStateFromProps;
		(c =
			typeof g == 'function' ||
			typeof s.getSnapshotBeforeUpdate == 'function') ||
			(typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof s.componentWillReceiveProps != 'function') ||
			((l !== d || p !== a) && Ka(t, s, r, a)),
			(yt = !1),
			(p = t.memoizedState),
			(s.state = p),
			zi(t, r, s, i);
		var m = t.memoizedState;
		l !== d || p !== m || xe.current || yt
			? (typeof g == 'function' && (Ns(t, n, g, r), (m = t.memoizedState)),
			  (u = yt || Wa(t, n, u, r, p, m, a) || !1)
					? (c ||
							(typeof s.UNSAFE_componentWillUpdate != 'function' &&
								typeof s.componentWillUpdate != 'function') ||
							(typeof s.componentWillUpdate == 'function' &&
								s.componentWillUpdate(r, m, a),
							typeof s.UNSAFE_componentWillUpdate == 'function' &&
								s.UNSAFE_componentWillUpdate(r, m, a)),
					  typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof s.componentDidUpdate != 'function' ||
							(l === e.memoizedProps && p === e.memoizedState) ||
							(t.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate != 'function' ||
							(l === e.memoizedProps && p === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = m)),
			  (s.props = r),
			  (s.state = m),
			  (s.context = a),
			  (r = u))
			: (typeof s.componentDidUpdate != 'function' ||
					(l === e.memoizedProps && p === e.memoizedState) ||
					(t.flags |= 4),
			  typeof s.getSnapshotBeforeUpdate != 'function' ||
					(l === e.memoizedProps && p === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return Ds(e, t, n, r, o, i);
}
function Ds(e, t, n, r, i, o) {
	$d(e, t);
	var s = (t.flags & 128) !== 0;
	if (!r && !s) return i && Ma(t, n, !1), ft(e, t, o);
	(r = t.stateNode), (Sp.current = t);
	var l =
		s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && s
			? ((t.child = Ln(t, e.child, null, o)), (t.child = Ln(t, null, l, o)))
			: ye(e, t, l, o),
		(t.memoizedState = r.state),
		i && Ma(t, n, !0),
		t.child
	);
}
function Nd(e) {
	var t = e.stateNode;
	t.pendingContext
		? Fa(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && Fa(e, t.context, !1),
		$l(e, t.containerInfo);
}
function nu(e, t, n, r, i) {
	return Nn(), Cl(i), (t.flags |= 256), ye(e, t, n, r), t.child;
}
var Us = { dehydrated: null, treeContext: null, retryLane: 0 };
function zs(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function Ld(e, t, n) {
	var r = t.pendingProps,
		i = J.current,
		o = !1,
		s = (t.flags & 128) !== 0,
		l;
	if (
		((l = s) ||
			(l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
		l
			? ((o = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (i |= 1),
		V(J, i & 1),
		e === null)
	)
		return (
			js(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === '$!'
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((s = r.children),
				  (e = r.fallback),
				  o
						? ((r = t.mode),
						  (o = t.child),
						  (s = { mode: 'hidden', children: s }),
						  !(r & 1) && o !== null
								? ((o.childLanes = 0), (o.pendingProps = s))
								: (o = oo(s, r, 0, null)),
						  (e = qt(e, r, n, null)),
						  (o.return = t),
						  (e.return = t),
						  (o.sibling = e),
						  (t.child = o),
						  (t.child.memoizedState = zs(n)),
						  (t.memoizedState = Us),
						  e)
						: Fl(t, s))
		);
	if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
		return kp(e, t, s, r, l, i, n);
	if (o) {
		(o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
		var a = { mode: 'hidden', children: r.children };
		return (
			!(s & 1) && t.child !== i
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = a),
				  (t.deletions = null))
				: ((r = $t(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			l !== null ? (o = $t(l, o)) : ((o = qt(o, s, n, null)), (o.flags |= 2)),
			(o.return = t),
			(r.return = t),
			(r.sibling = o),
			(t.child = r),
			(r = o),
			(o = t.child),
			(s = e.child.memoizedState),
			(s =
				s === null
					? zs(n)
					: {
							baseLanes: s.baseLanes | n,
							cachePool: null,
							transitions: s.transitions,
					  }),
			(o.memoizedState = s),
			(o.childLanes = e.childLanes & ~n),
			(t.memoizedState = Us),
			r
		);
	}
	return (
		(o = e.child),
		(e = o.sibling),
		(r = $t(o, { mode: 'visible', children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function Fl(e, t) {
	return (
		(t = oo({ mode: 'visible', children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function ti(e, t, n, r) {
	return (
		r !== null && Cl(r),
		Ln(t, e.child, null, n),
		(e = Fl(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function kp(e, t, n, r, i, o, s) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = Ho(Error(k(422)))), ti(e, t, s, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((o = r.fallback),
			  (i = t.mode),
			  (r = oo({ mode: 'visible', children: r.children }, i, 0, null)),
			  (o = qt(o, i, s, null)),
			  (o.flags |= 2),
			  (r.return = t),
			  (o.return = t),
			  (r.sibling = o),
			  (t.child = r),
			  t.mode & 1 && Ln(t, e.child, null, s),
			  (t.child.memoizedState = zs(s)),
			  (t.memoizedState = Us),
			  o);
	if (!(t.mode & 1)) return ti(e, t, s, null);
	if (i.data === '$!') {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
		return (r = l), (o = Error(k(419))), (r = Ho(o, r, void 0)), ti(e, t, s, r);
	}
	if (((l = (s & e.childLanes) !== 0), Ee || l)) {
		if (((r = ae), r !== null)) {
			switch (s & -s) {
				case 4:
					i = 2;
					break;
				case 16:
					i = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32;
					break;
				case 536870912:
					i = 268435456;
					break;
				default:
					i = 0;
			}
			(i = i & (r.suspendedLanes | s) ? 0 : i),
				i !== 0 &&
					i !== o.retryLane &&
					((o.retryLane = i), dt(e, i), Qe(r, e, i, -1));
		}
		return Wl(), (r = Ho(Error(k(421)))), ti(e, t, s, r);
	}
	return i.data === '$?'
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = Ap.bind(null, e)),
		  (i._reactRetry = t),
		  null)
		: ((e = o.treeContext),
		  (Re = Pt(i.nextSibling)),
		  (je = t),
		  (Q = !0),
		  (We = null),
		  e !== null &&
				((Ae[De++] = st),
				(Ae[De++] = lt),
				(Ae[De++] = Zt),
				(st = e.id),
				(lt = e.overflow),
				(Zt = t)),
		  (t = Fl(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function ru(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), $s(e.return, t, n);
}
function Vo(e, t, n, r, i) {
	var o = e.memoizedState;
	o === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
		  })
		: ((o.isBackwards = t),
		  (o.rendering = null),
		  (o.renderingStartTime = 0),
		  (o.last = r),
		  (o.tail = n),
		  (o.tailMode = i));
}
function Id(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		o = r.tail;
	if ((ye(e, t, r.children, n), (r = J.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && ru(e, n, t);
				else if (e.tag === 19) ru(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((V(J, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (i) {
			case 'forwards':
				for (n = t.child, i = null; n !== null; )
					(e = n.alternate),
						e !== null && Fi(e) === null && (i = n),
						(n = n.sibling);
				(n = i),
					n === null
						? ((i = t.child), (t.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					Vo(t, !1, i, n, o);
				break;
			case 'backwards':
				for (n = null, i = t.child, t.child = null; i !== null; ) {
					if (((e = i.alternate), e !== null && Fi(e) === null)) {
						t.child = i;
						break;
					}
					(e = i.sibling), (i.sibling = n), (n = i), (i = e);
				}
				Vo(t, !0, n, null, o);
				break;
			case 'together':
				Vo(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function gi(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ft(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(tn |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(k(153));
	if (t.child !== null) {
		for (
			e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = $t(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function Ep(e, t, n) {
	switch (t.tag) {
		case 3:
			Nd(t), Nn();
			break;
		case 5:
			ld(t);
			break;
		case 1:
			Ce(t.type) && Li(t);
			break;
		case 4:
			$l(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			V(Di, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (V(J, J.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? Ld(e, t, n)
					: (V(J, J.current & 1),
					  (e = ft(e, t, n)),
					  e !== null ? e.sibling : null);
			V(J, J.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Id(e, t, n);
				t.flags |= 128;
			}
			if (
				((i = t.memoizedState),
				i !== null &&
					((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				V(J, J.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), jd(e, t, n);
	}
	return ft(e, t, n);
}
var Ad, Fs, Dd, Ud;
Ad = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
Fs = function () {};
Dd = function (e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		(e = t.stateNode), Gt(et.current);
		var o = null;
		switch (n) {
			case 'input':
				(i = ls(e, i)), (r = ls(e, r)), (o = []);
				break;
			case 'select':
				(i = Y({}, i, { value: void 0 })),
					(r = Y({}, r, { value: void 0 })),
					(o = []);
				break;
			case 'textarea':
				(i = cs(e, i)), (r = cs(e, r)), (o = []);
				break;
			default:
				typeof i.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(e.onclick = $i);
		}
		fs(n, r);
		var s;
		n = null;
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === 'style') {
					var l = i[u];
					for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
				} else
					u !== 'dangerouslySetInnerHTML' &&
						u !== 'children' &&
						u !== 'suppressContentEditableWarning' &&
						u !== 'suppressHydrationWarning' &&
						u !== 'autoFocus' &&
						(pr.hasOwnProperty(u)
							? o || (o = [])
							: (o = o || []).push(u, null));
		for (u in r) {
			var a = r[u];
			if (
				((l = i != null ? i[u] : void 0),
				r.hasOwnProperty(u) && a !== l && (a != null || l != null))
			)
				if (u === 'style')
					if (l) {
						for (s in l)
							!l.hasOwnProperty(s) ||
								(a && a.hasOwnProperty(s)) ||
								(n || (n = {}), (n[s] = ''));
						for (s in a)
							a.hasOwnProperty(s) &&
								l[s] !== a[s] &&
								(n || (n = {}), (n[s] = a[s]));
					} else n || (o || (o = []), o.push(u, n)), (n = a);
				else
					u === 'dangerouslySetInnerHTML'
						? ((a = a ? a.__html : void 0),
						  (l = l ? l.__html : void 0),
						  a != null && l !== a && (o = o || []).push(u, a))
						: u === 'children'
						? (typeof a != 'string' && typeof a != 'number') ||
						  (o = o || []).push(u, '' + a)
						: u !== 'suppressContentEditableWarning' &&
						  u !== 'suppressHydrationWarning' &&
						  (pr.hasOwnProperty(u)
								? (a != null && u === 'onScroll' && W('scroll', e),
								  o || l === a || (o = []))
								: (o = o || []).push(u, a));
		}
		n && (o = o || []).push('style', n);
		var u = o;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
Ud = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function Jn(e, t) {
	if (!Q)
		switch (e.tailMode) {
			case 'hidden':
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case 'collapsed':
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function he(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = e),
				(i = i.sibling);
	else
		for (i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = e),
				(i = i.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function xp(e, t, n) {
	var r = t.pendingProps;
	switch ((xl(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return he(t), null;
		case 1:
			return Ce(t.type) && Ni(), he(t), null;
		case 3:
			return (
				(r = t.stateNode),
				In(),
				K(xe),
				K(me),
				Ll(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(Zr(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), We !== null && (Qs(We), (We = null)))),
				Fs(e, t),
				he(t),
				null
			);
		case 5:
			Nl(t);
			var i = Gt(Tr.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				Dd(e, t, n, r, i),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(k(166));
					return he(t), null;
				}
				if (((e = Gt(et.current)), Zr(t))) {
					(r = t.stateNode), (n = t.type);
					var o = t.memoizedProps;
					switch (((r[Xe] = t), (r[xr] = o), (e = (t.mode & 1) !== 0), n)) {
						case 'dialog':
							W('cancel', r), W('close', r);
							break;
						case 'iframe':
						case 'object':
						case 'embed':
							W('load', r);
							break;
						case 'video':
						case 'audio':
							for (i = 0; i < tr.length; i++) W(tr[i], r);
							break;
						case 'source':
							W('error', r);
							break;
						case 'img':
						case 'image':
						case 'link':
							W('error', r), W('load', r);
							break;
						case 'details':
							W('toggle', r);
							break;
						case 'input':
							fa(r, o), W('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!o.multiple }),
								W('invalid', r);
							break;
						case 'textarea':
							pa(r, o), W('invalid', r);
					}
					fs(n, o), (i = null);
					for (var s in o)
						if (o.hasOwnProperty(s)) {
							var l = o[s];
							s === 'children'
								? typeof l == 'string'
									? r.textContent !== l &&
									  (o.suppressHydrationWarning !== !0 &&
											Xr(r.textContent, l, e),
									  (i = ['children', l]))
									: typeof l == 'number' &&
									  r.textContent !== '' + l &&
									  (o.suppressHydrationWarning !== !0 &&
											Xr(r.textContent, l, e),
									  (i = ['children', '' + l]))
								: pr.hasOwnProperty(s) &&
								  l != null &&
								  s === 'onScroll' &&
								  W('scroll', r);
						}
					switch (n) {
						case 'input':
							Vr(r), ha(r, o, !0);
							break;
						case 'textarea':
							Vr(r), va(r);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof o.onClick == 'function' && (r.onclick = $i);
					}
					(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(s = i.nodeType === 9 ? i : i.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = cc(n)),
						e === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((e = s.createElement('div')),
								  (e.innerHTML = '<script></script>'),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == 'string'
								? (e = s.createElement(n, { is: r.is }))
								: ((e = s.createElement(n)),
								  n === 'select' &&
										((s = e),
										r.multiple
											? (s.multiple = !0)
											: r.size && (s.size = r.size)))
							: (e = s.createElementNS(e, n)),
						(e[Xe] = t),
						(e[xr] = r),
						Ad(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((s = hs(n, r)), n)) {
							case 'dialog':
								W('cancel', e), W('close', e), (i = r);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								W('load', e), (i = r);
								break;
							case 'video':
							case 'audio':
								for (i = 0; i < tr.length; i++) W(tr[i], e);
								i = r;
								break;
							case 'source':
								W('error', e), (i = r);
								break;
							case 'img':
							case 'image':
							case 'link':
								W('error', e), W('load', e), (i = r);
								break;
							case 'details':
								W('toggle', e), (i = r);
								break;
							case 'input':
								fa(e, r), (i = ls(e, r)), W('invalid', e);
								break;
							case 'option':
								i = r;
								break;
							case 'select':
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(i = Y({}, r, { value: void 0 })),
									W('invalid', e);
								break;
							case 'textarea':
								pa(e, r), (i = cs(e, r)), W('invalid', e);
								break;
							default:
								i = r;
						}
						fs(n, i), (l = i);
						for (o in l)
							if (l.hasOwnProperty(o)) {
								var a = l[o];
								o === 'style'
									? hc(e, a)
									: o === 'dangerouslySetInnerHTML'
									? ((a = a ? a.__html : void 0), a != null && dc(e, a))
									: o === 'children'
									? typeof a == 'string'
										? (n !== 'textarea' || a !== '') && vr(e, a)
										: typeof a == 'number' && vr(e, '' + a)
									: o !== 'suppressContentEditableWarning' &&
									  o !== 'suppressHydrationWarning' &&
									  o !== 'autoFocus' &&
									  (pr.hasOwnProperty(o)
											? a != null && o === 'onScroll' && W('scroll', e)
											: a != null && ul(e, o, a, s));
							}
						switch (n) {
							case 'input':
								Vr(e), ha(e, r, !1);
								break;
							case 'textarea':
								Vr(e), va(e);
								break;
							case 'option':
								r.value != null && e.setAttribute('value', '' + Nt(r.value));
								break;
							case 'select':
								(e.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? xn(e, !!r.multiple, o, !1)
										: r.defaultValue != null &&
										  xn(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof i.onClick == 'function' && (e.onclick = $i);
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus;
								break e;
							case 'img':
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return he(t), null;
		case 6:
			if (e && t.stateNode != null) Ud(e, t, e.memoizedProps, r);
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(k(166));
				if (((n = Gt(Tr.current)), Gt(et.current), Zr(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[Xe] = t),
						(o = r.nodeValue !== n) && ((e = je), e !== null))
					)
						switch (e.tag) {
							case 3:
								Xr(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									Xr(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					o && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[Xe] = t),
						(t.stateNode = r);
			}
			return he(t), null;
		case 13:
			if (
				(K(J),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (Q && Re !== null && t.mode & 1 && !(t.flags & 128))
					ed(), Nn(), (t.flags |= 98560), (o = !1);
				else if (((o = Zr(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!o) throw Error(k(318));
						if (
							((o = t.memoizedState),
							(o = o !== null ? o.dehydrated : null),
							!o)
						)
							throw Error(k(317));
						o[Xe] = t;
					} else
						Nn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					he(t), (o = !1);
				} else We !== null && (Qs(We), (We = null)), (o = !0);
				if (!o) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || J.current & 1 ? oe === 0 && (oe = 3) : Wl())),
				  t.updateQueue !== null && (t.flags |= 4),
				  he(t),
				  null);
		case 4:
			return (
				In(), Fs(e, t), e === null && kr(t.stateNode.containerInfo), he(t), null
			);
		case 10:
			return Ol(t.type._context), he(t), null;
		case 17:
			return Ce(t.type) && Ni(), he(t), null;
		case 19:
			if ((K(J), (o = t.memoizedState), o === null)) return he(t), null;
			if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
				if (r) Jn(o, !1);
				else {
					if (oe !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((s = Fi(e)), s !== null)) {
								for (
									t.flags |= 128,
										Jn(o, !1),
										r = s.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(o = n),
										(e = r),
										(o.flags &= 14680066),
										(s = o.alternate),
										s === null
											? ((o.childLanes = 0),
											  (o.lanes = e),
											  (o.child = null),
											  (o.subtreeFlags = 0),
											  (o.memoizedProps = null),
											  (o.memoizedState = null),
											  (o.updateQueue = null),
											  (o.dependencies = null),
											  (o.stateNode = null))
											: ((o.childLanes = s.childLanes),
											  (o.lanes = s.lanes),
											  (o.child = s.child),
											  (o.subtreeFlags = 0),
											  (o.deletions = null),
											  (o.memoizedProps = s.memoizedProps),
											  (o.memoizedState = s.memoizedState),
											  (o.updateQueue = s.updateQueue),
											  (o.type = s.type),
											  (e = s.dependencies),
											  (o.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
														  })),
										(n = n.sibling);
								return V(J, (J.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					o.tail !== null &&
						te() > Dn &&
						((t.flags |= 128), (r = !0), Jn(o, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = Fi(s)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							Jn(o, !0),
							o.tail === null && o.tailMode === 'hidden' && !s.alternate && !Q)
						)
							return he(t), null;
					} else
						2 * te() - o.renderingStartTime > Dn &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), Jn(o, !1), (t.lanes = 4194304));
				o.isBackwards
					? ((s.sibling = t.child), (t.child = s))
					: ((n = o.last),
					  n !== null ? (n.sibling = s) : (t.child = s),
					  (o.last = s));
			}
			return o.tail !== null
				? ((t = o.tail),
				  (o.rendering = t),
				  (o.tail = t.sibling),
				  (o.renderingStartTime = te()),
				  (t.sibling = null),
				  (n = J.current),
				  V(J, r ? (n & 1) | 2 : n & 1),
				  t)
				: (he(t), null);
		case 22:
		case 23:
			return (
				Vl(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? Oe & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: he(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(k(156, t.tag));
}
function Cp(e, t) {
	switch ((xl(t), t.tag)) {
		case 1:
			return (
				Ce(t.type) && Ni(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				In(),
				K(xe),
				K(me),
				Ll(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return Nl(t), null;
		case 13:
			if ((K(J), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(k(340));
				Nn();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return K(J), null;
		case 4:
			return In(), null;
		case 10:
			return Ol(t.type._context), null;
		case 22:
		case 23:
			return Vl(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var ni = !1,
	ve = !1,
	Tp = typeof WeakSet == 'function' ? WeakSet : Set,
	P = null;
function kn(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null);
			} catch (r) {
				ee(e, t, r);
			}
		else n.current = null;
}
function Ms(e, t, n) {
	try {
		n();
	} catch (r) {
		ee(e, t, r);
	}
}
var iu = !1;
function Pp(e, t) {
	if (((Es = Oi), (e = bc()), kl(e))) {
		if ('selectionStart' in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset,
						o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break e;
					}
					var s = 0,
						l = -1,
						a = -1,
						u = 0,
						c = 0,
						d = e,
						p = null;
					t: for (;;) {
						for (
							var g;
							d !== n || (i !== 0 && d.nodeType !== 3) || (l = s + i),
								d !== o || (r !== 0 && d.nodeType !== 3) || (a = s + r),
								d.nodeType === 3 && (s += d.nodeValue.length),
								(g = d.firstChild) !== null;

						)
							(p = d), (d = g);
						for (;;) {
							if (d === e) break t;
							if (
								(p === n && ++u === i && (l = s),
								p === o && ++c === r && (a = s),
								(g = d.nextSibling) !== null)
							)
								break;
							(d = p), (p = d.parentNode);
						}
						d = g;
					}
					n = l === -1 || a === -1 ? null : { start: l, end: a };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (xs = { focusedElem: e, selectionRange: n }, Oi = !1, P = t; P !== null; )
		if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (P = e);
		else
			for (; P !== null; ) {
				t = P;
				try {
					var m = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (m !== null) {
									var y = m.memoizedProps,
										S = m.memoizedState,
										h = t.stateNode,
										f = h.getSnapshotBeforeUpdate(
											t.elementType === t.type ? y : Be(t.type, y),
											S
										);
									h.__reactInternalSnapshotBeforeUpdate = f;
								}
								break;
							case 3:
								var v = t.stateNode.containerInfo;
								v.nodeType === 1
									? (v.textContent = '')
									: v.nodeType === 9 &&
									  v.documentElement &&
									  v.removeChild(v.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(k(163));
						}
				} catch (w) {
					ee(t, t.return, w);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (P = e);
					break;
				}
				P = t.return;
			}
	return (m = iu), (iu = !1), m;
}
function ur(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next);
		do {
			if ((i.tag & e) === e) {
				var o = i.destroy;
				(i.destroy = void 0), o !== void 0 && Ms(t, n, o);
			}
			i = i.next;
		} while (i !== r);
	}
}
function ro(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function bs(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == 'function' ? t(e) : (t.current = e);
	}
}
function zd(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), zd(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[Xe], delete t[xr], delete t[Ps], delete t[up], delete t[cp])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function Fd(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ou(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Fd(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function Bs(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = $i));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Bs(e, t, n), e = e.sibling; e !== null; ) Bs(e, t, n), (e = e.sibling);
}
function Hs(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Hs(e, t, n), e = e.sibling; e !== null; ) Hs(e, t, n), (e = e.sibling);
}
var ue = null,
	He = !1;
function pt(e, t, n) {
	for (n = n.child; n !== null; ) Md(e, t, n), (n = n.sibling);
}
function Md(e, t, n) {
	if (Ze && typeof Ze.onCommitFiberUnmount == 'function')
		try {
			Ze.onCommitFiberUnmount(Ji, n);
		} catch {}
	switch (n.tag) {
		case 5:
			ve || kn(n, t);
		case 6:
			var r = ue,
				i = He;
			(ue = null),
				pt(e, t, n),
				(ue = r),
				(He = i),
				ue !== null &&
					(He
						? ((e = ue),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: ue.removeChild(n.stateNode));
			break;
		case 18:
			ue !== null &&
				(He
					? ((e = ue),
					  (n = n.stateNode),
					  e.nodeType === 8
							? Uo(e.parentNode, n)
							: e.nodeType === 1 && Uo(e, n),
					  _r(e))
					: Uo(ue, n.stateNode));
			break;
		case 4:
			(r = ue),
				(i = He),
				(ue = n.stateNode.containerInfo),
				(He = !0),
				pt(e, t, n),
				(ue = r),
				(He = i);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!ve &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next;
				do {
					var o = i,
						s = o.destroy;
					(o = o.tag),
						s !== void 0 && (o & 2 || o & 4) && Ms(n, t, s),
						(i = i.next);
				} while (i !== r);
			}
			pt(e, t, n);
			break;
		case 1:
			if (
				!ve &&
				(kn(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == 'function')
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (l) {
					ee(n, t, l);
				}
			pt(e, t, n);
			break;
		case 21:
			pt(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((ve = (r = ve) || n.memoizedState !== null), pt(e, t, n), (ve = r))
				: pt(e, t, n);
			break;
		default:
			pt(e, t, n);
	}
}
function su(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new Tp()),
			t.forEach(function (r) {
				var i = Dp.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(i, i));
			});
	}
}
function be(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var o = e,
					s = t,
					l = s;
				e: for (; l !== null; ) {
					switch (l.tag) {
						case 5:
							(ue = l.stateNode), (He = !1);
							break e;
						case 3:
							(ue = l.stateNode.containerInfo), (He = !0);
							break e;
						case 4:
							(ue = l.stateNode.containerInfo), (He = !0);
							break e;
					}
					l = l.return;
				}
				if (ue === null) throw Error(k(160));
				Md(o, s, i), (ue = null), (He = !1);
				var a = i.alternate;
				a !== null && (a.return = null), (i.return = null);
			} catch (u) {
				ee(i, t, u);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) bd(t, e), (t = t.sibling);
}
function bd(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((be(t, e), Je(e), r & 4)) {
				try {
					ur(3, e, e.return), ro(3, e);
				} catch (y) {
					ee(e, e.return, y);
				}
				try {
					ur(5, e, e.return);
				} catch (y) {
					ee(e, e.return, y);
				}
			}
			break;
		case 1:
			be(t, e), Je(e), r & 512 && n !== null && kn(n, n.return);
			break;
		case 5:
			if (
				(be(t, e),
				Je(e),
				r & 512 && n !== null && kn(n, n.return),
				e.flags & 32)
			) {
				var i = e.stateNode;
				try {
					vr(i, '');
				} catch (y) {
					ee(e, e.return, y);
				}
			}
			if (r & 4 && ((i = e.stateNode), i != null)) {
				var o = e.memoizedProps,
					s = n !== null ? n.memoizedProps : o,
					l = e.type,
					a = e.updateQueue;
				if (((e.updateQueue = null), a !== null))
					try {
						l === 'input' && o.type === 'radio' && o.name != null && ac(i, o),
							hs(l, s);
						var u = hs(l, o);
						for (s = 0; s < a.length; s += 2) {
							var c = a[s],
								d = a[s + 1];
							c === 'style'
								? hc(i, d)
								: c === 'dangerouslySetInnerHTML'
								? dc(i, d)
								: c === 'children'
								? vr(i, d)
								: ul(i, c, d, u);
						}
						switch (l) {
							case 'input':
								as(i, o);
								break;
							case 'textarea':
								uc(i, o);
								break;
							case 'select':
								var p = i._wrapperState.wasMultiple;
								i._wrapperState.wasMultiple = !!o.multiple;
								var g = o.value;
								g != null
									? xn(i, !!o.multiple, g, !1)
									: p !== !!o.multiple &&
									  (o.defaultValue != null
											? xn(i, !!o.multiple, o.defaultValue, !0)
											: xn(i, !!o.multiple, o.multiple ? [] : '', !1));
						}
						i[xr] = o;
					} catch (y) {
						ee(e, e.return, y);
					}
			}
			break;
		case 6:
			if ((be(t, e), Je(e), r & 4)) {
				if (e.stateNode === null) throw Error(k(162));
				(i = e.stateNode), (o = e.memoizedProps);
				try {
					i.nodeValue = o;
				} catch (y) {
					ee(e, e.return, y);
				}
			}
			break;
		case 3:
			if (
				(be(t, e), Je(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					_r(t.containerInfo);
				} catch (y) {
					ee(e, e.return, y);
				}
			break;
		case 4:
			be(t, e), Je(e);
			break;
		case 13:
			be(t, e),
				Je(e),
				(i = e.child),
				i.flags & 8192 &&
					((o = i.memoizedState !== null),
					(i.stateNode.isHidden = o),
					!o ||
						(i.alternate !== null && i.alternate.memoizedState !== null) ||
						(Bl = te())),
				r & 4 && su(e);
			break;
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((ve = (u = ve) || c), be(t, e), (ve = u)) : be(t, e),
				Je(e),
				r & 8192)
			) {
				if (
					((u = e.memoizedState !== null),
					(e.stateNode.isHidden = u) && !c && e.mode & 1)
				)
					for (P = e, c = e.child; c !== null; ) {
						for (d = P = c; P !== null; ) {
							switch (((p = P), (g = p.child), p.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									ur(4, p, p.return);
									break;
								case 1:
									kn(p, p.return);
									var m = p.stateNode;
									if (typeof m.componentWillUnmount == 'function') {
										(r = p), (n = p.return);
										try {
											(t = r),
												(m.props = t.memoizedProps),
												(m.state = t.memoizedState),
												m.componentWillUnmount();
										} catch (y) {
											ee(r, n, y);
										}
									}
									break;
								case 5:
									kn(p, p.return);
									break;
								case 22:
									if (p.memoizedState !== null) {
										au(d);
										continue;
									}
							}
							g !== null ? ((g.return = p), (P = g)) : au(d);
						}
						c = c.sibling;
					}
				e: for (c = null, d = e; ; ) {
					if (d.tag === 5) {
						if (c === null) {
							c = d;
							try {
								(i = d.stateNode),
									u
										? ((o = i.style),
										  typeof o.setProperty == 'function'
												? o.setProperty('display', 'none', 'important')
												: (o.display = 'none'))
										: ((l = d.stateNode),
										  (a = d.memoizedProps.style),
										  (s =
												a != null && a.hasOwnProperty('display')
													? a.display
													: null),
										  (l.style.display = fc('display', s)));
							} catch (y) {
								ee(e, e.return, y);
							}
						}
					} else if (d.tag === 6) {
						if (c === null)
							try {
								d.stateNode.nodeValue = u ? '' : d.memoizedProps;
							} catch (y) {
								ee(e, e.return, y);
							}
					} else if (
						((d.tag !== 22 && d.tag !== 23) ||
							d.memoizedState === null ||
							d === e) &&
						d.child !== null
					) {
						(d.child.return = d), (d = d.child);
						continue;
					}
					if (d === e) break e;
					for (; d.sibling === null; ) {
						if (d.return === null || d.return === e) break e;
						c === d && (c = null), (d = d.return);
					}
					c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
				}
			}
			break;
		case 19:
			be(t, e), Je(e), r & 4 && su(e);
			break;
		case 21:
			break;
		default:
			be(t, e), Je(e);
	}
}
function Je(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Fd(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(k(160));
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (vr(i, ''), (r.flags &= -33));
					var o = ou(e);
					Hs(e, o, i);
					break;
				case 3:
				case 4:
					var s = r.stateNode.containerInfo,
						l = ou(e);
					Bs(e, l, s);
					break;
				default:
					throw Error(k(161));
			}
		} catch (a) {
			ee(e, e.return, a);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function Op(e, t, n) {
	(P = e), Bd(e);
}
function Bd(e, t, n) {
	for (var r = (e.mode & 1) !== 0; P !== null; ) {
		var i = P,
			o = i.child;
		if (i.tag === 22 && r) {
			var s = i.memoizedState !== null || ni;
			if (!s) {
				var l = i.alternate,
					a = (l !== null && l.memoizedState !== null) || ve;
				l = ni;
				var u = ve;
				if (((ni = s), (ve = a) && !u))
					for (P = i; P !== null; )
						(s = P),
							(a = s.child),
							s.tag === 22 && s.memoizedState !== null
								? uu(i)
								: a !== null
								? ((a.return = s), (P = a))
								: uu(i);
				for (; o !== null; ) (P = o), Bd(o), (o = o.sibling);
				(P = i), (ni = l), (ve = u);
			}
			lu(e);
		} else
			i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (P = o)) : lu(e);
	}
}
function lu(e) {
	for (; P !== null; ) {
		var t = P;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							ve || ro(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !ve)
								if (n === null) r.componentDidMount();
								else {
									var i =
										t.elementType === t.type
											? n.memoizedProps
											: Be(t.type, n.memoizedProps);
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var o = t.updateQueue;
							o !== null && Va(t, o, r);
							break;
						case 3:
							var s = t.updateQueue;
							if (s !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								Va(t, s, n);
							}
							break;
						case 5:
							var l = t.stateNode;
							if (n === null && t.flags & 4) {
								n = l;
								var a = t.memoizedProps;
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										a.autoFocus && n.focus();
										break;
									case 'img':
										a.src && (n.src = a.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate;
								if (u !== null) {
									var c = u.memoizedState;
									if (c !== null) {
										var d = c.dehydrated;
										d !== null && _r(d);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(k(163));
					}
				ve || (t.flags & 512 && bs(t));
			} catch (p) {
				ee(t, t.return, p);
			}
		}
		if (t === e) {
			P = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (P = n);
			break;
		}
		P = t.return;
	}
}
function au(e) {
	for (; P !== null; ) {
		var t = P;
		if (t === e) {
			P = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (P = n);
			break;
		}
		P = t.return;
	}
}
function uu(e) {
	for (; P !== null; ) {
		var t = P;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						ro(4, t);
					} catch (a) {
						ee(t, n, a);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == 'function') {
						var i = t.return;
						try {
							r.componentDidMount();
						} catch (a) {
							ee(t, i, a);
						}
					}
					var o = t.return;
					try {
						bs(t);
					} catch (a) {
						ee(t, o, a);
					}
					break;
				case 5:
					var s = t.return;
					try {
						bs(t);
					} catch (a) {
						ee(t, s, a);
					}
			}
		} catch (a) {
			ee(t, t.return, a);
		}
		if (t === e) {
			P = null;
			break;
		}
		var l = t.sibling;
		if (l !== null) {
			(l.return = t.return), (P = l);
			break;
		}
		P = t.return;
	}
}
var Rp = Math.ceil,
	Bi = ht.ReactCurrentDispatcher,
	Ml = ht.ReactCurrentOwner,
	ze = ht.ReactCurrentBatchConfig,
	F = 0,
	ae = null,
	re = null,
	ce = 0,
	Oe = 0,
	En = At(0),
	oe = 0,
	jr = null,
	tn = 0,
	io = 0,
	bl = 0,
	cr = null,
	ke = null,
	Bl = 0,
	Dn = 1 / 0,
	it = null,
	Hi = !1,
	Vs = null,
	Rt = null,
	ri = !1,
	kt = null,
	Vi = 0,
	dr = 0,
	Ws = null,
	_i = -1,
	wi = 0;
function ge() {
	return F & 6 ? te() : _i !== -1 ? _i : (_i = te());
}
function jt(e) {
	return e.mode & 1
		? F & 2 && ce !== 0
			? ce & -ce
			: fp.transition !== null
			? (wi === 0 && (wi = Cc()), wi)
			: ((e = b),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Nc(e.type))),
			  e)
		: 1;
}
function Qe(e, t, n, r) {
	if (50 < dr) throw ((dr = 0), (Ws = null), Error(k(185)));
	Dr(e, n, r),
		(!(F & 2) || e !== ae) &&
			(e === ae && (!(F & 2) && (io |= n), oe === 4 && wt(e, ce)),
			Te(e, r),
			n === 1 && F === 0 && !(t.mode & 1) && ((Dn = te() + 500), eo && Dt()));
}
function Te(e, t) {
	var n = e.callbackNode;
	fh(e, t);
	var r = Pi(e, e === ae ? ce : 0);
	if (r === 0)
		n !== null && ga(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && ga(n), t === 1))
			e.tag === 0 ? dp(cu.bind(null, e)) : Yc(cu.bind(null, e)),
				lp(function () {
					!(F & 6) && Dt();
				}),
				(n = null);
		else {
			switch (Tc(r)) {
				case 1:
					n = pl;
					break;
				case 4:
					n = Ec;
					break;
				case 16:
					n = Ti;
					break;
				case 536870912:
					n = xc;
					break;
				default:
					n = Ti;
			}
			n = qd(n, Hd.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function Hd(e, t) {
	if (((_i = -1), (wi = 0), F & 6)) throw Error(k(327));
	var n = e.callbackNode;
	if (Rn() && e.callbackNode !== n) return null;
	var r = Pi(e, e === ae ? ce : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = Wi(e, r);
	else {
		t = r;
		var i = F;
		F |= 2;
		var o = Wd();
		(ae !== e || ce !== t) && ((it = null), (Dn = te() + 500), Jt(e, t));
		do
			try {
				Np();
				break;
			} catch (l) {
				Vd(e, l);
			}
		while (1);
		Pl(),
			(Bi.current = o),
			(F = i),
			re !== null ? (t = 0) : ((ae = null), (ce = 0), (t = oe));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((i = gs(e)), i !== 0 && ((r = i), (t = Ks(e, i)))), t === 1)
		)
			throw ((n = jr), Jt(e, 0), wt(e, r), Te(e, te()), n);
		if (t === 6) wt(e, r);
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!jp(i) &&
					((t = Wi(e, r)),
					t === 2 && ((o = gs(e)), o !== 0 && ((r = o), (t = Ks(e, o)))),
					t === 1))
			)
				throw ((n = jr), Jt(e, 0), wt(e, r), Te(e, te()), n);
			switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(k(345));
				case 2:
					Bt(e, ke, it);
					break;
				case 3:
					if (
						(wt(e, r), (r & 130023424) === r && ((t = Bl + 500 - te()), 10 < t))
					) {
						if (Pi(e, 0) !== 0) break;
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							ge(), (e.pingedLanes |= e.suspendedLanes & i);
							break;
						}
						e.timeoutHandle = Ts(Bt.bind(null, e, ke, it), t);
						break;
					}
					Bt(e, ke, it);
					break;
				case 4:
					if ((wt(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, i = -1; 0 < r; ) {
						var s = 31 - Ke(r);
						(o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
					}
					if (
						((r = i),
						(r = te() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * Rp(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = Ts(Bt.bind(null, e, ke, it), r);
						break;
					}
					Bt(e, ke, it);
					break;
				case 5:
					Bt(e, ke, it);
					break;
				default:
					throw Error(k(329));
			}
		}
	}
	return Te(e, te()), e.callbackNode === n ? Hd.bind(null, e) : null;
}
function Ks(e, t) {
	var n = cr;
	return (
		e.current.memoizedState.isDehydrated && (Jt(e, t).flags |= 256),
		(e = Wi(e, t)),
		e !== 2 && ((t = ke), (ke = n), t !== null && Qs(t)),
		e
	);
}
function Qs(e) {
	ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function jp(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						o = i.getSnapshot;
					i = i.value;
					try {
						if (!Ge(o(), i)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function wt(e, t) {
	for (
		t &= ~bl,
			t &= ~io,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Ke(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function cu(e) {
	if (F & 6) throw Error(k(327));
	Rn();
	var t = Pi(e, 0);
	if (!(t & 1)) return Te(e, te()), null;
	var n = Wi(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = gs(e);
		r !== 0 && ((t = r), (n = Ks(e, r)));
	}
	if (n === 1) throw ((n = jr), Jt(e, 0), wt(e, t), Te(e, te()), n);
	if (n === 6) throw Error(k(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		Bt(e, ke, it),
		Te(e, te()),
		null
	);
}
function Hl(e, t) {
	var n = F;
	F |= 1;
	try {
		return e(t);
	} finally {
		(F = n), F === 0 && ((Dn = te() + 500), eo && Dt());
	}
}
function nn(e) {
	kt !== null && kt.tag === 0 && !(F & 6) && Rn();
	var t = F;
	F |= 1;
	var n = ze.transition,
		r = b;
	try {
		if (((ze.transition = null), (b = 1), e)) return e();
	} finally {
		(b = r), (ze.transition = n), (F = t), !(F & 6) && Dt();
	}
}
function Vl() {
	(Oe = En.current), K(En);
}
function Jt(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), sp(n)), re !== null))
		for (n = re.return; n !== null; ) {
			var r = n;
			switch ((xl(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && Ni();
					break;
				case 3:
					In(), K(xe), K(me), Ll();
					break;
				case 5:
					Nl(r);
					break;
				case 4:
					In();
					break;
				case 13:
					K(J);
					break;
				case 19:
					K(J);
					break;
				case 10:
					Ol(r.type._context);
					break;
				case 22:
				case 23:
					Vl();
			}
			n = n.return;
		}
	if (
		((ae = e),
		(re = e = $t(e.current, null)),
		(ce = Oe = t),
		(oe = 0),
		(jr = null),
		(bl = io = tn = 0),
		(ke = cr = null),
		Qt !== null)
	) {
		for (t = 0; t < Qt.length; t++)
			if (((n = Qt[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var i = r.next,
					o = n.pending;
				if (o !== null) {
					var s = o.next;
					(o.next = i), (r.next = s);
				}
				n.pending = r;
			}
		Qt = null;
	}
	return e;
}
function Vd(e, t) {
	do {
		var n = re;
		try {
			if ((Pl(), (mi.current = bi), Mi)) {
				for (var r = q.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				Mi = !1;
			}
			if (
				((en = 0),
				(le = ie = q = null),
				(ar = !1),
				(Pr = 0),
				(Ml.current = null),
				n === null || n.return === null)
			) {
				(oe = 1), (jr = t), (re = null);
				break;
			}
			e: {
				var o = e,
					s = n.return,
					l = n,
					a = t;
				if (
					((t = ce),
					(l.flags |= 32768),
					a !== null && typeof a == 'object' && typeof a.then == 'function')
				) {
					var u = a,
						c = l,
						d = c.tag;
					if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
						var p = c.alternate;
						p
							? ((c.updateQueue = p.updateQueue),
							  (c.memoizedState = p.memoizedState),
							  (c.lanes = p.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null));
					}
					var g = Ya(s);
					if (g !== null) {
						(g.flags &= -257),
							Xa(g, s, l, o, t),
							g.mode & 1 && qa(o, u, t),
							(t = g),
							(a = u);
						var m = t.updateQueue;
						if (m === null) {
							var y = new Set();
							y.add(a), (t.updateQueue = y);
						} else m.add(a);
						break e;
					} else {
						if (!(t & 1)) {
							qa(o, u, t), Wl();
							break e;
						}
						a = Error(k(426));
					}
				} else if (Q && l.mode & 1) {
					var S = Ya(s);
					if (S !== null) {
						!(S.flags & 65536) && (S.flags |= 256),
							Xa(S, s, l, o, t),
							Cl(An(a, l));
						break e;
					}
				}
				(o = a = An(a, l)),
					oe !== 4 && (oe = 2),
					cr === null ? (cr = [o]) : cr.push(o),
					(o = s);
				do {
					switch (o.tag) {
						case 3:
							(o.flags |= 65536), (t &= -t), (o.lanes |= t);
							var h = Pd(o, a, t);
							Ha(o, h);
							break e;
						case 1:
							l = a;
							var f = o.type,
								v = o.stateNode;
							if (
								!(o.flags & 128) &&
								(typeof f.getDerivedStateFromError == 'function' ||
									(v !== null &&
										typeof v.componentDidCatch == 'function' &&
										(Rt === null || !Rt.has(v))))
							) {
								(o.flags |= 65536), (t &= -t), (o.lanes |= t);
								var w = Od(o, l, t);
								Ha(o, w);
								break e;
							}
					}
					o = o.return;
				} while (o !== null);
			}
			Qd(n);
		} catch (x) {
			(t = x), re === n && n !== null && (re = n = n.return);
			continue;
		}
		break;
	} while (1);
}
function Wd() {
	var e = Bi.current;
	return (Bi.current = bi), e === null ? bi : e;
}
function Wl() {
	(oe === 0 || oe === 3 || oe === 2) && (oe = 4),
		ae === null || (!(tn & 268435455) && !(io & 268435455)) || wt(ae, ce);
}
function Wi(e, t) {
	var n = F;
	F |= 2;
	var r = Wd();
	(ae !== e || ce !== t) && ((it = null), Jt(e, t));
	do
		try {
			$p();
			break;
		} catch (i) {
			Vd(e, i);
		}
	while (1);
	if ((Pl(), (F = n), (Bi.current = r), re !== null)) throw Error(k(261));
	return (ae = null), (ce = 0), oe;
}
function $p() {
	for (; re !== null; ) Kd(re);
}
function Np() {
	for (; re !== null && !rh(); ) Kd(re);
}
function Kd(e) {
	var t = Jd(e.alternate, e, Oe);
	(e.memoizedProps = e.pendingProps),
		t === null ? Qd(e) : (re = t),
		(Ml.current = null);
}
function Qd(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = Cp(n, t)), n !== null)) {
				(n.flags &= 32767), (re = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(oe = 6), (re = null);
				return;
			}
		} else if (((n = xp(n, t, Oe)), n !== null)) {
			re = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			re = t;
			return;
		}
		re = t = e;
	} while (t !== null);
	oe === 0 && (oe = 5);
}
function Bt(e, t, n) {
	var r = b,
		i = ze.transition;
	try {
		(ze.transition = null), (b = 1), Lp(e, t, n, r);
	} finally {
		(ze.transition = i), (b = r);
	}
	return null;
}
function Lp(e, t, n, r) {
	do Rn();
	while (kt !== null);
	if (F & 6) throw Error(k(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(k(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var o = n.lanes | n.childLanes;
	if (
		(hh(e, o),
		e === ae && ((re = ae = null), (ce = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			ri ||
			((ri = !0),
			qd(Ti, function () {
				return Rn(), null;
			})),
		(o = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || o)
	) {
		(o = ze.transition), (ze.transition = null);
		var s = b;
		b = 1;
		var l = F;
		(F |= 4),
			(Ml.current = null),
			Pp(e, n),
			bd(n, e),
			Zh(xs),
			(Oi = !!Es),
			(xs = Es = null),
			(e.current = n),
			Op(n),
			ih(),
			(F = l),
			(b = s),
			(ze.transition = o);
	} else e.current = n;
	if (
		(ri && ((ri = !1), (kt = e), (Vi = i)),
		(o = e.pendingLanes),
		o === 0 && (Rt = null),
		lh(n.stateNode),
		Te(e, te()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
	if (Hi) throw ((Hi = !1), (e = Vs), (Vs = null), e);
	return (
		Vi & 1 && e.tag !== 0 && Rn(),
		(o = e.pendingLanes),
		o & 1 ? (e === Ws ? dr++ : ((dr = 0), (Ws = e))) : (dr = 0),
		Dt(),
		null
	);
}
function Rn() {
	if (kt !== null) {
		var e = Tc(Vi),
			t = ze.transition,
			n = b;
		try {
			if (((ze.transition = null), (b = 16 > e ? 16 : e), kt === null))
				var r = !1;
			else {
				if (((e = kt), (kt = null), (Vi = 0), F & 6)) throw Error(k(331));
				var i = F;
				for (F |= 4, P = e.current; P !== null; ) {
					var o = P,
						s = o.child;
					if (P.flags & 16) {
						var l = o.deletions;
						if (l !== null) {
							for (var a = 0; a < l.length; a++) {
								var u = l[a];
								for (P = u; P !== null; ) {
									var c = P;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											ur(8, c, o);
									}
									var d = c.child;
									if (d !== null) (d.return = c), (P = d);
									else
										for (; P !== null; ) {
											c = P;
											var p = c.sibling,
												g = c.return;
											if ((zd(c), c === u)) {
												P = null;
												break;
											}
											if (p !== null) {
												(p.return = g), (P = p);
												break;
											}
											P = g;
										}
								}
							}
							var m = o.alternate;
							if (m !== null) {
								var y = m.child;
								if (y !== null) {
									m.child = null;
									do {
										var S = y.sibling;
										(y.sibling = null), (y = S);
									} while (y !== null);
								}
							}
							P = o;
						}
					}
					if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (P = s);
					else
						e: for (; P !== null; ) {
							if (((o = P), o.flags & 2048))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										ur(9, o, o.return);
								}
							var h = o.sibling;
							if (h !== null) {
								(h.return = o.return), (P = h);
								break e;
							}
							P = o.return;
						}
				}
				var f = e.current;
				for (P = f; P !== null; ) {
					s = P;
					var v = s.child;
					if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (P = v);
					else
						e: for (s = f; P !== null; ) {
							if (((l = P), l.flags & 2048))
								try {
									switch (l.tag) {
										case 0:
										case 11:
										case 15:
											ro(9, l);
									}
								} catch (x) {
									ee(l, l.return, x);
								}
							if (l === s) {
								P = null;
								break e;
							}
							var w = l.sibling;
							if (w !== null) {
								(w.return = l.return), (P = w);
								break e;
							}
							P = l.return;
						}
				}
				if (
					((F = i), Dt(), Ze && typeof Ze.onPostCommitFiberRoot == 'function')
				)
					try {
						Ze.onPostCommitFiberRoot(Ji, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(b = n), (ze.transition = t);
		}
	}
	return !1;
}
function du(e, t, n) {
	(t = An(n, t)),
		(t = Pd(e, t, 1)),
		(e = Ot(e, t, 1)),
		(t = ge()),
		e !== null && (Dr(e, 1, t), Te(e, t));
}
function ee(e, t, n) {
	if (e.tag === 3) du(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				du(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(Rt === null || !Rt.has(r)))
				) {
					(e = An(n, e)),
						(e = Od(t, e, 1)),
						(t = Ot(t, e, 1)),
						(e = ge()),
						t !== null && (Dr(t, 1, e), Te(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function Ip(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = ge()),
		(e.pingedLanes |= e.suspendedLanes & n),
		ae === e &&
			(ce & n) === n &&
			(oe === 4 || (oe === 3 && (ce & 130023424) === ce && 500 > te() - Bl)
				? Jt(e, 0)
				: (bl |= n)),
		Te(e, t);
}
function Gd(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = Qr), (Qr <<= 1), !(Qr & 130023424) && (Qr = 4194304))
			: (t = 1));
	var n = ge();
	(e = dt(e, t)), e !== null && (Dr(e, t, n), Te(e, n));
}
function Ap(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Gd(e, n);
}
function Dp(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(k(314));
	}
	r !== null && r.delete(t), Gd(e, n);
}
var Jd;
Jd = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || xe.current) Ee = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (Ee = !1), Ep(e, t, n);
			Ee = !!(e.flags & 131072);
		}
	else (Ee = !1), Q && t.flags & 1048576 && Xc(t, Ai, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			gi(e, t), (e = t.pendingProps);
			var i = $n(t, me.current);
			On(t, n), (i = Al(null, t, r, e, i, n));
			var o = Dl();
			return (
				(t.flags |= 1),
				typeof i == 'object' &&
				i !== null &&
				typeof i.render == 'function' &&
				i.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  Ce(r) ? ((o = !0), Li(t)) : (o = !1),
					  (t.memoizedState =
							i.state !== null && i.state !== void 0 ? i.state : null),
					  jl(t),
					  (i.updater = to),
					  (t.stateNode = i),
					  (i._reactInternals = t),
					  Ls(t, r, e, n),
					  (t = Ds(null, t, r, !0, o, n)))
					: ((t.tag = 0), Q && o && El(t), ye(null, t, i, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(gi(e, t),
					(e = t.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(t.type = r),
					(i = t.tag = zp(r)),
					(e = Be(r, e)),
					i)
				) {
					case 0:
						t = As(null, t, r, e, n);
						break e;
					case 1:
						t = tu(null, t, r, e, n);
						break e;
					case 11:
						t = Za(null, t, r, e, n);
						break e;
					case 14:
						t = eu(null, t, r, Be(r.type, e), n);
						break e;
				}
				throw Error(k(306, r, ''));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Be(r, i)),
				As(e, t, r, i, n)
			);
		case 1:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Be(r, i)),
				tu(e, t, r, i, n)
			);
		case 3:
			e: {
				if ((Nd(t), e === null)) throw Error(k(387));
				(r = t.pendingProps),
					(o = t.memoizedState),
					(i = o.element),
					nd(e, t),
					zi(t, r, null, n);
				var s = t.memoizedState;
				if (((r = s.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache,
							pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
							transitions: s.transitions,
						}),
						(t.updateQueue.baseState = o),
						(t.memoizedState = o),
						t.flags & 256)
					) {
						(i = An(Error(k(423)), t)), (t = nu(e, t, r, n, i));
						break e;
					} else if (r !== i) {
						(i = An(Error(k(424)), t)), (t = nu(e, t, r, n, i));
						break e;
					} else
						for (
							Re = Pt(t.stateNode.containerInfo.firstChild),
								je = t,
								Q = !0,
								We = null,
								n = sd(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((Nn(), r === i)) {
						t = ft(e, t, n);
						break e;
					}
					ye(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				ld(t),
				e === null && js(t),
				(r = t.type),
				(i = t.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(s = i.children),
				Cs(r, i) ? (s = null) : o !== null && Cs(r, o) && (t.flags |= 32),
				$d(e, t),
				ye(e, t, s, n),
				t.child
			);
		case 6:
			return e === null && js(t), null;
		case 13:
			return Ld(e, t, n);
		case 4:
			return (
				$l(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = Ln(t, null, r, n)) : ye(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Be(r, i)),
				Za(e, t, r, i, n)
			);
		case 7:
			return ye(e, t, t.pendingProps, n), t.child;
		case 8:
			return ye(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return ye(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(i = t.pendingProps),
					(o = t.memoizedProps),
					(s = i.value),
					V(Di, r._currentValue),
					(r._currentValue = s),
					o !== null)
				)
					if (Ge(o.value, s)) {
						if (o.children === i.children && !xe.current) {
							t = ft(e, t, n);
							break e;
						}
					} else
						for (o = t.child, o !== null && (o.return = t); o !== null; ) {
							var l = o.dependencies;
							if (l !== null) {
								s = o.child;
								for (var a = l.firstContext; a !== null; ) {
									if (a.context === r) {
										if (o.tag === 1) {
											(a = at(-1, n & -n)), (a.tag = 2);
											var u = o.updateQueue;
											if (u !== null) {
												u = u.shared;
												var c = u.pending;
												c === null
													? (a.next = a)
													: ((a.next = c.next), (c.next = a)),
													(u.pending = a);
											}
										}
										(o.lanes |= n),
											(a = o.alternate),
											a !== null && (a.lanes |= n),
											$s(o.return, n, t),
											(l.lanes |= n);
										break;
									}
									a = a.next;
								}
							} else if (o.tag === 10) s = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (((s = o.return), s === null)) throw Error(k(341));
								(s.lanes |= n),
									(l = s.alternate),
									l !== null && (l.lanes |= n),
									$s(s, n, t),
									(s = o.sibling);
							} else s = o.child;
							if (s !== null) s.return = o;
							else
								for (s = o; s !== null; ) {
									if (s === t) {
										s = null;
										break;
									}
									if (((o = s.sibling), o !== null)) {
										(o.return = s.return), (s = o);
										break;
									}
									s = s.return;
								}
							o = s;
						}
				ye(e, t, i.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(i = t.type),
				(r = t.pendingProps.children),
				On(t, n),
				(i = Fe(i)),
				(r = r(i)),
				(t.flags |= 1),
				ye(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(i = Be(r, t.pendingProps)),
				(i = Be(r.type, i)),
				eu(e, t, r, i, n)
			);
		case 15:
			return Rd(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Be(r, i)),
				gi(e, t),
				(t.tag = 1),
				Ce(r) ? ((e = !0), Li(t)) : (e = !1),
				On(t, n),
				id(t, r, i),
				Ls(t, r, i, n),
				Ds(null, t, r, !0, e, n)
			);
		case 19:
			return Id(e, t, n);
		case 22:
			return jd(e, t, n);
	}
	throw Error(k(156, t.tag));
};
function qd(e, t) {
	return kc(e, t);
}
function Up(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function Ue(e, t, n, r) {
	return new Up(e, t, n, r);
}
function Kl(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function zp(e) {
	if (typeof e == 'function') return Kl(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === dl)) return 11;
		if (e === fl) return 14;
	}
	return 2;
}
function $t(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = Ue(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function Si(e, t, n, r, i, o) {
	var s = 2;
	if (((r = e), typeof e == 'function')) Kl(e) && (s = 1);
	else if (typeof e == 'string') s = 5;
	else
		e: switch (e) {
			case hn:
				return qt(n.children, i, o, t);
			case cl:
				(s = 8), (i |= 8);
				break;
			case rs:
				return (
					(e = Ue(12, n, t, i | 2)), (e.elementType = rs), (e.lanes = o), e
				);
			case is:
				return (e = Ue(13, n, t, i)), (e.elementType = is), (e.lanes = o), e;
			case os:
				return (e = Ue(19, n, t, i)), (e.elementType = os), (e.lanes = o), e;
			case oc:
				return oo(n, i, o, t);
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case rc:
							s = 10;
							break e;
						case ic:
							s = 9;
							break e;
						case dl:
							s = 11;
							break e;
						case fl:
							s = 14;
							break e;
						case mt:
							(s = 16), (r = null);
							break e;
					}
				throw Error(k(130, e == null ? e : typeof e, ''));
		}
	return (
		(t = Ue(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
	);
}
function qt(e, t, n, r) {
	return (e = Ue(7, e, r, t)), (e.lanes = n), e;
}
function oo(e, t, n, r) {
	return (
		(e = Ue(22, e, r, t)),
		(e.elementType = oc),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function Wo(e, t, n) {
	return (e = Ue(6, e, null, t)), (e.lanes = n), e;
}
function Ko(e, t, n) {
	return (
		(t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function Fp(e, t, n, r, i) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = To(0)),
		(this.expirationTimes = To(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = To(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null);
}
function Ql(e, t, n, r, i, o, s, l, a) {
	return (
		(e = new Fp(e, t, n, l, a)),
		t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
		(o = Ue(3, null, null, t)),
		(e.current = o),
		(o.stateNode = e),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		jl(o),
		e
	);
}
function Mp(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: fn,
		key: r == null ? null : '' + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function Yd(e) {
	if (!e) return Lt;
	e = e._reactInternals;
	e: {
		if (on(e) !== e || e.tag !== 1) throw Error(k(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (Ce(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(k(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (Ce(n)) return qc(e, n, t);
	}
	return t;
}
function Xd(e, t, n, r, i, o, s, l, a) {
	return (
		(e = Ql(n, r, !0, e, i, o, s, l, a)),
		(e.context = Yd(null)),
		(n = e.current),
		(r = ge()),
		(i = jt(n)),
		(o = at(r, i)),
		(o.callback = t ?? null),
		Ot(n, o, i),
		(e.current.lanes = i),
		Dr(e, i, r),
		Te(e, r),
		e
	);
}
function so(e, t, n, r) {
	var i = t.current,
		o = ge(),
		s = jt(i);
	return (
		(n = Yd(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = at(o, s)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = Ot(i, t, s)),
		e !== null && (Qe(e, i, s, o), vi(e, i, s)),
		s
	);
}
function Ki(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function fu(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Gl(e, t) {
	fu(e, t), (e = e.alternate) && fu(e, t);
}
function bp() {
	return null;
}
var Zd =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e);
		  };
function Jl(e) {
	this._internalRoot = e;
}
lo.prototype.render = Jl.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(k(409));
	so(e, t, null, null);
};
lo.prototype.unmount = Jl.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		nn(function () {
			so(null, e, null, null);
		}),
			(t[ct] = null);
	}
};
function lo(e) {
	this._internalRoot = e;
}
lo.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = Rc();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < _t.length && t !== 0 && t < _t[n].priority; n++);
		_t.splice(n, 0, e), n === 0 && $c(e);
	}
};
function ql(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ao(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	);
}
function hu() {}
function Bp(e, t, n, r, i) {
	if (i) {
		if (typeof r == 'function') {
			var o = r;
			r = function () {
				var u = Ki(s);
				o.call(u);
			};
		}
		var s = Xd(t, r, e, 0, null, !1, !1, '', hu);
		return (
			(e._reactRootContainer = s),
			(e[ct] = s.current),
			kr(e.nodeType === 8 ? e.parentNode : e),
			nn(),
			s
		);
	}
	for (; (i = e.lastChild); ) e.removeChild(i);
	if (typeof r == 'function') {
		var l = r;
		r = function () {
			var u = Ki(a);
			l.call(u);
		};
	}
	var a = Ql(e, 0, !1, null, null, !1, !1, '', hu);
	return (
		(e._reactRootContainer = a),
		(e[ct] = a.current),
		kr(e.nodeType === 8 ? e.parentNode : e),
		nn(function () {
			so(t, a, n, r);
		}),
		a
	);
}
function uo(e, t, n, r, i) {
	var o = n._reactRootContainer;
	if (o) {
		var s = o;
		if (typeof i == 'function') {
			var l = i;
			i = function () {
				var a = Ki(s);
				l.call(a);
			};
		}
		so(t, s, e, i);
	} else s = Bp(n, t, e, i, r);
	return Ki(s);
}
Pc = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = er(t.pendingLanes);
				n !== 0 &&
					(vl(t, n | 1), Te(t, te()), !(F & 6) && ((Dn = te() + 500), Dt()));
			}
			break;
		case 13:
			nn(function () {
				var r = dt(e, 1);
				if (r !== null) {
					var i = ge();
					Qe(r, e, 1, i);
				}
			}),
				Gl(e, 1);
	}
};
ml = function (e) {
	if (e.tag === 13) {
		var t = dt(e, 134217728);
		if (t !== null) {
			var n = ge();
			Qe(t, e, 134217728, n);
		}
		Gl(e, 134217728);
	}
};
Oc = function (e) {
	if (e.tag === 13) {
		var t = jt(e),
			n = dt(e, t);
		if (n !== null) {
			var r = ge();
			Qe(n, e, t, r);
		}
		Gl(e, t);
	}
};
Rc = function () {
	return b;
};
jc = function (e, t) {
	var n = b;
	try {
		return (b = e), t();
	} finally {
		b = n;
	}
};
vs = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((as(e, n), (t = n.name), n.type === 'radio' && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var i = Zi(r);
						if (!i) throw Error(k(90));
						lc(r), as(r, i);
					}
				}
			}
			break;
		case 'textarea':
			uc(e, n);
			break;
		case 'select':
			(t = n.value), t != null && xn(e, !!n.multiple, t, !1);
	}
};
mc = Hl;
yc = nn;
var Hp = { usingClientEntryPoint: !1, Events: [zr, yn, Zi, pc, vc, Hl] },
	qn = {
		findFiberByHostInstance: Kt,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom',
	},
	Vp = {
		bundleType: qn.bundleType,
		version: qn.version,
		rendererPackageName: qn.rendererPackageName,
		rendererConfig: qn.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: ht.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = wc(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: qn.findFiberByHostInstance || bp,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var ii = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!ii.isDisabled && ii.supportsFiber)
		try {
			(Ji = ii.inject(Vp)), (Ze = ii);
		} catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hp;
Ne.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!ql(t)) throw Error(k(200));
	return Mp(e, t, null, n);
};
Ne.createRoot = function (e, t) {
	if (!ql(e)) throw Error(k(299));
	var n = !1,
		r = '',
		i = Zd;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
		(t = Ql(e, 1, !1, null, null, n, !1, r, i)),
		(e[ct] = t.current),
		kr(e.nodeType === 8 ? e.parentNode : e),
		new Jl(t)
	);
};
Ne.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == 'function'
			? Error(k(188))
			: ((e = Object.keys(e).join(',')), Error(k(268, e)));
	return (e = wc(t)), (e = e === null ? null : e.stateNode), e;
};
Ne.flushSync = function (e) {
	return nn(e);
};
Ne.hydrate = function (e, t, n) {
	if (!ao(t)) throw Error(k(200));
	return uo(null, e, t, !0, n);
};
Ne.hydrateRoot = function (e, t, n) {
	if (!ql(e)) throw Error(k(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		o = '',
		s = Zd;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
		(t = Xd(t, null, e, 1, n ?? null, i, !1, o, s)),
		(e[ct] = t.current),
		kr(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(i = n._getVersion),
				(i = i(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, i])
					: t.mutableSourceEagerHydrationData.push(n, i);
	return new lo(t);
};
Ne.render = function (e, t, n) {
	if (!ao(t)) throw Error(k(200));
	return uo(null, e, t, !1, n);
};
Ne.unmountComponentAtNode = function (e) {
	if (!ao(e)) throw Error(k(40));
	return e._reactRootContainer
		? (nn(function () {
				uo(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[ct] = null);
				});
		  }),
		  !0)
		: !1;
};
Ne.unstable_batchedUpdates = Hl;
Ne.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!ao(n)) throw Error(k(200));
	if (e == null || e._reactInternals === void 0) throw Error(k(38));
	return uo(e, t, n, !1, r);
};
Ne.version = '18.2.0-next-9e3b772b8-20220608';
function ef() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ef);
		} catch (e) {
			console.error(e);
		}
}
ef(), (Xu.exports = Ne);
var Wp = Xu.exports,
	pu = Wp;
(ts.createRoot = pu.createRoot), (ts.hydrateRoot = pu.hydrateRoot);
/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $r() {
	return (
		($r = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		$r.apply(this, arguments)
	);
}
var Et;
(function (e) {
	(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Et || (Et = {}));
const vu = 'popstate';
function Kp(e) {
	e === void 0 && (e = {});
	function t(i, o) {
		let {
			pathname: s = '/',
			search: l = '',
			hash: a = '',
		} = sn(i.location.hash.substr(1));
		return Gs(
			'',
			{ pathname: s, search: l, hash: a },
			(o.state && o.state.usr) || null,
			(o.state && o.state.key) || 'default'
		);
	}
	function n(i, o) {
		let s = i.document.querySelector('base'),
			l = '';
		if (s && s.getAttribute('href')) {
			let a = i.location.href,
				u = a.indexOf('#');
			l = u === -1 ? a : a.slice(0, u);
		}
		return l + '#' + (typeof o == 'string' ? o : tf(o));
	}
	function r(i, o) {
		co(
			i.pathname.charAt(0) === '/',
			'relative pathnames are not supported in hash history.push(' +
				JSON.stringify(o) +
				')'
		);
	}
	return Gp(t, n, r, e);
}
function se(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function co(e, t) {
	if (!e) {
		typeof console < 'u' && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function Qp() {
	return Math.random().toString(36).substr(2, 8);
}
function mu(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function Gs(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		$r(
			{ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
			typeof t == 'string' ? sn(t) : t,
			{ state: n, key: (t && t.key) || r || Qp() }
		)
	);
}
function tf(e) {
	let { pathname: t = '/', search: n = '', hash: r = '' } = e;
	return (
		n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
		r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
		t
	);
}
function sn(e) {
	let t = {};
	if (e) {
		let n = e.indexOf('#');
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
		let r = e.indexOf('?');
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
			e && (t.pathname = e);
	}
	return t;
}
function Gp(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: i = document.defaultView, v5Compat: o = !1 } = r,
		s = i.history,
		l = Et.Pop,
		a = null,
		u = c();
	u == null && ((u = 0), s.replaceState($r({}, s.state, { idx: u }), ''));
	function c() {
		return (s.state || { idx: null }).idx;
	}
	function d() {
		l = Et.Pop;
		let S = c(),
			h = S == null ? null : S - u;
		(u = S), a && a({ action: l, location: y.location, delta: h });
	}
	function p(S, h) {
		l = Et.Push;
		let f = Gs(y.location, S, h);
		n && n(f, S), (u = c() + 1);
		let v = mu(f, u),
			w = y.createHref(f);
		try {
			s.pushState(v, '', w);
		} catch (x) {
			if (x instanceof DOMException && x.name === 'DataCloneError') throw x;
			i.location.assign(w);
		}
		o && a && a({ action: l, location: y.location, delta: 1 });
	}
	function g(S, h) {
		l = Et.Replace;
		let f = Gs(y.location, S, h);
		n && n(f, S), (u = c());
		let v = mu(f, u),
			w = y.createHref(f);
		s.replaceState(v, '', w),
			o && a && a({ action: l, location: y.location, delta: 0 });
	}
	function m(S) {
		let h = i.location.origin !== 'null' ? i.location.origin : i.location.href,
			f = typeof S == 'string' ? S : tf(S);
		return (
			se(
				h,
				'No window.location.(origin|href) available to create URL for href: ' +
					f
			),
			new URL(f, h)
		);
	}
	let y = {
		get action() {
			return l;
		},
		get location() {
			return e(i, s);
		},
		listen(S) {
			if (a) throw new Error('A history only accepts one active listener');
			return (
				i.addEventListener(vu, d),
				(a = S),
				() => {
					i.removeEventListener(vu, d), (a = null);
				}
			);
		},
		createHref(S) {
			return t(i, S);
		},
		createURL: m,
		encodeLocation(S) {
			let h = m(S);
			return { pathname: h.pathname, search: h.search, hash: h.hash };
		},
		push: p,
		replace: g,
		go(S) {
			return s.go(S);
		},
	};
	return y;
}
var yu;
(function (e) {
	(e.data = 'data'),
		(e.deferred = 'deferred'),
		(e.redirect = 'redirect'),
		(e.error = 'error');
})(yu || (yu = {}));
function Jp(e, t, n) {
	n === void 0 && (n = '/');
	let r = typeof t == 'string' ? sn(t) : t,
		i = of(r.pathname || '/', n);
	if (i == null) return null;
	let o = nf(e);
	qp(o);
	let s = null;
	for (let l = 0; s == null && l < o.length; ++l) s = ov(o[l], av(i));
	return s;
}
function nf(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
	let i = (o, s, l) => {
		let a = {
			relativePath: l === void 0 ? o.path || '' : l,
			caseSensitive: o.caseSensitive === !0,
			childrenIndex: s,
			route: o,
		};
		a.relativePath.startsWith('/') &&
			(se(
				a.relativePath.startsWith(r),
				'Absolute route path "' +
					a.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					'must start with the combined path of all its parent routes.'
			),
			(a.relativePath = a.relativePath.slice(r.length)));
		let u = Yt([r, a.relativePath]),
			c = n.concat(a);
		o.children &&
			o.children.length > 0 &&
			(se(
				o.index !== !0,
				'Index routes must not have child routes. Please remove ' +
					('all child routes from route path "' + u + '".')
			),
			nf(o.children, t, c, u)),
			!(o.path == null && !o.index) &&
				t.push({ path: u, score: rv(u, o.index), routesMeta: c });
	};
	return (
		e.forEach((o, s) => {
			var l;
			if (o.path === '' || !((l = o.path) != null && l.includes('?'))) i(o, s);
			else for (let a of rf(o.path)) i(o, s, a);
		}),
		t
	);
}
function rf(e) {
	let t = e.split('/');
	if (t.length === 0) return [];
	let [n, ...r] = t,
		i = n.endsWith('?'),
		o = n.replace(/\?$/, '');
	if (r.length === 0) return i ? [o, ''] : [o];
	let s = rf(r.join('/')),
		l = [];
	return (
		l.push(...s.map((a) => (a === '' ? o : [o, a].join('/')))),
		i && l.push(...s),
		l.map((a) => (e.startsWith('/') && a === '' ? '/' : a))
	);
}
function qp(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: iv(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	);
}
const Yp = /^:\w+$/,
	Xp = 3,
	Zp = 2,
	ev = 1,
	tv = 10,
	nv = -2,
	gu = (e) => e === '*';
function rv(e, t) {
	let n = e.split('/'),
		r = n.length;
	return (
		n.some(gu) && (r += nv),
		t && (r += Zp),
		n
			.filter((i) => !gu(i))
			.reduce((i, o) => i + (Yp.test(o) ? Xp : o === '' ? ev : tv), r)
	);
}
function iv(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function ov(e, t) {
	let { routesMeta: n } = e,
		r = {},
		i = '/',
		o = [];
	for (let s = 0; s < n.length; ++s) {
		let l = n[s],
			a = s === n.length - 1,
			u = i === '/' ? t : t.slice(i.length) || '/',
			c = sv(
				{ path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
				u
			);
		if (!c) return null;
		Object.assign(r, c.params);
		let d = l.route;
		o.push({
			params: r,
			pathname: Yt([i, c.pathname]),
			pathnameBase: pv(Yt([i, c.pathnameBase])),
			route: d,
		}),
			c.pathnameBase !== '/' && (i = Yt([i, c.pathnameBase]));
	}
	return o;
}
function sv(e, t) {
	typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = lv(e.path, e.caseSensitive, e.end),
		i = t.match(n);
	if (!i) return null;
	let o = i[0],
		s = o.replace(/(.)\/+$/, '$1'),
		l = i.slice(1);
	return {
		params: r.reduce((u, c, d) => {
			if (c === '*') {
				let p = l[d] || '';
				s = o.slice(0, o.length - p.length).replace(/(.)\/+$/, '$1');
			}
			return (u[c] = uv(l[d] || '', c)), u;
		}, {}),
		pathname: o,
		pathnameBase: s,
		pattern: e,
	};
}
function lv(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		co(
			e === '*' || !e.endsWith('*') || e.endsWith('/*'),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
				'always follow a `/` in the pattern. To get rid of this warning, ' +
				('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
		);
	let r = [],
		i =
			'^' +
			e
				.replace(/\/*\*?$/, '')
				.replace(/^\/*/, '/')
				.replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
				.replace(/\/:(\w+)/g, (s, l) => (r.push(l), '/([^\\/]+)'));
	return (
		e.endsWith('*')
			? (r.push('*'),
			  (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
			: n
			? (i += '\\/*$')
			: e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
		[new RegExp(i, t ? void 0 : 'i'), r]
	);
}
function av(e) {
	try {
		return decodeURI(e);
	} catch (t) {
		return (
			co(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					('encoding (' + t + ').')
			),
			e
		);
	}
}
function uv(e, t) {
	try {
		return decodeURIComponent(e);
	} catch (n) {
		return (
			co(
				!1,
				'The value for the URL param "' +
					t +
					'" will not be decoded because' +
					(' the string "' +
						e +
						'" is a malformed URL segment. This is probably') +
					(' due to a bad percent encoding (' + n + ').')
			),
			e
		);
	}
}
function of(e, t) {
	if (t === '/') return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith('/') ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== '/' ? null : e.slice(n) || '/';
}
function cv(e, t) {
	t === void 0 && (t = '/');
	let {
		pathname: n,
		search: r = '',
		hash: i = '',
	} = typeof e == 'string' ? sn(e) : e;
	return {
		pathname: n ? (n.startsWith('/') ? n : dv(n, t)) : t,
		search: vv(r),
		hash: mv(i),
	};
}
function dv(e, t) {
	let n = t.replace(/\/+$/, '').split('/');
	return (
		e.split('/').forEach((i) => {
			i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i);
		}),
		n.length > 1 ? n.join('/') : '/'
	);
}
function Qo(e, t, n, r) {
	return (
		"Cannot include a '" +
		e +
		"' character in a manually specified " +
		('`to.' +
			t +
			'` field [' +
			JSON.stringify(r) +
			'].  Please separate it out to the ') +
		('`to.' + n + '` field. Alternatively you may provide the full path as ') +
		'a string in <Link to="..."> and the router will parse it for you.'
	);
}
function fv(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
	);
}
function hv(e, t, n, r) {
	r === void 0 && (r = !1);
	let i;
	typeof e == 'string'
		? (i = sn(e))
		: ((i = $r({}, e)),
		  se(
				!i.pathname || !i.pathname.includes('?'),
				Qo('?', 'pathname', 'search', i)
		  ),
		  se(
				!i.pathname || !i.pathname.includes('#'),
				Qo('#', 'pathname', 'hash', i)
		  ),
		  se(!i.search || !i.search.includes('#'), Qo('#', 'search', 'hash', i)));
	let o = e === '' || i.pathname === '',
		s = o ? '/' : i.pathname,
		l;
	if (r || s == null) l = n;
	else {
		let d = t.length - 1;
		if (s.startsWith('..')) {
			let p = s.split('/');
			for (; p[0] === '..'; ) p.shift(), (d -= 1);
			i.pathname = p.join('/');
		}
		l = d >= 0 ? t[d] : '/';
	}
	let a = cv(i, l),
		u = s && s !== '/' && s.endsWith('/'),
		c = (o || s === '.') && n.endsWith('/');
	return !a.pathname.endsWith('/') && (u || c) && (a.pathname += '/'), a;
}
const Yt = (e) => e.join('/').replace(/\/\/+/g, '/'),
	pv = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
	vv = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
	mv = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function yv(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.internal == 'boolean' &&
		'data' in e
	);
}
const sf = ['post', 'put', 'patch', 'delete'];
new Set(sf);
const gv = ['get', ...sf];
new Set(gv);
/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qi() {
	return (
		(Qi = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		Qi.apply(this, arguments)
	);
}
const Yl = O.createContext(null),
	_v = O.createContext(null),
	fo = O.createContext(null),
	ho = O.createContext(null),
	Mn = O.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	lf = O.createContext(null);
function po() {
	return O.useContext(ho) != null;
}
function vo() {
	return po() || se(!1), O.useContext(ho).location;
}
function af(e) {
	O.useContext(fo).static || O.useLayoutEffect(e);
}
function Xl() {
	let { isDataRoute: e } = O.useContext(Mn);
	return e ? Nv() : wv();
}
function wv() {
	po() || se(!1);
	let e = O.useContext(Yl),
		{ basename: t, navigator: n } = O.useContext(fo),
		{ matches: r } = O.useContext(Mn),
		{ pathname: i } = vo(),
		o = JSON.stringify(fv(r).map((a) => a.pathnameBase)),
		s = O.useRef(!1);
	return (
		af(() => {
			s.current = !0;
		}),
		O.useCallback(
			function (a, u) {
				if ((u === void 0 && (u = {}), !s.current)) return;
				if (typeof a == 'number') {
					n.go(a);
					return;
				}
				let c = hv(a, JSON.parse(o), i, u.relative === 'path');
				e == null &&
					t !== '/' &&
					(c.pathname = c.pathname === '/' ? t : Yt([t, c.pathname])),
					(u.replace ? n.replace : n.push)(c, u.state, u);
			},
			[t, n, o, i, e]
		)
	);
}
function Sv(e, t) {
	return kv(e, t);
}
function kv(e, t, n) {
	po() || se(!1);
	let { navigator: r } = O.useContext(fo),
		{ matches: i } = O.useContext(Mn),
		o = i[i.length - 1],
		s = o ? o.params : {};
	o && o.pathname;
	let l = o ? o.pathnameBase : '/';
	o && o.route;
	let a = vo(),
		u;
	if (t) {
		var c;
		let y = typeof t == 'string' ? sn(t) : t;
		l === '/' || ((c = y.pathname) != null && c.startsWith(l)) || se(!1),
			(u = y);
	} else u = a;
	let d = u.pathname || '/',
		p = l === '/' ? d : d.slice(l.length) || '/',
		g = Jp(e, { pathname: p }),
		m = Pv(
			g &&
				g.map((y) =>
					Object.assign({}, y, {
						params: Object.assign({}, s, y.params),
						pathname: Yt([
							l,
							r.encodeLocation
								? r.encodeLocation(y.pathname).pathname
								: y.pathname,
						]),
						pathnameBase:
							y.pathnameBase === '/'
								? l
								: Yt([
										l,
										r.encodeLocation
											? r.encodeLocation(y.pathnameBase).pathname
											: y.pathnameBase,
								  ]),
					})
				),
			i,
			n
		);
	return t && m
		? O.createElement(
				ho.Provider,
				{
					value: {
						location: Qi(
							{
								pathname: '/',
								search: '',
								hash: '',
								state: null,
								key: 'default',
							},
							u
						),
						navigationType: Et.Pop,
					},
				},
				m
		  )
		: m;
}
function Ev() {
	let e = $v(),
		t = yv(e)
			? e.status + ' ' + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
		o = null;
	return O.createElement(
		O.Fragment,
		null,
		O.createElement('h2', null, 'Unexpected Application Error!'),
		O.createElement('h3', { style: { fontStyle: 'italic' } }, t),
		n ? O.createElement('pre', { style: i }, n) : null,
		o
	);
}
const xv = O.createElement(Ev, null);
class Cv extends O.Component {
	constructor(t) {
		super(t),
			(this.state = {
				location: t.location,
				revalidation: t.revalidation,
				error: t.error,
			});
	}
	static getDerivedStateFromError(t) {
		return { error: t };
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location ||
			(n.revalidation !== 'idle' && t.revalidation === 'idle')
			? { error: t.error, location: t.location, revalidation: t.revalidation }
			: {
					error: t.error || n.error,
					location: n.location,
					revalidation: t.revalidation || n.revalidation,
			  };
	}
	componentDidCatch(t, n) {
		console.error(
			'React Router caught the following error during render',
			t,
			n
		);
	}
	render() {
		return this.state.error
			? O.createElement(
					Mn.Provider,
					{ value: this.props.routeContext },
					O.createElement(lf.Provider, {
						value: this.state.error,
						children: this.props.component,
					})
			  )
			: this.props.children;
	}
}
function Tv(e) {
	let { routeContext: t, match: n, children: r } = e,
		i = O.useContext(Yl);
	return (
		i &&
			i.static &&
			i.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(i.staticContext._deepestRenderedBoundaryId = n.route.id),
		O.createElement(Mn.Provider, { value: t }, r)
	);
}
function Pv(e, t, n) {
	var r;
	if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
		var i;
		if ((i = n) != null && i.errors) e = n.matches;
		else return null;
	}
	let o = e,
		s = (r = n) == null ? void 0 : r.errors;
	if (s != null) {
		let l = o.findIndex(
			(a) => a.route.id && (s == null ? void 0 : s[a.route.id])
		);
		l >= 0 || se(!1), (o = o.slice(0, Math.min(o.length, l + 1)));
	}
	return o.reduceRight((l, a, u) => {
		let c = a.route.id ? (s == null ? void 0 : s[a.route.id]) : null,
			d = null;
		n && (d = a.route.errorElement || xv);
		let p = t.concat(o.slice(0, u + 1)),
			g = () => {
				let m;
				return (
					c
						? (m = d)
						: a.route.Component
						? (m = O.createElement(a.route.Component, null))
						: a.route.element
						? (m = a.route.element)
						: (m = l),
					O.createElement(Tv, {
						match: a,
						routeContext: { outlet: l, matches: p, isDataRoute: n != null },
						children: m,
					})
				);
			};
		return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0)
			? O.createElement(Cv, {
					location: n.location,
					revalidation: n.revalidation,
					component: d,
					error: c,
					children: g(),
					routeContext: { outlet: null, matches: p, isDataRoute: !0 },
			  })
			: g();
	}, null);
}
var Js;
(function (e) {
	(e.UseBlocker = 'useBlocker'),
		(e.UseRevalidator = 'useRevalidator'),
		(e.UseNavigateStable = 'useNavigate');
})(Js || (Js = {}));
var Nr;
(function (e) {
	(e.UseBlocker = 'useBlocker'),
		(e.UseLoaderData = 'useLoaderData'),
		(e.UseActionData = 'useActionData'),
		(e.UseRouteError = 'useRouteError'),
		(e.UseNavigation = 'useNavigation'),
		(e.UseRouteLoaderData = 'useRouteLoaderData'),
		(e.UseMatches = 'useMatches'),
		(e.UseRevalidator = 'useRevalidator'),
		(e.UseNavigateStable = 'useNavigate'),
		(e.UseRouteId = 'useRouteId');
})(Nr || (Nr = {}));
function Ov(e) {
	let t = O.useContext(Yl);
	return t || se(!1), t;
}
function Rv(e) {
	let t = O.useContext(_v);
	return t || se(!1), t;
}
function jv(e) {
	let t = O.useContext(Mn);
	return t || se(!1), t;
}
function uf(e) {
	let t = jv(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || se(!1), n.route.id;
}
function $v() {
	var e;
	let t = O.useContext(lf),
		n = Rv(Nr.UseRouteError),
		r = uf(Nr.UseRouteError);
	return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Nv() {
	let { router: e } = Ov(Js.UseNavigateStable),
		t = uf(Nr.UseNavigateStable),
		n = O.useRef(!1);
	return (
		af(() => {
			n.current = !0;
		}),
		O.useCallback(
			function (i, o) {
				o === void 0 && (o = {}),
					n.current &&
						(typeof i == 'number'
							? e.navigate(i)
							: e.navigate(i, Qi({ fromRouteId: t }, o)));
			},
			[e, t]
		)
	);
}
function qs(e) {
	se(!1);
}
function Lv(e) {
	let {
		basename: t = '/',
		children: n = null,
		location: r,
		navigationType: i = Et.Pop,
		navigator: o,
		static: s = !1,
	} = e;
	po() && se(!1);
	let l = t.replace(/^\/*/, '/'),
		a = O.useMemo(() => ({ basename: l, navigator: o, static: s }), [l, o, s]);
	typeof r == 'string' && (r = sn(r));
	let {
			pathname: u = '/',
			search: c = '',
			hash: d = '',
			state: p = null,
			key: g = 'default',
		} = r,
		m = O.useMemo(() => {
			let y = of(u, l);
			return y == null
				? null
				: {
						location: { pathname: y, search: c, hash: d, state: p, key: g },
						navigationType: i,
				  };
		}, [l, u, c, d, p, g, i]);
	return m == null
		? null
		: O.createElement(
				fo.Provider,
				{ value: a },
				O.createElement(ho.Provider, { children: n, value: m })
		  );
}
function Iv(e) {
	let { children: t, location: n } = e;
	return Sv(Ys(t), n);
}
var _u;
(function (e) {
	(e[(e.pending = 0)] = 'pending'),
		(e[(e.success = 1)] = 'success'),
		(e[(e.error = 2)] = 'error');
})(_u || (_u = {}));
new Promise(() => {});
function Ys(e, t) {
	t === void 0 && (t = []);
	let n = [];
	return (
		O.Children.forEach(e, (r, i) => {
			if (!O.isValidElement(r)) return;
			let o = [...t, i];
			if (r.type === O.Fragment) {
				n.push.apply(n, Ys(r.props.children, o));
				return;
			}
			r.type !== qs && se(!1), !r.props.index || !r.props.children || se(!1);
			let s = {
				id: r.props.id || o.join('-'),
				caseSensitive: r.props.caseSensitive,
				element: r.props.element,
				Component: r.props.Component,
				index: r.props.index,
				path: r.props.path,
				loader: r.props.loader,
				action: r.props.action,
				errorElement: r.props.errorElement,
				ErrorBoundary: r.props.ErrorBoundary,
				hasErrorBoundary:
					r.props.ErrorBoundary != null || r.props.errorElement != null,
				shouldRevalidate: r.props.shouldRevalidate,
				handle: r.props.handle,
				lazy: r.props.lazy,
			};
			r.props.children && (s.children = Ys(r.props.children, o)), n.push(s);
		}),
		n
	);
}
/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Av = 'startTransition',
	wu = Af[Av];
function Dv(e) {
	let { basename: t, children: n, future: r, window: i } = e,
		o = O.useRef();
	o.current == null && (o.current = Kp({ window: i, v5Compat: !0 }));
	let s = o.current,
		[l, a] = O.useState({ action: s.action, location: s.location }),
		{ v7_startTransition: u } = r || {},
		c = O.useCallback(
			(d) => {
				u && wu ? wu(() => a(d)) : a(d);
			},
			[a, u]
		);
	return (
		O.useLayoutEffect(() => s.listen(c), [s, c]),
		O.createElement(Lv, {
			basename: t,
			children: n,
			location: l.location,
			navigationType: l.action,
			navigator: s,
		})
	);
}
var Su;
(function (e) {
	(e.UseScrollRestoration = 'useScrollRestoration'),
		(e.UseSubmit = 'useSubmit'),
		(e.UseSubmitFetcher = 'useSubmitFetcher'),
		(e.UseFetcher = 'useFetcher');
})(Su || (Su = {}));
var ku;
(function (e) {
	(e.UseFetchers = 'useFetchers'),
		(e.UseScrollRestoration = 'useScrollRestoration');
})(ku || (ku = {}));
const Uv = ({ title: e, picture: t }) =>
		D.jsxs('div', {
			className: 'card',
			children: [
				D.jsx('img', { className: 'preview', src: t, alt: 'Game-Picture' }),
				D.jsx('h1', { className: 'card-title', children: e }),
			],
		}),
	zv = () =>
		[['/assets/main.jpg', 'The Pond']].map((n, r) =>
			D.jsx(Uv, { title: n[1], picture: n[0] }, r)
		);
function Fv() {
	const { state: e } = vo();
	return D.jsxs(D.Fragment, {
		children: [e && alert(`You solved it in ${e} seconds`), D.jsx(zv, {})],
	});
}
const Mv = '/assets/waldo-1a370fa3.jpg',
	bv = '/assets/wilma-64ca72ef.jpg',
	Bv = '/assets/wizard-51acf442.jpg';
const Hv = 'modulepreload',
	Vv = function (e) {
		return '/' + e;
	},
	Eu = {},
	mo = function (t, n, r) {
		if (!n || n.length === 0) return t();
		const i = document.getElementsByTagName('link');
		return Promise.all(
			n.map((o) => {
				if (((o = Vv(o)), o in Eu)) return;
				Eu[o] = !0;
				const s = o.endsWith('.css'),
					l = s ? '[rel="stylesheet"]' : '';
				if (!!r)
					for (let c = i.length - 1; c >= 0; c--) {
						const d = i[c];
						if (d.href === o && (!s || d.rel === 'stylesheet')) return;
					}
				else if (document.querySelector(`link[href="${o}"]${l}`)) return;
				const u = document.createElement('link');
				if (
					((u.rel = s ? 'stylesheet' : Hv),
					s || ((u.as = 'script'), (u.crossOrigin = '')),
					(u.href = o),
					document.head.appendChild(u),
					s)
				)
					return new Promise((c, d) => {
						u.addEventListener('load', c),
							u.addEventListener('error', () =>
								d(new Error(`Unable to preload CSS for ${o}`))
							);
					});
			})
		)
			.then(() => t())
			.catch((o) => {
				const s = new Event('vite:preloadError', { cancelable: !0 });
				if (((s.payload = o), window.dispatchEvent(s), !s.defaultPrevented))
					throw o;
			});
	};
var Wv =
	(globalThis && globalThis.__awaiter) ||
	function (e, t, n, r) {
		function i(o) {
			return o instanceof n
				? o
				: new n(function (s) {
						s(o);
				  });
		}
		return new (n || (n = Promise))(function (o, s) {
			function l(c) {
				try {
					u(r.next(c));
				} catch (d) {
					s(d);
				}
			}
			function a(c) {
				try {
					u(r.throw(c));
				} catch (d) {
					s(d);
				}
			}
			function u(c) {
				c.done ? o(c.value) : i(c.value).then(l, a);
			}
			u((r = r.apply(e, t || [])).next());
		});
	};
const Kv = (e) => {
	let t;
	return (
		e
			? (t = e)
			: typeof fetch > 'u'
			? (t = (...n) =>
					Wv(void 0, void 0, void 0, function* () {
						return yield (yield mo(
							() => Promise.resolve().then(() => yo),
							void 0
						)).fetch(...n);
					}))
			: (t = fetch),
		(...n) => t(...n)
	);
};
class Zl extends Error {
	constructor(t, n = 'FunctionsError', r) {
		super(t), (this.name = n), (this.context = r);
	}
}
class Qv extends Zl {
	constructor(t) {
		super(
			'Failed to send a request to the Edge Function',
			'FunctionsFetchError',
			t
		);
	}
}
class Gv extends Zl {
	constructor(t) {
		super('Relay Error invoking the Edge Function', 'FunctionsRelayError', t);
	}
}
class Jv extends Zl {
	constructor(t) {
		super(
			'Edge Function returned a non-2xx status code',
			'FunctionsHttpError',
			t
		);
	}
}
var qv =
	(globalThis && globalThis.__awaiter) ||
	function (e, t, n, r) {
		function i(o) {
			return o instanceof n
				? o
				: new n(function (s) {
						s(o);
				  });
		}
		return new (n || (n = Promise))(function (o, s) {
			function l(c) {
				try {
					u(r.next(c));
				} catch (d) {
					s(d);
				}
			}
			function a(c) {
				try {
					u(r.throw(c));
				} catch (d) {
					s(d);
				}
			}
			function u(c) {
				c.done ? o(c.value) : i(c.value).then(l, a);
			}
			u((r = r.apply(e, t || [])).next());
		});
	};
class Yv {
	constructor(t, { headers: n = {}, customFetch: r } = {}) {
		(this.url = t), (this.headers = n), (this.fetch = Kv(r));
	}
	setAuth(t) {
		this.headers.Authorization = `Bearer ${t}`;
	}
	invoke(t, n = {}) {
		var r;
		return qv(this, void 0, void 0, function* () {
			try {
				const { headers: i, method: o, body: s } = n;
				let l = {},
					a;
				s &&
					((i && !Object.prototype.hasOwnProperty.call(i, 'Content-Type')) ||
						!i) &&
					((typeof Blob < 'u' && s instanceof Blob) || s instanceof ArrayBuffer
						? ((l['Content-Type'] = 'application/octet-stream'), (a = s))
						: typeof s == 'string'
						? ((l['Content-Type'] = 'text/plain'), (a = s))
						: typeof FormData < 'u' && s instanceof FormData
						? (a = s)
						: ((l['Content-Type'] = 'application/json'),
						  (a = JSON.stringify(s))));
				const u = yield this.fetch(`${this.url}/${t}`, {
						method: o || 'POST',
						headers: Object.assign(
							Object.assign(Object.assign({}, l), this.headers),
							i
						),
						body: a,
					}).catch((g) => {
						throw new Qv(g);
					}),
					c = u.headers.get('x-relay-error');
				if (c && c === 'true') throw new Gv(u);
				if (!u.ok) throw new Jv(u);
				let d = (
						(r = u.headers.get('Content-Type')) !== null && r !== void 0
							? r
							: 'text/plain'
					)
						.split(';')[0]
						.trim(),
					p;
				return (
					d === 'application/json'
						? (p = yield u.json())
						: d === 'application/octet-stream'
						? (p = yield u.blob())
						: d === 'multipart/form-data'
						? (p = yield u.formData())
						: (p = yield u.text()),
					{ data: p, error: null }
				);
			} catch (i) {
				return { data: null, error: i };
			}
		});
	}
}
var Xs = { exports: {} };
(function (e, t) {
	var n = typeof self < 'u' ? self : _f,
		r = (function () {
			function o() {
				(this.fetch = !1), (this.DOMException = n.DOMException);
			}
			return (o.prototype = n), new o();
		})();
	(function (o) {
		(function (s) {
			var l = {
				searchParams: 'URLSearchParams' in o,
				iterable: 'Symbol' in o && 'iterator' in Symbol,
				blob:
					'FileReader' in o &&
					'Blob' in o &&
					(function () {
						try {
							return new Blob(), !0;
						} catch {
							return !1;
						}
					})(),
				formData: 'FormData' in o,
				arrayBuffer: 'ArrayBuffer' in o,
			};
			function a(_) {
				return _ && DataView.prototype.isPrototypeOf(_);
			}
			if (l.arrayBuffer)
				var u = [
						'[object Int8Array]',
						'[object Uint8Array]',
						'[object Uint8ClampedArray]',
						'[object Int16Array]',
						'[object Uint16Array]',
						'[object Int32Array]',
						'[object Uint32Array]',
						'[object Float32Array]',
						'[object Float64Array]',
					],
					c =
						ArrayBuffer.isView ||
						function (_) {
							return _ && u.indexOf(Object.prototype.toString.call(_)) > -1;
						};
			function d(_) {
				if (
					(typeof _ != 'string' && (_ = String(_)),
					/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(_))
				)
					throw new TypeError('Invalid character in header field name');
				return _.toLowerCase();
			}
			function p(_) {
				return typeof _ != 'string' && (_ = String(_)), _;
			}
			function g(_) {
				var C = {
					next: function () {
						var I = _.shift();
						return { done: I === void 0, value: I };
					},
				};
				return (
					l.iterable &&
						(C[Symbol.iterator] = function () {
							return C;
						}),
					C
				);
			}
			function m(_) {
				(this.map = {}),
					_ instanceof m
						? _.forEach(function (C, I) {
								this.append(I, C);
						  }, this)
						: Array.isArray(_)
						? _.forEach(function (C) {
								this.append(C[0], C[1]);
						  }, this)
						: _ &&
						  Object.getOwnPropertyNames(_).forEach(function (C) {
								this.append(C, _[C]);
						  }, this);
			}
			(m.prototype.append = function (_, C) {
				(_ = d(_)), (C = p(C));
				var I = this.map[_];
				this.map[_] = I ? I + ', ' + C : C;
			}),
				(m.prototype.delete = function (_) {
					delete this.map[d(_)];
				}),
				(m.prototype.get = function (_) {
					return (_ = d(_)), this.has(_) ? this.map[_] : null;
				}),
				(m.prototype.has = function (_) {
					return this.map.hasOwnProperty(d(_));
				}),
				(m.prototype.set = function (_, C) {
					this.map[d(_)] = p(C);
				}),
				(m.prototype.forEach = function (_, C) {
					for (var I in this.map)
						this.map.hasOwnProperty(I) && _.call(C, this.map[I], I, this);
				}),
				(m.prototype.keys = function () {
					var _ = [];
					return (
						this.forEach(function (C, I) {
							_.push(I);
						}),
						g(_)
					);
				}),
				(m.prototype.values = function () {
					var _ = [];
					return (
						this.forEach(function (C) {
							_.push(C);
						}),
						g(_)
					);
				}),
				(m.prototype.entries = function () {
					var _ = [];
					return (
						this.forEach(function (C, I) {
							_.push([I, C]);
						}),
						g(_)
					);
				}),
				l.iterable && (m.prototype[Symbol.iterator] = m.prototype.entries);
			function y(_) {
				if (_.bodyUsed) return Promise.reject(new TypeError('Already read'));
				_.bodyUsed = !0;
			}
			function S(_) {
				return new Promise(function (C, I) {
					(_.onload = function () {
						C(_.result);
					}),
						(_.onerror = function () {
							I(_.error);
						});
				});
			}
			function h(_) {
				var C = new FileReader(),
					I = S(C);
				return C.readAsArrayBuffer(_), I;
			}
			function f(_) {
				var C = new FileReader(),
					I = S(C);
				return C.readAsText(_), I;
			}
			function v(_) {
				for (
					var C = new Uint8Array(_), I = new Array(C.length), ne = 0;
					ne < C.length;
					ne++
				)
					I[ne] = String.fromCharCode(C[ne]);
				return I.join('');
			}
			function w(_) {
				if (_.slice) return _.slice(0);
				var C = new Uint8Array(_.byteLength);
				return C.set(new Uint8Array(_)), C.buffer;
			}
			function x() {
				return (
					(this.bodyUsed = !1),
					(this._initBody = function (_) {
						(this._bodyInit = _),
							_
								? typeof _ == 'string'
									? (this._bodyText = _)
									: l.blob && Blob.prototype.isPrototypeOf(_)
									? (this._bodyBlob = _)
									: l.formData && FormData.prototype.isPrototypeOf(_)
									? (this._bodyFormData = _)
									: l.searchParams && URLSearchParams.prototype.isPrototypeOf(_)
									? (this._bodyText = _.toString())
									: l.arrayBuffer && l.blob && a(_)
									? ((this._bodyArrayBuffer = w(_.buffer)),
									  (this._bodyInit = new Blob([this._bodyArrayBuffer])))
									: l.arrayBuffer &&
									  (ArrayBuffer.prototype.isPrototypeOf(_) || c(_))
									? (this._bodyArrayBuffer = w(_))
									: (this._bodyText = _ = Object.prototype.toString.call(_))
								: (this._bodyText = ''),
							this.headers.get('content-type') ||
								(typeof _ == 'string'
									? this.headers.set('content-type', 'text/plain;charset=UTF-8')
									: this._bodyBlob && this._bodyBlob.type
									? this.headers.set('content-type', this._bodyBlob.type)
									: l.searchParams &&
									  URLSearchParams.prototype.isPrototypeOf(_) &&
									  this.headers.set(
											'content-type',
											'application/x-www-form-urlencoded;charset=UTF-8'
									  ));
					}),
					l.blob &&
						((this.blob = function () {
							var _ = y(this);
							if (_) return _;
							if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
							if (this._bodyArrayBuffer)
								return Promise.resolve(new Blob([this._bodyArrayBuffer]));
							if (this._bodyFormData)
								throw new Error('could not read FormData body as blob');
							return Promise.resolve(new Blob([this._bodyText]));
						}),
						(this.arrayBuffer = function () {
							return this._bodyArrayBuffer
								? y(this) || Promise.resolve(this._bodyArrayBuffer)
								: this.blob().then(h);
						})),
					(this.text = function () {
						var _ = y(this);
						if (_) return _;
						if (this._bodyBlob) return f(this._bodyBlob);
						if (this._bodyArrayBuffer)
							return Promise.resolve(v(this._bodyArrayBuffer));
						if (this._bodyFormData)
							throw new Error('could not read FormData body as text');
						return Promise.resolve(this._bodyText);
					}),
					l.formData &&
						(this.formData = function () {
							return this.text().then(G);
						}),
					(this.json = function () {
						return this.text().then(JSON.parse);
					}),
					this
				);
			}
			var j = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
			function $(_) {
				var C = _.toUpperCase();
				return j.indexOf(C) > -1 ? C : _;
			}
			function R(_, C) {
				C = C || {};
				var I = C.body;
				if (_ instanceof R) {
					if (_.bodyUsed) throw new TypeError('Already read');
					(this.url = _.url),
						(this.credentials = _.credentials),
						C.headers || (this.headers = new m(_.headers)),
						(this.method = _.method),
						(this.mode = _.mode),
						(this.signal = _.signal),
						!I && _._bodyInit != null && ((I = _._bodyInit), (_.bodyUsed = !0));
				} else this.url = String(_);
				if (
					((this.credentials =
						C.credentials || this.credentials || 'same-origin'),
					(C.headers || !this.headers) && (this.headers = new m(C.headers)),
					(this.method = $(C.method || this.method || 'GET')),
					(this.mode = C.mode || this.mode || null),
					(this.signal = C.signal || this.signal),
					(this.referrer = null),
					(this.method === 'GET' || this.method === 'HEAD') && I)
				)
					throw new TypeError('Body not allowed for GET or HEAD requests');
				this._initBody(I);
			}
			R.prototype.clone = function () {
				return new R(this, { body: this._bodyInit });
			};
			function G(_) {
				var C = new FormData();
				return (
					_.trim()
						.split('&')
						.forEach(function (I) {
							if (I) {
								var ne = I.split('='),
									E = ne.shift().replace(/\+/g, ' '),
									T = ne.join('=').replace(/\+/g, ' ');
								C.append(decodeURIComponent(E), decodeURIComponent(T));
							}
						}),
					C
				);
			}
			function A(_) {
				var C = new m(),
					I = _.replace(/\r?\n[\t ]+/g, ' ');
				return (
					I.split(/\r?\n/).forEach(function (ne) {
						var E = ne.split(':'),
							T = E.shift().trim();
						if (T) {
							var L = E.join(':').trim();
							C.append(T, L);
						}
					}),
					C
				);
			}
			x.call(R.prototype);
			function X(_, C) {
				C || (C = {}),
					(this.type = 'default'),
					(this.status = C.status === void 0 ? 200 : C.status),
					(this.ok = this.status >= 200 && this.status < 300),
					(this.statusText = 'statusText' in C ? C.statusText : 'OK'),
					(this.headers = new m(C.headers)),
					(this.url = C.url || ''),
					this._initBody(_);
			}
			x.call(X.prototype),
				(X.prototype.clone = function () {
					return new X(this._bodyInit, {
						status: this.status,
						statusText: this.statusText,
						headers: new m(this.headers),
						url: this.url,
					});
				}),
				(X.error = function () {
					var _ = new X(null, { status: 0, statusText: '' });
					return (_.type = 'error'), _;
				});
			var Ut = [301, 302, 303, 307, 308];
			(X.redirect = function (_, C) {
				if (Ut.indexOf(C) === -1) throw new RangeError('Invalid status code');
				return new X(null, { status: C, headers: { location: _ } });
			}),
				(s.DOMException = o.DOMException);
			try {
				new s.DOMException();
			} catch {
				(s.DOMException = function (C, I) {
					(this.message = C), (this.name = I);
					var ne = Error(C);
					this.stack = ne.stack;
				}),
					(s.DOMException.prototype = Object.create(Error.prototype)),
					(s.DOMException.prototype.constructor = s.DOMException);
			}
			function tt(_, C) {
				return new Promise(function (I, ne) {
					var E = new R(_, C);
					if (E.signal && E.signal.aborted)
						return ne(new s.DOMException('Aborted', 'AbortError'));
					var T = new XMLHttpRequest();
					function L() {
						T.abort();
					}
					(T.onload = function () {
						var B = {
							status: T.status,
							statusText: T.statusText,
							headers: A(T.getAllResponseHeaders() || ''),
						};
						B.url =
							'responseURL' in T
								? T.responseURL
								: B.headers.get('X-Request-URL');
						var Z = 'response' in T ? T.response : T.responseText;
						I(new X(Z, B));
					}),
						(T.onerror = function () {
							ne(new TypeError('Network request failed'));
						}),
						(T.ontimeout = function () {
							ne(new TypeError('Network request failed'));
						}),
						(T.onabort = function () {
							ne(new s.DOMException('Aborted', 'AbortError'));
						}),
						T.open(E.method, E.url, !0),
						E.credentials === 'include'
							? (T.withCredentials = !0)
							: E.credentials === 'omit' && (T.withCredentials = !1),
						'responseType' in T && l.blob && (T.responseType = 'blob'),
						E.headers.forEach(function (B, Z) {
							T.setRequestHeader(Z, B);
						}),
						E.signal &&
							(E.signal.addEventListener('abort', L),
							(T.onreadystatechange = function () {
								T.readyState === 4 && E.signal.removeEventListener('abort', L);
							})),
						T.send(typeof E._bodyInit > 'u' ? null : E._bodyInit);
				});
			}
			return (
				(tt.polyfill = !0),
				o.fetch ||
					((o.fetch = tt), (o.Headers = m), (o.Request = R), (o.Response = X)),
				(s.Headers = m),
				(s.Request = R),
				(s.Response = X),
				(s.fetch = tt),
				Object.defineProperty(s, '__esModule', { value: !0 }),
				s
			);
		})({});
	})(r),
		(r.fetch.ponyfill = !0),
		delete r.fetch.polyfill;
	var i = r;
	(t = i.fetch),
		(t.default = i.fetch),
		(t.fetch = i.fetch),
		(t.Headers = i.Headers),
		(t.Request = i.Request),
		(t.Response = i.Response),
		(e.exports = t);
})(Xs, Xs.exports);
var ea = Xs.exports;
const ta = Mu(ea),
	yo = Fu({ __proto__: null, default: ta }, [ea]);
class Xv {
	constructor(t) {
		(this.shouldThrowOnError = !1),
			(this.method = t.method),
			(this.url = t.url),
			(this.headers = t.headers),
			(this.schema = t.schema),
			(this.body = t.body),
			(this.shouldThrowOnError = t.shouldThrowOnError),
			(this.signal = t.signal),
			(this.isMaybeSingle = t.isMaybeSingle),
			t.fetch
				? (this.fetch = t.fetch)
				: typeof fetch > 'u'
				? (this.fetch = ta)
				: (this.fetch = fetch);
	}
	throwOnError() {
		return (this.shouldThrowOnError = !0), this;
	}
	then(t, n) {
		this.schema === void 0 ||
			(['GET', 'HEAD'].includes(this.method)
				? (this.headers['Accept-Profile'] = this.schema)
				: (this.headers['Content-Profile'] = this.schema)),
			this.method !== 'GET' &&
				this.method !== 'HEAD' &&
				(this.headers['Content-Type'] = 'application/json');
		const r = this.fetch;
		let i = r(this.url.toString(), {
			method: this.method,
			headers: this.headers,
			body: JSON.stringify(this.body),
			signal: this.signal,
		}).then(async (o) => {
			var s, l, a;
			let u = null,
				c = null,
				d = null,
				p = o.status,
				g = o.statusText;
			if (o.ok) {
				if (this.method !== 'HEAD') {
					const h = await o.text();
					h === '' ||
						(this.headers.Accept === 'text/csv' ||
						(this.headers.Accept &&
							this.headers.Accept.includes('application/vnd.pgrst.plan+text'))
							? (c = h)
							: (c = JSON.parse(h)));
				}
				const y =
						(s = this.headers.Prefer) === null || s === void 0
							? void 0
							: s.match(/count=(exact|planned|estimated)/),
					S =
						(l = o.headers.get('content-range')) === null || l === void 0
							? void 0
							: l.split('/');
				y && S && S.length > 1 && (d = parseInt(S[1])),
					this.isMaybeSingle &&
						this.method === 'GET' &&
						Array.isArray(c) &&
						(c.length > 1
							? ((u = {
									code: 'PGRST116',
									details: `Results contain ${c.length} rows, application/vnd.pgrst.object+json requires 1 row`,
									hint: null,
									message:
										'JSON object requested, multiple (or no) rows returned',
							  }),
							  (c = null),
							  (d = null),
							  (p = 406),
							  (g = 'Not Acceptable'))
							: c.length === 1
							? (c = c[0])
							: (c = null));
			} else {
				const y = await o.text();
				try {
					(u = JSON.parse(y)),
						Array.isArray(u) &&
							o.status === 404 &&
							((c = []), (u = null), (p = 200), (g = 'OK'));
				} catch {
					o.status === 404 && y === ''
						? ((p = 204), (g = 'No Content'))
						: (u = { message: y });
				}
				if (
					(u &&
						this.isMaybeSingle &&
						!((a = u == null ? void 0 : u.details) === null || a === void 0) &&
						a.includes('Results contain 0 rows') &&
						((u = null), (p = 200), (g = 'OK')),
					u && this.shouldThrowOnError)
				)
					throw u;
			}
			return { error: u, data: c, count: d, status: p, statusText: g };
		});
		return (
			this.shouldThrowOnError ||
				(i = i.catch((o) => {
					var s, l, a;
					return {
						error: {
							message: `${
								(s = o == null ? void 0 : o.name) !== null && s !== void 0
									? s
									: 'FetchError'
							}: ${o == null ? void 0 : o.message}`,
							details: `${
								(l = o == null ? void 0 : o.stack) !== null && l !== void 0
									? l
									: ''
							}`,
							hint: '',
							code: `${
								(a = o == null ? void 0 : o.code) !== null && a !== void 0
									? a
									: ''
							}`,
						},
						data: null,
						count: null,
						status: 0,
						statusText: '',
					};
				})),
			i.then(t, n)
		);
	}
}
class Zv extends Xv {
	select(t) {
		let n = !1;
		const r = (t ?? '*')
			.split('')
			.map((i) => (/\s/.test(i) && !n ? '' : (i === '"' && (n = !n), i)))
			.join('');
		return (
			this.url.searchParams.set('select', r),
			this.headers.Prefer && (this.headers.Prefer += ','),
			(this.headers.Prefer += 'return=representation'),
			this
		);
	}
	order(t, { ascending: n = !0, nullsFirst: r, foreignTable: i } = {}) {
		const o = i ? `${i}.order` : 'order',
			s = this.url.searchParams.get(o);
		return (
			this.url.searchParams.set(
				o,
				`${s ? `${s},` : ''}${t}.${n ? 'asc' : 'desc'}${
					r === void 0 ? '' : r ? '.nullsfirst' : '.nullslast'
				}`
			),
			this
		);
	}
	limit(t, { foreignTable: n } = {}) {
		const r = typeof n > 'u' ? 'limit' : `${n}.limit`;
		return this.url.searchParams.set(r, `${t}`), this;
	}
	range(t, n, { foreignTable: r } = {}) {
		const i = typeof r > 'u' ? 'offset' : `${r}.offset`,
			o = typeof r > 'u' ? 'limit' : `${r}.limit`;
		return (
			this.url.searchParams.set(i, `${t}`),
			this.url.searchParams.set(o, `${n - t + 1}`),
			this
		);
	}
	abortSignal(t) {
		return (this.signal = t), this;
	}
	single() {
		return (this.headers.Accept = 'application/vnd.pgrst.object+json'), this;
	}
	maybeSingle() {
		return (
			this.method === 'GET'
				? (this.headers.Accept = 'application/json')
				: (this.headers.Accept = 'application/vnd.pgrst.object+json'),
			(this.isMaybeSingle = !0),
			this
		);
	}
	csv() {
		return (this.headers.Accept = 'text/csv'), this;
	}
	geojson() {
		return (this.headers.Accept = 'application/geo+json'), this;
	}
	explain({
		analyze: t = !1,
		verbose: n = !1,
		settings: r = !1,
		buffers: i = !1,
		wal: o = !1,
		format: s = 'text',
	} = {}) {
		const l = [
				t ? 'analyze' : null,
				n ? 'verbose' : null,
				r ? 'settings' : null,
				i ? 'buffers' : null,
				o ? 'wal' : null,
			]
				.filter(Boolean)
				.join('|'),
			a = this.headers.Accept;
		return (
			(this.headers.Accept = `application/vnd.pgrst.plan+${s}; for="${a}"; options=${l};`),
			s === 'json' ? this : this
		);
	}
	rollback() {
		var t;
		return (
			((t = this.headers.Prefer) !== null && t !== void 0 ? t : '').trim()
				.length > 0
				? (this.headers.Prefer += ',tx=rollback')
				: (this.headers.Prefer = 'tx=rollback'),
			this
		);
	}
	returns() {
		return this;
	}
}
class dn extends Zv {
	eq(t, n) {
		return this.url.searchParams.append(t, `eq.${n}`), this;
	}
	neq(t, n) {
		return this.url.searchParams.append(t, `neq.${n}`), this;
	}
	gt(t, n) {
		return this.url.searchParams.append(t, `gt.${n}`), this;
	}
	gte(t, n) {
		return this.url.searchParams.append(t, `gte.${n}`), this;
	}
	lt(t, n) {
		return this.url.searchParams.append(t, `lt.${n}`), this;
	}
	lte(t, n) {
		return this.url.searchParams.append(t, `lte.${n}`), this;
	}
	like(t, n) {
		return this.url.searchParams.append(t, `like.${n}`), this;
	}
	likeAllOf(t, n) {
		return this.url.searchParams.append(t, `like(all).{${n.join(',')}}`), this;
	}
	likeAnyOf(t, n) {
		return this.url.searchParams.append(t, `like(any).{${n.join(',')}}`), this;
	}
	ilike(t, n) {
		return this.url.searchParams.append(t, `ilike.${n}`), this;
	}
	ilikeAllOf(t, n) {
		return this.url.searchParams.append(t, `ilike(all).{${n.join(',')}}`), this;
	}
	ilikeAnyOf(t, n) {
		return this.url.searchParams.append(t, `ilike(any).{${n.join(',')}}`), this;
	}
	is(t, n) {
		return this.url.searchParams.append(t, `is.${n}`), this;
	}
	in(t, n) {
		const r = n
			.map((i) =>
				typeof i == 'string' && new RegExp('[,()]').test(i) ? `"${i}"` : `${i}`
			)
			.join(',');
		return this.url.searchParams.append(t, `in.(${r})`), this;
	}
	contains(t, n) {
		return (
			typeof n == 'string'
				? this.url.searchParams.append(t, `cs.${n}`)
				: Array.isArray(n)
				? this.url.searchParams.append(t, `cs.{${n.join(',')}}`)
				: this.url.searchParams.append(t, `cs.${JSON.stringify(n)}`),
			this
		);
	}
	containedBy(t, n) {
		return (
			typeof n == 'string'
				? this.url.searchParams.append(t, `cd.${n}`)
				: Array.isArray(n)
				? this.url.searchParams.append(t, `cd.{${n.join(',')}}`)
				: this.url.searchParams.append(t, `cd.${JSON.stringify(n)}`),
			this
		);
	}
	rangeGt(t, n) {
		return this.url.searchParams.append(t, `sr.${n}`), this;
	}
	rangeGte(t, n) {
		return this.url.searchParams.append(t, `nxl.${n}`), this;
	}
	rangeLt(t, n) {
		return this.url.searchParams.append(t, `sl.${n}`), this;
	}
	rangeLte(t, n) {
		return this.url.searchParams.append(t, `nxr.${n}`), this;
	}
	rangeAdjacent(t, n) {
		return this.url.searchParams.append(t, `adj.${n}`), this;
	}
	overlaps(t, n) {
		return (
			typeof n == 'string'
				? this.url.searchParams.append(t, `ov.${n}`)
				: this.url.searchParams.append(t, `ov.{${n.join(',')}}`),
			this
		);
	}
	textSearch(t, n, { config: r, type: i } = {}) {
		let o = '';
		i === 'plain'
			? (o = 'pl')
			: i === 'phrase'
			? (o = 'ph')
			: i === 'websearch' && (o = 'w');
		const s = r === void 0 ? '' : `(${r})`;
		return this.url.searchParams.append(t, `${o}fts${s}.${n}`), this;
	}
	match(t) {
		return (
			Object.entries(t).forEach(([n, r]) => {
				this.url.searchParams.append(n, `eq.${r}`);
			}),
			this
		);
	}
	not(t, n, r) {
		return this.url.searchParams.append(t, `not.${n}.${r}`), this;
	}
	or(t, { foreignTable: n } = {}) {
		const r = n ? `${n}.or` : 'or';
		return this.url.searchParams.append(r, `(${t})`), this;
	}
	filter(t, n, r) {
		return this.url.searchParams.append(t, `${n}.${r}`), this;
	}
}
class em {
	constructor(t, { headers: n = {}, schema: r, fetch: i }) {
		(this.url = t), (this.headers = n), (this.schema = r), (this.fetch = i);
	}
	select(t, { head: n = !1, count: r } = {}) {
		const i = n ? 'HEAD' : 'GET';
		let o = !1;
		const s = (t ?? '*')
			.split('')
			.map((l) => (/\s/.test(l) && !o ? '' : (l === '"' && (o = !o), l)))
			.join('');
		return (
			this.url.searchParams.set('select', s),
			r && (this.headers.Prefer = `count=${r}`),
			new dn({
				method: i,
				url: this.url,
				headers: this.headers,
				schema: this.schema,
				fetch: this.fetch,
				allowEmpty: !1,
			})
		);
	}
	insert(t, { count: n, defaultToNull: r = !0 } = {}) {
		const i = 'POST',
			o = [];
		if (
			(this.headers.Prefer && o.push(this.headers.Prefer),
			n && o.push(`count=${n}`),
			r || o.push('missing=default'),
			(this.headers.Prefer = o.join(',')),
			Array.isArray(t))
		) {
			const s = t.reduce((l, a) => l.concat(Object.keys(a)), []);
			if (s.length > 0) {
				const l = [...new Set(s)].map((a) => `"${a}"`);
				this.url.searchParams.set('columns', l.join(','));
			}
		}
		return new dn({
			method: i,
			url: this.url,
			headers: this.headers,
			schema: this.schema,
			body: t,
			fetch: this.fetch,
			allowEmpty: !1,
		});
	}
	upsert(
		t,
		{
			onConflict: n,
			ignoreDuplicates: r = !1,
			count: i,
			defaultToNull: o = !0,
		} = {}
	) {
		const s = 'POST',
			l = [`resolution=${r ? 'ignore' : 'merge'}-duplicates`];
		if (
			(n !== void 0 && this.url.searchParams.set('on_conflict', n),
			this.headers.Prefer && l.push(this.headers.Prefer),
			i && l.push(`count=${i}`),
			o || l.push('missing=default'),
			(this.headers.Prefer = l.join(',')),
			Array.isArray(t))
		) {
			const a = t.reduce((u, c) => u.concat(Object.keys(c)), []);
			if (a.length > 0) {
				const u = [...new Set(a)].map((c) => `"${c}"`);
				this.url.searchParams.set('columns', u.join(','));
			}
		}
		return new dn({
			method: s,
			url: this.url,
			headers: this.headers,
			schema: this.schema,
			body: t,
			fetch: this.fetch,
			allowEmpty: !1,
		});
	}
	update(t, { count: n } = {}) {
		const r = 'PATCH',
			i = [];
		return (
			this.headers.Prefer && i.push(this.headers.Prefer),
			n && i.push(`count=${n}`),
			(this.headers.Prefer = i.join(',')),
			new dn({
				method: r,
				url: this.url,
				headers: this.headers,
				schema: this.schema,
				body: t,
				fetch: this.fetch,
				allowEmpty: !1,
			})
		);
	}
	delete({ count: t } = {}) {
		const n = 'DELETE',
			r = [];
		return (
			t && r.push(`count=${t}`),
			this.headers.Prefer && r.unshift(this.headers.Prefer),
			(this.headers.Prefer = r.join(',')),
			new dn({
				method: n,
				url: this.url,
				headers: this.headers,
				schema: this.schema,
				fetch: this.fetch,
				allowEmpty: !1,
			})
		);
	}
}
const tm = '1.7.2',
	nm = { 'X-Client-Info': `postgrest-js/${tm}` };
class rm {
	constructor(t, { headers: n = {}, schema: r, fetch: i } = {}) {
		(this.url = t),
			(this.headers = Object.assign(Object.assign({}, nm), n)),
			(this.schema = r),
			(this.fetch = i);
	}
	from(t) {
		const n = new URL(`${this.url}/${t}`);
		return new em(n, {
			headers: Object.assign({}, this.headers),
			schema: this.schema,
			fetch: this.fetch,
		});
	}
	rpc(t, n = {}, { head: r = !1, count: i } = {}) {
		let o;
		const s = new URL(`${this.url}/rpc/${t}`);
		let l;
		r
			? ((o = 'HEAD'),
			  Object.entries(n).forEach(([u, c]) => {
					s.searchParams.append(u, `${c}`);
			  }))
			: ((o = 'POST'), (l = n));
		const a = Object.assign({}, this.headers);
		return (
			i && (a.Prefer = `count=${i}`),
			new dn({
				method: o,
				url: s,
				headers: a,
				schema: this.schema,
				body: l,
				fetch: this.fetch,
				allowEmpty: !1,
			})
		);
	}
}
var Go, xu;
function im() {
	if (xu) return Go;
	xu = 1;
	var e = function () {
		if (typeof self == 'object' && self) return self;
		if (typeof window == 'object' && window) return window;
		throw new Error('Unable to resolve global `this`');
	};
	return (
		(Go = (function () {
			if (this) return this;
			if (typeof globalThis == 'object' && globalThis) return globalThis;
			try {
				Object.defineProperty(Object.prototype, '__global__', {
					get: function () {
						return this;
					},
					configurable: !0,
				});
			} catch {
				return e();
			}
			try {
				return __global__ || e();
			} finally {
				delete Object.prototype.__global__;
			}
		})()),
		Go
	);
}
const om = 'websocket',
	sm =
		'Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.',
	lm = [
		'websocket',
		'websockets',
		'socket',
		'networking',
		'comet',
		'push',
		'RFC-6455',
		'realtime',
		'server',
		'client',
	],
	am =
		'Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)',
	um = ['Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)'],
	cm = '1.0.34',
	dm = {
		type: 'git',
		url: 'https://github.com/theturtle32/WebSocket-Node.git',
	},
	fm = 'https://github.com/theturtle32/WebSocket-Node',
	hm = { node: '>=4.0.0' },
	pm = {
		bufferutil: '^4.0.1',
		debug: '^2.2.0',
		'es5-ext': '^0.10.50',
		'typedarray-to-buffer': '^3.1.5',
		'utf-8-validate': '^5.0.2',
		yaeti: '^0.0.6',
	},
	vm = {
		'buffer-equal': '^1.0.0',
		gulp: '^4.0.2',
		'gulp-jshint': '^2.0.4',
		'jshint-stylish': '^2.2.1',
		jshint: '^2.0.0',
		tape: '^4.9.1',
	},
	mm = { verbose: !1 },
	ym = { test: 'tape test/unit/*.js', gulp: 'gulp' },
	gm = 'index',
	_m = { lib: './lib' },
	wm = 'lib/browser.js',
	Sm = 'Apache-2.0',
	km = {
		name: om,
		description: sm,
		keywords: lm,
		author: am,
		contributors: um,
		version: cm,
		repository: dm,
		homepage: fm,
		engines: hm,
		dependencies: pm,
		devDependencies: vm,
		config: mm,
		scripts: ym,
		main: gm,
		directories: _m,
		browser: wm,
		license: Sm,
	};
var Em = km.version,
	Ht;
if (typeof globalThis == 'object') Ht = globalThis;
else
	try {
		Ht = im();
	} catch {
	} finally {
		if ((!Ht && typeof window < 'u' && (Ht = window), !Ht))
			throw new Error('Could not determine global this');
	}
var Lr = Ht.WebSocket || Ht.MozWebSocket,
	xm = Em;
function cf(e, t) {
	var n;
	return t ? (n = new Lr(e, t)) : (n = new Lr(e)), n;
}
Lr &&
	['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'].forEach(function (e) {
		Object.defineProperty(cf, e, {
			get: function () {
				return Lr[e];
			},
		});
	});
var Cm = { w3cwebsocket: Lr ? cf : null, version: xm };
const Tm = '2.7.3',
	Pm = { 'X-Client-Info': `realtime-js/${Tm}` },
	Om = '1.0.0',
	df = 1e4,
	Rm = 1e3;
var fr;
(function (e) {
	(e[(e.connecting = 0)] = 'connecting'),
		(e[(e.open = 1)] = 'open'),
		(e[(e.closing = 2)] = 'closing'),
		(e[(e.closed = 3)] = 'closed');
})(fr || (fr = {}));
var Pe;
(function (e) {
	(e.closed = 'closed'),
		(e.errored = 'errored'),
		(e.joined = 'joined'),
		(e.joining = 'joining'),
		(e.leaving = 'leaving');
})(Pe || (Pe = {}));
var Ve;
(function (e) {
	(e.close = 'phx_close'),
		(e.error = 'phx_error'),
		(e.join = 'phx_join'),
		(e.reply = 'phx_reply'),
		(e.leave = 'phx_leave'),
		(e.access_token = 'access_token');
})(Ve || (Ve = {}));
var Zs;
(function (e) {
	e.websocket = 'websocket';
})(Zs || (Zs = {}));
var Vt;
(function (e) {
	(e.Connecting = 'connecting'),
		(e.Open = 'open'),
		(e.Closing = 'closing'),
		(e.Closed = 'closed');
})(Vt || (Vt = {}));
class ff {
	constructor(t, n) {
		(this.callback = t),
			(this.timerCalc = n),
			(this.timer = void 0),
			(this.tries = 0),
			(this.callback = t),
			(this.timerCalc = n);
	}
	reset() {
		(this.tries = 0), clearTimeout(this.timer);
	}
	scheduleTimeout() {
		clearTimeout(this.timer),
			(this.timer = setTimeout(() => {
				(this.tries = this.tries + 1), this.callback();
			}, this.timerCalc(this.tries + 1)));
	}
}
class jm {
	constructor() {
		this.HEADER_LENGTH = 1;
	}
	decode(t, n) {
		return t.constructor === ArrayBuffer
			? n(this._binaryDecode(t))
			: n(typeof t == 'string' ? JSON.parse(t) : {});
	}
	_binaryDecode(t) {
		const n = new DataView(t),
			r = new TextDecoder();
		return this._decodeBroadcast(t, n, r);
	}
	_decodeBroadcast(t, n, r) {
		const i = n.getUint8(1),
			o = n.getUint8(2);
		let s = this.HEADER_LENGTH + 2;
		const l = r.decode(t.slice(s, s + i));
		s = s + i;
		const a = r.decode(t.slice(s, s + o));
		s = s + o;
		const u = JSON.parse(r.decode(t.slice(s, t.byteLength)));
		return { ref: null, topic: l, event: a, payload: u };
	}
}
class Jo {
	constructor(t, n, r = {}, i = df) {
		(this.channel = t),
			(this.event = n),
			(this.payload = r),
			(this.timeout = i),
			(this.sent = !1),
			(this.timeoutTimer = void 0),
			(this.ref = ''),
			(this.receivedResp = null),
			(this.recHooks = []),
			(this.refEvent = null),
			(this.rateLimited = !1);
	}
	resend(t) {
		(this.timeout = t),
			this._cancelRefEvent(),
			(this.ref = ''),
			(this.refEvent = null),
			(this.receivedResp = null),
			(this.sent = !1),
			this.send();
	}
	send() {
		if (this._hasReceived('timeout')) return;
		this.startTimeout(),
			(this.sent = !0),
			this.channel.socket.push({
				topic: this.channel.topic,
				event: this.event,
				payload: this.payload,
				ref: this.ref,
				join_ref: this.channel._joinRef(),
			}) === 'rate limited' && (this.rateLimited = !0);
	}
	updatePayload(t) {
		this.payload = Object.assign(Object.assign({}, this.payload), t);
	}
	receive(t, n) {
		var r;
		return (
			this._hasReceived(t) &&
				n(
					(r = this.receivedResp) === null || r === void 0 ? void 0 : r.response
				),
			this.recHooks.push({ status: t, callback: n }),
			this
		);
	}
	startTimeout() {
		if (this.timeoutTimer) return;
		(this.ref = this.channel.socket._makeRef()),
			(this.refEvent = this.channel._replyEventName(this.ref));
		const t = (n) => {
			this._cancelRefEvent(),
				this._cancelTimeout(),
				(this.receivedResp = n),
				this._matchReceive(n);
		};
		this.channel._on(this.refEvent, {}, t),
			(this.timeoutTimer = setTimeout(() => {
				this.trigger('timeout', {});
			}, this.timeout));
	}
	trigger(t, n) {
		this.refEvent &&
			this.channel._trigger(this.refEvent, { status: t, response: n });
	}
	destroy() {
		this._cancelRefEvent(), this._cancelTimeout();
	}
	_cancelRefEvent() {
		this.refEvent && this.channel._off(this.refEvent, {});
	}
	_cancelTimeout() {
		clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
	}
	_matchReceive({ status: t, response: n }) {
		this.recHooks.filter((r) => r.status === t).forEach((r) => r.callback(n));
	}
	_hasReceived(t) {
		return this.receivedResp && this.receivedResp.status === t;
	}
}
var Cu;
(function (e) {
	(e.SYNC = 'sync'), (e.JOIN = 'join'), (e.LEAVE = 'leave');
})(Cu || (Cu = {}));
class hr {
	constructor(t, n) {
		(this.channel = t),
			(this.state = {}),
			(this.pendingDiffs = []),
			(this.joinRef = null),
			(this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} });
		const r = (n == null ? void 0 : n.events) || {
			state: 'presence_state',
			diff: 'presence_diff',
		};
		this.channel._on(r.state, {}, (i) => {
			const { onJoin: o, onLeave: s, onSync: l } = this.caller;
			(this.joinRef = this.channel._joinRef()),
				(this.state = hr.syncState(this.state, i, o, s)),
				this.pendingDiffs.forEach((a) => {
					this.state = hr.syncDiff(this.state, a, o, s);
				}),
				(this.pendingDiffs = []),
				l();
		}),
			this.channel._on(r.diff, {}, (i) => {
				const { onJoin: o, onLeave: s, onSync: l } = this.caller;
				this.inPendingSyncState()
					? this.pendingDiffs.push(i)
					: ((this.state = hr.syncDiff(this.state, i, o, s)), l());
			}),
			this.onJoin((i, o, s) => {
				this.channel._trigger('presence', {
					event: 'join',
					key: i,
					currentPresences: o,
					newPresences: s,
				});
			}),
			this.onLeave((i, o, s) => {
				this.channel._trigger('presence', {
					event: 'leave',
					key: i,
					currentPresences: o,
					leftPresences: s,
				});
			}),
			this.onSync(() => {
				this.channel._trigger('presence', { event: 'sync' });
			});
	}
	static syncState(t, n, r, i) {
		const o = this.cloneDeep(t),
			s = this.transformState(n),
			l = {},
			a = {};
		return (
			this.map(o, (u, c) => {
				s[u] || (a[u] = c);
			}),
			this.map(s, (u, c) => {
				const d = o[u];
				if (d) {
					const p = c.map((S) => S.presence_ref),
						g = d.map((S) => S.presence_ref),
						m = c.filter((S) => g.indexOf(S.presence_ref) < 0),
						y = d.filter((S) => p.indexOf(S.presence_ref) < 0);
					m.length > 0 && (l[u] = m), y.length > 0 && (a[u] = y);
				} else l[u] = c;
			}),
			this.syncDiff(o, { joins: l, leaves: a }, r, i)
		);
	}
	static syncDiff(t, n, r, i) {
		const { joins: o, leaves: s } = {
			joins: this.transformState(n.joins),
			leaves: this.transformState(n.leaves),
		};
		return (
			r || (r = () => {}),
			i || (i = () => {}),
			this.map(o, (l, a) => {
				var u;
				const c = (u = t[l]) !== null && u !== void 0 ? u : [];
				if (((t[l] = this.cloneDeep(a)), c.length > 0)) {
					const d = t[l].map((g) => g.presence_ref),
						p = c.filter((g) => d.indexOf(g.presence_ref) < 0);
					t[l].unshift(...p);
				}
				r(l, c, a);
			}),
			this.map(s, (l, a) => {
				let u = t[l];
				if (!u) return;
				const c = a.map((d) => d.presence_ref);
				(u = u.filter((d) => c.indexOf(d.presence_ref) < 0)),
					(t[l] = u),
					i(l, u, a),
					u.length === 0 && delete t[l];
			}),
			t
		);
	}
	static map(t, n) {
		return Object.getOwnPropertyNames(t).map((r) => n(r, t[r]));
	}
	static transformState(t) {
		return (
			(t = this.cloneDeep(t)),
			Object.getOwnPropertyNames(t).reduce((n, r) => {
				const i = t[r];
				return (
					'metas' in i
						? (n[r] = i.metas.map(
								(o) => (
									(o.presence_ref = o.phx_ref),
									delete o.phx_ref,
									delete o.phx_ref_prev,
									o
								)
						  ))
						: (n[r] = i),
					n
				);
			}, {})
		);
	}
	static cloneDeep(t) {
		return JSON.parse(JSON.stringify(t));
	}
	onJoin(t) {
		this.caller.onJoin = t;
	}
	onLeave(t) {
		this.caller.onLeave = t;
	}
	onSync(t) {
		this.caller.onSync = t;
	}
	inPendingSyncState() {
		return !this.joinRef || this.joinRef !== this.channel._joinRef();
	}
}
var H;
(function (e) {
	(e.abstime = 'abstime'),
		(e.bool = 'bool'),
		(e.date = 'date'),
		(e.daterange = 'daterange'),
		(e.float4 = 'float4'),
		(e.float8 = 'float8'),
		(e.int2 = 'int2'),
		(e.int4 = 'int4'),
		(e.int4range = 'int4range'),
		(e.int8 = 'int8'),
		(e.int8range = 'int8range'),
		(e.json = 'json'),
		(e.jsonb = 'jsonb'),
		(e.money = 'money'),
		(e.numeric = 'numeric'),
		(e.oid = 'oid'),
		(e.reltime = 'reltime'),
		(e.text = 'text'),
		(e.time = 'time'),
		(e.timestamp = 'timestamp'),
		(e.timestamptz = 'timestamptz'),
		(e.timetz = 'timetz'),
		(e.tsrange = 'tsrange'),
		(e.tstzrange = 'tstzrange');
})(H || (H = {}));
const Tu = (e, t, n = {}) => {
		var r;
		const i = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
		return Object.keys(t).reduce((o, s) => ((o[s] = $m(s, e, t, i)), o), {});
	},
	$m = (e, t, n, r) => {
		const i = t.find((l) => l.name === e),
			o = i == null ? void 0 : i.type,
			s = n[e];
		return o && !r.includes(o) ? hf(o, s) : el(s);
	},
	hf = (e, t) => {
		if (e.charAt(0) === '_') {
			const n = e.slice(1, e.length);
			return Am(t, n);
		}
		switch (e) {
			case H.bool:
				return Nm(t);
			case H.float4:
			case H.float8:
			case H.int2:
			case H.int4:
			case H.int8:
			case H.numeric:
			case H.oid:
				return Lm(t);
			case H.json:
			case H.jsonb:
				return Im(t);
			case H.timestamp:
				return Dm(t);
			case H.abstime:
			case H.date:
			case H.daterange:
			case H.int4range:
			case H.int8range:
			case H.money:
			case H.reltime:
			case H.text:
			case H.time:
			case H.timestamptz:
			case H.timetz:
			case H.tsrange:
			case H.tstzrange:
				return el(t);
			default:
				return el(t);
		}
	},
	el = (e) => e,
	Nm = (e) => {
		switch (e) {
			case 't':
				return !0;
			case 'f':
				return !1;
			default:
				return e;
		}
	},
	Lm = (e) => {
		if (typeof e == 'string') {
			const t = parseFloat(e);
			if (!Number.isNaN(t)) return t;
		}
		return e;
	},
	Im = (e) => {
		if (typeof e == 'string')
			try {
				return JSON.parse(e);
			} catch (t) {
				return console.log(`JSON parse error: ${t}`), e;
			}
		return e;
	},
	Am = (e, t) => {
		if (typeof e != 'string') return e;
		const n = e.length - 1,
			r = e[n];
		if (e[0] === '{' && r === '}') {
			let o;
			const s = e.slice(1, n);
			try {
				o = JSON.parse('[' + s + ']');
			} catch {
				o = s ? s.split(',') : [];
			}
			return o.map((l) => hf(t, l));
		}
		return e;
	},
	Dm = (e) => (typeof e == 'string' ? e.replace(' ', 'T') : e);
var Pu =
		(globalThis && globalThis.__awaiter) ||
		function (e, t, n, r) {
			function i(o) {
				return o instanceof n
					? o
					: new n(function (s) {
							s(o);
					  });
			}
			return new (n || (n = Promise))(function (o, s) {
				function l(c) {
					try {
						u(r.next(c));
					} catch (d) {
						s(d);
					}
				}
				function a(c) {
					try {
						u(r.throw(c));
					} catch (d) {
						s(d);
					}
				}
				function u(c) {
					c.done ? o(c.value) : i(c.value).then(l, a);
				}
				u((r = r.apply(e, t || [])).next());
			});
		},
	Ou;
(function (e) {
	(e.ALL = '*'),
		(e.INSERT = 'INSERT'),
		(e.UPDATE = 'UPDATE'),
		(e.DELETE = 'DELETE');
})(Ou || (Ou = {}));
var Ru;
(function (e) {
	(e.BROADCAST = 'broadcast'),
		(e.PRESENCE = 'presence'),
		(e.POSTGRES_CHANGES = 'postgres_changes');
})(Ru || (Ru = {}));
var ju;
(function (e) {
	(e.SUBSCRIBED = 'SUBSCRIBED'),
		(e.TIMED_OUT = 'TIMED_OUT'),
		(e.CLOSED = 'CLOSED'),
		(e.CHANNEL_ERROR = 'CHANNEL_ERROR');
})(ju || (ju = {}));
class na {
	constructor(t, n = { config: {} }, r) {
		(this.topic = t),
			(this.params = n),
			(this.socket = r),
			(this.bindings = {}),
			(this.state = Pe.closed),
			(this.joinedOnce = !1),
			(this.pushBuffer = []),
			(this.params.config = Object.assign(
				{ broadcast: { ack: !1, self: !1 }, presence: { key: '' } },
				n.config
			)),
			(this.timeout = this.socket.timeout),
			(this.joinPush = new Jo(this, Ve.join, this.params, this.timeout)),
			(this.rejoinTimer = new ff(
				() => this._rejoinUntilConnected(),
				this.socket.reconnectAfterMs
			)),
			this.joinPush.receive('ok', () => {
				(this.state = Pe.joined),
					this.rejoinTimer.reset(),
					this.pushBuffer.forEach((i) => i.send()),
					(this.pushBuffer = []);
			}),
			this._onClose(() => {
				this.rejoinTimer.reset(),
					this.socket.log('channel', `close ${this.topic} ${this._joinRef()}`),
					(this.state = Pe.closed),
					this.socket._remove(this);
			}),
			this._onError((i) => {
				this._isLeaving() ||
					this._isClosed() ||
					(this.socket.log('channel', `error ${this.topic}`, i),
					(this.state = Pe.errored),
					this.rejoinTimer.scheduleTimeout());
			}),
			this.joinPush.receive('timeout', () => {
				this._isJoining() &&
					(this.socket.log(
						'channel',
						`timeout ${this.topic}`,
						this.joinPush.timeout
					),
					(this.state = Pe.errored),
					this.rejoinTimer.scheduleTimeout());
			}),
			this._on(Ve.reply, {}, (i, o) => {
				this._trigger(this._replyEventName(o), i);
			}),
			(this.presence = new hr(this));
	}
	subscribe(t, n = this.timeout) {
		var r, i;
		if (this.joinedOnce)
			throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
		{
			const {
				config: { broadcast: o, presence: s },
			} = this.params;
			this._onError((u) => t && t('CHANNEL_ERROR', u)),
				this._onClose(() => t && t('CLOSED'));
			const l = {},
				a = {
					broadcast: o,
					presence: s,
					postgres_changes:
						(i =
							(r = this.bindings.postgres_changes) === null || r === void 0
								? void 0
								: r.map((u) => u.filter)) !== null && i !== void 0
							? i
							: [],
				};
			this.socket.accessToken && (l.access_token = this.socket.accessToken),
				this.updateJoinPayload(Object.assign({ config: a }, l)),
				(this.joinedOnce = !0),
				this._rejoin(n),
				this.joinPush
					.receive('ok', ({ postgres_changes: u }) => {
						var c;
						if (
							(this.socket.accessToken &&
								this.socket.setAuth(this.socket.accessToken),
							u === void 0)
						) {
							t && t('SUBSCRIBED');
							return;
						} else {
							const d = this.bindings.postgres_changes,
								p =
									(c = d == null ? void 0 : d.length) !== null && c !== void 0
										? c
										: 0,
								g = [];
							for (let m = 0; m < p; m++) {
								const y = d[m],
									{
										filter: { event: S, schema: h, table: f, filter: v },
									} = y,
									w = u && u[m];
								if (
									w &&
									w.event === S &&
									w.schema === h &&
									w.table === f &&
									w.filter === v
								)
									g.push(Object.assign(Object.assign({}, y), { id: w.id }));
								else {
									this.unsubscribe(),
										t &&
											t(
												'CHANNEL_ERROR',
												new Error(
													'mismatch between server and client bindings for postgres changes'
												)
											);
									return;
								}
							}
							(this.bindings.postgres_changes = g), t && t('SUBSCRIBED');
							return;
						}
					})
					.receive('error', (u) => {
						t &&
							t(
								'CHANNEL_ERROR',
								new Error(
									JSON.stringify(Object.values(u).join(', ') || 'error')
								)
							);
					})
					.receive('timeout', () => {
						t && t('TIMED_OUT');
					});
		}
		return this;
	}
	presenceState() {
		return this.presence.state;
	}
	track(t, n = {}) {
		return Pu(this, void 0, void 0, function* () {
			return yield this.send(
				{ type: 'presence', event: 'track', payload: t },
				n.timeout || this.timeout
			);
		});
	}
	untrack(t = {}) {
		return Pu(this, void 0, void 0, function* () {
			return yield this.send({ type: 'presence', event: 'untrack' }, t);
		});
	}
	on(t, n, r) {
		return this._on(t, n, r);
	}
	send(t, n = {}) {
		return new Promise((r) => {
			var i, o, s;
			const l = this._push(t.type, t, n.timeout || this.timeout);
			l.rateLimited && r('rate limited'),
				t.type === 'broadcast' &&
					!(
						!(
							(s =
								(o =
									(i = this.params) === null || i === void 0
										? void 0
										: i.config) === null || o === void 0
									? void 0
									: o.broadcast) === null || s === void 0
						) && s.ack
					) &&
					r('ok'),
				l.receive('ok', () => r('ok')),
				l.receive('timeout', () => r('timed out'));
		});
	}
	updateJoinPayload(t) {
		this.joinPush.updatePayload(t);
	}
	unsubscribe(t = this.timeout) {
		this.state = Pe.leaving;
		const n = () => {
			this.socket.log('channel', `leave ${this.topic}`),
				this._trigger(Ve.close, 'leave', this._joinRef());
		};
		return (
			this.rejoinTimer.reset(),
			this.joinPush.destroy(),
			new Promise((r) => {
				const i = new Jo(this, Ve.leave, {}, t);
				i
					.receive('ok', () => {
						n(), r('ok');
					})
					.receive('timeout', () => {
						n(), r('timed out');
					})
					.receive('error', () => {
						r('error');
					}),
					i.send(),
					this._canPush() || i.trigger('ok', {});
			})
		);
	}
	_push(t, n, r = this.timeout) {
		if (!this.joinedOnce)
			throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
		let i = new Jo(this, t, n, r);
		return (
			this._canPush() ? i.send() : (i.startTimeout(), this.pushBuffer.push(i)),
			i
		);
	}
	_onMessage(t, n, r) {
		return n;
	}
	_isMember(t) {
		return this.topic === t;
	}
	_joinRef() {
		return this.joinPush.ref;
	}
	_trigger(t, n, r) {
		var i, o;
		const s = t.toLocaleLowerCase(),
			{ close: l, error: a, leave: u, join: c } = Ve;
		if (r && [l, a, u, c].indexOf(s) >= 0 && r !== this._joinRef()) return;
		let p = this._onMessage(s, n, r);
		if (n && !p)
			throw 'channel onMessage callbacks must return the payload, modified or unmodified';
		['insert', 'update', 'delete'].includes(s)
			? (i = this.bindings.postgres_changes) === null ||
			  i === void 0 ||
			  i
					.filter((g) => {
						var m, y, S;
						return (
							((m = g.filter) === null || m === void 0 ? void 0 : m.event) ===
								'*' ||
							((S =
								(y = g.filter) === null || y === void 0 ? void 0 : y.event) ===
								null || S === void 0
								? void 0
								: S.toLocaleLowerCase()) === s
						);
					})
					.map((g) => g.callback(p, r))
			: (o = this.bindings[s]) === null ||
			  o === void 0 ||
			  o
					.filter((g) => {
						var m, y, S, h, f, v;
						if (['broadcast', 'presence', 'postgres_changes'].includes(s))
							if ('id' in g) {
								const w = g.id,
									x =
										(m = g.filter) === null || m === void 0 ? void 0 : m.event;
								return (
									w &&
									((y = n.ids) === null || y === void 0
										? void 0
										: y.includes(w)) &&
									(x === '*' ||
										(x == null ? void 0 : x.toLocaleLowerCase()) ===
											((S = n.data) === null || S === void 0
												? void 0
												: S.type.toLocaleLowerCase()))
								);
							} else {
								const w =
									(f =
										(h = g == null ? void 0 : g.filter) === null || h === void 0
											? void 0
											: h.event) === null || f === void 0
										? void 0
										: f.toLocaleLowerCase();
								return (
									w === '*' ||
									w ===
										((v = n == null ? void 0 : n.event) === null || v === void 0
											? void 0
											: v.toLocaleLowerCase())
								);
							}
						else return g.type.toLocaleLowerCase() === s;
					})
					.map((g) => {
						if (typeof p == 'object' && 'ids' in p) {
							const m = p.data,
								{
									schema: y,
									table: S,
									commit_timestamp: h,
									type: f,
									errors: v,
								} = m;
							p = Object.assign(
								Object.assign(
									{},
									{
										schema: y,
										table: S,
										commit_timestamp: h,
										eventType: f,
										new: {},
										old: {},
										errors: v,
									}
								),
								this._getPayloadRecords(m)
							);
						}
						g.callback(p, r);
					});
	}
	_isClosed() {
		return this.state === Pe.closed;
	}
	_isJoined() {
		return this.state === Pe.joined;
	}
	_isJoining() {
		return this.state === Pe.joining;
	}
	_isLeaving() {
		return this.state === Pe.leaving;
	}
	_replyEventName(t) {
		return `chan_reply_${t}`;
	}
	_on(t, n, r) {
		const i = t.toLocaleLowerCase(),
			o = { type: i, filter: n, callback: r };
		return (
			this.bindings[i] ? this.bindings[i].push(o) : (this.bindings[i] = [o]),
			this
		);
	}
	_off(t, n) {
		const r = t.toLocaleLowerCase();
		return (
			(this.bindings[r] = this.bindings[r].filter((i) => {
				var o;
				return !(
					((o = i.type) === null || o === void 0
						? void 0
						: o.toLocaleLowerCase()) === r && na.isEqual(i.filter, n)
				);
			})),
			this
		);
	}
	static isEqual(t, n) {
		if (Object.keys(t).length !== Object.keys(n).length) return !1;
		for (const r in t) if (t[r] !== n[r]) return !1;
		return !0;
	}
	_rejoinUntilConnected() {
		this.rejoinTimer.scheduleTimeout(),
			this.socket.isConnected() && this._rejoin();
	}
	_onClose(t) {
		this._on(Ve.close, {}, t);
	}
	_onError(t) {
		this._on(Ve.error, {}, (n) => t(n));
	}
	_canPush() {
		return this.socket.isConnected() && this._isJoined();
	}
	_rejoin(t = this.timeout) {
		this._isLeaving() ||
			(this.socket._leaveOpenTopic(this.topic),
			(this.state = Pe.joining),
			this.joinPush.resend(t));
	}
	_getPayloadRecords(t) {
		const n = { new: {}, old: {} };
		return (
			(t.type === 'INSERT' || t.type === 'UPDATE') &&
				(n.new = Tu(t.columns, t.record)),
			(t.type === 'UPDATE' || t.type === 'DELETE') &&
				(n.old = Tu(t.columns, t.old_record)),
			n
		);
	}
}
var qo =
	(globalThis && globalThis.__awaiter) ||
	function (e, t, n, r) {
		function i(o) {
			return o instanceof n
				? o
				: new n(function (s) {
						s(o);
				  });
		}
		return new (n || (n = Promise))(function (o, s) {
			function l(c) {
				try {
					u(r.next(c));
				} catch (d) {
					s(d);
				}
			}
			function a(c) {
				try {
					u(r.throw(c));
				} catch (d) {
					s(d);
				}
			}
			function u(c) {
				c.done ? o(c.value) : i(c.value).then(l, a);
			}
			u((r = r.apply(e, t || [])).next());
		});
	};
const Um = () => {};
class zm {
	constructor(t, n) {
		var r;
		(this.accessToken = null),
			(this.channels = []),
			(this.endPoint = ''),
			(this.headers = Pm),
			(this.params = {}),
			(this.timeout = df),
			(this.transport = Cm.w3cwebsocket),
			(this.heartbeatIntervalMs = 3e4),
			(this.heartbeatTimer = void 0),
			(this.pendingHeartbeatRef = null),
			(this.ref = 0),
			(this.logger = Um),
			(this.conn = null),
			(this.sendBuffer = []),
			(this.serializer = new jm()),
			(this.stateChangeCallbacks = {
				open: [],
				close: [],
				error: [],
				message: [],
			}),
			(this.eventsPerSecondLimitMs = 100),
			(this.inThrottle = !1),
			(this.endPoint = `${t}/${Zs.websocket}`),
			n != null && n.params && (this.params = n.params),
			n != null &&
				n.headers &&
				(this.headers = Object.assign(
					Object.assign({}, this.headers),
					n.headers
				)),
			n != null && n.timeout && (this.timeout = n.timeout),
			n != null && n.logger && (this.logger = n.logger),
			n != null && n.transport && (this.transport = n.transport),
			n != null &&
				n.heartbeatIntervalMs &&
				(this.heartbeatIntervalMs = n.heartbeatIntervalMs);
		const i =
			(r = n == null ? void 0 : n.params) === null || r === void 0
				? void 0
				: r.eventsPerSecond;
		i && (this.eventsPerSecondLimitMs = Math.floor(1e3 / i)),
			(this.reconnectAfterMs =
				n != null && n.reconnectAfterMs
					? n.reconnectAfterMs
					: (o) => [1e3, 2e3, 5e3, 1e4][o - 1] || 1e4),
			(this.encode =
				n != null && n.encode ? n.encode : (o, s) => s(JSON.stringify(o))),
			(this.decode =
				n != null && n.decode
					? n.decode
					: this.serializer.decode.bind(this.serializer)),
			(this.reconnectTimer = new ff(
				() =>
					qo(this, void 0, void 0, function* () {
						this.disconnect(), this.connect();
					}),
				this.reconnectAfterMs
			));
	}
	connect() {
		this.conn ||
			((this.conn = new this.transport(
				this._endPointURL(),
				[],
				null,
				this.headers
			)),
			this.conn &&
				((this.conn.binaryType = 'arraybuffer'),
				(this.conn.onopen = () => this._onConnOpen()),
				(this.conn.onerror = (t) => this._onConnError(t)),
				(this.conn.onmessage = (t) => this._onConnMessage(t)),
				(this.conn.onclose = (t) => this._onConnClose(t))));
	}
	disconnect(t, n) {
		this.conn &&
			((this.conn.onclose = function () {}),
			t ? this.conn.close(t, n ?? '') : this.conn.close(),
			(this.conn = null),
			this.heartbeatTimer && clearInterval(this.heartbeatTimer),
			this.reconnectTimer.reset());
	}
	getChannels() {
		return this.channels;
	}
	removeChannel(t) {
		return qo(this, void 0, void 0, function* () {
			const n = yield t.unsubscribe();
			return this.channels.length === 0 && this.disconnect(), n;
		});
	}
	removeAllChannels() {
		return qo(this, void 0, void 0, function* () {
			const t = yield Promise.all(this.channels.map((n) => n.unsubscribe()));
			return this.disconnect(), t;
		});
	}
	log(t, n, r) {
		this.logger(t, n, r);
	}
	connectionState() {
		switch (this.conn && this.conn.readyState) {
			case fr.connecting:
				return Vt.Connecting;
			case fr.open:
				return Vt.Open;
			case fr.closing:
				return Vt.Closing;
			default:
				return Vt.Closed;
		}
	}
	isConnected() {
		return this.connectionState() === Vt.Open;
	}
	channel(t, n = { config: {} }) {
		this.isConnected() || this.connect();
		const r = new na(`realtime:${t}`, n, this);
		return this.channels.push(r), r;
	}
	push(t) {
		const { topic: n, event: r, payload: i, ref: o } = t;
		let s = () => {
			this.encode(t, (l) => {
				var a;
				(a = this.conn) === null || a === void 0 || a.send(l);
			});
		};
		if ((this.log('push', `${n} ${r} (${o})`, i), this.isConnected()))
			if (['broadcast', 'presence', 'postgres_changes'].includes(r)) {
				if (this._throttle(s)()) return 'rate limited';
			} else s();
		else this.sendBuffer.push(s);
	}
	setAuth(t) {
		(this.accessToken = t),
			this.channels.forEach((n) => {
				t && n.updateJoinPayload({ access_token: t }),
					n.joinedOnce &&
						n._isJoined() &&
						n._push(Ve.access_token, { access_token: t });
			});
	}
	_makeRef() {
		let t = this.ref + 1;
		return (
			t === this.ref ? (this.ref = 0) : (this.ref = t), this.ref.toString()
		);
	}
	_leaveOpenTopic(t) {
		let n = this.channels.find(
			(r) => r.topic === t && (r._isJoined() || r._isJoining())
		);
		n &&
			(this.log('transport', `leaving duplicate topic "${t}"`),
			n.unsubscribe());
	}
	_remove(t) {
		this.channels = this.channels.filter((n) => n._joinRef() !== t._joinRef());
	}
	_endPointURL() {
		return this._appendParams(
			this.endPoint,
			Object.assign({}, this.params, { vsn: Om })
		);
	}
	_onConnMessage(t) {
		this.decode(t.data, (n) => {
			let { topic: r, event: i, payload: o, ref: s } = n;
			((s && s === this.pendingHeartbeatRef) ||
				i === (o == null ? void 0 : o.type)) &&
				(this.pendingHeartbeatRef = null),
				this.log(
					'receive',
					`${o.status || ''} ${r} ${i} ${(s && '(' + s + ')') || ''}`,
					o
				),
				this.channels
					.filter((l) => l._isMember(r))
					.forEach((l) => l._trigger(i, o, s)),
				this.stateChangeCallbacks.message.forEach((l) => l(n));
		});
	}
	_onConnOpen() {
		this.log('transport', `connected to ${this._endPointURL()}`),
			this._flushSendBuffer(),
			this.reconnectTimer.reset(),
			this.heartbeatTimer && clearInterval(this.heartbeatTimer),
			(this.heartbeatTimer = setInterval(
				() => this._sendHeartbeat(),
				this.heartbeatIntervalMs
			)),
			this.stateChangeCallbacks.open.forEach((t) => t());
	}
	_onConnClose(t) {
		this.log('transport', 'close', t),
			this._triggerChanError(),
			this.heartbeatTimer && clearInterval(this.heartbeatTimer),
			this.reconnectTimer.scheduleTimeout(),
			this.stateChangeCallbacks.close.forEach((n) => n(t));
	}
	_onConnError(t) {
		this.log('transport', t.message),
			this._triggerChanError(),
			this.stateChangeCallbacks.error.forEach((n) => n(t));
	}
	_triggerChanError() {
		this.channels.forEach((t) => t._trigger(Ve.error));
	}
	_appendParams(t, n) {
		if (Object.keys(n).length === 0) return t;
		const r = t.match(/\?/) ? '&' : '?',
			i = new URLSearchParams(n);
		return `${t}${r}${i}`;
	}
	_flushSendBuffer() {
		this.isConnected() &&
			this.sendBuffer.length > 0 &&
			(this.sendBuffer.forEach((t) => t()), (this.sendBuffer = []));
	}
	_sendHeartbeat() {
		var t;
		if (this.isConnected()) {
			if (this.pendingHeartbeatRef) {
				(this.pendingHeartbeatRef = null),
					this.log(
						'transport',
						'heartbeat timeout. Attempting to re-establish connection'
					),
					(t = this.conn) === null ||
						t === void 0 ||
						t.close(Rm, 'hearbeat timeout');
				return;
			}
			(this.pendingHeartbeatRef = this._makeRef()),
				this.push({
					topic: 'phoenix',
					event: 'heartbeat',
					payload: {},
					ref: this.pendingHeartbeatRef,
				}),
				this.setAuth(this.accessToken);
		}
	}
	_throttle(t, n = this.eventsPerSecondLimitMs) {
		return () =>
			this.inThrottle
				? !0
				: (t(),
				  n > 0 &&
						((this.inThrottle = !0),
						setTimeout(() => {
							this.inThrottle = !1;
						}, n)),
				  !1);
	}
}
class ra extends Error {
	constructor(t) {
		super(t), (this.__isStorageError = !0), (this.name = 'StorageError');
	}
}
function pe(e) {
	return typeof e == 'object' && e !== null && '__isStorageError' in e;
}
class Fm extends ra {
	constructor(t, n) {
		super(t), (this.name = 'StorageApiError'), (this.status = n);
	}
	toJSON() {
		return { name: this.name, message: this.message, status: this.status };
	}
}
class $u extends ra {
	constructor(t, n) {
		super(t), (this.name = 'StorageUnknownError'), (this.originalError = n);
	}
}
var pf =
	(globalThis && globalThis.__awaiter) ||
	function (e, t, n, r) {
		function i(o) {
			return o instanceof n
				? o
				: new n(function (s) {
						s(o);
				  });
		}
		return new (n || (n = Promise))(function (o, s) {
			function l(c) {
				try {
					u(r.next(c));
				} catch (d) {
					s(d);
				}
			}
			function a(c) {
				try {
					u(r.throw(c));
				} catch (d) {
					s(d);
				}
			}
			function u(c) {
				c.done ? o(c.value) : i(c.value).then(l, a);
			}
			u((r = r.apply(e, t || [])).next());
		});
	};
const vf = (e) => {
		let t;
		return (
			e
				? (t = e)
				: typeof fetch > 'u'
				? (t = (...n) =>
						pf(void 0, void 0, void 0, function* () {
							return yield (yield mo(
								() => Promise.resolve().then(() => yo),
								void 0
							)).fetch(...n);
						}))
				: (t = fetch),
			(...n) => t(...n)
		);
	},
	Mm = () =>
		pf(void 0, void 0, void 0, function* () {
			return typeof Response > 'u'
				? (yield mo(() => Promise.resolve().then(() => yo), void 0)).Response
				: Response;
		});
var bn =
	(globalThis && globalThis.__awaiter) ||
	function (e, t, n, r) {
		function i(o) {
			return o instanceof n
				? o
				: new n(function (s) {
						s(o);
				  });
		}
		return new (n || (n = Promise))(function (o, s) {
			function l(c) {
				try {
					u(r.next(c));
				} catch (d) {
					s(d);
				}
			}
			function a(c) {
				try {
					u(r.throw(c));
				} catch (d) {
					s(d);
				}
			}
			function u(c) {
				c.done ? o(c.value) : i(c.value).then(l, a);
			}
			u((r = r.apply(e, t || [])).next());
		});
	};
const Yo = (e) =>
		e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
	bm = (e, t) =>
		bn(void 0, void 0, void 0, function* () {
			const n = yield Mm();
			e instanceof n
				? e
						.json()
						.then((r) => {
							t(new Fm(Yo(r), e.status || 500));
						})
						.catch((r) => {
							t(new $u(Yo(r), r));
						})
				: t(new $u(Yo(e), e));
		}),
	Bm = (e, t, n, r) => {
		const i = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
		return e === 'GET'
			? i
			: ((i.headers = Object.assign(
					{ 'Content-Type': 'application/json' },
					t == null ? void 0 : t.headers
			  )),
			  (i.body = JSON.stringify(r)),
			  Object.assign(Object.assign({}, i), n));
	};
function go(e, t, n, r, i, o) {
	return bn(this, void 0, void 0, function* () {
		return new Promise((s, l) => {
			e(n, Bm(t, r, i, o))
				.then((a) => {
					if (!a.ok) throw a;
					return r != null && r.noResolveJson ? a : a.json();
				})
				.then((a) => s(a))
				.catch((a) => bm(a, l));
		});
	});
}
function tl(e, t, n, r) {
	return bn(this, void 0, void 0, function* () {
		return go(e, 'GET', t, n, r);
	});
}
function gt(e, t, n, r, i) {
	return bn(this, void 0, void 0, function* () {
		return go(e, 'POST', t, r, i, n);
	});
}
function Hm(e, t, n, r, i) {
	return bn(this, void 0, void 0, function* () {
		return go(e, 'PUT', t, r, i, n);
	});
}
function mf(e, t, n, r, i) {
	return bn(this, void 0, void 0, function* () {
		return go(e, 'DELETE', t, r, i, n);
	});
}
var Ie =
	(globalThis && globalThis.__awaiter) ||
	function (e, t, n, r) {
		function i(o) {
			return o instanceof n
				? o
				: new n(function (s) {
						s(o);
				  });
		}
		return new (n || (n = Promise))(function (o, s) {
			function l(c) {
				try {
					u(r.next(c));
				} catch (d) {
					s(d);
				}
			}
			function a(c) {
				try {
					u(r.throw(c));
				} catch (d) {
					s(d);
				}
			}
			function u(c) {
				c.done ? o(c.value) : i(c.value).then(l, a);
			}
			u((r = r.apply(e, t || [])).next());
		});
	};
const Vm = { limit: 100, offset: 0, sortBy: { column: 'name', order: 'asc' } },
	Nu = {
		cacheControl: '3600',
		contentType: 'text/plain;charset=UTF-8',
		upsert: !1,
	};
class Wm {
	constructor(t, n = {}, r, i) {
		(this.url = t),
			(this.headers = n),
			(this.bucketId = r),
			(this.fetch = vf(i));
	}
	uploadOrUpdate(t, n, r, i) {
		return Ie(this, void 0, void 0, function* () {
			try {
				let o;
				const s = Object.assign(Object.assign({}, Nu), i),
					l = Object.assign(
						Object.assign({}, this.headers),
						t === 'POST' && { 'x-upsert': String(s.upsert) }
					);
				typeof Blob < 'u' && r instanceof Blob
					? ((o = new FormData()),
					  o.append('cacheControl', s.cacheControl),
					  o.append('', r))
					: typeof FormData < 'u' && r instanceof FormData
					? ((o = r), o.append('cacheControl', s.cacheControl))
					: ((o = r),
					  (l['cache-control'] = `max-age=${s.cacheControl}`),
					  (l['content-type'] = s.contentType));
				const a = this._removeEmptyFolders(n),
					u = this._getFinalPath(a),
					c = yield this.fetch(
						`${this.url}/object/${u}`,
						Object.assign(
							{ method: t, body: o, headers: l },
							s != null && s.duplex ? { duplex: s.duplex } : {}
						)
					);
				return c.ok
					? { data: { path: a }, error: null }
					: { data: null, error: yield c.json() };
			} catch (o) {
				if (pe(o)) return { data: null, error: o };
				throw o;
			}
		});
	}
	upload(t, n, r) {
		return Ie(this, void 0, void 0, function* () {
			return this.uploadOrUpdate('POST', t, n, r);
		});
	}
	uploadToSignedUrl(t, n, r, i) {
		return Ie(this, void 0, void 0, function* () {
			const o = this._removeEmptyFolders(t),
				s = this._getFinalPath(o),
				l = new URL(this.url + `/object/upload/sign/${s}`);
			l.searchParams.set('token', n);
			try {
				let a;
				const u = Object.assign({ upsert: Nu.upsert }, i),
					c = Object.assign(Object.assign({}, this.headers), {
						'x-upsert': String(u.upsert),
					});
				typeof Blob < 'u' && r instanceof Blob
					? ((a = new FormData()),
					  a.append('cacheControl', u.cacheControl),
					  a.append('', r))
					: typeof FormData < 'u' && r instanceof FormData
					? ((a = r), a.append('cacheControl', u.cacheControl))
					: ((a = r),
					  (c['cache-control'] = `max-age=${u.cacheControl}`),
					  (c['content-type'] = u.contentType));
				const d = yield this.fetch(l.toString(), {
					method: 'PUT',
					body: a,
					headers: c,
				});
				return d.ok
					? { data: { path: o }, error: null }
					: { data: null, error: yield d.json() };
			} catch (a) {
				if (pe(a)) return { data: null, error: a };
				throw a;
			}
		});
	}
	createSignedUploadUrl(t) {
		return Ie(this, void 0, void 0, function* () {
			try {
				let n = this._getFinalPath(t);
				const r = yield gt(
						this.fetch,
						`${this.url}/object/upload/sign/${n}`,
						{},
						{ headers: this.headers }
					),
					i = new URL(this.url + r.url),
					o = i.searchParams.get('token');
				if (!o) throw new ra('No token returned by API');
				return {
					data: { signedUrl: i.toString(), path: t, token: o },
					error: null,
				};
			} catch (n) {
				if (pe(n)) return { data: null, error: n };
				throw n;
			}
		});
	}
	update(t, n, r) {
		return Ie(this, void 0, void 0, function* () {
			return this.uploadOrUpdate('PUT', t, n, r);
		});
	}
	move(t, n) {
		return Ie(this, void 0, void 0, function* () {
			try {
				return {
					data: yield gt(
						this.fetch,
						`${this.url}/object/move`,
						{ bucketId: this.bucketId, sourceKey: t, destinationKey: n },
						{ headers: this.headers }
					),
					error: null,
				};
			} catch (r) {
				if (pe(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
	copy(t, n) {
		return Ie(this, void 0, void 0, function* () {
			try {
				return {
					data: {
						path: (yield gt(
							this.fetch,
							`${this.url}/object/copy`,
							{ bucketId: this.bucketId, sourceKey: t, destinationKey: n },
							{ headers: this.headers }
						)).Key,
					},
					error: null,
				};
			} catch (r) {
				if (pe(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
	createSignedUrl(t, n, r) {
		return Ie(this, void 0, void 0, function* () {
			try {
				let i = this._getFinalPath(t),
					o = yield gt(
						this.fetch,
						`${this.url}/object/sign/${i}`,
						Object.assign(
							{ expiresIn: n },
							r != null && r.transform ? { transform: r.transform } : {}
						),
						{ headers: this.headers }
					);
				const s =
					r != null && r.download
						? `&download=${r.download === !0 ? '' : r.download}`
						: '';
				return (
					(o = { signedUrl: encodeURI(`${this.url}${o.signedURL}${s}`) }),
					{ data: o, error: null }
				);
			} catch (i) {
				if (pe(i)) return { data: null, error: i };
				throw i;
			}
		});
	}
	createSignedUrls(t, n, r) {
		return Ie(this, void 0, void 0, function* () {
			try {
				const i = yield gt(
						this.fetch,
						`${this.url}/object/sign/${this.bucketId}`,
						{ expiresIn: n, paths: t },
						{ headers: this.headers }
					),
					o =
						r != null && r.download
							? `&download=${r.download === !0 ? '' : r.download}`
							: '';
				return {
					data: i.map((s) =>
						Object.assign(Object.assign({}, s), {
							signedUrl: s.signedURL
								? encodeURI(`${this.url}${s.signedURL}${o}`)
								: null,
						})
					),
					error: null,
				};
			} catch (i) {
				if (pe(i)) return { data: null, error: i };
				throw i;
			}
		});
	}
	download(t, n) {
		return Ie(this, void 0, void 0, function* () {
			const i =
					typeof (n == null ? void 0 : n.transform) < 'u'
						? 'render/image/authenticated'
						: 'object',
				o = this.transformOptsToQueryString(
					(n == null ? void 0 : n.transform) || {}
				),
				s = o ? `?${o}` : '';
			try {
				const l = this._getFinalPath(t);
				return {
					data: yield (yield tl(this.fetch, `${this.url}/${i}/${l}${s}`, {
						headers: this.headers,
						noResolveJson: !0,
					})).blob(),
					error: null,
				};
			} catch (l) {
				if (pe(l)) return { data: null, error: l };
				throw l;
			}
		});
	}
	getPublicUrl(t, n) {
		const r = this._getFinalPath(t),
			i = [],
			o =
				n != null && n.download
					? `download=${n.download === !0 ? '' : n.download}`
					: '';
		o !== '' && i.push(o);
		const l =
				typeof (n == null ? void 0 : n.transform) < 'u'
					? 'render/image'
					: 'object',
			a = this.transformOptsToQueryString(
				(n == null ? void 0 : n.transform) || {}
			);
		a !== '' && i.push(a);
		let u = i.join('&');
		return (
			u !== '' && (u = `?${u}`),
			{ data: { publicUrl: encodeURI(`${this.url}/${l}/public/${r}${u}`) } }
		);
	}
	remove(t) {
		return Ie(this, void 0, void 0, function* () {
			try {
				return {
					data: yield mf(
						this.fetch,
						`${this.url}/object/${this.bucketId}`,
						{ prefixes: t },
						{ headers: this.headers }
					),
					error: null,
				};
			} catch (n) {
				if (pe(n)) return { data: null, error: n };
				throw n;
			}
		});
	}
	list(t, n, r) {
		return Ie(this, void 0, void 0, function* () {
			try {
				const i = Object.assign(Object.assign(Object.assign({}, Vm), n), {
					prefix: t || '',
				});
				return {
					data: yield gt(
						this.fetch,
						`${this.url}/object/list/${this.bucketId}`,
						i,
						{ headers: this.headers },
						r
					),
					error: null,
				};
			} catch (i) {
				if (pe(i)) return { data: null, error: i };
				throw i;
			}
		});
	}
	_getFinalPath(t) {
		return `${this.bucketId}/${t}`;
	}
	_removeEmptyFolders(t) {
		return t.replace(/^\/|\/$/g, '').replace(/\/+/g, '/');
	}
	transformOptsToQueryString(t) {
		const n = [];
		return (
			t.width && n.push(`width=${t.width}`),
			t.height && n.push(`height=${t.height}`),
			t.resize && n.push(`resize=${t.resize}`),
			t.format && n.push(`format=${t.format}`),
			t.quality && n.push(`quality=${t.quality}`),
			n.join('&')
		);
	}
}
const Km = '2.5.1',
	Qm = { 'X-Client-Info': `storage-js/${Km}` };
var un =
	(globalThis && globalThis.__awaiter) ||
	function (e, t, n, r) {
		function i(o) {
			return o instanceof n
				? o
				: new n(function (s) {
						s(o);
				  });
		}
		return new (n || (n = Promise))(function (o, s) {
			function l(c) {
				try {
					u(r.next(c));
				} catch (d) {
					s(d);
				}
			}
			function a(c) {
				try {
					u(r.throw(c));
				} catch (d) {
					s(d);
				}
			}
			function u(c) {
				c.done ? o(c.value) : i(c.value).then(l, a);
			}
			u((r = r.apply(e, t || [])).next());
		});
	};
class Gm {
	constructor(t, n = {}, r) {
		(this.url = t),
			(this.headers = Object.assign(Object.assign({}, Qm), n)),
			(this.fetch = vf(r));
	}
	listBuckets() {
		return un(this, void 0, void 0, function* () {
			try {
				return {
					data: yield tl(this.fetch, `${this.url}/bucket`, {
						headers: this.headers,
					}),
					error: null,
				};
			} catch (t) {
				if (pe(t)) return { data: null, error: t };
				throw t;
			}
		});
	}
	getBucket(t) {
		return un(this, void 0, void 0, function* () {
			try {
				return {
					data: yield tl(this.fetch, `${this.url}/bucket/${t}`, {
						headers: this.headers,
					}),
					error: null,
				};
			} catch (n) {
				if (pe(n)) return { data: null, error: n };
				throw n;
			}
		});
	}
	createBucket(t, n = { public: !1 }) {
		return un(this, void 0, void 0, function* () {
			try {
				return {
					data: yield gt(
						this.fetch,
						`${this.url}/bucket`,
						{
							id: t,
							name: t,
							public: n.public,
							file_size_limit: n.fileSizeLimit,
							allowed_mime_types: n.allowedMimeTypes,
						},
						{ headers: this.headers }
					),
					error: null,
				};
			} catch (r) {
				if (pe(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
	updateBucket(t, n) {
		return un(this, void 0, void 0, function* () {
			try {
				return {
					data: yield Hm(
						this.fetch,
						`${this.url}/bucket/${t}`,
						{
							id: t,
							name: t,
							public: n.public,
							file_size_limit: n.fileSizeLimit,
							allowed_mime_types: n.allowedMimeTypes,
						},
						{ headers: this.headers }
					),
					error: null,
				};
			} catch (r) {
				if (pe(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
	emptyBucket(t) {
		return un(this, void 0, void 0, function* () {
			try {
				return {
					data: yield gt(
						this.fetch,
						`${this.url}/bucket/${t}/empty`,
						{},
						{ headers: this.headers }
					),
					error: null,
				};
			} catch (n) {
				if (pe(n)) return { data: null, error: n };
				throw n;
			}
		});
	}
	deleteBucket(t) {
		return un(this, void 0, void 0, function* () {
			try {
				return {
					data: yield mf(
						this.fetch,
						`${this.url}/bucket/${t}`,
						{},
						{ headers: this.headers }
					),
					error: null,
				};
			} catch (n) {
				if (pe(n)) return { data: null, error: n };
				throw n;
			}
		});
	}
}
class Jm extends Gm {
	constructor(t, n = {}, r) {
		super(t, n, r);
	}
	from(t) {
		return new Wm(this.url, this.headers, t, this.fetch);
	}
}
const qm = '2.26.0',
	Ym = { 'X-Client-Info': `supabase-js/${qm}` };
var Xm =
	(globalThis && globalThis.__awaiter) ||
	function (e, t, n, r) {
		function i(o) {
			return o instanceof n
				? o
				: new n(function (s) {
						s(o);
				  });
		}
		return new (n || (n = Promise))(function (o, s) {
			function l(c) {
				try {
					u(r.next(c));
				} catch (d) {
					s(d);
				}
			}
			function a(c) {
				try {
					u(r.throw(c));
				} catch (d) {
					s(d);
				}
			}
			function u(c) {
				c.done ? o(c.value) : i(c.value).then(l, a);
			}
			u((r = r.apply(e, t || [])).next());
		});
	};
const Zm = (e) => {
		let t;
		return (
			e ? (t = e) : typeof fetch > 'u' ? (t = ta) : (t = fetch),
			(...n) => t(...n)
		);
	},
	ey = () => (typeof Headers > 'u' ? ea.Headers : Headers),
	ty = (e, t, n) => {
		const r = Zm(n),
			i = ey();
		return (o, s) =>
			Xm(void 0, void 0, void 0, function* () {
				var l;
				const a = (l = yield t()) !== null && l !== void 0 ? l : e;
				let u = new i(s == null ? void 0 : s.headers);
				return (
					u.has('apikey') || u.set('apikey', e),
					u.has('Authorization') || u.set('Authorization', `Bearer ${a}`),
					r(o, Object.assign(Object.assign({}, s), { headers: u }))
				);
			});
	};
function ny(e) {
	return e.replace(/\/$/, '');
}
function ry(e, t) {
	const { db: n, auth: r, realtime: i, global: o } = e,
		{ db: s, auth: l, realtime: a, global: u } = t;
	return {
		db: Object.assign(Object.assign({}, s), n),
		auth: Object.assign(Object.assign({}, l), r),
		realtime: Object.assign(Object.assign({}, a), i),
		global: Object.assign(Object.assign({}, u), o),
	};
}
var ln =
	(globalThis && globalThis.__awaiter) ||
	function (e, t, n, r) {
		function i(o) {
			return o instanceof n
				? o
				: new n(function (s) {
						s(o);
				  });
		}
		return new (n || (n = Promise))(function (o, s) {
			function l(c) {
				try {
					u(r.next(c));
				} catch (d) {
					s(d);
				}
			}
			function a(c) {
				try {
					u(r.throw(c));
				} catch (d) {
					s(d);
				}
			}
			function u(c) {
				c.done ? o(c.value) : i(c.value).then(l, a);
			}
			u((r = r.apply(e, t || [])).next());
		});
	};
function iy(e) {
	return Math.round(Date.now() / 1e3) + e;
}
function oy() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
		const t = (Math.random() * 16) | 0;
		return (e == 'x' ? t : (t & 3) | 8).toString(16);
	});
}
const rt = () => typeof document < 'u',
	Mt = { tested: !1, writable: !1 },
	ki = () => {
		if (!rt()) return !1;
		try {
			if (typeof globalThis.localStorage != 'object') return !1;
		} catch {
			return !1;
		}
		if (Mt.tested) return Mt.writable;
		const e = `lswt-${Math.random()}${Math.random()}`;
		try {
			globalThis.localStorage.setItem(e, e),
				globalThis.localStorage.removeItem(e),
				(Mt.tested = !0),
				(Mt.writable = !0);
		} catch {
			(Mt.tested = !0), (Mt.writable = !1);
		}
		return Mt.writable;
	};
function Se(e, t) {
	var n;
	t ||
		(t =
			((n = window == null ? void 0 : window.location) === null || n === void 0
				? void 0
				: n.href) || ''),
		(e = e.replace(/[\[\]]/g, '\\$&'));
	const r = new RegExp('[?&#]' + e + '(=([^&#]*)|&|#|$)'),
		i = r.exec(t);
	return i ? (i[2] ? decodeURIComponent(i[2].replace(/\+/g, ' ')) : '') : null;
}
const yf = (e) => {
		let t;
		return (
			e
				? (t = e)
				: typeof fetch > 'u'
				? (t = (...n) =>
						ln(void 0, void 0, void 0, function* () {
							return yield (yield mo(
								() => Promise.resolve().then(() => yo),
								void 0
							)).fetch(...n);
						}))
				: (t = fetch),
			(...n) => t(...n)
		);
	},
	sy = (e) =>
		typeof e == 'object' &&
		e !== null &&
		'status' in e &&
		'ok' in e &&
		'json' in e &&
		typeof e.json == 'function',
	Yn = (e, t, n) =>
		ln(void 0, void 0, void 0, function* () {
			yield e.setItem(t, JSON.stringify(n));
		}),
	oi = (e, t) =>
		ln(void 0, void 0, void 0, function* () {
			const n = yield e.getItem(t);
			if (!n) return null;
			try {
				return JSON.parse(n);
			} catch {
				return n;
			}
		}),
	Xo = (e, t) =>
		ln(void 0, void 0, void 0, function* () {
			yield e.removeItem(t);
		});
function ly(e) {
	const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	let n = '',
		r,
		i,
		o,
		s,
		l,
		a,
		u,
		c = 0;
	for (e = e.replace('-', '+').replace('_', '/'); c < e.length; )
		(s = t.indexOf(e.charAt(c++))),
			(l = t.indexOf(e.charAt(c++))),
			(a = t.indexOf(e.charAt(c++))),
			(u = t.indexOf(e.charAt(c++))),
			(r = (s << 2) | (l >> 4)),
			(i = ((l & 15) << 4) | (a >> 2)),
			(o = ((a & 3) << 6) | u),
			(n = n + String.fromCharCode(r)),
			a != 64 && i != 0 && (n = n + String.fromCharCode(i)),
			u != 64 && o != 0 && (n = n + String.fromCharCode(o));
	return n;
}
class _o {
	constructor() {
		this.promise = new _o.promiseConstructor((t, n) => {
			(this.resolve = t), (this.reject = n);
		});
	}
}
_o.promiseConstructor = Promise;
function Lu(e) {
	const t = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,
		n = e.split('.');
	if (n.length !== 3) throw new Error('JWT is not valid: not a JWT structure');
	if (!t.test(n[1]))
		throw new Error('JWT is not valid: payload is not in base64url format');
	const r = n[1];
	return JSON.parse(ly(r));
}
function ay(e) {
	return new Promise((t) => {
		setTimeout(() => t(null), e);
	});
}
function uy(e, t) {
	return new Promise((r, i) => {
		ln(this, void 0, void 0, function* () {
			for (let o = 0; o < 1 / 0; o++)
				try {
					const s = yield e(o);
					if (!t(o, null, s)) {
						r(s);
						return;
					}
				} catch (s) {
					if (!t(o, s)) {
						i(s);
						return;
					}
				}
		});
	});
}
function cy(e) {
	return ('0' + e.toString(16)).substr(-2);
}
function si() {
	const t = new Uint32Array(56);
	if (typeof crypto > 'u') {
		const n =
				'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~',
			r = n.length;
		let i = '';
		for (let o = 0; o < 56; o++) i += n.charAt(Math.floor(Math.random() * r));
		return i;
	}
	return crypto.getRandomValues(t), Array.from(t, cy).join('');
}
function dy(e) {
	return ln(this, void 0, void 0, function* () {
		const n = new TextEncoder().encode(e),
			r = yield crypto.subtle.digest('SHA-256', n),
			i = new Uint8Array(r);
		return Array.from(i)
			.map((o) => String.fromCharCode(o))
			.join('');
	});
}
function fy(e) {
	return btoa(e).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function li(e) {
	return ln(this, void 0, void 0, function* () {
		if (typeof crypto > 'u')
			return (
				console.warn(
					'WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.'
				),
				e
			);
		const t = yield dy(e);
		return fy(t);
	});
}
class ia extends Error {
	constructor(t, n) {
		super(t),
			(this.__isAuthError = !0),
			(this.name = 'AuthError'),
			(this.status = n);
	}
}
function z(e) {
	return typeof e == 'object' && e !== null && '__isAuthError' in e;
}
class hy extends ia {
	constructor(t, n) {
		super(t, n), (this.name = 'AuthApiError'), (this.status = n);
	}
	toJSON() {
		return { name: this.name, message: this.message, status: this.status };
	}
}
function py(e) {
	return z(e) && e.name === 'AuthApiError';
}
class gf extends ia {
	constructor(t, n) {
		super(t), (this.name = 'AuthUnknownError'), (this.originalError = n);
	}
}
class Bn extends ia {
	constructor(t, n, r) {
		super(t), (this.name = n), (this.status = r);
	}
	toJSON() {
		return { name: this.name, message: this.message, status: this.status };
	}
}
class cn extends Bn {
	constructor() {
		super('Auth session missing!', 'AuthSessionMissingError', 400);
	}
}
class Zo extends Bn {
	constructor() {
		super('Auth session or user missing', 'AuthInvalidTokenResponseError', 500);
	}
}
class ai extends Bn {
	constructor(t) {
		super(t, 'AuthInvalidCredentialsError', 400);
	}
}
class nt extends Bn {
	constructor(t, n = null) {
		super(t, 'AuthImplicitGrantRedirectError', 500),
			(this.details = null),
			(this.details = n);
	}
	toJSON() {
		return {
			name: this.name,
			message: this.message,
			status: this.status,
			details: this.details,
		};
	}
}
class es extends Bn {
	constructor(t, n = null) {
		super(t, 'AuthPKCEGrantCodeExchangeError', 500),
			(this.details = null),
			(this.details = n);
	}
	toJSON() {
		return {
			name: this.name,
			message: this.message,
			status: this.status,
			details: this.details,
		};
	}
}
class nl extends Bn {
	constructor(t, n) {
		super(t, 'AuthRetryableFetchError', n);
	}
}
function Iu(e) {
	return z(e) && e.name === 'AuthRetryableFetchError';
}
var oa =
		(globalThis && globalThis.__awaiter) ||
		function (e, t, n, r) {
			function i(o) {
				return o instanceof n
					? o
					: new n(function (s) {
							s(o);
					  });
			}
			return new (n || (n = Promise))(function (o, s) {
				function l(c) {
					try {
						u(r.next(c));
					} catch (d) {
						s(d);
					}
				}
				function a(c) {
					try {
						u(r.throw(c));
					} catch (d) {
						s(d);
					}
				}
				function u(c) {
					c.done ? o(c.value) : i(c.value).then(l, a);
				}
				u((r = r.apply(e, t || [])).next());
			});
		},
	vy =
		(globalThis && globalThis.__rest) ||
		function (e, t) {
			var n = {};
			for (var r in e)
				Object.prototype.hasOwnProperty.call(e, r) &&
					t.indexOf(r) < 0 &&
					(n[r] = e[r]);
			if (e != null && typeof Object.getOwnPropertySymbols == 'function')
				for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
					t.indexOf(r[i]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
						(n[r[i]] = e[r[i]]);
			return n;
		};
const nr = (e) =>
		e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
	my = [502, 503, 504];
function Au(e) {
	return oa(this, void 0, void 0, function* () {
		if (!sy(e)) throw new nl(nr(e), 0);
		if (my.includes(e.status)) throw new nl(nr(e), e.status);
		let t;
		try {
			t = yield e.json();
		} catch (n) {
			throw new gf(nr(n), n);
		}
		throw new hy(nr(t), e.status || 500);
	});
}
const yy = (e, t, n, r) => {
	const i = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
	return e === 'GET'
		? i
		: ((i.headers = Object.assign(
				{ 'Content-Type': 'application/json;charset=UTF-8' },
				t == null ? void 0 : t.headers
		  )),
		  (i.body = JSON.stringify(r)),
		  Object.assign(Object.assign({}, i), n));
};
function M(e, t, n, r) {
	var i;
	return oa(this, void 0, void 0, function* () {
		const o = Object.assign({}, r == null ? void 0 : r.headers);
		r != null && r.jwt && (o.Authorization = `Bearer ${r.jwt}`);
		const s =
			(i = r == null ? void 0 : r.query) !== null && i !== void 0 ? i : {};
		r != null && r.redirectTo && (s.redirect_to = r.redirectTo);
		const l = Object.keys(s).length
				? '?' + new URLSearchParams(s).toString()
				: '',
			a = yield gy(
				e,
				t,
				n + l,
				{ headers: o, noResolveJson: r == null ? void 0 : r.noResolveJson },
				{},
				r == null ? void 0 : r.body
			);
		return r != null && r.xform
			? r == null
				? void 0
				: r.xform(a)
			: { data: Object.assign({}, a), error: null };
	});
}
function gy(e, t, n, r, i, o) {
	return oa(this, void 0, void 0, function* () {
		const s = yy(t, r, i, o);
		let l;
		try {
			l = yield e(n, s);
		} catch (a) {
			throw (console.error(a), new nl(nr(a), 0));
		}
		if ((l.ok || (yield Au(l)), r != null && r.noResolveJson)) return l;
		try {
			return yield l.json();
		} catch (a) {
			yield Au(a);
		}
	});
}
function vt(e) {
	var t;
	let n = null;
	ky(e) && ((n = Object.assign({}, e)), (n.expires_at = iy(e.expires_in)));
	const r = (t = e.user) !== null && t !== void 0 ? t : e;
	return { data: { session: n, user: r }, error: null };
}
function Wt(e) {
	var t;
	return {
		data: { user: (t = e.user) !== null && t !== void 0 ? t : e },
		error: null,
	};
}
function _y(e) {
	return { data: e, error: null };
}
function wy(e) {
	const {
			action_link: t,
			email_otp: n,
			hashed_token: r,
			redirect_to: i,
			verification_type: o,
		} = e,
		s = vy(e, [
			'action_link',
			'email_otp',
			'hashed_token',
			'redirect_to',
			'verification_type',
		]),
		l = {
			action_link: t,
			email_otp: n,
			hashed_token: r,
			redirect_to: i,
			verification_type: o,
		},
		a = Object.assign({}, s);
	return { data: { properties: l, user: a }, error: null };
}
function Sy(e) {
	return e;
}
function ky(e) {
	return e.access_token && e.refresh_token && e.expires_in;
}
var qe =
		(globalThis && globalThis.__awaiter) ||
		function (e, t, n, r) {
			function i(o) {
				return o instanceof n
					? o
					: new n(function (s) {
							s(o);
					  });
			}
			return new (n || (n = Promise))(function (o, s) {
				function l(c) {
					try {
						u(r.next(c));
					} catch (d) {
						s(d);
					}
				}
				function a(c) {
					try {
						u(r.throw(c));
					} catch (d) {
						s(d);
					}
				}
				function u(c) {
					c.done ? o(c.value) : i(c.value).then(l, a);
				}
				u((r = r.apply(e, t || [])).next());
			});
		},
	Ey =
		(globalThis && globalThis.__rest) ||
		function (e, t) {
			var n = {};
			for (var r in e)
				Object.prototype.hasOwnProperty.call(e, r) &&
					t.indexOf(r) < 0 &&
					(n[r] = e[r]);
			if (e != null && typeof Object.getOwnPropertySymbols == 'function')
				for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
					t.indexOf(r[i]) < 0 &&
						Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
						(n[r[i]] = e[r[i]]);
			return n;
		};
class xy {
	constructor({ url: t = '', headers: n = {}, fetch: r }) {
		(this.url = t),
			(this.headers = n),
			(this.fetch = yf(r)),
			(this.mfa = {
				listFactors: this._listFactors.bind(this),
				deleteFactor: this._deleteFactor.bind(this),
			});
	}
	signOut(t, n = 'global') {
		return qe(this, void 0, void 0, function* () {
			try {
				return (
					yield M(this.fetch, 'POST', `${this.url}/logout?scope=${n}`, {
						headers: this.headers,
						jwt: t,
						noResolveJson: !0,
					}),
					{ data: null, error: null }
				);
			} catch (r) {
				if (z(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
	inviteUserByEmail(t, n = {}) {
		return qe(this, void 0, void 0, function* () {
			try {
				return yield M(this.fetch, 'POST', `${this.url}/invite`, {
					body: { email: t, data: n.data },
					headers: this.headers,
					redirectTo: n.redirectTo,
					xform: Wt,
				});
			} catch (r) {
				if (z(r)) return { data: { user: null }, error: r };
				throw r;
			}
		});
	}
	generateLink(t) {
		return qe(this, void 0, void 0, function* () {
			try {
				const { options: n } = t,
					r = Ey(t, ['options']),
					i = Object.assign(Object.assign({}, r), n);
				return (
					'newEmail' in r &&
						((i.new_email = r == null ? void 0 : r.newEmail),
						delete i.newEmail),
					yield M(this.fetch, 'POST', `${this.url}/admin/generate_link`, {
						body: i,
						headers: this.headers,
						xform: wy,
						redirectTo: n == null ? void 0 : n.redirectTo,
					})
				);
			} catch (n) {
				if (z(n)) return { data: { properties: null, user: null }, error: n };
				throw n;
			}
		});
	}
	createUser(t) {
		return qe(this, void 0, void 0, function* () {
			try {
				return yield M(this.fetch, 'POST', `${this.url}/admin/users`, {
					body: t,
					headers: this.headers,
					xform: Wt,
				});
			} catch (n) {
				if (z(n)) return { data: { user: null }, error: n };
				throw n;
			}
		});
	}
	listUsers(t) {
		var n, r, i, o, s, l, a;
		return qe(this, void 0, void 0, function* () {
			try {
				const u = { nextPage: null, lastPage: 0, total: 0 },
					c = yield M(this.fetch, 'GET', `${this.url}/admin/users`, {
						headers: this.headers,
						noResolveJson: !0,
						query: {
							page:
								(r =
									(n = t == null ? void 0 : t.page) === null || n === void 0
										? void 0
										: n.toString()) !== null && r !== void 0
									? r
									: '',
							per_page:
								(o =
									(i = t == null ? void 0 : t.perPage) === null || i === void 0
										? void 0
										: i.toString()) !== null && o !== void 0
									? o
									: '',
						},
						xform: Sy,
					});
				if (c.error) throw c.error;
				const d = yield c.json(),
					p =
						(s = c.headers.get('x-total-count')) !== null && s !== void 0
							? s
							: 0,
					g =
						(a =
							(l = c.headers.get('link')) === null || l === void 0
								? void 0
								: l.split(',')) !== null && a !== void 0
							? a
							: [];
				return (
					g.length > 0 &&
						(g.forEach((m) => {
							const y = parseInt(m.split(';')[0].split('=')[1].substring(0, 1)),
								S = JSON.parse(m.split(';')[1].split('=')[1]);
							u[`${S}Page`] = y;
						}),
						(u.total = parseInt(p))),
					{ data: Object.assign(Object.assign({}, d), u), error: null }
				);
			} catch (u) {
				if (z(u)) return { data: { users: [] }, error: u };
				throw u;
			}
		});
	}
	getUserById(t) {
		return qe(this, void 0, void 0, function* () {
			try {
				return yield M(this.fetch, 'GET', `${this.url}/admin/users/${t}`, {
					headers: this.headers,
					xform: Wt,
				});
			} catch (n) {
				if (z(n)) return { data: { user: null }, error: n };
				throw n;
			}
		});
	}
	updateUserById(t, n) {
		return qe(this, void 0, void 0, function* () {
			try {
				return yield M(this.fetch, 'PUT', `${this.url}/admin/users/${t}`, {
					body: n,
					headers: this.headers,
					xform: Wt,
				});
			} catch (r) {
				if (z(r)) return { data: { user: null }, error: r };
				throw r;
			}
		});
	}
	deleteUser(t, n = !1) {
		return qe(this, void 0, void 0, function* () {
			try {
				return yield M(this.fetch, 'DELETE', `${this.url}/admin/users/${t}`, {
					headers: this.headers,
					body: { should_soft_delete: n },
					xform: Wt,
				});
			} catch (r) {
				if (z(r)) return { data: { user: null }, error: r };
				throw r;
			}
		});
	}
	_listFactors(t) {
		return qe(this, void 0, void 0, function* () {
			try {
				const { data: n, error: r } = yield M(
					this.fetch,
					'GET',
					`${this.url}/admin/users/${t.userId}/factors`,
					{
						headers: this.headers,
						xform: (i) => ({ data: { factors: i }, error: null }),
					}
				);
				return { data: n, error: r };
			} catch (n) {
				if (z(n)) return { data: null, error: n };
				throw n;
			}
		});
	}
	_deleteFactor(t) {
		return qe(this, void 0, void 0, function* () {
			try {
				return {
					data: yield M(
						this.fetch,
						'DELETE',
						`${this.url}/admin/users/${t.userId}/factors/${t.id}`,
						{ headers: this.headers }
					),
					error: null,
				};
			} catch (n) {
				if (z(n)) return { data: null, error: n };
				throw n;
			}
		});
	}
}
const Cy = '2.39.1',
	Ty = 'http://localhost:9999',
	Py = 'supabase.auth.token',
	Oy = { 'X-Client-Info': `gotrue-js/${Cy}` },
	Du = 10,
	Uu = {
		getItem: (e) => (ki() ? globalThis.localStorage.getItem(e) : null),
		setItem: (e, t) => {
			ki() && globalThis.localStorage.setItem(e, t);
		},
		removeItem: (e) => {
			ki() && globalThis.localStorage.removeItem(e);
		},
	};
function Ry() {
	if (typeof globalThis != 'object')
		try {
			Object.defineProperty(Object.prototype, '__magic__', {
				get: function () {
					return this;
				},
				configurable: !0,
			}),
				(__magic__.globalThis = __magic__),
				delete Object.prototype.__magic__;
		} catch {
			typeof self < 'u' && (self.globalThis = self);
		}
}
var N =
	(globalThis && globalThis.__awaiter) ||
	function (e, t, n, r) {
		function i(o) {
			return o instanceof n
				? o
				: new n(function (s) {
						s(o);
				  });
		}
		return new (n || (n = Promise))(function (o, s) {
			function l(c) {
				try {
					u(r.next(c));
				} catch (d) {
					s(d);
				}
			}
			function a(c) {
				try {
					u(r.throw(c));
				} catch (d) {
					s(d);
				}
			}
			function u(c) {
				c.done ? o(c.value) : i(c.value).then(l, a);
			}
			u((r = r.apply(e, t || [])).next());
		});
	};
Ry();
const jy = {
		url: Ty,
		storageKey: Py,
		autoRefreshToken: !0,
		persistSession: !0,
		detectSessionInUrl: !0,
		headers: Oy,
		flowType: 'implicit',
		debug: !1,
	},
	ui = 30 * 1e3,
	zu = 3;
class Ir {
	constructor(t) {
		var n;
		(this.stateChangeEmitters = new Map()),
			(this.autoRefreshTicker = null),
			(this.visibilityChangedCallback = null),
			(this.refreshingDeferred = null),
			(this.initializePromise = null),
			(this.detectSessionInUrl = !0),
			(this.broadcastChannel = null),
			(this.instanceID = Ir.nextInstanceID),
			(Ir.nextInstanceID += 1),
			this.instanceID > 0 &&
				rt() &&
				console.warn(
					'Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.'
				);
		const r = Object.assign(Object.assign({}, jy), t);
		if (
			((this.logDebugMessages = r.debug),
			(this.inMemorySession = null),
			(this.storageKey = r.storageKey),
			(this.autoRefreshToken = r.autoRefreshToken),
			(this.persistSession = r.persistSession),
			(this.storage = r.storage || Uu),
			(this.admin = new xy({ url: r.url, headers: r.headers, fetch: r.fetch })),
			(this.url = r.url),
			(this.headers = r.headers),
			(this.fetch = yf(r.fetch)),
			(this.detectSessionInUrl = r.detectSessionInUrl),
			(this.flowType = r.flowType),
			(this.mfa = {
				verify: this._verify.bind(this),
				enroll: this._enroll.bind(this),
				unenroll: this._unenroll.bind(this),
				challenge: this._challenge.bind(this),
				listFactors: this._listFactors.bind(this),
				challengeAndVerify: this._challengeAndVerify.bind(this),
				getAuthenticatorAssuranceLevel:
					this._getAuthenticatorAssuranceLevel.bind(this),
			}),
			this.persistSession &&
				this.storage === Uu &&
				!ki() &&
				console.warn(`No storage option exists to persist the session, which may result in unexpected behavior when using auth.
        If you want to set persistSession to true, please provide a storage option or you may set persistSession to false to disable this warning.`),
			rt() &&
				globalThis.BroadcastChannel &&
				this.persistSession &&
				this.storageKey)
		) {
			try {
				this.broadcastChannel = new globalThis.BroadcastChannel(
					this.storageKey
				);
			} catch (i) {
				console.error(
					'Failed to create a new BroadcastChannel, multi-tab state changes will not be available',
					i
				);
			}
			(n = this.broadcastChannel) === null ||
				n === void 0 ||
				n.addEventListener('message', (i) =>
					N(this, void 0, void 0, function* () {
						this._debug(
							'received broadcast notification from other tab or client',
							i
						),
							yield this._notifyAllSubscribers(
								i.data.event,
								i.data.session,
								!1
							);
					})
				);
		}
		this.initialize();
	}
	_debug(...t) {
		return (
			this.logDebugMessages &&
				console.log(
					`GoTrueClient@${this.instanceID} ${new Date().toISOString()}`,
					...t
				),
			this
		);
	}
	initialize() {
		return (
			this.initializePromise || (this.initializePromise = this._initialize()),
			this.initializePromise
		);
	}
	_initialize() {
		return N(this, void 0, void 0, function* () {
			if (this.initializePromise) return this.initializePromise;
			try {
				const t = rt() ? yield this._isPKCEFlow() : !1;
				if (
					(this._debug('#_initialize()', 'begin', 'is PKCE flow', t),
					t || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
				) {
					const { data: n, error: r } = yield this._getSessionFromUrl(t);
					if (r)
						return (
							this._debug(
								'#_initialize()',
								'error detecting session from URL',
								r
							),
							yield this._removeSession(),
							{ error: r }
						);
					const { session: i, redirectType: o } = n;
					return (
						this._debug(
							'#_initialize()',
							'detected session in URL',
							i,
							'redirect type',
							o
						),
						yield this._saveSession(i),
						setTimeout(
							() =>
								N(this, void 0, void 0, function* () {
									o === 'recovery'
										? yield this._notifyAllSubscribers('PASSWORD_RECOVERY', i)
										: yield this._notifyAllSubscribers('SIGNED_IN', i);
								}),
							0
						),
						{ error: null }
					);
				}
				return yield this._recoverAndRefresh(), { error: null };
			} catch (t) {
				return z(t)
					? { error: t }
					: { error: new gf('Unexpected error during initialization', t) };
			} finally {
				yield this._handleVisibilityChange(),
					this._debug('#_initialize()', 'end');
			}
		});
	}
	signUp(t) {
		var n, r, i;
		return N(this, void 0, void 0, function* () {
			try {
				yield this._removeSession();
				let o;
				if ('email' in t) {
					const { email: c, password: d, options: p } = t;
					let g = null,
						m = null;
					if (this.flowType === 'pkce') {
						const y = si();
						yield Yn(this.storage, `${this.storageKey}-code-verifier`, y),
							(g = yield li(y)),
							(m = y === g ? 'plain' : 's256');
					}
					o = yield M(this.fetch, 'POST', `${this.url}/signup`, {
						headers: this.headers,
						redirectTo: p == null ? void 0 : p.emailRedirectTo,
						body: {
							email: c,
							password: d,
							data:
								(n = p == null ? void 0 : p.data) !== null && n !== void 0
									? n
									: {},
							gotrue_meta_security: {
								captcha_token: p == null ? void 0 : p.captchaToken,
							},
							code_challenge: g,
							code_challenge_method: m,
						},
						xform: vt,
					});
				} else if ('phone' in t) {
					const { phone: c, password: d, options: p } = t;
					o = yield M(this.fetch, 'POST', `${this.url}/signup`, {
						headers: this.headers,
						body: {
							phone: c,
							password: d,
							data:
								(r = p == null ? void 0 : p.data) !== null && r !== void 0
									? r
									: {},
							channel:
								(i = p == null ? void 0 : p.channel) !== null && i !== void 0
									? i
									: 'sms',
							gotrue_meta_security: {
								captcha_token: p == null ? void 0 : p.captchaToken,
							},
						},
						xform: vt,
					});
				} else
					throw new ai(
						'You must provide either an email or phone number and a password'
					);
				const { data: s, error: l } = o;
				if (l || !s) return { data: { user: null, session: null }, error: l };
				const a = s.session,
					u = s.user;
				return (
					s.session &&
						(yield this._saveSession(s.session),
						yield this._notifyAllSubscribers('SIGNED_IN', a)),
					{ data: { user: u, session: a }, error: null }
				);
			} catch (o) {
				if (z(o)) return { data: { user: null, session: null }, error: o };
				throw o;
			}
		});
	}
	signInWithPassword(t) {
		return N(this, void 0, void 0, function* () {
			try {
				yield this._removeSession();
				let n;
				if ('email' in t) {
					const { email: o, password: s, options: l } = t;
					n = yield M(
						this.fetch,
						'POST',
						`${this.url}/token?grant_type=password`,
						{
							headers: this.headers,
							body: {
								email: o,
								password: s,
								gotrue_meta_security: {
									captcha_token: l == null ? void 0 : l.captchaToken,
								},
							},
							xform: vt,
						}
					);
				} else if ('phone' in t) {
					const { phone: o, password: s, options: l } = t;
					n = yield M(
						this.fetch,
						'POST',
						`${this.url}/token?grant_type=password`,
						{
							headers: this.headers,
							body: {
								phone: o,
								password: s,
								gotrue_meta_security: {
									captcha_token: l == null ? void 0 : l.captchaToken,
								},
							},
							xform: vt,
						}
					);
				} else
					throw new ai(
						'You must provide either an email or phone number and a password'
					);
				const { data: r, error: i } = n;
				return i
					? { data: { user: null, session: null }, error: i }
					: !r || !r.session || !r.user
					? { data: { user: null, session: null }, error: new Zo() }
					: (r.session &&
							(yield this._saveSession(r.session),
							yield this._notifyAllSubscribers('SIGNED_IN', r.session)),
					  { data: { user: r.user, session: r.session }, error: i });
			} catch (n) {
				if (z(n)) return { data: { user: null, session: null }, error: n };
				throw n;
			}
		});
	}
	signInWithOAuth(t) {
		var n, r, i, o;
		return N(this, void 0, void 0, function* () {
			return (
				yield this._removeSession(),
				yield this._handleProviderSignIn(t.provider, {
					redirectTo:
						(n = t.options) === null || n === void 0 ? void 0 : n.redirectTo,
					scopes: (r = t.options) === null || r === void 0 ? void 0 : r.scopes,
					queryParams:
						(i = t.options) === null || i === void 0 ? void 0 : i.queryParams,
					skipBrowserRedirect:
						(o = t.options) === null || o === void 0
							? void 0
							: o.skipBrowserRedirect,
				})
			);
		});
	}
	exchangeCodeForSession(t) {
		return N(this, void 0, void 0, function* () {
			const n = yield oi(this.storage, `${this.storageKey}-code-verifier`),
				{ data: r, error: i } = yield M(
					this.fetch,
					'POST',
					`${this.url}/token?grant_type=pkce`,
					{
						headers: this.headers,
						body: { auth_code: t, code_verifier: n },
						xform: vt,
					}
				);
			return (
				yield Xo(this.storage, `${this.storageKey}-code-verifier`),
				i
					? { data: { user: null, session: null }, error: i }
					: !r || !r.session || !r.user
					? { data: { user: null, session: null }, error: new Zo() }
					: (r.session &&
							(yield this._saveSession(r.session),
							yield this._notifyAllSubscribers('SIGNED_IN', r.session)),
					  { data: r, error: i })
			);
		});
	}
	signInWithIdToken(t) {
		return N(this, void 0, void 0, function* () {
			yield this._removeSession();
			try {
				const {
						options: n,
						provider: r,
						token: i,
						access_token: o,
						nonce: s,
					} = t,
					l = yield M(
						this.fetch,
						'POST',
						`${this.url}/token?grant_type=id_token`,
						{
							headers: this.headers,
							body: {
								provider: r,
								id_token: i,
								access_token: o,
								nonce: s,
								gotrue_meta_security: {
									captcha_token: n == null ? void 0 : n.captchaToken,
								},
							},
							xform: vt,
						}
					),
					{ data: a, error: u } = l;
				return u
					? { data: { user: null, session: null }, error: u }
					: !a || !a.session || !a.user
					? { data: { user: null, session: null }, error: new Zo() }
					: (a.session &&
							(yield this._saveSession(a.session),
							yield this._notifyAllSubscribers('SIGNED_IN', a.session)),
					  { data: a, error: u });
			} catch (n) {
				if (z(n)) return { data: { user: null, session: null }, error: n };
				throw n;
			}
		});
	}
	signInWithOtp(t) {
		var n, r, i, o, s;
		return N(this, void 0, void 0, function* () {
			try {
				if ((yield this._removeSession(), 'email' in t)) {
					const { email: l, options: a } = t;
					let u = null,
						c = null;
					if (this.flowType === 'pkce') {
						const p = si();
						yield Yn(this.storage, `${this.storageKey}-code-verifier`, p),
							(u = yield li(p)),
							(c = p === u ? 'plain' : 's256');
					}
					const { error: d } = yield M(this.fetch, 'POST', `${this.url}/otp`, {
						headers: this.headers,
						body: {
							email: l,
							data:
								(n = a == null ? void 0 : a.data) !== null && n !== void 0
									? n
									: {},
							create_user:
								(r = a == null ? void 0 : a.shouldCreateUser) !== null &&
								r !== void 0
									? r
									: !0,
							gotrue_meta_security: {
								captcha_token: a == null ? void 0 : a.captchaToken,
							},
							code_challenge: u,
							code_challenge_method: c,
						},
						redirectTo: a == null ? void 0 : a.emailRedirectTo,
					});
					return { data: { user: null, session: null }, error: d };
				}
				if ('phone' in t) {
					const { phone: l, options: a } = t,
						{ data: u, error: c } = yield M(
							this.fetch,
							'POST',
							`${this.url}/otp`,
							{
								headers: this.headers,
								body: {
									phone: l,
									data:
										(i = a == null ? void 0 : a.data) !== null && i !== void 0
											? i
											: {},
									create_user:
										(o = a == null ? void 0 : a.shouldCreateUser) !== null &&
										o !== void 0
											? o
											: !0,
									gotrue_meta_security: {
										captcha_token: a == null ? void 0 : a.captchaToken,
									},
									channel:
										(s = a == null ? void 0 : a.channel) !== null &&
										s !== void 0
											? s
											: 'sms',
								},
							}
						);
					return {
						data: {
							user: null,
							session: null,
							messageId: u == null ? void 0 : u.message_id,
						},
						error: c,
					};
				}
				throw new ai('You must provide either an email or phone number.');
			} catch (l) {
				if (z(l)) return { data: { user: null, session: null }, error: l };
				throw l;
			}
		});
	}
	verifyOtp(t) {
		var n, r;
		return N(this, void 0, void 0, function* () {
			try {
				t.type !== 'email_change' &&
					t.type !== 'phone_change' &&
					(yield this._removeSession());
				const { data: i, error: o } = yield M(
					this.fetch,
					'POST',
					`${this.url}/verify`,
					{
						headers: this.headers,
						body: Object.assign(Object.assign({}, t), {
							gotrue_meta_security: {
								captcha_token:
									(n = t.options) === null || n === void 0
										? void 0
										: n.captchaToken,
							},
						}),
						redirectTo:
							(r = t.options) === null || r === void 0 ? void 0 : r.redirectTo,
						xform: vt,
					}
				);
				if (o) throw o;
				if (!i) throw new Error('An error occurred on token verification.');
				const s = i.session,
					l = i.user;
				return (
					s != null &&
						s.access_token &&
						(yield this._saveSession(s),
						yield this._notifyAllSubscribers('SIGNED_IN', s)),
					{ data: { user: l, session: s }, error: null }
				);
			} catch (i) {
				if (z(i)) return { data: { user: null, session: null }, error: i };
				throw i;
			}
		});
	}
	signInWithSSO(t) {
		var n, r, i;
		return N(this, void 0, void 0, function* () {
			try {
				return (
					yield this._removeSession(),
					yield M(this.fetch, 'POST', `${this.url}/sso`, {
						body: Object.assign(
							Object.assign(
								Object.assign(
									Object.assign(
										Object.assign(
											{},
											'providerId' in t ? { provider_id: t.providerId } : null
										),
										'domain' in t ? { domain: t.domain } : null
									),
									{
										redirect_to:
											(r =
												(n = t.options) === null || n === void 0
													? void 0
													: n.redirectTo) !== null && r !== void 0
												? r
												: void 0,
									}
								),
								!(
									(i = t == null ? void 0 : t.options) === null || i === void 0
								) && i.captchaToken
									? {
											gotrue_meta_security: {
												captcha_token: t.options.captchaToken,
											},
									  }
									: null
							),
							{ skip_http_redirect: !0 }
						),
						headers: this.headers,
						xform: _y,
					})
				);
			} catch (o) {
				if (z(o)) return { data: null, error: o };
				throw o;
			}
		});
	}
	reauthenticate() {
		return N(this, void 0, void 0, function* () {
			try {
				const {
					data: { session: t },
					error: n,
				} = yield this.getSession();
				if (n) throw n;
				if (!t) throw new cn();
				const { error: r } = yield M(
					this.fetch,
					'GET',
					`${this.url}/reauthenticate`,
					{ headers: this.headers, jwt: t.access_token }
				);
				return { data: { user: null, session: null }, error: r };
			} catch (t) {
				if (z(t)) return { data: { user: null, session: null }, error: t };
				throw t;
			}
		});
	}
	resend(t) {
		return N(this, void 0, void 0, function* () {
			try {
				yield this._removeSession();
				const n = `${this.url}/resend`;
				if ('email' in t) {
					const { email: r, type: i, options: o } = t,
						{ error: s } = yield M(this.fetch, 'POST', n, {
							headers: this.headers,
							body: {
								email: r,
								type: i,
								gotrue_meta_security: {
									captcha_token: o == null ? void 0 : o.captchaToken,
								},
							},
							redirectTo: o == null ? void 0 : o.emailRedirectTo,
						});
					return { data: { user: null, session: null }, error: s };
				} else if ('phone' in t) {
					const { phone: r, type: i, options: o } = t,
						{ data: s, error: l } = yield M(this.fetch, 'POST', n, {
							headers: this.headers,
							body: {
								phone: r,
								type: i,
								gotrue_meta_security: {
									captcha_token: o == null ? void 0 : o.captchaToken,
								},
							},
						});
					return {
						data: {
							user: null,
							session: null,
							messageId: s == null ? void 0 : s.message_id,
						},
						error: l,
					};
				}
				throw new ai(
					'You must provide either an email or phone number and a type'
				);
			} catch (n) {
				if (z(n)) return { data: { user: null, session: null }, error: n };
				throw n;
			}
		});
	}
	getSession() {
		return N(this, void 0, void 0, function* () {
			yield this.initializePromise, this._debug('#getSession()', 'begin');
			try {
				let t = null;
				if (this.persistSession) {
					const o = yield oi(this.storage, this.storageKey);
					this._debug('#getSession()', 'session from storage', o),
						o !== null &&
							(this._isValidSession(o)
								? (t = o)
								: (this._debug(
										'#getSession()',
										'session from storage is not valid'
								  ),
								  yield this._removeSession()));
				} else (t = this.inMemorySession), this._debug('#getSession()', 'session from memory', t);
				if (!t) return { data: { session: null }, error: null };
				const n = t.expires_at ? t.expires_at <= Date.now() / 1e3 : !1;
				if (
					(this._debug(
						'#getSession()',
						`session has${n ? '' : ' not'} expired`,
						'expires_at',
						t.expires_at
					),
					!n)
				)
					return { data: { session: t }, error: null };
				const { session: r, error: i } = yield this._callRefreshToken(
					t.refresh_token
				);
				return i
					? { data: { session: null }, error: i }
					: { data: { session: r }, error: null };
			} finally {
				this._debug('#getSession()', 'end');
			}
		});
	}
	getUser(t) {
		var n, r;
		return N(this, void 0, void 0, function* () {
			try {
				if (!t) {
					const { data: i, error: o } = yield this.getSession();
					if (o) throw o;
					t =
						(r =
							(n = i.session) === null || n === void 0
								? void 0
								: n.access_token) !== null && r !== void 0
							? r
							: void 0;
				}
				return yield M(this.fetch, 'GET', `${this.url}/user`, {
					headers: this.headers,
					jwt: t,
					xform: Wt,
				});
			} catch (i) {
				if (z(i)) return { data: { user: null }, error: i };
				throw i;
			}
		});
	}
	updateUser(t, n = {}) {
		return N(this, void 0, void 0, function* () {
			try {
				const { data: r, error: i } = yield this.getSession();
				if (i) throw i;
				if (!r.session) throw new cn();
				const o = r.session,
					{ data: s, error: l } = yield M(
						this.fetch,
						'PUT',
						`${this.url}/user`,
						{
							headers: this.headers,
							redirectTo: n == null ? void 0 : n.emailRedirectTo,
							body: t,
							jwt: o.access_token,
							xform: Wt,
						}
					);
				if (l) throw l;
				return (
					(o.user = s.user),
					yield this._saveSession(o),
					yield this._notifyAllSubscribers('USER_UPDATED', o),
					{ data: { user: o.user }, error: null }
				);
			} catch (r) {
				if (z(r)) return { data: { user: null }, error: r };
				throw r;
			}
		});
	}
	_decodeJWT(t) {
		return Lu(t);
	}
	setSession(t) {
		return N(this, void 0, void 0, function* () {
			try {
				if (!t.access_token || !t.refresh_token) throw new cn();
				const n = Date.now() / 1e3;
				let r = n,
					i = !0,
					o = null;
				const s = Lu(t.access_token);
				if ((s.exp && ((r = s.exp), (i = r <= n)), i)) {
					const { session: l, error: a } = yield this._callRefreshToken(
						t.refresh_token
					);
					if (a) return { data: { user: null, session: null }, error: a };
					if (!l) return { data: { user: null, session: null }, error: null };
					o = l;
				} else {
					const { data: l, error: a } = yield this.getUser(t.access_token);
					if (a) throw a;
					(o = {
						access_token: t.access_token,
						refresh_token: t.refresh_token,
						user: l.user,
						token_type: 'bearer',
						expires_in: r - n,
						expires_at: r,
					}),
						yield this._saveSession(o),
						yield this._notifyAllSubscribers('SIGNED_IN', o);
				}
				return { data: { user: o.user, session: o }, error: null };
			} catch (n) {
				if (z(n)) return { data: { session: null, user: null }, error: n };
				throw n;
			}
		});
	}
	refreshSession(t) {
		var n;
		return N(this, void 0, void 0, function* () {
			try {
				if (!t) {
					const { data: o, error: s } = yield this.getSession();
					if (s) throw s;
					t = (n = o.session) !== null && n !== void 0 ? n : void 0;
				}
				if (!(t != null && t.refresh_token)) throw new cn();
				const { session: r, error: i } = yield this._callRefreshToken(
					t.refresh_token
				);
				return i
					? { data: { user: null, session: null }, error: i }
					: r
					? { data: { user: r.user, session: r }, error: null }
					: { data: { user: null, session: null }, error: null };
			} catch (r) {
				if (z(r)) return { data: { user: null, session: null }, error: r };
				throw r;
			}
		});
	}
	_getSessionFromUrl(t) {
		return N(this, void 0, void 0, function* () {
			try {
				if (!rt()) throw new nt('No browser detected.');
				if (this.flowType === 'implicit' && !this._isImplicitGrantFlow())
					throw new nt('Not a valid implicit grant flow url.');
				if (this.flowType == 'pkce' && !t)
					throw new es('Not a valid PKCE flow url.');
				if (t) {
					const S = Se('code');
					if (!S) throw new es('No code detected.');
					const { data: h, error: f } = yield this.exchangeCodeForSession(S);
					if (f) throw f;
					if (!h.session) throw new es('No session detected.');
					let v = new URL(window.location.href);
					return (
						v.searchParams.delete('code'),
						window.history.replaceState(window.history.state, '', v.toString()),
						{ data: { session: h.session, redirectType: null }, error: null }
					);
				}
				const n = Se('error_description');
				if (n) {
					const S = Se('error_code');
					if (!S) throw new nt('No error_code detected.');
					const h = Se('error');
					throw h
						? new nt(n, { error: h, code: S })
						: new nt('No error detected.');
				}
				const r = Se('provider_token'),
					i = Se('provider_refresh_token'),
					o = Se('access_token');
				if (!o) throw new nt('No access_token detected.');
				const s = Se('expires_in');
				if (!s) throw new nt('No expires_in detected.');
				const l = Se('refresh_token');
				if (!l) throw new nt('No refresh_token detected.');
				const a = Se('token_type');
				if (!a) throw new nt('No token_type detected.');
				const c = Math.round(Date.now() / 1e3) + parseInt(s),
					{ data: d, error: p } = yield this.getUser(o);
				if (p) throw p;
				const g = d.user,
					m = {
						provider_token: r,
						provider_refresh_token: i,
						access_token: o,
						expires_in: parseInt(s),
						expires_at: c,
						refresh_token: l,
						token_type: a,
						user: g,
					},
					y = Se('type');
				return (
					(window.location.hash = ''),
					this._debug('#_getSessionFromUrl()', 'clearing window.location.hash'),
					{ data: { session: m, redirectType: y }, error: null }
				);
			} catch (n) {
				if (z(n))
					return { data: { session: null, redirectType: null }, error: n };
				throw n;
			}
		});
	}
	_isImplicitGrantFlow() {
		return rt() && (!!Se('access_token') || !!Se('error_description'));
	}
	_isPKCEFlow() {
		return N(this, void 0, void 0, function* () {
			const t = yield oi(this.storage, `${this.storageKey}-code-verifier`);
			return !!Se('code') && !!t;
		});
	}
	signOut({ scope: t } = { scope: 'global' }) {
		var n;
		return N(this, void 0, void 0, function* () {
			const { data: r, error: i } = yield this.getSession();
			if (i) return { error: i };
			const o =
				(n = r.session) === null || n === void 0 ? void 0 : n.access_token;
			if (o) {
				const { error: s } = yield this.admin.signOut(o, t);
				if (s && !(py(s) && (s.status === 404 || s.status === 401)))
					return { error: s };
			}
			return (
				t !== 'others' &&
					(yield this._removeSession(),
					yield Xo(this.storage, `${this.storageKey}-code-verifier`),
					yield this._notifyAllSubscribers('SIGNED_OUT', null)),
				{ error: null }
			);
		});
	}
	onAuthStateChange(t) {
		const n = oy(),
			r = {
				id: n,
				callback: t,
				unsubscribe: () => {
					this._debug(
						'#unsubscribe()',
						'state change callback with id removed',
						n
					),
						this.stateChangeEmitters.delete(n);
				},
			};
		return (
			this._debug('#onAuthStateChange()', 'registered callback with id', n),
			this.stateChangeEmitters.set(n, r),
			this._emitInitialSession(n),
			{ data: { subscription: r } }
		);
	}
	_emitInitialSession(t) {
		var n, r;
		return N(this, void 0, void 0, function* () {
			try {
				const {
					data: { session: i },
					error: o,
				} = yield this.getSession();
				if (o) throw o;
				yield (n = this.stateChangeEmitters.get(t)) === null || n === void 0
					? void 0
					: n.callback('INITIAL_SESSION', i),
					this._debug('INITIAL_SESSION', 'callback id', t, 'session', i);
			} catch (i) {
				yield (r = this.stateChangeEmitters.get(t)) === null || r === void 0
					? void 0
					: r.callback('INITIAL_SESSION', null),
					this._debug('INITIAL_SESSION', 'callback id', t, 'error', i),
					console.error(i);
			}
		});
	}
	resetPasswordForEmail(t, n = {}) {
		return N(this, void 0, void 0, function* () {
			let r = null,
				i = null;
			if (this.flowType === 'pkce') {
				const o = si();
				yield Yn(this.storage, `${this.storageKey}-code-verifier`, o),
					(r = yield li(o)),
					(i = o === r ? 'plain' : 's256');
			}
			try {
				return yield M(this.fetch, 'POST', `${this.url}/recover`, {
					body: {
						email: t,
						code_challenge: r,
						code_challenge_method: i,
						gotrue_meta_security: { captcha_token: n.captchaToken },
					},
					headers: this.headers,
					redirectTo: n.redirectTo,
				});
			} catch (o) {
				if (z(o)) return { data: null, error: o };
				throw o;
			}
		});
	}
	_refreshAccessToken(t) {
		return N(this, void 0, void 0, function* () {
			const n = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
			this._debug(n, 'begin');
			try {
				const r = Date.now();
				return yield uy(
					(i) =>
						N(this, void 0, void 0, function* () {
							return (
								yield ay(i * 200),
								this._debug(n, 'refreshing attempt', i),
								yield M(
									this.fetch,
									'POST',
									`${this.url}/token?grant_type=refresh_token`,
									{
										body: { refresh_token: t },
										headers: this.headers,
										xform: vt,
									}
								)
							);
						}),
					(i, o, s) =>
						s && s.error && Iu(s.error) && Date.now() + (i + 1) * 200 - r < ui
				);
			} catch (r) {
				if ((this._debug(n, 'error', r), z(r)))
					return { data: { session: null, user: null }, error: r };
				throw r;
			} finally {
				this._debug(n, 'end');
			}
		});
	}
	_isValidSession(t) {
		return (
			typeof t == 'object' &&
			t !== null &&
			'access_token' in t &&
			'refresh_token' in t &&
			'expires_at' in t
		);
	}
	_handleProviderSignIn(t, n) {
		return N(this, void 0, void 0, function* () {
			const r = yield this._getUrlForProvider(t, {
				redirectTo: n.redirectTo,
				scopes: n.scopes,
				queryParams: n.queryParams,
			});
			return (
				this._debug(
					'#_handleProviderSignIn()',
					'provider',
					t,
					'options',
					n,
					'url',
					r
				),
				rt() && !n.skipBrowserRedirect && window.location.assign(r),
				{ data: { provider: t, url: r }, error: null }
			);
		});
	}
	_recoverAndRefresh() {
		var t;
		return N(this, void 0, void 0, function* () {
			const n = '#_recoverAndRefresh()';
			this._debug(n, 'begin');
			try {
				const r = yield oi(this.storage, this.storageKey);
				if (
					(this._debug(n, 'session from storage', r), !this._isValidSession(r))
				) {
					this._debug(n, 'session is not valid'),
						r !== null && (yield this._removeSession());
					return;
				}
				const i = Math.round(Date.now() / 1e3),
					o =
						((t = r.expires_at) !== null && t !== void 0 ? t : 1 / 0) < i + Du;
				if (
					(this._debug(
						n,
						`session has${o ? '' : ' not'} expired with margin of ${Du}s`
					),
					o)
				) {
					if (this.autoRefreshToken && r.refresh_token) {
						const { error: s } = yield this._callRefreshToken(r.refresh_token);
						s &&
							(console.error(s),
							Iu(s) ||
								(this._debug(
									n,
									'refresh failed with a non-retryable error, removing the session',
									s
								),
								yield this._removeSession()));
					}
				} else yield this._notifyAllSubscribers('SIGNED_IN', r);
			} catch (r) {
				this._debug(n, 'error', r), console.error(r);
				return;
			} finally {
				this._debug(n, 'end');
			}
		});
	}
	_callRefreshToken(t) {
		var n, r;
		return N(this, void 0, void 0, function* () {
			if (!t) throw new cn();
			if (this.refreshingDeferred) return this.refreshingDeferred.promise;
			const i = `#_callRefreshToken(${t.substring(0, 5)}...)`;
			this._debug(i, 'begin');
			try {
				this.refreshingDeferred = new _o();
				const { data: o, error: s } = yield this._refreshAccessToken(t);
				if (s) throw s;
				if (!o.session) throw new cn();
				yield this._saveSession(o.session),
					yield this._notifyAllSubscribers('TOKEN_REFRESHED', o.session);
				const l = { session: o.session, error: null };
				return this.refreshingDeferred.resolve(l), l;
			} catch (o) {
				if ((this._debug(i, 'error', o), z(o))) {
					const s = { session: null, error: o };
					return (
						(n = this.refreshingDeferred) === null ||
							n === void 0 ||
							n.resolve(s),
						s
					);
				}
				throw (
					((r = this.refreshingDeferred) === null ||
						r === void 0 ||
						r.reject(o),
					o)
				);
			} finally {
				(this.refreshingDeferred = null), this._debug(i, 'end');
			}
		});
	}
	_notifyAllSubscribers(t, n, r = !0) {
		return N(this, void 0, void 0, function* () {
			const i = `#_notifyAllSubscribers(${t})`;
			this._debug(i, 'begin', n, `broadcast = ${r}`);
			try {
				this.broadcastChannel &&
					r &&
					this.broadcastChannel.postMessage({ event: t, session: n });
				const o = [],
					s = Array.from(this.stateChangeEmitters.values()).map((l) =>
						N(this, void 0, void 0, function* () {
							try {
								yield l.callback(t, n);
							} catch (a) {
								o.push(a);
							}
						})
					);
				if ((yield Promise.all(s), o.length > 0)) {
					for (let l = 0; l < o.length; l += 1) console.error(o[l]);
					throw o[0];
				}
			} finally {
				this._debug(i, 'end');
			}
		});
	}
	_saveSession(t) {
		return N(this, void 0, void 0, function* () {
			this._debug('#_saveSession()', t),
				this.persistSession || (this.inMemorySession = t),
				this.persistSession && t.expires_at && (yield this._persistSession(t));
		});
	}
	_persistSession(t) {
		return (
			this._debug('#_persistSession()', t), Yn(this.storage, this.storageKey, t)
		);
	}
	_removeSession() {
		return N(this, void 0, void 0, function* () {
			this._debug('#_removeSession()'),
				this.persistSession
					? yield Xo(this.storage, this.storageKey)
					: (this.inMemorySession = null);
		});
	}
	_removeVisibilityChangedCallback() {
		this._debug('#_removeVisibilityChangedCallback()');
		const t = this.visibilityChangedCallback;
		this.visibilityChangedCallback = null;
		try {
			t &&
				rt() &&
				window != null &&
				window.removeEventListener &&
				window.removeEventListener('visibilitychange', t);
		} catch (n) {
			console.error('removing visibilitychange callback failed', n);
		}
	}
	_startAutoRefresh() {
		return N(this, void 0, void 0, function* () {
			yield this._stopAutoRefresh(), this._debug('#_startAutoRefresh()');
			const t = setInterval(() => this._autoRefreshTokenTick(), ui);
			(this.autoRefreshTicker = t),
				t && typeof t == 'object' && typeof t.unref == 'function'
					? t.unref()
					: typeof Deno < 'u' &&
					  typeof Deno.unrefTimer == 'function' &&
					  Deno.unrefTimer(t),
				yield this._autoRefreshTokenTick();
		});
	}
	_stopAutoRefresh() {
		return N(this, void 0, void 0, function* () {
			this._debug('#_stopAutoRefresh()');
			const t = this.autoRefreshTicker;
			(this.autoRefreshTicker = null), t && clearInterval(t);
		});
	}
	startAutoRefresh() {
		return N(this, void 0, void 0, function* () {
			this._removeVisibilityChangedCallback(), yield this._startAutoRefresh();
		});
	}
	stopAutoRefresh() {
		return N(this, void 0, void 0, function* () {
			this._removeVisibilityChangedCallback(), yield this._stopAutoRefresh();
		});
	}
	_autoRefreshTokenTick() {
		return N(this, void 0, void 0, function* () {
			this._debug('#_autoRefreshTokenTick()', 'begin');
			try {
				const t = Date.now();
				try {
					const {
						data: { session: n },
					} = yield this.getSession();
					if (!n || !n.refresh_token || !n.expires_at) {
						this._debug('#_autoRefreshTokenTick()', 'no session');
						return;
					}
					const r = Math.floor((n.expires_at * 1e3 - t) / ui);
					this._debug(
						'#_autoRefreshTokenTick()',
						`access token expires in ${r} ticks, a tick lasts ${ui}ms, refresh threshold is ${zu} ticks`
					),
						r <= zu && (yield this._callRefreshToken(n.refresh_token));
				} catch (n) {
					console.error(
						'Auto refresh tick failed with error. This is likely a transient error.',
						n
					);
				}
			} finally {
				this._debug('#_autoRefreshTokenTick()', 'end');
			}
		});
	}
	_handleVisibilityChange() {
		return N(this, void 0, void 0, function* () {
			if (
				(this._debug('#_handleVisibilityChange()'),
				!rt() || !(window != null && window.addEventListener))
			)
				return this.autoRefreshToken && this.startAutoRefresh(), !1;
			try {
				(this.visibilityChangedCallback = () =>
					N(this, void 0, void 0, function* () {
						return yield this._onVisibilityChanged(!1);
					})),
					window == null ||
						window.addEventListener(
							'visibilitychange',
							this.visibilityChangedCallback
						),
					yield this._onVisibilityChanged(!0);
			} catch (t) {
				console.error('_handleVisibilityChange', t);
			}
		});
	}
	_onVisibilityChanged(t) {
		return N(this, void 0, void 0, function* () {
			this._debug(
				`#_onVisibilityChanged(${t})`,
				'visibilityState',
				document.visibilityState
			),
				document.visibilityState === 'visible'
					? (t ||
							(yield this.initializePromise,
							yield this._recoverAndRefresh(),
							this._debug(
								'#_onVisibilityChanged()',
								'finished waiting for initialize, _recoverAndRefresh'
							)),
					  this.autoRefreshToken && this._startAutoRefresh())
					: document.visibilityState === 'hidden' &&
					  this.autoRefreshToken &&
					  this._stopAutoRefresh();
		});
	}
	_getUrlForProvider(t, n) {
		return N(this, void 0, void 0, function* () {
			const r = [`provider=${encodeURIComponent(t)}`];
			if (
				(n != null &&
					n.redirectTo &&
					r.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),
				n != null &&
					n.scopes &&
					r.push(`scopes=${encodeURIComponent(n.scopes)}`),
				this.flowType === 'pkce')
			) {
				const i = si();
				yield Yn(this.storage, `${this.storageKey}-code-verifier`, i);
				const o = yield li(i),
					s = i === o ? 'plain' : 's256';
				this._debug(
					'PKCE',
					'code verifier',
					`${i.substring(0, 5)}...`,
					'code challenge',
					o,
					'method',
					s
				);
				const l = new URLSearchParams({
					code_challenge: `${encodeURIComponent(o)}`,
					code_challenge_method: `${encodeURIComponent(s)}`,
				});
				r.push(l.toString());
			}
			if (n != null && n.queryParams) {
				const i = new URLSearchParams(n.queryParams);
				r.push(i.toString());
			}
			return `${this.url}/authorize?${r.join('&')}`;
		});
	}
	_unenroll(t) {
		var n;
		return N(this, void 0, void 0, function* () {
			try {
				const { data: r, error: i } = yield this.getSession();
				return i
					? { data: null, error: i }
					: yield M(this.fetch, 'DELETE', `${this.url}/factors/${t.factorId}`, {
							headers: this.headers,
							jwt:
								(n = r == null ? void 0 : r.session) === null || n === void 0
									? void 0
									: n.access_token,
					  });
			} catch (r) {
				if (z(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
	_enroll(t) {
		var n, r;
		return N(this, void 0, void 0, function* () {
			try {
				const { data: i, error: o } = yield this.getSession();
				if (o) return { data: null, error: o };
				const { data: s, error: l } = yield M(
					this.fetch,
					'POST',
					`${this.url}/factors`,
					{
						body: {
							friendly_name: t.friendlyName,
							factor_type: t.factorType,
							issuer: t.issuer,
						},
						headers: this.headers,
						jwt:
							(n = i == null ? void 0 : i.session) === null || n === void 0
								? void 0
								: n.access_token,
					}
				);
				return l
					? { data: null, error: l }
					: (!((r = s == null ? void 0 : s.totp) === null || r === void 0) &&
							r.qr_code &&
							(s.totp.qr_code = `data:image/svg+xml;utf-8,${s.totp.qr_code}`),
					  { data: s, error: null });
			} catch (i) {
				if (z(i)) return { data: null, error: i };
				throw i;
			}
		});
	}
	_verify(t) {
		var n;
		return N(this, void 0, void 0, function* () {
			try {
				const { data: r, error: i } = yield this.getSession();
				if (i) return { data: null, error: i };
				const { data: o, error: s } = yield M(
					this.fetch,
					'POST',
					`${this.url}/factors/${t.factorId}/verify`,
					{
						body: { code: t.code, challenge_id: t.challengeId },
						headers: this.headers,
						jwt:
							(n = r == null ? void 0 : r.session) === null || n === void 0
								? void 0
								: n.access_token,
					}
				);
				return s
					? { data: null, error: s }
					: (yield this._saveSession(
							Object.assign(
								{ expires_at: Math.round(Date.now() / 1e3) + o.expires_in },
								o
							)
					  ),
					  yield this._notifyAllSubscribers('MFA_CHALLENGE_VERIFIED', o),
					  { data: o, error: s });
			} catch (r) {
				if (z(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
	_challenge(t) {
		var n;
		return N(this, void 0, void 0, function* () {
			try {
				const { data: r, error: i } = yield this.getSession();
				return i
					? { data: null, error: i }
					: yield M(
							this.fetch,
							'POST',
							`${this.url}/factors/${t.factorId}/challenge`,
							{
								headers: this.headers,
								jwt:
									(n = r == null ? void 0 : r.session) === null || n === void 0
										? void 0
										: n.access_token,
							}
					  );
			} catch (r) {
				if (z(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
	_challengeAndVerify(t) {
		return N(this, void 0, void 0, function* () {
			const { data: n, error: r } = yield this._challenge({
				factorId: t.factorId,
			});
			return r
				? { data: null, error: r }
				: yield this._verify({
						factorId: t.factorId,
						challengeId: n.id,
						code: t.code,
				  });
		});
	}
	_listFactors() {
		return N(this, void 0, void 0, function* () {
			const {
				data: { user: t },
				error: n,
			} = yield this.getUser();
			if (n) return { data: null, error: n };
			const r = (t == null ? void 0 : t.factors) || [],
				i = r.filter(
					(o) => o.factor_type === 'totp' && o.status === 'verified'
				);
			return { data: { all: r, totp: i }, error: null };
		});
	}
	_getAuthenticatorAssuranceLevel() {
		var t, n;
		return N(this, void 0, void 0, function* () {
			const {
				data: { session: r },
				error: i,
			} = yield this.getSession();
			if (i) return { data: null, error: i };
			if (!r)
				return {
					data: {
						currentLevel: null,
						nextLevel: null,
						currentAuthenticationMethods: [],
					},
					error: null,
				};
			const o = this._decodeJWT(r.access_token);
			let s = null;
			o.aal && (s = o.aal);
			let l = s;
			((n =
				(t = r.user.factors) === null || t === void 0
					? void 0
					: t.filter((c) => c.status === 'verified')) !== null && n !== void 0
				? n
				: []
			).length > 0 && (l = 'aal2');
			const u = o.amr || [];
			return {
				data: {
					currentLevel: s,
					nextLevel: l,
					currentAuthenticationMethods: u,
				},
				error: null,
			};
		});
	}
}
Ir.nextInstanceID = 0;
class $y extends Ir {
	constructor(t) {
		super(t);
	}
}
var Ny =
	(globalThis && globalThis.__awaiter) ||
	function (e, t, n, r) {
		function i(o) {
			return o instanceof n
				? o
				: new n(function (s) {
						s(o);
				  });
		}
		return new (n || (n = Promise))(function (o, s) {
			function l(c) {
				try {
					u(r.next(c));
				} catch (d) {
					s(d);
				}
			}
			function a(c) {
				try {
					u(r.throw(c));
				} catch (d) {
					s(d);
				}
			}
			function u(c) {
				c.done ? o(c.value) : i(c.value).then(l, a);
			}
			u((r = r.apply(e, t || [])).next());
		});
	};
const Ly = { headers: Ym },
	Iy = { schema: 'public' },
	Ay = {
		autoRefreshToken: !0,
		persistSession: !0,
		detectSessionInUrl: !0,
		flowType: 'implicit',
	},
	Dy = {};
class Uy {
	constructor(t, n, r) {
		var i, o, s, l, a, u, c, d;
		if (((this.supabaseUrl = t), (this.supabaseKey = n), !t))
			throw new Error('supabaseUrl is required.');
		if (!n) throw new Error('supabaseKey is required.');
		const p = ny(t);
		(this.realtimeUrl = `${p}/realtime/v1`.replace(/^http/i, 'ws')),
			(this.authUrl = `${p}/auth/v1`),
			(this.storageUrl = `${p}/storage/v1`),
			(this.functionsUrl = `${p}/functions/v1`);
		const g = `sb-${new URL(this.authUrl).hostname.split('.')[0]}-auth-token`,
			m = {
				db: Iy,
				realtime: Dy,
				auth: Object.assign(Object.assign({}, Ay), { storageKey: g }),
				global: Ly,
			},
			y = ry(r ?? {}, m);
		(this.storageKey =
			(o = (i = y.auth) === null || i === void 0 ? void 0 : i.storageKey) !==
				null && o !== void 0
				? o
				: ''),
			(this.headers =
				(l = (s = y.global) === null || s === void 0 ? void 0 : s.headers) !==
					null && l !== void 0
					? l
					: {}),
			(this.auth = this._initSupabaseAuthClient(
				(a = y.auth) !== null && a !== void 0 ? a : {},
				this.headers,
				(u = y.global) === null || u === void 0 ? void 0 : u.fetch
			)),
			(this.fetch = ty(
				n,
				this._getAccessToken.bind(this),
				(c = y.global) === null || c === void 0 ? void 0 : c.fetch
			)),
			(this.realtime = this._initRealtimeClient(
				Object.assign({ headers: this.headers }, y.realtime)
			)),
			(this.rest = new rm(`${p}/rest/v1`, {
				headers: this.headers,
				schema: (d = y.db) === null || d === void 0 ? void 0 : d.schema,
				fetch: this.fetch,
			})),
			this._listenForAuthEvents();
	}
	get functions() {
		return new Yv(this.functionsUrl, {
			headers: this.headers,
			customFetch: this.fetch,
		});
	}
	get storage() {
		return new Jm(this.storageUrl, this.headers, this.fetch);
	}
	from(t) {
		return this.rest.from(t);
	}
	rpc(t, n = {}, r) {
		return this.rest.rpc(t, n, r);
	}
	channel(t, n = { config: {} }) {
		return this.realtime.channel(t, n);
	}
	getChannels() {
		return this.realtime.getChannels();
	}
	removeChannel(t) {
		return this.realtime.removeChannel(t);
	}
	removeAllChannels() {
		return this.realtime.removeAllChannels();
	}
	_getAccessToken() {
		var t, n;
		return Ny(this, void 0, void 0, function* () {
			const { data: r } = yield this.auth.getSession();
			return (n =
				(t = r.session) === null || t === void 0 ? void 0 : t.access_token) !==
				null && n !== void 0
				? n
				: null;
		});
	}
	_initSupabaseAuthClient(
		{
			autoRefreshToken: t,
			persistSession: n,
			detectSessionInUrl: r,
			storage: i,
			storageKey: o,
			flowType: s,
		},
		l,
		a
	) {
		const u = {
			Authorization: `Bearer ${this.supabaseKey}`,
			apikey: `${this.supabaseKey}`,
		};
		return new $y({
			url: this.authUrl,
			headers: Object.assign(Object.assign({}, u), l),
			storageKey: o,
			autoRefreshToken: t,
			persistSession: n,
			detectSessionInUrl: r,
			storage: i,
			flowType: s,
			fetch: a,
		});
	}
	_initRealtimeClient(t) {
		return new zm(
			this.realtimeUrl,
			Object.assign(Object.assign({}, t), {
				params: Object.assign(
					{ apikey: this.supabaseKey },
					t == null ? void 0 : t.params
				),
			})
		);
	}
	_listenForAuthEvents() {
		return this.auth.onAuthStateChange((n, r) => {
			this._handleTokenChanged(
				n,
				'CLIENT',
				r == null ? void 0 : r.access_token
			);
		});
	}
	_handleTokenChanged(t, n, r) {
		(t === 'TOKEN_REFRESHED' || t === 'SIGNED_IN') &&
		this.changedAccessToken !== r
			? (this.realtime.setAuth(r ?? null), (this.changedAccessToken = r))
			: t === 'SIGNED_OUT' &&
			  (this.realtime.setAuth(this.supabaseKey),
			  n == 'STORAGE' && this.auth.signOut(),
			  (this.changedAccessToken = void 0));
	}
}
const zy = (e, t, n) => new Uy(e, t, n),
	Fy = 'https://swxymxsgsnylpcozzyoo.supabase.co',
	My =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3eHlteHNnc255bHBjb3p6eW9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3OTgxNTksImV4cCI6MjAwNDM3NDE1OX0.aSK_VGR2cIMP5MHAokgMFOJ4FjGb1d9fj6_6xEq2lvw',
	by = zy(Fy, My),
	By = () => {
		const e = Xl(),
			[, t] = O.useState([]),
			[n, r] = O.useState(null),
			{ state: i } = vo(),
			o = ['Waldo', 'Wilma', 'Wizard'],
			s = document.querySelector('.game-left'),
			l = (g) => Math.round((g + Number.EPSILON) * 1e3) / 1e3;
		function a(g) {
			let m = document.createElement('div');
			m.classList.add('selector'),
				(m.style.position = 'absolute'),
				(m.style.left = g.clientX - 25 + 'px'),
				(m.style.top = g.clientY - 25 + 'px'),
				document.body.appendChild(m);
		}
		const u = (g) => {
				var y, S;
				const m = document.createElement('div');
				if (
					(m.classList.add('instruction-modal'),
					(m.style.backgroundColor = 'green'),
					setTimeout(() => {
						var h;
						(h = document.querySelector('.instruction-modal')) == null ||
							h.remove();
					}, 1e3),
					g === 'win')
				) {
					m.innerText = 'YOU WIN';
					const h =
						(y = document.querySelector('.timer')) == null
							? void 0
							: y.innerHTML;
					setTimeout(() => {
						e('/', { state: h });
					}, 2e3);
				} else
					g == 'correct'
						? (m.innerText = 'Correct')
						: g == 'miss' &&
						  ((m.style.backgroundColor = 'red'), (m.innerText = 'Incorrect'));
				(S = document.querySelector('.game-right')) == null || S.appendChild(m);
			},
			c = (g, m, y) => {
				let S;
				g == 'Wilma'
					? (S = y[0].cord)
					: g == 'Waldo'
					? (S = y[1].cord)
					: (S = y[2].cord);
				const h = S.split(' '),
					f = h[0] < m[0] && m[0] < h[1],
					v = h[2] < m[1] && m[1] < h[3],
					w = document.querySelectorAll('.character-text');
				f &&
					v &&
					w.forEach((x) => {
						x.innerHTML == g &&
							(u('correct'),
							(x.innerHTML += '✅'),
							w[0].innerHTML[w[0].innerHTML.length - 1] == '✅' &&
								w[1].innerHTML[w[1].innerHTML.length - 1] == '✅' &&
								w[2].innerHTML[w[2].innerHTML.length - 1] == '✅' &&
								u('win'));
					}),
					(!f || !v) && u('miss');
			};
		function d() {
			let g = document.querySelector('.selector'),
				m = document.querySelector('.character-dropdown');
			g && m && (g.remove(), m.remove());
		}
		O.useEffect(() => {
			(async () => {
				const { data: y, error: S } = await by.from('locations').select();
				S && (console.log(S), r(null)), y && (console.log('success'), r(y));
			})();
			const m = (y) => {
				if (s) {
					d(), d();
					const S = s.getBoundingClientRect(),
						h = (y.clientX - S.left) / S.width,
						f = (y.clientY - S.top) / S.height,
						v = [l(h), l(f)];
					t(() => {
						const w = [...v];
						return a(y), p(y, w), w;
					});
				}
			};
			s && s.addEventListener('click', m);
		}, [s]);
		const p = (g, m) => {
			let y = document.createElement('div');
			y.classList.add('character-dropdown'),
				(y.style.position = 'absolute'),
				(y.style.left = g.clientX + 25 + 'px'),
				(y.style.top = g.clientY - 25 + 'px'),
				document.body.appendChild(y),
				o.forEach((h) => {
					let f = document.createElement('button');
					f.classList.add('character'), (f.innerText = h), y.appendChild(f);
				}),
				document.querySelectorAll('.character').forEach((h) => {
					h.addEventListener('click', () => {
						d(), d(), c(h.innerHTML, m, n);
					});
				});
		};
		return D.jsxs('main', {
			className: 'main-game',
			children: [
				D.jsx('section', {
					className: 'game-left',
					children: D.jsx('img', {
						className: 'game-picture',
						src: i.picture,
						alt: 'main-img',
					}),
				}),
				D.jsxs('section', {
					className: 'game-right',
					children: [
						D.jsxs('div', {
							className: 'character-div',
							children: [
								D.jsx('img', {
									className: 'character-img',
									src: Mv,
									alt: 'waldo',
								}),
								D.jsx('p', { className: 'character-text', children: 'Waldo' }),
							],
						}),
						D.jsxs('div', {
							className: 'character-div',
							children: [
								D.jsx('img', {
									className: 'character-img',
									src: bv,
									alt: 'wilma',
								}),
								D.jsx('p', { className: 'character-text', children: 'Wilma' }),
							],
						}),
						D.jsxs('div', {
							className: 'character-div',
							children: [
								D.jsx('img', {
									className: 'character-img',
									src: Bv,
									alt: 'wizard',
								}),
								D.jsx('p', { className: 'character-text', children: 'Wizard' }),
							],
						}),
					],
				}),
			],
		});
	};
const Hy = ({ title: e, gameSelection: t, timer: n }) => {
		var c, d;
		const [r, i] = O.useState(window.location.pathname);
		let [o, s] = O.useState(0);
		const l = () => (
			setTimeout(() => {
				s(o + 1);
			}, 1e3),
			o
		);
		O.useEffect(() => {
			i(window.location.pathname), l();
		}, [window.location.pathname]);
		const a = Xl(),
			u = () => {
				a('/');
			};
		return (
			r === '/game'
				? ((t = 'The Pond'), l())
				: ((t = ''),
				  (o = 0),
				  (c = document.querySelector('.selector')) == null || c.remove(),
				  (d = document.querySelector('.character-dropdown')) == null ||
						d.remove()),
			D.jsxs('nav', {
				className: 'navBar',
				children: [
					D.jsx('h1', { className: 'navText', children: t }),
					D.jsx('h1', { onClick: u, className: 'navText home', children: e }),
					n
						? D.jsx('h1', { className: 'navText timer', children: o })
						: D.jsx('h1', {}),
				],
			})
		);
	},
	Vy = () => {
		let [e, t] = O.useState(!1),
			[n, r] = O.useState('');
		const i = Xl();
		return (
			setTimeout(() => {
				document.querySelectorAll('.card').forEach((o) => {
					o.addEventListener('click', () => {
						t(!0),
							o.textContent && r(o.textContent),
							i('/game', {
								state: {
									title: o.textContent,
									picture: o.children[0].getAttribute('src'),
								},
							});
					});
				});
			}),
			D.jsxs(D.Fragment, {
				children: [
					D.jsx(Hy, { title: "Where's Waldo", gameSelection: n, timer: e }),
					D.jsxs(Iv, {
						children: [
							D.jsx(qs, { path: '/', element: D.jsx(Fv, {}) }),
							D.jsx(qs, { path: '/game', element: D.jsx(By, {}) }),
						],
					}),
				],
			})
		);
	};
ts.createRoot(document.getElementById('root')).render(
	D.jsx(qu.StrictMode, { children: D.jsx(Dv, { children: D.jsx(Vy, {}) }) })
);
