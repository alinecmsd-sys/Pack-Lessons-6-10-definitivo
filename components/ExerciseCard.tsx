import React, { useState, useEffect } from 'react';
import { Volume2, CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { ExerciseItem } from '../types';
import { playTTS } from '../services/ttsService';

interface ExerciseCardProps {
  exercise: ExerciseItem;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    resetExercise();
  }, [exercise]);

  const resetExercise = () => {
    setStatus('idle');
    setSelectedOption(null);
  };

  const handlePlayAudio = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    try {
      await playTTS(exercise.tts);
      setTimeout(() => setIsPlaying(false), 500);
    } catch (err) {
      console.error(err);
      setIsPlaying(false);
    }
  };

  const handleOptionClick = (option: string) => {
    if (status === 'correct') return;
    
    setSelectedOption(option);
    
    if (option === exercise.answer) {
      setStatus('correct');
    } else {
      setStatus('incorrect');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col gap-4">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Listening Practice</h4>
      </div>

      <div className="flex flex-col items-center justify-center py-6 bg-slate-50 rounded-lg border border-slate-100 mb-2">
        <button
          onClick={handlePlayAudio}
          disabled={isPlaying}
          className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition-colors shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-200"
          aria-label="Play exercise audio"
        >
          {isPlaying ? (
            <Loader2 className="w-8 h-8 animate-spin" />
          ) : (
            <Volume2 className="w-8 h-8" />
          )}
        </button>
        <p className="mt-3 text-sm text-slate-500 font-medium">Listen and choose the correct sentence</p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {exercise.options.map((option, idx) => {
          let btnClass = "p-4 rounded-lg border-2 text-left font-medium transition-all duration-200 ";
          
          if (status === 'correct' && option === exercise.answer) {
            btnClass += "border-emerald-500 bg-emerald-50 text-emerald-800";
          } else if (status === 'incorrect' && option === selectedOption) {
            btnClass += "border-rose-300 bg-rose-50 text-rose-800";
          } else if (status === 'correct' && option !== exercise.answer) {
            btnClass += "border-slate-100 bg-white text-slate-400 opacity-50";
          } else {
            btnClass += "border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50";
          }

          return (
            <button
              key={idx}
              onClick={() => handleOptionClick(option)}
              disabled={status === 'correct'}
              className={btnClass}
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Feedback Area */}
      <div className="min-h-[2rem] flex items-center">
        {status === 'correct' && (
          <div className="flex items-center gap-2 text-emerald-700 font-medium animate-in slide-in-from-left-2 w-full">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span>Correct!</span>
            <span className="text-xs text-emerald-600 ml-auto italic border-l border-emerald-200 pl-2">
              "{exercise.translation}"
            </span>
          </div>
        )}
        {status === 'incorrect' && (
          <div className="flex items-center gap-2 text-rose-600 font-medium animate-in slide-in-from-left-2">
            <XCircle className="w-5 h-5" />
            <span>Incorrect. Listen again.</span>
          </div>
        )}
      </div>
    </div>
  );
};