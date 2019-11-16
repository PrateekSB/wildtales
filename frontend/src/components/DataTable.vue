<template lang="html">
  <section class="table-container">
    <div v-if="!loading">
      <table id="dataTable" class="table table-hover">
        <thead class="table-light">
        <tr>
          <th class="numbering">#</th>
          <th class="content">Gender</th>
          <th class="content">Age</th>
          <th class="content">Treatment Type</th>
          <th class="content">Disease</th>
        </tr>
        </thead>
        <tbody id="tableBody">
          <tr v-for="(patient, index) in patientData">
            <td class="numbering"> {{ index+1 }} </td>
            <td class="content"> {{ patient.gender }} </td>
            <td class="content"> {{ patient.age }} </td>
            <td class="content"> {{ patient.treatmentType }} </td>
            <td class="content"> {{ patient.disease }} </td>
          </tr>
        </tbody>
      </table>
      <p> {{patientData.length}} entries found </p>
    </div>
    <div v-else>
      Loading patient info...
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { storeProxy } from '@/store';

@Component
export default class DataTable extends Vue {
  // TODO: Move loading state to dashboard store and share with Filter
  // component to enable/disable filters when patient data is being fetched.
  loading: boolean = false;

  async mounted() {
    this.loading = true;
    await storeProxy.dashboard.getPatientData();
    this.loading = false;
  }

  get patientData() {
    return storeProxy.dashboard.patientData;
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/theme';

::-webkit-scrollbar {
  display: none;
}
p {
  font-weight: 700;
}
.table-container {
  display: flex;
  flex-direction: column;
}
.table {
  table-layout: fixed;
  width: 100%;
}
tbody {
  display: block;
  max-height: 58vh;
  overflow-y: auto;
  width: 100%;
}
tbody td, thead > tr> th {
  float: left;
  border-bottom-width: 2.5px;
  border-bottom-color: #f05d37;
}
tr, thead {
  width: 100%;
  display: block;
}
.numbering {
  width: 8%;
  font-weight: 700;
  padding: 0.3rem;
}
.content {
  width: 23%;
  padding: 0.3rem;
}
</style>
