const localStorageMiddleware = (store) => (next) => (action) => {
  localStorage.setItem("articles", JSON.stringify(store.getState()));

  return next(action);
};

export default localStorageMiddleware;
