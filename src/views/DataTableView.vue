<template>
  <div>
    <DataTable :value="all_person" tableStyle="min-width: 50rem">
      <Column field="reg_no" header="Register No"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="dob" header="DOB"></Column>
      <Column field="address" header="Address"></Column>
      <Column field="phone" header="Phone"></Column>
    </DataTable>
  </div>
</template>
<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
// import ColumnGroup from "primevue/columngroup"; // optional
// import Row from "primevue/row";
import Configuration from "../Service/configuration.js";
import DataService from "../Service/data-service.js";
export default {
  components: {
    DataTable,
    Column
  },
  data() {
    return {
      all_person: [],
    };
  },
  async mounted() {
    var dataservice = new DataService();
    var config = new Configuration();
    var serverResponse = await dataservice.retrieveWithGet(
      config.SERVICE_NAME_PERSON
    );
    this.all_person = serverResponse;
  },
};
</script>
