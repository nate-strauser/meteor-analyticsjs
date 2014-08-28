Package.describe({
  name:"natestrauser:analyticsjs",
  summary: "Analytics.js packaged for meteor.",
  version: "0.1.9",
  git: "https://github.com/nate-strauser/meteor-analyticsjs.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  // CLIENT
  api.use([
	'session'
  ], 'client');


  api.add_files([
    'loadAnalytics.js'
  ], 'client');

  if (typeof api.export !== 'undefined') {
    api.export("analytics", "client");
  }
});
