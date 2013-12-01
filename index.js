
var levelup = require('levelup'),
	pkg = require('./package.json'),
	db = levelup('./data');
	
function getVersion ( callback ) {
	db.get('version', function ( err, value ) {
		if ( err ) {
			// could not find key
			if ( err.notFound ) {
				updateVersion( );
				return;
			}
			return console.log( 'error' , err.message );
		}

		if ( value ) {
			console.log( 'Current Stored Version is ' + value );
			if( typeof callback === 'function' ) callback( value );
		}
	})
}

function updateVersion ( callback ) {
	db.put('version', pkg.version, function ( err ) {
		if ( err ) return console.log( 'error' , err,message );
		console.log('Version updated to ' + pkg.version );
		if( typeof callback === 'function' ) callback( value );
	})
}

getVersion( function ( version ) {
	if ( version !== pkg.version ) {
		updateVersion ( );
	}
});



