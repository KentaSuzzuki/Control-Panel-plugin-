const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require('./router');
const app = express();

const PORT = process.env.PORT || 8085;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use('/', router);


// Initialize database and start server
(async () => {

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})();
