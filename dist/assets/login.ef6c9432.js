import{j as u,K as c,h as m,r as d,R as e,C as p,V as g,E as f,G as E,I as h,D as C}from"./vendor.e93814c3.js";import{k as b,b as k}from"./index.7184e46e.js";import"./index.6f9fd387.js";const x=()=>{const{t}=u(),l=c(),o=m(),[r,i]=d.exports.useState(""),n=()=>{b(r),k.post("login").then(s=>{const a=s.data;a.code===200?(o({title:t(a.message),status:"success",duration:3e3,isClosable:!0}),l.push("settings/0")):o({title:t(a.message),status:"error",duration:3e3,isClosable:!0})})};return e.createElement(p,{p:"4",h:"full"},e.createElement(g,{w:{base:"full",md:"50%"}},e.createElement(f,{isRequired:!0},e.createElement(E,null,t("password")),e.createElement(h,{type:"password",value:r,onChange:s=>i(s.target.value),onKeyUp:s=>{s.key==="Enter"&&n()}})),e.createElement(C,{onClick:n},t("login"))))};export{x as default};
