import { AlertCircle, Lightbulb, Info, BookOpen, ArrowRight, Heart, ShieldCheck, Brain, MessageCircle } from 'lucide-react';
// @ts-ignore
import de1 from '../../images/de1.jpeg';
import mdd from '../../images/mdd.jpg';
import tryImg from '../../images/try.webp';
import processImg from '../../images/process.png';
import destinationImg from '../../images/destination.jpg';
import genetic from '../../images/genetic.webp';
import environment from '../../images/enviromental.jpeg';
import tryharder from '../../images/tryharder.avif';
import poor from '../../images/poor.webp';
import antidepression from '../../images/antidepress.png';
import { libraryData } from '../data/libraryData';
import { translations } from '../translations';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const HighlightedText = ({ text, setActiveSection, language }: { text: string; setActiveSection: (s: string) => void; language: string }) => {
  if (!text) return null;

  const currentLibraryData = libraryData[language] || libraryData.EN;

  // Create a list of all terms and synonyms, sorted by length descending to match longest first
  const allTerms = currentLibraryData.flatMap(item => {
    const terms = [item.term];
    if (item.synonyms) terms.push(...item.synonyms);
    return terms.map(t => ({ term: t, id: item.id }));
  }).sort((a, b) => b.term.length - a.term.length);

  // Create regex pattern from terms
  const pattern = allTerms.map(t => t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  const regex = new RegExp(`(${pattern})`, 'gi');

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        const match = allTerms.find(t => t.term.toLowerCase() === part.toLowerCase());
        if (match) {
          return (
            <button
              key={i}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection('library');
                // Use a small timeout to ensure the section has switched before scrolling
                setTimeout(() => {
                  const element = document.getElementById(match.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline cursor-pointer bg-transparent border-none p-0 inline align-baseline"
            >
              {part}
            </button>
          );
        }
        return part;
      })}
    </>
  );
};

interface ContentSectionProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  language: string;
}

