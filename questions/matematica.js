questions.matematica = _ => [
  {
    topic: "Adição de números naturais",
    name: "Nome dos números somados",
    id: 0,
    script:
      "rns(2, 9, 1);\ndistractors = ['somas', 'minuendos', 'subtraendos', 'fatores', 'dividendos', 'quocientes'];",
    stem: "${ub(n1)} + ${ub(n2)} = ${n1 + n2}<br>\nOs números destacados acima são chamados de:",
    alternatives: { answers: ["parcelas"], distractors: [] },
    explanation:
      "<p>Operação de <b>Adição</b>:</p><br>\n${goldenBorder('<p>parcela + parcela = total ou soma</p>')}\n<p>Você ${ub('soma')} as ${ub('parcelas')} de uma compra para saber o ${ub('total')} a ser pago.</p>\n</!4 algarismos + 3 algarismos>\n<h1 class='font-middle'>Como somar mentalmente:</h1>\n<p>${n1} + ${n2}</p>\n<p>Some o número <b>maior</b> com as partes do número <b>menor</b>:</p>\n<p>O número ${n2} é igual a ${n2c} + ${n2d} + ${n2u}.</p>\n<p>${n1} + ${n2c} = ${r1}</p>\n<p>${r1} + ${n2d} = ${r2}</p>\n<p>${r2} + ${n2u} = <u><b>${r3}</b></u></p>\n</!4 algarismos + 3 algarismos>\n</!Propriedade comutativa>\n${goldenBorder(`<p>Propriedade <b>comutativa</b> da adição:</p><br><p>A ordem das parcelas não altera o total.</p>`)}\n${dinamicExample(() => {rns(3, 20, 1); return `<p>${n1} + ${n2} = ${n2} + ${n1}</p>&darr;<p>${n1} + ${n2} = ${n1 + n2}<br>\n${n2} + ${n1} = ${n2 + n1}</p><br><p>${n1} + ${n2} + ${n3} = ${n3} + ${n2} + ${n1}</p>&darr;<p>${n1} + ${n2} + ${n3} = ${n1 + n2 + n3}<br>\n${n3} + ${n2} + ${n1} = ${n3 + n2 + n1}</p>`;})}\n</!Propriedade comutativa>\n</!Propriedade associativa>\n${goldenBorder(`<p>Propriedade <b>associativa</b> da adição:</p><br><p>Numa adição de três ou mais parcelas, não importa a ordem em que realizamos as somas, o total é o mesmo.</p><br><p>Os parênteses () indicam qual soma deve ser feita primeiro.</p>`)}\n${dinamicExample(() => {\nrns(3, 20, 1); \nreturn `\n<div class='text-align-center'>\n   <p>(${n1} + ${n2}) + ${n3} = ${n1} + (${n2} + ${n3})<br>&darr;</p>\n   <div class='inline-block'>\n      <p>${invisibleText('=')} (${n1} + ${n2}) + ${n3}<br>= ${n1 + n2} + ${n3}<br>= ${n1 + n2 + n3}</div>\n       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n       <div class='inline-block'>\n         <p>${invisibleText('=')} ${n1} + (${n2} + ${n3})<br>= ${n1} + ${n2 + n3}<br>= ${n1 + n2 + n3}\n        </div>\n</div>`})}\n</!Propriedade associativa>\n</!Propriedade do elemento neutro>\n${goldenBorder(`<p>Propriedade do <b>elemento neutro</b> da adição:</p><br><p>Qualquer número somado a 0 será ele mesmo.</p>`)}\n${dinamicExample(() => {const n1 = rn(20, 1); return `<p>${shuffle([n1, 0]).join(' + ')} = ${n1}</p>`})}\n</!Propriedade do elemento neutro>",
    videos: "az6OYFS7AUA++XOz2ex525EE",
  },
  {
    topic: "Adição de números naturais",
    name: "Nome do resultado",
    id: 1,
    script:
      "rns(2, 9, 1);\ndistractors = ['resto ou diferença', 'produto', 'quociente', 'parcela'];",
    stem: "${n1} + ${n2} = ${ub(n1 + n2)}<br>\nO número destacado acima é chamado de:",
    alternatives: { answers: ["total ou soma"], distractors: [] },
  },
  {
    topic: "Adição de números naturais",
    name: "4 algarismos + 3 algarismos",
    id: 2,
    script:
      "ns = shuffle( [ rn(9999, 1000), rn(999, 100) ] );\nt = ns[0] + ns[1];\n\nn1 = max(ns[0], ns[1]);\nn2 = min(ns[0], ns[1]);\n\nn1m = Math.floor(n1 / 1000) * 1000;\nn1c = Math.floor(n1 % 1000  / 100)  * 100;\nn1d = Math.floor(n1 % 100  / 10) * 10;\nn1u = Math.floor(n1 % 10 );\n\nn2c = Math.floor(n2 % 1000  / 100)  * 100;\nn2d = Math.floor(n2 % 100  / 10) * 10;\nn2u = Math.floor(n2 % 10 );\n\nr1 = n1 + n2c;\nr2 = r1 + n2d;\nr3 = r2 + n2u; insertAnswerForm();",
    stem: "${ns[0]} + ${ns[1]} ?",
    alternatives: { answers: ["${t}\n"], distractors: [] },
  },  {
    topic: "Adição de números naturais",
    name: "4 algarismos + 3 algarismos",
    id: 2,
    script:
      "ns = shuffle( [ rn(9999, 1000), rn(999, 100) ] );\nt = ns[0] + ns[1];\n\nn1 = max(ns[0], ns[1]);\nn2 = min(ns[0], ns[1]);\n\nn1m = Math.floor(n1 / 1000) * 1000;\nn1c = Math.floor(n1 % 1000  / 100)  * 100;\nn1d = Math.floor(n1 % 100  / 10) * 10;\nn1u = Math.floor(n1 % 10 );\n\nn2c = Math.floor(n2 % 1000  / 100)  * 100;\nn2d = Math.floor(n2 % 100  / 10) * 10;\nn2u = Math.floor(n2 % 10 );\n\nr1 = n1 + n2c;\nr2 = r1 + n2d;\nr3 = r2 + n2u; insertAnswerForm();",
    stem: "${ns[0]} + ${ns[1]} ?",
    alternatives: { answers: ["${t}\n"], distractors: [] },
  },
  {
    topic: "Adição de números naturais",
    name: "Propriedade comutativa",
    id: 3,
    script: "rns(9, 9, 1);",
    stem: "Exemplificam a propriedade <br><b>comutativa</b> da adição:",
    alternatives: {
      answers: ["${n1} + ${n2} = ${n2} + ${n1}", "${n1} + ${n2} + ${n3} = ${n3} + ${n2} + ${n1}"],
      distractors: [
        "(${n1} + ${n2}) + ${n3} = ${n1} + (${n2} + ${n3})",
        "${shuffle([n1, 0]).join(' + ')} = ${n1}",
      ],
    },
  },
  {
    topic: "Adição de números naturais",
    name: "Propriedade associativa",
    id: 4,
    script: "rns(5, 9, 1);\n",
    stem: "Exemplificam a propriedade <br><b>associativa</b> da adição: ",
    alternatives: {
      answers: ["${shuffle([`(${n1} + ${n2}) + ${n3}`, `${n1} + (${n2} + ${n3})`]).join(' = ')}"],
      distractors: [
        "${n1} + ${n2} = ${n2} + ${n1}",
        "${shuffle([n1, 0]).join(' = ')} = ${n1}",
        "${n1} + ${n2} + ${n3} = ${n1} + ${n3} + ${n2}",
      ],
    },
  },
  {
    topic: "Adição de números naturais",
    name: "Propriedade do elemento neutro",
    id: 5,
    script: "rns(5, 9, 1);rns(5, 9, 1);rns(5, 9, 1);",
    stem: "Exemplificam a propriedade do <br><b>elemento neutro</b> da adição:",
    alternatives: {
      answers: ["${shuffle([n1, 0]).join(' + ')} = ${n1}"],
      distractors: [
        "${n1} + ${n2} = ${n2} + ${n1}",
        "${shuffle([`(${n1} + ${n2}) + ${n3}`, `${n1} + (${n2} + ${n3})`]).join(' = ')}",
        "${n1} + ${n2} = ${n1 + n2}",
        "${n3} + ${n4} = ${n3 + n4}",
      ],
    },
  },
  {
    topic: "Subtração de números naturais",
    name: "Nome do número que diminui",
    id: 6,
    script:
      "rns(2, 9, 1);\ndistractors = ['subtraendo', 'parcela', 'fator', 'dividendo', 'divisor'];",
    stem: "${ub(n1)} - ${n2} = ${n1 + n2}<br>\nO número destacado acima é chamado de:",
    alternatives: { answers: ["minuendo"], distractors: [] },
    explanation:
      "<p>Operação de <b>subtração</b>:</p><br>\n${goldenBorder('<p>minuendo - subtraendo = resto ou diferença</p>')}<br>\n<p><b>Subtra</b>endo é o valor que será <b>subtra</b>ído do minuendo.</p>\n<p><b>Rest</b>o é o que <b>rest</b>a do <b>minu</b>endo após ele ser di<b>minu</b>ído.</p>",
    videos:
      "oSzh7TjIsjs</!Subtração com números positivos e negativos>P3YIiKk0d-M?start=380++8dbPxefZapY++INvgRb1xOjE</!Subtração com números positivos e negativos>",
  },
  {
    topic: "Subtração de números naturais",
    name: "Nome do número que subtrai",
    id: 7,
    script:
      "rns(2, 9, 1);\ndistractors = ['minuendo', 'parcela', 'fator', 'dividendo', 'divisor'];",
    stem: "${n1} - ${ub(n2)} = ${n1 + n2}<br>\nO número destacado acima é chamado de:",
    alternatives: { answers: ["subtraendo"], distractors: [] },
    explanation:
      "</Soma de 2 parcelas>\n<h1 class='font-middle'>Como somar mentalmente:</h1>\n<p>${n1} + ${n2}</p>\n<p>Some o número maior com as partes do número menor:</p>\n<p>O número ${n2} é igual a ${n2c} + ${n2d} + ${n2u}.</p>\n<p>${n1} + ${n2c} = ${r1}</p>\n<p>${r1} + ${n2d} = ${r2}</p>\n<p>${r2} + ${n2u} = <u><b>${r3}</b></u></p>\n</Soma de 2 parcelas>\n</Soma de números positivos e negativos>\n<p>Sempre que você ver um número ${red('negativo')} (-1, -2, -3), pense que ele representa uma ${red('dívida')}.</p>\n<p>Ex: O número -50 representa uma dívida de 50.</p><br> \n<p>Sempre que você ver um número ${green('positivo')} (+1, 1, +2, 2), pense que ele representa um ${green('pagamento')} que você fez.</p><br>\n<p>Fica mais fácil de resolver se você somar todas as suas dívidas com todos os seus pagamentos.</p><br>\n${goldBorder(`\n<p>(${a(ns[0])}) + (${a(ns[1])}) + (${a(ns[2])}) + (${a(ns[3])}) + (${a(`+${ns[4]}`)}) = </p>\n<p>(${red(`+${debt}`)}) + (${a(`+${payment}`)})</p>\n<p>Você devia ${red(debt)} + Pagou ${green(payment)} = <b>${b(t)}</b></p>\n<p>Resultado: <u><b>${t}</b></u></p></p>`)}\n\n</Soma de números positivos e negativos>",
    videos: "az6OYFS7AUA",
  },
  {
    topic: "Subtração de números naturais",
    name: "Nome do resultado",
    id: 8,
    script:
      "rns(2, 9, 1);\ndistractors = ['total ou soma', 'produto', 'quociente', 'minuendo', 'subtraendo'];",
    stem: "${n1} - ${n2} = ${ub(n1 + n2)}<br>\nO número destacado acima é chamado de:",
    alternatives: { answers: ["resto ou diferença"], distractors: [] },
  },
  {
    topic: "Subtração de números naturais",
    name: "4 algarismos - 3 algarismos",
    id: 9,
    script: "ns = shuffle( [ rn(9999, 1000), rn(999, 100) ] );\nt = ns[0] - ns[1];",
    stem: "${ns[0]} - ${ns[1]} =\n</answer-input>",
    alternatives: { answers: ["${t}"], distractors: [] },
  },
  {
    topic: "Multiplicação de números naturais",
    name: "Nome do multiplicando e do multiplicador",
    id: 10,
    script: "rns(2, 9,1);\ndistractors = ['parcelas', 'minuendos', 'subtraendos', 'dividendos'];",
    stem: "${ub(n1)} x ${ub(n2)} = ${n1 * n2}<br>\nOs números destacados acima são chamados de:",
    alternatives: { answers: ["fatores"], distractors: [] },
    explanation:
      "<p>Operação de <b>Multiplicação</b>:</p><br>\n${goldenBorder('<p>Fator x Fator = Produto</p>')}  \n</!Identificação dos múltiplos de um número>\n${goldenBorder('<p>Os múltiplos de um número são os resultados da multiplicação desse número por números naturais.')}\n${dinamicExample(() => {const n = rn(20 , 2); return `<p>Para saber os múltiplos de <b>${n}</b> multiplique-o por números naturais:</p>\n<p>${n} x 1 = ${ub(`${n}`)}<br>${n} x 2 = ${ub(`${n * 2}`)}<br>${n} x 3 = ${ub(`${n * 3}`)}<br>&vellip;</p>\n<p>Ou conte de ${n} em ${n} &rarr; { ${[n, n*2, n*3, n*4, n*5, n*6].join(', ')}... }</p>`})}\n</!Identificação dos múltiplos de um número>\n\n</!Propriedade comutativa>\n${goldenBorder(\"\n<p>Propriedade <b>comutativa</b> da multiplicação:</p><br>\n<p>A ordem dos fatores não altera o produto.</p>\n\")}\n${dinamicExample(() => {\n   rns(3, 20, 2); \n   return `\n   <p>${n1} . ${n2} = ${n2} . ${n1}</p>\n   <p>&darr;</p>\n   <p>${n1} . ${n2} = ${n1 * n2}</p><p>${n2} . ${n1} = ${n2 * n1}</p> \n   <br>\n   <p>${n1} . ${n2} . ${n3} = ${n3} . ${n2} . ${n1}</p>\n   <p>&darr;</p>\n   <p>${n1} . ${n2} . ${n3} = ${n1 * n2 * n3}</p>\n   <p>${n3} . ${n2} . ${n1} = ${n3 * n2 * n1}</p>`\n})}\n</!Propriedade comutativa>",
    videos: "BetgRvNQEC0s",
  },
  {
    topic: "Multiplicação de números naturais",
    name: "Nome do resultado",
    id: 11,
    script:
      "rns(2, 9, 1);\ndistractors = ['total ou soma', 'resto ou diferença', 'quociente', 'fator'];",
    stem: "${n1} x ${n2} = ${ub(n1 * n2)}<br>\nO número destacado acima é chamado de:",
    alternatives: { answers: ["produto"], distractors: [] },
  },
  {
    topic: "Multiplicação de números naturais",
    name: "Notação",
    id: 12,
    script: "rns(14, 9, 1);",
    stem: "São operações de multiplicação:",
    alternatives: {
      answers: ["${n1} x ${n2}", "${n3} . ${n4} ", "${n5}(${n6}) ", "(${n7})(${n8})"],
      distractors: ["${n9} : ${n10}", "${n11} / ${n12}", "${n13} ÷ ${n14}"],
    },
  },
  {
    topic: "Multiplicação de números naturais",
    name: "Tabuada",
    id: 13,
    script: "rns(2, 9, 1);",
    stem: "${n1} x ${n2} = \n</answer-input>",
    alternatives: { answers: ["${n1 * n2}"], distractors: [] },
  },
  {
    topic: "Multiplicação de números naturais",
    name: "2 algarismos x 3 algarismos",
    id: 14,
    script: "n1 = rn(999, 100);\nn2 = rn(99, 10);",
    stem: "${shuffle([`${n1}`, `${n2}`]).join(' x ')} = \n</answer-input>",
    alternatives: { answers: ["${n1 * n2}"], distractors: [] },
  },
  {
    topic: "Multiplicação de números naturais",
    name: "Identificação dos múltiplos de um número",
    id: 15,
    script:
      "number = rn(2, 10);\nf1 = n => isDivisible(n, number);\nrns(5, number * 10, 10, 0, f1);\nanswers = [n1, n2, n3, n4, n5];\nf1 = n => !isDivisible(n, number);\nrns(5, number * 10, 10, 0, f1);\ndistractors = [n1, n2, n3, n4];",
    stem: "São múltiplos de ${number}:",
    alternatives: { answers: [], distractors: [] },
  },
  {
    topic: "Multiplicação de números naturais",
    name: "Propriedade comutativa",
    id: 16,
    script: "rns(3, 9, 2);",
    stem: "${getSynonyms('Exemplificam')} a propriedade <br><b>comutativa</b>:",
    alternatives: {
      answers: ["${n1} . ${n2} = ${n2} . ${n1}", "${n1} . ${n2} . ${n3} = ${n3} . ${n2} . ${n1}"],
      distractors: [
        "${shuffle([`(${n1} . ${n2}) . ${n3}`, `${n1} . (${n2} . ${n3})`]).join(' = ')}",
        "${n1} (${n2} + ${n3}) = ${n1} . ${n2} + ${n1} . ${n3}",
        "${shuffle([n1, 1]).join(' . ')} = ${n1}",
        "${n1} . ${n2} = ${n1} . ${n2}",
      ],
    },
  },
  {
    topic: "Multiplicação de números naturais",
    name: "Propriedade associativa",
    id: 17,
    script: "rns(3, 9, 2);",
    stem: "${getSynonyms('Exibem')} a propriedade <br><b>associativa</b>:",
    alternatives: {
      answers: ["${shuffle([`(${n1} . ${n2}) . ${n3}`, `${n1} . (${n2} . ${n3})`]).join(' = ')}"],
      distractors: [
        "${n1} . ${n2} . ${n3} = ${n3} . ${n2} . ${n1}",
        "${shuffle([n1, 1]).join(' . ')} = ${n1}",
        "${n1} . (${n2} + ${n3}) = ${n1} . ${n2} + ${n1} . ${n3}",
      ],
    },
  },
  {
    topic: "Divisão de números naturais",
    name: "Nome do 1º número",
    id: 18,
    script:
      "rns(2, 9, 1);\ndistractors = ['parcela', 'minuendo', 'subtraendo', 'fator', 'divisor', 'quociente'];",
    stem: "${ub(n1)} / ${n2} = ${tf2(n1 / n2)}<br>\nO nº destacado acima é chamado de:",
    alternatives: { answers: ["dividendo"], distractors: [] },
    explanation:
      "</!Divisibilidade>\n${goldenBorder(`<p>Um número é divisível por outro se a divisão entre eles tiver resto 0.</p>`)}<br>\n<p>8 é divisível por 2 porque 8 / 2 é 4.</p>\n<p>5 não é divisível por 2 porque 5 / 2 é 2,5.</p><br>\n</!Divisibilidade>",
    videos: "GpnfZHB3Rpw",
  },
  {
    topic: "Divisão de números naturais",
    name: "Nome do 2º número",
    id: 19,
    script:
      "rns(2, 9, 1);\ndistractors = ['parcela', 'minuendo', 'subtraendo', 'fator', 'dividendo', 'quociente'];",
    stem: "${n1} / ${ub(n2)} = ${tf2(n1 / n2)}<br>\nO nº destacado acima é chamado de:",
    alternatives: { answers: ["divisor"], distractors: [] },
  },
  {
    topic: "Divisão de números naturais",
    name: "Nome do resultado",
    id: 20,
    script:
      "rns(2, 9, 1);\ndistractors = ['dividendo', 'divisor', 'total ou soma', 'resto ou diferença', 'produto'];",
    stem: "${n1} / ${n2} = ${ub(tf2(n1 / n2))}<br>\nO nº destacado acima é chamado de:",
    alternatives: { answers: ["quociente"], distractors: [] },
  },
  {
    topic: "Divisão de números naturais",
    name: "Notação",
    id: 21,
    script: "rns(14, 9, 1);",
    stem: "São operações de divisão:",
    alternatives: {
      answers: [
        "${n1} ÷ ${n2}",
        "${n3} / ${n4}",
        '<div><span style="border-bottom: 2px solid white;">${n5}</span><br>${n6}</div>',
        "${n7} : ${n8}",
      ],
      distractors: ["${n9} . ${n10}", "${n11}(${n12})", "(${n13})(${n14})"],
    },
  },
  {
    topic: "Divisão de números naturais",
    name: "2 algarismos / 2 algarismos",
    id: 22,
    script:
      "t = 0;\nf1 = () => {\n  n1 = rn(99, 50);\n  n2 = rn(50, 1);\n  t = n1 / n2;\n}\nf2 = () => (t.toString() + '.').split('.')[1].length < 4;\nevalloop(f1, f2);\nt = tf2(t)",
    stem: "${n1} / ${n2} = \n</answer-input>",
    alternatives: { answers: ["${tf2(n1 / n2)}"], distractors: [] },
  },
  {
    topic: "Divisão de números naturais",
    name: "Divisibilidade",
    id: 23,
    script:
      "divisor = rn(10, 2);\nf1 = n => isDivisible(n, divisor);\nrns(3, divisor * 10, 10, 0, f1);\nanswers = [n1, n2, n3];\nf1 = n => !isDivisible(n, n1);\nrns(3, 99, 10, 0, f1);\ndistractors = [n1, n2, n3];",
    stem: "São divisíveis por ${divisor}:",
    alternatives: { answers: [], distractors: [] },
  },
  {
    topic: "Expressões numéricas",
    name: "Prioridade das operações",
    id: 24,
    script:
      "t = 0;\nevalloop(() => {\nrns(9, 10, 1, 0, n => isEven(n));\nn4 = (n1 + n2 * n3) / 2;\nt = [(n1 + n2 * n3) / n4 + n5 * n6] / n7 - (n8 + n9);\n}, () => isInteger(t));",
    stem: "[(${n1} + ${n2} . ${n3}) / ${n4} + ${n5} . ${n6}] / ${n7} - {${n8} + ${n9}} = \n</answer-input>",
    alternatives: { answers: ["${t}"], distractors: [] },
    explanation: "",
    videos: "BhDm2qGy780",
  },
  {
    topic: "Critérios de divisibilidade",
    name: "Por 2",
    id: 25,
    script:
      "rns(8, 9999999999, 1000000000, 0, isEven);\nanswers = [n1, n2, n3, n4];\ndistractors = [n5 - 1, n6 - 1, n7 - 1, n8 - 1];",
    stem: "São divisíveis por 2:",
    alternatives: { answers: [], distractors: [] },
    explanation:
      "</!Por 2>\n${goldenBorder(`<p>Um número ímpar só é divisível por outro número ímpar.</p><p><b>Todo número par é divisível por 2.</b></p>`)}\n</!Por 2>\n</!Por 3>\n${goldenBorder(`<p>Um número é divisível por 3 se a <b>soma de seus algarismos</b> for divisível por 3.</p>`)}<br>\n<p>63141 é divisível por 3 porque a soma de seus algarismos (6 + 3 + 1 + 4 + 1 = 15) é divisível por 3 (15 / 3 = 5).</p>\n</!Por 3>\n</!Por 4>\n${goldenBorder(`<p>É divisível por 4 o número cujos 2 últimos algarismos formarem um número divisível por 4.</p>`)}\n<p>423634123${ub('48')} &rarr; ${ub('48')} / 4 = 12.</p>\n</!Por 4>\n</!Por 5>\n${goldenBorder(`<p>É divisível por 5 o número que terminar em 0 ou 5.</p>`)}\n</!Por 5>\n</!Por 6>\n${goldenBorder(`<p>É divisível por 6 o número que for divisível por 2 e por 3.</p>`)}\n</!Por 6>\n</!Por 7>\n${goldenBorder('<p>Torne um número mais fácil de dividir por 7 subtraindo o dobro de seu último algarismo do número formado pelos seus primeiros algarismos.</p>')}\n${dinamicExample(() => {\n   const n = rn(9999, 1000, 0, n => isDivisible(n, 7)),\n   nn1 = Number(n.toString().substr(0, 3)),\n   nn2 = Number(n.toString()[3]),\n   nn3 = nn1 - nn2 * 2,\n   nn4 = Number(nn3.toString().substr(0, 2)),\n   nn5 = Number(nn3.toString()[2]);\n\n   return `\n      <p>${nn1}${ub(`${nn2}`)}</p>\n      <p>${nn1} - (${nn2} x 2)</p>\n      <p>${nn1} - ${nn2 * 2} = <b>${nn3}</b></p><br>\n      ${isNumber(nn5) ? `\n      <p>${nn3} é mais fácil de dividir por 7 do que ${n} mas você pode tornar a conta cada vez mais fácil repetindo o       processo:</p><br>\n      <p>${nn4}${ub(`${nn5}`)}</p>\n      <p>${nn4} - (${nn5} x 2)</p>\n      <p>${nn4} - ${nn5 * 2} = <b>${nn4 - nn5 * 2}</b></p><br>\n      <p>${nn4 - nn5 * 2} é divisível por 7.</p>\n   ` : `<p>${nn3} é divisível por 7.</p>`}\n`;})}   \n</!Por 7>\n</!Por 8>\n${goldenBorder('<p>É divisível por 8 todo número cujos 3 últimos algarismos formem um número divisível por 8.</p>')}\n<p>7361390572894739437829${ub('432')} &rarr; 432 / 8 = 54\n</!Por 8>\n</!Por 9>\n${goldenBorder(`<p>É divisível por 9 o número cuja soma dos algarismos for divisível por 9.</p>`)}<br>\n<p>A soma dos algarismos do número 908501508 é 36, 36 dividido por 9 é 4.</p>\n</!Por 9>\n</!Por 10, 100, 1000...>\n${goldenBorder('<p>Um número é divisível</p><p>por 10 se <b>terminar em 0</b>,</p><p>por 100 se <b>terminar em 00</b>,</p><p>por 1000 se <b>terminar em 000</b>,</p>&vellip;')}\n</!Por 10, 100, 1000...>\n</!Por 11>\n${goldenBorder('<p>Um número de 2 algarismos é divisível por 11 se ambos os algarismos forem iguais. Ex: 11, 22, 33, 44, 55, 66, 77, 88, 99.</p><br><p>Um número é divisível por 11 se a soma dos algarismos de posição ímpar subtraída da soma dos algarismos de posição par for divisível por 11.</p>')}\n${dinamicExample(() => {\n   const f1 = n => isDivisible(n, 11);\n   const n1 = rn(999, 100, 0, f1);\n   const n2 = rn(9999, 1000, 0, f1);\n   const n3 = rn(99999, 10000, 0, f1);\n\n   return `\n      <p>${n1.toString().split('').map((n, i) => isEven(i) ? green(n) : red(n)).join('')} &rarr; (${green(n1.toString()[0])} + ${green(n1.toString()[2])}) - ${red(n1.toString()[1])} = ${ub(`${Number(n1.toString()[0]) + Number(n1.toString()[2]) - Number(n1.toString()[1])}`)}</p><br>\n<p>${n2.toString().split('').map((n, i) => isEven(i) ? green(n) : red(n)).join('')} &rarr; (${green(n2.toString()[0])} + ${green(n2.toString()[2])}) - (${red(n2.toString()[1])} - ${red(n2.toString()[3])}) = ${ub(`${(Number(n2.toString()[0]) + Number(n2.toString()[2])) - (Number(n2.toString()[1]) + Number(n2.toString()[3]))}`)}</p><br>\n<p>${n3.toString().split('').map((n, i) => isEven(i) ? green(n) : red(n)).join('')} &rarr; (${green(n3.toString()[0])} + ${green(n3.toString()[2])} + ${green(n3.toString()[4])}) - (${red(n3.toString()[1])} + ${red(n3.toString()[3])}) = ${ub(`${(Number(n3.toString()[0]) + Number(n3.toString()[2]) + Number(n3.toString()[4])) - (Number(n3.toString()[1]) + Number(n3.toString()[3]))}`)}</p>\n   `\n})}\n</!Por 11>",
    videos:
      "RAXp2qjhA1M++6YnChMLDcos</!Por 7>S5_GtK03Nro++ehmIjQTNPUo++DVjrGVksrdo</!Por 7></!Por 11>bxtDF4qKBDY++awAmXCFQFxk</!Por 11>",
  },
  {
    topic: "Critérios de divisibilidade",
    name: "Por 3",
    id: 26,
    script:
      "f1 = n => isDivisible(n, 3); \nrns(2, 999999, 100000, 0, f1);\nanswers = [n1, n2];\nf1 = n => !isDivisible(n, 3); \nrns(2, 999999, 100000, 0, f1);\ndistractors = [n1, n2];",
    stem: "São divisíveis por 3:",
    alternatives: { answers: [], distractors: [] },
  },
  {
    topic: "Critérios de divisibilidade",
    name: "Por 4",
    id: 27,
    script:
      "f1 = n => isDivisible(n, 4);\nrns(3, 9999999999, 1000000000, 0, f1);\nanswers = [n1, n2, n3];\nf1 = n => !isDivisible(n, 4);\nrns(3, 9999999999, 1000000000, 0, f1);\ndistractors = [n1, n2, n3];",
    stem: "São divisíveis por 4:",
    alternatives: { answers: [], distractors: [] },
  },
  {
    topic: "Critérios de divisibilidade",
    name: "Por 5",
    id: 28,
    script:
      "f1 = n => n % 5 === 0;\nrns(8, 9999999999, 1000000000, 0, f1);\nanswers = [n1, n2, n3, n4];\ndistractors = [n5 - 1, n6 - 1, n7 - 1, n8 - 1];",
    stem: "São divisíveis por 5:",
    alternatives: { answers: [], distractors: [] },
  },
  {
    topic: "Critérios de divisibilidade",
    name: "Por 6",
    id: 29,
    script:
      "f1 = n => n % 6 === 0;\nrns(3, 9999, 1000, 0, f1);\nanswers = [n1, n2, n3];\nf1 = n => n % 6 !== 0;\nrns(2, 9999, 1000, 0, f1);\ndistractors = [n1, n2, rn(9999, 1000, 0, isOdd)];",
    stem: "São divisíveis por 6:",
    alternatives: { answers: [], distractors: [] },
  },
  {
    topic: "Critérios de divisibilidade",
    name: "Por 7",
    id: 30,
    script:
      "f1 = n => isDivisible(n, 7); \nrns(2, 9999, 1000, 0, f1);\nanswers = [n1, n2];\nf1 = n => !isDivisible(n, 7); \nrns(2, 9999, 1000, 0, f1);\ndistractors = [n1, n2];",
    stem: "São divisíveis por 7:",
    alternatives: { answers: [], distractors: [] },
  },
  {
    topic: "Critérios de divisibilidade",
    name: "Por 8",
    id: 31,
    script:
      "f1 = n => n % 8 === 0;\nrns(3, 9999999999, 1000000000, 0, f1);\nanswers = [n1, n2, n3];\nf1 = n => n % 8 !== 0;\nrns(3, 9999999999, 1000000000, 0, f1);\ndistractors = [n1, n2, n3];",
    stem: "São divisíveis por 8:",
    alternatives: { answers: [], distractors: [] },
  },
  {
    topic: "Critérios de divisibilidade",
    name: "Por 9",
    id: 32,
    script:
      "f1 = n => n % 9 === 0; \nrns(2, 999999, 100000, 0, f1);\nanswers = [n1, n2];\nf1 = n => n % 9 !== 0; \nrns(2, 999999, 100000, 0, f1);\ndistractors = [n1, n2];",
    stem: "São divisíveis por 9:",
    alternatives: { answers: [], distractors: [] },
  },
  {
    topic: "Critérios de divisibilidade",
    name: "Por 10, 100, 1000...",
    id: 33,
    script:
      "f1 = n => n % 10 === 0;\nrns(4, 9999999999, 1000000000, 0, f1);\nanswers = [n1, n2, n3, n4];\nf1 = n => n % 10 !== 0;\nrns(3, 9999999999, 1000000000, 0, f1);\ndistractors = [n1, n2, n3];",
    stem: "São divisíveis por 10:",
    alternatives: { answers: [], distractors: [] },
  },
  {
    topic: "Critérios de divisibilidade",
    name: "Por 11",
    id: 34,
    script:
      "f1 = n => isDivisible(n, 11); \nn1 = rn(999, 100, 0, f1);\nn2 = rn(9999, 1000, 0, f1);\nn3 = rn(99999, 10000, 0, f1);\nanswers = [n1, n2, n3];\nf1 = n => !isDivisible(n, 11); \nn1 = rn(999, 100, 0, f1);\nn2 = rn(9999, 1000, 0, f1);\nn3 = rn(99999, 10000, 0, f1);\ndistractors = [n1, n2, n3];",
    stem: "São divisíveis por 11:",
    alternatives: { answers: [], distractors: [] },
  },
  {
    topic: "Números Primos",
    name: "Identificação de números primos",
    id: 35,
    script:
      "f1 = n => isPrime(n);\nrns(2, 50, 2, 0, f1);\nanswers = [n1, n2];\nf1 = n => !isPrime(n) && isOdd(n);\nrns(2, 50, 2, 0, f1);\ndistractors = [n1, n2];",
    stem: "São primos:",
    alternatives: { answers: [], distractors: [] },
    explanation:
      "${goldenBorder(`<p>É primo o número que ${ub('apenas')} for divisível por 2 números diferentes, o 1 e ele mesmo.</p>`)}\n<p>*O 1 não é primo por ser apenas divisível por 1.</p>\n<p>*Nenhum número par além do 2 é primo.</p>\n<p>*Nenhum número com final 5 além do 5 é primo.</p><br>\n<p>Se um número for ímpar, o jeito mais rápido de descobrir se ele é primo é vendo se ele ${ub('não')} é divisível por nenhum número primo entre 2 e o número que sendo multiplicado por 3 seja maior que ele.</p><br>\n<p>Ex: Para saber se 31 é primo temos que ver se ele não é divisível por nenhum número primo entre 2 e 11 (porque 11 x 3 passa de 31).<p><br>\n<p>Ou seja, se 31 for divisível por 3, 5, ou 7 ele não poderá ser primo.<p><br>\n<p>Quando você não souber de cabeça os números primos entre um número e outro, você terá que dividir pelos números ímpares. No caso do 31 seria por 3, 5, 7 e 9.<p> ",
    videos: "qYww45PyTEs",
  },
  {
    topic: "Números naturais e inteiros",
    name: "Números naturais",
    id: 36,
    script:
      "rns(4, 20, 0);\nanswers = [n1, n2, n3, n4];\nrns(2, 20, 0);\ndistractors = [n1 * -1, n2 * -1, tf2(rn(20, 0, rn(5, 1))), tf2(rn(20, 0, rn(5, 1)))];",
    stem: "Sã números naturais:",
    alternatives: { answers: [], distractors: [] },
    explanation: "",
    videos: "",
  },
  {
    topic: "Números naturais e inteiros",
    name: "Números inteiros",
    id: 37,
    script:
      "rns(4, 20, 0);\nanswers = [n1 * -1, n2 * -1, n3, n4];\nrns(4, 20, 0, rn(5, 1));\ndistractors = [n1, n2, n3, n4].map(n => tf2(n));",
    stem: "São números inteiros:",
    alternatives: { answers: [], distractors: [] },
  },
  {
    topic: "Números naturais e inteiros",
    name: "N*",
    id: 38,
    script:
      "answers = ['{1, 2, 3, ...}'];\ndistractors = ['{0, 1, 2, ...}', '{1, 3, 5, ...}', '{2, 4, 6, ...}', '{2, 3, 5, ...}'];",
    stem: "N* =",
    alternatives: { answers: [], distractors: [] },
  },
  {
    topic: "Números naturais e inteiros",
    name: "Z<sub>+</sub>",
    id: 39,
    script:
      "answers = ['{0, 1, 2, ...}'];\ndistractors = ['{..., -2, -1, 0}', '{..., -3, -2, -1}', '{1, 2, 3, ...}', '{..., -1, 1, 2, ...}'];",
    stem: "Z<sub>+</sub> = ",
    alternatives: { answers: [], distractors: [] },
  },
  {
    topic: "Números naturais e inteiros",
    name: "Z<sup>*</sup><sub>+</sub> ",
    id: 40,
    script:
      "answers = ['{1, 2, 3, ...}'];\ndistractors = ['{..., -2, -1, 0}', '{..., -3, -2, -1}', '{0, 2, 3, ...}', '{..., -2, -1, 1, ...}'];",
    stem: "Z<sup>*</sup><sub>+</sub> ",
    alternatives: { answers: [], distractors: [] },
  },
  {
    topic: "Números naturais e inteiros",
    name: "Z<sub>-</sub>",
    id: 41,
    script:
      "answers = ['{...-2, -1, 0}'];\ndistractors = ['{0, 1, 2...}', '{...-3, -2, -1}', '{1, 2, 3...}', '{...-1, 1, 2...}'];",
    stem: "Z<sub>-</sub> =",
    alternatives: { answers: [], distractors: [] },
  },
  {
    topic: "Números naturais e inteiros",
    name: "Z<sup>*</sup><sub>-</sub> ",
    id: 42,
    script:
      "answers = ['{...-3, -2, -1}'];\ndistractors = ['{...-2, -1, 0}', '{1, 2, 3...}', '{0, 2, 3...}', '{...-2, -1, 1...}'];",
    stem: "Z<sup>*</sup><sub>-</sub> =",
    alternatives: { answers: [], distractors: [] },
  },
];

upSubject();
msg(subjectDisplayName + "!");
