var apiUrl = 'https://api-ropsten.etherscan.io/api?module=account&action=tokentx&contractaddress=0xbC6fAAA6Ad987310CCc48B875C9Df95621368748&page=1&offset=100&sort=asc&apikey='YOUR API KEY HERE;
fetch(apiUrl).then(response => {
  return response.json();
}).then(data => {
  // Loop to populate data from JSON
  for(var i = 0; i<data.result.length;i++){
    var bNumb = data.result[i].blockNumber;
    var timeStamp = data.result[i].timeStamp;
    var sender = data.result[i].from;
    var receiver = data.result[i].to;
    var hash = data.result[i].hash;
    var nonce = data.result[i].nonce;
    var value = data.result[i].value/100000000; // Dividing by 1e8 since contract has 8 decimals
    var conf = data.result[i].confirmations;
    var name = data.result[i].tokenName;
    var symbol = data.result[i].tokenSymbol;

    // Converting timestamp into date
    var date = new Date(timeStamp*1000);
    var timeStamp = (date.getDate()+
      "/"+(date.getMonth()+1)+
      "/"+date.getFullYear()+
      " "+date.getHours()+
      ":"+date.getMinutes()+
      ":"+date.getSeconds());

    document.getElementById('txns').innerHTML+='<div class="trxnBlock border-gradient border-gradient-purple"><h2>✅ '+value+' MOMOs</h2>From: <b> '+sender+' </b>&nbsp;&nbsp;To: <b> '+receiver+' </b>&nbsp;&nbsp;Timestamp: <b> '+timeStamp+' </b><br>Block Number: <b> '+bNumb+' </b>&nbsp;&nbsp;Hash: <b> '+hash+' </b>&nbsp;&nbsp;Nonce: <b> '+nonce+' </b>&nbsp;&nbsp;Confirmations: <b> '+conf+' </b>&nbsp;&nbsp;Token Name: <b> '+name+' </b>&nbsp;&nbsp;Token Symbol: <b> '+symbol+' </b>&nbsp;&nbsp;</div>';

  }
  document.getElementById('txns').innerHTML+="<br><br><br>"
}).catch(err => {
  console.error("Oops its an ERROR! >> "+err);
});
