import { Lesson } from '../types';

export const lesson11: Lesson = {
  id: 11,
  title: "Verbs: Make & Do",
  description: "Learn when to use 'make' and 'do' in the past simple.",
  vocabulary: [
    { en: "make the bed", pt: "arrumar a cama", tts: "make the bed" },
    { en: "make a mistake", pt: "cometer um erro", tts: "make a mistake" },
    { en: "make a decision", pt: "tomar uma decisão", tts: "make a decision" },
    { en: "make a cake", pt: "fazer um bolo", tts: "make a cake" },
    { en: "do exercise", pt: "fazer exercício", tts: "do exercise" },
    { en: "do a favor", pt: "fazer um favor", tts: "do a favor" },
    { en: "do the ironing", pt: "passar roupa", tts: "do the ironing" },
    { en: "do the housework", pt: "fazer o serviço de casa", tts: "do the housework" }
  ],
  phrases: [
    { en: "I made my bed this morning.", pt: "Eu arrumei minha cama esta manhã.", type: "affirmative", tts: "I made my bed this morning." },
    { en: "She did not do the ironing.", pt: "Ela não passou a roupa.", type: "negative", tts: "She did not do the ironing." },
    { en: "Did you make a mistake?", pt: "Você cometeu um erro?", type: "interrogative", tts: "Did you make a mistake?" },
    { en: "We made a big decision.", pt: "Nós tomamos uma grande decisão.", type: "affirmative", tts: "We made a big decision." },
    { en: "He did a favor for me.", pt: "Ele me fez um favor.", type: "affirmative", tts: "He did a favor for me." },
    { en: "Did they do their homework?", pt: "Eles fizeram a lição de casa?", type: "interrogative", tts: "Did they do their homework?" }
  ],
  exercises: [
    { 
      id: "l11-e1", 
      options: ["I made a chocolate cake.", "I did a chocolate cake."], 
      answer: "I made a chocolate cake.", 
      translation: "Eu fiz um bolo de chocolate.", 
      tts: "I made a chocolate cake." 
    },
    { 
      id: "l11-e2", 
      options: ["Did you make the exercise?", "Did you do the exercise?"], 
      answer: "Did you do the exercise?", 
      translation: "Você fez o exercício?", 
      tts: "Did you do the exercise?" 
    },
    { 
      id: "l11-e3", 
      options: ["She did not make a mistake.", "She did not do a mistake."], 
      answer: "She did not make a mistake.", 
      translation: "Ela não cometeu um erro.", 
      tts: "She did not make a mistake." 
    },
    { 
      id: "l11-e4", 
      options: ["We did the housework together.", "We made the housework together."], 
      answer: "We did the housework together.", 
      translation: "Nós fizemos o serviço de casa juntos.", 
      tts: "We did the housework together." 
    },
    { 
      id: "l11-e5", 
      options: ["He made a favor for us.", "He did a favor for us."], 
      answer: "He did a favor for us.", 
      translation: "Ele nos fez um favor.", 
      tts: "He did a favor for us." 
    }
  ]
};

export const lesson12: Lesson = {
  id: 12,
  title: "Verbs: Take & Pay",
  description: "Past simple expressions with take and pay.",
  vocabulary: [
    { en: "take an umbrella", pt: "levar um guarda-chuva", tts: "take an umbrella" },
    { en: "take some time", pt: "levar um tempo", tts: "take some time" },
    { en: "take a shower", pt: "tomar banho", tts: "take a shower" },
    { en: "take care", pt: "cuidar / tomar cuidado", tts: "take care" },
    { en: "pay the bill", pt: "pagar a conta", tts: "pay the bill" },
    { en: "pay for the meal", pt: "pagar pela refeição", tts: "pay for the meal" },
    { en: "pay attention", pt: "prestar atenção", tts: "pay attention" },
    { en: "pay a fine", pt: "pagar uma multa", tts: "pay a fine" }
  ],
  phrases: [
    { en: "He took his umbrella.", pt: "Ele levou o guarda-chuva dele.", type: "affirmative", tts: "He took his umbrella." },
    { en: "I paid the bill yesterday.", pt: "Eu paguei a conta ontem.", type: "affirmative", tts: "I paid the bill yesterday." },
    { en: "Did you take a shower?", pt: "Você tomou banho?", type: "interrogative", tts: "Did you take a shower?" },
    { en: "She did not pay the fine.", pt: "Ela não pagou a multa.", type: "negative", tts: "She did not pay the fine." },
    { en: "We took care of the dog.", pt: "Nós cuidamos do cachorro.", type: "affirmative", tts: "We took care of the dog." },
    { en: "Did they pay attention?", pt: "Eles prestaram atenção?", type: "interrogative", tts: "Did they pay attention?" }
  ],
  exercises: [
    { 
      id: "l12-e1", 
      options: ["He paid for the meal.", "He took for the meal."], 
      answer: "He paid for the meal.", 
      translation: "Ele pagou pela refeição.", 
      tts: "He paid for the meal." 
    },
    { 
      id: "l12-e2", 
      options: ["Did you pay your umbrella?", "Did you take your umbrella?"], 
      answer: "Did you take your umbrella?", 
      translation: "Você levou seu guarda-chuva?", 
      tts: "Did you take your umbrella?" 
    },
    { 
      id: "l12-e3", 
      options: ["She took a long shower.", "She paid a long shower."], 
      answer: "She took a long shower.", 
      translation: "Ela tomou um banho longo.", 
      tts: "She took a long shower." 
    },
    { 
      id: "l12-e4", 
      options: ["We did not take the bill.", "We did not pay the bill."], 
      answer: "We did not pay the bill.", 
      translation: "Nós não pagamos a conta.", 
      tts: "We did not pay the bill." 
    },
    { 
      id: "l12-e5", 
      options: ["I paid attention in class.", "I took attention in class."], 
      answer: "I paid attention in class.", 
      translation: "Eu prestei atenção na aula.", 
      tts: "I paid attention in class." 
    }
  ]
};

