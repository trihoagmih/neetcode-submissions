class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const len = nums.length
        let prefixProd = 1
        let postfixProd = 1
        const resProd = Array(len).fill(1)
        
        for (let i = 0; i < len; i++) {
            resProd[i] = prefixProd
            prefixProd *= nums[i]
        }
        for (let i = len - 1; i >= 0; i--) {
            resProd[i] *= postfixProd
            postfixProd *= nums[i]
        }
        return resProd
    }
}
