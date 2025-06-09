import React from "react";


class AboutState extends React.Component {
  state = {
    ManageUser: [
      {
        id : "1",
        name: "Vũ Thị Khánh Ly",
        image: require("../../images/VKL.jpg"),
        title: "Leader",
        description:
          "Tôi là một người trẻ mang trong mình niềm đam mê mạnh mẽ với giáo dục  và khát khao trở thành một giáo viên truyền cảm hứng. ",
        more_description :
        "Tôi là Khánh Ly - một sinh viên đang học ngành Giáo dục học của Trường Đại học Khoa học Xã hội và Nhân văn, ĐHQG-HCM, cũng là một người trẻ mang trong mình niềm đam mê mạnh mẽ với giáo dục và khát khao trở thành một giáo viên truyền cảm hứng. Tôi tin rằng giáo dục không chỉ là truyền đạt kiến thức, mà còn là nghệ thuật khơi gợi sự tò mò, tạo động lực và nuôi dưỡng nhân cách học sinh.Trong hành trình phía trước, tôi mong muốn được học hỏi và ứng dụng các phương pháp giảng dạy hiện đại, lấy người học làm trung tâm, kết hợp công nghệ và trải nghiệm thực tiễn để tạo nên môi trường học tập tích cực, gần gũi và đầy cảm hứng. Tôi đặc biệt quan tâm đến việc phát triển kỹ năng mềm, tư duy phản biện và năng lực tự học cho học sinh – những yếu tố quan trọng để các em vững vàng trong một thế giới luôn thay đổi.",
        socials: {
          facebook: "https://www.facebook.com/nguyetly.hoang.16",
          file: "https://lyvtk1112.wixsite.com/portfolio",
        },
        Digital_learning_philosophy:'Với tôi, học tập số là một hành trình mở, nơi người học được trao quyền để chủ động khám phá tri thức theo cách riêng của mình. Công nghệ không thay thế người dạy, mà hỗ trợ họ thiết kế những trải nghiệm học tập sáng tạo, sinh động và hiệu quả hơn. Học tập số giúp xóa nhòa khoảng cách không gian và thời gian, làm cho việc học trở nên linh hoạt, sáng tạo và gần gũi hơn với mỗi cá nhân. Tôi theo đuổi một triết lý học tập số lấy cảm hứng làm nền tảng, lấy sự chủ động làm động lực, và lấy công nghệ làm cầu nối để mở ra những cánh cửa học tập mới. Trong môi trường ấy, người học không chỉ tiếp thu theo cách riêng của mình, mà còn sáng tạo, phản biện và trưởng thành.'
      },
      {
        id : "2",
        name: "Vũ Minh Hằng",
        image: require("../../images/VMH.jpg"),
        title: "Designer",
        description:
          "Đóng góp ý tưởng để sản phẩm hoàn thiện nhất. Hi vọng cô và các bạn sẽ hứng thú với những sản phẩm độc đáo từ nhóm mình nhé!",
        more_description :'',
        socials: {
          facebook:"https://www.facebook.com/shynnsleepy",
          instagram: "",
        },
         Digital_learning_philosophy:''
      },
      { 
        id : "3",
        name: "Đõ Thu Hiền",
        image: require("../../images/DTH.jpg"),
        title: "Voice Talent",
        description:
          "Hiền theo học ngành Giáo dục học với hai chuyên ngành sâu là Chính sách giáo dục và Phát triển chương trình. Trong tương lai, Thu Hiền mong muốn trở thành ",
        more_description :'Thu Hiền là sinh viên Trường Đại học Khoa học Xã hội và Nhân văn, Đại học Quốc gia TP.HCM. Hiền theo học ngành Giáo dục học với hai chuyên ngành sâu là Chính sách giáo dục và Phát triển chương trình. Trong tương lai, Thu Hiền mong muốn trở thành một nhà hoạt động chính sách công và nhà nghiên cứu tập trung vào giảm bất bình đẳng xã hội và thúc đẩy cơ hội tiếp cận giáo dục công bằng cho mọi người học. Đồng thời, Hiền cũng đam mê lĩnh vực phát triển nguồn nhân lực, đặc biệt là tuyển dụng và phát triển con người. Hiền hướng đến việc kết nối giữa giáo dục và phát triển nhân sự thông qua các chính sách và chương trình thực tiễn, nhằm trao quyền cho cá nhân trong cả môi trường học tập và làm việc.',      
        socials: {
          facebook:"https://www.facebook.com/hiendo3011",
          linkedin:"https://www.linkedin.com/in/hi%E1%BB%81n-%C4%91%E1%BB%97-98a31b212/",
        },
         Digital_learning_philosophy:
         'Với mình, chưa bao giờ việc học lại dễ tiếp cận như trong thời đại số. Chỉ cần một thiết bị kết nối internet, mọi nhu cầu học tập từ đời sống thường nhật đến học thuật chuyên sâu đều có thể được đáp ứng. Nhưng cũng trong thời đại này, chưa bao giờ kiến thức lại biến đổi nhanh đến vậy. Điều đúng hôm nay có thể không còn đúng vào ngày mai. Trước thực tế đó, mình tin rằng giáo dục không chỉ là truyền đạt tri thức mà còn là trao quyền học tập suốt đời cho mỗi cá nhân. Trong vai trò là người học và người làm giáo dục, mình tin rằng công nghệ chỉ thực sự có giá trị khi người học biết cách tận dụng nó để tư duy, chọn lọc và tự chủ trong hành trình phát triển của mình. Là sinh viên ngành Giáo dục học với định hướng về chính sách giáo dục và phát triển chương trình, mình mong muốn góp phần xây dựng một nền giáo dục công bằng và không ai bị bỏ lại phía sau. '
      },
      {
        id : "4",
        name: "Huỳnh Thị Hiển",
        image: require("../../images/HTH.jpg"),
        title: "Content Creator",
        description:
          "Với tôi, giáo dục là ngọn lửa thắp sáng tâm hồn, là hành trình khơi dậy đam mê và đồng hành cùng người học để khám phá tiềm năng của chính họ.",
        more_description :'Tôi là Huỳnh Thị Hiển - một sinh viên ngành Giáo dục học, Khoa Giáo dục, Trường Đại học Khoa học Xã hội và Nhân văn - ĐHQG TP.HCM. Với tôi, giáo dục là ngọn lửa thắp sáng tâm hồn, là hành trình khơi dậy đam mê và đồng hành cùng người học để khám phá tiềm năng của chính họ. Tôi mơ ước trở thành một nhà giáo dục sáng tạo, sử dụng công nghệ số để xây dựng những trải nghiệm học tập đầy cảm hứng, nơi mỗi học sinh đều cảm thấy được lắng nghe và thấu hiểu. Định hướng phát triển của bản thân, đó là  kết hợp công nghệ số vào giáo dục, tạo ra những trải nghiệm học tập sinh động. Và những công cụ như AI, nền tảng học trực tuyến và thực tế ảo sẽ giúp học sinh rèn luyện tư duy sáng tạo, khả năng tự học và sự linh hoạt trong một thế giới không ngừng biến chuyển. ',
        socials: {
          facebook: "https://www.facebook.com/huynh.thi.hien.1203",
          instagram: "",
        },
         Digital_learning_philosophy:'Trong thời đại số, học tập không chỉ giới hạn trong sách vở hay lớp học, mà là hành trình khám phá kiến thức mọi lúc, mọi nơi qua các nền tảng trực tuyến, khóa học mở, và cộng đồng học tập toàn cầu. Tôi tin rằng học tập số mang lại cơ hội cá nhân hóa việc học, giúp mỗi người tự định hướng theo đam mê và mục tiêu. Công nghệ như AI, thực tế ảo, hay các diễn đàn trực tuyến không chỉ cung cấp tài nguyên phong phú mà còn khơi dậy sự sáng tạo và tư duy phản biện. Học tập suốt đời là chìa khóa để thích nghi với thế giới thay đổi nhanh chóng, nơi kiến thức mới liên tục xuất hiện. Học tập số là sự kết hợp giữa đam mê và sáng tạo, nơi người học được tự chủ khám phá, đặt câu hỏi và trưởng thành. Tôi tin rằng, bằng cách tận dụng công nghệ, chúng ta có thể thắp lên ngọn lửa học tập suốt đời, biến mỗi ngày thành một cơ hội để khám phá và vươn xa hơn.'
      },
      {
        id : "5",
        name: "Nguyễn Ngọc Minh Thanh",
        image: require("../../images/NNMT.jpg"),
        title: "Content Creator",
        description:
          "Tôi lựa chọn con đường giáo dục bởi niềm tin sâu sắc rằng giáo dục là chìa khóa để tạo ra những thay đổi bền vững và tích cực trong xã hội. ",
        more_description :'Tôi là Minh Thanh – sinh viên ngành Giáo dục học tại Trường Đại học Khoa học Xã hội và Nhân văn ĐHQG TP.HCM. Tôi lựa chọn con đường giáo dục bởi niềm tin sâu sắc rằng giáo dục là chìa khóa để tạo ra những thay đổi bền vững và tích cực trong xã hội. Tôi quan tâm đặc biệt đến các vấn đề về công bằng giáo dục, giáo dục khai phóng và phát triển con người toàn diện.Trong tương lai, tôi mong muốn trở thành một nhà giáo dục nhân văn, biết cách ứng dụng công nghệ để tạo nên môi trường học tập sáng tạo, linh hoạt và bình đẳng. Tôi tin rằng giáo dục trong thời đại số không chỉ là đổi mới công cụ, mà còn là đổi mới cách nhìn về người học. Tôi hy vọng có thể góp phần xây dựng các chính sách giáo dục mở, tạo điều kiện cho mọi người học , đặc biệt là nhóm yếu thế tiếp cận tri thức một cách công bằng. Với tôi, làm giáo dục trong thời đại số là cơ hội để kết nối, trao quyền và nuôi dưỡng tiềm năng của mỗi con người.',
        socials: {
          facebook: "https://www.facebook.com/ngthanhh04",
          instagram: "",
        },
         Digital_learning_philosophy:'Trong kỷ nguyên số, việc học không còn gói gọn trong bốn bức tường lớp học. Chỉ với một chiếc điện thoại hay máy tính có kết nối internet có thể tiếp cận kho tri thức khổng lồ từ khắp nơi trên thế giới. Nhưng với tôi, học tập số không chỉ là chuyện tìm kiếm thông tin mà là hành trình tự khám phá, chọn lọc, phản biện và biến kiến thức thành điều có ích trong cuộc sống. Công nghệ không thay thế con người, mà đồng hành cùng chúng ta  giúp việc học trở nên linh hoạt, cá nhân hóa và gần gũi hơn bao giờ hết. Tuy nhiên, công nghệ chỉ thực sự có ý nghĩa khi người học giữ được tinh thần chủ động, tư duy độc lập và thái độ cầu tiến trong suốt hành trình học hỏi. Tôi tin rằng triết lý học tập số cần được xây dựng trên ba trụ cột vững chắc: cảm hứng để khởi đầu, kết nối để lan tỏa, và phát triển để đi đường dài. Cảm hứng là ngọn lửa khơi dậy động lực học tập bên trong mỗi người. Kết nối với con người, với tri thức, với cộng đồng học tập là chất xúc tác giúp việc học không đơn độc mà luôn phong phú, mở rộng. Và phát triển chính là đích đến không chỉ là tích lũy kiến thức, mà là hoàn thiện tư duy, nhân cách và năng lực thích nghi trong một thế giới liên tục biến đổi.'
      },
      {
        id : "6",
        name: "Trần Đức Phát",
        image: require("../../images/Phat.jpg"),
        title: "Game Creator",
        description:
          "Đóng góp ý tưởng để sản phẩm hoàn thiện nhất. Hi vọng cô và các bạn sẽ hứng thú với những sản phẩm độc đáo từ nhóm mình nhé!",
        more_description :'',
        socials: {
          facebook: "https://www.facebook.com/tran.phong.558015",
          instagram: "",
        },
         Digital_learning_philosophy:''
      },
    ],
    
  };
  render() {
    return (
        <>
         
         
        </>
    )
  }
}

export default AboutState 
