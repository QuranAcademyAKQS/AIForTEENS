'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, BookOpen, Scale, Users, Target, Shield, Heart, Star } from 'lucide-react';

interface ChartItem {
  id: string;
  title: string;
  urduTitle?: string;
  description?: string;
  children?: ChartItem[];
  color: string;
  icon?: React.ReactNode;
}

const chartData: ChartItem[] = [
  {
    id: 'sharia',
    title: 'Adherence to Sharia',
    urduTitle: 'پابندی شریعت',
    color: 'bg-blue-500',
    icon: <Shield className="w-5 h-5" />,
    children: [
      {
        id: 'worship',
        title: 'Worship / Rights of Allah',
        urduTitle: 'عبادات / حقوق الله',
        color: 'bg-blue-400',
        children: [
          {
            id: 'obligations',
            title: 'Fulfillment of Obligations and Duties',
            urduTitle: 'فرائض و واجبات کی ادائیگی',
            color: 'bg-blue-300'
          },
          {
            id: 'avoidance',
            title: 'Avoidance of Forbidden and Disliked Things',
            urduTitle: 'حرام و مکروہات سے اجتناب',
            color: 'bg-blue-300'
          }
        ]
      },
      {
        id: 'dealings',
        title: 'Dealings / Rights of Servants',
        urduTitle: 'معاملات / حقوق العباد',
        color: 'bg-blue-400',
        children: [
          {
            id: 'halal-earnings',
            title: 'Contentment with Halal and Pure Earnings',
            urduTitle: 'معاش میں حلال و طیب پر اکتفا',
            color: 'bg-blue-300'
          },
          {
            id: 'social-veil',
            title: 'Islamic Veil in Social Interaction',
            urduTitle: 'معاشرت میں شرعی پرده',
            color: 'bg-blue-300'
          },
          {
            id: 'service',
            title: 'Service to Creation',
            urduTitle: 'خدمت خلق',
            color: 'bg-blue-300'
          }
        ]
      }
    ]
  },
  {
    id: 'ethics',
    title: 'Ethics and Objectives',
    urduTitle: 'اخلاقیات و اهداف',
    color: 'bg-green-500',
    icon: <Heart className="w-5 h-5" />,
    children: [
      {
        id: 'following-prophet',
        title: 'Following the Messenger of Allah ﷺ and Interaction with Companions',
        urduTitle: 'اتباع رسول الله ﷺ و تعامل صحابة',
        color: 'bg-green-400',
        children: [
          {
            id: 'prophet-example',
            title: 'Following the example of Muhammad ﷺ in manners, characteristics, and daily life',
            urduTitle: 'شمائل، خصائل اور شب و روز میں اسوہ محمد ی ﷺ کی اتباع',
            color: 'bg-green-300'
          }
        ]
      },
      {
        id: 'reject-false',
        title: 'Rejection of False Ideologies',
        urduTitle: 'باطل نظریات کا رد',
        color: 'bg-green-400'
      },
      {
        id: 'sincerity',
        title: 'Spirit of "Religion is Sincerity"',
        urduTitle: 'الدین النصیحہ کی روح',
        color: 'bg-green-400'
      },
      {
        id: 'prioritization',
        title: 'Prioritization of Nearest to Nearest',
        urduTitle: 'الا قرب فالا قرب کی ترتیب',
        color: 'bg-green-400'
      }
    ]
  },
  {
    id: 'dawah',
    title: 'Call to Religion / Da\'wah',
    urduTitle: 'دعوت دین',
    color: 'bg-purple-500',
    icon: <Target className="w-5 h-5" />,
    children: [
      {
        id: 'enjoin-good',
        title: 'Enjoining Good',
        urduTitle: 'امر بالمعروف',
        color: 'bg-purple-400',
        children: [
          {
            id: 'by-hand',
            title: 'By Hand',
            urduTitle: 'بالید',
            color: 'bg-purple-300'
          },
          {
            id: 'by-tongue',
            title: 'By Tongue',
            urduTitle: 'بالسان',
            color: 'bg-purple-300'
          },
          {
            id: 'by-heart',
            title: 'By Heart',
            urduTitle: 'بالقلب',
            color: 'bg-purple-300'
          }
        ]
      },
      {
        id: 'forbid-evil',
        title: 'Forbidding Evil',
        urduTitle: 'نهي عن المنكر',
        color: 'bg-purple-400',
        children: [
          {
            id: 'forbid-by-hand',
            title: 'By Hand',
            urduTitle: 'بالید',
            color: 'bg-purple-300'
          },
          {
            id: 'forbid-by-tongue',
            title: 'By Tongue',
            urduTitle: 'بالسان',
            color: 'bg-purple-300'
          },
          {
            id: 'forbid-by-heart',
            title: 'By Heart',
            urduTitle: 'بالقلب',
            color: 'bg-purple-300'
          }
        ]
      },
      {
        id: 'individual-sphere',
        title: 'Individual Sphere and Connection',
        urduTitle: 'انفرادی دائره وتعلق',
        color: 'bg-purple-400'
      },
      {
        id: 'collective-sphere',
        title: 'Collective Sphere and Connection',
        urduTitle: 'اجتماعی دائره و تعلق',
        color: 'bg-purple-400'
      }
    ]
  },
  {
    id: 'establishment',
    title: 'Establishment of Religion',
    urduTitle: 'اقامت دین',
    color: 'bg-orange-500',
    icon: <Star className="w-5 h-5" />,
    children: [
      {
        id: 'dislike-false',
        title: 'Heartfelt Dislike for False Systems',
        urduTitle: 'باطل نظام سے قلبی کر اہت',
        color: 'bg-orange-400'
      },
      {
        id: 'hear-obey',
        title: 'Hearing and Obeying in Good',
        urduTitle: 'سمع واطاعت في المعروف',
        color: 'bg-orange-400'
      },
      {
        id: 'capabilities',
        title: 'Capabilities',
        urduTitle: 'صلاحیتیں',
        color: 'bg-orange-400',
        children: [
          {
            id: 'best-religion',
            title: 'For the best religion',
            urduTitle: 'بہترین دین کے لیے',
            color: 'bg-orange-300'
          },
          {
            id: 'least-world',
            title: 'For the least of this world',
            urduTitle: 'کمترین دنیا کے لیے',
            color: 'bg-orange-300'
          }
        ]
      },
      {
        id: 'spend-wealth',
        title: 'Spending Wealth',
        urduTitle: 'انفاق مال',
        color: 'bg-orange-400'
      },
      {
        id: 'patience',
        title: 'Patience in Adversities',
        urduTitle: 'مصائب پر صبر',
        color: 'bg-orange-400'
      },
      {
        id: 'self-sacrifice',
        title: 'Sacrifice of Self',
        urduTitle: 'بذل نفس',
        color: 'bg-orange-400'
      },
      {
        id: 'witness',
        title: 'Obligation of Bearing Witness to People',
        urduTitle: 'فریضہ شہادت علی الناس',
        color: 'bg-orange-400'
      },
      {
        id: 'own-duties',
        title: 'One\'s Own Duties',
        urduTitle: 'اپنے فرائض',
        color: 'bg-orange-400'
      },
      {
        id: 'others-rights',
        title: 'Rights of Others',
        urduTitle: 'دوسروں کے حقوق',
        color: 'bg-orange-400'
      },
      {
        id: 'forgiveness',
        title: 'Forgiveness and Overlooking',
        urduTitle: 'عفو و در گزر',
        color: 'bg-orange-400'
      },
      {
        id: 'selflessness',
        title: 'Selflessness and Sacrifice',
        urduTitle: 'ایثار و قربانی',
        color: 'bg-orange-400'
      },
      {
        id: 'obey-leader',
        title: 'Obedience to the Leader',
        urduTitle: 'اطاعت امیر',
        color: 'bg-orange-400'
      }
    ]
  }
];

