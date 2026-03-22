const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔐 USERS (demo DB)
let users = [];

// 🧠 MEMORY
let memory = [];

// 🔐 REGISTER
app.post("/register", (req, res) => {
users.push(req.body);
res.json({ status: "registered" });
});

// 🔐 LOGIN
app.post("/login", (req, res) => {
const user = users.find(u => u.email === req.body.email);
if (user) return res.json({ status: "success" });

users.push({ email: req.body.email });
res.json({ status: "new user created" });
});

// 🤖 AI CHAT
app.post("/ask", async (req, res) => {

const msg = req.body.message;
memory.push(msg);

let reply = await getAIReply(msg);

res.json({ reply });
});

// 🧠 AI ENGINE
async function getAIReply(msg) {

// 👉 If OpenAI key exists
if (process.env.OPENAI_KEY) {
return "🤖 GPT: " + msg;
}

// 👉 Fallback (offline style)
return "⚡ Jarvis: " + msg;
}

app.get("/", (req, res) => {
res.send("Jarvis API Running 🚀");
});

app.listen(3000, () => console.log("Server running"));