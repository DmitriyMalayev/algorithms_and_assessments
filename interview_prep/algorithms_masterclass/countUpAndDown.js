function countUpAndDown() {
  console.log("Going Up");
  for (let i = 0; i < n; i++) {   //O(n) Linear Time
    console.log(i);
  }
  console.log("At the top! \n Going down...");
  for (let j = n - 1; j >= 0; j--) {   //O(n) Linear Time
    console.log(j);
  }
  console.log("Back Down Bye");
}
