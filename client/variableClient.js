const fs = require('fs');
const https = require('https');
const getAppDataPath = require("appdata-path");
const { Client, Authenticator } = require('minecraft-launcher-core');
const launcher = new Client();
const mod = getAppDataPath(".eronix/mods");