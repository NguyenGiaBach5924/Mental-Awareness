export interface LibraryTerm {
  id: string;
  term: string;
  definition: string;
  synonyms?: string[];
}

export const libraryData: Record<string, LibraryTerm[]> = {
  EN: [
    {
      id: "dsm-5",
      term: "DSM-5",
      definition: "The Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition (DSM-5) is a standard document published by the American Psychiatric Association in 2013. It is an essential tool that provides diagnostic criteria, classification, and coding of mental disorders to help clinicians and psychologists maintain consistency in diagnosis and treatment. It is used globally together with the ICD-10/11 systems of the World Health Organization."
    },
    {
      id: "anhedonia",
      term: "Anhedonia",
      definition: "A condition characterized by a reduced or complete loss of the ability to feel pleasure from activities that were once enjoyable. This is a core symptom of depression, anxiety disorders, and other mental health conditions. It is not simply temporary sadness, but a long-lasting emotional numbness."
    },
    {
      id: "neuroimaging",
      term: "Neuroimaging",
      definition: "A group of non-invasive medical imaging techniques (like MRI, CT, and PET scans) used to observe the structure and function of the central nervous system. This technology helps diagnose disorders, assess brain health, and study neural activity."
    },
    {
      id: "hippocampus",
      term: "Hippocampus",
      definition: "An important brain structure located in the temporal lobe, part of the limbic system. It plays a key role in forming long-term memories, learning, and emotional regulation. Prolonged stress or depression can sometimes affect its volume."
    },
    {
      id: "serotonin",
      term: "Serotonin",
      definition: "An important neurotransmitter that regulates mood, sleep, digestion, and appetite. Often called the 'happiness hormone,' it contributes to feelings of well-being and emotional stability. Low levels are commonly associated with depression and anxiety."
    },
    {
      id: "dopamine",
      term: "Dopamine",
      definition: "A neurotransmitter that regulates emotions, motivation, memory, and concentration. It creates feelings of pleasure and strengthens the brain's reward system. Deficiency can lead to fatigue and reduced motivation."
    },
    {
      id: "dopa-vs-sera",
      term: "Dopamine vs. Serotonin",
      definition: "Dopamine primarily drives motivation, excitement, and reward-seeking behavior. Serotonin focuses on mood stabilization, calmness, and long-term satisfaction."
    },
    {
      id: "norepinephrine",
      term: "Norepinephrine",
      definition: "A neurotransmitter and hormone that increases alertness, concentration, and energy levels. It plays a major role in the body's 'fight or flight' stress response."
    },
    {
      id: "insulin",
      term: "Insulin",
      definition: "A hormone produced by the pancreas that regulates blood sugar levels by helping convert glucose into energy. It is the primary hormone for lowering blood glucose."
    },
    {
      id: "diabetes",
      term: "Diabetes",
      definition: "A chronic metabolic disorder causing high blood sugar due to insulin deficiency or resistance. It requires careful management through diet, exercise, and sometimes medication."
    },
    {
      id: "biopsychosocial-model",
      term: "Biopsychosocial Model",
      definition: "A holistic approach stating that health and illness result from complex interactions between biological factors (genes), psychological factors (thoughts/emotions), and social factors (environment/relationships)."
    },
    {
      id: "gut-brain-axis",
      term: "Gut-Brain Axis",
      definition: "A bidirectional communication network between the brain and the digestive tract. It links the brain's emotional centers with gastrointestinal functions, often called the 'second brain'."
    },
    {
      id: "neuroinflammation",
      term: "Neuroinflammation",
      definition: "An immune response in the brain/spinal cord caused by injury, infection, or chronic stress. Prolonged neuroinflammation is linked to various neurodegenerative and mental health conditions."
    },
    {
      id: "snris",
      term: "SNRIs",
      definition: "Serotonin-Norepinephrine Reuptake Inhibitors are antidepressant medications that increase levels of both serotonin and norepinephrine to improve mood and concentration."
    },
    {
      id: "cbt",
      term: "Cognitive Behavioral Therapy (CBT)",
      definition: "An evidence-based talk therapy that helps identify and change distorted thoughts and negative behaviors. It is highly effective for depression, anxiety, and sleep disorders.",
      synonyms: ["Cognitive Behavioral Therapy", "CBT"]
    },
    {
      id: "phq-9",
      term: "PHQ-9",
      definition: "The Patient Health Questionnaire-9 is a 9-item tool used to screen, diagnose, and monitor the severity of depression based on DSM criteria."
    },
    {
      id: "aerobic",
      term: "Aerobic Exercise",
      definition: "Physical activity that increases heart rate and oxygen use, like walking or running. It stimulates brain-derived neurotrophic factor (BDNF) and helps reduce symptoms of depression and anxiety.",
      synonyms: ["aerobic exercise", "aerobic"]
    },
    {
      id: "omega-3",
      term: "Omega-3 Fatty Acids",
      definition: "Essential fats found in fish and seeds that support brain function, heart health, and reduce inflammation. They are often studied for their role in supporting mental health."
    }
  ],
  VI: [
    {
      id: "dsm-5",
      term: "DSM-5",
      definition: "Sổ tay Chẩn đoán và Thống kê các Rối loạn Tâm thần, Ấn bản thứ Năm (DSM-5) là một tài liệu tiêu chuẩn được Hiệp hội Tâm thần Hoa Kỳ xuất bản năm 2013. Đây là một công cụ thiết yếu cung cấp các tiêu chí chẩn đoán, phân loại và mã hóa các rối loạn tâm thần để giúp các bác sĩ lâm sàng và nhà tâm lý học duy trì sự thống nhất trong chẩn đoán và điều trị. Nó được sử dụng toàn cầu cùng với hệ thống ICD-10/11 của Tổ chức Y tế Thế giới."
    },
    {
      id: "anhedonia",
      term: "Mất hứng thú (Anhedonia)",
      definition: "Một tình trạng đặc trưng bởi việc giảm hoặc mất hoàn toàn khả năng cảm nhận niềm vui từ các hoạt động từng mang lại sự thích thú. Đây là triệu chứng cốt lõi của trầm cảm, rối loạn lo âu và các tình trạng sức khỏe tâm thần khác. Nó không chỉ đơn thuần là nỗi buồn tạm thời, mà là sự tê liệt cảm xúc kéo dài."
    },
    {
      id: "neuroimaging",
      term: "Chẩn đoán hình ảnh thần kinh",
      definition: "Một nhóm các kỹ thuật hình ảnh y tế không xâm lấn (như chụp MRI, CT và PET) được sử dụng để quan sát cấu trúc và chức năng của hệ thống thần kinh trung ương. Công nghệ này giúp chẩn đoán các rối loạn, đánh giá sức khỏe não bộ và nghiên cứu hoạt động thần kinh."
    },
    {
      id: "hippocampus",
      term: "Hồi hải mã (Hippocampus)",
      definition: "Một cấu trúc não quan trọng nằm ở thùy thái dương, thuộc hệ thống viền. Nó đóng vai trò then chốt trong việc hình thành ký ức dài hạn, học tập và điều chỉnh cảm xúc. Căng thẳng kéo dài hoặc trầm cảm đôi khi có thể ảnh hưởng đến thể tích của nó."
    },
    {
      id: "serotonin",
      term: "Serotonin",
      definition: "Một chất dẫn truyền thần kinh quan trọng điều chỉnh tâm trạng, giấc ngủ, tiêu hóa và thèm ăn. Thường được gọi là 'hormone hạnh phúc', nó góp phần mang lại cảm giác khỏe mạnh và ổn định cảm xúc. Mức độ thấp thường liên quan đến trầm cảm và lo âu."
    },
    {
      id: "dopamine",
      term: "Dopamine",
      definition: "Một chất dẫn truyền thần kinh điều chỉnh cảm xúc, động lực, trí nhớ và sự tập trung. Nó tạo ra cảm giác hưng phấn và củng cố hệ thống khen thưởng của não. Thiếu hụt có thể dẫn đến mệt mỏi và giảm động lực."
    },
    {
      id: "dopa-vs-sera",
      term: "Dopamine và Serotonin",
      definition: "Dopamine chủ yếu thúc đẩy động lực, sự phấn khích và hành vi tìm kiếm phần thưởng. Serotonin tập trung vào sự ổn định tâm trạng, sự bình tĩnh và sự hài lòng lâu dài."
    },
    {
      id: "norepinephrine",
      term: "Norepinephrine",
      definition: "Một chất dẫn truyền thần kinh và hormone làm tăng sự tỉnh táo, tập trung và mức năng lượng. Nó đóng vai trò chính trong phản ứng căng thẳng 'chiến đấu hoặc bỏ chạy' của cơ thể."
    },
    {
      id: "insulin",
      term: "Insulin",
      definition: "Một loại hormone do tuyến tụy sản xuất giúp điều chỉnh lượng đường trong máu bằng cách giúp chuyển hóa glucose thành năng lượng. Đây là hormone chính để làm giảm glucose trong máu."
    },
    {
      id: "diabetes",
      term: "Bệnh tiểu đường",
      definition: "Một rối loạn chuyển hóa mãn tính gây ra lượng đường trong máu cao do thiếu hụt hoặc kháng insulin. Nó đòi hỏi sự quản lý cẩn thận thông qua chế độ ăn uống, tập thể dục và đôi khi là thuốc men."
    },
    {
      id: "biopsychosocial-model",
      term: "Mô hình sinh-tâm-xã",
      definition: "Một phương pháp tiếp cận toàn diện khẳng định rằng sức khỏe và bệnh tật là kết quả của các tương tác phức tạp giữa các yếu tố sinh học (gen), yếu tố tâm lý (suy nghĩ/cảm xúc) và các yếu tố xã hội (môi trường/mối quan hệ)."
    },
    {
      id: "gut-brain-axis",
      term: "Trục não-ruột",
      definition: "Một mạng lưới giao tiếp hai chiều giữa não và đường tiêu hóa. Nó liên kết các trung tâm cảm xúc của não với các chức năng tiêu hóa, thường được gọi là 'bộ não thứ hai'."
    },
    {
      id: "neuroinflammation",
      term: "Viêm thần kinh",
      definition: "Một phản ứng miễn dịch trong não/tủy sống do chấn thương, nhiễm trùng hoặc căng thẳng mãn tính. Viêm thần kinh kéo dài có liên quan đến các tình trạng thoái hóa thần kinh và sức khỏe tâm thần khác nhau."
    },
    {
      id: "snris",
      term: "SNRIs",
      definition: "Thuốc ức chế tái hấp thu Serotonin-Norepinephrine là loại thuốc chống trầm cảm làm tăng mức độ của cả serotonin và norepinephrine để cải thiện tâm trạng và sự tập trung."
    },
    {
      id: "cbt",
      term: "Liệu pháp Nhận thức Hành vi (CBT)",
      definition: "Một liệu pháp trò chuyện dựa trên bằng chứng giúp xác định và thay đổi những suy nghĩ lệch lạc và hành vi tiêu cực. Nó rất hiệu quả đối với trầm cảm, lo âu và rối loạn giấc ngủ.",
      synonyms: ["Liệu pháp Nhận thức Hành vi", "CBT"]
    },
    {
      id: "phq-9",
      term: "PHQ-9",
      definition: "Bảng câu hỏi sức khỏe bệnh nhân-9 là một công cụ gồm 9 mục được sử dụng để tầm soát, chẩn đoán và theo dõi mức độ nghiêm trọng của trầm cảm dựa trên tiêu chí DSM."
    },
    {
      id: "aerobic",
      term: "Bài tập Aerobic",
      definition: "Hoạt động thể chất làm tăng nhịp tim và sử dụng oxy, như đi bộ hoặc chạy. Nó kích thích yếu tố dinh dưỡng thần kinh có nguồn gốc từ não (BDNF) và giúp giảm các triệu chứng trầm cảm và lo âu.",
      synonyms: ["bài tập aerobic", "aerobic"]
    },
    {
      id: "omega-3",
      term: "Axit béo Omega-3",
      definition: "Các chất béo thiết yếu có trong cá và các loại hạt giúp hỗ trợ chức năng não, sức khỏe tim mạch và giảm viêm. Chúng thường được nghiên cứu về vai trò trong việc hỗ trợ sức khỏe tâm thần."
    }
  ]
};

