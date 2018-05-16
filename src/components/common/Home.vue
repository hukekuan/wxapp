<template>
  <div class="wrapper">
    <vhead></vhead>
    <vsidebar></vsidebar>
    <!--<div class="content">-->
      <!--<transition name="move" mode="out-in">-->
        <!--<router-view></router-view>-->
      <!--</transition>-->
    <!--</div>-->
  </div>
</template>

<script>
import vhead from './Header.vue'
import vsidebar from './Sidebar.vue'
export default {
  components: {
    vhead, vsidebar
  }
}
</script>
