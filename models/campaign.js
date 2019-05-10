
let IO = require("./io")


module.exports = {
    camps: function(path){
        return new Promise((resolve, reject) => {
            try {
                 //console.log("getCampaigns " + path);
                IO.checkFileExist(path).then((data) => {
                    //  console.log(data);
                    if (data == "true") {
                        IO.readAFile(path).then((campaigns) => {
                            // console.log(campaigns)
                            campaigns = JSON.parse(campaigns);
                            campaignObj = campaigns;
                            resolve(campaignObj);
                        });
                    }else{
                        reject(new Error +""+ data)
                    }
                });
            } catch (error) {
                reject(error);
            }
        })
    }
}

