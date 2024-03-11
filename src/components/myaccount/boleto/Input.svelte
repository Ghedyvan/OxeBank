<script>
	import Button from '../../Button.svelte';
    import ButtonB from '../../ButtonB.svelte';

</script>

<div class="bg-white w-full h-auto flex flex-col items-center mt-24 mb-24">
	<div class="max-w-[1216px] w-full flex justify-center">
		<form class="form-boleto flex flex-col w-full max-w-[400px] !border-opacity-0">
            <img src="/assets/barcodeCenter.png" alt="" class="w-[400px] mb-8">
            <input type="number" placeholder="Digite o código de barras" class="w-full border border-gray-500 rounded-md p-2 input-boleto mb-6">
            <div class="w-full flex justify-between">
                <Button textButton='Retornar' rota='/myaccount' classList='!text-white !font-light !px-8 !bg-[#053F5C]'  />
                <ButtonB textButton='Prosseguir' classList='!text-black !px-8 !bg-[#F7AD19]'  />
            </div>
        </form>
	</div>
</div>
