Title: Get Users - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/users/get-users-v2

Markdown Content:
Use this API to retrieve users based on various filters such as organization ID, document ID, organization user group IDs or user IDs. You can use these filters in various combinations to get the desired users. Some examples are shown below.

Endpoint
--------

`POST https://api.velt.dev/v2/users/get`

x-velt-api-key

string

required

Your API key.

x-velt-auth-token

string

required

Body
----

#### **Params**

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

Document ID

folderId

string

Folder ID. Either provide `documentId` or `folderId`.

userIds

string[]

Array of User IDs. Limit: Only 30 items can be passed at a time.

organizationUserGroupIds

string[]

Array of Organization User Group IDs. Only 30 items can be passed at a time.

allDocuments

boolean

If true, all document users within the organization will be retrieved. You need not pass `documentId` in this case. This will not fetch organization-level users.

groupByDocumentId

boolean

If true, the response will be grouped by document ID. This works when `allDocuments` is set to true.

pageSize

number

Number of items to be retrieved per page. Default: 1000.

pageToken

string

Page token retrieved from previous API call.

**Example Requests**
--------------------

#### 1. Get users by organizationId

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "pageSize": 1000,
    "pageToken": "pageToken"
  }
}
```

#### 2. Get users by documentId within an organization

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId"
  }
}
```

#### 3. Get Users from all documents within an organization.

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "allDocuments": true,
    "groupByDocumentId": true
  }
}
```

#### 4. Get users by specific user IDs in an organization

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "userIds": [
      "yourUserId1",
      "yourUserId2"
    ]
  }
}
```

#### 5. Get users by specific user IDs in the given organization and document

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "userIds": [
      "yourUserId1",
      "yourUserId2"
    ]
  }
}
```

#### 6. Get users by organization and organization user group IDs

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "organizationUserGroupIds": [
      "yourOrganizationUserGroupId"
    ]
  }
}
```

#### 7. Get users by organization, organization user group IDs and user IDs

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "userIds": [
      "yourUserId1",
      "yourUserId2"
    ],
    "organizationUserGroupIds": [
      "yourOrganizationUserGroupId"
    ]
  }
}
```

#### 8. Get users by folderId within an organization

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "folderId": "yourFolderId"
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
    "message": "User(s) retrieved successfully.",
    "data": [
      {
        "email": "userEmail@domain.com",
        "name": "userName",
        "userId": "yourUserId"
      }
    ],
    "nextPageToken": "pageToken"
  }
}
```

#### Success Response with allDocuments and groupByDocumentId

```
{
  "result": {
    "status": "success",
    "message": "User(s) retrieved successfully.",
    "data": {
      "documentId1": [
        {
          "email": "userEmail@domain.com",
          "name": "userName",
          "userId": "yourUserId"
        }
      ]
    },
    "nextPageToken": "pageToken"
  }
}
```

#### Failure Response

```
{
  "error": {
    "message": "Error retrieving user(s).",
    "status": "ERROR_CODE"
  }
}
```
