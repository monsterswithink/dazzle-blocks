Title: Update Comments - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments

Markdown Content:
Update Comments - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Comments

Update Comments

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

Update Comments

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/commentannotations/comments/update \
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
    ],
    "updatedData": {
      "commentText": "<string>",
      "commentHtml": "<string>",
      "context": {},
      "isCommentResolverUsed": true,
      "isCommentTextAvailable": true,
      "from": {},
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
    "message": "Comment updated successfully.",
    "data": {
      "607395": {
        "success": true,
        "id": 607395,
        "message": "Updated successfully"
      }
    }
  }
}
```

Comments

Update Comments
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

update

Try it

Update Comments

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/commentannotations/comments/update \
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
    ],
    "updatedData": {
      "commentText": "<string>",
      "commentHtml": "<string>",
      "context": {},
      "isCommentResolverUsed": true,
      "isCommentTextAvailable": true,
      "from": {},
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
    "message": "Comment updated successfully.",
    "data": {
      "607395": {
        "success": true,
        "id": 607395,
        "message": "Updated successfully"
      }
    }
  }
}
```

Use this API to update comments within a specific CommentAnnotation.
[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#endpoint)

Endpoint
==================================================================================================================

`POST https://api.velt.dev/v2/commentannotations/comments/update`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#headers)

Headers
================================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#body)

Body
==========================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-organization-id)

organizationId

string

required

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-document-id)

documentId

string

required

Document ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-annotation-id)

annotationId

string

required

Comment Annotation ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-comment-ids)

commentIds

number[]

required

Comment IDs

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-updated-data)

updatedData

Object

required

Comment data

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-comment-text)

commentText

string

Comment content in plain text string

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-comment-html)

commentHtml

string

Comment content in HTML string

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-context)

context

Object

Custom key/value metadata object. This is used to store any additional information about the comment.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-is-comment-resolver-used)

isCommentResolverUsed

boolean

Use this for self-hosting comments data. Set this as true if you are comments resolver data provider in the SDK.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-is-comment-text-available)

isCommentTextAvailable

boolean

Use this for self-hosting comments data. Set this as true if this comment will have text content. Sometimes, comments might only have attachments and in that case, set this as false.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-from)

from

User

required

User object from whom the comment is added

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-tagged-user-contacts)

taggedUserContacts

Object[]

Array of tagged user contacts

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-text)

text

string

required

Display text of the tagged user (e.g. “@Username”)

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-user-id)

userId

string

required

User ID of the tagged user

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-contact)

contact

Object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-email)

email

string

required

Email of the tagged user

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-name)

name

string

required

Name of the tagged user

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#param-user-id-1)

userId

string

required

User ID of the tagged user

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#example-requests)

**Example Requests**
--------------------------------------------------------------------------------------------------------------------------------------

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#update-comment-in-a-commentannotation-by-organizationid%2C-documentid%2C-annotationid-and-commentid)

Update comment in a CommentAnnotation by organizationId, documentId, annotationId and commentId

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
    ],
    "updatedData": {
      "commentText": "Sample Updated Comment",
      "commentHtml": "<div>Hello Updated</div>"
    }
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#response)

Response
==================================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Comment updated successfully.",
    "data": {
      "607395": {
        "success": true,
        "id": 607395,
        "message": "Updated successfully"
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/update-comments#failure-response)

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

[Get Comments](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/get-comments)[Delete Comments](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
