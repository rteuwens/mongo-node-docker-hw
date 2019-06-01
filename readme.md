## Docker x Node.js & MongoDB

If you're like me and you're taking your first baby steps into the web development world,
you're probably hearing all about Docker, frameworks like Angular, React, VUE, etc. and it's all a bit overwhelming.

This is me establishing a basic connection to a https://cloud.mongodb.com database in the Node.js express framework.
It will be the foundation of a MEAN stack application I will be building.

While I was at it, I decided to give Docker a crack to see how I would deploy this.

## .Env

see: https://www.npmjs.com/package/dotenv

```js
// to read our .env file
require('dotenv').config();
```

To avoid hard-coding your precious credentials and other sensitive info into server.js, you'll have to make a .env file and 
configure your variables accordingly.

```
HOST = '0.0.0.0'
PORT = 8080
MONGO_USERNAME = yourDbUsername
MONGO_PASSWORD = yourDbPassword
MONGO_DATABASE = yourDbName
MONGO_URI = restOfTheUrl
```
