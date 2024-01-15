function findKthLargestNum(nums, k) {
  sort(nums);
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 == k) {
      return nums[i];
    }
  }
}

function sort(nums) {
  mergeSort(nums, 0, nums.length - 1);
}

function mergeSort(nums, left, right) {
  if (left >= right) {
    return;
  }
  let middle = left + parseInt((right - left) / 2);
  mergeSort(nums, left, middle);
  mergeSort(nums, middle + 1, right);
  merge(nums, left, middle, right);
}

function merge(nums, left, middle, right) {
  let leftArray = [];
  let rightArray = [];
  let leftLength = middle - left + 1;
  let rightLength = right - middle;

  for (let i = 0; i < leftLength; i++) {
    leftArray.push(nums[left + i]);
  }
  for (let i = 0; i < rightLength; i++) {
    rightArray.push(nums[middle + 1 + i]);
  }
  let i = 0;
  let j = 0;
  let k = left;
  while (i < leftLength || j < rightLength) {
    if (leftArray[i] > rightArray[j] || j == rightLength) {
      nums[k] = leftArray[i];
      ++i;
    } else {
      nums[k] = rightArray[j];
      ++j;
    }
    k++;
  }
}

console.log(findKthLargestNum([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargestNum([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));

/* Time Complexity: O(nlog(n)) 
   Space Complexity: O(n) 

I used merge sort to solve this problem as in problem statement there was mentioned that time complexity should be O(nlog(n)) and we know that merge sort has time complexity O(nlog(n)) in every case.
*/