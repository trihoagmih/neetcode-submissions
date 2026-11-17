class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = {};
        for (let str of strs) {
            const count = Array(26).fill(0)
            const lowerStr = str.toLowerCase()
            for (let c of lowerStr) {
                const index = c.charCodeAt(0) - 97
                count[index] += 1;
            }
            const key = JSON.stringify(count)
            if (!map[key]) map[key] = []
            map[key].push(str)
        }
        return Object.values(map)
    }
}
