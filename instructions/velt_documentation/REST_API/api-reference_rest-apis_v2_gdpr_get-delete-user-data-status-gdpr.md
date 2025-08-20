Title: Get Delete All User Data Status - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-delete-user-data-status-gdpr

Markdown Content:
Get Delete All User Data Status - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

GDPR

Get Delete All User Data Status

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

Get Delete All User Data Status

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/users/data/delete/status \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "jobId": "<string>"
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
        "message": "Data fetched successfully.",
        "data": {
            "isDeleteCompleted": true,
            "tasksLeft": 0,
            "lastTaskCompletedTime": 1748972106739
        }
    }
}
```

GDPR

Get Delete All User Data Status
===============================

Copy page

Get the status of the data deletion process for a user.

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

/

status

Try it

Get Delete All User Data Status

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/users/data/delete/status \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "jobId": "<string>"
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
        "message": "Data fetched successfully.",
        "data": {
            "isDeleteCompleted": true,
            "tasksLeft": 0,
            "lastTaskCompletedTime": 1748972106739
        }
    }
}
```

Use this API to get the status of the data deletion process for a user.

This API may take a few seconds to return a response depending on the dataset size.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-delete-user-data-status-gdpr#endpoint)

Endpoint
==============================================================================================================

`POST https://api.velt.dev/v2/users/data/delete/status`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-delete-user-data-status-gdpr#headers)

Headers
============================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-delete-user-data-status-gdpr#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-delete-user-data-status-gdpr#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-delete-user-data-status-gdpr#body)

Body
======================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-delete-user-data-status-gdpr#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-delete-user-data-status-gdpr#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-delete-user-data-status-gdpr#param-job-id)

jobId

string

required

The job Id of the data deletion process.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-delete-user-data-status-gdpr#example-request)

**Example Request**
--------------------------------------------------------------------------------------------------------------------------------

Copy

Ask AI

```
{
  "data": {
    "jobId": "yourJobId"
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-delete-user-data-status-gdpr#response)

Response
==============================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-delete-user-data-status-gdpr#success-response)

Success Response

Copy

Ask AI

```
{
    "result": {
        "status": "success",
        "message": "Data fetched successfully.",
        "data": {
            "isDeleteCompleted": true,
            "tasksLeft": 0,
            "lastTaskCompletedTime": 1748972106739
        }
    }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-delete-user-data-status-gdpr#failure-response)

Failure Response

Copy

Ask AI

```
{
   "error": {
       "message": "ERROR_MESSAGE",
       "status": "INVALID_ARGUMENT",
       "code": 500
   }
}
```

Was this page helpful?

Yes No

[Delete All User Data](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/delete-all-user-data-gdpr)[Generate Token](https://docs.velt.dev/api-reference/rest-apis/v2/auth/generate-token)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
