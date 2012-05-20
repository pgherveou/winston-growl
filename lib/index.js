// Generated by CoffeeScript 1.3.1
(function() {
  var assetDir, growl, levelImages, path, winston,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  path = require('path');

  winston = require('winston');

  growl = require('growl');

  assetDir = path.join(__dirname, '../assets');

  levelImages = {
    debug: path.join(assetDir, 'sq-info.png'),
    info: path.join(assetDir, 'sq-info.png'),
    warn: path.join(assetDir, 'sq-warn.png'),
    error: path.join(assetDir, 'sq-error.png')
  };

  winston.transports.Growl = (function(_super) {

    __extends(Growl, _super);

    Growl.name = 'Growl';

    function Growl() {
      return Growl.__super__.constructor.apply(this, arguments);
    }

    Growl.prototype.name = 'growl';

    Growl.prototype.log = function(level, msg, meta, cb) {
      var image, title;
      if (msg == null) {
        msg = '';
      }
      if (meta == null) {
        meta = {};
      }
      msg = msg.toString().slice(0, 41);
      title = meta.title || 'Log';
      image = levelImages[level] || levelImages.info;
      return growl(msg, {
        title: title,
        image: image
      }, cb);
    };

    return Growl;

  })(winston.Transport);

}).call(this);