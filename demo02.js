let workmate1 = {
    name: 'hjl',
    age: 30,
    sex: 1,
    job: '前端',
    skill: {
        skillOne: 'HTML+CSS',
        skillTwo: 'JavaScript',
        skillThree: 'PHP'
    },
    regeditTime: +new Date()
}

let workmate2 = {
    name: '张三',
    age: 19,
    sex: 0,
    job: 'UI',
    skill: {
        skillOne: 'PhotoShop',
        skillTwo: 'UI',
        skillThree: 'PHP'
    },
    regeditTime: +new Date()
}

let workmate3 = {
    name: '李四',
    age: 26,
    sex: 1,
    job: 'Android开发',
    skill: {
        skillOne: 'HTML+CSS',
        skillTwo: 'JavaEE',
        skillThree: '写书'
    },
    regeditTime: +new Date()
}

let tempArr = [workmate1, workmate2, workmate3];

let db = connect('company');

db.workmate.insert(tempArr);

print(`[Success]批量插入同寸数据成功!`);