Title: Get Folders - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/folders/get-folders

Markdown Content:
Get Folders - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Folders

Get Folders

[Documentation](https://docs.velt.dev/get-started/overview)[UI Customization](https://docs.velt.dev/ui-customization/overview)[API Reference](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations)[Release Notes](https://docs.velt.dev/release-notes/version-4/upgrade-guide)[Examples](https://velt.dev/examples)[DevTools](https://velt.dev/devtools)

##### REST APIs

*   v2  
    *   Organizations  
    *   Folders  
        *   [POST Add Folder](https://docs.velt.dev/api-reference/rest-apis/v2/folders/add-folder)
        *   [POST Get Folders](https://docs.velt.dev/api-reference/rest-apis/v2/folders/get-folders)
        *   [POST Update Folder](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder)
        *   [POST Delete Folder](https://docs.velt.dev/api-reference/rest-apis/v2/folders/delete-folder)
        *   [POST Update Access for Folders](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder-access)

    *   Documents  
    *   Users  
    *   User Groups  
    *   Comments Feature  
    *   Notifications  
    *   GDPR  
    *   Access Control  
    *   Live State  
    *   Workspace  

*   v1  

##### SDK

*   APIs  
*   [Data models](https://docs.velt.dev/api-reference/sdk/models/data-models)

Get Folders

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/folders/get \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "folderId": "<string>"
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
    "message": "Folders retrieved successfully.",
    "data": [
      {
        "folderId": "folderId1",
        "folderName": "Folder 1",
        "organizationId": "yourOrganizationId",
        "parentFolderId": "root",
        "createdAt": 1738695077691,
        "lastUpdated": 1738695077691,
        "subFolders": [
          {
            "folderId": "childFolderId1",
            "folderName": "Child Folder 1",
            "organizationId": "yourOrganizationId",
            "parentFolderId": "folderId1",
            "createdAt": 1738695615706,
            "lastUpdated": 1738698727591
          }
        ]
      }
    ]
  }
}
```

Folders

Get Folders
===========

Copy page

Copy page

POST

/

v2

/

organizations

/

folders

/

get

Try it

Get Folders

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/folders/get \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "folderId": "<string>"
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
    "message": "Folders retrieved successfully.",
    "data": [
      {
        "folderId": "folderId1",
        "folderName": "Folder 1",
        "organizationId": "yourOrganizationId",
        "parentFolderId": "root",
        "createdAt": 1738695077691,
        "lastUpdated": 1738695077691,
        "subFolders": [
          {
            "folderId": "childFolderId1",
            "folderName": "Child Folder 1",
            "organizationId": "yourOrganizationId",
            "parentFolderId": "folderId1",
            "createdAt": 1738695615706,
            "lastUpdated": 1738698727591
          }
        ]
      }
    ]
  }
}
```

Use this API to retrieve the given folder’s metadata and its subfolders.

Prior to using this API, you must:
*   Enable advanced queries option in [the console](https://console.velt.dev/dashboard/config/appconfig)
*   Deploy v4 series of the Velt SDK.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/get-folders#endpoint)

Endpoint
============================================================================================

`POST https://api.velt.dev/v2/organizations/folders/get`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/get-folders#headers)

Headers
==========================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/get-folders#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/get-folders#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/get-folders#body)

Body
====================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/get-folders#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/get-folders#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/get-folders#param-organization-id)

organizationId

string

required

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/get-folders#param-folder-id)

folderId

string

Folder ID to retrieve a specific folder and its subfolders. If not provided, all folders in the organization will be retrieved.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/get-folders#example-requests)

**Example Requests**
----------------------------------------------------------------------------------------------------------------

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/get-folders#1-get-all-folders-in-organization)

1. Get all folders in organization

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId"
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/get-folders#2-get-specific-folder-in-an-organization)

2. Get specific folder in an organization

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "folderId": "yourFolderId"
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/get-folders#response)

Response
============================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/get-folders#success-response-for-all-folders)

Success Response for All Folders

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Folders retrieved successfully.",
    "data": [
      {
        "folderId": "folderId1",
        "folderName": "Folder 1",
        "organizationId": "yourOrganizationId",
        "parentFolderId": "root",
        "createdAt": 1738695615706,
        "lastUpdated": 1738696287859
      },
      {
        "folderId": "folderId2",
        "folderName": "Folder 2",
        "organizationId": "yourOrganizationId",
        "parentFolderId": "root",
        "createdAt": 1738695077691,
        "lastUpdated": 1738695077691
      }
    ]
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/get-folders#success-response-for-specific-folder)

Success Response for Specific Folder

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Folders retrieved successfully.",
    "data": [
      {
        "folderId": "folderId1",
        "folderName": "Folder 1",
        "organizationId": "yourOrganizationId",
        "parentFolderId": "root",
        "createdAt": 1738695077691,
        "lastUpdated": 1738695077691,
        "subFolders": [
          {
            "folderId": "childFolderId1",
            "folderName": "Child Folder 1",
            "organizationId": "yourOrganizationId",
            "parentFolderId": "folderId1",
            "createdAt": 1738695615706,
            "lastUpdated": 1738698727591
          }
        ]
      }
    ]
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/get-folders#failure-response)

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

[Add Folder](https://docs.velt.dev/api-reference/rest-apis/v2/folders/add-folder)[Update Folder](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
