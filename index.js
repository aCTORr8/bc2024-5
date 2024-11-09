const { program } = require('commander');
const express = require('express');
const app = express();

program
  .requiredOption('-h, --host <host>', 'Server address')
  .requiredOption('-p, --port <port>', 'Server port')
  .requiredOption('-c, --cache <cache>', 'Path to cache directory');

program.parse(process.argv);

const options = program.opts();

if (!options.host || !options.port || !options.cache) {
  console.error("Error: All parameters --host, --port, and --cache are required.");
  process.exit(1);
}

app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

app.listen(options.port, options.host, () => {
  console.log(`Server is running on http://${options.host}:${options.port}`);
});
