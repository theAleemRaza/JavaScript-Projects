let sum = 0;
const fn = function(num){
    for (let i=0;i<num;i++){
        sum += i;
    }
    return sum
}


const memo = function(fn){
    var cache = {};
   
    return function(...args){
        let n = args[0];
        if (n in cache){
            console.log(cache)
            return cache[n];
            
        }
        else{
            let result = fn(n)
            cache[n]= result;
            return result;
            
        }
        
    }
    
   
}


console.time();
const eff = memo(fn)
console.log(eff(5))
console.timeEnd();

console.time();

console.log(eff(5))
console.timeEnd();

console.time();

console.log(eff(5))
console.timeEnd();

