// subtask 1.) unit code for a function
// subtask 2.) extending with compliment input
function petCat(compliment: string){
    if (compliment != null){
        return "MEOW"
    }
    return "meow";
}


export const tests2: any[] = [{
        //subtask 2.) test for extended 
        name: "petCat should return a louder meow",
        input:["compliment"],
        function: petCat,
        output:"MEOW",
        debug: true,

    },{
        //subtask 1.) test 
        name: "petCat, pets a cat and returns meow",
        input:[],
        function: petCat,
        output:"meow",
        debug: true,//Show the output and expected output 
}];