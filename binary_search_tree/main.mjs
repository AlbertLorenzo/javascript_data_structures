import { binarySearchTree } from './binary_tree.mjs';

function main() {
    const tree = new binarySearchTree();
    let vectors = [50, 30, 65, 10, 40, 5, 20, 34, 43, 12, 23];

    vectors.forEach((item, index, array) => {
        tree.insert(item);
    })

    tree.externPower();
}

main(); 