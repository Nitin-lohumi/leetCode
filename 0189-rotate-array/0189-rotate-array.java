class Solution {
    public void rotate(int[] nums, int k) {
        	int n = nums.length;
         k = k % n;
    int[] copy = new int[n];
    
    for (int i = 0; i < n; i++) {
        copy[(i + k) % n] = nums[i];
	}
	System.out.println();
    for (int i = 0; i < n; i++) {
        nums[i] = copy[i];
    }
	for(int i=0; i<n; i++){
		System.out.print(copy[i]);
	}
    }
}