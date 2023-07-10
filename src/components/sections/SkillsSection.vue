<script setup>

    import { onMounted } from 'vue';
    import CardSkill from '../CardSkill.vue';

    let span;
	let product;
	let product_page;
	let l;
	let movePer;
	let maxMove;
	// mobile_view	
	let mob_view;

    onMounted(()=>{
        span = document.getElementsByTagName('span');
        product = document.getElementsByClassName('product')
        product_page = Math.ceil(product.length/4);
        l = 0;
        movePer = 25.34;
        maxMove = 203;
        // mobile_view	
        mob_view = window.matchMedia("(max-width: 768px)");
        
        
        if (mob_view.matches){
            movePer = 50.36;
            maxMove = 504;
        }

    })

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
        
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}


</script>

<template>
    <section class="min-h-[calc(100vh-110px)] pt-[120px] px-2 section" id="SkillsSection">
        
        <div class="w-full flex items-center">
            <div class="w-[20%] h-[1px] bg-red-600">&nbsp;</div>
            <h2 class="mx-2 font-semibold text-2xl text-indigo-950">MY SKYLLS & TOOLS</h2>
            <div class="h-[1px] bg-red-600 flex-1">&nbsp;</div>
        </div>

        <!-- <div>
            <header class="w-[98%] my-0 mx-auto flex items-center justify-between p-2">
                <h3 class="text-indigo-950 text-2xl">
                    xxxxxxx
                </h3>

                <div class="flex">
                    <span class="text-2xl cursor-pointer rounded-md text-indigo-950 hover:text-white hover:bg-indigo-950 flex items-center justify-center px-3" @click="fnPrev"> &lt; </span>
                    <span class="text-2xl cursor-pointer rounded-md text-indigo-950 hover:text-white hover:bg-indigo-950 flex items-center justify-center px-3" fnNext> &gt; </span>
                </div>                

            </header>
            



        </div> -->
        <main>
            <header>
			<h1>Top Hottest Products</h1>
			<p>
				<span @click="left_mover">a</span>
				<span @click="right_mover">b</span>
			</p>
		</header>
		<section>
			<div class="product">
				<picture>
					<img src="" alt="">
				</picture>
				<div class="detail">
					<p>
						<b>Product One</b><br>
						<small>New arrival</small>
					</p>
					<samp>$45.00</samp>
				</div>
				<div class="button">
					<p class="star">
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
					</p>
					<a href="#">Add-cart</a>
				</div>
			</div>
			<div class="product">
				<picture>
					<img src="" alt="">
				</picture>
				<div class="detail">
					<p>
						<b>Product Two</b><br>
						<small>New arrival</small>
					</p>
					<samp>$45.00</samp>
				</div>
				<div class="button">
					<p class="star">
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
					</p>
					<a href="#">Add-cart</a>
				</div>
			</div>
			<div class="product">
				<picture>
					<img src="" alt="">
				</picture>
				<div class="detail">
					<p>
						<b>Product Three</b><br>
						<small>New arrival</small>
					</p>
					<samp>$45.00</samp>
				</div>
				<div class="button">
					<p class="star">
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
					</p>
					<a href="#">Add-cart</a>
				</div>
			</div>
			<div class="product">
				<picture>
					<img src="" alt="">
				</picture>
				<div class="detail">
					<p>
						<b>Product Four</b><br>
						<small>New arrival</small>
					</p>
					<samp>$45.00</samp>
				</div>
				<div class="button">
					<p class="star">
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
					</p>
					<a href="#">Add-cart</a>
				</div>
			</div>
			<div class="product">
				<picture>
					<img src="" alt="">
				</picture>
				<div class="detail">
					<p>
						<b>Product Five</b><br>
						<small>New arrival</small>
					</p>
					<samp>$45.00</samp>
				</div>
				<div class="button">
					<p class="star">
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
					</p>
					<a href="#">Add-cart</a>
				</div>
			</div>
			<div class="product">
				<picture>
					<img src="" alt="">
				</picture>
				<div class="detail">
					<p>
						<b>Product Six</b><br>
						<small>New arrival</small>
					</p>
					<samp>$45.00</samp>
				</div>
				<div class="button">
					<p class="star">
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
					</p>
					<a href="#">Add-cart</a>
				</div>
			</div>
			<div class="product">
				<picture>
					<img src="" alt="">
				</picture>
				<div class="detail">
					<p>
						<b>Product Seven</b><br>
						<small>New arrival</small>
					</p>
					<samp>$45.00</samp>
				</div>
				<div class="button">
					<p class="star">
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
					</p>
					<a href="#">Add-cart</a>
				</div>
			</div>
			<div class="product">
				<picture>
					<img src="" alt="">
				</picture>
				<div class="detail">
					<p>
						<b>Product Eight</b><br>
						<small>New arrival</small>
					</p>
					<samp>$45.00</samp>
				</div>
				<div class="button">
					<p class="star">
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
					</p>
					<a href="#">Add-cart</a>
				</div>
			</div>
			<div class="product">
				<picture>
					<img src="" alt="">
				</picture>
				<div class="detail">
					<p>
						<b>Product Nine</b><br>
						<small>New arrival</small>
					</p>
					<samp>$45.00</samp>
				</div>
				<div class="button">
					<p class="star">
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
					</p>
					<a href="#">Add-cart</a>
				</div>
			</div>
			<div class="product">
				<picture>
					<img src="" alt="">
				</picture>
				<div class="detail">
					<p>
						<b>Product Ten</b><br>
						<small>New arrival</small>
					</p>
					<samp>$45.00</samp>
				</div>
				<div class="button">
					<p class="star">
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
					</p>
					<a href="#">Add-cart</a>
				</div>
			</div>
			<div class="product">
				<picture>
					<img src="" alt="">
				</picture>
				<div class="detail">
					<p>
						<b>Product Eleven</b><br>
						<small>New arrival</small>
					</p>
					<samp>$45.00</samp>
				</div>
				<div class="button">
					<p class="star">
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
					</p>
					<a href="#">Add-cart</a>
				</div>
			</div>
			<div class="product">
				<picture>
					<img src="" alt="">
				</picture>
				<div class="detail">
					<p>
						<b>Product Twelve</b><br>
						<small>New arrival</small>
					</p>
					<samp>$45.00</samp>
				</div>
				<div class="button">
					<p class="star">
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
						<strong>&star;</strong>
					</p>
					<a href="#">Add-cart</a>
				</div>
			</div>
		</section>

        </main>

        <!-- <div class="bg-slate-100 rounded-lg mx-4 mt-4 py-4 slider gap-4">

            <CardSkill />
            <CardSkill />
            <CardSkill />
            <CardSkill />
            <CardSkill />

        </div> -->

    </section>
