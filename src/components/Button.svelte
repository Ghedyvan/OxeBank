<script>
	import { navigate } from 'svelte-navigator';
	export let textButton = '';
	export let classList = '';
</script>

<button class="bg-transparent border text-white font-semibold py-2 px-4 rounded-3xl {classList}" on:click={() => navigate('/login')}>
	{textButton}
</button>
