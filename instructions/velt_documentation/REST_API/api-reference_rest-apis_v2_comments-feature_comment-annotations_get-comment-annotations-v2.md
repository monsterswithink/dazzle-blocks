Title: Get Comment Annotations - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-v2

Markdown Content:
Use this API to retrieve comment annotations from a document within an organization. Additional filters can be applied using location IDs, annotation IDs, or user IDs.

Endpoint
--------

`POST https://api.velt.dev/v2/commentannotations/get`

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

Document ID. Pass a single document Id or use the documentIds field to pass multiple document Ids.

documentIds

string[]

Array of Document IDs. Limit: Only 30 IDs can be passed at a time. If you don’t provide this, data for all documents will be fetched.

groupByDocumentId

boolean

Data will be grouped by document ID.

locationIds

string[]

Array of Location IDs. Limit: Only 30 IDs can be passed at a time.

folderId

string

Folder ID. Filters annotations by the folder.

annotationIds

string[]

Array of Annotation IDs. Limit: Only 30 IDs can be passed at a time.

userIds

string[]

Array of User IDs. Limit: Only 30 IDs can be passed at a time.

statusIds

string[]

Status IDs of the annotations to filter on.

updatedAfter

number

Filter annotations updated after the given lastUpdated timestamp (in milliseconds since epoch).

updatedBefore

number

Filter annotations updated before the given lastUpdated timestamp (in milliseconds since epoch).

createdAfter

number

Filter annotations created after the given createdAt timestamp (in milliseconds since epoch).

createdBefore

number

Filter annotations created before the given createdAt timestamp (in milliseconds since epoch).

pageSize

number

Number of items to be retrieved per page. Default: 1000.

pageToken

string

Page token retrieved from previous API call.

**Example Requests**
--------------------

#### 1. Get annotations by organizationId and documentId

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "pageSize": 10,
    "pageToken": "1720441573192",
    "statusId": "OPEN"
  }
}
```

#### 2. Get annotations by organizationId and documentIds grouped by documentId

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentIds": ["yourDocumentId1", "yourDocumentId2"],
    "groupByDocumentId": true
  }
}
```

#### 3. Get annotations by organizationId, documentId, and locationIds

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "locationIds": [
      "locationx"
    ],
    "pageSize": 10,
    "pageToken": "1720441573192",
    "statusId": "OPEN"
  }
}
```

#### 4. Get annotations by organizationId, documentId, locationIds, and userIds

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "locationIds": [
      "locationx"
    ],
    "userIds": [
      "yourUserId"
    ],
    "pageSize": 10,
    "pageToken": "1720441573192",
    "statusId": "OPEN"
  }
}
```

#### 5. Get annotations by organizationId, documentId, and userIds

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "userIds": [
      "yourUserId"
    ],
    "pageSize": 10,
    "pageToken": "1720441573192",
    "statusId": "OPEN"
  }
}
```

#### 6. Get annotations by organizationId, documentId, and annotationIds

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "annotationIds": [
      "yourAnnotationId1",
      "yourAnnotationId2"
    ],
    "pageSize": 10,
    "pageToken": "1720441573192",
    "statusId": "OPEN"
  }
}
```

#### 7. Get annotations by organizationId, documentId, locationIds, and annotationIds

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "locationIds": [
      "locationx"
    ],
    "annotationIds": [
      "yourAnnotationId1",
      "yourAnnotationId2"
    ],
    "pageSize": 10,
    "pageToken": "1720441573192",
    "statusId": "OPEN"
  }
}
```

#### 8. Get annotations by organizationId, statusIds, updatedAfter, and updatedBefore

```
{
   "data": {
       "organizationId": "myorg1",
       "statusIds": ["OPEN"],
       "updatedAfter": 1720441573192,
       "updatedBefore": 1720441573192,
   }
}
```

#### 9. Get annotations by organizationId, folderId

```
{
   "data": {
       "organizationId": "myorg1",
       "folderId": "folderId1"
   }
}
```

Response
--------

#### Success Response with single documentId

```
{
  "result": {
    "status": "success",
    "message": "Annotations fetched successfully.",
    "data": [
      {
        "annotationId": "yourAnnotationId",
        "comments": [
          {
            "commentId": 123456,
            "commentText": "This is a sample comment text.",
            "commentHtml": "<p>This is a sample comment text.</p>",
            "from": {
              "userId": "user123",
              "name": "John Doe",
              "email": "john.doe@example.com"
            },
            "lastUpdated": "2023-06-15T10:30:00Z"
          }
        ],
        "from": {
          "userId": "user123",
          "name": "John Doe",
          "email": "john.doe@example.com"
        },
        "color": "#00FF00",
        "createdAt": "2023-06-15T10:30:00Z",
        "lastUpdated": "2023-06-15T10:30:00Z",
        "status": {
          "id": "OPEN",
          "name": "Open",
          "color": "#0000FF",
          "type": "default"
        }
      },
      null // null is returned only if you provided an annotationId that doesn't exist
    ],
    "nextPageToken": "pageToken"
  }
}
```

#### Success Response with multiple documentIds with groupByDocumentId

```
{
    "result": {
        "status": "success",
        "message": "Annotations fetched successfully.",
        "data": {
            "documentId1": [
                {
                    "annotationId": "annotationId1",
                    "comments": [
                      //comment objects
                    ],
                    "from": {
                      //from user object
                    },
                    "status": {
                        "color": "#625DF5",
                        "id": "OPEN",
                        "lightColor": "#E7E8FA",
                        "name": "Open",
                        "type": "default"
                    },
                    //other fields
                },
                {
                    "annotationId": "annotationId2",
                    "comments": [
                      //comment objects
                    ],
                    "from": {
                      //from user object
                    },
                    "status": {
                        "color": "#625DF5",
                        "id": "OPEN",
                        "lightColor": "#E7E8FA",
                        "name": "Open",
                        "type": "default"
                    },
                    //other fields
                },
            ],
            "documentId1": [
                {
                    "annotationId": "annotationId1",
                    "comments": [
                      //comment objects
                    ],
                    "from": {
                      //from user object
                    },
                    "status": {
                        "color": "#625DF5",
                        "id": "OPEN",
                        "lightColor": "#E7E8FA",
                        "name": "Open",
                        "type": "default"
                    },
                    //other fields
                },
                {
                    "annotationId": "annotationId2",
                    "comments": [
                      //comment objects
                    ],
                    "from": {
                      //from user object
                    },
                    "status": {
                        "color": "#625DF5",
                        "id": "OPEN",
                        "lightColor": "#E7E8FA",
                        "name": "Open",
                        "type": "default"
                    },
                    //other fields
                },
            ]
        },
        "nextPageToken": "Ds7NMZw0wWSdmfJFLNioTw=="
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
