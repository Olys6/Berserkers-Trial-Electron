//Snake Game

//requirements
    // HTML
        //Add Title and Current score elements

    //JS
        // create a grid in JS
        //have a start game button function that plays everyhing listed below 
        // make Pyramid Head.gif move in the grid with a trail of torment.gif of 3 boxes
        // have pyramid head move with arrow keys and/or 'WASD'
        // character will rotate and it's trail will when it changes direction!
        // function to make a random person appear on the screen with Math.random
        // when character is in the same square as the random object, remove the object and call function again
        // when character consumes the object have the trail length be +1
        // when character touches the edge have the game end
        // once game ends show end game score

// frogger
    // HTML
        // add Title and level counter

    // JS
        // create Grid
        // create movement for survivor
        // obstacles will be zombies.gif and crawling zombies.gif that you have to jump on cars to survive
        // math.random to find out which zombie will show up between 3 different zombies
        // if the character is in the same position as a zombie they die and go back to the start
        // once the survivor is on one of the four armouries they go to the next level
        // next level will have faster moving zombies

// PAC-MAN
    // Title and current score

//JS
    // //Create Grid
    // //create Movement for Viking
    // current score will be skulls drunken blood from
    // create map
    // the ghosts will be knights (and/or maybe samurai)
    // once Viking consumes his Beserk potion have the knights panic and disarmed(if possible)
    // when viking is on the same spot on the grid as a knight sound effects of swords hitting no matter if viking has gone beserk or not
    // have two spots on the map be ports so that the viking can take a longboat to the other port on the map
    // when the viking reaches the left or right side of the map have him go to the opposite side.
    // **Bonus** have a character selection screen with different factions to chose from, Viking, Knight, Samurai and every time you pick on faction it will show opposite factions as enemies
    // **Bonus** as soon as the berserker consumes the potion give him the ability to throw 1 axe

    function init() {
      
      const playAgainButton = document.querySelector('a')

      
        let introSound = new Audio('Assets/BT trial final.mp3')
        
        introSound.play()
      
      let playInGameMusic = 'inGame'
      // function playIngameSound() {
      //   const playIngameSound = new Audio('Assets/Berserkers_trial_loop (1).mp3')
      //   playInGameMusic.play()
      // }

      function plunderCoinSound() {
        const plunderCoinSound = new Audio('Assets/Berserkers_trial_coin_fx_2.mp3')
        plunderCoinSound.play()
      }

      function consumePotionSound() {
        const consumePotionSound = new Audio('Assets/mario_1up_sound.mp3')
        consumePotionSound.play()
      }
      
      function killEnemiesSound (){
        const killSkelly = new Audio('Assets/Berserkers_trial_kill_fx.mp3')
        killSkelly.play()
      }

      function killedByEnemiesSound (){
        const killedByEnemiesSound = new Audio('https://www.myinstants.com/media/sounds/minecraft_hit_soundmp3converter.mp3')
        killedByEnemiesSound.play()
      }
      // function playGame() {
        const grid = document.querySelector('.grid')
        let currentScoreText = document.querySelector("#CurrentScore")
        const livesLeftText = document.querySelector("#livesLeft")

        const width = 14
        const cellCount = width * width
        const cells = []
      
        const startingVikingPosition = 145
        let currentVikingPosition = 145
        let VikingClass = "Viking"
        let VikingClassLeft = "VikingLeft"
        
        // Grid Creation

        function createGrid(startingVikingPosition) {
          for (let i = 0; i < cellCount; i++) {
            
            const cell = document.createElement('div')
            cell.id = i
            cell.classList.add("coin")
            grid.appendChild(cell)
            cells.push(cell)
            
          }
          addViking(startingVikingPosition)
        }
      
        const wallClass = 'disapprovedMovement'

        const walls = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 13, 27, 41, 55, 69, 83, 97, 125, 139, 153, 167, 181, 195,
        194, 193, 192, 191, 190, 189, 188, 187, 186, 185, 184, 183, 182, 168, 154, 140, 126, 112, 84, 70, 56, 42, 28, 14, 30, 
        32, 46, 60, 61, 21, 35, 33, 64, 65, 51, 37, 39, 63, 93, 95, 81, 67, 89, 103, 117, 131, 132, 133, 134, 135, 121, 107, 122, 123, 90, 92
        , 165, 151, 152, 149, 161, 177, 160, 172, 144, 130, 155, 141, 171, 143, 87, 100, 101, 57, 58, 114, 71]

          function addWalls() {
        walls.forEach((wall) => {
          cells[wall].classList.remove("coin")
          cells[wall].classList.add(wallClass)

        });
      }

        const unwantedCoins = [91, 104, 105, 106, 118, 119, 120]

        function removeCoins(){
          unwantedCoins.forEach((coin) => {
            cells[coin].classList.remove('coin')
          })
        }

      const berserkPotionClass = 'berserkPotion'

      const potionLocations = [166, 169, 43, 26]

        function addPotions() {
        potionLocations.forEach((square) => {

          cells[square].classList.remove("coin")
          cells[square].classList.add(berserkPotionClass)
        });
      }
      // class for the two edges of map 
      const vikingShip = 'vikingShip'

      const sideLocations = [98, 111]

      function sideLocationsSet() {
        sideLocations.forEach((square) => {
          cells[square].classList.add(vikingShip)
        })
      }

      // function sideLocationsTP() {
      //   if (!(cells[currentVikingPosition].classList.contains(vikingShip))) {
      //     console.log('RIGHT')
      //     currentVikingPosition = 98
      //     cells[currentVikingPosition].classList.toggle("Viking")
      //   }
      // }
        // function teleportOnEdgeSquares(){
        //   shipLocations.forEach((box) => {
        //     cells[box].classList.remove("coin")
        //     cells[box].classList.add('vikingShip')
            
        //   });
        // }
      // NO ENTRY TO BOX
      // noEntryClass = 'noEntry'
      // noEntrySpots = [91]
      // function noEntrySpots.forEach((spot) => {
      //   cells[spot].classList.add(noEntryClass)
      // });
      

          let enemy1Position = 104

        function addEnemy1Start(position) {

          cells[position].classList.add('enemy1')
          setTimeout(() => {
            cells[enemy1Position].classList.remove('enemy1')
            if(!(cells[enemy1Position + 1].classList.contains(wallClass)) && !(cells[enemy1Position + 1].classList.contains('enemy3'))){
              enemy1Position++
            } 
            cells[enemy1Position].classList.add('enemy1')
          }, 400)
          setTimeout(() => {
            cells[enemy1Position].classList.remove('enemy1')
            enemy1Position -= width
            cells[enemy1Position].classList.add('enemy1')
          }, 600)

          setTimeout(() => {
            cells[enemy1Position].classList.remove('enemy1')
            enemy1Position -= width
            cells[enemy1Position].classList.add('enemy1')
          }, 800)

          setTimeout(() => {
            cells[enemy1Position].classList.remove('enemy1')
            enemy1Position++
            cells[enemy1Position].classList.add('enemy1')
          }, 1000)

          setTimeout(() => {
            cells[enemy1Position].classList.remove('enemy1')
            enemy1Position++
            cells[enemy1Position].classList.add('enemy1')
          }, 1200)

          
          // setTimeout(() => {

        // }, 2000)
      }

      function addEnemy1Movement() {

          cells[enemy1Position].classList.remove('enemy1')
          nextEnemy1Position = Math.round(Math.random() * 3)
          if(nextEnemy1Position === 0 && !(cells[enemy1Position + 1].classList.contains(wallClass)) && !(cells[enemy1Position + 1].classList.contains('enemy2 enemy3 enemy4'))){
            enemy1Position++
            // console.log("RIGHT")
          } else if (nextEnemy1Position === 1 && !(cells[enemy1Position - width].classList.contains(wallClass)) && !(cells[enemy1Position - width].classList.contains('enemy2 enemy3 enemy4'))) {
            enemy1Position -= width
            // console.log("UP")
          }  else if (nextEnemy1Position === 2 && !(cells[enemy1Position + width].classList.contains(wallClass)) && !(cells[enemy1Position + width].classList.contains('enemy2 enemy3 enemy4')) && !(cells[enemy1Position + width].classList.contains('noEntry'))) {
            enemy1Position += width
            // console.log("DOWN")
          }  else if (nextEnemy1Position === 3 && !(cells[enemy1Position - 1].classList.contains(wallClass)) && !(cells[enemy1Position - 1].classList.contains('enemy2 enemy3 enemy4'))) {
            enemy1Position--
            // console.log('LEFT')
          // } else if((cells[enemy1Position].classList.contains('viking vikingLef'))) {
          //   window.alert("YOU LOSE")
          // } else {
            // console.log("invalid skelly spot")
          } else if (nextEnemy1Position === 0 && (cells[currentVikingPosition].classList.contains(vikingShip))) {
            enemy1Position = 98
          } else if (nextEnemy1Position === 3 && (cells[currentVikingPosition].classList.contains(vikingShip))) {
            enemy1Position = 111
          }
          cells[enemy1Position].classList.add('enemy1')
          // console.log(nextEnemy1Position)

      }

      let enemy2Position = 118

        function addEnemy2Start(position) {

          cells[position].classList.add('enemy2')
          setTimeout(() => {
            cells[enemy2Position].classList.remove('enemy2')
            if(!(cells[enemy2Position + 1].classList.contains(wallClass)) && !(cells[enemy2Position + 1].classList.contains('enemy3'))){
              enemy2Position++
            } 
            cells[enemy2Position].classList.add('enemy2')
          }, 800)
          setTimeout(() => {
            cells[enemy2Position].classList.remove('enemy2')
            enemy2Position -= width
            cells[enemy2Position].classList.add('enemy2')
          }, 1000)

          setTimeout(() => {
            cells[enemy2Position].classList.remove('enemy2')
            enemy2Position -= width
            cells[enemy2Position].classList.add('enemy2')
          }, 1200)

          setTimeout(() => {
            cells[enemy2Position].classList.remove('enemy2')
            enemy2Position -= width
            cells[enemy2Position].classList.add('enemy2')
          }, 1400)

          setTimeout(() => {
            cells[enemy2Position].classList.remove('enemy2')
            enemy2Position++
            cells[enemy2Position].classList.add('enemy2')
          }, 1600)
          // setTimeout(() => {
        // }, 2000)
        }

        function addEnemy2Movement() {
 
            cells[enemy2Position].classList.remove('enemy2')
            nextenemy2Position = Math.round(Math.random() * 3)
            if(nextenemy2Position === 0 && !(cells[enemy2Position + 1].classList.contains(wallClass)) && !(cells[enemy2Position + 1].classList.contains('enemy2 enemy3 enemy4'))){
              enemy2Position++
              // console.log("RIGHT")
            } else if (nextenemy2Position === 1 && !(cells[enemy2Position - width].classList.contains(wallClass)) && !(cells[enemy2Position - width].classList.contains('enemy1 enemy3 enemy4'))) {
              enemy2Position -= width
              // console.log("UP")
            }  else if (nextenemy2Position === 2 && !(cells[enemy2Position + width].classList.contains(wallClass)) && !(cells[enemy2Position + width].classList.contains('enemy1 enemy3 enemy4')) && !(cells[enemy1Position + width].classList.contains('enemy2 enemy3 enemy4')) && !(cells[enemy2Position + width].classList.contains('noEntry'))) {
              enemy2Position += width
              // console.log("DOWN")
            }  else if (nextenemy2Position === 3 && !(cells[enemy2Position - 1].classList.contains(wallClass)) && !(cells[enemy2Position - 1].classList.contains('enemy1 enemy3 enemy4'))) {
              enemy2Position--
              // console.log('LEFT')
            // } else if((cells[enemy1Position].classList.contains('viking vikingLef'))) {
            //   window.alert("YOU LOSE")
            // } else {
              // console.log("invalid skelly spot")
            } 
            cells[enemy2Position].classList.add('enemy2')
            // console.log(nextenemy2Position)
        }

        let enemy3Position = 106

        function addEnemy3Start(position) {
          
          cells[position].classList.add('enemy3')
          setTimeout(() => {
            cells[enemy3Position].classList.remove('enemy3')
              enemy3Position--
            cells[enemy3Position].classList.add('enemy3')
          }, 800)
          setTimeout(() => {
            cells[enemy3Position].classList.remove('enemy3')
            enemy3Position -= width
            cells[enemy3Position].classList.add('enemy3')
          }, 1000)

          setTimeout(() => {
            cells[enemy3Position].classList.remove('enemy3')
            enemy3Position -= width
            cells[enemy3Position].classList.add('enemy3')
          }, 1200)

          setTimeout(() => {
            cells[enemy3Position].classList.remove('enemy3')
            enemy3Position--
            cells[enemy3Position].classList.add('enemy3')
          }, 1400)

          setTimeout(() => {
            cells[enemy3Position].classList.remove('enemy3')
            enemy3Position--
            cells[enemy3Position].classList.add('enemy3')
          }, 1600)
          // setTimeout(() => {
        // }, 2000)
        }

        function addEnemy3Movement() {
            cells[enemy3Position].classList.remove('enemy3')
            nextenemy3Position = Math.round(Math.random() * 3)
            if(nextenemy3Position === 0 && !(cells[enemy3Position + 1].classList.contains(wallClass)) && !(cells[enemy3Position + 1].classList.contains('enemy3 enemy3 enemy4'))){
              enemy3Position++
              // console.log("RIGHT")
            } else if (nextenemy3Position === 1 && !(cells[enemy3Position - width].classList.contains(wallClass)) && !(cells[enemy3Position - width].classList.contains('enemy1 enemy2 enemy4'))) {
              enemy3Position -= width
              // console.log("UP")
            }  else if (nextenemy3Position === 2 && !(cells[enemy3Position + width].classList.contains(wallClass)) && !(cells[enemy3Position + width].classList.contains('enemy1 enemy2 enemy4')) && !(cells[enemy1Position + width].classList.contains('enemy2 enemy3 enemy4')) && !(cells[enemy3Position + width].classList.contains('noEntry'))) {
              enemy3Position += width
              // console.log("DOWN")
            }  else if (nextenemy3Position === 3 && !(cells[enemy3Position - 1].classList.contains(wallClass)) && !(cells[enemy3Position - 1].classList.contains('enemy1 enemy2 enemy4'))) {
              enemy3Position--
              // console.log('LEFT')
            } else {
              // console.log("invalid skelly spot")
            }
            cells[enemy3Position].classList.add('enemy3')
            // console.log(nextenemy3Position)

        }
    

        let enemy4Position = 120
        function addEnemy4Start(position) {

          cells[position].classList.add('enemy4')
          setTimeout(() => {
            cells[enemy4Position].classList.remove('enemy4')
              enemy4Position--
            cells[enemy4Position].classList.add('enemy4')
          }, 1000)
          setTimeout(() => {
            cells[enemy4Position].classList.remove('enemy4')
            enemy4Position -= width
            cells[enemy4Position].classList.add('enemy4')
          }, 1200)

          setTimeout(() => {
            cells[enemy4Position].classList.remove('enemy4')
            enemy4Position -= width
            cells[enemy4Position].classList.add('enemy4')
          }, 1400)

          setTimeout(() => {
            cells[enemy4Position].classList.remove('enemy4')
            enemy4Position -= width
            cells[enemy4Position].classList.add('enemy4')
          }, 1600)

          setTimeout(() => {
            cells[enemy4Position].classList.remove('enemy4')
            enemy4Position--
            cells[enemy4Position].classList.add('enemy4')
          }, 1800)
          // setTimeout(() => {
        // }, 2000)
        }

        function addEnemy4Movement() {
            cells[enemy4Position].classList.remove('enemy4')
            nextenemy4Position = Math.round(Math.random() * 3)
            if(nextenemy4Position === 0 && !(cells[enemy4Position + 1].classList.contains(wallClass)) && !(cells[enemy4Position + 1].classList.contains('enemy4 enemy4 enemy3'))){
              enemy4Position++
              // console.log("RIGHT")
            } else if (nextenemy4Position === 1 && !(cells[enemy4Position - width].classList.contains(wallClass)) && !(cells[enemy4Position - width].classList.contains('enemy1 enemy2 enemy3'))) {
              enemy4Position -= width
              // console.log("UP")
            }  else if (nextenemy4Position === 2 && !(cells[enemy4Position + width].classList.contains(wallClass)) && !(cells[enemy4Position + width].classList.contains('enemy1 enemy2 enemy3')) && !(cells[enemy1Position + width].classList.contains('enemy2 enemy3 enemy4')) && !(cells[enemy4Position + width].classList.contains('noEntry'))) {
              enemy4Position += width
              // console.log("DOWN")
            }  else if (nextenemy4Position === 3 && !(cells[enemy4Position - 1].classList.contains(wallClass)) && !(cells[enemy4Position - 1].classList.contains('enemy1 enemy2 enemy3'))) {
              enemy4Position--
              // console.log('LEFT')
            } else {
              // console.log("invalid skelly spot")
            }
            cells[enemy4Position].classList.add('enemy4')
            // console.log(nextenemy4Position)
        }

        // function skellyDies(vikingPosition) {
        //   if(cells[enemy1Position] === cells[vikingPosition] && vikingPosition.classList.contains('berserkMode')) {
        //     enemy1Position = 120
        //     addEnemy1Movement()
        //   }
        // }

        unwantedSpot = [91]
        function enemyDontGo() {
          unwantedCoins.forEach((spot) => {
            cells[spot].classList.add('noEntry')
          })
        }

        function addViking(position) {
          cells[position].classList.add(VikingClass)
        }
      
        function removeViking(position) {
          cells[position].classList.remove(VikingClass)
          cells[position].classList.remove(VikingClassLeft)

        }
      
        let currentScore = 0

        function plunderCoin(position) {
          
          if(cells[position].classList.contains("coin")) {
            plunderCoinSound()

            currentScore += 10
            currentScoreText.innerText = currentScore
            
            
          }
          cells[position].classList.remove("coin")
          console.log(currentScore)
        }

        function consumePotion(position) {
          if(cells[position].classList.contains(berserkPotionClass)) {
            consumePotionSound()
            currentScore += 100
            currentScoreText.innerText = currentScore
            cells[position].classList.remove(berserkPotionClass)
          }
          
          // console.log(currentScore)
        }
        berserkMode = false
        function  berserkEffects() {
      //     if(cells[position].classList.contains(berserkPotionClass)) {
      //     let berserkCounter = 10
      //     if(berserkCounter > 0) {
      //       addBerserkCountdown = setInterval(() => {
      //       berserkCounter--
      //     },1000)
      //     berserkModeClassAdd = setInterval(() => {
      //       cells[currentVikingPosition].classList.add('berserkMode')
      //     }, 100);
          
      //   } else {
      //     clearInterval(addBerserkCountdown)
      //     clearInterval(berserkModeClassAdd)
      //     // clearInterval(addBerserkModeClass)
      //   }
      // }
          // addBerserkModeClass = setInterval(() => {
          //   cells[position].classList.add('berserkMode')
          // }, 200)
          
          // setTimeout(() => {
          //   cells[position].classList.remove('berserkMode')
          // }, 10000)
          // removeBerserkMode = setInterval(() => {
              
          //   for(i = 0; i < cells.length; i++) {
          //     if(cells[i].classList.contains('berserkMode') && !cells[i].classList.contains('Viking', 'Vikingleft')){
          //       cells[i].classList.remove('berserkMode')
          //     }
          //   }
          // }, 1000);

          // if(cells[position].classList.contains(berserkPotionClass)) {

          //   addBerserkMode = setInterval(() => {
          //     cells[currentVikingPosition].classList.add('berserkMode')
          //     // console.log("BERSERK MODE")
          //     // console.log(cells[currentVikingPosition].classList)
          //   }, 0);

          //   setTimeout(() => {
          //     clearInterval(addBerserkMode)
          //   }, 15000)
          // }
          
          if(cells[currentVikingPosition].classList.contains(berserkPotionClass)){
          cells[currentVikingPosition].classList.add('berserkMode')
          berserkMode = true
          setTimeout(() => {
            berserkMode = false
            cells[currentVikingPosition].classList.remove('berserkMode')
          }, 10000);
          }
          console.log(berserkMode)
        }
        
          const button = document.querySelector('button')
        function muteAndUnmute() {
          if(button.classList.contains('mute')){
            button.classList.remove('mute')
            button.classList.add('unmute')
            button.innerText = "unmute"
            introSound.pause()
            console.log("unmute")
          } else if (button.classList.contains('unmute')) {
            button.classList.remove('unmute')
            button.classList.add('mute')
            button.innerText = "mute"
            console.log("mute")
            introSound.play()
          }
        }

          
          // setTimeout(() => {
          //   cells[position].classList.remove('berserkMode')
          // }, 10000)
        
        

        livesLeft = 'livesLeft'
        livesLeft = 2

        function gameOver(position) {

          // for(i = 0; i < cells.length; i++) {
            
          // }

        if(berserkMode === false){
          if(cells[position] === cells[enemy1Position] || cells[position] === cells[enemy2Position] || cells[position] === cells[enemy3Position] || cells[position] === cells[enemy4Position]){
            cells[position].classList.remove('Viking', 'VikingLeft')
            killedByEnemiesSound ()
            currentScore -= 300

            livesLeft = livesLeft - 1
            livesLeftText.innerText = livesLeft
            
            currentVikingPosition = 145
          } else if(livesLeft === 0){
            window.alert("GAME OVER, YOU FINISHED WITH A SCORE OF " + currentScore + "!")
          }
          // console.log("WORKING FOR NOT CONTAIN")
        } else if (beserkMode = true) {
          if(cells[position] === cells[enemy1Position]){
            cells[enemy1Position].classList.remove('enemy1')
            killEnemiesSound ()
            currentScore += 150

            enemy1Position = 104
            setTimeout(() => {
              addEnemy1Start()
            }, 1000)
            
          } else if(cells[position] === cells[enemy2Position]){
            cells[enemy2Position].classList.remove('enemy2')
            killEnemiesSound ()
            currentScore += 150

            enemy2Position = 118
            setTimeout(() => {
            addEnemy2Start()
          }, 1000)
          } else if(cells[position] === cells[enemy3Position]){
            cells[enemy3Position].classList.remove('enemy3')
            killEnemiesSound ()
            currentScore += 150
            
            enemy3Position = 106
            setTimeout(() => {
            addEnemy3Start()
          }, 1000)
          } else if(cells[position] === cells[enemy4Position]){
            cells[enemy4Position].classList.remove('enemy4')
            killEnemiesSound ()
            currentScore += 150

            enemy4Position = 120
            setTimeout(() => {
            addEnemy4Start()
          }, 1000)
          }
          // console.log("FOR WHEN CONTAINING")
        }
      }

        function handleKeyUp(event) {
          

          console.log('position before key', currentVikingPosition)
          const key = event.keyCode
          removeViking(currentVikingPosition)
          


          if (!(cells[currentVikingPosition + 1].classList.contains(wallClass)) && key === 39 && currentVikingPosition % width !== width - 1) {
            console.log('RIGHT')
            currentVikingPosition++
            cells[currentVikingPosition].classList.toggle("Viking")
          } else if (key === 37 && currentVikingPosition % width !== 0 && !(cells[currentVikingPosition - 1].classList.contains(wallClass))) {
            console.log('LEFT')
            currentVikingPosition--
            cells[currentVikingPosition].classList.toggle("VikingLeft")
          } else if (key === 38 && currentVikingPosition >= width && !(cells[currentVikingPosition - width].classList.contains(wallClass))) {
            console.log('UP')
            currentVikingPosition -= width
            cells[currentVikingPosition].classList.toggle("VikingLeft")
            
          } else if (key === 40 && currentVikingPosition + width <= width * width - 1 && !(cells[currentVikingPosition + width].classList.contains(wallClass))) {
            console.log('DOWN')
            currentVikingPosition += width
            cells[currentVikingPosition].classList.toggle("Viking")
          } else if(key === 39 && (cells[currentVikingPosition].classList.contains(vikingShip))) {
              console.log('Right TP')
              currentVikingPosition = 98
              cells[currentVikingPosition].classList.toggle("Viking")
          }  else if(key === 37 && (cells[currentVikingPosition].classList.contains(vikingShip))) {
            console.log('Left TP')
            currentVikingPosition = 111
            cells[currentVikingPosition].classList.toggle("VikingLeft")
          } else {
            console.log('INVALID KEY')
            
          }

          berserkEffects()
          gameOver(currentVikingPosition) 
          plunderCoin(currentVikingPosition)
          consumePotion(currentVikingPosition)
          addViking(currentVikingPosition)
          
        }
        
        function removePlayButton() {
          
          playButton.classList.remove('playButton')
          playAgainButton.classList.add('playAgainButton')
          playAgainButton.innerText = "Play Again"
        }
        
        createGrid(startingVikingPosition)
        
        addWalls()
        addPotions()
        enemyDontGo()
        removeCoins()
        sideLocationsSet()
        
        addEnemy1Start(enemy1Position)
        addEnemy2Start(enemy2Position)
        addEnemy3Start(enemy3Position)
        addEnemy4Start(enemy4Position)
        
        // teleportOnEdgeSquares()
        let playAnotherGame = false
        function playGame() {
          introSound.play()
          if(playAnotherGame === false) {
          document.addEventListener('keyup', handleKeyUp)
          
          setInterval(() => {
          addEnemy1Movement(enemy1Position)
          addEnemy2Movement(enemy2Position)
          addEnemy3Movement(enemy3Position)
          addEnemy4Movement(enemy4Position)
          }, 500)
          
          // playIngameSound()
          playAnotherGame = true
          return removePlayButton()
          
        } else if(playAnotherGame === true) {
          playAgainButton.addEventListener('click', window.location.reload(true))
        }

        }
      // }
      
      window.addEventListener("keydown", function(e) {
        if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
      }, false);

      const playButton = document.querySelector('.playButton')
      

      playButton.addEventListener('click', playGame)
      // playAgainButton.addEventListener('click', )
      button.addEventListener('click', muteAndUnmute)
      // playButton.addEventListener('click', playIngameSound)
      }
      
      window.addEventListener('DOMContentLoaded', init)

app.whenReady().then(() => {
  createWindow()
})