"use strict";(self.webpackChunkcloudcamp=self.webpackChunkcloudcamp||[]).push([[37],{5987:function(e,t,n){n.d(t,{Z:function(){return W}});var a,r,l,o=n(7294),c=n(6726),s=n(2337),i=n(3503),u=n(8629),m=n(1450),d=n(9366),f=n(3149),g=n(8496),p=n(2136),v=n(5834);!function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(r||(r={})),function(e){e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel"}(l||(l={}));var h=((a={})[l.ToggleDisclosure]=function(e){var t;return(0,s.gY)({},e,{disclosureState:(0,i.E)(e.disclosureState,(t={},t[r.Open]=r.Closed,t[r.Closed]=r.Open,t))})},a[l.CloseDisclosure]=function(e){return e.disclosureState===r.Closed?e:(0,s.gY)({},e,{disclosureState:r.Closed})},a[l.LinkPanel]=function(e){return!0===e.linkedPanel?e:(0,s.gY)({},e,{linkedPanel:!0})},a[l.UnlinkPanel]=function(e){return!1===e.linkedPanel?e:(0,s.gY)({},e,{linkedPanel:!1})},a[l.SetButtonId]=function(e,t){return e.buttonId===t.buttonId?e:(0,s.gY)({},e,{buttonId:t.buttonId})},a[l.SetPanelId]=function(e,t){return e.panelId===t.panelId?e:(0,s.gY)({},e,{panelId:t.panelId})},a),y=(0,o.createContext)(null);function E(e){var t=(0,o.useContext)(y);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+C.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,E),n}return t}y.displayName="DisclosureContext";var x=(0,o.createContext)(null);function b(e){var t=(0,o.useContext)(x);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+C.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,b),n}return t}x.displayName="DisclosureAPIContext";var w=(0,o.createContext)(null);function N(e,t){return(0,i.E)(t.type,h,e,t)}w.displayName="DisclosurePanelContext";var k=o.Fragment;function C(e){var t,n=e.defaultOpen,a=void 0!==n&&n,c=(0,s.gK)(e,["defaultOpen"]),m="headlessui-disclosure-button-"+(0,g.M)(),d="headlessui-disclosure-panel-"+(0,g.M)(),f=(0,o.useReducer)(N,{disclosureState:a?r.Open:r.Closed,linkedPanel:!1,buttonId:m,panelId:d}),v=f[0].disclosureState,h=f[1];(0,o.useEffect)((function(){return h({type:l.SetButtonId,buttonId:m})}),[m,h]),(0,o.useEffect)((function(){return h({type:l.SetPanelId,panelId:d})}),[d,h]);var E=(0,o.useCallback)((function(e){h({type:l.CloseDisclosure});var t=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:document.getElementById(m):document.getElementById(m);null==t||t.focus()}),[h,m]),b=(0,o.useMemo)((function(){return{close:E}}),[E]),w=(0,o.useMemo)((function(){return{open:v===r.Open,close:E}}),[v,E]);return o.createElement(y.Provider,{value:f},o.createElement(x.Provider,{value:b},o.createElement(p.up,{value:(0,i.E)(v,(t={},t[r.Open]=p.ZM.Open,t[r.Closed]=p.ZM.Closed,t))},(0,u.sY)({props:c,slot:w,defaultTag:k,name:"Disclosure"}))))}var S=(0,u.yV)((function e(t,n){var a=E([C.name,e.name].join(".")),c=a[0],i=a[1],g=(0,o.useRef)(null),p=(0,m.T)(g,n),h=(0,o.useContext)(w),y=null!==h&&h===c.panelId,x=(0,o.useCallback)((function(e){var t;if(y){if(c.disclosureState===r.Closed)return;switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),i({type:l.ToggleDisclosure}),null==(t=document.getElementById(c.buttonId))||t.focus()}}else switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),i({type:l.ToggleDisclosure})}}),[i,y,c.disclosureState]),b=(0,o.useCallback)((function(e){switch(e.key){case d.R.Space:e.preventDefault()}}),[]),N=(0,o.useCallback)((function(e){var n;(0,f.P)(e.currentTarget)||(t.disabled||(y?(i({type:l.ToggleDisclosure}),null==(n=document.getElementById(c.buttonId))||n.focus()):i({type:l.ToggleDisclosure})))}),[i,t.disabled,c.buttonId,y]),k=(0,o.useMemo)((function(){return{open:c.disclosureState===r.Open}}),[c]),S=(0,v.f)(t,g),I=t,P=y?{ref:p,type:S,onKeyDown:x,onClick:N}:{ref:p,id:c.buttonId,type:S,"aria-expanded":t.disabled?void 0:c.disclosureState===r.Open,"aria-controls":c.linkedPanel?c.panelId:void 0,onKeyDown:x,onKeyUp:b,onClick:N};return(0,u.sY)({props:(0,s.gY)({},I,P),slot:k,defaultTag:"button",name:"Disclosure.Button"})})),I=u.AN.RenderStrategy|u.AN.Static,P=(0,u.yV)((function e(t,n){var a=E([C.name,e.name].join(".")),c=a[0],i=a[1],d=b([C.name,e.name].join(".")).close,f=(0,m.T)(n,(function(){c.linkedPanel||i({type:l.LinkPanel})})),g=(0,p.oJ)(),v=null!==g?g===p.ZM.Open:c.disclosureState===r.Open;(0,o.useEffect)((function(){return function(){return i({type:l.UnlinkPanel})}}),[i]),(0,o.useEffect)((function(){var e;c.disclosureState!==r.Closed||null!=(e=t.unmount)&&!e||i({type:l.UnlinkPanel})}),[c.disclosureState,t.unmount,i]);var h=(0,o.useMemo)((function(){return{open:c.disclosureState===r.Open,close:d}}),[c,d]),y={ref:f,id:c.panelId},x=t;return o.createElement(w.Provider,{value:c.panelId},(0,u.sY)({props:(0,s.gY)({},x,y),slot:h,defaultTag:"div",features:I,visible:v,name:"Disclosure.Panel"}))}));C.Button=S,C.Panel=P;var D=n(6727),T=n(1442),O=n(5444),j=n(2594),B=n(9495),M=n(2829),L=n(8588),Z=n(3088),Y=n(1569),R=n(3710),U=n(242),q=n(528),F=n(2686);function A(e){var t=(e.active?"bg-gray-200 text-gray-900":"text-gray-900 hover:bg-gray-100")+" px-3 py-2 rounded-md text-sm font-medium";return o.createElement(O.Link,{to:e.to,className:t},e.title)}function H(e){var t=(e.active?"bg-blue-50 border-blue-600 text-blue-700":"border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800")+" block pl-3 pr-4 py-2 border-l-4 text-base font-medium";return o.createElement(O.Link,{to:e.to,className:t},e.title)}function z(e){var t=e.pathname,n=e.showLanguage,a=void 0!==n&&n;return o.createElement(C,{as:"nav",className:"border-b bg-white sticky top-0 z-50"},(function(e){var n=e.open;return o.createElement(o.Fragment,null,o.createElement("div",{className:"max-w-6xl mx-auto px-2 sm:px-4 lg:px-8"},o.createElement("div",{className:"flex justify-between h-16"},o.createElement("div",{className:"flex items-center px-2 lg:px-0"},o.createElement("div",{className:"flex-shrink-0 flex items-center"},o.createElement(O.Link,{to:"/"},o.createElement("img",{className:"block sm:hidden h-8 w-auto",src:B.Z,alt:"cloudcamp"}),o.createElement("img",{className:"hidden sm:block h-8 w-auto",src:j.Z,alt:"cloudcamp"}))),o.createElement("div",{className:"hidden lg:ml-6 lg:flex lg:space-x-8"},o.createElement(A,{title:"Home",to:"/",active:"/"==t}),o.createElement(A,{title:"Documentation",to:"/docs",active:t.startsWith("/docs")})),o.createElement("div",{className:"lg:ml-8 ml-3"},a&&o.createElement(J,null))),o.createElement("div",{className:"flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end"},o.createElement("div",{className:"max-w-lg w-full lg:max-w-xs group"},o.createElement("label",{htmlFor:"search",className:"sr-only"},"Search"),o.createElement("div",{className:"relative"},o.createElement("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},o.createElement(D.W1M,{className:"h-5 w-5 text-gray-400 group-hover:text-gray-700","aria-hidden":"true"})),o.createElement("button",{className:"block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-gray-700 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm shadow-sm hover:bg-gray-50 font-medium"},"Search Documentation")))),o.createElement("div",{className:"hidden sm:ml-6 sm:flex items-center"},o.createElement("div",{className:"flex items-center"},o.createElement("a",{href:"https://github.com/cloudcamphq/cloudcamp",className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 mr-2"},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24"},o.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}))),o.createElement("a",{href:"https://twitter.com/cloudcamphq",className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 mr-2"},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24"},o.createElement("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}))))),o.createElement("div",{className:"flex items-center lg:hidden"},o.createElement(C.Button,{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},o.createElement("span",{className:"sr-only"},"Open main menu"),n?o.createElement(T.b0D,{className:"block h-6 w-6","aria-hidden":"true"}):o.createElement(T.Oqj,{className:"block h-6 w-6","aria-hidden":"true"}))))),o.createElement(C.Panel,{className:"lg:hidden"},o.createElement("div",{className:"pt-2 pb-1 space-y-1"},o.createElement(H,{title:"Home",to:"/",active:"/"==t}),o.createElement(H,{title:"Documentation",to:"/docs",active:t.startsWith("/docs")}),o.createElement(H,{title:"GitHub",to:"https://github.com/cloudcamphq/cloudcamp",active:!1}),o.createElement(H,{title:"Twitter",to:"https://twitter.com/cloudcamphq",active:!1}))))}))}function K(e){switch(e){case"ts":return["TypeScript",Y.Z];case"javascript":return["JavaScript",R.Z];case"python":return["Python",U.Z];case"java":return["Java",Z.Z];case"csharp":return["C#",q.Z]}}function G(e){var t=e.code,n=K(t),a=n[0],r=n[1],l=(0,o.useContext)(c._)[1];return o.createElement(M.v.Item,null,(function(e){var n=e.active;return o.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),F.Z.set("code-language",t,{expires:365}),l({type:"SET_LANGUAGE",payload:t})},className:n?"bg-gray-100 text-gray-900 group flex items-center px-4 py-2 text-sm":"text-gray-700 group flex items-center px-4 py-2 text-sm"},o.createElement("img",{src:r,className:"h-5 mr-2"}),a)}))}function J(){var e=(0,o.useContext)(c._),t=e[0],n=(e[1],K(t.language)),a=n[0],r=n[1];return o.createElement(M.v,{as:"div",className:"relative inline-block text-left ml-auto w-40 group"},o.createElement("div",null,o.createElement(M.v.Button,{className:"inline-flex justify-left w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"},o.createElement("img",{src:r,className:"h-5 mr-2"}),a,o.createElement(D.v4q,{className:"-mr-1 h-5 w-5 ml-auto text-gray-400 group-hover:text-gray-700","aria-hidden":"true"}))),o.createElement(L.u,{as:o.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95"},o.createElement(M.v.Items,{className:"origin-top-right absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-20"},o.createElement("div",{className:"py-1"},o.createElement(G,{code:"ts"}),o.createElement(G,{code:"javascript"}),o.createElement(G,{code:"python"}),o.createElement(G,{code:"csharp"}),o.createElement(G,{code:"java"})))))}function W(e){var t=e.children,n=e.pathname,a=e.showLanguage,r=void 0!==a&&a;return o.createElement(c.y,null,o.createElement("div",{className:"h-screen overflow-y-hidden flex flex-col"},o.createElement(z,{pathname:n,showLanguage:r}),o.createElement("div",{className:"flex flex-row flex-1 overflow-hidden"},o.createElement("div",{className:"flex-grow"}),o.createElement("div",{className:"max-w-6xl min-w-0 flex flex-col"},t),o.createElement("div",{className:"flex-grow"}))))}}}]);
//# sourceMappingURL=99132b820482273b75a69b4b560fd9a0b2827f7c-9a03150721695dd66f8f.js.map