Title: Get Comments - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments

Markdown Content:
Get Comments - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Comments

Get Comments

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

Get Comments

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/commentannotations/comments/get \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentId": "<string>",
    "annotationId": "<string>",
    "userIds": [
      "<string>"
    ],
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
    "message": "Comments(s) retrieved successfully.",
    "data": [
      {
        "commentHtml": "<div>Hello Updated 2</div>",
        "commentId": 153783,
        "commentText": "Sample Comment Text",
        "from": {
          "email": "user@example.com",
          "name": "User Name",
          "userId": "yourUserId"
        },
        "lastUpdated": "2024-06-20T09:53:42.258Z",
        "status": "added",
        "type": "text"
      }
    ]
  }
}
```

Comments

Get Comments
============

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

get

Try it

Get Comments

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/commentannotations/comments/get \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentId": "<string>",
    "annotationId": "<string>",
    "userIds": [
      "<string>"
    ],
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
    "message": "Comments(s) retrieved successfully.",
    "data": [
      {
        "commentHtml": "<div>Hello Updated 2</div>",
        "commentId": 153783,
        "commentText": "Sample Comment Text",
        "from": {
          "email": "user@example.com",
          "name": "User Name",
          "userId": "yourUserId"
        },
        "lastUpdated": "2024-06-20T09:53:42.258Z",
        "status": "added",
        "type": "text"
      }
    ]
  }
}
```

Use this API to retrieve comments in a specific CommentAnnotation. Additional filters can be applied using comment IDs.

Prior to using this API, you must:
*   Enable advanced queries option in [the console](https://console.velt.dev/dashboard/config/appconfig)
*   Deploy v4 series of the Velt SDK.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments#endpoint)

Endpoint
===============================================================================================================

`POST https://api.velt.dev/v2/commentannotations/comments/get`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments#headers)

Headers
=============================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments#body)

Body
=======================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments#param-organization-id)

organizationId

string

required

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments#param-document-id)

documentId

string

required

Document ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments#param-annotation-id)

annotationId

string

required

Comment Annotation ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments#param-user-ids)

userIds

string[]

required

User IDs

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments#param-comment-ids)

commentIds

number[]

Array of Comment IDs

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments#example-requests)

**Example Requests**
-----------------------------------------------------------------------------------------------------------------------------------

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments#1-get-all-comments-with-a-commentannotation-by-organizationid%2C-documentid%2C-and-annotationid)

1. Get all comments with a CommentAnnotation by organizationId, documentId, and annotationId

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

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments#2-get-specific-comments-of-a-commentannotation-by-organizationid%2C-documentid%2C-annotationid-and-commentids)

2. Get specific comments of a CommentAnnotation by organizationId, documentId, annotationId and commentIds

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

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments#response)

Response
===============================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Comments(s) retrieved successfully.",
    "data": [
      {
        "commentHtml": "<div>Hello Updated 2</div>",
        "commentId": 153783,
        "commentText": "Sample Comment Text",
        "from": {
          "email": "user@example.com",
          "name": "User Name",
          "userId": "yourUserId"
        },
        "lastUpdated": "2024-06-20T09:53:42.258Z",
        "status": "added",
        "type": "text"
      },
      null // If comment not found
    ]
  }
}
```

Was this page helpful?

Yes No

[Add Comments](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments)[Update Comments](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
