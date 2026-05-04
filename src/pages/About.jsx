function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-500 to-cyan-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Giới thiệu</h1>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        {/* Website intro */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-4 border-sky-600">
            Giới thiệu về Website Học Tập
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Website học tập là nền tảng tổng hợp các tài liệu, kiến thức và
            nguồn học liệu hữu ích dành cho sinh viên. Website cung cấp đa dạng
            nội dung như đề thi, bài giảng, tài liệu tham khảo và các hướng dẫn
            học tập cho nhiều môn học, giúp sinh viên dễ dàng tiếp cận và nâng
            cao hiệu quả học tập.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Với mục tiêu hỗ trợ sinh viên trong quá trình học tập và rèn luyện,
            website không chỉ đóng vai trò là nơi lưu trữ tài liệu mà còn là
            nguồn tham khảo tin cậy, giúp người học củng cố kiến thức, phát
            triển kỹ năng tự học và chuẩn bị tốt hơn cho các kỳ thi cũng như
            định hướng học tập lâu dài.
          </p>
        </div>

        {/* Faculty Youth Union intro */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-4 border-sky-600">
            Giới thiệu về Đoàn khoa Khoa học và Kỹ thuật Thông tin
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Website được xây dựng và phát triển bởi Đoàn khoa Khoa học và Kỹ
            thuật Thông tin (Đoàn Khoa KH&KTTT), trực thuộc Trường Đại học Công
            nghệ Thông tin, Đại học Quốc gia TP.HCM. Đây là tổ chức chính trị -
            xã hội của đoàn viên, sinh viên trong khoa, đóng vai trò quan trọng
            trong việc tập hợp, đoàn kết và phát huy tinh thần xung kích, sáng
            tạo của sinh viên.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Thông qua dự án này, Đoàn khoa mong muốn góp phần xây dựng môi
            trường học tập tích cực, hỗ trợ sinh viên tiếp cận nguồn tài liệu
            chất lượng, đồng thời thúc đẩy tinh thần chia sẻ, học tập chủ động
            và phát triển toàn diện về tri thức, kỹ năng và phẩm chất.
          </p>
        </div>

        {/* Mission and orientation */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-4 border-sky-600">
            Sứ mệnh và định hướng
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Website hướng đến việc trở thành một nền tảng học tập mở, nơi sinh
            viên có thể tìm kiếm, chia sẻ và trao đổi tài liệu một cách thuận
            tiện. Trong tương lai, hệ thống sẽ tiếp tục được phát triển và mở
            rộng nhằm nâng cao chất lượng nội dung, đa dạng hóa tài liệu và tích
            hợp thêm các công cụ hỗ trợ học tập, đáp ứng nhu cầu ngày càng cao
            của sinh viên.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Thông qua đó, dự án góp phần hỗ trợ đào tạo nguồn nhân lực chất
            lượng cao trong lĩnh vực Công nghệ Thông tin, đồng thời lan tỏa tinh
            thần học tập và cống hiến của thanh niên trong thời đại mới.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
