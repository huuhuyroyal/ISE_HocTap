import React from "react";

const getSafeName = (name) => name.replace(/[<>:"/\\|?*]/g, "_");

function DocumentCard({ node, pathArray }) {
  const fileUrl = `/UIT_Dethi/${pathArray.map(getSafeName).join("/")}/${getSafeName(node.name)}.html`;

  // Extract extension, fallback to PDF if none
  let extMatch = node.name.match(/\.([a-zA-Z0-9]+)$/);
  let ext = extMatch ? extMatch[1].toUpperCase() : "PDF";

  // Tag styling based on extension
  let tagBg = "bg-blue-100 text-blue-800";
  let tagText = "GIÁO TRÌNH";
  if (ext === "DOCX" || ext === "DOC") {
    tagBg = "bg-green-100 text-green-800";
    tagText = "ĐỀ THI";
  } else if (ext === "ZIP" || ext === "RAR") {
    tagBg = "bg-purple-100 text-purple-800";
    tagText = "SOURCE CODE";
  } else if (ext === "PPTX" || ext === "PPT") {
    tagBg = "bg-orange-100 text-orange-800";
    tagText = "SLIDE";
  }

  // Fallbacks for UI
  const mockSize = "4.2 MB"; // Would be real data in prod
  const mockViews = Math.floor(Math.random() * 2000) + 100;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition group flex flex-col h-full">
      <div className="h-40 bg-gray-100 relative overflow-hidden flex items-center justify-center">
        {/* Placeholder gradient for thumbnail */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            ext === "DOCX" || ext === "DOC"
              ? "from-green-400 to-emerald-600"
              : ext === "ZIP" || ext === "RAR"
                ? "from-purple-500 to-indigo-600"
                : ext === "PPTX" || ext === "PPT"
                  ? "from-orange-400 to-red-500"
                  : "from-blue-400 to-blue-600"
          } opacity-10 group-hover:opacity-20 transition-opacity`}
        ></div>

        {/* Document Icon Placeholder */}
        <div className="z-10 text-4xl">
          {ext === "DOCX" || ext === "DOC"
            ? "📝"
            : ext === "ZIP" || ext === "RAR"
              ? "📦"
              : ext === "PPTX" || ext === "PPT"
                ? "📊"
                : "📄"}
        </div>

        <div
          className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-bold ${tagBg}`}
        >
          {tagText}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3
          className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm"
          title={node.name}
        >
          {node.name.replace(/\.[^/.]+$/, "")}
        </h3>

        <div className="flex gap-2">
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-lg text-sm transition"
          >
            Xem
          </a>
        </div>
      </div>
    </div>
  );
}

export default DocumentCard;
