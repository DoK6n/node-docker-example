const express = require('express');
const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Docker!!!!!!!!!!!');
});

app.listen(PORT, () => {
  console.log(`${PORT}번 포트로 서버 실행중`);
})
