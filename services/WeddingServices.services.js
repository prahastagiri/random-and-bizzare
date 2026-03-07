const API_HOSTNAME = "http://127.0.0.1:1337"
const API_GET_COUPLE = "/api/couple-infos?filters[couple_alias][$eq]=joeolivia"
const API_GET_GROOM = "/api/grooms/"
const API_GET_BRIDE = "/api/brides/"
const API_CONGRATULATION_MSG = "/api/congratulations"

function getCoupleInfo() {
    return fetch(API_HOSTNAME + API_GET_COUPLE, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            // console.error(error);
            return { error: true, message: error };
        });
}

function getGroomInfo(id) {
    return fetch(API_HOSTNAME + API_GET_GROOM + id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error(error);
            return { error: true, message: error };
        });
}
function getBrideInfo(id) {
    return fetch(API_HOSTNAME + API_GET_BRIDE + id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error(error);
            return { error: true, message: error };
        });
}
function getAllMessage(coupleid=null) {
    var apiUrl = API_HOSTNAME + API_CONGRATULATION_MSG + "?_limit=-1";
    if(coupleid){
        apiUrl += "&filters[coupleid][$eq]="+coupleid;
    }
    return fetch(apiUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error(error);
            return { error: true, message: error };
        });
}
function postSaveMessage(body) {
    fetch(API_HOSTNAME + API_CONGRATULATION_MSG, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: body,
    })
        .then((response) => response.json())
        .then((data) => {return data})
        .catch((error) => {
            return { error: true, message: error };
        });
}

export const WeddingAPI = {
    getCoupleInfo,
    getGroomInfo,
    getBrideInfo,
    getAllMessage,
    postSaveMessage,
}