<template>
  <div class="wrapper">
    <mt-button @click.native="openToast" size="large">点击弹出 Toast</mt-button>
    <mt-button @click.native="openToastWithIcon" size="large">点击弹出带有 icon 的 Toast</mt-button>
    <mt-button @click.native="openBottomToast" size="large">自定义 Toast 位置</mt-button>

    <vsidebar></vsidebar>
    <!--<div class="content">-->
      <!--<transition name="move" mode="out-in">-->
        <!--<router-view></router-view>-->
      <!--</transition>-->
    <!--</div>-->
  </div>
</template>

<script>
import vsidebar from './Sidebar.vue'
export default {
  components: {
    vsidebar
  },
  methods: {
    openToast () {
      this.$toast('提示信息')
    },
    openToastWithIcon () {
      this.$toast({
        message: '操作成功',
        iconClass: 'mintui mintui-success'
      })
    },
    openBottomToast () {
      this.$toast({
        message: '提示信息',
        position: 'bottom'
      })
    }
  }
}
</script>
