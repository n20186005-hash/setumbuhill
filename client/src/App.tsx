import Home from "./pages/Home";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";
import { CookieNotice, AnalyticsConsent } from "./privacy";
export default function App({path = typeof document === "undefined" ? "/" : document.getElementById("root")?.dataset.path || location.pathname}:{path?:string}) {
 const en=path.startsWith("/en/") || path==="/en"; const language=en?"en":"id";
 const page=path.replace(/^\/en(?=\/|$)/,"").replace(/^\/|\/$/g,"");
 const content=page==="" ? <Home language={language}/> : ["privacy","terms","cookies"].includes(page) ? <LegalPage kind={page as "privacy"|"terms"|"cookies"} language={language}/> : <NotFound/>;
 return <>{content}<CookieNotice language={language}/><AnalyticsConsent/></>;
}
