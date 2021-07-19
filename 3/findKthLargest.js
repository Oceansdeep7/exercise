/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function bubbleSort(nums){
    const {length} = nums
    for(let i = 0 ; i < length; i ++){
        for(let j = i + 1; j < length; j ++){
            if(nums[i] < nums[j] ){
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }
    return nums
}

function findKthLargest(nums, k) {
    return bubbleSort(nums)[k-1]
};