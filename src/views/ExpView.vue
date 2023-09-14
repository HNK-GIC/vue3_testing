<template>
  <div>
    <h2>Excel Export</h2>
    <h5 class="text-start">json to csv Excel File</h5>
    <button @click="downloadCSV1">Download const variable to CSV</button>
    <h5 class="text-start">Export HTML Tag to Excel</h5>
    <div id="html-content">
      <table class="table" id="mytable">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button @click="extractCSVData">Table Download CSV using papaparse</button> | 
    <button @click="convertToCSV">Table Download CSV</button> | 
    <button @click="convertToCSV">Download XLSX</button>
  </div>
</template>
<script>
import Papa from "papaparse"
export default {
  data() {
    return {};
  },
  methods: {
    downloadCSV1() {
      // Your JSON data
      const jsonData = [
        { name: "John Doe　ジュンドー", email: "john@example.com" },
        { name: "Jane Smith　ジャンニスミツ", email: "jane@example.com" },
      ];

      // Convert JSON to CSV
      const csvData = Papa.unparse(jsonData);

      // Create a Blob object with the CSV data
      const blob = new Blob([csvData], { type: "text/csv" });

      // Create a temporary URL for the Blob
      const url = window.URL.createObjectURL(blob);

      // Create a link element
      const link = document.createElement("a");
      link.href = url;
      link.download = "data.csv";

      // Trigger the download
      link.click();

      // Cleanup the temporary URL
      window.URL.revokeObjectURL(url);
    },
    extractCSVData() {
      // Get the table element from the DOM
      const table = document.getElementById("mytable");

      // Create an empty array to hold the CSV rows
      const rows = [];

      // Iterate through each row of the table
      for (let i = 0; i < table.rows.length; i++) {
        const cells = table.rows[i].cells;
        const row = [];

        // Iterate through each cell of the row
        for (let j = 0; j < cells.length; j++) {
          row.push(cells[j].innerText);
        }

        // Add the row to the rows array
        rows.push(row);
      }

      // Convert rows to CSV format using Papa.unparse
      const csvContent = Papa.unparse(rows);

      // Do something with the CSV content
      console.log(csvContent);
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

      // Trigger the file download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "htmltocsv.csv";
      link.click();
    },
    convertToCSV() {
      // Get the table element from the DOM
      const table = document.getElementById("mytable");

      // Create an empty array to hold the CSV rows
      const rows = [];

      // Iterate through each row of the table
      for (let i = 0; i < table.rows.length; i++) {
        const cells = table.rows[i].cells;
        const row = [];

        // Iterate through each cell of the row
        for (let j = 0; j < cells.length; j++) {
          row.push(cells[j].innerText);
        }

        // Join the row elements with commas and add it to the rows array
        rows.push(row.join(","));
      }

      // Join the rows with newlines to form the CSV content
      const csvContent = rows.join("\n");

      // Create a Blob object with the CSV data
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

      // Trigger the file download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "htmltocsv.csv";
      link.click();
    },
  },
};
</script>
