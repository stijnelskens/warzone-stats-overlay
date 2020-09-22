// const API = require('call-of-duty-api')( { platform: 'battle', ratelimit: { maxRequests: 2, perMilliseconds: 1000, maxRPS: 2 } } );

const API = require('call-of-duty-api')({ platform: "psn" });
//I want Warzone Data
API.MWBattleData('chevywood_').then(data => {
    console.log(data);  // see output
}).catch(err => {
    console.log(err);
});