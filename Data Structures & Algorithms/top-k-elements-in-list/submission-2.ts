class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const result = []
        const map: {[key: string]: number} = {}
        for (let num of nums) {
            map[num] = (map[num] ?? 0) + 1;
        }
        const bucket = []
        for (let [key, value] of Object.entries(map)) {
            if (!bucket[value]) bucket[value] = []
            bucket[value].push(key) 
        }
        let left = k
        for (let j = bucket.length - 1; j >= 0 && left >= 0; j--) {
            if (bucket[j] && bucket[j].length <= left) {
                result.push(...bucket[j])
                left -= bucket[j].length
            }
        }
        return result
    }
}
