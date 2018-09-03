'use strict';

const Joi           = require( 'joi' );
const TrainingModel = require( '../Models/TrainingModel' );

module.exports = class TrainingController {

  constructor ( ) {
    this.trainingModel = new TrainingModel( );
  }

  async getTrainings ( req ) {
    const schema = Joi.object( ).keys( {
      username: Joi.string( ).alphanum( ).min( 3 ).max( 30 ).required( ),
      from    : Joi.date( ),
      to      : Joi.date( ),
      limit   : Joi.number( )
    } );
    const validation = Joi.validate( req.query, schema );
    if ( validation.error )
      throw { code: 400, text: 'Required fields: \n\tString: "username" \nOptional fields: \n\tDate "from" (yyy-mm-dd) \n\tDate "to" (yyy-mm-dd) \n\tNumber "limit"'  };
    const trainings = await this.trainingModel.getTrainings( req.query );
    return trainings;
  }

  async registerTraining ( req ) {
    const schema = Joi.object( ).keys( {
      username: Joi.string( ).alphanum( ).min( 3 ).max( 30 ).required( ),
      name    : Joi.string( ).max( 100 ).required( ),
      time    : Joi.number( ).max( 1440 ).required( ),
      date    : Joi.date( )
    } );
    const validation = Joi.validate( req.body, schema );
    if ( validation.error ) 
      throw { code: 400, text: 'Required fields: \n\tString: "username" \n\tString "name" \n\tNumber: "time" \nOptional fields: \n\tDate: "date"' };
    const savedTraining = await this.trainingModel.saveTraining( req.body );
    if ( !savedTraining )
      throw { code: 500, text: `Sorry. Something went wrong. Please, try again.` }; 
    return `Successfully posted`;
  }

}