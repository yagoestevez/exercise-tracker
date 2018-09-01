'use strict';

module.exports = ( error, req, res, next ) => {
  if ( error.code === 400   )
    return res.status( error.code ).send( `ERROR 400: BAD REQUEST.\n${error.text}` );
  if ( error.code === 404   )
    return res.status( error.code ).send( `ERROR 404: NOT FOUND.\n${error.text}` );
  if ( error.code === 500   )
    return res.status( error.code ).send( `ERROR 500: INTERNAL SERVER ERROR.\n${error.text}` );
  if ( error.code === 11000 ) {
    return res.send( `ERROR: Sorry, the username is already registered in the system.` );
  }
  if ( error.name === 'CastError' )
    return res.status( 500 ).send( 'ERROR:\nSomething went wrong' );
  
  return res.send( error );
}