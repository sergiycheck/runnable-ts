(function main() {
  const obj = {
    aOuter: function () {
      const innerA = () => {
        return this;
      };

      return innerA;
    },
  };

  const resultWithBoundObj = obj.aOuter();
  const passedAOuter = obj.aOuter;
  const resultWithGlobalThis = passedAOuter();

  console.log('obj', resultWithBoundObj());
  console.log('global ', resultWithGlobalThis());
})();
