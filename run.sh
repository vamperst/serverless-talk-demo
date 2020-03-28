#!/bin/bash

aws s3 cp Front/dashboard/ s3://palestradashboard2/ --recursive
aws s3 cp Front/votes/ s3://palestravotes2/ --recursive