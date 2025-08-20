Title: Remove Permissions - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions

Markdown Content:
Remove Permissions - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Access Control

Remove Permissions

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
        *   [POST Generate Token](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token)
        *   [POST Add Permissions](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions)
        *   [POST Remove Permissions](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions)

    *   Live State  
    *   Workspace  

*   v1  

##### SDK

*   APIs  
*   [Data models](https://docs.velt.dev/api-reference/sdk/models/data-models)

Remove Permissions

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/authentication/permissions/remove \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "userId": "<string>",
    "permissions": {
      "resources": [
        {
          "type": {},
          "id": "<string>",
          "organizationId": "<string>"
        }
      ]
    }
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
    "message": "Permissions removed successfully."
  }
}
```

Access Control

Remove Permissions
==================

Copy page

Copy page

POST

/

v2

/

authentication

/

permissions

/

remove

Try it

Remove Permissions

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/authentication/permissions/remove \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "userId": "<string>",
    "permissions": {
      "resources": [
        {
          "type": {},
          "id": "<string>",
          "organizationId": "<string>"
        }
      ]
    }
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
    "message": "Permissions removed successfully."
  }
}
```

Use this API to remove permissions from a user for specific resources like organizations or documents.

This endpoint allows you to revoke access for a user from one or more resources.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions#endpoint)

Endpoint
================================================================================================

`POST https://api.velt.dev/v2/authentication/permissions/remove`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions#headers)

Headers
==============================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions#body)

Body
========================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions#param-user-id)

userId

string

required

The ID of the user from whom to remove permissions.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions#param-permissions)

permissions

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions#param-resources)

resources

object[]

required

An array of resource objects from which to remove user permissions.

Show Resource object

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions#param-type)

type

'organization' | 'document' | 'folder'

required

The type of resource.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions#param-id)

id

string

required

The ID of the resource.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions#param-organization-id)

organizationId

string

The ID of the organization. Required if `type` is `document`.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions#example-requests)

**Example Requests**
--------------------------------------------------------------------------------------------------------------------

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions#remove-permissions-from-an-organization-and-a-document)

Remove permissions from an organization and a document

Copy

Ask AI

```
{
  "data": {
    "userId": "USER_ID",
    "permissions": {
      "resources": [
        {
          "type": "organization",
          "id": "ORGANIZATION_ID"
        },
        {
          "type": "document",
          "id": "DOCUMENT_ID",
          "organizationId": "ORGANIZATION_ID"
        }
      ]
    }
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions#response)

Response
================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Permissions removed successfully."
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions#failure-response)

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

[Add Permissions](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions)[Broadcast Event](https://docs.velt.dev/api-reference/rest-apis/v2/livestate/broadcast-event)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
