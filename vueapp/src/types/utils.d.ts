import { Utils } from "@/plugins/utils";

declare module 'vue/types/vue' {
    interface Vue {
        $utils: Utils
    }
}
  