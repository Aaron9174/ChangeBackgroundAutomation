/**
 * Automation script used to set a desktop
 */
var app = Application.currentApplication();
app.includeStandardAdditions = true;

try {
    var directory = app.displayDialog("Enter the directory of the picture you want to save.", { defaultAnswer: "/Users/lemi11ion/Pictures/Backgrounds" });
    var path = Path(directory.textReturned);
    var finderApp = Application("Finder");
    var status = finderApp.exists(path);
    const practice = `yeet: ${path}`;
    const result = app.doShellScript(`osascript -e 'tell application "Finder"
    set desktop picture to POSIX file ${path}'`); console.log(result);
    if (!status) {
        throw new Error("Directory does not exist.");
    }

    
} catch(e) {
    app.displayNotification(e.message);
    console.log(e.message);
}