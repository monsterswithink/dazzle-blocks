Title: Get Organizations - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/organizations/get-organizations-v2

Markdown Content:
Get Organizations - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Organizations

Get Organizations

[Documentation](https://docs.velt.dev/get-started/overview)[UI Customization](https://docs.velt.dev/ui-customization/overview)[API Reference](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations)[Release Notes](https://docs.velt.dev/release-notes/version-4/upgrade-guide)[Examples](https://velt.dev/examples)[DevTools](https://velt.dev/devtools)

##### REST APIs

*   v2  
    *   Organizations  
        *   [POST Add Organizations](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations)
        *   [POST Get Organizations](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/get-organizations-v2)
        *   [POST Update Organizations](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organizations)
        *   [POST Delete Organizations](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/delete-organizations)
        *   [POST Update Disabled State for Organizations](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organization-disable-state)

    *   Folders  
    *   Documents  
    *   Users  
    *   User Groups  
    *   Comments Feature  
    *   Notifications  
    *   GDPR  
    *   Access Control  
    *   Live State  
    *   Workspace  

*   v1  

##### SDK

*   APIs  
*   [Data models](https://docs.velt.dev/api-reference/sdk/models/data-models)

Get Organizations

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/get \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationIds": [
      "<string>"
    ],
    "pageSize": 123,
    "pageToken": "<string>"
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
    "message": "Organization(s) retrieved successfully.",
    "data": [
      {
        "id": "yourOrganizationId",
        "organizationName": "Your Organization Name",
        "disabled": false,
        // other metadata fields may be included here
      }
      // ... more organizations if multiple were retrieved
    ],
    "nextPageToken": "pageToken"
  }
}
```

Organizations

Get Organizations
=================

Copy page

Copy page

POST

/

v2

/

organizations

/

get

Try it

Get Organizations

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/get \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationIds": [
      "<string>"
    ],
    "pageSize": 123,
    "pageToken": "<string>"
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
    "message": "Organization(s) retrieved successfully.",
    "data": [
      {
        "id": "yourOrganizationId",
        "organizationName": "Your Organization Name",
        "disabled": false,
        // other metadata fields may be included here
      }
      // ... more organizations if multiple were retrieved
    ],
    "nextPageToken": "pageToken"
  }
}
```

Use this API to retrieve specific organizations by organization IDs.

Prior to using this API, you must:
*   Enable advanced queries option in [the console](https://console.velt.dev/dashboard/config/appconfig)
*   Deploy v4 series of the Velt SDK.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/get-organizations-v2#endpoint)

Endpoint
===========================================================================================================

`POST https://api.velt.dev/v2/organizations/get`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/get-organizations-v2#headers)

Headers
=========================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/get-organizations-v2#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/get-organizations-v2#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/get-organizations-v2#body)

Body
===================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/get-organizations-v2#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/get-organizations-v2#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/get-organizations-v2#param-organization-ids)

organizationIds

string[]

Array of Organization IDs (Optional). Limit: Only 30 IDs can be passed at a time. If this is not provided, all organizations will be returned.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/get-organizations-v2#param-page-size)

pageSize

number

Number of items to be retrieved per page (Optional). Default: 1000.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/get-organizations-v2#param-page-token)

pageToken

string

Page token retrieved from previous API call. (Optional)

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/get-organizations-v2#example-requests)

**Example Requests**
-------------------------------------------------------------------------------------------------------------------------------

Copy

Ask AI

```
{
  "data": {
    "organizationIds": [
      "yourOrganizationId"
    ],
    "pageSize": 1000,
    "pageToken": "pageToken"
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/get-organizations-v2#response)

Response
===========================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/get-organizations-v2#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Organization(s) retrieved successfully.",
    "data": [
      {
        "id": "yourOrganizationId",
        "organizationName": "Your Organization Name",
        "disabled": false,
        // other metadata fields may be included here
      }
      // ... more organizations if multiple were retrieved
    ],
    "nextPageToken": "pageToken"
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/get-organizations-v2#failure-response)

Failure Response

Copy

Ask AI

```
{
  "error": {
    "message": "ERROR_MESSAGE",
    "status": "INVALID_ARGUMENT"
  }
}
```

Was this page helpful?

Yes No

[Add Organizations](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations)[Update Organizations](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organizations)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
