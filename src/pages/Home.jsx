import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
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

function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const allFiles = flattenFiles(driveData);
  // Get 4 random or newest files, here we just slice first 4
  const latestFiles = allFiles.slice(0, 4);

  const handleSearch = (e) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/documents?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleTrendingClick = (term) => {
    navigate(`/documents?q=${encodeURIComponent(term)}`);
  };

  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-6 text-center overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute top-10 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-8">
          ✦ Kho tàng tri thức sinh viên Việt Nam
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-8 leading-tight tracking-tight">
          Tìm kiếm & Chia sẻ<br/>
          <span className="text-blue-600">Tài liệu Học thuật</span>
        </h1>
        
        <p className="text-base md:text-lg mb-10 text-gray-500 max-w-2xl mx-auto">
          Cộng đồng học thuật lớn nhất dành cho sinh viên. Tiếp cận hàng nghìn đề thi, bài giảng và tài liệu nghiên cứu hoàn toàn miễn phí.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="w-full max-w-3xl relative shadow-lg rounded-full flex bg-white p-2 border border-gray-100">
          <div className="flex-1 flex items-center px-4">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Nhập tên tài liệu, môn học hoặc mã học phần..." 
              className="w-full py-3 px-4 outline-none text-gray-700 bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-medium transition">
            Tìm kiếm
          </button>
        </form>

        {/* Trending */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
          <span>Xu hướng:</span>
          <span onClick={() => handleTrendingClick("CTRR")} className="px-4 py-1.5 border border-gray-200 rounded-full cursor-pointer hover:bg-gray-50 transition">Cấu trúc rời rạc</span>
          <span onClick={() => handleTrendingClick("DSA")} className="px-4 py-1.5 border border-gray-200 rounded-full cursor-pointer hover:bg-gray-50 transition">Cấu trúc dữ liệu</span>
          <span onClick={() => handleTrendingClick("OOP")} className="px-4 py-1.5 border border-gray-200 rounded-full cursor-pointer hover:bg-gray-50 transition">Lập trình HĐT</span>
          <span onClick={() => handleTrendingClick("Nhập Môn Mạng")} className="px-4 py-1.5 border border-gray-200 rounded-full cursor-pointer hover:bg-gray-50 transition">Mạng máy tính</span>
        </div>
      </section>

      {/* Latest Documents Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Tài liệu mới nhất</h2>
              <p className="text-gray-500">Cập nhật những tài liệu vừa được cộng đồng chia sẻ</p>
            </div>
            <Link to="/documents" className="text-blue-600 font-medium hover:text-blue-800 transition flex items-center gap-1">
              Xem tất cả thư viện <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestFiles.map((fileData, index) => (
              <DocumentCard key={index} node={fileData.node} pathArray={fileData.pathArray} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
