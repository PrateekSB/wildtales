<template>
  <div class="main">
    <Header :userName="userFullName" />
    <div class="content">
      <NavigationBar :items="navButtons" />
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import Dashboard from "@/views/Dashboard.vue";
import TherapyProcess from "@/views/TherapyProcess.vue";
import RawData from "@/views/RawData.vue";
import Export from "@/views/Export.vue";

import { storeProxy } from "../store";

@Component({
  components: {
    Header,
    NavigationBar,
    Dashboard,
    TherapyProcess,
    Export,
    RawData
  }
})
export default class Main extends Vue {
  get userFullName() {
    const session = storeProxy.session.getSessionUser;
    return session ? `${session.firstName} ${session.lastName}` : "";
  }

  get navButtons() {
    return [
      { text: "Raw Data", path: "/raw-data" },
      { text: "Dashboard", path: "/dashboard" },
      { text: "Therapy Process", path: "/therapy-process" },
      { text: "Export", path: "/export" }
    ];
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  flex-direction: column;
  background-color: white;
}
.content {
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
}
</style>
