var express = require('express');
var fs = require('fs');
var app = express();


var phonePath = "./src/data/a.json";


var cartPath = "./src/data/phones.json";

//处理跨域问题
app.all('*',function(req,res,next){
	res.header('Access-Control-Allow-Origin',"*");
	next();
})

app.get("/a",function (req,res) {
	fs.readFile(phonePath,function(err,data){
		if(err){
			console.log(err)
		}else{
			res.json(JSON.parse(data.toString()))
//			console.log(JSON.parse(data.toString()))
		}
	})
})

//加入购物车
app.get('/b',function(req,res){
	
	var token = req.query.accessToken;
	console.log('>>>>>token:',token)
	if(!token){
		res.status(401).send('>>>>Bad Request<<<<');
	}else{
		var id = req.query.id;
		console.log(id)
	//读取出所有的手机数据
		fs.readFile(phonePath,function(err,data){
			
			if(err){
				console.log(err)
			}else{
				var data = JSON.parse(data.toString());
				var phones = data.a1;
				//根据id 找到要添加的数据
				for(var i = 0;i < phones.length;i++){
					if(id == phones[i].id){
						phone = phones[i];
						
						var cartItem = {
							id:phone.id,
							image:phone.image1,
							name: phone.detail,
							oneprice:phone.price,
							num:1,
							Bol:false
						}; 
						//把此数据添加到购物车
						fs.readFile(cartPath,function(err,data){
							if(err){
								console.log(err)
							}else{
								var cart = JSON.parse(data.toString());
								console.log(cart)
								var flag = false;
								for (var i = 0;i < cart.length; i++) {
									if (id == cart[i].id) {
										console.log(cart[i])
										cart[i].num = parseInt(cart[i].num)+1;
										flag = true;
									}
								}
								if (!flag) {
									cart.push(cartItem)
									fs.writeFile(cartPath,JSON.stringify(cart),function(err){
										if(err){
											console.log(err)
										}else{
											res.json({msg:'success'})
										}
									})
								}
								
							}
						})
					}
				}
			}
		})
	}
})
app.get('/cart',function(req,res){
	
	fs.readFile(cartPath,function(err,data){
		
		if(err){
			console.log(err)
		}else{
			var cart = JSON.parse(data.toString());
			res.json({cart:cart})
		}
	})
})
app.get("/qing",function (req,res) {
	fs.readFile(cartPath,function(err,data){
		
		if(err){
			console.log(err)
		}else{
			var cart = JSON.parse(data.toString());
			cart.splice(0,cart.length)
			fs.writeFile(cartPath,JSON.stringify(cart),function (err,data) {
				if (err) {
					console.log(err)
				} else{
					res.json({cart:cart})
				}
			})
		}
	})
})



app.get('/login',function(req,res){
	
	var token =  'token' + new Date().getTime() + Math.floor(Math.random()*10000);
	
	res.json({token:token,msg:'success'})

})
app.listen("3000",function(){
	console.log('服务器启动......')
})
