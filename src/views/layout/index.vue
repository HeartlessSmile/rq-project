
<template>
  <div class="layout">
    <Sidebar class="layout-sider" />
    <div class="layout-content">
      <Header class="layout-header" />
      <router-view class="layout-box" />
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Sidebar from './siderBar'
export default {
  name: 'layoutIndex',
  components: {
    Header,
    Sidebar
  },
  data () {
    return {
      msg: '',
      crumbsFlag: false
    }
  },
  computed: {},
  methods: {},
  created () {
    // this.$sloading.show()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  .layout-sider{
    min-height: 100vh;
  }
  .layout-content {
    flex: 1;
    .layout-header{
      height: 84px;
      background: #6061F1;
      border-bottom: 1px solid #ccc;
    }
    .main-box {
      min-height: calc(100vh - 84px);
    }
  }
}
</style>
