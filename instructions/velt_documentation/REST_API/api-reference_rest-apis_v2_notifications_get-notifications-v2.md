Title: Get Notifications - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-notifications-v2

Markdown Content:
Use this API to retrieve notifications.

Endpoint
--------

`POST https://api.velt.dev/v2/notifications/get`

x-velt-api-key

string

required

Your API key.

x-velt-auth-token

string

required

Body
----

#### Params

data

object

required

Show properties

organizationId

string

required

Organization ID

documentId

string

Document ID. Either pass this or userId.

locationId

string

Location ID

userId

string

User ID. Either pass this or documentId.

notificationIds

string[]

Array of Notification IDs. Limit: Only 30 items can be passed at a time.

pageSize

number

Number of items to be retrieved per page. Default: 1000.

pageToken

string

Page token retrieved from previous API call.

order

'asc' | 'desc'

Order of the notifications based on timestamp. Default: desc.

**Example Requests**
--------------------

#### 1. Get by organizationId, documentId

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "pageSize": 20,
    "pageToken": "8740648311207869"
  }
}
```

#### 2. Get by organizationId, documentId and notificationIds

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "notificationIds": [
      "yourNotificationId"
    ]
  }
}
```

#### 3. Get by organizationId, documentId and locationId

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "locationId": "yourLocationId",
    "pageSize": 20,
    "pageToken": "8740648311207869"
  }
}
```

#### 4. Get by organizationId, documentId, locationId and notificationIds

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "locationId": "yourLocationId",
    "notificationIds": [
      "yourNotificationId"
    ]
  }
}
```

#### 5. Get by organizationId and userId

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "userId": "yourUserId",
    "pageSize": 20,
    "pageToken": "8740648311207869"
  }
}
```

#### 6. Get by organizationId, userId and notificationIds

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "userId": "yourUserId",
    "notificationIds": [
      "yourNotificationId"
    ]
  }
}
```

#### 7. Get by organizationId, documentId and userId

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "userId": "yourUserId",
    "pageSize": 20,
    "pageToken": "8740648311207869"
  }
}
```

#### 8. Get by organizationId, locationId and userId

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "userId": "yourUserId",
    "locationId": "yourLocationId",
    "pageSize": 20,
    "pageToken": "8740648311207869"
  }
}
```

#### 9. Get by organizationId, documentId, locationId, and userId

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "userId": "yourUserId",
    "locationId": "yourLocationId",
    "pageSize": 20,
    "pageToken": "8740648311207869"
  }
}
```

Response
--------

#### Success Response

```
{
  "result": {
    "status": "success",
    "message": "Notification(s) retrieved successfully.",
    "data": [
      {
        "id": "notificationId",
        "notificationSource": "custom",
        "notificationSourceData": {}, //The data of the notification source. e.g., CommentAnnotation
        "actionUser": {
          "email": "user@example.com",
          "name": "User Name",
          "userId": "yourUserId"
        },
        "displayBodyMessage": "This is body message (Secondary message)",
        "displayHeadlineMessageTemplate": "This is main template, you can pass variables using curly brackets like this: {actionUser}, {recipientUser}, {yourCustomVariableWithStringValue}",
        "displayHeadlineMessageTemplateData": {
          "actionUser": {
            "email": "user@example.com",
            "name": "User Name",
            "userId": "yourUserId"
          },
          "recipientUser": {
            "email": "recipient@example.com",
            "name": "Recipient Name",
            "userId": "recipientUserId"
          },
          "yourCustomVariableWithStringValue": "Variable will be replaced with this text"
        },
        "metadata": {
          "apiKey": "yourApiKey",
          "documentId": "yourDocumentId",
          "organizationId": "yourOrganizationId"
        },
        "notifyUsers": {
          "yourNotifyUserId": true
        },
        "notifyUsersByUserId": {
          "yourNotifyUserById": true
        },
        "timestamp": 1722409519944
      }
    ],
    "pageToken": "nextPageToken"
  }
}
```

#### Failure Response

```
{
  "error": {
    "message": "ERROR_MESSAGE",
    "status": "INVALID_ARGUMENT"
  }
}
```
