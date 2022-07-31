console.log('should run');

class A {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  getMeL = () => {
    return this;
  };

  getMe() {
    return this;
  }
}

const a = new A('a class');
let g = a.getMe;

console.log(g.call(a, 'some arg'));
