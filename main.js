(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>d});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"* {\n   box-sizing: border-box;\n }\n body {\n   margin: 0;\n   font-family: Arial, Helvetica, sans-serif;\n   background-color: bisque;\n }\n \n.mainGrid {\n   margin: 10px;\n   height: 100vh;\n   display: grid;\n   grid-template: 75px 1fr / 200px 1fr;\n   gap: 8px;\n}\n\n.header {\n   grid-area: 1 / 1 / 2 / 3;\n   background-color: aqua;\n   font-size: larger;\n   display:flex;\n   align-items: center;\n   justify-content: center;\n   border: 2px solid black;\n   border-radius: 10px;\n   padding: 5px;\n}\n.nav {\n   grid-area: 2 / 1 / 3 / 2;\n   display: flex;\n   flex-direction: column;\n   justify-content: flex-start;\n   background-color: aquamarine;\n   border: 2px solid black;\n   border-radius: 10px;\n   padding: 5px;\n   /* text-align: center; */\n}\n\n#navList {\n  list-style-type: none;\n  margin: 5px;\n}\n.project {\n  margin: 4px;\n  border-radius: 20px;\n}\n.project:hover {\n  background-color: lightcyan;\n  cursor: pointer;\n }\n\n.details {\n   grid-area: 2 / 2 / 3 / 3;\n   background-color: lawngreen;\n   border: 2px solid black;\n   display: grid;\n   grid-template: 40px / 1fr 1fr;\n   border-radius: 10px;\n   padding: 5px;\n   gap: 5px;\n}\n#detailsTopRow {\n  grid-area: 1/1/2/-1;\n  text-align: center;\n  font-size: x-large;\n  display:flex;\n  align-items: center;\n  justify-content: center;\n}\n#projectTodos{\n  grid-area: 2/1/3/2;\n  border-radius: 10px;\n  border: 2px solid black;\n  padding: 5px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\nspan {\n  display:inline-block;\n}\n#projectDetails {\n  grid-area: 2/2/3/3;\n  border-radius: 10px;\n  border: 2px solid black;\n  padding: 5px;\n  text-align: center;\n}\n\n/* play with autofit and autfill */\n/* .project {\n  height: 80px;\n  display:flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px;\n  border-radius: 15px;\n  margin: 8px;\n  border: 2px solid black;\n  text-align: center;\n} */\n\n/* Modal Style */\n#overlay,\n#overlayDetails {\n  display: none; /* hide modal initially */\n  position: absolute; /* position to allow modal to cover over it */\n  background: rgba(0, 0, 0, 0.2); /* gray out the background when modal appears */\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n#modal,\n#modalDetails {\n display: flex;\n flex-direction: column;\n align-items: center;\n justify-content: center;\n border-radius: 25px;\n background: #FFF;\n margin: 0 auto; /* center the modal */\n padding: 9px;\n width: 600px;\n text-align: center;\n position: relative; /* set relative to overlay position */\n top: 20%;\n box-shadow: 10px 5px 5px #000; /* give modal a hover effect */\n}\n\n#closeModal, \n#submitModal,\n#editModal,\n#closeModalDetails {\n  /* display: inline-block; */\n  cursor: pointer;\n  padding: 8px;\n  background: rgb(242, 101, 25);\n  text-decoration: none;\n  border-radius: 25px;\n  width: 75px;\n}\n#submitModal,\n#editModal {\n background-color: cornflowerblue;\n}\n\n#closeModal:hover, \n#closeModalDetails:hover,\n#editModal:hover,\n#submitModal:hover {\n    background: gray;\n    color: #FFF;\n}\n\n#closeModal:focus {\n    outline: none;\n}\n#addProject:hover {\n  background-color: grey;\n  cursor: pointer;\n}\n\ninput {\n margin: 5px;\n width: 240px;\n}\n\n/* Test for the appended tile id */\n/* #tile0{\nbackground-color: blue;\n} */",""]);const d=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],d=0;d<n.length;d++){var l=n[d],c=o.base?l[0]+o.base:l[0],s=a[c]||0,u="".concat(c," ").concat(s);a[c]=s+1;var p=t(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=d,e.splice(d,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=t(a[i]);e[d].references--}for(var l=o(n,r),c=0;c<a.length;c++){var s=t(a[c]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=l}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{class n{constructor(n,e,t){this.title=n,this.notes=e,this.duration=t,this.todos=[]}displayTitle(){return this.title}}let e=[];function o(t,o,r){const a=new n(t,o,r);return console.log(a),e.unshift(a),e}const r=document.getElementById("navList");function a(){for(;r.firstChild;)r.removeChild(r.firstChild);r.textContent="Current Projects:",e.forEach((n=>{const e=document.createElement("li");e.classList.add("project"),e.textContent=n.title,r.appendChild(e)}))}const i=document.getElementById("titleInput"),d=document.getElementById("notesInput"),l=document.getElementById("duration"),c=document.getElementById("submitModal");var s=t(72),u=t.n(s),p=t(825),m=t.n(p),f=t(659),g=t.n(f),v=t(56),y=t.n(v),h=t(540),x=t.n(h),b=t(113),E=t.n(b),I=t(208),k={};k.styleTagTransform=E(),k.setAttributes=y(),k.insert=g().bind(null,"head"),k.domAPI=m(),k.insertStyleElement=x(),u()(I.A,k),I.A&&I.A.locals&&I.A.locals;const C=document.getElementById("addTodoBtn");document.getElementById("addTodoInput"),document.getElementById("detailsTopRow");const B=document.getElementById("todoContainer");function w(n){for(;B.firstChild;)B.removeChild(B.firstChild);n.todos.forEach((n=>{const e=document.createElement("div");e.textContent=n,console.log(e.textContent),B.appendChild(e)}))}const M=document.getElementById("addProject"),T=document.getElementById("closeModal"),j=document.getElementById("titleInput"),L=document.getElementById("notesInput"),A=document.getElementById("overlay");document.getElementById("closeModalDetails"),document.getElementById("overlayDetails"),o("Laundry","Wash, dry, fold","1.5 hours"),o("Clean car","Throw out junk and vacuum the floor mats","2 hours"),o("Dishes","Unload clean dishes, reload dishwasher, run it","30 minutes"),a(),document.getElementById("navList").addEventListener("click",(function(n){const t=document.getElementById("detailsTopRow"),o=document.getElementById("notes"),r=document.getElementById("duration");if("project"===n.target.className){let a=n.target.textContent;t.textContent=a,e.forEach((n=>{a===n.title&&(o.textContent="Notes: "+n.notes,r.textContent="Duration: "+n.duration,w(n))}))}})),c.addEventListener("click",(n=>{const e=i.value,t=d.value,r=l.value;""===e?alert("You need a title at least"):(o(e,t,r),a(),i.value="",d.value="",l.value="")})),C.addEventListener("click",(()=>{const n=document.getElementById("addTodoInput"),t=document.getElementById("detailsTopRow");let o=n.value;e.forEach((e=>{t.textContent===e.title&&(""===o?alert("Cannot be blank"):(e.todos.push(o),n.value="",console.log(e.todos)))}))})),document.getElementById("addTodoBtn").addEventListener("click",(n=>{const t=document.getElementById("detailsTopRow");if("addTodoBtn"===n.target.id){let n=t.textContent;e.forEach((e=>{n===e.title&&w(e)}))}})),M.addEventListener("click",(n=>{A.style.display="block"})),T.addEventListener("click",(n=>{j.value="",L.value="",A.style.display="none"}))})()})();