export const lesson13: Lesson = {
  id: 13,
  title: "Verbs: Look & Need",
  description: "Using look and need in mixed tenses (Present & Past).",
  vocabulary: [
    { en: "look forward to", pt: "aguardar ansiosamente", tts: "look forward to" },
    { en: "look in the mirror", pt: "olhar no espelho", tts: "look in the mirror" },
    { en: "look like", pt: "parecer com", tts: "look like" },
    { en: "need money", pt: "precisar de dinheiro", tts: "need money" },
    { en: "need advice", pt: "precisar de conselho", tts: "need advice" },
    { en: "need help", pt: "precisar de ajuda", tts: "need help" },
    { en: "information", pt: "informação", tts: "information" },
    { en: "family", pt: "família", tts: "family" }
  ],
  phrases: [
    { en: "She looks like her mother.", pt: "Ela se parece com a mãe dela.", type: "affirmative", tts: "She looks like her mother." },
    { en: "I needed some money yesterday.", pt: "Eu precisei de dinheiro ontem.", type: "affirmative", tts: "I needed some money yesterday." },
    { en: "We looked for information.", pt: "Nós procuramos por informação.", type: "affirmative", tts: "We looked for information." },
    { en: "Do you need advice?", pt: "Você precisa de conselho?", type: "interrogative", tts: "Do you need advice?" },
    { en: "He did not look in the mirror.", pt: "Ele não olhou no espelho.", type: "negative", tts: "He did not look in the mirror." },
    { en: "They need help now.", pt: "Eles precisam de ajuda agora.", type: "affirmative", tts: "They need help now." }
  ],
  exercises: [
    { 
      id: "l13-e1", 
      options: ["I need help right now.", "I needed help right now."], 
      answer: "I need help right now.", 
      translation: "Eu preciso de ajuda agora mesmo.", 
      tts: "I need help right now." 
    },
    { 
      id: "l13-e2", 
      options: ["She looks like her father.", "She looked like her father."], 
      answer: "She looks like her father.", 
      translation: "Ela se parece com o pai dela.", 
      tts: "She looks like her father." 
    },
    { 
      id: "l13-e3", 
      options: ["We need some advice.", "We needed some advice."], 
      answer: "We needed some advice.", 
      translation: "Nós precisávamos de algum conselho.", 
      tts: "We needed some advice." 
    },
    { 
      id: "l13-e4", 
      options: ["Did you look at the map?", "Do you look at the map?"], 
      answer: "Did you look at the map?", 
      translation: "Você olhou o mapa?", 
      tts: "Did you look at the map?" 
    },
    { 
      id: "l13-e5", 
      options: ["He does not need money.", "He did not need money."], 
      answer: "He did not need money.", 
      translation: "Ele não precisava de dinheiro.", 
      tts: "He did not need money." 
    }
  ]
};

