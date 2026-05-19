class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const result: number[] = [];
        const map = {};
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (map[diff] === undefined) {
                map[nums[i]] = i;
            } else {
                result.push(map[diff]);
                result.push(i);
            }
        }
        

        return result;
    }
}
