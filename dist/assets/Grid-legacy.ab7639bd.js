!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.f5eebb05.js","./Folder-legacy.af20d7a5.js","./Layout-legacy.88792b3a.js","./useUtil-legacy.7d421de2.js","./index-legacy.4edf4b66.js","./ImageWithError-legacy.99252214.js","./obj-legacy.97e43e8b.js","./icon-legacy.1b4790c5.js","./useT-legacy.32a92255.js","./useTitle-legacy.5ab721e7.js","./Markdown-legacy.d4b06494.js","./api-legacy.5022b53c.js","./index-legacy.4f7c6399.js","./FolderTree-legacy.9cab6adc.js"],(function(t){"use strict";var n,r,o,a,i,l,u,c,s,f,g,d,b,y,h,m,j,p,w,v,x,$,A,k,S,I,M,C,E;return{setters:[function(e){n=e.f,r=e.bb,o=e.ae,a=e.e,i=e.v,l=e.aC,u=e.W,c=e.A,s=e.aB,f=e.aE,g=e.ck,d=e.aa,b=e.am,y=e.m,h=e.bq,m=e.a6,j=e.ag,p=e.bc,w=e.w,v=e.o,x=e.b_},function(e){$=e.I},function(e){A=e.b,k=e.M},function(e){S=e.c},function(e){I=e.I},function(e){M=e.I},function(e){C=e.O},function(e){E=e.g},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var z=function(t){if((0,S().isHide)(t.obj))return null;var w=A().setPathAs,v=n(o,{get color(){return r()},boxSize:"$12",get as(){return E(t.obj)}}),x=e(a(!1),2),z=x[0],O=x[1],T=i((function(){return l()&&(z()||t.obj.selected)})),P=$({id:1}).show;return n(k.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(u,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",get _hover(){return{transform:"scale(1.06)",bgColor:c(),transition:"all 0.3s"}},as:I,get href(){return t.obj.name},onMouseEnter:function(){O(!0),w(t.obj.name,t.obj.is_dir,!0)},onMouseLeave:function(){O(!1)},onContextMenu:function(e){s((function(){f(!1),g(t.index,!0,!0)})),P(e,{props:t.obj})},get children(){return[n(d,{class:"item-thumbnail",h:"70px",w:"$full","on:click":function(e){t.obj.type===C.IMAGE&&(e.stopPropagation(),e.preventDefault(),b.emit("gallery",t.obj.name))},pos:"relative",get children(){return[n(y,{get when(){return T()},get children(){return n(h,{pos:"absolute",left:"$1",top:"$1","on:click":function(e){e.stopPropagation()},get checked(){return t.obj.selected},onChange:function(e){g(t.index,e.target.checked)}})}}),n(y,{get when(){return t.obj.thumb},fallback:v,get children(){return n(M,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return n(m,{size:"lg"})},fallbackErr:v,get src(){return t.obj.thumb},loading:"lazy"})}})]}}),n(j,{get label(){return t.obj.name},get children(){return n(p,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get children(){return t.obj.name}})}})]}})}})};t("default",(function(){return n(x,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",get children(){return n(w,{get each(){return v.objs},children:function(e,t){return n(z,{obj:e,get index(){return t()}})}})}})}))}}}))}();
