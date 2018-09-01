'use strict';

const router           = require( 'express' ).Router( );
const Database         = require( './Models/DB' );
new Database( );

// View main entrypoint.
router.get( '/', ( req,res ) => {
  res.render( 'index' );
} );

// API entrypoints.
router.get( '/users', ( req,res ) => {
  res.send( 'GET USERS' );
} );

router.get( '/log', ( req,res ) => {
  res.send( 'GET LOG' );
} );

router.post( '/new-user', ( req,res ) => {
  res.send( 'POST NEW USER' );
} );

router.post( '/add', ( req,res ) => {
  res.send( 'POST ADD' );
} );

// 404 errors.
router.all( '*', ( req,res ) => res.status( 404 ).render( '404' ) );

module.exports = router;