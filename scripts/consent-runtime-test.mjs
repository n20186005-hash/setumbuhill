import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';import {build} from 'esbuild';
const compiled=await build({entryPoints:['client/src/consent-runtime.ts'],bundle:true,write:false,format:'iife',globalName:'runtime',platform:'browser'});const code=compiled.outputFiles[0].text;
const key='punthuk-cookie-consent';
function setup({localFail=false,sessionFail=false,sessionReadFail=false,removeFail=false,initial='analytics',shared}={}){
 const local=shared||new Map([[key,initial]]),session=new Map(),scripts=[],events={};
 const c={Event:class{constructor(type){this.type=type}},Date,localStorage:{getItem:k=>local.get(k)||null,setItem(k,v){if(localFail)throw Error('write');local.set(k,v)}},sessionStorage:{getItem(k){if(sessionReadFail)throw Error('read');return session.get(k)||null},setItem(k,v){if(sessionFail)throw Error('write');session.set(k,v)},removeItem(k){if(sessionFail||removeFail)throw Error('remove');session.delete(k)}},document:{getElementById:()=>scripts[0]||null,createElement:()=>({}),head:{appendChild:s=>scripts.push(s)}},dispatchEvent:e=>(events[e.type]||[]).forEach(f=>f(e)),addEventListener:(e,f)=>(events[e]||=[]).push(f)};c.window=c;vm.createContext(c);vm.runInContext(code,c);c.runtime.applyAnalytics();return {c,local,session,scripts,r:c.runtime};
}
for(const options of [{},{localFail:true},{localFail:true,sessionFail:true}]){
 const x=setup(options);assert.equal(x.scripts.length,1);x.r.saveConsent('essential');assert.equal(x.c['ga-disable-G-HXM22WWPKP'],true);assert.equal(x.r.readConsent(),'essential');assert.equal(x.c.dataLayer.at(-1)[2].analytics_storage,'denied');x.r.applyAnalytics();assert.equal(x.r.readConsent(),'essential');assert.equal(x.scripts.length,1);
 const result=x.r.saveConsent('analytics');if(options.sessionFail)assert.equal(result,false);assert.equal(x.r.readConsent(),'analytics');assert.equal(x.c.dataLayer.at(-1)[2].analytics_storage,'granted');assert.equal(x.scripts.length,1);
}
const blockedRead=setup({sessionReadFail:true});assert.equal(blockedRead.scripts.length,0);blockedRead.r.saveConsent('analytics');assert.equal(blockedRead.scripts.length,0);assert.equal(blockedRead.r.readConsent(),'essential');
const removal=setup({removeFail:true});removal.r.saveConsent('essential');assert.equal(removal.local.get(key),'essential');removal.r.saveConsent('analytics');assert.equal(removal.local.get(key),'essential');assert.equal(removal.r.readConsent(),'essential');assert.equal(removal.scripts.length,1);
const shared=new Map([[key,'analytics']]),a=setup({shared}),b=setup({shared});b.r.saveConsent('essential');a.r.handleConsentStorage({key,newValue:'essential'});assert.equal(a.r.readConsent(),'essential');assert.equal(a.c['ga-disable-G-HXM22WWPKP'],true);assert.equal(a.c.dataLayer.at(-1)[2].analytics_storage,'denied');
a.r.handleConsentStorage({key,newValue:'analytics'});assert.equal(a.r.readConsent(),'essential');assert.equal(a.scripts.length,1);
const first=setup({initial:'invalid'});assert.equal(first.scripts.length,0);first.r.saveConsent('analytics');assert.equal(first.scripts.length,1);
console.log('Actual bundled source VM passed: existinggrant/local write denial failure; dual storage write failure; session read failclosed; retained veto prevents shared grant; cross-tab denial runtime; document veto protects from later external grant; regrant singleloader.');
