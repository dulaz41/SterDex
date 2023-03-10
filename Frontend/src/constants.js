export const PRECISION = 1000000;
export const RE = /^[0-9]*[.]?[0-9]{0,6}$/;
export const blockchainUrl = "wss://rpc.shibuya.astar.network" //"ws://127.0.0.1:9944"; //wss://ws.jupiter-poa.patract.cn/
// Replace the below address with the address of the contract you deployed
export const CONTRACT_ADDRESS =
  "W3nrMpTkFVJ5GFMdUoR4z65KwebhGXahKnSp2dBk4QB3A6X";
  //W3nrMpTkFVJ5GFMdUoR4z65KwebhGXahKnSp2dBk4QB3A6X
// Replace the below abi with the abi of the contract you deployed
export const abi = {
  "source": {
    "hash": "0x08a26eb7c52501cd5e60bda832204fe90decd643355c17d03b3c5f36449b3156",
    "language": "ink! 3.4.0",
    "compiler": "rustc 1.69.0-nightly"
  },
  "contract": {
    "name": "amm",
    "version": "0.1.0",
    "authors": [
      "Abdulazeez abdulazeezsalihu41@gmail.com>"
    ]
  },
  "V3": {
    "spec": {
      "constructors": [
        {
          "args": [
            {
              "label": "_fees",
              "type": {
                "displayName": [
                  "Balance"
                ],
                "type": 0
              }
            }
          ],
          "docs": [
            "Constructs a new AMM instance",
            "@param _fees: valid interval -> [0,1000)"
          ],
          "label": "new",
          "payable": false,
          "selector": "0x9bae9d5e"
        }
      ],
      "docs": [],
      "events": [],
      "messages": [
        {
          "args": [
            {
              "label": "_amountToken1",
              "type": {
                "displayName": [
                  "Balance"
                ],
                "type": 0
              }
            },
            {
              "label": "_amountToken2",
              "type": {
                "displayName": [
                  "Balance"
                ],
                "type": 0
              }
            }
          ],
          "docs": [
            " Sends free token(s) to the invoker"
          ],
          "label": "faucet",
          "mutates": true,
          "payable": false,
          "returnType": null,
          "selector": "0x91bd0a53"
        },
        {
          "args": [],
          "docs": [
            " Returns the balance of the user"
          ],
          "label": "getMyHoldings",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [],
            "type": 6
          },
          "selector": "0x4646fd22"
        },
        {
          "args": [],
          "docs": [
            " Returns the amount of tokens locked in the pool,total shares issued & trading fee param"
          ],
          "label": "getPoolDetails",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [],
            "type": 7
          },
          "selector": "0xc1d33772"
        },
        {
          "args": [
            {
              "label": "_amountToken1",
              "type": {
                "displayName": [
                  "Balance"
                ],
                "type": 0
              }
            },
            {
              "label": "_amountToken2",
              "type": {
                "displayName": [
                  "Balance"
                ],
                "type": 0
              }
            }
          ],
          "docs": [
            " Adding new liquidity in the pool",
            " Returns the amount of share issued for locking given assets"
          ],
          "label": "provide",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "Result"
            ],
            "type": 8
          },
          "selector": "0x3f1420fd"
        },
        {
          "args": [
            {
              "label": "_amountToken2",
              "type": {
                "displayName": [
                  "Balance"
                ],
                "type": 0
              }
            }
          ],
          "docs": [
            " Returns amount of Token1 required when providing liquidity with _amountToken2 quantity of Token2"
          ],
          "label": "getEquivalentToken1Estimate",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "Result"
            ],
            "type": 8
          },
          "selector": "0x3814b1f7"
        },
        {
          "args": [
            {
              "label": "_amountToken1",
              "type": {
                "displayName": [
                  "Balance"
                ],
                "type": 0
              }
            }
          ],
          "docs": [
            " Returns amount of Token2 required when providing liquidity with _amountToken1 quantity of Token1"
          ],
          "label": "getEquivalentToken2Estimate",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "Result"
            ],
            "type": 8
          },
          "selector": "0x5a431238"
        },
        {
          "args": [
            {
              "label": "_share",
              "type": {
                "displayName": [
                  "Balance"
                ],
                "type": 0
              }
            }
          ],
          "docs": [
            " Returns the estimate of Token1 & Token2 that will be released on burning given _share"
          ],
          "label": "getWithdrawEstimate",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "Result"
            ],
            "type": 10
          },
          "selector": "0x4d684150"
        },
        {
          "args": [
            {
              "label": "_share",
              "type": {
                "displayName": [
                  "Balance"
                ],
                "type": 0
              }
            }
          ],
          "docs": [
            " Removes liquidity from the pool and releases corresponding Token1 & Token2 to the withdrawer"
          ],
          "label": "withdraw",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "Result"
            ],
            "type": 10
          },
          "selector": "0x410fcc9d"
        },
        {
          "args": [
            {
              "label": "_amountToken1",
              "type": {
                "displayName": [
                  "Balance"
                ],
                "type": 0
              }
            }
          ],
          "docs": [
            " Returns the amount of Token2 that the user will get when swapping a given amount of Token1 for Token2"
          ],
          "label": "getSwapToken1EstimateGivenToken1",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "Result"
            ],
            "type": 8
          },
          "selector": "0x6bc9f484"
        },
        {
          "args": [
            {
              "label": "_amountToken2",
              "type": {
                "displayName": [
                  "Balance"
                ],
                "type": 0
              }
            }
          ],
          "docs": [
            " Returns the amount of Token1 that the user should swap to get _amountToken2 in return"
          ],
          "label": "getSwapToken1EstimateGivenToken2",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "Result"
            ],
            "type": 8
          },
          "selector": "0x397bf950"
        },
        {
          "args": [
            {
              "label": "_amountToken1",
              "type": {
                "displayName": [
                  "Balance"
                ],
                "type": 0
              }
            },
            {
              "label": "_minToken2",
              "type": {
                "displayName": [
                  "Balance"
                ],
                "type": 0
              }
            }
          ],
          "docs": [
            " Swaps given amount of Token1 to Token2 using algorithmic price determination",
            " Swap fails if Token2 amount is less than _minToken2"
          ],
          "label": "swapToken1GivenToken1",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "Result"
            ],
            "type": 8
          },
          "selector": "0x8adf0584"
        }
      ]
    },
    "storage": {
      "struct": {
        "fields": [
          {
            "layout": {
              "cell": {
                "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
                "ty": 0
              }
            },
            "name": "totalShares"
          },
          {
            "layout": {
              "cell": {
                "key": "0x0100000000000000000000000000000000000000000000000000000000000000",
                "ty": 0
              }
            },
            "name": "totalToken1"
          },
          {
            "layout": {
              "cell": {
                "key": "0x0200000000000000000000000000000000000000000000000000000000000000",
                "ty": 0
              }
            },
            "name": "totalToken2"
          },
          {
            "layout": {
              "cell": {
                "key": "0x0300000000000000000000000000000000000000000000000000000000000000",
                "ty": 1
              }
            },
            "name": "shares"
          },
          {
            "layout": {
              "cell": {
                "key": "0x0400000000000000000000000000000000000000000000000000000000000000",
                "ty": 1
              }
            },
            "name": "token1Balance"
          },
          {
            "layout": {
              "cell": {
                "key": "0x0500000000000000000000000000000000000000000000000000000000000000",
                "ty": 1
              }
            },
            "name": "token2Balance"
          },
          {
            "layout": {
              "cell": {
                "key": "0x0600000000000000000000000000000000000000000000000000000000000000",
                "ty": 0
              }
            },
            "name": "fees"
          }
        ]
      }
    },
    "types": [
      {
        "id": 0,
        "type": {
          "def": {
            "primitive": "u128"
          }
        }
      },
      {
        "id": 1,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "name": "offset_key",
                  "type": 5,
                  "typeName": "Key"
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 2
            },
            {
              "name": "V",
              "type": 0
            }
          ],
          "path": [
            "ink_storage",
            "lazy",
            "mapping",
            "Mapping"
          ]
        }
      },
      {
        "id": 2,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 3,
                  "typeName": "[u8; 32]"
                }
              ]
            }
          },
          "path": [
            "ink_env",
            "types",
            "AccountId"
          ]
        }
      },
      {
        "id": 3,
        "type": {
          "def": {
            "array": {
              "len": 32,
              "type": 4
            }
          }
        }
      },
      {
        "id": 4,
        "type": {
          "def": {
            "primitive": "u8"
          }
        }
      },
      {
        "id": 5,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 3,
                  "typeName": "[u8; 32]"
                }
              ]
            }
          },
          "path": [
            "ink_primitives",
            "Key"
          ]
        }
      },
      {
        "id": 6,
        "type": {
          "def": {
            "tuple": [
              0,
              0,
              0
            ]
          }
        }
      },
      {
        "id": 7,
        "type": {
          "def": {
            "tuple": [
              0,
              0,
              0,
              0
            ]
          }
        }
      },
      {
        "id": 8,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 0
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 9
                    }
                  ],
                  "index": 1,
                  "name": "Err"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 0
            },
            {
              "name": "E",
              "type": 9
            }
          ],
          "path": [
            "Result"
          ]
        }
      },
      {
        "id": 9,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "ZeroLiquidity"
                },
                {
                  "index": 1,
                  "name": "ZeroAmount"
                },
                {
                  "index": 2,
                  "name": "InsufficientAmount"
                },
                {
                  "index": 3,
                  "name": "NonEquivalentValue"
                },
                {
                  "index": 4,
                  "name": "ThresholdNotReached"
                },
                {
                  "index": 5,
                  "name": "InvalidShare"
                },
                {
                  "index": 6,
                  "name": "InsufficientLiquidity"
                },
                {
                  "index": 7,
                  "name": "SlippageExceeded"
                }
              ]
            }
          },
          "path": [
            "amm",
            "amm",
            "Error"
          ]
        }
      },
      {
        "id": 10,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 11
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 9
                    }
                  ],
                  "index": 1,
                  "name": "Err"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 11
            },
            {
              "name": "E",
              "type": 9
            }
          ],
          "path": [
            "Result"
          ]
        }
      },
      {
        "id": 11,
        "type": {
          "def": {
            "tuple": [
              0,
              0
            ]
          }
        }
      }
    ]
  }
}