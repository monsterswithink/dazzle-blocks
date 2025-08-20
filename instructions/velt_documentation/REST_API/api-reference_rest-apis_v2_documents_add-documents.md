Title: Add Documents - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents

Markdown Content:
Add Documents - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Documents

Add Documents

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

Add Documents

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/documents/add \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documents": [
      {}
    ],
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
    "message": "Document(s) added successfully.",
    "data": {
      "yourDocumentId": {
        "success": true,
        "id": "8121657101517513",
        "message": "Added Successfully"
      }
    }
  }
}
```

Documents

Add Documents
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

add

Try it

Add Documents

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/documents/add \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documents": [
      {}
    ],
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
    "message": "Document(s) added successfully.",
    "data": {
      "yourDocumentId": {
        "success": true,
        "id": "8121657101517513",
        "message": "Added Successfully"
      }
    }
  }
}
```

Use this API to add documents with metadata to an organization.
[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents#endpoint)

Endpoint
================================================================================================

`POST https://api.velt.dev/v2/organizations/documents/add`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents#headers)

Headers
==============================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents#body)

Body
========================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents#param-organization-id)

organizationId

string

required

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents#param-documents)

documents

Document[]

required

Array of Document objects

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents#param-folder-id)

folderId

string

required

Folder ID to add the documents to.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents#example-requests)

**Example Requests**
--------------------------------------------------------------------------------------------------------------------

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents#1-create-new-documents)

1. Create new documents

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documents": [
      {
        "documentId": "yourDocumentId",
        "documentName": "Your Document Name"
      }
    ]
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents#2-create-new-documents-in-a-specific-folder)

2. Create new documents in a specific folder

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documents": [
      {
        "documentId": "yourDocumentId",
        "documentName": "Your Document Name"
      }
    ],
    "folderId": "yourFolderId"
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents#response)

Response
================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Document(s) added successfully.",
    "data": {
      "yourDocumentId": {
        "success": true,
        "id": "8121657101517513",
        "message": "Added Successfully"
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/add-documents#failure-response)

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

[Update Access for Folders](https://docs.velt.dev/api-reference/rest-apis/v2/folders/update-folder-access)[Get Documents](https://docs.velt.dev/api-reference/rest-apis/v2/documents/get-documents-v2)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
