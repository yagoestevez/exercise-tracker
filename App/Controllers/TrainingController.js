'use strict';

const TrainingModel = require( '../Models/TrainingModel' );

module.exports = class TrainingController {

  constructor ( ) {
    this.trainingModel = new TrainingModel( );
  }

  async getTrainings ( ) {

  }

  async registerTraining ( req ) {
    const { username, name, time, date } = req.body;
    if ( !username || !name || !time || !date )
      throw { code: 400, text: 'Parameters "username", "name", "time" and "date" are required.' };
    const savedTraining = await this.trainingModel.saveTraining( { username, name, time, date } );
    if ( !savedTraining )
      throw { code: 500, text: `Sorry. Something went wrong. Please, try again.` }; 
    return `Successfully posted`;
  }

}