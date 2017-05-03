//6 by 2 array; each small array indicate 1) the roll (1-6) and 2) the amount of times it was rolled. and 3) the ID of the roll in the HTML
var diceArray = [[1, 0, 'oneroll', 0], [2, 0, 'tworoll', 0], [3, 0, 'threeroll', 0], [4, 0, 'fourroll', 0], [5, 0, 'fiveroll', 0], [6, 0, 'sixroll', 0]]
var totalRoll = 0;
var previousroll = 0;
var streak = 1;
var diceRoll = function(){
    if (document.getElementById('numrolls').value > 10000 || document.getElementById('numrolls').value < 1){
        alert("Please resubmit number of rolls between 1 and 10,000.");
        return false;
    }
    for (var i = 0; i < document.getElementById('numrolls').value; i++){
        var rolled = Math.floor(Math.random()*6)+1;
        document.getElementById('roll').innerHTML = rolled;
        
        //Checks what got rolled and adds it to the amount of times it was rolled (see array). Also adds the roll to the total rolled amount. 
        for (var j = 0; j < diceArray.length; j++){
            if (rolled === diceArray[j][0]){
                diceArray[j][1]++;
                totalRoll++;
                // Added functionality of seeing what the longest streak of a roll is.
                if (previousroll === rolled){
                    streak++;
                    if (streak > diceArray[j][3]){
                        diceArray[j][3] = streak;
                    }
                } else {
                    previousroll = rolled;
                    streak = 1;
                }
            }
        }
        
        //Prints to the HTML the number of times each individual roll took place
        for (var j = 0; j < diceArray.length; j++){
            document.getElementById(diceArray[j][2]).innerHTML = "<td>" + diceArray[j][0] + "</td><td>" + diceArray[j][1].toLocaleString('en-US', {minimumFractionDigits:0}) + "</td><td>" + (diceArray[j][1]/(totalRoll)*100).toFixed(2) + "%</td><td>" + diceArray[j][3] + "</td>";
        }
    }
    document.getElementById('totalrolled').innerHTML = "<td>Total</td><td>" + totalRoll.toLocaleString('en-US', {minimumFractionDigits:0}) + "</td><td>100%</td><td>--</td>";
}
