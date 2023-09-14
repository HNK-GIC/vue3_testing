<template>
  <mainlayout>
    <!-- Register Form -->
    <div class="row justify-content-center">
      <div class="card col-6 m-3">
        <div class="row">
          <label class="text-start col-12">Register Number :</label>
          <div class="col-12">
            <input
              type="text"
              class="form-control"
              v-model="add_person.reg_no"
            />
          </div>
        </div>
        <div class="row">
          <label class="text-start col-12">Name :</label>
          <div class="col-12">
            <input type="text" class="form-control" v-model="add_person.name" />
          </div>
        </div>
        <div class="row">
          <label class="text-start col-12">Date of Birth :</label>
          <div class="col-12">
            <input type="date" class="form-control" v-model="add_person.dob" />
          </div>
        </div>
        <div class="row">
          <label class="text-start col-12">Address :</label>
          <div class="col-12">
            <input
              type="text"
              class="form-control"
              v-model="add_person.address"
            />
          </div>
        </div>
        <div class="row">
          <label class="text-start col-12">Phone :</label>
          <div class="col-12">
            <input
              type="text"
              class="form-control"
              v-model="add_person.phone"
            />
          </div>
        </div>
        <div class="row mt-3 mb-3">
          <div class="col-12">
            <button
              type="submit"
              v-on:click="add_data()"
              class="btn btn-primary col-12"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="row mt-2">
      <div class="col-6 text-start">
        <h5>All Person List</h5>
      </div>
      <div class="col-6 text-end">
        <button v-on:click="excel_export()">Export</button>
        <button v-on:click="excel_import()">Import</button>
      </div>
    </div>
    <hr />
    <!-- List -->
    <div class="row table-responsive mt-3">
      <div class="col-12">
        <table class="table table-sm table-striped">
          <thead>
            <tr>
              <th>No</th>
              <th>Register No</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i, index) in all_person" :key="i.id">
              <td>{{ index + 1 }}</td>
              <td>{{ i.reg_no }}</td>
              <td>{{ i.name }}</td>
              <td>{{ i.dob }}</td>
              <td>{{ i.address }}</td>
              <td>{{ i.phone }}</td>
              <td>
                <button
                  v-on:click="delele_data(i.id)"
                  class="btn btn-sm btn-danger me-1"
                >
                  <i class="fa-solid fa-trash-can"></i>
                </button>
                <button
                  v-on:click="edit_data(i.id)"
                  class="btn btn-sm btn-warning"
                >
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </mainlayout>
</template>
<script>
import Configuration from '../Service/configuration.js';
import DataService from '../Service/data-service.js';
import mainlayout from "@/components/MainLayout.vue";
export default {
  components: {
    mainlayout
  },
  data() {
    return {
      all_person: [],
      add_person: {},
    };
  },
  async mounted() {
    var dataservice = new DataService();
    var config = new Configuration();
    var serverResponse = await dataservice.retrieveWithGet(config.SERVICE_NAME_PERSON);
    this.all_person = serverResponse;

  },
  methods: {
    async add_data() {
      var dataservice = new DataService();
      var config = new Configuration();

      var serverResponse = await dataservice.createWithPost(config.SERVICE_NAME_PERSON,this.add_person);
      this.all_person = serverResponse;
      this.add_person = "";
    }
  },
};
</script>
