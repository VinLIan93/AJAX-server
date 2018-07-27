const express = require('express');
const app = express();

let deviceData = require('./src/DevicesSimulation/homePage/querySimulativeDevices.js')
//console.log(deviceData)

let transmission = require('./src/DevicesSimulation/homePage/deviceSendReceiveInfo.js')
//console.log(transmission.ftn.sends());

let deviceOptions = require('./src/DevicesSimulation/homePage/deviceOptions.js')
//console.log(deviceOptions)

let deviceSetOptions = require('./src/DevicesSimulation/devicesetpage/getNewDeviceIDAndOptions.js')

let AssDevices = require('./src/DevicesSimulation/associationPage/associationDevices.js');

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://10.10.11.55:3200');
    //res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', "X-Requseted-With");
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('X-Powered-By', '3.2.1');
    res.header('Context-Type', 'application/json;charset=utf-8');
    next();
})

var questions=[
    {
        data: 213,
        num:444,
        age:12
    },
    {
        data: 323,
        num: 122,
        age: 13
    }
];

//测试接口
app.post("/123", function(req, res){
    res.status(200)
    res.json(questions)
})

app.post("/homePage/querySimulativeDevices", function(reg, res){
    res.status(200)
    res.json(deviceData.deviceLists)
})

app.post("/homePage/showSendInfo", function(reg, res){
    res.status(200)
    res.json(transmission.ftn.sends())
    
    //res.json([]);
})

app.post("/homePage/showReceiveInfo", function(reg, res){
    res.status(200)
    res.json(transmission.ftn.receives())
    
    //res.json([]);
})

app.post("/deviceSetPage/getDeviceType", function(reg, res){
    let data =deviceOptions.deviceOptions.typeOptions;
    res.status(200)
    res.json(data)
})

app.post("/deviceSetPage/getApplianceType", function(reg, res){
    let data =deviceOptions.deviceOptions.applianceOptions;
    res.status(200)
    res.json(data)
})

app.post("/deviceSetPage/getEnvironmentType", function(reg, res){
    let data =deviceOptions.deviceOptions.environmentOptions;
    //console.log(deviceOptions);
    res.status(200)
    res.json(data)
})

app.post("/deviceSetPage/getNewDeviceIDAndOptions", function(reg,res){
    res.status(200)
    res.json(deviceSetOptions.res)
})

app.post("/deviceSetPage/getDeviceSetOptions", function(reg,res){
    res.status(200)
    res.json(deviceSetOptions.res)
})

app.post("/deviceSetPage/setDeviceOptions", function(reg,res) {
    //console.log(reg)
    res.status(200)
    res.json({result:'successed'})
})

app.post("/associationPage/getAssociatedDevices", function(reg,res) {
    res.status(200)
    res.json(AssDevices)
})

//配置服务端口
var server = app.listen(5000, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})