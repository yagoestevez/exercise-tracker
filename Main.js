'use strict';

require( 'dotenv' ).config( );
const express      = require( 'express' );
const cors         = require( 'cors' );
const helmet       = require( 'helmet' );
const pug          = require( 'pug' );
const asyncErrors  = require( 'express-async-errors' );

const errorHandler = require( './App/Middlewares/errorHandler.js' );
const routes       = require( './App/routes' );

const app  = express( );
const PORT = process.env.PORT || 3000;

app.set( 'view engine', 'pug' );
app.set( 'views', './App/Views' );
app.use( '/assets', express.static( 'App/Views/Assets/' ) );
app.use( '/css', express.static( 'App/Views/Assets/' ) );
app.use( '/js', express.static( 'App/Views/Assets/' ) );
app.use( cors( ) );
app.use( express.urlencoded( { extended: true } ) );
app.use( express.json( ) );
app.use( helmet( {
  noCache             : true,
  hidePoweredBy       : { setTo  : 'PHP 4.2.0'    },
  xssFilter           : true,
  frameguard          : { action : 'sameorigin'   },
  dnsPrefetchControl  : { allow  : false          },
  referrerPolicy      : { policy : 'same-origin'  }
} ) );

// Router
app.use( routes );

// Error handler middleware.
app.use( errorHandler );

// 404 Not Found Middleware.
app.use( ( req,res,next ) => {
  res.status( 404 )
    .type( 'text' )
    .send( 'Not Found' );
} );

// Start the server.
app.listen( PORT, ( ) => console.log( ` -> Server open :: http://localhost:${PORT}/ <- ` ) );