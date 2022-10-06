import{R as e,L as t,r as l,l as a,a as n,B as r,S as o,b as s,c}from"./vendor.9e82f5d6.js";const i=()=>{const[l,a]=e.useState(!1);return e.createElement(e.Fragment,null,e.createElement("div",{className:"flex w-full z-50 sticky top-[0px]"},e.createElement("div",{className:"w-full"},e.createElement("nav",{className:"flex relative flex-wrap justify-between items-center py-3 bg-blue-400"},e.createElement("div",{className:"container flex flex-wrap justify-between items-center px-4 mx-auto"},e.createElement("div",{className:"flex lg:block relative lg:static justify-between lg:justify-start px-4 w-full lg:w-auto"},e.createElement("a",{className:"inline-block py-2 mr-4 text-lg font-bold leading-relaxed text-white whitespace-nowrap"},"News From the Wormhole"),e.createElement("button",{className:"block lg:hidden py-1 px-3 text-xl leading-none text-white bg-transparent rounded border border-transparent border-solid cursor-pointer outline-none focus:outline-none",type:"button",onClick:()=>a(!l)},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})))),e.createElement("div",{className:"lg:flex lg:h-auto flex-grow items-center overflow-hidden transition-height duration-1000"+(l?" h-24":" h-0"),id:"example-navbar-info"},e.createElement("ul",{className:"flex flex-col lg:flex-row lg:ml-auto list-none"},e.createElement("li",{className:"mx-3"},e.createElement(t,{to:"/news-from-the-wormhole",className:"flex items-center py-2 px-3 rounded-md text-md font-bold leading-snug text-white uppercase  hover:bg-green-500"},"Home")),e.createElement("li",{className:"mx-3"},e.createElement(t,{to:"/news-from-the-wormhole/articles",className:"flex items-center py-2 px-3 rounded-md text-md font-bold leading-snug text-white uppercase hover:bg-green-500"},"Articles")),e.createElement("li",{className:"mx-4"},e.createElement(t,{to:"/news-from-the-wormhole/blogposts",className:"flex items-center py-2 px-3 rounded-md text-md font-bold leading-snug text-white uppercase hover:bg-green-500"},"Blog")))))))))};const m=()=>e.createElement("div",{className:"flex flex-col flex-1 bg-gray-900 opacity-100 items-center justify-center"},e.createElement("div",{className:"bg-gray-200 p-3 flex flex-col items-center opacity-70 w-11/12 md:w-1/2 lg:w-1/4 rounded-md"},e.createElement("div",{className:"w-full"},e.createElement("img",{className:"m-auto",src:"/news-from-the-wormhole/assets/nftwlogo.ef394e4f.png",alt:"logo image"})),e.createElement("div",{className:"m-2"},e.createElement("h1",{className:"font-montserrat text-base md:text-xl font-bold text-gray-700"},"Space Flight News and Blog Posts")),e.createElement("div",{className:"hover:bg-gray-300 hover:rounded-md w-full p-2 text-center"},e.createElement("a",{className:"text-gray-900",href:"https://www.spaceflightnewsapi.net/",target:"_blank",rel:"noreferrer noopener"},"Powered by SpaceFlight News API")))),u=t=>e.createElement("div",{className:"z-40 p-4 md:w-4/5 opacity-90 hover:opacity-100"},e.createElement("div",{className:"flex flex-col sm:flex-row flex-shrink bg-gray-300 rounded-2xl shadow-xl hover:shadow-md"},t.children)),d=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],f=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],p=({article:t,type:l})=>e.createElement(u,null,e.createElement("div",{className:"flex flex-1"},e.createElement("img",{className:"object-cover overflow-hidden rounded-tl-2xl rounded-bl-2xl",src:t.imageUrl,alt:"Article Image"})),e.createElement("div",{className:"flex flex-col flex-1 justify-evenly p-3.5 min-w-0"},e.createElement("h2",{className:"object-cover text-4xl font-extrabold text-gray-800"},t.title),e.createElement("p",{className:"text-gray-600"},t.summary),e.createElement("div",{className:"flex justify-between"},e.createElement("div",{className:"farticle-meta-label"},e.createElement("div",null,e.createElement("a",{className:"pt-1 text-sm font-bold text-purple-800"},"Source")),e.createElement("div",null,e.createElement("a",{className:"pt-1 text-sm text-purple-700"},t.newsSite))),e.createElement("div",{className:"article-meta-label"},e.createElement("div",null,e.createElement("a",{className:"pt-1 text-sm font-bold text-purple-800"},"Published")),e.createElement("div",null,e.createElement("a",{className:"pt-1 text-sm text-purple-700"},(e=>{const t=new Date(e),l=d[t.getMonth()];return`${f[t.getDay()]}, ${l} ${t.getDate()} ${t.getFullYear()}`})(t.publishedAt)))),e.createElement("div",null,e.createElement("button",{onClick:()=>((e,t=!0)=>t?window.open(e,"_blank"):window.location.href=e)(t.url,!0),className:"inline-block p-2 text-center text-purple-800 hover:text-purple-100 whitespace-nowrap hover:bg-purple-800 rounded-md border border-purple-800 hover:shadow-xl",type:"button"},"View ",l))))),x=()=>e.createElement("div",{className:"flex flex-col items-center mb-[10px]"},e.createElement("div",{className:"flex z-10 flex-row items-baseline"},e.createElement("h1",{className:"text-4xl text-indigo-700 font-titillium-web animate-pulse"},"Loading"),e.createElement("div",{className:"w-5 h-5 bg-indigo-500 animation-delay-100 rounded-full animate-pulse ml-1"}),e.createElement("div",{className:"w-5 h-5 bg-indigo-500 animation-delay-300 rounded-full animate-pulse ml-1"}),e.createElement("div",{className:"w-5 h-5 bg-indigo-500 animation-delay-500 rounded-full animate-pulse ml-1"})));const b=({articleType:t})=>{const l="articles"===t?"Articles":"Blog Posts",a="articles"===t?"/news-from-the-wormhole/assets/article-astronaut.9f8b0b4a.png":"/news-from-the-wormhole/assets/blog-astronaut.e07dd8da.png";return e.createElement(e.Fragment,null,e.createElement("div",{className:"flex flex-col flex-1 p-3"},e.createElement("div",{className:"flex flex-row flex-1 justify-center"},e.createElement("img",{className:"object-contain lg:object-scale-down w-full h-96",src:a,alt:"astronaut image"})),e.createElement("div",{className:"flex flex-row flex-1 justify-center"},e.createElement("h2",{className:"font-titillium-web text-lg md:text-2xl lg:text-3xl leading-4 text-gray-700"},"Read the latest space flight ",l.toLowerCase(),"."))))};var g="/news-from-the-wormhole/assets/404-astronaut.9b94d90f.png";const w=()=>e.createElement("div",{className:"flex overflow-auto flex-col items-center h-screen"},e.createElement(u,null,e.createElement("div",{className:"flex flex-col flex-1 p-3"},e.createElement("div",{className:"flex flex-row flex-1 justify-center"},e.createElement("h1",{className:"font-titillium-web text-2xl md:text-3xl lg:text-4xl font-bold text-center text-purple-900"},"An error occurred, please try again later...")),e.createElement("div",{className:"flex flex-row flex-1 justify-center"},e.createElement("img",{className:"object-contain lg:object-scale-down w-full h-96",src:g,alt:"logo image"}))))),h=({articleType:t})=>{const[n,r]=l.exports.useState(null),[o,s]=l.exports.useState(!1),[c,i]=l.exports.useState([]),[m,d]=l.exports.useState([]),[f,g]=l.exports.useState(20);l.exports.useEffect((()=>{(async()=>{const e=await(async(e,t)=>await(await fetch(`https://api.spaceflightnewsapi.net/v3/${t}?_limit=${e}`)).json())(f,t).catch((e=>{console.log(e),r(e)}));e&&("articles"===t?i((t=>[...new Set([...t,...e])])):d((t=>[...new Set([...t,...e])])),s(!0))})()}),[f,t]),window.onscroll=a.exports.debounce((()=>{Math.abs(window.innerHeight+document.documentElement.scrollTop-document.documentElement.offsetHeight)<=2&&(s(!1),g(f+20))}),100);return n?e.createElement(w,null):e.createElement(e.Fragment,null,e.createElement("div",{className:"flex flex-col items-center"},e.createElement(u,null,(h=t,e.createElement(b,{articleType:h}))),"articles"===t?c.map(((t,l)=>e.createElement(p,{key:l,article:t,type:"Article"}))):"blogs"===t?m.map(((t,l)=>e.createElement(p,{key:l,article:t,type:"Blog Post"}))):void 0),!o&&e.createElement("div",{className:"flex flex-row justify-center mt-0"},e.createElement(x,null)));var h},v=()=>e.createElement(e.Fragment,null,e.createElement(h,{articleType:"articles"})),y=()=>e.createElement(h,{articleType:"blogs"}),E={autoPlay:!0,background:{color:{value:"#000000"},position:"50% 50%",repeat:"no-repeat",size:"cover",opacity:1},backgroundMask:{composite:"destination-out",cover:{color:{value:"#fff"},opacity:1},enable:!1},fullScreen:{enable:!0,zIndex:-1},detectRetina:!0,duration:0,fpsLimit:40,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!1,mode:"repulse",parallax:{enable:!1,force:2,smooth:10}},resize:!0},modes:{attract:{distance:200,duration:.4,factor:1,maxSpeed:50,speed:1},bubble:{distance:400,duration:2,mix:!1,opacity:.8,size:40},connect:{distance:80,links:{opacity:.5},radius:60},grab:{distance:400,links:{blink:!1,consent:!1,opacity:1}},light:{area:{gradient:{start:{value:"#ffffff"},stop:{value:"#000000"}},radius:1e3},shadow:{color:{value:"#000000"},length:2e3}},push:{default:!0,groups:["z5000","z7500","z2500","z1000"],quantity:4},remove:{quantity:2},repulse:{distance:200,duration:.4,factor:100,speed:1,maxSpeed:50},slow:{factor:3,radius:200},trail:{delay:1,pauseOnStop:!1,quantity:1}}},manualParticles:[],motion:{disable:!1,reduce:{factor:4,value:!0}},particles:{bounce:{horizontal:{random:{enable:!1,minimumValue:.1},value:1},vertical:{random:{enable:!1,minimumValue:.1},value:1}},collisions:{bounce:{horizontal:{random:{enable:!1,minimumValue:.1},value:1},vertical:{random:{enable:!1,minimumValue:.1},value:1}},enable:!1,mode:"bounce",overlap:{enable:!0,retries:0}},color:{value:"#fff",animation:{h:{count:0,enable:!1,offset:0,speed:20,sync:!0},s:{count:0,enable:!1,offset:0,speed:1,sync:!0},l:{count:0,enable:!1,offset:0,speed:1,sync:!0}}},groups:{z5000:{number:{value:70},zIndex:{value:5e3}},z7500:{number:{value:30},zIndex:{value:7500}},z2500:{number:{value:50},zIndex:{value:2500}},z1000:{number:{value:40},zIndex:{value:1e3}}},life:{count:0,delay:{random:{enable:!1,minimumValue:0},value:0,sync:!1},duration:{random:{enable:!1,minimumValue:1e-4},value:0,sync:!1}},links:{blink:!1,color:{value:"#ffffff"},consent:!1,distance:100,enable:!1,frequency:1,opacity:.4,shadow:{blur:5,color:{value:"#00ff00"},enable:!1},triangles:{enable:!1,frequency:1},width:1,warp:!1},move:{angle:{offset:0,value:10},attract:{distance:200,enable:!1,rotate:{x:600,y:1200}},decay:0,distance:{},direction:"right",drift:0,enable:!0,gravity:{acceleration:9.81,enable:!1,inverse:!1,maxSpeed:50},path:{clamp:!0,delay:{random:{enable:!1,minimumValue:0},value:0},enable:!1},outModes:{default:"out",bottom:"out",left:"out",right:"out",top:"out"},random:!1,size:!1,speed:5,spin:{acceleration:0,enable:!1},straight:!1,trail:{enable:!1,length:10,fillColor:{value:"#000000"}},vibrate:!1,warp:!1},number:{density:{enable:!1,area:800,factor:1e3},limit:0,value:200},opacity:{random:{enable:!1,minimumValue:.1},value:1,animation:{count:0,enable:!1,speed:3,sync:!1,destroy:"none",minimumValue:.1,startValue:"random"}},orbit:{animation:{count:0,enable:!1,speed:1,sync:!1},enable:!1,opacity:1,rotation:{random:{enable:!1,minimumValue:0},value:45},width:1},reduceDuplicates:!1,repulse:{random:{enable:!1,minimumValue:0},value:0,enabled:!1,distance:1,duration:1,factor:1,speed:1},roll:{darken:{enable:!1,value:0},enable:!1,enlighten:{enable:!1,value:0},speed:25},rotate:{random:{enable:!1,minimumValue:0},value:0,animation:{enable:!1,speed:0,sync:!1},direction:"clockwise",path:!1},shadow:{blur:0,color:{value:"#000000"},enable:!1,offset:{x:0,y:0}},shape:{options:{},type:"circle"},size:{random:{enable:!1,minimumValue:1},value:3,animation:{count:0,enable:!1,speed:5,sync:!1,destroy:"none",minimumValue:0,startValue:"random"}},stroke:{width:0},tilt:{random:{enable:!1,minimumValue:0},value:0,animation:{enable:!1,speed:0,sync:!1},direction:"clockwise",enable:!1},twinkle:{lines:{enable:!1,frequency:.05,opacity:1},particles:{enable:!1,frequency:.05,opacity:1}},wobble:{distance:5,enable:!1,speed:50},zIndex:{random:{enable:!1,minimumValue:0},value:500,opacityRate:.5,sizeRate:1,velocityRate:1}},pauseOnBlur:!0,pauseOnOutsideViewport:!0,responsive:[],themes:[],emitters:{autoPlay:!0,life:{},rate:{quantity:1,delay:7},size:{mode:"percent",height:0,width:0},position:{x:-5,y:55}}},N=()=>e.createElement("div",{className:"flex overflow-auto flex-col items-center h-screen"},e.createElement(u,null,e.createElement("div",{className:"flex flex-col flex-1 p-3"},e.createElement("div",{className:"flex flex-row flex-1 justify-center"},e.createElement("h1",{className:"font-titillium-web text-2xl md:text-3xl lg:text-4xl font-bold text-center text-purple-900"},"We couldn't find that page...")),e.createElement("div",{className:"flex flex-row flex-1 justify-center"},e.createElement("img",{className:"object-contain lg:object-scale-down w-full h-96",src:g,alt:"logo image"})))));function k(){return e.createElement(e.Fragment,null,e.createElement(n,{className:"fixed z-0 opacity-300",id:"tsparticles",options:E}),e.createElement(r,null,e.createElement("div",{className:"flex flex-col min-h-screen bg-gray-200"},e.createElement(i,null),e.createElement(o,null,e.createElement(s,{exact:!0,path:"/news-from-the-wormhole"},e.createElement(m,null)),e.createElement(s,{path:"/news-from-the-wormhole/articles"},e.createElement(v,null)),e.createElement(s,{path:"/news-from-the-wormhole/blogposts"},e.createElement(y,null)),e.createElement(s,{path:"*"},e.createElement(N,null))))))}c.render(e.createElement(e.StrictMode,null,e.createElement(k,null)),document.getElementById("root"));
