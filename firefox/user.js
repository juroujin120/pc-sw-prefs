// About this file: https://kb.mozillazine.org/User.js_file
// Notably:
//   this overrides other preferences across restarts
//   these prefs get automatically copied to prefs.js

// "Profile Folder" in about:support is a handy way to find where this file should go.
// prefs.js in the same directory contains lines that can be easily copy/pasted here.

user_pref("browser.aboutConfig.showWarning", false);

user_pref("browser.download.always_ask_before_handling_new_types", true);
user_pref("browser.download.useDownloadDir", false);

user_pref("browser.newtabpage.enabled", false);

user_pref("browser.startup.homepage", "https://www.google.com");

user_pref("browser.tabs.closeWindowWithLastTab", false);

user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.topsites", false);

user_pref("browser.urlbar.trimURLs", false);

user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.timeout", 0);

user_pref("keyword.enabled", false);
