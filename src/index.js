var myChars = ['a', 'b', 'c', 'd'];
delete myChars[0];
console.log(myChars); // [<1 empty item>, "b", ...]
console.log(myChars[0]); // undefined
console.log(myChars.length); // 4
