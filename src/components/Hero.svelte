<script>
	import Button from './Button.svelte';
</script>

<div class="h-[600px] bg-hero bg-cover w-full justify-center flex">
	<div class="pt-[87px] max-w-[880px] justify-between flex w-full">
		<div class="max-w-[560px]">
			<p class="text-white text-2xl">Abra sua conta, é só baixar o app!</p>
			<h1 class="text-white text-[54px] font-semibold leading-[65px] mb-[24px] pt-[32px]">
				A conta digital certa pra cuidar bem do seu dinheiro
			</h1>
			<div class="flex gap-[24px]">
				<Button
					classList={'bg-[#FFC800] !text-gray-500 text-base'}
					textButton={'Abra sua conta digital'}
				/>
			</div>
			<div class="w-full flex justify-between mt-[59px]">
				<div class="w-full max-w-[148px] flex justify-between">
					<div class="w-[48px]">
						<img src="/assets/elipseHero.png" alt="hero elipse" class="absolute" />
						<img
							src="/assets/cardIconHero.svg"
							alt="hero elipse"
							class="relative top-[15px] left-[12px]"
						/>
					</div>
					<p class="text-white text-base ml-7">Cartão sem anuidade</p>
				</div>
				<div class="w-full max-w-[148px] flex justify-between">
					<div class="w-[48px]">
						<img src="/assets/elipseHero.png" alt="hero elipse" class="absolute" />
						<img
							src="/assets/zeroIconHero.svg"
							alt="hero elipse"
							class="relative top-[12px] left-[16px]"
						/>
					</div>
					<p class="text-white text-base ml-7">Conta digital 100% grátis</p>
				</div>
				<div class="w-full max-w-[148px] flex justify-between">
					<div class="w-[48px]">
						<img src="/assets/elipseHero.png" alt="hero elipse" class="absolute" />
						<img
							src="/assets/moneyIconHero.svg"
							alt="hero elipse"
							class="relative top-[15px] left-[17px]"
						/>
					</div>
					<p class="text-white text-base ml-7">Seu dinheiro rendendo mais</p>
				</div>
			</div>
		</div>
		<div>
			<h1
				class="opacity-40 text-white text-[48px] max-w-[500px] font-semibold w-full absolute right-50"
			>
				Banco 100% digital
			</h1>
			<div class="relative">
				<img src="/assets/circleHero.svg" alt="hero phone" class="mt-[90px]" />

				<img
					src="/assets/cardBackHeroD.png"
					alt="hero phone"
					class="absolute top-[-10px] right-[-110px]"
				/>
				<img src="/assets/cardFrontHero.png" alt="hero phone" class="absolute top-20 right-20" />
			</div>
		</div>
	</div>
</div>
