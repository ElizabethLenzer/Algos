function selectionSort(nums, result = []) {
    if (nums.length === 1) {
        result = nums.concat(result);
    } else {
        let largest = nums[0];
        let x = 0;

        for (let i = 1; i < nums.length; i++) {
            if (largest < nums[i]) {
                largest = nums[i]
                x = i;
            }
        }

        let temp = nums[nums.length - 1];
        nums[nums.length - 1] = nums[x];
        nums[x] = temp;

        let tempArr = [nums.pop()];
        result = tempArr.concat(result);

        return nums.length === 0 ? result : selectionSort(nums, result);
    }
    return result;
}
