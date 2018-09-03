'use strict';

const mongoose = require( 'mongoose' );

const userSchema  = new mongoose.Schema( {
  username: { 
    type      : String,
    unique    : true,
    minlength : 3,
    maxlength : 30,
    required  : true
  },
  created_on: {
    type      : Date,
    required  : true
  }
} );

const trainingSchema = new mongoose.Schema( {
  username: {
    type      : String,
    index     : true,
    ref       : 'Users',
    required  : true
  },
  name: {
    type      : String,
    maxlength : 100,
    required  : true
  },
  time: {
    type      : Number,
    min       : 0,
    max       : 1440,
    required  : true
  },
  date: {
    type      : Date,
    default   : Date.now
  }
} );

module.exports = {
  getUserSchema : async ( ) => {
    return await mongoose.model( 'User', userSchema, 'Users' );
  },
  getTrainingSchema : async ( ) => {
    return await mongoose.model( 'Training', trainingSchema, 'Training' );
  }
}