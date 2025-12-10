import React, { useState, useEffect } from 'react';
import { RefreshCw, CheckCircle2, XCircle } from 'lucide-react';
import { ExerciseItem } from '../types';
import { AudioButton } from './AudioButton';

interface ExerciseCardProps {
  exercise: ExerciseItem;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  useEffect(() => {
    resetExercise();
  }, [exercise]);

  const resetExercise = () => {
    // Shuffle logic
    const shuffled = [...exercise.scrambled].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled);
    setSelectedWords([]);
    setStatus('idle');
  };

  const handleWordClick = (word: string, from: 'available' | 'selected', index: number) => {
    if (status === 'correct') return;
    setStatus('idle'); // Reset status on modification

    if (from === 'available') {
      const newAvailable = [...availableWords];
      newAvailable.splice(index, 1);
      setAvailableWords(newAvailable);
      setSelectedWords([...selectedWords, word]);
    } else {
      const newSelected = [...selectedWords];
      newSelected.splice(index, 1);
      setSelectedWords(newSelected);
      setAvailableWords([...availableWords, word]);
    }
  };

  const checkAnswer = () => {
    const userAnswer = selectedWords.join(' ');
    // Simple normalization: remove extra spaces
    if (userAnswer.trim() === exercise.answer.trim()) {
      setStatus('correct');
    } else {
      setStatus('incorrect');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col gap-4">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Scramble</h4>
        <button 
          onClick={resetExercise}
          className="text-slate-400 hover:text-indigo-600 transition-colors"
          title="Reset"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      <p className="text-slate-600 italic text-sm mb-2">Translate: "{exercise.translation}"</p>

      {/* Answer Drop Area */}
      <div className={`min-h-[60px] p-4 rounded-lg border-2 border-dashed flex flex-wrap gap-2 items-center transition-colors ${
        status === 'correct' ? 'border-emerald-400 bg-emerald-50' : 
        status === 'incorrect' ? 'border-rose-300 bg-rose-50' : 'border-slate-300 bg-slate-50'
      }`}>
        {selectedWords.length === 0 && (
          <span className="text-slate-400 text-sm select-none w-full text-center">Tap words to build the sentence</span>
        )}
        {selectedWords.map((word, idx) => (
          <button
            key={`${word}-${idx}`}
            onClick={() => handleWordClick(word, 'selected', idx)}
            className="bg-white px-3 py-1.5 rounded-md shadow-sm border border-indigo-100 text-indigo-700 font-medium hover:bg-red-50 hover:text-red-600 transition-all animate-in fade-in zoom-in duration-200"
          >
            {word}
          </button>
        ))}
      </div>

      {/* Feedback & Actions */}
      <div className="h-8 flex items-center gap-2">
        {status === 'correct' && (
          <div className="flex items-center gap-2 text-emerald-700 font-medium animate-in slide-in-from-left-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>Correct!</span>
            <AudioButton text={exercise.tts} size="sm" />
          </div>
        )}
        {status === 'incorrect' && (
          <div className="flex items-center gap-2 text-rose-600 font-medium animate-in slide-in-from-left-2">
            <XCircle className="w-5 h-5" />
            <span>Try again.</span>
          </div>
        )}
      </div>

      {/* Available Words Bank */}
      <div className="flex flex-wrap gap-2 mt-2">
        {availableWords.map((word, idx) => (
          <button
            key={`${word}-${idx}`}
            onClick={() => handleWordClick(word, 'available', idx)}
            className="bg-slate-100 px-3 py-1.5 rounded-md text-slate-700 font-medium hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
          >
            {word}
          </button>
        ))}
      </div>

      <button
        onClick={checkAnswer}
        disabled={selectedWords.length === 0 || status === 'correct'}
        className={`w-full py-3 rounded-lg font-semibold transition-all ${
          status === 'correct' 
            ? 'bg-emerald-500 text-white cursor-default'
            : 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed'
        }`}
      >
        {status === 'correct' ? 'Great Job!' : 'Check Answer'}
      </button>
    </div>
  );
};