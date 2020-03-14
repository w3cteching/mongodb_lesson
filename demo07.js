var db=connect('company');

var result=db.workmate.find();

// while(result.hasNext()) {
//     printjson(result.next());
// }

result.forEach(item=>{
    print(`${item.name}---${item.job}---${item.age}`)
})