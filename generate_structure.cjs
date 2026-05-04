const fs = require("fs");
const path = require("path");

const dataRaw = fs.readFileSync("drive_structure.json", "utf8");
const data = JSON.parse(dataRaw);
const basePath = path.join(__dirname, "public", "UIT_Dethi");

function createRedirectHtml(url) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <meta http-equiv="refresh" content="0; URL='${url}'" />
</head>
<body>
  
</body>
</html>`;
}

function processNode(node, currentPath) {
  // Thay thế các ký tự không hợp lệ trong tên file/folder trên windows nếu có
  const safeName = node.name.replace(/[<>:"/\\|?*]/g, "_");
  const fullPath = path.join(currentPath, safeName);

  if (node.type === "folder") {
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
    if (node.children) {
      node.children.forEach((child) => processNode(child, fullPath));
    }
  } else if (node.type === "file") {
    // Thêm đuôi .html
    const filePath = fullPath + ".html";
    fs.writeFileSync(filePath, createRedirectHtml(node.link), "utf8");
  }
}

// Ensure base path exists
if (!fs.existsSync(basePath)) {
  fs.mkdirSync(basePath, { recursive: true });
}

data.forEach((node) => {
  processNode(node, basePath);
});

console.log("Tạo cấu trúc thư mục thành công!");
