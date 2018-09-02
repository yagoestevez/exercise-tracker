'use strict';

const router             = require( 'express' ).Router( );
const UserController     = require( './Controllers/UserController' );
const TrainingController = require( './Controllers/TrainingController' );
const Database           = require( './Models/DB' );
const userController     = new UserController( );
const trainingController = new TrainingController( );
new Database( );

const API = '/api/exercise';

// View main entrypoint.
router.get( `/`, ( req,res ) => {
  res.render( 'index' );
} );

// API entrypoints.
router.get(
  `${API}/users`    , async ( req,res ) => res.send( await userController.getUsers( ) )
);
router.post(
  `${API}/new-user` , async ( req,res ) => res.send( await userController.registerUser( req ) )
);
router.get(
  `${API}/log`      , async ( req,res ) => res.send( await trainingController.getTrainings( req ) )
);
router.post(
  `${API}/add`      , async ( req,res ) => res.send( await trainingController.registerTraining( req ) )
);

// 404 errors.
router.all( '*' , ( req,res ) => res.status( 404 ).render( '404' ) );

module.exports = router;