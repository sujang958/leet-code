class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const convertToArray = (listnode: ListNode, arr: number[] = []) => {
  if (typeof listnode.val === "number") arr.push(listnode.val)
  if (listnode.next) convertToArray(listnode.next, arr)

  return arr
}

const convertToListNode = (arr: number[], i = 0) => {
  const ln = new ListNode(arr[i])

  if (typeof arr[i + 1] === "number") ln.next = convertToListNode(arr, i + 1)

  return ln
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const arr = [list1, list2]
    .filter((v): v is ListNode => v !== null)
    .map((v) => convertToArray(v))
    .flat()

  arr.sort((a, b) => a - b)

  if (arr.length <= 0) return null

  return convertToListNode(arr)
}

console.log(mergeTwoLists(new ListNode(), new ListNode(0)))