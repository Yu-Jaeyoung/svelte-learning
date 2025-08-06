import { error } from "@sveltejs/kit";
import { articles } from "$lib/data/article";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
  const article = articles.find((a) => a.id === Number(params.id));

  if (!article) {
    error(404, "게시글을 찾을 수 없습니다.");
  }

  return {
    article,
  };
};
