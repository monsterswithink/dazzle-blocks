Title: Add Domains - Velt

URL Source: https://docs.velt.dev/api-reference/rest-apis/v2/workspace/add-domain

Markdown Content:
Add Domains - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Workspace

Add Domains

[Documentation](https://docs.velt.dev/get-started/overview)[UI Customization](https://docs.velt.dev/ui-customization/overview)[API Reference](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations)[Release Notes](https://docs.velt.dev/release-notes/version-4/upgrade-guide)[Examples](https://velt.dev/examples)[DevTools](https://velt.dev/devtools)

##### REST APIs

*   v2  
    *   Organizations  
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
        *   [POST Add Domains](https://docs.velt.dev/api-reference/rest-apis/v2/workspace/add-domain)
        *   [POST Delete Domains](https://docs.velt.dev/api-reference/rest-apis/v2/workspace/delete-domain)

*   v1  

##### SDK

*   APIs  
*   [Data models](https://docs.velt.dev/api-reference/sdk/models/data-models)

Add Domains

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/workspace/domains/add \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "domains": [
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
        "message": "Domain(s) added successfully to allowed domains.",
        "data": {
            "domainsAdded": [
                "google.com",
                "*.firebase.com"
            ]
        }
    }
}
```

Workspace

Add Domains
===========

Copy page

Copy page

POST

/

v2

/

workspace

/

domains

/

add

Try it

Add Domains

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.velt.dev/v2/workspace/domains/add \
  --header 'Content-Type: application/json' \
  --header 'x-velt-api-key: <x-velt-api-key>' \
  --header 'x-velt-auth-token: <x-velt-auth-token>' \
  --data '{
  "data": {
    "domains": [
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
        "message": "Domain(s) added successfully to allowed domains.",
        "data": {
            "domainsAdded": [
                "google.com",
                "*.firebase.com"
            ]
        }
    }
}
```

Use this API to add new organizations and its metadata.
[​](https://docs.velt.dev/api-reference/rest-apis/v2/workspace/add-domain#endpoint)

Endpoint
=============================================================================================

`POST https://api.velt.dev/v2/workspace/domains/add`
[​](https://docs.velt.dev/api-reference/rest-apis/v2/workspace/add-domain#headers)

Headers
===========================================================================================

[​](https://docs.velt.dev/api-reference/rest-apis/v2/workspace/add-domain#param-x-velt-api-key)

x-velt-api-key

string

required

Your API key.

[​](https://docs.velt.dev/api-reference/rest-apis/v2/workspace/add-domain#param-x-velt-auth-token)

x-velt-auth-token

string

required

Your [Auth Token](https://docs.velt.dev/security/auth-tokens).

[​](https://docs.velt.dev/api-reference/rest-apis/v2/workspace/add-domain#body)

Body
=====================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/workspace/add-domain#params)

Params

[​](https://docs.velt.dev/api-reference/rest-apis/v2/workspace/add-domain#param-data)

data

object

required

Show properties

[​](https://docs.velt.dev/api-reference/rest-apis/v2/workspace/add-domain#param-domains)

domains

string[]

required

Array of domains

[​](https://docs.velt.dev/api-reference/rest-apis/v2/workspace/add-domain#example-request)

Example Request
===========================================================================================================

Copy

Ask AI

```
{
  "data": {
     "domains" : [
        "https://www.google.com",
        "https://*.firebase.com"
     ]
  }
}
```

[​](https://docs.velt.dev/api-reference/rest-apis/v2/workspace/add-domain#example-response)

Example Response
=============================================================================================================

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/workspace/add-domain#success-response)

Success Response

Copy

Ask AI

```
{
    "result": {
        "status": "success",
        "message": "Domain(s) added successfully to allowed domains.",
        "data": {
            "domainsAdded": [
                "google.com",
                "*.firebase.com"
            ]
        }
    }
}
```

#### [​](https://docs.velt.dev/api-reference/rest-apis/v2/workspace/add-domain#failure-response)

Failure Response

##### If some domains are already in the allowed domains

Copy

Ask AI

```
{
    "error": {
        "details": {
            "domainsAdded": [
                "velt.dev"
            ],
            "skippedDomains": [
                "google.com"
            ]
        },
        "message": "Domain(s) added successfully to allowed domains. Skipped existing domains.",
        "status": "INTERNAL"
    }
}
```

Was this page helpful?

Yes No

[Broadcast Event](https://docs.velt.dev/api-reference/rest-apis/v2/livestate/broadcast-event)[Delete Domains](https://docs.velt.dev/api-reference/rest-apis/v2/workspace/delete-domain)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
