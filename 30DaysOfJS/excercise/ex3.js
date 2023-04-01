shownumbers(10);

function shownumbers(limit) {
  for (i = 0; i <= limit; i++) {
    let flag = 0;
    if (i % 2 == 0)
      flag = "EVEN";
    else flag = "ODD";

    console.log(i, flag)
  }
}