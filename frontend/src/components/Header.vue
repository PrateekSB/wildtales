<template>
  <div class="header">
    <div class="left-container">
      <img class="logo" src="../assets/images/logo.jpg" />
      <div class="title-container">
        <div class="title">Reporting & Analytics</div>
      </div>
    </div>
    <div class="right-container">
      <div class="user">{{userName||""}}</div>
      <img src="../assets/images/avatar.jpg" class="avatar" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    userName: String
  }
})
export default class Header extends Vue {}
</script>

<style lang='scss' scoped>
@import "../assets/scss/theme";
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 70px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  background-color: white;
  padding-left: 16px;
  font-weight: 700;
  padding-right: 22px;
}
.left-container {
  display: flex;
  justify-content: flex-start;
}
.right-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.logo {
  object-fit: contain;
  height: 65px;
}
.title-container {
  margin-left: 10px;
  display: flex;
  align-items: center;
}
.title {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  border-bottom: 5px solid #f05d37;
}
.user {
  margin-right: 10px;
}
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
