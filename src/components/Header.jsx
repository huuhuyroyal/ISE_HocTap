import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-sky-500 to-cyan-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 md:py-2">
        <div className="flex justify-between items-center">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-3xl font-bold hover:opacity-80 transition"
            >
              <img
                src="/[_] biểu trưng final.png"
                alt="ISE Logo"
                className="h-23 md:h-20 w-auto drop-shadow-md"
              />
              <div className="flex flex-col pt-1 md:pt-2">
                <h3 className="text-lg font-bold leading-snug">
                  ĐOÀN KHOA KHOA HỌC VÀ KỸ THUẬT THÔNG TIN
                </h3>
                <span className="text-sm mt-1 font-medium">
                  NHIỆM KỲ 2024 - 2027
                </span>
              </div>
            </Link>
          </div>
          <nav className="flex gap-6 items-center text-lg">
            <Link to="/" className="hover:opacity-80 transition font-medium">
              Trang chủ
            </Link>
            <Link
              to="/about"
              className="hover:opacity-80 transition font-medium"
            >
              Giới thiệu
            </Link>
            <Link
              to="/documents"
              className="hover:opacity-80 transition font-medium"
            >
              Tài liệu
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
