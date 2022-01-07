// Consider the following operation on an arbitrary positive integer:
// If the number is even, divide it by two.
// If the number is odd, triple it and add one.

// Now form a sequence by performing this operation repeatedly, beginning with the positive integer,
// and taking the result at each step as the input for the next step.
// The Collatz Conjecture says that this above sequence will always eventually reach the number 1,
// regardless of which positive integer is chosen initially.

Eg: 4 > 2 > 1
Eg: 5 > 16 > 8 > 4 > 2 > 1
Eg: 6 > 3 > 10 > 5 > 16 > 8 > 4 > 2 > 1
Eg: 7 > 22 > 11 > 34 > 17 > 52 > 26 > 13 > 40 > 20 > 10 > 5 > 16 > 8 > 4 > 2 > 1



let calaculate = (n)=>{
    let arr = [n]
    while(n>1){
        if (n%2 ==0){
            n = n/2
            arr.push(n)
        }else{
            n = 3*n+1;
            arr.push(n)
        }
    }
   console.log(arr.toString());
}

calaculate(4)
calaculate(5)
calaculate(6)
calaculate(7)
