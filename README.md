# min-youtube-element-blocker

Block specific elements of YouTube, like the Feed, Comments, Merch and more. **Made for [Min](https://github.com/minbrowser/min) browser**, although it can be used with any other userscript manager (tested with [Tampermonkey](https://www.tampermonkey.net/)).

## How to install

If you are using Min:

1. Enable userscripts in Min's preferences and create a `userscripts` directory, following [these instructions](https://github.com/minbrowser/min/wiki/userscripts)
2. Save the [`youtube-element-blocker.js`](https://raw.githubusercontent.com/Syndamia/min-youtube-element-blocker/master/youtube-element-blocker.js) file (with the `.js` extension) in the `userscripts` folder
3. Restart Min

If you are using some other browser, you'll need to install a userscript manager, like [Tampermonkey](https://www.tampermonkey.net/), with which to install (and use) the script ([this link to the file](https://raw.githubusercontent.com/Syndamia/min-youtube-element-blocker/master/youtube-element-blocker.js) should work). 

## How to update

Updating the script is done manually, meaning you'll have to manually check for updates and replace your file with the latest release (or master, it never gets too ahead of releases).

**IMPORTANT**: updating the script could "erase" your settings, especially if you are using Min

Users of Linux and Min can use this command for updating (which can also be used for steps 1 and 2 of the installation):
```
mkdir -p ~/.config/Min/userscripts && wget -q https://raw.githubusercontent.com/Syndamia/min-youtube-element-blocker/master/youtube-element-blocker.js -O ~/.config/Min/userscripts/youtube-element-blocker.js
```

## Changing settings

Changing settings is done through **modifying the file**. By default, nothing is enabled. If you are using Min, restart the browser after changing a setting. 

### General settings

In the beginning of the file you'll find this: 

```
var settings = {
  // The feed is the collection of videos, shown on the home page
  "hideFeed"        : false,

  // The guide drawer is the drawer (sidebar) to the left
  // which you use for navigating Playlists, Subscriptions, ...
  "hideGuideDrawer" : false,

    "hideGuideHomeTab"         : false,

    "hideGuideTrendingTab"     : false,

    "hideGuideMoreFromYouTube" : false,

    // The last section is the part under "More from YouTube",
    // where you can find the buttons for "Help", "Send Feedback", ...
    "hideGuideLastSection"     : false,

    // The footer is the part at the very bottom of the guide drawer 
    // that shows links like "About", "Terms", "Contact us", ...
    "hideGuideFooter"          : false,

  // Related videos are the recommendations at the end of a video
  "hideRelated"  : false,

  "hideChat"     : false,

  // The sidebar is the section to the right of a video
  // where you can find video and playlist suggestions
  "hideSidebar"  : false,

  "hideMerch"    : false,

  "hideComments" : false,
};
```

Here, you change the words `false` to `true` if you want the setting to be enabled. Leaving it, or changing it back to `false` will disable the setting. 

### Timeout

Below it you'll find the "Timeout" settings. Through Timeout, you can set a specific time duration, during which the whole YouTube website will be blocked.

```
var timeout = {
  "enabled"    : false,
  // Determines days, in which the timeout will be active. Each day is separated
  // by a comma. Can be 0 to 6, where 0 is Sunday, 1 is Monday and 6 is Saturday.
  "activeDays" : [0, 1, 2, 3, 4, 5, 6],

  // Determines time from which the timeout will block YouTube.
  // Must be numbers, from 0 to 24 for hour and from 0 to 59 for minutes.
  "startHour"    : 09,
  "startMinutes" : 00,

  // Determines end of time from which the timeout will block YouTube.
  // Must be numbers, from 0 to 24 for hour and from 0 to 59 for minutes.
  "endHour"    : 17,
  "endMinutes" : 00,
};
```

Change the word `false` to `true` to activate the feature and change it back to `false` to deactivate it.

After that you'll need to set on which days it should be active.

Following are the settings from when the feature should be active (`startHour`, `startMinutes`) and when it should stop (`endHour`, `endMinutes`).

