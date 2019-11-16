<template>
  <div class="navigation-container">
    <div v-bind:key="item.text" v-for="(item, index) in items">
      <router-link :to="item.path">
        <button
          class="button"
          v-bind:class="{'button-active': activeIndex===index}"
          v-on:click="onButtonClick(index)"
        >{{item.text}}</button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    items: Array
  }
})
export default class NavigationBar extends Vue {
  activeIndex: number = 0;

  mounted() {
    this.$router.push({ path: this.$props.items[0].path });
  }

  onButtonClick(index: number) {
    this.activeIndex = index;
  }
}
</script>

<style lang='scss' scoped>
@import "../assets/scss/theme";
.navigation-container {
  display: flex;
  flex-direction: row;
  height: 70px;
}
.button {
  background-color: white;
  border: none;
  color: black;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin: 4px 2px;
  cursor: pointer;
}
.button:hover {
  background-color: #f9f9f9;
  color: #f05d37;
}
.button-active {
  background-color: #f9f9f9;
  color: #f05d37;
}
</style>
