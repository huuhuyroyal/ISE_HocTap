import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#1A202C] text-gray-400 pt-6 pb-5  text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-5">
          {/* Logo & Description */}
          <div className="w-full md:w-1/3">
            <div className="flex items-center gap-3 mb-4 text-white">
              <img
                src="/[_] biểu trưng final.png"
                alt="ISE Logo"
                className="h-14 md:h-18 w-auto drop-shadow-md shrink-0"
              />
              <div className="flex flex-col pt-1 md:pt-2">
                <h3 className="text-sm font-bold leading-snug">
                  ĐOÀN KHOA KHOA HỌC VÀ KỸ THUẬT THÔNG TIN
                </h3>
                <span className="text-xs mt-1 font-medium">
                  NHIỆM KỲ 2024 - 2027
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 opacity-90 leading-relaxed text-xs">
              Cẩm nang do Đoàn khoa Khoa học và Kỹ thuật Thông tin thực hiện và
              triển khai, nhằm đồng hành cùng đoàn viên, sinh viên trong hành
              trình rèn luyện, phát triển toàn diện và hội nhập trong thời đại
              mới.
            </p>
          </div>

          {/* Truy cập nhanh */}
          <div className="w-full md:w-1/4 flex md:justify-center">
            <div className="w-full md:w-auto md:pt-3">
              <h4 className="font-bold text-white mb-5 text-base md:pt-0">
                Truy cập nhanh
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="hover:text-white transition">
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition">
                    Giới thiệu
                  </Link>
                </li>
                <li>
                  <Link to="/documents" className="hover:text-white transition">
                    Tài liệu
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Liên hệ */}
          <div className="w-full md:w-1/3 flex md:justify-end">
            <div className="w-full md:w-auto md:pt-3">
              <h4 className="font-bold text-white mb-5 text-base md:pt-0">
                Về chúng tôi
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#2697D6] shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-left">
                    Địa chỉ: Tầng 10, tòa nhà E - trường Đại học Công nghệ Thông
                    tin, ĐHQG-HCM.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-[#2697D6] shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  <a
                    href="https://www.facebook.com/UIT.ISE"
                    target="_blank"
                    className="hover:text-white transition text-left"
                  >
                    www.facebook.com/UIT.ISE
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-[#2697D6] shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:bch.khkttt.uit@gmail.com"
                    className="hover:text-white transition text-left"
                  >
                    bch.khkttt.uit@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs opacity-70">
          © 2026, Website ISE HỌC TẬP - Đoàn khoa Khoa học và Kỹ thuật Thông tin
        </div>
      </div>
    </footer>
  );
}

export default Footer;
