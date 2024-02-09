console.log(undefined); // undefined

var undefined = null;

console.log(undefined); // 1


try {
  new Promise((resolve, reject) => {
    throw new Error('error');
  }).catch(e => {
    console.log('promise catch block', e);
  });

} catch (e) {
    console.log('try catch block', e);
}
