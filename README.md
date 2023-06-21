# Slot Game

#### Run

```
git clone https://github.com/frnpnk/SlotGame
cd SlotGame
```
npm install
```
```
npm run start
```

Using typescript and pixijs rendering engine (http://www.pixijs.com/) you need to create prototype of slot game with loading screen.

1. Scene: Simple slot machine gameplay prototype
1.1 Graphics in folder graphics/gameplay 
1.2 Slot machine should be presented to a user as 3 columns (slot reels) by 3 symbols in each, according to mockup graphics/gameplay/mockup.png with button to trigger spinning of the reels.
1.3 Slot reel shown to a user as column with 3 symbols suppose to consist of 20 symbols (random order of graphics/gameplay/symbols) from which only 3 is visible to a user.
1.4 After user press "Spin" button reels should start spinning and stop after 3 seconds one after another
1.6 As reels stop spinning, spin result symbols should be shown to a player. Symbols for spin result should be loaded from json file: "results.json" in sequential order. You could load result of spin on spin button click and populate reel with predefined state or add new state symbols during reel spinning - it is up to you. Main requirement here - it should be smooth for a player.
File format: "machine-state" as array of objects {"reels", "win"}, contains spin result.
In that object "reels" represents array of symbols distribution on the reels, "win" represents win amount need to be shown to a user. File contains 10 states, after all states used, slot state could be used from results file start to the end again and again. 

Example of slot machine rendered for "machine-state" #0:
			reel #1		reel #2		reel #3	
row #1: 	H1 			L2 			L3
row #2: 	L2 			H1 			H2
row #3: 	L1 			L1 			H4

reel #1 state in results.json file represented as 
			"reels": [
				["H1", "L2", "L1"]
"H1" reffers to a symbol "graphics/gameplay/symbols/H1.png"

Win amount: 0

2. Win amount presentation is an extra task, you could do it, but not mandatory.
Win amount should be shown in win counter on the screen (in according to mockup provided) after win event.
Win amount should be reset to 0 after spin button click.

