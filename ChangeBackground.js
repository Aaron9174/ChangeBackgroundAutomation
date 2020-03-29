/**
 * Automation script used to set a desktop
 */
var app = Application.currentApplication();
app.includeStandardAdditions = true;

const backgroundDirectory = "/Users/lemi11ion/Pictures/Backgrounds";

try {
    // Get user provided directory
    var path = Path(backgroundDirectory);

    // User finder application to check for existance
    var finderApp = Application("Finder");
    var status = finderApp.exists(path);
    if (!status) {
        throw new Error("Directory does not exist.");
    }

    // Use System Application to loop through the directory
    var appSys = Application('System Events');
    var lstHarvest = appSys.folders.byName(path.toString()).diskItems.name();

    // Choose a random a picture
    var randomNum = Math.round(Math.random()*(lstHarvest.length - 1));
    var randomPicName = lstHarvest[randomNum];
    var picPath = backgroundDirectory + "/" + randomPicName;
    
    // Now set the background
    var desktopRef = appSys.currentDesktop;
    var desktopProp = desktopRef.properties();
    desktopProp.picture = picPath.toString();
    appSys.currentDesktop.properties().picture = picPath.toString();
} catch(e) {
    app.displayNotification(e.message);
    console.log(e.message);
}