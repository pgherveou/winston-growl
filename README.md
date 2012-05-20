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
  
winston.loggers.add('notifier', growl: {/*logger options*/});
winston.loggers.notifier("this will trigger a growl notification", {title:'notification title'});


```



To enable growl notification, install [growl] [1] and [growlNotify] [2]


[1]: http://growl.info/growlupdateavailable   "growl"
[2]: http://growl.info/downloads              "growlNotify"
