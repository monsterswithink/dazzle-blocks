Title: Delete Folder - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/folders/delete-folder

Markdown Content:
Delete Folder - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

⌘K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Folders

Delete Folder

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

Delete Folder

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/folders/delete \
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
       "message": "Folder deletion initiated successfully.",
       "data": null
   }
}
```

Folders

Delete Folder
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

delete

Try it

Delete Folder

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/folders/delete \
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
       "message": "Folder deletion initiated successfully.",
       "data": null
   }
}
```

Delete a folder and all its contents (documents and subfolders).

Prior to using this API, you must:
*   Enable advanced queries option in [the console](https://console.velt.dev/dashboard/config/appconfig)
*   Deploy v4 series of the Velt SDK.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/delete-folder#endpoint)

Endpoint
==============================================================================================

`POST https://api.velt.dev/v2/organizations/folders/delete`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/delete-folder#headers)

Headers
============================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/delete-folder#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/delete-folder#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/delete-folder#body)

Body
======================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/delete-folder#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/delete-folder#param-organization-id)

organizationId

string

required

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/delete-folder#param-folder-id)

folderId

string

required

ID of the folder to delete.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/delete-folder#example-request)

**Example Request**
----------------------------------------------------------------------------------------------------------------

Copy

Ask AI

```
{
   "data": {
       "organizationId": "org10",
       "folderId": "folderId2"
   }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/delete-folder#response)

Response
==============================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/delete-folder#success-response)

Success Response

Copy

Ask AI

```
{
   "result": {
       "status": "success",
       "message": "Folder deletion initiated successfully.",
       "data": null
   }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/delete-folder#failure-response)

Failure Response

Copy

Ask AI

```
{
   "error": {
       "code": "not-found",
       "message": "Folder not found."
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
       "message": "Folder deletion initiated successfully.",
       "data": null
   }
}
```

Was this page helpful?

Yes No

[Update Folder](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder)[Update Access for Folders](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder-access)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
