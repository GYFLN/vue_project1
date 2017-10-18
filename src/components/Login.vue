
<template>
	<div class="songguo-mine">
		<div class="login-mountain">
			
			<img src="../images/navLogo.png" class="login"/>
			
		   	<div class="login-box">
			   	<div class="weibo-login-button">
		            <img src="../images/login_weibo.png">
		            <span>微博账号登录</span>
		        </div>
		        <div class="wechat-login-button">
		            <img src="../images/login_wechat.png">
		            <span>微博账号登录</span>
		        </div>
	        </div>
	        
	        <p class="others">或者</p>
	        
	        <form @submit.prevent="handlelogin">
	        	<input type="text" placeholder="手机号" class="phone inp" v-model="username"/>
	        	<input type="text" placeholder="密码" class="pwd inp" v-model="password"/>
	        	<p class="forgot-pwd">
	        		<a href="#" class="forgot-pwd-a">忘记密码></a>	
	        	</p>
	        	<button type="submit" class="login-btn">登录</button>
	        </form>
	        
	        <div class="register-box">
	        	<div class="install-app">
				    没有账号，下载应用即可注册
				</div>
				<div class="go-to-install">
					<a><img src="../images/appstore.png"></a>
					<a><img src="../images/googleplay.png"></a>
				</div>
	        </div>
	        
	    </div>
	</div>
</template>

<script>
	
	import {mapActions} from "vuex"
	
	export default {
	  	name: 'SongguoMine',
	  	data () {
		    return {
		    	username:"",
		    	password:""
		    }
		},
		methods:{
			...mapActions(["login"]),
			handlelogin(){
				alert(1)
				this.login({username:this.username,password:this.password})
			}
		}
	}
</script>

<style scoped lang="scss">
	.songguo-mine{
		height:100%;
		width: 100%;
	    background-image: radial-gradient(circle,#fff7f5,#f8f1e1);
	    .login-mountain{
	    	background:url(../images/shouping_bottom.png) no-repeat center bottom;
	    	height:100%;
	    	width:100%;
	   		padding-top:0.6rem;
	   		.login{
	   			margin:0 auto;
	    		width: 0.98rem;
				height: 0.44rem;
				display: block;
				
	    	}
		    .login-box{
		    	margin-top:0.5rem;
		    	width:100%;
		    	text-align: center;
			    border: none;
			    border-radius: none;
			    outline: 0;
			    box-shadow: none;
		    	.weibo-login-button{
		    		display: inline-block;
				    padding: 0 0.08rem;
				    width: 1.4rem;
				    height: 0.3rem;
				    border-radius: 0.15rem;
				    border: 1px solid #ff5722;
				    span {
					    margin-left: 0;
					    color: #ff5722;
					    font-size: 12px;
					}
				    img{
				    	vertical-align: middle;
				    	width: 0.3rem;
	    				height: 0.3rem;
				    }
		    	}
		    	.wechat-login-button{
		    		display: inline-block;
				    padding: 0 0.08rem;
				    width: 1.4rem;
				    height: 0.3rem;
				    border-radius: 0.15rem;
				    border: 1px solid #ff5722;
				    span {
					    margin-left: 0;
					    color: #ff5722;
					    font-size: 12px;
					}
				    img{
				    	vertical-align: middle;
				    	width: 0.3rem;
	    				height: 0.3rem;
				    }
		    	}
		    }
		    .others{
		    	width:0.5rem;
		    	margin:0 auto;
		    	text-align: center;
		    	padding: 0.1rem 0;
				font-size: 9px;
				color: #bdbdbd;
		    }
		    .register-box{
		    	width:100%;
		    	height:3.17rem;
		    }
		    form{
		    	display: block;
		    	width:100%;
		    	.inp{
		    		display: block;
		    		background-color: #fff;
    				color: #666;
    				border: 1px solid #ded8d0;
				    border-radius: 2px;
				    width: 2.91rem;
				    height: 0.31rem;
				    padding: 0.06rem;
				    font-size: 12px;
				    margin:0 auto;
		    	}
		    	.pwd{
		    		margin-top:0.1rem;
		    	}
		    	.forgot-pwd{
		    		width: 2.91rem;
		    		text-align: right;
		    		margin:0 auto;
		    		margin-top:0.1rem;
		    		margin-bottom:0.3rem;
				    font-size: 0.1rem;
				    .forgot-pwd-a{
				  		color: #ff5722;
				    }
		    	}
		    	.login-btn{
		    		display: block;
		    		border: none;
		    		width: 2.9rem;
    				height: 0.36rem;
				    background-color: #ff5722;
				    border-radius: 0.02rem;
				    color: #fff;
				    font-size: 16px;
				    text-align: center;
				    line-height: 0.36rem;
				    margin:0 auto;
		    	}
		    }
		    .register-box{
		    	width:100%;
		    	.install-app{
		    		width:3rem;
		    		text-align: center;
		    		margin:0 auto;
		    		margin-top: 0.7rem;
				    margin-bottom: 0.1rem;
				    color: #666;
				    font-size: 14px;
		    	}
		    	.go-to-install{
		    		display:flex;
		    		width: 2.91rem;
		    		margin:0 auto;
		    		justify-content: space-between;
		    		a{
		    			display:block;
		    			img{
		    				width: 1.35rem;
    						height: 0.4rem;
		    			}
		    		}
		    	}
		    }
	    }
	}
</style>
