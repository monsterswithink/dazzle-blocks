Title: Set Config - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config

Markdown Content:
Set Config - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Notifications

Set Config

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

Set Config

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/notifications/config/set \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentIds": [
      "<string>"
    ],
    "userIds": [
      "<string>"
    ],
    "config": {
      "inbox": "<string>",
      "email": "<string>",
      "slack": "<string>"
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
        "message": "User config set successfully.",
        "data": {
            "USER_ID1": {
                "success": true,
                "userId": "USER_ID1",
                "documentId": "doc1",
                "message": "User config set successfully."
            }
        }
    }
}
```

Notifications

Set Config
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

set

Try it

Set Config

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/notifications/config/set \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentIds": [
      "<string>"
    ],
    "userIds": [
      "<string>"
    ],
    "config": {
      "inbox": "<string>",
      "email": "<string>",
      "slack": "<string>"
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
        "message": "User config set successfully.",
        "data": {
            "USER_ID1": {
                "success": true,
                "userId": "USER_ID1",
                "documentId": "doc1",
                "message": "User config set successfully."
            }
        }
    }
}
```

To use this API, you must have the this feature enabled in [Velt console](https://console.velt.dev/dashboard/config/notification)

Use this API to set the notifications config for users.
[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config#endpoint)

Endpoint
=================================================================================================

`POST https://api.velt.dev/v2/notifications/config/set`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config#headers)

Headers
===============================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config#body)

Body
=========================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config#param-organization-id)

organizationId

string

required

The ID of the organization.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config#param-document-ids)

documentIds

string[]

required

An array of document IDs. The notification configuration will be applied to these documents for the specified users.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config#param-user-ids)

userIds

string[]

required

An array of user IDs. The notification configuration will be set for these users.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config#param-config)

config

object

required

Object containing the notification preferences.

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config#param-inbox)

inbox

string

In-app inbox notification preference. Valid values:
*   `ALL`: User receives all notifications in their inbox.
*   `MINE`: User receives notifications in their inbox only for activities directly involving them (e.g., mentions, replies).
*   `NONE`: User receives no notifications in their inbox.

Optional.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config#param-email)

email

string

Email notification preference. Valid values:
*   `ALL`: User receives email notifications for all activities.
*   `MINE`: User receives email notifications only for activities directly involving them.
*   `NONE`: User receives no email notifications.

Optional.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config#param-slack)

slack

string

Slack notification preference (requires Slack integration to be effective). Valid values:
*   `ALL`: User receives Slack notifications for all activities.
*   `MINE`: User receives Slack notifications only for activities directly involving them.
*   `NONE`: User receives no Slack notifications.

Optional.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config#example-request)

**Example Request**
-------------------------------------------------------------------------------------------------------------------

Copy

Ask AI

```
{
    "data": {
        "organizationId": "org1",
        "documentIds": ["doc1"],
        "userIds":["USER_ID1"],
        "config":{
            "inbox": "ALL", // ALL | MINE | NONE
            "email": "ALL" // ALL | MINE | NONE
        }
    }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config#response)

Response
=================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config#success-response)

Success Response

Copy

Ask AI

```
{
    "result": {
        "status": "success",
        "message": "User config set successfully.",
        "data": {
            "USER_ID1": {
                "success": true,
                "userId": "USER_ID1",
                "documentId": "doc1",
                "message": "User config set successfully."
            }
        }
    }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/set-config#failure-response)

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

[Delete Notifications](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/delete-notifications)[Get Config](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-config)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
