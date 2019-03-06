import cdk = require('@aws-cdk/cdk');
import lambda = require('@aws-cdk/aws-lambda');
import apigw = require('@aws-cdk/aws-apigateway')
import { LambdaRestApi } from '@aws-cdk/aws-apigateway';

export class CdkworkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NodeJS810,
      code: lambda.Code.asset('lambda'),
      handler: 'hello.handler'
    });
    new apigw.LambdaRestApi(this, 'HelloLambda', {
      handler: hello
    });

  }
}
