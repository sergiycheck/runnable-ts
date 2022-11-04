console.log('should run');

(async function main() {
  const Classroom = {
    welcome() {
      console.log('Welcome, students!');
    },
  };

  const mathClass = Object.create(Classroom);

  mathClass.welcome();
  // Welcome, students!
})();
