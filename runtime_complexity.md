# Runtime Complexity
Describe the performance of an algorithm
How much more processing power or time is required to run your algorithm if we double the inputs. 

# String Reverse
abc => cba
abcdefg => gfedcba
Each additional character = 1 step through 1 loop
This would be "N", or "linear" runtime

`linear runtime`
A direct 1 to 1 relationship between the number of input elements that we got into our algorithm and the amount of work that we had to use to process it. 



# Steps Algorithm
n = 2  Had to do 4 things 
n = 3  Had to do 9 things
n = 4  Had to do 16 things 

`Quadratic Runtime`
As "n" increased by one we had to do way more things, (n*n) things total
This would be N^2 or quadratic runtime. 


# Common Runtimes 

`Constant Time => 1` 
 
No matter how many elements we're working with, the algorithm or operation will always take the same amount of time. 

`Logarithmic Time => log(n)`
You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that searching operations are log(n)

`Linear Time => n`
Iterating through all elements in a collection of data. 
If you see a loop spanning from 0 to array.length, you have probably have "n" or linear runtime. 
Could be iterating over a string or an array. 
If we add one element to our input set it's going to take one unit of time to complete. 

`Quasilinear Time => n * log(n)`
You have this if doubling the number of elements you are iterating over doesn't double the amount of work. 
Always assume that any sorting operation is n * log(n)
Work required is a little bit more than 1. 

`Quadratic Time => N ^ 2`
Every element in a collection has to be compared to every other element 
This is also known as "The handshake problem"

`Exponential Time => 2 ^ N`
If you add a "single" element to a collection, the processing power required doubles.  


# Big "O" Notation / Runtime Complexity  
This is another way of referencing runtime complexity

O(n) => Linear
O(1) => Constant
O(n^2) => Quadratic


# Identifying Runtime Complexity

`Probably O(n)`
Iterating with a simple for loop through a single collection? 
Reverse a string. 

`Still O(n) There are no Constants in runtime`
Iterating through half a collection?
It's Linear even if you have iterated over half a collection. 

`O(n + m)`
Iterating through two "different" collection with separate for loops.
Reverse two different strings or arrays in two separate for loops. 
n => indicates the performance impact of the first string / array
m => indicates the second string or array, which could be shorter or longer 

`O(n ^ 2)`
Two nested for loops iterating over the same collection?
Nested for loops are a big red flag. 
Steps or Pyramid example

`O(n * m)`
Two nested for loops iterating over different collections? 

`O(n * log(n))`
Sorting Operations

`O(log(n))`
Searching a sorted array?

# Space Complexity
Similar to performance complexity
This is a reference to how much more RAM is required by doubling the problem set?  


































