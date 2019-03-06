import cdk = require('@aws-cdk/cdk');
import lambda = require('@aws-cdk/aws-lambda');

export class CdkworkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NodeJS810,
      code: lambda.Code.asset('lambda'),
      handler: 'hello.handler'
    });
  }
}
