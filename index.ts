import { serve } from "https://deno.land/std/http/server.ts";

serve(async (req) => {
  const url = new URL(req.url);
  const ip = url.searchParams.get("input");

  if (!ip) {
    return new Response("Missing input", { status: 400 });
  }

  const res = await fetch(`https://ipinfo.io/${ip}/json`);
  const data = await res.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
});
