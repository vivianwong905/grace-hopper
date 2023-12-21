/* 
Begin by defining a Node class for the individual nodes in the binary tree, each containing a value and pointers for the left and right nodes. 
Following this, write an inorder function that receives a tree's root node as an argument and prints the node values in an inorder sequence. 
To test your solution, establish a binary tree containing nodes with integer values [1,2,3,4,5]. 
Invoke the inorder function to check the output [4,2,5,1,3]. */
// Create a binary tree
//           1
//          / \
//         2   3
//        / \
//       4   5

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inorderTraversal(root) {
  if (root) {
    inorderTraversal(root.left);

    // Print the value of the current node
    process.stdout.write(root.value + " ");

    inorderTraversal(root.right);
  }
}


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);


inorderTraversal(root);

/* Create a Node class in JavaScript to build parts of a binary tree. Then, make an 'isSameTree' function. 
This function checks two binary trees and tells if they are the same or not. Test your function by making two binary trees and comparing them. 
For an input binary tree with nodes [1,2,3], 'isSameTree' should return 'true' for the same output [1,2,3] and 'false' otherwise. */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isSameTree(tree1, tree2) {
  // If both trees are empty, they are the same
  if (!tree1 && !tree2) {
    return true;
  }

  // If one of the trees is empty and the other is not, they are not the same
  if (!tree1 || !tree2) {
    return false;
  }

  // Check if the values of the current nodes are equal
  if (tree1.value !== tree2.value) {
    return false;
  }

  // Recursively check the left and right subtrees
  return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
}

// Create two binary trees
// Tree 1: [1, 2, 3]
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

// Tree 2: [1, 2, 3]
const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

// Test the isSameTree function
console.log(isSameTree(tree1, tree2)); // Output: true

/* 
Develop a 'countNodes' function to calculate the total nodes in a binary tree, and build a TreeNode class for a binary tree in JavaScript. 
For complete trees, it uses the formula 2^h - 1. Verify the function using a given root tree. For a binary tree input with nodes [10,11,12,13,14,15,16], 
the 'countNodes' function should yield an output of 7. */
// Create a binary tree
//          10
//        /    \
//      11      12
//     /  \    /  \
//   13   14  15   16

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countNodes(root) {
  if (!root) {
    return 0;
  }

  // Calculate the height of the left subtree
  let leftHeight = 0;
  let leftNode = root.left;
  while (leftNode) {
    leftHeight++;
    leftNode = leftNode.left;
  }

  // Calculate the height of the right subtree
  let rightHeight = 0;
  let rightNode = root.right;
  while (rightNode) {
    rightHeight++;
    rightNode = rightNode.right;
  }

  // If the height of the left and right subtrees is the same, it's a complete tree
  if (leftHeight === rightHeight) {
    return Math.pow(2, leftHeight + 1) - 1;
  } else {
    // If not, recursively count nodes in the left and right subtrees
    return 1 + countNodes(root.left) + countNodes(root.right);
  }
}


const root = new TreeNode(10);
root.left = new TreeNode(11);
root.right = new TreeNode(12);
root.left.left = new TreeNode(13);
root.left.right = new TreeNode(14);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(16);

// Test the countNodes function
console.log(countNodes(root)); // Output: 7
