provider "aws" {
    region = "${var.region}"
}


resource "aws_s3_bucket" "dashboard" {
    bucket = "${var.bucket_dashboard}"
    acl = "public-read"
    policy = <<EOF
{
  "Id": "bucket_policy_dashboard",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "bucket_policy_dashboard_main",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::${var.bucket_dashboard}/*",
      "Principal": "*"
    }
  ]
}
EOF
    website {
        index_document = "index.html"
        error_document = "error.html"
    }
    tags = {
    }
    force_destroy = true
}


resource "aws_s3_bucket" "votes" {
    bucket = "${var.bucket_votes}"
    acl = "public-read"
    policy = <<EOF
{
  "Id": "bucket_policy_votes",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "bucket_policy_votes_main",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::${var.bucket_votes}/*",
      "Principal": "*"
    }
  ]
}
EOF
    website {
        index_document = "index.html"
        error_document = "error.html"
    }
    tags = {
    }
    force_destroy = true
}