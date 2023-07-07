<template>
    <div>
      <input type="file" ref="csvFile" accept=".csv" />
      <button @click="convertCsvToJson">Import</button>
    </div>
  </template>
  
  <script>
  import Papa from 'papaparse';
  
  export default {
    methods: {
      convertCsvToJson() {
        const file = this.$refs.csvFile.files[0];
        const reader = new FileReader();
  
        reader.onload = () => {
          const csvData = reader.result;
          const jsonData = Papa.parse(csvData, { header: true });
          console.log(jsonData.data); // Output the converted JSON data
        };
  
        reader.readAsText(file);
      },

    },
  };
  </script>