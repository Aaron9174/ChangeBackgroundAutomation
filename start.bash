#!/bin/bash

process_list=$(ps -a | grep -m1 "osascript ChangeBackground.APPLESCRIPT" | grep grep)
process_grep_length=${#process_list}
if [ "$process_grep_length" -gt "0" ]; then
    osascript ChangeBackground.APPLESCRIPT & disown
    echo "SUCCESS";
else 
    echo "Process already exists"
fi