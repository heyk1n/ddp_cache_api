Deno.serve(async (req) => {
	const cache = await caches.open("res");

	const cachedResponse = await cache.match(req);

	if (cachedResponse) {
		return cachedResponse;
	} else {
		const response = new Response(new Date().toString());
		await cache.put(req, response.clone());

		return response;
	}
});
