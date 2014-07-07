meteor-analyticsjs
==================

Segment.io's [Analytics.js](https://segment.io/libraries/analytics.js) packaged for Meteor.

Exposes `analytics` as a global client variable.

## Setup

Set your api key with [Meteor.settings](http://docs.meteor.com/#meteor_settings) as `Meteor.settings.public.analytics_api_key`

```javascript
{
  "public": {
    "analytics_api_key": "YOUR-ANALYTICS-API-KEY",
    "analytics_localhost_active":true //optional, this will enable analytics on localhost, disabled by default
  }
}
```

## Usage

Here's how to track page loads, if you're using `iron-router`:

```js
Router.onRun(function(){
	if(Session.equals('AnalyticsJS_loaded', true))
		analytics.page(this.path);
});
```

For more types of tracking, refer to the [Analytics.js documentation](https://segment.io/libraries/analytics.js).


## Server side tracking

This package is for client side metrics only.  You'll want the `npm` package and the `analytics-node` npm to record server side metrics.  See https://github.com/nate-strauser/meteor-analyticsjs/issues/10
