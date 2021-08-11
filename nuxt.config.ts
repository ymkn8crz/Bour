import { Configuration } from "@nuxt/types";

const nuxtConfig: Configuration = {
  plugins: [
    '@/plugins/composition-api'
  ],

  buildModules: [
    '@nuxt/typescript-build'
  ],
}

export default nuxtConfig