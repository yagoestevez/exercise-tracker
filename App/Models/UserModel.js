'use strict';

const mongoose = require( 'mongoose' );
const Schema   = require( './DBSchema' );

module.exports = class UserModel {

  async addUser ( username ) {
    const User = await Schema.getUserSchema( );
    const user = new User( { username, created_on: new Date( ) } );
    return await user.save( );
  }

}