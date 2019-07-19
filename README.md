# Steam Review Filter
Just a quick test to change the CSS of Steam reviews based on their content. Currently this only makes reviews transparent if they don't contain a few keywords related to vr games.

## Install
1. Download & Extract
2. Navigate to about:debugging in FireFox (45+) and 
3. Click "Load Temporary Add-on" and open the manifest.json

## Use
Navigate to any Steam reveiw page https://steamcommunity.com/app/APPID/reviews/

[Example 1: Project CARS 2](https://steamcommunity.com/app/378860/reviews/?browsefilter=toprated&snr=1_5_100010_&p=1)

[Example 2: Elite Dangerous](https://steamcommunity.com/app/359320/reviews/?p=1&browsefilter=toprated)

## Why?
Currently there is no way to filter or search through reviews on Steam. A review cannot be submitted as a VR or PC review on a game that supports both options. By making reviews that do not contain a few keywords transparent it's easier to skim through without losing the general opinion of the game.

Later this could be made to support groups of filters that change the CSS in different ways. Another example could be a filter for performance issues (using keywords like FPS, stuttering, crashed, laggy), a filter for multiplayer content, etc.