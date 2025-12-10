import { Lesson } from '../types';

export const lesson6: Lesson = {
  id: 6,
  title: "Opposite Adjectives",
  description: "Learn to describe things using opposites.",
  vocabulary: [
    { en: "big", pt: "grande", tts: "big" },
    { en: "small", pt: "pequeno", tts: "small" },
    { en: "hot", pt: "quente", tts: "hot" },
    { en: "cold", pt: "frio", tts: "cold" },
    { en: "fast", pt: "rápido", tts: "fast" },
    { en: "slow", pt: "lento", tts: "slow" },
    { en: "tall", pt: "alto", tts: "tall" },
    { en: "short", pt: "baixo", tts: "short" },
    { en: "heavy", pt: "pesado", tts: "heavy" },
    { en: "light", pt: "leve", tts: "light" },
    { en: "hard", pt: "duro/difícil", tts: "hard" },
    { en: "soft", pt: "macio", tts: "soft" },
    { en: "clean", pt: "limpo", tts: "clean" },
    { en: "dirty", pt: "sujo", tts: "dirty" },
    { en: "full", pt: "cheio", tts: "full" },
    { en: "empty", pt: "vazio", tts: "empty" },
    { en: "new", pt: "novo", tts: "new" },
    { en: "old", pt: "velho", tts: "old" },
    { en: "rich", pt: "rico", tts: "rich" },
    { en: "poor", pt: "pobre", tts: "poor" }
  ],
  phrases: [
    { en: "The box is big.", pt: "A caixa é grande.", type: "affirmative", tts: "The box is big." },
    { en: "The pillow is not hard.", pt: "O travesseiro não é duro.", type: "negative", tts: "The pillow is not hard." },
    { en: "Is the tea hot?", pt: "O chá está quente?", type: "interrogative", tts: "Is the tea hot?" },
    { en: "My car is fast.", pt: "Meu carro é rápido.", type: "affirmative", tts: "My car is fast." },
    { en: "The room is not dirty.", pt: "O quarto não está sujo.", type: "negative", tts: "The room is not dirty." },
    { en: "Is the glass empty?", pt: "O copo está vazio?", type: "interrogative", tts: "Is the glass empty?" }
  ],
  exercises: [
    { id: "l6-e1", scrambled: ["is", "box", "The", "heavy"], answer: "The box is heavy", translation: "A caixa é pesada.", tts: "The box is heavy" },
    { id: "l6-e2", scrambled: ["is", "coffee", "cold", "My"], answer: "My coffee is cold", translation: "Meu café está frio.", tts: "My coffee is cold" },
    { id: "l6-e3", scrambled: ["not", "tall", "is", "She"], answer: "She is not tall", translation: "Ela não é alta.", tts: "She is not tall" },
    { id: "l6-e4", scrambled: ["car", "Is", "new", "the"], answer: "Is the car new", translation: "O carro é novo?", tts: "Is the car new" },
    { id: "l6-e5", scrambled: ["empty", "is", "bottle", "The"], answer: "The bottle is empty", translation: "A garrafa está vazia.", tts: "The bottle is empty" }
  ]
};

export const lesson7: Lesson = {
  id: 7,
  title: "Countries & Feelings",
  description: "Talk about where people are from and how they feel.",
  vocabulary: [
    { en: "Brazil", pt: "Brasil", tts: "Brazil" },
    { en: "Brazilian", pt: "Brasileiro(a)", tts: "Brazilian" },
    { en: "USA", pt: "EUA", tts: "USA" },
    { en: "American", pt: "Americano(a)", tts: "American" },
    { en: "Japan", pt: "Japão", tts: "Japan" },
    { en: "Japanese", pt: "Japonês(a)", tts: "Japanese" },
    { en: "Italy", pt: "Itália", tts: "Italy" },
    { en: "Italian", pt: "Italiano(a)", tts: "Italian" },
    { en: "France", pt: "França", tts: "France" },
    { en: "French", pt: "Francês(a)", tts: "French" },
    { en: "happy", pt: "feliz", tts: "happy" },
    { en: "sad", pt: "triste", tts: "sad" },
    { en: "tired", pt: "cansado", tts: "tired" },
    { en: "hungry", pt: "com fome", tts: "hungry" },
    { en: "thirsty", pt: "com sede", tts: "thirsty" },
    { en: "angry", pt: "bravo", tts: "angry" }
  ],
  phrases: [
    { en: "I am from Brazil.", pt: "Eu sou do Brasil.", type: "affirmative", tts: "I am from Brazil." },
    { en: "She is not sad today.", pt: "Ela não está triste hoje.", type: "negative", tts: "She is not sad today." },
    { en: "Are you hungry?", pt: "Você está com fome?", type: "interrogative", tts: "Are you hungry?" },
    { en: "They are Japanese.", pt: "Eles são japoneses.", type: "affirmative", tts: "They are Japanese." },
    { en: "We are not tired.", pt: "Nós não estamos cansados.", type: "negative", tts: "We are not tired." },
    { en: "Is he American?", pt: "Ele é americano?", type: "interrogative", tts: "Is he American?" }
  ],
  exercises: [
    { id: "l7-e1", scrambled: ["from", "is", "He", "Italy"], answer: "He is from Italy", translation: "Ele é da Itália.", tts: "He is from Italy" },
    { id: "l7-e2", scrambled: ["very", "happy", "am", "I"], answer: "I am very happy", translation: "Eu estou muito feliz.", tts: "I am very happy" },
    { id: "l7-e3", scrambled: ["Are", "thirsty", "you"], answer: "Are you thirsty", translation: "Você está com sede?", tts: "Are you thirsty" },
    { id: "l7-e4", scrambled: ["not", "is", "She", "angry"], answer: "She is not angry", translation: "Ela não está brava.", tts: "She is not angry" },
    { id: "l7-e5", scrambled: ["French", "are", "They"], answer: "They are French", translation: "Eles são franceses.", tts: "They are French" }
  ]
};

