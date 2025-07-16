const star2 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
      row = row + '*';
    }
    console.log(row);
  }
};

star2(5);
/*
 *
 **
 ***
 ****
 *****
 */
