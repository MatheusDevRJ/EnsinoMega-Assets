requestedTopicCallback([{"topic":"Subtração de números naturais","name":"Termos","id":8,"script":"rns(2, 99, 10); \nt = n1 - n2;\nanswers = [ [n1, n2, t][rn(2)] ];\ninsertAnswerForm();","stem":"${tbl(shuffle([['Minuendo: ', n1], ['Subtraendo: ', n2], \n[`${['Resto', 'Diferença'][rn(1)]}: `, t]])).replace(`>${answers[0]}<`, '><b class=\"orange\">?</b><')}","alternatives":{"answers":[],"distractors":[]},"isActive":1,"reviewDate":193,"interval":1,"explanation":"<p class=\"ex\">${n1} - ${n2} = ${t}\n<br>\nminuendo - subtraendo = resto ou diferença\n</p>\n\n<p>O minuendo é o número que diminui.</p>\n<p_>Ele também é chamado de diminuendo.</p_>\n\n<p_>O subtraendo é o número que subtrai.</p_>\n\n<p_>O resultado da subtração é chamado de resto ou diferença.</p_>\n\n${dinamicExample(_ => {\n\nconst a1 = rn(20, 5),\na2 = rn(a1 - 2, 1),\nt = a1 - a2;\n\nreturn `\n<p_>Na conta:</p_>\n\n<p_>${a1} - ${a2} = ${t}</p_>\n\n<p_>${a1} é o minuendo porque ele diminui para ${t}.</p_>\n\n<p_>${a2} é o subtraendo porque ele subtrai ${a2} unidades do minuendo.</p_>\n\n<p_>${t} é a diferença porque a diferença entre o ${a1} e o ${a2} é que o ${a1} tem ${t} unidades a mais.</p_>\n\n<p_>Se o minuendo <b>perdesse</b> ${t} unidades, ele se tornaria igual ao subtraendo e a diferença seria 0.</p_>\n\n<p_>${a1} - ${t} = ${a2}</p_>\n\n<p_>Se o subtraendo <b>ganhasse</b> mais ${t} unidades, ele se tornaria igual ao minuendo e a diferença seria 0.</p_>\n\n<p_>${a2} + ${t} = ${a1}</p_>\n\n<p_><b>Dica</b>: Pense sempre no resto/diferença como sendo o que o minuendo possui <b>A MAIS</b> que o subtraendo.</p_>\n`})}\n\n${dinamicExample(_ => {\n\nconst a1 = rn(20, 5),\na2 = rn(a1 - 2, 1),\nt = a1 - a2;\n\nreturn `\n<p_>Na conta:</p_>\n\n<p_>minuendo - ${a2} = ${t}</p_>\n\n<details>\n\n<summary><p_>Quem é o minuendo?</p_></summary>\n\n<p_>O minuendo tem ${t} unidades a mais que o ${a2}.</p_>\n\n<p_>Logo ${a2} + ${t} = minuendo.</p_>\n\n<p_>O minuendo é ${a1}.</p_>\n\n</details>\n`})}\n\n${dinamicExample(_ => {\n\nconst a1 = rn(20, 5),\na2 = rn(a1 - 2, 1),\nt = a1 - a2;\nreturn `\n<p_>Na conta:</p_>\n\n<p_>${a1} - subtraendo = ${t}</p_>\n\n<details>\n\n<summary><p_>Quem é o subtraendo?</p_></summary>\n\n<p_>O minuendo tem ${t} unidades a mais que o subtraendo.</p_>\n\n<p_>Logo ${a1}<sub>minuendo</sub> - ${t}<sub>diferença</sub> = ${a2}<sub>subtraendo</sub>.</p_>\n\n</details>\n`})}","challenge":{"time":10,"goal":3},"annotations":"r..."},{"topic":"Subtração de números naturais","name":"Cálculo mental 1","id":9,"script":"a = rns(4, 9, 3).slice(0, rn(4, 2)).join(\"\");\nb = a.split('').map(n => rn(Number(n) - 1, 1)).join(\"\");\ninsertAnswerForm();","stem":"${a} - ${b}","alternatives":{"answers":["${a - b}"],"distractors":[]},"isActive":1,"reviewDate":230,"interval":4,"explanation":"${dinamicExample(_ => { \na = rns(4, 9, 3).slice(0, rn(4, 2)).join(\"\");\nb = a.split('').map(n => rn(Number(n) - 1, 1)).join(\"\");\n  c = decomp(b);\n  return `<p>Técnica para <b>subtrair</b> mentalmente:</p>\n<p>Subtraia do minuendo as <b>partes</b> do subtraendo.</p>\n<p class='ex'>${a} - ${b}</p>\n<p>${b} é o mesmo que  ${c.join(' + ')}</p><br>\n${c.map(n => `<p> ${a} - ${n} = ${a -= n}</p>`).join('').replace(a, `<u><b>${a}</b></u>`)}`\n})}"},{"topic":"Subtração de números naturais","name":"Cálculo mental 2","id":10,"script":"nums = [Number(rns(4, 9, 1).slice(0, rn(4, 2)).join(\"\")),\nNumber(rns(4, 9, 1).slice(0, rn(4, 2)).join(\"\"))];\na = max(...nums);\nb = min(...nums);\ninsertAnswerForm();","stem":"${a} - ${b}","alternatives":{"answers":["${a - b}"],"distractors":[]},"isActive":1,"reviewDate":229,"interval":2,"explanation":"${dinamicExample(_ => { \nnums = [Number(rns(4, 9, 1).slice(0, rn(4, 2)).join(\"\")),\nNumber(rns(4, 9, 1).slice(0, rn(4, 2)).join(\"\"))];\na = max(...nums);\nb = min(...nums);\n  c = decomp(b);\n  return `<p>Técnica para <b>subtrair</b> mentalmente:</p>\n<p>Subtraia do minuendo as <b>partes</b> do subtraendo.</p>\n<p class='ex'>${a} - ${b}</p>\n<p>${b} é o mesmo que  ${c.join(' + ')}</p><br>\n${c.map(n => `<p> ${a} - ${n} = ${a -= n}</p>`).join('').replace(a, `<u><b>${a}</b></u>`)}`\n})}"}], "Subtração de números naturais");