export const lesson8: Lesson = {
  id: 8,
  title: "Prepositions of Place",
  description: "Describing where objects are located.",
  vocabulary: [
    { en: "in", pt: "dentro", tts: "in" },
    { en: "on", pt: "sobre/em cima", tts: "on" },
    { en: "under", pt: "embaixo", tts: "under" },
    { en: "next to", pt: "ao lado de", tts: "next to" },
    { en: "between", pt: "entre", tts: "between" },
    { en: "behind", pt: "atrás", tts: "behind" },
    { en: "in front of", pt: "na frente de", tts: "in front of" },
    { en: "above", pt: "acima", tts: "above" },
    { en: "near", pt: "perto", tts: "near" },
    { en: "table", pt: "mesa", tts: "table" },
    { en: "chair", pt: "cadeira", tts: "chair" },
    { en: "bed", pt: "cama", tts: "bed" },
    { en: "box", pt: "caixa", tts: "box" },
    { en: "desk", pt: "escrivaninha", tts: "desk" }
  ],
  phrases: [
    { en: "Where is the cat?", pt: "Onde está o gato?", type: "interrogative", tts: "Where is the cat?" },
    { en: "The cat is on the bed.", pt: "O gato está em cima da cama.", type: "affirmative", tts: "The cat is on the bed." },
    { en: "The shoes are not under the table.", pt: "Os sapatos não estão embaixo da mesa.", type: "negative", tts: "The shoes are not under the table." },
    { en: "Is the bank next to the park?", pt: "O banco é ao lado do parque?", type: "interrogative", tts: "Is the bank next to the park?" },
    { en: "The pen is in the box.", pt: "A caneta está dentro da caixa.", type: "affirmative", tts: "The pen is in the box." },
    { en: "The dog is not behind the door.", pt: "O cachorro não está atrás da porta.", type: "negative", tts: "The dog is not behind the door." }
  ],
  exercises: [
    { id: "l8-e1", scrambled: ["is", "book", "The", "on", "desk", "the"], answer: "The book is on the desk", translation: "O livro está sobre a mesa.", tts: "The book is on the desk" },
    { id: "l8-e2", scrambled: ["under", "cat", "is", "The", "chair", "the"], answer: "The cat is under the chair", translation: "O gato está embaixo da cadeira.", tts: "The cat is under the chair" },
    { id: "l8-e3", scrambled: ["keys", "Where", "the", "are"], answer: "Where are the keys", translation: "Onde estão as chaves?", tts: "Where are the keys" },
    { id: "l8-e4", scrambled: ["school", "is", "near", "My", "park", "the"], answer: "My school is near the park", translation: "Minha escola é perto do parque.", tts: "My school is near the park" },
    { id: "l8-e5", scrambled: ["not", "is", "ball", "The", "in", "box", "the"], answer: "The ball is not in the box", translation: "A bola não está dentro da caixa.", tts: "The ball is not in the box" }
  ]
};

