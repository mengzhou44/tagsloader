const fs = require("fs");
const _ = require("lodash");
const db = require("./db");


const mats = {};

db.execute({
    text: `select distinct mats.mat_uuid, tags.tag_id 
         from mats join tags on mats.mat_uuid=tags.mat_uuid`,

}).then((result) => {
    console.log("Please wait, application is creating mats ...");
    _.map(result, item => {
        const tag = item.tag_id;
        const matId = item.mat_uuid;
        if (mats.hasOwnProperty(matId)) {
            mats[matId].push(tag);
        } else {
            mats[matId] = [tag];
        }
    });


    fs.writeFileSync("./mats.json", JSON.stringify(mats, null, 4));

    console.log("Mats file is created.");


})




