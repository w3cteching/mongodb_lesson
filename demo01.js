let db=connect('demo');
let startTime=+new Date();

let arr=[];
for(let i=0;i<1000;i++) {
    //db.test1.insert({num:i});

    arr.push({num:i});
}

db.test2.insert(arr);

let runTime=+new Date()-startTime;

print(`[demo]运行的时间为${runTime}`);