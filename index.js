const axios = require("axios");

const { createBrandingJob } = require("./job");

const portalUrl = "http://empirelinux.com:9000";

const job = createBrandingJob();

console.log("job:", JSON.stringify(job, null, 4));

/*
axios.post(`${portalUrl}/field-data`, job).then((res) => {
    console.log("Success");
}); 

*/
