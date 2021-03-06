export default {
  name: "App",
  data () {
    return {
      capsLockEnabled: false,
      keys: [
        [
          {keyName: '`', keyMap: '`', capsKey: '`', classes: 'keys', active: false},
          {keyName: '1', keyMap: '1', capsKey: '1', classes: 'keys', active: false},
          {keyName: '2', keyMap: '2', capsKey: '2', classes: 'keys', active: false},
          {keyName: '3', keyMap: '3', capsKey: '3', classes: 'keys', active: false},
          {keyName: '4', keyMap: '4', capsKey: '4', classes: 'keys', active: false},
          {keyName: '5', keyMap: '5', capsKey: '5', classes: 'keys', active: false},
          {keyName: '^', keyMap: '^', capsKey: '^', classes: 'keys', active: false},
          {keyName: '&', keyMap: '&', capsKey: '&', classes: 'keys', active: false},
          {keyName: '*', keyMap: '*', capsKey: '*', classes: 'keys', active: false},
          {keyName: '(', keyMap: '(', capsKey: '(', classes: 'keys', active: false},
          {keyName: ')', keyMap: ')', capsKey: ')', classes: 'keys', active: false},
          {keyName: '-', keyMap: '-', capsKey: '-', classes: 'keys', active: false},
          {keyName: '=', keyMap: '=', capsKey: '=', classes: 'keys', active: false},
          {keyName: 'Backspace', keyMap: 'Backspace', capsKey: 'Backspace', classes: 'keys backspace_key', active: false}
        ],
        [
          {keyName: 'Tab', keyMap: 'Tab', capsKey: 'Tab', classes: 'keys tab_key', active: false},
          {keyName: 'q', keyMap: 'Q', capsKey: 'Q', classes: 'keys', active: false},
          {keyName: 'w', keyMap: 'W', capsKey: 'W', classes: 'keys', active: false},
          {keyName: 'e', keyMap: 'E', capsKey: 'E', classes: 'keys', active: false},
          {keyName: 'r', keyMap: 'R', capsKey: 'R', classes: 'keys', active: false},
          {keyName: 't', keyMap: 'T', capsKey: 'T', classes: 'keys', active: false},
          {keyName: 'y', keyMap: 'Y', capsKey: 'Y', classes: 'keys', active: false},
          {keyName: 'u', keyMap: 'U', capsKey: 'U', classes: 'keys', active: false},
          {keyName: 'i', keyMap: 'I', capsKey: 'I', classes: 'keys', active: false},
          {keyName: 'o', keyMap: 'O', capsKey: 'O', classes: 'keys', active: false},
          {keyName: 'p', keyMap: 'P', capsKey: 'P', classes: 'keys', active: false},
          {keyName: '{', keyMap: '{', capsKey: '{', classes: 'keys', active: false},
          {keyName: '}', keyMap: '}', capsKey: '}', classes: 'keys', active: false},
          {keyName: '\\', keyMap: '\\', capsKey: '\\', classes: 'keys slash_key', active: false}
        ],
        [
          {keyName: 'Caps Lock', keyMap: 'CapsLock', capsKey: 'Caps Lock', classes: 'keys caps_lock_key', active: false},
          {keyName: 'a', keyMap: 'A', capsKey: 'A', classes: 'keys', active: false},
          {keyName: 's', keyMap: 'S', capsKey: 'S', classes: 'keys', active: false},
          {keyName: 'd', keyMap: 'D', capsKey: 'D', classes: 'keys', active: false},
          {keyName: 'f', keyMap: 'F', capsKey: 'F', classes: 'keys', active: false},
          {keyName: 'g', keyMap: 'G', capsKey: 'G', classes: 'keys', active: false},
          {keyName: 'h', keyMap: 'H', capsKey: 'H', classes: 'keys', active: false},
          {keyName: 'j', keyMap: 'J', capsKey: 'J', classes: 'keys', active: false},
          {keyName: 'k', keyMap: 'K', capsKey: 'K', classes: 'keys', active: false},
          {keyName: 'l', keyMap: 'L', capsKey: 'L', classes: 'keys', active: false},
          {keyName: ';', keyMap: ';', capsKey: ';', classes: 'keys', active: false},
          {keyName: '"', keyMap: '"', capsKey: '"', classes: 'keys', active: false},
          {keyName: 'Enter', keyMap: 'Enter', capsKey: 'Enter', classes: 'keys enter_key', active: false}
        ],
        [
          {keyName: 'Shift', keyMap: 'Shift', capsKey: 'Shift', classes: 'keys shift_key shift_left', active: false},
          {keyName: 'z', keyMap: 'Z', capsKey: 'Z', classes: 'keys', active: false},
          {keyName: 'x', keyMap: 'X', capsKey: 'X', classes: 'keys', active: false},
          {keyName: 'c', keyMap: 'C', capsKey: 'C', classes: 'keys', active: false},
          {keyName: 'v', keyMap: 'V', capsKey: 'V', classes: 'keys', active: false},
          {keyName: 'b', keyMap: 'B', capsKey: 'B', classes: 'keys', active: false},
          {keyName: 'n', keyMap: 'N', capsKey: 'N', classes: 'keys', active: false},
          {keyName: 'm', keyMap: 'M', capsKey: 'M', classes: 'keys', active: false},
          {keyName: '<', keyMap: '<', capsKey: '<', classes: 'keys', active: false},
          {keyName: '>', keyMap: '>', capsKey: '>', classes: 'keys', active: false},
          {keyName: '/', keyMap: '/', capsKey: '/', classes: 'keys', active: false},
          {keyName: '?', keyMap: '?', capsKey: '?', classes: 'keys', active: false},
          {keyName: 'Shift', keyMap: 'Shift', capsKey: 'Shift', classes: 'keys shift_key shift_right', active: false}
        ],
        [
          {keyName: 'Control', keyMap: 'Control', capsKey: 'Control', classes: 'keys ctrl_key', active: false},
          {keyName: 'Option', keyMap: 'Alt', capsKey: 'Option', classes: 'keys opt_key', active: false},
          {keyName: 'Command', keyMap: 'Meta', capsKey: 'Command', classes: 'keys cmd_key', active: false},
          {keyName: '', keyMap: 'Space', capsKey: '', classes: 'keys space_key', active: false},
          {keyName: '<-', keyMap: 'ArrowLeft', capsKey: '<-', classes: 'keys arrow_left', active: false},
          {keyName: '->', keyMap: 'ArrowRight', capsKey: '->', classes: 'keys arrow_right', active: false}
        ]
      ],
      functionKeyCodes: ['Tab', 'Control', 'Alt', 'Meta', 'Space', 'ArrowLeft', 'ArrowRight', 'Shift', 'CapsLock', 'Backspace', 'Enter'],
      shuffleType: 'shuffleType1',
      userInput: ''
    }
  },
  methods: {
    keyDownEventListner (e) {
      // focus on input tag so that every input is taken
      document.getElementById('user-input').focus()
      // if CapsLock is clicked, show capital letters
      if (e.code === 'CapsLock') {
        this.capsLockEnabled = true
      }

      // iterate through all the keys to check which key has been clicked
      for(let i = 0; i<this.keys.length;i++) {
        for(let j = 0; j < this.keys[i].length; j++) {
          if (this.keys[i][j].keyMap.toLocaleLowerCase() === e.key.toLocaleLowerCase() || this.keys[i][j].keyMap.toLocaleLowerCase() === e.code.toLocaleLowerCase()) {
            this.keys[i][j].active = true

            // if key is found and is not a functional key
            if(this.functionKeyCodes.indexOf(this.keys[i][j].keyMap) === -1) {
              this.shuffleKeys()
            }
          }
        }
      }
    },
    keyUpEventListner (e) {
      if (e.code === 'CapsLock') {
        this.capsLockEnabled = false
      }
      // we will remove active class from every key once any key is lifted up
      for(let i = 0; i<this.keys.length;i++) {
        for(let j = 0; j < this.keys[i].length; j++) {
          this.keys[i][j].active = false
        }
      }
    },
    shuffleKeys () {
      let copy = [], n = this.keys.length, i;

      // While there remain elements to shuffle???
      while (n) {
    
        // Pick a remaining element???
        i = Math.floor(Math.random() * n--);

        // to shuffle over rows
        if (this.shuffleType === 'shuffleType1' || this.shuffleType === 'shuffleType3') {
          let copy2 = [], m = this.keys[i].length, j;
          while(m) {
            j = Math.floor(Math.random() * m--);
            copy2.push(this.keys[i].splice(j, 1)[0]);
          }
          this.keys[i] = copy2;
        }

        if (this.shuffleType === 'shuffleType2' || this.shuffleType === 'shuffleType3') {
          // And move it to the new array.
          copy.push(this.keys.splice(i, 1)[0]);
        }
      }
    
      if (this.shuffleType === 'shuffleType2' || this.shuffleType === 'shuffleType3') {
        this.keys = copy;
      }
    },
    shuffleOnClick (pressedKey, index, keyIndex) {
      // A function which modifies terms based on the click

      if(this.functionKeyCodes.indexOf(pressedKey.keyMap) === -1) {
        // if the clicked key is a non-functional key, we will just append it's value to the string

        const c = this.capsLockEnabled ? pressedKey.capsKey : pressedKey.keyName
        this.userInput = this.userInput + c
        this.shuffleKeys()
      } else {

        if (pressedKey.keyMap === 'CapsLock') {
          this.capsLockEnabled = !this.capsLockEnabled
          // next line disables activated class on caps lock
          this.keys[index][keyIndex].active = !this.keys[index][keyIndex].active

        } else if (pressedKey.keyMap === 'Backspace') {
          this.userInput = this.userInput.slice(0,-1)

        } else if (pressedKey.keyMap === 'Space') {
          this.userInput = this.userInput + ' '
        }
      }
    }
  },
  created () {
    window.addEventListener('keydown', this.keyDownEventListner)
    window.addEventListener('keyup', this.keyUpEventListner)
  },
  mounted () {
    document.getElementById('user-input').focus()
  },
  beforeDestroy () {
    window.removeEventListener('keydown', this.keyDownEventListner)
    window.removeEventListener('keyup', this.keyUpEventListner)
  }
}