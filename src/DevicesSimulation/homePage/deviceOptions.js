
var environmentOptions = [{"address":"10.10.10.129:40002","name":"CN_TEST","environmentType":"CN_TEST"},{"address":"10.10.10.139:40002","name":"CN_DEVELOPMENT","environmentType":"CN_DEVELOPMENT"},{"address":"cn.telehems.com:10000","name":"CN_RELEASE","environmentType":"CN_RELEASE"},{"address":"10.10.10.29:40002","name":"US_TEST","environmentType":"US_TEST"},{"address":"10.10.10.29:40002","name":"US_DEVELOPMENT","environmentType":"US_DEVELOPMENT"},{"address":"10.10.10.29:40002","name":"US_RELEASE","environmentType":"US_RELEASE"}];

var applianceOptions = [{"applianceType":"COMMON","name":"普通开关设备"},{"applianceType":"AIRCONDITION","name":"空调"},{"applianceType":"TC","name":"温控器"},{"applianceType":"HEATER","name":"热水器"},{"applianceType":"W2","name":"墙开"},{"applianceType":"POWERPLANT","name":"发电厂"},{"applianceType":"CHARGINEPOST","name":"充电桩"},{"applianceType":"STOREDENERGY","name":"储能"},{"applianceType":"BUILDING","name":"楼宇大用户"},{"applianceType":"STORTED_COLD","name":"冷储罐"},{"applianceType":"STORTED_HOT","name":"热储罐"},{"applianceType":"CONSUME_COLD","name":"冷消耗用户"},{"applianceType":"CONSUME_HOT","name":"热消耗用户"},{"applianceType":"GASTURBIN","name":"燃机"},{"applianceType":"POWERMONITOR","name":"PowerMonitor"},{"applianceType":"CABINET_COLLECTION","name":"采集柜/控制柜/变频柜"},{"applianceType":"TP","name":"采集柜"}];

var typeOptions = [{"deviceType":"F1","name":"F1"},{"deviceType":"F2","name":"F2"},{"deviceType":"DW","name":"DW"},{"deviceType":"TG","name":"TG"},{"deviceType":"TP","name":"TP"},{"deviceType":"W2","name":"W2"},{"deviceType":"P2","name":"P2"}];


exports.deviceOptions= {
    applianceOptions,
    typeOptions,
    environmentOptions
};