terraform {
  backend "s3" {
    bucket = "serverless-talk-state"
    key    = "fiap"
    region = "us-east-1"
  }
}