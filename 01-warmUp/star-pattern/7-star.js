const star7 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = n - (i + 1); j > 0; j--) {
      row = row + ' ';
    }
    for (let k = 0; k < i; k++) {
      row = row + '*';
    }
    console.log(row);
  }
};

star7(5);
