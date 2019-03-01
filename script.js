// ==UserScript==
// @name         Spotify Web Player track change notification
// @namespace    none
// @version      0.1
// @description  Notification on track change
// @author       Spavid04
// @match        https://open.spotify.com/*
// @grant        GM_notification
// ==/UserScript==

(function() {
    'use strict';

    var name = "";
    var artists = "";

    var checker = function()
    {
        var nameEL = document.getElementsByClassName('track-info__name');

        if(nameEL.length == 0)
        {
            return;
        }

        var artistsEL = document.getElementsByClassName('track-info__artists');

        if(artistsEL.length == 0)
        {
            return;
        }

        if(name == nameEL[0].textContent && artists == artistsEL[0].textContent)
        {
            return;
        }

        name = nameEL[0].textContent;
        artists = artistsEL[0].textContent;

        var notificationDetails = {
            text: nameEL[0].textContent,
            title: artistsEL[0].textContent,
            timeout: 5000,
            onclick: function() { window.focus(); },
        };
        GM_notification(notificationDetails);
    };

    var t = setInterval(checker, 1000);
})();