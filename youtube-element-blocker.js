// ==UserScript==
// @name        YouTube element blocker
// @namespace   Syndamia
// @description Block specific elements of YouTube, like the Feed, Comments, Subscriptions bar and more
// @version     1.1
// @author      Kamen Mladenov
// @match       *youtube.com*
// @run-at      document-start
// ==/UserScript==

/* Create (or find) an issue if you have any questions or problems 
 * here: https://github.com/Syndamia/min-youtube-element-blocker/issues.
 */

/* Selecting and deselecting a setting is done by changing the word after the column and restarting your browser.
 * Use 'true' for activating and 'false' for deactivating.
 * For example, enabled hideFeed will look like this: "hideFeed" : true,
 */

var settings = {
  // Hides the home page videos
  "hideFeed"             : false,

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

/* This userscript works by adding specific CSS that prevents certain
 * elements from being displayed.
 *
 * CSS specifics are taken from DF Tube (https://chrome.google.com/webstore/detail/df-tube-distraction-free/mjdepdfccjgcndkmemponafgioodelna)
 */

var css = {
  "hideFeed": `
    #feed, ytd-browse[page-subtype=home] {
        display: none !important;
    }`,

  "hideTrendingTab": `
    #trending-guide-item {
      display: none;
    }
    ytd-guide-section-renderer:nth-child(1) #items > ytd-guide-entry-renderer:nth-child(2) {
      display: none;
    }
    #appbar-nav li:nth-child(2) {
      display: none !important;
    }
    ytd-mini-guide-renderer #items ytd-mini-guide-entry-renderer:nth-child(2) {
      display: none !important;
    }`,

  "hideSubscriptionsBar": `
    #appbar-guide-menu {
      width: 0; 
    }
    app-drawer#guide {
      display: none !important;
    }
    ytd-mini-guide-renderer {
      display: none !important; 
    }`,

  "hideRelated": `
    .ytp-endscreen-content {
      display: none !important;
    }
    .ytp-ce-video {
      display: none !important;
    }`,

  "hideSidebar": `
    #watch7-sidebar-contents, #related {
      display: none !important;
    }`,

  "hideChat": `
    ytd-live-chat-frame {
        display: none !important;
    }`,

  "hideMerch": `
    .ytd-merch-shelf-renderer {
        display: none !important;
    }`,

  "hideComments": `
    #watch-discussion, #comments {
      display: none !important; 
    }`,
};

// Element, that will contain CSS of activated settings
var style = document.createElement('style');

for (setting in settings) {
  if (!settings[setting]) continue;
  
  style.textContent += css[setting];
}

document.head.appendChild(style);

