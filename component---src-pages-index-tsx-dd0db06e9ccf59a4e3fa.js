"use strict";(self.webpackChunkcloudcamp=self.webpackChunkcloudcamp||[]).push([[691],{8506:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var r,o=n(7294),a=n(5444),i=n.p+"static/logo-text-alt-e74e79a1b447321980175c6b7a2b2dc6.svg",l=n(1442),u=n(2710),c=n(7153),s=n(8588),d=n(2337),f=n(3503),m=n(8629),p=n(1450),v=n(9366),g=n(3149),E=n(3859),h=n(8496),y=n(6864),x=n(1075),b=n(1897);function w(e,t,n){void 0===t&&(t=r.All);var a=void 0===n?{}:n,i=a.initialFocus,l=a.containers,u=(0,o.useRef)("undefined"!=typeof window?document.activeElement:null),c=(0,o.useRef)(null),s=(0,b.t)(),f=Boolean(t&r.RestoreFocus),m=Boolean(t&r.InitialFocus);(0,o.useEffect)((function(){f&&(u.current=document.activeElement)}),[f]),(0,o.useEffect)((function(){if(f)return function(){(0,x.C5)(u.current),u.current=null}}),[f]),(0,o.useEffect)((function(){if(m&&e.current){var t=document.activeElement;if(null==i?void 0:i.current){if((null==i?void 0:i.current)===t)return void(c.current=t)}else if(e.current.contains(t))return void(c.current=t);(null==i?void 0:i.current)?(0,x.C5)(i.current):(0,x.jA)(e.current,x.TO.First)===x.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),c.current=document.activeElement}}),[e,i,m]),(0,y.s)("keydown",(function(n){t&r.TabLock&&e.current&&n.key===v.R.Tab&&(n.preventDefault(),(0,x.jA)(e.current,(n.shiftKey?x.TO.Previous:x.TO.Next)|x.TO.WrapAround)===x.fE.Success&&(c.current=document.activeElement))})),(0,y.s)("focus",(function(n){if(t&r.FocusLock){var o=new Set(null==l?void 0:l.current);if(o.add(e),o.size){var a=c.current;if(a&&s.current){var i=n.target;i&&i instanceof HTMLElement?!function(e,t){for(var n,r=(0,d.Ul)(e);!(n=r()).done;){var o;if(null==(o=n.value.current)?void 0:o.contains(t))return!0}return!1}(o,i)?(n.preventDefault(),n.stopPropagation(),(0,x.C5)(a)):(c.current=i,(0,x.C5)(i)):(0,x.C5)(c.current)}}}}),!0)}!function(e){e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All"}(r||(r={}));var C=n(7906),k=new Set,T=new Map;function N(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function S(e){var t=T.get(e);t&&(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}var O=(0,o.createContext)(!1);function F(e){return o.createElement(O.Provider,{value:e.force},e.children)}var R=n(3935);function A(){var e=(0,o.useContext)(O),t=(0,o.useContext)(M),n=(0,o.useState)((function(){if(!e&&null!==t)return null;if("undefined"==typeof window)return null;var n=document.getElementById("headlessui-portal-root");if(n)return n;var r=document.createElement("div");return r.setAttribute("id","headlessui-portal-root"),document.body.appendChild(r)})),r=n[0],a=n[1];return(0,o.useEffect)((function(){e||null!==t&&a(t.current)}),[t,a,e]),r}var D=o.Fragment;function I(e){var t=e,n=A(),r=(0,o.useState)((function(){return"undefined"==typeof window?null:document.createElement("div")}))[0],a=(0,E.H)();return(0,C.e)((function(){if(n&&r)return n.appendChild(r),function(){var e;n&&(r&&(n.removeChild(r),n.childNodes.length<=0&&(null==(e=n.parentElement)||e.removeChild(n))))}}),[n,r]),a&&n&&r?(0,R.createPortal)((0,m.sY)({props:t,defaultTag:D,name:"Portal"}),r):null}var Y=o.Fragment,M=(0,o.createContext)(null);I.Group=function(e){var t=e.target,n=(0,d.gK)(e,["target"]);return o.createElement(M.Provider,{value:t},(0,m.sY)({props:n,defaultTag:Y,name:"Popover.Group"}))};var P=(0,o.createContext)(null);function L(){var e=(0,o.useContext)(P);if(null===e){var t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,L),t}return e}var j,U,H,G,Z=n(2136),B=(0,o.createContext)((function(){}));function W(e){var t=e.children,n=e.onUpdate,r=e.type,a=e.element,i=(0,o.useContext)(B),l=(0,o.useCallback)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];null==n||n.apply(void 0,t),i.apply(void 0,t)}),[i,n]);return(0,C.e)((function(){return l(j.Add,r,a),function(){return l(j.Remove,r,a)}}),[l,r,a]),o.createElement(B.Provider,{value:l},t)}B.displayName="StackContext",function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove"}(j||(j={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(H||(H={})),function(e){e[e.SetTitleId=0]="SetTitleId"}(G||(G={}));var q=((U={})[G.SetTitleId]=function(e,t){return e.titleId===t.id?e:(0,d.gY)({},e,{titleId:t.id})},U),z=(0,o.createContext)(null);function V(e){var t=(0,o.useContext)(z);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+X.displayName+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,V),n}return t}function K(e,t){return(0,f.E)(t.type,q,e,t)}z.displayName="DialogContext";var _=m.AN.RenderStrategy|m.AN.Static,J=(0,m.yV)((function(e,t){var n,a=e.open,i=e.onClose,l=e.initialFocus,u=(0,d.gK)(e,["open","onClose","initialFocus"]),c=(0,o.useState)(0),s=c[0],g=c[1],x=(0,Z.oJ)();void 0===a&&null!==x&&(a=(0,f.E)(x,((n={})[Z.ZM.Open]=!0,n[Z.ZM.Closed]=!1,n)));var b=(0,o.useRef)(new Set),O=(0,o.useRef)(null),R=(0,p.T)(O,t),A=e.hasOwnProperty("open")||null!==x,D=e.hasOwnProperty("onClose");if(!A&&!D)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!A)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!D)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof a)throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: "+a);if("function"!=typeof i)throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: "+i);var Y=a?H.Open:H.Closed,M=null!==x?x===Z.ZM.Open:Y===H.Open,L=(0,o.useReducer)(K,{titleId:null,descriptionId:null}),U=L[0],B=L[1],q=(0,o.useCallback)((function(){return i(!1)}),[i]),V=(0,o.useCallback)((function(e){return B({type:G.SetTitleId,id:e})}),[B]),J=(0,E.H)()&&Y===H.Open,Q=s>1,X=null!==(0,o.useContext)(z),$=Q?"parent":"leaf";w(O,J?(0,f.E)($,{parent:r.RestoreFocus,leaf:r.All}):r.None,{initialFocus:l,containers:b}),function(e,t){void 0===t&&(t=!0),(0,C.e)((function(){if(t&&e.current){var n=e.current;k.add(n);for(var r,o=(0,d.Ul)(T.keys());!(r=o()).done;){var a=r.value;a.contains(n)&&(S(a),T.delete(a))}return document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement){for(var t,n=(0,d.Ul)(k);!(t=n()).done;){var r=t.value;if(e.contains(r))return}1===k.size&&(T.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),N(e))}})),function(){if(k.delete(n),k.size>0)document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement&&!T.has(e)){for(var t,n=(0,d.Ul)(k);!(t=n()).done;){var r=t.value;if(e.contains(r))return}T.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),N(e)}}));else for(var e,t=(0,d.Ul)(T.keys());!(e=t()).done;){var r=e.value;S(r),T.delete(r)}}}}),[t])}(O,!!Q&&J),(0,y.s)("mousedown",(function(e){var t,n=e.target;Y===H.Open&&(Q||(null==(t=O.current)?void 0:t.contains(n))||q())})),(0,y.s)("keydown",(function(e){e.key===v.R.Escape&&Y===H.Open&&(Q||(e.preventDefault(),e.stopPropagation(),q()))})),(0,o.useEffect)((function(){if(Y===H.Open&&!X){var e=document.documentElement.style.overflow,t=document.documentElement.style.paddingRight,n=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=n+"px",function(){document.documentElement.style.overflow=e,document.documentElement.style.paddingRight=t}}}),[Y,X]),(0,o.useEffect)((function(){if(Y===H.Open&&O.current){var e=new IntersectionObserver((function(e){for(var t,n=(0,d.Ul)(e);!(t=n()).done;){var r=t.value;0===r.boundingClientRect.x&&0===r.boundingClientRect.y&&0===r.boundingClientRect.width&&0===r.boundingClientRect.height&&q()}}));return e.observe(O.current),function(){return e.disconnect()}}}),[Y,O,q]);var ee=function(){var e=(0,o.useState)([]),t=e[0],n=e[1];return[t.length>0?t.join(" "):void 0,(0,o.useMemo)((function(){return function(e){var t=(0,o.useCallback)((function(e){return n((function(t){return[].concat(t,[e])})),function(){return n((function(t){var n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))}}),[]),r=(0,o.useMemo)((function(){return{register:t,slot:e.slot,name:e.name,props:e.props}}),[t,e.slot,e.name,e.props]);return o.createElement(P.Provider,{value:r},e.children)}}),[n])]}(),te=ee[0],ne=ee[1],re="headlessui-dialog-"+(0,h.M)(),oe=(0,o.useMemo)((function(){return[{dialogState:Y,close:q,setTitleId:V},U]}),[Y,U,q,V]),ae=(0,o.useMemo)((function(){return{open:Y===H.Open}}),[Y]),ie={ref:R,id:re,role:"dialog","aria-modal":Y===H.Open||void 0,"aria-labelledby":U.titleId,"aria-describedby":te,onClick:function(e){e.stopPropagation()}},le=u;return o.createElement(W,{type:"Dialog",element:O,onUpdate:(0,o.useCallback)((function(e,t,n){var r;"Dialog"===t&&(0,f.E)(e,((r={})[j.Add]=function(){b.current.add(n),g((function(e){return e+1}))},r[j.Remove]=function(){b.current.add(n),g((function(e){return e-1}))},r))}),[])},o.createElement(F,{force:!0},o.createElement(I,null,o.createElement(z.Provider,{value:oe},o.createElement(I.Group,{target:O},o.createElement(F,{force:!1},o.createElement(ne,{slot:ae,name:"Dialog.Description"},(0,m.sY)({props:(0,d.gY)({},le,ie),slot:ae,defaultTag:"div",features:_,visible:M,name:"Dialog"}))))))))})),Q=(0,m.yV)((function e(t,n){var r=V([X.displayName,e.name].join("."))[0],a=r.dialogState,i=r.close,l=(0,p.T)(n),u="headlessui-dialog-overlay-"+(0,h.M)(),c=(0,o.useCallback)((function(e){if((0,g.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),i()}),[i]),s=(0,o.useMemo)((function(){return{open:a===H.Open}}),[a]),f={ref:l,id:u,"aria-hidden":!0,onClick:c},v=t;return(0,m.sY)({props:(0,d.gY)({},v,f),slot:s,defaultTag:"div",name:"Dialog.Overlay"})}));var X=Object.assign(J,{Overlay:Q,Title:function e(t){var n=V([X.displayName,e.name].join("."))[0],r=n.dialogState,a=n.setTitleId,i="headlessui-dialog-title-"+(0,h.M)();(0,o.useEffect)((function(){return a(i),function(){return a(null)}}),[i,a]);var l=(0,o.useMemo)((function(){return{open:r===H.Open}}),[r]),u={id:i},c=t;return(0,m.sY)({props:(0,d.gY)({},c,u),slot:l,defaultTag:"h2",name:"Dialog.Title"})},Description:function(e){var t=L(),n="headlessui-description-"+(0,h.M)();(0,C.e)((function(){return t.register(n)}),[n,t.register]);var r=e,o=(0,d.gY)({},t.props,{id:n});return(0,m.sY)({props:(0,d.gY)({},r,o),slot:t.slot||{},defaultTag:"p",name:t.name||"Description"})}}),$=n(6726),ee=n(3537);function te(){var e=(0,o.useContext)($._),t=e[0],n=e[1],r=t.searchboxVisible,a=function(e){return n({type:"SET_SEARCHBOX_VISIBLE",payload:e})};switch((0,ee.qY)().os){case"iOS":case"android":case"Android OS":break;case"Mac OS":"cmd+k";break;default:"ctrl+k"}return o.createElement(s.u.Root,{show:r,as:o.Fragment},o.createElement(X,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",onClose:a},o.createElement("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},o.createElement(s.u.Child,{as:o.Fragment,enter:"ease-out duration-100",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0"},o.createElement(X.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})),o.createElement("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​"),o.createElement(s.u.Child,{as:o.Fragment,enter:"ease-out duration-100",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-100",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},o.createElement("div",{className:"inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6"},o.createElement("div",null,o.createElement("div",{className:"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"},o.createElement(l.nQG,{className:"h-6 w-6 text-green-600","aria-hidden":"true"})),o.createElement("div",{className:"mt-3 text-center sm:mt-5"},o.createElement(X.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900"},"Search goes here"),o.createElement("div",{className:"mt-2"},o.createElement("p",{className:"text-sm text-gray-500"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.")))),o.createElement("div",{className:"mt-5 sm:mt-6"},o.createElement("button",{type:"button",className:"inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm",onClick:function(){return a(!1)}},"Go back")))))))}var ne=n(6428);function re(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t="npm install cloudcamp";return o.createElement(o.Fragment,null,o.createElement($.y,null,o.createElement(u.Z,{title:"infrastructure as few lines of code",canonical:"/"}),o.createElement(te,null),o.createElement("div",{className:"h-16 border-b bg-white items-center flex flex-none max-w-screen-lg mx-auto"},o.createElement(c.Z,{noml:!1}),o.createElement(ne.Z,{classname:"flex"})),o.createElement("div",{className:"flex max-w-screen-lg mx-auto items-center px-4"},o.createElement("img",{className:"h-18 w-auto mx-auto mt-14",src:i,alt:"CloudCamp"})),o.createElement("div",{className:"flex max-w-screen-lg mx-auto"},o.createElement("div",{className:"mx-auto text-center mt-20 text-4xl md:text-6xl lg:text-8xl  md:leading-[1]",style:{fontFamily:'"Helvetica Neue", Arial, sans-serif',color:"#433636",fontWeight:400}},"Infrastructure as ",o.createElement("br",null),o.createElement("span",{style:{color:"#D63201",fontWeight:500}},"few lines")," ","of code.")),o.createElement("div",{className:"flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 justify-center max-w-screen-lg mx-auto mt-14 sm:mt-20 p-4"},o.createElement(a.Link,{className:"w-full sm:w-auto flex-none text-center text-white text-xl leading-6 font-bold py-3 px-12 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:outline-none hover:scale-105 transition-all duration-200 ",style:{backgroundColor:"#2C80FF"},to:"/docs/"},"Get Started"),o.createElement("button",{type:"button",className:"w-full sm:w-auto flex-none bg-gray-50 text-gray-400 hover:text-gray-900 font-mono leading-6 py-3 sm:px-6 border border-gray-200 rounded-xl flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2focus:ring-offset-white focus:ring-offset-2 focus:ring-indigo-500 focus:outline-none transition-colors duration-200",onClick:function(){return navigator.clipboard?navigator.clipboard.writeText(t):window.clipboardData.setData("Text",t)}},o.createElement("span",{className:"text-gray-900"},o.createElement("span",{className:"hidden sm:inline text-gray-500","aria-hidden":"true"},"$"," "),t),o.createElement("span",{className:"sr-only"},"(click to copy to clipboard)"),o.createElement(l.NAN,{className:"block h-6 w-6","aria-hidden":"true"})))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-dd0db06e9ccf59a4e3fa.js.map