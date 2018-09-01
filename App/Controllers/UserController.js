'use strict';

const UserModel = require( '../Models/UserModel' );

module.exports = class UserController {

  constructor ( ) {
    this.userModel = new UserModel( );
  }

  async postNewUser ( req ) {
    if ( !req.body.username ) {
      throw { code: 400, text: `A parameter "username" is required.` };
    }
    const newUser = await this.userModel.addUser( req.body.username );
    return newUser;
  }

}