export const openPartnershipEmailSmart = () => {
  const email = "aravinthcons@gmail.com";
  const subject = "Partnership Inquiry - Aravinth Constructions";

  const body = `Hello Aravinth Constructions Team,

I am interested in exploring partnership opportunities with your company.

Please find my details below:
- Company Name: 
- Contact Person: 
- Business Type: 
- Services/Products: 
- Contact Number: 
- Location: 

I look forward to hearing from you.

Best regards,`;

  const encodedBody = encodeURIComponent(body);
  const encodedSubject = encodeURIComponent(subject);

  // Detect if mobile device
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    // For mobile devices, use mailto:
    window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
  } else {
    // For desktop, try Gmail web first, fallback to mailto
    try {
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`;
      window.open(gmailLink, "_blank");
    } catch {
      window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
    }
  }
};
