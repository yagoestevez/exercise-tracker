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
    if ( !newUser )
      throw { code: 400, text: `The user "${req.query.username}" is already created.` };
    return newUser;
  }


/*
  const user = new Users(req.body)
  user.save((err, savedUser) => {
    if(err) {
      if(err.code == 11000) {
        // uniqueness error (no custom message)
        return next({
          status: 400,
          message: 'username already taken'
        })
      } else {
        return next(err)
      }
    }

    res.json({
      username: savedUser.username,
      _id: savedUser._id
    })
  })
*/

}