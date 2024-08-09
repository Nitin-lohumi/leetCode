/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll =async function(functions) {
    return new Promise((resolve,reject)=>{
      let count =0;
      const ResultArray =new Array(functions.length);
      functions.forEach((f,i)=>{
        f().then(value=>{
            ResultArray[i]= value;
            count++;
            if(count === functions.length){
                return resolve(ResultArray);
            }
        }).catch((e)=>reject(e));
      });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */