/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filter = new Array();
    let index =0;
    let check;
    for(let i=0; i<arr.length; i++){
       check= fn(arr[i],i);
           if(check==true||check){
               filter[index] = arr[i];
               index++;
           }
    }
    return filter;
};