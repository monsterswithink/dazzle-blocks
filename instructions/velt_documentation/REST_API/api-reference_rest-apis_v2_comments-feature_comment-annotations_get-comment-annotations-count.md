Title: Get Comment Annotations Count - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-count

Markdown Content:
Get Comment Annotations Count - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Comments Annotations

Get Comment Annotations Count

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

Get Comment Annotations Count

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/commentannotations/count/get \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentIds": [
      "<string>"
    ],
    "userId": "<string>",
    "statusIds": [
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
    "message": "Comment count retrieved successfully.",
    "data": {
      "DOC_1": {
        "total": 4,
        "unread": 2
      },
      "DOC_2": {
        "total": 2,
        "unread": 0
      }
    }
  }
}
```

Comments Annotations

Get Comment Annotations Count
=============================

Copy page

Copy page

POST

/

v2

/

commentannotations

/

count

/

get

Try it

Get Comment Annotations Count

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/commentannotations/count/get \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentIds": [
      "<string>"
    ],
    "userId": "<string>",
    "statusIds": [
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
    "message": "Comment count retrieved successfully.",
    "data": {
      "DOC_1": {
        "total": 4,
        "unread": 2
      },
      "DOC_2": {
        "total": 2,
        "unread": 0
      }
    }
  }
}
```

Use this API to retrieve the count of comment annotations for specified documents, including both total and unread counts.

Prior to using this API, you must:
*   Enable advanced queries option in [the console](https://console.velt.dev/dashboard/config/appconfig)
*   Deploy v4 series of the Velt SDK.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-count#endpoint)

Endpoint
===========================================================================================================================================

`POST https://api.velt.dev/v2/commentannotations/count/get`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-count#headers)

Headers
=========================================================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-count#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-count#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-count#body)

Body
===================================================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-count#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-count#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-count#param-organization-id)

organizationId

string

required

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-count#param-document-ids)

documentIds

string[]

required

Array of document IDs to get comment annotation counts for. Limit: Only 30 IDs can be passed at a time.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-count#param-user-id)

userId

string

required

ID of the user requesting the counts

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-count#param-status-ids)

statusIds

string[]

Array of status IDs to filter comments by (e.g., “OPEN”, “IN_PROGRESS”)

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-count#example-request)

**Example Request**

Copy

Ask AI

```
{
  "data": {
    "organizationId": "ORG_ID",
    "documentIds": ["DOC_1", "DOC_2"],
    "userId": "1.1",
    "statusIds": ["OPEN", "IN_PROGRESS"]
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-count#response)

Response
===========================================================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-count#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success", 
    "message": "Comment count retrieved successfully.",
    "data": {
      "DOC_1": {
        "total": 4,
        "unread": 2
      },
      "DOC_2": {
        "total": 2,
        "unread": 0
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/get-comment-annotations-count#failure-response)

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

[Delete Comment Annotations](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comment-annotations/delete-comment-annotations)[Add Comments](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/add-comments)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
