<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { onDestroy } from 'svelte';

  let bgColor = 'white';

  // Function to handle mousemove event
  /**
   * @param {{ clientX: number; clientY: number; }} event
   */
  function handleMouseMove(event) {
    // Update background color based on mouse position
    const xPercentage = (event.clientX / window.innerWidth) * 100;
    const yPercentage = (event.clientY / window.innerHeight) * 100;

    // Set background color based on mouse position
    bgColor = `hsl(${xPercentage}, 50%, ${yPercentage}%)`;
		
  }

  // Add event listener on component creation
  window.addEventListener('mousemove', handleMouseMove);

  // Cleanup event listener on component destruction
  onDestroy(() => {
    window.removeEventListener('mousemove', handleMouseMove);
  });
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section style="background-color: {bgColor}">
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
