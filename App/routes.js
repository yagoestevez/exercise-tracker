'use strict';

const express = require( 'express' );
const router  = express.Router();

const ROOT    = '/';

// View main entrypoint.
router.get( '/', ( req,res ) => {
  res.send( 'ROOT DIRECTORY' );
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

module.exports = router;