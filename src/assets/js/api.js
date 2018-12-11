// dev
// const baseUrl = '/api'

// prod
// const baseUrl = 'https://api.github.com';

// test
const baseUrl = 'https://api.github.com';

let api = {
  users: '/users'
};

for (let key in api) {
  let value = api[key];
  api[key] = baseUrl + value;
}

export default api;
