
const rivetsData = {
  prev: function (e, rvData) {
    const self = rvData || this;
    const $this = $(e.currentTarget);
    const index = $this.parent().data('question');

    // first question
    if (index == 0) {
      return;
    }

    self.questions[index].active = false;
    self.questions[index - 1].active = true;
  },

  next: function (e, rvData) {
    const self = rvData || this;
    const $this = $(e.currentTarget);
    const index = $this.parent().data('question');

    // last question
    if (index == self.questions.length - 1) {
      return;
    }

    self.questions[index].active = false;
    self.questions[index + 1].active = true;
  },

  check: function (e, rvData) {
    const self = rvData || this;

    let correct = 0;
    for (let i = 0, n = self.questions.length; i < n; i++) {
      if (self.questions[i].answers.every((answer) => !!answer.chosen === !!answer.accepted)) {
        correct++;
      }
    }

    rivetsData.result = (correct / self.questions.length * 100) + ' %';
  },

  currentQuestion: 0,
  result: false,
  questions: [
    {
      active: true,
      question: 'Wie mag er getapt worden bij de sleepwet?',
      answers: [
        { description: 'De verdachte.' },
        { description: 'Het gezin waarin de verdacht woont.' },
        { description: 'De hele wijk waarin de verdachte woont.', accepted: true }
      ]
    },
    {
      question: 'Wat mag er getapt/gehacked worden door de AIVD?',
      answers: [
        { description: 'Smart TV\'s, Computers, Consoles, Smartphones & tablets.', accepted: true },
        { description: 'Pacemakers, Koffiezet apparaten & TV\'s' },
        { description: 'Apparaten mogen niet gehacked worden door de AIVD' }
      ]
    },
    {
      question: 'Welke data mag de AIVD verzamelen?',
      answers: [
        { description: 'Inhoud van gesprekken.' },
        { description: 'Foto\'s & Metadata.' },
        { description: 'Er is geen duidelijk kader in de wet.', accepted: true }
      ]
    },
    {
      question: 'Hoe lang moet deze data bewaard worden?',
      answers: [
        { description: '6 maanden.' },
        { description: '3 jaar.', accepted: true },
        { description: '10 jaar' }
      ]
    }
  ]
};

window.rivetsData = rivetsData;

rivets.formatters['=='] = (valueA, valueB) => valueA == valueB;
rivets.formatters['<'] = (valueA, valueB) => valueA < valueB;

rivets.formatters['beforeLast'] = (valueA, valueB) => {
  return valueA < valueB.length - 1;
};

rivets.formatters['atLast'] = (valueA, valueB) => {
  return valueA === valueB.length - 1;
};

$(document).ready(() => {
  rivets.bind($('.quiz-container'), rivetsData);
});
