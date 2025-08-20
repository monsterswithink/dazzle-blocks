Title: Update Comment Annotations - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations

Markdown Content:
Update Comment Annotations - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

⌘K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Comments Annotations

Update Comment Annotations

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

Update Comment Annotations

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/commentannotations/update \
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
    "userIds": [
      "<string>"
    ],
    "annotationIds": [
      "<string>"
    ],
    "updatedData": [
      {
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
        "from": {},
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
        "priority": {
          "id": "<string>",
          "name": "<string>",
          "color": "<string>",
          "lightColor": "<string>"
        }
      }
    ],
    "updateUsers": [
      {
        "oldUser": {
          "userId": "<string>",
          "name": "<string>",
          "email": "<string>"
        },
        "newUser": {
          "userId": "<string>",
          "name": "<string>",
          "email": "<string>"
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
        "message": "Annotations updated successfully.",
        "data": {
            "yourAnnotationId1": {
                "success": true,
                "id": "yourAnnotationId1",
                "message": "Annotations updated successfully"
            }
        }
    }
}
```

Comments Annotations

Update Comment Annotations
==========================

Copy page

Copy page

POST

/

v2

/

commentannotations

/

update

Try it

Update Comment Annotations

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/commentannotations/update \
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
    "userIds": [
      "<string>"
    ],
    "annotationIds": [
      "<string>"
    ],
    "updatedData": [
      {
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
        "from": {},
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
        "priority": {
          "id": "<string>",
          "name": "<string>",
          "color": "<string>",
          "lightColor": "<string>"
        }
      }
    ],
    "updateUsers": [
      {
        "oldUser": {
          "userId": "<string>",
          "name": "<string>",
          "email": "<string>"
        },
        "newUser": {
          "userId": "<string>",
          "name": "<string>",
          "email": "<string>"
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
        "message": "Annotations updated successfully.",
        "data": {
            "yourAnnotationId1": {
                "success": true,
                "id": "yourAnnotationId1",
                "message": "Annotations updated successfully"
            }
        }
    }
}
```

Use this API to update comment annotations in a document within an organization. Additional filters can be applied using location IDs, annotation IDs, or user IDs.
[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#endpoint)

Endpoint
========================================================================================================================================

`POST https://api.velt.dev/v2/commentannotations/update`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#headers)

Headers
======================================================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#body)

Body
================================================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-organization-id)

organizationId

string

required

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-document-id)

documentId

string

required

Document ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-location-ids)

locationIds

string[]

Array of Location IDs

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-user-ids)

userIds

string[]

Array of User IDs. These are the users who created the comment annotation.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-annotation-ids)

annotationIds

string[]

Array of Annotation IDs

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-updated-data)

updatedData

Object[]

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-location)

location

Object

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-id)

id

string

required

Location ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-location-name)

locationName

string

Location Name

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-target-element)

targetElement

Object

Target Element

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-element-id)

elementId

string

Element DOM Id

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-target-text)

targetText

string

Target Text. Provide this if you want to add comment annotation on the provided text content.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-occurrence)

occurrence

number

Occurrence. Provide this if you want to add comment annotation on a text content.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-select-all-content)

selectAllContent

boolean

Select All Content. Provide this if you want to select and add comment annotation on the entire text content of the target elementId.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-from)

from

User

User object from whom the Comment Annotation is added

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-status)

status

Status

Status

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-id-1)

id

string

required

Status ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-name)

name

string

required

Status Name

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-type)

type

'default' | 'ongoing' | 'terminal'

required

Type.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-color)

color

string

Text and comment pin color

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-light-color)

lightColor

string

Background color on the status indicator

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-svg)

svg

string

Raw SVG of the icon.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-icon-url)

iconUrl

string

Icon URL.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-assigned-to)

assignedTo

User

User object to whom the comment is assigned

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-context)

context

Object

Custom key/value metadata object

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-priority)

priority

Object

Priority

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-id-2)

id

string

required

Priority ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-name-1)

name

string

required

Priority Name

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-color-1)

color

string

Priority Color

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-light-color-1)

lightColor

string

Priority Light Color

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-update-users)

updateUsers

Object[]

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-old-user)

oldUser

User

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-user-id)

userId

string

required

Old user’s ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-name-2)

name

string

Old user’s name

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-email)

email

string

Old user’s email

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-new-user)

newUser

User

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-user-id-1)

userId

string

required

New user’s ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-name-3)

name

string

New user’s name

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#param-email-1)

email

string

New user’s email

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#example-requests)

**Example Requests**
------------------------------------------------------------------------------------------------------------------------------------------------------------

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#1-update-all-comment-annotations-by-organizationid-and-documentid)

1. Update all comment annotations by organizationId and documentId

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "updatedData" : {
      "status": {
        "type": "ongoing"
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#2-update-comment-annotations-by-organizationid%2C-documentid-and-locationids)

2. Update comment annotations by organizationId, documentId and locationIds

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
    "updatedData" : {
      "status": {
        "type": "ongoing"
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#3-update-annotations-by-organizationid%2C-documentid%2C-locationids-and-userids)

3. Update annotations by organizationId, documentId, locationIds and userIds

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
    ],
    "updatedData" : {
      "status": {
        "type": "ongoing"
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#4-update-comment-annotations-by-organizationid%2C-documentid-and-userids)

4. Update comment annotations by organizationId, documentId and userIds

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "userIds": [
      "yourUserId"
    ],
    "updatedData" : {
      "status": {
        "type": "ongoing"
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#5-update-comment-annotations-by-organizationid%2C-documentid-and-annotationids)

5. Update comment annotations by organizationId, documentId and annotationIds

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
    ],
    "updatedData" : {
      "status": {
        "type": "ongoing"
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#6-update-comment-annotations-by-organizationid%2C-documentid%2C-locationids-and-annotationids)

6. Update comment annotations by organizationId, documentId, locationIds and annotationIds

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
    ],
    "updatedData" : {
      "status": {
        "type": "ongoing"
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#7-update-users-in-existing-comment-annotations)

7. Update Users in existing comment annotations

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
    ],
    "updateUsers" : [
      {
        "oldUser": {
          "userId": "oldUserId",
        },
        "newUser": {
          "userId": "newUserId",
          "name": "newUserName",
          "email": "newUserEmail"
        }
      }
    ]
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#response)

Response
========================================================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#success-response)

Success Response

Copy

Ask AI

```
{
    "result": {
        "status": "success",
        "message": "Annotations updated successfully.",
        "data": {
            "yourAnnotationId1": {
                "success": true,
                "id": "yourAnnotationId1",
                "message": "Annotations updated successfully"
            }
        }
    }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/update-comment-annotations#failure-response)

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
        "message": "Annotations updated successfully.",
        "data": {
            "yourAnnotationId1": {
                "success": true,
                "id": "yourAnnotationId1",
                "message": "Annotations updated successfully"
            }
        }
    }
}
```

Was this page helpful?

Yes No

[Get Comment Annotations](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-v2)[Delete Comment Annotations](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