const dailyGoals = [
  {
    id: 'quran-recitation',
    title: 'Recitation of Quran',
    urduTitle: 'تلاوت قرآن',
    detail: 'At least one Juz/part',
    urduDetail: 'کم از کم ایک پاره'
  },
  {
    id: 'quran-understanding',
    title: 'Understanding of Quran',
    urduTitle: 'فہم قرآن',
    detail: 'Translation and Tafsir',
    urduDetail: 'ترجمه و تفسیر'
  },
  {
    id: 'quran-memorization',
    title: 'Memorization of Quran',
    urduTitle: 'حفظ قرآن',
    detail: 'Increase in memorized portion',
    urduDetail: 'ذخیرہ حفظ میں اضافہ'
  },
  {
    id: 'tahajjud',
    title: 'Observance of Tahajjud',
    urduTitle: 'اہتمام تہجد',
    detail: 'And recite the Quran with measured recitation',
    urduDetail: 'ورتل القرآن ترتیلا'
  },
  {
    id: 'supplications',
    title: 'Prescribed Supplications',
    urduTitle: 'ادعیہ ماثوره',
    detail: 'Daily supplications, Special invocations',
    urduDetail: 'روز مرہ کی دعائیں، خصوصی مناجات'
  }
];

const avoidanceGoals = [
  {
    id: 'simplicity',
    title: 'Simplicity in Eating and Drinking',
    urduTitle: 'خوردونوش میں سادگی'
  },
  {
    id: 'tongue-protection',
    title: 'Protection of the Tongue',
    urduTitle: 'زبان کی حفاظت'
  },
  {
    id: 'avoid-laziness',
    title: 'Avoidance of Laziness',
    urduTitle: 'تن آسانی سے گریز'
  },
  {
    id: 'avoid-useless-talk',
    title: 'Avoidance of Useless Talk and Gatherings',
    urduTitle: 'لایعنی گفتگو و محافل سے کنارہ کشی'
  },
  {
    id: 'gaze-protection',
    title: 'Protection of the Gaze',
    urduTitle: 'نظر کی حفاظت'
  },
  {
    id: 'avoid-extravagance',
    title: 'Avoidance of Extravagance and Wastefulness',
    urduTitle: 'اسراف و تبذیر سے اجتناب'
  }
];

