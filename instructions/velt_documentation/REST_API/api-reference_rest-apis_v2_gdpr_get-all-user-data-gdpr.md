Title: Get All User Data - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-all-user-data-gdpr

Markdown Content:
Get All User Data - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

GDPR

Get All User Data

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

Get All User Data

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/users/data/get \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "userId": "<string>",
    "pageToken": "<string>"
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
      "comments": [..], //Upto 100 items. Empty array if no items are found.
      "reactions": [..], //Upto 100 items. Empty array if no items are found.
      "recordings": [..], //Upto 100 items. Empty array if no items are found.
      "notifications": [..] //Upto 100 items. Empty array if no items are found.
    },
    "nextPageToken": "bhdwdqwjs298e39e479ddkeuw==329" //This will be null if there are no more items to fetch.
  }
}
```

GDPR

Get All User Data
=================

Copy page

Get all feature data for a user stored in Velt.

Copy page

POST

/

v2

/

users

/

data

/

get

Try it

Get All User Data

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/users/data/get \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "userId": "<string>",
    "pageToken": "<string>"
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
      "comments": [..], //Upto 100 items. Empty array if no items are found.
      "reactions": [..], //Upto 100 items. Empty array if no items are found.
      "recordings": [..], //Upto 100 items. Empty array if no items are found.
      "notifications": [..] //Upto 100 items. Empty array if no items are found.
    },
    "nextPageToken": "bhdwdqwjs298e39e479ddkeuw==329" //This will be null if there are no more items to fetch.
  }
}
```

Use this API to get all feature data for a user stored in Velt.
*   The data will be paginated and returned in chunks of 100 items per feature data.
*   You can use the `nextPageToken` returned in the response to fetch the next chunk of data.
*   If there are no more items to fetch, the `nextPageToken` will not be returned.
*   Here is the data that will be included: 
    *   **User profile data:** If they were added to any organization, document or folder.
    *   **Comments data:** All the comments created by the user or where they were involved in.
    *   **Reactions data:** All the reactions created by the user.
    *   **Notifications data:** All the notifications where the user was involved in.
    *   **Recordings data:** All the recordings created by the user.

This API may take a few seconds to return a response depending on the dataset size.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-all-user-data-gdpr#endpoint)

Endpoint
====================================================================================================

`POST https://api.velt.dev/v2/users/data/get`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-all-user-data-gdpr#headers)

Headers
==================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-all-user-data-gdpr#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-all-user-data-gdpr#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-all-user-data-gdpr#body)

Body
============================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-all-user-data-gdpr#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-all-user-data-gdpr#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-all-user-data-gdpr#param-organization-id)

organizationId

string

required

The organization Id of the organization that the user is part of.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-all-user-data-gdpr#param-user-id)

userId

string

required

The user Id of the user you want to get the data for.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-all-user-data-gdpr#param-page-token)

pageToken

string

Page token retrieved from previous API call.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-all-user-data-gdpr#example-request)

**Example Request**
----------------------------------------------------------------------------------------------------------------------

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "userId": "yourUserId",
    "pageToken": "yourPageToken"
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-all-user-data-gdpr#response)

Response
====================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-all-user-data-gdpr#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success", 
    "message": "Data fetched successfully.",
    "data": {
      "comments": [..], //Upto 100 items. Empty array if no items are found.
      "reactions": [..], //Upto 100 items. Empty array if no items are found.
      "recordings": [..], //Upto 100 items. Empty array if no items are found.
      "notifications": [..] //Upto 100 items. Empty array if no items are found.
    },
    "nextPageToken": "bhdwdqwjs298e39e479ddkeuw==329" // This will be null if there are no more items to fetch.
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/get-all-user-data-gdpr#failure-response)

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

[Get Config](https://docs.velt.dev/api-reference/rest-apis/v2/notifications/get-config)[Delete All User Data](https://docs.velt.dev/api-reference/rest-apis/v2/gdpr/delete-all-user-data-gdpr)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
