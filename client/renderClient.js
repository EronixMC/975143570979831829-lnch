const users = require(getAppDataPath('.eronix/profilCreated.json'));
const ram = require(getAppDataPath('.eronix/options/ramOptions.json'));

let opts = {
    clientPackage: null,
    authorization: Authenticator.getAuth(users.username, users.token.value),
    root: getAppDataPath(".eronix"),
    version: {
        number: "1.12.2",
        type: "release",
    },
    forge: getAppDataPath('.eronix/forge.jar'),
    memory: {
        max: `${ram.ramMax}G`,
        min: `${ram.ramMin}G`,
    },
    server: {
        host: "play.eronix.fr",
        port: "25565"
    }
}

const download = document.getElementById('downloading');

function play() {
    launcher.launch(opts);
    download.style.display = "flex";
    setTimeout(() => {
        download.style.display = "none";
    }, 7400);
}



launcher.on('debug', (e) => {
    console.log(e)
    document.getElementById('consoleData').innerHTML = e;
});
launcher.on('data', (e) => {
    console.log(e)
});