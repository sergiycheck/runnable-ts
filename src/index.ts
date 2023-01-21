(function main() {
  const lookupStudents = (studentId: number) => {
    const students = {
      1: {
        id: 1, name: 'Frank',
      },
      2: {
        id: 2, name: 'John',
      }
    }

    return function greetStudent(greeting: string) {
      return `${greeting} ${students[studentId].name}!`
    }
  }

  const studentsToGreet = [
    lookupStudents(1),
    lookupStudents(2)
  ];

  console.log(studentsToGreet[0].name, studentsToGreet[0]('Hi'));
  console.log(studentsToGreet[1].name, studentsToGreet[1]('Hi, how are you doing'));
})();
