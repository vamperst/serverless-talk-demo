// url: "https://4brvhjsdyk.execute-api.us-east-1.amazonaws.com/dev/receivevote",

// $(document).ready(function(){
$('#red-button').click(function(){
  $.ajax({
    type: "POST",
    crossDomain: true,
    url: "https://4brvhjsdyk.execute-api.us-east-1.amazonaws.com/dev/receivevote",
    data: '{"Body": "RED"}',
    dataType: 'json',
    success: function(responseData, textStatus, jqXHR) {
      console.log(responseData);
      console.log(textStatus);
       swal("Obrigado pela Votação!", "Você escolheu vermelho!", "success");
     },
     error: function (responseData, textStatus, errorThrown) {
       alert('POST failed.');
     }
  });
});

$('#green-button').click(function(){
  $.ajax({
    type: "POST",
    crossDomain: true,
    url: "https://4brvhjsdyk.execute-api.us-east-1.amazonaws.com/dev/receivevote",
    data: '{"Body": "GREEN"}',
    dataType: 'json',
    success: function(responseData, textStatus, jqXHR) {
      console.log(responseData);
      console.log(textStatus);
      swal("Obrigado pela Votação!", "Você escolheu verde!", "success");
     },
     error: function (responseData, textStatus, errorThrown) {
       console.log(errorThrown)
       console.log(textStatus)
       console.log(responseData)
       alert('POST failed.');
     }
   });
});

$('#blue-button').click(function(){
  $.ajax({
    type: "POST",
    crossDomain: true,
    url: "https://4brvhjsdyk.execute-api.us-east-1.amazonaws.com/dev/receivevote",
    data: '{"Body": "BLUE"}',
    dataType: 'json',
    success: function(responseData, textStatus, jqXHR) {
      console.log(responseData);
      console.log(textStatus);
      swal("Obrigado pela Votação!", "Você escolheu azul!", "success");
     },
     error: function (responseData, textStatus, errorThrown) {
       alert('POST failed.');
     }
  });
});
