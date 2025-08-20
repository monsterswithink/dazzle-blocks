Title: Update Folder - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder

Markdown Content:
Update Folder - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

⌘K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Folders

Update Folder

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

Update Folder

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/folders/update \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "folders": [
      {
        "folderId": "<string>",
        "folderName": "<string>",
        "parentFolderId": "<string>"
      }
    ]
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
       "message": "Folder Updated successfully.",
       "data": {
           "yourFolderId": {
               "success": true,
               "id": "yourFolderId",
               "message": "Folder Updated."
           }
       }
   }
}
```

Folders

Update Folder
=============

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

update

Try it

Update Folder

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/folders/update \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "folders": [
      {
        "folderId": "<string>",
        "folderName": "<string>",
        "parentFolderId": "<string>"
      }
    ]
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
       "message": "Folder Updated successfully.",
       "data": {
           "yourFolderId": {
               "success": true,
               "id": "yourFolderId",
               "message": "Folder Updated."
           }
       }
   }
}
```

Use this API to:
1.   update metadata of a folder within an organization.
2.   move a folder and its contents to a different parent folder.

Prior to using this API, you must:
*   Enable advanced queries option in [the console](https://console.velt.dev/dashboard/config/appconfig)
*   Deploy v4 series of the Velt SDK.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder#endpoint)

Endpoint
==============================================================================================

`POST https://api.velt.dev/v2/organizations/folders/update`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder#headers)

Headers
============================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder#body)

Body
======================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder#param-organization-id)

organizationId

string

required

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder#param-folders)

folders

Folders[]

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder#param-folder-id)

folderId

string

required

Unique identifier for the new folder

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder#param-folder-name)

folderName

string

Name of the folder

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder#param-parent-folder-id)

parentFolderId

string

ID of the parent folder

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder#example-request)

**Example Request**
----------------------------------------------------------------------------------------------------------------

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "folders": [
        {
          "folderId": "yourFolderId", 
          "folderName": "yourFolderName",
          "parentFolderId": "yourParentFolderId"
        }
    ]
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder#response)

Response
==============================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder#success-response)

Success Response

Copy

Ask AI

```
{
   "result": {
       "status": "success",
       "message": "Folder Updated successfully.",
       "data": {
           "yourFolderId": {
               "success": true,
               "id": "yourFolderId",
               "message": "Folder Updated."
           }
       }
   }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder#failure-response)

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

Response

Copy

Ask AI

```
{
   "result": {
       "status": "success",
       "message": "Folder Updated successfully.",
       "data": {
           "yourFolderId": {
               "success": true,
               "id": "yourFolderId",
               "message": "Folder Updated."
           }
       }
   }
}
```

Was this page helpful?

Yes No

[Get Folders](https://docs.velt.dev/api-reference/rest-apis/v2/folders/get-folders)[Delete Folder](https://docs.velt.dev/api-reference/rest-apis/v2/folders/delete-folder)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
