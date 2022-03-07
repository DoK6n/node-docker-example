const express = require('express');
const redis = require('redis');
const PORT = 3000;
const app = express();

// create redis client
const client = redis.createClient({
  host: 'redis-server',
  port: 6379

});

client.set('number', 0);

app.get('/', (req, res) => {
  client.get('number', (err, number) => {
    // increments by 1 after getting the current number
    client.set('number', parseInt(number) + 1);
    res.send('The number increases by 1.  number: ' + number);
  })
});

app.listen(PORT, () => {
  console.log(`Server running on  port ${PORT}`);
});
