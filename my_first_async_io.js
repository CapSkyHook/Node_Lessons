var fs = require('fs')

fs.readFile(process.argv[2], function callback (err, data) {
	
	var str = data.toString();

	var array = str.split('\n');

	console.log(array.length -1);

});