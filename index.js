
function distanceFromHqInBlocks(someValue){
    return Math.abs(someValue - 42)
}
function distanceFromHqInFeet(someValue){
    distanceFromHqInBlocks;
    return (distanceFromHqInBlocks(someValue) * 264)
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264;
}
function calculatesFarePrice(start, destination){
    distanceTravelledInFeet;
    if  (distanceTravelledInFeet(start, destination) < 400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start,destination) < 2000 ){
        return Math.abs((distanceTravelledInFeet(start, destination) - 400) * 1/50);
    } else if  (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500){
        return 25;
    } else if (distanceTravelledInFeet(start, destination) > 2500){
        return "cannot travel that far";
    }

}