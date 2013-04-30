var winston = require('winston');
require('..');

winston.loggers.add('logger', {
  growl: {
    /* sepcify transport options*/
  }
  // other transports
});

logger = winston.loggers.get('logger');
logger.info("info notification", {title:'optional title'});
logger.error("error notification", {title:'Errror'});
