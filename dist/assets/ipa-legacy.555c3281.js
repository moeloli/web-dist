!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,c,o=[],i=!0,a=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(u){a=!0,c=u}finally{try{i||null==t.return||t.return()}finally{if(a)throw c}}return o}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.f5eebb05.js","./useT-legacy.32a92255.js","./File-legacy.2db4709b.js","./useUtil-legacy.7d421de2.js","./api-legacy.5022b53c.js","./icon-legacy.1b4790c5.js","./index-legacy.4edf4b66.js","./Layout-legacy.88792b3a.js","./useTitle-legacy.5ab721e7.js","./Markdown-legacy.d4b06494.js","./index-legacy.4f7c6399.js","./FolderTree-legacy.9cab6adc.js","./obj-legacy.97e43e8b.js"],(function(e){"use strict";var t,r,c,o,i,a,u,l;return{setters:[function(n){t=n.e,r=n.f,c=n.B,o=n.b7,i=n.o,a=n.cs},function(n){u=n.u},function(n){l=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=u(),f=n(t(!1),2),s=f[0],y=f[1];return r(l,{get children(){return r(c,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(o,"/i/").concat(encodeURIComponent(encodeURIComponent(i.raw_url)),"/").concat(a(i.obj.name),".plist")},onClick:function(){y(!0)},get children(){return e("home.preview.".concat(s()?"installing":"install"))}})}})}))}}}))}();