

(function ($) {
    const accessoriesLightsData = [
        {
            id: 1,
            title: 'Đèn xe Hiệu Spyder®',
            imgSrc: 'assets/images/accessories/lights/1.jpg',
            description: "Cải thiện tầm nhìn của bạn và sự xuất hiện của xe của bạn với các cụm đèn pha. Đèn pha chùm máy chiếu sẽ tạo ra chùm ánh sáng sắc nét hơn, tập trung hơn để lái xe an toàn hơn vào ban đêm, và vỏ đèn pha tùy chỉnh sẽ mang đến cho chuyến đi của bạn một diện mạo độc đáo, độc đáo.",
            featured: '<p>1.Cung cấp ánh sáng vượt trội cho lái xe không gặp rắc rối của bạn <br/>Chùm sáng tốt hơn, tập trung hơn sẽ tăng cường sự an toàn của bạn và đảm bảo trải nghiệm lái xe dễ chịu và thoải mái. </p><p>2.Phong cách độc quyền, tùy chỉnh khiến bạn nổi bật <br/>Ánh sáng chùm máy chiếu nhỏ hơn cung cấp nhiều không gian hơn cho thiết kế tuyệt đẹp bên trong vỏ và diện mạo đặc biệt của mặt trước của bạn. </p><p>3.Được thiết kế để cung cấp cài đặt không gặp sự cố <br/>Được thiết kế để thay thế chính xác cho các đơn vị nhà máy của bạn, những đèn này đảm bảo lắp đặt dễ dàng với thời gian và công sức tối thiểu. </p><p>4.Đảm bảo chất lượng cao và tuổi thọ cao <br/>Được kiểm tra kỹ lưỡng để cung cấp hoạt động trơn tru </p>'
        },
        {
            id: 2,
            title: 'Đèn xe Hiệu Spec-D®',
            imgSrc: 'assets/images/accessories/lights/2.jpg',
            description: 'Cải thiện tầm nhìn của bạn vào ban đêm và trong thời tiết khắc nghiệt và nâng cấp ngoại hình xe của bạn với các cụm đèn pha. Đèn pha chùm máy chiếu sẽ tạo ra chùm ánh sáng sắc nét hơn, tập trung hơn để lái xe an toàn hơn, và vỏ đèn pha tùy chỉnh sẽ mang lại cho chiếc xe hoặc xe tải của bạn một cái nhìn độc đáo, khác biệt',
            featured: '<p>1. Sản lượng ánh sáng cao cho tầm nhìn tối đa của bạn <br/>Các ống kính máy chiếu cung cấp cho bạn lượng ánh sáng mạnh hơn và tập trung hơn so với đèn pha thông thường. </p><p>2.Phong cách độc quyền, tùy chỉnh khiến bạn nổi bật <br/>Ánh sáng chùm máy chiếu nhỏ hơn cung cấp nhiều không gian hơn cho thiết kế tuyệt đẹp bên trong vỏ và diện mạo đặc biệt của mặt trước của bạn. </p><p>3.Cung cấp ánh sáng vượt trội cho lái xe <br/>Chùm tập trung hơn tăng cường an toàn của bạn và đảm bảo trải nghiệm lái xe dễ chịu và thoải mái. </p><p>4.Được thiết kế như một sự thay thế trực tiếp <br/>Được tạo ra để thay thế hoàn hảo cho đèn OE của bạn, chúng cài đặt giống như các đơn vị sản xuất.</p><p>5.Đảm bảo chất lượng cao và tuổi thọ cao </p>'
        },
        {
            id: 3,
            title: 'Đèn xe Hiệu Lumen®',
            imgSrc: 'assets/images/accessories/lights/3.jpg',
            description: 'Cho dù bạn chỉ muốn cải thiện tầm nhìn hay nâng cấp ngoại hình xe của bạn, Lumen làm cho nó dễ dàng và giá cả phải chăng với các cụm đèn pha này. Donith lái xe với đèn pha mờ mờ và nguy hiểm hoặc thay thế OEM nhàm chán và đắt tiền, khi bạn có thể cải thiện ánh sáng và phong cách tùy chỉnh mà dễ cài đặt và dễ dàng vào ví của bạn.',
            featured: '<p>1.Thiết kế ánh sáng tiên tiến để cải thiện tầm nhìn <br/>Một sự kết hợp hoàn hảo của công nghệ tinh vi và thiết kế ánh sáng tiên tiến để chiếu sáng hiệu quả con đường phía trước trong thời gian ban đêm. </p><p>2.Được kiểm tra kỹ lưỡng để cung cấp nhiều năm hiệu suất đáng tin cậy <br/>Trải qua thử nghiệm nghiêm ngặt để đảm bảo sức đề kháng đặc biệt đối với các yếu tố và cung cấp dịch vụ đáng tin cậy bất kể điều kiện thời tiết.</p> <p>3.Được thiết kế để cung cấp cài đặt không gặp sự cố <br/>Được thiết kế để thay thế chính xác cho các đơn vị nhà máy của bạn, những đèn này đảm bảo lắp đặt dễ dàng với thời gian và công sức tối thiểu. </p><p>4.Được cung cấp ở một mức giá thân thiện với ngân sách <br/>Giá cả cạnh tranh với các bộ phận OEM. Bạn trả ít tiền hơn cho sự xuất hiện độc quyền và hiệu suất tốt hơn. </p>'
        },
        {
            id: 4,
            title: 'Đèn xe Hiệu Recon®',
            imgSrc: 'assets/images/accessories/lights/4.jpg',
            description: 'Cho dù bạn chỉ muốn cải thiện tầm nhìn hay nâng cấp ngoại hình xe của bạn, Lumen làm cho nó dễ dàng và giá cả phải chăng với các cụm đèn pha này. Donith lái xe với đèn pha mờ mờ và nguy hiểm hoặc thay thế OEM nhàm chán và đắt tiền, khi bạn có thể cải thiện ánh sáng và phong cách tùy chỉnh mà dễ cài đặt và dễ dàng vào ví của bạn.',
            featured: '<p>- Tốt hơn, chùm ánh sáng tập trung hơn để lái xe an toàn hơn </p><p>- Được chế tác từ những vật liệu chất lượng cao nhất </p><p>- Cung cấp dịch vụ đáng tin cậy trong nhiều năm tới </p><p>- Cài đặt plug-n-play mà không cần sửa đổi gì </p>'
        },
        {
            id: 5,
            title: 'Đèn xe Hiệu Morimoto®',
            imgSrc: 'assets/images/accessories/lights/5.jpg',
            description: 'Thắp sáng màn đêm và khiến chiếc xe của bạn trở nên ghen tị với những người nhìn thấy bạn với những chiếc đèn pha đáng kinh ngạc này của Morimoto. Tự hào với thiết kế tiên tiến, đảm bảo độ bền vô song và tạo ra hiệu suất ấn tượng, những chiếc đèn này sẽ đáp ứng mọi yêu cầu của bạn và vượt qua mọi mong đợi của bạn về chất lượng, hiệu quả và dịch vụ. Họ sẽ tăng trải nghiệm lái xe của bạn và làm cho bạn nổi bật.',
            featured: '<p>1.Nổi tiếng với một cái nhìn ngoạn mục và thiết kế phức tạp <br/>Đèn sẽ giúp tùy chỉnh bên ngoài chiếc xe của bạn và nâng phong cách của nó lên một tầm cao mới, khiến đầu xe quay đầu khi bạn lái xe. </p><p>2.Sẽ mở rộng khả năng chiếu sáng của xe bạn <br/>Được thiết kế với hiệu suất cao trong tâm trí, đèn pha tạo ra ánh sáng rực rỡ, nhất quán và đảm bảo lượng ánh sáng cao. </p><p>3.Tự hào về một công trình bền, chịu thời tiết <br/>Khả năng chống rung và mảnh vỡ cao và sẵn sàng chịu đựng các yếu tố ngoài trời, đèn sẽ trông nguyên sơ cho đường dài. </p><p>4.Đảm bảo phục vụ hoàn hảo dặm sau khi dặm <br/>Được sản xuất để sản xuất hiệu quả, hoạt động đáng tin cậy và cung cấp dịch vụ trung thành trong nhiều năm sử dụng liên tục. </p>'
        },
        {
            id: 6,
            title: 'Đèn xe Hiệu Morimoto®',
            imgSrc: 'assets/images/accessories/lights/6.jpg',
            description: 'Thắp sáng màn đêm và khiến chiếc xe của bạn trở nên ghen tị với những người nhìn thấy bạn với những chiếc đèn pha đáng kinh ngạc này của Morimoto. Tự hào với thiết kế tiên tiến, đảm bảo độ bền vô song và tạo ra hiệu suất ấn tượng, những chiếc đèn này sẽ đáp ứng mọi yêu cầu của bạn và vượt qua mọi mong đợi của bạn về chất lượng, hiệu quả và dịch vụ. Họ sẽ tăng trải nghiệm lái xe của bạn và làm cho bạn nổi bật.',
            featured: '<p>1.Giao diện tùy chỉnh <br/>Các đèn biến đổi toàn bộ diện mạo của chiếc xe của bạn để trông hấp dẫn và độc đáo hơn. </p><p>2.Đảm bảo chiếu sáng nổi bật của con đường <br/>Cung cấp cho bạn một lượng lớn ánh sáng được xác định rõ có khả năng làm sáng những đêm tối nhất và giúp bạn tự tin hơn sau tay lái. </p><p>3.Đảm bảo tăng tầm nhìn của đường <br/>Halos rực rỡ sẽ làm cho chiếc xe của bạn dễ nhìn thấy hơn đối với những người tham gia giao thông khác và do đó làm tăng sự an toàn khi lái xe của bạn. </p><p>4.Được thiết kế để phù hợp với OEM hoàn hảo <br/>Không có sửa đổi chiếc xe được yêu cầu để cài đặt. Các đèn cung cấp một cái nhìn cài đặt tại nhà máy một khi được gắn. </p>'
        },
        {
            id: 7,
            title: 'Đèn xe Hiệu Winjet®',
            imgSrc: 'assets/images/accessories/lights/7.jpg',
            description: 'Ngừng thở dài mỗi khi bạn nhìn thoáng qua đèn pha cũ bị mờ mà bạn thấy xa hấp dẫn. Đã đến lúc bạn thêm một phong cách ấn tượng cho chiếc xe của mình và khiến nó trông không giống với một cặp đèn pha tùy chỉnh tuyệt vời của Winjet.',
            featured: '<p>1.Giao diện tùy chỉnh <br/>Các đèn biến đổi toàn bộ diện mạo của chiếc xe của bạn để trông hấp dẫn và độc đáo hơn. </p><p>2.Đảm bảo chiếu sáng nổi bật của con đường <br/>Cung cấp cho bạn một lượng lớn ánh sáng được xác định rõ có khả năng làm sáng những đêm tối nhất và giúp bạn tự tin hơn sau tay lái. </p><p>3.Đảm bảo tăng tầm nhìn của đường <br/>Halos rực rỡ sẽ làm cho chiếc xe của bạn dễ nhìn thấy hơn đối với những người tham gia giao thông khác và do đó làm tăng sự an toàn khi lái xe của bạn. </p><p>4.Được thiết kế để phù hợp với OEM hoàn hảo <br/>Không có sửa đổi chiếc xe được yêu cầu để cài đặt. Các đèn cung cấp một cái nhìn cài đặt tại nhà máy một khi được gắn. </p>'
        },
        {
            id: 8,
            title: 'Đèn xe Hiệu IPCW®',
            imgSrc: 'assets/images/accessories/lights/8.jpg',
            description: 'Những đèn pha máy chiếu này là một bản nâng cấp hoàn hảo nếu bạn đang tìm cách làm nổi bật phong cách của mình bằng đèn Halos và đèn LED sáng và cải thiện khả năng hiển thị của xe của bạn đối với những chiếc xe hơi hoặc người đi bộ. Được thiết kế theo kích thước chính xác của các bộ phận ban đầu của bạn, đèn pha IPCW phù hợp với các đường cong của chiếc xe của bạn và cài đặt nhanh chóng và dễ dàng.',
            featured: '<p>1.Đảm bảo chiếu sáng vượt trội cho lái xe <br/>Chùm tia tốt hơn, tập trung hơn giúp tăng cường sự an toàn của bạn và cho phép trải nghiệm lái xe thoải mái và dễ chịu. </p><p>2.Cải thiện tầm nhìn để tự tin hơn sau tay lái <br/>Đèn Halo siêu sáng sẽ cung cấp cho bạn khả năng chiếu sáng tốt hơn và giúp chiếc xe của bạn dễ nhìn hơn trên đường. </p><p>3.Thiết kế hoàn hảo thêm điểm nhấn phong cách cho ngoại thất của bạn <br/>Đèn LED siêu sáng sẽ mang đến cho chiếc ô tô của bạn một vẻ ngoài lôi cuốn không thể phân biệt với các phương tiện khác trên đường. </p><p>4.Chất lượng tuyệt vời, độ bền tuyệt vời và tuổi thọ cao </p><p>5.Được thiết kế như một sự thay thế trực tiếp <br/>Cung cấp một sự phù hợp chính xác, họ sẽ thay thế hoàn hảo đèn OEM của bạn. </p>'
        }
    ];
    
    const accessoriesWheelData = [
        {
            id: 1,
            title: 'XD844 PIKE Titanium ',
            imgSrc: 'assets/images/accessories/wheel/1.jpg',
            description: "Các bánh xe Hiệu XD được chế tạo cho những người cần sự dụng trong đa dạng môi trường. Những bánh xe nhẹ, mạnh mẽ và được thử nghiệm trên đường đua này luôn tìm cách vượt qua thử thách tiếp theo và sẵn sàng phát triển mạnh trên những cung đường gò ghề và hỗn loạn , của những cuộc đua off road . ",
            featured: '<p>-Xây dựng nhẹ nhưng mạnh mẽ </p><p>-Thiết kế độc đáo phản ánh tính cách của bạn </p><p>-Hoàn thiện chống gỉ và chống mài mòn </p><p>-Cuộc đua được thử nghiệm cho hiệu suất không có sự cố </p><p>-Bảo hành 1 năm khi kết thúc * </p><p>-Bảo hành trọn đời về cấu trúc * </p>'
        },
        {
            id: 2,
            title: 'D508 OCTANE DEEP LIP Chrome ',
            imgSrc: 'assets/images/accessories/wheel/2.jpg',
            description: 'Bánh xe Hiệu Fuel Deep Lip là thương hiệu hàng đầu. Chúng có cấu trúc cực kỳ bền và cung cấp khả năng chống ăn mòn và các yếu tố vô song, vì vậy hãy chắc chắn những bánh xe này sẽ chịu được sự khắc nghiệt nhất.',
            featured: '<p>-Được thiết kế để đưa kinh nghiệm lái xe của bạn thêm một bước nữa </p><p>-Thiết kế môi sâu cho xe tải lớn </p><p>-Xây dựng bền bỉ để chịu được các điều kiện địa hình đòi hỏi khắt khe </p><p>-Khả năng chống ăn mòn cao và các yếu tố khác </p>'
        },
        {
            id: 3,
            title: 'Replikaz® - Factory Alloy Wheels ',
            imgSrc: 'assets/images/accessories/wheel/3.jpg',
            description: 'Bánh xe Alternikaz® sẽ giúp tự động khôi phục giao diện của xe bạn về tình trạng ban đầu và đảm bảo lái xe an toàn. Chúng được tạo ra bằng cách sử dụng các công nghệ tiên tiến để cung cấp độ tin cậy vượt trội mà bạn đang tìm kiếm. ',
            featured: '<p>-Được chế tạo theo tiêu chuẩn bánh xe OE </p><p>-Được chế tác từ vật liệu chất lượng cao </p><p>-Được thiết kế bằng cách sử dụng các công nghệ sản xuất sáng tạo </p><p>-Cung cấp tuổi thọ bánh xe lâu dài </p>'
        },
        {
            id: 4,
            title: 'VENOM Matte Black ',
            imgSrc: 'assets/images/accessories/wheel/4.jpg',
            description: 'Nhanh nhẹn và tuyệt đỉnh , bánh xe này được thiết kế để bổ sung cho hiệu suất và tính thẩm mỹ cho chiếc xe của bạn. ',
            featured: '><p>-Máy tính cân bằng cho hoạt động trơn tru, không rung </p><p>-Được xây dựng từ vật liệu đúc cải tiến </p><p>-Thiết kế đa chấu hấp dẫn </p>'
        },
        {
            id: 5,
            title: 'FOX Brushed Gunmetal ',
            imgSrc: 'assets/images/accessories/wheel/5.jpg',
            description: 'Bánh xe điều chỉnh cho những người đủ đẳng cấp để lái một chiếc Porsche. Được thiết kế và chế tạo bởi những người biết bạn muốn gì. Không thể tránh được vẻ ngoài mà bạn mong muốn.',
            featured: '<p>-Xây dựng bền cho việc sử dụng lâu dài </p><p>-Được thiết kế để phù hợp với mũ trung tâm OE, logo, đai ốc và bu lông </p><p>-Thiết kế tùy chỉnh đảm bảo vừa vặn </p>'
        },
        {
            id: 6,
            title: 'S602 AZZMACKA ',
            imgSrc: 'assets/images/accessories/wheelts/6.jpg',
            description: 'Các bánh xe cung cấp sự cân bằng hoàn hảo của trọng lượng và độ bền vật liệu, vì vậy bạn có thể tận dụng tối đa chiếc xe của mình cả trên đường đua và trên đường trường',
            featured: '<p>-Được rèn để tạo ra sức mạnh và độ bền tối đa </p><p>-Xây dựng nhẹ để cải thiện hiệu suất </p><p>-Thiết kế độc đáo giúp bạn nổi bật giữa đám đông </p><p>-Hoàn thiện cao cấp cho một cái nhìn cực ký nổi bật </p>'
        }
    ];
    
    
    const accessoriesSeatData = [
        {
            id: 1,
            title: 'Ghế Bọc da màu đỏ',
            imgSrc: 'assets/images/accessories/wheel/1.jpg',
            description: "Bảo vệ ghế xe được thực hiện bởi cửa hàng Custom Car",
            featured: '<p>Chất lượng vật liệu: Da </p><p>Loại: Phổ thông </p><p>Loại: Áp dụng cho 90% mẫu xe </p><p>Cân nặng: 6.0kg </p><p>Chất liệu ★ - Da nhân tạo, dễ lau chùi, chống thấm nước, chống trơn trượt và chống mài mòn, chống cháy tốt, thích hợp cho 4 mùa </p><p>Cài đặt - Thiết kế lại nhỏ gọn, bao quanh tổng thể, không thay đổi, trượt, Cài đặt dễ dàng và nhanh chóng với các phụ kiện mạnh mẽ, Không yêu cầu kinh nghiệm chuyên nghiệp </p><p>Tính năng - Cổng đẩy túi khí dự trữ, nó sẽ không ảnh hưởng đến việc đẩy túi khí, Phù hợp với gối cổ và gối thắt lưng, nó có thể làm giảm mệt mỏi, đẹp và an toàn của bạn</p>'
        },
        {
            id: 2,
            title: 'Ghế Bọc da màu Đỏ/Đen GUN “A3 Player” ',
            imgSrc: 'assets/images/accessories/wheel/2.jpg',
            description: 'Bảo vệ ghế xe được thực hiện bởi cửa hàng Custom Car',
            featured: '<p>Chất lượng vật liệu: Da </p><p>Loại: Phổ thông </p><p>Loại: Áp dụng cho 90% mẫu xe </p><p>Cân nặng: 8,0kg </p><p>Chất liệu ★ - Da nhân tạo, dễ lau chùi, chống thấm nước, chống trơn trượt và chống mài mòn, chống cháy tốt, thích hợp cho 4 mùa </p><p>Cài đặt - Thiết kế lại nhỏ gọn, bao quanh tổng thể, không thay đổi, trượt, Cài đặt dễ dàng và nhanh chóng với các phụ kiện mạnh mẽ, Không yêu cầu kinh nghiệm chuyên nghiệp </p><p>Tính năng - Cổng đẩy túi khí dự trữ, nó sẽ không ảnh hưởng đến việc đẩy túi khí, Phù hợp với gối cổ và gối thắt lưng, nó có thể làm giảm mệt mỏi, đẹp và an toàn của bạn</p>'
        },
        {
            id: 3,
            title: 'Ghế bọc da Đỏ/Đen  *Diamond* Luxury',
            imgSrc: 'assets/images/accessories/wheel/3.jpg',
            description: 'Bảo vệ ghế xe được thực hiện bởi cửa hàng xe hơi tùy chỉnh',
            featured: '<p>hất lượng vật liệu: Da </p><p>Loại: Phổ thông </p><p>Loại: Áp dụng cho 90% mẫu xe </p><p>Cân nặng: 8,0kg </p><p>Chất liệu ★ - Da nhân tạo, dễ lau chùi, chống thấm nước, chống trơn trượt và chống mài mòn, chống cháy tốt, thích hợp cho 4 mùa </p><p>Cài đặt - Thiết kế lại nhỏ gọn, bao quanh tổng thể, không thay đổi, trượt, Cài đặt dễ dàng và nhanh chóng với các phụ kiện mạnh mẽ, Không yêu cầu kinh nghiệm chuyên nghiệp </p><p>Tính năng - Cổng đẩy túi khí dự trữ, nó sẽ không ảnh hưởng đến việc đẩy túi khí, Phù hợp với gối cổ và gối thắt lưng, nó có thể làm giảm mệt mỏi, đẹp và an toàn của bạn</p>'
        },
        {
            id: 4,
            title: 'Coverking® - Vỏ bọc ghế của Rhinohide ™',
            imgSrc: 'assets/images/accessories/wheel/4.jpg',
            description: 'Vỏ bọc ghế tùy chỉnh của Rhinohide ™ bởi Coverking®. Được làm từ nhựa PVC, vỏ bọc ghế tùy chỉnh này là loại Coverking cứng nhất từng được chế tạo. Với vẻ ngoài và kết cấu bằng da, vỏ bọc ghế tùy chỉnh của Rhinohide trông bóng bẩy và mượt mà đến kinh ngạc. Kết thúc sắc sảo của nó được khen ngợi bởi sự khéo léo tinh tế và khâu cao cấp của từng đường may. Một bộ cài đặt được bao gồm, miễn phí, với những chỗ ngồi này',
            featured: '<p>1.Vải cao cấp<br/>Được làm từ polyvinyl clorua bền (PVC) có thêm lớp lót polyester. Bao gồm một lớp bọt dày phía sau để thêm thoải mái.</p><p>2.Các mẫu tùy chỉnh thực sự<br/>Vỏ được quét kỹ thuật số bằng thiết bị hình ảnh 3D để tạo ra sự phù hợp tùy chỉnh thực sự.</p><p>3.Được thiết kế để giữ lại tất cả các chức năng chỗ ngồi<br/>Bọc ghế mang lại sự thoải mái tối đa và giữ cho các tính năng của ghế xe, như túi khí, dây an toàn và thậm chí cả massage điện, đầy đủ chức năng.</p><p>4.Tùy chỉnh phù hợp<br/>Bọc ghế được tùy chỉnh sản xuất theo đặc điểm kỹ thuật chính xác của chiếc xe của bạn và rất dễ trượt.</p><p>5.Dễ cài đặt<br/>Dễ dàng cài đặt trong vòng chưa đầy 30 phút.</p><p>6.Sản xuất tại Mỹ<br/>Coverking xây dựng các bọc ghế tùy chỉnh Rhinohide tại Hoa Kỳ.</p><p>7.Bộ cài đặt chỗ ngồi tùy chỉnh<br/>Bộ cài đặt này được bao gồm, miễn phí, với một bộ bọc ghế. Nó có một công cụ cài đặt, kính an toàn và găng tay bảo vệ để cài đặt dễ dàng và an toàn.</p><p>8.Tấm kéo để chống trượt<br/>Giữ cho nắp ghế của bạn được neo vào vị trí trong quá trình sử dụng với các miếng kéo cao cấp được cung cấp trong bộ sản phẩm.</p>'
        },
        {
            id: 5,
            title: 'Ghế bọc  Fia® - LeatherLite ™',
            imgSrc: 'assets/images/accessories/wheel/5.jpg',
            description: 'Bao bọc ghế sê-ri LeatherLite ™ của Fia®. Cảm ứng mềm mô phỏng da bọc ghế xe tải tùy chỉnh. Thiết kế tiên tiến tạo ra một nội thất tùy chỉnh hiện đại năng động. Được thiết kế để đáp ứng hoặc vượt quá tiêu chuẩn manufacterer xe.',
            featured: '<p>Ghế bọc Fia® - LeatherLite ™</p><p>Bao bọc ghế sê-ri LeatherLite ™ của Fia®. Cảm ứng mềm mô phỏng da bọc ghế xe tải tùy chỉnh. Thiết kế tiên tiến tạo ra một nội thất tùy chỉnh hiện đại năng động. Được thiết kế để đáp ứng hoặc vượt quá tiêu chuẩn manufacterer xe.</p><p>Đặc trưng:</p><p> - Đệm cho thoải mái thêm</p><p> - Vải chống thấm nước mặt</p><p> - Bảo vệ toàn diện</p><p> - Giả da cấp nhà máy</p><p> - Bao gồm tựa đầu</p><p> - Đạt FMVSS302 (Tiêu chuẩn an toàn xe cơ giới liên bang)</p><p> - Form-fit thiết kế bao quanh; vải căng đa hướng làm khuôn cho ghế</p><p> - Phù hợp chống trượt với hệ thống cài đặt Super-Grip®</p><p> - Dễ dàng bật và tắt với khóa phát hành nhanh</p><p> - Có thể giặt</p><p> - Mở dây an toàn tùy chỉnh hình thành</p><p> - Mở túi khí</p><p>- Không có công cụ cần thiết</p>'
        },
        {
            id: 6,
            title: 'Rixxu ™ - Bọc ghế dòng Primo',
            imgSrc: 'assets/images/accessories/wheel/6.jpg',
            description: 'Ghế bọc  Primo của Rixxu ™. Thoải mái khi lái xe, ngoại hình cao cấp và bảo vệ tối đa - bạn có được tất cả với Vỏ bọc ghế ngồi Rixxu ™ Primo Series. Đệm rộng rãi, hỗ trợ thắt lưng tích hợp, kiểu dáng thông minh, vật liệu chất lượng và phạm vi bảo hiểm đầy đủ nhất được kết hợp trong bọc ghế được thiết kế rõ ràng cho người lái xe đăng nhập nhiều thời gian chỗ ngồi và muốn hỗ trợ thoải mái và bổ sung hấp dẫn vào cabin sẽ bảo vệ tốt hơn chống lại sự cố tràn, vết bẩn, mài mòn và thiệt hại khác có thể gây ra tác hại đắt tiền cho bọc ghế ban đầu. Có sẵn cho cả ghế trước và sau, bọc ghế loạt Primo cài đặt trong vài phút với dây đai đàn hồi và khóa kết nối nhanh, ốc vít Hook và Loop và khóa kéo chắc chắn. Tựa đầu riêng biệt cho phép điều chỉnh tựa đầu dễ dàng cho sự thoải mái và an toàn tối ưu.',
            featured: '<p>Rixxu ™ - Bọc ghế dòng Primo</p><p>Ghế bọc Primo của Rixxu ™. Thoải mái khi lái xe, ngoại hình cao cấp và bảo vệ tối đa - bạn có được tất cả với Vỏ bọc ghế ngồi Rixxu ™ Primo Series. Đệm rộng rãi, hỗ trợ thắt lưng tích hợp, kiểu dáng thông minh, vật liệu chất lượng và phạm vi bảo hiểm đầy đủ nhất được kết hợp trong bọc ghế được thiết kế rõ ràng cho người lái xe đăng nhập nhiều thời gian chỗ ngồi và muốn hỗ trợ thoải mái và bổ sung hấp dẫn vào cabin sẽ bảo vệ tốt hơn chống lại sự cố tràn, vết bẩn, mài mòn và thiệt hại khác có thể gây ra tác hại đắt tiền cho bọc ghế ban đầu. Có sẵn cho cả ghế trước và sau, bọc ghế loạt Primo cài đặt trong vài phút với dây đai đàn hồi và khóa kết nối nhanh, ốc vít Hook và Loop và khóa kéo chắc chắn. Tựa đầu riêng biệt cho phép điều chỉnh tựa đầu dễ dàng cho sự thoải mái và an toàn tối ưu.</p><p>Đặc trưng:</p><p>1. Tùy chỉnh phù hợp và nhìn vào một mức giá thân thiện với ngân sách<br/>Được chế tạo từ các vật liệu cao cấp sử dụng các công nghệ tiết kiệm năng lượng, bọc ghế sẽ cung cấp giao diện tùy chỉnh mà không gây áp lực cho ngân sách của bạn. </p><p>2.Slishlish và bảo vệ cao cấp khỏi hao mòn<br/>Các vỏ bọc sẽ bảo vệ hiệu quả chỗ ngồi của bạn khỏi sự cố tràn, vết bẩn, mài mòn và tia UV có hại, đồng thời thêm phong cách cho nội thất của bạn.</p><p>3. Thiết kế chống trượt để ngăn chặn bất kỳ loại dịch chuyển<br/>Được thiết kế để ở trên ghế của bạn thay vì trượt trên chúng, vỏ sẽ hoạt động và trông đẹp nhất miễn là bạn sở hữu chúng.</p><p>4. Cảm giác sang trọng và cảm giác nâng cao<br/>Khi bạn nâng cấp chỗ ngồi của mình với những vỏ bọc hàng đầu này, bạn sẽ có cảm giác như tiền bản quyền được thả xuống đường trong một cỗ xe.</p><p>5. Bảo vệ đệm cho thoải mái hơn<br/>Được làm với mức độ bảo vệ đệm cao nhất, vỏ bọc sẽ cung cấp cho bạn cả sự thoải mái và sự an tâm vượt trội, tất cả trong một gói.</p><p>6. Dễ dàng cài đặt trong thời gian không phẳng<br/>Được thiết kế đặc biệt cho ứng dụng của bạn, vỏ có thể được cài đặt trên ghế của bạn mà không cần sửa đổi trong thời gian ngắn hơn.</p><p>7. túi lưu trữ tích hợp trên bảng mặt sau<br/>Mỗi nắp ghế đi kèm với túi lưu trữ tích hợp ở phía sau để tăng khả năng lưu trữ nội thất của bạn mà không làm mất đi sự thoải mái.</p><p>8. Vật liệu tùy chỉnh cho sức mạnh tối đa và độ bền<br/>Được chế tạo từ các vật liệu cao cấp, vỏ bọc ghế mang đến sự bảo vệ và chất lượng sản phẩm mà bạn mong đợi.</p><p>9. Phần cứng chất lượng cao để đứng trước thử thách của thời gian<br/>Mỗi vỏ bọc ghế được bảo mật với phần cứng chất lượng hàng đầu được thiết kế để chịu đựng việc sử dụng và lạm dụng hàng ngày, và phục vụ bạn trong nhiều năm tới.</p><p>10.Built để duy trì chức năng của ghế của bạn<br/>Bọc ghế mang lại sự thoải mái tối đa và giữ cho các tính năng của ghế xe, như túi khí, dây an toàn, điều chỉnh ghế và thậm chí massage điện, đầy đủ chức năng.</p>'
        }
    ];
    
    const accessoriesSteeringWheelData = [
        {
            id: 1,
            title: 'Vô lăng Hiệu Porsche ',
            imgSrc: 'assets/images/accessories/steering_wheel/1.jpg',
            description: "Da đen và da lộn màu đỏ nổi bật. Một logo màu vàng ở trung tâm của nút sừng được bao quanh bởi một miếng đen bóng và tên laser ở phía dưới đã nói lên vẻ hoàn chỉnh.",
            featured: '<p>Mô hình bu lông: 6 </p><p>Đường kính bánh xe: 13,75 "/ 350mm </p><p>Độ sâu đĩa: 1,50 "/ 38mm </p><p>Chất liệu Grip: Da / Da lộn </p><p>Màu bám: Đen </p><p>Màu Spoke: Đen </p><p>Hình dạng: Tròn </p><p>Phần kẹp: 33mm x 28mm </p><p>Số lượng phát sinh: 3 </p><p>Đặc trưng: </p><p>- Phong cách: Điều chỉnh </p><p>- Vít: mạ crôm </p><p>- Chất liệu: Da </p><p>- Spoke Kết thúc: Đen và Đỏ </p><p>- Ring / Pad: Matt và đen bóng </p>'
        },
        {
            id: 2,
            title: 'Vô lăng Hiệu Audi GT ',
            imgSrc: 'assets/images/accessories/steering_wheel/2.jpg',
            description: 'Bánh xe hình chữ D này có da đục lỗ ở vị trí tay nắm tay cầm để tạo sự thoải mái tối đa. Các lớp da trên và dưới viền hạt làm tăng thêm sự sang trọng tương phản. Các tính năng thiết kế rất tiện dụng làm cho bánh xe này là một niềm vui để giữ trong bất kỳ vị trí lái xe. ',
            featured: '<p>Đường kính bánh xe: 13,78 "/ 350mm </p><p>Độ sâu bát đĩa: 3,75 "/ 95mm </p><p>Chất liệu Grip: Da </p><p>Màu bám: Đen </p><p>Màu Spoke: Đen </p><p>Hình dạng: D-Shape </p><p>Số lượng phát sinh: 3 </p><p>Mô hình bu lông: 5 </p><p>Đặc trưng: </p><p>- Kẹp da đục lỗ </p><p>- Trận đấu hoàn hảo cho chuyến đi của bạn </p><p>- Được thiết kế để phù hợp với tiêu chuẩn chất lượng nghiêm ngặt </p>'
        },
        {
            id: 3,
            title: 'Vô Lăng Hiệu Sport Lambighini được làm từ sợi carbon ',
            imgSrc: 'assets/images/accessories/steering_wheel/3.jpg',
            description: 'Bánh xe này có đường khâu màu đen và thanh carbon cộng với thanh tay cầm bằng da. 320mm để thể hiện tay cầm và độ bền. Cho dù bạn có phanh gấp để vượt qua đối thủ của làm cho NRG đổi mới là lựa chọn số một của bạn cho vô lăng. ',
            featured: '<p>Đường kính bánh xe: 12,60 "/ 320mm </p><p>Độ sâu đĩa: phẳng </p><p>Màu bám: Sợi carbon </p><p>Hình dạng: D-Shape </p><p>Số lượng phát sinh: 3 </p><p>Đặc trưng: </p><p>- Được chế tác tinh xảo từ những vật liệu cao cấp </p><p>- Được thiết kế để phù hợp với tiêu chuẩn chất lượng nghiêm ngặt</p> <p>- Chất lượng cao với giá cả phù hợp với ngân sách </p>'
        },
        {
            id: 4,  
            title: 'Vô Lăng Hiệu Merceds Bọc da màu đen ',
            imgSrc: 'assets/images/accessories/steering_wheel/5.jpg',
            description: 'Tay lái có tay cầm bằng sợi carbon và phần còn lại được bọc da cao cấp. Tay lái NRG chắc chắn sẽ cung cấp cho chiếc xe của bạn thêm khả năng kiểm soát và kiểu dáng.',
            featured: '<p>Đường kính bánh xe: 13,78 "/ 350mm </p><p>Độ sâu đĩa: phẳng </p><p>Màu bám: Sợi carbon </p><p>Hình dạng: Tròn </p><p>Số lượng phát sinh: 3 </p><p>Đặc trưng: </p><p>-Được chế tác tinh xảo từ những vật liệu cao cấp </p><p>-Được thiết kế để phù hợp với tiêu chuẩn chất lượng nghiêm ngặt </p><p>-Chất lượng cao với giá cả phù hợp với ngân sách </p>'
        },
        {
            id: 5,
            title: 'Vô lăng Hiệu Volkswagen',
            imgSrc: 'assets/images/accessories/steering_wheel/6.jpg',
            description: 'Sản phẩm này được làm bằng vật liệu chất lượng cao để phục vụ bạn trong nhiều năm tới. Được thiết kế sử dụng công nghệ tiên tiến và trong tâm trí khách hàng. Nó sẽ đáp ứng nhu cầu của bạn và cung cấp chất lượng tuyệt vời với chi phí phải chăng. ',
            featured: '<p>Đường kính dọc: 13 "/ 330mm </p><p>Đường kính ngang: 12,60 "/ 320mm </p><p>Độ sâu đĩa: phẳng Màu bám: </p><p>Đen Hình dạng: D-Shape </p><p>Số lượng phát sinh: 3 </p><p>Đặc trưng: </p><p>- Vật liệu cao cấp Khâu đen </p><p>- -Đường kính ngang 320mm / 12,6 " </p><p>- Đường kính dọc 330mm / 13 " Nói 5 mm Đáy phẳng </p>'
        },
        {
            id: 6,
            title: 'Vô lăng Hiệu BMW Pilota được nâng cấp với chất liệu thép siêu bền',
            imgSrc: 'assets/images/accessories/steering_wheel/6.jpg',
            description: 'Sự lựa chọn hoàn hảo cho phong cách thêm vào bên trong chiếc xe của bạn. Được làm từ da cao cấp và vật liệu bền. Các đơn vị này cung cấp tốt nhất về cả chất lượng và hiệu suất. Tay lái NRG chắc chắn sẽ mang đến cho chiếc xe của bạn thêm khả năng kiểm soát và kiểu dáng.',
            featured: '<p>-Đường kính bánh xe: 12,60 "/ 320mm </p><p>-Độ sâu đĩa: phẳng </p><p>-Chất liệu Grip: Da </p><p>-Màu bám: Đen </p><p>-Hình dạng: Tròn </p><p>-Số lượng phát sinh: 3 </p><p>Đặc trưng: </p><p>-Được chế tác tinh xảo từ những vật liệu cao cấp </p><p>-Được thiết kế để phù hợp với tiêu chuẩn chất lượng nghiêm ngặt </p><p>-Chất lượng cao với giá cả phù hợp với ngân sách </p>'
        },
        {
            id: 7,
            title: 'Vô Lăng Hiệu Audi Hybrid S ',
            imgSrc: 'assets/images/accessories/steering_wheel/6.jpg',
            description: 'Tay lái phẳng được làm bằng công nghệ composite độc quyền mới (sợi carbon và Dyneema®) có khả năng chịu lực cao hơn 300% so với vô lăng carbon và nhẹ hơn 20%. Được cung cấp với nút còi, chuẩn bị cài đặt bốn đáy (không bao gồm). Được hiện thực hóa và phát triển với sự hợp tác của Sébastien Ogier, nhà vô địch thế giới WRC với VW Motorsport. Da lộn màu đen. ',
            featured: '<p>Đường kính bánh xe: 12,60 "/ 320mm </p><p>Độ sâu đĩa: phẳng </p><p>Màu bám: Đen </p><p>Số lượng phát sinh: 3 </p><p>Đặc trưng: </p><p>- Được chế tác tinh xảo từ những vật liệu cao cấp </p><p>- Được thiết kế để phù hợp với tiêu chuẩn chất lượng nghiêm ngặt </p><p>- Chất lượng cao với giá cả phù hợp với ngân sách </p>'
        }
    ];
    $('.accessoriesdetail-lights .accessoriesdetail-slide').on('click', '.item', function (event) {
        const accessoriesId = $(this).data("id");
        const accessoriesTitleEl = $('#accessoriesTitle');
        const accessoriesDescriptionEl = $('#accessoriesDescription');
        const accessoriesFeaturedEl = $('#accessoriessFeatured');
        const accessoriesImageSrcEl = $('#accessoriesImageSrc');
        const accessoriesActive = accessoriesLightsData.find(item => item.id == accessoriesId);
        // console.log(accessoriesData.find(item => item.id == accessoriesId));
        accessoriesTitleEl.html(accessoriesActive.title);
        accessoriesDescriptionEl.html(accessoriesActive.description);
        accessoriesFeaturedEl.html(accessoriesActive.featured);
        accessoriesImageSrcEl.attr('src', accessoriesActive.imgSrc);
    })
    
    $('.accessoriesdetail-wheel .accessoriesdetail-slide').on('click', '.item', function (event) {
        const accessoriesId = $(this).data("id");
        const accessoriesTitleEl = $('#accessoriesTitle');
        const accessoriesDescriptionEl = $('#accessoriesDescription');
        const accessoriesImageSrcEl = $('#accessoriesImageSrc');
        const accessoriesActive = accessoriesWheelData.find(item => item.id == accessoriesId);
        // console.log(accessoriesData.find(item => item.id == accessoriesId));
        accessoriesTitleEl.html(accessoriesActive.title);
        accessoriesDescriptionEl.html(accessoriesActive.description);
        accessoriesImageSrcEl.attr('src', accessoriesActive.imgSrc);
    })
    
    $('.accessoriesdetail-seat .accessoriesdetail-slide').on('click', '.item', function (event) {
        const accessoriesId = $(this).data("id");
        const accessoriesTitleEl = $('#accessoriesTitle');
        const accessoriesDescriptionEl = $('#accessoriesDescription');
        const accessoriesImageSrcEl = $('#accessoriesImageSrc');
        const accessoriesActive = accessoriesSeatData.find(item => item.id == accessoriesId);
        // console.log(accessoriesData.find(item => item.id == accessoriesId));
        accessoriesTitleEl.html(accessoriesActive.title);
        accessoriesDescriptionEl.html(accessoriesActive.description);
        accessoriesImageSrcEl.attr('src', accessoriesActive.imgSrc);
    })
    
    $('.accessoriesdetail-steeringwheel .accessoriesdetail-slide').on('click', '.item', function (event) {
        const accessoriesId = $(this).data("id");
        const accessoriesTitleEl = $('#accessoriesTitle');
        const accessoriesDescriptionEl = $('#accessoriesDescription');
        const accessoriesImageSrcEl = $('#accessoriesImageSrc');
        const accessoriesActive = accessoriesSteeringWheelData.find(item => item.id == accessoriesId);
        // console.log(accessoriesData.find(item => item.id == accessoriesId));
        accessoriesTitleEl.html(accessoriesActive.title);
        accessoriesDescriptionEl.html(accessoriesActive.description);
        accessoriesImageSrcEl.attr('src', accessoriesActive.imgSrc);
    })
    function calcTabsContentHeight() {
        const $mainContent = $('.accessoriesdetail-main-content');
        const $tabsContentEl = $('.accessoriesdetail-main-content-featured');
        const $tabsContainerHeight = $mainContent.height() - 88 - 30;
        $tabsContentEl.css("height", $tabsContainerHeight);
    }
    calcTabsContentHeight();
        $(window).on('resize', function(){
            calcTabsContentHeight();
    });
})(this.jQuery);