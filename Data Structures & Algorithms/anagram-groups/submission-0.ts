class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagrams = {};
        const stabilizeKey = (obj) => JSON.stringify(Object.keys(obj).sort().reduce((res, key) => {
            res[key] = obj[key]
            return res
        }, {}))
        for (let str of strs) {
            const freq = {}
            for (let c of str) {
                freq[c] = (freq[c] ?? 0) + 1;
            }
            const key = stabilizeKey(freq)
            if (anagrams[key]) {
                anagrams[key].push(str)
            } else {
                anagrams[key] = [str]
            }
        }
        return Object.values(anagrams)
    }
}
