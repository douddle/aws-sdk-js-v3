// smithy-typescript generated code
import { RuleSetObject } from "@aws-sdk/util-endpoints";

export const ruleSet: RuleSetObject = {
  version: "1.3",
  parameters: {
    UseFIPS: {
      builtIn: "AWS::UseFIPS",
      required: true,
      default: false,
      documentation:
        "When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",
      type: "Boolean",
    },
    Region: {
      builtIn: "AWS::Region",
      required: false,
      documentation: "The AWS region used to dispatch the request.",
      type: "String",
    },
    Endpoint: {
      builtIn: "SDK::Endpoint",
      required: false,
      documentation: "Override the endpoint used to send this request",
      type: "String",
    },
  },
  rules: [
    {
      conditions: [],
      type: "tree",
      rules: [
        {
          conditions: [
            {
              fn: "isSet",
              argv: [
                {
                  ref: "Endpoint",
                },
              ],
            },
          ],
          endpoint: {
            url: {
              ref: "Endpoint",
            },
            properties: {},
            headers: {},
          },
          type: "endpoint",
        },
        {
          conditions: [
            {
              fn: "not",
              argv: [
                {
                  fn: "isSet",
                  argv: [
                    {
                      ref: "Region",
                    },
                  ],
                },
              ],
            },
            {
              fn: "aws.partition",
              argv: ["us-west-2"],
              assign: "PartitionResult",
            },
          ],
          type: "tree",
          rules: [
            {
              conditions: [
                {
                  fn: "booleanEquals",
                  argv: [
                    {
                      ref: "UseFIPS",
                    },
                    true,
                  ],
                },
              ],
              type: "tree",
              rules: [
                {
                  conditions: [
                    {
                      fn: "booleanEquals",
                      argv: [
                        {
                          fn: "getAttr",
                          argv: [
                            {
                              ref: "PartitionResult",
                            },
                            "supportsFIPS",
                          ],
                        },
                        false,
                      ],
                    },
                  ],
                  error: "Partition does not support FIPS.",
                  type: "error",
                },
                {
                  conditions: [],
                  endpoint: {
                    url: "https://codecatalyst-fips.global.{PartitionResult#dualStackDnsSuffix}",
                    properties: {},
                    headers: {},
                  },
                  type: "endpoint",
                },
              ],
            },
            {
              conditions: [],
              endpoint: {
                url: "https://codecatalyst.global.{PartitionResult#dualStackDnsSuffix}",
                properties: {},
                headers: {},
              },
              type: "endpoint",
            },
          ],
        },
        {
          conditions: [
            {
              fn: "isSet",
              argv: [
                {
                  ref: "Region",
                },
              ],
            },
            {
              fn: "aws.partition",
              argv: [
                {
                  ref: "Region",
                },
              ],
              assign: "PartitionResult",
            },
          ],
          type: "tree",
          rules: [
            {
              conditions: [
                {
                  fn: "booleanEquals",
                  argv: [
                    {
                      ref: "UseFIPS",
                    },
                    true,
                  ],
                },
              ],
              type: "tree",
              rules: [
                {
                  conditions: [
                    {
                      fn: "booleanEquals",
                      argv: [
                        {
                          fn: "getAttr",
                          argv: [
                            {
                              ref: "PartitionResult",
                            },
                            "supportsFIPS",
                          ],
                        },
                        false,
                      ],
                    },
                  ],
                  error: "Partition does not support FIPS.",
                  type: "error",
                },
                {
                  conditions: [],
                  endpoint: {
                    url: "https://codecatalyst-fips.global.{PartitionResult#dualStackDnsSuffix}",
                    properties: {},
                    headers: {},
                  },
                  type: "endpoint",
                },
              ],
            },
            {
              conditions: [],
              endpoint: {
                url: "https://codecatalyst.global.{PartitionResult#dualStackDnsSuffix}",
                properties: {},
                headers: {},
              },
              type: "endpoint",
            },
          ],
        },
      ],
    },
  ],
};
