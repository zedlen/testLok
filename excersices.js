//Exercise 1 option A recursive
const exercise1 = (n) => {
    return n == 1 ? n * n : n * n + exercise1(n - 1)
}
console.time('exercise1')
console.log(exercise1(9000))
console.timeEnd('exercise1')

//Exercise 1 option b contant complexity
const exercise1b = (n) => {
    return ( n * ((2 *(n*n)) + 3 * n + 1))/6
}

console.time('exercise1b')
console.log(exercise1b(9000))
console.timeEnd('exercise1b')

//Exercise 2 iteration
const exercise2 = (n) => {
    let total = 0
    while(n){
        total += --n
    }
    return total
}

console.time('exercise2')
console.log(exercise2(500000))
console.timeEnd('exercise2')

//Exercise 2 sum solved
const exercise2b = (n) => {   
    return  (n * (n + 1)) / 2
}

console.time('exercise2b')
console.log(exercise2b(500000))
console.timeEnd('exercise2b')


//Exercise 3
const exercise3 = (string) => {
    let inverted = ""        
    while(string.length > 0) {        
        inverted += string.slice(-1)
        string = string.slice(0, -1)
    }
    return inverted
}

console.time('exercise3')
console.log(exercise3("abcde"))
console.timeEnd('exercise3')

//Exercise 4
const exercise4 = (n) => {
    let last = 0, current = 1, total = 0;
    while(n > 1) {        
        total = last + current;
        last = current;
        current = total
        n-- 
    }
    return total
}

console.time('exercise4')
console.log(exercise4(5))
console.timeEnd('exercise4')
