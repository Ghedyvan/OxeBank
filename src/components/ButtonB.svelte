<script>
	export let textButton = '';
	export let classList = '';
    import { navigate } from 'svelte-navigator';

    //Função
    function next(){
        const formulario = document.getElementsByClassName('form-boleto');
        console.log(formulario[0].classList);
        formulario[0].classList.add('hidden');
    }

</script>

<button on:click={next} class="{classList} bg-transparent border text-white font-semibold py-2 px-4 rounded-3xl">
	{textButton}
</button>
