Title: Update Notifications - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/notifications/update-notifications

Markdown Content:
Update Notifications

POST

Use this API to update notifications.

Endpoint
--------

`POST https://api.velt.dev/v2/notifications/update`

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

Document ID (Optional)

locationId

string

Location ID

userId

string

User ID (Optional)

notifications

object

Notifications object

Show properties

id

string

Notification ID

actionUser

User

User who took the action

displayHeadlineMessageTemplate

string

Display Headline Message Template

displayHeadlineMessageTemplateData

object

Display Headline Message Template Data

Show properties

actionUser

User

User who took the action

recipientUser

string

User who was directly affected by the action

yourCustomField

string

Any custom field with string value

displayBodyMessage

string

Display Body Message

notificationSourceData

object

Any custom object to be stored with the notification. When the user clicks on the notification, this data will be sent to in the callback.

readByUserIds

string[]

Array of user ids that you want to mark the notification as read.

persistReadForUsers

boolean

Use this with the `readByUserIds` param. If `true`, the read notifications will be not be removed from the “For You” tab.

**Example Requests**
--------------------

#### 1. Update by organizationId and documentId

```
{
   "data": {
       "organizationId": "yourOrganizationId",
       "documentId": "yourDocumentId",
       "notifications": [
           {
               "id": "yourNotificationId",
               "displayBodyMessage": "This is body message (Secondary message)",
           }
       ]
   }
}
```

#### 2. Update by organizationId, documentId and locationId

```
{
   "data": {
       "organizationId": "yourOrganizationId",
       "documentId": "yourDocumentId",
       "locationId": "yourLocationId",
       "notifications": [
           {
               "id": "yourNotificationId",
               "displayBodyMessage": "This is body message (Secondary message)",
           }
       ]
   }
}
```

#### 3. Update by organizationId, documentId and userId

```
{
   "data": {
       "organizationId": "yourOrganizationId",
       "documentId": "yourDocumentId",
       "userId": "yourUserId",
       "notifications": [
           {
               "id": "yourNotificationId",
               "displayBodyMessage": "This is body message (Secondary message)",
           }
       ]
   }
}
```

#### 4. Update by organizationId and userId

```
{
   "data": {
       "organizationId": "yourOrganizationId",
       "userId": "yourUserId",
       "notifications": [
           {
               "id": "yourNotificationId",
               "displayBodyMessage": "This is body message (Secondary message)",
           }
       ]
   }
}
```

#### 5. Update by organizationId, documentId, locationId and userId

```
{
   "data": {
       "organizationId": "yourOrganizationId",
       "documentId": "yourDocumentId",
       "userId": "yourUserId",
       "locationId": "yourLocationId",
       "notifications": [
           {
               "id": "yourNotificationId",
               "displayBodyMessage": "This is body message (Secondary message)",
           }
       ]
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
       "message": "Notification(s) updated successfully.",
       "data": {
           "5471488637912692": {
               "success": true,
               "message": "Notification updated."
           }
       }
   }
}
```

#### When some notifications are not found

```
{
   "result": {
       "status": "success",
       "message": "Notification(s) updated successfully.",
       "data": {
           "5471488637912692": {
               "success": false,
               "message": "Failed to update notification."
           },
           "5471488637912693": {
               "success": true,
               "message": "Notification updated."
           }
       }
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

Was this page helpful?
