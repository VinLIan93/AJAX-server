var sendInfo = {
    data: '2018-7-11',
    info: '发送'
}

function getSendInfo() {
    var data = {
        date: new Date().getTime() - 1000,
        info: '发送' + Math.floor(Math.random()*1000) + 'M数据'
    }
    var data1 = {
        date: new Date().getTime(),
        info: '发送' + Math.floor(Math.random()*1000) + 'M数据'
    }
    return [data,data1];

} 

function getReceiveInfo() {
    var data = {
        date: new Date().getTime() - 1000,
        info: '接收' + Math.floor(Math.random()*1000) + 'M数据'
    }
    var data1 = {
        date: new Date().getTime(),
        info: '接收' + Math.floor(Math.random()*1000) + 'M数据'
    }
    return [data,data1];
}
exports.ftn={
    sends: getSendInfo,
    receives:  getReceiveInfo
}