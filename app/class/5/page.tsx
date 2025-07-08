'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Building2, Shield, Lightbulb, Users, ArrowLeft, Play, CheckCircle, XCircle, BookOpen, MessageCircle, Target, Heart, Globe, Clock, History, Zap, Eye, Cpu, Activity, Maximize2, Minimize2, Volume2, VolumeX, Brain, Code, Sparkles, Edit3, Send, Bot, User, Settings, Key, Lock, Unlock } from 'lucide-react'
import Link from 'next/link'

export default function Class5() {
  const [currentSection, setCurrentSection] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({})
  const [showResults, setShowResults] = useState(false)
  const [discussionResponses, setDiscussionResponses] = useState<string[]>([])
  const [currentActivity, setCurrentActivity] = useState(0)
  const [promptExamples, setPromptExamples] = useState(0)
  const [practicePrompt, setPracticePrompt] = useState("")
  const [aiResponse, setAiResponse] = useState("")
  const [presentationMode, setPresentationMode] = useState(false)
  const [muted, setMuted] = useState(false)

  const sections = [
    {
      title: "What is Prompt Engineering?",
      content: "Prompt engineering is the art and science of crafting effective instructions for AI systems. It's like learning to speak a new language - the language of AI. By writing clear, specific, and well-structured prompts, we can get better, more accurate, and more useful responses from AI systems.",
      islamicContext: "In Islam, we are taught the importance of clear communication and truthful speech. The Prophet Muhammad (PBUH) said, 'Whoever believes in Allah and the Last Day, let him speak good or remain silent.' Prompt engineering embodies this principle by teaching us to communicate clearly and effectively with AI systems.",
      activities: ["Prompt Analysis Exercise", "Communication Skills Discussion", "AI Language Learning"],
      examples: ["ChatGPT conversations", "AI image generation", "Code generation", "Data analysis"],
      techniques: [
        {
          name: "Clear Instructions",
          description: "Be specific about what you want the AI to do",
          example: "Instead of 'Write about AI', say 'Write a 200-word explanation of AI for teenagers'"
        },
        {
          name: "Context Setting",
          description: "Provide background information to guide the AI",
          example: "You are an expert teacher explaining complex topics to teenagers..."
        },
        {
          name: "Step-by-Step",
          description: "Break complex requests into smaller steps",
          example: "First, explain what AI is. Then, give three examples. Finally, discuss its impact."
        }
      ]
    },
    {
      title: "The Art of Effective Communication",
      content: "Just as we learn to communicate effectively with other people, we must learn to communicate effectively with AI. This involves understanding how AI thinks, what it can and cannot do, and how to structure our requests for the best results.",
      islamicContext: "Islamic teachings emphasize the importance of good communication. The Quran says, 'And speak to people good words.' When we communicate with AI, we should use good, clear, and respectful language that helps us achieve our goals while maintaining ethical standards.",
      activities: ["Communication Role Play", "AI Understanding Exercise", "Ethical Communication Practice"],
      examples: ["Asking for help with homework", "Getting creative writing assistance", "Solving math problems", "Learning new concepts"],
      techniques: [
        {
          name: "Be Specific",
          description: "Avoid vague language and be precise about your needs",
          example: "Instead of 'Help me with math', say 'Help me solve quadratic equations step by step'"
        },
        {
          name: "Provide Examples",
          description: "Give examples of what you're looking for",
          example: "Write a story like Harry Potter but set in an Islamic school"
        },
        {
          name: "Ask for Format",
          description: "Specify how you want the information presented",
          example: "Present this information in a table format with three columns"
        }
      ]
    },
    {
      title: "Understanding AI Capabilities and Limitations",
      content: "AI is powerful but has limitations. It can process vast amounts of information quickly, recognize patterns, and generate creative content. However, it can also make mistakes, be biased, and lack true understanding. Understanding these capabilities and limitations helps us write better prompts.",
      islamicContext: "Islam teaches us to be humble and recognize our limitations while striving for excellence. Similarly, we should understand AI's capabilities and limitations, using it as a tool to enhance our abilities rather than replace our critical thinking and moral judgment.",
      activities: ["AI Capability Assessment", "Limitation Discussion", "Critical Thinking Exercise"],
      examples: ["AI can write essays but may include errors", "AI can solve math problems but may not understand context", "AI can generate images but may create inappropriate content", "AI can translate languages but may miss cultural nuances"],
      techniques: [
        {
          name: "Fact Checking",
          description: "Always verify important information from AI",
          example: "Ask AI to provide sources or cross-reference with reliable websites"
        },
        {
          name: "Iterative Refinement",
          description: "Improve prompts based on AI responses",
          example: "If the first response isn't what you want, ask for clarification or try a different approach"
        },
        {
          name: "Human Oversight",
          description: "Always review and validate AI outputs",
          example: "Don't blindly accept AI responses - think critically about them"
        }
      ]
    },
    {
      title: "Ethical Prompt Design",
      content: "When we write prompts, we have a responsibility to ensure they are ethical and beneficial. This means avoiding prompts that could generate harmful content, respecting privacy, and using AI for positive purposes that align with our values.",
      islamicContext: "Islamic ethics guide us to use our knowledge and skills for the benefit of humanity. The Prophet Muhammad (PBUH) said, 'The best of people are those who are most beneficial to people.' When designing prompts, we should ensure they serve this noble purpose.",
      activities: ["Ethical Scenario Analysis", "Beneficial Use Brainstorming", "Values-Based Prompt Design"],
      examples: ["Educational content creation", "Problem-solving assistance", "Creative writing help", "Language learning support"],
      techniques: [
        {
          name: "Beneficial Intent",
          description: "Ensure your prompts aim to help and educate",
          example: "Ask AI to explain concepts in simple terms for learning purposes"
        },
        {
          name: "Respectful Language",
          description: "Use respectful and inclusive language in prompts",
          example: "Avoid prompts that could generate harmful or offensive content"
        },
        {
          name: "Privacy Awareness",
          description: "Don't ask AI to process sensitive personal information",
          example: "Avoid sharing personal details in prompts"
        }
      ]
    },
    {
      title: "Advanced Prompting Techniques",
      content: "As you become more experienced with prompt engineering, you can use advanced techniques like few-shot learning, chain-of-thought prompting, and role-based prompting. These techniques help you get more sophisticated and accurate responses from AI systems.",
      islamicContext: "Islam encourages continuous learning and improvement. The Prophet Muhammad (PBUH) said, 'Seek knowledge from the cradle to the grave.' Advanced prompting techniques represent this commitment to lifelong learning and skill development.",
      activities: ["Advanced Technique Practice", "Complex Problem Solving", "Creative Application"],
      examples: ["Multi-step problem solving", "Creative story generation", "Technical documentation", "Research assistance"],
      techniques: [
        {
          name: "Few-Shot Learning",
          description: "Provide examples to guide AI responses",
          example: "Here are three examples of good essays. Write one in the same style..."
        },
        {
          name: "Chain-of-Thought",
          description: "Ask AI to show its reasoning process",
          example: "Solve this math problem step by step, showing your work"
        },
        {
          name: "Role-Based Prompting",
          description: "Assign specific roles to AI for better responses",
          example: "You are an expert historian. Explain the Islamic Golden Age..."
        }
      ]
    },
    {
      title: "Practical Applications and Future Skills",
      content: "Prompt engineering skills are becoming increasingly valuable in many fields. From education to business, from creative arts to scientific research, the ability to effectively communicate with AI is a crucial skill for the future. Learning these skills now prepares you for a world where AI is integrated into every aspect of life.",
      islamicContext: "Islam teaches us to prepare for the future while staying grounded in our values. As technology advances, we must ensure that our Islamic principles guide how we use and interact with AI. This means using AI to promote knowledge, justice, and the common good.",
      activities: ["Career Exploration", "Future Scenario Planning", "Skill Development Planning"],
      examples: ["AI-assisted research", "Creative content generation", "Educational technology", "Business automation"],
      techniques: [
        {
          name: "Continuous Learning",
          description: "Stay updated with new AI capabilities and techniques",
          example: "Regularly practice with new AI tools and features"
        },
        {
          name: "Adaptation",
          description: "Learn to adapt prompts for different AI systems",
          example: "Understand that different AI models may require different approaches"
        },
        {
          name: "Innovation",
          description: "Use AI creatively to solve new problems",
          example: "Combine multiple AI tools for complex tasks"
        }
      ]
    }
  ]

  const quizQuestions = [
    {
      question: "What is the primary goal of prompt engineering?",
      options: ["To confuse AI systems", "To get better, more accurate responses from AI", "To make AI work faster", "To save money on AI services"],
      correct: "To get better, more accurate responses from AI"
    },
    {
      question: "Which Islamic principle is most relevant to prompt engineering?",
      options: ["Clear and truthful communication", "Avoiding technology", "Keeping secrets", "Following traditions"],
      correct: "Clear and truthful communication"
    },
    {
      question: "What should you do when AI gives you information?",
      options: ["Always trust it completely", "Fact-check important information", "Ignore it completely", "Share it immediately"],
      correct: "Fact-check important information"
    },
    {
      question: "Which is an example of good prompt design?",
      options: ["Write something about AI", "Write a 200-word explanation of AI for teenagers", "Tell me everything", "Just write"],
      correct: "Write a 200-word explanation of AI for teenagers"
    },
    {
      question: "What is the Islamic perspective on using AI?",
      options: ["Avoid it completely", "Use it for beneficial purposes", "Use it only for entertainment", "Use it to replace human work"],
      correct: "Use it for beneficial purposes"
    },
    {
      question: "What should you consider when writing prompts?",
      options: ["Only speed", "Ethics, clarity, and purpose", "Only cost", "Only complexity"],
      correct: "Ethics, clarity, and purpose"
    },
    {
      question: "Which technique involves providing examples to guide AI?",
      options: ["Chain-of-thought", "Few-shot learning", "Role-based prompting", "Random prompting"],
      correct: "Few-shot learning"
    },
    {
      question: "How should you approach AI limitations?",
      options: ["Ignore them", "Understand and work around them", "Blame the AI", "Stop using AI"],
      correct: "Understand and work around them"
    }
  ]

  const promptScenarios = [
    {
      scenario: "You need help understanding a complex math concept. How should you write your prompt?",
      options: [
        "Help me with math",
        "Explain calculus in simple terms for a teenager, with examples and step-by-step solutions",
        "Do my homework",
        "Just give me the answer"
      ],
      correct: "Explain calculus in simple terms for a teenager, with examples and step-by-step solutions",
      islamicContext: "Islam encourages seeking knowledge and understanding. A good prompt should help you learn, not just get answers without understanding."
    },
    {
      scenario: "You want to write a story for your Islamic studies class. What's the best approach?",
      options: [
        "Write a story about Islam",
        "Write a story about a Muslim teenager learning about Islamic values through everyday experiences, suitable for a school presentation",
        "Write something religious",
        "Just write any story"
      ],
      correct: "Write a story about a Muslim teenager learning about Islamic values through everyday experiences, suitable for a school presentation",
      islamicContext: "Islamic storytelling should be meaningful and educational, helping others learn about our values and traditions."
    },
    {
      scenario: "You're researching for a school project. How should you use AI?",
      options: [
        "Ask AI to write the entire project",
        "Use AI to help gather information and organize ideas, then write it yourself",
        "Copy everything AI gives you",
        "Ignore AI completely"
      ],
      correct: "Use AI to help gather information and organize ideas, then write it yourself",
      islamicContext: "Islam teaches us to be honest and do our own work. AI should assist our learning, not replace our effort."
    }
  ]

  const discussionTopics = [
    "How has AI changed the way you learn and study?",
    "What are some creative ways you could use AI to help with your education?",
    "How can we ensure AI helps everyone, not just those who can afford it?",
    "What role should humans play when working with AI?",
    "How can we use AI to promote understanding between different cultures?",
    "What skills do you think will be most important in an AI-powered future?",
    "How can we use AI to solve problems in our community?",
    "What would you like to create or accomplish with AI?"
  ]

  const practicePrompts = [
    {
      category: "Education",
      prompts: [
        "Explain photosynthesis in simple terms for a 10-year-old",
        "Create a study guide for Islamic history",
        "Write a poem about learning and knowledge",
        "Design a quiz about environmental science"
      ]
    },
    {
      category: "Creative Writing",
      prompts: [
        "Write a short story about a Muslim family during Ramadan",
        "Create a dialogue between two friends discussing technology",
        "Write a letter to your future self about AI",
        "Compose a song about unity and peace"
      ]
    },
    {
      category: "Problem Solving",
      prompts: [
        "Help me plan a community service project",
        "Suggest ways to reduce waste in our school",
        "Design a system to help elderly neighbors",
        "Create a plan to improve study habits"
      ]
    }
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

  const simulateAIResponse = (prompt: string) => {
    // Simulate AI response based on prompt
    if (prompt.toLowerCase().includes("story")) {
      return "Here's a creative story based on your prompt: [AI would generate a story here]"
    } else if (prompt.toLowerCase().includes("explain")) {
      return "Let me explain this concept clearly: [AI would provide explanation here]"
    } else if (prompt.toLowerCase().includes("help")) {
      return "I'd be happy to help you with that. Here's what I can suggest: [AI would provide assistance here]"
    } else {
      return "Thank you for your prompt. Here's my response: [AI would generate appropriate content here]"
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
              <MessageSquare className="w-8 h-8 text-islamic-gold mr-3" />
              <span className="text-white font-semibold">Class 5: Prompt Engineering</span>
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

                {/* Prompting Techniques */}
                {sections[currentSection].techniques && (
                  <div className="bg-gray-800/50 p-6 rounded-lg">
                    <h3 className={`font-semibold text-islamic-gold mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Prompting Techniques</h3>
                    <div className="space-y-4">
                      {sections[currentSection].techniques.map((technique, index) => (
                        <div key={index} className="bg-gray-700/50 p-4 rounded-lg">
                          <h4 className={`font-semibold text-white mb-2 ${presentationMode ? 'text-xl' : 'text-lg'}`}>{technique.name}</h4>
                          <p className={`text-gray-300 mb-2 ${presentationMode ? 'text-lg' : 'text-sm'}`}>{technique.description}</p>
                          <div className="bg-gray-600/50 p-3 rounded border-l-2 border-islamic-gold">
                            <span className={`text-islamic-gold font-semibold ${presentationMode ? 'text-lg' : 'text-sm'}`}>Example: </span>
                            <span className={`text-gray-300 ${presentationMode ? 'text-lg' : 'text-sm'}`}>{technique.example}</span>
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

              {/* Prompt Engineering Tips */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-islamic-gold/30">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Tips</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Edit3 className="w-5 h-5 text-islamic-gold mr-3" />
                    <span className="text-gray-300">Be specific and clear</span>
                  </div>
                  <div className="flex items-center">
                    <Settings className="w-5 h-5 text-islamic-gold mr-3" />
                    <span className="text-gray-300">Provide context</span>
                  </div>
                  <div className="flex items-center">
                    <Key className="w-5 h-5 text-islamic-gold mr-3" />
                    <span className="text-gray-300">Use examples</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-islamic-gold mr-3" />
                    <span className="text-gray-300">Consider ethics</span>
                  </div>
                  <div className="flex items-center">
                    <Brain className="w-5 h-5 text-islamic-gold mr-3" />
                    <span className="text-gray-300">Think critically</span>
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

            {/* Prompt Practice */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className={`font-bold text-white mb-6 ${presentationMode ? 'text-4xl' : 'text-2xl'}`}>Prompt Practice</h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className={`font-semibold text-islamic-gold mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Try These Prompts</h3>
                  <div className="space-y-4">
                    {practicePrompts.map((category, catIndex) => (
                      <div key={catIndex} className="bg-gray-800/50 p-4 rounded-lg">
                        <h4 className={`font-semibold text-white mb-3 ${presentationMode ? 'text-xl' : 'text-lg'}`}>{category.category}</h4>
                        <div className="space-y-2">
                          {category.prompts.map((prompt, promptIndex) => (
                            <button
                              key={promptIndex}
                              onClick={() => setPracticePrompt(prompt)}
                              className={`w-full text-left p-3 rounded-lg transition-all bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white ${presentationMode ? 'text-lg' : 'text-sm'}`}
                            >
                              {prompt}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className={`font-semibold text-islamic-gold mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>Practice Your Prompt</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-islamic-gold" />
                      <span className="text-gray-300">Your Prompt:</span>
                    </div>
                    <textarea
                      value={practicePrompt}
                      onChange={(e) => setPracticePrompt(e.target.value)}
                      placeholder="Write your prompt here..."
                      className={`w-full bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-islamic-gold focus:outline-none ${presentationMode ? 'h-32 text-lg' : 'h-24'}`}
                    />
                    <button 
                      onClick={() => setAiResponse(simulateAIResponse(practicePrompt))}
                      className={`w-full bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all ${presentationMode ? 'py-3 px-6 text-lg' : 'py-2 px-4'}`}
                    >
                      <Send className="w-4 h-4 mr-2 inline" />
                      Send to AI
                    </button>
                    
                    {aiResponse && (
                      <div className="mt-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Bot className="w-5 h-5 text-islamic-gold" />
                          <span className="text-gray-300">AI Response:</span>
                        </div>
                        <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300">
                          {aiResponse}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Ethics Scenarios */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-islamic-gold/30">
              <h2 className={`font-bold text-white mb-6 ${presentationMode ? 'text-4xl' : 'text-2xl'}`}>Ethical Prompt Design</h2>
              
              <div className="space-y-6">
                {promptScenarios.map((scenario, index) => (
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
                      ? "Excellent! You've mastered the concepts of prompt engineering."
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
                    <Link href="/" className={`bg-gradient-to-r from-islamic-gold to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-islamic-gold transition-all ${presentationMode ? 'px-8 py-3 text-lg' : 'px-6 py-2'}`}>
                      Back to Classes
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
                    placeholder="Reflect on the key concepts you learned about prompt engineering..."
                    className={`w-full bg-gray-800/50 border border-gray-600 rounded-lg p-4 text-gray-300 placeholder-gray-500 focus:border-islamic-gold focus:outline-none ${presentationMode ? 'h-40 text-lg' : 'h-32'}`}
                  />
                </div>
                
                <div>
                  <h3 className={`font-semibold text-islamic-gold mb-4 ${presentationMode ? 'text-2xl' : 'text-lg'}`}>My Commitment</h3>
                  <textarea
                    placeholder="How will you apply these prompt engineering skills in your future work with AI?"
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