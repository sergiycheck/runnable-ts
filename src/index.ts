(function main() {
  const text = JSON.stringify({ 'valid-json': 'I am valid' });
  if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

    console.log('json is valid');

  } else {

    console.log('json is not valid');

  }
})();
