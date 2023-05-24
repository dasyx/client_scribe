export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.8b71c5f1.js","app":"_app/immutable/entry/app.55c6b9c6.js","imports":["_app/immutable/entry/start.8b71c5f1.js","_app/immutable/chunks/index.539f6559.js","_app/immutable/chunks/singletons.73ee0565.js","_app/immutable/entry/app.55c6b9c6.js","_app/immutable/chunks/index.539f6559.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
