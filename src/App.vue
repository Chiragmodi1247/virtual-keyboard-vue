<template>
  <div class="App">
    <div class="container">
      <div class="content">
        <h2 class="typewriter">Welcome to the most awesome virtual keyboard!! Start Typing...</h2>
        <input class="text" id="user-input" type="text" v-model="userInput" />
      </div>
      <div class="keyboard_wrapp">
        <div class="keyboard_keys">
          <div v-for="index in keys.length" :key="index" class="row">
            <div v-for="(myKey,keyIndex) in keys[index-1]" 
              :key="keyIndex + myKey.keyName" 
              :class="['neon-button', myKey.classes, {'active': myKey.active}]"
              @click="() => shuffleOnClick(myKey, index-1, keyIndex)" >
                {{capsLockEnabled ? myKey.capsKey : myKey.keyName}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shuffle-type">
      <h2>Shuffle Type</h2>
      <input type=radio v-model="shuffleType" value="shuffleType1">
      <label for="rdo1" class="radio-label" > <span class="radio-border"></span> Type 1 </label>
      <br>
      <input type=radio v-model="shuffleType" value="shuffleType2">
      <label for="rdo2" class="radio-label" ><span class="radio-border"></span> Type 2 </label>
      <br>
      <input type=radio v-model="shuffleType" value="shuffleType3">
      <label for="rdo3" class="radio-label" ><span class="radio-border"></span> Type 3 </label>
    </div>
  </div>
</template>

<script src="./App.js"></script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');

:root {
  --clr-neon: hsl(317 100% 54%);
  --clr-bg: hsl(323 21% 16%);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: grid;
  background: var(--clr-bg);
  color: var(--clr-neon);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Lato', sans-serif;
  transition: .2s;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 10px;
}

.content {
  padding-top: 20px;
  height: 200px;
  width: 80vw;
  text-align: center;
}

.row {
    display: flex;
}

.keys {
    width: 60px;
    height: 60px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px;
    transition: .2s;
    z-index: 5;
    cursor: pointer;
    border-radius: 2px;
}

.backspace_key {
    width: 120px;
}

.tab_key {
    width: 90px;
}

.slash_key {
    width: 90px;
}

.caps_lock_key {
    width: 128px;
}

.enter_key {
    width: 120px;
}

.shift_key {
    width: 124px;
}

.space_key {
    max-width: 600px;
    width: 100%;
}

.ctrl_key {
    width: 80px;
}
.opt_key {
    width: 80px;
}
.cmd_key {
    width: 90px;
}

.typewriter {
  width: 60vw;
  color: var(--clr-neon);
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 6s steps(100, end),
    blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  0% { width: 0 }
  100% { width: 60vw }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}


@media only screen and (max-width: 1000px) {
  .content {
    width: 100%;
  }
  .keys {
    width: 40px;
    height: 40px;
    margin: 2px;
  }
  .backspace_key {
      width: 100px;
  }
  .tab_key {
    width: 70px;
  }

  .slash_key {
      width: 70px;
  }

  .caps_lock_key {
      width: 90px;
      font-size: 0.8em;
  }

  .enter_key {
      width: 94px;
  }

  .shift_key {
      width: 92px;
  }

  .space_key {
    width: 300px;
  }

  .ctrl_key {
      width: 70px;
  }
  .opt_key {
      width: 70px;
  }
  .cmd_key {
      width: 90px;
  }
  .arrow_left {
    width: 60px;
  }
  .arrow_right {
    width: 60px;
  }

  .typewriter {
    display: none;
  }
}

.text {
  width: 100%;
  height: 90px;
  margin-bottom: 30px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 26px;
  padding-left: 10px;
  transition: .2s;
  color: var(--clr-neon);
}

.keys.active {
  background: var(--clr-neon);
  color: var(--clr-bg);
}

body.active {
    background-color: rgb(54,54,54);
}

.night_mode {
    width: 80px;
    height: 30px;
    background-color: #e6e6e6;
    position: absolute;
    right: 25px;
    top: 25px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: .2s;
}

/* neon code */

.neon-button {
  cursor: pointer;
  text-decoration: none;
  color: var(--clr-neon);
  border: var(--clr-neon) 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;

  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;

  box-shadow: inset 0 0 0.5em 0 var(--clr-neon), 0 0 0.5em 0 var(--clr-neon);

  position: relative;
}

.neon-button::before {
  pointer-events: none;
  content: "";
  position: absolute;
  background: var(--clr-neon);
  top: 120%;
  left: 0;
  width: 100%;
  height: 100%;

  transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
  filter: blur(1em);
  opacity: 0.7;
}

.neon-button::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 2em 0.5em var(--clr-neon);
  opacity: 0;
  background-color: var(--clr-neon);
  z-index: -1;
  transition: opacity 100ms linear;
}

.neon-button:hover,
.neon-button:focus {
  color: var(--clr-bg);
  text-shadow: none;
}

.neon-button:hover::before,
.neon-button:focus::before {
  opacity: 1;
}
.neon-button:hover::after,
.neon-button:focus::after {
  opacity: 1;
}

.shuffle-type {
  position: absolute;
  bottom: 100px;
  left: calc(50vw - 80px);
  text-align: center;
}
</style>
