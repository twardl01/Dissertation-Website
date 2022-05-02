var game;

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    //baseUrl = default path
    baseUrl: 'lib',

    //paths to folders/files used in document
    paths: {
        app: '../js',
        jquery: 'jquery-3.6.0',
     }
});

//ensures all modules are imported before page loads
requirejs(["app/TicTacToeGame", "app/TicTacToeModel","app/TicTacToeView", "app/Players", "app/Credentials", "lib/tmi.js", "jquery"], function() {

    if (Credentials.OAuth == null) {
        if (document.location.hash.length > 1) {
            let oauth = new URLSearchParams(document.location.hash);
            
            Credentials.OAuth = oauth.get("access_token");
            document.location = "https://twardl01.github.io/";
        } else {
            document.location = "https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=nevfo1rfh0nqsty2ih6fifsfidrrdg&redirect_uri=https://twardl01.github.io/&scope=chat%3Aread";
        }
    }
    game = new TicTacToeGame();
});