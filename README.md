# min-youtube-element-blocker
Block specific elements of YouTube, like the Feed, Comments, Subscriptions bar and more. **Made for [Min](https://github.com/minbrowser/min) browser.**

## How to install

1. Enable userscripts in Min's preferences and create a `userscripts` directory, following [these instructions](https://github.com/minbrowser/min/wiki/userscripts)
2. Save the [`youtube-element-blocker.js`](https://raw.githubusercontent.com/Syndamia/min-youtube-element-blocker/master/youtube-element-blocker.js) (right-click and press `Save As` OR press `Ctrl + S`) file in the `userscripts` folder
3. Restart Min

If you are on Linux, you can use this command for steps 1 and 2:
```
mkdir -p ~/.config/Min/userscripts && wget -q https://raw.githubusercontent.com/Syndamia/min-youtube-element-blocker/master/youtube-element-blocker.js -O ~/.config/Min/userscripts/youtube-element-blocker.js
```

## Changing settings

Changing settings is done through **modifying the downloaded file and restarting Min**. In the beginning of the file you'll find this: 

```
var settings = {
  // Hides the home page videos
  "hideFeed"             : false,

  // Hides recommended tabs of videos in the home page
  "hideRecommended"      : false,

  // Hides the trending button on the left (subscriptions) sidebar
  "hideTrendingTab"      : false,

  // Hides the left (subscriptions) sidebar
  "hideSubscriptionsBar" : false,

  // Hides the video recommendations at the end of the video
  "hideRelated"          : false,

  // Hides the right sidebar (recommendations to videos)
  "hideSidebar"          : false,

  // Hides livestream chat
  "hideChat"             : false,

  // Hides merch button
  "hideMerch"            : false,

  // Hides video comments
  "hideComments"         : false
}

```
Here, you change the words `false` to `true` if you want the setting to be active. Leaving it, or changing it back to `false` will deactivate the setting.
