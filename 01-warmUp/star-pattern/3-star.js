const star3 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
      row = row + (j + 1);
    }
    console.log(row)
  }
};

star3(5);
