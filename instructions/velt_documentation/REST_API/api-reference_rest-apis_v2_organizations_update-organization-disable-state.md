Title: Update Disabled State for Organizations - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organization-disable-state

Markdown Content:
Update Disabled State for Organizations - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Organizations

Update Disabled State for Organizations

[Documentation](https://docs.velt.dev/get-started/overview)[UI Customization](https://docs.velt.dev/ui-customization/overview)[API Reference](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations)[Release Notes](https://docs.velt.dev/release-notes/version-4/upgrade-guide)[Examples](https://velt.dev/examples)[DevTools](https://velt.dev/devtools)

##### REST APIs

*   v2  
    *   Organizations  
        *   [POST Add Organizations](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations)
        *   [POST Get Organizations](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/get-organizations-v2)
        *   [POST Update Organizations](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organizations)
        *   [POST Delete Organizations](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/delete-organizations)
        *   [POST Update Disabled State for Organizations](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organization-disable-state)

    *   Folders  
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

Update Disabled State for Organizations

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/access/disablestate/update \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationIds": [
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
    "message": "Updated disable state for Organization(s) successfully.",
    "data": {
      "yourOrganizationId": {
        "success": true,
        "id": "02cf91e5e7a5f4c0b600c84cf248384b",
        "message": "Updated disable state for organization Successfully"
      }
    }
  }
}
```

Organizations

Update Disabled State for Organizations
=======================================

Copy page

Copy page

POST

/

v2

/

organizations

/

access

/

disablestate

/

update

Try it

Update Disabled State for Organizations

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/access/disablestate/update \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationIds": [
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
    "message": "Updated disable state for Organization(s) successfully.",
    "data": {
      "yourOrganizationId": {
        "success": true,
        "id": "02cf91e5e7a5f4c0b600c84cf248384b",
        "message": "Updated disable state for organization Successfully"
      }
    }
  }
}
```

Use this API to enable or disable both read and write access for all documents for all users.

 Let’s say your customer’s trial or subscription has ended and you want to disable their access to the Velt data, you could use this to disable access to the entire organization data.

If organization does not exist, it will be created.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organization-disable-state#endpoint)

Endpoint
========================================================================================================================

`POST https://api.velt.dev/v2/organizations/access/disablestate/update`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organization-disable-state#headers)

Headers
======================================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organization-disable-state#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organization-disable-state#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organization-disable-state#body)

Body
================================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organization-disable-state#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organization-disable-state#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organization-disable-state#param-organization-ids)

organizationIds

string[]

required

Array of Organization IDs

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organization-disable-state#param-disabled)

disabled

boolean

required

Whether to disable read and write access to the specified organizations. Allowed values: `true`, `false`.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organization-disable-state#example-requests)

**Example Requests**
--------------------------------------------------------------------------------------------------------------------------------------------

Copy

Ask AI

```
{
  "data": {
    "organizationIds": ["yourOrganizationId1","yourOrganizationId2"],
    "disabled": true
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organization-disable-state#response)

Response
========================================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organization-disable-state#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Updated disable state for Organization(s) successfully.",
    "data": {
      "yourOrganizationId1": {
        "success": true,
        "id": "02cf91e5e7a5f4c0b600c84cf248384b",
        "message": "Updated disable state for organization Successfully"
      },
      "yourOrganizationId2": {
        "success": false,
        "id": "44e0132f4c6b0d453f18df42d2263b4e",
        "message": "Organization does not exist"
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/update-organization-disable-state#failure-response)

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

[Delete Organizations](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/delete-organizations)[Add Folder](https://docs.velt.dev/api-reference/rest-apis/v2/folders/add-folder)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
