Title: Add User Groups - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-groups

Markdown Content:
Add User Groups - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

User Groups

Add User Groups

[Documentation](https://docs.velt.dev/get-started/overview)[UI Customization](https://docs.velt.dev/ui-customization/overview)[API Reference](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations)[Release Notes](https://docs.velt.dev/release-notes/version-4/upgrade-guide)[Examples](https://velt.dev/examples)[DevTools](https://velt.dev/devtools)

##### REST APIs

*   v2  
    *   Organizations  
    *   Folders  
    *   Documents  
    *   Users  
    *   User Groups  
        *   [POST Add User Groups](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-groups)
        *   [POST Add Users to Groups](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-users-to-group)
        *   [POST Delete Users from Groups](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/delete-users-from-group)

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

Add User Groups

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/usergroups/add \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "organizationUserGroups": [
      {}
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
    "message": "Organization User Groups added successfully.",
    "data": {
      "yourGroupId": {
        "success": true,
        "id": "77ab6767b022ad0323ba39c24f12cc95",
        "message": "Organization user group added."
      }
    }
  }
}
```

User Groups

Add User Groups
===============

Copy page

Copy page

POST

/

v2

/

organizations

/

usergroups

/

add

Try it

Add User Groups

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/usergroups/add \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "organizationUserGroups": [
      {}
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
    "message": "Organization User Groups added successfully.",
    "data": {
      "yourGroupId": {
        "success": true,
        "id": "77ab6767b022ad0323ba39c24f12cc95",
        "message": "Organization user group added."
      }
    }
  }
}
```

Use this API to add organization user groups to a specific organization.
[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-groups#endpoint)

Endpoint
===============================================================================================

`POST https://api.velt.dev/v2/organizations/usergroups/add`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-groups#headers)

Headers
=============================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-groups#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-groups#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-groups#body)

Body
=======================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-groups#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-groups#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-groups#param-organization-id)

organizationId

string

required

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-groups#param-organization-user-groups)

organizationUserGroups

OrganizationUserGroup[]

required

Array of Organization User Group objects

[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-groups#example-request)

**Example Request**
-----------------------------------------------------------------------------------------------------------------

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-groups#add-organization-user-group-in-a-specific-organization)

Add organization user group in a specific organization

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "organizationUserGroups": [
      {
        "groupId": "engineering",
        "groupName": "Engineering"
      }
    ]
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-groups#response)

Response
===============================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-groups#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Organization User Groups added successfully.",
    "data": {
      "yourGroupId": {
        "success": true,
        "id": "77ab6767b022ad0323ba39c24f12cc95",
        "message": "Organization user group added."
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-groups#failure-response)

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

[Delete Users](https://docs.velt.dev/api-reference/rest-apis/v2/users/delete-users)[Add Users to Groups](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-users-to-group)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
