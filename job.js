const fs = require("fs");


function createBrandingJob() {
    const text = fs.readFileSync('./mats.json');
    const mats = JSON.parse(text);
    const time = Math.floor(Date.now());
    const gps = [-104.323, 45.573];

    const job = {
        client: "454545 Alberta Ltd.",
        job: "job-2018-01-19",
        clientid: 0,
        jobid: 0,
        gps,
        deviceid: "macbook",
        time,
        mats: []
    }

    for (var prop in mats) {
        if (mats.hasOwnProperty(prop)) {
            const mat = {
                id: prop,
                tags: mats[prop],
                gps,
                time,
                branded: true
            };
            job.mats.push(mat);
        }
    }
    return job;
}

module.exports = { createBrandingJob }