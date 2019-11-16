<template>
  <div>
    <article class="raw-data">
      <section class="filter">
        <Filters class="filters-list" />
      </section>
      <section class="data-table">
        <DataTable class="datatable-list" />
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Filters from "@/components/Filters.vue";
import DataTable from "@/components/DataTable.vue";
import { action } from "vuex-class-component";
import { storeProxy, store } from "../store";

@Component({
  components: {
    Filters,
    DataTable
  }
})
export default class RawData extends Vue {}
</script>

<style lang="scss" scoped>
.raw-data {
  display: flex;
  flex-direction: column;
}
</style>
