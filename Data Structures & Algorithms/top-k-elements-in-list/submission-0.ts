class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map: {[key: string]: number} = {}
        for (let num of nums) {
            map[num] = (map[num] ?? 0) + 1;
        }
        return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, k).map(([key, value]) => Number(key))
    }
}
