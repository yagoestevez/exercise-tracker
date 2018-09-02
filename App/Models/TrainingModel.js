'use strict';

const mongoose = require( 'mongoose' );
const Schema   = require( './DBSchema' );

module.exports = class TrainingModel {

  async getTrainings ( ) {

  }

  async saveTraining ( session ) {
    const User      = await Schema.getUserSchema( );
    const Training  = await Schema.getTrainingSchema( );
    const foundUser = await User.find( { username: session.username } );
    console.log( foundUser );
    if ( foundUser.length === 0 )
      throw { code: 400, text: `Sorry. The user ${session.username} is not registered.` }; 
    const training = new Training( session );
    return await training.save( );
  }

}