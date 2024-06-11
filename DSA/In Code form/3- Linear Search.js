function linearSearch(arr, search){
    // let search_val = search.toString()
    for(let i=0; i < arr.length; i++){
        if(arr[i] === search){
            // console.log(`index of ${search} is ${i}`)
            return `index of ${search} is ${i}`
        }
    }
    return -1
}