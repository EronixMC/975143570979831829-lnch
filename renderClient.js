const { Client, Authenticator } = require('minecraft-launcher-core');
const launcher = new Client();
const getAppDataPath = require("appdata-path");
const token = "24515635345EXC152456";

let opts = {
    clientPackage: null,
    authorization: Authenticator.getAuth("Fabien_Ferrari", token.value),
    root: getAppDataPath(".eronix"),
    version: {
        number: "1.12.2",
        type: "release",
    },
    forge: getAppDataPath('.eronix/forge.jar'),
    memory: {
        max: `4G`,
        min: "1G"
    },
    server: {
        host: "localhost",
        port: "25565"
    }
}

function play() {
    launcher.launch(opts);
}

launcher.on('debug', (e) => console.log(e));
launcher.on('data', (e) => console.log(e));
