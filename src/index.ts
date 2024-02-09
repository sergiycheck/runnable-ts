const keys = ['user', 'name', 'firstname'];

const obj = {
  user: {
    name: {
      firstname: 'Bob',
      lastname: 'Smith',
    },
    favoritecolor: 'Light Blue',
  },
};

// user
console.log(obj[keys[0]]);

// user.name
console.log(obj[keys[0]][keys[1]]);

// user.name.firstname
console.log(obj[keys[0]][keys[1]][keys[2]]);
