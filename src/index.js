/**
 * Created by hukekuan on 2019/1/31.
 */
import Vue from 'vue'
import { Header, Tabbar, TabItem, Toast } from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Toast.name, Toast)

export default {
  Header, Tabbar, TabItem, Toast
}
