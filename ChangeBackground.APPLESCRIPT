#!/usr/bin/osascript

repeat 
    delay 45
    set myTime to time string of (current date)
    set timeArray to theSplit(myTime, ":")
    set timeMinutes to item 2 in timeArray
    if timeMinutes = "00" then
        setBackground()
    end if
end repeat

on setBackground()
    set default_dir to "/Users/lemi11ion/Pictures/Backgrounds"
    set pictureList to (list folder default_dir without invisibles)
    set listLength to length of pictureList
    set rn to (random number from 1 to listLength)
    set selectedPicture to item rn of pictureList
    set selectedPicDir to default_dir & "/" & selectedPicture

    tell application "System Events"
        tell current desktop
            set picture to selectedPicDir
        end tell
    end tell

    return selectedPicDir
end setBackground

on theSplit(theString, theDelimiter)
		-- save delimiters to restore old settings
		set oldDelimiters to AppleScript's text item delimiters
		-- set delimiters to delimiter to be used
		set AppleScript's text item delimiters to theDelimiter
		-- create the array
		set theArray to every text item of theString
		-- restore the old setting
		set AppleScript's text item delimiters to oldDelimiters
		-- return the result
		return theArray
	end theSplit