!(function (e = '.', t = '__import__') {
	try {
		self[t] = new Function('u', 'return import(u)');
	} catch (l) {
		const s = new URL(e, location),
			n = (e) => {
				URL.revokeObjectURL(e.src), e.remove();
			};
		(self[t] = (e) =>
			new Promise((l, a) => {
				const c = new URL(e, s);
				if (self[t].moduleMap[c]) return l(self[t].moduleMap[c]);
				const r = new Blob(
						[
							`import * as m from '${c}';`,
							`${t}.moduleMap['${c}']=m;`,
						],
						{ type: 'text/javascript' }
					),
					o = Object.assign(document.createElement('script'), {
						type: 'module',
						src: URL.createObjectURL(r),
						onerror() {
							a(new Error(`Failed to import: ${e}`)), n(o);
						},
						onload() {
							l(self[t].moduleMap[c]), n(o);
						},
					});
				document.head.appendChild(o);
			})),
			(self[t].moduleMap = {});
	}
})('/assets/');
const e = document.querySelector('#mobile-menu-btn'),
	t = document.querySelector('#close-menu-btn'),
	l = document.querySelector('#mobile-menu'),
	s = document.querySelector('#helper'),
	n = document.querySelectorAll('#helper-spans span'),
	a = document.querySelector('#darkmode'),
	c = document.querySelector('#side-nav-web'),
	r = document.querySelector('#side-nav-btn'),
	o = document.querySelector('#close-site-nav-btn'),
	d = document.querySelector('#side-nav-apps'),
	u = document.querySelector('#side-nav-apps-btn'),
	i = document.querySelector('#close-app-nav-btn');
e.addEventListener('click', () => {
	l.classList.toggle('-translate-x-full');
}),
	t.addEventListener('click', () => {
		l.classList.toggle('-translate-x-full');
	}),
	s.addEventListener('click', () => {
		n[0].classList.toggle('-translate-y-14'),
			n[1].classList.toggle('-translate-y-28'),
			n[2].classList.toggle('-translate-y-42');
	}),
	a.addEventListener('click', () => {
		document.querySelector('html').classList.toggle('dark'),
			a.classList.toggle('bg-red-800');
	}),
	r.addEventListener('click', () => {
		'-translate-x-full' !== d.classList &&
			d.classList.add('-translate-x-full'),
			c.classList.toggle('-translate-x-full');
	}),
	o.addEventListener('click', () => {
		c.classList.toggle('-translate-x-full');
	}),
	u.addEventListener('click', () => {
		'-translate-x-full' !== c.classList &&
			c.classList.add('-translate-x-full'),
			d.classList.toggle('-translate-x-full');
	}),
	i.addEventListener('click', () => {
		d.classList.toggle('-translate-x-full');
	});
