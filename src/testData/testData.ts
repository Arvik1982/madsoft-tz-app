export const testDataArray = [
  {
    id: 0,
    freeQuestion: false,
    questionText: "Что должен знать разработчик?",
    singleAnswer: false,
    answerVariants: {
      firstAnswer: {
        selected: false,
        answerText: "Answer 1.0",
        id: 1,
      },
      secondAnswer: {
        selected: false,
        answerText: "Answer 2.0",
        id: 2,
      },
      thirdAnswer: {
        selected: false,
        answerText: "Answer 3.0",
        id: 3,
      },
    },

    textAnswer: "",
    rightAnswerId: [3, 1],
    statusChecked: "",
  },
  {
    id: 1,
    freeQuestion: false,
    questionText: "Почему небо синее?",
    singleAnswer: true,
    answerVariants: {
      firstAnswer: {
        selected: false,
        answerText: "Answer 1.1",
        id: 1,
      },
      secondAnswer: {
        selected: false,
        answerText: "Answer 2.1",
        id: 2,
      },
      thirdAnswer: {
        selected: false,
        answerText: "Answer 3.1",
        id: 3,
      },
    },
    textAnswer: "",
    rightAnswerId: [2],
    statusChecked: "",
  },
  {
    id: 2,
    freeQuestion: true,
    questionText: "Почему трава зеленая?",
    singleAnswer: true,
    answerVariants: {
      firstAnswer: {
        selected: false,
        answerText: "",
        id: 1,
      },
      secondAnswer: {
        selected: false,
        answerText: "",
        id: 2,
      },
      thirdAnswer: {
        selected: false,
        answerText: "",
        id: 3,
      },
    },
    textAnswer: "",
    rightAnswerId: [],
    statusChecked: "",
  },
  {
    id: 3,
    freeQuestion: false,
    questionText: "Сколько воды в море?",
    singleAnswer: true,
    answerVariants: {
      firstAnswer: {
        selected: false,
        answerText: "Answer 1.3",
        id: 1,
      },
      secondAnswer: {
        selected: false,
        answerText: "Answer 2.3",
        id: 2,
      },
      thirdAnswer: {
        selected: false,
        answerText: "Answer 3.3",
        id: 3,
      },
    },
    textAnswer: "",
    rightAnswerId: [],
    statusChecked: "",
  },
  {
    id: 4,
    freeQuestion: true,
    questionText: "Почему солнце светит?",
    singleAnswer: true,
    answerVariants: {
      firstAnswer: {
        selected: false,
        answerText: "",
        id: 1,
      },
      secondAnswer: {
        selected: false,
        answerText: "",
        id: 2,
      },
      thirdAnswer: {
        selected: false,
        answerText: "",
        id: 3,
      },
    },
    textAnswer: "",
    rightAnswerId: [],
    statusChecked: "",
  },
  {
    id: 5,
    freeQuestion: false,
    questionText: "Сколько звезд в небе?",
    singleAnswer: false,
    answerVariants: {
      firstAnswer: {
        selected: false,
        answerText: "Answer 1.5",
        id: 1,
      },
      secondAnswer: {
        selected: false,
        answerText: "Answer 2.5",
        id: 2,
      },
      thirdAnswer: {
        selected: false,
        answerText: "Answer 3.5",
        id: 3,
      },
    },
    textAnswer: "",
    rightAnswerId: [],
    statusChecked: "",
  },
];
