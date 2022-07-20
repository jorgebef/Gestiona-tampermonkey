// ==UserScript==
// @name         Gestiona nombre archivos expediente
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Tweak styles for Gestiona versión 2022
// @author       jbefp
// @match        https://www.modernizaalicante.es/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css.replace(/;/g, ' !important;');
    head.appendChild(style);
}
/*  this only works, if you use the function instead of GM_addStyle
 the output of this "addGlobalStyle('body { color: white; background-color: black; }');",

will be "body { color: white !important; background-color: black !important; }');" */

    addGlobalStyle(`
    .EditFolderInstancePanel {
    display: flex;
    flex-direction: column;
    align-items: start;
    }

    .grid, .DocumentInstanceListPanel {
    width: 95vw;
    overflow-wrap: break-word;
    word-wrap: break-word;
    white-space: normal;
    }

    tbody .class_name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 50vw;
    }

    .class_name:hover a {
    text-overflow: unset;
    width: inherit;
    overflow-wrap: anywhere;
    word-wrap: break-word;
    white-space: normal;
    }

    `)

})();