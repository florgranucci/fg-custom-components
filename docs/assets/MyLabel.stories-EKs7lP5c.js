import{j as _}from"./jsx-runtime-AgcCsxC8.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const t=({label:o,size:g,allCaps:L=!1,color:x="text-primary",fontColor:v})=>_.jsx("span",{className:`${g} ${x} label`,style:{color:v},children:L?o.toUpperCase():o});try{t.displayName="MyLabel",t.__docgenInfo={description:`
allCaps: boolean
color?: 'text-primary'
fontColor: string`,displayName:"MyLabel",props:{label:{defaultValue:null,description:"Label text",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"Label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"normal"'}]}},allCaps:{defaultValue:{value:"false"},description:"Capitalize all letters",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"text-primary"},description:"Label color",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:null,description:"Label font color",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const q={title:"UI/MyLabel",component:t,tags:["autodocs"],argTypes:{label:{control:"text"},size:{control:"select",options:["normal","h1","h2","h3"]},fontColor:{control:"color"}},parameters:{layout:"centered"}},e={args:{label:"My Label"}},a={args:{label:"AllCaps Label",allCaps:!0}},r={args:{label:"Secondary Label",color:"text-secondary"}},l={args:{label:"CustomColor Label",fontColor:"#ff0000"}};var s,n,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: "My Label"
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,u,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "AllCaps Label",
    allCaps: true
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var m,d,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Secondary Label",
    color: "text-secondary"
  }
}`,...(y=(d=r.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var b,f,C;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "CustomColor Label",
    fontColor: "#ff0000"
  }
}`,...(C=(f=l.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const z=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,z as __namedExportsOrder,q as default};
