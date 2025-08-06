<script lang="ts">
import type { PageData } from "./$types";

let { data } = $props<{
  data: PageData;
}>();
const { post, fromPage } = data;
</script>

<div class="container mx-auto p-8">
  <article>
    <header class="mb-8">
      <h1 class="text-4xl font-extrabold text-gray-900 mb-2">{post.title}</h1>
      <div class="text-gray-500 text-sm">
        <span>작성자: {post.author}</span>
        <span class="mx-2">|</span>
        <span>작성일: {post.createdAt}</span>
        <span class="mx-2">|</span>
        <span>조회수: {post.views}</span>
      </div>
    </header>

    <div class="bg-white shadow-md rounded-lg p-8 min-h-[200px]">
      <p class="text-gray-800 text-lg">{post.title}</p>
    </div>
  </article>

  <div class="mt-12">
    <a href="/board?page={fromPage}"
       class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      &larr; 목록으로 돌아가기
    </a>
  </div>
</div>