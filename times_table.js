// Print a table containing multiplication tables



function timesTable() {
    
    for(var i = 1; i < 11; i++){
        var table = [];
        for(var j = 0; j < 11; j++) {
           table.push(i * j);
            
        }
        console.log(table);   
    }
    
}


timesTable()