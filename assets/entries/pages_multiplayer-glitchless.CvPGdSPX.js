import{j as e,B as p,i,a as l,R as c,b as m,c as u}from"../chunks/chunk-Bzrsxf9X.js";const n=void 0,g=void 0,x=[],f=[],y=({})=>e.jsx(p,{className:"w-body"}),j=({data:a})=>{const{pageMeta:t}=a,{origin:s}=new URL(a.url);let r=t.socialImageUrl;return t.socialImageAssetName&&(r=`${s}${i({src:t.socialImageAssetName,format:"raw"})}`),e.jsxs(e.Fragment,{children:[a.url&&e.jsx("meta",{property:"og:url",content:a.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),n,r&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),n,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:o,content:d})=>e.jsx("meta",{property:o,content:d},o)),g,x.map(o=>e.jsx("link",{rel:"preload",href:`${l}${o.name}`,as:"font",crossOrigin:"anonymous"},o.id)),f.map(o=>e.jsx("link",{rel:"preload",href:`${l}${o.name}`,as:"image"},o.id))]})},h=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),S=({data:a})=>{const{system:t,resources:s,url:r}=a;return e.jsx(c.Provider,{value:{imageLoader:i,assetBaseUrl:l,imageBaseUrl:m,resources:s},children:e.jsx(y,{system:t},r)})},v=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),T={onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/multiplayer-glitchless/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/multiplayer-glitchless/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}}};export{T as configValuesSerialized};
