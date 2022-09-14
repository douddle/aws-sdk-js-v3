// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeMovingAddressesRequest,
  DescribeMovingAddressesRequestFilterSensitiveLog,
  DescribeMovingAddressesResult,
  DescribeMovingAddressesResultFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_ec2DescribeMovingAddressesCommand,
  serializeAws_ec2DescribeMovingAddressesCommand,
} from "../protocols/Aws_ec2";

export interface DescribeMovingAddressesCommandInput extends DescribeMovingAddressesRequest {}
export interface DescribeMovingAddressesCommandOutput extends DescribeMovingAddressesResult, __MetadataBearer {}

/**
 * <p>Describes your Elastic IP addresses that are being moved to the EC2-VPC platform, or that are being restored to the EC2-Classic platform. This request does not return information about any other Elastic IP addresses in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeMovingAddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeMovingAddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeMovingAddressesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMovingAddressesCommandInput} for command's `input` shape.
 * @see {@link DescribeMovingAddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeMovingAddressesCommand extends $Command<
  DescribeMovingAddressesCommandInput,
  DescribeMovingAddressesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeMovingAddressesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMovingAddressesCommandInput, DescribeMovingAddressesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeMovingAddressesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMovingAddressesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeMovingAddressesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeMovingAddressesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeMovingAddressesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMovingAddressesCommandOutput> {
    return deserializeAws_ec2DescribeMovingAddressesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
