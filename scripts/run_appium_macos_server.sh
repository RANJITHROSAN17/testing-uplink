#!/bin/bash
set -ex
npm install -g appium@next
appium -v
appium driver install mac2
appium driver list
appium > /dev/null 2>&1
