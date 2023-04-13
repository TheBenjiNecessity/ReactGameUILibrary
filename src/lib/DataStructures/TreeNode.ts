export default class TreeNode {
    constructor(public item: any, public children: TreeNode[] = []) {}

    get isLeaf() {
        return this.children.length === 0;
    }
}
