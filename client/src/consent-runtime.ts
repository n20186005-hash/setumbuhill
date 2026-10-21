import {site} from './site';
export type Consent='unset'|'essential'|'analytics';
const key='punthuk-cookie-consent',vetoKey=key+'-denied';
let documentChoice:Consent|null=null;
let lastScope:'saved'|'session'|'document'='document';
export function readConsent():Consent {
  if(documentChoice==='essential')return 'essential';
  try {if(sessionStorage.getItem(vetoKey)==='1')return 'essential'}catch{return 'essential'}
  if(documentChoice==='analytics')return 'analytics';
  try {const v=localStorage.getItem(key);return v==='analytics'||v==='essential'?v:'unset'}catch{return 'unset'}
}
export function applyAnalytics(){
 const enabled=readConsent()==='analytics';
 const w=window as typeof window & Record<string,unknown>;
 w['ga-disable-'+site.analyticsId]=!enabled;
 window.dataLayer=window.dataLayer||[];
 const gtag=(...args:unknown[])=>window.dataLayer.push(args);
 gtag('consent','update',{analytics_storage:enabled?'granted':'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
 if(enabled&&!document.getElementById('ga4-script')){gtag('js',new Date());gtag('config',site.analyticsId);const script=document.createElement('script');script.id='ga4-script';script.async=true;script.src=`https://www.googletagmanager.com/gtag/js?id=${site.analyticsId}`;document.head.appendChild(script)}
}
export function saveConsent(value:Exclude<Consent,'unset'>){
 let sessionSaved=false;
 if(value==='essential')documentChoice='essential';
 try {if(value==='essential')sessionStorage.setItem(vetoKey,'1');else {sessionStorage.removeItem(vetoKey);if(sessionStorage.getItem(vetoKey)==='1')throw Error('veto retained')}sessionSaved=true}catch{}
 // A failed veto removal must never turn a shared persistent grant into effective consent.
 if(value==='analytics'&&!sessionSaved){
   let blocked=true;try{blocked=sessionStorage.getItem(vetoKey)==='1'}catch{}
   if(blocked){documentChoice='essential';lastScope='document';applyAnalytics();window.dispatchEvent(new Event('consent-change'));return false}
 }
 documentChoice=value;
 applyAnalytics();
 let saved=false;try{localStorage.setItem(key,value);saved=true}catch{}
 lastScope=saved&&sessionSaved?'saved':value==='essential'&&sessionSaved?'session':'document';
 if(saved&&value==='analytics')documentChoice=null;
 window.dispatchEvent(new Event('consent-change'));
 return saved&&sessionSaved;
}
export function consentStatus(language:'id'|'en'){
 const en=language==='en',enabled=readConsent()==='analytics';
 return (en?`Google Analytics ${enabled?'enabled':'disabled'}. `:`Google Analytics ${enabled?'aktif':'nonaktif'}. `)+(lastScope==='saved'?(en?'Preferences saved.':'Pilihan tersimpan.'):lastScope==='session'?(en?'Denial applies to this tab; persistent storage failed. Other tabs or browsers may differ.':'Penolakan berlaku untuk tab ini; penyimpanan permanen gagal. Tab atau peramban lain dapat berbeda.'):(en?'Choice applies to this page; persistence for navigation, reloads, other tabs or browsers is not guaranteed.':'Pilihan berlaku pada halaman ini; penyimpanan untuk navigasi, pemuatan ulang, tab atau peramban lain tidak dijamin.'));
}
export function handleConsentStorage(event:StorageEvent){
 if(event.key!==key)return;
 if(event.newValue!=='analytics')documentChoice='essential';
 applyAnalytics();window.dispatchEvent(new Event('consent-change'));
}
