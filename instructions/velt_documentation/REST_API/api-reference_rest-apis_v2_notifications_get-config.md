Title: Get Config - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-config

Markdown Content:
Get Config - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Notifications

Get Config

[Documentation](https://docs.velt.dev/get-started/overview)[UI Customization](https://docs.velt.dev/ui-customization/overview)[API Reference](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations)[Release Notes](https://docs.velt.dev/release-notes/version-4/upgrade-guide)[Examples](https://velt.dev/examples)[DevTools](https://velt.dev/devtools)

##### REST APIs

*   v2  
    *   Organizations  
    *   Folders  
    *   Documents  
    *   Users  
    *   User Groups  
    *   Comments Feature  
    *   Notifications  
        *   [POST Add Notifications](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications)
        *   [POST Get Notifications](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-notifications-v2)
        *   [POST Update Notifications](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/update-notifications)
        *   [POST Delete Notifications](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/delete-notifications)
        *   [POST Set Config](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config)
        *   [POST Get Config](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-config)

    *   GDPR  
    *   Access Control  
    *   Live State  
    *   Workspace  

*   v1  

##### SDK

*   APIs  
*   [Data models](https://docs.velt.dev/api-reference/sdk/models/data-models)

Get Config

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/notifications/config/get \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentIds": [
      "<string>"
    ],
    "userId": "<string>"
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
        "message": "User config fetched successfully.",
        "data": [
            {
                "config": {
                    "inbox": "ALL",
                    "email": "ALL"
                },
                "metadata": {
                    "organizationId": "org1",
                    "apiKey": "API_KEY",
                    "documentId": "doc1",
                    "userId": "USER_ID1"
                }
            }
        ]
    }
}
```

Notifications

Get Config
==========

Copy page

Copy page

POST

/

v2

/

notifications

/

config

/

get

Try it

Get Config

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/notifications/config/get \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentIds": [
      "<string>"
    ],
    "userId": "<string>"
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
        "message": "User config fetched successfully.",
        "data": [
            {
                "config": {
                    "inbox": "ALL",
                    "email": "ALL"
                },
                "metadata": {
                    "organizationId": "org1",
                    "apiKey": "API_KEY",
                    "documentId": "doc1",
                    "userId": "USER_ID1"
                }
            }
        ]
    }
}
```

To use this API, you must have the this feature enabled in [Velt console](https://console.velt.dev/dashboard/config/notification)

Use this API to set the notifications config for users.
[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-config#endpoint)

Endpoint
=================================================================================================

`POST https://api.velt.dev/v2/notifications/config/get`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-config#headers)

Headers
===============================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-config#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-config#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-config#body)

Body
=========================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-config#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-config#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-config#param-organization-id)

organizationId

string

required

The ID of the organization.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-config#param-document-ids)

documentIds

string[]

required

An array of document IDs. The notification configuration will be fetched for these documents for the specified user. Max 30 documents can be fetched at a time.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-config#param-user-id)

userId

string

required

The ID of the user.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-config#example-request)

**Example Request**
-------------------------------------------------------------------------------------------------------------------

Copy

Ask AI

```
{
    "data": {
        "organizationId": "org1",
        "documentIds": ["doc1"],
        "userId":"USER_ID1"
    }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-config#response)

Response
=================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-config#success-response)

Success Response

Copy

Ask AI

```
{
    "result": {
        "status": "success",
        "message": "User config fetched successfully.",
        "data": [
            {
                "config": {
                    "inbox": "ALL",
                    "email": "ALL"
                },
                "metadata": {
                    "organizationId": "org1",
                    "apiKey": "API_KEY",
                    "documentId": "doc1",
                    "userId": "USER_ID1"
                }
            }
        ]
    }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-config#failure-response)

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

[Set Config](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config)[Get All User Data](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-all-user-data-gdpr)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
