import{n as e}from"./chunk-DnJy8xQt.js";import{a as t}from"./iframe-DERyzP_-.js";import{t as n}from"./jsx-runtime-DxP0NviS.js";var r=e((()=>{})),i,a,o=e((()=>{t(),r(),i=n(),a=({label:e,level:t=`primary`,size:n=`medium`,hasIcon:r=!1,iconElement:a,state:o=`default`,onClick:s,...c})=>(0,i.jsxs)(`button`,{type:`button`,className:[`btn`,`btn--${t}`,`btn--${n}`,o===`default`?``:`btn--state-${o}`,r?`btn--has-icon`:``].filter(Boolean).join(` `),disabled:o===`disabled`,onClick:s,...c,children:[r&&(0,i.jsx)(`span`,{className:`btn__icon`,children:a||`⭐`}),(0,i.jsx)(`span`,{className:`btn__label`,children:e})]}),a.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{label:{required:!0,tsType:{name:`string`},description:`按鈕文字`},level:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`}]},description:`層級：主要或次要`,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'x-small' | 'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'x-small'`},{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},description:`尺寸`,defaultValue:{value:`'medium'`,computed:!1}},hasIcon:{required:!1,tsType:{name:`boolean`},description:`是否有圖示`,defaultValue:{value:`false`,computed:!1}},iconElement:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`圖示元件 (預設放一個星星佔位符)`},state:{required:!1,tsType:{name:`union`,raw:`'default' | 'hover' | 'active' | 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'hover'`},{name:`literal`,value:`'active'`},{name:`literal`,value:`'disabled'`}]},description:`狀態：強迫顯示特定狀態，或設為 disabled`,defaultValue:{value:`'default'`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`點擊事件`}}}})),s,c,l,u,d,f;e((()=>{o(),s={title:`Components/Button`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{level:{control:`select`,options:[`primary`,`secondary`]},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},state:{control:`select`,options:[`default`,`hover`,`active`,`disabled`]},hasIcon:{control:`boolean`}}},c={args:{level:`primary`,label:`Primary Button`,size:`medium`,state:`default`}},l={args:{level:`secondary`,label:`Secondary Button`,size:`medium`,state:`default`}},u={args:{level:`primary`,label:`Icon Button`,hasIcon:!0,size:`medium`}},d={args:{size:`small`,label:`Small Button`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    level: 'primary',
    label: 'Primary Button',
    size: 'medium',
    state: 'default'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    level: 'secondary',
    label: 'Secondary Button',
    size: 'medium',
    state: 'default'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    level: 'primary',
    label: 'Icon Button',
    hasIcon: true,
    size: 'medium'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Small Button'
  }
}`,...d.parameters?.docs?.source}}},f=[`Primary`,`Secondary`,`WithIcon`,`Small`]}))();export{c as Primary,l as Secondary,d as Small,u as WithIcon,f as __namedExportsOrder,s as default};