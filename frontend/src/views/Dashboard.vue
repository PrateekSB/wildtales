<template>
  <div>
    <p>dashboard</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Filters from "@/components/Filters.vue";
import DataTable from "@/components/DataTable.vue";
import { action } from "vuex-class-component";
import { storeProxy, store } from "../store";

@Component({
  components: {
    Filters,
    DataTable,
    Header
  }
})
export default class Dashboard extends Vue {}
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  flex-direction: column;
}
</style>
