export function convertQueryToMap(query) {
  if (!query.length) return '';

  const arr = query.split('&');

  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const [key, value] = arr[i].split('=');

    const keys = key.split('.');

    // track first element user.name.firstname and second element
    // user.name.lastname
    let temp = obj;

    // obj.user = obj[keys[0]]
    // obj.user.name = obj[keys[0]][keys[1]
    // obj.user.name.firstname = obj[keys[0]][keys[1]][keys[2]]

    for (let j = 0; j < keys.length; j++) {
      if (j == keys.length - 1) {
        temp[keys[j]] = decodeURIComponent(value);
      } else {
        //if the key doesn't exist, create an empty object
        if (!temp[keys[j]]) {
          temp[keys[j]] = {};
        }
        //this line moves deep inside the object
        temp = temp[keys[j]];
      }
    }
  }

  return obj;
}
