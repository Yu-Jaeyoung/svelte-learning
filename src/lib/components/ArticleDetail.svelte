<script lang="ts">
  import type { Article } from "$lib/data";

  let { article } = $props<{ article: Article }>();

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
</script>

<h1 class="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>

<div class="flex items-center space-x-4 text-sm text-gray-500 mb-8 pb-8 border-b px-2">
  <span>작성자: {article.author}</span>
  <span class="text-gray-300">|</span>
  <span>작성일: {formatDate(article.date)}</span>
  <span class="text-gray-300">|</span>
  <span>조회수: {article.viewCount.toLocaleString()}</span>
</div>

<div class="bg-white p-8 rounded-lg shadow-md min-h-[300px] text-gray-800 leading-relaxed">
  {article.content}
</div>

<div class="mt-8">
  <a
    href="/blog"
    class="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold text-sm rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
  >
    <span class="mr-2 font-bold">←</span>
    목록으로 돌아가기
  </a>
</div>
