resource "aws_dynamodb_table" "VoteAppAggregates" {
  name           = "VoteAppAggregates"
  read_capacity  = 5
  write_capacity = 5
  hash_key       = "VotedFor"

  attribute {
    name = "VotedFor"
    type = "S"
  }

  tags {
    Name        = "VoteAppAggregates"
    Environment = "palestra"
  }
}