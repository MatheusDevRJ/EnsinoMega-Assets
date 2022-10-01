function showCuriosity() {
  const div = document.createElement("div");
  div.id = "curiosity";
  div.classList = "sides-margin-30";
  div.style = "transform: var(--transform); animation: transformNone .5s ease 0s 1 forwards;";
  div.innerHTML = `<hr><p>${getCuriosity()}</p>`;
  setAnimation(1, "X");
  $("#question").insertAdjacentElement("beforeend", div);
  if (!autoRemake && !autoNext && sp.speakText) speak($("#curiosity").innerText);
}

function getCuriosity() {
  const curiosities = [
    "<b>Estados Unidos do Brasil</b> foi o primeiro nome oficial do Brasil durante o regime republicano, da Proclamação da República, em 1889, até 1968.",
    "Criado em 1988, <b>Tocantins</b> é o estado <b>mais novo</b> do Brasil.",
    '<b>Rio de Janeiro</b> já foi a <b>capital de Portugal</b>.<br>Em 1763 se tornou a 1ª e única capital europeia fora do território europeu.',
    '<b>Elefantes</b> são os únicos mamíferos que não conseguem saltar.',
    '<b>Borboletas</b> têm 12 mil olhos, enxergam em 360º e veem raios ultravioletas imperceptíveis a nós.',	
  ];

  let curiositiesIndexes = lsGet("curiositiesIndexes");

  if (!curiositiesIndexes || !curiositiesIndexes.length) {
    curiositiesIndexes = shuffle(Object.keys(curiosities));
  }
  const curiosity = curiosities[curiositiesIndexes.shift()];
  lsSet("curiositiesIndexes", curiositiesIndexes);
  return curiosity;
}
