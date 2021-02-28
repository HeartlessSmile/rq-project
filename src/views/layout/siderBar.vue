
<template>
  <div class="layout-side-bar" :style="{width:!isCollapse?'248px':'84px'}">
    <div class="side-header">
      <div class="logo" v-show="!isCollapse"></div>
      <div class="icon" @click="setSiderBar"></div>
    </div>
    <el-menu default-active="1-4-1" @open="handleOpen" @close="handleClose" :collapse="isCollapse" class="sider-menu" :collapse-transition="false">
      <p v-show="!isCollapse" class="sider-menu-desc top">系统设置</p>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
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
      isCollapse: false,
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
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    setSiderBar () {
      this.isCollapse = !this.isCollapse
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
.layout-side-bar {
  width: 100%;
  .side-header {
    height: 84px;
    background-color: #5758e7;
    display: flex;
    .logo {
      flex: 1;
      height: 100%;
    }
    .icon {
      width: 84px;
      height: 100%;
      background: red;
    }
  }
  .sider-menu {
    height: 100%;
    width: 100%;
    &.el-menu--collapse {
      .el-submenu__title,
      .el-tooltip {
        text-align: center;
      }
    }
    .sider-menu-desc {
      margin-top: 30px;
      text-align: center;
      color: #b1b1c5;
      font-size: 16px;
      position: relative;
      &::before {
        content: '';
        width: 30px;
        height: 1px;
        position: absolute;
        left: 30px;
        background-color: red;
        top: 10px;
      }
      &::after {
        content: '';
        width: 30px;
        height: 1px;
        position: absolute;
        right: 24px;
        background-color: red;
        top: 10px;
      }
    }
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
