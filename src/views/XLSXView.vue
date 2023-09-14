<template>
  <div>
    <h2>Excel XLSX Export</h2>
    <button @click="excel_export">Export data</button>
  </div>
</template>
<script>
export default {
  methods: {
    async excel_export() {
      this.axios({
        url: "http://127.0.0.1:8000/api/excel_export",
        method: "GET",
        responseType: "blob", // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "person.xlsx"); //or any other extension
        document.body.appendChild(link);
        link.click();
      });
    },
  },
};
</script>
