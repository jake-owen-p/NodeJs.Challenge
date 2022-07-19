class Db {
    constructor() {
        this._data = [];
        this._nextId = 0;

        this.insert({
            id: 0
        })
        this.insert({
            id: 1,
            name: "Manufacturing",
            headcount: 1000
        })
        this.insert({
            name: "Wholesale and retail trade",
            headcount: 2000
        })
        this.insert({
            id: 99,
            name: "Accounting",
            headcount: 9900
        })
    }

    async findById(id) {
        return this._data[id];
    }

    async findAll() {
        return this._data;
    }

    async insert(industry) {
        this._data.push(
            {
               ...industry,
               id: this._nextId
            }
        )
        this._nextId++;
        return industry;
    }
}

module.exports = new Db();