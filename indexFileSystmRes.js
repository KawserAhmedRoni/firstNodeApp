const fs = require("fs");
const path = require("path");

// 1️⃣ File Paths
const filePath = path.join(__dirname, "demo.txt");
const renamedPath = path.join(__dirname, "renamed.txt");

// 2️⃣ Create or Write File
fs.writeFileSync(filePath, "Hello Kawser Roni!");
console.log("✅ File created:", filePath);

// 3️⃣ Read File
const content = fs.readFileSync(filePath, "utf-8");
console.log("📖 File content:", content);

// 4️⃣ Append Content
fs.appendFileSync(filePath, "\nNew line added!");
console.log("✏️ Content appended");

// 5️⃣ Rename File
fs.renameSync(filePath, renamedPath);
console.log("🔁 File renamed to:", renamedPath);

// 6️⃣ Delete File
fs.unlinkSync(renamedPath);
console.log("❌ File deleted");
