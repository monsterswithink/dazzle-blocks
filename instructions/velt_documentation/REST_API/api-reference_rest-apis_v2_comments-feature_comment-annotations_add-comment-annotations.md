Title: Add Comment Annotations - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations

Markdown Content:
Add Comment Annotations - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

⌘K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Comments Annotations

Add Comment Annotations

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

Add Comment Annotations

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/commentannotations/add \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentId": "<string>",
    "commentAnnotations": [
      {
        "annotationId": "<string>",
        "location": {
          "id": "<string>",
          "locationName": "<string>"
        },
        "targetElement": {
          "elementId": "<string>",
          "targetText": "<string>",
          "occurrence": 123,
          "selectAllContent": true
        },
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
        ],
        "status": {
          "id": "<string>",
          "name": "<string>",
          "type": {},
          "color": "<string>",
          "lightColor": "<string>",
          "svg": "<string>",
          "iconUrl": "<string>"
        },
        "assignedTo": {},
        "context": {},
        "createdAt": 123,
        "lastUpdated": 123,
        "priority": {
          "id": "<string>",
          "color": "<string>",
          "name": "<string>",
          "lightColor": "<string>"
        }
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
       "message": "Comment Annotation(s) added successfully.",
       "data": {
           "-O0mpUziLcBwzREvZKs6": {
               "success": true,
               "annotationId": "-O0mpUziLcBwzREvZKs6",
               "commentIds": [
                   126535
               ],
               "message": "Added Successfully"
           }
       }
   }
}
```

Comments Annotations

Add Comment Annotations
=======================

Copy page

Copy page

POST

/

v2

/

commentannotations

/

add

Try it

Add Comment Annotations

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/commentannotations/add \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentId": "<string>",
    "commentAnnotations": [
      {
        "annotationId": "<string>",
        "location": {
          "id": "<string>",
          "locationName": "<string>"
        },
        "targetElement": {
          "elementId": "<string>",
          "targetText": "<string>",
          "occurrence": 123,
          "selectAllContent": true
        },
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
        ],
        "status": {
          "id": "<string>",
          "name": "<string>",
          "type": {},
          "color": "<string>",
          "lightColor": "<string>",
          "svg": "<string>",
          "iconUrl": "<string>"
        },
        "assignedTo": {},
        "context": {},
        "createdAt": 123,
        "lastUpdated": 123,
        "priority": {
          "id": "<string>",
          "color": "<string>",
          "name": "<string>",
          "lightColor": "<string>"
        }
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
       "message": "Comment Annotation(s) added successfully.",
       "data": {
           "-O0mpUziLcBwzREvZKs6": {
               "success": true,
               "annotationId": "-O0mpUziLcBwzREvZKs6",
               "commentIds": [
                   126535
               ],
               "message": "Added Successfully"
           }
       }
   }
}
```

Use this API to add comment annotations to a document within an organization.
*   You can add comments on an elemement, text or page.
*   You can provide HTML or text content.
*   Additional filters can be applied using location IDs.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#endpoint)

Endpoint
=====================================================================================================================================

`POST https://api.velt.dev/v2/commentannotations/add`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#headers)

Headers
===================================================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#body)

Body
=============================================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-data)

data

Object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-organization-id)

organizationId

string

required

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-document-id)

documentId

string

required

Document ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-comment-annotations)

commentAnnotations

Object[]

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-annotation-id)

annotationId

string

Custom Annotation ID. If not provided, Velt will generate a unique ID for the annotation.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-location)

location

Object

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-id)

id

string

required

Location ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-location-name)

locationName

string

Location Name

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-target-element)

targetElement

Object

Target Element

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-element-id)

elementId

string

Element DOM Id

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-target-text)

targetText

string

Target Text. Provide this if you want to add comment annotation on the provided text content.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-occurrence)

occurrence

number

Occurrence. Provide this if you want to add comment annotation on a text content.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-select-all-content)

selectAllContent

boolean

Select All Content. Provide this if you want to select and add comment annotation on the entire text content of the target elementId.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-comment-data)

commentData

Object[]

required

Array of Comment Data

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-comment-id)

commentId

number

Custom Comment ID. If not provided, Velt will generate a unique ID for the comment.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-comment-text)

