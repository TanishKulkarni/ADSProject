class AVLNode {
    constructor(userID, userData) {
        this.userID = userID;
        this.userData = userData;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    height(node) {
        return node ? node.height : 0;
    }

    rightRotate(y) {
        let x = y.left;
        let T2 = x.right;
        x.right = y;
        y.left = T2;
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        return x;
    }

    leftRotate(x) {
        let y = x.right;
        let T2 = y.left;
        y.left = x;
        x.right = T2;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        return y;
    }

    getBalanceFactor(node) {
        return node ? this.height(node.left) - this.height(node.right) : 0;
    }

    insert(node, userID, userData) {
        if (!node) return new AVLNode(userID, userData);

        if (userID < node.userID) {
            node.left = this.insert(node.left, userID, userData);
        } else if (userID > node.userID) {
            node.right = this.insert(node.right, userID, userData);
        } else {
            return node;
        }

        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
        let balance = this.getBalanceFactor(node);

        if (balance > 1 && userID < node.left.userID) {
            return this.rightRotate(node);
        }
        if (balance < -1 && userID > node.right.userID) {
            return this.leftRotate(node);
        }
        if (balance > 1 && userID > node.left.userID) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }
        if (balance < -1 && userID < node.right.userID) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        return node;
    }

    search(node, userID) {
        if (!node) return null;
        if (userID === node.userID) return node;
        if (userID < node.userID) return this.search(node.left, userID);
        return this.search(node.right, userID);
    }
}

module.exports = AVLTree;
