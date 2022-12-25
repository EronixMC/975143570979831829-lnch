const eronixv = getAppDataPath(".eronix");
setTimeout(() => {
    if (!eronixv) { return } else {
        let createClient = { 
            clientPackage: null,
            root: getAppDataPath(".eronix"),
            version: {
                number: "1.12.2",
                type: "release",
            },
            forge: getAppDataPath('.eronix/forge.jar'),
        };
        launcher.launch(createClient);
    };

    setTimeout(() => {
        if (!mod) { return } else { let cMod = { root: getAppDataPath(".eronix/mods") }; launcher.launch(cMod); };
    }, 2500);
}, 2000);

const options = getAppDataPath(".eronix/options");
setTimeout(() => {
    if (!options) { return } else { 
        let cMod = { root: getAppDataPath(".eronix/options") }; launcher.launch(cMod); 
        setTimeout(() => {
            let ramDefault = {"ramMin": "1","ramMax": "2",}
            let rams = JSON.stringify(ramDefault)
            fs.writeFileSync(getAppDataPath(".eronix/options/ramOptions.json"), rams)
        }, 5000);
    };
}, 3000);





setTimeout(() => {
    const file = fs.createWriteStream(getAppDataPath(".eronix/forge.jar"));
    https.get("https://maven.minecraftforge.net/net/minecraftforge/forge/1.12.2-14.23.5.2859/forge-1.12.2-14.23.5.2859-installer.jar", function (response) {
        response.pipe(file); file.on("created", () => { file.close(); });
    });
}, 3000);