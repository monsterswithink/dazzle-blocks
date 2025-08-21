Title: Broadcast Event - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/livestate/broadcast-event

Markdown Content:
Broadcast Event - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

⌘K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Live State

Broadcast Event

[Documentation](https://docs.velt.dev/get-started/overview)[UI Customization](https://docs.velt.dev/ui-customization/overview)[API Reference](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations)[Release Notes](https://docs.velt.dev/release-notes/version-4/upgrade-guide)[Examples](https://velt.dev/examples)[DevTools](https://velt.dev/devtools)

##### REST APIs

*   v2  
    *   Organizations  
    *   Folders  
    *   Documents  
    *   Users  
    *   User Groups  
    *   Comments Feature  
    *   Notifications  
    *   GDPR  
    *   Access Control  
    *   Live State  
        *   [POST Broadcast Event](https://docs.velt.dev/api-reference/rest-apis/v2/livestate/broadcast-event)

    *   Workspace  

*   v1  

##### SDK

*   APIs  
*   [Data models](https://docs.velt.dev/api-reference/sdk/models/data-models)

Broadcast Event

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/livestate/broadcast \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentId": "<string>",
    "liveStateDataId": "<string>",
    "data": {},
    "merge": true
  }
}'
```

Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Event broadcasted successfully.",
    "data": {
      "success": true
    }
  }
}
```

Live State

Broadcast Event
===============

Copy page

Copy page

POST

/

v2

/

livestate

/

broadcast

Try it

Broadcast Event

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/livestate/broadcast \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentId": "<string>",
    "liveStateDataId": "<string>",
    "data": {},
    "merge": true
  }
}'
```

Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Event broadcasted successfully.",
    "data": {
      "success": true
    }
  }
}
```

Use this API to broadcast live state events to any document. Use it with the [Live State](https://docs.velt.dev/realtime-collaboration/live-state-sync/setup#get-live-data) feature.
[​](https://docs.velt.dev/api-reference/rest-apis/v2/livestate/broadcast-event#endpoint)

Endpoint
==================================================================================================

`POST https://api.velt.dev/v2/livestate/broadcast`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/livestate/broadcast-event#headers)

Headers
================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/livestate/broadcast-event#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/livestate/broadcast-event#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/livestate/broadcast-event#body-parameters)

Body Parameters
================================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/livestate/broadcast-event#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/livestate/broadcast-event#param-organization-id)

organizationId

string

required

Organization ID where the document belongs

[​](https://docs.velt.dev/api-reference/rest-apis/v2/livestate/broadcast-event#param-document-id)

documentId

string

required

Document ID to broadcast the event to

[​](https://docs.velt.dev/api-reference/rest-apis/v2/livestate/broadcast-event#param-live-state-data-id)

liveStateDataId

string

required

Unique identifier for the live state data

[​](https://docs.velt.dev/api-reference/rest-apis/v2/livestate/broadcast-event#param-data-1)

data

Object

required

The data to broadcast. Can be any valid serializable JSON object.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/livestate/broadcast-event#param-merge)

merge

boolean

default:"false"

If true, merges the new data with existing data instead of replacing it

[​](https://docs.velt.dev/api-reference/rest-apis/v2/livestate/broadcast-event#example-request)

Example Request
----------------------------------------------------------------------------------------------------------------

Copy

Ask AI

```
{
  "organizationId": "YOUR_ORGANIZATION_ID",
  "documentId": "YOUR_DOCUMENT_ID",
  "liveStateDataId": "sample_live_state_data_id",
  "data": {
    "status": "active",
    "message": "Hello World",
    "customField": "custom value"
  },
  "merge": true
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/livestate/broadcast-event#response)

Response
==================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/livestate/broadcast-event#success-response)

Success Response
------------------------------------------------------------------------------------------------------------------

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Event broadcasted successfully.",
    "data": {
      "success": true
    }
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/livestate/broadcast-event#error-response)

Error Response
--------------------------------------------------------------------------------------------------------------

Copy

Ask AI

```
{
  "error": {
    "message": "ERROR_MESSAGE",
    "status": "ERROR_CODE"
  }
}
```

Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Event broadcasted successfully.",
    "data": {
      "success": true
    }
  }
}
```

Was this page helpful?

Yes No

[Remove Permissions](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions)[Add Domains](https://docs.velt.dev/api-reference/rest-apis/v2/workspace/add-domain)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
