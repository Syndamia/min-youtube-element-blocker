# min-youtube-element-blocker

Block specific elements of YouTube, like the Feed, Comments, Merch and more. **Made for [Min](https://github.com/minbrowser/min) browser.**

## How to install

1. Enable userscripts in Min's preferences and create a `userscripts` directory, following [these instructions](https://github.com/minbrowser/min/wiki/userscripts)
2. Save the [`youtube-element-blocker.js`](https://raw.githubusercontent.com/Syndamia/min-youtube-element-blocker/master/youtube-element-blocker.js) (right-click and press `Save As` OR press `Ctrl + S`) file in the `userscripts` folder
3. Restart Min

If you are on Linux, you can use this command for steps 1 and 2:
```
mkdir -p ~/.config/Min/userscripts && wget -q https://raw.githubusercontent.com/Syndamia/min-youtube-element-blocker/master/youtube-element-blocker.js -O ~/.config/Min/userscripts/youtube-element-blocker.js
```

**Note**: **updating the script is done manually**, meaning you'll need to check for updates yourself once in a while and just download the new file. I believe that an automatic system for updates in a userscript is inappropriate.

## Changing settings

Changing settings is done through **modifying the downloaded file and restarting Min**. By default, no setting is enabled. 

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

Finally, restart the browser.
