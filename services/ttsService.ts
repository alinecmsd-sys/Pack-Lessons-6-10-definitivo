import { GoogleGenAI, Modality } from "@google/genai";

// Simple in-memory cache to prevent re-fetching the same audio
const audioCache = new Map<string, AudioBuffer>();
let audioContext: AudioContext | null = null;

const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({
      sampleRate: 24000,
    });
  }
  return audioContext;
};

// Helper to decode Base64
const decodeBase64 = (base64: string): Uint8Array => {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

export const playTTS = async (text: string): Promise<void> => {
  const ctx = getAudioContext();

  // Resume context if suspended (browser policy)
  if (ctx.state === 'suspended') {
    await ctx.resume();
  }

  // Check cache first
  if (audioCache.has(text)) {
    const buffer = audioCache.get(text);
    if (buffer) {
      playBuffer(ctx, buffer);
      return;
    }
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (!base64Audio) {
      throw new Error("No audio data received from Gemini");
    }

    const audioBytes = decodeBase64(base64Audio);
    
    // Decode audio data
    // Note: Gemini returns raw PCM-like data or WAV depending on internal encoding, 
    // but the library handles it as part of the inlineData usually wrapped. 
    // For this specific model preview, it usually returns PCM/WAV readable by decodeAudioData.
    const audioBuffer = await ctx.decodeAudioData(audioBytes.buffer);
    
    // Cache it
    audioCache.set(text, audioBuffer);
    
    playBuffer(ctx, audioBuffer);

  } catch (error) {
    console.error("TTS Error:", error);
    // Fallback to browser TTS if Gemini fails or key is missing
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // Browser fallback speed
    window.speechSynthesis.speak(utterance);
  }
};

const playBuffer = (ctx: AudioContext, buffer: AudioBuffer) => {
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.playbackRate.value = 0.9; // Set speed to 0.9 as requested
  source.connect(ctx.destination);
  source.start(0);
};