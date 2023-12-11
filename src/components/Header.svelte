<script>
	import Button from './Button.svelte';
</script>

<div class="w-full h-[88px] justify-center flex bg-hero bg-cover border-b-gray-50 border-b border-opacity-30">
	<div class="max-w-[1216px] flex justify-between w-full">
		<img src="/assets/logoWhite.svg" alt="logo arkademy" class="w-[180px]" />
		<ul class="flex gap-[40px] items-center">
			<li>
				<a href="/" class="text-white">Produtos</a>
			</li>
			<li>
				<a href="/" class="text-white">Quem somos</a>
			</li>
			<li>
				<a href="/" class="text-white">Ajuda</a>
			</li>
			<li>
				<Button textButton={'Abra sua conta digital'} backgroundColor={'red'}/>
			</li>
		</ul>
	</div>
</div>
