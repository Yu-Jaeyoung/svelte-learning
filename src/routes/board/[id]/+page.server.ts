import { error } from "@sveltejs/kit";
import { postDb } from "@/routes/board/database";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params, url }) => {
  const post = postDb.posts.find((p) => p.id === Number(params.id));

  if (!post) {
    throw error(404, "Post not found");
  }

  const fromPage = url.searchParams.get("from") ?? "1";

  return {
    post,
    fromPage,
  };
};
