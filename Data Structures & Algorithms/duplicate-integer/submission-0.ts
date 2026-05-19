class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const visited = {}
        for(let i = 0; i < nums.length; i++) {
            if (visited[nums[i]]) return true
            visited[nums[i]] = true;
        }
        return false
    }
}
