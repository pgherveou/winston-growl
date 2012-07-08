winston-growl
=============

growl transport logging for winston


install
------

```
$ npm install winston-growl
```

usage
-----
Just add a growl option to your logger

```javascript

var winston = require('winston')
  , require('winston-growl');

winston.loggers.add('logger', {
  growl: {
    /* sepcify transport options*/
  }
  // other transports
});

logger = winston.loggers.get('logger');
logger.info("info notification", {title:'optional title'});
logger.error("error notification", {title:'Errror'});

```

![growl info screenshot](https://github.com/pgherveou/winston-growl/raw/gh-pages/images/info-notification.png)

![growl error screenshot](https://github.com/pgherveou/winston-growl/raw/gh-pages/images/error-notification.png)


To make it work you will need to install [growl] [1] and [growlNotify] [2]


[1]: http://growl.info/growlupdateavailable   "growl"
[2]: http://growl.info/downloads              "growlNotify"
