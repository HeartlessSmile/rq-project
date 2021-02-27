
<template>
  <div class="side-bar">
    <div class="side-header"></div>
    <el-menu :show-timeout="200" :default-active="activeMenu" mode="vertical" class="sider-menu" text-color="#000" active-text-color="#4FAB68">
      <el-menu-item  v-for="route in list" :key="route.path" :base-path="route.path">
        <span slot="title">{{route.name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'layoutSider',
  components: {},
  data () {
    return {
      LogoPng: require("../../assets/images/logo.png"),
      activeMenu: '',
      list: [
        {
          path: '/home',
          name: '导航0'
        },
        {
          path: '/nav1',
          name: '导航1'
        },
        {
          path: '/nav2',
          name: '导航2'
        }
      ]
    }
  },
  computed: {},
  methods: {

  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.side-bar {
  width: 100%;
  .side-header{
    height: 80px;
    width: 248px;
    background-color: #5758E7;
  }
  .sider-menu {
    height: 100%;
    .sider-menu-item {
      font-size: 16px;
      padding-top: 10px;
      padding-bottom: 10px;
      height: 100%;
      line-height: 56px;
      padding: 0px;
      .sideIcon {
        font-size: 18px;
        margin-right: 5px;
      }
      &:hover {
        .sideIcon {
          color: rgb(79, 171, 104);
        }
      }
      &.is-active {
        background: rgba(79, 171, 104, 0.1);
      }
      &:hover {
        background: rgba(79, 171, 104, 0.1);
        color: rgb(79, 171, 104) !important;
        border-bottom-color: rgb(79, 171, 104) !important;
      }
    }
  }
}
</style>
