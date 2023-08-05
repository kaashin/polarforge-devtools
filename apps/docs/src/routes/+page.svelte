<script>
	import Unlog from '@polarforge/unlog';
	import { writable } from 'svelte/store';

	import Matter from 'matter-js';
	import { onMount } from 'svelte';

	let canvasEl;

	let { Engine, Render, Runner, Bodies, Composite } = Matter;

	onMount(() => {
		let engine = Engine.create();

		console.log({ canvasEl });
		let canvasWidth = canvasEl.scrollWidth;
		let canvasHeight = canvasEl.scrollHeight;

		let render = Render.create({
			canvas: canvasEl,
			engine: engine,
			options: {
				width: canvasWidth,
				height: canvasHeight,
				wireframes: false,
				pixelRatio: 1
			}
		});

		let boxA = Bodies.rectangle(400, 200, 80, 80);
		let boxB = Bodies.rectangle(450, 50, 80, 80);
		let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

		Composite.add(engine.world, [boxA, boxB, ground]);

		Render.run(render);

		let runner = Runner.create();

		Runner.run(runner, engine);
	});

	const TestStore = writable(5);
</script>

<style>
</style>

<!-- {$TestStore} -->

<canvas style:width="100vw" style:height="100vh" bind:this={canvasEl} />

<Unlog stores={[{ name: 'Test', store: TestStore }]} enable={import.meta.env.DEV} />
