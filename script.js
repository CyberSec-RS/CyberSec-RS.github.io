document.getElementById('downloadPdf').addEventListener('click', () => {
  const element = document.getElementById('cv');

  const opt = {
    margin:       0.4,
    filename:     'CV-Rosendo-Santos.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
});

document.getElementById('printBtn').addEventListener('click', () => {
  window.print();
});
