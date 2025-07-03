'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Heart, 
  Brain, 
  Users, 
  Globe, 
  Lock, 
  AlertTriangle, 
  CheckCircle, 
  BookOpen, 
  Lightbulb,
  Play,
  Pause,
  RotateCcw,
  Award,
  Star,
  Eye,
  EyeOff,
  Smartphone,
  Wifi,
  UserCheck
} from 'lucide-react';

export default function SafetyIslamClass() {
  const [currentSection, setCurrentSection] = useState('intro');
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showActivity, setShowActivity] = useState(false);
  const [activityStep, setActivityStep] = useState(0);
  const [userChoices, setUserChoices] = useState<{[key: string]: any}>({});

  const sections = [
    { id: 'intro', title: 'Introduction to Islamic Safety', icon: Shield },
    { id: 'physical', title: 'Physical Safety', icon: Heart },
    { id: 'digital', title: 'Digital Safety', icon: Smartphone },
    { id: 'social', title: 'Social Safety', icon: Users },
    { id: 'spiritual', title: 'Spiritual Safety', icon: Brain },
    { id: 'environmental', title: 'Environmental Safety', icon: Globe },
    { id: 'activities', title: 'Interactive Activities', icon: Play },
    { id: 'quiz', title: 'Safety Quiz', icon: Award }
  ];

  const safetyTopics = {
    physical: {
      title: "Physical Safety in Islam",
      quranicReferences: [
        {
          verse: "وَلَا تُلْقُوا بِأَيْدِيكُمْ إِلَى التَّهْلُكَةِ",
          translation: "And do not throw yourselves into destruction",
          reference: "Quran 2:195",
          explanation: "This verse teaches us to protect our bodies and not put ourselves in harm's way."
        },
        {
          verse: "وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا",
          translation: "And whoever saves one life, it is as if they have saved all of humanity",
          reference: "Quran 5:32",
          explanation: "This emphasizes the sacredness of human life and our duty to protect it."
        }
      ],
      hadith: [
        {
          text: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
          translation: "A Muslim is one from whose tongue and hand other Muslims are safe",
          reference: "Sahih Bukhari",
          explanation: "This hadith teaches us to be safe for others and not cause harm."
        },
        {
          text: "إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ",
          translation: "Allah has prescribed excellence in everything",
          reference: "Sahih Muslim",
          explanation: "We should strive for excellence in safety practices."
        }
      ],
      principles: [
        "Always wear appropriate safety gear",
        "Follow traffic rules and road safety",
        "Maintain good hygiene and health practices",
        "Avoid dangerous activities and substances",
        "Help others in emergency situations"
      ]
    },
    digital: {
      title: "Digital Safety & Islamic Ethics",
      quranicReferences: [
        {
          verse: "يَا أَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِّنَ الظَّنِّ إِنَّ بَعْضَ الظَّنِّ إِثْمٌ",
          translation: "O you who believe, avoid much suspicion, for some suspicion is sin",
          reference: "Quran 49:12",
          explanation: "This teaches us to be careful about what we share and believe online."
        },
        {
          verse: "وَلَا تَجَسَّسُوا وَلَا يَغْتَب بَّعْضُكُم بَعْضًا",
          translation: "And do not spy on one another, nor backbite one another",
          reference: "Quran 49:12",
          explanation: "This applies to digital privacy and respecting others' online boundaries."
        }
      ],
      hadith: [
        {
          text: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
          translation: "Whoever believes in Allah and the Last Day, let him speak good or remain silent",
          reference: "Sahih Bukhari",
          explanation: "This applies to our online communication - speak good or stay silent."
        }
      ],
      principles: [
        "Protect your personal information online",
        "Be respectful in digital communications",
        "Verify information before sharing",
        "Limit screen time and take breaks",
        "Use technology for beneficial purposes"
      ]
    },
    social: {
      title: "Social Safety & Relationships",
      quranicReferences: [
        {
          verse: "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَىٰ",
          translation: "Indeed, Allah commands justice, excellence, and giving to relatives",
          reference: "Quran 16:90",
          explanation: "This teaches us to maintain just and excellent relationships."
        },
        {
          verse: "وَقُولُوا لِلنَّاسِ حُسْنًا",
          translation: "And speak to people in a good manner",
          reference: "Quran 2:83",
          explanation: "Always communicate with kindness and respect."
        }
      ],
      hadith: [
        {
          text: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
          translation: "None of you truly believes until he loves for his brother what he loves for himself",
          reference: "Sahih Bukhari",
          explanation: "Treat others as you want to be treated, including in social situations."
        }
      ],
      principles: [
        "Choose good company and friends",
        "Respect boundaries and personal space",
        "Communicate openly and honestly",
        "Avoid gossip and backbiting",
        "Stand up against bullying and injustice"
      ]
    },
    spiritual: {
      title: "Spiritual Safety & Protection",
      quranicReferences: [
        {
          verse: "فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
          translation: "So when you recite the Quran, seek refuge in Allah from Satan, the expelled",
          reference: "Quran 16:98",
          explanation: "Seek Allah's protection before engaging in spiritual activities."
        },
        {
          verse: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
          translation: "Unquestionably, by the remembrance of Allah hearts are assured",
          reference: "Quran 13:28",
          explanation: "Regular remembrance of Allah provides spiritual safety and peace."
        }
      ],
      hadith: [
        {
          text: "مَنْ قَرَأَ آيَةَ الْكُرْسِيِّ فِي لَيْلَةٍ لَمْ يَزَلْ عَلَيْهِ مِنَ اللَّهِ حَافِظٌ",
          translation: "Whoever recites Ayat Al-Kursi at night, Allah will protect them",
          reference: "Sahih Bukhari",
          explanation: "Regular recitation of Quranic verses provides spiritual protection."
        }
      ],
      principles: [
        "Maintain regular prayers and worship",
        "Recite Quran and dhikr daily",
        "Seek knowledge from reliable sources",
        "Avoid harmful influences and environments",
        "Strengthen your faith through good deeds"
      ]
    },
    environmental: {
      title: "Environmental Safety & Stewardship",
      quranicReferences: [
        {
          verse: "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا",
          translation: "And do not cause corruption on earth after it has been set right",
          reference: "Quran 7:56",
          explanation: "We are responsible for protecting and preserving the environment."
        },
        {
          verse: "إِنَّا عَرَضْنَا الْأَمَانَةَ عَلَى السَّمَاوَاتِ وَالْأَرْضِ",
          translation: "Indeed, We offered the trust to the heavens and the earth",
          reference: "Quran 33:72",
          explanation: "We have been entrusted with the care of Allah's creation."
        }
      ],
      hadith: [
        {
          text: "إِنَّ اللَّهَ طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا",
          translation: "Indeed, Allah is pure and accepts only what is pure",
          reference: "Sahih Muslim",
          explanation: "Keep your environment clean and pure as Allah loves cleanliness."
        }
      ],
      principles: [
        "Reduce waste and recycle",
        "Conserve water and energy",
        "Keep your surroundings clean",
        "Plant trees and care for nature",
        "Use eco-friendly products"
      ]
    }
  };

  const quizQuestions = [
    {
      id: 'q1',
      question: 'What does the Quran say about protecting human life?',
      options: [
        'It\'s optional',
        'It\'s as if you saved all of humanity',
        'It doesn\'t matter',
        'Only protect family members'
      ],
      correct: 'It\'s as if you saved all of humanity',
      explanation: 'Quran 5:32 teaches us that saving one life is like saving all of humanity.'
    },
    {
      id: 'q2',
      question: 'How should we behave online according to Islamic teachings?',
      options: [
        'Share everything',
        'Speak good or remain silent',
        'Ignore others',
        'Be anonymous always'
      ],
      correct: 'Speak good or remain silent',
      explanation: 'The Prophet (ﷺ) taught us to speak good or remain silent, which applies to online communication.'
    },
    {
      id: 'q3',
      question: 'What is the Islamic principle about relationships?',
      options: [
        'Love for yourself what you love for others',
        'Only care about family',
        'Avoid all relationships',
        'Be selfish'
      ],
      correct: 'Love for yourself what you love for others',
      explanation: 'The Prophet (ﷺ) taught us to love for our brother what we love for ourselves.'
    },
    {
      id: 'q4',
      question: 'How should we treat the environment?',
      options: [
        'Use it however we want',
        'Cause corruption after it\'s set right',
        'Protect and preserve it',
        'Ignore environmental issues'
      ],
      correct: 'Protect and preserve it',
      explanation: 'Quran 7:56 teaches us not to cause corruption on earth after it has been set right.'
    },
    {
      id: 'q5',
      question: 'What provides spiritual safety?',
      options: [
        'Avoiding all religious activities',
        'Regular remembrance of Allah',
        'Isolating yourself',
        'Ignoring spiritual matters'
      ],
      correct: 'Regular remembrance of Allah',
      explanation: 'Quran 13:28 tells us that by the remembrance of Allah, hearts are assured.'
    }
  ];

  const handleQuizSubmit = () => {
    let correctAnswers = 0;
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correct) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setQuizSubmitted(true);
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setScore(0);
  };

  // Safety Scenario Game Component
  function SafetyScenarioGame({ onClose }: { onClose: () => void }) {
    const [currentScenario, setCurrentScenario] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const scenarios = [
      {
        id: 1,
        title: "Digital Safety",
        scenario: "You receive a message from an unknown number asking for your personal information. What should you do?",
        options: [
          "Share your information since they might need help",
          "Ignore the message and block the number",
          "Ask them to prove their identity first",
          "Forward the message to friends to warn them"
        ],
        correct: "Ignore the message and block the number",
        explanation: "According to Islamic teachings, we should protect our privacy and avoid sharing personal information with strangers. The Prophet (ﷺ) taught us to be cautious and protect ourselves from harm.",
        islamicContext: "The Quran teaches us to be careful about what we share and believe (49:12)."
      },
      {
        id: 2,
        title: "Physical Safety",
        scenario: "You're walking home and notice someone following you. What's the safest Islamic approach?",
        options: [
          "Confront them directly",
          "Take a different route and seek help",
          "Ignore them and continue walking",
          "Run as fast as you can"
        ],
        correct: "Take a different route and seek help",
        explanation: "The Quran teaches us not to throw ourselves into destruction (2:195). Seeking help and avoiding danger is the Islamic approach to safety.",
        islamicContext: "Allah has entrusted us with our bodies and we must protect them."
      },
      {
        id: 3,
        title: "Social Safety",
        scenario: "Your friends are planning to do something that goes against Islamic values. What should you do?",
        options: [
          "Join them to avoid being left out",
          "Politely decline and suggest a better alternative",
          "Ignore the situation",
          "Report them to authorities"
        ],
        correct: "Politely decline and suggest a better alternative",
        explanation: "The Prophet (ﷺ) taught us to speak good or remain silent. We should guide others to what is good while maintaining good relationships.",
        islamicContext: "Islam teaches us to be good examples and guide others to righteousness."
      },
      {
        id: 4,
        title: "Environmental Safety",
        scenario: "You see someone littering in a public park. What's the Islamic response?",
        options: [
          "Ignore it since it's not your problem",
          "Pick up the litter and dispose of it properly",
          "Confront them angrily",
          "Report them to the police"
        ],
        correct: "Pick up the litter and dispose of it properly",
        explanation: "The Prophet (ﷺ) said 'Removing harm from the road is a charity.' We are stewards of Allah's creation and should keep it clean.",
        islamicContext: "We are khalifah (stewards) of the earth and must protect Allah's creation."
      },
      {
        id: 5,
        title: "Spiritual Safety",
        scenario: "You're feeling stressed and overwhelmed. What's the best Islamic approach?",
        options: [
          "Ignore your feelings",
          "Seek refuge in Allah and perform dhikr",
          "Take medication immediately",
          "Avoid all religious activities"
        ],
        correct: "Seek refuge in Allah and perform dhikr",
        explanation: "The Quran tells us that by the remembrance of Allah, hearts are assured (13:28). Seeking Allah's help is the best approach to dealing with stress.",
        islamicContext: "Regular remembrance of Allah provides spiritual safety and peace."
      }
    ];

    const handleAnswerSelect = (answer: string) => {
      setSelectedAnswer(answer);
      setShowResult(true);
      if (answer === scenarios[currentScenario].correct) {
        setScore(score + 1);
      }
    };

    const handleNext = () => {
      if (currentScenario < scenarios.length - 1) {
        setCurrentScenario(currentScenario + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      }
    };

    const handleRestart = () => {
      setCurrentScenario(0);
      setSelectedAnswer(null);
      setShowResult(false);
      setScore(0);
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-islamic-gold/50"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Safety Scenario Game</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
              <span>Scenario {currentScenario + 1} of {scenarios.length}</span>
              <span>Score: {score}/{scenarios.length}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-islamic-gold to-yellow-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentScenario + 1) / scenarios.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-500/50">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{scenarios[currentScenario].title}</h3>
              <p className="text-gray-300 text-lg">{scenarios[currentScenario].scenario}</p>
            </div>

            <div className="space-y-3">
              {scenarios[currentScenario].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => !showResult && handleAnswerSelect(option)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-lg border transition-all text-left ${
                    showResult
                      ? option === scenarios[currentScenario].correct
                        ? 'bg-green-900/30 border-green-500 text-green-400'
                        : option === selectedAnswer
                        ? 'bg-red-900/30 border-red-500 text-red-400'
                        : 'bg-gray-800/50 border-gray-600 text-gray-400'
                      : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:border-blue-500 hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      showResult
                        ? option === scenarios[currentScenario].correct
                          ? 'bg-green-500 border-green-500'
                          : option === selectedAnswer
                          ? 'bg-red-500 border-red-500'
                          : 'border-gray-500'
                        : 'border-gray-400'
                    }`}>
                      {showResult && option === scenarios[currentScenario].correct && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                      {showResult && option === selectedAnswer && option !== scenarios[currentScenario].correct && (
                        <AlertTriangle className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-6 rounded-xl border border-green-500/50"
              >
                <h4 className="text-lg font-semibold text-white mb-3">
                  {selectedAnswer === scenarios[currentScenario].correct ? '✅ Correct!' : '❌ Not quite right'}
                </h4>
                <p className="text-gray-300 mb-3">{scenarios[currentScenario].explanation}</p>
                <div className="bg-gradient-to-r from-islamic-gold/20 to-transparent p-3 rounded-lg border-l-4 border-islamic-gold">
                  <p className="text-sm text-gray-300">{scenarios[currentScenario].islamicContext}</p>
                </div>
              </motion.div>
            )}

            <div className="flex justify-between">
              <button
                onClick={handleRestart}
                className="bg-gray-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-600 transition-all"
              >
                Restart Game
              </button>
              {showResult && currentScenario < scenarios.length - 1 && (
                <button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-2 px-6 rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all"
                >
                  Next Scenario
                </button>
              )}
              {showResult && currentScenario === scenarios.length - 1 && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-islamic-gold mb-2">
                    Game Complete! Score: {score}/{scenarios.length}
                  </div>
                  <p className="text-gray-300">
                    {score === scenarios.length ? 'Perfect! You have excellent safety awareness!' :
                     score >= scenarios.length * 0.8 ? 'Great job! You have good safety knowledge.' :
                     'Keep practicing! Review the safety principles and try again.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // Safety Checklist Component
  function SafetyChecklist({ onBack }: { onBack: () => void }) {
    const [checklist, setChecklist] = useState<{[key: string]: boolean}>({});
    const [showSummary, setShowSummary] = useState(false);

    const safetyCategories = {
      physical: {
        title: "Physical Safety",
        items: [
          "Always wear appropriate safety gear",
          "Follow traffic rules and road safety",
          "Maintain good hygiene and health practices",
          "Avoid dangerous activities and substances",
          "Help others in emergency situations"
        ]
      },
      digital: {
        title: "Digital Safety",
        items: [
          "Protect your personal information online",
          "Be respectful in digital communications",
          "Verify information before sharing",
          "Limit screen time and take breaks",
          "Use technology for beneficial purposes"
        ]
      },
      social: {
        title: "Social Safety",
        items: [
          "Choose good company and friends",
          "Respect boundaries and personal space",
          "Communicate openly and honestly",
          "Avoid gossip and backbiting",
          "Stand up against bullying and injustice"
        ]
      },
      spiritual: {
        title: "Spiritual Safety",
        items: [
          "Maintain regular prayers and worship",
          "Recite Quran and dhikr daily",
          "Seek knowledge from reliable sources",
          "Avoid harmful influences and environments",
          "Strengthen your faith through good deeds"
        ]
      },
      environmental: {
        title: "Environmental Safety",
        items: [
          "Reduce waste and recycle",
          "Conserve water and energy",
          "Keep your surroundings clean",
          "Plant trees and care for nature",
          "Use eco-friendly products"
        ]
      }
    };

    const handleToggleItem = (category: string, item: string) => {
      const key = `${category}-${item}`;
      setChecklist(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    };

    const getCompletedCount = () => {
      return Object.values(checklist).filter(Boolean).length;
    };

    const getTotalCount = () => {
      return Object.values(safetyCategories).reduce((total, category) => total + category.items.length, 0);
    };

    const handleSaveChecklist = () => {
      setShowSummary(true);
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Safety Checklist</h2>
            <p className="text-gray-300">Create your personal safety checklist based on Islamic principles</p>
          </div>
          <button
            onClick={onBack}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
          >
            ← Back to Activities
          </button>
        </div>

        {!showSummary ? (
          <>
            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-4 rounded-xl border border-green-500/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold">Progress</span>
                <span className="text-islamic-gold font-bold">{getCompletedCount()}/{getTotalCount()}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${(getCompletedCount() / getTotalCount()) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-6">
              {Object.entries(safetyCategories).map(([categoryKey, category]) => (
                <motion.div
                  key={categoryKey}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                  <div className="space-y-3">
                    {category.items.map((item, idx) => {
                      const key = `${categoryKey}-${item}`;
                      const isChecked = checklist[key] || false;
                      return (
                        <label
                          key={idx}
                          className="flex items-center space-x-3 p-3 rounded-lg border border-gray-600 hover:border-islamic-gold cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleToggleItem(categoryKey, item)}
                            className="w-5 h-5 text-islamic-gold rounded focus:ring-islamic-gold"
                          />
                          <span className={`flex-1 ${isChecked ? 'text-islamic-gold line-through' : 'text-gray-300'}`}>
                            {item}
                          </span>
                          {isChecked && <CheckCircle className="w-5 h-5 text-green-400" />}
                        </label>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={handleSaveChecklist}
                className="bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-3 px-8 rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all"
              >
                Save My Checklist
              </button>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-8 rounded-xl border border-green-500/50">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Checklist Saved!</h3>
              <p className="text-xl text-gray-300 mb-4">
                You completed {getCompletedCount()} out of {getTotalCount()} safety items
              </p>
              <div className="text-4xl font-bold text-islamic-gold mb-4">
                {Math.round((getCompletedCount() / getTotalCount()) * 100)}%
              </div>
              <p className="text-gray-300">
                {getCompletedCount() === getTotalCount() ? 'Perfect! You have excellent safety awareness!' :
                 getCompletedCount() >= getTotalCount() * 0.8 ? 'Great job! Keep working on the remaining items.' :
                 'Good start! Continue working on your safety checklist.'}
              </p>
            </div>

            <button
              onClick={() => setShowSummary(false)}
              className="bg-gray-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-600 transition-all"
            >
              Edit Checklist
            </button>
          </motion.div>
        )}
      </motion.div>
    );
  }

  const renderSection = () => {
    switch (currentSection) {
      case 'intro':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center">
              <Shield className="w-16 h-16 text-islamic-gold mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Safety in Islam</h2>
              <p className="text-xl text-gray-300 mb-6">
                A comprehensive guide to staying safe in all aspects of life, guided by Islamic principles
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(safetyTopics).map(([key, topic]) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-islamic-gold transition-all"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{topic.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Learn about {topic.title.toLowerCase()} through Quranic verses, Hadith, and practical principles.
                  </p>
                  <button
                    onClick={() => setCurrentSection(key)}
                    className="bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all"
                  >
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-6 rounded-xl border border-green-500/50">
              <h3 className="text-xl font-semibold text-white mb-3">Why Safety Matters in Islam</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Our Bodies are Trusts</h4>
                  <p className="text-gray-300">
                    Allah has entrusted us with our bodies and health. We must protect these gifts.
                  </p>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Community Responsibility</h4>
                  <p className="text-gray-300">
                    We are responsible for the safety and well-being of our community.
                  </p>
                </div>
                <div>
                  <h4 className="text-purple-400 font-semibold mb-2">Environmental Stewardship</h4>
                  <p className="text-gray-300">
                    We are khalifah (stewards) of the earth and must protect Allah's creation.
                  </p>
                </div>
                <div>
                  <h4 className="text-orange-400 font-semibold mb-2">Spiritual Protection</h4>
                  <p className="text-gray-300">
                    Safety practices help protect our souls and strengthen our faith.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'activities':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center">
              <Play className="w-16 h-16 text-islamic-gold mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Interactive Activities</h2>
              <p className="text-gray-300 mb-6">
                Practice safety principles through engaging activities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Safety Scenario Game */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-500/50"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Safety Scenario Game</h3>
                <p className="text-gray-300 mb-4">
                  Practice making safe decisions in different situations
                </p>
                <button
                  onClick={() => setShowActivity(true)}
                  className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-500 transition-all"
                >
                  Start Game
                </button>
              </motion.div>

              {/* Safety Checklist */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-green-900/30 to-teal-900/30 p-6 rounded-xl border border-green-500/50"
              >
                <h3 className="text-xl font-semibold text-white mb-3">Safety Checklist</h3>
                <p className="text-gray-300 mb-4">
                  Create your personal safety checklist based on Islamic principles
                </p>
                <button
                  onClick={() => setCurrentSection('checklist')}
                  className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-500 transition-all"
                >
                  Create Checklist
                </button>
              </motion.div>
            </div>

            {/* Safety Scenario Game */}
            {showActivity && (
              <SafetyScenarioGame onClose={() => setShowActivity(false)} />
            )}
          </motion.div>
        );

      case 'checklist':
        return (
          <SafetyChecklist onBack={() => setCurrentSection('activities')} />
        );

      case 'quiz':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center">
              <Award className="w-16 h-16 text-islamic-gold mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Safety Quiz</h2>
              <p className="text-gray-300 mb-6">
                Test your knowledge about Islamic safety principles
              </p>
            </div>

            {!quizSubmitted ? (
              <div className="space-y-6">
                {quizQuestions.map((q, idx) => (
                  <motion.div
                    key={q.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
                  >
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Question {idx + 1}: {q.question}
                    </h3>
                    <div className="space-y-3">
                      {q.options.map((option, optIdx) => (
                        <label
                          key={optIdx}
                          className="flex items-center space-x-3 p-3 rounded-lg border border-gray-600 hover:border-islamic-gold cursor-pointer transition-colors"
                        >
                          <input
                            type="radio"
                            name={q.id}
                            value={option}
                            onChange={(e) => setQuizAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                            className="text-islamic-gold"
                          />
                          <span className="text-gray-300">{option}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                ))}

                <div className="text-center">
                  <button
                    onClick={handleQuizSubmit}
                    disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                    className="bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-3 px-8 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-yellow-400 hover:to-orange-400 transition-all"
                  >
                    Submit Quiz
                  </button>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-8 rounded-xl border border-green-500/50">
                  <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Quiz Complete!
                  </h3>
                  <p className="text-xl text-gray-300 mb-4">
                    You scored {score} out of {quizQuestions.length}
                  </p>
                  <div className="text-4xl font-bold text-islamic-gold mb-4">
                    {Math.round((score / quizQuestions.length) * 100)}%
                  </div>
                  <p className="text-gray-300">
                    {score === quizQuestions.length ? 'Perfect! You have excellent knowledge of Islamic safety principles!' :
                     score >= quizQuestions.length * 0.8 ? 'Great job! You have good understanding of safety in Islam.' :
                     score >= quizQuestions.length * 0.6 ? 'Good effort! Keep learning about Islamic safety principles.' :
                     'Keep studying! Review the safety principles and try again.'}
                  </p>
                </div>

                <button
                  onClick={resetQuiz}
                  className="bg-gray-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-600 transition-all"
                >
                  Try Again
                </button>
              </motion.div>
            )}
          </motion.div>
        );

      default:
        if (safetyTopics[currentSection as keyof typeof safetyTopics]) {
          const topic = safetyTopics[currentSection as keyof typeof safetyTopics];
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">{topic.title}</h2>
                <p className="text-gray-300 mb-6">
                  Learn about {topic.title.toLowerCase()} through Islamic teachings
                </p>
              </div>

              {/* Quranic References */}
              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/50">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-green-400" />
                  Quranic References
                </h3>
                <div className="space-y-4">
                  {topic.quranicReferences.map((ref, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-gray-800/50 p-4 rounded-lg"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                          {ref.reference}
                        </div>
                        <div className="flex-1">
                          <p className="text-lg text-green-400 quranic-text mb-2">{ref.verse}</p>
                          <p className="text-gray-300 text-sm mb-2">{ref.translation}</p>
                          <p className="text-gray-400 text-xs">{ref.explanation}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hadith */}
              <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/50">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-blue-400" />
                  Hadith & Prophetic Teachings
                </h3>
                <div className="space-y-4">
                  {topic.hadith.map((hadith, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-gray-800/50 p-4 rounded-lg"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                          {hadith.reference}
                        </div>
                        <div className="flex-1">
                          <p className="text-lg text-blue-400 hadith-text mb-2">{hadith.text}</p>
                          <p className="text-gray-300 text-sm mb-2">{hadith.translation}</p>
                          <p className="text-gray-400 text-xs">{hadith.explanation}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Safety Principles */}
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/50">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-purple-400" />
                  Practical Safety Principles
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {topic.principles.map((principle, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center space-x-3 bg-gray-800/50 p-3 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{principle}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        }
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Safety in Islam</h1>
              <p className="text-gray-400">Comprehensive Islamic Safety Guide</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentSection('intro')}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
              >
                Home
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setCurrentSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  currentSection === section.id
                    ? 'bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-semibold'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <section.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {renderSection()}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 border-t border-gray-700 mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-400">
            <p>© 2024 Islamic Safety Guide - Teaching teens about safety through Islamic principles</p>
          </div>
        </div>
      </div>
    </div>
  );
} 