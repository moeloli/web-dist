import{j as e,$ as i,e as s,bY as a,r as l,c2 as d}from"./index.fef1c441.js";import{e as u,c as g}from"./useUtil.0387a8c3.js";import{E as h}from"./EncodingSelect.a33d0d22.js";import"./api.853d5837.js";function m(n){const[t,r]=s("utf-8"),{isString:o,text:c}=g(n.children);return e(d,{w:"$full",h:"70vh",pos:"relative",get children(){return[e(a.iframe,{w:"$full",h:"$full",rounded:"$lg",shadow:"$md",get srcdoc(){return c(t())}}),e(l,{when:!o,get children(){return e(h,{get encoding(){return t()},setEncoding:r})}})]}})}const x=()=>{const[n]=u();return e(i,{get loading(){return n.loading},get children(){return e(m,{get children(){var t;return(t=n())==null?void 0:t.content}})}})};export{x as default};