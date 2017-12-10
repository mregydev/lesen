#!/usr/bin/env node
'use strict';

const fileReader = require('./FileReader');

//Check argument passed
switch (process.argv[2]) {
	case "help":
		console.log('- Das app ist benutzt fur Datei lesen \n-Ubuntu Befehlsformat ist lesen \\< <filename> \n-Windows Befehlsformat ist lesen = <filename>');
		break;

	case '<':
	case '=':
		fileReader.Read(process.argv[3]);    //process.argv[3] hold filename
		break;

	default:
		console.log("das ist eine falsches format");
}


