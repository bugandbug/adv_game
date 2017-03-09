function genop1(ic) {
  addToOutput(commands[ic].out1);
  commands[ic].completed = true;
  addToOutput(messages.general.questCompleted+ commands[ic].after)
  setAfter(ic);
  setStatus(0);
  return;
}

function genop2(ic) {
  addToOutput(commands[ic].out2);
  setStatus(0);
  return;
}

function startop1() {
  addToOutput(messages['start'].out1);
  commands['start'].completed = true;
  addToOutput(messages.general.questCompleted+commands['start'].after)
  setAfter('start');
  setStatus(0);
  return;
}

function startop2() {
  addToOutput(messages['start'].out2);
  setStatus(0);
  return;
}

function fightop1() {
  if (randomNumber(0,10) >= 2) {
    addToOutput(messages['fight'].out1);
    commands['fight'].fightCount++;
    if (commands['fight'].fightCount >= 5) {
      addToOutput(messages.fight.fightEnd);
      addToOutput(messages.general.questCompleted + commands['fight'].after);
      setAfter('fight');
      addToOutput(messages.general.health+setStatus(40));
      return;
    } else {
      addToOutput(messages.fight.fightCount+commands['fight'].fightCount);
      addToOutput(messages.general.health+setStatus(-1));
      return;
    }
  } else {
    addToOutput(messages['fight'].out2);
    addToOutput(messages.general.health+setStatus(-2));
    return;
  }
}

function fightop2() {
  addToOutput(messages['fight'].out2);
  return;
}

function advop1() {
  commands['adv'].active = true;
  addToOutput(messages.adv.out1)
  return;
}

function advop2() {
  addToOutput(messages['adv'].out2);
  setStatus(-20);
  return;
}

function help() {
  for (var i = 0; i < commands.vldCmds.length; i++) {
    addToOutput(commands.vldCmds[i]);
  }
  commands['help'].active = true
}

function heal() {
  addToOutput(messages.general.health+setStatus(2));
}
