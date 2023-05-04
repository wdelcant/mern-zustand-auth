import app from './app';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log(`Server listening on port ${3000}!`);
});
