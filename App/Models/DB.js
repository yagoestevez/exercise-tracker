'use strict';

const mongoose   = require( 'mongoose' );

module.exports = class DB {
  constructor ( ) {
    const connection = mongoose.connect( process.env.DB, { useNewUrlParser: true } )
    if ( !connection ) throw { code: 500, text: `Cannot connect to the database.` };
  }
}