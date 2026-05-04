import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#2697D6] to-[#4DBEF8] text-white pt-20 pb-16 px-6 text-center overflow-hidden">
        {/* Container */}
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
          {/* Badge */}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Nền tảng học thuật ISE HỌC TẬP
          </h1>
          <p className="text-base md:text-lg mb-10 text-sky-50 opacity-95 max-w-3xl">
            Nơi hội tụ tri thức, tài liệu và kinh nghiệm thực chiến cho sinh
            viên CNTT. <br />
            Chúng tôi đồng hành cùng bạn xây dựng lộ trình sự nghiệp vững chắc.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Link
              to="/documents"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition w-full sm:w-auto"
            >
              Tài liệu
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-[#F8FAFC] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl font-bold text-gray-800">
              Giá trị cốt lõi của ISE HỌC TẬP
            </h2>
            <div className="w-12 h-1 bg-[#2697D6] mx-auto mt-5 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#E2F3FB] rounded-xl flex justify-center items-center text-[#2697D6] mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">
                Tài liệu học tập
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hệ thống bài giảng, giáo trình được cập nhật liên tục từ các
                nguồn uy tín toàn cầu.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#E2F3FB] rounded-xl flex justify-center items-center text-[#2697D6] mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">
                Lộ trình Code
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hướng dẫn thực hành từ cơ bản đến nâng cao cho các Framework và
                ngôn ngữ phổ biến nhất.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#E2F3FB] rounded-xl flex justify-center items-center text-[#2697D6] mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">
                Cộng đồng ISE
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mạng lưới kết nối sinh viên và giảng viên, cùng nhau giải đáp
                thắc mắc và phát triển.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#E2F3FB] rounded-xl flex justify-center items-center text-[#2697D6] mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">
                Kỹ năng nghề
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Các buổi Workshop kỹ năng mềm, tư vấn hướng nghiệp và chuẩn bị
                CV chuyên nghiệp.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
