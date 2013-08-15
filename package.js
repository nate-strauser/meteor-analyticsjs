Package.describe({
  summary: "Analytics.js packaged for meteor."
});

Package.on_use(function (api) {
  api.add_files([
    'loadAnalytics.js'
  ], 'client'
  );

  if (typeof api.export !== 'undefined') {
    api.export("analytics", "client");
  }
});
