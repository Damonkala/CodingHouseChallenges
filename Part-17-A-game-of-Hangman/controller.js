$(document).ready(function () {
	
	var questionBank=new Array;
	var wordArray=new Array;
	var previousGuesses=new Array;
 	var currentWord;
	var currentClue;
	var wrongAnswerCount;
	
 
 
questionBank=	[["kangaroo","an animal"],["starbucks","a company"],["macaroni","a kind of food"],["washington","a place"],
["gecko","an animal"],["guillotine","a machine"],["tree","a plant"],["acdc","a rock band"],["superman","a superhero"]
,["spongebob","a cartoon"],["atlanta","state capital"],["sacramento","capital of California"],["mario","videogame character"],["book","thing"],
["television","technology"],["futurama","comedy sci-fi series"],["apple","a computer company"],["windows","a computer company"],["computer","technology"],
["salt","spice"],["pepper","spice"],["pencil","thing"],["pen","thing"],["money","thing"],
["potatos","a kind of food"],["camera","technology"],["pancakes","a kind of food"],["ketchup","a sauce"],["mustard","a sauce"],
["candy","a kind of food"],["coffe","a kind of drink"],["soda","a kind of drink"],["water","a kind of drink"],["milk","a kind of drink"],
["fish","a kind of animal"],["drum","a kind of instrument"],["trumpet","a kind of instrument"],["guitar","a kind of instrument"],["shirt","an article of clothing"],
["hat","an article of clothing"],["cat","a kind of animal"],["pants","an article of clothing"],["house","a building"],["mall","a building"],
["stapler","a thing"],["desk","a piece of furniture"],["bed","a piece of furniture"],["couch","a piece of furniture"],["lamp","a piece of furniture"],
["gravy","a sauce"],["pork","a kind of food"],["sausages","a kind of food"],["bacon","a kind of food"],["beans","a kind of food"],
["yams","a kind of food"],["corn","a kind of food"],["daisy","a plant"],["rose","a plant"],["batman","a superhero"]
,["spiderman","a superhero"],["ironman","a superhero"],["antman","a superhero"],["link","a videogame character"],["samus","a videogame character"],
["car","a kind of vechicle"],["bike","a kind of vechicle"],["motorcycle","a kind of vechicle"],["truck","a kind of vechicle"],["strawberry","a kind of fruit"],
["orange","a kind of fruit"],["lemon","a kind of fruit"],["blueberry","a kind of berry"],["raspberry","a kind of berry"],["blackberry","a kind of berry"],
["chair","a piece of furniture"],["hospital","a place"],["restaraunt","a place"],["grass","a plant"],["bush","a plant"],
["battery","a thing"],["cup","a thing"],["bulb","a thing"],["mouse","a kind of animal"],["snake","a animal"],
["monkey","an animal"],["pikachu","a videogame character"],["dog","an animal"],["cat","an animal"],["wallet","a thing"],
["watch","a thing"],["phone","technology"],["sword","a weapon"],["gun","a weapon"],["bow","a weapon"],
["airplane","a kind of vechicle"],["bus","a kind of vechicle"],["earth","a planet"],["mars","a planet"],["venus","a planet"],
["saturn","a planet"]];

		  
		
		 
		titleScreen();

 

 
	
function titleScreen(){
			
	$('#gameContent').append('<div id="gameTitle">HANGMAN</div><div id="startButton" class="button">BEGIN</div>');		
	$('#startButton').on("click",function (){gameScreen()});
			
}//display game
	
	
	
function gameScreen(){
	$('#gameContent').empty();
	$('#gameContent').append('<div id="pixHolder"><img id="hangman" src="man.png"></div>');
	$('#gameContent').append('<div id="wordHolder"></div>');
	$('#gameContent').append('<div id="clueHolder"></div>');
	$('#gameContent').append('<div id="guesses">Previous guesses:</div>');
	$('#gameContent').append('<div id="feedback"></div>');
	$('#gameContent').append('<form><input type="text" id="dummy" ></form>');
			
	getWord();
	var numberOfTiles=currentWord.length;
	wrongAnswerCount=0;
	previousGuesses=[];
			 
	for(i=0;i<numberOfTiles;i++){
		$('#wordHolder').append('<div class="tile" id=t'+i+'></div>');
	}
			
	$('#clueHolder').append("HINT: "+currentClue);
 
	$(document).on("keyup",handleKeyUp);
	$(document).on("click",function(){$('#dummy').focus();});
	$('#dummy').focus();
}//gamescreen
			
			
function getWord(){
	var rnd=Math.floor(Math.random()*questionBank.length);
	currentWord=questionBank[rnd][0];
	currentClue=questionBank[rnd][1];
	questionBank.splice(rnd,1); 
	wordArray=currentWord.split("");			
}//getword
			
function handleKeyUp(event) {
	if(event.keyCode>64 && event.keyCode<91){
		var found=false;
		var previouslyEntered=false;
		var input=String.fromCharCode(event.keyCode).toLowerCase();
				
		for(i=0;i<previousGuesses.length;i++){if(input==previousGuesses[i]){previouslyEntered=true;}}
				
		if(!previouslyEntered){
			previousGuesses.push(input);
				
			for(i=0;i<wordArray.length;i++){
				
				if(input==wordArray[i]){found=true;$('#t'+i).append(input);}	
				
			}//for
				
			if(found){checkAnswer();}
			else{wrongAnswer(input);}
		}//if
	}//if
}//handlekeyup
	
		
function checkAnswer(){
	var currentAnswer="";	
	for(i=0;i<currentWord.length;i++){
		currentAnswer+=($('#t'+i).text());
	}		
	if(currentAnswer==currentWord){
		victoryMessage();
	};
}//checkanswer
		
function wrongAnswer(a){
	wrongAnswerCount++;
	var pos=(wrongAnswerCount*-75) +"px"
	$('#guesses').append("  "+a);
	$('#hangman').css("left",pos);
	if(wrongAnswerCount==6){
		defeatMessage();}
}//wronganswer
		
function victoryMessage(){
	$(document).off("keyup", handleKeyUp);
	$('#feedback').append("CORRECT!<br><br><div id='replay' class='button'>CONTINUE</div>");
	$('#replay').on("click",function (){
		if(questionBank.length>0){
			gameScreen()}
		else{finalPage()}
	});
}//victory
		
function defeatMessage(){
	$(document).off("keyup", handleKeyUp);
	$('#feedback').append("You're Dead!<br>(answer= "+ currentWord +")<div id='replay' class='button'>CONTINUE</div>");
	$('#replay').on("click",function (){
		if(questionBank.length>0){
			gameScreen()}
		else{finalPage()}
	});
}//defeat

function finalPage(){
	$('#gameContent').empty();
	$('#gameContent').append('<div id="finalMessage">You have finished all the words in the game!</div>');
}//finalpage
	
	});//doc ready
