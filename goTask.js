let username = "李四";
let timeStamp = +new Date();
let loginData = { 'loginname': username, 'timeStamp': timeStamp };
//let db = connect('userlogin');  //相当于use userlogin;
let conn=new Mongo();
let db=conn.getDB('userInfo');

db.userInfo.insert(loginData);

print('[Demo] userlogin 数据添加成功!');