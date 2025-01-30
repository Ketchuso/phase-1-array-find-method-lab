// code your solution here
function superbowlWin(array){
    const winningResult = array.find(yearFinder)
    if (winningResult && winningResult.result === "W"){
        return winningResult.year;
    }
}

function yearFinder(element){
    return element.result === "W";
}