commentText

string

Comment content in plain text string

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-comment-html)

commentHtml

string

Comment content in HTML string

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-context)

context

Object

Custom key/value metadata object. This is used to store any additional information about the comment.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-is-comment-resolver-used)

isCommentResolverUsed

boolean

Use this for self-hosting comments data. Set this as true if you are comments resolver data provider in the SDK.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-is-comment-text-available)

isCommentTextAvailable

boolean

Use this for self-hosting comments data. Set this as true if this comment will have text content. Sometimes, comments might only have attachments and in that case, set this as false.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-from)

from

User

required

User object from whom the comment is added

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-created-at)

createdAt

number

Created At timestamp (in milliseconds since epoch).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-last-updated)

lastUpdated

number

Last Updated timestamp (in milliseconds since epoch).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-tagged-user-contacts)

taggedUserContacts

Object[]

Array of tagged user contacts

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-text)

text

string

required

Display text of the tagged user (e.g. “@Username”)

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-user-id)

userId

string

required

User ID of the tagged user

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-contact)

contact

Object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-email)

email

string

required

Email of the tagged user

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-name)

name

string

required

Name of the tagged user

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-user-id-1)

userId

string

required

User ID of the tagged user

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-status)

status

Status

Status

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-id-1)

id

string

required

Status ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-name-1)

name

string

required

Status Name

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-type)

type

'default' | 'ongoing' | 'terminal'

required

Type.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-color)

color

string

required

Text and comment pin color

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-light-color)

lightColor

string

required

Background color on the status indicator

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-svg)

svg

string

Raw SVG of the icon. Either `svg` or `iconUrl` is required.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-icon-url)

iconUrl

string

Icon URL. Either `svg` or `iconUrl` is required.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-assigned-to)

assignedTo

User

User object to whom the comment is assigned

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-context-1)

context

Object

Custom key/value metadata object

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-created-at-1)

createdAt

number

Created At timestamp (in milliseconds since epoch).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-last-updated-1)

lastUpdated

number

Last Updated timestamp (in milliseconds since epoch).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-priority)

priority

Object

Priority

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-id-2)

id

string

required

Priority ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-color-1)

color

string

required

Priority Color

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-name-2)

name

string

required

Priority Name

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#param-light-color-1)

lightColor

string

required

Priority Light Color

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#example-requests)

**Example Requests**
---------------------------------------------------------------------------------------------------------------------------------------------------------

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#add-comment-annotation-by-organizationid%2C-documentid-and-location)

Add comment annotation by organizationId, documentId and location

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "commentAnnotations": [
      {
        "location": {
          "id": "yourLocationId",
          "locationName": "yourLocationName"
        },
        "targetElement": {
          "elementId": "yourElementId",
          "targetText": "Your Target Text",
          "occurrence": 1,
          "selectAllContent": false
        },
        "commentData": [
          {
            "commentText": "Sample Comment",
            "commentHtml": "<div>Sample Comment</div>",
            "from": {
              "userId": "yourUserId",
              "name": "yourUserName",
              "email": "yourUserEmail",
            }
          }
        ]
      }
    ]
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#response)

Response
=====================================================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#success-response)

Success Response

Copy

Ask AI

```
{
   "result": {
       "status": "success",
       "message": "Comment Annotation(s) added successfully.",
       "data": {
           "-O0mpUziLcBwzREvZKs6": {
               "success": true,
               "annotationId": "-O0mpUziLcBwzREvZKs6",
               "commentIds": [
                   126535
               ],
               "message": "Added Successfully"
           }
       }
   }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/add-comment-annotations#failure-response)

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

Response

Copy

Ask AI

```
{
   "result": {
       "status": "success",
       "message": "Comment Annotation(s) added successfully.",
       "data": {
           "-O0mpUziLcBwzREvZKs6": {
               "success": true,
               "annotationId": "-O0mpUziLcBwzREvZKs6",
               "commentIds": [
                   126535
               ],
               "message": "Added Successfully"
           }
       }
   }
}
```

Was this page helpful?

Yes No

[Delete Users from Groups](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/delete-users-from-group)[Get Comment Annotations](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-v2)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
