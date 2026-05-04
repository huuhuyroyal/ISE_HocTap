import React, { useState } from "react";
import driveData from "../../drive_structure.json";

const getSafeName = (name) => name.replace(/[<>:"/\\|?*]/g, "_");

// Recursive component to display files and folders
const TreeNode = ({ node, pathArray }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (node.type === "file") {
    const fileUrl = `/UIT_Dethi/${pathArray.map(getSafeName).join("/")}/${getSafeName(node.name)}.html`;
    return (
      <a
        href={fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-3 bg-gray-50 hover:bg-sky-50 rounded border border-gray-200 hover:border-sky-400 transition ml-4 mt-2"
      >
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-900 truncate">
            📄 {node.name}
          </span>
          <span className="text-sky-600 font-semibold text-sm">Xem ↗</span>
        </div>
      </a>
    );
  }

  // It's a folder
  return (
    <div className="ml-4 mt-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded border border-blue-200 transition"
      >
        <span className="font-medium text-gray-900 flex items-center gap-2">
          {isOpen ? "📂" : "📁"} {node.name}
        </span>
        <span className="text-gray-500 text-sm">
          {node.children?.length || 0} mục {isOpen ? "▲" : "▼"}
        </span>
      </button>
      {isOpen && node.children && (
        <div className="border-l-2 border-blue-100 pl-2 mt-1">
          {node.children.map((child, idx) => (
            <TreeNode
              key={idx}
              node={child}
              pathArray={[...pathArray, node.name]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function Documents() {
  const subjectIcons = {
    "Cấu Trúc Rời Rạc": "📊",
    DSA: "🔢",
    "Nhập Môn Mạng Máy Tính": "🌐",
    OOP: "💻",
    "Xác Suất Thống Kê": "📈",
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  // Count total files in a node recursively
  const countFiles = (node) => {
    if (node.type === "file") return 1;
    if (!node.children) return 0;
    return node.children.reduce((acc, child) => acc + countFiles(child), 0);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-500 to-cyan-600 text-white py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Thư viện tài liệu học tập
        </h1>
        <p className="text-lg opacity-95">
          Tài liệu từ kho lưu trữ UIT_Dethi - Tất cả các môn học
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {driveData.map((subject, index) => (
            <button
              key={index}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === subject.name ? null : subject.name,
                )
              }
              className="p-4 rounded-lg border-2 border-sky-200 hover:border-sky-600 hover:bg-sky-50 transition text-left"
            >
              <div className="text-3xl mb-2">
                {subjectIcons[subject.name] || "📚"}
              </div>
              <h3 className="font-bold text-gray-900 text-sm">
                {subject.name}
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                {countFiles(subject)} tài liệu
              </p>
            </button>
          ))}
        </div>

        {/* Selected Category Files */}
        {selectedCategory && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            {driveData
              .filter((s) => s.name === selectedCategory)
              .map((subject, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-3xl">
                      {subjectIcons[subject.name] || "📚"}
                    </span>
                    {subject.name}
                  </h2>
                  <div className="space-y-2 -ml-4">
                    {/* Render children of the top-level subject */}
                    {subject.children &&
                      subject.children.map((child, childIdx) => (
                        <TreeNode
                          key={childIdx}
                          node={child}
                          pathArray={[subject.name]}
                        />
                      ))}
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Info Box */}
        {!selectedCategory && (
          <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg text-center">
            <p className="text-gray-700">
              👆 Nhấn vào các chủ đề bên trên để xem tài liệu học tập
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Documents;
