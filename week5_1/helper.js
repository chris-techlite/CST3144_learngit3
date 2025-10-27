function getcCurrentTime() {
    return new Date().toLocaleString();
}


function getServerStatus() {
    return { status: "online", uptime: process.uptime() };
}

module.exports = {
    getcCurrentTime,
    getServerStatus
};