const curricularObjectives = [
  {
    id: 'individual-curriculum',
    title: 'Individual Curriculum',
    urduTitle: 'انفرادی نصاب',
    details: 'مبتدی، ملتزم، ذمہ داران، مدرسین',
    englishDetails: 'Beginners, Committed, Responsible persons, Teachers'
  },
  {
    id: 'family-gatherings',
    title: 'Family/Household Gatherings',
    urduTitle: 'اسرہ جاتی اجتماعات',
    details: 'حلقه قرآنی، اجتماعات أسره',
    englishDetails: 'Quranic Circle, Family Gatherings'
  },
  {
    id: 'dawah-training-gatherings',
    title: 'Dawah and Training Gatherings',
    urduTitle: 'دعوتی و تربیتی اجتماعات',
    details: 'مقامی، حلقہ جاتی، مرکزی',
    englishDetails: 'Local, Regional, Central'
  },
  {
    id: 'graded-courses',
    title: 'Graded Courses',
    urduTitle: 'درجه دار کورسز',
    details: 'مبتدی، ملتزم، نقباء، مدرسین',
    englishDetails: 'Beginners, Committed, Leaders, Teachers'
  },
  {
    id: 'additional-organizational-courses',
    title: 'Additional Organizational Courses',
    urduTitle: 'اضافی تنظیمی کورسز',
    details: 'علمی و فکری رہنمائی، حزب اللہ کے اوصاف، دوره ترجمه قرآن',
    englishDetails: 'Intellectual and Ideological Guidance, Qualities of Hizbullah, Quran Translation Course'
  }
];

const dawahObjectives = [
  {
    id: 'individual-dawah',
    title: 'Individual Dawah/Invitation',
    urduTitle: 'انفرادی دعوت'
  },
  {
    id: 'family-report',
    title: 'Report in Family Gathering',
    urduTitle: 'اجتماع اسرہ میں رپورٹ'
  },
  {
    id: 'dawah-gatherings-campaigns',
    title: 'Holding Dawah Gatherings and Campaigns',
    urduTitle: 'دعوتی اجتماعات و مہمات کا انعقاد'
  },
  {
    id: 'dawah-training-consultative',
    title: 'Dawah Training and Consultative Gatherings',
    urduTitle: 'دعوتی تربیتی و مشاورتی اجتماعات'
  }
];

