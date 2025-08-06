import { dev } from "$app/environment";
import type { Post } from "$lib/types/post";

type PostDatabase = {
  posts: Array<Post>;
};

declare global {
  var __post_db: PostDatabase | undefined;
}

const db = globalThis.__post_db ?? {
  posts: Array.from({ length: 50 }, (_, i) => ({
    id: i,
    title: `${i + 1} 번째 게시글`,
    content: `${i + 1} 번째 게시글 내용`,
    author: `작성자 ${i + 1}`,
    createdAt: new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 30)
      .toISOString()
      .split("T")[0],
    views: Math.floor(Math.random() * 1000),
  })),
};

if (dev) {
  globalThis.__post_db = db;
}

export const postDb = db;
