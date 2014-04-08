meteor-analyticsjs
==================

Segment.io's [Analytics.js](https://segment.io/libraries/analytics.js) packaged for Meteor.

Exposes `analytics` as a global client variable.

## Setup

Set your api key with [Meteor.settings](http://docs.meteor.com/#meteor_settings) as `Meteor.settings.public.analytics_api_key`

```javascript
{
  "public": {
    "analytics_api_key": "YOUR-ANALYTICS-API-KEY"
  }
}
```

## Usage

Here's how to track page loads, if you're using `iron-router`:

```js
Router.configure({
  ...,
  load: function () {
    analytics.page(this.path);
  }
});
```

For more types of tracking, refer to the [Analytics.js documentation](https://segment.io/libraries/analytics.js).
