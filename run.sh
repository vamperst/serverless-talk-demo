#!/bin/bash

aws s3 cp Front/dashboard/ s3://palestradashboard/ --recursive
aws s3 cp Front/votes/ s3://palestravotes/ --recursive