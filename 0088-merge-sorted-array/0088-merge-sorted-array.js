/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
        for(let i=0; i<=m; i++){
            nums1[i] = nums1[i];
            while(nums1.length>m){
                nums1.pop();
            }
        }
        for(let j=0; j<n; j++){
            nums1.push(nums2[j]);
        }
        return nums1.sort((a,b)=>a-b);
};