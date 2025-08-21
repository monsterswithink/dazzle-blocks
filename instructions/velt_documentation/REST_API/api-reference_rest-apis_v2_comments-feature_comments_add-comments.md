Title: Add Comments - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments

Markdown Content:
Add Comments - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Comments

Add Comments

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

Add Comments

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/commentannotations/comments/add \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentId": "<string>",
    "annotationId": "<string>",
    "commentData": [
      {
        "commentId": 123,
        "commentText": "<string>",
        "commentHtml": "<string>",
        "context": {},
        "isCommentResolverUsed": true,
        "isCommentTextAvailable": true,
        "from": {},
        "createdAt": 123,
        "lastUpdated": 123,
        "taggedUserContacts": [
          {
            "text": "<string>",
            "userId": "<string>",
            "contact": {
              "email": "<string>",
              "name": "<string>",
              "userId": "<string>"
            }
          }
        ]
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
    "message": "Comment(s) added successfully.",
    "data": [
      778115
    ]
  }
}
```

Comments

Add Comments
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

add

Try it

Add Comments

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/commentannotations/comments/add \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentId": "<string>",
    "annotationId": "<string>",
    "commentData": [
      {
        "commentId": 123,
        "commentText": "<string>",
        "commentHtml": "<string>",
        "context": {},
        "isCommentResolverUsed": true,
        "isCommentTextAvailable": true,
        "from": {},
        "createdAt": 123,
        "lastUpdated": 123,
        "taggedUserContacts": [
          {
            "text": "<string>",
            "userId": "<string>",
            "contact": {
              "email": "<string>",
              "name": "<string>",
              "userId": "<string>"
            }
          }
        ]
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
    "message": "Comment(s) added successfully.",
    "data": [
      778115
    ]
  }
}
```

Use this API to add comments within a specific CommentAnnotation.
[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#endpoint)

Endpoint
===============================================================================================================

`POST https://api.velt.dev/v2/commentannotations/comments/add`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#headers)

Headers
=============================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#body)

Body
=======================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-organization-id)

organizationId

string

required

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-document-id)

documentId

string

required

Document ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-annotation-id)

annotationId

string

required

Comment Annotation ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-comment-data)

commentData

Comment[]

required

Array of Comment Data

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-comment-id)

commentId

number

Custom Comment ID. If not provided, Velt will generate a unique ID for the comment.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-comment-text)

commentText

string

Comment content in plain text string

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-comment-html)

commentHtml

string

Comment content in HTML string

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-context)

context

Object

Custom key/value metadata object. This is used to store any additional information about the comment.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-is-comment-resolver-used)

isCommentResolverUsed

boolean

Use this for self-hosting comments data. Set this as true if you are comments resolver data provider in the SDK.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-is-comment-text-available)

isCommentTextAvailable

boolean

Use this for self-hosting comments data. Set this as true if this comment will have text content. Sometimes, comments might only have attachments and in that case, set this as false.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-from)

from

User

required

User object from whom the comment is added

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-created-at)

createdAt

number

Created At timestamp (in milliseconds since epoch).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-last-updated)

lastUpdated

number

Last Updated timestamp (in milliseconds since epoch).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-tagged-user-contacts)

taggedUserContacts

Object[]

Array of tagged user contacts

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-text)

text

string

required

Display text of the tagged user (e.g. “@Username”)

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-user-id)

userId

string

required

User ID of the tagged user

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-contact)

contact

Object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-email)

email

string

required

Email of the tagged user

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-name)

name

string

required

Name of the tagged user

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#param-user-id-1)

userId

string

required

User ID of the tagged user

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#example-requests)

**Example Requests**
-----------------------------------------------------------------------------------------------------------------------------------

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#1-add-comment-in-a-commentannotation-by-organizationid%2C-documentid%2C-and-annotationid)

1. Add comment in a CommentAnnotation by organizationId, documentId, and annotationId

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "annotationId": "yourAnnotationId",
    "commentData": [
      {
        "commentText": "Sample Comment",
        "commentHtml": "<div>Hello</div>",
        "from": {
          "userId": "yourUserId"
        }
      }
    ]
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#response)

Response
===============================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Comment(s) added successfully.",
    "data": [
      778115
    ]
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments#failure-response)

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

[Get Comment Annotations Count](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-count)[Get Comments](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
