// Partition: Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. lf x is contained within the list, the values of x only need to be after the elements less than x (see below).The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.
// 2.4
// function partition (linkedList, partition) {
//   var counter = 0;
//   var node =
//   var obj = {};
//   var current = linkedList.head;
//   while (current.next) {
//     if (current.value === partition) {
//       node = partition;
//       counter++;
//     } else {
//       obj[current.value] = current;
//     }
//     current = current.next
//   };
//   var result = {
//     head: null;
//     tail: null;
//   };
//   var currentResult = result.head
//   for (var key in obj) {
//     if (!currentResult) {
//       currentResult = obj[key]
//     } else {
//       currentResult.next = obj[key]
//     }
//     currentResult = currentResult.next
//   }
//   var partitionResult = result.head
//   for (var i = 0; i < counter; i++) {
//     while()
//   }
// }