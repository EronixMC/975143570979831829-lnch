const firebaseConfig = {
    apiKey: "AIzaSyBexyNPogru8Jc7sq4FoZBrFEckPrmBS8c",
    authDomain: "eronixmc.firebaseapp.com",
    databaseURL: "https://eronixmc-default-rtdb.firebaseio.com",
    projectId: "eronixmc",
    storageBucket: "eronixmc.appspot.com",
    messagingSenderId: "469680302705",
    appId: "1:469680302705:web:b2475a19ba090001e109d0",
    measurementId: "G-6Z685TD6MN"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const uid = user.uid;
        const fetchUsers = db.ref(`users/${uid}/`);
        fetchUsers.on('value', function (snapshot) {
            const users = snapshot.val();
            document.getElementById("username").innerHTML = users.username;
            document.getElementById("imgProfil").src = `https://minotar.net/helm/${users.username}/80.png`;

            const userData = getAppDataPath(".eronix/profilCreated.json");
            if(userData) {
                let profilCreated = {"username": users.username, "token": users.uid}
                let profil = JSON.stringify(profilCreated)
                fs.writeFileSync(getAppDataPath(".eronix/profilCreated.json"), profil);
            } else {
                return;
            }
        });
    }
});

async function logout() {
    firebase.auth().signOut().then(() => {
        window.location = './app.html';
    }).catch((error) => {
      console.log(error);
  });
}