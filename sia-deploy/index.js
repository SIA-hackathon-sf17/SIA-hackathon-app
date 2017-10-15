// import "../stylesheets/app.css"



web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse(
'[{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"defect","type":"bytes32"}],"name":"addDefect2","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokensSold","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"voterDetails","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"},{"name":"votesInTokens","type":"uint256"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"airlineList","outputs":[{"name":"serialNo","type":"uint256"},{"name":"modelType","type":"bytes32"},{"name":"additionalInfo","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allCandidates","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getAirlineDetails","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"transferTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"defect","type":"bytes32"}],"name":"addDefect","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"buy","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voterInfo","outputs":[{"name":"voterAddress","type":"address"},{"name":"tokensBought","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"balanceTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"indexOfCandidate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allDefects","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"defectList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"serialNo","type":"uint256"},{"name":"modelType","type":"bytes32"},{"name":"additionalInfo","type":"bytes32"}],"name":"addAirline","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"tokens","type":"uint256"},{"name":"pricePerToken","type":"uint256"},{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]'
  );
VotingContract = web3.eth.contract(abi);
contractInstance = VotingContract.at('0x7c3c94da3f8c9cc362228ebcc125b881ec4628ce');
console.log(contractInstance.allCandidates.call);

// candidates = {"Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3"}

let candidates = {}

let tokenPrice = null;

let defectDataHeader = ['Seat Number', 'Name', 'Type', 'Info1', 'Info2', 'Info3'];
      let defectData = [
        ['3A', 'defect1', 'Tray Table Latch Broken', 'Not Fixed', 'There is a long, wide crack in the latch of the tray table. It is still able to hold up the tray table, however is very weak and should be fixed ASAP. ', 'additional info here'],
        ['4D', 'defect2', 'Reading Light Not Working', 'Not Fixed', 'The top/ceiling reading light is not working when the swich is pressed', 'additional info here'],
        ['6J', 'defect3', 'Seat Cushion Stained', 'Not Fixed', 'All the seat cushions are dirty due to a passenger vommitting on it. ', 'additional info here'],
        ['14B', 'defect4', 'Entertainment System Not Working', 'Not Fixed', 'Unable to turn on or power up entertainment system. ', 'additional info here'],
        ['14C', 'defect5', 'Foot Rest Broken', 'Not Fixed', 'The left hinge on the foot rest is broken, causing it to be slanted to one side', 'additional info here'],
        ['3A', 'defect1', 'Tray Table Latch Broken', 'Not Fixed', 'There is a long, wide crack in the latch of the tray table. It is still able to hold up the tray table, however is very weak and should be fixed ASAP. ', 'additional info here'],
        ['4D', 'defect2', 'Reading Light Not Working', 'Not Fixed', 'The top/ceiling reading light is not working when the swich is pressed', 'additional info here'],
        ['6J', 'defect3', 'Seat Cushion Stained', 'Not Fixed', 'All the seat cushions are dirty due to a passenger vommitting on it. ', 'additional info here'],
        ['14B', 'defect4', 'Entertainment System Not Working', 'Not Fixed', 'Unable to turn on or power up entertainment system. ', 'additional info here'],
        ['14C', 'defect5', 'Foot Rest Broken', 'Not Fixed', 'The left hinge on the foot rest is broken, causing it to be slanted to one side', 'additional info here'],
        ['3A', 'defect1', 'Tray Table Latch Broken', 'Not Fixed', 'There is a long, wide crack in the latch of the tray table. It is still able to hold up the tray table, however is very weak and should be fixed ASAP. ', 'additional info here'],
        ['4D', 'defect2', 'Reading Light Not Working', 'Not Fixed', 'The top/ceiling reading light is not working when the swich is pressed', 'additional info here'],
        ['6J', 'defect3', 'Seat Cushion Stained', 'Not Fixed', 'All the seat cushions are dirty due to a passenger vommitting on it. ', 'additional info here'],
        ['14B', 'defect4', 'Entertainment System Not Working', 'Not Fixed', 'Unable to turn on or power up entertainment system. ', 'additional info here'],
        ['14C', 'defect5', 'Foot Rest Broken', 'Not Fixed', 'The left hinge on the foot rest is broken, causing it to be slanted to one side', 'additional info here'], 
               
      ]

function voteForCandidate() {
  console.log('vote');
  let candidateName = $("#candidate").val();
  let voteTokens = $("#vote-tokens").val();
  $("#msg").html("Vote has been submitted. The vote count will increment as soon as the vote is recorded on the blockchain. Please wait.")
  $("#candidate").val("");
  $("#vote-tokens").val("");  

  contractInstance.voteForCandidate(candidateName, voteTokens, {gas: 140000, from: web3.eth.accounts[0]})//.then(function() {
    let div_id = candidates[candidateName];
    let v = contractInstance.totalVotesFor.call(candidateName)//.then(function(v) {
      $("#" + div_id).html(v.toString());
      $("#msg").html("");
    // });  
  // });
}

function buyTokens(){
  console.log('buy tokens');
  let tokensToBuy = $("#buy").val();
  let accountNumber = $("#buy-2").val();
  let price = tokensToBuy * tokenPrice;
  $("#buy-msg").html("Purchase order has been submitted. Please wait.");
  let v = contractInstance.buy({value:web3.toWei(price, 'ether'), from : accountNumber})//.then(function(v){
      $("#buy-msg").html("");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });    
  // })
  populateTokenData();
}

