"use client";
import { useState } from 'react';
import { Droplet, BookOpen, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

function AnimatedDroplet({ active }: { active: boolean }) {
  return (
    <motion.svg
      width="40" height="40" viewBox="0 0 40 40" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0.9, opacity: 0.7 }}
      animate={{
        scale: active ? 1.15 : 1,
        opacity: active ? 1 : 0.7,
        y: active ? -8 : 0,
        filter: active ? 'drop-shadow(0 0 8px #38bdf8)' : 'none',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="mx-auto mb-2"
    >
      <ellipse cx="20" cy="28" rx="10" ry="12" fill="#38bdf8" />
      <ellipse cx="20" cy="18" rx="4" ry="6" fill="#7dd3fc" />
    </motion.svg>
  );
}

export default function TaharaBoysClass() {
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  const [showResults, setShowResults] = useState(false);
  const [wuduStep, setWuduStep] = useState(0);
  const [presentationMode, setPresentationMode] = useState(false);
  const [section, setSection] = useState(0);
  const wuduSteps = [
    'Niyyah (Intention)',
    'Washing hands',
    'Rinsing mouth',
    'Rinsing nose',
    'Washing face',
    'Washing arms',
    'Wiping head',
    'Wiping ears',
    'Washing feet',
  ];
  const quizQuestions = [
    {
      question: 'Is it necessary to wash both feet in wudu?',
      options: ['Yes', 'No'],
      correct: 'Yes',
    },
    {
      question: 'Can you pray if you are not in a state of tahara?',
      options: ['Yes', 'No'],
      correct: 'No',
    },
    {
      question: 'Which of these breaks wudu?',
      options: ['Sleeping', 'Smiling', 'Reading Quran'],
      correct: 'Sleeping',
    },
  ];

  const sections = [
    {
      key: 'intro',
      content: (
        <motion.section
          key="intro"
          className="bg-white/80 rounded-2xl shadow p-6 border-l-4 border-blue-400"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-700">What is Tahara?</h2>
          <p className="mb-2 text-lg">Tahara means purity and cleanliness. In Islam, it is essential for prayer and daily life. Boys are encouraged to learn and practice tahara as they grow up.</p>
          <div className="space-y-3 mt-2">
            <div className="bg-blue-50 p-3 rounded-lg text-blue-800">
              <div className="flex items-center mb-2">
                <BookOpen className="inline w-5 h-5 mr-2 text-blue-400" />
                <span className="italic">"Cleanliness is half of faith." (Sahih Muslim)</span>
              </div>
                              <div className="text-right text-lg hadith-text text-blue-700">النظافة من الإيمان</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-green-800">
              <div className="flex items-center mb-2">
                <BookOpen className="inline w-5 h-5 mr-2 text-green-400" />
                <span className="italic">"Allah is Pure and loves purity, He is Clean and loves cleanliness." (Sahih Muslim)</span>
              </div>
                              <div className="text-right text-lg hadith-text text-green-700">إن الله طيب يحب الطيب، نظيف يحب النظافة</div>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg text-yellow-800">
              <div className="flex items-center mb-2">
                <BookOpen className="inline w-5 h-5 mr-2 text-yellow-400" />
                <span className="italic">"Remove harm from the road, for it is a charity." (Sahih Bukhari)</span>
              </div>
                              <div className="text-right text-lg hadith-text text-yellow-700">إماطة الأذى عن الطريق صدقة</div>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg text-blue-900">
              <div className="flex items-center mb-2">
                <BookOpen className="inline w-5 h-5 mr-2 text-blue-500" />
                <span className="italic">"Whoever performs ablution well, his sins will come out from his body, even from under his nails." (Sahih Muslim)</span>
              </div>
                              <div className="text-right text-lg hadith-text text-blue-700">من توضأ فأحسن الوضوء خرجت خطاياه من جسده حتى تخرج من تحت أظفاره</div>
            </div>
          </div>
        </motion.section>
      ),
    },
    {
      key: 'context',
      content: (
        <motion.section
          key="context"
          className="bg-green-50 rounded-2xl shadow p-6 border-l-4 border-green-400"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-2">Why is Tahara Important?</h3>
          <ul className="list-disc pl-6 text-green-900 space-y-1 text-lg">
            <li>It is required for prayer (salah).</li>
            <li>It keeps your body and mind healthy.</li>
            <li>It shows respect for yourself and others.</li>
            <li>It is a sign of good character in Islam.</li>
          </ul>
        </motion.section>
      ),
    },
    {
      key: 'wudu',
      content: (
        <motion.section
          key="wudu"
          className="bg-white/90 rounded-2xl shadow p-6 border-l-4 border-blue-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4">Steps of Wudu (Ablution)</h3>
          <div className="flex flex-col items-center">
            <div className="flex space-x-2 mb-4">
              {wuduSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <button
                    onClick={() => setWuduStep(idx)}
                    className={`rounded-full w-10 h-10 flex items-center justify-center font-bold border-2 transition-colors ${wuduStep === idx ? 'bg-blue-400 text-white border-blue-600' : 'bg-blue-100 text-blue-700 border-blue-300'}`}
                  >
                    {idx + 1}
                  </button>
                  <AnimatedDroplet active={wuduStep === idx} />
                </div>
              ))}
            </div>
            <motion.div
              key={wuduStep}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-blue-50 p-4 rounded-lg shadow w-full text-center text-lg"
            >
              <span className="font-semibold text-blue-700">Step {wuduStep + 1}:</span> {wuduSteps[wuduStep]}
            </motion.div>
          </div>
        </motion.section>
      ),
    },
    {
      key: 'quiz',
      content: (
        <motion.section
          key="quiz"
          className="bg-green-50 rounded-2xl shadow p-6 border-l-4 border-green-400"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-4">Is it Clean or Not?</h3>
          {!showResults ? (
            <div className="space-y-6">
              {quizQuestions.map((q, idx) => (
                <div key={idx} className="bg-white/80 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2 text-lg">{q.question}</h4>
                  <div className="flex space-x-4">
                    {q.options.map(opt => (
                      <button
                        key={opt}
                        onClick={() => setQuizAnswers({ ...quizAnswers, [idx]: opt })}
                        className={`py-1 px-4 rounded-lg border font-semibold transition-colors ${quizAnswers[idx] === opt ? 'bg-gradient-to-r from-green-400 to-blue-300 text-white border-green-600' : 'bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200'}`}
                        disabled={showResults}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button
                onClick={() => setShowResults(true)}
                className="w-full bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold py-2 px-6 rounded-lg mt-2 hover:from-blue-400 hover:to-green-400 transition-all"
                disabled={Object.keys(quizAnswers).length !== quizQuestions.length}
              >
                Submit Answers
              </button>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-5xl mb-4">{Object.values(quizAnswers).filter((ans, idx) => ans === quizQuestions[idx].correct).length === quizQuestions.length ? '🌊' : '🧼'}</div>
              <h4 className="text-xl font-bold text-green-700 mb-2">You got {Object.values(quizAnswers).filter((ans, idx) => ans === quizQuestions[idx].correct).length} out of {quizQuestions.length} correct!</h4>
              <button
                onClick={() => { setShowResults(false); setQuizAnswers({}); }}
                className="mt-4 bg-blue-100 text-blue-700 font-bold py-2 px-6 rounded-lg hover:bg-blue-200 transition-all"
              >
                Try Again
              </button>
            </div>
          )}
        </motion.section>
      ),
    },
    {
      key: 'reflection',
      content: (
        <motion.section
          key="reflection"
          className="bg-white/80 rounded-2xl shadow p-6 border-l-4 border-blue-400"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-2">My Clean Commitment</h3>
          <textarea
            placeholder="How will you stay pure and clean every day?"
            className="w-full h-24 bg-blue-50 border border-blue-200 rounded-lg p-3 text-blue-900 placeholder-blue-400 focus:border-blue-400 focus:outline-none mb-3 text-lg"
          />
          <button className="bg-gradient-to-r from-blue-400 to-green-400 text-white font-bold py-2 px-6 rounded-lg hover:from-green-400 hover:to-blue-400 transition-all">
            Save Commitment
          </button>
        </motion.section>
      ),
    },
    {
      key: 'purity-difference',
      content: (
        <motion.section
          key="purity-difference"
          className="bg-white/90 rounded-2xl shadow p-6 border-l-4 border-blue-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">🧼 <span className="ml-2">Pure, Impure, Clean, and Dirty – What's the Difference?</span></h3>
          <div className="mb-4">
            <span className="block text-blue-800 font-semibold mb-2">✨ 1. Clean (صاف) vs. Pure (پاک)</span>
            <ul className="list-disc pl-6 text-blue-900 space-y-1">
              <li><b>Clean (صاف):</b> What we see as physically clean — no visible dirt or smell.<br/><span className="text-blue-600">Example: Your hands after washing with soap.</span></li>
              <li><b>Pure (پاک):</b> Islamically acceptable — something that can be used for salah.<br/><span className="text-blue-600">Example: Water that is clean and has not mixed with impure things = pure.</span></li>
            </ul>
            <div className="bg-blue-50 p-3 rounded-lg mt-2 text-blue-800 font-semibold">📝 Rule:<br/>👉 Everything that is pure is clean, but not everything that is clean is pure.</div>
          </div>
          <div className="mb-4 border-t border-blue-200 pt-4">
            <span className="block text-green-800 font-semibold mb-2">💩 2. Dirty (گندا) vs. Impure (ناپاک)</span>
            <ul className="list-disc pl-6 text-green-900 space-y-1">
              <li><b>Dirty (گندا):</b> May include mud, dust, or even sweat — not always impure.<br/><span className="text-green-600">Example: Mud on pants — looks dirty but not najis.</span></li>
              <li><b>Impure (ناپاک):</b> Islamically forbidden — cannot be ignored for wudu/salah.<br/><span className="text-green-600">Example: Urine, blood, alcohol — they make a person or place najis.</span></li>
            </ul>
          </div>
          <div className="border-t border-blue-200 pt-4 mt-4">
            <span className="block text-blue-700 font-bold mb-2">🧠 Mini Activity (2 min): "Pure or Not?"</span>
            <MiniPurityActivity />
          </div>
        </motion.section>
      ),
    },
    {
      key: 'runner-game',
      content: (
        <motion.section
          key="runner-game"
          className="bg-white/90 rounded-2xl shadow p-6 border-l-4 border-blue-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 flex items-center">🏃‍♂️ <span className="ml-2">Run for Purity! (Mini Game)</span></h3>
          <RunnerGame />
        </motion.section>
      ),
    },
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-100 via-green-100 to-blue-200 text-blue-900 font-sans ${presentationMode ? 'text-xl' : ''}`}>
      <header className="bg-gradient-to-r from-blue-700 to-green-600 p-4 flex items-center justify-between shadow-md">
        <Link href="/" className="flex items-center text-white hover:text-blue-200 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Classes
        </Link>
        <div className="flex items-center space-x-3">
          <Droplet className="w-8 h-8 text-white animate-bounce" />
          <span className="text-white font-bold text-lg">Special Class: Tahara for Boys</span>
        </div>
        <button
          onClick={() => setPresentationMode(!presentationMode)}
          className="ml-4 px-4 py-2 rounded-lg bg-white/20 text-white border border-white hover:bg-white/30 transition-all font-semibold"
        >
          {presentationMode ? 'Exit Presentation' : 'Presentation Mode'}
        </button>
      </header>
      <main className="max-w-2xl mx-auto py-8 px-4 flex flex-col items-center">
        <AnimatePresence mode="wait">
          {presentationMode ? (
            <div className="w-full">
              {sections[section] && (
                <div key={sections[section].key}>
                  {sections[section].content}
                  <div className="flex justify-between mt-8">
                    <button
                      onClick={() => setSection(Math.max(0, section - 1))}
                      disabled={section === 0}
                      className="px-6 py-2 bg-blue-200 text-blue-700 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-300 transition-colors"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setSection(Math.min(sections.length - 1, section + 1))}
                      disabled={section === sections.length - 1}
                      className="px-6 py-2 bg-gradient-to-r from-blue-400 to-green-400 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-green-400 hover:to-blue-400 transition-all"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="w-full space-y-10">
              {sections.map((s, idx) => (
                <div key={s.key}>{s.content}</div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function MiniPurityActivity() {
  const items = [
    { text: 'Water from a clean river', answer: 'Pure' },
    { text: 'Mud on your shoes', answer: 'Dirty' },
    { text: 'Urine on the floor', answer: 'Impure' },
    { text: 'A shirt with sweat', answer: 'Dirty' },
    { text: 'Blood on a bandage', answer: 'Impure' },
    { text: 'A clean glass cup', answer: 'Clean' },
    { text: 'Alcohol spilled on a table', answer: 'Impure' },
    { text: 'A dusty prayer mat', answer: 'Dirty' },
    { text: 'Zamzam water', answer: 'Pure' },
  ];
  const [selected, setSelected] = useState<string[]>(Array(items.length).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const options = ['Pure', 'Impure', 'Clean', 'Dirty'];

  const handleSelect = (idx: number, value: string) => {
    if (submitted) return;
    const updated = [...selected];
    updated[idx] = value;
    setSelected(updated);
  };
  const handleSubmit = () => {
    let correct = 0;
    items.forEach((item, idx) => {
      if (selected[idx] === item.answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
  };
  return (
    <div>
      <div className="space-y-2 mb-3">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-center md:space-x-4 bg-blue-50 rounded-lg p-2 mb-1">
            <span className="text-blue-900 flex-1 mb-1 md:mb-0">{item.text}</span>
            <select
              className={`rounded-lg p-2 border focus:outline-none focus:border-blue-400 transition-colors
                ${submitted
                  ? selected[idx] === item.answer
                    ? 'border-green-400 bg-green-50 text-green-800'
                    : 'border-red-400 bg-red-50 text-red-800'
                  : 'border-blue-200 bg-white text-blue-900'}
              `}
              value={selected[idx]}
              onChange={e => handleSelect(idx, e.target.value)}
              disabled={submitted}
            >
              <option value="">Select…</option>
              {options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {submitted && (
              <span className={`ml-2 font-semibold ${selected[idx] === item.answer ? 'text-green-600' : 'text-red-600'}`}>{selected[idx] === item.answer ? '✔' : '✗'}</span>
            )}
          </div>
        ))}
      </div>
      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-blue-400 to-green-400 text-white font-bold py-2 px-6 rounded-lg hover:from-green-400 hover:to-blue-400 transition-all"
          disabled={selected.some(val => !val)}
        >
          Submit
        </button>
      ) : (
        <div className="mt-2 text-blue-800 font-semibold">You got {score} out of {items.length} correct!</div>
      )}
    </div>
  );
}

function RunnerGame() {
  const items = [
    { type: 'Pure', color: 'bg-blue-400', points: 2, label: 'پاک', icon: 'pure' },
    { type: 'Clean', color: 'bg-green-400', points: 1, label: 'صاف', icon: 'clean' },
    { type: 'Dirty', color: 'bg-yellow-700', points: -1, label: 'گندا', icon: 'dirty' },
    { type: 'Impure', color: 'bg-red-500', points: -2, label: 'ناپاک', icon: 'impure' },
  ];
  type Obstacle = { type: string; color: string; points: number; label: string; x: number; icon: string; lane: number };
  const [gameState, setGameState] = useState<'ready'|'running'|'over'>('ready');
  const [score, setScore] = useState(0);
  const [playerY, setPlayerY] = useState(0); // 0 = ground, 1 = jump
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const [tick, setTick] = useState(0);
  const [timer, setTimer] = useState(0);
  const [speed, setSpeed] = useState(4); // gentler start
  const [intervalMs, setIntervalMs] = useState(900); // lower initial frequency
  const gameDuration = 30; // seconds
  const GAME_WIDTH = 900;
  const [gameSeconds, setGameSeconds] = useState(0);
  const maxSpeedIncrease = 7; // speed will go from 4 to 11

  // Gentler speed curve
  React.useEffect(() => {
    if (gameState !== 'running') return;
    if (gameSeconds % 10 === 0 && gameSeconds > 0) {
      setSpeed(s => Math.min(s + 1, 9));
      setIntervalMs(i => Math.max(i - 100, 400)); // higher min interval
    }
  }, [gameSeconds, gameState]);

  // Generate obstacles (lower frequency)
  React.useEffect(() => {
    if (gameState !== 'running') return;
    const interval = setInterval(() => {
      setTick(t => t + 1);
      setObstacles(obs => {
        if (Math.random() < 0.7) { // lower random chance
          const item = items[Math.floor(Math.random() * items.length)];
          const lane = Math.random() < 0.5 ? 0 : 1;
          return [...obs, { ...item, x: GAME_WIDTH, lane }];
        }
        return obs;
      });
    }, intervalMs);
    return () => clearInterval(interval);
  }, [gameState, intervalMs]);

  // Move obstacles (use dynamic speed based on gameSeconds)
  React.useEffect(() => {
    if (gameState !== 'running') return;
    const move = setInterval(() => {
      const dynamicSpeed = 4 + (maxSpeedIncrease * (gameSeconds / gameDuration));
      setObstacles(obs => obs.map(o => ({ ...o, x: o.x - dynamicSpeed })).filter(o => o.x > -60));
    }, 20);
    return () => clearInterval(move);
  }, [gameState, gameSeconds]);

  // End game after duration
  React.useEffect(() => {
    if (gameState === 'running' && timer > gameDuration * 2) {
      setGameState('over');
    }
  }, [timer, gameState]);

  // Handle jump
  React.useEffect(() => {
    if (playerY === 1) {
      const t = setTimeout(() => setPlayerY(0), 500);
      return () => clearTimeout(t);
    }
  }, [playerY]);

  // Collision detection
  React.useEffect(() => {
    if (gameState !== 'running') return;
    obstacles.forEach((o, idx) => {
      if (o.x < 60 && o.x > 0 && o.lane === playerY) {
        setScore(s => s + o.points);
        setObstacles(obs => obs.filter((_, i) => i !== idx));
      }
    });
  }, [obstacles, playerY, gameState]);

  // Keyboard jump
  React.useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.code === 'Space' && gameState === 'running' && playerY === 0) setPlayerY(1);
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [gameState, playerY]);

  // Game timer (accurate 1s interval)
  React.useEffect(() => {
    if (gameState !== 'running') return;
    setGameSeconds(0);
    const timerInt = setInterval(() => {
      setGameSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(timerInt);
  }, [gameState]);

  // End game after 30 seconds
  React.useEffect(() => {
    if (gameState === 'running' && gameSeconds >= gameDuration) {
      setGameState('over');
    }
  }, [gameSeconds, gameState]);

  // SVG icon for each item
  function ItemIcon({ icon }: { icon: string }) {
    if (icon === 'pure') {
      return (
        <svg width="32" height="32" viewBox="0 0 32 32"><ellipse cx="16" cy="22" rx="10" ry="12" fill="#38bdf8" /><ellipse cx="16" cy="14" rx="4" ry="6" fill="#7dd3fc" /></svg>
      );
    }
    if (icon === 'clean') {
      return (
        <svg width="32" height="32" viewBox="0 0 32 32"><rect x="8" y="12" width="16" height="8" rx="4" fill="#a7f3d0" stroke="#059669" strokeWidth="2" /><rect x="12" y="8" width="8" height="4" rx="2" fill="#f0fdfa" /></svg>
      );
    }
    if (icon === 'dirty') {
      return (
        <svg width="32" height="32" viewBox="0 0 32 32"><ellipse cx="16" cy="20" rx="10" ry="6" fill="#a16207" /><ellipse cx="12" cy="24" rx="4" ry="2" fill="#fbbf24" /></svg>
      );
    }
    if (icon === 'impure') {
      return (
        <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#f87171" /><rect x="10" y="15" width="12" height="2" rx="1" fill="#fff" /></svg>
      );
    }
    return null;
  }

  const startGame = () => {
    setScore(0);
    setObstacles([]);
    setPlayerY(0);
    setTimer(0);
    setGameSeconds(0);
    setSpeed(4);
    setIntervalMs(900);
    setGameState('running');
  };

  return (
    <div className="w-full h-[60vh] md:h-[70vh] flex flex-col items-center justify-center relative max-w-3xl mx-auto">
      {gameState === 'ready' && (
        <div className="text-center">
          <p className="mb-2">Tap <span className="font-bold">Jump</span> or press <span className="font-bold">Space</span> to jump. Collect <span className="text-blue-500 font-bold">Pure</span> for double points, avoid <span className="text-red-500 font-bold">Impure</span> and <span className="text-yellow-700 font-bold">Dirty</span>!</p>
          <button onClick={startGame} className="bg-gradient-to-r from-blue-400 to-green-400 text-white font-bold py-2 px-6 rounded-lg hover:from-green-400 hover:to-blue-400 transition-all mt-2">Start Game</button>
        </div>
      )}
      {gameState === 'running' && (
        <div className="relative w-full h-full rounded-lg border border-blue-200 overflow-hidden mt-2" style={{ minWidth: 320, maxWidth: GAME_WIDTH, width: '100%' }}>
          {/* Abstract daily life Islamic background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex:0}} xmlns="http://www.w3.org/2000/svg" fill="none">
            {/* Sky gradient */}
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#e0f2fe" />
                <stop offset="100%" stop-color="#bae6fd" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#sky)" />
            {/* Sun and crescent */}
            <circle cx="60" cy="60" r="32" fill="#fde68a" opacity="0.25" />
            <path d="M90 60 A30 30 0 1 1 60 30" stroke="#fbbf24" stroke-width="6" fill="none" opacity="0.18" />
            {/* Mosque silhouette */}
            <ellipse cx="120" cy="220" rx="60" ry="18" fill="#38bdf8" opacity="0.10" />
            <rect x="80" y="170" width="80" height="50" rx="16" fill="#38bdf8" opacity="0.13" />
            <rect x="110" y="140" width="20" height="30" rx="8" fill="#0ea5e9" opacity="0.18" />
            <circle cx="120" cy="140" r="10" fill="#fde68a" opacity="0.18" />
            <rect x="150" y="150" width="8" height="40" rx="4" fill="#0ea5e9" opacity="0.18" />
            {/* Books */}
            <rect x="300" y="220" width="40" height="8" rx="2" fill="#a7f3d0" opacity="0.18" />
            <rect x="310" y="228" width="30" height="6" rx="2" fill="#fbbf24" opacity="0.15" />
            {/* Prayer mat */}
            <rect x="220" y="230" width="60" height="14" rx="4" fill="#f0fdfa" stroke="#38bdf8" stroke-width="2" opacity="0.13" />
            {/* Water droplet */}
            <ellipse cx="400" cy="80" rx="14" ry="20" fill="#38bdf8" opacity="0.10" />
            {/* Cityscape/home outlines */}
            <rect x="0" y="240" width="100%" height="40" fill="#0ea5e9" opacity="0.07" />
            <rect x="40" y="250" width="30" height="20" rx="4" fill="#38bdf8" opacity="0.10" />
            <rect x="90" y="255" width="20" height="15" rx="3" fill="#0ea5e9" opacity="0.10" />
            <rect x="130" y="248" width="25" height="22" rx="4" fill="#38bdf8" opacity="0.09" />
          </svg>
          {/* Player */}
          <motion.div
            className="absolute left-8 bottom-8"
            animate={{ y: playerY === 1 ? -100 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{ width: 48, height: 64 }}
          >
            {/* Abstract Muslim boy: circle head, rectangle body, kufi cap */}
            <svg width="48" height="64" viewBox="0 0 36 48">
              <ellipse cx="18" cy="12" rx="10" ry="10" fill="#f1f5f9" stroke="#0ea5e9" strokeWidth="2" />
              <rect x="8" y="22" width="20" height="20" rx="6" fill="#38bdf8" stroke="#0ea5e9" strokeWidth="2" />
              <rect x="12" y="7" width="12" height="6" rx="3" fill="#0ea5e9" /> {/* kufi cap */}
            </svg>
          </motion.div>
          {/* Obstacles/items */}
          {obstacles.map((o, idx) => (
            <motion.div
              key={idx}
              className="absolute flex flex-col items-center rounded-full border-4 border-blue-300 bg-white/80 px-2 py-1 shadow-lg"
              style={{ left: 0, x: o.x, bottom: o.lane === 1 ? 128 : 32 }}
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <ItemIcon icon={o.icon} />
              <span className="text-blue-700 font-bold text-sm drop-shadow">{o.type}</span>
              <span className="text-xs drop-shadow">{o.label}</span>
            </motion.div>
          ))}
          {/* Ground */}
          <div className="absolute left-0 bottom-0 w-full h-8 bg-green-200 rounded-b-lg" />
        </div>
      )}
      {gameState === 'running' && (
        <div className="flex justify-between w-full mt-2 px-4 text-xl font-bold">
          <span className="text-blue-700">Score: {score}</span>
          <button
            onClick={() => { if (playerY === 0) setPlayerY(1); }}
            className="bg-blue-200 text-blue-700 font-bold px-6 py-2 rounded-lg hover:bg-blue-300 transition-all shadow-lg"
            style={{ position: 'absolute', right: 24, bottom: 24, zIndex: 10 }}
          >
            Jump
          </button>
          <span className="text-blue-700">Time: {Math.max(0, gameDuration - gameSeconds)}s</span>
        </div>
      )}
      {gameState === 'over' && (
        <div className="text-center mt-4">
          <div className="text-4xl mb-2">{score > 0 ? '🎉' : '🧼'}</div>
          <div className="font-bold text-blue-700 mb-2">Game Over! Your Score: {score}</div>
          <button onClick={startGame} className="bg-gradient-to-r from-blue-400 to-green-400 text-white font-bold py-2 px-6 rounded-lg hover:from-green-400 hover:to-blue-400 transition-all mt-2">Play Again</button>
        </div>
      )}
    </div>
  );
} 