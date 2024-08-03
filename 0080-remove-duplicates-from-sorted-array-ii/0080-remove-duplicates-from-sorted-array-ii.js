/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
     if(nums.length===0) return 0;
  let unique =0;
  let dublicate = 0;
  for(let i=0; i<nums.length; i++){
    if(nums[i]!=nums[i+1]||i==nums.length-1){
         nums[unique++] = nums[i];
         dublicate=0;
    }else{
        if(dublicate<1){
            nums[unique++] = nums[i];
            dublicate++;
        }else{
            dublicate++;
        }
    }
  }
  return unique++;
};