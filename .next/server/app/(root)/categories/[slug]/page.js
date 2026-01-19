(()=>{var e={};e.id=863,e.ids=[863],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9237:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>g,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var s=r(482),a=r(9108),i=r(2563),n=r.n(i),l=r(8300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let c=["",{children:["(root)",{children:["categories",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7481)),"D:\\Udemy Blog\\app\\(root)\\categories\\[slug]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,1331)),"D:\\Udemy Blog\\app\\(root)\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,8366)),"D:\\Udemy Blog\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,1429)),"D:\\Udemy Blog\\app\\not-found.tsx"]}],d=["D:\\Udemy Blog\\app\\(root)\\categories\\[slug]\\page.tsx"],u="/(root)/categories/[slug]/page",g={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(root)/categories/[slug]/page",pathname:"/categories/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4079:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1900,23)),Promise.resolve().then(r.t.bind(r,1476,23))},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l,generateMetadata:()=>n});var s=r(5036),a=r(7844),i=r(1555);async function n({params:e}){return{title:(await (0,i.i)(e.slug)).name,description:"Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.",openGraph:{image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fsammi.ac%2F&psig=AOvVaw14TY_sXprr2SLa-xPNiHEq&ust=1720464331293000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMD_i6DLlYcDFQAAAAAdAAAAABAE"}}}let l=async function({params:e}){let t=await (0,i.i)(e.slug);return(0,s.jsxs)("div",{className:"max-w-6xl mx-auto",children:[s.jsx("div",{className:"relative min-h-[30vh] flex items-center justify-end flex-col",children:s.jsx("h2",{className:"text-center text-4xl section-title font-creteRound",children:s.jsx("span",{children:t.name})})}),s.jsx("div",{className:"grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-24",children:t.blogs?.map(e=>s.jsx(a.Z,{...e,isVertical:!0},e.title))})]})}},7844:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var s=r(5036),a=r(5752),i=r(2702),n=r(7368),l=r(1389),o=r(6794),c=r(2813),d=r(6274),u=r(8134);r(2);let g=(0,u.j)("inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function m({className:e,variant:t,...r}){return s.jsx("div",{className:(0,a.cn)(g({variant:t}),e),...r})}var x=r(3674);let p=function(e){return(0,s.jsxs)("div",{className:(0,a.cn)("grid gap-4 group ",e.isVertical?"grid-cols-1":"grid-cols-1 md:grid-cols-2"),children:[s.jsx("div",{className:"relative bg-secondary rounded-md",children:s.jsx(c.default,{width:650,height:335,src:e.image.url,alt:e.title,className:"px-2 md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3"})}),(0,s.jsxs)("div",{className:"flex flex-col space-y-2 gap-3",children:[(0,s.jsxs)(d.default,{href:`/blogs/${e.slug}`,className:"flex flex-col space-y-3",children:[(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[s.jsx(i.Z,{className:"w-5 h-5"}),s.jsx("p",{children:(0,x.WU)(new Date(e.createdAt),"MMM dd,yyyy")})]}),s.jsx(n.Z,{}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[s.jsx(l.Z,{className:"w-5 h-5"}),s.jsx("p",{children:"05 min read"})]})]}),s.jsx("h2",{className:"text-3xl max-md:text-2xl font-creteRound group-hover:text-blue-500 transition-colors",children:e.title}),s.jsx("p",{className:"text-muted-foreground line-clamp-3",children:e.description})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[s.jsx(c.default,{src:e.author.image.url,alt:"author",width:25,height:25,className:"object-cover rounded-sm"}),(0,s.jsxs)("p",{children:["by ",e.author.name]})]}),s.jsx(o.Z,{}),s.jsx("div",{className:"flex items-center gap-2",children:s.jsx(d.default,{href:`/categories/${e.category.slug}`,children:s.jsx(m,{variant:"secondary",role:"button",children:e.category.name})})})]})]})]})}},6794:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,r(9508).Z)("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]])},1555:(e,t,r)=>{"use strict";r.d(t,{i:()=>l,n:()=>n});var s=r(2683),a=r(2);let i="https://eu-west-2.cdn.hygraph.com/content/cly9a0nq500im07utyu8xpzd3/master",n=async()=>{let e=s.Ps`
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
	`,{categories:t}=await (0,s.ZP)(i,e);return t},l=(0,a.cache)(async e=>{let t=s.Ps`
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
	`,{category:r}=await (0,s.ZP)(i,t,{slug:e});return r})}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[924,392,212,813,433,683],()=>r(9237));module.exports=s})();