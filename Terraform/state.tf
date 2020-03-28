terraform {
  backend "s3" {
    bucket = "serverless-talk-state-3"
    key    = "aws"
    region = "us-east-1"
  }
}
