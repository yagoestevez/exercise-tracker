'use strict';

const mongoose = require( 'mongoose' );
const Schema   = require( './DBSchema' );

module.exports = class TrainingModel {

  async getTrainings ( query ) {
    const from = query.from || '1970-01-01';
    const to   = query.to   || '2070-01-01';
    const User      = await Schema.getUserSchema( );
    const Training  = await Schema.getTrainingSchema( );
    const foundUser = await User.find( { username: query.username } );
    if ( foundUser.length === 0 )
      throw { code: 400, text: `Sorry. The user ${query.username} is not registered.` };
    const trainings = await Training
      .find( { username: query.username, date: { $gte: from, $lte: to } } )
      .sort( '-date' )
      .limit( +query.limit )
    return trainings;
  }

  async saveTraining ( session ) {
    const User      = await Schema.getUserSchema( );
    const Training  = await Schema.getTrainingSchema( );
    const foundUser = await User.find( { username: session.username } );
    if ( foundUser.length === 0 )
      throw { code: 400, text: `Sorry. The user ${session.username} is not registered.` };
    session.date = new Date( session.date ).getTime( );

    const training = new Training( session );
    return await training.save( );
  }

}