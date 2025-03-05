// Danh sách sản phẩm giảm giá (dsSale)
let sale1 = {
    id: 1,
    ten: "Cuộc sống trà xanh của Thái tử điện hạ",
    anh: "../img/Logo/SP1.png",
    phantram: "Hội Viên",
    link: "../html/CuocSongTraXanh.html",
    mota: "Một câu chuyện kỳ bí về Thái tử và cuộc sống của anh ấy trong thế giới trà xanh."
};
let sale2 = {
    id: 2,
    ten: "Khám phá bí ẩn 12 cung hoàng đạo 2025",
    anh: "../img/Logo/sp2.jpg",
    phantram: "Miễn Phí",
    link: "../html/KhamPhaBiAn.html",
    mota: "Bạn đã bao giờ tự hỏi cuộc sống của mình sẽ thay đổi như thế nào trong năm tới? "
};
let sale3 = {
    id: 3,
    ten: "Yêu tinh trong lòng anh năm 2025",
    anh: "../img/Logo/sp4.png",
    phantram: "Miễn Phí",
    link: "../html/yeutinh.html",
    mota: "Lần đầu gặp mặt, cô - sếp tổng của một công ty giải trí, đã trở thành kẻ tình nghi bị anh truy bắt. Vì gương mặt của anh quá đỗi xuất chúng nên cô đã nảy lên ý nghĩ phải “hốt” anh về! Làm cây hái ra tiền!"
};
let sale4 = {
    id: 4,
    ten: "Triết lý cuộc sống, lăng kính cuộc đời qua những vần thơ",
    anh: "../img/Logo/sp4.jpg",
    phantram: "Hội Viên",
    link: "../html/Trietlyscs.html",
    mota: "Cuộc sống muôn màu muôn vẻ, ta luôn có thể tìm thấy những bình yên sau giông bão, những bờ vai nhẹ nhàng chở che trước những khó khăn...."
};
let sale5 = {
    id: 5,
    ten: "Rẽ dòng đời chọn lấy một người thương",
    anh: "../img/Logo/sp5.png",
    phantram: "Hội Viên",
    link: "../html/dongdoi.html",
    mota: "Cuộc đời luôn có những mối nhân duyên rất lạ, nhưng người ta chấp nhận ở bên nhau không phải vì để trả nợ mà là để cùng nhau đi tiếp những con đường chông gai ở phía trước kia."
};
let sale6 = {
    id: 6,
    ten: "Đừng vì cô đơn mà nắm vội một bàn tay",
    anh: "../img/Logo/sp7.jpg",
    phantram: "Miễn Phí",
    link: "../html/codonnambantay.html",
    mota: "Ai rồi cũng đi qua những tháng ngày như thế, một mình với nỗi cô đơn,Đó là khi dù trong căn phòng tĩnh lặng,chợt cảm thấy bản thân chẳng biết nên đi đâu hay gặp ai."
};

// Tạo danh sách sản phẩm giảm giá
let dsSale = [sale1, sale2, sale3, sale4, sale5, sale6];

// Danh sách sản phẩm bán chạy (dsbc)
let bc1 = {
    id: 7,
    ten: "Khủng hoảng danh tính - Thử thách của giới trẻ",
    anh: "../img/Logo/sp8.jpg",
    phantram: "Miễn Phí",
    link: "../html/KhungHoangDanhtinh.html",
    mota: "Cuốn sách Khủng hoảng danh tính - Thách thức của giới trẻ đi sâu vào phân tích một trong những vấn đề nổi cộm và phức tạp nhất mà giới trẻ hiện nay đang phải đối mặt"
};
let bc2 = {
    id: 8,
    ten: "Muôn kiếp nhân sinh năm 2025 Trung Quốc",
    anh: "../img/Logo/sp9.jpg",
    phantram: "Miễn Phí",
    link: "../html/MuonKipNhanSinh.html",
    mota: "Hiếm có cuốn sách nào ngay từ khi ra mắt đã tạo nên hiện tượng văn hóa đọc và sau nửa năm đã trở thành cuốn sách bán chạy nhất năm 2020 tại Việt Nam như Muôn Kiếp Nhân Sinh"
};
let bc3 = {
    id: 9,
    ten: "Nhân cách nguy hiểm năm 2025 Trung Quốc                                ",
    anh: "../img/Logo/sp10.jpg",
    phantram: "Miễn Phí",
    link: "../html/NhanCachNguyHiem.html",
    mota: "Khuyên tai đẹp không? Thật ra lâu lắm rồi tôi không đeo thứ này, có phải thiếu niên mười tám tuổi nổi loạn nữa đâu. Tôi đeo nó cũng vì cậu đấy"
};
let bc4 = {
    id: 10,
    ten: "Siêu cấp cưng chiều - Tập 2 Trung Quốc",
    anh: "../img/Logo/sp11.jpg",
    phantram: "Miễn Phí",
    link: "../html/SieuCapCungChieu.html",
    mota: "Lê Tiếu, cô con gái cưng của nhà họ Lê.Thương Úc, ông trùm thần bí của thế giới ngầm ở Nam Dương.Một người bị từ hôn, người còn lại là anh trai của kẻ đã từ hôn."
};
let bc5 = {
    id: 11,
    ten: "Cổ vật huyền bí - Những lời nguyền bí ẩn vượt thời gian",
    anh: "../img/Logo/sp12.jpg",
    phantram: "Miễn Phí",
    link: "../html/CoVatHuyenBi.html",
    mota: "Cổ vật huyền bí - Những lời nguyền bí ẩn vượt thời gian là hành trình hấp dẫn đưa bạn khám phá những câu chuyện ly kỳ và đầy bí ẩn về các cổ vật đã in dấu trong lịch sử. "
};
let bc6 = {
    id: 12,
    ten: "Những thuyền trưởng can đảm Tiểu thuyết Việt - Anh",
    anh: "../img/Logo/sp13.jpg",
    phantram: "Miễn Phí",
    link: "../html/NhungThuyenTruongCamDam.html",
    mota: "Lược điện massage da đầu giúp thư giãn, giảm căng thẳng và cải thiện sức khỏe."
};

