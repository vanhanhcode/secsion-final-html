// function ifor(LastName, FirstName, Infmation){
//  this.LastName = LastName;
//  this.FirstName = FirstName;
//  this.Infmation = Infmation;
//  Trên đây là khai báo như là vẽ sơ đồ kết cấu của một ngôi nhà.
// }
// var admin = new  ifor ("Hanh", "Lê", "Soicials");
// var user = new ifor ("Kinh", "Mễ", "Soicial");

// đây là cách truyền tham số ngoài của constructor object 
// admin.title = "Hanhblue"
// admin.start = "****"
// user.comment = "yeu ban"
// user.eluavation = "ok tốt"
// console.log(admin)
// console.log(user)



// Cấu trúc điều khiển và rẻ nhánh.
// Toán tử logic cơ bản 
// 1 and . Khi thực hiện toán tử and này cần hay điều kiện đúng mới trả về true
// 2 or  . Còn toán tử or này nó chỉ cần 1 diểu kiện đúng thôi là nó sẽ trả về true
// 3 not  . Cuối cùng toán tử not này khi so sánh điểu kiện đúng nó trả về sai, sai nó trả về đúng.
// Câu lệnh if/else
// Câu lệnh switch case 
// var name = "hanh"
// var job = 'manage'
// switch (job)
// {
//     case 'manage': //cái case này phải thỏa mãn điều kiện giá trị trên khai báo, nếu mà đúng giá trị thì nó sẽ thực thi câu lệnh đó.
//     console.log(name + " la manage dich thuc")
//     break;
//     case 'teacher':
//         console.log(name+ " la teacher dich thuc")
//         break;
//         default: 
//         console.log(name + " la mot nguoi da nganh nghe")
//         break;
// }



// truthy and flasy
// var john = (89+120+1033)/3
// var mark = (89+120+1033)/3
// var mary = (89+120+1033)/3
// debugger;
// if (john > mark && john> mary)
// {
//     console.log("john chien thang voi diem so: ", john)
// }
// else if(john < mark && mark > mary)
// {
//     console.log("mary chien thang voi diem so: ", mark)
// }
// else if (john < mary && mary > mark)
// {
//     console.log("mary chien thang voi diem so: ", mary)
// }
// else if (john == mark && john== mary && mary == john)
// {
//     console.log("ca 3 doi bang nhau voi so diem: ", john, mark, mary)
// }
// else if(john == mark){
//     console.log("john va mark bang nhau voi so diem: ", mark, jov
//     )
// }
// else if(john == mary){
//     console.log("john va mary bang nhau voi so diem: ", john,mary)
// }
// else if (mark = mary){
//     console.log("mark va mary bang nhau voi so diem: ", mark, mark)
// }


// array 
// KHAI BÁO CÁCH 1
// var namestudent = [
//     'van hanh',
//     'van ngao',
//     'van ti',
//     'van tieu'
// ]
// console.log("ten cua ban la: ", namestudent) // đây là truy xuất ra các phần có trong mảng  //TRUY XUẤT RA CÁCH 1
// console.log("ten cua ban la: ", namestudent[1]) // đây là truy xuất theo thứ tự mà minh mong muốn.  // TRUY XUẤT RA CACH 2
// console.log("ten cua ban la: ", namestudent[namestudent.length-5]) // truy xuất vào phần tử cuối cùng của mảng có thể theo từng cấp độ. TRUY XUẤT RA CÁCH 3

// KHAI BAO CÁCH 2
// var namestudent = new Array('levanhanh', 'nguyen thi.. ', 'nguyen thi ...')
// console.log(namestudent[0])


// ** Lưu ý trong java script nó không giới hạn kiểu dữ liệu lưu trong mảng.

// var information = [
//     'hanh',
//     1,
//     'hanh',
//     [1,'kevan hanh']
// ]
// console.log(information[3][1])  // đây là cách xuất ra các phần tử có trong mảng nó truy xuất ra các phần tử lồng nhau có trong mảng này.


// Tiếp theo là Method cơ bản có trong array 
// var array = [ 
//     'hanh',
//     'ngao',
//     12,
// ]
// // console.log(array.push(123)) // them  vao phia sau cua phan tu cuoi
// console.log(array.unshift(123)) // them vao phia truoc cua phan tu dau
// console.log(array) // hiển thị các phần tử có trong mảng
// var hanh = [2,4.5,4]
// console.log(hanh.shift(0,6,9));

// var ary = [
//     'hanh',
//     'blue',
//     '    ngao        ',
// ]
// var ary1 = [
//     'hanh',
//     'blue',
//     '    ngao        ',
// ]
// // console.log(ary.splice(1,2))
// console.log(ary.concat(ary1))


