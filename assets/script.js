
var config = {
	apiKey: "AIzaSyAAdDvuANzjekYZEBVCTyV_jyQfvljXitU",
	authDomain: "desafio-forlogic.firebaseapp.com",
	databaseURL: "https://desafio-forlogic.firebaseio.com",
	projectId: "desafio-forlogic",
	storageBucket: "desafio-forlogic.appspot.com",
	messagingSenderId: "1004966716729"
};
// Initialize Firebase
firebase.initializeApp(config);
var dbRef = firebase.database().ref();

//ref "tables"
clienteDb = dbRef.child("cliente");
//avalDb = dbRef.child("avaliacao");

//
clienteDb.once('value', snap => {
	var lc = document.getElementById("listaCliente");
	var lista = objectToArray(snap.val());

	lista.map((l) => {
		var temp = document.createElement("option");
		temp.value = l.key;	
		temp.innerText = l.nomeCli;
		lc.appendChild(temp);
	});

});

//cadastro cliente
function validaCli(){
	
	nomeCli = document.getElementById("nomeCliente").value;
	nomeCont = document.getElementById('nomeContato').value;
	data = document.getElementById('data').value;

	console.log(nomeCli);
	console.log(nomeCont);
	console.log(data);

	
	clienteDb.push({
		"nomeCli": nomeCli,
		"nomeCont": nomeCont,
		"data" : data
	});

}

//cadastro avaliacao
function validaAval(){

	listaCli = $('#listaCliente').val(); //jquery
	mes = document.getElementById("mesAno").value;

	console.log(listaCli); 
	console.log(mes);

}

//trasnformar
function objectToArray(obj) {
	var saida = [];
	var chaves = Object.keys(obj);

	chaves.map((k) => {
		obj[k] = Object.assign({ 'id': k }, obj[k]);
		saida.push(obj[k]);
	});

	return saida;

}