// Tạo danh sách sản phẩm bán chạy
let dsbc = [bc1, bc2, bc3, bc4, bc5, bc6];
// Danh sách sản phẩm sách bán chạy (dsBestSelling)
let bestSelling1 = {
    id: 13,
    ten: " Cánh buồm đỏ thắm - Alexander Grin",
    anh: "../img/Logo/sp14.jpg",
    phantram: "Hội Viên",
    link: "../html/CanhBuomDoTham.html",
    mota: "Một hôm, ông già Ê-giơn đã kể cho cô bé A-xôn câu chuyện về chàng hoàng tử lái con tàu có cánh buồm đỏ thắm đến đón ý trung nhân. A- xôn đã sống qua tuổi thơ với khát vọng chờ mong cánh buồm đỏ thắm"
};
let bestSelling2 = {
    id: 14,
    ten: "Trường ca Con lạc cháu hồng trên đỉnh Papông",
    anh: "../img/Logo/sp15.jpg",
    phantram: "Miễn Phí",
    link: "../html/TruongCaConLac.html",
    mota: "Trường ca gồm năm chương. Trường ca như lời chia sẻ của anh với các đồng đội và với chúng ta để cùng ôn lại kỷ niệm xúc động đến nao lòng."
};
let bestSelling3 = {
    id: 15,
    ten: "Tuyển tập những bài thơ hay nhất của thi sĩ Thế Lữ",
    anh: "../img/Logo/sp16.jpg",
    phantram: "Miễn Phí",
    link: "../html/ThoHayTheLu.html",
    mota: "Thi sĩ Thế Lữ (6/10/1907 - 3/6/1989) có tên thật là Nguyễn Đình Lễ (sau đổi là Nguyễn Thứ Lễ), là thi sĩ tiêu biểu cho hiện tượng “kép ba”.."
};
let bestSelling4 = {
    id: 16,
    ten: "Tuyển tập những bài thơ trữ tình của nhà thơ Hàn Mặc Tử",
    anh: "../img/Logo/sp17.jpg",
    phantram: "Hội Viên",
    link: "../html/ThoHanMacTu.html",
    mota: "Nhà thơ Hàn Mặc Tử có tên khai sinh là Nguyễn Trọng Trí, ông sinh ngày 22/9/1912 tại ngôi làng Lệ Mỹ bên dòng sông Nhật Lệ (nay thuộc thành phố Đồng Hới, tỉnh Quảng Bình)."
};

// Tạo danh sách sách bán chạy
let dsBestSelling = [bestSelling1, bestSelling2, bestSelling3, bestSelling4];

// Danh sách sản phẩm mới nhất (dsNewProducts)
let newProduct1 = {
    id: 17,
    ten: "Thuyền trưởng Blood - Rafael Sabatini",
    anh: "../img/Logo/sp19.jpg",
    phantram: "Hội Viên",
    link: "../html/Thuyetruongblood.html",
    mota: "Peter Blood đang có cuộc sống an nhàn với nghề bác sĩ ở một vùng quê nước Anh thì bị vướng vào rắc rối trong một lần ra tay chữa bệnh cứu người, rồi anh bị kết án oan"
};
let newProduct2 = {
    id: 18,
    ten: "Bông hồng trên ngọn đồi xanh - Louisa May Alcott",
    anh: "../img/Logo/sp20.jpg",
    phantram: "Hội Viên",
    link: "../html/BongHongTrenNgonDoi.html",
    mota: "“Nếu các cô bé như cháu học được vẻ đẹp thực sự là gì, không cố bó chặt cơ thể, nhịn đói hay tẩy trắng làn da của mình, cháu sẽ tiết kiệm được cả đống thời gian, tiền bạc, và không cần phải chịu nhiều đau đớn đến thế."
};
let newProduct3 = {
    id: 19,
    ten: "Tình sử Lorna Doone - Tập 1 (R. D. Blackmore)",
    anh: "../img/Logo/sp21.jpg",
    phantram: "Hội Viên",
    link: "../html/Tininhsuloma.html",
    mota: "Là một kiệt tác văn chương bất hủ, kể về mối tình lãng mạn diễn ra trong bối cảnh xã hội đầy hỗn loạn và biến động của nước Anh thế kỷ XVII ..."
};
let newProduct4 = {
    id: 20,
    ten: "Kẹp hạt dẻ và vua chuột - E. T. A. Hoffmann",
    anh: "../img/Logo/sp22.jpg",
    phantram: "Hội Viên",
    link: "../html/kephatde.html",
    mota: "Kẹp Hạt Dẻ và Vua Chuột là tác phẩm được viết bởi nhà văn, nhạc sĩ và họa sĩ E. T. A. Hoffmann. Câu chuyện mở đầu vào một đêm Giáng sinh, phòng khách của gia đình bác sĩ Stahlbaum"
};

// Tạo danh sách sản phẩm mới nhất
let dsNewProducts = [newProduct1, newProduct2, newProduct3, newProduct4];
