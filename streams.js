
var levelup = require('levelup'),
	db = levelup('./data'),
	db2 = levelup('./data2'),
	rs = db.createReadStream( ),
	rs2 = db2.createReadStream( ),
	ws2 = db2.createWriteStream( );

// pipe info from first database into second
rs.pipe( ws2 ).on('close', function ( ){

	// read from second when done writing
	rs2.on('data', function( data ) {
		console.log( data.key + ' : ' + data.value );
		// remove keys that are read
		ws2.write( {type : 'del', key : data.key });
	});	

});





