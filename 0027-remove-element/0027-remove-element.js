/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i =0; 
  let c =0;
  for(i=0;i<nums.length;i++){
    if(nums[i]!=val){
        nums[c]=nums[i];
        c++;
    }
}
console.log(nums);
return c;
};