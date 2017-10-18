<template>
	<div class="weibo-login">
		
		<div class="line"></div>
		
		<div class="logo">
			<img src="../images/logo.png" />
			<button type="button" class="register">注册</button>
		</div>
		
		<form @submit.prevent="submit" class="login-box">
			<div class="useWeibo">
               	使用你的微博帐号访问 <span> 松果_生活</span>
            </div>
            <div class="inputs">
	            <input type="text" placeholder="请用微博账号登录"/>
	            <input type="password" placeholder="请输入密码"/>
	            <button type="submit">登录</button>
            </div>
		</form>
	
	</div>
</template>

<script>
	export default{
		name:"WeiboLogin",
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	.weibo-login{
		background: url(../images/btm.png) repeat-x center bottom,url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZiZmJmYiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNkNGQ5ZGMiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
		height:100%;
		width:100%;
		.line{
			width:100%;
			height:0.05rem;
			background: -webkit-gradient(linear, left top, right top, from(#eb192d), to(#fdb940)) no-repeat;
		}
		.logo{
			padding:0.2rem 0;
			justify-content: space-around;
			display:flex;
			img{
				width: 1.17rem;
	    		height: 0.35rem;
			}
			.register{
				border:none;
				padding:0 0.15rem;
				display: block;
				border: 1px solid #bebebe;
				border-bottom-left-radius: none;
			    height: 0.28rem;
			    box-shadow: inset 0 1px 0 #fff;
			    color: #333;
			    font-style: normal;
			    text-shadow: 0 1px 0 #fff;
			    display: block;
			    height: 28px;
			    border-radius: 1px;
			    background: linear-gradient(top, #f9f9f9,#dbdbdb);
			    box-shadow: 0 1px 0 rgba(0,0,0,0.1);
			    text-align: center;
			    line-height: 0.28rem;
			}
		}
		.login-box{
			margin:0 auto;
			width:3rem;
			height:2.04rem;
			background:#FFFFFF;
			border-radius: 0.1rem;
			.useWeibo{
				font-size: 14px;
    			padding: 0.2rem 0.2rem 0.1rem;
    			color: #333;
			}
			.inputs{
				width:2.6rem;
				margin:0 auto;
				input{
				    border: 1px solid #bebebe;
				    border-radius: 0.03rem;
				    width: 2.6rem;
				    line-height: 0.33rem;
				    height: 0.33rem;
				    margin: 0 0 0.1rem;
				    padding: 0 0.1rem;
				    box-shadow: inset 1px 1px 2px 0 rgba(0,0,0,0.1);
				    font-size: 18px;
				    -webkit-box-sizing: border-box;
				    -moz-box-sizing: border-box;
				    box-sizing: border-box;
				    line-height: 0.19rem;
				}
				button{
					display: block;
					width:2.6rem;
					height:0.40rem;
					border: 1px solid #eb192d;
				    border-bottom-color: #be1e32;
				    background: -webkit-gradient(linear, left top, left bottom, from(#ff555f), to(#eb192d));
				    color: #fff;
				    font-size: 18px;
				    box-shadow: 0 1px 1px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.2);
				    text-shadow: 0 1px 1px rgba(255,255,255,0.2);
				}
			}
		}
	}
</style>