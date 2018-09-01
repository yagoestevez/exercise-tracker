'use strict';

const express = require( 'express' );
const router  = express.Router();

const ROOT    = '/';

// View main entrypoint.
router.get( ROOT, ( req,res ) => {
  res.text( 'ROOT DIRECTORY' );
} );

module.exports = router;