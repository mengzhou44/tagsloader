const fs = require("fs");
const _ = require("lodash");

const text = fs.readFileSync("./source.json");
const array = JSON.parse(text);

const mats = {};

_.map(array, item => {
    const tag = item[0];
    const matId = item[1];
    if (mats.hasOwnProperty(matId)) {
        mats[matId].tags.push(tag);
    } else {
        mats[matId] = [tag];
    }
})

fs.writeFileSync("./mats.json", JSON.stringify(mats, null, 4));

