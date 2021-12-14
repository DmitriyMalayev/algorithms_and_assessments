`64bits`

let x = 1 ...00000001 63 0's and 1
let y = 2 ...00000010 62 0's and 1

`shorthand`

0 - 000
1 - 001
2 - 010
3 - 011
4 - 100

AND 
0 & 0 = 0
0 & 1 = 0
1 & 1 = 1

OR 
0 | 0 = 0
0 | 1 = 1
1 | 1 = 1


XOR (only time it's 1 is when both x and y are different) 
0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 1 = 0
 
Convert

toString(2) convert to binary 
```js
console.log((1).toString(2)) //  "1"
console.log((2).toString(2))  // "10"
console.log((4).toString(4))  // "100"
console.log((4555.toString(2)) //  "1000111001011"  
console.log(parseInt("1000111001011", 2)) 
//  4555   Converts binary back to decimal  
// ParseInt always returns an integer

console.log((0b1000111001011).toString(10)) 
// "4555"    
// 0b means binary 
// converting binary to decimal

console.log((0b1000111001011).toString(16))  
//"11cb"    
//16 base means hex 

console.log((0b1000111001011).toString(8))  
//"10713"
//8 means octal
```

comparing 001 (1) and 011 (3)

001
011 

& - 1  AND   same as 001
^ - 2  XOR  same as 010
| - 3  OR   same as 011

```js
console.log(1 & 3) // 1 
console.log(1 ^ 3) // 2
console.log(1 | 3) // 3
```

Shift Left << 
First argument number
Second argument how many positions

```js

console.log((9).toString(2)) 
//converting to binary
//"1001"  if you shift left two positions this will add two 0's behind it. 
// "1001" => "100100"
console.log((0b100100).toString(10))  
//36
console.log(9 << 2)
//"36"
```



Shift Right >> 
First argument number
Second argument how many positions

```js

console.log((9).toString(2)) 
//converting to binary
//"1001"  if you shift right two positions this will remove two 0's behind it. 
// "1001" => "10"
console.log((0b10).toString(10))  
//2
console.log(9 << 2)
//"2"
```





