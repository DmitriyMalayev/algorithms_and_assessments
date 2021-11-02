0 0  
1 1   2^0
2 10  2^1
3 11  
4 100  2^2
5 101
6 110
7 111
8 1000 2^3
9 1001
10 1010
11 1011
12 1100
13 1101
14 1110
15 1111



# Bitwise Operators and Binary Numbers

0 0  
1 1 2^0
2 10 2^1
3 11  
4 100 2^2
5 101
6 110
7 111
8 1000 2^3
9 1001
10 1010
11 1011
12 1100
13 1101
14 1110
15 1111

AND & (both digits in the column are 1)
OR |
XOR ^
NOT ~
Shift Left <<
Shift Right >>

```js
let log = console.log;
let num = 10; //same as 1010
let int = 6; //same as  110

// RESULT WITH AND
1010;
110;
0010;

console.log(num.toString(2), int.toString(2)); //2   decimal equivalent of 0010

let temp = 2;
console.log(temp.toString(2)); //10    binary equivalent of 0010

console.log("AND & ", num & int);
//RESULT WITH OR
1010;
110;
1110;

console.log("OR ", num | int);

//RESULT WITH XOR (exclusive or, means only when one of them is a 1)
1010;
110;
1100;
console.log("XOR ^ ", num ^ int);

//NOT OPERATOR ~

~1010;
0101;

x = -(x + 1);
console.log("NOT ~", ~num); //NOT ~ -11   (num = 10)

//Permissions  read, write, delete
let perm = 6;
let allowedToRead = perm & 4 ? true : false;
let allowedToRead = perm & 2 ? true : false;
let allowedToRead = perm & 1 ? true : false;

0110; //6
0100; //4
0100; //4

0010; //2
0100; //4
0000; //0
```

`toString`
This method takes an argument of a regex / base number.