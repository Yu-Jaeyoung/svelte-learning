import type { PageServerLoad } from "./$types";
import { postDb } from "./database";

export const load: PageServerLoad = ({ url }) => {
  const page = Number(url.searchParams.get("page")) || 1;

  console.log(postDb.posts.length);

  return {
    posts: postDb.posts,
    currentPage: page,
  };
};
