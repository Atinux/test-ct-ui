import{q as f,w as c,e as v,s as g,j as d,u as l,a as h}from"./query.5b3dc904.js";import{l as _,_ as y,d as C,a4 as w,U as P,m as $,X as N,Z as r}from"./entry.62cc1941.js";import{h as p}from"./index.344f9f74.js";import{_ as j}from"./nuxt-link.e487793f.js";import{u as T}from"./preview.09be0472.js";const D=async e=>{const{content:t}=_().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${v(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(g())return(await y(()=>import("./client-db.87515884.js"),["./client-db.87515884.js","./entry.62cc1941.js","./query.5b3dc904.js","./index.344f9f74.js","./preview.09be0472.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:d(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=C({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=w(e),a=P(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&$("dd-navigation").value){const{navigation:n}=l();return{navigation:n}}const{data:s}=await h(`content-navigation-${p(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=N(),{navigation:a}=e,s=o=>r(j,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),m=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}}),R=E;export{R as default};