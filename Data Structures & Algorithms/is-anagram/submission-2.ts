class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const sFrequency = {}
        const tFrequency = {}
        for (const sSub of s) {
            if (!sFrequency[sSub]) {
                sFrequency[sSub] = 1;
            } else {
                sFrequency[sSub]++
            }
        }
        for (const tSub of t) {
            if (!tFrequency[tSub]) {
                tFrequency[tSub] = 1;
            } else {
                tFrequency[tSub]++
            }
        }

        for (const [key, value] of Object.entries(sFrequency)) {
            if (!tFrequency[key] || value !== tFrequency[key]) return false 
        }
        return true
    }
}
