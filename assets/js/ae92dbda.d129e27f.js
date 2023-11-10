"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[833],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=l,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},694:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),l=(r(7294),r(3905));const o={sidebar_label:"html",title:"processing.html"},a=void 0,i={unversionedId:"reference/processing/html",id:"reference/processing/html",isDocsHomePage:!1,title:"processing.html",description:"HTML processing functions",source:"@site/docs/reference/processing/html.md",sourceDirName:"reference/processing",slug:"/reference/processing/html",permalink:"/docs/docs/reference/processing/html",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/reference/processing/html.md",tags:[],version:"current",frontMatter:{sidebar_label:"html",title:"processing.html"},sidebar:"referenceSideBar",previous:{title:"singleton",permalink:"/docs/docs/reference/config/singleton"},next:{title:"text",permalink:"/docs/docs/reference/processing/text"}},s=[{value:"extract_hyperlinks",id:"extract_hyperlinks",children:[],level:4},{value:"format_hyperlinks",id:"format_hyperlinks",children:[],level:4}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"HTML processing functions"),(0,l.kt)("h4",{id:"extract_hyperlinks"},"extract","_","hyperlinks"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def extract_hyperlinks(soup: BeautifulSoup,\n                       base_url: str) -> list[tuple[str, str]]\n")),(0,l.kt)("p",null,"Extract hyperlinks from a BeautifulSoup object"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"soup")," ",(0,l.kt)("em",{parentName:"li"},"BeautifulSoup")," - The BeautifulSoup object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"base_url")," ",(0,l.kt)("em",{parentName:"li"},"str")," - The base URL")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  List[Tuple","[str, str]","]: The extracted hyperlinks"),(0,l.kt)("h4",{id:"format_hyperlinks"},"format","_","hyperlinks"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def format_hyperlinks(hyperlinks: list[tuple[str, str]]) -> list[str]\n")),(0,l.kt)("p",null,"Format hyperlinks to be displayed to the user"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hyperlinks")," ",(0,l.kt)("em",{parentName:"li"},"List[Tuple","[str, str]","]")," - The hyperlinks to format")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"List[str]")," - The formatted hyperlinks")))}c.isMDXComponent=!0}}]);