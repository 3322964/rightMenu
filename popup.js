function start() {
	var hostName = "daycool.native";
	var app = chrome.runtime.connectNative(hostName);
	// app.postMessage('AltRun');
}

$(function() {

	var socket = io.connect('http://localhost:8001');

	$('#open-document').click(function() {
		socket.emit('startNativeApp', {type: 'openDocument'});
	});
	
	$('#open-dos').click(function() {
		socket.emit('startNativeApp', {type: 'openDos'});
	});

	$('#test-online').click(function() {
		socket.emit('startNativeApp', {type: 'testOnline'});
	});

	$('#product-online').click(function() {
		socket.emit('startNativeApp', {type: 'productOnline'});
	});

	$('#create-component').click(function() {
		$(this).siblings('ul').removeClass('hide');
	});

	$('#create-component-sms').click(function() {
		socket.emit('startNativeApp', {type: 'createComponentSms'});
	});
	
	$('#create-component-oms').click(function() {
		socket.emit('startNativeApp', {type: 'createComponentOms'});
	});	

	$('#start').click(function() {
		start();
	});	

	socket.on('news', function(data) {
		console.log(data);
	});
});