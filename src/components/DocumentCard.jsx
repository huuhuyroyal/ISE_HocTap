import React from 'react';

const getSafeName = (name) => name.replace(/[<>:"/\\|?*]/g, "_");

function DocumentCard({ node, pathArray }) {
  const fileUrl = `/UIT_Dethi/${pathArray.map(getSafeName).join("/")}/${getSafeName(node.name)}.html`;
  
  // Extract extension, fallback to PDF if none
  let extMatch = node.name.match(/\.([a-zA-Z0-9]+)$/);
  let ext = extMatch ? extMatch[1].toUpperCase() : 'PDF';
  
  // Tag styling based on extension
  let tagBg = "bg-blue-100 text-blue-800";
  let tagText = "GIÁO TRÌNH";
  if (ext === "DOCX" || ext === "DOC") { tagBg = "bg-green-100 text-green-800"; tagText = "ĐỀ THI"; }
  else if (ext === "ZIP" || ext === "RAR") { tagBg = "bg-purple-100 text-purple-800"; tagText = "SOURCE CODE"; }
  else if (ext === "PPTX" || ext === "PPT") { tagBg = "bg-orange-100 text-orange-800"; tagText = "SLIDE"; }

  // Fallbacks for UI
  const mockSize = "4.2 MB"; // Would be real data in prod
  const mockViews = Math.floor(Math.random() * 2000) + 100;
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition group flex flex-col h-full">
      <div className="h-40 bg-gray-100 relative overflow-hidden flex items-center justify-center">
        {/* Placeholder gradient for thumbnail */}
        <div className={`absolute inset-0 bg-gradient-to-br ${
          ext === 'DOCX' || ext === 'DOC' ? 'from-green-400 to-emerald-600' :
          ext === 'ZIP' || ext === 'RAR' ? 'from-purple-500 to-indigo-600' :
          ext === 'PPTX' || ext === 'PPT' ? 'from-orange-400 to-red-500' :
          'from-blue-400 to-blue-600'
        } opacity-10 group-hover:opacity-20 transition-opacity`}></div>
        
        {/* Document Icon Placeholder */}
        <div className="z-10 text-4xl">
          {ext === 'DOCX' || ext === 'DOC' ? '📝' :
           ext === 'ZIP' || ext === 'RAR' ? '📦' :
           ext === 'PPTX' || ext === 'PPT' ? '📊' :
           '📄'}
        </div>

        <div className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-bold ${tagBg}`}>
          {tagText}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm" title={node.name}>
          {node.name.replace(/\.[^/.]+$/, "")}
        </h3>
        
        <div className="mt-auto flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-1">
             <span className="font-medium">{ext}</span>
             <span>•</span>
             <span>{mockSize}</span>
          </div>
          <div className="flex items-center gap-1">
             <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
             </svg>
             {mockViews}
          </div>
        </div>
        
        <div className="flex gap-2">
          <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-lg text-sm transition">
            Xem
          </a>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="w-10 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition" title="Tải xuống">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DocumentCard;
