meteor-analyticsjs
==================

Analytics.js packaged for Meteor

exposes `analytics` as a global client variable

see https://segment.io/libraries/analytics.js

## Setup

Set your api key with [Meteor.settings](http://docs.meteor.com/#meteor_settings) as `Meteor.settings.public.analytics_api_key`

```javascript
{
  "public": {
    "analytics_api_key": "YOUR-ANALYTICS-API-KEY"
  }
}
```
