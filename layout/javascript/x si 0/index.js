
let state = {
    player:false, //x e false; 0 e true
    game:[
        null,null,null,null,null,null,null,null,null, ]
    displayPLayer: {
        true: "X",
        false: "0",
    }
}



function play(pos){
    if(state.game[pos] !== null) {
        return;
    }
    let boxes = document.querySelectorAll("#game>.box");
    let box = boxes[pos];
    state.game[pos] = state.player;
    if(state.player){
        box.innerHTML= '<img src="images/x.png"/>';
    }else{
    box.innerHTML= '<img src="images/0.png"/>';
    }


    if(state.game[0]===state.game[1] && state.game[1]===state.game[2]){
        alert(`PLayer ${state.player} has won`);
    }
    state.player = !state.player;
}