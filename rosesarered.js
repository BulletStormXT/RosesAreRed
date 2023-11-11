// inspired by https://twitter.com/nixcraft/status/1162020669242003456

console.log('Roses are red, violets are blue.');



























try {
  eval('function {');
} catch(e) {
  let [_, lineno] = e.stack.match(/:(\d+):(\d+)/);
  console.error(`${e.message} at line ${lineno}.`);
}