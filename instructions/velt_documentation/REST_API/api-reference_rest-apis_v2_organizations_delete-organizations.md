Title: Delete Organizations - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/organizations/delete-organizations

Markdown Content:
Delete Organizations - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Organizations

Delete Organizations

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

Delete Organizations

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/delete \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationIds": [
      "<string>"
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
    "message": "Organization(s) deleted successfully.",
    "data": {
      "yourOrganizationId": {
        "success": true,
        "id": "02cf91e5e7a5f4c0b600c84cf248384b",
        "message": "Deleted Successfully"
      }
    }
  }
}
```

Organizations

Delete Organizations
====================

Copy page

Copy page

POST

/

v2

/

organizations

/

delete

Try it

Delete Organizations

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/delete \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationIds": [
      "<string>"
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
    "message": "Organization(s) deleted successfully.",
    "data": {
      "yourOrganizationId": {
        "success": true,
        "id": "02cf91e5e7a5f4c0b600c84cf248384b",
        "message": "Deleted Successfully"
      }
    }
  }
}
```

Use this API to delete specific organization(s) data by their IDs.
[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/delete-organizations#endpoint)

Endpoint
===========================================================================================================

`POST https://api.velt.dev/v2/organizations/delete`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/delete-organizations#headers)

Headers
=========================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/delete-organizations#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/delete-organizations#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/delete-organizations#body)

Body
===================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/delete-organizations#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/delete-organizations#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/delete-organizations#param-organization-ids)

organizationIds

string[]

required

Array of Organization IDs

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/delete-organizations#example-requests)

**Example Requests**
-------------------------------------------------------------------------------------------------------------------------------

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/delete-organizations#delete-specific-organization)

Delete specific organization

Copy

Ask AI

```
{
  "data": {
    "organizationIds": [
      "yourOrganizationId1",
      "yourOrganizationId2"
    ]
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/delete-organizations#response)

Response
===========================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/delete-organizations#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Organization(s) deleted successfully.",
    "data": {
      "yourOrganizationId1": {
        "success": true,
        "id": "02cf91e5e7a5f4c0b600c84cf248384b",
        "message": "Deleted Successfully"
      },
      {
      "yourOrganizationId2": {
        "success": false,
        "id": "02cf91e5e7a5f4c0b600c84cf248384b",
        "message": "Organization does not exist"
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/delete-organizations#failure-response)

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

[Update Organizations](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organizations)[Update Disabled State for Organizations](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organization-disable-state)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
