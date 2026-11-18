class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const len = nums.length
        const prefixProd = Array(len).fill(1)
        const resProd = Array(len).fill(1)
        const suffixProd = Array(len).fill(1)
        
        for (let i = 1; i < len; i++) {
            prefixProd[i] = nums[i - 1] * prefixProd[i - 1]
        }
        for (let i = len - 2; i >= 0; i--) {
            suffixProd[i] = nums[i + 1] * suffixProd[i + 1]
        }
        console.log(prefixProd, suffixProd)
        for (let i = 0; i < len; i++) {
            resProd[i] = prefixProd[i] * suffixProd[i]
        }
        return resProd
    }
}
