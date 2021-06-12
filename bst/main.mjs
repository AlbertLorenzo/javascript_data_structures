import { binarySearchTree } from './binary_tree.mjs';

function main() {
    const tree = new binarySearchTree();

    tree.insert(10);
    tree.insert(7);
    tree.insert(15);
    tree.insert(5);
    tree.insert(8);
    tree.insert(11);
    tree.insert(20);

    tree.levelOrderTraversal();
    tree.levelOrderTraversal();
}

main(); 