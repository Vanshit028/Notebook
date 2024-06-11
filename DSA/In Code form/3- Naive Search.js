function naiveSearch(mainString, search) {
    let count =0;
for(let i=0; i<mainString.length; i++){
    // console.log(`${i} = ${mainString[i]}`)
    if(mainString[i] == search[0]){
        for(let j=1; j<search.length; j++){
            i++
            if(mainString[i] !== search[j]){
                break;
            }else if(mainString[i] == search[(search.length-1)]){
                count++
            }
            
                       
        }

        if(search.length == 1){
                count++
            }
        
    }
    
}
    
    return `String ${search} is repeated ${count} times in  ${mainString}`
}

// mainString[i]