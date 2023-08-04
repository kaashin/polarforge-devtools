export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.9a19c92b.js","app":"_app/immutable/entry/app.8206e094.js","imports":["_app/immutable/entry/start.9a19c92b.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.4318a847.js","_app/immutable/entry/app.8206e094.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.7cf2deec.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
