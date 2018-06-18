

const user = [{
    id: 1,
    name: "Telefon mobil HTC U 11, Dual SIM, 64GB, 4G, Brilliant Black",
    imageUrl: "https://s12emagst.akamaized.net/products/6053/6052836/images/res_151cbf9f491dc8b1555e14bfe5a60fbc_150x150_bpqg.jpg",
    quantity: 5,
    price: 1200
},{
    id: 2,
    name: "Acumulator extern A+, 20000 mAh",
    imageUrl: "https://s12emagst.akamaized.net/products/8023/8022875/images/res_afbd4b05ee5bd92012da2404452eb9ed_450x450_lfqn.jpg",
    quantity: 15,
    price: 300
},{
    id: 3,
    name: "Acumulator extern Smart Charge 1010 10000 mAh cablu micro USB Negru",
    imageUrl: "https://s12emagst.akamaized.net/products/8168/8167260/images/res_70379d488494cd7c8c5d4012bdb680c9_450x450_d5do.jpg",
    quantity: 7,
    price: 150
},{
    id: 4,
    name: "Telefon mobil Meizu M6, Dual SIM, 32GB, 4G, Black",
    imageUrl: "https://s12emagst.akamaized.net/products/14586/14585039/images/res_154d644544cb77ce57d6b6b87aa108e0_450x450_19s3.jpg",
    quantity: 7,
    price: 1000
},{
    id: 5,
    name: "Telefon mobil Nokia 3, Dual SIM, 16GB, Copper White",
    imageUrl: "https://s12emagst.akamaized.net/products/8665/8664917/images/res_fd6e9f225340a180c38950103c489c4e_450x450_u1ak.jpg",
    quantity: 7,
    price: 1685
}]

localStorage.setItem("userData", JSON.stringify(user));
const userDataLocalStorageStr = localStorage.getItem("userData");
const userDataLocalStorageObj = JSON.parse(userDataLocalStorageStr);

const userDataVal = localStorage.getItem("userData");
console.log(userDataVal);

for (var i =0; i< user.length; i++) {
	var DataUser = user[i];
}
//DataUser.item 

// var currentPostId = getUrlParameter("postId");

// var posts = new User();
// posts.fetchData().then(function(){
// // console.log(posts.items.length);
// 	var containerEl = document.getElementById("container");
// 	for ( var i = 0; i <posts.items.length; i++) {
// 		var postEl = document.createElement("h3");
// 		postEl.setAttribute("href", 'http://cursuri-alexandrujoltan268324.codeanyapp.com/Curs%2021.5_Javascript_BOM_2_Workshop/index.html?postId=' + posts.items[i].id);
// 		postEl.setAttribute("target", "blank");
// 		postEl.innerHTML = posts.items[i].name;
// 		containerEl.appendChild(postEl);
// 	}
// }).catch(function () {
// 	console.log("hope not");
// });

//  function getUrlParameter(name) {
//         name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//         var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
//         var results = regex.exec(location.search);
//         return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
//     }


// var getUserData = document.getElementById("container");
// var postUserEl =document.createElement("h3");
// 	postUserEl.innerHTML = user.name;
// 	getUserData.appendChild(postUserEl);


