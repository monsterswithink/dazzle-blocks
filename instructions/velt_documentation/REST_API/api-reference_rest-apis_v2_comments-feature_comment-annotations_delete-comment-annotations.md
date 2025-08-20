Title: Delete Comment Annotations - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations

Markdown Content:
Delete Comment Annotations - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Comments Annotations

Delete Comment Annotations

[Documentation](https://docs.velt.dev/get-started/overview)[UI Customization](https://docs.velt.dev/ui-customization/overview)[API Reference](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations)[Release Notes](https://docs.velt.dev/release-notes/version-4/upgrade-guide)[Examples](https://velt.dev/examples)[DevTools](https://velt.dev/devtools)

##### REST APIs

*   v2  
    *   Organizations  
    *   Folders  
    *   Documents  
    *   Users  
    *   User Groups  
    *   Comments Feature  
        *   Comments Annotations  
            *   [POST Add Comment Annotations](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations)
            *   [POST Get Comment Annotations](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-v2)
            *   [POST Update Comment Annotations](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations)
            *   [POST Delete Comment Annotations](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations)
            *   [POST Get Comment Annotations Count](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-count)

        *   Comments  

    *   Notifications  
    *   GDPR  
    *   Access Control  
    *   Live State  
    *   Workspace  

*   v1  

##### SDK

*   APIs  
*   [Data models](https://docs.velt.dev/api-reference/sdk/models/data-models)

Delete Comment Annotations

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/commentannotations/delete \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentId": "<string>",
    "locationIds": [
      "<string>"
    ],
    "annotationIds": [
      "<string>"
    ],
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
    "message": "Annotations deleted successfully.",
    "data": {
      "yourAnnotationId": {
        "success": true,
        "id": "yourAnnotationId",
        "message": "Deleted Successfully"
      }
    }
  }
}
```

Comments Annotations

Delete Comment Annotations
==========================

Copy page

Copy page

POST

/

v2

/

commentannotations

/

delete

Try it

Delete Comment Annotations

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/commentannotations/delete \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentId": "<string>",
    "locationIds": [
      "<string>"
    ],
    "annotationIds": [
      "<string>"
    ],
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
    "message": "Annotations deleted successfully.",
    "data": {
      "yourAnnotationId": {
        "success": true,
        "id": "yourAnnotationId",
        "message": "Deleted Successfully"
      }
    }
  }
}
```

Use this API to delete comment annotations from a document within an organization. Additional filters can be applied using location IDs, annotation IDs, or user IDs.
[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#endpoint)

Endpoint
========================================================================================================================================

`POST https://api.velt.dev/v2/commentannotations/delete`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#headers)

Headers
======================================================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#body)

Body
================================================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#param-organization-id)

organizationId

string

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#param-document-id)

documentId

string

required

Document ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#param-location-ids)

locationIds

string[]

Array of Location IDs

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#param-annotation-ids)

annotationIds

string[]

Array of Annotation IDs

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#param-user-ids)

userIds

string[]

Array of User IDs

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#example-requests)

**Example Requests**
------------------------------------------------------------------------------------------------------------------------------------------------------------

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#1-delete-annotations-by-organizationid-and-documentid)

1. Delete annotations by organizationId and documentId

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId"
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#2-delete-annotations-by-organizationid%2C-documentid-and-locationids)

2. Delete annotations by organizationId, documentId and locationIds

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "locationIds": [
      "locationx"
    ]
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#3-delete-annotations-by-organizationid%2C-documentid%2C-locationids-and-userids)

3. Delete annotations by organizationId, documentId, locationIds and userIds

Copy

Ask AI

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
    ]
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#4-delete-annotations-by-organizationid%2C-documentid-and-userids)

4. Delete annotations by organizationId, documentId and userIds

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "userIds": [
      "yourUserId"
    ]
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#5-delete-annotations-by-organizationid%2C-documentid-and-annotationids)

5. Delete annotations by organizationId, documentId and annotationIds

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "annotationIds": [
      "yourAnnotationId1",
      "yourAnnotationId2"
    ]
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#6-delete-annotations-by-organizationid%2C-documentid%2C-locationids-and-annotationids)

6. Delete annotations by organizationId, documentId, locationIds and annotationIds

Copy

Ask AI

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
    ]
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#7-delete-annotations-by-documentid-this-will-work-if-the-document-was-created-without-an-organization)

7. Delete annotations by documentId. This will work if the document was created without an organization.

Copy

Ask AI

```
{
  "data": {
    "documentId": "yourDocumentId"
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#8-delete-annotations-by-documentid-and-locationids-this-will-work-if-the-document-was-created-without-an-organization)

8. Delete annotations by documentId and locationIds. This will work if the document was created without an organization.

Copy

Ask AI

```
{
  "data": {
    "documentId": "yourDocumentId",
    "locationIds": [
      "locationx"
    ]
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#9-delete-annotations-by-documentid-and-userids-this-will-work-if-the-document-was-created-without-an-organization)

9. Delete annotations by documentId and userIds. This will work if the document was created without an organization.

Copy

Ask AI

```
{
  "data": {
    "documentId": "yourDocumentId",
    "userIds": [
      "yourUserId"
    ]
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#10-delete-annotations-by-documentid-and-annotationids-this-will-work-if-the-document-was-created-without-an-organization)

10. Delete annotations by documentId and annotationIds. This will work if the document was created without an organization.

Copy

Ask AI

```
{
  "data": {
    "documentId": "yourDocumentId",
    "annotationIds": [
      "yourAnnotationId1",
      "yourAnnotationId2"
    ]
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#11-delete-annotations-by-documentid%2C-locationids%2C-and-userids-this-will-work-if-the-document-was-created-without-an-organization)

11. Delete annotations by documentId, locationIds, and userIds. This will work if the document was created without an organization.

Copy

Ask AI

```
{
  "data": {
    "documentId": "yourDocumentId",
    "locationIds": [
      "locationx"
    ],
    "userIds": [
      "yourUserId"
    ]
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#12-delete-annotations-by-documentid%2C-locationids%2C-and-annotationids-this-will-work-if-the-document-was-created-without-an-organization)

12. Delete annotations by documentId, locationIds, and annotationIds. This will work if the document was created without an organization.

Copy

Ask AI

```
{
  "data": {
    "documentId": "yourDocumentId",
    "locationIds": [
      "locationx"
    ],
    "annotationIds": [
      "yourAnnotationId1",
      "yourAnnotationId2"
    ]
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#response)

Response
========================================================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Annotations deleted successfully.",
    "data": {
      "yourAnnotationId1": {
        "success": true,
        "id": "yourAnnotationId",
        "message": "Deleted Successfully"
      },
      "yourAnnotationId2": {
        "success": false,
        "id": "yourAnnotationId2",
        "message": "Annotation not found."
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations#failure-response)

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

[Update Comment Annotations](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations)[Get Comment Annotations Count](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-count)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