function lookupVoterInfo() {
  console.log('lookup');
  let address = $("#voter-info").val();
  let v = contractInstance.voterDetails.call(address)//.then(function(v) {
    $("#tokens-bought").html("Total Tokens bought: " + v[0].toString());
    let votesPerCandidate = v[1];
    $("#votes-cast").empty();
    $("#votes-cast").append("Votes cast per candidate: <br>"); 
    let allCandidates = Object.keys(candidates);
    for(let i=0; i < allCandidates.length; i++) {
      $("#votes-cast").append(allCandidates[i] + ": " + votesPerCandidate[i] + "<br>");
    }
  // })
}



function populateCandidates() {
  // Voting.deployed().then(function(contractInstance) {
    let candidateArray = contractInstance.allCandidates.call();
    console.log(candidateArray);
    // contractInstance.allCandidates.call().then(function(candidateArray) {
      for(let i=0; i < candidateArray.length; i++) {
        candidates[web3.toUtf8(candidateArray[i])] = "candidate-" + i;
      }
      console.log(candidates);
      setupCandidateRows();
      populateCandidateVotes();
      populateTokenData();
    // });
  // });
}
function populateCandidateVotes() {
  let candidateNames = Object.keys(candidates);
  for (var i = 0; i < candidateNames.length; i++) {
    let name = candidateNames[i];
    console.log(name);
    console.log(typeof name);
    // Voting.deployed().then(function(contractInstance) {
      let v = contractInstance.totalVotesFor.call(name)//.then(function(v) {
        $("#" + candidates[name]).html(v.toString());
      //});
    // });
  }
}
function setupCandidateRows() {
  Object.keys(candidates).forEach(function (candidate) { 
    // console.log(candidate);
    $("#candidate-rows").append("<tr><td>" + candidate + "</td><td id='" + candidates[candidate] + "'></td></tr>");
  });
}
function populateTokenData() {
  // Voting.deployed().then(function(contractInstance) {
    let v1 = contractInstance.totalTokens()//.then(function(v) {
      $("#tokens-total").html(v1.toString());
    //});
    let v2 = contractInstance.tokensSold.call()//.then(function(v) {
      $("#tokens-sold").html(v2.toString());
    // });
    let v3 = contractInstance.tokenPrice()//.then(function(v) {
      tokenPrice = parseFloat(web3.fromWei(v3.toString()));
      $("#token-cost").html(tokenPrice + " Ether");
    // });
    web3.eth.getBalance(contractInstance.address, function(error, result) {
      $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
    });
  // });
}
function populateAccounts(){
  let accountsArray = web3.eth.accounts;
  for(let i=0; i < accountsArray.length; i++){
    $("#account-rows").append("<tr><td>" + accountsArray[i] + "</td>");
  }
}

function addDefect() {
  console.log('add defect');
  let defect = $("#add-defect").val();
  console.log(defect);
  contractInstance.addDefect(defect, {gas: 140000, from: web3.eth.accounts[0]})
}

function addDefect2() {
  console.log('add defect 2');
  let defect = $("#add-defect").val();
  let id = parseInt($("#add-id").val());
  contractInstance.addDefect2(id, defect, {gas: 140000, from: web3.eth.accounts[0]})
}

function getDefectList(){
  let defectArray = contractInstance.allDefects.call();
  console.log(defectArray);
  for(let i=0; i < defectArray.length; i++){
    $("#defect-rows").append("<tr><td>" + web3.toUtf8(defectArray[i]) + "</td>");
  }  
}

function addAirline(){
  console.log('add airline');
  let sn = $("#add-airline-sn").val();
  let type = $("#add-airline-type").val();
  let info = $("#add-airline-info").val();
  contractInstance.addAirline(sn, type, info, {gas: 140000, from: web3.eth.accounts[0]})  
}

function getAirlineDetails(){
  let id = $("#get-airline-id").val();
  let v = contractInstance.getAirlineDetails.call(id)
  
  $("#display-airline-sn").html("Serial Number: " + v[0].toString());
  $("#display-airline-type").html("Model Type: " + web3.toUtf8(v[1]));
  $("#display-airline-info").html("Additional Info: " + web3.toUtf8(v[2]));
  let defectList = v[3];
  $("#defect-rows-airline").empty();
  for(var i=0; i<defectList.length; i++){
    $("#defect-rows-airline").append("<tr><td>" + web3.toUtf8(defectList[i]) + "</td>");    
  }
  // $("#display-airline-defects").html("Defects: " + (JSON.stringify(v[2])));


  // let votesPerCandidate = v[1];
  // $("#votes-cast").empty();
  // $("#votes-cast").append("Votes cast per candidate: <br>"); 
  // let allCandidates = Object.keys(candidates);
  // for(let i=0; i < allCandidates.length; i++) {
  //   $("#votes-cast").append(allCandidates[i] + ": " + votesPerCandidate[i] + "<br>");
  // }

}

function getDefectList2(){
    let str = '<tr>';
    for(let j=0; j<defectDataHeader.length; j++){
      if(j===0 || j=== 2)
        str +="<td>" + defectDataHeader[j] + "</td>"
    }
    str+='</tr>';
    $("#defect-list-header").append(str);

  for(let i=0; i < defectData.length; i++){
    let str = '<tr class="defectData' + i.toString() +'"s>';
    for(let j=0; j<defectData[i].length; j++){
      if(j===0 || j=== 2)      
        str +="<td><a>" + defectData[i][j] + "</a></td>"
    }
    str+='</tr>';
    $("#defect-rows-airline").append(str);
  }  
}


$(document).ready(function() {
  // candidateNames = Object.keys(candidates);
  // for (var i = 0; i < candidateNames.length; i++) {
  //   let name = candidateNames[i];
  //   let val = contractInstance.totalVotesFor.call(name).toString()
  //   $("#" + candidates[name]).html(val);
  // }

  // populateCandidates();
  // populateAccounts();
  getDefectList2();
});
