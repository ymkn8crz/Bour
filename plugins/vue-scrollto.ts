import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo);

interface scrollOptions {
  [key: string]: string | number | boolean
}

const defaultScrollOptions: scrollOptions = {
  container: 'body',
  duration: 600,
  easing: 'ease',
}

const smoothScrollTo = (selector: string, options: scrollOptions = defaultScrollOptions) => {
  VueScrollTo.scrollTo(selector, options)
}

export default smoothScrollTo