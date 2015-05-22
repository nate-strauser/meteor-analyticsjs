Package.describe({
  name:"natestrauser:analyticsjs",
  summary: "Segment's analytics.js packaged for Meteor",
  version: "0.1.9",
  git: "https://github.com/nate-strauser/meteor-analyticsjs.git"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  // CLIENT
  api.use([
	'session'
  ], 'client');


  api.addFiles([
    'loadAnalytics.js'
  ], 'client');

  if (typeof api.export !== 'undefined') {
    api.export("analytics", "client");
  }
});
