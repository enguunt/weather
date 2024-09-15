// api -> tusgailan beldsen datag avahiin tuld holbol ogdog hergesel
// fetch ('u'); -> api ruu request ywuulna
// .then () -> huseltiin hariu // Promise
// 200 -> approved, huselt ywuulah bolmjtoi 404,505,600 -> denied huselt ywuulah bolomgjgui 
// ,json() -> zambraagui datag Object ruu horvuulen
let input=document.getElementsByTagName('input')[0];
let search=document.getElementsByTagName('Button')[0];
let nameTage=document.querySelector('.name');
let tempTage=document.querySelector('.temp');
let windTage=document.querySelector('.wind');
let descTage=document.querySelector('.desc');
let humTage=document.querySelector('.hum');


search.addEventListener('click',()=>{
	let city = input.value;
	//alert('test');
	fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
	res => res.json()
).then(
	data => {
		console.log(data);
		let name= data.name;
		let temp = data.main.temp;
		let desc = data.weather[0].description;
		let hum = data.main.humidity;
		let wind = data.wind.speed;
		//
		nameTage.innerText=name;
		tempTage.innerText=Math.floor(temp)+" C";
		windTage.innerText=wind+" km/h";
		descTage.innerText=desc;
		humTage.innerText=hum+" %";
		if(data.weather[0].main=="Clouds"){
			document.getElementsByTagName('img')[0].src="https://cdn-icons-png.flaticon.com/512/6122/6122561.png";
		}else if(''){
			(data.weather[0].main=="Rain")
			document.getElementsByTagName("img")[0].src="https://cdn-icons-png.flaticon.com/512/8841/8841410.png";
		}
	}
);
	
		
});
	
fetch ('https://fakestoreapi.com/products').then(
	response => response.json()
).then(
	product => {
		console.log(product);
		console.log(product[0].title);
		console.log(product[product.length-1].rating.rate);
		let title = product.map(product=>product.title);
		console.log(title);
	}
);
// .map () -> array -> odoo baiga array-iig shine array ruu hurvuulne
let number = [2,6,5,8];
let doubledNumber = number.map (number => number*2);
console.log(doubledNumber); // [4,12,10,16];
fetch ("https://fakestoreapi.com/users").then(
	users => users.json()
).then(
	users=> {
		console.log(users);
		let username = users.map(users=>users.username);
		console.log(username);
	}
);