const oversightSystems = [
  {
    id: 'self-accountability',
    title: 'System of Self-Accountability',
    urduTitle: 'خود احتسابی کا نظام',
    items: [
      'Review of Past Times after Five Daily Prayers',
      'Review of the Past Day at Tahajjud Time or Before Sleeping',
      'Weekly Review of the Past Week at a Fixed Time',
      'Monthly Review of the Past Month at a Fixed Time'
    ]
  },
  {
    id: 'personal-review',
    title: 'System of Personal Review',
    urduTitle: 'شخصی جائزہ کا نظام',
    items: [
      'Once every 2 months about comrades from local Ameer/leaders',
      'Once every 3 months about leaders from circle Ameer/local Ameers',
      'Once a month about local organizational Ameers from Deputy Chief Administrator/Ameers of circles',
      'Once every 6 months about circle Ameers from Chief Administrator and his deputies'
    ]
  }
];

const ChartBox = ({ item, level = 0, onItemClick }: { 
  item: ChartItem; 
  level?: number; 
  onItemClick: (item: ChartItem) => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: level * 0.1 }}
      className="mb-4"
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`
          ${item.color} text-white p-4 rounded-lg shadow-lg cursor-pointer
          border-2 border-white/20 hover:border-white/40 transition-all duration-300
          hover:shadow-xl hover:shadow-black/20
          ${level === 0 ? 'text-lg font-bold' : level === 1 ? 'text-base font-semibold' : 'text-sm'}
          ${level === 0 ? 'w-full h-32 flex items-center' : ''}
        `}
        onClick={() => onItemClick(item)}
      >
        <div className="flex items-center justify-between w-full">
          {/* Left side - Arrow for all items */}
          {item.children && (
            <motion.button
              animate={{ rotate: isExpanded ? -90 : 0 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="p-1 hover:bg-white/20 rounded flex-shrink-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
          )}
          
          {/* Right side - Text for all items */}
          <div className="flex items-center gap-2 text-right flex-1 min-w-0">
            <div className="flex-1 min-w-0">
              <div className="font-urdu urdu-text truncate">
                {item.urduTitle}
              </div>
              <div className="text-sm opacity-90 truncate">{item.title}</div>
            </div>
            {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
          </div>
        </div>
      </motion.div>
      
      {item.children && isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="ml-6 border-l-2 border-white/20 pl-4"
        >
          {item.children.map((child) => (
            <ChartBox
              key={child.id}
              item={child}
              level={level + 1}
              onItemClick={onItemClick}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

const GoalCard = ({ title, urduTitle, detail, urduDetail, color = 'bg-emerald-600' }: {
  title: string;
  urduTitle: string;
  detail?: string;
  urduDetail?: string;
  color?: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className={`${color} text-white p-4 rounded-lg shadow-lg`}
  >
    <div className="font-urdu mb-2 urdu-text">
      {urduTitle}
    </div>
    <div className="text-sm font-semibold mb-1">{title}</div>
    {detail && (
      <div className="text-xs opacity-90">
        <div className="font-urdu urdu-text">
          {urduDetail}
        </div>
        <div>{detail}</div>
      </div>
    )}
  </motion.div>
);

export default function AhsanEIslamPage() {
  const [selectedItem, setSelectedItem] = useState<ChartItem | null>(null);
  const [activeSection, setActiveSection] = useState<'main' | 'daily' | 'avoidance' | 'curricular' | 'dawah' | 'oversight'>('main');
  const [itemHistory, setItemHistory] = useState<ChartItem[]>([]);

  const handleItemClick = (item: ChartItem) => {
    setSelectedItem(item);
    setItemHistory([item]);
  };

  const closePopup = () => {
    setSelectedItem(null);
    setItemHistory([]);
  };

  const goBack = () => {
    if (itemHistory.length > 1) {
      const newHistory = itemHistory.slice(0, -1);
      setItemHistory(newHistory);
      setSelectedItem(newHistory[newHistory.length - 1]);
    }
  };

  const navigateToItem = (item: ChartItem) => {
    setSelectedItem(item);
    setItemHistory([...itemHistory, item]);
  };

  // Keyboard support for closing popup
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedItem) {
        closePopup();
      }
    };

    if (selectedItem) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);



  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" dir="rtl" style={{ direction: 'rtl' }}>
      <style jsx>{`
        .urdu-text {
          line-height: 2;
          margin-bottom: 0.5rem;
        }
        .urdu-title {
          line-height: 2.2;
          margin-bottom: 0.75rem;
        }
        .urdu-description {
          line-height: 2.1;
          margin-bottom: 1rem;
        }
      `}</style>
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-8">
            {/* Left side - Message of Tanzeem-e-Islami */}
            <div className="text-right text-xs opacity-80 w-48 flex-shrink-0">
              <div className="font-urdu urdu-text truncate">تنظیم اسلامی کا پیغام</div>
              <div className="truncate">Message of Tanzeem-e-Islami</div>
              <div className="font-urdu urdu-text truncate">بانی تنظیم : ڈاکٹر اسرار احمد</div>
              <div className="truncate">Founder: Dr. Israr Ahmed</div>
            </div>
            
            {/* Center - Main title */}
            <div className="text-center flex-1 px-4">
              <h1 className="text-4xl font-bold mb-2 font-urdu urdu-title">
                تنظیم اسلامی میں احسان اسلام کے تقاضے
              </h1>
              <p className="text-xl opacity-90">Demands of Ehsan-e-Islam in Tanzeem-e-Islami</p>
            </div>
            
            {/* Right side - System of Khilafat-e-Rashida */}
            <div className="text-left text-xs opacity-80 w-48 flex-shrink-0">
              <div className="font-urdu urdu-text truncate">خلافت راشدہ کا نظام</div>
              <div className="truncate">System of Khilafat-e-Rashida</div>
              <div className="font-urdu urdu-text truncate">امیر تنظیم : شجاع الدین شیخ</div>
              <div className="truncate">Ameer: Shujauddin Sheikh</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 py-4">
            {[
              { id: 'oversight', label: 'Oversight System', urduLabel: 'نگرانی کا نظام' },
              { id: 'dawah', label: 'Dawah Objectives', urduLabel: 'دعوتی و تحریکی اہداف' },
              { id: 'curricular', label: 'Curricular Objectives', urduLabel: 'نصابی اہداف' },
              { id: 'avoidance', label: 'Avoidance Goals', urduLabel: 'پر ہیز کے اہداف' },
              { id: 'daily', label: 'Daily Goals', urduLabel: 'روز مرہ کے اہداف' },
              { id: 'main', label: 'Individual Goals', urduLabel: 'انفرادی اہداف' }
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id as any)}
                className={`
                  px-6 py-3 rounded-lg font-semibold transition-all duration-300
                  ${activeSection === section.id
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700'
                  }
                `}
              >
                <div className="font-urdu text-sm urdu-text">
                  {section.urduLabel}
                </div>
                <div className="text-xs">{section.label}</div>
              </button>
            ))}
          </div>
          

        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Chart */}
          <div>
            {activeSection === 'main' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  <span className="font-urdu urdu-title">انفرادی اہداف</span>
                  <br />
                  <span>Individual Goals</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {chartData.map((item) => (
                    <ChartBox
                      key={item.id}
                      item={item}
                      onItemClick={handleItemClick}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'daily' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  <span className="font-urdu urdu-title">روز مرہ کے اہداف</span>
                  <br />
                  <span>Daily Goals</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dailyGoals.map((goal) => (
                    <GoalCard
                      key={goal.id}
                      title={goal.title}
                      urduTitle={goal.urduTitle}
                      detail={goal.detail}
                      urduDetail={goal.urduDetail}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'avoidance' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  <span className="font-urdu urdu-title">پر ہیز کے اہداف</span>
                  <br />
                  <span>Avoidance Goals</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {avoidanceGoals.map((goal) => (
                    <GoalCard
                      key={goal.id}
                      title={goal.title}
                      urduTitle={goal.urduTitle}
                      color="bg-red-600"
                    />
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'curricular' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  <span className="font-urdu urdu-title">نصابی اہداف</span>
                  <br />
                  <span>Curricular Objectives</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {curricularObjectives.map((objective) => (
                    <div key={objective.id} className="bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                      <div className="font-urdu mb-2 urdu-text">
                        {objective.urduTitle}
                      </div>
                      <div className="text-sm font-semibold mb-1">{objective.title}</div>
                      <div className="text-xs opacity-90">
                        <div className="font-urdu urdu-text">
                          {objective.details}
                        </div>
                        <div>{objective.englishDetails}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'dawah' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  <span className="font-urdu urdu-title">دعوتی و تحریکی اہداف</span>
                  <br />
                  <span>Dawah and Movement Objectives</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dawahObjectives.map((objective) => (
                    <GoalCard
                      key={objective.id}
                      title={objective.title}
                      urduTitle={objective.urduTitle}
                      color="bg-purple-600"
                    />
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'oversight' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  <span className="font-urdu urdu-title">نگرانی کا نظام</span>
                  <br />
                  <span>System of Oversight</span>
                </h2>
                <div className="space-y-6">
                  {oversightSystems.map((system) => (
                    <div key={system.id} className="bg-white rounded-lg shadow-lg p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-4">
                        <span className="font-urdu urdu-title">{system.urduTitle}</span>
                        <br />
                        <span>{system.title}</span>
                      </h3>
                      <ul className="space-y-2">
                        {system.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-700">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Scale className="w-8 h-8" />
            <BookOpen className="w-8 h-8" />
          </div>
          <div className="font-urdu text-xl font-bold urdu-title">
            تنظیم اسلامی
          </div>
          <div className="text-sm opacity-90">Tanzeem-e-Islami</div>
        </div>
      </div>

      {/* Full Screen Details Popup */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {itemHistory.length > 1 && (
                    <button
                      onClick={goBack}
                      className="p-2 hover:bg-white/20 rounded-full transition-colors"
                      title="Go back"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  )}
                  {selectedItem.icon && <span className="text-2xl">{selectedItem.icon}</span>}
                  <div className="text-right">
                    <h2 className="text-2xl font-bold font-urdu urdu-title">
                      {selectedItem.urduTitle}
                    </h2>
                    <p className="text-lg opacity-90">{selectedItem.title}</p>
                    {itemHistory.length > 1 && (
                      <div className="text-sm opacity-75 mt-1">
                        Level {itemHistory.length} • {itemHistory.length - 1} levels up
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={closePopup}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Breadcrumb Navigation */}
              {itemHistory.length > 1 && (
                <div className="mb-6 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>Path:</span>
                    {itemHistory.map((item, index) => (
                      <div key={item.id} className="flex items-center gap-2">
                        {index > 0 && (
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                        <button
                          onClick={() => {
                            const newHistory = itemHistory.slice(0, index + 1);
                            setItemHistory(newHistory);
                            setSelectedItem(item);
                          }}
                          className={`hover:text-emerald-600 transition-colors ${
                            index === itemHistory.length - 1 ? 'font-semibold text-emerald-600' : ''
                          }`}
                        >
                          <span className="font-urdu urdu-text">{item.urduTitle}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedItem.description && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedItem.description}</p>
                </div>
              )}

              {selectedItem.children && selectedItem.children.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Sub-categories
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedItem.children.map((child) => (
                      <motion.div
                        key={child.id}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
                        onClick={() => navigateToItem(child)}
                      >
                        <div className="font-urdu text-lg font-semibold text-gray-800 mb-2 urdu-text">
                          {child.urduTitle}
                        </div>
                        <div className="text-sm text-gray-600">{child.title}</div>
                        {child.children && child.children.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <div className="text-xs text-gray-500 mb-2">
                              Contains {child.children.length} sub-items
                            </div>
                            <div className="space-y-1">
                              {child.children.slice(0, 3).map((subChild) => (
                                <div key={subChild.id} className="text-xs text-gray-600">
                                  • <span className="font-urdu urdu-text">{subChild.urduTitle}</span>
                                </div>
                              ))}
                              {child.children.length > 3 && (
                                <div className="text-xs text-emerald-600">
                                  + {child.children.length - 3} more...
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Information */}
              <div className="mt-8 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <h4 className="font-semibold text-emerald-800 mb-2">Related Topics</h4>
                <div className="text-sm text-emerald-700">
                  This topic is part of the comprehensive Islamic framework for individual and organizational development.
                  Click on sub-categories to explore related concepts and practices.
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
} 