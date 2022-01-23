export type Mycalculatordapp = {
  "version": "0.0.0",
  "name": "mycalculatordapp",
  "instructions": [
    {
      "name": "create",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "initMessage",
          "type": "string"
        }
      ]
    },
    {
      "name": "add",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "num1",
          "type": "i64"
        },
        {
          "name": "num2",
          "type": "i64"
        }
      ]
    },
    {
      "name": "multiply",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "num1",
          "type": "i64"
        },
        {
          "name": "num2",
          "type": "i64"
        }
      ]
    },
    {
      "name": "subtract",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "num1",
          "type": "i64"
        },
        {
          "name": "num2",
          "type": "i64"
        }
      ]
    },
    {
      "name": "divide",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "num1",
          "type": "i64"
        },
        {
          "name": "num2",
          "type": "i64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "calculator",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "greeting",
            "type": "string"
          },
          {
            "name": "result",
            "type": "i64"
          },
          {
            "name": "remainder",
            "type": "i64"
          }
        ]
      }
    }
  ]
};

export const IDL: Mycalculatordapp = {
  "version": "0.0.0",
  "name": "mycalculatordapp",
  "instructions": [
    {
      "name": "create",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "initMessage",
          "type": "string"
        }
      ]
    },
    {
      "name": "add",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "num1",
          "type": "i64"
        },
        {
          "name": "num2",
          "type": "i64"
        }
      ]
    },
    {
      "name": "multiply",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "num1",
          "type": "i64"
        },
        {
          "name": "num2",
          "type": "i64"
        }
      ]
    },
    {
      "name": "subtract",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "num1",
          "type": "i64"
        },
        {
          "name": "num2",
          "type": "i64"
        }
      ]
    },
    {
      "name": "divide",
      "accounts": [
        {
          "name": "calculator",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "num1",
          "type": "i64"
        },
        {
          "name": "num2",
          "type": "i64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "calculator",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "greeting",
            "type": "string"
          },
          {
            "name": "result",
            "type": "i64"
          },
          {
            "name": "remainder",
            "type": "i64"
          }
        ]
      }
    }
  ]
};
