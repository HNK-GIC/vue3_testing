<template>
    <div>
      <h2>Excel Import</h2>
      <input type="file" @change="handleFileUpload" accept=".csv">
    </div>
  </template>
  <script>
  import Papa from "papaparse";
  
  export default {
    data() {
      return {};
    },
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
  
        if (!file) {
          return;
        }
  
        const reader = new FileReader();
  
        reader.onload = (e) => {
          const csvData = e.target.result;
  
          // Parse CSV data
          Papa.parse(csvData, {
            header: true,
            complete: (results) => {
              // Access the parsed CSV data in results.data
              const jsonData = results.data;
  
              // Do something with the JSON data
              console.log(jsonData);
            },
            error: (error) => {
              console.error("CSV parsing error:", error);
            },
          });
        };
  
        reader.readAsText(file);
      },
    },
  };
  </script>
  