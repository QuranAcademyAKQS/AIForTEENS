'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Building2, Shield, Lightbulb, Users, ArrowLeft, Play, CheckCircle, XCircle, BookOpen, MessageCircle, Target, Heart, Globe, Clock, History, Zap, Eye, Cpu, Activity, Maximize2, Minimize2, Volume2, VolumeX } from 'lucide-react'
import Link from 'next/link'

export default function Class1() {
  const [currentSection, setCurrentSection] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({})
  const [showResults, setShowResults] = useState(false)
  const [discussionResponses, setDiscussionResponses] = useState<string[]>([])
  const [currentActivity, setCurrentActivity] = useState(0)
  const [ethicsScenario, setEthicsScenario] = useState(0)
  const [timelineEvent, setTimelineEvent] = useState(0)
  const [presentationMode, setPresentationMode] = useState(false)
  const [muted, setMuted] = useState(false)

  const sections = [
    {
      title: "The History of Artificial Intelligence",
      content: "AI has a fascinating history spanning over 70 years. It began in the 1950s with Alan Turing's question 'Can machines think?' and has evolved through several 'AI winters' and breakthroughs. From early expert systems to today's deep learning, AI has transformed from science fiction to everyday reality.",
      islamicContext: "Throughout history, Muslim scholars have contributed to mathematics, science, and logic - the foundations of AI. Figures like Al-Khwarizmi (algorithm), Al-Kindi (cryptography), and Ibn Sina (logic) laid groundwork that modern AI builds upon. This reflects Islam's encouragement of knowledge and innovation.",
      activities: ["AI Timeline Exploration", "Historical Figures Discussion", "Technology Evolution"],
      examples: ["Turing Test (1950)", "Expert Systems (1970s)", "Deep Blue (1997)", "ChatGPT (2022)"],
      timeline: [
        {
          year: "1936",
          event: "Turing publishes \"On Computable Numbers\"",
          significance: "Lays theoretical foundation for algorithms and computation. Introduces the concept of a universal computing machine (Turing Machine) that can simulate any other computer. This paper established the mathematical basis for modern computing and artificial intelligence.",
          image: "https://tse3.mm.bing.net/th?id=OIP.ZF5OL9Sks55ye6D4Z6r49wHaFc",
          imageAlt: "Alan Turing's early computing work"
        },
        {
          year: "1950",
          event: "Turing proposes the Turing Test",
          significance: "First formal approach to define and assess AI. In his paper 'Computing Machinery and Intelligence,' Turing asks 'Can machines think?' and proposes the Imitation Game as a practical test for machine intelligence. This became the foundation for evaluating AI systems.",
          image: "https://tse3.mm.bing.net/th?id=OIP.ZF5OL9Sks55ye6D4Z6r49wHaFc",
          imageAlt: "Pilot ACE computer representing early computing"
        },
        {
          year: "1956",
          event: "Dartmouth Conference",
          significance: "AI field is officially born with coined term. John McCarthy organizes a two-month summer workshop at Dartmouth College where the term 'Artificial Intelligence' is first used. This conference brought together pioneers like Marvin Minsky, Claude Shannon, and Herbert Simon to establish AI as a research field.",
          image: "https://tse3.mm.bing.net/th?id=OIP.iBY60ZgDggh08cGVZKXn6QHaE9",
          imageAlt: "Group photo at Dartmouth AI conference"
        },
        {
          year: "1966",
          event: "ELIZA is created",
          significance: "Early natural language program simulating conversation. Joseph Weizenbaum develops ELIZA at MIT, which uses pattern matching to simulate a psychotherapist. ELIZA could engage in conversations by recognizing keywords and generating appropriate responses, marking the beginning of natural language processing.",
          image: "https://tse3.mm.bing.net/th?id=OIP.P-UOeQ92IK60I6JzavyTvAHaE8",
          imageAlt: "ELIZA chatbot running on retro terminal"
        },
        {
          year: "1969",
          event: "Shakey the Robot",
          significance: "First mobile robot that perceived and navigated its environment. Developed at Stanford Research Institute, Shakey combined robotics, computer vision, and natural language processing. It could navigate through rooms, avoid obstacles, and perform simple tasks, demonstrating the integration of multiple AI technologies.",
          image: "https://tse2.mm.bing.net/th?id=OIP.X8ylN56buu5N3Z3SdnyZxAHaEK",
          imageAlt: "Shakey the Robot at SRI"
        },
        {
          year: "1972",
          event: "MYCIN expert system",
          significance: "One of the earliest expert systems, MYCIN, is developed to diagnose blood infections.",
          image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=300&fit=crop&crop=center",
          imageAlt: "Medical technology and AI"
        },
        {
          year: "1987",
          event: "AI Winter",
          significance: "Funding and interest in AI research decline due to unmet expectations, leading to the 'AI Winter'.",
          image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop&crop=center",
          imageAlt: "Winter landscape representing AI winter"
        },
        {
          year: "1997",
          event: "Deep Blue beats Kasparov",
          significance: "First time a computer defeated a reigning world chess champion under tournament conditions, using brute-force search of 200M positions/sec. IBM's Deep Blue, running on specialized hardware, defeated Garry Kasparov 3.5-2.5 in a six-game match. This demonstrated AI's ability to solve complex strategic problems through computational power.",
          image: "https://tse3.mm.bing.net/th?id=OIP.a0fZMAtNJFjy7MOjbApu-QHaHa",
          imageAlt: "Deep Blue vs Kasparov chess match"
        },
        {
          year: "2011",
          event: "Watson wins Jeopardy!",
          significance: "Demonstrated language understanding and large-scale knowledge retrieval. IBM's Watson defeated Jeopardy champions Ken Jennings and Brad Rutter by processing natural language questions, accessing vast knowledge bases, and generating accurate responses in real-time. This showcased AI's ability to understand context and retrieve relevant information.",
          image: "https://tse4.mm.bing.net/th?id=OIP.m9Mr1UqYFgwyDpEV4wkzFQHaFj",
          imageAlt: "IBM Watson on Jeopardy set"
        },
        {
          year: "2012",
          event: "AlexNet wins ImageNet",
          significance: "Deep learning revolution begins as AlexNet achieves breakthrough results in image recognition.",
          image: "https://tse3.mm.bing.net/th?id=OIP.MM64PFobN0nzEO3Q-YEErwHaHa",
          imageAlt: "Neural network visualization"
        },
        {
          year: "2016",
          event: "AlphaGo beats Lee Sedol",
          significance: "AI uses deep learning and reinforcement learning to master Go 4‑1. Google DeepMind's AlphaGo defeated world champion Lee Sedol in a five-game match. Unlike chess, Go requires intuition and pattern recognition. AlphaGo's victory demonstrated that AI could master complex games requiring human-like reasoning and creativity.",
          image: "https://tse2.mm.bing.net/th?id=OIP.44DM2s67muHPog9b4xnwCwHaG4&pid=Api",
          imageAlt: "AlphaGo versus Lee Sedol Go match"
        },
        {
          year: "2020",
          event: "GPT‑3 released",
          significance: "Massive language model capable of generating human‑like text and code. OpenAI's GPT-3, with 175 billion parameters, demonstrated unprecedented language understanding and generation capabilities. It could write essays, create code, translate languages, and engage in conversations, showing the potential of large-scale language models.",
          image: "https://tse4.mm.bing.net/th?id=OIP.b7hX3HGOTbkrCWLM_7z8wgHaJ4&pid=Api",
          imageAlt: "Visual representation of GPT‑3 text generation"
        },
        {
          year: "2022",
          event: "ChatGPT launch",
          significance: "Conversational AI accessible to the public, revolutionizing interaction. OpenAI's ChatGPT, based on GPT-3.5, became the fastest-growing consumer application in history, reaching 100 million users in just two months. It demonstrated AI's ability to engage in natural conversations and assist with various tasks, making AI accessible to everyone.",
          image: "https://tse4.mm.bing.net/th?id=OIP.tuLAz8Tdh-tOlHuZP0hU2AHaE8&pid=Api",
          imageAlt: "ChatGPT interface"
        },
        {
          year: "2023",
          event: "Generative AI boom",
          significance: "Proliferation of AI-generated images, video, audio, and writing (DALL·E, Midjourney, Stable Diffusion). The year marked the explosion of generative AI tools that could create realistic images, videos, music, and text from simple prompts. This technology transformed creative industries and raised important questions about AI's role in art and content creation.",
          image: "https://tse3.mm.bing.net/th?id=OIP.Rk3nhPcfw9GGisQgI_PSwwHaFc&pid=Api",
          imageAlt: "AI-generated art and creative technology"
        },
        {
          year: "2024",
          event: "AI Regulation & Multimodal AI",
          significance: "Global AI regulation efforts intensify with EU AI Act and US Executive Orders. GPT-4o and Claude 3.5 Sonnet demonstrate advanced multimodal capabilities, processing text, images, audio, and video simultaneously. AI becomes increasingly integrated into everyday tools and services, raising questions about privacy, bias, and job displacement.",
          image: "https://tse2.mm.bing.net/th?id=OIP.-_vu3HLIUIxo5jE1CPwEAAHaEJ&pid=Api",
          imageAlt: "AI regulation and multimodal technology"
        },
        {
          year: "2025",
          event: "AI Agents & Autonomous Systems",
          significance: "AI agents become more autonomous, capable of planning and executing complex tasks independently. Integration of AI into robotics, autonomous vehicles, and smart cities accelerates. Focus shifts toward AI safety, alignment with human values, and developing AI systems that work collaboratively with humans rather than replacing them.",
          image: "https://tse3.mm.bing.net/th?id=OIP.524FrnqrBNXoRDbuWOHEmgHaEK&pid=Api",
          imageAlt: "AI agents and autonomous systems"
        }
      ]
    },
    {
      title: "What is Artificial Intelligence?",
      content: "AI is technology that enables computers to think and learn like humans. It can recognize patterns, solve problems, and make decisions. AI is everywhere around us - from our phones to our homes, from healthcare to transportation.",
      islamicContext: "In Islam, we are encouraged to seek knowledge and understand Allah's creation. AI helps us explore the amazing complexity of the world around us and use our God-given intelligence to create beneficial technology.",
      activities: ["AI Around Us Hunt", "Technology Discussion", "Knowledge Sharing"],
      examples: ["Voice assistants", "Recommendation systems", "Image recognition", "Autonomous vehicles"]
    },
    {
      title: "Islamic Values in Technology",
      content: "Technology should be used for good, helping people and making the world better. This aligns with Islamic principles of compassion, service, and responsibility. Every technological advancement should benefit humanity.",
      islamicContext: "The Prophet Muhammad (PBUH) taught us to use our knowledge and skills to benefit others and serve humanity. Technology is a tool that can help us fulfill this noble purpose.",
      activities: ["Values Reflection", "Community Service Ideas", "Technology Ethics"],
      examples: ["Healthcare AI", "Educational technology", "Environmental monitoring", "Disaster response"]
    },
    {
      title: "Ethical AI Development",
      content: "When we create AI, we must ensure it respects human dignity, promotes justice, and doesn't cause harm to anyone. Ethical AI development means putting human welfare first and considering the impact on society.",
      islamicContext: "Islamic ethics guide us to be responsible stewards of knowledge and technology, always considering the impact on others and ensuring our creations serve the greater good.",
      activities: ["Ethics Scenarios", "Responsibility Discussion", "AI Principles"],
      examples: ["Bias detection", "Privacy protection", "Transparency", "Accountability"]
    },
    {
      title: "AI and Human Intelligence",
      content: "AI can process information faster than humans, but human intelligence includes wisdom, compassion, and moral judgment. The best approach is to combine AI's capabilities with human values and oversight.",
      islamicContext: "Allah has blessed humans with unique qualities like wisdom, compassion, and moral reasoning. AI should enhance these qualities, not replace them.",
      activities: ["Human vs AI Comparison", "Wisdom Discussion", "Collaboration Ideas"],
      examples: ["Human-AI teams", "AI assistance tools", "Decision support systems", "Creative collaboration"]
    },
    {
      title: "Building Responsible AI",
      content: "As future AI developers, you have the power to create technology that makes the world better. This means considering the impact of your creations on society, the environment, and future generations.",
      islamicContext: "In Islam, we are taught to be responsible for our actions and their consequences. This applies to technology development - we must consider the long-term impact of our innovations.",
      activities: ["Future AI Design", "Impact Assessment", "Responsibility Pledge"],
      examples: ["Sustainable AI", "Inclusive design", "Community consultation", "Long-term planning"]
    }
  ]

  const quizQuestions = [
    {
      question: "Who is considered the father of AI?",
      options: ["Alan Turing", "Isaac Asimov", "John McCarthy", "Marvin Minsky"],
      correct: "Alan Turing"
    },
    {
      question: "What was the significance of the Dartmouth Conference in 1956?",
      options: ["First computer was built", "AI became a field of study", "First AI winter began", "Deep Blue was created"],
      correct: "AI became a field of study"
    },
    {
      question: "What should be our primary goal when developing AI?",
      options: ["Making money", "Helping people", "Replacing humans", "Creating entertainment"],
      correct: "Helping people"
    },
    {
      question: "Which Islamic value is most important in AI development?",
      options: ["Competition", "Responsibility", "Speed", "Complexity"],
      correct: "Responsibility"
    },
    {
      question: "How should we use AI according to Islamic principles?",
      options: ["For personal gain only", "To benefit humanity", "To replace human work", "For entertainment only"],
      correct: "To benefit humanity"
    },
    {
      question: "What is the relationship between AI and human intelligence?",
      options: ["AI should replace humans", "AI and humans should work together", "Humans should avoid AI", "AI is always better than humans"],
      correct: "AI and humans should work together"
    },
    {
      question: "What should we consider when building AI systems?",
      options: ["Only technical aspects", "Only cost", "Impact on society and environment", "Only speed"],
      correct: "Impact on society and environment"
    },
    {
      question: "Which Muslim scholar contributed to the mathematical foundations of AI?",
      options: ["Ibn Sina", "Al-Khwarizmi", "Al-Kindi", "All of the above"],
      correct: "All of the above"
    }
  ]

  const ethicsScenarios = [
    {
      scenario: "You're building an AI system that could help doctors diagnose diseases. What ethical considerations should you think about?",
      options: [
        "Only accuracy and speed",
        "Privacy, fairness, and accessibility",
        "Only cost and profit",
        "Only technical complexity"
      ],
      correct: "Privacy, fairness, and accessibility",
      islamicContext: "In Islam, we must protect people's privacy and ensure justice for all. Medical AI should help everyone, not just those who can afford it."
    },
    {
      scenario: "Your AI system could be used for surveillance. How do you ensure it's used ethically?",
      options: [
        "Build it anyway - it's not your responsibility",
        "Include safeguards and ethical guidelines",
        "Focus only on technical performance",
        "Ignore potential misuse"
      ],
      correct: "Include safeguards and ethical guidelines",
      islamicContext: "Islamic ethics teach us to prevent harm and protect people's rights. Technology should not be used to oppress or spy on others."
    },
    {
      scenario: "Your AI could replace human workers. What should you consider?",
      options: [
        "Only efficiency gains",
        "Impact on workers and their families",
        "Only company profits",
        "Only technical innovation"
      ],
      correct: "Impact on workers and their families",
      islamicContext: "Islam teaches us to care for our community. We must consider how our innovations affect people's livelihoods and well-being."
    }
  ]

  const discussionTopics = [
    "How has AI changed in your lifetime?",
    "What AI technologies do you use every day?",
    "How can AI help solve problems in your community?",
    "What are some ways AI could be used to help the environment?",
    "How can we ensure AI benefits everyone, not just wealthy people?",
    "What role should humans play in AI decision-making?",
    "How can we use AI to promote peace and understanding between people?",
    "What would you like to build with AI?"
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

  const addDiscussionResponse = (response: string) => {
    setDiscussionResponses([...discussionResponses, response])
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
    <div className={`min-h-screen bg-gradient-to-br from-futuristic-dark via-purple-900 to-futuristic-dark ${presentationMode ? 'text-2xl' : ''}`}>
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm border-b border-islamic-gold/30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-islamic-gold hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Classes
            </Link>
            <div className="flex items-center">
              <Brain className="w-8 h-8 text-islamic-gold mr-3" />
              <span className="text-white font-semibold">Class 1: AI & Islamic Ethics</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setMuted(!muted)}
                className="text-islamic-gold hover:text-white transition-colors"
                title={muted ? "Unmute" : "Mute"}
              >
                {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <button
                onClick={togglePresentationMode}
                className="text-islamic-gold hover:text-white transition-colors"
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
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Progress</span>
            <span>{Math.round(((currentSection + 1) / sections.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div 
              className="bg-gradient-to-r from-islamic-gold to-yellow-500 h-2 rounded-full"
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
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-islamic-gold to-yellow-500 flex items-center justify-center text-black font-bold mr-4">
                  {currentSection + 1}
                </div>
                <h2 className={`font-bold text-white ${presentationMode ? 'text-4xl' : 'text-2xl'}`}>{sections[currentSection].title}</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className={`font-semibold text-islamic-gold mb-3 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Key Concepts</h3>
                  <p className={`text-gray-300 leading-relaxed ${presentationMode ? 'text-xl' : ''}`}>{sections[currentSection].content}</p>
                </div>

                <div className="bg-gradient-to-r from-islamic-gold/20 to-transparent p-4 rounded-lg border-l-4 border-islamic-gold">
                  <h3 className={`font-semibold text-islamic-gold mb-2 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Islamic Perspective</h3>
                  <p className={`text-gray-300 ${presentationMode ? 'text-xl' : ''}`}>{sections[currentSection].islamicContext}</p>
                </div>

                {/* AI History Timeline - Only for first section */}
                {currentSection === 0 && sections[currentSection].timeline && (
                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <h3 className={`font-semibold text-islamic-gold mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>AI History Timeline</h3>
                    <div className="space-y-6">
                      {sections[currentSection].timeline.map((event, index) => (
                        <div key={index} className="flex items-start">
                          <div className={`rounded-full bg-gradient-to-br from-islamic-gold to-yellow-500 flex items-center justify-center text-black font-bold mr-4 flex-shrink-0 ${presentationMode ? 'w-20 h-20 text-lg' : 'w-16 h-16'}`}>
                            {event.year}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start space-x-4">
                              <div className="flex-1">
                                <h4 className={`font-semibold mb-1 ${presentationMode ? 'text-xl' : 'text-white'}`}>{event.event}</h4>
                                <p className={`text-gray-300 ${presentationMode ? 'text-lg' : 'text-sm'}`}>{event.significance}</p>
                              </div>
                              {event.image && (
                                <div className={`rounded-lg overflow-hidden border-2 border-islamic-gold/30 flex-shrink-0 ${presentationMode ? 'w-48 h-36' : 'w-24 h-18'}`}>
                                  <img 
                                    src={event.image} 
                                    alt={event.imageAlt || event.event}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Examples Section */}
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className={`font-semibold text-islamic-gold mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Real-World Examples</h3>
                  <div className={`grid gap-4 ${presentationMode ? 'grid-cols-2' : 'md:grid-cols-2'}`}>
                    {sections[currentSection].examples?.map((example, index) => (
                      <div key={index} className="flex items-center bg-gray-700/50 p-3 rounded-lg">
                        <Zap className={`text-islamic-gold mr-3 flex-shrink-0 ${presentationMode ? 'w-6 h-6' : 'w-5 h-5'}`} />
                        <span className={`text-gray-300 ${presentationMode ? 'text-lg' : 'text-sm'}`}>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activities Section */}
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className={`font-semibold text-islamic-gold mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Activities & Discussion</h3>
                  <div className="space-y-4">
                    {sections[currentSection].activities?.map((activity, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`rounded-full bg-islamic-gold/20 flex items-center justify-center mr-3 ${presentationMode ? 'w-10 h-10' : 'w-8 h-8'}`}>
                          <span className={`text-islamic-gold font-bold ${presentationMode ? 'text-lg' : 'text-sm'}`}>{index + 1}</span>
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
                  className={`bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-yellow-400 hover:to-islamic-gold transition-all ${presentationMode ? 'px-8 py-3 text-lg' : 'px-6 py-2'}`}
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
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-islamic-gold/30">
                <h3 className="text-lg font-semibold text-white mb-4">Class Sections</h3>
                <div className="space-y-2">
                  {sections.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSection(index)}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        currentSection === index
                          ? 'bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-semibold'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {index + 1}. {section.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* AI History Highlights */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-islamic-gold/30">
                <h3 className="text-lg font-semibold text-white mb-4">AI History Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <History className="w-5 h-5 text-islamic-gold mr-3" />
                    <span className="text-gray-300">1950: Turing Test</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-islamic-gold mr-3" />
                    <span className="text-gray-300">1956: AI Field Born</span>
                  </div>
                  <div className="flex items-center">
                    <Brain className="w-5 h-5 text-islamic-gold mr-3" />
                    <span className="text-gray-300">1997: Deep Blue Victory</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 text-islamic-gold mr-3" />
                    <span className="text-gray-300">2011: Watson Wins</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-islamic-gold mr-3" />
                    <span className="text-gray-300">2022: AI for Everyone</span>
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-islamic-gold/30">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-islamic-gold mr-3" />
                    <span className="text-gray-300">AI should protect human dignity</span>
                  </div>
                  <div className="flex items-center">
                    <Lightbulb className="w-5 h-5 text-islamic-gold mr-3" />
                    <span className="text-gray-300">Knowledge is a gift from Allah</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-islamic-gold mr-3" />
                    <span className="text-gray-300">Technology should serve humanity</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 text-islamic-gold mr-3" />
                    <span className="text-gray-300">Compassion guides ethical AI</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-islamic-gold mr-3" />
                    <span className="text-gray-300">Consider global impact</span>
                  </div>
                </div>
              </div>

              {/* Time Tracker */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-islamic-gold/30">
                <h3 className="text-lg font-semibold text-white mb-4">Class Progress</h3>
                <div className="text-center">
                  <div className="text-2xl font-bold text-islamic-gold mb-2">
                    {Math.round(((currentSection + 1) / sections.length) * 60)} min
                  </div>
                  <div className="text-sm text-gray-400">
                    of 60 minutes completed
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
            {/* AI History Interactive Timeline */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className={`font-bold text-white mb-6 ${presentationMode ? 'text-4xl' : 'text-2xl'}`}>Interactive AI History Timeline</h2>
              
              <div className={`grid gap-6 ${presentationMode ? 'grid-cols-2' : 'md:grid-cols-2'}`}>
                <div>
                  <h3 className={`font-semibold text-islamic-gold mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Explore AI Milestones</h3>
                  <div className="space-y-4">
                    {sections[0].timeline?.map((event, index) => (
                      <div 
                        key={index}
                        className="bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors"
                        onClick={() => setTimelineEvent(index)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className={`text-islamic-gold font-bold ${presentationMode ? 'text-xl' : ''}`}>{event.year}</span>
                            <span className={`text-gray-300 ${presentationMode ? 'text-lg' : 'text-sm'}`}>{event.event}</span>
                          </div>
                          {event.image && (
                            <div className={`rounded-lg overflow-hidden border-2 border-islamic-gold/30 flex-shrink-0 ${presentationMode ? 'w-48 h-36' : 'w-24 h-18'}`}>
                              <img 
                                src={event.image} 
                                alt={event.imageAlt || event.event}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className={`font-semibold text-islamic-gold mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Historical Context</h3>
                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    {sections[0].timeline && (
                      <div>
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="flex-1">
                            <h4 className={`font-semibold mb-2 ${presentationMode ? 'text-2xl' : 'text-white'}`}>
                              {sections[0].timeline[timelineEvent].year}: {sections[0].timeline[timelineEvent].event}
                            </h4>
                            <p className={`text-gray-300 mb-4 ${presentationMode ? 'text-xl' : ''}`}>
                              {sections[0].timeline[timelineEvent].significance}
                            </p>
                          </div>
                          {sections[0].timeline[timelineEvent].image && (
                            <div className={`rounded-lg overflow-hidden border-2 border-islamic-gold/30 flex-shrink-0 ${presentationMode ? 'w-48 h-36' : 'w-24 h-18'}`}>
                              <img 
                                src={sections[0].timeline[timelineEvent].image} 
                                alt={sections[0].timeline[timelineEvent].imageAlt || sections[0].timeline[timelineEvent].event}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                          )}
                        </div>
                        <div className="bg-gradient-to-r from-islamic-gold/20 to-transparent p-4 rounded-lg border-l-4 border-islamic-gold">
                          <h5 className={`font-semibold text-islamic-gold mb-2 ${presentationMode ? 'text-lg' : 'text-sm'}`}>Islamic Perspective</h5>
                          <p className={`text-gray-300 ${presentationMode ? 'text-lg' : 'text-sm'}`}>
                            This milestone shows how human innovation can serve humanity, reflecting the Islamic value of using knowledge for the benefit of others.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Ethics Scenarios */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className={`font-bold text-white mb-6 ${presentationMode ? 'text-4xl' : 'text-2xl'}`}>Ethics Scenarios Discussion</h2>
              
              <div className="space-y-6">
                {ethicsScenarios.map((scenario, index) => (
                  <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
                    <h3 className={`font-semibold text-white mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>
                      Scenario {index + 1}: {scenario.scenario}
                    </h3>
                    <div className="space-y-3 mb-4">
                      {scenario.options.map((option, optionIndex) => (
                        <label key={optionIndex} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name={`scenario${index}`}
                            value={option}
                            className={`mr-3 text-islamic-gold ${presentationMode ? 'w-5 h-5' : ''}`}
                          />
                          <span className={`text-gray-300 ${presentationMode ? 'text-xl' : ''}`}>{option}</span>
                        </label>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-islamic-gold/20 to-transparent p-4 rounded-lg border-l-4 border-islamic-gold">
                      <h4 className={`font-semibold text-islamic-gold mb-2 ${presentationMode ? 'text-lg' : 'text-sm'}`}>Islamic Perspective</h4>
                      <p className={`text-gray-300 ${presentationMode ? 'text-lg' : 'text-sm'}`}>{scenario.islamicContext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Group Discussion */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className={`font-bold text-white mb-6 ${presentationMode ? 'text-4xl' : 'text-2xl'}`}>Group Discussion</h2>
              
              <div className={`grid gap-6 ${presentationMode ? 'grid-cols-2' : 'md:grid-cols-2'}`}>
                <div>
                  <h3 className={`font-semibold text-islamic-gold mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Discussion Topics</h3>
                  <div className="space-y-3">
                    {discussionTopics.map((topic, index) => (
                      <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="flex items-start">
                          <MessageCircle className={`text-islamic-gold mr-3 mt-1 flex-shrink-0 ${presentationMode ? 'w-6 h-6' : 'w-5 h-5'}`} />
                          <span className={`text-gray-300 ${presentationMode ? 'text-lg' : 'text-sm'}`}>{topic}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className={`font-semibold text-islamic-gold mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Your Thoughts</h3>
                  <textarea
                    placeholder="Share your thoughts on any of the discussion topics..."
                    className={`w-full bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-islamic-gold focus:outline-none ${presentationMode ? 'h-40 text-lg' : 'h-32'}`}
                  />
                  <button 
                    onClick={() => addDiscussionResponse("New response added")}
                    className={`mt-3 bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all ${presentationMode ? 'py-3 px-6 text-lg' : 'py-2 px-4'}`}
                  >
                    Share Response
                  </button>
                </div>
              </div>
            </div>

            {/* Knowledge Check Quiz */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
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
                              className={`mr-3 text-islamic-gold ${presentationMode ? 'w-5 h-5' : ''}`}
                            />
                            <span className={`text-gray-300 ${presentationMode ? 'text-xl' : ''}`}>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <button
                    onClick={handleQuizSubmit}
                    className={`w-full bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all ${presentationMode ? 'py-4 px-8 text-2xl' : 'py-3 px-8'}`}
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
                      ? "Excellent! You've mastered the concepts of AI and Islamic ethics."
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
                    <Link href="/class/2" className={`bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all ${presentationMode ? 'px-8 py-3 text-lg' : 'px-6 py-2'}`}>
                      Next Class
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Reflection and Commitment */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className={`font-bold text-white mb-6 ${presentationMode ? 'text-4xl' : 'text-2xl'}`}>Personal Reflection</h2>
              
              <div className={`grid gap-6 ${presentationMode ? 'grid-cols-2' : 'md:grid-cols-2'}`}>
                <div>
                  <h3 className={`font-semibold text-islamic-gold mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>What I Learned</h3>
                  <textarea
                    placeholder="Reflect on the key concepts you learned today..."
                    className={`w-full bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-islamic-gold focus:outline-none ${presentationMode ? 'h-40 text-lg' : 'h-32'}`}
                  />
                </div>
                
                <div>
                  <h3 className={`font-semibold text-islamic-gold mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>My Commitment</h3>
                  <textarea
                    placeholder="How will you apply these ethical principles in your future work with AI?"
                    className={`w-full bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-islamic-gold focus:outline-none ${presentationMode ? 'h-40 text-lg' : 'h-32'}`}
                  />
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button className={`bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all ${presentationMode ? 'py-4 px-8 text-2xl' : 'py-3 px-8'}`}>
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