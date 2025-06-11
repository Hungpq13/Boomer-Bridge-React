const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

// Cấu hình transporter cho Gmail (hoặc SMTP khác)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hungpq1309developer@gmail.com",
    pass: "higlwhanglymmfuw",
  },
});

router.post("/api/feedback", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Thiếu thông tin." });
  }

  try {
    await transporter.sendMail({
      from: `"Feedback Boomer Bridge" <${email}>`,
      to: "hangvuforwork@gmail.com",
      subject: `Feedback của ${name} từ Boomer Bridge`,
      html: `
        <div style="font-family:Segoe UI,Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px 20px;background:#ffcdf3;border-radius:12px;border:1.5px solid #e1e1e1;">
          <h3 style="color:black;text-align:center;margin-bottom:18px;">Thông tin Feeback</h3>
          <p style="margin:10px 0 6px 0;"><b>Họ tên:</b> <span style="color:#333;">${name}</span></p>
          <p style="margin:6px 0;"><b>Email:</b> <span style="color:#333;">${email}</span></p>
          <p style="margin:6px 0 0 0;"><b>Nội dung:</b></p>
          <div style="background:#fffff;border-radius:7px;padding:12px 14px;margin-top:4px;color:#444;border:1px solid black;">
            ${message}
          </div>
        </div>
      `,
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Không gửi được email." });
  }
});

module.exports = router;