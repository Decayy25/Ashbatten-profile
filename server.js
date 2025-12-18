import { SecretPassword } from './assets/js/pw.js';
import nodemailer from "nodemailer";
import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import path from "path";
import bcrypt from "bcrypt";
import cors from "cors";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// hash password
const PASSWORD_HASH = bcrypt.hashSync(SecretPassword, 10);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'secretKey',
  resave: false,
  saveUninitialized: true,
}));

// Contact form route
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "emailkamu@gmail.com",
        pass: "passwordaplikasi", // pakai App Password Google
      },
    });

    let mailOptions = {
      from: email,
      to: "ashbattenofficial@gmail.com",
      subject: "Pesan Baru dari Website",
      text: `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Pesan berhasil dikirim!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Gagal mengirim pesan." });
  }
});

// Serve static files
app.use(express.static(path.join(__dirname, "/")));

// Authentication middleware
function auth(req, res, next) {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect('/login.html');
  }
}

// Login route
app.post('/login', (req, res) => {
  const { password } = req.body;

  if (bcrypt.compareSync(password, PASSWORD_HASH)) {
    req.session.loggedIn = true;
    res.redirect('/index.html');
  } else {
    res.send('<h2>Password salah! <a href="/login.html">Anda bukan Pemilik Website ini!!</a></h2>');
  }
});

// Protection
app.get('/', auth, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
