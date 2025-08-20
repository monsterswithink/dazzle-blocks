Title: Add Permissions - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions

Markdown Content:
Add Permissions - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Access Control

Add Permissions

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

Add Permissions

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/authentication/permissions/add \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "user": {
      "userId": "<string>"
    },
    "permissions": {
      "resources": [
        {
          "type": "<string>",
          "id": "<string>",
          "organizationId": "<string>",
          "expiresAt": 123
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
    "message": "Permissions added successfully."
  }
}
```

Access Control

Add Permissions
===============

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

add

Try it

Add Permissions

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/authentication/permissions/add \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "user": {
      "userId": "<string>"
    },
    "permissions": {
      "resources": [
        {
          "type": "<string>",
          "id": "<string>",
          "organizationId": "<string>",
          "expiresAt": 123
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
    "message": "Permissions added successfully."
  }
}
```

Use this API to add permissions to a user for various resources like organizations, folders, documents, etc.

*   You can add permissions for multiple resources in a single API call.
*   The `expiresAt` field is optional. If provided, the permission will expire at the given timestamp.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions#endpoint)

Endpoint
=============================================================================================

`POST https://api.velt.dev/v2/authentication/permissions/add`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions#headers)

Headers
===========================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions#body)

Body
=====================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions#param-user)

user

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions#param-user-id)

userId

string

required

The ID of the user to add permissions to.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions#param-permissions)

permissions

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions#param-resources)

resources

array

required

Array of resource objects to grant permissions for.

Show Resource Object

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions#param-type)

type

string

required

The type of resource. Can be `organization`, `document` or `folder`.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions#param-id)

id

string

required

The ID of the resource.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions#param-organization-id)

organizationId

string

The ID of the organization. Required if `type` is `document` or `folder`.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions#param-expires-at)

expiresAt

number

A Unix timestamp (in seconds) that specifies when the permission should expire. This is optional.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions#example-request)

**Example Request**
---------------------------------------------------------------------------------------------------------------

Here is an example of the request body in JSON format.

Copy

Ask AI

```
{
  "data": {
    "user": {
      "userId": "some-user-id"
    },
    "permissions": {
      "resources": [
        {
          "type": "organization",
          "id": "YOUR_ORGANIZATION_ID"
        },
        {
          "type": "document",
          "id": "YOUR_DOCUMENT_ID",
          "organizationId": "YOUR_ORGANIZATION_ID",
          "expiresAt": 1728902400
        }
      ]
    }
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions#response)

Response
=============================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Permissions added successfully."
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions#failure-response)

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

[Generate Token](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token)[Remove Permissions](https://docs.velt.dev/api-reference/rest-apis/v2/auth/remove-permissions)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
