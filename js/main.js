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
requirejs(["app/HumanPlayer", "app/ChatbotPlayer","app/TicTacToeGame", "app/TicTacToeModel","app/TicTacToeView", "app/Players", "app/Credentials", "lib/tmi.js", "jquery"], function() {

    if (Credentials.OAuth == null) {
        console.log("OAuth Token not in session storage");
        if (document.location.hash.length > 1) {
            console.log("Hash Returned:" + document.location.hash);
            let oauth = new URLSearchParams(document.location.hash.substring(1));

            let accesstoken = oauth.get("access_token");
            console.log("accesstoken: " + accesstoken);

            if (accesstoken != null) {
                //Saves auth token (if present) and redirects to remove the auth from the URL.
                Credentials.OAuth = "oauth:" + oauth.get("access_token");
                document.location = "https://twardl01.github.io/";
            }
           
        } else {
            console.log("Redirecting to Fetch Auth Token");
            document.location = "https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=nevfo1rfh0nqsty2ih6fifsfidrrdg&redirect_uri=https://twardl01.github.io/&scope=chat%3Aread";
        }
    }
    let game = new TicTacToeGame();
});