'use strict';

const express     = require( 'express' );
const cors        = require( 'cors' );
const helmet      = require( 'helmet' );
const pug         = require( 'pug' );
require( 'dotenv' ).config( );

const routes      = require( './App/routes' );

const app  = express( );
const PORT = process.env.PORT || 3000;

app.set( 'view engine', 'pug' );
app.set( 'views', './App/Views' );
app.use( '/assets', express.static( 'App/Views/Assets' ) );
app.use( cors( ) );
app.use( express.urlencoded( { extended: true } ) );
app.use( helmet( {
  noCache       : true,
  hidePoweredBy : { setTo: 'PHP 4.2.0' },
  xssFilter     : true,
} ) );

// Router
app.use( routes );

// 404 Not Found Middleware.
app.use( ( req,res,next ) => {
  res.status( 404 )
    .type( 'text' )
    .send( 'Not Found' );
} );

// Start the server.
app.listen( PORT, ( ) => console.log( ` :: Listening on port ${PORT} :: ` ) );