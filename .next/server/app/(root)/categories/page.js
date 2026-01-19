"use strict";(()=>{var e={};e.id=14,e.ids=[14],e.modules={7849:e=>{e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2578:(e,t,a)=>{a.r(t),a.d(t,{GlobalError:()=>l.a,__next_app__:()=>g,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c});var r=a(482),s=a(9108),o=a(2563),l=a.n(o),n=a(8300),i={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>n[e]);a.d(t,i);let c=["",{children:["(root)",{children:["categories",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,2181)),"D:\\Udemy Blog\\app\\(root)\\categories\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,1331)),"D:\\Udemy Blog\\app\\(root)\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(a.bind(a,8366)),"D:\\Udemy Blog\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.bind(a,1429)),"D:\\Udemy Blog\\app\\not-found.tsx"]}],d=["D:\\Udemy Blog\\app\\(root)\\categories\\page.tsx"],p="/(root)/categories/page",g={require:a,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(root)/categories/page",pathname:"/categories",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2181:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,metadata:()=>c});var r=a(5036),s=a(7882),o=a(1555),l=a(4649),n=a(6794),i=a(6274);let c={title:"Kategoriyalar | Dasturlash haqida blog"},d=async function(){let e=await (0,o.n)();return(0,r.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,r.jsxs)("div",{className:"relative min-h-[40vh] flex items-center justify-end flex-col",children:[r.jsx("h2",{className:"text-center text-4xl section-title font-creteRound",children:r.jsx("span",{children:"Categories"})}),(0,r.jsxs)("div",{className:"flex gap-1 items-center mt-4",children:[r.jsx(l.Z,{className:"w-4 h-4"}),r.jsx(i.default,{href:"/",className:"opacity-90 hover:underline hover:opacity-100",children:"Home"}),r.jsx(n.Z,{}),r.jsx("p",{className:"text-muted-foreground",children:"Categories"})]})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-24 stify-center",children:e.map(e=>r.jsx(s.Z,{...e,type:"categories"}))})]})}},7882:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(5036),s=a(9508);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,s.Z)("Tags",[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]]),l=(0,s.Z)("Layers3",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1e5n1m"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1iwflc"}]]);var n=a(6274);let i=function(e){return r.jsx(r.Fragment,{children:(0,r.jsxs)(n.default,{href:`/${e.type}/${e.slug}`,className:"bg-secondary p-3 md:p-4 rounded-md shadow-xl flex flex-col items-center gap-3 hover:bg-secondary/80 transition-colors dark:shadow-white/10",role:"button",children:["tags"==e.type?r.jsx(o,{}):r.jsx(l,{}),r.jsx("h1",{className:"text-xl",children:e.name}),(0,r.jsxs)("p",{children:[e.blogs?.length," blogs"]})]})})}},6794:(e,t,a)=>{a.d(t,{Z:()=>r});/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,a(9508).Z)("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]])},4649:(e,t,a)=>{a.d(t,{Z:()=>r});/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,a(9508).Z)("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]])},1555:(e,t,a)=>{a.d(t,{i:()=>n,n:()=>l});var r=a(2683),s=a(2);let o="https://eu-west-2.cdn.hygraph.com/content/cly9a0nq500im07utyu8xpzd3/master",l=async()=>{let e=r.Ps`
		query MyQuery {
			categories {
				name
				slug
				blogs {
					... on Blog {
						slug
						title
					}
				}
			}
		}
	`,{categories:t}=await (0,r.ZP)(o,e);return t},n=(0,s.cache)(async e=>{let t=r.Ps`
		query MyQuery($slug: String!) {
			category(where: { slug: $slug }) {
				name
				blogs {
					title
					slug
					description
					image {
						url
					}
					author {
						name
						image {
							url
						}
					}
					category {
						name
						slug
					}
					createdAt
				}
			}
		}
	`,{category:a}=await (0,r.ZP)(o,t,{slug:e});return a})}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[924,392,212,683],()=>a(2578));module.exports=r})();