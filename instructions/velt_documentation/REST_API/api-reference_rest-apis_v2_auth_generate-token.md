Title: Generate Token - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token

Markdown Content:
Generate Token - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Access Control

Generate Token

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

Generate Token

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/authentication/generate_token \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "userId": "<string>",
  "userProperties": {
    "isAdmin": true,
    "name": "<string>",
    "email": "<string>"
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
}'
```

Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Token generated successfully.",
    "data": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyMTIzIiwiaWF0IjoxNjQwOTk1MjAwfQ.signature"
    }
  }
}
```

Access Control

Generate Token
==============

Copy page

Copy page

POST

/

v2

/

authentication

/

generate_token

Try it

Generate Token

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/authentication/generate_token \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "userId": "<string>",
  "userProperties": {
    "isAdmin": true,
    "name": "<string>",
    "email": "<string>"
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
}'
```

Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Token generated successfully.",
    "data": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyMTIzIiwiaWF0IjoxNjQwOTk1MjAwfQ.signature"
    }
  }
}
```

Use this API to generate authentication JWT token for users to access Velt features. The token contains user information and permissions for specific resources like organizations, folders and documents.

*   JWT token expires in 48 hours.
*   You can specify permissions for different resource types (organization, folder, document)

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#endpoint)

Endpoint
============================================================================================

`POST https://api.velt.dev/v2/authentication/generate_token`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#headers)

Headers
==========================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#body)

Body
====================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#param-user-id)

userId

string

required

Unique identifier for the user.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#param-user-properties)

userProperties

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#param-is-admin)

isAdmin

boolean

Whether the user has admin privileges. Defaults to false.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#param-name)

name

string

required

Display name of the user.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#param-email)

email

string

required

Email address of the user.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#param-permissions)

permissions

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#param-resources)

resources

Resource[]

required

Array of resource permission objects.

Show Resource Object Properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#param-type)

type

string

required

Type of resource. Can be “organization”, “document”, or “folder”.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#param-id)

id

string

required

ID of the resource.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#param-organization-id)

organizationId

string

Organization ID. Required when type is “document” or “folder”.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#param-expires-at)

expiresAt

number

Unix timestamp when the permission expires. Optional.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#example-requests)

**Example Requests**
----------------------------------------------------------------------------------------------------------------

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#1-generate-token-with-organization-and-document-permissions)

1. Generate token with organization and document permissions

Copy

Ask AI

```
{
  "userId": "user123",
  "userProperties": {
    "isAdmin": false,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "permissions": {
    "resources": [
      {
        "type": "organization",
        "id": "org_123"
      },
      {
        "type": "document",
        "id": "doc_456",
        "organizationId": "org_123",
        "expiresAt": 1640995200
      }
    ]
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#2-generate-token-with-only-organization-access)

2. Generate token with only organization access

Copy

Ask AI

```
{
  "userId": "user456",
  "userProperties": {
    "isAdmin": true,
    "name": "Jane Smith",
    "email": "jane@example.com"
  },
  "permissions": {
    "resources": [
      {
        "type": "organization",
        "id": "org_789"
      }
    ]
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#3-generate-token-with-folder-permissions)

3. Generate token with folder permissions

Copy

Ask AI

```
{
  "userId": "user789",
  "userProperties": {
    "isAdmin": false,
    "name": "Bob Wilson",
    "email": "bob@example.com"
  },
  "permissions": {
    "resources": [
      {
        "type": "organization",
        "id": "org_123"
      },
      {
        "type": "folder",
        "id": "folder_001",
        "organizationId": "org_123"
      }
    ]
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#response)

Response
============================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Token generated successfully.",
    "data": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token#failure-response)

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

[Get Delete All User Data Status](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-delete-user-data-status-gdpr)[Add Permissions](https://docs.velt.dev/api-reference/rest-apis/v2/auth/add-permissions)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
