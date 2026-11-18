class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let product = 1
        let productWithNonZero = 1
        let countZero = 0
        for(let num of nums) {
            if (num === 0) countZero++;
            if (num !== 0) productWithNonZero*=num
            product*=num;
        };
        if (countZero > 1) return Array(nums.length).fill(0)
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                nums[i] = productWithNonZero
            } else {
                nums[i] = product/nums[i]
            }
        }
        return nums
    }
}
