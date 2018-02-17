output "dynamo_votes_arn" {
  value = "${aws_dynamodb_table.VoteApp.arn}"
}

output "dynamo_votes_stream_arn" {
  value = "${aws_dynamodb_table.VoteApp.stream_arn}"
}