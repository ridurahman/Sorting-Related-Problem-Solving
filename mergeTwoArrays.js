function merge(nums1, m, nums2, n) {
  let arr = [];
  for (let i = 0; i < m; i++) {
    arr[i] = nums1[i];
  }
  let i = 0;
  let j = 0;
  let k = 0;
  while (i + j < m + n) {
    if ((arr[i] < nums2[j]) || j == n) {
      nums1[k] = arr[i];
      ++i;
    } else {
      nums1[k] = nums2[j];
      ++j;
    }
    k++;
  }
}

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);

let nums1_2 = [1];
let m2 = 1;
let nums2_2 = [];
let n2 = 0;
merge(nums1_2, m2, nums2_2, n2);
console.log(nums1_2);

let nums1_3 = [0];
let m3 = 0;
let nums2_3 = [1];
let n3 = 1;
merge(nums1_3, m3, nums2_3, n3);
console.log(nums1_3);

// Time Complexity: O(m + n)
// Space Complexity: O(m)
