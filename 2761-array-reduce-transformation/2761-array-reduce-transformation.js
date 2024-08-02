/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let store =init;
    if(nums.length==null){
        store = init;
        return store;
    }
     else{
        for(let i= 0; i<nums.length; i++){
            store = fn(store,nums[i]);
        }
     }
     return store;
};