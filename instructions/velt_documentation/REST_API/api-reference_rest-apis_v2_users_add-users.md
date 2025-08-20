Title: Add Users - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/users/add-users

Markdown Content:
Add Users

POST

Use this API to add Users to:

1.   **Organization:** This will provide them access to all the documents in the organization unless the document has `restricted` access type. It will also show users in the contact list of the organization.
2.   **Folder:** This will provide them access to all the documents in the folder. If you pass the `folderId`, then the users will be added to the folder and not the organization.
3.   **Document:** This will provide them access to the specified document. It will also show users in the contact list of the document. If you pass the `documentId`, then the users will be added to the document and not the organization or folder.

Endpoint
--------

`POST https://api.velt.dev/v2/users/add`

x-velt-api-key

string

required

Your API key.

x-velt-auth-token

string

required

Body
----

#### Params

data

object

required

Show properties

organizationId

string

required

Organization ID

documentId

string

Document ID. Provide this if you want to add users to a specific document.

folderId

string

Folder ID. Provide this if you want to add users to a specific folder. Either provide `documentId` or `folderId`.

users

User[]

required

Array of [User](https://docs.velt.dev/api-reference/sdk/models/data-models#user) objects.

**Example Requests**
--------------------

#### 1. Add users to a specific organization

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "users": [
      {
        "userId": "yourUserId1",
        "name": "User Name",
        "email": "user@email.com"
      }
    ]
  }
}
```

#### 2. Add users to a specific document within an organization

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "users": [
      {
        "userId": "yourUserId1",
        "name": "User Name",
        "email": "user@email.com"
      }
    ]
  }
}
```

#### 3. Add users to a specific folder within an organization

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "folderId": "yourFolderId",
    "users": [
      {
        "userId": "yourUserId1",
        "name": "User Name",
        "email": "user@email.com"
      }
    ]
  }
}
```

Response
--------

#### Success Response

```
{
  "result": {
    "status": "success",
    "message": "User(s) processed successfully.",
    "data": {
      "yourUserId1": {
        "success": true,
        "id": "4c250058149d6c9fb8c894c9ef29c790",
        "message": "User added."
      }
    }
  }
}
```

#### Failure Response

```
{
  "error": {
    "message": "ERROR_MESSAGE",
    "status": "INVALID_ARGUMENT"
  }
}
```

Was this page helpful?
