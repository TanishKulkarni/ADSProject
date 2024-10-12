class SegmentTree {
    constructor(size) {
        this.size = size;
        this.tree = new Array(4 * size).fill(0);
    }

    build(arr, node, start, end) {
        if (start === end) {
            this.tree[node] = arr[start];
        } else {
            let mid = Math.floor((start + end) / 2);
            this.build(arr, 2 * node, start, mid);
            this.build(arr, 2 * node + 1, mid + 1, end);
            this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
        }
    }

    query(node, start, end, L, R) {
        if (R < start || end < L) return 0;
        if (L <= start && end <= R) return this.tree[node];
        let mid = Math.floor((start + end) / 2);
        let leftQuery = this.query(2 * node, start, mid, L, R);
        let rightQuery = this.query(2 * node + 1, mid + 1, end, L, R);
        return leftQuery + rightQuery;
    }

    update(node, start, end, idx, value) {
        if (start === end) {
            this.tree[node] = value;
        } else {
            let mid = Math.floor((start + end) / 2);
            if (start <= idx && idx <= mid) {
                this.update(2 * node, start, mid, idx, value);
            } else {
                this.update(2 * node + 1, mid + 1, end, idx, value);
            }
            this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
        }
    }
}

module.exports = SegmentTree;
    