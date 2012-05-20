winston-growl
=============

growl transport logging for winston

to use growl notification

Squid
=====

squid is a toolbox to build your node projects.
Squid take cares of the compilation of your coffee, jade and stylus files. You put all your files inside your
src folder and it will compile them to the output directory as soon as it detect a file change. 


Install
-------

install the package with npm

```
$ npm install winston-growl
```

and add growl option to your logger 


```javascript

var winston = require('winston')
  , require('winston-growl');
  
winston.loggers.add('notifier', growl: {/*logger options*/});
winston.loggers.notifier("this will trigger a growl notification", {title:'notification title'});


```



To enable growl notification, install [growl] [1] and [growlNotify] [2]


[1]: http://growl.info/growlupdateavailable   "growl"
[2]: http://growl.info/downloads              "growlNotify"
