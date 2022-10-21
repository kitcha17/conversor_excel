const fs = require("fs");
const util = require("util");

module.exports = class Writer {

    constructor() {
        this.writer = util.promisify(fs.writeFile);
    }

    async Write(filename, data) {
        try {
            await this.writer(filename, data);
            return true;
        } catch (err) {
            return false;
        }
    }
}