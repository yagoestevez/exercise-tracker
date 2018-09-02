'use strict';

const mongoose = require( 'mongoose' );
const Schema   = require( './DBSchema' );

module.exports = class UserModel {

  async getUsers ( ) {
    const User = await Schema.getUserSchema( );
    const user = await User.find( {} );
    return user;
  }

  async saveUser ( username ) {
    const User = await Schema.getUserSchema( );
    const user = new User( { username, created_on: new Date( ) } );
    return await user.save( );
  }

}