export const lesson9: Lesson = {
  id: 9,
  title: "Clothes & Seasons",
  description: "What to wear in different weather.",
  vocabulary: [
    { en: "shirt", pt: "camisa", tts: "shirt" },
    { en: "t-shirt", pt: "camiseta", tts: "t-shirt" },
    { en: "pants", pt: "calças", tts: "pants" },
    { en: "shorts", pt: "shorts", tts: "shorts" },
    { en: "dress", pt: "vestido", tts: "dress" },
    { en: "skirt", pt: "saia", tts: "skirt" },
    { en: "shoes", pt: "sapatos", tts: "shoes" },
    { en: "jacket", pt: "jaqueta", tts: "jacket" },
    { en: "hat", pt: "chapéu", tts: "hat" },
    { en: "coat", pt: "casaco", tts: "coat" },
    { en: "Summer", pt: "Verão", tts: "Summer" },
    { en: "Winter", pt: "Inverno", tts: "Winter" },
    { en: "Spring", pt: "Primavera", tts: "Spring" },
    { en: "Autumn", pt: "Outono", tts: "Autumn" }
  ],
  phrases: [
    { en: "I wear a coat in Winter.", pt: "Eu uso casaco no inverno.", type: "affirmative", tts: "I wear a coat in Winter." },
    { en: "She does not wear shorts in Winter.", pt: "Ela não usa shorts no inverno.", type: "negative", tts: "She does not wear shorts in Winter." },
    { en: "Do you like this dress?", pt: "Você gosta deste vestido?", type: "interrogative", tts: "Do you like this dress?" },
    { en: "He wears a t-shirt in Summer.", pt: "Ele usa camiseta no verão.", type: "affirmative", tts: "He wears a t-shirt in Summer." },
    { en: "They are not buying shoes.", pt: "Eles não estão comprando sapatos.", type: "negative", tts: "They are not buying shoes." },
    { en: "Is it cold in Autumn?", pt: "Faz frio no outono?", type: "interrogative", tts: "Is it cold in Autumn?" }
  ],
  exercises: [
    { id: "l9-e1", scrambled: ["wear", "I", "pants", "blue"], answer: "I wear blue pants", translation: "Eu uso calças azuis.", tts: "I wear blue pants" },
    { id: "l9-e2", scrambled: ["jacket", "This", "is", "warm"], answer: "This jacket is warm", translation: "Esta jaqueta é quente.", tts: "This jacket is warm" },
    { id: "l9-e3", scrambled: ["like", "Do", "summer", "you"], answer: "Do you like summer", translation: "Você gosta do verão?", tts: "Do you like summer" },
    { id: "l9-e4", scrambled: ["is", "dress", "green", "The"], answer: "The dress is green", translation: "O vestido é verde.", tts: "The dress is green" },
    { id: "l9-e5", scrambled: ["not", "It", "hot", "is"], answer: "It is not hot", translation: "Não está quente.", tts: "It is not hot" }
  ]
};

export const lesson10: Lesson = {
  id: 10,
  title: "Daily Action Verbs",
  description: "Present Continuous: Actions happening now.",
  vocabulary: [
    { en: "sleeping", pt: "dormindo", tts: "sleeping" },
    { en: "eating", pt: "comendo", tts: "eating" },
    { en: "drinking", pt: "bebendo", tts: "drinking" },
    { en: "reading", pt: "lendo", tts: "reading" },
    { en: "writing", pt: "escrevendo", tts: "writing" },
    { en: "running", pt: "correndo", tts: "running" },
    { en: "walking", pt: "andando", tts: "walking" },
    { en: "cooking", pt: "cozinhando", tts: "cooking" },
    { en: "playing", pt: "brincando/jogando", tts: "playing" },
    { en: "working", pt: "trabalhando", tts: "working" }
  ],
  phrases: [
    { en: "He is sleeping now.", pt: "Ele está dormindo agora.", type: "affirmative", tts: "He is sleeping now." },
    { en: "She is not cooking dinner.", pt: "Ela não está cozinhando o jantar.", type: "negative", tts: "She is not cooking dinner." },
    { en: "Are they playing soccer?", pt: "Eles estão jogando futebol?", type: "interrogative", tts: "Are they playing soccer?" },
    { en: "I am reading a good book.", pt: "Eu estou lendo um bom livro.", type: "affirmative", tts: "I am reading a good book." },
    { en: "We are not watching TV.", pt: "Nós não estamos assistindo TV.", type: "negative", tts: "We are not watching TV." },
    { en: "Is the dog running?", pt: "O cachorro está correndo?", type: "interrogative", tts: "Is the dog running?" }
  ],
  exercises: [
    { id: "l10-e1", scrambled: ["is", "eating", "He", "pizza"], answer: "He is eating pizza", translation: "Ele está comendo pizza.", tts: "He is eating pizza" },
    { id: "l10-e2", scrambled: ["running", "are", "They", "fast"], answer: "They are running fast", translation: "Eles estão correndo rápido.", tts: "They are running fast" },
    { id: "l10-e3", scrambled: ["you", "Are", "working", "now"], answer: "Are you working now", translation: "Você está trabalhando agora?", tts: "Are you working now" },
    { id: "l10-e4", scrambled: ["not", "am", "I", "sleeping"], answer: "I am not sleeping", translation: "Eu não estou dormindo.", tts: "I am not sleeping" },
    { id: "l10-e5", scrambled: ["drinking", "is", "water", "She"], answer: "She is drinking water", translation: "Ela está bebendo água.", tts: "She is drinking water" }
  ]
};

export const allLessons = [lesson6, lesson7, lesson8, lesson9, lesson10];