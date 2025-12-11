import React, { useState } from 'react';
import { Menu, X, ChevronRight, GraduationCap } from 'lucide-react';
import { allLessons, lesson11 } from './data/lessons';
import { LessonView } from './components/LessonView';
import { Lesson } from './types';

function App() {
  const [currentLesson, setCurrentLesson] = useState<Lesson>(lesson11);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLessonChange = (lesson: Lesson) => {
    setCurrentLesson(lesson);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 p-4 flex justify-between items-center sticky top-0 z-30">
        <div className="flex items-center gap-2 font-bold text-indigo-600 text-xl">
          <GraduationCap className="w-6 h-6" />
          <span>EngLearn</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation (Desktop & Mobile Drawer) */}
      <aside className={`
        fixed inset-y-0 left-0 z-20 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:block
        ${isMobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
      `}>
        <div className="p-6 h-full flex flex-col">
          <div className="hidden md:flex items-center gap-2 font-bold text-indigo-600 text-2xl mb-10">
            <GraduationCap className="w-8 h-8" />
            <span>EngLearn</span>
          </div>

          <nav className="space-y-2 flex-1 overflow-y-auto">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2">Course Modules (Pack 3)</p>
            {allLessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => handleLessonChange(lesson)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentLesson.id === lesson.id
                    ? 'bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-200'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span className={`flex items-center justify-center w-6 h-6 rounded text-xs font-bold ${
                   currentLesson.id === lesson.id ? 'bg-indigo-200 text-indigo-800' : 'bg-slate-100 text-slate-500'
                }`}>
                  {lesson.id}
                </span>
                <span className="text-left flex-1 truncate">{lesson.title}</span>
                {currentLesson.id === lesson.id && <ChevronRight className="w-4 h-4 text-indigo-400" />}
              </button>
            ))}
          </nav>
          
          <div className="mt-auto pt-6 border-t border-slate-100">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <p className="text-xs font-medium text-slate-500 mb-1">Progress</p>
              <div className="w-full bg-slate-200 rounded-full h-1.5 mb-2">
                <div 
                  className="bg-indigo-500 h-1.5 rounded-full transition-all duration-500" 
                  style={{ width: `${((currentLesson.id - 10) / 5) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-slate-400">Lesson {currentLesson.id - 10} of 5</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 bg-slate-50 md:h-screen md:overflow-y-auto">
        <div className="p-4 md:p-8 lg:p-12">
          <LessonView lesson={currentLesson} />
        </div>
      </main>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-10 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default App;