class Game {
    constructor() {

    }

    getState(){
        var gamestate_ref = database.ref('gameState');
        gamestate_ref.on("value", function(data){
            gameState = data.val();
        });
    }

    update(state){
        database.ref('/').update({
        gameState: state
        })
    }
    
    async start(){
        if(gameState===0){
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value")
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();                
        }
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Starts", 120,100)
        Player.getPlayerInfo()

        if(allPlayers !== undefined){
            var displayPosition = 130;
            //var index = 0;
            for(var plr in allPlayers){
            //    index+= 1;
            if(plr === "player" + player.index)
                fill("red");
             else 
                fill("black");
            displayPosition+= 20;
            textSize(20);
            text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, displayPosition)
        }
    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance+= 50;
        player.update();
    }
    
    }
}