const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "myFile.txt");

// 1. Create/Write File – fs.writeFile()
fs.writeFile(filePath, "Hello from async version!", (err) => {
	if (err) throw err;
	console.log("✅ File created (async)!");
});

// 2. Append to File – fs.appendFile()
fs.appendFile(filePath, "\nAnother line!", (err) => {
	if (err) throw err;
	console.log("✏️ Content appended!");
});

//  3. Read File – fs.readFile()
fs.readFile(filePath, "utf8", (err, data) => {
	if (err) throw err;
	console.log("📖 File content:", data);
});

//  4. Rename File – fs.rename()
fs.rename("old.txt", "new.txt", (err) => {
	if (err) throw err;
	console.log("🔁 File renamed!");
});

//  5. Delete File – fs.unlink()
fs.unlink(filePath, (err) => {
	if (err) throw err;
	console.log("❌ File deleted!");
});

//  6. Create Directory – fs.mkdir()
fs.mkdir("new-folder", { recursive: true }, (err) => {
	if (err) throw err;
	console.log("📁 Folder created!");
});

//  7. Read Directory – fs.readdir()
fs.readdir("folder-name", (err, files) => {
	if (err) throw err;
	console.log("🗃️ Files in folder:", files);
});

// 8. Delete Folder – fs.rmdir() (old) or fs.rm() (new)
fs.rm("folder-name", { recursive: true, force: true }, (err) => {
	if (err) throw err;
	console.log("🧹 Folder deleted!");
});

//  9. Check File Exists – fs.access()
fs.access(filePath, fs.constants.F_OK, (err) => {
	if (err) {
		console.log("❌ File does not exist");
	} else {
		console.log("✅ File exists");
	}
});
