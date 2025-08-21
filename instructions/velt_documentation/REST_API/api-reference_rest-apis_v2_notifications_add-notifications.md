Title: Add Notifications - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications

Markdown Content:
Add Notifications - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Notifications

Add Notifications

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

Add Notifications

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/notifications/add \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentId": "<string>",
    "actionUser": {},
    "notificationId": "<string>",
    "displayHeadlineMessageTemplate": "<string>",
    "displayHeadlineMessageTemplateData": {
      "actionUser": {},
      "recipientUser": "<string>",
      "yourCustomField": "<string>"
    },
    "displayBodyMessage": "<string>",
    "notifyUsers": [
      {}
    ],
    "notifyAll": true,
    "notificationSourceData": {},
    "createDocument": true,
    "createOrganization": true
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
    "message": "Notification added successfully.",
    "data": {
      "success": true,
      "message": "Notification added successfully."
    }
  }
}
```

Notifications

Add Notifications
=================

Copy page

Copy page

POST

/

v2

/

notifications

/

add

Try it

Add Notifications

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/notifications/add \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentId": "<string>",
    "actionUser": {},
    "notificationId": "<string>",
    "displayHeadlineMessageTemplate": "<string>",
    "displayHeadlineMessageTemplateData": {
      "actionUser": {},
      "recipientUser": "<string>",
      "yourCustomField": "<string>"
    },
    "displayBodyMessage": "<string>",
    "notifyUsers": [
      {}
    ],
    "notifyAll": true,
    "notificationSourceData": {},
    "createDocument": true,
    "createOrganization": true
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
    "message": "Notification added successfully.",
    "data": {
      "success": true,
      "message": "Notification added successfully."
    }
  }
}
```

Use this API to add notifications.
[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#endpoint)

Endpoint
========================================================================================================

`POST https://api.velt.dev/v2/notifications/add`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#headers)

Headers
======================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#body)

Body
================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#param-organization-id)

organizationId

string

required

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#param-document-id)

documentId

string

required

Document ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#param-action-user)

actionUser

User

required

User who took the action

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#param-notification-id)

notificationId

string

Notification ID. If not provided, Velt will generate a random ID. Use this if you want more control on the ID being set and prevent duplicate notifications. Only the special characters `_`, `-` are allowed.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#param-display-headline-message-template)

displayHeadlineMessageTemplate

string

required

Display Headline Message Template

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#param-display-headline-message-template-data)

displayHeadlineMessageTemplateData

object

Display Headline Message Template Data (Optional)

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#param-action-user-1)

actionUser

User

User who took the action

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#param-recipient-user)

recipientUser

string

User who was directly affected by the action

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#param-your-custom-field)

yourCustomField

string

Any custom field with string value

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#param-display-body-message)

displayBodyMessage

string

required

Display Body Message

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#param-notify-users)

notifyUsers

User[]

required

Array of Notify Users

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#param-notify-all)

notifyAll

boolean

Default is true. If set to true, the notification will be sent to all users in the organization. If set to false, the notification will be sent to only the users specified in the `notifyUsers` array.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#param-notification-source-data)

notificationSourceData

object

Any custom object to be stored with the notification. When the user clicks on the notification, this data will be sent in the callback.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#param-create-document)

createDocument

boolean

If set to true, a new document will be created before the notification is created.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#param-create-organization)

createOrganization

boolean

If set to true, a new organization will be created (if it doesn’t exist) before the notification is created.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#example-request)

**Example Request**
--------------------------------------------------------------------------------------------------------------------------

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "actionUser": {
      "userId": "yourUserId",
      "name": "User Name",
      "email": "user@example.com"
    },
    "displayHeadlineMessageTemplate": "This is main template, you can pass variables using curly brackets like this: {actionUser}, {recipientUser}, {yourCustomVariableWithStringValue}",
    "displayHeadlineMessageTemplateData": {
      "actionUser": {
        "userId": "yourUserId",
        "name": "User Name",
        "email": "user@example.com"
      },
      "recipientUser": {
        "userId": "recipientUserId",
        "name": "Recipient Name",
        "email": "recipient@example.com"
      },
      "yourCustomField": "Variable will be replaced with this text"
    },
    "displayBodyMessage": "This is body message (Secondary message)",
    "notifyUsers": [
      {
        "email": "test@example.com",
        "userId": "testingUserId"
      },
      {
        "userId": "yourUserId",
        "name": "User Name",
        "email": "user@example.com"
      }
    ]
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#response)

Response
========================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Notification added successfully.",
    "data": {
      "success": true,
      "message": "Notification added successfully."
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/add-notifications#failure-response)

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

[Delete Comments](https://docs.velt.dev/api-reference/rest-apis/v2/comments-feature/comments/delete-comments)[Get Notifications](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-notifications-v2)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
