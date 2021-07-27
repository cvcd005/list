export const getPostsApi = async () => {
  return fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
    switch (res.status) {
      case 200:
      case 201:
        return res.json();
      default:
        return Promise.reject();
    }
  });
};

export const getUserApi = async () => {
  return fetch(`https://jsonplaceholder.typicode.com/users`).then((res) => {
    switch (res.status) {
      case 200:
      case 201:
        return res.json();
      default:
        return Promise.reject();
    }
  });
};
