// ==UserScript==
// @name         for r/place2
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the canvas!
// @author       KTibow
// @match        https://hot-potato.reddit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @run-at       document-end
// ==/UserScript==
window.addEventListener("load", () => {
    const container = document.querySelector("mona-lisa-embed").shadowRoot.querySelector("mona-lisa-canvas").shadowRoot.querySelector(".container");
    const overlay = document.createElement("img");
    overlay.src = "https://cdn.discordapp.com/attachments/390312001403879424/960340167242158110/rezero.png";
    overlay.style = "position: absolute; left: 0px; top: 0px; pointer-events: none; image-rendering: pixelated;";
    window.i = 0;
    setInterval(() => {
        overlay.style.display = window.i % 2 ? "block" : "none";
        window.i++;
    }, 1000);
    container.appendChild(overlay);
});
