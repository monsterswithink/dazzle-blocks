Title: Update Disabled State for Documents - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-document-disable-state

Markdown Content:
Update Disabled State for Documents - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Documents

Update Disabled State for Documents

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

Update Disabled State for Documents

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/documents/access/disablestate/update \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentIds": [
      "<string>"
    ],
    "disabled": true
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
    "message": "Updated disable state for documents successfully.",
    "data": {
      "yourDocumentId": {
        "success": true,
        "disabled": true,
        "message": "Document disabled state updated."
      }
    }
  }
}
```

Documents

Update Disabled State for Documents
===================================

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

access

/

disablestate

/

update

Try it

Update Disabled State for Documents

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/documents/access/disablestate/update \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "documentIds": [
      "<string>"
    ],
    "disabled": true
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
    "message": "Updated disable state for documents successfully.",
    "data": {
      "yourDocumentId": {
        "success": true,
        "disabled": true,
        "message": "Document disabled state updated."
      }
    }
  }
}
```

Use this API to enable or disable both read and write access for all users.

 Let’s say your customer’s trial or subscription has ended and you want to disable their access to the Velt data, you could use this to diable access to specific documents.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-document-disable-state#endpoint)

Endpoint
================================================================================================================

`https://api.velt.dev/v2/organizations/documents/access/disablestate/update`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-document-disable-state#headers)

Headers
==============================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-document-disable-state#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-document-disable-state#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-document-disable-state#body)

Body
========================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-document-disable-state#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-document-disable-state#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-document-disable-state#param-organization-id)

organizationId

string

required

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-document-disable-state#param-document-ids)

documentIds

string[]

required

Array of Document IDs

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-document-disable-state#param-disabled)

disabled

boolean

default:"false"

required

Whether to disable read and write access to the specified documents. Allowed values: `true`, `false`

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-document-disable-state#example-requests)

**Example Requests**
------------------------------------------------------------------------------------------------------------------------------------

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "documentIds": ["yourDocumentId"],
    "disabled": true
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-document-disable-state#response)

Response
================================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-document-disable-state#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Updated disable state for documents successfully.",
    "data": {
      "yourDocumentId": {
        "success": true,
        "disabled": true,
        "message": "Document disabled state updated."
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-document-disable-state#failure-response)

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

[Update Access for Documents](https://docs.velt.dev/api-reference/rest-apis/v2/documents/update-document-access)[Add Users](https://docs.velt.dev/api-reference/rest-apis/v2/users/add-users)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
