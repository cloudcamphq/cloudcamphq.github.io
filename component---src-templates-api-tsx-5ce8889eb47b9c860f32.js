(self.webpackChunkcloudcamp=self.webpackChunkcloudcamp||[]).push([[127],{271:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return E}});var r=a(5785),n=a(5021),m=a.n(n),s=a(1804),c=a.n(s),l=a(5444),o=a(7294),p=a(1505),i=a(3288),d=a(2710),u=a(9034),y=a(2577),h=a(6726);function E(e){var t=e.data,a=e.pageContext;return o.createElement(o.Fragment,null,o.createElement(d.Z,{title:t.apiDocs.name+" API docs",canonical:"/docs/api/"+c()(t.apiDocs.name)}),o.createElement(u.Z,null,o.createElement("div",{className:"space-y-6 leading-7"},o.createElement(f,{type:t.apiDocs,key:t.apiDocs.name})),o.createElement(y.Z,{links:a.links})))}function f(e){var t=function(e){var t=[].concat((0,r.Z)(e.initializer?[e.initializer]:[]),(0,r.Z)(e.properties||[]),(0,r.Z)(e.methods||[]));return t.sort((function(e,t){var a,r;return(null===(a=e.locationInModule)||void 0===a?void 0:a.line)>(null===(r=t.locationInModule)||void 0===r?void 0:r.line)?1:-1})),t}(e.type);return o.createElement("div",{className:"space-y-6 relative api"},o.createElement(b,{title:e.type.name},o.createElement("span",null,e.type.name),o.createElement("div",{className:"text-white bg-blue-500 inline-block ml-4 text-base font-bold font-mono p-0.5 rounded-md pr-2 pl-2 uppercase"},e.type.kind)),e.type.docs.summary&&o.createElement("p",{className:"border-b pb-5 border-gray-200",dangerouslySetInnerHTML:{__html:e.type.docs.summary}}),o.createElement("div",{className:"space-y-6"},o.createElement(v,{title:"Usage"},"Usage")),o.createElement(i.Z,{html:e.type.docs.custom.usage}),e.type.docs.summary&&o.createElement("div",{className:"space-y-6"},o.createElement(v,{title:"Overview"},"Overview")),e.type.docs.remarks&&o.createElement(i.Z,{className:"space-y-6",html:e.type.docs.remarks}),t.map((function(t){return void 0===t.parameters?o.createElement(N,{key:e.type.name+"-"+t.name,klass:e.type.name,property:t}):o.createElement(g,{key:e.type.name+"-"+t.name,className:e.type.name,meth:t})})))}function b(e){var t=c()(e.title);return o.createElement("h1",{className:"font-display text-4xl font-bold flex items-center",id:t},o.createElement(l.Link,{to:"#"+t},e.children))}function v(e){var t=c()(e.title);return o.createElement("h2",{className:"text-2xl font-bold mt-10 font-display",id:t},o.createElement(l.Link,{to:"#"+t},e.children))}function N(e){return e.property.docs.custom.ignore?null:o.createElement("div",{className:"space-y-6"},e.property.docs.custom.topic&&o.createElement(v,{title:e.property.docs.custom.topic},e.property.docs.custom.topic),e.property.docs.custom.topic&&e.property.docs.custom.remarks&&o.createElement(i.Z,{className:"space-y-6 border-b pb-5 border-gray-200",html:e.property.docs.custom.remarks}),o.createElement("div",{className:"font-mono flex items-center"},o.createElement("h3",{id:c()(e.property.name)},o.createElement("a",{href:"#"+c()(e.property.name),className:"inline-flex"},o.createElement("span",{className:"table w-6 h-6 flex-none text-center rounded-md mr-3 text-white bg-green-500"},o.createElement("span",{className:"table-cell align-middle font-bold"},"P")),o.createElement(i.Z,{className:"inline text-purple-900 font-bold",html:e.property.docs.custom.signature})))),e.property.docs.summary&&o.createElement(i.Z,{className:"space-y-6",html:e.property.docs.summary}),e.property.docs.remarks&&o.createElement(i.Z,{className:"space-y-6",html:e.property.docs.remarks}))}function g(e){var t,a;if(e.meth.docs.custom.ignore)return null;var r="",n="";void 0===e.meth.name?(r="bg-blue-500",n="C"):(r="bg-purple-500",n="M");(0,o.useContext)(h._)[0];return o.createElement("div",{className:"space-y-6"},e.meth.docs.custom.topic&&o.createElement(v,{title:e.meth.docs.custom.topic},e.meth.docs.custom.topic),e.meth.docs.custom.topic&&e.meth.docs.custom.remarks&&o.createElement(i.Z,{className:"space-y-6 border-b pb-5 border-gray-200",html:e.meth.docs.custom.remarks}),o.createElement("div",{className:"font-mono flex items-center whitespace-nowrap overflow-x-auto"},o.createElement("h3",{id:c()(e.meth.name?e.meth.name:"constructor")},o.createElement("a",{href:"#"+c()(e.meth.name?e.meth.name:"constructor"),className:"inline-flex"},o.createElement("span",{className:"table w-6 h-6 text-center rounded-md mr-3 flex-none text-white "+r},o.createElement("span",{className:"table-cell align-middle font-bold"},n)),o.createElement(i.Z,{className:"inline text-purple-900 font-bold",html:e.meth.docs.custom.signature})))),e.meth.docs.summary&&o.createElement(i.Z,{className:"space-y-6",html:e.meth.docs.summary}),e.meth.parameters&&o.createElement("ul",{className:"list-disc list-inside leading-7"},e.meth.parameters.map((function(e){return o.createElement(x,{key:e.name,param:e})}))),(null===(t=e.meth.docs)||void 0===t?void 0:t.custom.propsTable)&&o.createElement(o.Fragment,null,o.createElement("div",{className:"space-y-6 leading-7",dangerouslySetInnerHTML:{__html:null===(a=e.meth.docs)||void 0===a?void 0:a.custom.propsTable}})),e.meth.docs.remarks&&o.createElement(i.Z,{className:"space-y-6",html:e.meth.docs.remarks}))}function x(e){var t=(0,o.useContext)(h._)[0],a=t?t.language:"ts";return o.createElement("li",null,o.createElement("span",null,o.createElement("span",{className:"font-mono font-semibold text-sm whitespace-nowrap mr-3",style:{color:"rgb(214, 50, 0)"}},"props"==e.param.name&&"python"==a?"**kwargs":e.param.name)),e.param.docs.summary&&o.createElement(i.Z,{className:"space-y-6 inline",html:e.param.docs.summary}),e.param.optional&&!m()(e.param.docs.summary).includes("optional")&&o.createElement("span",{className:"ml-1 font-mono text-xs",style:{color:"rgb(214, 50, 0)"}},"* Optional"))}E.Layout=p.Z},5021:function(e,t,a){var r=a(5393)((function(e,t,a){return e+(a?" ":"")+t.toLowerCase()}));e.exports=r}}]);
//# sourceMappingURL=component---src-templates-api-tsx-5ce8889eb47b9c860f32.js.map