export interface VocabularyItem {
  en: string;
  pt: string;
  tts: string;
}

export interface PhraseItem {
  en: string;
  pt: string;
  type: 'affirmative' | 'negative' | 'interrogative';
  tts: string;
}

export interface ExerciseItem {
  id: string;
  scrambled: string[];
  answer: string;
  translation: string;
  tts: string;
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  vocabulary: VocabularyItem[];
  phrases: PhraseItem[];
  exercises: ExerciseItem[];
}