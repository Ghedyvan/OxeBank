<script>
	export let textButton = '';
	export let classList = '';
    import { navigate } from 'svelte-navigator';

    function next(){
        
       
    }

</script>

<button type="submit" on:click={next} class="{classList} bg-transparent border text-white font-semibold py-2 px-4 rounded-3xl">
	{textButton}
</button>
