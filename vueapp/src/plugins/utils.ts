import { PluginFunction } from "vue";
import _Vue from "vue";

class MIMETypes {
    createUser = "application/vnd.createUser+json";
    loginInfo = "application/vnd.loginInfo+json";
}

export interface Utils{
    getUrl(url:string):string;
    getApiUrl(url:string):string;
    getMIMEType(type:string):string;
    mimeTypes:MIMETypes;
}

export const utils:Utils = {
    mimeTypes:new MIMETypes(),
    getUrl(url:string):string{
        return url;
    },
    getApiUrl(url:string):string{
        return "/api" + url;
    },
    getMIMEType(type:string):string{
        //@ts-ignore
        return this.mimeTypes[type] || "application/json";
    }    
}

const UtilsPlugin:PluginFunction<Utils> = ( Vue:typeof _Vue )=>{
    Vue.prototype.$utils = utils;
}

export {UtilsPlugin};
export default utils;