'use strict';

const router         = require( 'express' ).Router( );
const UserController = require( './Controllers/UserController' );
const Database       = require( './Models/DB' );
const userController = new UserController( );
new Database( );

const API = '/api/exercise';

// View main entrypoint.
router.get( `/`, ( req,res ) => {
  res.render( 'index' );
} );

// API entrypoints.
router.get(
  `${API}/users`, async ( req,res ) => res.send( await userController.getUsers( ) )
);

router.get( `${API}/log`, ( req,res ) => {
  res.send( 'GET LOG' );
} );

router.post(
  `${API}/new-user`,
  async ( req,res ) => res.send( await userController.postNewUser( req ) )
);

router.post( `${API}/add`, ( req,res ) => {
  res.send( 'POST ADD' );
} );

// 404 errors.
router.all( '*', ( req,res ) => res.status( 404 ).render( '404' ) );

module.exports = router;