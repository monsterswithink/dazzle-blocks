Title: Delete Comments - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments

Markdown Content:
Delete Comments - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Comments

Delete Comments

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
        *   Comments  
            *   [POST Add Comments](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments)
            *   [POST Get Comments](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments)
            *   [POST Update Comments](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments)
            *   [POST Delete Comments](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments)

    *   Notifications  
    *   GDPR  
    *   Access Control  
    *   Live State  
    *   Workspace  

*   v1  

##### SDK

*   APIs  
*   [Data models](https://docs.velt.dev/api-reference/sdk/models/data-models)

Delete Comments

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/commentannotations/comments/delete \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentId": "<string>",
    "annotationId": "<string>",
    "commentIds": [
      123
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
    "message": "Comments(s) deleted successfully.",
    "data": {
      "153783": {
        "success": true,
        "id": 153783,
        "message": "Deleted successfully"
      }
    }
  }
}
```

Comments

Delete Comments
===============

Copy page

Copy page

POST

/

v2

/

commentannotations

/

comments

/

delete

Try it

Delete Comments

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/commentannotations/comments/delete \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentId": "<string>",
    "annotationId": "<string>",
    "commentIds": [
      123
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
    "message": "Comments(s) deleted successfully.",
    "data": {
      "153783": {
        "success": true,
        "id": 153783,
        "message": "Deleted successfully"
      }
    }
  }
}
```

Use this API to delete comments within a specific CommentAnnotation. Additional filters can be applied using comment IDs.
[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments#endpoint)

Endpoint
==================================================================================================================

`POST https://api.velt.dev/v2/commentannotations/comments/delete`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments#headers)

Headers
================================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments#body)

Body
==========================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments#param-organization-id)

organizationId

string

required

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments#param-document-id)

documentId

string

required

Document ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments#param-annotation-id)

annotationId

string

required

Comment Annotation ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments#param-comment-ids)

commentIds

number[]

Array of Comment IDs

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments#example-requests)

**Example Requests**
--------------------------------------------------------------------------------------------------------------------------------------

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments#1-delete-all-comments-of-a-commentannotation-by-organizationid%2C-documentid%2C-and-annotationid)

1. Delete all comments of a CommentAnnotation by organizationId, documentId, and annotationId

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "annotationId": "yourAnnotationId"
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments#2-delete-specific-comments-of-a-commentannotation-by-organizationid%2C-documentid%2C-annotationid-and-commentids)

2. Delete specific comments of a CommentAnnotation by organizationId, documentId, annotationId and commentIds

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "annotationId": "yourAnnotationId",
    "commentIds": [
      153783,
      607395
    ]
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments#response)

Response
==================================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Comments(s) deleted successfully.",
    "data": {
      "153783": {
        "success": true,
        "id": 153783,
        "message": "Deleted successfully"
      },
      "607395": {
        "success": false,
        "id": 607395,
        "message": "Not found"
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments#failure-response)

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

[Update Comments](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments)[Add Notifications](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
