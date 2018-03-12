Hi web designer, we need you to make this tool populair. You can use this freely.

**Yes this piece of software is MIT-licensed**

Help us stop the sleepwet. You can clone or download this software and add this to yourwebsite.

Please add the following code in the body. 
===============================================
    <div class="quiz-container">
      <div class="question" rv-each-question="questions" style="display: none;" rv-data-question="index" rv-show="question.active">
        <div class="question" rv-text="question.question"></div>
        <div class="answers">
          <label rv-each-answer="question.answers">
            <input type="checkbox" rv-data-accepted="answer.accepted" rv-checked="answer.chosen">
            <span rv-text="answer.description"></span>
          </label>
        </div>
<br/>
        <button id="previous" rv-enabled="index | > 0" rv-on-click="prev">Vorige vraag</button>
        <button id="next" rv-enabled="index | beforeLast questions" rv-on-click="next">Volgende vraag</button>
        <button id="submit" rv-data-enabled="index | atLast questions" rv-on-click="check">Verstuur</button>
      </div>

      <div class="result" rv-if="result">
        <span rv-text="result"></span>
      </div>

    </div>

    <script type="text/javascript" src="quiz.js"></script>


=============================

And style the CSS or use the following iframe.

<iframe> #githubpages </iframe>
