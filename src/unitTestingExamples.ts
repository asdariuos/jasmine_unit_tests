// subtask 1.) unit code for a function
// subtask 2.) extending with compliment input
function petCat(compliment: string){
    if (compliment != null){
        return "MEOW"
    }
    return "meow";
}


<<<<<<< HEAD
export const tests2: any[] = [{
        //subtask 2.) test for extended 
=======
export const tests2: any[] = [
    
    {
    //subtask 1.) test 
    name: "petCat, pets a cat and returns meow",
    input:[],
    function: petCat,
    output:"meow",
    debug: true,//Show the output and expected output 

},

    { //subtask 2.) extend our test.
>>>>>>> 2804d35758e66b2b700a7592bcd54fa1c975d667
        name: "petCat should return a louder meow",
        input:["compliment"],
        function: petCat,
        output:"MEOW",
        debug: true,

<<<<<<< HEAD
    },{
        //subtask 1.) test 
        name: "petCat, pets a cat and returns meow",
        input:[],
        function: petCat,
        output:"meow",
        debug: true,//Show the output and expected output 
}];
=======
    },

    {// subtask 3.) A second unit test.
        name: "petCat, pets a cat with 'compliment1' return a louder MEOW",
        input:["compliment1"],
        function: petCat,
        output:"MEOW",
        debug: true,
    }


];
>>>>>>> 2804d35758e66b2b700a7592bcd54fa1c975d667
