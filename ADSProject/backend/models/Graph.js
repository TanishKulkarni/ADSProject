class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addNode(node) {
        if (!this.adjList.has(node)) {
            this.adjList.set(node, []);
        }
    }

    addEdge(patient, doctor) {
        this.addNode(patient);
        this.addNode(doctor);
        this.adjList.get(patient).push(doctor);
    }

    getDoctors(patient) {
        return this.adjList.get(patient);
    }
}

module.exports = Graph;
