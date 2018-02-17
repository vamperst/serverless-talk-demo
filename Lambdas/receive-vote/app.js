console.log('Loading event');
var AWS = require('aws-sdk');
var dynamodb = new AWS.DynamoDB();

exports.handler = function(event, context, callback) {
  var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10', region: 'us-east-1'});

  /* Make sure we have a valid vote (one of [RED, GREEN, BLUE]) */
  var votedFor = JSON.parse(event['body'])['Body']//.toUpperCase().trim();
  if (['RED', 'GREEN', 'BLUE'].indexOf(votedFor) >= 0) {
    /* Add randomness to our value to help spread across partitions */
    votedForHash = votedFor + "." + Math.floor((Math.random() * 10) + 1).toString();
    /* ...updateItem into our DynamoDB database */
    var tableName = 'VoteApp';
    dynamodb.updateItem({
      'TableName': tableName,
      'Key': { 'VotedFor' : { 'S': votedForHash }},
      'UpdateExpression': 'add #vote :x',
      'ExpressionAttributeNames': {'#vote' : 'Votes'},
      'ExpressionAttributeValues': { ':x' : { "N" : "1" } }
    }, function(err, data) {
      if (err) {
        console.log(err);
        context.fail(err);
      } else {
        // var resp = new twilio.TwimlResponse();
        // resp.message("Thank you for casting a vote for " + votedFor);
        // context.done(null, [resp.toString()]);
        console.log("Vote received for %s", votedFor);
      }
    });
  } else {
    console.log("Invalid vote received (%s)", votedFor);
    context.fail("Invalid vote received");
  }
  const result = {
    "isBase64Encoded": false,
    "statusCode": 200,
    "body":event['body'],
    "headers": {
      "Content-Type": "application/json",
      "X-Requested-With": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE",
      "Access-Control-Allow-Headers": "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept,Authorization, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    }
  };
  callback(null, result);
}
