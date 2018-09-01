'use strict';

const mongoose = require( 'mongoose' );

const userSchema  = new mongoose.Schema( {
  username: { 
    type      : String,
    required  : true,
    unique    : true,
    maxlength : [ 30 ]
  },
  created_on: {
    type      : Date,
    required  : true
  }
} );

module.exports = {
  getUserSchema : async ( ) => {
    return await mongoose.model( 'User', userSchema, 'Users' );
  },
}