</template>

<style scoped>
    /* .slider{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    } */

    main header{
			width: 98%;
			height: 60px;
			margin: 0 auto;
			/*background: gray;*/
			display: flex;
			align-items: center;
			padding: 20px;
			justify-content: space-between;
			border-bottom: 2px solid #ddd;
		}
		main header p span{
			font-size: 40px;
		    margin: 0 5px;
		    cursor: pointer;
		    color: #555;
		     width: 30px;
		    height: 30px;
		    display: inline-block;
		    line-height: 19px;
		    text-align: center;
		    border-radius: 3px;
		}
		main header p span:hover{
			background: #222;
    		color: white;
		}
		main section{
			width: 98%;
			height: 300px;
			/*background: red;*/
			margin: auto;
			display: flex;
			align-items: center;
			overflow-x: auto;
		}
		main section::-webkit-scrollbar{
			display: none;
		}
		main section .product{
			min-width: 24%;
			height: 90%;
			background: whitesmoke;
			margin:  0 20px  0 0;
			border-radius: 20px;
			position: relative;
			left: 0;
			transition: 0.5s;

		}
		main picture{
			width: 100%;
			height: 70%;
			padding: 20px;
			/*background: green;*/
			display: flex;
			overflow: hidden;
			margin-bottom: 20px;
		}
		main picture img{
			width: 100%;
		}
		main .detail,
		main .button{
			width: 90%;
			/*background: red;*/
			margin: auto;
			padding: 5px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 50px;
			font-size: 20px;
			color: #444;
		}
		main small{color: #555;}
		main a{
			text-decoration: none;
			padding: 6px 14px;
		    font-size: 15px;
		    margin: 5px 0 0 20px;
		    display: inline-block;
		    background: #6773ff;
		    color: white;
		}
		main p.star{
			margin: 5px auto;
		    width: 65%;
		    font-size: 25px;
		    color: #808080;
		}
		@media (max-width: 768px) {
			main .text h1{
				font-size: 35px;
			}
			main .text p{
				width: 90%;
			}
			main header h1{
				font-size: 25px;
			}
			main header p span{
				font-size: 30px;
			}
			main section .product {
				min-width: 49%;
				margin:  0 10px  0 0;
			}
			main .detail, .button{
				font-size: 16px;
			}
			main a{
				padding: 6px 10px;
			}
		}
</style>