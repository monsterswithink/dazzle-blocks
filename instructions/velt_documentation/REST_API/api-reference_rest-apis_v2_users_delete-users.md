Title: Delete Users - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users

Markdown Content:
Delete Users - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Users

Delete Users

[Documentation](https://docs.velt.dev/get-started/overview)[UI Customization](https://docs.velt.dev/ui-customization/overview)[API Reference](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations)[Release Notes](https://docs.velt.dev/release-notes/version-4/upgrade-guide)[Examples](https://velt.dev/examples)[DevTools](https://velt.dev/devtools)

##### REST APIs

*   v2  
    *   Organizations  
    *   Folders  
    *   Documents  
    *   Users  
        *   [POST Add Users](https://docs.velt.dev/api-reference/rest-apis/v2/users/add-users)
        *   [POST Get Users](https://docs.velt.dev/api-reference/rest-apis/v2/users/get-users-v2)
        *   [POST Update Users](https://docs.velt.dev/api-reference/rest-apis/v2/users/update-users)
        *   [POST Delete Users](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users)

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

Delete Users

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/users/delete \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentId": "<string>",
    "folderId": "<string>",
    "userIds": [
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
    "message": "User(s) deleted successfully.",
    "data": {
      "yourUserId1": {
        "success": true,
        "message": "User removed."
      }
    }
  }
}
```

Users

Delete Users
============

Copy page

Remove Users from an Organization or a Document.

Copy page

POST

/

v2

/

users

/

delete

Try it

Delete Users

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/users/delete \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentId": "<string>",
    "folderId": "<string>",
    "userIds": [
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
    "message": "User(s) deleted successfully.",
    "data": {
      "yourUserId1": {
        "success": true,
        "message": "User removed."
      }
    }
  }
}
```

Use this API to remove Users from:
1.   **Organization:** This will remove their access from all the documents and data in the organization. It will also remove these users from the contact list of the organization.
2.   **Document:** This will remove their access from the specified document. It will also remove these users from the contact list of the document. If you pass the `documentId`, then the users will be removed from the document.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users#endpoint)

Endpoint
===========================================================================================

`POST https://api.velt.dev/v2/users/delete`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users#headers)

Headers
=========================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users#body)

Body
===================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users#param-organization-id)

organizationId

string

required

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users#param-document-id)

documentId

string

Document IDs. Provide this if you want to delete users from a specific document.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users#param-folder-id)

folderId

string

Folder ID. Either provide `documentId` or `folderId`.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users#param-user-ids)

userIds

string[]

required

Array of user Ids.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users#example-requests)

**Example Requests**
---------------------------------------------------------------------------------------------------------------

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users#1-delete-users-in-a-specific-organization)

1. Delete users in a specific organization

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "userIds": [
      "yourUserId1"
    ]
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users#2-delete-users-in-a-specific-document-within-an-organization)

2. Delete users in a specific document within an organization

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "userIds": [
      "yourUserId1"
    ]
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users#3-delete-users-in-a-specific-folder-within-an-organization)

3. Delete users in a specific folder within an organization

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "folderId": "yourFolderId",
    "userIds": [
      "yourUserId1"
    ]
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users#response)

Response
===========================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "User(s) deleted successfully.",
    "data": {
      "yourUserId1": {
        "success": true,
        "message": "User removed."
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users#users-not-found)

User(s) Not Found

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "User(s) deleted successfully.",
    "data": {
      "yourUserId1": {
        "success": true,
        "message": "User removed."
      },
      {
      "yourUserId2": {
        "success": false,
        "message": "User does not exist."
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users#failure-response)

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

[Update Users](https://docs.velt.dev/api-reference/rest-apis/v2/users/update-users)[Add User Groups](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-groups)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
