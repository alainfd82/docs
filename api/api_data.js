define({ "api": [
  {
    "type": "POST",
    "url": "/auth",
    "title": "Endpoint",
    "name": "authConn",
    "group": "Authentication",
    "description": "<p>You authenticate to the Cenit IO API by providing your endpoint API keys and token in the header parameters into request. You can have multiple API keys and token active at one time for any endpoint.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>The <code>key</code> or <code>token</code> of the users was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"request_id\":\"1\",\"summary\":\"Unauthorized\",\"code\":401}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Hub-Store",
            "description": "<p>Connection unique access-key.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Hub-Access-Token",
            "description": "<p>Connection unique access-token.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api_def/setup/auth.rb",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/auth"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/auth",
    "title": "Users",
    "name": "authUser",
    "group": "Authentication",
    "description": "<p>You authenticate to the Cenit IO API by providing your users API keys and token in the header parameters into request. You can have multiple API keys and token active at one time for any users.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>The <code>key</code> or <code>token</code> of the users was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"request_id\":\"1\",\"summary\":\"Unauthorized\",\"code\":401}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-User-Access-Key",
            "description": "<p>Users unique access-key.</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-User-Access-Token",
            "description": "<p>Users unique access-token.</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api_def/setup/auth.rb",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/auth"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/setup/connection_rol/:id",
    "title": "Delete",
    "name": "delete",
    "description": "<p>Permanently deletes a Connection Rol. It cannot be undone.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ConnectionRolNotFound",
            "description": "<p>The <code>id</code> of the Connection Rol was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"Item not found\" }",
          "type": "json"
        }
      ]
    },
    "group": "Connection_Rol",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Connection Rols unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Connection Rols.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\": \"success\", \"message\": { \"connection_rols\": [{\"id\": \"1\"}]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api_def/setup/conn_rol.rb",
    "groupTitle": "Connection_Rol",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/connection_rol/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setup/connection_rol/:id",
    "title": "Get",
    "name": "get",
    "group": "Connection_Rol",
    "description": "<p>Retrieves the details of an existing Connection Rol. You need only supply the unique Connection Rol identifier that was returned upon Connection Rol creation.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ConnectionRolNotFound",
            "description": "<p>The <code>id</code> of the Connection Rol was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"Item not found\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the ConnectionRols.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the ConnectionRols.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "connection",
            "description": "<p>Connections include.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "webhook",
            "description": "<p>Webhooks include.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\"  https://cenit.io/api/v1/setup/connection_rol/1",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"connection_rol\"\n* id = \"1\")\n* Cenit::Client.show(model,id)",
        "type": "json"
      },
      {
        "title": "Sample Data",
        "content": "{\n    \"connection_rol\": {\n        \"id\": \"1\",\n        \"name\": \"My Conn Rol\",\n        \"webhooks\": [\n          {\n            \"_reference\": true,\n            \"name\": \"My webhook | Get\"\n          }\n        ],\n        \"connections\": [\n          {\n            \"_reference\": true,\n            \"name\": \"My Connection\"\n          }\n        ]\n      }\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/conn_rol.rb",
    "groupTitle": "Connection_Rol",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/connection_rol/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setup/connection_rol",
    "title": "List",
    "description": "<p>Returns a list of Connection Rol you've previously created. The Connection Rol are returned in sorted order, with the most recent Connection Rol appearing first.</p> ",
    "name": "list",
    "group": "Connection_Rol",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the ConnectionRols.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the ConnectionRols.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "connection",
            "description": "<p>Connections include.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "webhook",
            "description": "<p>Webhooks include.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\" https://cenit.io/api/v1/setup/connection_rol",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"connection_rol\"\n* Cenit::Client.list(model)",
        "type": "json"
      },
      {
        "title": "Sample Data:",
        "content": "[\n    {\n    \"connection_rol\": {\n        \"id\": \"1\",\n        \"name\": \"My Conn Rol\",\n        \"webhooks\": [\n          {\n            \"_reference\": true,\n            \"name\": \"My webhook | Get\"\n          }\n        ],\n        \"connections\": [\n          {\n            \"_reference\": true,\n            \"name\": \"My Connection\"\n          }\n        ]\n      }\n    },\n   {\n    \"connection_rol\": {\n        \"id\": \"2\",\n        \"name\": \"My Conn Rol 2\",\n        \"webhooks\": [\n          {\n            \"_reference\": true,\n            \"name\": \"My webhook | Post\"\n          }\n        ],\n        \"connections\": [\n          {\n            \"_reference\": true,\n            \"name\": \"My Connection\"\n          }\n        ]\n      }\n  }\n]",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/conn_rol.rb",
    "groupTitle": "Connection_Rol",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/connection_rol"
      }
    ]
  },
  {
    "type": "post",
    "url": "/push",
    "title": "Push",
    "name": "push",
    "group": "Connection_Rol",
    "description": "<p>Updates the specified Connection Rol by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParserError",
            "description": "<p>The <code>json</code> of the Connection Rol parser error.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidatorError",
            "description": "<p>The <code>json</code> of the Connection Rol validation error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "ParserError-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"JSON parser error\", \"code\": 500 }",
          "type": "json"
        },
        {
          "title": "ValidatorError-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"JSON validator error\", \"code\": 500 }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the ConnectionRols.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the ConnectionRols.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "connection",
            "description": "<p>Connections include.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "webhook",
            "description": "<p>Webhooks include.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\": \"success\", \"message\": { \"Connection Rols\": [{\"id\": \"1\"}]}}",
          "type": "json"
        },
        {
          "title": "Sample Data:",
          "content": "{\n    \"connection_rol\": {\n        \"id\": \"1\",\n        \"name\": \"My Conn Rol\",\n        \"webhooks\": [\n          {\n            \"_reference\": true,\n            \"name\": \"My webhook | Get\"\n          }\n        ],\n        \"connections\": [\n          {\n            \"_reference\": true,\n            \"name\": \"My Connection\"\n          }\n        ]\n      }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api_def/setup/conn_rol.rb",
    "groupTitle": "Connection_Rol",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/push"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/setup/connection/:id",
    "title": "Delete",
    "name": "delete",
    "description": "<p>Permanently deletes a connection. It cannot be undone.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ConnNotFound",
            "description": "<p>The <code>id</code> of the Connection was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"Item not found\" }",
          "type": "json"
        }
      ]
    },
    "group": "Connection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Connections unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Connections.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\": \"success\", \"message\": { \"connections\": [{\"id\": \"1\"}]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api_def/setup/conn.rb",
    "groupTitle": "Connection",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/connection/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setup/connection/:id",
    "title": "Get",
    "name": "get",
    "group": "Connection",
    "description": "<p>Retrieves the details of an existing connection. You need only supply the unique connection identifier that was returned upon connection creation.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ConnNotFound",
            "description": "<p>The <code>id</code> of the Connection was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"Item not found\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Connections unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Connections.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Connections.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL of the Endpoint.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Key credentials of the Endpoint.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token credentials of the Endpoint.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "parameters",
            "description": "<p>URL parameters.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "headers",
            "description": "<p>Headers parameters.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "template_parameters",
            "description": "<p>Template Parameters.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\" https://cenit.io/api/v1/setup/connection/1",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"connection\"\n* id = \"556370a143454e22a1b10000\")\n* Cenit::Client.show(model,id)",
        "type": "json"
      },
      {
        "title": "Sample Data",
        "content": "{\n    \"connection\": {\n            \"id\": \"1\",\n            \"name\": \"My Connection\",\n            \"url\": \"http://sample.com/\",\n            \"number\": \"My Key\",\n            \"token\": \"My Token\",\n            \"parameters\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Parameters key\",\n                    \"value\": \"Parameters value\"\n                }\n            ],\n            \"headers\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Header key\",\n                    \"value\": \"Header value\"\n                }\n            ],\n            \"template_parameters\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Template key\",\n                    \"value\": \"Template value\"\n                }\n            ]\n        }\n    }\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/conn.rb",
    "groupTitle": "Connection",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/connection/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setup/connection",
    "title": "List",
    "description": "<p>Returns a list of connection you've previously created. The connection are returned in sorted order, with the most recent connection appearing first.</p> ",
    "name": "list",
    "group": "Connection",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Connections.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Connections.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL of the Endpoint.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Key credentials of the Endpoint.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token credentials of the Endpoint.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "parameters",
            "description": "<p>URL parameters.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "headers",
            "description": "<p>Headers parameters.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "template_parameters",
            "description": "<p>Template Parameters.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\" https://cenit.io/api/v1/setup/connection",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"connection\"\n* Cenit::Client.list(model)",
        "type": "json"
      },
      {
        "title": "Sample Data:",
        "content": "[\n    {\n        \"connection\": {\n            \"id\": \"1\",\n            \"name\": \"My Connection\",\n            \"url\": \"http://sample.com/\",\n            \"number\": \"My Key\",\n            \"token\": \"My Token\",\n            \"parameters\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Parameters key\",\n                    \"value\": \"Parameters value\"\n                }\n            ],\n            \"headers\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Header key\",\n                    \"value\": \"Header value\"\n                }\n            ],\n            \"template_parameters\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Template key\",\n                    \"value\": \"Template value\"\n                }\n            ]\n        }\n    },\n        \"connection\": {\n            \"id\": \"2\",\n            \"name\": \"My Connection 2\",\n            \"url\": \"http://sample.com/\",\n            \"number\": \"My Key\",\n            \"token\": \"My Token\",\n            \"parameters\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Parameters key\",\n                    \"value\": \"Parameters value\"\n                }\n            ],\n            \"headers\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Header key\",\n                    \"value\": \"Header value\"\n                }\n            ],\n            \"template_parameters\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Template key\",\n                    \"value\": \"Template value\"\n                }\n            ]\n        }\n]",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/conn.rb",
    "groupTitle": "Connection",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/connection"
      }
    ]
  },
  {
    "type": "post",
    "url": "/push",
    "title": "Push",
    "name": "push",
    "group": "Connection",
    "description": "<p>Updates the specified connection by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParserError",
            "description": "<p>The <code>json</code> of the Connection parser error.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidatorError",
            "description": "<p>The <code>json</code> of the Connection validation error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "ParserError-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"JSON parser error\", \"code\": 500 }",
          "type": "json"
        },
        {
          "title": "ValidatorError-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"JSON validator error\", \"code\": 500 }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Connections.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Connections.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL of the Endpoint.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Key credentials of the Endpoint.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token credentials of the Endpoint.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "parameters",
            "description": "<p>URL parameters.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "headers",
            "description": "<p>Headers parameters.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "template_parameters",
            "description": "<p>Template Parameters.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\": \"success\", \"message\": { \"connections\": [{\"id\": \"1\"}]}}",
          "type": "json"
        },
        {
          "title": "Sample Data:",
          "content": "{\n        \"connection\": {\n            \"id\": \"1\",\n            \"name\": \"My Connection\",\n            \"url\": \"http://sample.com/\",\n            \"number\": \"My Key\",\n            \"token\": \"My Token\",\n            \"parameters\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Parameters key\",\n                    \"value\": \"Parameters value\"\n                }\n            ],\n            \"headers\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Header key\",\n                    \"value\": \"Header value\"\n                }\n            ],\n            \"template_parameters\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Template key\",\n                    \"value\": \"Template value\"\n                }\n            ]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api_def/setup/conn.rb",
    "groupTitle": "Connection",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/push"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setup/data_type/:id",
    "title": "Get",
    "name": "get",
    "group": "DataType",
    "description": "<p>Retrieves the details of an existing DataType. You need only supply the unique DataType identifier that was returned upon DataType creation.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataTypeNotFound",
            "description": "<p>The <code>id</code> of the DataType was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"Item not found\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>DataTypes unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Data Types.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title to Show.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Data Type.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>API and definition reference.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>boolean</p> ",
            "optional": false,
            "field": "show_navigation_link",
            "description": "<p>Show navigation link into Rails Admin.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>boolean</p> ",
            "optional": false,
            "field": "activated",
            "description": "<p>State of Data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>boolean</p> ",
            "optional": false,
            "field": "model_loaded",
            "description": "<p>Load state of Data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Class</p> ",
            "optional": false,
            "field": "_type",
            "description": "<p>Data type Class.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "model_schema",
            "description": "<p>Model schema validator.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\" https://cenit.io/api/v1/setup/data_type/556370a143454e22a1b10000",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"data_type\"\n* id = \"556370a143454e22a1b10000\")\n* Cenit::Client.show(model,id)",
        "type": "json"
      },
      {
        "title": "Sample Data",
        "content": "{\n    \"id\": \"55a5246543454e1d18020000\",\n    \"slug\": \"message\",\n    \"title\": \"Message\",\n    \"name\": \"message.json\",\n    \"activated\": true,\n    \"show_navigation_link\": true,\n    \"model_loaded\": true,\n    \"_type\": \"Setup::DataType\",\n    \"model_schema\": \"{\\\"title\\\":\\\"Message\\\",\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"text\\\":{\\\"type\\\":\\\"string\\\"}}}\"\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/data_type.rb",
    "groupTitle": "DataType",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/data_type/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setup/data_type",
    "title": "List",
    "description": "<p>Returns a list of DataType you've previously created. The DataType are returned in sorted order, with the most recent DataType appearing first.</p> ",
    "name": "list",
    "group": "DataType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>DataTypes unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Data Types.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title to Show.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Data Type.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>API and definition reference.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>boolean</p> ",
            "optional": false,
            "field": "show_navigation_link",
            "description": "<p>Show navigation link into Rails Admin.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>boolean</p> ",
            "optional": false,
            "field": "activated",
            "description": "<p>State of Data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>boolean</p> ",
            "optional": false,
            "field": "model_loaded",
            "description": "<p>Load state of Data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Class</p> ",
            "optional": false,
            "field": "_type",
            "description": "<p>Data type Class.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "model_schema",
            "description": "<p>Model schema validator.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\" https://cenit.io/api/v1/setup/data_type",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"data_type\"\n* Cenit::Client.list(model)",
        "type": "json"
      },
      {
        "title": "Sample Data:",
        "content": "[\n    {\n        {\n      \"id\": \"55a5246543454e1d18020000\",\n      \"slug\": \"message\",\n      \"title\": \"Message\",\n      \"name\": \"message.json\",\n      \"activated\": true,\n      \"show_navigation_link\": true,\n      \"model_loaded\": true,\n      \"_type\": \"Setup::DataType\",\n      \"model_schema\": \"{\\\"title\\\":\\\"Message\\\",\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"text\\\":{\\\"type\\\":\\\"string\\\"}}}\"\n  },\n  {\n      \"id\": \"55a03aef43454e0b44050000\",\n      \"slug\": \"tweet\",\n      \"title\": \"Tweet\",\n      \"name\": \"tweet.json\",\n      \"show_navigation_link\": true,\n      \"_type\": \"Setup::DataType\",\n      \"model_schema\": \"{\\\"title\\\":\\\"Tweet\\\",\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"tweet_id\\\":{\\\"type\\\":\\\"integer\\\"},\\\"status\\\":{\\\"type\\\":\\\"string\\\"}}}\"\n  }\n]",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/data_type.rb",
    "groupTitle": "DataType",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/data_type"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/setup/observer/:id",
    "title": "Delete",
    "name": "delete",
    "description": "<p>Permanently deletes a event. It cannot be undone.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotFound",
            "description": "<p>The <code>id</code> of the event was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"Item not found\" }",
          "type": "json"
        }
      ]
    },
    "group": "Event_Observer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Events unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Events.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\": \"success\", \"message\": { \"observers\": [{\"id\": \"1\"}]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api_def/setup/event_observer.rb",
    "groupTitle": "Event_Observer",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/observer/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setup/observer/:id",
    "title": "Get",
    "name": "get",
    "group": "Event_Observer",
    "description": "<p>Retrieves the details of an existing event. You need only supply the unique event identifier that was returned upon event creation.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotFound",
            "description": "<p>The <code>id</code> of the event was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"Item not found\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Events unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Events.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Events.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>class</p> ",
            "optional": false,
            "field": "_type",
            "description": "<p>Type of event <code>Setup::Observer</code>.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "data_type",
            "description": "<p>Data type reference of event.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\" https://cenit.io/api/v1/event/1",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"observer\"\n* id = \"1\")\n* Cenit::Client.show(model,id)",
        "type": "json"
      },
      {
        "title": "Sample Data",
        "content": "{\n      \"event\": {\n              \"id\": \"1\",\n              \"name\": \"Communication | SMS on created_at\",\n              \"_type\": \"Setup::Observer\",\n              \"triggers\": \"{\\\"created_at\\\":{\\\"0\\\":{\\\"o\\\":\\\"_not_null\\\",\\\"v\\\":[\\\"\\\",\\\"\\\",\\\"\\\"]}}}\",\n              \"data_type\": {\n                \"_reference\": true,\n                \"name\": \"Sms\",\n                \"schema\": {\n                  \"_reference\": true,\n                  \"uri\": \"sms.json\",\n                  \"namespace\": {\n                    \"_reference\": true,\n                    \"name\": \"Communication\"\n                  }\n                }\n              }\n     }\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/event_observer.rb",
    "groupTitle": "Event_Observer",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/observer/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/event",
    "title": "List",
    "description": "<p>Returns a list of event you've previously created. The event are returned in sorted order, with the most recent event appearing first.</p> ",
    "name": "list",
    "group": "Event_Observer",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Events.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Events.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>class</p> ",
            "optional": false,
            "field": "_type",
            "description": "<p>Type of event <code>Setup::Observer</code>.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "data_type",
            "description": "<p>Data type reference of event.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\" https://cenit.io/api/v1/setup/observer",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"observer\"\n* Cenit::Client.list(model)",
        "type": "json"
      },
      {
        "title": "Sample Data:",
        "content": "[\n    {\n      \"event\": {\n              \"id\": \"1\",\n              \"name\": \"Communication | SMS on created_at\",\n              \"_type\": \"Setup::Observer\",\n              \"triggers\": \"{\\\"created_at\\\":{\\\"0\\\":{\\\"o\\\":\\\"_not_null\\\",\\\"v\\\":[\\\"\\\",\\\"\\\",\\\"\\\"]}}}\",\n              \"data_type\": {\n                \"_reference\": true,\n                \"name\": \"Sms\",\n                \"schema\": {\n                  \"_reference\": true,\n                  \"uri\": \"sms.json\",\n                  \"namespace\": {\n                    \"_reference\": true,\n                    \"name\": \"Communication\"\n                  }\n                }\n              }\n     }\n    },\n    {\n      \"event\": {\n              \"id\": \"2\",\n              \"name\": \"Communication | SMS on update_at\",\n              \"_type\": \"Setup::Observer\",\n              \"triggers\": \"{\\\"updated_at\\\":{\\\"0\\\":{\\\"o\\\":\\\"_presence_change\\\",\\\"v\\\":[\\\"\\\",\\\"\\\",\\\"\\\"]}}}\",\n              \"data_type\": {\n                \"_reference\": true,\n                \"name\": \"Sms\",\n                \"schema\": {\n                  \"_reference\": true,\n                  \"uri\": \"sms.json\",\n                  \"namespace\": {\n                    \"_reference\": true,\n                    \"name\": \"Communication\"\n                  }\n                }\n              }\n     }\n    }\n]",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/event_observer.rb",
    "groupTitle": "Event_Observer",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/event"
      }
    ]
  },
  {
    "type": "post",
    "url": "/push",
    "title": "Push",
    "name": "push",
    "group": "Event_Observer",
    "description": "<p>Updates the specified Event by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParserError",
            "description": "<p>The <code>json</code> of the event parser error.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidatorError",
            "description": "<p>The <code>json</code> of the event validation error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "ParserError-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"JSON parser error\", \"code\": 500 }",
          "type": "json"
        },
        {
          "title": "ValidatorError-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"JSON validator error\", \"code\": 500 }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Events.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Events.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>class</p> ",
            "optional": false,
            "field": "_type",
            "description": "<p>Type of event <code>Setup::Observer</code>.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>json</p> ",
            "optional": false,
            "field": "data_type",
            "description": "<p>Data type reference of event.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\": \"success\", \"message\": { \"observers\": [{\"id\": \"1\"}]}}",
          "type": "json"
        },
        {
          "title": "Sample Data:",
          "content": "{\n     \"observer\": {\n              \"id\": \"1\",\n              \"name\": \"Communication | SMS on created_at\",\n              \"_type\": \"Setup::Observer\",\n              \"triggers\": \"{\\\"created_at\\\":{\\\"0\\\":{\\\"o\\\":\\\"_not_null\\\",\\\"v\\\":[\\\"\\\",\\\"\\\",\\\"\\\"]}}}\",\n              \"data_type\": {\n                \"_reference\": true,\n                \"name\": \"Sms\",\n                \"schema\": {\n                  \"_reference\": true,\n                  \"uri\": \"sms.json\",\n                  \"namespace\": {\n                    \"_reference\": true,\n                    \"name\": \"Communication\"\n                  }\n                }\n              }\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api_def/setup/event_observer.rb",
    "groupTitle": "Event_Observer",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/push"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/setup/scheduler/:id",
    "title": "Delete",
    "name": "delete",
    "description": "<p>Permanently deletes a event. It cannot be undone.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotFound",
            "description": "<p>The <code>id</code> of the event was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"Item not found\" }",
          "type": "json"
        }
      ]
    },
    "group": "Event_Sheduler",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Events unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Events.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\": \"success\", \"message\": { \"schedulers\": [{\"id\": \"1\"}]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api_def/setup/event_sheduler.rb",
    "groupTitle": "Event_Sheduler",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/scheduler/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setup/scheduler/:id",
    "title": "Get",
    "name": "get",
    "group": "Event_Sheduler",
    "description": "<p>Retrieves the details of an existing event. You need only supply the unique event identifier that was returned upon event creation.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EventNotFound",
            "description": "<p>The <code>id</code> of the event was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"Item not found\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Events unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Events.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Events.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>class</p> ",
            "optional": false,
            "field": "_type",
            "description": "<p>Type of event <code>Setup::Sheduler</code>.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ENUM</p> ",
            "optional": false,
            "field": "scheduling_method",
            "description": "<p>Scheduling method definition.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expression",
            "description": "<p>Expression to define scheduler.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\" https://cenit.io/api/v1/setup/scheduler/1",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"scheduler\"\n* id = \"1\")\n* Cenit::Client.show(model,id)",
        "type": "json"
      },
      {
        "title": "Sample Data",
        "content": "{\n      \"scheduler\": {\n            \"id\": \"1\",\n            \"name\": \"TEST\",\n            \"_type\": \"Setup::Scheduler\",\n            \"scheduling_method\": \"Periodic\",\n            \"expression\": \"20m\"\n      }\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/event_sheduler.rb",
    "groupTitle": "Event_Sheduler",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/scheduler/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setup/scheduler",
    "title": "List",
    "description": "<p>Returns a list of event you've previously created. The event are returned in sorted order, with the most recent event appearing first.</p> ",
    "name": "list",
    "group": "Event_Sheduler",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Events.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Events.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>class</p> ",
            "optional": false,
            "field": "_type",
            "description": "<p>Type of event <code>Setup::Sheduler</code>.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ENUM</p> ",
            "optional": false,
            "field": "scheduling_method",
            "description": "<p>Scheduling method definition.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expression",
            "description": "<p>Expression to define scheduler.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\" https://cenit.io/api/v1/setup/scheduler",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"scheduler\"\n* Cenit::Client.list(model)",
        "type": "json"
      },
      {
        "title": "Sample Data:",
        "content": "[\n    {\n      \"scheduler\": {\n            \"id\": \"1\",\n            \"name\": \"Scheduler 1\",\n            \"_type\": \"Setup::Scheduler\",\n            \"scheduling_method\": \"Periodic\",\n            \"expression\": \"20m\"\n      }\n    },\n    {\n      \"scheduler\": {\n            \"id\": \"2\",\n            \"name\": \"Scheduler 2\",\n            \"_type\": \"Setup::Scheduler\",\n            \"scheduling_method\": \"Periodic\",\n            \"expression\": \"20m\"\n      }\n    }\n]",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/event_sheduler.rb",
    "groupTitle": "Event_Sheduler",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/scheduler"
      }
    ]
  },
  {
    "type": "post",
    "url": "/push",
    "title": "Push",
    "name": "push",
    "group": "Event_Sheduler",
    "description": "<p>Updates the specified Event by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParserError",
            "description": "<p>The <code>json</code> of the event parser error.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidatorError",
            "description": "<p>The <code>json</code> of the event validation error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "ParserError-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"JSON parser error\", \"code\": 500 }",
          "type": "json"
        },
        {
          "title": "ValidatorError-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"JSON validator error\", \"code\": 500 }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Events.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Events.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>class</p> ",
            "optional": false,
            "field": "_type",
            "description": "<p>Type of event <code>Setup::Sheduler</code>.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ENUM</p> ",
            "optional": false,
            "field": "scheduling_method",
            "description": "<p>Scheduling method definition.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expression",
            "description": "<p>Expression to define scheduler.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\": \"success\", \"message\": { \"events\": [{\"id\": \"1\"}]}}",
          "type": "json"
        },
        {
          "title": "Once Sheduler:",
          "content": "{\n      \"scheduler\": {\n            \"id\": \"1\",\n            \"name\": \"Scheduler 2\",\n            \"_type\": \"Setup::Scheduler\",\n            \"scheduling_method\": \"Once\",\n            \"expression\": \"20m\"\n      }\n  }",
          "type": "json"
        },
        {
          "title": "Periodic Sheduler:",
          "content": "{\n     \"scheduler\": {\n        \"id\": \"2\",\n        \"name\": \"Ecommerce | SCN Order\",\n        \"_type\": \"Setup::Scheduler\",\n        \"scheduling_method\": \"Periodic\",\n        \"expression\": \"20m\"\n      }\n  }",
          "type": "json"
        },
        {
          "title": "CRON Sheduler:",
          "content": "{\n     \"scheduler\": {\n        \"id\": \"2\",\n        \"name\": \"Ecommerce | SCN Order\",\n        \"_type\": \"Setup::Scheduler\",\n        \"scheduling_method\": \"CRON\",\n        \"expression\": \"0 0 12 1/1 * ? *\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api_def/setup/event_sheduler.rb",
    "groupTitle": "Event_Sheduler",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/push"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/setup/flow/:id",
    "title": "Delete",
    "name": "delete",
    "description": "<p>Permanently deletes a flow. It cannot be undone.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "flowNotFound",
            "description": "<p>The <code>id</code> of the flow was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"Item not found\" }",
          "type": "json"
        }
      ]
    },
    "group": "Flow",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>flows unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the flows.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\": \"success\", \"message\": { \"flows\": [{\"id\": \"1\"}]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api_def/setup/flow.rb",
    "groupTitle": "Flow",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/flow/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setup/flow/:id",
    "title": "Get",
    "name": "get",
    "group": "Flow",
    "description": "<p>Retrieves the details of an existing flow. You need only supply the unique flow identifier that was returned upon flow creation.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "flowNotFound",
            "description": "<p>The <code>id</code> of the flow was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"Item not found\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>flows unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the flows.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the flows.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "active",
            "description": "<p>Status of the flow.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "last_trigger_timestamps",
            "description": "<p>Last trigger timestamps</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Event</p> ",
            "optional": false,
            "field": "event",
            "description": "<p>Event trigger the flow.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Translator</p> ",
            "optional": false,
            "field": "translator",
            "description": "<p>Translator to build request to get, post or convert.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Translator</p> ",
            "optional": false,
            "field": "response_translator",
            "description": "<p>Translator to process response. Always of type import.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Data_type</p> ",
            "optional": false,
            "field": "custom_data_type",
            "description": "<p>Custom data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Data_type</p> ",
            "optional": false,
            "field": "source_data_type",
            "description": "<p>Source data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Data_type</p> ",
            "optional": false,
            "field": "target_data_type",
            "description": "<p>Target data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Webhook</p> ",
            "optional": false,
            "field": "webhook",
            "description": "<p>Webhook to send or receive data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Connection_rol</p> ",
            "optional": false,
            "field": "connection_rol",
            "description": "<p>Connection rol to send or receive data.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\" https://cenit.io/api/v1/setup/flow/1",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"flow\"\n* id = \"1\")\n* Cenit::Client.show(model,id)",
        "type": "json"
      },
      {
        "title": "Sample Data",
        "content": "{\n    \"flow\": {\n            \"id\": \"1\",\n            \"name\": \"Sample flow\",\n            \"active\": true,\n            \"data_type_scope\": \"Event source\",\n            \"last_trigger_timestamps\": \"2015-05-29 13:15:49 UTC\",\n            \"event\": {\n              \"_reference\": true,\n              \"name\": \"namespace | Sample on updated_at\"\n            },\n            \"translator\": {\n              \"_reference\": true,\n              \"name\": \"Sample translator\"\n            },\n            \"custom_data_type\": {\n              \"_reference\": true,\n              \"name\": \"Sample\",\n              \"schema\": {\n                \"_reference\": true,\n                \"uri\": \"sample.json\",\n                \"namespace\": {\n                  \"_reference\": true,\n                  \"name\": \"namespace\"\n                }\n              }\n            },\n            \"webhook\": {\n              \"_reference\": true,\n              \"name\": \"Sample | Send model\"\n            }\n    }\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/flow.rb",
    "groupTitle": "Flow",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/flow/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setup/flow",
    "title": "List",
    "description": "<p>Returns a list of flow you've previously created. The flow are returned in sorted order, with the most recent flow appearing first.</p> ",
    "name": "list",
    "group": "Flow",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the flows.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the flows.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "active",
            "description": "<p>Status of the flow.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "last_trigger_timestamps",
            "description": "<p>Last trigger timestamps</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Event</p> ",
            "optional": false,
            "field": "event",
            "description": "<p>Event trigger the flow.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Translator</p> ",
            "optional": false,
            "field": "translator",
            "description": "<p>Translator to build request to get, post or convert.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Translator</p> ",
            "optional": false,
            "field": "response_translator",
            "description": "<p>Translator to process response.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Data_type</p> ",
            "optional": false,
            "field": "custom_data_type",
            "description": "<p>Custom data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Data_type</p> ",
            "optional": false,
            "field": "source_data_type",
            "description": "<p>Source data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Data_type</p> ",
            "optional": false,
            "field": "target_data_type",
            "description": "<p>Target data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Webhook</p> ",
            "optional": false,
            "field": "webhook",
            "description": "<p>Webhook to send or receive data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Connection_rol</p> ",
            "optional": false,
            "field": "connection_rol",
            "description": "<p>Connection rol to send or receive data.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\" https://cenit.io/api/v1/setup/flow",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"flow\"\n* Cenit::Client.list(model)",
        "type": "json"
      },
      {
        "title": "Sample Data:",
        "content": "[\n    {\n        \"flow\": {\n            \"id\": \"1\",\n            \"name\": \"Sample flow\",\n            \"active\": true,\n            \"data_type_scope\": \"Event source\",\n            \"last_trigger_timestamps\": \"2015-05-29 13:15:49 UTC\",\n            \"event\": {\n              \"_reference\": true,\n              \"name\": \"namespace | Sample on updated_at\"\n            },\n            \"translator\": {\n              \"_reference\": true,\n              \"name\": \"Sample translator\"\n            },\n            \"custom_data_type\": {\n              \"_reference\": true,\n              \"name\": \"Sample\",\n              \"schema\": {\n                \"_reference\": true,\n                \"uri\": \"sample.json\",\n                \"namespace\": {\n                  \"_reference\": true,\n                  \"name\": \"namespace\"\n                }\n              }\n            },\n            \"webhook\": {\n              \"_reference\": true,\n              \"name\": \"Sample | Send model\"\n            }\n        }\n    },\n    {\n        \"flow\": {\n            \"id\": \"2\",\n            \"name\": \"Sample flow 2\",\n            \"active\": true,\n            \"data_type_scope\": \"Event source\",\n            \"last_trigger_timestamps\": \"2015-05-29 13:15:49 UTC\",\n            \"event\": {\n              \"_reference\": true,\n              \"name\": \"namespace | Sample on create_at\"\n            },\n            \"translator\": {\n              \"_reference\": true,\n              \"name\": \"Sample translator\"\n            },\n            \"custom_data_type\": {\n              \"_reference\": true,\n              \"name\": \"Sample\",\n              \"schema\": {\n                \"_reference\": true,\n                \"uri\": \"sample.json\",\n                \"namespace\": {\n                  \"_reference\": true,\n                  \"name\": \"namespace\"\n                }\n              }\n            },\n            \"webhook\": {\n              \"_reference\": true,\n              \"name\": \"Sample | Send model\"\n            }\n        }\n    }\n]",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/flow.rb",
    "groupTitle": "Flow",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/flow"
      }
    ]
  },
  {
    "type": "post",
    "url": "/push",
    "title": "Push",
    "name": "push",
    "group": "Flow",
    "description": "<p>Updates the specified flow by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParserError",
            "description": "<p>The <code>json</code> of the flow parser error.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidatorError",
            "description": "<p>The <code>json</code> of the flow validation error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "ParserError-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"JSON parser error\", \"code\": 500 }",
          "type": "json"
        },
        {
          "title": "ValidatorError-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"JSON validator error\", \"code\": 500 }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the flows.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the flows.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "active",
            "description": "<p>Status of the flow.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Datetime</p> ",
            "optional": false,
            "field": "last_trigger_timestamps",
            "description": "<p>Last trigger timestamps</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Event</p> ",
            "optional": false,
            "field": "event",
            "description": "<p>Event trigger the flow.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Translator</p> ",
            "optional": false,
            "field": "translator",
            "description": "<p>Translator to build request to get, post or convert.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Translator</p> ",
            "optional": false,
            "field": "response_translator",
            "description": "<p>Translator to process response.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Data_type</p> ",
            "optional": false,
            "field": "custom_data_type",
            "description": "<p>Custom data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Data_type</p> ",
            "optional": false,
            "field": "source_data_type",
            "description": "<p>Source data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Data_type</p> ",
            "optional": false,
            "field": "target_data_type",
            "description": "<p>Target data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Webhook</p> ",
            "optional": false,
            "field": "webhook",
            "description": "<p>Webhook to send or receive data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Connection_rol</p> ",
            "optional": false,
            "field": "connection_rol",
            "description": "<p>Connection rol to send or receive data.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "template_parameters",
            "description": "<p>Template Parameters.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\": \"success\", \"message\": { \"flows\": [{\"id\": \"1\"}]}}",
          "type": "json"
        },
        {
          "title": "Sample Data:",
          "content": "{\n        \"flow\": {\n            \"id\": \"1\",\n            \"name\": \"Sample flow\",\n            \"active\": true,\n            \"data_type_scope\": \"Event source\",\n            \"last_trigger_timestamps\": \"2015-05-29 13:15:49 UTC\",\n            \"event\": {\n              \"_reference\": true,\n              \"name\": \"namespace | Sample on updated_at\"\n            },\n            \"translator\": {\n              \"_reference\": true,\n              \"name\": \"Sample translator\"\n            },\n            \"custom_data_type\": {\n              \"_reference\": true,\n              \"name\": \"Sample\",\n              \"schema\": {\n                \"_reference\": true,\n                \"uri\": \"sample.json\",\n                \"namespace\": {\n                  \"_reference\": true,\n                  \"name\": \"namespace\"\n                }\n              }\n            },\n            \"webhook\": {\n              \"_reference\": true,\n              \"name\": \"Sample | Send model\"\n            }\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api_def/setup/flow.rb",
    "groupTitle": "Flow",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/push"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/setup/namespace/:id",
    "title": "Delete",
    "name": "delete",
    "description": "<p>Permanently deletes a namespace. It cannot be undone.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "namespaceNotFound",
            "description": "<p>The <code>id</code> of the namespace was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"Item not found\" }",
          "type": "json"
        }
      ]
    },
    "group": "namespace",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>namespaces unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the namespaces.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\": \"success\", \"message\": { \"namespace\": [{\"id\": \"1\"}]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api_def/setup/namespace.rb",
    "groupTitle": "namespace",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/namespace/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setup/namespace/:id",
    "title": "Get",
    "name": "get",
    "group": "namespace",
    "description": "<p>Retrieves the details of an existing namespace. You need only supply the unique namespace identifier that was returned upon namespace creation.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "namespaceNotFound",
            "description": "<p>The <code>id</code> of the namespace was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"Item not found\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>namespaces unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the namespaces.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the namespaces.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>API and schema reference.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\" https://cenit.io/api/v1/setup/namespace/1",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"namespace\"\n* id = \"556370a143454e22a1b10000\")\n* Cenit::Client.show(model,id)",
        "type": "json"
      },
      {
        "title": "Sample Data",
        "content": "{\n    \"namespace\": {\n            \"id\": \"1\",\n            \"name\": \"My namespace\",\n            \"slug\": \"my_namespace\"\n    }\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/namespace.rb",
    "groupTitle": "namespace",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/namespace/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setup/namespace",
    "title": "List",
    "description": "<p>Returns a list of namespace you've previously created. The namespace are returned in sorted order, with the most recent namespace appearing first.</p> ",
    "name": "list",
    "group": "namespace",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the namespaces.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the namespaces.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>API and schema reference.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\" https://cenit.io/api/v1/setup/namespace",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"namespace\"\n* Cenit::Client.list(model)",
        "type": "json"
      },
      {
        "title": "Sample Data:",
        "content": "[\n  {\n    \"namespace\": {\n            \"id\": \"1\",\n            \"name\": \"My namespace\",\n            \"slug\": \"my_namespace\"\n    }\n  },\n  {\n    \"namespace\": {\n            \"id\": \"2\",\n            \"name\": \"My namespace 2\",\n            \"slug\": \"my_namespace_2\"\n    }\n  }\n]",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/namespace.rb",
    "groupTitle": "namespace",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/namespace"
      }
    ]
  },
  {
    "type": "post",
    "url": "/push",
    "title": "Push",
    "name": "push",
    "group": "namespace",
    "description": "<p>Updates the specified namespace by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParserError",
            "description": "<p>The <code>json</code> of the namespace parser error.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidatorError",
            "description": "<p>The <code>json</code> of the namespace validation error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "ParserError-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"JSON parser error\", \"code\": 500 }",
          "type": "json"
        },
        {
          "title": "ValidatorError-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"JSON validator error\", \"code\": 500 }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the namespaces.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the namespaces.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>API and schema reference.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\": \"success\", \"message\": { \"namespace\": [{\"id\": \"1\"}]}}",
          "type": "json"
        },
        {
          "title": "Sample Data:",
          "content": "{\n    \"namespace\": {\n            \"id\": \"2\",\n            \"name\": \"My namespace 2\",\n            \"slug\": \"my_namespace_2\"\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api_def/setup/namespace.rb",
    "groupTitle": "namespace",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/push"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/setup/Schema/:id",
    "title": "Delete",
    "name": "delete",
    "description": "<p>Permanently deletes a Schema. It cannot be undone.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ShemaNotFound",
            "description": "<p>The <code>id</code> of the Schema was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"Item not found\" }",
          "type": "json"
        }
      ]
    },
    "group": "Schema",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Schemas unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Schemas.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\": \"success\", \"message\": { \"Schemas\": [{\"id\": \"1\"}]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api_def/setup/schema.rb",
    "groupTitle": "Schema",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/Schema/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setup/Schema/:id",
    "title": "Get",
    "name": "get",
    "group": "Schema",
    "description": "<p>Retrieves the details of an existing Schema. You need only supply the unique Schema identifier that was returned upon Schema creation.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SchemaNotFound",
            "description": "<p>The <code>id</code> of the Schema was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"Item not found\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Schemas unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Schemas.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>URI of the Schemas.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schema",
            "description": "<p>JSON or XML Schema of Data Type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>namespace</p> ",
            "optional": false,
            "field": "namespace",
            "description": "<p>namespace reference.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "data_types",
            "description": "<p>Data Type reference Array.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\" https://cenit.io/api/v1/setup/schema/1",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"schema\"\n* id = \"556370a143454e22a1b10000\")\n* Cenit::Client.show(model,id)",
        "type": "json"
      },
      {
        "title": "Sample Data",
        "content": "{\n  \"id\": \"55a5246543454e1d18010000\",\n  \"uri\": \"message.json\",\n  \"schema\": \"{\\r\\n  \\\"title\\\": \\\"Message\\\",\\r\\n  \\\"type\\\": \\\"object\\\",\\r\\n  \\\"properties\\\": {\\r\\n    \\\"text\\\": {\\r\\n      \\\"type\\\": \\\"string\\\"\\r\\n    }\\r\\n  }\\r\\n}\",\n  \"namespace\": {\n    \"_reference\": true,\n    \"id\": \"555f591b43454e0e4b690000\",\n    \"slug\": \"communication\"\n  },\n  \"data_types\": [\n    {\n      \"id\": \"55a5246543454e1d18020000\",\n      \"slug\": \"message\",\n      \"title\": \"Message\",\n      \"name\": \"message.json\",\n      \"_type\": \"Setup::DataType\",\n      \"model_schema\": \"{\\\"title\\\":\\\"Message\\\",\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"text\\\":{\\\"type\\\":\\\"string\\\"}}}\"\n    }\n  ]\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/schema.rb",
    "groupTitle": "Schema",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/Schema/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setup/Schema",
    "title": "List",
    "description": "<p>Returns a list of Schema you've previously created. The Schema are returned in sorted order, with the most recent Schema appearing first.</p> ",
    "name": "list",
    "group": "Schema",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Schemas unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Schemas.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>URI of the Schemas.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schema",
            "description": "<p>JSON or XML Schema of Data Type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>namespace</p> ",
            "optional": false,
            "field": "namespace",
            "description": "<p>namespace reference.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "data_types",
            "description": "<p>Data Type reference Array.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\" https://cenit.io/api/v1/setup/Schema",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"Schema\"\n* Cenit::Client.list(model)",
        "type": "json"
      },
      {
        "title": "Sample Data:",
        "content": "[\n{\n  \"id\": \"55a5246543454e1d18010000\",\n  \"uri\": \"message.json\",\n  \"schema\": \"{\\r\\n  \\\"title\\\": \\\"Message\\\",\\r\\n  \\\"type\\\": \\\"object\\\",\\r\\n  \\\"properties\\\": {\\r\\n    \\\"text\\\": {\\r\\n      \\\"type\\\": \\\"string\\\"\\r\\n    }\\r\\n  }\\r\\n}\",\n  \"namespace\": {\n    \"_reference\": true,\n    \"id\": \"555f591b43454e0e4b690000\",\n    \"slug\": \"communication\"\n  },\n  \"data_types\": [\n    {\n      \"id\": \"55a5246543454e1d18020000\",\n      \"slug\": \"message\",\n      \"title\": \"Message\",\n      \"name\": \"message.json\",\n      \"_type\": \"Setup::DataType\",\n      \"model_schema\": \"{\\\"title\\\":\\\"Message\\\",\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"text\\\":{\\\"type\\\":\\\"string\\\"}}}\"\n    }\n  ]\n},\n{\n  \"id\": \"55a03aef43454e0b44040000\",\n  \"uri\": \"tweet.json\",\n  \"schema\": \"{\\r\\n  \\\"title\\\": \\\"Tweet\\\",\\r\\n  \\\"type\\\": \\\"object\\\",\\r\\n  \\\"properties\\\": {\\r\\n    \\\"tweet_id\\\": {\\\"type\\\": \\\"integer\\\"},\\r\\n    \\\"status\\\": {\\\"type\\\": \\\"string\\\"}\\r\\n  }\\r\\n}\",\n  \"namespace\": {\n    \"_reference\": true,\n    \"id\": \"558975e743454e120b000000\",\n    \"slug\": \"twitter\"\n  },\n  \"data_types\": [\n    {\n      \"id\": \"55a03aef43454e0b44050000\",\n      \"slug\": \"tweet\",\n      \"title\": \"Tweet\",\n      \"name\": \"tweet.json\",\n      \"show_navigation_link\": true,\n      \"_type\": \"Setup::DataType\",\n      \"model_schema\": \"{\\\"title\\\":\\\"Tweet\\\",\\\"type\\\":\\\"object\\\",\\\"properties\\\":{\\\"tweet_id\\\":{\\\"type\\\":\\\"integer\\\"},\\\"status\\\":{\\\"type\\\":\\\"string\\\"}}}\",\n      \"events\": [\n        {\n          \"_reference\": true,\n          \"id\": \"55a03b4e43454e0b44080000\",\n          \"name\": \"Twitter | Tweet on created_at\"\n        }\n      ]\n    }\n  ]\n}\n]",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/schema.rb",
    "groupTitle": "Schema",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/Schema"
      }
    ]
  },
  {
    "type": "post",
    "url": "/setup/push",
    "title": "Push",
    "name": "push",
    "group": "Schema",
    "description": "<p>Updates the specified Schema by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParserError",
            "description": "<p>The <code>json</code> of the Schema parser error.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidatorError",
            "description": "<p>The <code>json</code> of the Schema validation error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "ParserError-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"JSON parser error\", \"code\": 500 }",
          "type": "json"
        },
        {
          "title": "ValidatorError-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"JSON validator error\", \"code\": 500 }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Schemas unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Schemas.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>URI of the Schemas.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schema",
            "description": "<p>JSON or XML Schema of Data Type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>namespace</p> ",
            "optional": false,
            "field": "namespace",
            "description": "<p>namespace reference.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "data_types",
            "description": "<p>Data Type reference Array.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\": \"success\", \"message\": { \"Schemas\": [{\"id\": \"1\"}]}}",
          "type": "json"
        },
        {
          "title": "Sample Data:",
          "content": "{\n    \"Schema\": {\n      \"uri\": \"message.json\",\n      \"schema\": \"{\\r\\n  \\\"title\\\": \\\"Message\\\",\\r\\n  \\\"type\\\": \\\"object\\\",\\r\\n  \\\"properties\\\": {\\r\\n    \\\"text\\\": {\\r\\n      \\\"type\\\": \\\"string\\\"\\r\\n    }\\r\\n  }\\r\\n}\",\n      \"namespace\": {\n        \"_reference\": true,\n        \"slug\": \"communication\"\n      }\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api_def/setup/schema.rb",
    "groupTitle": "Schema",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/push"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/setup/translator/:id",
    "title": "Delete",
    "name": "delete",
    "description": "<p>Permanently deletes a translator. It cannot be undone.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "translatorNotFound",
            "description": "<p>The <code>id</code> of the translator was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"Item not found\" }",
          "type": "json"
        }
      ]
    },
    "group": "Translator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>translators unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the translators.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\": \"success\", \"message\": { \"translators\": [{\"id\": \"1\"}]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api_def/setup/translator.rb",
    "groupTitle": "Translator",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/translator/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setup/translator/:id",
    "title": "Get",
    "name": "get",
    "group": "Translator",
    "description": "<p>Retrieves the details of an existing translator. You need only supply the unique translator identifier that was returned upon translator creation.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "translatorNotFound",
            "description": "<p>The <code>id</code> of the translator was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"Item not found\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Translators unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the translators.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the translators.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ENUM</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>Type of translator. List of value [Import, Export, Convert, Update]</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ENUM</p> ",
            "optional": false,
            "field": "Style",
            "description": "<p>Style of translator. List of value [Ruby, Liquid, xslt, json.rabl, etc]</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Data_type</p> ",
            "optional": false,
            "field": "custom_data_type",
            "description": "<p>Custom data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Data_type</p> ",
            "optional": false,
            "field": "source_data_type",
            "description": "<p>Source data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Data_type</p> ",
            "optional": false,
            "field": "target_data_type",
            "description": "<p>Target data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transformation",
            "description": "<p>Transformation definition.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\" https://cenit.io/api/v1/setup/translator/1",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"translator\"\n* id = \"1\")\n* Cenit::Client.show(model,id)",
        "type": "json"
      },
      {
        "title": "Sample Data",
        "content": "{\n  \"translator\": {\n               \"id\": \"1\",\n               \"name\": \"Sample Importer\",\n               \"type\": \"Import\",\n               \"style\": \"ruby\",\n               \"transformation\": \"puts \"Hello World\"\n  }\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/translator.rb",
    "groupTitle": "Translator",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/translator/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setup/translator",
    "title": "List",
    "description": "<p>Returns a list of translator you've previously created. The translator are returned in sorted order, with the most recent translator appearing first.</p> ",
    "name": "list",
    "group": "Translator",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the translators.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the translators.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ENUM</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>Type of translator. List of value [Import, Export, Convert, Update]</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ENUM</p> ",
            "optional": false,
            "field": "Style",
            "description": "<p>Style of translator. List of value [Ruby, Liquid, xslt, json.rabl, etc]</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Data_type</p> ",
            "optional": false,
            "field": "custom_data_type",
            "description": "<p>Custom data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Data_type</p> ",
            "optional": false,
            "field": "source_data_type",
            "description": "<p>Source data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Data_type</p> ",
            "optional": false,
            "field": "target_data_type",
            "description": "<p>Target data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transformation",
            "description": "<p>Transformation definition.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\" https://cenit.io/api/v1/setup/translator",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"translator\"\n* Cenit::Client.list(model)",
        "type": "json"
      },
      {
        "title": "Sample Data:",
        "content": "[\n    {\n        \"translator\": {\n                  \"id\": \"1\",\n                  \"name\": \"Sample Importer\",\n                  \"type\": \"Import\",\n                  \"style\": \"ruby\",\n                  \"transformation\": \"puts \"Hello World\"\n        }\n    },\n    {\n        \"translator\": {\n                  \"id\": \"2\",\n                  \"name\": \"Sample Export\",\n                  \"type\": \"Export\",\n                  \"style\": \"ruby\",\n                  \"transformation\": \"puts \"Hello World\"\n        }\n    }\n]",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/translator.rb",
    "groupTitle": "Translator",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/translator"
      }
    ]
  },
  {
    "type": "post",
    "url": "/push",
    "title": "Push",
    "name": "push",
    "group": "Translator",
    "description": "<p>Updates the specified translator by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParserError",
            "description": "<p>The <code>json</code> of the translator parser error.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidatorError",
            "description": "<p>The <code>json</code> of the translator validation error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "ParserError-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"JSON parser error\", \"code\": 500 }",
          "type": "json"
        },
        {
          "title": "ValidatorError-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"JSON validator error\", \"code\": 500 }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the translators.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the translators.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ENUM</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>Type of translator. List of value [Import, Export, Convert, Update]</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ENUM</p> ",
            "optional": false,
            "field": "Style",
            "description": "<p>Style of translator. List of value [Ruby, Liquid, xslt, json.rabl, etc]</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Data_type</p> ",
            "optional": false,
            "field": "custom_data_type",
            "description": "<p>Custom data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Data_type</p> ",
            "optional": false,
            "field": "source_data_type",
            "description": "<p>Source data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Data_type</p> ",
            "optional": false,
            "field": "target_data_type",
            "description": "<p>Target data type.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transformation",
            "description": "<p>Transformation definition.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\": \"success\", \"message\": { \"translators\": [{\"id\": \"1\"}]}}",
          "type": "json"
        },
        {
          "title": "Sample Data:",
          "content": "{\n        \"translator\": {\n                  \"id\": \"1\",\n                  \"name\": \"JSON Importer\",\n                  \"type\": \"Import\",\n                  \"style\": \"ruby\",\n                  \"transformation\": \"puts \"Hello World\"\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api_def/setup/translator.rb",
    "groupTitle": "Translator",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/push"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/setup/webhook/:id",
    "title": "Delete",
    "name": "delete",
    "description": "<p>Permanently deletes a webhook. It cannot be undone.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WebhookNotFound",
            "description": "<p>The <code>id</code> of the webhook was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"Item not found\" }",
          "type": "json"
        }
      ]
    },
    "group": "Webhook",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Webhooks unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the webhooks.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\": \"success\", \"message\": { \"webhooks\": [{\"id\": \"1\"}]}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api_def/setup/webhook.rb",
    "groupTitle": "Webhook",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/webhook/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setup/webhook/:id",
    "title": "Get",
    "name": "get",
    "group": "Webhook",
    "description": "<p>Retrieves the details of an existing webhook. You need only supply the unique webhook identifier that was returned upon webhook creation.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "WebhookNotFound",
            "description": "<p>The <code>id</code> of the Webhook was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"Item not found\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Webhooks unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Webhooks.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Webhooks.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Path of the Endpoint.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "parameters",
            "description": "<p>URL parameters.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "headers",
            "description": "<p>Headers parameters.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "template_parameters",
            "description": "<p>Template Parameters.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\" https://cenit.io/api/v1/setup/webhook/1",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"webhook\"\n* id = \"1\")\n* Cenit::Client.show(model,id)",
        "type": "json"
      },
      {
        "title": "Sample Data",
        "content": "{\n    \"webhook\": {\n            \"id\": \"1\",\n            \"name\": \"My webhook\",\n            \"path\": \"get.json\",\n            \"parameters\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Parameters key\",\n                    \"value\": \"Parameters value\"\n                }\n            ],\n            \"headers\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Header key\",\n                    \"value\": \"Header value\"\n                }\n            ],\n            \"template_parameters\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Template key\",\n                    \"value\": \"Template value\"\n                }\n            ]\n        }\n    }\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/webhook.rb",
    "groupTitle": "Webhook",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/webhook/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setup/webhook",
    "title": "List",
    "description": "<p>Returns a list of webhook you've previously created. The webhook are returned in sorted order, with the most recent webhook appearing first.</p> ",
    "name": "list",
    "group": "Webhook",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Webhooks.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Webhooks.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Path of the Endpoint.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "parameters",
            "description": "<p>URL parameters.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "headers",
            "description": "<p>Headers parameters.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "template_parameters",
            "description": "<p>Template Parameters.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example curl:",
        "content": "* curl -H \"X-User-Access-Key: N63563526\" -H \"X-User-Access-Token: TYQTWY454521QQ12\" https://cenit.io/api/v1/setup/webhook",
        "type": "json"
      },
      {
        "title": "Example Ruby:",
        "content": "* model = \"webhook\"\n* Cenit::Client.list(model)",
        "type": "json"
      },
      {
        "title": "Sample Data:",
        "content": "[\n    {\n        \"webhook\": {\n            \"id\": \"1\",\n            \"name\": \"My Webhook\",\n            \"path\": \"get.json\",\n            \"parameters\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Parameters key\",\n                    \"value\": \"Parameters value\"\n                }\n            ],\n            \"headers\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Header key\",\n                    \"value\": \"Header value\"\n                }\n            ],\n            \"template_parameters\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Template key\",\n                    \"value\": \"Template value\"\n                }\n            ]\n        }\n    },\n        \"webhook\": {\n            \"id\": \"2\",\n            \"name\": \"My Webhook 2\",\n            \"path\": \"send.json\",\n            \"parameters\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Parameters key\",\n                    \"value\": \"Parameters value\"\n                }\n            ],\n            \"headers\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Header key\",\n                    \"value\": \"Header value\"\n                }\n            ],\n            \"template_parameters\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Template key\",\n                    \"value\": \"Template value\"\n                }\n            ]\n        }\n]",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "api_def/setup/webhook.rb",
    "groupTitle": "Webhook",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/webhook"
      }
    ]
  },
  {
    "type": "post",
    "url": "/push",
    "title": "Push",
    "name": "push",
    "group": "Webhook",
    "description": "<p>Updates the specified webhook by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p> ",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParserError",
            "description": "<p>The <code>json</code> of the webhook parser error.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidatorError",
            "description": "<p>The <code>json</code> of the webhook validation error.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "ParserError-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"JSON parser error\", \"code\": 500 }",
          "type": "json"
        },
        {
          "title": "ValidatorError-Response:",
          "content": "{ \"status\": \"Error\", \"message\": \"JSON validator error\", \"code\": 500 }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the webhooks.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the webhooks.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Path of the Endpoint.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "parameters",
            "description": "<p>URL parameters.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "headers",
            "description": "<p>Headers parameters.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "template_parameters",
            "description": "<p>Template Parameters.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"status\": \"success\", \"message\": { \"webhooks\": [{\"id\": \"1\"}]}}",
          "type": "json"
        },
        {
          "title": "Sample Data:",
          "content": "{\n        \"webhook\": {\n            \"id\": \"1\",\n            \"name\": \"My Webhook\",\n            \"path\": \"send.json\",\n            \"parameters\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Parameters key\",\n                    \"value\": \"Parameters value\"\n                }\n            ],\n            \"headers\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Header key\",\n                    \"value\": \"Header value\"\n                }\n            ],\n            \"template_parameters\": [\n                {\n                    \"id\": \"1\",\n                    \"key\": \"Template key\",\n                    \"value\": \"Template value\"\n                }\n            ]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api_def/setup/webhook.rb",
    "groupTitle": "Webhook",
    "sampleRequest": [
      {
        "url": "https://cenit.io/api/v1/setup/push"
      }
    ]
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "api_def/api_doc/main.js",
    "group": "_home_asnioby_cenit_api_def_api_doc_main_js",
    "groupTitle": "_home_asnioby_cenit_api_def_api_doc_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "api_def/doc/main.js",
    "group": "_home_asnioby_cenit_api_def_doc_main_js",
    "groupTitle": "_home_asnioby_cenit_api_def_doc_main_js",
    "name": ""
  }
] });