export function ContentSection({ activeSection, setActiveSection, language }: ContentSectionProps) {
  const t = translations[language as keyof typeof translations].content;
  const isVI = language === 'VI';

  // Define section order for navigation
  const sectionOrder = [
    'home',
    'what-is-depression',
    'misconceptions',
    'what-you-can-do',
    'references',
    'what-is-anxiety',
    'cause',
    'treatment',
    'anxiety-references',
    'library'
  ];

  const currentIndex = sectionOrder.indexOf(activeSection);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < sectionOrder.length - 1;

  const goToPrevious = () => {
    if (hasPrevious) {
      setActiveSection(sectionOrder[currentIndex - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToNext = () => {
    if (hasNext) {
      setActiveSection(sectionOrder[currentIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    switch (activeSection) {   
      case 'home':
        return isVI ? (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-pink-400/10 dark:bg-pink-400/5 blur-[100px] rounded-full -z-10"></div>
              <div className="absolute top-20 left-1/4 w-48 h-48 bg-blue-400/10 dark:bg-blue-400/5 blur-[80px] rounded-full -z-10"></div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
                  {t.welcome}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Nền tảng cung cấp thông tin dựa trên bằng chứng để giúp bạn tìm hiểu về sức khỏe tâm thần, nhận biết các triệu chứng và tìm kiếm sự hỗ trợ.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => setActiveSection('what-is-depression')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 group"
                >
                  Khám phá ngay <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setActiveSection('library')}
                  className="px-8 py-3 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-full font-semibold hover:border-pink-400 dark:hover:border-pink-500 transition-all flex items-center gap-2 shadow-sm"
                >
                  <BookOpen size={18} className="text-pink-500" /> Thư viện y khoa
                </button>
              </div>
            </div>

            <div className="relative group">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {[
                    { img: tryImg, text: '"Thử: Bước đầu tiên luôn là khó khăn nhất, nhưng đó là bước quan trọng nhất."' },
                    { img: processImg, text: '"Quá trình: Chữa lành không phải là một đường thẳng, đó là một hành trình với những thăng trầm."' },
                    { img: destinationImg, text: '"Đích đến: Sức khỏe tâm thần là một cam kết trọn đời với chính bản thân bạn."' }
                  ].map((slide, index) => (
                    <CarouselItem key={index}>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 group/slide">
                        <img src={slide.img} alt={`Slide ${index + 1}`} className="w-full h-[400px] object-cover transition-transform duration-700 group-hover/slide:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                          <div className="border-l-4 border-yellow-400 pl-4">
                            <p className="text-white text-xl font-medium max-w-md italic">
                              {slide.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden group-hover:block transition-all">
                  <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/40 border-none text-white backdrop-blur-sm" />
                  <CarouselNext className="right-4 bg-white/20 hover:bg-white/40 border-none text-white backdrop-blur-sm" />
                </div>
              </Carousel>
            </div>

            {/* Key Topics */}
            <div className="grid md:grid-cols-2 gap-8">
              <div 
                onClick={() => setActiveSection('what-is-depression')}
                className="group p-8 bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-900/30 hover:border-blue-400 dark:hover:border-blue-500 transition-all cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:rotate-6 transition-transform">
                  <Heart size={28} fill="currentColor" className="opacity-20 absolute" />
                  <Heart size={28} className="relative z-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">Trầm cảm</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Tìm hiểu về Rối loạn Trầm cảm Chủ yếu (MDD), các triệu chứng lâm sàng và phương pháp điều trị dựa trên bằng chứng.
                </p>
                <span className="text-blue-600 dark:text-blue-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Xem chi tiết <ArrowRight size={16} />
                </span>
              </div>

              <div 
                onClick={() => setActiveSection('what-is-anxiety')}
                className="group p-8 bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-800 dark:to-purple-900/10 rounded-3xl border border-purple-100 dark:border-purple-900/30 hover:border-purple-400 dark:hover:border-purple-500 transition-all cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/50 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:-rotate-6 transition-transform">
                  <Brain size={28} fill="currentColor" className="opacity-20 absolute" />
                  <Brain size={28} className="relative z-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">Rối loạn Lo âu</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Khám phá các loại lo âu khác nhau, nguyên nhân sinh học và cách quản lý căng thẳng hiệu quả.
                </p>
                <span className="text-purple-600 dark:text-purple-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Xem chi tiết <ArrowRight size={16} />
                </span>
              </div>
            </div>

            {/* Mission Section */}
            <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-[3rem] p-8 md:p-16 border border-gray-100 dark:border-gray-700 shadow-inner">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/5 blur-[80px] rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/5 blur-[80px] rounded-full"></div>
              
              <div className="max-w-3xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white">Sứ mệnh của chúng tôi</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
                  Chúng tôi tin rằng mọi người đều xứng đáng được tiếp cận với thông tin rõ ràng, thấu cảm về sức khỏe tâm thần. Mục tiêu của chúng tôi là giảm bớt sự kỳ thị, thúc đẩy sự hiểu biết và trao quyền cho các cá nhân.
                </p>
                <div className="grid sm:grid-cols-3 gap-8 text-left">
                  <div className="flex flex-col gap-4 p-4 rounded-2xl hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600"><ShieldCheck size={24} /></div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white">Tin cậy</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Dựa trên bằng chứng y khoa chính thống</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 p-4 rounded-2xl hover:bg-pink-50/50 dark:hover:bg-pink-900/10 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600"><Heart size={24} /></div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white">Thấu cảm</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Tiếp cận nhân văn và thấu hiểu</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 p-4 rounded-2xl hover:bg-yellow-50/50 dark:hover:bg-yellow-900/10 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600"><MessageCircle size={24} /></div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white">Kết nối</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Xây dựng cộng đồng hỗ trợ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
              {t.readingTime}: 2 phút · {t.lastUpdated}: 20 tháng 4, 2026
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-pink-400/10 dark:bg-pink-400/5 blur-[100px] rounded-full -z-10"></div>
              <div className="absolute top-20 left-1/4 w-48 h-48 bg-blue-400/10 dark:bg-blue-400/5 blur-[80px] rounded-full -z-10"></div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
                  {t.welcome}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                An evidence-based platform to help you learn about mental health conditions, recognize symptoms, and find the right support.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => setActiveSection('what-is-depression')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 group"
                >
                  Explore Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setActiveSection('library')}
                  className="px-8 py-3 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-full font-semibold hover:border-pink-400 dark:hover:border-pink-500 transition-all flex items-center gap-2 shadow-sm"
                >
                  <BookOpen size={18} className="text-pink-500" /> Medical Library
                </button>
              </div>
            </div>

            <div className="relative group">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {[
                    { img: tryImg, text: '"Try: The first step is always the hardest, but it\'s the most important."' },
                    { img: processImg, text: '"Process: Healing is not linear, it\'s a journey of ups and downs."' },
                    { img: destinationImg, text: '"Destination: Mental wellness is a lifelong commitment to yourself."' }
                  ].map((slide, index) => (
                    <CarouselItem key={index}>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 group/slide">
                        <img src={slide.img} alt={`Slide ${index + 1}`} className="w-full h-[400px] object-cover transition-transform duration-700 group-hover/slide:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                          <div className="border-l-4 border-yellow-400 pl-4">
                            <p className="text-white text-xl font-medium max-w-md italic">
                              {slide.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden group-hover:block transition-all">
                  <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/40 border-none text-white backdrop-blur-sm" />
                  <CarouselNext className="right-4 bg-white/20 hover:bg-white/40 border-none text-white backdrop-blur-sm" />
                </div>
              </Carousel>
            </div>

            {/* Key Topics */}
            <div className="grid md:grid-cols-2 gap-8">
              <div 
                onClick={() => setActiveSection('what-is-depression')}
                className="group p-8 bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-900/30 hover:border-blue-400 dark:hover:border-blue-500 transition-all cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:rotate-6 transition-transform">
                  <Heart size={28} fill="currentColor" className="opacity-20 absolute" />
                  <Heart size={28} className="relative z-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">Depression</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Learn about Major Depressive Disorder (MDD), clinical symptoms, and evidence-based treatments.
                </p>
                <span className="text-blue-600 dark:text-blue-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read more <ArrowRight size={16} />
                </span>
              </div>

              <div 
                onClick={() => setActiveSection('what-is-anxiety')}
                className="group p-8 bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-800 dark:to-purple-900/10 rounded-3xl border border-purple-100 dark:border-purple-900/30 hover:border-purple-400 dark:hover:border-purple-500 transition-all cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/50 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:-rotate-6 transition-transform">
                  <Brain size={28} fill="currentColor" className="opacity-20 absolute" />
                  <Brain size={28} className="relative z-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">Anxiety Disorders</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Explore different types of anxiety, biological causes, and effective stress management techniques.
                </p>
                <span className="text-purple-600 dark:text-purple-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read more <ArrowRight size={16} />
                </span>
              </div>
            </div>

            {/* Mission Section */}
            <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-[3rem] p-8 md:p-16 border border-gray-100 dark:border-gray-700 shadow-inner">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/5 blur-[80px] rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/5 blur-[80px] rounded-full"></div>
              
              <div className="max-w-3xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white">Our Mission</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
                  We believe that everyone deserves access to clear, compassionate information about mental health. Our goal is to reduce stigma, promote understanding, and empower individuals.
                </p>
                <div className="grid sm:grid-cols-3 gap-8 text-left">
                  <div className="flex flex-col gap-4 p-4 rounded-2xl hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600"><ShieldCheck size={24} /></div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white">Evidence-Based</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Clinically backed data from official sources</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 p-4 rounded-2xl hover:bg-pink-50/50 dark:hover:bg-pink-900/10 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600"><Heart size={24} /></div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white">Compassionate</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Human-centric and empathetic approach</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 p-4 rounded-2xl hover:bg-yellow-50/50 dark:hover:bg-yellow-900/10 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600"><MessageCircle size={24} /></div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white">Supportive</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Building a supportive community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
              {t.readingTime}: 2 min · {t.lastUpdated}: April 20, 2026
            </div>
          </div>
        );

      case 'what-is-depression':
        return isVI ? (
          <>
            <h1>Hiểu về Trầm cảm</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-justify">
              <HighlightedText text="Trầm cảm không chỉ đơn thuần là cảm thấy buồn chán. Đó là một tình trạng y tế nghiêm trọng ảnh hưởng đến cách bạn cảm nhận, suy nghĩ và xử lý các hoạt động hàng ngày." setActiveSection={setActiveSection} language={language} />
            </p>
            <div className="text-center">
              <img
                src={de1}
                alt="Hình minh họa nhận thức về trầm cảm"
                className="mt-6 w-full h-auto rounded-lg shadow-md"
                />
                <p className="mt-3 text-sm italic text-gray-600 dark:text-gray-400">
                <HighlightedText text="Hiểu rõ các triệu chứng đa dạng của trầm cảm giúp nhận biết sớm và tìm kiếm sự hỗ trợ thích hợp" setActiveSection={setActiveSection} language={language} />
                </p>
            </div>

            <section id="definition" className="mt-8">
              <h2>Trầm cảm là gì?</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                <HighlightedText text="Hầu hết chúng ta đều đã từng trải qua những ngày buồn bã: một cuộc chia tay, một thất bại trong học tập, hoặc đơn giản là thức dậy vào một buổi sáng với cảm giác nặng nề. Đây là những phản ứng hoàn toàn bình thường của con người trước những thăng trầm của cuộc sống. Tuy nhiên, Rối loạn Trầm cảm Chủ yếu (MDD) về cơ bản khác với nỗi buồn thông thường. Đó là một rối loạn tâm thần được chẩn đoán lâm sàng với cơ sở sinh học rõ ràng, không chỉ là tâm trạng xuống dốc tạm thời hay sự thiếu ý chí. Những cá nhân mắc MDD trải qua cảm giác buồn bã, trống rỗng hoặc tê liệt cảm xúc dai dẳng trong ít nhất hai tuần liên tiếp, gây gián đoạn đáng kể cuộc sống hàng ngày, bao gồm công việc, học tập, các mối quan hệ và thậm chí cả khả năng tự chăm sóc bản thân." setActiveSection={setActiveSection} language={language} />
              </p>
              <div className="text-center">
              <img
                src={mdd}
                alt="Rối loạn Trầm cảm Chủ yếu (MDD)"
                className="mt-6 w-full h-auto rounded-lg shadow-md"
                />
                <p className="mt-3 text-sm italic text-gray-600 dark:text-gray-400">
                <HighlightedText text="Hiểu rõ các triệu chứng đa dạng của rối loạn trầm cảm chủ yếu giúp nhận biết sớm và tìm kiếm sự hỗ trợ thích hợp" setActiveSection={setActiveSection} language={language} />
                </p>
            </div>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                <HighlightedText text="Nếu nỗi buồn thông thường giống như một cơn mưa rào ngắn ngủi trôi qua trong vài giờ, thì MDD giống như một lớp mây xám dày đặc bao phủ bầu trời trong nhiều tuần, khiến những người bị ảnh hưởng không chắc chắn khi nào ánh sáng sẽ trở lại. Theo Tổ chức Y tế Thế giới (WHO), MDD là một trong những nguyên nhân hàng đầu gây ra khuyết tật và giảm chất lượng cuộc sống trên toàn thế giới. Tỷ lệ hiện mắc MDD suốt đời trong dân số chung dao động từ 15% đến 20% (Richards, 2011; Wang, 2024), nghĩa là cứ khoảng năm người thì có một người sẽ trải qua ít nhất một giai đoạn trầm cảm chủ yếu trong đời." setActiveSection={setActiveSection} language={language} />
              </p>
            </section>

            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
              <div className="flex gap-3">
                <Info className="text-amber-600 dark:text-amber-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-amber-900 dark:text-amber-200 mb-1">Lưu ý quan trọng</h4>
                  <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed text-justify">
                    <HighlightedText text="Trầm cảm khác với những biến động tâm trạng thông thường và các phản ứng cảm xúc ngắn hạn trước những thách thức trong cuộc sống hàng ngày. Nó đòi hỏi sự chẩn đoán và điều trị thích hợp từ các chuyên gia y tế." setActiveSection={setActiveSection} language={language} />
                  </p>
                </div>
              </div>
            </div>

            <section id="symptoms" className="mt-8">
              <h2>Các triệu chứng phổ biến</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                <HighlightedText text="Theo tiêu chí chẩn đoán trong DSM-5 (Phần 21 – Rối loạn Trầm cảm Chủ yếu, trang 72), một người được chẩn đoán mắc MDD khi có từ năm triệu chứng trở lên xuất hiện trong cùng một khoảng thời gian hai tuần, với ít nhất một trong hai triệu chứng cốt lõi là: (1) tâm trạng trầm uất hoặc (2) mất hứng thú hoặc niềm vui rõ rệt. Bảng dưới đây trình bày chín tiêu chí chẩn đoán DSM-5 và cách chúng biểu hiện trong cuộc sống hàng ngày:" setActiveSection={setActiveSection} language={language} />
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
                      <th className="px-4 py-3 text-left font-medium">STT</th>
                      <th className="px-4 py-3 text-left font-medium">Triệu chứng theo DSM-5</th>
                      <th className="px-4 py-3 text-left font-medium">Biểu hiện thực tế</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">1</td>
                      <td className="px-4 py-3">Tâm trạng trầm uất hầu hết thời gian</td>
                      <td className="px-4 py-3">Cảm giác trống rỗng, vô vọng và buồn bã dai dẳng. Ánh mắt thẫn thờ, đôi khi đỏ hoe mà không có lý do rõ ràng.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">2</td>
                      <td className="px-4 py-3"><HighlightedText text="Mất hứng thú hoặc niềm vui (anhedonia)" setActiveSection={setActiveSection} language={language} /></td>
                      <td className="px-4 py-3">Các hoạt động từng yêu thích—như xem phim, ăn ngon hoặc gặp gỡ bạn bè—trở nên nhạt nhẽo. Không còn cảm giác vui vẻ, ngay cả khi biết mình “nên” cảm thấy hứng thú.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">3</td>
                      <td className="px-4 py-3">Thay đổi đáng kể về cân nặng hoặc cảm giác thèm ăn</td>
                      <td className="px-4 py-3">Giảm cảm giác thèm ăn hoặc ăn quá nhiều, với trọng lượng cơ thể thay đổi hơn 5% trong vòng một tháng mà không có ý định.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">4</td>
                      <td className="px-4 py-3">Mất ngủ hoặc ngủ quá nhiều</td>
                      <td className="px-4 py-3">Khó ngủ hoặc ngược lại, ngủ 12–14 tiếng nhưng vẫn cảm thấy mệt mỏi.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">5</td>
                      <td className="px-4 py-3">Kích động hoặc chậm chạp tâm thần vận động</td>
                      <td className="px-4 py-3">Lời nói, cử động và phản ứng chậm chạp rõ rệt, hoặc bồn chồn gia tăng, có thể quan sát được bởi người khác.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">6</td>
                      <td className="px-4 py-3">Mệt mỏi hoặc mất năng lượng</td>
                      <td className="px-4 py-3">Ngay cả những việc đơn giản như tắm rửa hay gửi một tin nhắn cũng trở nên vô cùng khó khăn.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">7</td>
                      <td className="px-4 py-3">Cảm giác vô dụng hoặc tội lỗi quá mức</td>
                      <td className="px-4 py-3">Luôn tự trách mình và cảm thấy mình là gánh nặng cho người khác.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">8</td>
                      <td className="px-4 py-3">Giảm khả năng suy nghĩ, tập trung hoặc đưa ra quyết định</td>
                      <td className="px-4 py-3">Đọc đi đọc lại một đoạn văn mà không hiểu, hoặc không thể đưa ra ngay cả những quyết định nhỏ.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">9</td>
                      <td className="px-4 py-3">Suy nghĩ lặp đi lặp lại về cái chết hoặc tự tử</td>
                      <td className="px-4 py-3">Thường xuyên có ý nghĩ “muốn biến mất” hoặc “không muốn tồn tại”, đôi khi kèm theo các kế hoạch cụ thể.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <div className="mt-6 p-4 bg-brown-50 dark:bg-brown-900/20 rounded-lg border-l-4 border-brown-500">
              <div className="flex gap-3">
                <AlertCircle className="text-brown-600 dark:text-brown-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-brown-900 dark:text-brown-200 mb-1">Lưu ý quan trọng</h4>
                  <p className="text-sm text-brown-800 dark:text-brown-300 leading-relaxed text-justify">
                    <HighlightedText text="Các triệu chứng trên phải gây ra sự đau khổ đáng kể hoặc suy giảm nghiêm trọng trong các chức năng xã hội, nghề nghiệp hoặc hàng ngày, và không được do tác động của các chất hoặc các tình trạng y tế khác (DSM-5, tr. 72–73). Sự phân biệt này xác định ranh giới giữa Rối loạn Trầm cảm Chủ yếu và nỗi buồn thông thường trong cuộc sống hàng ngày." setActiveSection={setActiveSection} language={language} />
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1>Understanding Depression</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-justify">
              <HighlightedText text="Depression is more than just feeling sad. It's a serious medical condition that affects how you feel, think, and handle daily activities." setActiveSection={setActiveSection} language={language} />
            </p>
            <div className="text-center">
              <img
                src={de1}
                alt="Depression awareness illustration"
                className="mt-6 w-full h-auto rounded-lg shadow-md"
                />
                <p className="mt-3 text-sm italic text-gray-600 dark:text-gray-400">
                <HighlightedText text="Understanding the diverse symptoms of depression helps in early recognition and seeking appropriate support" setActiveSection={setActiveSection} language={language} />
                </p>
            </div>

            <section id="definition" className="mt-8">
              <h2>What is Depression?</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                <HighlightedText text="Most of us have experienced sad days: a breakup, an academic failure, or simply waking up one morning with a heavy feeling. These are completely normal human responses to the ups and downs of life. However, Major Depressive Disorder (MDD) is fundamentally different from ordinary sadness. It is a clinically diagnosed mental disorder with a clear biological basis, not just a temporary low mood or a lack of willpower. Individuals with MDD experience persistent feelings of sadness, emptiness, or emotional numbness for at least two consecutive weeks, significantly disrupting daily life, including work, study, relationships, and even the ability to care for themselves." setActiveSection={setActiveSection} language={language} />
              </p>
              <div className="text-center">
              <img
                src={mdd}
                alt="Major Depressive Disorder (MDD)"
                className="mt-6 w-full h-auto rounded-lg shadow-md"
                />
                <p className="mt-3 text-sm italic text-gray-600 dark:text-gray-400">
                <HighlightedText text="Understanding the diverse symptoms of major depressive disorder helps in early recognition and seeking appropriate support" setActiveSection={setActiveSection} language={language} />
                </p>
            </div>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                <HighlightedText text="If ordinary sadness is like a brief rain shower that passes within a few hours, MDD is more like a dense layer of gray clouds covering the sky for weeks, leaving those affected uncertain about when the light will return. According to the World Health Organization (WHO), MDD is one of the leading causes of disability and brownuced quality of life worldwide. The lifetime prevalence of MDD in the general population ranges from 15% to 20% (Richards, 2011; Wang, 2024), meaning that approximately one in five people will experience at least one episode of major depression during their lifetime." setActiveSection={setActiveSection} language={language} />
              </p>

            </section>

            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
              <div className="flex gap-3">
                <Info className="text-amber-600 dark:text-amber-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-amber-900 dark:text-amber-200 mb-1">Important Note</h4>
                  <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed text-justify">
                    <HighlightedText text="Depression is different from usual mood fluctuations and short-lived emotional responses to challenges in everyday life. It requires proper diagnosis and treatment from healthcare professionals." setActiveSection={setActiveSection} language={language} />
                  </p>
                </div>
              </div>
            </div>

            <section id="symptoms" className="mt-8">
              <h2>Common Symptoms</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
<HighlightedText text="According to the diagnostic criteria in the DSM-5 (Section 21 – Major Depressive Disorder, p. 72), a person is diagnosed with MDD when five or more symptoms are present during the same two-week period, with at least one of the two core symptoms being either: (1) a depressed mood or (2) a marked loss of interest or pleasure.
The table below presents the nine DSM-5 diagnostic criteria and how they may manifest in everyday life:" setActiveSection={setActiveSection} language={language} />
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#1E2A38] text-white">
                      <th className="px-4 py-3 text-left font-medium">No</th>
                      <th className="px-4 py-3 text-left font-medium">Symptoms According to DSM-5</th>
                      <th className="px-4 py-3 text-left font-medium">Cognitive Symptoms</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">1</td>
                      <td className="px-4 py-3">Depressed mood most of the time</td>
                      <td className="px-4 py-3">Persistent feelings of emptiness, hopelessness, and sadness. A vacant gaze, sometimes with browndened eyes without a clear reason. </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">2</td>
                      <td className="px-4 py-3"><HighlightedText text="Loss of interest or pleasure (anhedonia)" setActiveSection={setActiveSection} language={language} /></td>
                      <td className="px-4 py-3">Previously enjoyable activities—such as favorite movies, good food, or meeting friends—become dull. There is no longer any sense of enjoyment, even when one knows they “should” feel interested. </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">3</td>
                      <td className="px-4 py-3">Significant changes in weight or appetite</td>
                      <td className="px-4 py-3">brownuced appetite or overeating, with body weight changing by more than 5% within one month without intention.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">4</td>
                      <td className="px-4 py-3">Insomnia or hypersomnia</td>
                      <td className="px-4 py-3">Difficulty falling asleep or, conversely, sleeping 12–14 hours yet still feeling fatigued.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">5</td>
                      <td className="px-4 py-3">Psychomotor retardation or agitation</td>
                      <td className="px-4 py-3">Noticeably slowed speech, movement, and reactions, or increased restlessness, observable by others.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">6</td>
                      <td className="px-4 py-3">Fatigue or loss of energy</td>
                      <td className="px-4 py-3">Even simple tasks, such as bathing or sending a message, become extremely difficult.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">7</td>
                      <td className="px-4 py-3">Feelings of worthlessness or excessive guilt</td>
                      <td className="px-4 py-3">Persistent self-blame and a sense of being a burden to others.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">8</td>
                      <td className="px-4 py-3">brownuced ability to think, concentrate, or make decisions</td>
                      <td className="px-4 py-3">Reading the same passage multiple times without understanding, or being unable to make even minor decisions.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">9</td>
                      <td className="px-4 py-3">Recurrent thoughts of death or suicide</td>
                      <td className="px-4 py-3">Frequent thoughts of “disappearing” or “not wanting to exist,” sometimes accompanied by specific plans. </td>
                    </tr>
                  
                  </tbody>
                </table>
              </div>
            </section>

            <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
              <div className="flex gap-3">
                <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-red-900 dark:text-red-200 mb-1">Important Note</h4>
                  <p className="text-sm text-red-800 dark:text-red-300 leading-relaxed text-justify">
<HighlightedText text="The above symptoms must cause significant distress or substantial impairment in social, occupational, or daily functioning, and must not be attributable to the effects of substances or other medical conditions (DSM-5, pp. 72–73). This distinction defines the boundary between Major Depressive Disorder and ordinary sadness in everyday life." setActiveSection={setActiveSection} language={language} />
                  </p>
                </div>
              </div>
            </div>
          </>
        );

      case 'misconceptions':
        return isVI ? (
          <>
            <h1>Những hiểu lầm phổ biến về Trầm cảm</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-justify">
              <HighlightedText text="Hiểu đúng về trầm cảm giúp giảm bớt sự kỳ thị và khuyến khích mọi người tìm kiếm sự giúp đỡ." setActiveSection={setActiveSection} language={language} />
            </p>

            <section id="myths" className="mt-8">
              <h2>Lầm tưởng và Sự thật</h2>

              <div className="mt-6 space-y-6">
                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-brown-600 dark:text-brown-400">Lầm tưởng: "Trầm cảm chỉ là nỗi buồn—hãy suy nghĩ tích cực và cố gắng hơn, rồi nó sẽ tự khỏi."</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    <span className="font-medium text-green-600 dark:text-green-400">Tại sao nhiều người tin vào điều này?</span> 
                  </p>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block">
                       <HighlightedText text="Bởi vì trầm cảm không có vết thương hữu hình. Khi thấy ai đó “chỉ ở nhà, không đi học hay đi làm,” người khác có thể nhanh chóng cho rằng người đó lười biếng, thiếu ý chí hoặc chỉ đơn giản là “cần thêm kỷ luật.” Những câu như “Hãy mạnh mẽ lên, mọi chuyện sẽ ổn thôi” thường trở thành phản ứng tự động từ những người xung quanh, mặc dù chúng mang lại rất ít sự hỗ trợ thực sự." setActiveSection={setActiveSection} language={language} /></span>
                  </p>

                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    <span className="font-medium text-green-600 dark:text-green-400 ">
                      Bằng chứng khoa học cho thấy điều gì?</span> 
                  </p>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block">
                        <HighlightedText text="Rối loạn Trầm cảm Chủ yếu (MDD) là một tình trạng sức khỏe tâm thần có cơ sở sinh học rõ ràng; nó không phải là vấn đề của sự lựa chọn hay thái độ. Các nghiên cứu chẩn đoán hình ảnh thần kinh đã chỉ ra rằng những cá nhân mắc MDD có thể biểu hiện sự giảm thể tích ở hồi hải mã—vùng chịu trách nhiệm về trí nhớ và điều chỉnh cảm xúc—cùng với sự gián đoạn trong các mạng lưới nhận thức và sự mất cân bằng của các chất dẫn truyền thần kinh như serotonin, dopamine và norepinephrine (Otte và cộng sự 2016; Li và cộng sự 2021). Đây là những thay đổi sinh học có thể đo lường được, tương tự như sự mất cân bằng insulin trong bệnh tiểu đường." setActiveSection={setActiveSection} language={language} /><br></br>
<HighlightedText text="Goldman và cộng sự (1999) đã chứng minh rằng niềm tin cho rằng “trầm cảm có thể vượt qua chỉ bằng ý chí” không chỉ thiếu chính xác về mặt khoa học mà còn tạo ra những rào cản đáng kể. Nó có thể khiến các cá nhân cảm thấy xấu hổ và miễn cưỡng tìm kiếm sự giúp đỡ chuyên nghiệp. Kết quả là, tình trạng này thường được phát hiện muộn hơn, việc điều trị bị trì hoãn và nguy cơ tái phát tăng lên." setActiveSection={setActiveSection} language={language} />
</span>
                  </p>
                </div>

                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-brown-600 dark:text-brown-400">
                    Lầm tưởng: "Trầm cảm hoàn toàn do các cú sốc bên ngoài như mất việc, thất tình hoặc sụp đổ tài chính gây ra."</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    <span className="font-medium text-green-600 dark:text-green-400">
                      Tại sao nhiều người tin vào điều này?:</span>
                  </p>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block">
                       <HighlightedText text="Chúng ta đã quen với cách suy nghĩ nhân quả: nếu ai đó trải qua một sự kiện lớn trong đời và sau đó trở nên buồn bã, có vẻ hiển nhiên rằng sự kiện đó đã “gây ra” trầm cảm. Ngược lại, khi ai đó mắc trầm cảm mà không có bất kỳ tác nhân bên ngoài rõ ràng nào, những người khác có thể nghi ngờ tính xác thực của nó hoặc thậm chí cho rằng người đó đang “giả vờ”." setActiveSection={setActiveSection} language={language} />
</span>
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    <span className="font-medium text-green-600 dark:text-green-400">Bằng chứng khoa học cho thấy điều gì?</span> 
                  </p>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block"> 
                      <HighlightedText text="Mặc dù các tác nhân gây căng thẳng trong cuộc sống (như mất việc, đổ vỡ mối quan hệ hoặc tang chế) có thể đóng vai trò là những tác nhân quan trọng, nhưng Rối loạn Trầm cảm Chủ yếu (MDD) không chỉ đơn thuần là phản ứng trước hoàn cảnh. Sự phát triển của nó liên quan đến một sự tương tác phức tạp giữa các yếu tố sinh học, tâm lý và xã hội—mô hình sinh-tâm-xã (Khune và cộng sự, 2023)." setActiveSection={setActiveSection} language={language} /><br />
<HighlightedText text="Từ góc độ sinh học và di truyền, MDD có khả năng di truyền ước tính từ 30% đến 50% (Otte và cộng sự, 2016; Cui và cộng sự, 2024). Điều này có nghĩa là hai cá nhân cùng tiếp xúc với một mức độ căng thẳng như nhau có thể có những kết quả rất khác nhau, trong đó những người có một số tiền đề di truyền nhất định sẽ có nguy cơ cao hơn đáng kể (Wang, 2024)." setActiveSection={setActiveSection} language={language} /><br />
<HighlightedText text="Nghiên cứu gần đây cũng làm nổi bật vai trò của trục não-ruột, viêm thần kinh và sự rối loạn điều chỉnh cortisol liên quan đến căng thẳng mãn tính trong quá trình phát triển của MDD (Cui và cộng sự, 2024). Ji (2023) nhấn mạnh rằng tiền đề sinh học đóng vai trò nền tảng, dần dần ảnh hưởng đến hệ thống chất dẫn truyền thần kinh theo thời gian. Điều này giúp giải thích tại sao nhiều cá nhân mắc MDD không thể xác định được nguyên nhân bên ngoài rõ ràng cho tình trạng của họ." setActiveSection={setActiveSection} language={language} />
</span>
                  </p>
                </div>

                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-brown-600 dark:text-brown-400">Lầm tưởng: "Thuốc chống trầm cảm gây nghiện, kiểm soát tâm trí, và chỉ cần uống thuốc là sẽ khỏi trầm cảm ngay lập tức"</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    <span className="font-medium text-green-600 dark:text-green-400">Tại sao nhiều người tin vào điều này?</span> 
                  </p>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block"> 
                      <HighlightedText text="Sự hiểu lầm này xuất phát từ hai quan điểm trái ngược nhau: một bên bị thúc đẩy bởi nỗi sợ thuốc quá mức (“gây nghiện,” “mất bản thân”), và bên kia bởi những kỳ vọng phi thực tế (“uống thuốc sẽ hồi phục ngay lập tức”). Cả hai đều dẫn đến cùng một hệ quả: các cá nhân từ chối điều trị hoặc ngừng thuốc quá sớm trước khi nó kịp có tác dụng." setActiveSection={setActiveSection} language={language} /></span>
                  </p>
                   <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    <span className="font-medium text-green-600 dark:text-green-400">Bằng chứng khoa học cho thấy điều gì?</span> 
                  </p>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block"> 
                      <HighlightedText text="Các loại thuốc chống trầm cảm phổ biến, chẳng hạn như thuốc ức chế tái hấp thu Serotonin có chọn lọc và SNRIs, hoạt động bằng cách khôi phục sự cân bằng của các chất dẫn truyền thần kinh trong não, đặc biệt là serotonin. Chúng không tạo ra cảm giác hưng phấn hay say xỉn và không có đặc tính gây nghiện như các loại ma túy hay chất kích thích (Fancher & Kravitz, 2010). Goldman và cộng sự (1999) và Ji (2023) xác nhận rằng nỗi sợ “nghiện thuốc” là rào cản chính ngăn cản các cá nhân tìm kiếm điều trị, mặc dù thiếu cơ sở khoa học." setActiveSection={setActiveSection} language={language} /><br></br>
<HighlightedText text="Về thời gian tác dụng, thuốc chống trầm cảm không giống như thuốc giảm đau; bệnh nhân thường cần từ hai đến bốn tuần trước khi nhận thấy sự cải thiện (Fancher & Kravitz, 2010). Đây là lý do tại sao sự tuân thủ và kiên nhẫn là thiết yếu. Nhiều cá nhân ngừng uống thuốc sau một hoặc hai tuần vì thấy “không có tác dụng,” đây là nguyên nhân hàng đầu dẫn đến tái phát." setActiveSection={setActiveSection} language={language} /><br></br>
<HighlightedText text="Đối với việc liệu chỉ dùng thuốc có đủ hay không, nó không phải là một “giải pháp duy nhất.” Phương pháp hiệu quả nhất thường là sự kết hợp giữa thuốc, liệu pháp tâm lý—đặc biệt là Liệu pháp Nhận thức Hành vi (CBT)—và thay đổi lối sống, bao gồm tập thể dục thường xuyên, cải thiện giấc ngủ và dinh dưỡng hợp lý (Marx và cộng sự, 2023; Wang, 2024)." setActiveSection={setActiveSection} language={language} /><br></br>
</span>
                  </p>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <h1>Common Misconceptions About Depression</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-justify">
              <HighlightedText text="Understanding what depression really is helps brownuce stigma and encourages people to seek help." setActiveSection={setActiveSection} language={language} />
            </p>

            <section id="myths" className="mt-8">
              <h2>Myth vs. Reality</h2>

              <div className="mt-6 space-y-6">
                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-brown-600 dark:text-brown-400">Myth: "Depression is just sadness—think positively and try harder, and it will go away."</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    <span className="font-medium text-green-600 dark:text-green-400">Why do many people believe this?</span> 
                  </p>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block">
                       <HighlightedText text="Because depression has no visible wounds. When someone appears to be “just staying at home, not going to school or work,” others may quickly assume that the person is lazy, lacks willpower, or simply “needs more discipline.” Phrases like “Stay strong, everything will be fine” often become automatic responses from those around them, even though they provide little real support." setActiveSection={setActiveSection} language={language} /></span>
                  </p>
                  <div className="text-center">
                    <img
                      src={tryharder}
                      alt="try harder image"
                      className="mt-6 w-full h-auto rounded-lg shadow-md"
                      />
                
                  </div>

                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    <span className="font-medium text-green-600 dark:text-green-400 ">
                      What does scientific evidence show?</span> 
                  </p>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block">
                        <HighlightedText text="Major Depressive Disorder (MDD) is a mental health condition with a well-established biological basis; it is not a matter of choice or attitude. Neuroimaging studies have shown that individuals with MDD may exhibit brownuced volume in the hippocampus—the region responsible for memory and emotional regulation—along with disruptions in cognitive networks and imbalances in neurotransmitters such as serotonin, dopamine, and norepinephrine (Otte and partner 2016; Li and partner 2021). These are measurable biological changes, comparable to insulin imbalance in diabetes." setActiveSection={setActiveSection} language={language} /><br></br>
<HighlightedText text="Goldman and partner (1999) demonstrated that the belief that “depression can be overcome by willpower alone” is not only scientifically inaccurate but also creates significant barriers. It can lead individuals to feel ashamed and reluctant to seek professional help. As a result, the condition is often detected later, treatment is delayed, and the risk of recurrence increases." setActiveSection={setActiveSection} language={language} />
</span>
                  </p>
                </div>

                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-brown-600 dark:text-brown-400">
                    Myth: "Depression is entirely caused by external shocks such as job loss, heartbreak, or financial collapse."</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    <span className="font-medium text-green-600 dark:text-green-400">
                      Why do many people believe this?:</span>
                  </p>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block">
                       <HighlightedText text="We are accustomed to thinking in terms of cause and effect: if someone experiences a major life event and then becomes sad, it seems obvious that the event “caused” the depression. Conversely, when someone develops depression without any apparent external trigger, others may doubt its validity or even assume the person is “pretending.”" setActiveSection={setActiveSection} language={language} />
</span>
                  </p>
                  <div className="text-center">
                    <img
                      src={poor}
                      alt="poor image"
                      className="mt-6 w-full h-auto rounded-lg shadow-md"
                      />
                
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    <span className="font-medium text-green-600 dark:text-green-400">What does scientific evidence show?</span> 
                  </p>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block"> 
                      <HighlightedText text="Although life stressors (such as job loss, relationship breakdown, or bereavement) can act as important triggers, Major Depressive Disorder (MDD) is not simply a reaction to circumstances. Its development involves a complex interaction of biological, psychological, and social factors—the biopsychosocial model (Khune and partner, 2023)." setActiveSection={setActiveSection} language={language} /><br />
<HighlightedText text="From a biological and genetic perspective, MDD has an estimated heritability of 30% to 50% (Otte and partner, 2016; Cui and partner, 2024). This means that two individuals exposed to the same level of stress may have very different outcomes, with those having certain genetic pbrownispositions being at significantly higher risk (Wang, 2024)." setActiveSection={setActiveSection} language={language} /><br />
<HighlightedText text="Recent research also highlights the role of the gut–brain axis, neuroinflammation, and chronic stress-related cortisol dysregulation in the development of MDD (Cui and partner, 2024). Ji (2023) emphasizes that biological pbrownisposition plays a foundational role, gradually affecting neurotransmitter systems over time. This helps explain why many individuals with MDD are unable to identify a clear external cause for their condition." setActiveSection={setActiveSection} language={language} />
</span>
                  </p>
                </div>

                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-brown-600 dark:text-brown-400">Myth: "Antidepressants are addictive, control the mind, and taking medication alone will cure depression immediately"</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    <span className="font-medium text-green-600 dark:text-green-400">Why do many people believe this?</span> 
                  </p>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block"> 
                      <HighlightedText text="This misconception arises from two opposite perspectives: one driven by excessive fear of medication (“addiction,” “losing oneself”), and the other by unrealistic expectations (“taking the medication will bring instant recovery”). Both lead to the same consequence: individuals either refuse treatment or discontinue medication prematurely before it has taken effect." setActiveSection={setActiveSection} language={language} /></span>
                  </p>
                  <div className="text-center">
                    <img
                      src={antidepression}
                      alt="antidepression image"
                      className="mt-6 w-full h-auto rounded-lg shadow-md"
                      />
                
                  </div>
                   <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    <span className="font-medium text-green-600 dark:text-green-400">What does scientific evidence show?</span> 
                  </p>
                  <p>
                    <span className="indent-8 text-gray-600 dark:text-gray-400 text-justify block"> 
                      <HighlightedText text="Common antidepressants, such as Selective Serotonin Reuptake Inhibitors and SNRIs, work by restoring the balance of neurotransmitters in the brain, particularly serotonin. They do not produce euphoria or intoxication and do not have addictive properties in the way that drugs or stimulants do (Fancher & Kravitz, 2010). Goldman and partner (1999) and Ji (2023) confirm that the fear of “medication addiction” is a major barrier preventing individuals from seeking treatment, despite lacking scientific basis." setActiveSection={setActiveSection} language={language} /><br></br>
<HighlightedText text="Regarding onset of action, antidepressants are not like painkillers; patients typically need two to four weeks before noticing improvement (Fancher & Kravitz, 2010). This is why adherence and patience are essential. Many individuals stop taking medication after one or two weeks because they “see no effect,” which is a leading cause of relapse." setActiveSection={setActiveSection} language={language} /><br></br>
<HighlightedText text="As for whether medication alone is sufficient, it is not a “standalone cure.” The most effective approach is usually a combination of medication, psychotherapy—particularly Cognitive Behavioral Therapy (CBT)—and lifestyle changes, including regular exercise, improved sleep, and proper nutrition (Marx and partner, 2023; Wang, 2024)." setActiveSection={setActiveSection} language={language} /><br></br>
</span>
                  </p>
                </div>
              </div>
            </section>
          </>
        );

      case 'what-you-can-do':
        return isVI ? (
          <>
            <h1>Bạn có thể làm gì</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-justify">
              <HighlightedText text="Nếu bạn hoặc ai đó mà bạn biết đang trải qua trầm cảm, có những bước bạn có thể thực hiện." setActiveSection={setActiveSection} language={language} />
            </p>

            <section id="seek-help" className="mt-8">
              <h2>Nếu bạn nhận thấy các triệu chứng MDD ở bản thân.</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                <HighlightedText text="Điều quan trọng nhất cần nhớ là: bạn không có lỗi khi mắc trầm cảm và bạn không phải đối mặt với nó một mình. Dưới đây là các bước thực tế bạn có thể thực hiện:" setActiveSection={setActiveSection} language={language} />
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span className="text-justify"><HighlightedText text="Bước 1: Tìm kiếm sự giúp đỡ từ bác sĩ tâm thần hoặc chuyên gia sức khỏe tâm thần được cấp phép để có chẩn đoán chính xác (các công cụ tầm soát như PHQ-9 có thể được sử dụng)." setActiveSection={setActiveSection} language={language} /></span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span className="text-justify"><HighlightedText text="Bước 2: Tuân thủ kế hoạch điều trị được chỉ định, uống thuốc theo hướng dẫn và không tự ý ngừng thuốc, ngay cả khi bạn bắt đầu cảm thấy tốt hơn." setActiveSection={setActiveSection} language={language} /></span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>

                  <div>
                    <span className="block text-[#1E2A38] dark:text-blue-400">
                      Bước 3: Thay đổi lối sống dựa trên bằng chứng:
                    </span>

                    <ul className="list-[circle] mt-2 pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
                      <li>
                        <HighlightedText text="Thực hiện bài tập aerobic khoảng 30 phút mỗi ngày, 3–5 lần mỗi tuần" setActiveSection={setActiveSection} language={language} />
                      </li>

                      <li>
                        Cải thiện thói quen ngủ (duy trì lịch ngủ nhất quán và hạn chế sử dụng thiết bị điện tử trước khi đi ngủ)
                      </li>

                      <li>
                        <HighlightedText text="Duy trì chế độ ăn uống cân bằng giàu rau xanh và cá béo (omega-3), đồng thời hạn chế đường và chất béo bão hòa" setActiveSection={setActiveSection} language={language} />
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </section>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <div className="flex gap-3">
                <Lightbulb className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-200 mb-1">Mẹo tự chăm sóc</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
                    Mặc dù sự giúp đỡ chuyên nghiệp là thiết yếu, nhưng các thói quen tự chăm sóc như tập thể dục thường xuyên, thói quen ngủ lành mạnh và giữ kết nối với những người thân yêu có thể hỗ trợ hành trình hồi phục của bạn.
                  </p>
                </div>
              </div>
            </div>

            <section id="support-others" className="mt-8">
              <h2>Nếu bạn muốn giúp đỡ người thân mắc MDD.</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                <HighlightedText text="Sự hỗ trợ của bạn có thể tạo ra sự khác biệt đáng kể, nhưng nó phải được đưa ra một cách phù hợp. Một số phản hồi, mặc dù có ý định tốt, có thể vô tình gây thêm tổn thương. Các hướng dẫn sau đây có thể hữu ích:" setActiveSection={setActiveSection} language={language} />
              </p>
              <p className="font-semibold mt-4">Nên làm gì</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span className="text-justify"><HighlightedText text="Tránh vội vàng đưa ra lời khuyên hoặc giải pháp. Đôi khi, người đó chỉ đơn giản cần ai đó ngồi cùng và thực sự lắng nghe. Ngay cả sự im lặng cũng có thể là sự hỗ trợ. Một câu nói đơn giản như “Tôi ở đây với bạn” có thể là đủ." setActiveSection={setActiveSection} language={language} /></span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span className="text-justify"><HighlightedText text="Hỗ trợ người đó tìm kiếm sự giúp đỡ chuyên nghiệp bằng cách giúp họ tìm bác sĩ tâm thần hoặc nhà tâm lý học, nhắc nhở họ về các cuộc hẹn và—nếu họ cảm thấy thoải mái—hãy đi cùng họ trong lần thăm khám đầu tiên. Loại hỗ trợ thực tế này có giá trị hơn nhiều so với những lời khuyến khích chung chung (Fancher & Kravitz, 2010)." setActiveSection={setActiveSection} language={language} /></span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span className="text-justify"><HighlightedText text="Nói chuyện cởi mở về việc điều trị sức khỏe tâm thần như một điều gì đó bình thường—vì thực tế là như vậy. Sự kỳ thị vẫn là một trong những rào cản lớn nhất ngăn cản các cá nhân tìm kiếm sự giúp đỡ (Goldman và cộng sự, 1999)." setActiveSection={setActiveSection} language={language} /></span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span className="text-justify"><HighlightedText text="Nếu người thân của bạn bày tỏ những ý nghĩ như “Tôi không muốn sống nữa,” “Tôi muốn biến mất,” hoặc có bất kỳ dấu hiệu tự hại nào, hãy hỏi trực tiếp và bình tĩnh: “Bạn có đang nghĩ đến việc làm hại bản thân không?” Hỏi điều này không làm tăng rủi ro; thay vào đó, nó mở ra cánh cửa để họ chia sẻ. Sau đó, hãy liên hệ với chuyên gia y tế ngay lập tức để đảm bảo sự hỗ trợ kịp thời (Fancher & Kravitz, 2010)." setActiveSection={setActiveSection} language={language} /></span>
                </li>
              </ul>
              <p className="font-semibold mt-4">Không nên làm gì</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span className="text-justify"><HighlightedText text="Tránh các câu nói như “Hãy cố gắng hơn đi,” “Những người khác còn khổ hơn bạn,” “Tại sao bạn không suy nghĩ tích cực hơn?” hoặc “Bạn đang làm mọi người lo lắng vô ích đấy.” Mặc dù có ý tốt, những câu này có thể khiến người đó cảm thấy tồi tệ hơn và khép kín hơn (Goldman và cộng sự, 1999)." setActiveSection={setActiveSection} language={language} /></span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span className="text-justify"><HighlightedText text="Đừng gây áp lực buộc họ phải “hồi phục nhanh chóng” hoặc đặt ra thời hạn để cải thiện. Trầm cảm không tuân theo một mốc thời gian cố định, và áp lực như vậy có thể làm tăng gánh nặng cho họ." setActiveSection={setActiveSection} language={language} /></span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span className="text-justify"><HighlightedText text="Đừng bỏ mặc họ, nhưng cũng tránh giám sát quá mức. Duy trì sự hiện diện ổn định và nhẹ nhàng—bạn không cần phải “giải cứu” họ liên tục, nhưng điều quan trọng là họ biết bạn luôn ở đó." setActiveSection={setActiveSection} language={language} /></span>
                </li>
              </ul>
            </section>
          </>
        ) : (
          <>
            <h1>What You Can Do</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-justify">
              <HighlightedText text="If you or someone you know is experiencing depression, there are steps you can take." setActiveSection={setActiveSection} language={language} />
            </p>

            <section id="seek-help" className="mt-8">
              <h2>If you find out MDD symptom in yourself.</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                <HighlightedText text="The most important thing to remember is this: you are not at fault for experiencing depression, and you do not have to face it alone. Below are practical steps you can take:" setActiveSection={setActiveSection} language={language} />
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span className="text-justify"><HighlightedText text="Step 1: Seek help from a psychiatrist or a licensed mental health professional for an accurate diagnosis (screening tools such as the PHQ-9 may be used)." setActiveSection={setActiveSection} language={language} /></span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>
                  <span className="text-justify"><HighlightedText text="Step 2: Adhere to the prescribed treatment plan, take medication as directed, and do not discontinue it on your own, even if you begin to feel better." setActiveSection={setActiveSection} language={language} /></span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>

                  <div>
                    <span className="block text-[#1E2A38] dark:text-blue-400">
                      Step 3: Make evidence-based lifestyle changes:
                    </span>

                    <ul className="list-[circle] mt-2 pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
                      <li>
                        <HighlightedText text="Engage in aerobic exercise for about 30 minutes per day, 3–5 times per week" setActiveSection={setActiveSection} language={language} />
                      </li>

                      <li>
                        Improve sleep habits (maintain a consistent sleep schedule and limit electronic device use before bedtime)
                      </li>

                      <li>
                        <HighlightedText text="Maintain a balanced diet rich in vegetables and fatty fish (omega-3), while limiting sugar and saturated fats" setActiveSection={setActiveSection} language={language} />
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </section>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <div className="flex gap-3">
                <Lightbulb className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-200 mb-1">Self-Care Tips</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
                    While professional help is essential, self-care practices like regular exercise, healthy sleep habits, and staying connected with loved ones can support your recovery journey.
                  </p>
                </div>
              </div>
            </div>

            <section id="support-others" className="mt-8">
              <h2>If you want to help your relative people with MDD.</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                <HighlightedText text="Your support can make a significant difference, but it must be offebrown appropriately. Some responses, although well-intentioned, may unintentionally cause additional harm. The following guidelines may be helpful:" setActiveSection={setActiveSection} language={language} />
              </p>
              <p className="font-semibold mt-4">What to do</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span className="text-justify"><HighlightedText text="Avoid rushing to give advice or solutions. Sometimes, the person simply needs someone to sit with them and truly listen. Even silence can be supportive. A simple statement such as “I’m here with you” can be enough." setActiveSection={setActiveSection} language={language} /></span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span className="text-justify"><HighlightedText text="Assist the person in seeking professional help by helping them find a psychiatrist or psychologist, reminding them of appointments, and—if they are comfortable—accompanying them to their first visit. This type of practical support is far more valuable than general encouragement (Fancher & Kravitz, 2010)." setActiveSection={setActiveSection} language={language} /></span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span className="text-justify"><HighlightedText text="Speak openly about mental health treatment as something normal—because it is. Stigma remains one of the greatest barriers preventing individuals from seeking help (Goldman and partner, 1999)." setActiveSection={setActiveSection} language={language} /></span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span className="text-justify"><HighlightedText text="If your loved one expresses thoughts such as “I don’t want to live anymore,” “I want to disappear,” or shows any signs of self-harm, ask directly and calmly: “Are you thinking about hurting yourself?” Asking this does not increase risk; instead, it opens the door for them to share. Following this, contact a healthcare professional promptly to ensure timely support (Fancher & Kravitz, 2010)." setActiveSection={setActiveSection} language={language} /></span>
                </li>
              </ul>
              <p className="font-semibold mt-4">What NOT to do</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span className="text-justify"><HighlightedText text="Avoid statements such as “Just try harder,” “Others have it worse than you,” “Why don’t you think more positively?” or “You’re worrying everyone unnecessarily.” Although well-meaning, these can make the person feel worse and more withdrawn (Goldman and partner, 1999)." setActiveSection={setActiveSection} language={language} /></span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span className="text-justify"><HighlightedText text="Do not pressure them to “recover quickly” or set deadlines for improvement. Depression does not follow a fixed timeline, and such pressure can increase their burden." setActiveSection={setActiveSection} language={language} /></span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">•</span>
                  <span className="text-justify"><HighlightedText text="Do not neglect them, but also avoid excessive monitoring. Maintain a steady and gentle presence—you do not need to “rescue” them constantly, but it is important that they know you are there." setActiveSection={setActiveSection} language={language} /></span>
                </li>
              </ul>
            </section>
          </>
        );

      case 'references':
        return isVI ? (
          <>
            <h1>Tài liệu tham khảo</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              Nội dung này dựa trên các nguồn tài liệu dựa trên bằng chứng từ các tổ chức sức khỏe tâm thần đáng tin cậy.
            </p>

            <section id="sources" className="mt-8">
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">1.</span>
                  <span>Cui, L., Li, S., Wang, S., Wu, X., Liu, Y., Yu, W., Wang, Y., Tang, Y., Xia, M., & Li, B. (2024). Major depressive disorder: hypothesis, mechanism, prevention and treatment. Signal Transduction and Targeted Therapy, 9(30).</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">2.</span>
                  <span>Fancher, T. L., & Kravitz, R. L. (2010). In the clinic: Depression. Annals of Internal Medicine, 152(9), ITC5-1.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">3.</span>
                  <span>Goldman, L. S., Nielsen, N. H., & Champion, H. C. (1999). Awareness, diagnosis, and treatment of depression. Journal of General Internal Medicine, 14(9), 569–580.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">4.</span>
                  <span>Ji, B. (2023). Depressive Disorder: A General Overview. The International Conference on Interdisciplinary Humanities and Communication Studies. DOI: 10.54254/2753-7048/7/2022908.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">5.</span>
                  <span>Khune, A. A., Rathod, H. K., Deshmukh, S. P., & Chede, S. B. (2023). Mental health, depressive disorder and its management: A review. GSC Biological and Pharmaceutical Sciences, 25(2), 001–013.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">6.</span>
                  <span>Li, Z., Ruan, M., Chen, J., & Fang, Y. (2021). Major Depressive Disorder: Advances in Neuroscience Research and Translational Applications. Neuroscience Bulletin, 37(6), 863–880.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">7.</span>
                  <span>Marx, W., Penninx, B. W. J. H., Solmi, M., Furukawa, T. A., Firth, J., Carvalho, A. F., & Berk, M. (2023). Major depressive disorder. Nature Reviews Disease Primers, 9(44).</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">8.</span>
                  <span>Otte, C., Gold, S. M., Penninx, B. W., Pariante, C. M., Etkin, A., Fava, M., Mohr, D. C., & Schatzberg, A. F. (2016). Major depressive disorder. Nature Reviews Disease Primers, 2(16065).</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">9.</span>
                  <span>Psychology Translationist Network. (n.d.). Vietnamese DSM-5 Lite [Bản rút gọn tiếng Việt của Diagnostic and Statistical Manual of Mental Disorders, 5th ed.]. American Psychiatric Association.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">10.</span>
                  <span>Richards, D. (2011). Prevalence and clinical course of depression: A review. Clinical Psychology Review, 31(7), 1117–1125.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">11.</span>
                  <span>Wang, T. (2024). Major Depressive Disorder: a General Overview. SHS Web of Conferences, 186.</span>
                </li>
              </ul>
            </section>
          </>
        ) : (
          <>
            <h1>References</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              This content is based on evidence-based resources from trusted mental health organizations.
            </p>

            <section id="sources" className="mt-8">
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">1.</span>
                  <span>Cui, L., Li, S., Wang, S., Wu, X., Liu, Y., Yu, W., Wang, Y., Tang, Y., Xia, M., & Li, B. (2024). Major depressive disorder: hypothesis, mechanism, prevention and treatment. Signal Transduction and Targeted Therapy, 9(30).</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">2.</span>
                  <span>Fancher, T. L., & Kravitz, R. L. (2010). In the clinic: Depression. Annals of Internal Medicine, 152(9), ITC5-1.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">3.</span>
                  <span>Goldman, L. S., Nielsen, N. H., & Champion, H. C. (1999). Awareness, diagnosis, and treatment of depression. Journal of General Internal Medicine, 14(9), 569–580.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">4.</span>
                  <span>Ji, B. (2023). Depressive Disorder: A General Overview. The International Conference on Interdisciplinary Humanities and Communication Studies. DOI: 10.54254/2753-7048/7/2022908.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">5.</span>
                  <span>Khune, A. A., Rathod, H. K., Deshmukh, S. P., & Chede, S. B. (2023). Mental health, depressive disorder and its management: A review. GSC Biological and Pharmaceutical Sciences, 25(2), 001–013.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">6.</span>
                  <span>Li, Z., Ruan, M., Chen, J., & Fang, Y. (2021). Major Depressive Disorder: Advances in Neuroscience Research and Translational Applications. Neuroscience Bulletin, 37(6), 863–880.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">7.</span>
                  <span>Marx, W., Penninx, B. W. J. H., Solmi, M., Furukawa, T. A., Firth, J., Carvalho, A. F., & Berk, M. (2023). Major depressive disorder. Nature Reviews Disease Primers, 9(44).</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">8.</span>
                  <span>Otte, C., Gold, S. M., Penninx, B. W., Pariante, C. M., Etkin, A., Fava, M., Mohr, D. C., & Schatzberg, A. F. (2016). Major depressive disorder. Nature Reviews Disease Primers, 2(16065).</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">9.</span>
                  <span>Psychology Translationist Network. (n.d.). Vietnamese DSM-5 Lite [Bản rút gọn tiếng Việt của Diagnostic and Statistical Manual of Mental Disorders, 5th ed.]. American Psychiatric Association.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">10.</span>
                  <span>Richards, D. (2011). Prevalence and clinical course of depression: A review. Clinical Psychology Review, 31(7), 1117–1125.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">11.</span>
                  <span>Wang, T. (2024). Major Depressive Disorder: a General Overview. SHS Web of Conferences, 186.</span>
                </li>
              </ul>
            </section>
          </>
        );
      case 'what-is-anxiety':
        return isVI ? (
          <>
            <h1>Hiểu về Lo âu</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-justify">
              <HighlightedText text="Lo âu không chỉ đơn thuần là cảm giác lo lắng. Đó là một tình trạng y tế nghiêm trọng ảnh hưởng đến cách bạn cảm nhận, suy nghĩ và xử lý các hoạt động hàng ngày." setActiveSection={setActiveSection} language={language} />
            </p>
            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              {t.readingTime}: 5 phút · {t.lastUpdated}: 20 tháng 4, 2026
            </div>

            <section id="definition" className="mt-8">
              <h2>Lo âu là gì?</h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              <p className="indent-8">
                    <HighlightedText text="Lo lắng là một phần hoàn toàn bình thường của cuộc sống. Trước một kỳ thi quan trọng, một cuộc phỏng vấn xin việc, hoặc khi nhận được tin tức đáng lo ngại từ gia đình, hầu hết mọi người đều trải qua cảm giác lo lắng, nhịp tim nhanh và bồn chồn. Đây là một cơ chế sinh tồn tự nhiên giúp chúng ta tập trung và chuẩn bị đối phó với những thách thức." setActiveSection={setActiveSection} language={language} />
                  </p>

                  <p className="indent-8">
                    <HighlightedText text="Tuy nhiên, rối loạn lo âu về cơ bản khác với lo lắng thông thường. Khi lo lắng trở thành một rối loạn, cảm giác sợ hãi và căng thẳng diễn ra dai dẳng, quá mức so với tình huống thực tế và gây suy giảm đáng kể các chức năng hàng ngày—bao gồm công việc, kết quả học tập, các mối quan hệ và chất lượng cuộc sống nói chung (Naveen và cộng sự, 2024; Szuhany & Simon, 2022). Những cá nhân bị ảnh hưởng không chỉ đơn thuần là “quá lo lắng” hay “nhút nhát”; họ đang trải qua những phản ứng thần kinh và sinh lý thực sự nằm ngoài sự kiểm soát tự nguyện." setActiveSection={setActiveSection} language={language} />
                  </p>

                  <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-blue-500 rounded-lg p-5">
                    <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-justify">
                      <HighlightedText text="Theo DSM-5 (Chương 5: Rối loạn Lo âu, trang 81), sự phân biệt then chốt giữa lo lắng thông thường và rối loạn lo âu nằm ở hai yếu tố:" setActiveSection={setActiveSection} language={language} />
                    </p>

                    <ul className="mt-4 space-y-3 pl-6 list-disc text-gray-700 dark:text-gray-300">
                      <li>
                        <span className="font-semibold">Tính dai dẳng</span> — các triệu chứng thường kéo dài sáu tháng trở lên
                      </li>

                      <li>
                        <span className="font-semibold">Suy giảm chức năng</span> — lo lắng làm gián đoạn đáng kể cuộc sống hàng ngày
                      </li>
                    </ul>

                    <p className="mt-4 text-justify text-gray-700 dark:text-gray-300">
                      <HighlightedText text="DSM-5 cũng lưu ý rằng các rối loạn lo âu phổ biến hơn ở nữ giới, với tỷ lệ xấp xỉ 2:1 so với nam giới." setActiveSection={setActiveSection} language={language} />
                    </p>
                  </div>

                  <p className="indent-8">
                    Rối loạn lo âu không phải là một tình trạng đơn lẻ mà là một nhóm các rối loạn liên quan, mỗi loại có những đặc điểm riêng biệt. Tài liệu này tập trung vào năm loại phổ biến nhất mà bệnh nhân và gia đình họ nên hiểu rõ:
                  </p>

                  <ul className="list-disc pl-10 space-y-2">
                    <li>Rối loạn Lo âu Lan tỏa (GAD)</li>
                    <li>Rối loạn Lo âu Xã hội</li>
                    <li>Rối loạn Hoảng sợ</li>
                    <li>Ám ảnh sợ hãi đặc hiệu</li>
                    <li>Ám ảnh sợ khoảng trống</li>
                  </ul>

                  <p className="indent-8">
                    <HighlightedText text="Dữ liệu dịch tễ học chỉ ra rằng các rối loạn lo âu ảnh hưởng đến từ 4% đến hơn 33,7% dân số toàn cầu trong suốt cuộc đời (Bandelow & Michaelis, 2015; Javaid và cộng sự, 2023). Tình trạng này thường bắt đầu sớm, với độ tuổi khởi phát trung bình khoảng 11 tuổi, và nếu không được điều trị, có xu hướng diễn biến mãn tính sang tuổi trưởng thành (Beesdo, Knappe, & Pine, 2009). Điều này làm nổi bật tầm quan trọng sống còn của việc nhận biết sớm và can thiệp kịp thời." setActiveSection={setActiveSection} language={language} />
                  </p>              
              </div>

            </section>


            <section id="symptoms" className="mt-8">
              <h2>Các triệu chứng phổ biến</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                <HighlightedText text="Bảng dưới đây trình bày năm loại rối loạn lo âu phổ biến nhất theo tiêu chí chẩn đoán DSM-5, giúp bệnh nhân và gia đình họ nhận biết chúng." setActiveSection={setActiveSection} language={language} />
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#1E2A38] text-white">
                      <th className="px-4 py-3 text-left font-medium">Loại rối loạn</th>
                      <th className="px-4 py-3 text-left font-medium">Tiêu chí chẩn đoán chính (DSM-5)</th>
                      <th className="px-4 py-3 text-left font-medium">Biểu hiện trong đời thực</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Rối loạn Lo âu Lan tỏa (GAD)</td>
                      <td className="px-4 py-3">Lo lắng và quan tâm quá mức về nhiều sự kiện hoặc hoạt động, kéo dài ít nhất sáu tháng, kèm theo ít nhất ba trong sáu triệu chứng sau: bồn chồn, mệt mỏi, khó tập trung, cáu gắt, căng cơ và rối loạn giấc ngủ.</td>
                      <td className="px-4 py-3">Lo lắng dai dẳng và không thể kiểm soát về công việc, sức khỏe, gia đình, tương lai và các khía cạnh khác của cuộc sống. Cơ thể luôn căng cứng, tâm trí cảm thấy quá tải và giấc ngủ bị xáo trộn, ngay cả khi không có nguyên nhân rõ ràng hoặc tức thời.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Rối loạn Lo âu Xã hội</td>
                      <td className="px-4 py-3">Nỗi sợ hãi rõ rệt về các tình huống xã hội, với sự lo ngại mạnh mẽ về việc bị đánh giá tiêu cực hoặc bị làm cho xấu hổ.</td>
                      <td className="px-4 py-3">Nhịp tim nhanh hoặc đập thình thịch khi nói chuyện trước đám đông, gọi điện thoại cho người lạ hoặc tham gia các buổi tụ họp xã hội. Sau đó thường là nhiều giờ tự trách mình về những lời nói được cho là “ngớ ngẩn”.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Cơn hoảng sợ (Panic Attacks)</td>
                      <td className="px-4 py-3">Các cơn hoảng sợ đột ngột, lặp đi lặp lại đạt đỉnh điểm trong vòng vài phút, kèm theo nhiều triệu chứng thể chất và nỗi sợ dai dẳng về việc sẽ gặp phải một cơn hoảng sợ khác.</td>
                      <td className="px-4 py-3">Sự khởi phát đột ngột của các triệu chứng thể chất dữ dội—như tim đập nhanh, thắt ngực và khó thở—ngay cả khi đang nghỉ ngơi. Mặc dù cơn hoảng sợ qua nhanh, nỗi sợ hãi về “cơn tiếp theo” có thể kéo dài hàng tuần.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Ám ảnh sợ hãi đặc hiệu</td>
                      <td className="px-4 py-3">Nỗi sợ hãi rõ rệt và dai dẳng về một đối tượng hoặc tình huống cụ thể (như nhện, độ cao, máy bay hoặc tiêm thuốc), kéo dài ít nhất sáu tháng.</td>
                      <td className="px-4 py-3">Biết rằng con nhện không nguy hiểm nhưng vẫn cảm thấy hoảng loạn tột độ và không thể ở lại trong phòng. Từ chối đi máy bay mặc dù biết rằng du lịch hàng không là an toàn.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Ám ảnh sợ khoảng trống (Agoraphobia)</td>
                      <td className="px-4 py-3">Nỗi sợ hãi hoặc lo lắng rõ rệt về ít nhất hai trong năm tình huống sau: sử dụng phương tiện giao thông công cộng, ở nơi không gian mở, ở nơi không gian kín, ở trong đám đông, hoặc ở ngoài nhà một mình.</td>
                      <td className="px-4 py-3">Tránh đi một mình trên các phương tiện công cộng, chẳng hạn như tàu điện ngầm, do sợ không thể thoát ra trong trường hợp bị hoảng loạn. Theo thời gian, phạm vi hoạt động của cá nhân dần bị thu hẹp, thường chỉ giới hạn ở việc ở trong nhà.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <div className="mt-6 p-4 bg-brown-50 dark:bg-brown-900/20 rounded-lg border-l-4 border-brown-500">
              <div className="flex gap-3">
                <AlertCircle className="text-brown-600 dark:text-brown-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-brown-900 dark:text-brown-200 mb-1">Lưu ý quan trọng</h4>
                  <p className="text-sm text-brown-800 dark:text-brown-300 leading-relaxed text-justify">
                    <HighlightedText text="Các triệu chứng phải gây ra sự đau khổ đáng kể hoặc suy giảm nghiêm trọng trong các hoạt động hàng ngày và không được do tác động của các chất hoặc các tình trạng y tế khác. Rối loạn lo âu thường đi kèm với trầm cảm; do đó, các bác sĩ lâm sàng nên tiến hành đánh giá toàn diện để đảm bảo không bỏ sót tình trạng nào." setActiveSection={setActiveSection} language={language} />
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1>Understanding Anxiety</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-justify">
              <HighlightedText text="Anxiety is more than just feeling sad. It's a serious medical condition that affects how you feel, think, and handle daily activities." setActiveSection={setActiveSection} language={language} />
            </p>
            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Reading time: 5 min · Last updated: April 20, 2026
            </div>

            <section id="definition" className="mt-8">
              <h2>What is Anxiety?</h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              <p className="indent-8">
                    <HighlightedText text="Anxiety is a completely normal part of life. Before an important exam, a job interview, or when receiving troubling news from family, most people experience worry, a faster heartbeat, and restlessness. This is a natural survival mechanism that helps us focus and prepare to deal with challenges." setActiveSection={setActiveSection} language={language} />
                  </p>

                  <p className="indent-8">
                    <HighlightedText text="Anxiety disorders, however, are fundamentally different from normal anxiety. When anxiety becomes a disorder, feelings of fear and tension are persistent, excessive relative to the actual situation, and significantly impair daily functioning—including work, academic performance, relationships, and overall quality of life (Naveen and partner, 2024; Szuhany & Simon, 2022). Individuals affected are not simply “overly worried” or “shy”; they are experiencing genuine neurological and physiological responses that are beyond voluntary control." setActiveSection={setActiveSection} language={language} />
                  </p>

                  <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-blue-500 rounded-lg p-5">
                    <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-justify">
                      <HighlightedText text="According to the DSM-5 (Chapter 5: Anxiety Disorders, p. 81), the key distinction between normal anxiety and an anxiety disorder lies in two factors:" setActiveSection={setActiveSection} language={language} />
                    </p>

                    <ul className="mt-4 space-y-3 pl-6 list-disc text-gray-700 dark:text-gray-300">
                      <li>
                        <span className="font-semibold">Persistence</span> — symptoms
                        typically last six months or more
                      </li>

                      <li>
                        <span className="font-semibold">
                          Functional impairment
                        </span>{" "}
                        — anxiety significantly disrupts daily life
                      </li>
                    </ul>

                    <p className="mt-4 text-justify text-gray-700 dark:text-gray-300">
                      <HighlightedText text="The DSM-5 also notes that anxiety disorders are more prevalent among females, with an approximate ratio of 2:1 compabrown to males." setActiveSection={setActiveSection} language={language} />
                    </p>
                  </div>

                  <p className="indent-8">
                    Anxiety disorders are not a single condition but rather a group of
                    related disorders, each with distinct characteristics. This document
                    focuses on five of the most common types that patients and their
                    families should understand:
                  </p>

                  <ul className="list-disc pl-10 space-y-2">
                    <li>Generalized Anxiety Disorder (GAD)</li>
                    <li>Social Anxiety Disorder</li>
                    <li>Panic Disorder</li>
                    <li>Specific Phobia</li>
                    <li>Agoraphobia</li>
                  </ul>

                  <p className="indent-8">
                    <HighlightedText text="Epidemiological data indicate that anxiety disorders affect between 4% and more than 33.7% of the global population over a lifetime (Bandelow & Michaelis, 2015; Javaid and partner, 2023). The condition often begins early, with an average onset around age 11, and, if left untreated, tends to follow a chronic course into adulthood (Beesdo, Knappe, & Pine, 2009). This highlights the critical importance of early recognition and timely intervention." setActiveSection={setActiveSection} language={language} />
                  </p>              
              </div>

            </section>


            <section id="symptoms" className="mt-8">
              <h2>Common Symptoms</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
<HighlightedText text="The table below presents the five most common types of anxiety disorders according to the DSM-5 diagnostic criteria, helping patients and their families recognize them." setActiveSection={setActiveSection} language={language} />              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#1E2A38] text-white">
                      <th className="px-4 py-3 text-left font-medium">Type of Disorder</th>
                      <th className="px-4 py-3 text-left font-medium">Key Diagnostic Criteria (DSM-5)</th>
                      <th className="px-4 py-3 text-left font-medium">Real-Life Manifestations</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Generalized Anxiety Disorder  (GAD)</td>
                      <td className="px-4 py-3">Excessive anxiety and worry about multiple events or activities, persisting for at least six months, accompanied by at least three of the following six symptoms: restlessness, fatigue, difficulty concentrating, irritability, muscle tension, and sleep disturbances.</td>
                      <td className="px-4 py-3">Persistent and uncontrollable worry about work, health, family, the future, and other aspects of life. The body remains tense, the mind feels overwhelmed, and sleep is disturbed, even in the absence of a clear or immediate cause.  </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Social Anxiety Disorder</td>
                      <td className="px-4 py-3">Marked fear of social situations, with a strong concern about being negatively evaluated or embarrassed.</td>
                      <td className="px-4 py-3">A rapid or pounding heartbeat when speaking in public, making phone calls to strangers, or participating in social gatherings. This is often followed by hours of self-criticism over perceived “foolish” remarks. </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Panic Attacks</td>
                      <td className="px-4 py-3">Recurrent, sudden panic attacks that peak within minutes, accompanied by multiple physical symptoms and a persistent fear of experiencing another episode.</td>
                      <td className="px-4 py-3">A sudden onset of intense physical symptoms—such as a racing heartbeat, chest tightness, and shortness of breath—even while at rest. Although the episode passes quickly, the fear of “the next attack” may persist for weeks.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Specific Phobia</td>
                      <td className="px-4 py-3">Marked and persistent fear of a specific object or situation (such as spiders, heights, flying, or injections), lasting for at least six months.</td>
                      <td className="px-4 py-3">Recognizing that the spider is not dangerous, yet still experiencing intense panic and being unable to remain in the room. Refusing to fly despite knowing that air travel is safe.</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Agoraphobia </td>
                      <td className="px-4 py-3">Marked fear or anxiety about at least two of the following five situations: using public transportation, being in open spaces, being in enclosed spaces, being in crowds, or being outside the home alone. </td>
                      <td className="px-4 py-3">Avoiding traveling alone on public transportation, such as the subway, due to fear of being unable to escape in the event of a panic attack. Over time, the individual’s range of activities gradually becomes restricted, often limited to staying at home.</td>
                    </tr>
                  
                  </tbody>
                </table>
              </div>
            </section>

            <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
              <div className="flex gap-3">
                <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-red-900 dark:text-red-200 mb-1">Important Note</h4>
                  <p className="text-sm text-red-800 dark:text-red-300 leading-relaxed text-justify">
<HighlightedText text="The symptoms must cause significant distress or serious impairment in daily functioning and must not be attributable to the effects of substances or other medical conditions. Anxiety disorders commonly co-occur with depression; therefore, clinicians should conduct a comprehensive assessment to ensure that no condition is overlooked." setActiveSection={setActiveSection} language={language} />
</p>
                </div>
              </div>
            </div>
          </>
        );  
        case 'cause':
        return isVI ? (
          <>
            <h1>Nguyên nhân chính gây ra rối loạn lo âu</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-justify">
              <HighlightedText text="Câu hỏi “Tại sao tôi lại trải qua sự lo lắng như thế này?” là câu hỏi mà hầu hết các cá nhân đều tự hỏi mình, thường đi kèm với nỗi lo thầm kín: “Đây có phải là lỗi của mình không?” Câu trả lời khoa học rất rõ ràng: không có nguyên nhân đơn lẻ nào, và chắc chắn đó không phải là lỗi của bạn. Rối loạn lo âu nảy sinh từ một sự tương tác phức tạp giữa các yếu tố sinh học, di truyền và môi trường (Deckert, 2009)." setActiveSection={setActiveSection} language={language} />
            </p>

            <section id="cause&solution" className="mt-8">
              <h2>Nguyên nhân</h2>

              <div className="mt-6 space-y-6">
                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-green-600 dark:text-green-400">Yếu tố sinh học và di truyền</h3>
                  <div className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    <p className="indent-8 text-gray-600 dark:text-gray-400">
                      <HighlightedText text="Rối loạn lo âu có nền tảng sinh học rõ ràng. Khả năng di truyền của các rối loạn lo âu khác nhau được ước tính nằm trong khoảng từ 30% đến 67%, cho thấy di truyền đóng một vai trò quan trọng trong việc định hình mức độ dễ bị tổn thương của cá nhân (Ströhle, Gensichen, & Domschke, 2018). Nói cách khác, một số cá nhân sinh ra đã có “ngưỡng báo động” thấp hơn trong hệ thần kinh—họ có thể phản ứng dữ dội hơn với cùng một mức độ căng thẳng so với những người khác." setActiveSection={setActiveSection} language={language} />
                    </p>
                    <p className="indent-8 text-gray-600 dark:text-gray-400">
                      <HighlightedText text="Bystritsky và cộng sự (2013) đã đề xuất mô hình ABC để giải thích các cơ chế sinh học thần kinh của lo âu: hạch hạnh nhân (amygdala)—vùng não chịu trách nhiệm xử lý các cảm xúc nguyên thủy—kích hoạt các tín hiệu “báo động” quá mức và sai hướng (Alarm), dẫn đến những niềm tin sai lệch về sự nguy hiểm (Beliefs), từ đó dẫn đến các hành vi ứng phó mang tính né tránh ngày càng tăng (Coping). Ngoài ra, sự mất cân bằng trong các chất dẫn truyền thần kinh—đặc biệt là GABA (chất điều hòa ức chế tự nhiên của não đối với lo âu), serotonin và norepinephrine—cũng góp phần vào sự dai dẳng của lo âu mãn tính (Naveen và cộng sự, 2024)." setActiveSection={setActiveSection} language={language} />
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-green-600 dark:text-green-400">
                    Yếu tố tâm lý và môi trường</h3>
                  <div className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    <p className="indent-8 text-gray-600 dark:text-gray-400">
                      <HighlightedText text="Bên cạnh những ảnh hưởng sinh học, những trải nghiệm trong cuộc sống cũng đóng một vai trò quan trọng không kém. Những tổn thương thời thơ ấu, sự lạm dụng về thể chất hoặc tinh thần, phong cách nuôi dạy con cái quá bảo bọc hoặc quá nghiêm khắc, và sự tiếp xúc kéo dài với các sự kiện căng thẳng trong cuộc sống là những yếu tố môi trường then chốt (Craske & Stein, 2016). Những trải nghiệm này không chỉ để lại những dấu ấn tâm lý mà còn có thể dẫn đến những thay đổi biểu hiện gen (epigenetic)—nghĩa là những thay đổi trong cách các gen được “bật” hoặc “tắt”—dần dần làm giảm khả năng điều chỉnh cảm xúc hiệu quả của cá nhân." setActiveSection={setActiveSection} language={language} />
                    </p>
                    <p className="indent-8 text-gray-600 dark:text-gray-400">
                      <HighlightedText text="Điều quan trọng cần hiểu là các yếu tố sinh học và môi trường không hoạt động độc lập; thay vào đó, chúng tương tác thông qua các tương tác gen-môi trường (G×E). Hai cá nhân có nền tảng di truyền tương tự nhau có thể có những kết quả rất khác nhau tùy thuộc vào môi trường của họ, và ngược lại, hai cá nhân tiếp xúc với cùng một sự kiện đời sống có thể phản ứng khác nhau dựa trên tiền đề sinh học của họ. Đây là lý do tại sao các phương pháp điều trị cần được cá nhân hóa và toàn diện." setActiveSection={setActiveSection} language={language} />
                    </p>
                  </div>
                </div>
                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-green-600 dark:text-green-400">
                    Vòng xoáy duy trì: Tại sao lo âu không tự biến mất?
                  </h3>
                  <div className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    <p className="indent-8 text-gray-600 dark:text-gray-400">
                      <HighlightedText text="Một điểm mấu chốt mà nhiều người không nhận ra là các rối loạn lo âu có xu hướng tự duy trì thông qua một cơ chế vòng lặp. Khi đối mặt với một tình huống gây lo âu, các cá nhân thường né tránh nó. Sự né tránh này mang lại sự nhẹ nhõm tức thì, từ đó củng cố hành vi này. Bộ não sau đó học được rằng “né tránh đồng nghĩa với an toàn,” dẫn đến việc tăng cường né tránh trong tương lai. Kết quả là, phạm vi hoạt động của một người dần bị thu hẹp, trong khi chính nỗi sợ hãi lại tiếp tục lan rộng." setActiveSection={setActiveSection} language={language} />                    </p>
                    <p className="indent-8 text-gray-600 dark:text-gray-400">
                      <HighlightedText text="Điều này giải thích tại sao việc “chỉ né tránh tình huống” không giải quyết được vấn đề—thực tế, nó thường làm tình trạng tồi tệ hơn theo thời gian." setActiveSection={setActiveSection} language={language} />
                    </p>
                  </div>
                </div>
              </div>
            </section>  
            <section id="cause&solution" className="mt-8">
              <h2>Giải pháp</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-justify">
                  <HighlightedText text="Tin tốt: Rối loạn lo âu nằm trong số các tình trạng sức khỏe tâm thần có tỷ lệ đáp ứng điều trị cao nhất. Bảng dưới đây tóm tắt các phương pháp dựa trên bằng chứng được hỗ trợ bởi các nghiên cứu khoa học mạnh mẽ:" setActiveSection={setActiveSection} language={language} />
                </p>
                <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#1E2A38] text-white">
                      <th className="px-4 py-3 text-left font-medium">Phương pháp điều trị</th>
                      <th className="px-4 py-3 text-left font-medium">Mô tả và Cơ chế hoạt động</th>
                      <th className="px-4 py-3 text-left font-medium">Tài liệu tham khảo</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3"><HighlightedText text="Liệu pháp Nhận thức Hành vi (CBT)" setActiveSection={setActiveSection} language={language} /></td>
                      <td className="px-4 py-3"><HighlightedText text="Tiêu chuẩn vàng trong điều trị lo âu. Nó giúp các cá nhân xác định và thay đổi các kiểu suy nghĩ kém thích nghi và sử dụng các kỹ thuật tiếp xúc có kiểm soát để giảm bớt các hành vi né tránh" setActiveSection={setActiveSection} language={language} /></td>
                      <td className="px-4 py-3">Craske & Stein (2016); Ohi và cộng sự (2025) </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3"><HighlightedText text="SSRIs / SNRIs" setActiveSection={setActiveSection} language={language} /></td>
                      <td className="px-4 py-3"><HighlightedText text="Điều trị bằng thuốc đầu tay. Nó hoạt động bằng cách điều chỉnh nồng độ serotonin và norepinephrine trong não. Thường mất 2–6 tuần để tạo ra tác dụng rõ rệt và không gây nghiện như các chất gây nghiện." setActiveSection={setActiveSection} language={language} /></td>
                      <td className="px-4 py-3">Szuhany & Simon (2022); Naveen và cộng sự (2024) </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Kỹ thuật chánh niệm và thư giãn</td>
                      <td className="px-4 py-3"><HighlightedText text="Các bài tập thở, thư giãn cơ bắp tiến triển (PMR) và thiền chánh niệm giúp giảm hoạt động của hạch hạnh nhân và hạ thấp ngưỡng sinh lý của phản ứng lo âu." setActiveSection={setActiveSection} language={language} /></td>
                      <td className="px-4 py-3">Bystritsky và cộng sự (2013); Craske & Stein (2016)</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3"><HighlightedText text="Tập thể dục (aerobic)" setActiveSection={setActiveSection} language={language} /></td>
                      <td className="px-4 py-3"><HighlightedText text="Tập thể dục aerobic thường xuyên có thể hiệu quả như CBT đối với lo âu nhẹ đến trung bình; nó kích thích sản xuất BDNF và giảm nồng độ cortisol mãn tính." setActiveSection={setActiveSection} language={language} /></td>
                      <td className="px-4 py-3">Naveen và cộng sự (2024)</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">CBT kỹ thuật số / Hỗ trợ AI</td>
                      <td className="px-4 py-3">Các ứng dụng trị liệu trực tuyến và các công cụ dựa trên AI đang được phát triển để mở rộng khả năng tiếp cận điều trị, đặc biệt là ở những vùng có sự hạn chế về số lượng chuyên gia sức khỏe tâm thần.</td>
                      <td className="px-4 py-3">Bui (2021)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-brown-50 dark:bg-brown-900/20 rounded-lg border-l-4 border-brown-500">
              <div className="flex gap-3">
                <AlertCircle className="text-brown-600 dark:text-brown-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-brown-900 dark:text-brown-200 mb-1">Lưu ý quan trọng</h4>
                  <p className="text-sm text-brown-800 dark:text-brown-300 leading-relaxed">
                    Tuy nhiên, không có phương pháp đơn lẻ nào đóng vai trò là một “giải pháp duy nhất.” Phương pháp điều trị hiệu quả nhất thường bao gồm sự kết hợp của liệu pháp tâm lý—đặc biệt là Liệu pháp Nhận thức Hành vi (CBT)—điều trị bằng thuốc khi cần thiết, và sửa đổi lối sống. Bác sĩ tâm thần hoặc chuyên gia sức khỏe tâm thần là người có trình độ tốt nhất để xác định kế hoạch điều trị phù hợp dựa trên loại rối loạn cụ thể, mức độ nghiêm trọng và hoàn cảnh cá nhân của mỗi bệnh nhân.
                  </p>
                </div>
              </div>
            </div>
              
            </section>
          </>
        ) : (
          <>
            <h1>The main reason which cause anxiety disorders</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-justify">
              <HighlightedText text="The question “Why am I experiencing anxiety like this?” is one that most individuals ask themselves, often accompanied by the unspoken concern: “Is this my fault?” The scientific answer is clear: there is no single cause, and it is certainly not your fault. Anxiety disorders arise from a complex interaction of biological, genetic, and environmental factors (Deckert, 2009)." setActiveSection={setActiveSection} language={language} />
            </p>

            <section id="cause&solution" className="mt-8">
              <h2>Cause</h2>

              <div className="mt-6 space-y-6">
                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-green-600 dark:text-green-400">Biological and genetic factors</h3>
                  <div className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    <p className="indent-8 text-gray-600 dark:text-gray-400">
                      <HighlightedText text="Anxiety disorders have a well-established biological foundation. The heritability of different anxiety disorders is estimated to range from 30% to 67%, indicating that genetics play a significant role in shaping individual vulnerability (Ströhle, Gensichen, & Domschke, 2018). In other words, some individuals are born with a lower “alarm threshold” in their nervous system—they may react more intensely to the same level of stress compabrown to others." setActiveSection={setActiveSection} language={language} />
                    </p>
                    <div className="text-center">
                      <img
                        src={genetic}
                        alt="genetic image"
                        className="mt-6 w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    <p className="indent-8 text-gray-600 dark:text-gray-400">
                      <HighlightedText text="Bystritsky and partner (2013) proposed the ABC model to explain the neurobiological mechanisms of anxiety: the amygdala—the brain region responsible for processing primal emotions—triggers excessive and misdirected “alarm” signals (Alarm), leading to distorted beliefs about danger (Beliefs), which in turn result in increasingly avoidant coping behaviors (Coping). In addition, imbalances in neurotransmitters—particularly GABA (the brain’s natural inhibitory regulator of anxiety), serotonin, and norepinephrine—contribute to the persistence of chronic anxiety (Naveen and partner, 2024)." setActiveSection={setActiveSection} language={language} />
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-green-600 dark:text-green-400">
                    Psychological and environmental factors</h3>
                  <div className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    <p className="indent-8 text-gray-600 dark:text-gray-400">
                      <HighlightedText text="Alongside biological influences, life experiences play an equally important role. Early-life trauma, physical or emotional abuse, overly protective or overly strict parenting styles, and prolonged exposure to stressful life events are key environmental factors (Craske & Stein, 2016). These experiences not only leave psychological imprints but can also lead to epigenetic changes—that is, alterations in how genes are “turned on” or “off”—gradually brownucing the individual’s ability to regulate emotions effectively." setActiveSection={setActiveSection} language={language} />
                    </p>
                    <div className="text-center">
                      <img
                        src={environment}
                        alt="environment image"
                        className="mt-6 w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                    <p className="indent-8 text-gray-600 dark:text-gray-400">
                      <HighlightedText text="It is important to understand that biological and environmental factors do not operate independently; rather, they interact through gene–environment interactions (G×E). Two individuals with similar genetic backgrounds may have very different outcomes depending on their environments, and conversely, two individuals exposed to the same life event may respond differently based on their biological pbrownispositions. This is why treatment approaches need to be personalized and comprehensive." setActiveSection={setActiveSection} language={language} />
                    </p>
                  </div>
                </div>
                <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-green-600 dark:text-green-400">
                    The maintenance cycle: Why doesn’t anxiety simply go away?
                  </h3>
                  <div className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    <p className="indent-8 text-gray-600 dark:text-gray-400">
                      <HighlightedText text="A key point that many people are unaware of is that anxiety disorders tend to sustain themselves through a cyclical mechanism. When faced with an anxiety-provoking situation, individuals often avoid it. This avoidance brings immediate relief, which in turn reinforces the behavior. The brain then learns that “avoidance equals safety,” leading to increased avoidance in the future. As a result, one’s range of activities gradually narrows, while the fear itself continues to expand." setActiveSection={setActiveSection} language={language} />                    </p>
                    <p className="indent-8 text-gray-600 dark:text-gray-400">
                      <HighlightedText text="This explains why “just avoiding the situation” does not solve the problem—in fact, it often worsens the condition over time." setActiveSection={setActiveSection} language={language} />
                    </p>
                  </div>
                </div>
              </div>
            </section>  
            <section id="cause&solution" className="mt-8">
              <h2>Solution</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-justify">
                  <HighlightedText text="Good news: Anxiety disorders are among the mental health conditions with the highest treatment response rates. The table below summarizes evidence-based approaches supported by strong scientific research:" setActiveSection={setActiveSection} language={language} />
                </p>
                <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#1E2A38] text-white">
                      <th className="px-4 py-3 text-left font-medium">Treatment Method </th>
                      <th className="px-4 py-3 text-left font-medium">Description and Mechanism of Action</th>
                      <th className="px-4 py-3 text-left font-medium">References</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3"><HighlightedText text="Cognitive Behavioral Therapy (CBT)" setActiveSection={setActiveSection} language={language} /></td>
                      <td className="px-4 py-3"><HighlightedText text="The gold standard in the treatment of anxiety. It helps individuals identify and modify maladaptive thought patterns and uses controlled exposure techniques to brownuce avoidance behaviors" setActiveSection={setActiveSection} language={language} /></td>
                      <td className="px-4 py-3">Craske & Stein (2016); Ohi and partner2025) </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3"><HighlightedText text="SSRIs / SNRIs" setActiveSection={setActiveSection} language={language} /></td>
                      <td className="px-4 py-3"><HighlightedText text="First-line pharmacological treatment. It works by regulating the levels of serotonin and norepinephrine in the brain. It typically takes 2–6 weeks to produce noticeable effects and does not cause addiction in the manner of addictive substances." setActiveSection={setActiveSection} language={language} /></td>
                      <td className="px-4 py-3">Szuhany & Simon (2022); Naveen and partner(2024) </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">Mindfulness and Relaxation Techniques</td>
                      <td className="px-4 py-3"><HighlightedText text="Breathing exercises, progressive muscle relaxation (PMR), and mindfulness meditation help brownuce amygdala activity and lower the physiological threshold of the anxiety response." setActiveSection={setActiveSection} language={language} /></td>
                      <td className="px-4 py-3">Bystritsky and partner(2013); Craske & Stein (2016)</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3"><HighlightedText text="Do exercises (aerobic)" setActiveSection={setActiveSection} language={language} /></td>
                      <td className="px-4 py-3"><HighlightedText text="Regular aerobic exercise can be as effective as CBT for mild to moderate anxiety; it stimulates the production of BDNF and brownuces chronic cortisol levels." setActiveSection={setActiveSection} language={language} /></td>
                      <td className="px-4 py-3">Naveen and partner(2024)</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-4 py-3">CBT digital / AI support</td>
                      <td className="px-4 py-3">Online therapeutic applications and AI-based tools are being developed to expand access to treatment, particularly in regions with limited availability of mental health professionals.</td>
                      <td className="px-4 py-3">Bui (2021)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
              <div className="flex gap-3">
                <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-red-900 dark:text-red-200 mb-1">Important Note</h4>
                  <p className="text-sm text-red-800 dark:text-red-300 leading-relaxed">
                  However, no single method acts as a “standalone cure.” The most effective treatment approach typically involves a combination of psychotherapy—particularly Cognitive Behavioral Therapy (CBT)—pharmacological treatment when necessary, and lifestyle modifications. A psychiatrist or mental health professional is best suited to determine the appropriate treatment plan based on the specific type of disorder, its severity, and the individual circumstances of each patient.  </p>
                </div>
              </div>
            </div>
              
            </section>
          </>
        );
        case 'treatment':
        return isVI ? (
          <>
            <h1>Bạn có thể làm gì</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-justify">
                <HighlightedText text="Việc điều trị thành công phụ thuộc vào sự tham gia tích cực của bạn. Dưới đây là năm hành động thiết yếu:" setActiveSection={setActiveSection} language={language} />
            </p>

            <section id="seek-help" className="mt-8">
              <h2>Nếu bạn nhận thấy các triệu chứng lo âu ở bản thân.</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                <HighlightedText text="Điều quan trọng nhất cần nhớ là: bạn không có lỗi khi cảm thấy lo âu, và bạn không phải đối mặt với nó một mình. Dưới đây là các bước thực tế bạn có thể thực hiện:" setActiveSection={setActiveSection} language={language} />
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                                         
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>

                  <div>
                    <span className="block text-[#1E2A38] dark:text-blue-400 font-bold">
                      Hành động 1: Hiểu bản chất của lo âu và ngừng “chống lại” nó
                    </span>
                    <p className="mt-2 pl-6 text-gray-700 dark:text-gray-300 text-justify">
                      Các triệu chứng thể chất (như nhịp tim nhanh hoặc khó thở) là những báo động giả. Hãy quan sát chúng mà không cố gắng kiểm soát chúng:
                    </p>
                    <p className="mt-2 pl-6 text-gray-700 dark:text-gray-300 text-justify italic"> 
                      “Tôi đang trải qua cảm giác lo âu. Cảm giác này khó chịu nhưng không nguy hiểm. Nó sẽ qua đi.”
                    </p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>

                  <div>
                    <span className="block text-[#1E2A38] font-bold dark:text-blue-400">
                      Hành động 2: Đối mặt với lo âu thay vì né tránh (từng bước một)
                    </span>
                    <p className="mt-2 pl-6 text-gray-700 dark:text-gray-300 text-justify">
                      <HighlightedText text="Làm việc với một chuyên gia để xây dựng hệ thống phân cấp tiếp xúc: bắt đầu với những tình huống ít gây sợ hãi hơn và dần dần tiếp cận những tình huống thử thách hơn một cách có kiểm soát. Theo thời gian, bộ não “học lại” rằng những tình huống này là an toàn, làm giảm phản ứng sợ hãi." setActiveSection={setActiveSection} language={language} />
                    </p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>

                  <div>
                    <span className="block text-[#1E2A38] font-bold dark:text-blue-400">
                      Hành động 3: Thay đổi lối sống dựa trên bằng chứng:
                    </span>

                    <ul className="list-[circle] mt-2 pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
                      <li>
                        Ghi chép nhật ký triệu chứng trước các cuộc hẹn
                      </li>

                      <li>
                        Uống thuốc theo đơn và duy trì đều đặn trong 2–6 tuần (không tự ý ngừng thuốc)
                      </li>

                      <li>
                        <HighlightedText text="Hoàn thành các bài tập CBT được giao (tái cấu trúc nhận thức và hành vi)" setActiveSection={setActiveSection} language={language} />
                      </li>

                      <li>
                        Tránh tìm kiếm quá mức về các triệu chứng trên mạng
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>

                  <div>
                    <span className="block text-[#1E2A38] font-bold dark:text-blue-400">
                      Hành động 4: Xây dựng nền tảng thể chất vững chắc
                    </span>

                    <ul className="list-[circle] mt-2 pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
                      <li>
                        <HighlightedText text="Thực hiện các bài tập aerobic thường xuyên" setActiveSection={setActiveSection} language={language} />
                      </li>

                      <li>
                        Thực hành các kỹ thuật thở sâu (ví dụ: thở 4–4–6) và thư giãn cơ bắp
                      </li>

                      <li>
                        Duy trì lịch ngủ nhất quán và hạn chế caffeine cũng như sử dụng màn hình trước khi đi ngủ
                      </li>

                      <li>
                        Giảm tiêu thụ rượu bia
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>

                  <div>
                    <span className="block text-[#1E2A38] font-bold dark:text-blue-400">
                      Hành động 5: Phát triển mạng lưới hỗ trợ và kiên nhẫn với quá trình
                    </span>
                    <p className="mt-2 pl-6 text-gray-700 dark:text-gray-300 text-justify">
                      Chia sẻ trải nghiệm của bạn với ít nhất một người đáng tin cậy. Phục hồi không phải là một quá trình tuyến tính—những bước lùi là điều bình thường. Mục tiêu không phải là loại bỏ hoàn toàn lo âu, mà là sống chung với nó mà không để nó kiểm soát cuộc sống của bạn.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            <section id="support-others" className="mt-8">
              <h2>Nếu bạn muốn giúp đỡ người thân mắc rối loạn lo âu.</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                Bạn nên lắng nghe nhiều hơn nói và chân thành công nhận cảm xúc của họ bằng những câu nói như: “Tôi hiểu rằng bạn đang cảm thấy lo lắng—tôi ở đây với bạn.” Khuyến khích và hỗ trợ họ tìm kiếm sự giúp đỡ chuyên nghiệp từ nhà tâm lý học hoặc bác sĩ tâm thần, ví dụ bằng cách giúp đặt lịch hẹn, nhắc nhở họ về các lần thăm khám sắp tới và đi cùng họ nếu họ cảm thấy thoải mái.
              </p>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                Bạn cũng có thể hỗ trợ họ thực hành các kỹ thuật thư giãn, thở sâu và dần dần đối mặt với các tình huống gây lo âu dưới sự hướng dẫn của chuyên gia y tế. Khi họ trải qua các cơn lo âu hoặc hoảng sợ, hãy giữ bình tĩnh và nhẹ nhàng nhắc nhở họ rằng những triệu chứng này là tạm thời và không nguy hiểm.
              </p>
            </section>
          </>
        ) : (
          <>
            <h1>What You Can Do</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-justify">
                <HighlightedText text="Successful treatment depends on your active participation. Below are five essential actions:" setActiveSection={setActiveSection} language={language} />
            </p>

            <section id="seek-help" className="mt-8">
              <h2>If you find out anxiety symptom in yourself.</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                <HighlightedText text="The most important thing to remember is this: you are not at fault for experiencing anxiety, and you do not have to face it alone. Below are practical steps you can take:" setActiveSection={setActiveSection} language={language} />
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                                         
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>

                  <div>
                    <span className="block text-[#1E2A38] dark:text-blue-400 font-bold">
                      Action 1: Understand the nature of anxiety and stop “fighting” it
                    </span>
                    <p className="mt-2 pl-6 text-gray-700 dark:text-gray-300 text-justify">
                      Physical symptoms (such as a rapid heartbeat or shortness of breath) are false alarms. Observe them without trying to control them: 
                    </p>
                    <p className="mt-2 pl-6 text-gray-700 dark:text-gray-300 text-justify italic"> 
                      “I am experiencing anxiety. This feeling is uncomfortable but not dangerous. It will pass.”                    
                    </p>

                    
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>

                  <div>
                    <span className="block text-[#1E2A38] font-bold dark:text-blue-400">
                      Action 2: Face anxiety instead of avoiding it (gradually)
                    </span>
                    <p className="mt-2 pl-6 text-gray-700 dark:text-gray-300 text-justify">
                      <HighlightedText text="Work with a professional to build an exposure hierarchy: start with less intimidating situations and progressively approach more challenging ones in a controlled manner. Over time, the brain “relearns” that these situations are safe, brownucing the fear response." setActiveSection={setActiveSection} language={language} />
                    </p>

                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>

                  <div>
                    <span className="block text-[#1E2A38] font-bold dark:text-blue-400">
                      Action 3: Make evidence-based lifestyle changes:
                    </span>

                    <ul className="list-[circle] mt-2 pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
                      <li>
                        Keep a symptom journal before appointments
                      </li>

                      <li>
                        Take medication as prescribed and remain consistent for 2–6 weeks (do not discontinue on your own)
                      </li>

                      <li>
                        <HighlightedText text="Complete assigned CBT exercises (cognitive and behavioral restructuring)" setActiveSection={setActiveSection} language={language} />
                      </li>

                      <li>
                        Avoid excessive online searching about symptoms
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>

                  <div>
                    <span className="block text-[#1E2A38] font-bold dark:text-blue-400">
                      Action 4: Build a strong physical foundation
                    </span>

                    <ul className="list-[circle] mt-2 pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
                      <li>
                        <HighlightedText text="Engage in regular aerobic exercise" setActiveSection={setActiveSection} language={language} />
                      </li>

                      <li>
                        Practice deep breathing techniques (e.g., 4–4–6 breathing) and muscle relaxation
                      </li>

                      <li>
                        Maintain a consistent sleep schedule and limit caffeine and screen use before bedtime
                      </li>

                      <li>
                        brownuce alcohol consumption
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#1E2A38] dark:text-blue-400">•</span>

                  <div>
                    <span className="block text-[#1E2A38] font-bold dark:text-blue-400">
                      Action 5: Develop a support network and remain patient with the process
                    </span>
                    <p className="mt-2 pl-6 text-gray-700 dark:text-gray-300 text-justify">
                      Share your experience with at least one trusted person. Recovery is not a linear process—setbacks are normal. The goal is not to eliminate anxiety entirely, but to live with it without allowing it to control your life.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            <section id="support-others" className="mt-8">
              <h2>If you want to help your relative people with MDD.</h2>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                You should listen more than you speak and sincerely acknowledge their feelings with statements such as, “I understand that you’re feeling anxious—I’m here with you.” Encourage and support them in seeking professional help from a psychologist or psychiatrist, for example by helping schedule appointments, reminding them of upcoming visits, and accompanying them if they are comfortable.
              </p>
              <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                You can also support them in practicing relaxation techniques, deep breathing, and gradually facing anxiety-provoking situations under the guidance of a healthcare professional. When they experience anxiety or panic episodes, remain calm and gently remind them that these symptoms are temporary and not dangerous.
              </p>
              
            </section>
          </>
        );

       case 'anxiety-references':
        return isVI ? (
          <>
            <h1>Tài liệu tham khảo</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              Nội dung này dựa trên các nguồn tài liệu dựa trên bằng chứng từ các tổ chức sức khỏe tâm thần đáng tin cậy.
            </p>

            <section id="sources" className="mt-8">
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">1.</span>
                  <span>Bandelow, B., & Michaelis, S. (2015). Epidemiology of anxiety disorders in the 21st century. Dialogues in Clinical Neuroscience, 17(3), 327–335.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">2.</span>
                  <span>Beesdo, K., Knappe, S., & Pine, D. S. (2009). Anxiety and anxiety disorders in children and adolescents: developmental issues and implications for DSM-V. Psychiatric Clinics of North America, 32(3), 483–524.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">3.</span>
                  <span>Bui, E. (2021). Anxiety and Stress-Related Disorders: From Current Evidence-Based Practices to Future Artificial Intelligence–Based Innovations. Focus, 19(2), 143–144.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">4.</span>
                  <span>Bystritsky, A., Khalsa, S. S., Cameron, M. E., & Schiffman, J. (2013). Current diagnosis and treatment of anxiety disorders. P&T, 38(1), 30–57.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">5.</span>
                  <span>Craske, M. G., & Stein, M. B. (2016). Anxiety. The Lancet, 388(10063), 3048–3059.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">6.</span>
                  <span>Deckert, J. (2009). Anxiety disorders: causes, diagnosis and treatment. Acta Neuropsychiatrica, 21(S2), 9–10.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">7.</span>
                  <span>Goodwin, G. M. (2015). The overlap between anxiety, depression, and obsessive-compulsive disorder. Dialogues in Clinical Neuroscience, 17(3), 249–260.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">8.</span>
                  <span>Javaid, S. F., Hashim, I. J., Hashim, M. J., Stip, E., Samad, M. A., & Al Ahbabi, A. (2023). Epidemiology of anxiety disorders: global burden and sociodemographic associations. Middle East Current Psychiatry, 30(1),</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">9.</span>
                  <span>Naveen, V., Felic, S., Aswin, A. V., & Arul Pakasam, K. C. (2024). A Review on Current Understanding, Clinical Manifestations, and Therapeutic Approaches of Anxiety Disorders. Journal of Pharma Insights and Research, 2(5), 173–181.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">10.</span>
                  <span>Ohi, K., Fujikane, D., Takai, K., Kuramitsu, A., Muto, Y., Sugiyama, S., & Shioiri, T. (2025). Clinical features and genetic mechanisms of anxiety, fear, and avoidance: A comprehensive review of five anxiety disorders. Molecular Psychiatry, 30, 4928–4936.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">11.</span>
                  <span>Psychology Translationist Network. (n.d.). Vietnamese DSM-5 Lite [Bản rút gọn tiếng Việt của Diagnostic and Statistical Manual of Mental Disorders, 5th ed.]. American Psychiatric Association.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">12.</span>
                  <span>Scarella, T. M., Boland, R. J., & Barsky, A. J. (2019). Illness Anxiety Disorder: Psychopathology, Epidemiology, Clinical Characteristics, and Treatment. Psychosomatics, 60(5), 406–416.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">13.</span>
                  <span>Showraki, M., Showraki, T., & Brown, K. (2020). Generalized Anxiety Disorder: Revisited. Psychiatric Quarterly, 91, 1005–1014.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">14.</span>
                  <span>Ströhle, A., Gensichen, J., & Domschke, K. (2018). The Diagnosis and Treatment of Anxiety Disorders. Deutsches Ärzteblatt International, 115(37), 611–620.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">15.</span>
                  <span>Szuhany, K. L., & Simon, N. M. (2022). Anxiety Disorders: A Review. JAMA, 328(24), 2431–2445.</span>
                </li>
              </ul>
            </section>
          </>
        ) : (
          <>
            <h1>References</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              This content is based on evidence-based resources from trusted mental health organizations.
            </p>

            <section id="sources" className="mt-8">
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">1.</span>
                  <span>Bandelow, B., & Michaelis, S. (2015). Epidemiology of anxiety disorders in the 21st century. Dialogues in Clinical Neuroscience, 17(3), 327–335.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">2.</span>
                  <span>Beesdo, K., Knappe, S., & Pine, D. S. (2009). Anxiety and anxiety disorders in children and adolescents: developmental issues and implications for DSM-V. Psychiatric Clinics of North America, 32(3), 483–524.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">3.</span>
                  <span>Bui, E. (2021). Anxiety and Stress-Related Disorders: From Current Evidence-Based Practices to Future Artificial Intelligence–Based Innovations. Focus, 19(2), 143–144.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">4.</span>
                  <span>Bystritsky, A., Khalsa, S. S., Cameron, M. E., & Schiffman, J. (2013). Current diagnosis and treatment of anxiety disorders. P&T, 38(1), 30–57.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">5.</span>
                  <span>Craske, M. G., & Stein, M. B. (2016). Anxiety. The Lancet, 388(10063), 3048–3059.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">6.</span>
                  <span>Deckert, J. (2009). Anxiety disorders: causes, diagnosis and treatment. Acta Neuropsychiatrica, 21(S2), 9–10.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">7.</span>
                  <span>Goodwin, G. M. (2015). The overlap between anxiety, depression, and obsessive-compulsive disorder. Dialogues in Clinical Neuroscience, 17(3), 249–260.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">8.</span>
                  <span>Javaid, S. F., Hashim, I. J., Hashim, M. J., Stip, E., Samad, M. A., & Al Ahbabi, A. (2023). Epidemiology of anxiety disorders: global burden and sociodemographic associations. Middle East Current Psychiatry, 30(1),</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">9.</span>
                  <span>Naveen, V., Felic, S., Aswin, A. V., & Arul Pakasam, K. C. (2024). A Review on Current Understanding, Clinical Manifestations, and Therapeutic Approaches of Anxiety Disorders. Journal of Pharma Insights and Research, 2(5), 173–181.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">10.</span>
                  <span>Ohi, K., Fujikane, D., Takai, K., Kuramitsu, A., Muto, Y., Sugiyama, S., & Shioiri, T. (2025). Clinical features and genetic mechanisms of anxiety, fear, and avoidance: A comprehensive review of five anxiety disorders. Molecular Psychiatry, 30, 4928–4936.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">11.</span>
                  <span>Psychology Translationist Network. (n.d.). Vietnamese DSM-5 Lite [Bản rút gọn tiếng Việt của Diagnostic and Statistical Manual of Mental Disorders, 5th ed.]. American Psychiatric Association.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">12.</span>
                  <span>Scarella, T. M., Boland, R. J., & Barsky, A. J. (2019). Illness Anxiety Disorder: Psychopathology, Epidemiology, Clinical Characteristics, and Treatment. Psychosomatics, 60(5), 406–416.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">13.</span>
                  <span>Showraki, M., Showraki, T., & Brown, K. (2020). Generalized Anxiety Disorder: Revisited. Psychiatric Quarterly, 91, 1005–1014.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">14.</span>
                  <span>Ströhle, A., Gensichen, J., & Domschke, K. (2018). The Diagnosis and Treatment of Anxiety Disorders. Deutsches Ärzteblatt International, 115(37), 611–620.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-[#1E2A38] dark:text-blue-400 flex-shrink-0 mt-1.5">15.</span>
                  <span>Szuhany, K. L., & Simon, N. M. (2022). Anxiety Disorders: A Review. JAMA, 328(24), 2431–2445.</span>
                </li>
              </ul>
            </section>
          </>
        );
      case 'library': 
        return (
          <>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-[#1E2A38] dark:text-blue-400" size={32} />
              <h1 className="mb-0">{isVI ? 'Thư viện Y khoa' : 'Medical Library'}</h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-justify">
              {isVI 
                ? 'Một hướng dẫn toàn diện về các thuật ngữ, yếu tố sinh học và mô hình trị liệu được đề cập xuyên suốt nền tảng này. Sử dụng thư viện này để hiểu rõ hơn về các thuật ngữ phức tạp của sức khỏe tâm thần.'
                : 'A comprehensive guide to terms, biological factors, and therapeutic models mentioned throughout this platform. Use this library to better understand the complex terminology of mental health.'
              }
            </p>

            <div className="mt-12 space-y-12">
              {(libraryData[language] || libraryData.EN).map((item) => (
                <section key={item.id} id={item.id} className="scroll-mt-20">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 border-b-2 border-yellow-400 dark:border-yellow-500 pb-2 mb-4 inline-block">
                    {item.term}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    {item.definition}
                  </p>
                </section>
              ))}
            </div>
          </>
        );
      default:
        return (
          <>
            <h1>{isVI ? 'Nội dung sắp ra mắt' : 'Content Coming Soon'}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              {isVI 
                ? 'Phần này hiện đang được phát triển. Vui lòng quay lại sau.'
                : 'This section is currently being developed. Please check back later.'
              }
            </p>
          </>
        );
    }
  };

  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <div key={activeSection} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        {renderContent()}
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <button
          onClick={goToPrevious}
          disabled={!hasPrevious}
          className={`px-4 py-2 rounded transition-colors ${
            hasPrevious
              ? 'text-[#1E2A38] dark:text-blue-400 hover:bg-[#E6EEF6] dark:hover:bg-gray-800 cursor-pointer'
              : 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
          }`}
        >
          ← {t.previous}
        </button>
        <button
          onClick={goToNext}
          disabled={!hasNext}
          className={`px-4 py-2 rounded transition-colors ${
            hasNext
              ? 'text-[#1E2A38] dark:text-blue-400 hover:bg-[#E6EEF6] dark:hover:bg-gray-800 cursor-pointer'
              : 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
          }`}
        >
          {t.next} →
        </button>
      </div>

      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded border-l-4 border-gray-400 dark:border-gray-600">
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          {isVI 
            ? 'Nội dung này chỉ mang tính chất thông tin và không thay thế cho lời khuyên, chẩn đoán hoặc điều trị y tế chuyên nghiệp. Luôn tìm kiếm lời khuyên của bác sĩ hoặc nhà cung cấp dịch vụ y tế có trình độ chuyên môn khác nếu bạn có bất kỳ câu hỏi nào liên quan đến tình trạng bệnh lý.'
            : 'This content is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.'
          }
        </p>
      </div>
    </div>
  );
}