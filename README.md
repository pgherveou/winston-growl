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
  
winston.loggers.add('growler', {
  growl: {
    /* sepcify transport options*/
  }
  // other transports

});

growler = winston.loggers.get('growler');
growler.info("this will trigger a growl notification", {title:'optional title'});
growler.error("this will trigger anoter growl notification", {title:'Errror'});

```



To make it work you will need to install [growl] [1] and [growlNotify] [2]


[1]: http://growl.info/growlupdateavailable   "growl"
[2]: http://growl.info/downloads              "growlNotify"
