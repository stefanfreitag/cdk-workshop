#!/usr/bin/env node
import cdk = require('@aws-cdk/cdk');
import { CdkworkshopStack } from '../lib/cdkworkshop-stack';

const app = new cdk.App();
new CdkworkshopStack(app, 'CdkworkshopStack');
app.run();
