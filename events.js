
var levelup = require('levelup'),
	db = levelup('./data');

db.on( 'put', function ( key, value ) {
	console.log( key + ' has been set to ' + value );
	db.get('NotAKey', function(){

	});
})

db.on( 'ready', function ( ) {
	console.log( 'database is ready' );
	db.put( 'name', 'levelup demo' );
} );






