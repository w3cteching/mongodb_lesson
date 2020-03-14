var db = connect('company');

/**
 * $set操作，更新或添加某个字段
 */

// db.workmate.update(
//     { name: '李四' },
//     {
//         $set:
//         {
//             sex:0,
//             job:'Go开发'
//         }
//     });


/**
 * $unset 删除指定字段的值
 */
// db.workmate.update(
//     { name: '李四' },
//     {
//         $unset:{age:''}
//     });


/**
 * $inc 递增或递减
 */
// db.workmate.update(
//     { name: '李四' },
//     {
//         $inc: { age: 1 }
// });

/**
 * multi:boolean(true|false) 处理当满足条件时，是否继续更新，默认是false，如果匹配继续更新则将值更新为true即可
 * 
 */

//1.没有加multi选项
// db.workmate.update(
//     {},
//     {
//         $set: { married: "未婚" }
//     },
//     { multi: true });

/**
 * upcert，设置如果没有满足条件的数据时，是添加还是不添加
 */

// db.workmate.update(
//     { name: '测试' },
//     {
//         $set: { age: 6 }
//     },
//     {
//         upsert:true
//     }
// );

//db.workmate.update({'name':'晨宇'},{$push:{interest:{$each:['aa','bb','cc','dd']}}});
//db.workmate.update({'name':'晨宇'},{$pop:{interest:1}});
//db.workmate.update({'name':'晨宇'},{$pop:{interest:-1}});
//db.workmate.update({'name':'晨宇'},{$push:{interest:'跳舞'}});
//db.workmate.update({name:'晨宇'},{$pullAll:{interest:['aa','bb','cc']}});
//db.workmate.update({name:'晨宇'},{$push:{interest:{$each:['绘画','aa','bb','cc','dd','ee','ff']}}});
//db.workmate.update({name:null},{$set:{name:'晨宇'}});
//db.workmate.update({name:'晨宇'},{$set:{interst:['绘画','音乐','跳舞']}});
//db.workmate.update({name:'晨宇'},{$push:{"skill.skillFour":'测试'}});
//db.workmate.update({name:'晨宇','interst':{$ne:'学开车'}},{$push:{interst:'赶紧学开车'}});
//db.workmate.update({name:'晨宇'},{$pull:{interst:'跳舞'}});

//let items=['aa','音乐','cc','dd'];
//db.workmate.update({name:'晨宇'},{$addToSet:{interst:{$each:items}}})

//db.workmate.update({name:'晨宇'},{$addToSet:{'interst.3':'书法222'}});

//var message=db.runCommand({ getLastError: 1 });

var myModify={
    findAndModify:'workmate',
    query:{name:'hjl'},
    update:{$set:{age:33}},
    fields:{name:1,age:1,job:1},
    new:true,
}

var msg=db.runCommand(myModify);

printjson(msg);


print(`[Success] This was Data updated Successfully!`);