meteor-analyticsjs
==================

Analytics.js packaged for Meteor

exposes `analytics` as a global client variable

see https://segment.io/libraries/analytics.js

## Setup

Set your api key in [setting Meteor.public.analytics_api_key](http://docs.meteor.com/#meteor_settings) (example below)

```javascript
{
  "public": {
    "analytics_api_key": "YOUR-ANALYTICS-API-KEY"
  }
}
```