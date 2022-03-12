"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[921],{3905:function(e,t,i){i.d(t,{Zo:function(){return f},kt:function(){return h}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},f=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),m=c(i),h=r,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||a;return i?n.createElement(d,l(l({ref:t},f),{},{components:i})):n.createElement(d,l({ref:t},f))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},9839:function(e,t,i){i.r(t),i.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=i(7462),r=i(3366),a=(i(7294),i(3905)),l=["components"],o={},s=void 0,c={unversionedId:"Guides/Official",id:"Guides/Official",title:"Official",description:"How WolvenKit fits in to the modding workflow",source:"@site/wkit/Guides/Official.md",sourceDirName:"Guides",slug:"/Guides/Official",permalink:"/wiki/wolvenkit/Guides/Official",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Wolvenkit Console",permalink:"/wiki/wolvenkit/Wolvenkit CLI/Wolvenkit Console"},next:{title:"Building WKit with VS",permalink:"/wiki/wolvenkit/Developers/Building WKit with VS"}},f={},u=[{value:"How WolvenKit fits in to the modding workflow",id:"how-wolvenkit-fits-in-to-the-modding-workflow",level:2},{value:"Essentials",id:"essentials",level:3},{value:"Game entities",id:"game-entities",level:3},{value:"Materials",id:"materials",level:3}],m={toc:u};function h(e){var t=e.components,i=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-wolvenkit-fits-in-to-the-modding-workflow"},"How WolvenKit fits in to the modding workflow"),(0,a.kt)("h3",{id:"essentials"},"Essentials"),(0,a.kt)("p",null,"When modding Cyberpunk 2077, WolvenKit helps with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Browsing game files, and helping you bring these into project folders that it helps you set up to organise the content you are modding"),(0,a.kt)("li",{parentName:"ul"},"Exporting these W2RC RedEngine format game files into formats that can be read and edited by other apps"),(0,a.kt)("li",{parentName:"ul"},"Reimporting and converting these edited files back into the RedEngine format"),(0,a.kt)("li",{parentName:"ul"},"Packing and installing/copying these files to the correct part of the game folder")),(0,a.kt)("h3",{id:"game-entities"},"Game entities"),(0,a.kt)("p",null,"When modding, you will need to get your head around fhe following W2RC files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},".ent files are entity files and equivalent to game objects and are what can be spawned within game. They link in various basic logic and rules that govern that object. They will either link .mesh files in directly for simple objects, or specify a list of appearance variations to call from a dedicated .app file. Note: For characters you should mod the .ent files in the quest subfolder"),(0,a.kt)("li",{parentName:"ul"},".app files hold the different configuration of appearances that can be switched for more complex game entities such as characters or vehicles. These files then directly link in the relevant .mesh geometry, .rig files and .anim animation files for each appearance. "),(0,a.kt)("li",{parentName:"ul"},".mesh files are the actual 3d objects that hold the geometry but also hold a list of materials to use for different appearances requested of that mesh in game, which are embedded within compressed buffers within the .mesh file itself. ")),(0,a.kt)("h3",{id:"materials"},"Materials"),(0,a.kt)("p",null,"Materials are fairly complex in the way they are organised. The key thing is that materials are often embedded within compressed buffers inside the .mesh files. However, they can be and are sometimes referenced as external files with some simpler game objects.\nWkit can't edit these material buffers yet, a feature which is in advanced development for v8.6. In the meantime, you can export the .mesh using the WithMaterials option to get a json file which lists the material assignments. You can edit this file in an external text/script editor, then use the import option to bring the material assignments back into the .mesh file."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},".mt files are material templates that are the lowest level of abstraction and the source for material files. "),(0,a.kt)("li",{parentName:"ul"},".mi material instance files instantiate different settings based  on a .mt material template file to describe single-layer materials")),(0,a.kt)("p",null,"One of the .mt files is the multilayered.mt, which is used a lot by characters and vehicles as the core template for multilayered complex materials. Back in the .mesh file, they are referenced within the mesh material buffers as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},".multilayered.mt as the base template"),(0,a.kt)("li",{parentName:"ul"},".mlsetup files to describe the kinds of .mi material assigned to each layer for this instance of the .multilayered.mt"),(0,a.kt)("li",{parentName:"ul"},".mlmask files which combine internally a set of grayscale textures which describes which layer is used by which part of the mesh"),(0,a.kt)("li",{parentName:"ul"},".xbm files hold textures")))}h.isMDXComponent=!0}}]);