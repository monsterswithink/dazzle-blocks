Title: Get Documents - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2

Markdown Content:
Get Documents - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Documents

Get Documents

[Documentation](https://docs.velt.dev/get-started/overview)[UI Customization](https://docs.velt.dev/ui-customization/overview)[API Reference](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations)[Release Notes](https://docs.velt.dev/release-notes/version-4/upgrade-guide)[Examples](https://velt.dev/examples)[DevTools](https://velt.dev/devtools)

##### REST APIs

*   v2  
    *   Organizations  
    *   Folders  
    *   Documents  
        *   [POST Add Documents](https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents)
        *   [POST Get Documents](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2)
        *   [POST Update Documents](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-documents)
        *   [POST Delete Documents](https://docs.velt.dev/api-reference/rest-apis/v2/documents/delete-documents)
        *   [POST Move Documents](https://docs.velt.dev/api-reference/rest-apis/v2/documents/move-documents)
        *   [POST Update Access for Documents](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-document-access)
        *   [POST Update Disabled State for Documents](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-document-disable-state)

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

Get Documents

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/documents/get \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentIds": [
      "<string>"
    ],
    "folderId": "<string>",
    "pageSize": 123,
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
    "message": "Document(s) retrieved successfully.",
    "data": [
      {
        "documentName": "yourDocumentName",
        "disabled": false,
        "accessType": "public",
        "id": "yourDocumentId",
      }
    ],
    "pageToken": "nextPageToken"
  }
}
```

Documents

Get Documents
=============

Copy page

Copy page

POST

/

v2

/

organizations

/

documents

/

get

Try it

Get Documents

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/documents/get \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentIds": [
      "<string>"
    ],
    "folderId": "<string>",
    "pageSize": 123,
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
    "message": "Document(s) retrieved successfully.",
    "data": [
      {
        "documentName": "yourDocumentName",
        "disabled": false,
        "accessType": "public",
        "id": "yourDocumentId",
      }
    ],
    "pageToken": "nextPageToken"
  }
}
```

Use this API to retrieve specific documents or all documents from an organization.

Prior to using this API, you must:
*   Enable advanced queries option in [the console](https://console.velt.dev/dashboard/config/appconfig)
*   Deploy v4 series of the Velt SDK.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2#endpoint)

Endpoint
===================================================================================================

`POST https://api.velt.dev/v2/organizations/documents/get`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2#headers)

Headers
=================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2#body)

Body
===========================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2#param-organization-id)

organizationId

string

required

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2#param-document-ids)

documentIds

string[]

Array of Document IDs. Limit: Only 30 IDs can be passed at a time.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2#param-folder-id)

folderId

string

Folder ID. Filters documents by the given folder ID.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2#param-page-size)

pageSize

number

Number of items to be retrieved per page. Default: 1000.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2#param-page-token)

pageToken

string

Page token retrieved from previous API call.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2#example-requests)

**Example Requests**
-----------------------------------------------------------------------------------------------------------------------

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2#1-get-all-documents-from-organization)

1. Get all documents from organization

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "pageSize": 20,
    "pageToken": "8740648311207869"
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2#2-get-specific-documents-from-organization)

2. Get specific documents from organization

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentIds": ["yourDocumentId1", "yourDocumentId2"],
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2#3-get-documents-by-organizationid%2C-folderid)

3. Get documents by organizationId, folderId

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

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2#response)

Response
===================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Document(s) retrieved successfully.",
    "data": [
      {
        "documentName": "yourDocumentName",
        "disabled": false,
        "accessType": "public",
        "id": "yourDocumentId",
      }
    ],
    "pageToken": "nextPageToken"
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2#failure-response)

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

[Add Documents](https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents)[Update Documents](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-documents)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
