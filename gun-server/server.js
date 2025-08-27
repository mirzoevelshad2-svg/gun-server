const Gun = require('gun');
const express = require('express');
const app = express();

// Раздаём Gun по /gun
app.use(Gun.serve);

// Можно положить сюда свои html/css/js, если будут
app.use(express.static(__dirname));

// HTTP сервер
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`🚀 Gun server running on port ${port}`);
});

// Запускаем Gun
Gun({ web: server });
