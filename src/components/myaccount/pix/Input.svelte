<script>
	import Button from '../../Button.svelte';
    import ButtonB from '../../ButtonC.svelte';
    var chavePix = '';
    var valorTransferencia = '';
    const form = document.getElementsByClassName('form-pix');
    const confirma = document.getElementsByClassName('confirma-pix');

    function next(){
        form[0].classList.add('!hidden');
        confirma[0].classList.remove('hidden');
        chavePix = document.getElementById('chavePix').value;
        valorTransferencia = document.getElementById('valorTransferencia').value;
        if(chavePix == '' || valorTransferencia == ''){
            alert('Preencha todos os campos');
            form[0].classList.remove('!hidden');
            confirma[0].classList.add('hidden');
        }
        console.log(chavePix);
        console.log(valorTransferencia);
    }
</script>

<div class="bg-white w-full h-[242px] flex flex-col items-center mt-24 mb-24">
	<div class="max-w-[1216px] w-full flex justify-center">
		<form class="form-pix flex flex-col w-full max-w-[400px] !border-opacity-0">
            <select name="tipoChave" id="tipoChave" class="w-full border border-gray-500 rounded-md p-2 input-boleto mb-6">
                <option value="">Selecione o tipo de chave</option>
                <option value="1">Chave de CPF</option>
                <option value="2">Chave de Email</option>
                <option value="2">Chave aleatória</option>
            </select>
            <input type="text" id="chavePix" placeholder="Digite a chave PIX" class="w-full border border-gray-500 rounded-md p-2 input-boleto mb-6">
            <input type="number" id="valorTransferencia" placeholder="Digite o valor da transferência" class="w-full border border-gray-500 rounded-md p-2 input-boleto  mb-6">
            <div class="w-full flex justify-between">
                <Button textButton='Retornar' rota='/myaccount' classList='!text-white !font-light !px-8 !bg-[#053F5C]'  />
                <button type="submit" on:click={next} class="!text-black !px-8 !bg-[#F7AD19] bg-transparent border  font-semibold py-2 rounded-3xl">
                    Pagar
                </button>
            </div>
        </form>

        <!-- SE O PAGAMENTO FOR CONCLUÍDO, DEVE APARECER ESSE BLOCO ABAIXO -->

        <div class=" confirma-pix flex-col w-full max-w-[400px] !border-opacity-0 hidden">
            <h2 class="text-center text-[22px]">
                O valor total desse pagamento é de<br> R$ {valorTransferencia} <br>
                para a chave PIX:<br> {chavePix}
            </h2>
            
            <div class="w-full flex justify-between mt-8">
                <Button textButton='Cancelar' rota='/myaccount' classList='!text-white !font-light !px-8 !bg-[#053F5C]'  />
                <Button textButton='Efetuar pagamento' classList='!text-black !px-8 !bg-[#F7AD19]'  />
            </div>
        </div>
	</div>
</div>
