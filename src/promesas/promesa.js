const somethinhWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("hey");
    } else {
      reject("up");
    }
  });
};

somethinhWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

const promesa = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("true");
      }, 2000);
    } else {
      const error = new Error("uppp!!");
      reject(error);
    }
  });
};

promesa()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

Promise.all([somethinhWillHappen(), promesa()])
  .then((response) => {
    console.log("este es el resutado de apromes.all", response);
  })
  .catch((err) => console.log(err));
