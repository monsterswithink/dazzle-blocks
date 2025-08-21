Title: Delete Notifications - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/notifications/delete-notifications

Markdown Content:
Use this API to delete notifications.

Endpoint
--------

`POST https://api.velt.dev/v2/notifications/delete`

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

Location ID (Optional)

userId

string

User ID (Optional)

notificationIds

string[]

Array of Notification IDs (Optional)

**Example Requests**
--------------------

#### 1. Delete by organizationId and documentId

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId"
  }
}
```

#### 2. Delete by organizationId, documentId and notificationIds

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

#### 3. Delete by organizationId and userId

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "userId": "yourUserId"
  }
}
```

#### 4. Delete by organizationId, userId and notificationIds

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

#### 5. Delete by organizationId, documentId and userId

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "userId": "yourUserId"
  }
}
```

#### 6. Delete by organizationId, documentId, userId and notificationIds

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "userId": "yourUserId",
    "notificationIds": [
      "yourNotificationId"
    ]
  }
}
```

#### 7.Delete by organizationId, documentId and locationId

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "locationId": "yourLocationId"
  }
}
```

#### 8. Delete by organizationId, documentId, locationId and notificationIds

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

#### 9. Delete by organizationId, locationId and userId

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "locationId": "yourLocationId",
    "userId": "yourUserId",
  }
}
```

#### 10. Delete by organizationId, locationId, userId, and notificationIds

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "locationId": "yourLocationId",
    "userId": "yourUserId",
    "notificationIds": [
      "yourNotificationId"
    ]
  }
}
```

#### 11. Delete by organizationId, documentId, locationId and userId

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentId": "yourDocumentId",
    "locationId": "yourLocationId",
    "userId": "yourUserId",
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
       "message": "Notification(s) deleted successfully.",
       "data": {
           "8955243231506071": {
               "success": true,
               "message": "Notification deleted."
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
       "message": "Notification(s) deleted successfully.",
       "data": {
           "89552432315060712": {
               "success": false,
               "message": "Failed to delete notification."
           },
           "8955243231506071": {
               "success": true,
               "message": "Notification deleted."
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
