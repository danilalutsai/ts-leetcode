class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  function walk(node: TreeNode | null): void {
    if (node === null) {
      return;
    }

    walk(node.left);            // B  -> rule line 1
    result.push(node.val);     // C  -> rule line 2
    walk(node.right);            // D  -> rule line 3
  }

  walk(root);
  return result;
}
