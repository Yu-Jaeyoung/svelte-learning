import type { PageServerLoad } from "./$types";
import { postDb } from "./database";

export const load: PageServerLoad = async ({ url }) => {
  const page = Number(url.searchParams.get("page")) || 1;

  const pageSize = 10;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const allPosts = await response.json();

  // 페이징
  const totalPages = Math.ceil(allPosts.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const posts = allPosts.slice(startIndex, endIndex);

  console.log(postDb.posts.length);

  return {
    posts: posts,
    currentPage: page,
    totalPages,
  };
};
