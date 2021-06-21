/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [[]];
  const rec = (head, list) => {
    for (let i = 0; i < list.length; i++) {
      for (let j = i; j < list.length; j++) {
        if (j === i) {
          res.push([list[i]])
        } else {
          res.push([list[i]].concat(list[j]));
        };
        if (j - i === 2) {
          // res.push([list[i]].concat(list.slice(i + 1, j + 1)));
          if (head.length !== 1) {
            res.push(head.concat(list.slice(i + 1, j + 1)));
          }
          res.push([list[i]].concat(list.slice(j - 1, j + 1)));
          console.log(head)
          // res.push(head.concat(list.slice(i, j + 1)));
        }
        if (j - i > 2) {
          rec(head.concat(list[i + 1]), list.slice(i + 1, j + 1));
        }
      }
    }
  }
  rec([nums[0]], nums);
  console.log(res)
};

const nums = [1, 2, 3, 4]
subsets(nums)