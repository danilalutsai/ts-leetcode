//Structure

// A tree is nodes linked by pointers. Each node holds a value plus references to at most two children — hence "binary".

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = this;
    this.right = this;
  }
}

const instance = new TreeNode(9);
console.log(instance.left);

// That's the whole definition. No parent pointer usually. null means "no child there".

//         4
//        / \
//       2   7
//      / \   \
//     1   3   9

// Same tree as objects:

// node(4).left  -> node(2)
// node(4).right -> node(7)
// node(2).left  -> node(1)
// node(2).right -> node(3)
// node(1).left  -> null
// node(1).right -> null
// ...

// Vocabulary

// - root — the top node, 4. Your only handle on the tree.
// - leaf — node with no children: 1, 3, 9.
// - parent / child — 2 is parent of 1 and 3.
// - subtree — any node plus everything below it. 2 with 1 and 3 is a subtree, and it is itself a complete valid tree.
// - height / depth — longest root-to-leaf path. Above: 3 levels.

// That third point is the important one. A subtree is just a smaller tree. That's why nearly every tree algorithm is recursive.
