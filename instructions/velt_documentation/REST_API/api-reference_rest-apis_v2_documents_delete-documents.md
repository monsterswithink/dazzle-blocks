Title: Delete Documents - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/documents/delete-documents

Markdown Content:
Delete Documents - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Documents

Delete Documents

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

Delete Documents

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/documents/delete \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentIds": [
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
  "result": {
    "status": "success",
    "message": "Document(s) deleted successfully.",
    "data": {
      "yourDocumentId1": {
        "success": true,
        "id": "6737987049068973",
        "message": "Deleted Successfully"
      }
    }
  }
}
```

Documents

Delete Documents
================

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

delete

Try it

Delete Documents

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/documents/delete \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentIds": [
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
  "result": {
    "status": "success",
    "message": "Document(s) deleted successfully.",
    "data": {
      "yourDocumentId1": {
        "success": true,
        "id": "6737987049068973",
        "message": "Deleted Successfully"
      }
    }
  }
}
```

Use this API to delete specific documents from an organization.
[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/delete-documents#endpoint)

Endpoint
===================================================================================================

`POST https://api.velt.dev/v2/organizations/documents/delete`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/delete-documents#headers)

Headers
=================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/delete-documents#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/delete-documents#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/delete-documents#body)

Body
===========================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/delete-documents#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/delete-documents#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/delete-documents#param-organization-id)

organizationId

string

required

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/delete-documents#param-document-ids)

documentIds

string[]

required

Array of Document IDs

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/delete-documents#example-requests)

**Example Requests**
-----------------------------------------------------------------------------------------------------------------------

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentIds": ["yourDocumentId1", "yourDocumentId2"]
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/delete-documents#response)

Response
===================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/delete-documents#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Document(s) deleted successfully.",
    "data": {
      "yourDocumentId1": {
        "success": true,
        "id": "6737987049068973",
        "message": "Deleted Successfully"
      },
      "yourDocumentId2": {
        "success": true,
        "id": "2131443384150904",
        "message": "Document does not exist"
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/delete-documents#failure-response)

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

[Update Documents](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-documents)[Move Documents](https://docs.velt.dev/api-reference/rest-apis/v2/documents/move-documents)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
