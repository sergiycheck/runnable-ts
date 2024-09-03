const persons = [
  { isMale: false, salary: 1000, id: 1 },
  { isMale: true, salary: 1500, id: 2 },
  { isMale: false, salary: 1200, id: 3 },
  { isMale: true, salary: 1800, id: 4 },
  { isMale: false, salary: 1100, id: 5 },
  { isMale: true, salary: 2000, id: 6 },
  { isMale: false, salary: 1400, id: 7 },
  { isMale: true, salary: 1700, id: 8 },
  { isMale: false, salary: 1300, id: 9 },
  { isMale: true, salary: 1600, id: 10 },
];

type SplitSalaries = {
  male: {
    total: number;
    ids: number;
  };
  female: {
    total: number;
    ids: number;
  };
};

const splitSalaries = persons.reduce(
  (prev, curr) => {
    let key = 'male';
    if (!curr.isMale) {
      key = 'female';
    }

    prev[key].total += curr.salary;
    prev[key].ids.push(curr.id);

    return prev;
  },
  {
    male: { total: 0, ids: [] },
    female: { total: 0, ids: [] },
  }
);

console.log(splitSalaries);
