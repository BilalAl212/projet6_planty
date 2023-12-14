/*! For license information please see index.js.LICENSE.txt */
(()=>{var e={875:(e,t)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=l.apply(null,n);o&&e.push(o)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var r in n)a.call(n,r)&&n[r]&&e.push(r)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()}},t={};function n(a){var l=t[a];if(void 0!==l)return l.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.element,t=window.wp.i18n,a=window.wpmi.store,l=window.wpmi.components;function i({icon:t,settings:n}){return(0,e.createElement)("div",{className:"wpmi__icon-preview attachment-info"},(0,e.createElement)("div",{className:"thumbnail thumbnail-image"},(0,e.createElement)("i",{className:t})),(0,e.createElement)("div",{className:"details"},(0,e.createElement)("div",{className:"filename"},t),(0,e.createElement)("div",{className:"uploaded"},n.align),(0,e.createElement)("div",{className:"file-size"},n.size," ",(0,e.createElement)("em",null,"(em)"))))}const o=window.wp.components,{WPMI_PREFIX:r}=wpmi_navmenu;function c({settings:n,onChangeSettings:a}){const l=e=>{const{name:t,value:l}=e.target,i={...n,[t]:l};a(i)};return(0,e.createElement)("div",{className:"attachment-info"},(0,e.createElement)("form",null,(0,e.createElement)("label",{className:"setting"},(0,e.createElement)("span",null,(0,t.__)("Hide Label","wp-menu-icons")),(0,e.createElement)("select",{id:r+"-input-label",className:r+"-input",name:"label",onChange:l,value:n.label},(0,e.createElement)("option",{value:""},(0,t.__)("No","wp-menu-icons")),(0,e.createElement)("option",{value:"1"},(0,t.__)("Yes","wp-menu-icons")))),(0,e.createElement)("label",{className:"setting"},(0,e.createElement)("span",null,(0,t.__)("Position","wp-menu-icons")),(0,e.createElement)("select",{id:r+"-input-position",className:r+"-input",name:"position",onChange:l,value:n.position},(0,e.createElement)("option",{value:"before"},(0,t.__)("Before","wp-menu-icons")),(0,e.createElement)("option",{value:"after"},(0,t.__)("After","wp-menu-icons")))),(0,e.createElement)("label",{className:"setting"},(0,e.createElement)("span",null,(0,t.__)("Vertical Align","wp-menu-icons")),(0,e.createElement)("select",{id:r+"-input-align",className:r+"-input",name:"align",onChange:l,value:n.align},(0,e.createElement)("option",{value:"top"},"Top"),(0,e.createElement)("option",{value:"middle"},"Middle"),(0,e.createElement)("option",{value:"bottom"},"Bottom"))),(0,e.createElement)("label",{className:"setting"},(0,e.createElement)("span",null,(0,t.__)("Size","wp-menu-icons")," ",(0,e.createElement)("em",null,"(em)")),(0,e.createElement)("input",{id:r+"-input-size",className:r+"-input",name:"size",type:"number",min:"0.1",step:"0.1",onChange:l,value:n.size})),(0,e.createElement)(o.ColorPicker,{value:n.color,onChangeComplete:e=>a({...n,color:e.hex})}),(0,e.createElement)("label",{className:"wpmi-color-picker"},(0,e.createElement)("span",{className:"container"}))))}function s({settings:n,onChangeSettings:a}){const l={...n};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{tabIndex:"0",className:"attachment-details save-ready"},(0,e.createElement)("h2",null,(0,t.__)("Icon","wp-menu-icons"),(0,e.createElement)("span",{className:"settings-save-status"},(0,e.createElement)("span",{className:"spinner"}),(0,e.createElement)("span",{className:"saved"},(0,t.__)("Saved","wp-menu-icons"))))),(0,e.createElement)(i,{icon:n.icon,settings:l}),(0,e.createElement)(c,{settings:n,onChangeSettings:a}))}const m=window.lodash;function u({settings:n,prevSettings:a,onSave:l,onRemove:i}){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{className:"media-toolbar-secondary"}),(0,e.createElement)("div",{className:"media-toolbar-primary search-form"},(0,e.createElement)("button",{type:"button",className:"button media-button button-large button-primary media-button-select save",onClick:e=>{e.preventDefault();const t=document.getElementById("menu-item-"+n.id),a=document.getElementById("menu-item-settings-"+n.id);a.querySelectorAll("#wpmi-input-label").forEach((e=>e.value=n.label)),a.querySelectorAll("#wpmi-input-position").forEach((e=>e.value=n.position)),a.querySelectorAll("#wpmi-input-align").forEach((e=>e.value=n.align)),a.querySelectorAll("#wpmi-input-size").forEach((e=>e.value=n.size)),a.querySelectorAll("#wpmi-input-icon").forEach((e=>e.value=n.icon)),a.querySelectorAll("#wpmi-input-color").forEach((e=>e.value=n.color));const i=t.querySelector(".menu-item-wpmi_icon"),o=t.querySelector(".menu-item-wpmi_plus");i&&i.remove();const r=document.createElement("i");r.className="menu-item-wpmi_icon "+n.icon,o.after(r),l()},disabled:(0,m.isEqual)(n,a)},(0,t.__)("Save","wp-menu-icons")),(0,e.createElement)("button",{type:"button",className:"button media-button button-large button-secondary remove",onClick:e=>{e.preventDefault();const t=document.getElementById("menu-item-"+n.id),a=document.getElementById("menu-item-settings-"+n.id);a.querySelectorAll("#wpmi-input-label").forEach((e=>e.value="")),a.querySelectorAll("#wpmi-input-position").forEach((e=>e.value="")),a.querySelectorAll("#wpmi-input-align").forEach((e=>e.value="")),a.querySelectorAll("#wpmi-input-size").forEach((e=>e.value="")),a.querySelectorAll("#wpmi-input-icon").forEach((e=>e.value="")),a.querySelectorAll("#wpmi-input-color").forEach((e=>e.value=""));const l=t.querySelector(".menu-item-wpmi_icon");l&&l.remove(),i()}},(0,t.__)("Remove","wp-menu-icons"))))}const{WPMI_PLUGIN_NAME:p,WPMI_PREFIX:d,WPMI_PREMIUM_SELL_URL:v}=wpmi_navmenu,E=()=>{const{currentLibrary:n,isResolvingCurrentLibrary:i}=(0,a.useCurrentLibrary)(),{iconMap:o,isLoadingIconMap:r,filterIcons:c}=(0,a.useCurrentLibraryIconMap)(),[m,E]=(0,e.useState)(!1),[g,b]=(0,e.useState)(""),[w,f]=(0,e.useState)({}),[y,h]=(0,e.useState)({}),_=()=>E(!1),S=e=>{const t=e.id.split("-")[2],n=document.getElementById("menu-item-settings-"+t),a={label:n.querySelector("#wpmi-input-label").value,position:n.querySelector("#wpmi-input-position").value,align:n.querySelector("#wpmi-input-align").value,size:n.querySelector("#wpmi-input-size").value,icon:n.querySelector("#wpmi-input-icon").value,color:n.querySelector("#wpmi-input-color").value,id:t};f(a),h(a),E(!0)},N={settings:w,onChangeSettings:f},I={settings:w,prevSettings:y,onSave:_,onRemove:_};return(0,e.useEffect)((()=>{document.querySelectorAll(".menu-item-wpmi_open").forEach((e=>e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.closest("li");t&&S(t)}))));const e=document.getElementById("menu-to-edit");e&&new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)e.querySelector(".menu-item-wpmi_open").addEventListener("click",(t=>{t.preventDefault(),S(e)}))})).observe(e,{childList:!0})}),[]),(0,e.createElement)(l.Modal,{title:p,pluginPrefix:d,show:m,onClose:_,premiumSelURL:v,premiumTitle:"Premium",tabTitle:n?.label,toolbar:!0,toolbarSearchIn:n?.label,onChangeToolbar:b,sidebarContent:(0,e.createElement)(s,{...N}),footerContent:(0,e.createElement)(u,{...I})},i&&r?(0,e.createElement)(l.Spinner,null):o.length>0?(0,e.createElement)(l.IconMap,{iconMap:c(g),onChangeIcon:e=>f({...w,icon:e}),icon:w.icon}):(0,t.__)("The library does not contain icons","wp-menu-icons"))};var g=n(875),b=n.n(g);const{WPMI_PREFIX:w}=wpmi_navmenu,f=document.querySelector(".menu-edit"),y=document.createElement("input");function h(){const{libraries:n,isResolvingLibraries:i,hasResolvedLibraries:o,hasLibraries:r}=(0,a.useLibraries)(),{currentLibrary:c,currentLibraryName:s,setCurrentLibraryName:m}=(0,a.useCurrentLibrary)(),{settings:u,hasResolvedSettings:p}=(0,a.useSettingsEntities)(),d=e=>m(e.target.value);return(0,e.useEffect)((()=>{c&&(y.value=s)}),[s,c]),!i||o||p?r?(0,e.createElement)("div",{id:`tabs-panel-${w}-themes`,className:"tabs-panel tabs-panel-active"},(0,e.createElement)("ul",{id:w+"-themes-checklist",className:"categorychecklist form-no-clear"},n.filter((e=>u.active_libraries.includes(e.name))).map((({name:t,label:n,type:a,is_loaded:l})=>{const i="uploaded"===a;return(0,e.createElement)("li",{key:t},(0,e.createElement)("label",{className:b()("menu-item-title",i&&"wpmi__premium-badge")},(0,e.createElement)("input",{type:"radio",className:w+"-item-checkbox",name:w+"_font",disabled:!l,value:t,checked:t===s,onChange:d}),n))})))):(0,e.createElement)("div",null,(0,t.__)("There are no active libraries.","wp-menu-icons"),";"):(0,e.createElement)(l.Spinner,null)}y.type="hidden",y.id="wpmi_font",y.name="wpmi_font",f&&f.append(y);const{WPMI_PREFIX:_}=wpmi_navmenu;var S;S=()=>{const t=document.createElement("div");document.querySelector("body").append(t);const n=document.getElementById(`posttype-${_}-themes`);t&&(0,e.render)((0,e.createElement)(E,null),t),n&&(0,e.render)((0,e.createElement)(h,null),n)},/comp|inter|loaded/.test(document.readyState)?S():document.addEventListener("DOMContentLoaded",S,!1)})()})();