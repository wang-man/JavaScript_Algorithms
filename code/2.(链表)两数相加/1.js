/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */



//  这题的关键是一定要按照题目描述将链表的数字项先反转然后再相加
var addTwoNumbers = function (l1, l2) {
  // 两数字相加。不直接用数字相加的原因是避免js超长数相加失效，如1000000000000000000000000000000+1这种。
  const addBig = (a, b) => {
    //1.比较两个数长度  然后短的一方前面补0
    if (a.length > b.length) {
      let arr = Array(a.length - b.length).fill(0);
      b = arr.join('') + b
    } else if (a.length < b.length) {
      let arr = Array(b.length - a.length).fill(0);
      a = arr.join('') + a
    }
    //2.反转两个数 （这里是因为人习惯从左往右加 而数字相加是从右到左 因此反转一下比较好理解）
    a = a.split('').reverse();
    b = b.split('').reverse();
    console.log(a, b)
    //3.循环两个数组  并进行相加  如果和大于10 则 sign = 1,当前位置的值为(和%10)
    let sign = 0;//标记 是否进位
    let newVal = [];//用于存储最后的结果
    for (let j = 0; j < a.length; j++) {
      //除1是保证都为数字 这里也可以用Number()
      let val = a[j] / 1 + b[j] / 1 + sign;
      if (val >= 10) {
        sign = 1;
        newVal.unshift(val % 10)//这里用unshift而不是push是因为可以省了使用reverse
      } else {
        sign = 0;
        newVal.unshift(val)
      }
      if (j === a.length - 1 && sign === 1) {
        newVal.unshift(sign)
      }
    }

    let result = newVal.join('');
    return result

  }

  let l_1 = l1, num_1 = null;
  let l_2 = l2, num_2 = null;
  // 1.将链表转化为数字
  while (l_1) {
    num_1 = num_1 ? `${num_1}${l_1.val}` : l_1.val + '';
    l_1 = l_1.next;
  }
  while (l_2) {
    num_2 = num_2 ? `${num_2}${l_2.val}` : l_2.val + '';
    l_2 = l_2.next;
  }
  // 2.按照题目描述将数字反转
  num_1 = num_1.split('').reverse().join('');
  num_2 = num_2.split('').reverse().join('');

  // 3.得到数字相加的结果，然后根据题目描述将其反转
  const str = addBig(num_1, num_2).split('').reverse().join('');
  console.log('str', str);

  let result = null;
  let length = str.length;

  // 4.将得到的数字转化为链表
  while (length--) {
    let last = JSON.parse(JSON.stringify(result));
    if (!result) {
      result = {};
    }
    result.val = str[length];
    result.next = last;
  }
  console.log(JSON.stringify(result))
  return result;
};



// const l1 = {
//   val: 1, next: {
//     val: 0, next: {
//       val: 0, next: {
//         val: 0, next: {
//           val: 0, next: {
//             val: 0, next: {
//               val: 0, next: {
//                 val: 0, next: {
//                   val: 0, next: {
//                     val: 0, next: {
//                       val: 0, next: {
//                         val: 0, next: {
//                           val: 0, next: {
//                             val: 0, next: {
//                               val: 0, next: {
//                                 val: 0, next: {
//                                   val: 0, next: {
//                                     val: 0, next: {
//                                       val: 0, next: {
//                                         val: 0, next: {
//                                           val: 0, next: {
//                                             val: 0, next: {
//                                               val: 0, next: {
//                                                 val: 0, next: {
//                                                   val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 1, } } } } }
//                                                 }
//                                               }
//                                             }
//                                           }
//                                         }
//                                       }
//                                     }
//                                   }
//                                 }
//                               }
//                             }
//                           }
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }



// const l2 = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4 } } } }


// const l1 = {
//   val: 9, next: {
//     val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: { val: 9 } } } }
//   }
// }
// const l2 = {
//   val: 9, next: {
//     val: 9, next: { val: 9, next: { val: 9 } }
//   }
// }


const l1 = {
  val: 2, next: {
    val: 4, next: { val: 9 }
  }
}
const l2 = {
  val: 5, next: {
    val: 6, next: { val: 4, next: { val: 9 } }
  }
}

addTwoNumbers(l1, l2)