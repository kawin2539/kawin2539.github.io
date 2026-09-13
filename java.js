function openPresentationPDF() {
  // 1. ระบุ URL หรือ Path ของไฟล์ PDF ที่ต้องการเชื่อมโยง
  const pdfUrl = 'presentation.pdf'; // เปลี่ยน 'presentation.pdf' เป็นชื่อไฟล์ หรือ URL ของไฟล์ PDF จริง

  // 2. เปิดไฟล์ PDF ในหน้าต่าง/แท็บใหม่
  window.open(pdfUrl, '_blank');
}
