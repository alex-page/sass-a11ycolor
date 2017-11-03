/***************************************************************************************************************************************************************
 *
 * Sass testing script, we test all the ./test/*.scss files for errors against what errors they should throw
 *
 * @author     Dominik Wilkowski hi@dominik-wilkowski.com
 * @repository https://github.com/dominikwilkowski/sass-versioning
 *
 **************************************************************************************************************************************************************/

// dependencies
const Sass = require('node-sass');
const CFonts = require('cfonts');
const Chalk = require(`chalk`);
const Glob = require("glob");
const Fs = require(`fs`);


// global variables
let fixtures = {};  // object to add fixtures to each file
let success = true; // let's assume the best
let allFiles = 0;   // let's count all files so we can run something after the last file
const startTime = process.hrtime();
const cfontsConf = {
	font: 'chrome',
	colors: ['green','white','cyan'],
};


// some cli prettiness
CFonts.say( 'testing...', cfontsConf );


// let's iterate over all test files
Glob("./test/*.scss", ( error, files ) => {
	files.forEach( file => {

		// let's read the fixture from the file itself
		Fs.readFile( file, ( error, data ) => {
			if( error ) {
				throw error;
			}

			// we got the fixture as the very first line of the scss file with the prefix: "// expected: " which we strip
			fixtures[ file ] = data.toString('utf-8').split("\n")[ 0 ].substring( 13 );

			// now let's render the Sass and see what error is thrown (if any)
			Sass.render(
				{
					file: file,
				}, ( error, result ) => {
					allFiles++; // counting all files

					if( error ) { // in case or error
						if( fixtures[ file ] === error.message ) { // did we expect this error?
							console.log( Chalk.green(`✅  ${ file } passed`) );
						}
						else {
							console.log( Chalk.red(`❎  ${ file } failed`) );
							console.log(`  Output was:      ${ Chalk.yellow( error.message ) }`);
							console.log(`  Should've been:  ${ Chalk.yellow( fixtures[ file ] ) }`);

							success = false;
						}
					}
					else { // in case of no error
						if( fixtures[ file ] === 'no output' ) { // did we expect no error?
							console.log( Chalk.green(`✅  ${ file } passed`) );
						}
						else {
							console.log( Chalk.red(`❎  ${ file } failed`) );
							console.log(`  No output was generated`);
							console.log(`  Should've been: ${ Chalk.yellow( fixtures[ file ] ) }`);

							success = false;
						}
					}

					if( allFiles >= files.length ) { // after we finished with all files
						// some more cli prettiness
						CFonts.say( '...done', cfontsConf );

						const elapsedTime = process.hrtime( startTime );
						console.log(`Test took: ${ ( elapsedTime[ 0 ] + ( elapsedTime[ 1 ] / 1e9 ) ).toFixed( 3 ) }s`);

						if( !success ) { // exit with error so ci can use this
							process.exit( 1 );
						}
					}
				}
			);

		});
	});
});
