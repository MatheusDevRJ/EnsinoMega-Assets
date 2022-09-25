loadRequestedTopic([{
      "topic": "Adição de números naturais",
      "name": "Cálculo Mental 1",
      "id": 1,
      "script": "a = rns(4, 5,1).slice(0, rn(4, 2)).join(\"\");\nb = rns(4, 4, 2, 0, _ => 1, \"a\", \"b\").slice(0, rn(4, 2)).join(\"\");\ninsertAnswerForm();",
      "stem": "${a} + ${b}",
      "alternatives": {
        "answers": ["${Number(a) + Number(b)}"],
        "distractors": []
      },
      "isActive": 0,
      "reviewDate": 217,
      "interval": 4,
      "challenge": {
        "time": 10,
        "goal": 3
      },
      "explanation": "${dinamicExample(_ => { \n  a = Number(rns(4, 5,1).slice(0, rn(4, 3)).join(\"\"));\n  b = rns(4, 4, 2, 0, _ => 1, \"a\", \"b\").slice(0, rn(a.toString().length - 1, 2)).join(\"\");\n  c = decomp(b);\n  return `<p>Técnica para <b>somar</b> mentalmente:</p>\n<p>Some o maior com as <b>partes</b> do menor.</p>\n<p class='ex'>${a} + ${b}</p>\n<p>${b} é o mesmo que  ${c.join(' + ')}</p><br>\n${c.map(n => `<p> ${a} + ${n} = ${a += n}</p>`).join('').replace(a, `<u><b>${a}</b></u>`)}`\n})}"
    }, {
      "topic": "Adição de números naturais",
      "name": "Cálculo Mental 2",
      "id": 2,
      "script": "a = rns(4, 9,1).slice(0, rn(4, 2)).join(\"\");\nb = rns(4, 9, 1, 0, _ => 1, \"a\", \"b\").slice(0, rn(4, 2)).join(\"\");\ninsertAnswerForm();",
      "stem": "${a} + ${b}",
      "alternatives": {
        "answers": ["${Number(a) + Number(b)}"],
        "distractors": []
      },
      "isActive": 0,
      "reviewDate": 220,
      "interval": 1,
      "challenge": {
        "time": 10,
        "goal": 3
      },
      "explanation": "${dinamicExample(_ => { \n  a = Number(rns(4, 9,1).slice(0, rn(4, 3)).join(\"\"));\n  b = rns(4, 9, 1, 0, _ => 1, \"a\", \"b\").slice(0, rn(a.toString().length - 1, 2)).join(\"\");\n  c = decomp(b);\n  return `<p>Técnica para <b>somar</b> mentalmente:</p>\n<p>Some o maior com as <b>partes</b> do menor.</p>\n<p class='ex'>${a} + ${b}</p>\n<p>${b} é o mesmo que  ${c.join(' + ')}</p><br>\n${c.map(n => `<p> ${a} + ${n} = ${a += n}</p>`).join('').replace(a, `<u><b>${a}</b></u>`)}`\n})}"
    }, {
      "topic": "Adição de números naturais",
      "name": "Termos",
      "id": 3,
      "script": "rns(2, 99, 10); t = n1 + n2;\nanswers = [ [n1, n2, t][rn(2)] ];\ninsertAnswerForm();",
      "stem": "${tbl(shuffle([['1ª parcela: ', n1], ['2ª parcela: ', n2], \n[`${['Total', 'Soma'][rn(1)]}: `, t]])).replace(`>${answers[0]}<`, '><b class=\"orange\">?</b><')}",
      "alternatives": {
        "answers": [],
        "distractors": []
      },
      "isActive": 0,
      "reviewDate": 191,
      "interval": 2,
      "explanation": "<p class='ex'>${` ${n1} + ${n2} = ${t} `.replace(` ${answers[0]} `, ` <u class='orange'>${answers[0]}</u> `)}</p>\n<p>parcela + parcela = total ou soma</p>\n${dinamicExample(_ => { \n  rns(2, 99, 10, 0, _ => 1, 'a' ); \n  x = [a1, a2][rn(1)];\n  known = [a1, a2].find(n => n !== x);\n  let t = a1 + a2;\n  return `<p>O total é a <b>soma</b> das 2 parcelas.</p>\n<p>Logo, ao remover uma das parcelas do total, sobrará a outra.</p>\n<p class='ex'>${` ${a1} + ${a2} = ${t}`.replace(` ${x} `, ` <u class='orange'>?</u> `)}</p>\n<p>${t} - ${known} = <u class='orange'><b>${t - known}</b></u></p>`\n})}",
      "challenge": {
        "time": 10,
        "goal": 3
      }
    }, {
      "topic": "Adição de números naturais",
      "name": "Propriedades",
      "id": 5,
      "script": "rns(9, 9, 1);\nanswerCondition = a => {\n  rightGuess = a.split('<!--')[1] === answers[$('.answer').length].split('<!--')[1];\n  if(rightGuess && isOdd($('.answer').length) && $('.answer').length !== answers.length - 1) {\n    learnBtn.scrollIntoView();\n    restartAnimation($('#stem-container'));\n    $('#stem-container').innerHTML = `Exemplificam a propriedade <br><b>${['comutativa', 'associativa'][~~($('.answer').length / 2 + .5)] || 'do elemento neutro'}</b> da adição:`;\n  }\n  return rightGuess;\n}",
      "stem": "Exemplificam a propriedade <br><b id='property'>comutativa</b> da adição:",
      "alternatives": {
        "answers": ["${n1} + ${n2} = ${n2} + ${n1} <!--comunativa-->", "${n1} + ${n2} + ${n3} = ${n3} + ${n2} + ${n1} <!--comunativa-->", "(${n1} + ${n2}) + ${n3} = ${n1} + (${n2} + ${n3}) <!--associativa-->", "${n1} + (${n2} + ${n3}) = (${n1} + ${n2}) + ${n3} <!--associativa-->", "${n1} + 0 = ${n1} <!--elemento neutro-->", "0 + ${n1} = ${n1} <!--elemento neutro-->"],
        "distractors": ["${n1} + (-${n1}) = 0", "- ${n1} + ${n1} = 0"]
      },
      "isActive": 0,
      "reviewDate": 220,
      "interval": 1,
      "explanation": "${dinamicExample(() => {rns(3, 20, 1); return `<p class='ex'>COMUTATIVA<br>A ordem das parcelas <u>NÃO</u> altera a soma.</p><p>${n1} + ${n2} = ${n2} + ${n1}</p>&darr;<p>${n1} + ${n2} = ${n1 + n2}<br>\n${n2} + ${n1} = ${n2 + n1}</p><br><p>${n1} + ${n2} + ${n3} = ${n3} + ${n2} + ${n1}</p>&darr;<p>${n1} + ${n2} + ${n3} = ${n1 + n2 + n3}<br>\n${n3} + ${n2} + ${n1} = ${n3 + n2 + n1}</p>`;})}\n\n${goldenBorder(`<p>Propriedade <b>associativa</b> da adição:</p><br><p>Numa adição de três ou mais parcelas, não importa a ordem em que realizamos as somas, o total é o mesmo.</p><br><p>Os parênteses () indicam qual soma deve ser feita primeiro.</p>`)}\n${dinamicExample(() => {\nrns(3, 20, 1); \nreturn `\n<div class='text-align-center'>\n   <p>(${n1} + ${n2}) + ${n3} = ${n1} + (${n2} + ${n3})<br>&darr;</p>\n   <div class='inline-block'>\n      <p>${invisibleText('=')} (${n1} + ${n2}) + ${n3}<br>= ${n1 + n2} + ${n3}<br>= ${n1 + n2 + n3}</div>\n       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n       <div class='inline-block'>\n         <p>${invisibleText('=')} ${n1} + (${n2} + ${n3})<br>= ${n1} + ${n2 + n3}<br>= ${n1 + n2 + n3}\n        </div>\n</div>`})}\n${goldenBorder(`<p>Propriedade do <b>elemento neutro</b> da adição:</p><br><p>Qualquer número somado a 0 será ele mesmo.</p>`)}\n${dinamicExample(() => {const n1 = rn(20, 1); return `<p>${shuffle([n1, 0]).join(' + ')} = ${n1}</p>`})}"
    }], "Adição de números naturais");

    msg("top!");
