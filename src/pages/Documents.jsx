import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import driveData from "../../drive_structure.json";
import DocumentCard from "../components/DocumentCard";

// Helper to flatten files from drive structure
const flattenFiles = (nodes, pathArray = []) => {
  let files = [];
  for (const node of nodes) {
    if (node.type === "file") {
      files.push({ node, pathArray });
    } else if (node.children) {
      files = files.concat(flattenFiles(node.children, [...pathArray, node.name]));
    }
  }
  return files;
};

function Documents() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const searchParams = new URLSearchParams(location.search);
  const urlQuery = searchParams.get('q') || '';

  const [activeTab, setActiveTab] = useState("Tất cả");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(urlQuery);
  const itemsPerPage = 12;

  // Sync state when URL changes
  useEffect(() => {
    setSearchQuery(urlQuery);
    setCurrentPage(1);
  }, [urlQuery]);

  // Extract top-level subjects for tabs
  const subjects = ["Tất cả", ...driveData.map(subject => subject.name)];

  // Get all files or filtered files
  const filteredFiles = useMemo(() => {
    let targetData = driveData;
    if (activeTab !== "Tất cả") {
      targetData = driveData.filter(s => s.name === activeTab);
    }
    let files = flattenFiles(targetData);
    
    // Apply search filter if there's a search query
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      const queryWords = lowerQuery.split(/\s+/).filter(w => w.length > 0);
      
      files = files.filter(f => {
        let searchableText = (f.pathArray.join(" ") + " " + f.node.name).toLowerCase();
        
        // Bổ sung từ khóa (aliases) cho các môn học
        if (f.pathArray.includes("Cấu Trúc Rời Rạc")) searchableText += " ctrr cấu trúc rời rạc";
        if (f.pathArray.includes("Nhập Môn Mạng Máy Tính")) searchableText += " nmm nmmmt nhập môn mạng máy tính mạng máy tính";
        if (f.pathArray.includes("OOP")) searchableText += " oop lập trình hướng đối tượng lập trình hướng đối lthdt";
        if (f.pathArray.includes("DSA")) searchableText += " dsa cấu trúc dữ liệu cấu trúc dữ liệu và giải thuật ctdl ctdlgt";
        if (f.pathArray.includes("Xác Suất Thống Kê")) searchableText += " xstk xác suất thống kê";
        
        // Trả về true nếu MỌI từ trong câu search đều xuất hiện trong searchableText
        return queryWords.every(word => searchableText.includes(word));
      });
    }
    
    return files;
  }, [activeTab, searchQuery]);

  // Pagination logic
  const totalPages = Math.ceil(filteredFiles.length / itemsPerPage);
  const currentFiles = filteredFiles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to page 1 on tab change
    // Clear search query when changing tabs manually to avoid confusion
    if (searchQuery) {
      navigate('/documents');
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/documents?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="w-full bg-gray-50 font-sans text-gray-800 min-h-screen">
      {/* Main Content */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        
        {/* Filters / Tabs and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {subjects.map((subject, idx) => (
              <button
                key={idx}
                onClick={() => handleTabChange(subject)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === subject 
                    ? 'bg-blue-700 text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {subject}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-end">
            <form onSubmit={handleSearchSubmit} className="relative">
               <input 
                 type="text" 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 placeholder="Tìm tài liệu..." 
                 className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:ring-blue-500 focus:border-blue-500 outline-none w-full md:w-64"
               />
               <svg className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
            </form>
          </div>
        </div>

        {/* Search Results info */}
        {urlQuery && (
          <div className="mb-6 text-gray-600">
            Kết quả tìm kiếm cho: <span className="font-bold text-gray-900">"{urlQuery}"</span> ({filteredFiles.length} tài liệu)
          </div>
        )}

        {/* Document Grid */}
        {currentFiles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {currentFiles.map((fileData, index) => (
              <DocumentCard key={index} node={fileData.node} pathArray={fileData.pathArray} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            Không tìm thấy tài liệu nào trong chuyên mục này.
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-16">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 transition"
            >
              &lsaquo;
            </button>
            
            {/* Simple pagination numbers */}
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              // Show pages around current
              let pageNum = currentPage;
              if (currentPage < 3) pageNum = i + 1;
              else if (currentPage > totalPages - 2) pageNum = totalPages - 4 + i;
              else pageNum = currentPage - 2 + i;
              
              if (pageNum > 0 && pageNum <= totalPages) {
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition ${
                      currentPage === pageNum 
                        ? 'bg-blue-700 text-white shadow-md' 
                        : 'border border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              }
              return null;
            })}

            {totalPages > 5 && currentPage < totalPages - 2 && (
              <>
                <span className="text-gray-400">...</span>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition"
                >
                  {totalPages}
                </button>
              </>
            )}

            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 transition"
            >
              &rsaquo;
            </button>
          </div>
        )}



      </section>
    </div>
  );
}

export default Documents;
