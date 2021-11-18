import * as fs from 'fs/promises';

//get the data from the file
let result = await fs.readFile ('boardgames.json');
console.log(result);
let data = JSON.parse(result);

//  for ... of -> to loop over arrays ( not objects)
let list = [1,2,3,4,5]
for(let j of list){
    console.log(j);
}

// we have to use for... in 
//easier example with student 
let student = {
    name: 'Mike',
    age: 32
}

for(let a in student){
    console.log(a);
    student.name
    console.log(student[a]);

}
// loop over the boardgames
for(let i in data){
    console.log(i);
    console.log(data[i]);
    //Create filename
    let filename = `${i}.json`
    //Stringify the value
    let bg = JSON.stringify(data[i]);
    //save to file
    await fs.writeFile(filename, bg);
    //BE HAPPY

}

/* console.log("hallo"); */