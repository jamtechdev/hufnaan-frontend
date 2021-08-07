var path = require('path');

var root = path.join(__dirname);

var config = {
    rootDir: root,
    // Targets ========================================================
    serveDir: path.join(root, '.serve'),
    distDir: path.join(root, 'dist'),
    clientManifestFile: 'manifest.webpack.json',
    clientStatsFile: 'stats.webpack.json',

    // Source Directory ===============================================
    srcDir: path.join(root, 'app'),
    srcServerDir: path.join(root, 'server'),

    // HTML Layout ====================================================
    srcHtmlLayout: path.join(root, 'app', 'public', 'index.html'),

    // Site Config ====================================================
    siteTitle: 'Hufnaan',
    siteDescription: 'Hufnaan Dashboard ready for Development',
    siteCannonicalUrl: 'http://localhost:4100',
    siteKeywords: 'E-learning',
    scssIncludes: [],
        // Firebase Config ====================================================
    firebase: {
        apiKey: "AIzaSyA-sFPOHnTAagEgUCdPwQrxRFlI5y-doNs",
        authDomain: "hufnaan-5fca7.firebaseapp.com",
        databaseURL: "https://hufnaan-5fca7-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "hufnaan-5fca7",
        storageBucket: "hufnaan-5fca7.appspot.com",
        messagingSenderId: "1084848224434",
        appId: "1:1084848224434:web:4f6918c06097b876e771ab",
        measurementId: "G-R99XRKM4JC"
    },
    api: {
        URL: "http://localhost:3001/api",
      }
    
}

module.exports = config;