// ==UserScript==
// @name         Star Canvas
// @namespace    https://www.tampermonkey.net/
// @version      1.0
// @description  Modifies base Better Campus/Canvas UI with a minimalist glass theme
// @author       WDC - Starhawk756
// @match        *://acu.instructure.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @run-at       document-idle
// ==/UserScript==

console.log("Hello World - Star Canvas");

/* Sidebar */
(function() {
    function injectBCSidebarStyles() {
        const bcSidebar = document.querySelector("bettercanvas-sidebar");
        if (!bcSidebar || !bcSidebar.shadowRoot) return;

        // Avoid double-injecting if the style is already there
        if (bcSidebar.shadowRoot.querySelector("#Star-Canvas-Styles")) return;

        const style = document.createElement("style");
        style.id = "Star-Canvas-Styles";
        style.textContent = `
        /* Main blur */
        #bettercanvas-sidebar {
            background-color: rgba(0, 0, 0, 0.1) !important;
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
        }
        /* Override global settings */
        html body, #bettercanvas-sidebar {
            /* Override BC dark mode hex values to rgba values to allow transparency */
            --bcbackground-0: rgba(0, 0, 0, 0.1);
            --bcbackground-1: rgba(0, 0, 0, 0.25);
            --bcbackground-2: rgba(0, 0, 0, 0.5);
            /* Override BC styles to add transparency */
            --bcborders: rgba(0, 0, 0, 0);
            --bcsidebar: rgba(0, 0, 0, 0);
            --bcsidebar-text: rgba(255, 255, 255, 1);
            /* Override BC text colors to fix readability */
            --bctext-0: rgba(255, 255, 255, 1);
            --bctext-1: rgba(225, 225, 225, 1);
            --bctext-2: rgba(200, 200, 200, 1);
            /* Custom BC dark text colors, used in a few cases where the default BC text colors are too light */
            --bctextdark-0: rgba(0, 0, 0, 1);
            --bctextdark-1: rgba(25, 25, 25, 1);
            --bctextdark-2: rgba(50, 50, 50, 1);
        }
        /* Override BC light/transparent colors to fix readability */
        .hover\\:text-theme-bg:hover, .text-theme-bg {
            color: var(--bctextdark-0) !important;
            fill: var(--bctextdark-0) !important;
        }
    `;
        bcSidebar.shadowRoot.appendChild(style);
        console.log("Injected BetterCanvas sidebar styles.");
    }

    // Try once immediately
    injectBCSidebarStyles();

    // Also watch for dynamically reloaded sidebar
    const observer = new MutationObserver(injectBCSidebarStyles);
    observer.observe(document.body, { childList: true, subtree: true });
})();



/* Todo */
(function() {
    function injectBCTodoStyles() {
        const bcTodo = document.querySelector("bettercanvas-todo-list");
        if (!bcTodo || !bcTodo.shadowRoot) return;

        // Avoid double-injecting if the style is already there
        if (bcTodo.shadowRoot.querySelector("#Star-Canvas-Styles")) return;

        const style = document.createElement("style");
        style.id = "Star-Canvas-Styles";
        style.textContent = `
        /* Main blur */
        #bettercanvas-todo-list {
            background-color: rgba(0, 0, 0, 0.25) !important;
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.15) !important;
            border-radius: 24px !important;
        }
        /* Override global settings */
        html body, #bettercanvas-todo-list {
            /* Override BC dark mode hex values to rgba values to allow transparency */
            --bcbackground-0: rgba(0, 0, 0, 0.1);
            --bcbackground-1: rgba(0, 0, 0, 0.25);
            --bcbackground-2: rgba(0, 0, 0, 0.5);
            /* Override BC styles to add transparency */
            --bcborders: rgba(0, 0, 0, 0);
            --bcsidebar: rgba(0, 0, 0, 0);
            --bcsidebar-text: rgba(255, 255, 255, 1);
            /* Override BC text colors to fix readability */
            --bctext-0: rgba(255, 255, 255, 1);
            --bctext-1: rgba(225, 225, 225, 1);
            --bctext-2: rgba(200, 200, 200, 1);
            /* Custom BC dark text colors, used in a few cases where the default BC text colors are too light */
            --bctextdark-0: rgba(0, 0, 0, 1);
            --bctextdark-1: rgba(25, 25, 25, 1);
            --bctextdark-2: rgba(50, 50, 50, 1);
        }
        /* Override BC light/transparent colors to fix readability */
        .hover\\:text-theme-bg:hover, .text-theme-bg {
            color: var(--bctextdark-0) !important;
            fill: var(--bctextdark-0) !important;
        }
    `;
        bcTodo.shadowRoot.appendChild(style);
        console.log("Injected BetterCanvas todo styles.");
    }

    // Try once immediately
    injectBCTodoStyles();

    // Also watch for dynamically reloaded sidebar
    const observer = new MutationObserver(injectBCTodoStyles);
    observer.observe(document.body, { childList: true, subtree: true });
})();



