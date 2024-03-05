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
const initData =
  'query_id=AAGpQR4ZAAAAAKlBHhkIn5Uh&user=%7B%22id%22%3A421413289%2C%22first_name%22%3A%22Serhii%22%2C%22last_name%22%3A%22Kuzmych%22%2C%22username%22%3A%22Sieroga%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1709302913&hash=d3077bfeb31e5c80a8e052999d8f18a5cac4316e52a792ba9c59040f1f244b2e';

const data = initData.split('&').reduce((acc, item) => {
  const [key, value] = item.split('=');

  let valueDecoded = decodeURIComponent(value);
  try {
    valueDecoded = JSON.parse(valueDecoded);
  } catch (err) {
  } finally {
    acc[key] = valueDecoded;
  }

  return acc;
}, {});

console.log('data', data);
