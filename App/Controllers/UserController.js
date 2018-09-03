'use strict';

const Joi       = require( 'joi' );
const UserModel = require( '../Models/UserModel' );

module.exports = class UserController {

  constructor ( ) {
    this.userModel = new UserModel( );
  }

  async getUsers ( ) {
    let users = await this.userModel.getUsers( );
    if ( !users.length ) users = `There are no users registered yet.`
    return users;
  }

  async registerUser ( req ) {
    const schema = Joi.object( ).keys( {
      username: Joi.string( ).alphanum( ).min( 3 ).max( 30 ).required( ),
      from    : Joi.date( ),
      to      : Joi.date( ),
      limit   : Joi.number( )
    } );
    const validation = Joi.validate( req.body, schema );
    if ( validation.error )
      throw { code: 400, text: 'A username is required.'  };
    return await this.userModel.saveUser( req.body.username );
  }

}