Title: Add Organizations - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations

Markdown Content:
Add Organizations - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Organizations

Add Organizations

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

Add Organizations

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/add \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizations": [
      {}
    ]
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
    "message": "Organization(s) added successfully.",
    "data": {
      "yourOrganizationId": {
        "success": true,
        "id": "02cf91e5e7a5f4c0b600c84cf248384b",
        "message": "Added Successfully"
      }
    }
  }
}
```

Organizations

Add Organizations
=================

Copy page

Copy page

POST

/

v2

/

organizations

/

add

Try it

Add Organizations

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/add \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizations": [
      {}
    ]
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
    "message": "Organization(s) added successfully.",
    "data": {
      "yourOrganizationId": {
        "success": true,
        "id": "02cf91e5e7a5f4c0b600c84cf248384b",
        "message": "Added Successfully"
      }
    }
  }
}
```

Use this API to add new organizations and its metadata.
[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations#endpoint)

Endpoint
========================================================================================================

`POST https://api.velt.dev/v2/organizations/add`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations#headers)

Headers
======================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations#body)

Body
================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations#param-organizations)

organizations

Organization[]

required

Array of Organization objects

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations#example-requests)

**Example Requests**
----------------------------------------------------------------------------------------------------------------------------

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations#add-organization)

Add organization

Copy

Ask AI

```
{
  "data": {
    "organizations": [
      {
        "organizationId": "yourOrganizationId",
        "organizationName": "Your Organization Name"
      }
    ]
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations#response)

Response
========================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Organization(s) added successfully.",
    "data": {
      "yourOrganizationId": {
        "success": true,
        "id": "02cf91e5e7a5f4c0b600c84cf248384b",
        "message": "Added Successfully"
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations#failure-response)

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

[Get Organizations](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/get-organizations-v2)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
