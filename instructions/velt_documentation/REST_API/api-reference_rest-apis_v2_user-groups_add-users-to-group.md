Title: Add Users to Groups - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-users-to-group

Markdown Content:
Add Users to Groups - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

User Groups

Add Users to Groups

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

Add Users to Groups

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/usergroups/users/add \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "organizationUserGroupId": "<string>",
    "userIds": [
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
    "message": "Added organization users to group successfully.",
    "data": {
      "yourUserId1": {
        "success": true,
        "organizationUserGroupId": "yourGroupId",
        "message": "User added to organization user group."
      }
    }
  }
}
```

User Groups

Add Users to Groups
===================

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

users

/

add

Try it

Add Users to Groups

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/organizations/usergroups/users/add \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "organizationId": "<string>",
    "organizationUserGroupId": "<string>",
    "userIds": [
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
    "message": "Added organization users to group successfully.",
    "data": {
      "yourUserId1": {
        "success": true,
        "organizationUserGroupId": "yourGroupId",
        "message": "User added to organization user group."
      }
    }
  }
}
```

Use this API to add users to a specific organization user group.
[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-users-to-group#endpoint)

Endpoint
=======================================================================================================

`POST https://api.velt.dev/v2/organizations/usergroups/users/add`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-users-to-group#headers)

Headers
=====================================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-users-to-group#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-users-to-group#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-users-to-group#body)

Body
===============================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-users-to-group#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-users-to-group#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-users-to-group#param-organization-id)

organizationId

string

required

Organization ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-users-to-group#param-organization-user-group-id)

organizationUserGroupId

string

required

Organization User Group ID

[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-users-to-group#param-user-ids)

userIds

string[]

required

Array of User IDs

[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-users-to-group#example-requests)

**Example Requests**
---------------------------------------------------------------------------------------------------------------------------

Copy

Ask AI

```
{
  "data": {
    "organizationId": "yourOrganizationId",
    "organizationUserGroupId": "yourGroupId",
    "userIds": ["yourUserId1"]
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-users-to-group#response)

Response
=======================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-users-to-group#success-response)

Success Response

Copy

Ask AI

```
{
  "result": {
    "status": "success",
    "message": "Added organization users to group successfully.",
    "data": {
      "yourUserId1": {
        "success": true,
        "organizationUserGroupId": "yourGroupId",
        "message": "User added to organization user group."
      }
    }
  }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-users-to-group#failure-response)

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

[Add User Groups](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/add-groups)[Delete Users from Groups](https://docs.velt.dev/api-reference/rest-apis/v2/user-groups/delete-users-from-group)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
