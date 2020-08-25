// ==UserScript==
// @name        YouTube element blocker
// @namespace   Syndamia
// @description Block specific elements of YouTube, like the Feed, Comments, Subscriptions bar and more
// @version     1.2
// @author      Kamen Mladenov
// @match       *youtube.com*
// @run-at      document-start
// ==/UserScript==

/* For suggestions, questions and reporting problems, 
 * open (if not existing) a new issue
 * here: https://github.com/Syndamia/min-youtube-element-blocker/issues.
 */

/* Change the word after the name of a setting (and after the column character)
 * to true to enable it and to false to disable it (DO NOT REMOVE THE COMMA AFTER THE WORD)
 * For example, enabled hideFeed will look like this: "hideFeed" : true,
 */

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

/* CSS that is added to page for hiding the elements */

var css = {
  "hideFeed": `
    #feed, ytd-browse[page-subtype=home] {
      display: none !important;
    }`,

  "hideGuideDrawer": `
    #appbar-guide-menu {
      width: 0; 
    }
    app-drawer#guide {
      display: none !important;
    }
    ytd-mini-guide-renderer {
      display: none !important; 
    }
    #guide-button {
      display: none !important;
    }`,

  "hideGuideHomeTab": `
    #home-guide-item {
      display: none !important;
    }
    ytd-guide-section-renderer:first-child #items > ytd-guide-entry-renderer:first-child {
      display: none !important;
    }
    #appbar-nav li:first-child {
      display: none !important;
    }
    ytd-mini-guide-renderer #items ytd-mini-guide-entry-renderer:first-child {
      display: none !important;
    }`,

  "hideGuideTrendingTab": `
    #trending-guide-item {
      display: none !important;
    }
    ytd-guide-section-renderer:first-child #items > ytd-guide-entry-renderer:nth-child(2) {
      display: none !important;
    }
    #appbar-nav li:nth-child(2) {
      display: none !important;
    }
    ytd-mini-guide-renderer #items ytd-mini-guide-entry-renderer:nth-child(2) {
      display: none !important;
    }`,

  "hideGuideMoreFromYouTube": `
    ytd-guide-section-renderer:nth-last-child(2) {
      display: none !important;
    }`,

  "hideLastSection": `
    ytd-guide-section-renderer:last-child {
      display: none !important;
    }`,

  "hideFooter": `
    #footer {
      display: none !important;
    }`,

  "hideRelated": `
    .ytp-endscreen-content {
      display: none !important;
    }
    .ytp-ce-video {
      display: none !important;
    }`,

  "hideChat": `
    ytd-live-chat-frame {
        display: none !important;
    }`,

  "hideSidebar": `
    #watch7-sidebar-contents, #related {
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

