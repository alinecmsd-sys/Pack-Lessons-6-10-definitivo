import React, { useState } from 'react';
import { Volume2, Loader2 } from 'lucide-react';
import { playTTS } from '../services/ttsService';

interface AudioButtonProps {
  text: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AudioButton: React.FC<AudioButtonProps> = ({ text, size = 'md' }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) return;

    setIsPlaying(true);
    try {
      await playTTS(text);
      // Reset state immediately after dispatching play. 
      // The audio plays async, but we want the button to be interactive again soon.
      // A small delay mimics "processing" time visually.
      setTimeout(() => setIsPlaying(false), 500); 
    } catch (err) {
      console.error(err);
      setIsPlaying(false);
    }
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  const btnClasses = {
    sm: "p-1.5",
    md: "p-2",
    lg: "p-3"
  };

  return (
    <button 
      onClick={handlePlay}
      disabled={isPlaying}
      className={`${btnClasses[size]} rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition-colors flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
      aria-label="Play pronunciation"
    >
      {isPlaying ? (
        <Loader2 className={`${iconSizes[size]} animate-spin`} />
      ) : (
        <Volume2 className={iconSizes[size]} />
      )}
    </button>
  );
};