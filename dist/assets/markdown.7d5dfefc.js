import{f as r,Z as a,o,bI as i}from"./index.7e79f6bd.js";import{d}from"./useUtil.59a29b0e.js";import{M as m}from"./Markdown.fb800a08.js";import"./api.906bec76.js";import"./useT.00fbdae8.js";const g=()=>{const[t]=d(),n=e=>o.obj.name.endsWith(".md")?e:"```"+i(o.obj.name)+`
`+e+"\n```";return r(a,{get loading(){return t.loading},get children(){return r(m,{get children(){var e;return n((e=t())==null?void 0:e.content)}})}})};export{g as default};