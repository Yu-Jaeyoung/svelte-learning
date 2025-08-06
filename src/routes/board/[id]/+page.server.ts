import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, url, fetch }) => {
  // 저장하고 불러오는 것이 맞음
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  );

  if (!response.ok) {
    throw error(response.status, "Failed to fetch post");
  }

  const post = await response.json();
  const fromPage = url.searchParams.get("from") ?? "1";

  return {
    post,
    fromPage,
  };
};
