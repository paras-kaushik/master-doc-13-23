function uniqKeyGenerator(){
    let uniqArgumentCount=0;
    const map= new Map();
    return function (arg){
        if(map.has(arg)) return map.get(arg);
        map.set(arg,++uniqArgumentCount);
        return uniqArgumentCount;
    }
}
function memoize(fn) {
    const cache= {};
    const keyGeneratorcb= uniqKeyGenerator();
    return function(...args) {
        const numbers = args.map(keyGeneratorcb);
        const key= numbers.join(',');
        let cacheVal=cache[key];
        if(cacheVal!== undefined) return cacheVal;//cache hit
        return cache[key]=fn(...args);
    }
}
