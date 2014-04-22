Package.describe({
  summary: "Analytics.js packaged for meteor."
});

Package.on_use(function (api) {
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
