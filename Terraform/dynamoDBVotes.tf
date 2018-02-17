resource "aws_dynamodb_table" "VoteApp" {
  name           = "VoteApp"
  read_capacity  = 5
  write_capacity = 5
  hash_key       = "VotedFor"
  stream_enabled = true
  stream_view_type = "NEW_IMAGE"

  attribute {
    name = "VotedFor"
    type = "S"
  }

  tags {
    Name        = "VoteApp"
    Environment = "palestra"
  }
}