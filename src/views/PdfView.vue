<template>
  <div>
    <h2>Download PDF</h2>
    <h5>Text write direct to PDF File</h5>
    Text => <button @click="downloadPDF1">Download PDF</button>
    <h5>Download within html tag</h5>
    <div id="html-content">
      <table class="table table-bordered">
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
            <td style="">Mark</td>
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
    html => <button @click="downloadPDF">Download PDF</button>
  </div>
</template>
<script>
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";

export default {
  data() {
    return {};
  },
  methods: {
    downloadPDF1() {
      // Create a new jsPDF instance
      const doc = new jsPDF();

      // Add content to the PDF
      doc.text("Hello, PDF!", 10, 10);

      // Save the PDF file
      doc.save("filedirect.pdf");
    },
    downloadPDF() {
      const element = document.getElementById("html-content");

      // Configure the PDF generation options
      const options = {
        margin: 10,
        filename: "pdfhtml.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      // Generate and save the PDF file
      html2pdf().set(options).from(element).save();
    },
  },
};
</script>
