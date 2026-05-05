import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-semibold text-xs rounded-full mb-6 uppercase tracking-wider">
              ✦ Sứ mệnh tri thức
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Kết nối cộng đồng<br/>
              <span className="text-blue-600">Sinh viên UIT</span>
            </h1>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              ISE Học Tập không chỉ là một kho lưu trữ tài liệu. Chúng tôi kiến tạo một hệ sinh thái học tập hiện đại, nơi kiến thức được chia sẻ tự do và sự hỗ trợ đồng hành là nền tảng cho mọi thành công.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/documents" className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-full transition shadow-lg text-center">
                Khám phá thư viện &rarr;
              </Link>
              <button className="border border-gray-300 hover:border-gray-400 bg-white text-gray-700 font-medium py-3 px-6 rounded-full transition text-center">
                Về chúng tôi
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="w-full h-80 md:h-[450px] bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-3xl relative flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500 opacity-5 blur-2xl rounded-full"></div>
              {/* Placeholder for platform image */}
              <div className="w-4/5 h-12 bg-white/60 backdrop-blur-md rounded-full shadow-lg border border-white flex items-center px-4 gap-3 z-10">
                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                 <div className="w-3 h-3 rounded-full bg-green-400"></div>
                 <div className="flex-1 bg-white/50 h-6 rounded px-2 text-xs text-gray-400 flex items-center">ise-hoc-tap.vercel.app</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giá trị cốt lõi của chúng tôi</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Chúng tôi tập trung vào việc tạo ra giá trị thực cho sinh viên thông qua các tiêu chí cốt lõi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chia sẻ tự do</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Tiếp cận hàng ngàn giáo trình, tiểu luận và đề thi hoàn toàn miễn phí từ cộng đồng sinh viên toàn quốc.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kết nối cộng đồng</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Tạo dựng mạng lưới hỗ trợ học tập giữa các khóa, các ngành và các trường đại học khác nhau.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chất lượng tuyển chọn</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Tài liệu được phân loại và đánh giá bởi chính người dùng, đảm bảo tính hữu ích và chính xác cao.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AcademicHub */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="bg-teal-50 rounded-3xl h-[380px] w-full relative overflow-hidden border border-teal-100 flex justify-center items-center">
               <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-emerald-500/20"></div>
               {/* Decorative image placeholder */}
               <span className="text-teal-500 font-medium z-10">
                <img className="w-full h-full" src="/img1.jpg" alt="Hình ảnh sinh viên UIT Học tập" />
               </span>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Vì sao ISE Học Tập ra đời?</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Xóa bỏ rào cản thông tin</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Chúng tôi tin rằng mọi sinh viên đều có quyền tiếp cận nguồn học liệu chất lượng mà không bị giới hạn bởi điều kiện kinh tế hay địa lý.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Thúc đẩy văn hóa chia sẻ</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Kiến thức chỉ thực sự có giá trị khi nó được lan tỏa. Chúng tôi khuyến khích các bạn trẻ cùng nhau đóng góp và xây dựng kho tàng chung.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Hỗ trợ học thuật bền vững</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Bằng cách cung cấp những tài liệu thực tế từ các khóa trước, chúng tôi giúp các bạn sinh viên mới tự tin hơn trong hành trình đại học.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto bg-gray-900 rounded-3xl p-16 text-center text-white shadow-xl">
          <h2 className="text-4xl font-bold mb-4">Sẵn sàng bắt đầu hành trình mới?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Tham gia vào cộng đồng học thuật lớn nhất Việt Nam ngay hôm nay. Mọi tài liệu bạn cần đều nằm trong tầm tay.
          </p>
          <Link to="/documents" className="inline-block bg-white text-gray-900 font-bold py-3 px-10 rounded-full hover:bg-gray-100 transition shadow-lg">
            Khám phá ngay
          </Link>
        </div>
      </section>

    </div>
  );
}

export default About;
