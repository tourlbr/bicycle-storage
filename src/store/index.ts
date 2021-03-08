import { createStore } from 'vuex';

import { homeStore } from '@/modules/Home';
import { aboutStore } from '@/modules/About';

export default createStore({
  modules: {
    homeStore,
    aboutStore,
  },
});
