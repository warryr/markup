new Promise(resolve => {
    setTimeout(() => resolve(10), 3000);
  }).then((result) => {
      console.log(result);
      return result * 2;
  }).then((result) => {
    console.log(result);
    return new Promise(resolve => {
        setTimeout(() => resolve(result * 2), 2000);
    });
  }).then((result) => {
    console.log(result);
  });
  