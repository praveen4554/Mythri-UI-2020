var len = nums.length;
var swapped = true;
while (swapped) {
  swapped = false;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (nums[j] > nums[j + 1]) {
        var temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        swapped = true;
      }
    }
  }
}
console.log([2, 4, 1, 5, 8]);