/* Custom Page (assignments, grades, etc.) */
(function() {
    function injectBCCustomPageStyles() {
        const bcCustomPage = document.querySelector("bettercanvas-custom-page");
        if (!bcCustomPage || !bcCustomPage.shadowRoot) return;

        // Avoid double-injecting if the style is already there
        if (bcCustomPage.shadowRoot.querySelector("#Star-Canvas-Styles")) return;

        const style = document.createElement("style");
        style.id = "Star-Canvas-Styles";
        style.textContent = `
        /* Main */
        body > div.absolute.top-0.left-0.w-full.h-screen.z-40 {
            background-color: rgba(0, 0, 0, 0.25) !important;
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.15) !important;
            border-radius: 24px !important;
        }
        /* Override global settings */
        html body, body > div.absolute.top-0.left-0.w-full.h-screen.z-40 {
            /* Override BC dark mode hex values to rgba values to allow transparency */
            --bcbackground-0: rgba(0, 0, 0, 0.1);
            --bcbackground-1: rgba(0, 0, 0, 0.25);
            --bcbackground-2: rgba(0, 0, 0, 0.5);
            /* Override BC styles to add transparency */
            --bcborders: rgba(0, 0, 0, 0);
            --bcsidebar: rgba(0, 0, 0, 0);
            --bcsidebar-text: rgba(255, 255, 255, 1);
            /* Override BC text colors to fix readability */
            --bctext-0: rgba(255, 255, 255, 1);
            --bctext-1: rgba(225, 225, 225, 1);
            --bctext-2: rgba(200, 200, 200, 1);
            /* Custom BC dark text colors, used in a few cases where the default BC text colors are too light */
            --bctextdark-0: rgba(0, 0, 0, 1);
            --bctextdark-1: rgba(25, 25, 25, 1);
            --bctextdark-2: rgba(50, 50, 50, 1);
        }
    `;
        bcCustomPage.shadowRoot.appendChild(style);
        console.log("Injected BetterCanvas custom page styles.");
    }

    // Try once immediately
    injectBCCustomPageStyles();

    // Also watch for dynamically reloaded sidebar
    const observer = new MutationObserver(injectBCCustomPageStyles);
    observer.observe(document.body, { childList: true, subtree: true });
})();



/* Document Viewer */
// (function() {
//     function injectBCDocumentViewerStyles(bcDocumentViewer) {
//         if (!bcDocumentViewer.shadowRoot) return; // wait until shadow root is ready
//
//         // Avoid double-injecting
//         if (bcDocumentViewer.shadowRoot.querySelector("#Star-Canvas-Styles")) return;
//
//         const style = document.createElement("style");
//         style.id = "Star-Canvas-Styles";
//         style.textContent = `
//             body > div {
//                 background-color: rgba(0, 0, 0, 0.25) !important;
//                 backdrop-filter: blur(16px);
//                 -webkit-backdrop-filter: blur(16px);
//                 border: 1px solid rgba(255, 255, 255, 0.15) !important;
//                 border-radius: 24px !important;
//             }
//             html body, body > div {
//                 --bcbackground-0: rgba(0, 0, 0, 0.1);
//                 --bcbackground-1: rgba(0, 0, 0, 0.25);
//                 --bcbackground-2: rgba(0, 0, 0, 0.5);
//                 --bcborders: rgba(0, 0, 0, 0);
//                 --bcsidebar: rgba(0, 0, 0, 0);
//                 --bcsidebar-text: rgba(255, 255, 255, 1);
//                 --bctext-0: rgba(255, 255, 255, 1);
//                 --bctext-1: rgba(225, 225, 225, 1);
//                 --bctext-2: rgba(200, 200, 200, 1);
//                 --bctextdark-0: rgba(0, 0, 0, 1);
//                 --bctextdark-1: rgba(25, 25, 25, 1);
//                 --bctextdark-2: rgba(50, 50, 50, 1);
//             }
//         `;
//         bcDocumentViewer.shadowRoot.appendChild(style);
//         console.log("✅ Injected BetterCanvas document viewer styles.");
//     }
//
//     // Observe only for added nodes, check each node if it's the topbar
//     const observer = new MutationObserver((mutations) => {
//         for (const mutation of mutations) {
//             for (const node of mutation.addedNodes) {
//                 if (node.nodeType === Node.ELEMENT_NODE &&
//                     node.tagName.toLowerCase() === "bettercanvas-fileviewer-topbar") {
//                     console.log("🎯 Found bettercanvas-fileviewer-topbar, injecting styles...");
//                     injectBCDocumentViewerStyles(node);
//                 }
//             }
//         }
//     });
//
//     // Start observing the body for child elements being added anywhere
//     observer.observe(document.body, { childList: true, subtree: true });
//
//     // Try once immediately in case we are reloading while already inside fileviewer
//     const existing = document.querySelector("bettercanvas-fileviewer-topbar");
//     if (existing) injectBCDocumentViewerStyles(existing);
// })();
