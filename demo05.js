//var flag=new Date(2020,0,15);

//db.students.find({regeditTime:{$gte:flag}},{name:true,age:true,job:true});

//db.students.find({age:{$gte:25,$lte:30}},{name:true,age:true,job:true});

//db.workmate.find({age:{$in:[25,33]}})

//db.workmate.find({$or:[{age:{$lt:20}}]},{name:1,age:1,job:1,_id:0})
//db.workmate.find({$and:[{age:{$lte:20}},{job:{$eq:'前端'}}]},{name:1,age:1,job:1,_id:0})


//数据查询操作:  $all和$and类似，同时满足才匹配，$in表示满足集合中的任意一个就可以，类似于$or操作符

//db.workmate.find({interest:{$all:['看电影','看书']}},{name:1,age:1,interest:1,_id:0})

//db.workmate.find({interest:'写代码'},{name:1,age:1,interest:1})

db.workmate.find(
    {},
    {name:1,age:1,job:1,_id:0}
).limit(2).skip(0).sort({age:1});