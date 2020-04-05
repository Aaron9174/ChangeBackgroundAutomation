#!/bin/bash

PID=$(ps -a | grep -m1 "osascript ChangeBackground.APPLESCRIPT" | awk '{print $1}')
kill $PID && echo SUCCESS