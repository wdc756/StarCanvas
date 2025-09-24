// ==UserScript==
// @name         Star Canvas
// @namespace    https://www.tampermonkey.net/
// @version      1.0
// @description  Modifies Canvas UI with a minimalist glass theme
// @author       WDC - Starhawk756
// @match        *://acu.instructure.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    console.log("Initializing Star Canvas...");

    function injectFont(url) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = url;
        document.head.appendChild(link);
    }

    function injectCSS(cssText) {
        const style = document.createElement("style");
        style.textContent = cssText;
        document.head.appendChild(style);
    }

    injectFont("https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=SUSE+Mono:ital,wght@0,100..800;1,100..800&display=swap\" rel=\"stylesheet");
    injectCSS(`
/***Global Overrides***/



/* Set font family for all elements */
* {
    font-family: "Karla", sans-serif !important;
}

/* Hide scrollbars for webkit browsers */
::-webkit-scrollbar {
    display: none;
}
/* Hide scrollbars for Firefox */
html {
    scrollbar-width: none;
}

/* Override canvas global vars & styles */
:root {
    --ic-brand-primary-darkened-5: rgba(5, 5, 5, 1) !important; /*#0A5697;*/
    --ic-brand-primary-darkened-10: rgba(10, 10, 10, 1) !important; /*#09518F;*/
    --ic-brand-primary-darkened-15: rgba(15, 15, 15, 1) !important; /*#094D87;*/
    --ic-brand-primary-lightened-5: rgba(250, 250, 250, 1) !important; /*#1662A2;*/
    --ic-brand-primary-lightened-10: rgba(245, 245, 245, 1) !important; /*#226AA7;*/
    --ic-brand-primary-lightened-15: rgba(240, 240, 240, 1) !important; /*#2E72AC;*/
    --ic-brand-button--primary-bgd-darkened-5: rgba(5, 5, 5, 0.1) !important; /*#0A5697;*/
    --ic-brand-button--primary-bgd-darkened-15: rgba(15, 15, 15, 0.1) !important; /*#094D87;*/
    --ic-brand-button--secondary-bgd-darkened-5: #26333D;
    --ic-brand-button--secondary-bgd-darkened-15: #222E37;
    --ic-brand-font-color-dark-lightened-15: #47535C;
    --ic-brand-font-color-dark-lightened-28: #636D75;
    --ic-link-color-darkened-10: #09487E;
    --ic-link-color-lightened-10: #216197;
    --ic-brand-primary: #0A5A9E;
    --ic-brand-font-color-dark: #273540;
    --ic-link-color: #09508C;
    --ic-brand-button--primary-bgd: var(--ic-brand-primary);
    --ic-brand-button--primary-text: #ffffff;
    --ic-brand-button--secondary-bgd: #273540;
    --ic-brand-button--secondary-text: #ffffff;
    --ic-brand-global-nav-bgd: rgba(0, 0, 0, 0) !important; /*#334451;*/
    --ic-brand-global-nav-ic-icon-svg-fill: #ffffff;
    --ic-brand-global-nav-ic-icon-svg-fill--active: var(--ic-brand-primary);
    --ic-brand-global-nav-menu-item__text-color: #ffffff;
    --ic-brand-global-nav-menu-item__text-color--active: var(--ic-link-color);
    --ic-brand-global-nav-avatar-border: #ffffff;
    --ic-brand-global-nav-menu-item__badge-bgd: #ffffff;
    --ic-brand-global-nav-menu-item__badge-bgd--active: var(--ic-brand-primary);
    --ic-brand-global-nav-menu-item__badge-text: #000000;
    --ic-brand-global-nav-menu-item__badge-text--active: #ffffff;
    --ic-brand-global-nav-logo-bgd: #334451;
    --ic-brand-header-image: url('/dist/images/canvas_logomark_only@2x-e197434829.png');
    --ic-brand-mobile-global-nav-logo: url('/dist/images/mobile-global-nav-logo-aff8453309.svg');
    --ic-brand-watermark: url(https://raw.githubusercontent.com/wdc756/StarCanvas/refs/heads/main/images/Yellow-Red-Waves.jpg) !important; /* */
    --ic-brand-watermark-opacity: 1.0;
    --ic-brand-favicon: url('/dist/images/favicon-e10d657a73.ico');
    --ic-brand-apple-touch-icon: url('/dist/images/apple-touch-icon-585e5d997d.png');
    --ic-brand-msapplication-tile-color: var(--ic-brand-primary);
    --ic-brand-msapplication-tile-square: url('/dist/images/windows-tile-eda8889e7b.png');
    --ic-brand-msapplication-tile-wide: url('/dist/images/windows-tile-wide-44d3cc1060.png');
    --ic-brand-right-sidebar-logo: ;
    --ic-brand-Login-body-bgd-color: #334451;
    --ic-brand-Login-body-bgd-image: ;
    --ic-brand-Login-body-bgd-shadow-color: #273540;
    --ic-brand-Login-logo: url('/dist/images/login/canvas-logo-5617606953.svg');
    --ic-brand-Login-Content-bgd-color: none;
    --ic-brand-Login-Content-border-color: none;
    --ic-brand-Login-Content-inner-bgd: none;
    --ic-brand-Login-Content-inner-border: none;
    --ic-brand-Login-Content-inner-body-bgd: none;
    --ic-brand-Login-Content-inner-body-border: none;
    --ic-brand-Login-Content-label-text-color: #ffffff;
    --ic-brand-Login-Content-password-text-color: #ffffff;
    --ic-brand-Login-footer-link-color: #ffffff;
    --ic-brand-Login-footer-link-color-hover: #ffffff;
    --ic-brand-Login-instructure-logo: #ffffff;
}



/***Sizing & Positioning Fixes***/



/* Make canvas application fill entire screen */
div#wrapper.ic-Layout-wrapper {
    min-height: 90% !important;
    max-height: 100% !important;
    min-width: 90% !important;
    max-width: 100% !important;
}

/* Allow Calendar to grow vertically */
#calendar-app > div.calendar.fc.fc-unthemed.fc-ltr > div > div > table > tbody > tr > td > div {
    height: auto !important;
}

/* Fix odd margins & padding on dashboard card container */
div.ic-DashboardCard__box__container {
    margin: 0 !important;
    padding: 0 !important;

    /* This is for the dashboard cards, so they display centered */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 25px;
}

/* Fix dashboard card margins to fill space more reasonably */
div.ic-DashboardCard {
    flex: 1 1 calc((100% - 60px)/3) !important;
    margin: 0 !important;
}

/* Fix dashboard card hero items sizing */
div.ic-DashboardCard__header_hero {
    height: 175px !important;
}

/* Fix dashboard card action items margin */
.ic-DashboardCard__action-container {
    margin-top: 25px !important;
}



/*** Backgrounds ***/



/* Disable default background image display location */
div.ic-Layout-watermark {
    background: rgba(0, 0, 0, 0) !important;
}
/* Add background image to full screen (root canvas div) */
div#application.ic-app {
    background-image: var(--ic-brand-watermark) !important;

    /* Scale image so it covers entire viewport (no letterboxing) */
    background-size: cover !important;
    /* Center so cropping is even */
    background-position: center center !important;
    /* No repeat */
    background-repeat: no-repeat !important;
    /* Keep fixed during scroll */
    background-attachment: fixed !important;
}
    `);

    console.log("Star Canvas injected successfully!")
})();