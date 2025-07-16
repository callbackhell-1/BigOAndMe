let star5 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n - i; j++) {
      row = row + (j + 1);
    }
    console.log(row);
  }
};

star5(5);
