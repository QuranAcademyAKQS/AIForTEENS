'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Building2, Shield, Lightbulb, Users, ArrowLeft, Play, CheckCircle, XCircle, BookOpen, MessageCircle, Target, Heart, Globe, Smartphone, Car, Stethoscope, GraduationCap, Leaf, Globe2, Zap, Eye, Cpu, Activity } from 'lucide-react'
import Link from 'next/link'

export default function Class4() {
  const [currentSection, setCurrentSection] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({})
  const [showResults, setShowResults] = useState(false)
  const [currentActivity, setCurrentActivity] = useState(0)
  const [selectedApplication, setSelectedApplication] = useState('')
  const [impactAnalysis, setImpactAnalysis] = useState({
    positive: [],
    negative: [],
    solutions: []
  })

  const sections = [
    {
      title: "AI in Healthcare",
      content: "AI is revolutionizing healthcare through medical imaging, drug discovery, personalized medicine, and patient care. AI can analyze medical images faster and more accurately than humans, helping doctors diagnose diseases earlier and more effectively.",
      islamicContext: "In Islam, preserving life and health is a sacred duty. AI in healthcare helps fulfill this obligation by improving medical care, making it more accessible, and saving lives through better diagnosis and treatment.",
      activities: ["Medical AI Discussion", "Healthcare Access", "Ethical Medical AI"],
      examples: ["X-ray analysis", "Drug discovery", "Patient monitoring", "Surgical robots"],
      impacts: {
        positive: ["Faster diagnosis", "More accurate treatment", "Reduced medical errors", "Lower healthcare costs"],
        negative: ["Privacy concerns", "Job displacement", "Over-reliance on technology", "Access inequality"],
        solutions: ["Strong privacy protection", "Human oversight", "Universal access", "Continuous training"]
      }
    },
    {
      title: "AI in Transportation",
      content: "Self-driving cars, smart traffic systems, and autonomous vehicles are transforming transportation. AI helps reduce accidents, improve traffic flow, and make transportation more efficient and accessible for everyone.",
      islamicContext: "Safe and accessible transportation benefits the community. AI in transportation can help reduce accidents and make travel safer, which aligns with Islamic values of protecting life and serving the community.",
      activities: ["Transportation Safety", "Accessibility Discussion", "Environmental Impact"],
      examples: ["Self-driving cars", "Traffic optimization", "Public transport", "Delivery drones"],
      impacts: {
        positive: ["Reduced accidents", "Better traffic flow", "Increased accessibility", "Lower emissions"],
        negative: ["Job displacement", "Safety concerns", "Infrastructure costs", "Privacy issues"],
        solutions: ["Gradual transition", "Safety testing", "Job retraining", "Public education"]
      }
    },
    {
      title: "AI in Education",
      content: "AI is personalizing education through adaptive learning platforms, intelligent tutoring systems, and automated grading. It helps teachers focus on individual student needs and makes quality education accessible to more people.",
      islamicContext: "Seeking knowledge is highly valued in Islam. AI in education helps fulfill this by making learning more accessible, personalized, and effective, especially for those who might otherwise be left behind.",
      activities: ["Personalized Learning", "Educational Access", "Teacher Support"],
      examples: ["Adaptive learning", "Intelligent tutoring", "Automated grading", "Language learning"],
      impacts: {
        positive: ["Personalized learning", "Increased access", "Better student engagement", "Teacher support"],
        negative: ["Reduced human interaction", "Data privacy concerns", "Technology dependence", "Access inequality"],
        solutions: ["Blended learning", "Privacy protection", "Digital literacy", "Universal access"]
      }
    },
    {
      title: "AI in Environmental Protection",
      content: "AI helps monitor climate change, predict natural disasters, optimize renewable energy, and protect wildlife. It enables more efficient use of resources and helps us understand and address environmental challenges.",
      islamicContext: "Islam teaches us to be stewards of the Earth. AI in environmental protection helps us fulfill this responsibility by monitoring and protecting Allah's creation more effectively.",
      activities: ["Environmental Monitoring", "Climate Action", "Resource Conservation"],
      examples: ["Climate modeling", "Wildlife monitoring", "Energy optimization", "Disaster prediction"],
      impacts: {
        positive: ["Better environmental monitoring", "Reduced resource waste", "Improved disaster response", "Climate action"],
        negative: ["Energy consumption", "E-waste", "Complexity", "Dependency"],
        solutions: ["Green AI", "Sustainable practices", "Education", "Policy support"]
      }
    },
    {
      title: "AI in Finance and Banking",
      content: "AI is transforming finance through fraud detection, automated trading, credit scoring, and customer service. It makes financial services more accessible, secure, and efficient for everyone.",
      islamicContext: "Islamic finance emphasizes fairness, transparency, and avoiding exploitation. AI can help ensure these principles by detecting fraud, ensuring fair lending, and providing transparent services.",
      activities: ["Financial Inclusion", "Fraud Prevention", "Ethical Banking"],
      examples: ["Fraud detection", "Credit scoring", "Automated trading", "Customer service"],
      impacts: {
        positive: ["Better fraud detection", "Financial inclusion", "Lower costs", "Improved service"],
        negative: ["Job displacement", "Privacy concerns", "Algorithmic bias", "Systemic risks"],
        solutions: ["Human oversight", "Bias detection", "Financial literacy", "Regulation"]
      }
    },
    {
      title: "AI in Social Impact",
      content: "AI is being used to address social challenges like poverty, hunger, education access, and disaster response. It helps organizations work more efficiently and reach more people in need.",
      islamicContext: "Charity and helping others are core Islamic values. AI in social impact helps us serve humanity more effectively, reaching more people and making a greater positive impact on society.",
      activities: ["Social Problem Solving", "Community Service", "Impact Measurement"],
      examples: ["Disaster response", "Food distribution", "Education access", "Healthcare outreach"],
      impacts: {
        positive: ["Greater reach", "More efficient aid", "Better targeting", "Scalable solutions"],
        negative: ["Technology barriers", "Privacy concerns", "Dependency", "Cost"],
        solutions: ["Human-centered design", "Local partnerships", "Capacity building", "Sustainable models"]
      }
    }
  ]

  const quizQuestions = [
    {
      question: "How can AI help in healthcare?",
      options: ["Only for entertainment", "Medical diagnosis and treatment", "Only for research", "Only for administration"],
      correct: "Medical diagnosis and treatment"
    },
    {
      question: "What is a benefit of AI in transportation?",
      options: ["Higher costs", "More accidents", "Reduced accidents", "Slower travel"],
      correct: "Reduced accidents"
    },
    {
      question: "How does AI improve education?",
      options: ["By replacing teachers", "By personalizing learning", "By increasing costs", "By reducing access"],
      correct: "By personalizing learning"
    },
    {
      question: "What environmental benefit does AI provide?",
      options: ["Increased pollution", "Better resource management", "More waste", "Higher energy use"],
      correct: "Better resource management"
    },
    {
      question: "How can AI help with financial inclusion?",
      options: ["By excluding people", "By making services more accessible", "By increasing fees", "By reducing security"],
      correct: "By making services more accessible"
    },
    {
      question: "What Islamic value does AI in social impact support?",
      options: ["Individualism", "Charity and helping others", "Competition", "Isolation"],
      correct: "Charity and helping others"
    },
    {
      question: "What should we consider when implementing AI applications?",
      options: ["Only technical aspects", "Ethical, social, and environmental impacts", "Only cost", "Only speed"],
      correct: "Ethical, social, and environmental impacts"
    },
    {
      question: "How should AI be used according to Islamic principles?",
      options: ["For profit only", "To serve humanity and benefit society", "For entertainment only", "To replace humans"],
      correct: "To serve humanity and benefit society"
    }
  ]

  const applicationScenarios = [
    {
      title: "Healthcare AI Implementation",
      scenario: "A hospital wants to implement AI for medical imaging. How should they ensure it benefits all patients fairly?",
      considerations: [
        "Ensure diverse training data",
        "Maintain human oversight",
        "Protect patient privacy",
        "Provide training for staff",
        "Ensure accessibility for all patients"
      ],
      islamicContext: "In Islam, we must treat all people with dignity and fairness. Medical AI should help everyone, regardless of their background or ability to pay."
    },
    {
      title: "Educational AI for Rural Areas",
      scenario: "How can AI be used to improve education in rural communities with limited internet access?",
      considerations: [
        "Offline AI applications",
        "Local content creation",
        "Community partnerships",
        "Teacher training",
        "Sustainable technology"
      ],
      islamicContext: "Islam teaches us to seek knowledge and share it. AI should make education accessible to everyone, especially those in underserved communities."
    },
    {
      title: "Environmental AI for Community",
      scenario: "A community wants to use AI to monitor local environmental conditions. What should they consider?",
      considerations: [
        "Local data collection",
        "Community involvement",
        "Actionable insights",
        "Privacy protection",
        "Long-term sustainability"
      ],
      islamicContext: "As stewards of Allah's creation, we must protect the environment. AI can help communities monitor and protect their local ecosystems."
    }
  ]

  const discussionTopics = [
    "How can AI help solve problems in your local community?",
    "What are the most important AI applications for your country?",
    "How can we ensure AI benefits everyone, not just wealthy people?",
    "What role should governments play in AI development?",
    "How can AI help address climate change in your region?",
    "What are some ways AI could improve healthcare in your community?",
    "How should we prepare for AI-driven changes in the job market?",
    "What ethical guidelines should govern AI applications?"
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

  const addImpactPoint = (type: 'positive' | 'negative' | 'solutions', point: string) => {
    setImpactAnalysis({
      ...impactAnalysis,
      [type]: [...impactAnalysis[type], point]
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-futuristic-dark via-purple-900 to-futuristic-dark">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm border-b border-islamic-gold/30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-islamic-gold hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Classes
            </Link>
            <div className="flex items-center">
              <Globe2 className="w-8 h-8 text-islamic-gold mr-3" />
              <span className="text-white font-semibold">Class 4: AI Applications in the Real World</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
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
                <h2 className="text-2xl font-bold text-white">{sections[currentSection].title}</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-islamic-gold mb-3">Key Concepts</h3>
                  <p className="text-gray-300 leading-relaxed">{sections[currentSection].content}</p>
                </div>

                <div className="bg-gradient-to-r from-islamic-gold/20 to-transparent p-4 rounded-lg border-l-4 border-islamic-gold">
                  <h3 className="text-lg font-semibold text-islamic-gold mb-2">Islamic Perspective</h3>
                  <p className="text-gray-300">{sections[currentSection].islamicContext}</p>
                </div>

                {/* Examples Section */}
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Real-World Examples</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {sections[currentSection].examples?.map((example, index) => (
                      <div key={index} className="flex items-center bg-gray-700/50 p-3 rounded-lg">
                        <Zap className="w-5 h-5 text-islamic-gold mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Analysis */}
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Impact Analysis</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Positive Impacts</h4>
                      <div className="space-y-2">
                        {sections[currentSection].impacts?.positive.map((impact, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            <span className="text-gray-300">{impact}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-red-400 mb-2">Challenges</h4>
                      <div className="space-y-2">
                        {sections[currentSection].impacts?.negative.map((impact, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <XCircle className="w-4 h-4 text-red-400 mr-2" />
                            <span className="text-gray-300">{impact}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Solutions</h4>
                      <div className="space-y-2">
                        {sections[currentSection].impacts?.solutions.map((solution, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <Lightbulb className="w-4 h-4 text-blue-400 mr-2" />
                            <span className="text-gray-300">{solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Activities Section */}
                <div className="bg-gray-800/50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Activities & Discussion</h3>
                  <div className="space-y-4">
                    {sections[currentSection].activities?.map((activity, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-islamic-gold/20 flex items-center justify-center mr-3">
                          <span className="text-islamic-gold font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="text-gray-300">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                  disabled={currentSection === 0}
                  className="px-6 py-2 bg-gray-700 text-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
                  disabled={currentSection === sections.length - 1}
                  className="px-6 py-2 bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-yellow-400 hover:to-islamic-gold transition-all"
                >
                  Next
                </button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
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

            {/* AI Applications Overview */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-islamic-gold/30">
              <h3 className="text-lg font-semibold text-white mb-4">AI Applications</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Stethoscope className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Healthcare</span>
                </div>
                <div className="flex items-center">
                  <Car className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Transportation</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Education</span>
                </div>
                <div className="flex items-center">
                  <Leaf className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Environment</span>
                </div>
                <div className="flex items-center">
                  <Smartphone className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Finance</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Social Impact</span>
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
        </div>

        {/* Interactive Activities Section */}
        {currentSection === sections.length - 1 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 space-y-8"
          >
            {/* Application Scenarios */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className="text-2xl font-bold text-white mb-6">AI Application Scenarios</h2>
              
              <div className="space-y-6">
                {applicationScenarios.map((scenario, index) => (
                  <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-3">{scenario.title}</h3>
                    <p className="text-gray-300 mb-4">{scenario.scenario}</p>
                    
                    <div className="space-y-3 mb-4">
                      <h4 className="text-sm font-semibold text-islamic-gold">Key Considerations:</h4>
                      {scenario.considerations.map((consideration, considerationIndex) => (
                        <div key={considerationIndex} className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-islamic-gold/20 flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-islamic-gold font-bold text-xs">{considerationIndex + 1}</span>
                          </div>
                          <span className="text-gray-300 text-sm">{consideration}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-islamic-gold/20 to-transparent p-4 rounded-lg border-l-4 border-islamic-gold">
                      <h4 className="text-sm font-semibold text-islamic-gold mb-2">Islamic Perspective</h4>
                      <p className="text-gray-300 text-sm">{scenario.islamicContext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Analysis Tool */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className="text-2xl font-bold text-white mb-6">AI Impact Analysis Tool</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-4">Positive Impacts</h3>
                  <div className="space-y-3">
                    {impactAnalysis.positive.map((point, index) => (
                      <div key={index} className="flex items-center bg-gray-800/50 p-3 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-gray-300 text-sm">{point}</span>
                      </div>
                    ))}
                    <button
                      onClick={() => addImpactPoint('positive', 'New positive impact')}
                      className="w-full bg-green-600/20 border border-green-500/30 text-green-400 py-2 px-3 rounded-lg hover:bg-green-600/30 transition-colors text-sm"
                    >
                      Add Positive Impact
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-red-400 mb-4">Challenges</h3>
                  <div className="space-y-3">
                    {impactAnalysis.negative.map((point, index) => (
                      <div key={index} className="flex items-center bg-gray-800/50 p-3 rounded-lg">
                        <XCircle className="w-4 h-4 text-red-400 mr-2" />
                        <span className="text-gray-300 text-sm">{point}</span>
                      </div>
                    ))}
                    <button
                      onClick={() => addImpactPoint('negative', 'New challenge')}
                      className="w-full bg-red-600/20 border border-red-500/30 text-red-400 py-2 px-3 rounded-lg hover:bg-red-600/30 transition-colors text-sm"
                    >
                      Add Challenge
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-4">Solutions</h3>
                  <div className="space-y-3">
                    {impactAnalysis.solutions.map((point, index) => (
                      <div key={index} className="flex items-center bg-gray-800/50 p-3 rounded-lg">
                        <Lightbulb className="w-4 h-4 text-blue-400 mr-2" />
                        <span className="text-gray-300 text-sm">{point}</span>
                      </div>
                    ))}
                    <button
                      onClick={() => addImpactPoint('solutions', 'New solution')}
                      className="w-full bg-blue-600/20 border border-blue-500/30 text-blue-400 py-2 px-3 rounded-lg hover:bg-blue-600/30 transition-colors text-sm"
                    >
                      Add Solution
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Group Discussion */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className="text-2xl font-bold text-white mb-6">Group Discussion</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Discussion Topics</h3>
                  <div className="space-y-3">
                    {discussionTopics.map((topic, index) => (
                      <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="flex items-start">
                          <MessageCircle className="w-5 h-5 text-islamic-gold mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{topic}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Your Thoughts</h3>
                  <textarea
                    placeholder="Share your thoughts on AI applications and their impact..."
                    className="w-full h-32 bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-islamic-gold focus:outline-none"
                  />
                  <button className="mt-3 bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all">
                    Share Response
                  </button>
                </div>
              </div>
            </div>

            {/* Knowledge Check Quiz */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className="text-2xl font-bold text-white mb-6">Knowledge Check</h2>
              
              {!showResults ? (
                <div className="space-y-6">
                  {quizQuestions.map((question, index) => (
                    <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-white mb-4">
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
                              className="mr-3 text-islamic-gold"
                            />
                            <span className="text-gray-300">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <button
                    onClick={handleQuizSubmit}
                    className="w-full bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-3 px-8 rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all"
                  >
                    Submit Answers
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {getScore() === quizQuestions.length ? '🎉' : '📚'}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    You got {getScore()} out of {quizQuestions.length} correct!
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {getScore() === quizQuestions.length 
                      ? "Excellent! You've mastered the concepts of AI Applications in the Real World."
                      : "Good effort! Review the material and try again to strengthen your understanding."
                    }
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={() => {
                        setShowResults(false)
                        setQuizAnswers({})
                      }}
                      className="px-6 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Try Again
                    </button>
                    <Link href="/class/5" className="px-6 py-2 bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all">
                      Next Class
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Reflection and Application */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className="text-2xl font-bold text-white mb-6">Personal Reflection</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">What I Learned</h3>
                  <textarea
                    placeholder="Reflect on the key AI applications you learned about today..."
                    className="w-full h-32 bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-islamic-gold focus:outline-none"
                  />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Future Applications</h3>
                  <textarea
                    placeholder="How could you use AI to solve problems in your community?"
                    className="w-full h-32 bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-islamic-gold focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button className="bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-3 px-8 rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all">
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