var util = require("util")
  , join = require('path').join
  , winston = require('winston')
  , growl = require('growl')
  , assetDir = join(__dirname, '../assets')
  , levelImages = {
      debug: join(assetDir, 'sq-info.png'),
      info: join(assetDir, 'sq-info.png'),
      warn: join(assetDir, 'sq-warn.png'),
      error: join(assetDir, 'sq-error.png')
  };

/**
 * module exports
 */

module.exports = winston.transports.Growl = Growl;


/**
 * Growl transport constructor
 */

function Growl() {
  winston.Transport.apply(this, arguments);
}

/**
 * inherit winston transport
 */

util.inherits(Growl, winston.Transport);


/**
 * transport name
 */

Growl.prototype.name = 'growl';

/**
 * log data
 *
 * @param  {String}   level
 * @param  {String}   msg
 * @param  {Object}   meta
 * @param  {Function} cb
 * @api public
 */

Growl.prototype.log = function(level, msg, meta, cb) {
  if (msg == null) msg = '';
  if (meta == null) meta = {};
  if (this.silent) return cb(null, true);

  var title = meta.title || 'Log'
    , image = levelImages[level] || levelImages.info;

  msg = msg.toString().slice(0, 50);
  growl(msg, {
    title: title,
    image: image
  }, cb);
};
