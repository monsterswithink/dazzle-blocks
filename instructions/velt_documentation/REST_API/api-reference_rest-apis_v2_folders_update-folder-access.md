Title: Update Access for Folders - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder-access

Markdown Content:
Update Access for Folders - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Folders

Update Access for Folders

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

Update Access for Folders

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/folders/access/update \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "folderIds": [
      "<string>"
    ],
    "accessType": "<string>"
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
    "message": "Updated access for folders successfully.",
    "data": {
      "yourFolderId": {
        "success": true,
        "accessType": "organizationPrivate",
        "message": "Folder access type updated."
      }
    }
  }
}
```

Folders

Update Access for Folders
=========================

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

access

/

update

Try it

Update Access for Folders

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/folders/access/update \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "folderIds": [
      "<string>"
    ],
    "accessType": "<string>"
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
    "message": "Updated access for folders successfully.",
    "data": {
      "yourFolderId": {
        "success": true,
        "accessType": "organizationPrivate",
        "message": "Folder access type updated."
      }
    }
  }
}
```

Use this API to update the access type for a single or multiple folders at once.

You can update the default access type for all the folders associated with your API Key in [console](https://console.velt.dev/dashboard/config/appconfig).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder-access#endpoint)

Endpoint
=====================================================================================================

`https://api.velt.dev/v2/organizations/folders/access/update`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder-access#headers)

Headers
===================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder-access#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder-access#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder-access#body)

Body
=============================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder-access#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder-access#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder-access#param-organization-id)

organizationId

string

required

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder-access#param-folder-ids)

folderIds

string[]

required

Array of Folder IDs

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder-access#param-access-type)

accessType

string

default:"public"

required

Access type for the folders. Allowed values: `organizationPrivate`, `restricted`, `public`. [Learn more](https://docs.velt.dev/key-concepts/overview#access-control).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder-access#example-requests)

**Example Requests**
-------------------------------------------------------------------------------------------------------------------------

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "folderIds": ["yourFolderId1, yourFolderId2"],
    "accessType": "organizationPrivate"
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder-access#response)

Response
=====================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder-access#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Updated access for folders successfully.",
    "data": {
      "yourFolderId": {
        "success": true,
        "accessType": "organizationPrivate",
        "message": "Folder access type updated."
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder-access#failure-response)

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

[Delete Folder](https://docs.velt.dev/api-reference/rest-apis/v2/folders/delete-folder)[Add Documents](https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
