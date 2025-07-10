'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Shield, Lightbulb, Users, ArrowLeft, MessageCircle, Heart, Globe, Zap, Smartphone, Volume2, VolumeX, Maximize2, Minimize2, BookOpen, Star, Clock, Cpu, Database, Network } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function TechnologyEthicsClass() {
  const [currentSection, setCurrentSection] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({})
  const [showResults, setShowResults] = useState(false)
  const [presentationMode, setPresentationMode] = useState(false)
  const [muted, setMuted] = useState(false)

  const sections = [
    {
      title: "Technology in Islamic Perspective",
      content: "Technology is a tool created by Allah's guidance through human intelligence. In Islam, we are encouraged to seek knowledge and use our God-given abilities to create beneficial tools. The Prophet Muhammad (PBUH) said, 'Seeking knowledge is obligatory for every Muslim.'",
      islamicContext: "Allah has blessed humans with intelligence and creativity to develop tools that help us fulfill our responsibilities as stewards of the Earth. Technology should be used to serve Allah's creation, not to harm it.",
      activities: ["Technology Blessings Reflection", "Islamic Scholars Discussion", "Knowledge Seeking Journey"],
      examples: ["Medical technology saving lives", "Educational apps for learning", "Communication tools connecting families", "Agricultural technology feeding communities"],
      hadith: [
        {
          text: "Seeking knowledge is obligatory for every Muslim",
          reference: "Sahih Ibn Majah",
          context: "This includes technological knowledge"
        },
        {
          text: "The best of people are those who are most beneficial to people",
          reference: "Sahih Bukhari",
          context: "Technology should benefit humanity"
        }
      ],
      quran: [
        {
          ayah: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
          translation: "And say: 'My Lord, increase me in knowledge'",
          reference: "Surah Ta-Ha, 20:114",
          context: "This ayah teaches us to continuously seek knowledge, including technological knowledge"
        }
      ]
    },
    {
      title: "Digital Ethics and Islamic Values",
      content: "In the digital age, we must apply Islamic ethical principles to our use of technology. This includes honesty, privacy, respect for others, and avoiding harm. Every click, post, and digital interaction should reflect our Islamic values.",
      islamicContext: "Islam teaches us to be truthful, protect others' privacy, and avoid causing harm. These principles apply directly to our digital behavior.",
      activities: ["Digital Ethics Scenarios", "Online Behavior Reflection", "Islamic Values in Tech"],
      examples: ["Being honest in online reviews", "Respecting privacy settings", "Avoiding cyberbullying", "Sharing beneficial content"],
      hadith: [
        {
          text: "Whoever believes in Allah and the Last Day, let him speak good or remain silent",
          reference: "Sahih Bukhari",
          context: "This applies to all forms of communication, including social media"
        }
      ],
      quran: [
        {
          ayah: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ",
          translation: "O you who have believed, fear Allah and be with those who are true",
          reference: "Surah At-Tawbah, 9:119",
          context: "We must be truthful in all our communications, including online"
        }
      ]
    },
    {
      title: "Social Media and Islamic Conduct",
      content: "Social media platforms are powerful tools that can be used for good or harm. As Muslims, we must use these platforms to spread beneficial knowledge, maintain family ties, and avoid gossip, backbiting, and harmful content.",
      islamicContext: "The Prophet (PBUH) warned against backbiting and spreading rumors. Social media can easily become a platform for these sins if we're not careful.",
      activities: ["Social Media Audit", "Positive Content Creation", "Family Connection Projects"],
      examples: ["Sharing Islamic reminders", "Connecting with family abroad", "Promoting community events", "Avoiding gossip and rumors"],
      hadith: [
        {
          text: "Backbiting is mentioning about your brother what he dislikes",
          reference: "Sahih Muslim",
          context: "This applies to social media posts and comments"
        }
      ],
      quran: [
        {
          ayah: "وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ",
          translation: "And do not pursue that of which you have no knowledge",
          reference: "Surah Al-Isra, 17:36",
          context: "We should not share information without verifying it first"
        }
      ]
    },
    {
      title: "Privacy and Digital Security",
      content: "Protecting our privacy and the privacy of others is an Islamic obligation. In the digital world, this means being careful with personal information, using strong passwords, and respecting others' digital boundaries.",
      islamicContext: "Islam teaches us to respect others' privacy and protect our own. The Prophet (PBUH) said, 'Whoever peeps into someone's house without permission, it is as if he has entered it.'",
      activities: ["Privacy Protection Workshop", "Digital Security Best Practices", "Respect for Others' Privacy"],
      examples: ["Using strong passwords", "Not sharing others' personal information", "Respecting privacy settings", "Being careful with location sharing"],
      hadith: [
        {
          text: "Whoever peeps into someone's house without permission, it is as if he has entered it",
          reference: "Sahih Bukhari",
          context: "This principle applies to digital privacy"
        }
      ],
      quran: [
        {
          ayah: "وَلَا تَدْخُلُوا بُيُوتًا غَيْرَ بُيُوتِكُمْ حَتَّىٰ تَسْتَأْنِسُوا",
          translation: "And do not enter houses other than your own houses until you ascertain welcome",
          reference: "Surah An-Nur, 24:27",
          context: "This teaches us to respect boundaries and seek permission"
        }
      ]
    },
    {
      title: "Technology Addiction and Balance",
      content: "While technology is beneficial, excessive use can lead to addiction and neglect of important responsibilities. Islam teaches us to maintain balance in all aspects of life, including our use of technology.",
      islamicContext: "The Prophet (PBUH) taught us moderation in all things. Excessive use of technology can interfere with prayer, family time, and other religious obligations.",
      activities: ["Technology Usage Audit", "Balance Planning", "Digital Detox Challenge"],
      examples: ["Setting prayer time reminders", "Limiting screen time", "Family tech-free time", "Using apps for Islamic learning"],
      hadith: [
        {
          text: "The best of things is the middle course",
          reference: "Sahih Bukhari",
          context: "This applies to our use of technology"
        }
      ],
      quran: [
        {
          ayah: "وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا",
          translation: "And thus we have made you a just community",
          reference: "Surah Al-Baqarah, 2:143",
          context: "Islam teaches us to be moderate and balanced in all things"
        }
      ]
    },
    {
      title: "Using Technology for Islamic Learning",
      content: "Technology provides amazing opportunities for Islamic education. We can access Quran recitations, Islamic lectures, and educational resources from anywhere in the world. This aligns perfectly with Islam's emphasis on seeking knowledge.",
      islamicContext: "The Prophet (PBUH) said, 'Seeking knowledge is a duty upon every Muslim.' Modern technology makes this easier than ever.",
      activities: ["Islamic App Exploration", "Online Learning Resources", "Digital Quran Study"],
      examples: ["Quran apps with translations", "Islamic lecture platforms", "Online Arabic learning", "Islamic history documentaries"],
      hadith: [
        {
          text: "Whoever takes a path in search of knowledge, Allah will make easy for him a path to Paradise",
          reference: "Sahih Muslim",
          context: "Using technology to seek Islamic knowledge is blessed"
        }
      ],
      quran: [
        {
          ayah: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
          translation: "Read in the name of your Lord who created",
          reference: "Surah Al-Alaq, 96:1",
          context: "The first revelation emphasizes the importance of reading and learning"
        }
      ]
    },
    {
      title: "Digital Dawah and Spreading Good",
      content: "Technology gives us powerful tools to spread Islamic knowledge and positive messages. We can use social media, websites, and apps to share beneficial content, correct misconceptions about Islam, and invite others to learn about our faith.",
      islamicContext: "The Prophet (PBUH) was sent as a mercy to all creation. We can use technology to continue this mission by sharing Islamic knowledge and showing the beauty of Islam.",
      activities: ["Digital Dawah Planning", "Positive Content Creation", "Misconception Correction"],
      examples: ["Sharing Islamic reminders", "Creating educational content", "Responding to misconceptions politely", "Showing Islamic values through actions"],
      hadith: [
        {
          text: "Convey from me, even if it is one verse",
          reference: "Sahih Bukhari",
          context: "We can use technology to convey Islamic knowledge"
        }
      ],
      quran: [
        {
          ayah: "ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ",
          translation: "Invite to the way of your Lord with wisdom and good instruction",
          reference: "Surah An-Nahl, 16:125",
          context: "We should use technology to invite others to Islam with wisdom"
        }
      ]
    },
    {
      title: "Afghanistan's Victory: Faith Over Technology",
      content: "The recent victory of Afghanistan against technologically advanced nations serves as a powerful reminder that faith, determination, and divine help can overcome even the most sophisticated technology. This victory demonstrates that while technology is a tool, it is not the ultimate power - Allah's will is supreme.",
      islamicContext: "This victory reminds us of the Quranic principle that victory comes from Allah, not from material superiority. The Afghan people's faith and determination, combined with divine assistance, overcame technological might.",
      activities: ["Victory Analysis Discussion", "Faith vs Technology Debate", "Historical Islamic Victories Research"],
      examples: ["Afghanistan's resistance against superpowers", "Prophet Muhammad's victories with limited resources", "Islamic conquests through faith and strategy", "Modern examples of faith overcoming technology"],
      hadith: [
        {
          text: "Allah helps this Ummah with the weak among them through their supplications, prayers, and sincerity",
          reference: "Sahih An-Nasa'i",
          context: "Victory comes through faith and sincerity, not material superiority"
        },
        {
          text: "The Prophet (PBUH) said: 'You will be aided and provided for, so that none of you will be more courageous in doing what I command you to do, and more careful in refraining from what I forbid you, than I am'",
          reference: "Sahih Bukhari",
          context: "Success comes from following Islamic principles, not material resources"
        }
      ],
      quran: [
        {
          ayah: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
          translation: "Indeed, Allah is with the patient",
          reference: "Surah Al-Baqarah, 2:153",
          context: "Patience and faith lead to victory"
        },
        {
          ayah: "وَمَا النَّصْرُ إِلَّا مِنْ عِندِ اللَّهِ",
          translation: "And victory is not except from Allah",
          reference: "Surah Al-Anfal, 8:10",
          context: "Ultimate victory comes from Allah, not technology"
        },
        {
          ayah: "كَم مِّن فِئَةٍ قَلِيلَةٍ غَلَبَتْ فِئَةً كَثِيرَةً بِإِذْنِ اللَّهِ",
          translation: "How many a small company has overcome a large company by permission of Allah",
          reference: "Surah Al-Baqarah, 2:249",
          context: "Small numbers with faith can overcome large numbers with technology"
        }
      ]
    },
    {
      title: "The Fitna of Dajjal and Technology",
      content: "The Prophet (PBUH) warned us about the great fitna (trial) of Dajjal, who will use extraordinary technological abilities to deceive people. This teaches us to be cautious about technology that may lead us away from faith and to always verify truth through Islamic principles.",
      islamicContext: "Dajjal will use advanced technology to perform apparent miracles and deceive people. This warning teaches us to be discerning about technological claims and to always prioritize faith over material wonders.",
      activities: ["Dajjal's Technology Analysis", "Islamic Verification Methods", "Faith vs Miracles Discussion"],
      examples: ["Deepfake technology and deception", "AI-generated content manipulation", "Virtual reality and false realities", "Social media echo chambers"],
      hadith: [
        {
          text: "Dajjal will come with something like Paradise and Hell, and what he calls Paradise will actually be Hell",
          reference: "Sahih Bukhari",
          context: "Dajjal will use technology to create false appearances"
        },
        {
          text: "Whoever hears of Dajjal, let him keep away from him, for by Allah, a man will come to him thinking he is a believer, but he will follow him because of the doubts he will raise",
          reference: "Abu Dawud",
          context: "We must be prepared and knowledgeable to avoid deception"
        },
        {
          text: "The Prophet (PBUH) said: 'I have told you so much about Dajjal that I fear you may not understand. Dajjal will be a short man, pigeon-toed, with curly hair, one-eyed, with his eye neither prominent nor sunken'",
          reference: "Sahih Muslim",
          context: "Detailed description helps us recognize deception"
        }
      ],
      quran: [
        {
          ayah: "وَلَا تَتَّبِعِ الْهَوَىٰ فَيُضِلَّكَ عَن سَبِيلِ اللَّهِ",
          translation: "And do not follow your desires, lest they mislead you from the way of Allah",
          reference: "Surah Sad, 38:26",
          context: "We must not be swayed by technological wonders that lead away from faith"
        },
        {
          ayah: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا",
          translation: "O you who have believed, if there comes to you a disobedient one with information, investigate",
          reference: "Surah Al-Hujurat, 49:6",
          context: "We must verify information, especially in the digital age"
        },
        {
          ayah: "وَمَا يَتَّبِعُ أَكْثَرُهُمْ إِلَّا ظَنًّا",
          translation: "And most of them follow not except assumption",
          reference: "Surah Yunus, 10:36",
          context: "We must seek knowledge and truth, not follow assumptions"
        }
      ]
    },
    {
      title: "Building a Digital Islamic Community",
      content: "Technology allows us to build and maintain Islamic communities online. We can connect with Muslims worldwide, share knowledge, support each other, and maintain our Islamic identity in the digital space.",
      islamicContext: "Islam emphasizes community and brotherhood. Technology can help us maintain these bonds across distances and create supportive Islamic communities online.",
      activities: ["Online Community Building", "Virtual Study Circles", "Digital Support Networks"],
      examples: ["Islamic study groups online", "Virtual prayer reminders", "Community support networks", "Islamic event coordination"],
      hadith: [
        {
          text: "The believers are like one body; if one part of it hurts, the whole body hurts",
          reference: "Sahih Muslim",
          context: "Technology can help maintain this unity"
        }
      ],
      quran: [
        {
          ayah: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ",
          translation: "The believers are but brothers",
          reference: "Surah Al-Hujurat, 49:10",
          context: "Technology can help strengthen this brotherhood"
        }
      ]
    }
  ]

  const quizQuestions = [
    {
      question: "What is the Islamic perspective on seeking knowledge?",
      options: ["It's optional", "It's obligatory for every Muslim", "Only for scholars", "Only for men"],
      correct: "It's obligatory for every Muslim"
    },
    {
      question: "How should we use social media according to Islamic principles?",
      options: ["Share everything", "Avoid it completely", "Use it for beneficial purposes", "Only for entertainment"],
      correct: "Use it for beneficial purposes"
    },
    {
      question: "What does Islam say about backbiting on social media?",
      options: ["It's acceptable online", "It's forbidden", "It depends on the situation", "It's only wrong in person"],
      correct: "It's forbidden"
    },
    {
      question: "How should we approach technology addiction?",
      options: ["Ignore it", "Use technology as much as possible", "Maintain balance and moderation", "Avoid all technology"],
      correct: "Maintain balance and moderation"
    },
    {
      question: "What is the best use of technology for Muslims?",
      options: ["Entertainment only", "Spreading Islamic knowledge", "Making money", "Avoiding responsibilities"],
      correct: "Spreading Islamic knowledge"
    },
    {
      question: "How should we protect privacy in the digital age?",
      options: ["Share everything", "Be careless with passwords", "Respect others' privacy and protect our own", "Ignore privacy concerns"],
      correct: "Respect others' privacy and protect our own"
    },
    {
      question: "What lesson does Afghanistan's victory teach us about technology?",
      options: ["Technology is always superior", "Faith and divine help can overcome technology", "We should avoid all technology", "Only military technology matters"],
      correct: "Faith and divine help can overcome technology"
    },
    {
      question: "What is the fitna of Dajjal related to technology?",
      options: ["Dajjal will avoid technology", "Dajjal will use technology to deceive people", "Technology will destroy Dajjal", "Dajjal has no connection to technology"],
      correct: "Dajjal will use technology to deceive people"
    },
    {
      question: "What is digital dawah?",
      options: ["Online shopping", "Spreading Islamic knowledge through technology", "Playing games", "Watching videos"],
      correct: "Spreading Islamic knowledge through technology"
    },
    {
      question: "How can technology help build Islamic community?",
      options: ["By replacing mosques", "By connecting Muslims worldwide", "By avoiding real interaction", "By creating division"],
      correct: "By connecting Muslims worldwide"
    }
  ]

  const discussionTopics = [
    "How has technology helped you in your Islamic learning?",
    "What are some ways you can use social media to spread Islamic knowledge?",
    "How do you maintain balance between technology use and religious obligations?",
    "What Islamic apps or websites do you find most beneficial?",
    "How can we protect our privacy while using technology?",
    "What are some positive ways to use technology for community building?",
    "How can we avoid technology addiction while still benefiting from it?",
    "What role should technology play in Islamic education?",
    "What lessons can we learn from Afghanistan's victory about faith vs technology?",
    "How can we prepare ourselves for the technological deceptions of Dajjal?",
    "What are some modern examples of technology being used to deceive people?",
    "How can we use technology to strengthen our faith rather than weaken it?"
  ]

  const handleQuizSubmit = () => {
    setShowResults(true)
  }

  const getScore = () => {
    let correct = 0
    quizQuestions.forEach((q, index) => {
      if (quizAnswers[`q${index}`] === q.correct) correct++
    })
    return correct
  }

  const togglePresentationMode = () => {
    setPresentationMode(!presentationMode)
    if (!presentationMode) {
      document.documentElement.requestFullscreen?.()
    } else {
      document.exitFullscreen?.()
    }
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 ${presentationMode ? 'text-2xl' : ''}`}>
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900/90 to-gray-900/90 backdrop-blur-sm border-b border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-blue-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Classes
            </Link>
            <div className="flex items-center">
              <Cpu className="w-8 h-8 text-blue-400 mr-3" />
              <span className="text-white font-semibold">Technology Ethics & Islamic Values</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-blue-400">
                <Clock className="w-5 h-5 mr-2" />
                <span className="text-sm">30 min</span>
              </div>
              <button
                onClick={() => setMuted(!muted)}
                className="text-blue-400 hover:text-white transition-colors"
                title={muted ? "Unmute" : "Mute"}
              >
                {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <button
                onClick={togglePresentationMode}
                className="text-blue-400 hover:text-white transition-colors"
                title={presentationMode ? "Exit Presentation Mode" : "Enter Presentation Mode"}
              >
                {presentationMode ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className={`max-w-6xl mx-auto px-4 py-8 ${presentationMode ? 'max-w-7xl' : ''}`}>
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-300 mb-2">
            <span>Progress</span>
            <span>{Math.round(((currentSection + 1) / sections.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div 
              className="bg-gradient-to-r from-blue-400 to-indigo-400 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Content Sections */}
        <div className={`grid gap-8 ${presentationMode ? 'grid-cols-1' : 'lg:grid-cols-3'}`}>
          {/* Main Content */}
          <div className={presentationMode ? 'col-span-1' : 'lg:col-span-2'}>
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-slate-900/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center text-black font-bold mr-4">
                  {currentSection + 1}
                </div>
                <h2 className={`font-bold text-white ${presentationMode ? 'text-4xl' : 'text-2xl'}`}>{sections[currentSection].title}</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className={`font-semibold text-blue-400 mb-3 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Key Concepts</h3>
                  <p className={`text-gray-300 leading-relaxed ${presentationMode ? 'text-xl' : ''}`}>{sections[currentSection].content}</p>
                </div>

                <div className="bg-gradient-to-r from-blue-400/20 to-transparent p-4 rounded-lg border-l-4 border-blue-400">
                  <h3 className={`font-semibold text-blue-400 mb-2 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Islamic Perspective</h3>
                  <p className={`text-gray-300 ${presentationMode ? 'text-xl' : ''}`}>{sections[currentSection].islamicContext}</p>
                </div>

                {/* Visual Section */}
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className={`font-semibold text-blue-400 mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Visual Learning</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {currentSection === 0 && (
                      <>
                        <div className="bg-gradient-to-br from-slate-900/50 to-gray-900/50 p-4 rounded-lg border border-blue-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                              <BookOpen className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-blue-400 font-semibold mb-2">Seeking Knowledge</h4>
                            <p className="text-gray-300 text-sm">The Prophet (PBUH) emphasized the importance of seeking knowledge throughout one's life</p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-slate-900/50 to-gray-900/50 p-4 rounded-lg border border-blue-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                              <Cpu className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-blue-400 font-semibold mb-2">Technology as Tool</h4>
                            <p className="text-gray-300 text-sm">Technology should serve humanity and align with Islamic values</p>
                          </div>
                        </div>
                      </>
                    )}
                    {currentSection === 1 && (
                      <>
                        <div className="bg-gradient-to-br from-slate-900/50 to-gray-900/50 p-4 rounded-lg border border-blue-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                              <Shield className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-blue-400 font-semibold mb-2">Digital Ethics</h4>
                            <p className="text-gray-300 text-sm">Applying Islamic principles to online behavior and digital interactions</p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-slate-900/50 to-gray-900/50 p-4 rounded-lg border border-blue-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                              <Heart className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-blue-400 font-semibold mb-2">Good Character</h4>
                            <p className="text-gray-300 text-sm">Maintaining Islamic values in all digital communications</p>
                          </div>
                        </div>
                      </>
                    )}
                    {currentSection === 2 && (
                      <>
                        <div className="bg-gradient-to-br from-slate-900/50 to-gray-900/50 p-4 rounded-lg border border-blue-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                              <Smartphone className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-blue-400 font-semibold mb-2">Social Media Ethics</h4>
                            <p className="text-gray-300 text-sm">Using social platforms to spread good and avoid harmful content</p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-slate-900/50 to-gray-900/50 p-4 rounded-lg border border-blue-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                              <Users className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-blue-400 font-semibold mb-2">Family Connections</h4>
                            <p className="text-gray-300 text-sm">Strengthening family bonds through responsible technology use</p>
                          </div>
                        </div>
                      </>
                    )}
                    {currentSection === 3 && (
                      <>
                        <div className="bg-gradient-to-br from-slate-900/50 to-gray-900/50 p-4 rounded-lg border border-blue-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                              <Shield className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-blue-400 font-semibold mb-2">Digital Privacy</h4>
                            <p className="text-gray-300 text-sm">Protecting personal information and respecting others' privacy</p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-slate-900/50 to-gray-900/50 p-4 rounded-lg border border-blue-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                              <Database className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-blue-400 font-semibold mb-2">Data Security</h4>
                            <p className="text-gray-300 text-sm">Using strong passwords and secure practices to protect information</p>
                          </div>
                        </div>
                      </>
                    )}
                    {currentSection === 4 && (
                      <>
                        <div className="bg-gradient-to-br from-slate-900/50 to-gray-900/50 p-4 rounded-lg border border-blue-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                              <Clock className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-blue-400 font-semibold mb-2">Time Management</h4>
                            <p className="text-gray-300 text-sm">Balancing technology use with religious obligations and family time</p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-slate-900/50 to-gray-900/50 p-4 rounded-lg border border-blue-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                              <Brain className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-blue-400 font-semibold mb-2">Digital Wellness</h4>
                            <p className="text-gray-300 text-sm">Maintaining mental and spiritual health in the digital age</p>
                          </div>
                        </div>
                      </>
                    )}
                    {currentSection === 5 && (
                      <>
                        <div className="bg-gradient-to-br from-slate-900/50 to-gray-900/50 p-4 rounded-lg border border-blue-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                              <BookOpen className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-blue-400 font-semibold mb-2">Islamic Learning Apps</h4>
                            <p className="text-gray-300 text-sm">Using technology to access Quran, Hadith, and Islamic education</p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-slate-900/50 to-gray-900/50 p-4 rounded-lg border border-blue-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                              <Globe className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-blue-400 font-semibold mb-2">Global Access</h4>
                            <p className="text-gray-300 text-sm">Connecting with Islamic scholars and resources worldwide</p>
                          </div>
                        </div>
                      </>
                    )}
                    {currentSection === 6 && (
                      <>
                        <div className="bg-gradient-to-br from-slate-900/50 to-gray-900/50 p-4 rounded-lg border border-blue-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                              <MessageCircle className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-blue-400 font-semibold mb-2">Digital Dawah</h4>
                            <p className="text-gray-300 text-sm">Spreading Islamic knowledge and positive messages online</p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-slate-900/50 to-gray-900/50 p-4 rounded-lg border border-blue-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                              <Lightbulb className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-blue-400 font-semibold mb-2">Creative Content</h4>
                            <p className="text-gray-300 text-sm">Creating engaging Islamic content for social media platforms</p>
                          </div>
                        </div>
                      </>
                    )}
                    {currentSection === 7 && (
                      <>
                        <div className="bg-blue-900/50 to-indigo-900/50 p-4 rounded-lg border border-yellow-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                              <Star className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-yellow-400 font-semibold mb-2">Faith Over Technology</h4>
                            <p className="text-gray-300 text-sm">Afghanistan's victory shows divine help over material superiority</p>
                          </div>
                        </div>
                        <div className="bg-blue-900/50 to-indigo-900/50 p-4 rounded-lg border border-yellow-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                              <Shield className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-yellow-400 font-semibold mb-2">Divine Victory</h4>
                            <p className="text-gray-300 text-sm">Allah's help comes to those who have faith and patience</p>
                          </div>
                        </div>
                      </>
                    )}
                    {currentSection === 8 && (
                      <>
                        <div className="bg-blue-900/50 to-indigo-900/50 p-4 rounded-lg border border-yellow-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                              <Brain className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-yellow-400 font-semibold mb-2">Beware of Deception</h4>
                            <p className="text-gray-300 text-sm">Dajjal will use advanced technology to deceive people</p>
                          </div>
                        </div>
                        <div className="bg-blue-900/50 to-indigo-900/50 p-4 rounded-lg border border-yellow-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                              <Shield className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-yellow-400 font-semibold mb-2">Stay Protected</h4>
                            <p className="text-gray-300 text-sm">Strengthen faith and knowledge to recognize deception</p>
                          </div>
                        </div>
                      </>
                    )}
                    {currentSection === 9 && (
                      <>
                        <div className="bg-blue-900/50 to-indigo-900/50 p-4 rounded-lg border border-yellow-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                              <Users className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-yellow-400 font-semibold mb-2">Digital Brotherhood</h4>
                            <p className="text-gray-300 text-sm">Building supportive Islamic communities online</p>
                          </div>
                        </div>
                        <div className="bg-blue-900/50 to-indigo-900/50 p-4 rounded-lg border border-yellow-400/30">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                              <Network className="w-8 h-8 text-black" />
                            </div>
                            <h4 className="text-yellow-400 font-semibold mb-2">Global Ummah</h4>
                            <p className="text-gray-300 text-sm">Connecting Muslims worldwide through technology</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Quran Section */}
                {sections[currentSection].quran && (
                  <div className="bg-gradient-to-br from-slate-900/50 to-gray-900/50 p-6 rounded-lg border border-blue-400/30">
                    <h3 className={`font-semibold text-blue-400 mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Quranic Guidance</h3>
                    <div className="space-y-4">
                      {sections[currentSection].quran.map((quran, index) => (
                        <div key={index} className="bg-gradient-to-r from-blue-400/20 to-transparent p-4 rounded-lg border-l-4 border-blue-400">
                          <p className={`text-blue-300 mb-2 font-arabic-quran text-right ${presentationMode ? 'text-xl' : 'text-lg'}`}>{quran.ayah}</p>
                          <p className={`text-gray-300 mb-2 ${presentationMode ? 'text-lg' : ''}`}>"{quran.translation}"</p>
                          <p className={`text-blue-400 text-sm ${presentationMode ? 'text-base' : ''}`}>- {quran.reference}</p>
                          <p className={`text-gray-400 text-sm mt-2 ${presentationMode ? 'text-base' : ''}`}>{quran.context}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hadith Section */}
                {sections[currentSection].hadith && (
                  <div className="bg-gradient-to-br from-slate-900/50 to-gray-900/50 p-6 rounded-lg border border-blue-400/30">
                    <h3 className={`font-semibold text-blue-400 mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Prophetic Guidance</h3>
                    <div className="space-y-4">
                      {sections[currentSection].hadith.map((hadith, index) => (
                        <div key={index} className="bg-gradient-to-r from-blue-400/20 to-transparent p-4 rounded-lg border-l-4 border-blue-400">
                          <p className={`text-blue-300 mb-2 font-arabic-hadith text-right ${presentationMode ? 'text-xl' : 'text-lg'}`}>{hadith.text}</p>
                          <p className={`text-gray-300 mb-2 ${presentationMode ? 'text-lg' : ''}`}>"{hadith.text}"</p>
                          <p className={`text-blue-400 text-sm ${presentationMode ? 'text-base' : ''}`}>- {hadith.reference}</p>
                          <p className={`text-gray-400 text-sm mt-2 ${presentationMode ? 'text-base' : ''}`}>{hadith.context}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Examples Section */}
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className={`font-semibold text-blue-400 mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Real-World Examples</h3>
                  <div className={`grid gap-4 ${presentationMode ? 'grid-cols-2' : 'md:grid-cols-2'}`}>
                    {sections[currentSection].examples?.map((example, index) => (
                      <div key={index} className="flex items-center bg-gray-700/50 p-3 rounded-lg">
                        <Zap className={`text-blue-400 mr-3 flex-shrink-0 ${presentationMode ? 'w-6 h-6' : 'w-5 h-5'}`} />
                        <span className={`text-gray-300 ${presentationMode ? 'text-lg' : 'text-sm'}`}>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activities Section */}
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className={`font-semibold text-blue-400 mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Activities & Discussion</h3>
                  <div className="space-y-4">
                    {sections[currentSection].activities?.map((activity, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`rounded-full bg-blue-400/20 flex items-center justify-center mr-3 ${presentationMode ? 'w-10 h-10' : 'w-8 h-8'}`}>
                          <span className={`text-blue-400 font-bold ${presentationMode ? 'text-lg' : 'text-sm'}`}>{index + 1}</span>
                        </div>
                        <span className={`text-gray-300 ${presentationMode ? 'text-xl' : ''}`}>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                  disabled={currentSection === 0}
                  className={`bg-gray-700 text-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors ${presentationMode ? 'px-8 py-3 text-lg' : 'px-6 py-2'}`}
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
                  disabled={currentSection === sections.length - 1}
                  className={`bg-gradient-to-r from-blue-400 to-indigo-400 text-black font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-indigo-400 hover:to-blue-400 transition-all ${presentationMode ? 'px-8 py-3 text-lg' : 'px-6 py-2'}`}
                >
                  Next
                </button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Hidden in presentation mode */}
          {!presentationMode && (
            <div className="space-y-6">
              {/* Navigation */}
              <div className="bg-gradient-to-br from-slate-900/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
                <h3 className="text-lg font-semibold text-white mb-4">Class Sections</h3>
                <div className="space-y-2">
                  {sections.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSection(index)}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        currentSection === index
                          ? 'bg-gradient-to-r from-blue-400 to-indigo-400 text-black font-semibold'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {index + 1}. {section.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Islamic Technology Principles */}
              <div className="bg-gradient-to-br from-slate-900/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
                <h3 className="text-lg font-semibold text-white mb-4">Islamic Tech Principles</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-2 rounded-lg bg-blue-400/10 border border-blue-400/20">
                    <Shield className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">Protect privacy and dignity</span>
                  </div>
                  <div className="flex items-center p-2 rounded-lg bg-blue-400/10 border border-blue-400/20">
                    <Lightbulb className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">Seek beneficial knowledge</span>
                  </div>
                  <div className="flex items-center p-2 rounded-lg bg-blue-400/10 border border-blue-400/20">
                    <Users className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">Serve humanity</span>
                  </div>
                  <div className="flex items-center p-2 rounded-lg bg-blue-400/10 border border-blue-400/20">
                    <Heart className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">Maintain good character</span>
                  </div>
                  <div className="flex items-center p-2 rounded-lg bg-blue-400/10 border border-blue-400/20">
                    <Globe className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">Build community</span>
                  </div>
                </div>
              </div>

              {/* Time Tracker */}
              <div className="bg-gradient-to-br from-slate-900/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
                <h3 className="text-lg font-semibold text-white mb-4">Class Progress</h3>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">
                    {Math.round(((currentSection + 1) / sections.length) * 30)} min
                  </div>
                  <div className="text-sm text-gray-400">
                    of 30 minutes completed
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Activities Section */}
        {currentSection === sections.length - 1 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 space-y-8"
          >

            {/* Group Discussion */}
            <div className="bg-gradient-to-br from-indigo-900/80 to-blue-900/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
              <h2 className={`font-bold text-white mb-6 ${presentationMode ? 'text-4xl' : 'text-2xl'}`}>Group Discussion</h2>
              
              <div className={`grid gap-6 ${presentationMode ? 'grid-cols-2' : 'md:grid-cols-2'}`}>
                <div>
                  <h3 className={`font-semibold text-yellow-400 mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Discussion Topics</h3>
                  <div className="space-y-3">
                    {discussionTopics.map((topic, index) => (
                      <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="flex items-start">
                          <MessageCircle className={`text-yellow-400 mr-3 mt-1 flex-shrink-0 ${presentationMode ? 'w-6 h-6' : 'w-5 h-5'}`} />
                          <span className={`text-gray-300 ${presentationMode ? 'text-lg' : 'text-sm'}`}>{topic}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className={`font-semibold text-yellow-400 mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Your Thoughts</h3>
                  <textarea
                    placeholder="Share your thoughts on any of the discussion topics..."
                    className={`w-full bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-yellow-400 focus:outline-none ${presentationMode ? 'h-40 text-lg' : 'h-32'}`}
                  />
                  <button 
                    className={`mt-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-lg hover:from-orange-400 hover:to-yellow-400 transition-all ${presentationMode ? 'py-3 px-6 text-lg' : 'py-2 px-4'}`}
                  >
                    Share Response
                  </button>
                </div>
              </div>
            </div>

            {/* Knowledge Check Quiz */}
            <div className="bg-gradient-to-br from-indigo-900/80 to-blue-900/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
              <h2 className={`font-bold text-white mb-6 ${presentationMode ? 'text-4xl' : 'text-2xl'}`}>Knowledge Check</h2>
              
              {!showResults ? (
                <div className="space-y-6">
                  {quizQuestions.map((question, index) => (
                    <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
                      <h3 className={`font-semibold text-white mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>
                        {index + 1}. {question.question}
                      </h3>
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <label key={optionIndex} className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name={`q${index}`}
                              value={option}
                              onChange={(e) => setQuizAnswers({...quizAnswers, [`q${index}`]: e.target.value})}
                              className={`mr-3 text-yellow-400 ${presentationMode ? 'w-5 h-5' : ''}`}
                            />
                            <span className={`text-gray-300 ${presentationMode ? 'text-xl' : ''}`}>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <button
                    onClick={handleQuizSubmit}
                    className={`w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-lg hover:from-orange-400 hover:to-yellow-400 transition-all ${presentationMode ? 'py-4 px-8 text-2xl' : 'py-3 px-8'}`}
                  >
                    Submit Answers
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className={`mb-4 ${presentationMode ? 'text-8xl' : 'text-6xl'}`}>
                    {getScore() === quizQuestions.length ? '🎉' : '📚'}
                  </div>
                  <h3 className={`font-bold text-white mb-2 ${presentationMode ? 'text-3xl' : 'text-2xl'}`}>
                    You got {getScore()} out of {quizQuestions.length} correct!
                  </h3>
                  <p className={`text-gray-300 mb-6 ${presentationMode ? 'text-xl' : ''}`}>
                    {getScore() === quizQuestions.length 
                      ? "Excellent! You've mastered the principles of technology ethics in Islam."
                      : "Good effort! Review the material and try again to strengthen your understanding."
                    }
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => {
                        setShowResults(false)
                        setQuizAnswers({})
                      }}
                      className={`bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors ${presentationMode ? 'px-8 py-3 text-lg' : 'px-6 py-2'}`}
                    >
                      Try Again
                    </button>
                    <Link href="/" className={`bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-lg hover:from-orange-400 hover:to-yellow-400 transition-all ${presentationMode ? 'px-8 py-3 text-lg' : 'px-6 py-2'}`}>
                      Back to Classes
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Reflection and Commitment */}
            <div className="bg-gradient-to-br from-indigo-900/80 to-blue-900/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
              <h2 className={`font-bold text-white mb-6 ${presentationMode ? 'text-4xl' : 'text-2xl'}`}>Personal Reflection</h2>
              
              <div className={`grid gap-6 ${presentationMode ? 'grid-cols-2' : 'md:grid-cols-2'}`}>
                <div>
                  <h3 className={`font-semibold text-yellow-400 mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>What I Learned</h3>
                  <textarea
                    placeholder="Reflect on the key concepts you learned about technology ethics in Islam..."
                    className={`w-full bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-yellow-400 focus:outline-none ${presentationMode ? 'h-40 text-lg' : 'h-32'}`}
                  />
                </div>
                
                <div>
                  <h3 className={`font-semibold text-yellow-400 mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>My Digital Ethics Commitment</h3>
                  <textarea
                    placeholder="How will you apply these Islamic principles in your use of technology?"
                    className={`w-full bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-yellow-400 focus:outline-none ${presentationMode ? 'h-40 text-lg' : 'h-32'}`}
                  />
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button className={`bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-lg hover:from-orange-400 hover:to-yellow-400 transition-all ${presentationMode ? 'py-4 px-8 text-2xl' : 'py-3 px-8'}`}>
                  Save Reflection
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  )
} 