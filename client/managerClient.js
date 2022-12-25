/*-----[Console]-----*/
const consoleModal = document.getElementById('consoleModal');
const openConsole = document.getElementById('openConsole');
const closeConsole = document.getElementById('closeConsole');

consoleModal.style.display = "none";
openConsole.onclick = function () {
    consoleModal.style.display = "flex";
}

closeConsole.onclick = function () {
    consoleModal.style.display = "none";
}
/*-----[Console]-----*/


/*-----[Config]-----*/
const configModal = document.getElementById('configModal');
const openConfig = document.getElementById('openConfig');
const closeConfig = document.getElementById('closeConfig');

configModal.style.display = "none";
openConfig.onclick = function () {
    configModal.style.display = "flex";
}

closeConfig.onclick = function () {
    //configModal.style.display = "none";
    window.location = "./index.html";
}
/*-----[Config]-----*/


/*-----[Ram]-----*/
const data = require(getAppDataPath(".eronix/options/ramOptions.json"));
const rangeSlider = document.getElementById('rangeSlider');
rangeSlider.value = data.ramMax;

setInterval(() => {
    document.getElementById('rangeValue').innerHTML = rangeSlider.value;
}, 1);

setInterval(() => {
    let ramDefault = {
        "ramMin": "1",
        "ramMax": `${rangeSlider.value}`,
    }
    
    let rams = JSON.stringify(ramDefault)
    fs.writeFileSync(getAppDataPath(".eronix/options/ramOptions.json"), rams)
}, 5);
/*-----[Ram]-----*/