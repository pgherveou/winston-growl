path    = require 'path'
winston = require 'winston'
growl   = require 'growl'

assetDir    = path.join __dirname, '../assets'
levelImages =
  debug: path.join assetDir, 'sq-info.png'
  info : path.join assetDir, 'sq-info.png'
  warn : path.join assetDir, 'sq-warn.png'
  error: path.join assetDir, 'sq-error.png'

module.exports =
class winston.transports.Growl extends winston.Transport

  name: 'growl'

  log: (level, msg = '', meta = {}, cb) ->
    return cb null, true if @silent
    msg   = msg.toString()[0..40]
    title = meta.title or 'Log'
    image = levelImages[level] or levelImages.info
    growl msg, {title, image}, cb
