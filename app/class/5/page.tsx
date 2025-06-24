'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Building2, Shield, Lightbulb, Users, ArrowLeft, Play, CheckCircle, XCircle, BookOpen, MessageCircle, Target, Heart, Globe, Rocket, Star, GraduationCap, Briefcase, Globe2, Zap, Eye, Cpu, Activity, TrendingUp, Award, Compass } from 'lucide-react'
import Link from 'next/link'

export default function Class5() {
  const [currentSection, setCurrentSection] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({})
  const [showResults, setShowResults] = useState(false)
  const [currentActivity, setCurrentActivity] = useState(0)
  const [careerPath, setCareerPath] = useState('')
  const [futureVision, setFutureVision] = useState({
    personal: '',
    community: '',
    global: ''
  })

  const sections = [
    {
      title: "The Future of AI Technology",
      content: "AI is advancing rapidly with breakthroughs in quantum computing, brain-computer interfaces, and artificial general intelligence (AGI). These technologies will transform how we live, work, and interact with the world around us.",
      islamicContext: "As Muslims, we should embrace beneficial technological progress while ensuring it aligns with our values. The future of AI offers opportunities to serve humanity and fulfill our role as stewards of Allah's creation.",
      activities: ["Future Technology Discussion", "Innovation Brainstorming", "Ethical Future Planning"],
      examples: ["Quantum AI", "Brain-computer interfaces", "AGI development", "AI-human collaboration"],
      impacts: {
        positive: ["Solving complex problems", "Enhanced human capabilities", "New opportunities", "Better quality of life"],
        negative: ["Job displacement", "Privacy concerns", "Dependency risks", "Ethical challenges"],
        solutions: ["Lifelong learning", "Ethical frameworks", "Human-AI collaboration", "Responsible development"]
      }
    },
    {
      title: "AI Careers and Opportunities",
      content: "The AI field offers diverse career paths: AI research, data science, machine learning engineering, AI ethics, and more. These careers combine technical skills with creativity and problem-solving to shape the future of technology.",
      islamicContext: "Seeking halal (permissible) livelihood is important in Islam. AI careers provide opportunities to earn while serving humanity and contributing to beneficial technological advancement.",
      activities: ["Career Exploration", "Skill Assessment", "Path Planning"],
      examples: ["AI Research Scientist", "Machine Learning Engineer", "Data Scientist", "AI Ethics Specialist"],
      impacts: {
        positive: ["High demand", "Good salaries", "Creative work", "Global impact"],
        negative: ["Rapid changes", "High pressure", "Continuous learning", "Competition"],
        solutions: ["Continuous education", "Networking", "Skill development", "Work-life balance"]
      }
    },
    {
      title: "Preparing for an AI Future",
      content: "To thrive in an AI-driven future, we need to develop both technical and soft skills. Critical thinking, creativity, emotional intelligence, and adaptability will be as important as technical knowledge.",
      islamicContext: "Islam encourages continuous learning and self-improvement. Preparing for the future means developing our God-given talents and using them to benefit humanity and serve Allah.",
      activities: ["Skill Development Planning", "Learning Path Design", "Future Readiness Assessment"],
      examples: ["Programming skills", "Critical thinking", "Creativity", "Emotional intelligence"],
      impacts: {
        positive: ["Better opportunities", "Personal growth", "Future readiness", "Competitive advantage"],
        negative: ["Learning curve", "Time investment", "Resource needs", "Pressure to adapt"],
        solutions: ["Structured learning", "Mentorship", "Practice projects", "Community support"]
      }
    },
    {
      title: "AI and Society: Future Scenarios",
      content: "AI will reshape society in profound ways: smart cities, personalized healthcare, autonomous transportation, and new forms of human-AI collaboration. We must plan for these changes to ensure they benefit everyone.",
      islamicContext: "Islamic values of justice, compassion, and community welfare should guide how we shape AI's role in society. We must ensure technological progress serves the common good.",
      activities: ["Scenario Planning", "Society Impact Analysis", "Policy Discussion"],
      examples: ["Smart cities", "Personalized medicine", "Autonomous systems", "AI governance"],
      impacts: {
        positive: ["Improved services", "Better efficiency", "Enhanced safety", "New possibilities"],
        negative: ["Social disruption", "Inequality risks", "Privacy concerns", "Dependency"],
        solutions: ["Inclusive design", "Public participation", "Ethical guidelines", "Social safety nets"]
      }
    },
    {
      title: "Ethical AI Leadership",
      content: "Future AI leaders must balance innovation with responsibility. They need to understand both technical and ethical dimensions, ensuring AI development serves humanity and respects human dignity.",
      islamicContext: "Leadership in Islam means serving others and being accountable for our actions. AI leaders must demonstrate wisdom, compassion, and responsibility in their work.",
      activities: ["Leadership Development", "Ethical Decision Making", "Responsibility Planning"],
      examples: ["AI governance", "Ethical frameworks", "Responsible innovation", "Stakeholder engagement"],
      impacts: {
        positive: ["Better AI systems", "Trust building", "Social benefit", "Sustainable development"],
        negative: ["Complex decisions", "Accountability pressure", "Balancing interests", "Public scrutiny"],
        solutions: ["Ethical training", "Transparency", "Stakeholder input", "Continuous reflection"]
      }
    },
    {
      title: "Your Role in Shaping AI's Future",
      content: "Every individual has a role in shaping AI's future. Whether through technical work, policy advocacy, ethical guidance, or informed citizenship, you can contribute to ensuring AI benefits humanity.",
      islamicContext: "Each person has unique gifts and responsibilities. Use your talents to contribute to beneficial AI development, serving Allah and humanity through your work and actions.",
      activities: ["Personal Action Planning", "Community Engagement", "Future Contribution"],
      examples: ["Technical development", "Policy advocacy", "Ethical guidance", "Public education"],
      impacts: {
        positive: ["Personal fulfillment", "Community benefit", "Global impact", "Legacy building"],
        negative: ["Time commitment", "Learning challenges", "Responsibility", "Uncertainty"],
        solutions: ["Clear goals", "Support networks", "Continuous learning", "Balanced approach"]
      }
    }
  ]

  const quizQuestions = [
    {
      question: "What is AGI in AI development?",
      options: ["Artificial Gaming Intelligence", "Artificial General Intelligence", "Advanced Gaming Interface", "Automated General Interface"],
      correct: "Artificial General Intelligence"
    },
    {
      question: "Which skill is most important for AI careers?",
      options: ["Only technical skills", "Only soft skills", "Both technical and soft skills", "Only creativity"],
      correct: "Both technical and soft skills"
    },
    {
      question: "How should we prepare for an AI future?",
      options: ["Avoid technology", "Develop diverse skills", "Wait and see", "Focus only on technical skills"],
      correct: "Develop diverse skills"
    },
    {
      question: "What is important in AI leadership?",
      options: ["Only technical expertise", "Only business skills", "Technical and ethical understanding", "Only creativity"],
      correct: "Technical and ethical understanding"
    },
    {
      question: "How can individuals shape AI's future?",
      options: ["Only through technical work", "Only through policy", "Through various roles and contributions", "Only through research"],
      correct: "Through various roles and contributions"
    },
    {
      question: "What Islamic value guides AI leadership?",
      options: ["Competition", "Service and accountability", "Individual success", "Profit maximization"],
      correct: "Service and accountability"
    },
    {
      question: "Why is continuous learning important in AI?",
      options: ["It's not important", "Technology changes rapidly", "Only for beginners", "Only for researchers"],
      correct: "Technology changes rapidly"
    },
    {
      question: "How should AI benefit society according to Islamic values?",
      options: ["Only wealthy people", "Only technical experts", "Everyone in society", "Only corporations"],
      correct: "Everyone in society"
    }
  ]

  const careerPaths = [
    {
      title: "AI Research Scientist",
      description: "Develop new AI algorithms and advance the field",
      skills: ["Mathematics", "Programming", "Research", "Creativity"],
      islamicContext: "Research contributes to knowledge and benefits humanity, fulfilling the Islamic duty of seeking and sharing knowledge."
    },
    {
      title: "Machine Learning Engineer",
      description: "Build and deploy AI systems for real-world use",
      skills: ["Programming", "Statistics", "System Design", "Problem Solving"],
      islamicContext: "Building useful systems serves the community and provides halal livelihood while helping others."
    },
    {
      title: "AI Ethics Specialist",
      description: "Ensure AI systems are fair, transparent, and beneficial",
      skills: ["Ethics", "Critical Thinking", "Communication", "Policy"],
      islamicContext: "Ensuring justice and fairness in technology aligns with core Islamic values of adl (justice) and ihsan (excellence)."
    },
    {
      title: "Data Scientist",
      description: "Extract insights from data to solve problems",
      skills: ["Statistics", "Programming", "Business Acumen", "Communication"],
      islamicContext: "Using data to solve problems and help organizations make better decisions serves the community."
    },
    {
      title: "AI Policy Advisor",
      description: "Help governments and organizations develop AI policies",
      skills: ["Policy Analysis", "Communication", "Ethics", "Stakeholder Management"],
      islamicContext: "Shaping policies that benefit society and ensure responsible AI use serves the common good."
    }
  ]

  const futureScenarios = [
    {
      title: "Smart Cities",
      scenario: "AI-powered cities with intelligent transportation, energy management, and public services.",
      opportunities: ["Better efficiency", "Improved services", "Environmental benefits"],
      challenges: ["Privacy concerns", "Digital divide", "Dependency"],
      islamicContext: "Smart cities should serve all citizens fairly and promote community well-being."
    },
    {
      title: "Personalized Healthcare",
      scenario: "AI systems that provide personalized medical care and health monitoring.",
      opportunities: ["Better health outcomes", "Preventive care", "Accessibility"],
      challenges: ["Privacy protection", "Access equality", "Human oversight"],
      islamicContext: "Healthcare is a right for all, and AI should make it more accessible and effective."
    },
    {
      title: "AI-Human Collaboration",
      scenario: "Humans and AI working together to solve complex problems.",
      opportunities: ["Enhanced capabilities", "New possibilities", "Efficiency gains"],
      challenges: ["Job displacement", "Dependency", "Ethical boundaries"],
      islamicContext: "Collaboration should enhance human dignity and capabilities, not diminish them."
    }
  ]

  const discussionTopics = [
    "What AI career path interests you most and why?",
    "How can you prepare for an AI-driven future?",
    "What role do you want to play in shaping AI's future?",
    "How can we ensure AI benefits everyone in society?",
    "What ethical considerations are most important for AI development?",
    "How should we balance AI innovation with responsibility?",
    "What skills will be most valuable in an AI future?",
    "How can AI help solve global challenges?"
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

  const updateFutureVision = (type: 'personal' | 'community' | 'global', value: string) => {
    setFutureVision({
      ...futureVision,
      [type]: value
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
              <Rocket className="w-8 h-8 text-islamic-gold mr-3" />
              <span className="text-white font-semibold">Class 5: The Future of AI & Your Role</span>
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
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Future Examples</h3>
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
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Opportunities</h4>
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

            {/* Future AI Concepts */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-islamic-gold/30">
              <h3 className="text-lg font-semibold text-white mb-4">Future AI Concepts</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Rocket className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Advanced AI</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Career opportunities</span>
                </div>
                <div className="flex items-center">
                  <Compass className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Future preparation</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Leadership</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-islamic-gold mr-3" />
                  <span className="text-gray-300">Your role</span>
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
            {/* Career Paths Explorer */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className="text-2xl font-bold text-white mb-6">AI Career Paths Explorer</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {careerPaths.map((career, index) => (
                  <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Briefcase className="w-8 h-8 text-islamic-gold mr-3" />
                      <h3 className="text-lg font-semibold text-white">{career.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{career.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-semibold text-islamic-gold">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {career.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-2 py-1 bg-islamic-gold/20 text-islamic-gold text-xs rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-islamic-gold/20 to-transparent p-3 rounded-lg border-l-4 border-islamic-gold">
                      <h4 className="text-sm font-semibold text-islamic-gold mb-1">Islamic Perspective</h4>
                      <p className="text-gray-300 text-xs">{career.islamicContext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Scenarios */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className="text-2xl font-bold text-white mb-6">Future AI Scenarios</h2>
              
              <div className="space-y-6">
                {futureScenarios.map((scenario, index) => (
                  <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-3">{scenario.title}</h3>
                    <p className="text-gray-300 mb-4">{scenario.scenario}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-2">Opportunities</h4>
                        <div className="space-y-1">
                          {scenario.opportunities.map((opportunity, oppIndex) => (
                            <div key={oppIndex} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                              <span className="text-gray-300">{opportunity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-red-400 mb-2">Challenges</h4>
                        <div className="space-y-1">
                          {scenario.challenges.map((challenge, chalIndex) => (
                            <div key={chalIndex} className="flex items-center text-sm">
                              <XCircle className="w-4 h-4 text-red-400 mr-2" />
                              <span className="text-gray-300">{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-islamic-gold/20 to-transparent p-4 rounded-lg border-l-4 border-islamic-gold">
                      <h4 className="text-sm font-semibold text-islamic-gold mb-2">Islamic Perspective</h4>
                      <p className="text-gray-300 text-sm">{scenario.islamicContext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Future Vision */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className="text-2xl font-bold text-white mb-6">Your Future Vision</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Personal Goals</h3>
                  <textarea
                    placeholder="What do you want to achieve in your AI career?"
                    value={futureVision.personal}
                    onChange={(e) => updateFutureVision('personal', e.target.value)}
                    className="w-full h-32 bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-islamic-gold focus:outline-none"
                  />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Community Impact</h3>
                  <textarea
                    placeholder="How do you want to help your community with AI?"
                    value={futureVision.community}
                    onChange={(e) => updateFutureVision('community', e.target.value)}
                    className="w-full h-32 bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-islamic-gold focus:outline-none"
                  />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Global Contribution</h3>
                  <textarea
                    placeholder="How do you want to contribute to global AI development?"
                    value={futureVision.global}
                    onChange={(e) => updateFutureVision('global', e.target.value)}
                    className="w-full h-32 bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-islamic-gold focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button className="bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-3 px-8 rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all">
                  Save Vision
                </button>
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
                    placeholder="Share your thoughts on the future of AI and your role..."
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
                      ? "Excellent! You've mastered the concepts of AI's Future and Your Role."
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
                    <Link href="/" className="px-6 py-2 bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all">
                      Complete Course
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Final Reflection and Commitment */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className="text-2xl font-bold text-white mb-6">Final Reflection & Commitment</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Course Reflection</h3>
                  <textarea
                    placeholder="Reflect on what you've learned throughout this AI course..."
                    className="w-full h-32 bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-islamic-gold focus:outline-none"
                  />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-islamic-gold mb-4">Your Commitment</h3>
                  <textarea
                    placeholder="How will you use your AI knowledge to serve humanity and fulfill Islamic values?"
                    className="w-full h-32 bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-islamic-gold focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button className="bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold py-3 px-8 rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all">
                  Save Final Reflection
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  )
} 