const Ee=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Ee();function C(){}const Le=t=>t;function ve(t){return t()}function le(){return Object.create(null)}function B(t){t.forEach(ve)}function ye(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let R;function z(t,e){return R||(R=document.createElement("a")),R.href=e,t===R.href}function qe(t){return Object.keys(t).length===0}const $e=typeof window!="undefined";let Ce=$e?()=>window.performance.now():()=>Date.now(),re=$e?t=>requestAnimationFrame(t):C;const F=new Set;function we(t){F.forEach(e=>{e.c(t)||(F.delete(e),e.f())}),F.size!==0&&re(we)}function Ae(t){let e;return F.size===0&&re(we),{promise:new Promise(n=>{F.add(e={c:t,f:n})}),abort(){F.delete(e)}}}function g(t,e){t.appendChild(e)}function be(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function je(t){const e=y("style");return De(be(t),e),e.sheet}function De(t,e){g(t.head||t,e)}function E(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function Be(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function j(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function oe(t){return document.createTextNode(t)}function O(){return oe(" ")}function xe(){return oe("")}function T(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function s(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Fe(t){return Array.from(t.childNodes)}function Oe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function se(t,e){t.value=e==null?"":e}function ze(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}const V=new Map;let Q=0;function Se(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Te(t,e){const n={stylesheet:je(e),rules:{}};return V.set(t,n),n}function ce(t,e,n,r,i,o,l,u=0){const f=16.666/r;let d=`{
`;for(let $=0;$<=1;$+=f){const _=e+(n-e)*o($);d+=$*100+`%{${l(_,1-_)}}
`}const h=d+`100% {${l(n,1-n)}}
}`,a=`__svelte_${Se(h)}_${u}`,m=be(t),{stylesheet:c,rules:p}=V.get(m)||Te(m,t);p[a]||(p[a]=!0,c.insertRule(`@keyframes ${a} ${h}`,c.cssRules.length));const b=t.style.animation||"";return t.style.animation=`${b?`${b}, `:""}${a} ${r}ms linear ${i}ms 1 both`,Q+=1,a}function Me(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),Q-=i,Q||Pe())}function Pe(){re(()=>{Q||(V.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),V.clear())})}let G;function P(t){G=t}function Ze(){if(!G)throw new Error("Function called outside component initialization");return G}function Ge(t){Ze().$$.on_mount.push(t)}const M=[],ue=[],H=[],ae=[],Ne=Promise.resolve();let ie=!1;function Re(){ie||(ie=!0,Ne.then(ke))}function N(t){H.push(t)}const ee=new Set;let I=0;function ke(){const t=G;do{for(;I<M.length;){const e=M[I];I++,P(e),Ie(e.$$)}for(P(null),M.length=0,I=0;ue.length;)ue.pop()();for(let e=0;e<H.length;e+=1){const n=H[e];ee.has(n)||(ee.add(n),n())}H.length=0}while(M.length);for(;ae.length;)ae.pop()();ie=!1,ee.clear(),P(t)}function Ie(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let S;function He(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function te(t,e,n){t.dispatchEvent(ze(`${e?"intro":"outro"}${n}`))}const K=new Set;let q;function Ke(){q={r:0,c:[],p:q}}function Ue(){q.r||B(q.c),q=q.p}function D(t,e){t&&t.i&&(K.delete(t),t.i(e))}function Z(t,e,n,r){if(t&&t.o){if(K.has(t))return;K.add(t),q.c.push(()=>{K.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const We={duration:0};function fe(t,e,n,r){let i=e(t,n),o=r?0:1,l=null,u=null,f=null;function d(){f&&Me(t,f)}function h(m,c){const p=m.b-o;return c*=Math.abs(p),{a:o,b:m.b,d:p,duration:c,start:m.start,end:m.start+c,group:m.group}}function a(m){const{delay:c=0,duration:p=300,easing:b=Le,tick:$=C,css:_}=i||We,x={start:Ce()+c,b:m};m||(x.group=q,q.r+=1),l||u?u=x:(_&&(d(),f=ce(t,o,m,p,c,b,_)),m&&$(0,1),l=h(x,p),N(()=>te(t,m,"start")),Ae(L=>{if(u&&L>u.start&&(l=h(u,p),u=null,te(t,l.b,"start"),_&&(d(),f=ce(t,o,l.b,l.duration,0,b,i.css))),l){if(L>=l.end)$(o=l.b,1-o),te(t,l.b,"end"),u||(l.b?d():--l.group.r||B(l.group.c)),l=null;else if(L>=l.start){const k=L-l.start;o=l.a+l.d*b(k/l.duration),$(o,1-o)}}return!!(l||u)}))}return{run(m){ye(i)?He().then(()=>{i=i(),a(m)}):a(m)},end(){d(),l=u=null}}}function ne(t){t&&t.c()}function U(t,e,n,r){const{fragment:i,on_mount:o,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,n),r||N(()=>{const f=o.map(ve).filter(ye);l?l.push(...f):B(f),t.$$.on_mount=[]}),u.forEach(N)}function W(t,e){const n=t.$$;n.fragment!==null&&(B(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ve(t,e){t.$$.dirty[0]===-1&&(M.push(t),Re(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(t,e,n,r,i,o,l,u=[-1]){const f=G;P(t);const d=t.$$={fragment:null,ctx:null,props:o,update:C,not_equal:i,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:le(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};l&&l(d.root);let h=!1;if(d.ctx=n?n(t,e.props||{},(a,m,...c)=>{const p=c.length?c[0]:m;return d.ctx&&i(d.ctx[a],d.ctx[a]=p)&&(!d.skip_bound&&d.bound[a]&&d.bound[a](p),h&&Ve(t,a)),m}):[],d.update(),h=!0,B(d.before_update),d.fragment=r?r(d.ctx):!1,e.target){if(e.hydrate){const a=Fe(e.target);d.fragment&&d.fragment.l(a),a.forEach(w)}else d.fragment&&d.fragment.c();e.intro&&D(t.$$.fragment),U(t,e.target,e.anchor,e.customElement),ke()}P(f)}class Y{$destroy(){W(this,1),this.$destroy=C}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!qe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Qe(t){const e=t-1;return e*e*e+1}function de(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}function me(t,{delay:e=0,duration:n=400,easing:r=Qe}={}){const i=getComputedStyle(t),o=+i.opacity,l=parseFloat(i.height),u=parseFloat(i.paddingTop),f=parseFloat(i.paddingBottom),d=parseFloat(i.marginTop),h=parseFloat(i.marginBottom),a=parseFloat(i.borderTopWidth),m=parseFloat(i.borderBottomWidth);return{delay:e,duration:n,easing:r,css:c=>`overflow: hidden;opacity: ${Math.min(c*20,1)*o};height: ${c*l}px;padding-top: ${c*u}px;padding-bottom: ${c*f}px;margin-top: ${c*d}px;margin-bottom: ${c*h}px;border-top-width: ${c*a}px;border-bottom-width: ${c*m}px;`}}function he(t,e,n){const r=t.slice();return r[10]=e[n],r}function pe(t){let e,n,r,i,o,l,u,f,d=t[3],h=[];for(let a=0;a<d.length;a+=1)h[a]=ge(he(t,d,a));return{c(){e=y("div");for(let a=0;a<h.length;a+=1)h[a].c();n=O(),r=j("svg"),i=j("g"),o=j("path"),l=j("path"),s(o,"fill","#000"),s(o,"fill-rule","evenodd"),s(o,"stroke","none"),s(o,"d","M 53.03854 20.218155 C 44.010872 11.190491 29.373848 11.190491 20.34618 20.218155 L 20.34618 20.218155 C 11.318512 29.245834 11.318512 43.882858 20.34618 52.910522 L 202.632889 235.197235 C 211.660553 244.224884 226.297577 244.224899 235.325241 235.19722 L 235.325241 235.19722 C 244.352905 226.169556 244.352905 211.532532 235.325256 202.504883 Z"),s(l,"fill","#000"),s(l,"fill-rule","evenodd"),s(l,"stroke","none"),s(l,"d","M 20.674755 202.958267 C 11.647087 211.985931 11.647086 226.622955 20.674755 235.650635 L 20.674755 235.650635 C 29.702423 244.678299 44.339447 244.678299 53.367115 235.650635 L 235.653824 53.363907 C 244.681488 44.336258 244.681488 29.699234 235.653824 20.67157 L 235.653824 20.67157 C 226.626144 11.64389 211.98912 11.643906 202.961472 20.671555 Z"),s(r,"viewBox","0 0 256 256"),s(r,"xmlns","http://www.w3.org/2000/svg"),s(r,"xmlns:xlink","http://www.w3.org/1999/xlink"),s(e,"id","searchEngine-menu"),s(e,"class","svelte-tqf8j7")},m(a,m){E(a,e,m);for(let c=0;c<h.length;c+=1)h[c].m(e,null);g(e,n),g(e,r),g(r,i),g(i,o),g(i,l),f=!0},p(a,m){if(t=a,m&9){d=t[3];let c;for(c=0;c<d.length;c+=1){const p=he(t,d,c);h[c]?h[c].p(p,m):(h[c]=ge(p),h[c].c(),h[c].m(e,n))}for(;c<h.length;c+=1)h[c].d(1);h.length=d.length}},i(a){f||(N(()=>{u||(u=fe(e,me,{duration:200,easing:de},!0)),u.run(1)}),f=!0)},o(a){u||(u=fe(e,me,{duration:200,easing:de},!1)),u.run(0),f=!1},d(a){a&&w(e),Be(h,a),a&&u&&u.end()}}}function _e(t){let e,n,r,i;function o(){return t[5](t[10])}return{c(){e=y("img"),s(e,"class","searchEngine-menu-icon svelte-tqf8j7"),z(e.src,n="./icons/"+t[10].name+".avif")||s(e,"src",n),s(e,"id",t[10].name+"-menu-icon"),s(e,"alt",t[10].name)},m(l,u){E(l,e,u),r||(i=T(e,"click",o),r=!0)},p(l,u){t=l},d(l){l&&w(e),r=!1,i()}}}function ge(t){let e,n=t[10].name!==t[0]&&_e(t);return{c(){n&&n.c(),e=xe()},m(r,i){n&&n.m(r,i),E(r,e,i)},p(r,i){r[10].name!==r[0]?n?n.p(r,i):(n=_e(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){n&&n.d(r),r&&w(e)}}}function Je(t){let e,n;return{c(){e=y("img"),s(e,"class","searchEngine-icon svelte-tqf8j7"),s(e,"id","Google-icon"),z(e.src,n="./icons/Google.avif")||s(e,"src",n),s(e,"alt","Google")},m(r,i){E(r,e,i)},d(r){r&&w(e)}}}function Xe(t){let e,n;return{c(){e=y("img"),s(e,"class","searchEngine-icon svelte-tqf8j7"),s(e,"id","Baidu-icon"),z(e.src,n="./icons/Baidu.avif")||s(e,"src",n),s(e,"alt","Baidu")},m(r,i){E(r,e,i)},d(r){r&&w(e)}}}function Ye(t){let e,n;return{c(){e=y("img"),s(e,"class","searchEngine-icon svelte-tqf8j7"),s(e,"id","DuckDuckGo-icon"),z(e.src,n="./icons/DuckDuckGo.avif")||s(e,"src",n),s(e,"alt","DuckDuckGo")},m(r,i){E(r,e,i)},d(r){r&&w(e)}}}function et(t){let e,n,r,i,o,l,u,f,d,h,a,m,c,p,b,$,_=t[1]&&pe(t);function x(v,A){return v[0]==="DuckDuckGo"?Ye:v[0]==="Baidu"?Xe:Je}let L=x(t),k=L(t);return{c(){e=y("div"),n=y("div"),r=y("form"),i=y("input"),l=O(),u=y("div"),f=y("div"),_&&_.c(),d=O(),k.c(),h=O(),a=j("svg"),m=j("g"),c=j("path"),s(i,"id","search-bar"),s(i,"type","text"),s(i,"placeholder",o=`Search with ${t[0]}`),s(i,"class","svelte-tqf8j7"),s(r,"id","search-bar-div"),s(r,"class","svelte-tqf8j7"),s(f,"id","chosen-searchEngine"),s(f,"class","svelte-tqf8j7"),s(c,"d","M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"),s(a,"id","search-icon"),s(a,"viewBox","0 0 24 24"),s(a,"class","svelte-tqf8j7"),s(u,"id","search-button"),s(u,"class","svelte-tqf8j7"),s(n,"id","search-component"),s(n,"class","svelte-tqf8j7"),s(e,"id","search-component-wrapper"),s(e,"class","svelte-tqf8j7")},m(v,A){E(v,e,A),g(e,n),g(n,r),g(r,i),se(i,t[2]),g(n,l),g(n,u),g(u,f),_&&_.m(f,null),g(f,d),k.m(f,null),g(u,h),g(u,a),g(a,m),g(m,c),p=!0,b||($=[T(i,"input",t[4]),T(f,"click",t[6]),T(a,"click",t[7]),T(u,"mouseleave",t[8])],b=!0)},p(v,[A]){(!p||A&1&&o!==(o=`Search with ${v[0]}`))&&s(i,"placeholder",o),A&4&&i.value!==v[2]&&se(i,v[2]),v[1]?_?(_.p(v,A),A&2&&D(_,1)):(_=pe(v),_.c(),D(_,1),_.m(f,d)):_&&(Ke(),Z(_,1,1,()=>{_=null}),Ue()),L!==(L=x(v))&&(k.d(1),k=L(v),k&&(k.c(),k.m(f,null)))},i(v){p||(D(_),p=!0)},o(v){Z(_),p=!1},d(v){v&&w(e),_&&_.d(),k.d(),b=!1,B($)}}}const tt=/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,nt=/^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;function it(t,e,n){let r="Google",i=!1,o;const l=[{name:"DuckDuckGo",query:"https://duckduckgo.com/?q="},{name:"Google",query:"https://www.google.com/search?q="},{name:"Baidu",query:"https://www.baidu.com/s?ie=utf-8&wd="}],u=()=>{let c=l[l.findIndex(p=>p.name==r)].query;o.match(tt)?(window.location.href=o,console.log(o)):o.match(nt)?(window.location.href="https://"+o,console.log("https://"+o)):(window.location.href=c+o,console.log(c+o))};Ge(()=>{document.getElementById("search-bar").focus(),document.getElementById("search-bar-div").addEventListener("submit",c=>{c.preventDefault(),typeof o!="undefined"&&u()})});function f(){o=this.value,n(2,o)}return[r,i,o,l,f,c=>{n(0,r=c.name)},()=>{n(1,i=!i)},()=>{if(typeof o!="undefined"){let c=l[l.findIndex(p=>p.name==r)].query;window.location.href=c+o}},()=>{n(1,i=!1)}]}class rt extends Y{constructor(e){super(),X(this,e,it,et,J,{})}}function ot(t){let e,n,r;return{c(){e=y("div"),n=y("h1"),r=oe(t[0]),s(n,"id","clock-digits"),s(n,"class","svelte-dhb55y"),s(e,"id","clock"),s(e,"class","svelte-dhb55y")},m(i,o){E(i,e,o),g(e,n),g(n,r)},p(i,[o]){o&1&&Oe(r,i[0])},i:C,o:C,d(i){i&&w(e)}}}function lt(t,e,n){let r;const i=()=>Intl.DateTimeFormat().resolvedOptions().timeZone,o=()=>Intl.DateTimeFormat().resolvedOptions().locale,l=()=>{const u=new Date().toLocaleTimeString(o(),{timeZone:i(),hour12:!1,hour:"2-digit",minute:"2-digit"});n(0,r=u),setTimeout(l,1e3)};return l(),[r]}class st extends Y{constructor(e){super(),X(this,e,lt,ot,J,{})}}function ct(t){let e,n,r;return{c(){e=y("div"),n=y("img"),s(n,"id","bg-img"),z(n.src,r=t[0])||s(n,"src",r),s(n,"alt","HK"),s(n,"class","svelte-1087u1s"),s(e,"id","bg"),s(e,"class","svelte-1087u1s")},m(i,o){E(i,e,o),g(e,n)},p(i,[o]){o&1&&!z(n.src,r=i[0])&&s(n,"src",r)},i:C,o:C,d(i){i&&w(e)}}}function ut(t,e,n){let{imgURL:r="./icons/HK.avif"}=e;return t.$$set=i=>{"imgURL"in i&&n(0,r=i.imgURL)},[r]}class at extends Y{constructor(e){super(),X(this,e,ut,ct,J,{imgURL:0})}}function ft(t){let e,n,r,i,o,l,u;return n=new at({props:{backgroundPicture:t[0]}}),i=new st({}),l=new rt({props:{backgroundPicture:t[0]}}),{c(){e=y("div"),ne(n.$$.fragment),r=O(),ne(i.$$.fragment),o=O(),ne(l.$$.fragment),s(e,"id","app"),s(e,"class","svelte-b7rgmy")},m(f,d){E(f,e,d),U(n,e,null),g(e,r),U(i,e,null),g(e,o),U(l,e,null),u=!0},p:C,i(f){u||(D(n.$$.fragment,f),D(i.$$.fragment,f),D(l.$$.fragment,f),u=!0)},o(f){Z(n.$$.fragment,f),Z(i.$$.fragment,f),Z(l.$$.fragment,f),u=!1},d(f){f&&w(e),W(n),W(i),W(l)}}}function dt(t){return[new File([],"./icons/HK.avif")]}class mt extends Y{constructor(e){super(),X(this,e,dt,ft,J,{})}}new mt({target:document.getElementById("app")});