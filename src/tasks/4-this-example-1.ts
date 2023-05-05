const obj = {
  innerArrow: () => {
    return this;
  },
  innerMethod: function () {
    return this;
  },

  aOuter: function () {
    const innerA = () => {
      return this;
    };

    return innerA;
  },
};

console.log('obj.innerArrow()', obj.innerArrow());

console.log('obj.innerMethod()', obj.innerMethod());

const resultWithBoundObj = obj.aOuter();
const passedAOuter = obj.aOuter;
const resultWithGlobalThis = passedAOuter();

console.log('resultWithBoundObj', resultWithBoundObj());

console.log('resultWithGlobalThis ', resultWithGlobalThis());
