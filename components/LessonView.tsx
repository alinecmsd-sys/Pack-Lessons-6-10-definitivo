import React from 'react';
import { Lesson } from '../types';
import { AudioButton } from './AudioButton';
import { ExerciseCard } from './ExerciseCard';

interface LessonViewProps {
  lesson: Lesson;
}

export const LessonView: React.FC<LessonViewProps> = ({ lesson }) => {
  return (
    <div className="max-w-4xl mx-auto pb-20 animate-in fade-in duration-500">
      
      {/* Header */}
      <header className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          <span className="text-indigo-600">Lesson {lesson.id}:</span> {lesson.title}
        </h2>
        <p className="text-lg text-slate-600">{lesson.description}</p>
      </header>

      {/* Vocabulary Section */}
      <section className="mb-12">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold">A</span>
          Vocabulary
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {lesson.vocabulary.map((word, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow group">
              <div>
                <p className="font-semibold text-lg text-slate-800">{word.en}</p>
                <p className="text-slate-500 text-sm">{word.pt}</p>
              </div>
              <div className="opacity-60 group-hover:opacity-100 transition-opacity">
                <AudioButton text={word.tts} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Phrases Section */}
      <section className="mb-12">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold">B</span>
          Phrases
        </h3>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          {lesson.phrases.map((phrase, idx) => (
            <div key={idx} className={`p-4 md:p-6 border-b border-slate-50 last:border-0 flex items-center justify-between hover:bg-slate-50 transition-colors ${
              phrase.type === 'interrogative' ? 'bg-orange-50/30' : 
              phrase.type === 'negative' ? 'bg-rose-50/30' : ''
            }`}>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                   <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                     phrase.type === 'interrogative' ? 'bg-orange-100 text-orange-700' :
                     phrase.type === 'negative' ? 'bg-rose-100 text-rose-700' :
                     'bg-emerald-100 text-emerald-700'
                   }`}>
                     {phrase.type}
                   </span>
                </div>
                <p className="text-lg md:text-xl font-medium text-slate-800">{phrase.en}</p>
                <p className="text-slate-500">{phrase.pt}</p>
              </div>
              <AudioButton text={phrase.tts} size="lg" />
            </div>
          ))}
        </div>
      </section>

      {/* Exercises Section */}
      <section>
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">C</span>
          Exercises
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lesson.exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </section>

    </div>
  );
};