export const lesson14: Lesson = {
  id: 14,
  title: "Verbs: Remember & Forget",
  description: "Talk about memory in the past simple.",
  vocabulary: [
    { en: "birthday", pt: "aniversário", tts: "birthday" },
    { en: "anniversary", pt: "aniversário (de casamento/evento)", tts: "anniversary" },
    { en: "phone number", pt: "número de telefone", tts: "phone number" },
    { en: "wallet", pt: "carteira", tts: "wallet" },
    { en: "keys", pt: "chaves", tts: "keys" },
    { en: "schedule", pt: "agenda/horário", tts: "schedule" },
    { en: "name", pt: "nome", tts: "name" },
    { en: "address", pt: "endereço", tts: "address" }
  ],
  phrases: [
    { en: "I remembered your birthday.", pt: "Eu lembrei do seu aniversário.", type: "affirmative", tts: "I remembered your birthday." },
    { en: "She forgot her keys.", pt: "Ela esqueceu as chaves dela.", type: "affirmative", tts: "She forgot her keys." },
    { en: "Did you remember the schedule?", pt: "Você lembrou da agenda?", type: "interrogative", tts: "Did you remember the schedule?" },
    { en: "We did not forget the wallet.", pt: "Nós não esquecemos a carteira.", type: "negative", tts: "We did not forget the wallet." },
    { en: "He forgot his phone number.", pt: "Ele esqueceu o número de telefone dele.", type: "affirmative", tts: "He forgot his phone number." },
    { en: "Did they remember the address?", pt: "Eles lembraram do endereço?", type: "interrogative", tts: "Did they remember the address?" }
  ],
  exercises: [
    { 
      id: "l14-e1", 
      options: ["I forgot my keys.", "I remember my keys."], 
      answer: "I forgot my keys.", 
      translation: "Eu esqueci minhas chaves.", 
      tts: "I forgot my keys." 
    },
    { 
      id: "l14-e2", 
      options: ["Did she remember the date?", "Did she forget the date?"], 
      answer: "Did she remember the date?", 
      translation: "Ela lembrou da data?", 
      tts: "Did she remember the date?" 
    },
    { 
      id: "l14-e3", 
      options: ["We remembered our anniversary.", "We forgot our anniversary."], 
      answer: "We remembered our anniversary.", 
      translation: "Nós lembramos do nosso aniversário (de casamento).", 
      tts: "We remembered our anniversary." 
    },
    { 
      id: "l14-e4", 
      options: ["He did not forget his wallet.", "He did not remember his wallet."], 
      answer: "He did not forget his wallet.", 
      translation: "Ele não esqueceu a carteira dele.", 
      tts: "He did not forget his wallet." 
    },
    { 
      id: "l14-e5", 
      options: ["They forgot the meeting.", "They remember the meeting."], 
      answer: "They forgot the meeting.", 
      translation: "Eles esqueceram da reunião.", 
      tts: "They forgot the meeting." 
    }
  ]
};

export const lesson15: Lesson = {
  id: 15,
  title: "Verbs: Buy & Sell",
  description: "Buying and selling things in the past.",
  vocabulary: [
    { en: "house", pt: "casa", tts: "house" },
    { en: "car", pt: "carro", tts: "car" },
    { en: "computer", pt: "computador", tts: "computer" },
    { en: "groceries", pt: "compras (de mercado)", tts: "groceries" },
    { en: "ice cream", pt: "sorvete", tts: "ice cream" },
    { en: "phone", pt: "telefone", tts: "phone" },
    { en: "clothes", pt: "roupas", tts: "clothes" },
    { en: "tickets", pt: "ingressos", tts: "tickets" }
  ],
  phrases: [
    { en: "I bought a new car.", pt: "Eu comprei um carro novo.", type: "affirmative", tts: "I bought a new car." },
    { en: "She sold her house.", pt: "Ela vendeu a casa dela.", type: "affirmative", tts: "She sold her house." },
    { en: "Did you buy groceries?", pt: "Você fez compras de mercado?", type: "interrogative", tts: "Did you buy groceries?" },
    { en: "We did not sell the computer.", pt: "Nós não vendemos o computador.", type: "negative", tts: "We did not sell the computer." },
    { en: "He bought an ice cream.", pt: "Ele comprou um sorvete.", type: "affirmative", tts: "He bought an ice cream." },
    { en: "Did they sell the tickets?", pt: "Eles venderam os ingressos?", type: "interrogative", tts: "Did they sell the tickets?" }
  ],
  exercises: [
    { 
      id: "l15-e1", 
      options: ["She sold her old car.", "She bought her old car."], 
      answer: "She sold her old car.", 
      translation: "Ela vendeu o carro velho dela.", 
      tts: "She sold her old car." 
    },
    { 
      id: "l15-e2", 
      options: ["Did you buy the tickets?", "Did you sell the tickets?"], 
      answer: "Did you buy the tickets?", 
      translation: "Você comprou os ingressos?", 
      tts: "Did you buy the tickets?" 
    },
    { 
      id: "l15-e3", 
      options: ["We bought some fresh clothes.", "We bought some fresh groceries."], 
      answer: "We bought some fresh groceries.", 
      translation: "Nós compramos mantimentos frescos.", 
      tts: "We bought some fresh groceries." 
    },
    { 
      id: "l15-e4", 
      options: ["He did not sell his phone.", "He did not buy his phone."], 
      answer: "He did not sell his phone.", 
      translation: "Ele não vendeu o telefone dele.", 
      tts: "He did not sell his phone." 
    },
    { 
      id: "l15-e5", 
      options: ["I bought a chocolate ice cream.", "I sold a chocolate ice cream."], 
      answer: "I bought a chocolate ice cream.", 
      translation: "Eu comprei um sorvete de chocolate.", 
      tts: "I bought a chocolate ice cream." 
    }
  ]
};

export const allLessons = [lesson11, lesson12, lesson13, lesson14, lesson15];