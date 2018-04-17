const catchError = (error) => {
  // if (error.response) {}
  return Promise.reject(error);
};

export default catchError;
