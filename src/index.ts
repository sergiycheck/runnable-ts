console.log('should run');

(async function main() {
  const homework = {
    topic: 'js',
  };

  const otherHm = Object.create(homework);

  console.log(otherHm.topic);

  homework.topic = 'ts';

  console.log(otherHm.topic);
})();
