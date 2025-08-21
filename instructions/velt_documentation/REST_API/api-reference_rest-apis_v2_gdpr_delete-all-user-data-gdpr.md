Title: Delete All User Data - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/delete-all-user-data-gdpr

Markdown Content:
Delete All User Data - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

GDPR

Delete All User Data

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
    *   GDPR  
        *   [POST Get All User Data](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-all-user-data-gdpr)
        *   [POST Delete All User Data](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/delete-all-user-data-gdpr)
        *   [POST Get Delete All User Data Status](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-delete-user-data-status-gdpr)

    *   Access Control  
    *   Live State  
    *   Workspace  

*   v1  

##### SDK

*   APIs  
*   [Data models](https://docs.velt.dev/api-reference/sdk/models/data-models)

Delete All User Data

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/users/data/delete \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "userIds": [
      "<string>"
    ],
    "organizationIds": [
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
  "status": "success",
  "message": "Data deletion process has been initiated.",
  "data": {
    "jobId": "dsQuvPmIynANgPLLEhCm",
    "tasksCount": 5
  },
  "statusCode": 202
}
```

GDPR

Delete All User Data
====================

Copy page

Remove All User data from Velt.

Copy page

POST

/

v2

/

users

/

data

/

delete

Try it

Delete All User Data

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/users/data/delete \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "userIds": [
      "<string>"
    ],
    "organizationIds": [
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
  "status": "success",
  "message": "Data deletion process has been initiated.",
  "data": {
    "jobId": "dsQuvPmIynANgPLLEhCm",
    "tasksCount": 5
  },
  "statusCode": 202
}
```

Use this API to remove all user data from Velt. This will:
*   remove their access from all the documents and data in the organization.
*   remove them from @mention contact dropdown list.
*   remove them from @mentions where they were tagged.
*   remove all feature data created by the user. eg: comments, reactions etc.

*   This API may take up to 5 minutes to return a 202 response since it runs an asynchronous job to delete user data across the system.
*   To speed up this process, you can optionally provide the organizationIds where the user belongs.
*   The actual deletion of data can take upto 24 hours to complete.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/delete-all-user-data-gdpr#endpoint)

Endpoint
=======================================================================================================

`POST https://api.velt.dev/v2/users/data/delete`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/delete-all-user-data-gdpr#headers)

Headers
=====================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/delete-all-user-data-gdpr#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/delete-all-user-data-gdpr#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/delete-all-user-data-gdpr#body)

Body
===============================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/delete-all-user-data-gdpr#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/delete-all-user-data-gdpr#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/delete-all-user-data-gdpr#param-user-ids)

userIds

string[]

required

Array of user Ids.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/delete-all-user-data-gdpr#param-organization-ids)

organizationIds

string[]

Array of organization Ids. These are the organizations that the user is part of.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/delete-all-user-data-gdpr#example-request)

**Example Request**
-------------------------------------------------------------------------------------------------------------------------

Copy

Ask AI

```
{
  "data": {
    "userIds": [
      "yourUserId1",
      "yourUserId2"
    ],
    "organizationIds": [
      "yourOrganizationId1",
      "yourOrganizationId2"
    ]
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/delete-all-user-data-gdpr#response)

Response
=======================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/delete-all-user-data-gdpr#success-response)

Success Response

Copy

Ask AI

```
{
  "status": "success",
  "message": "Data deletion process has been initiated.",
  "data": {
    "jobId": "dsQuvPmIynANgPLLEhCm",
    "tasksCount": 5
  },
  "statusCode": 202
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/delete-all-user-data-gdpr#failure-response)

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

[Get All User Data](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-all-user-data-gdpr)[Get Delete All User Data Status](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-delete-user-data-status-gdpr)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
