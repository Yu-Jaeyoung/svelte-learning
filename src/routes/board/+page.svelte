<script lang="ts">
import { goto } from "$app/navigation";
import type { PageData } from "./$types";

let { data } = $props<{ data: PageData }>();
const allPosts = $derived(data.posts);
let currentPage = $state(data.currentPage);
const pageSize = 10;

$effect(() => {
  currentPage = data.currentPage;
});

const totalPages = $derived(Math.ceil(allPosts.length / pageSize));
const paginatedPosts = $derived(
  allPosts.slice((currentPage - 1) * pageSize, currentPage * pageSize),
);

function goToPage(page: number) {
  if (page >= 1 && page <= totalPages) {
    goto(`?page=${page}`, { keepFocus: true, noScroll: true });
  }
}
</script>

<div class="container mx-auto p-8">
  <h1 class="text-3xl font-bold mb-6 text-gray-800">게시판</h1>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3">ID</th>
        <th scope="col" class="px-6 py-3">제목</th>
        <th scope="col" class="px-6 py-3">작성자</th>
        <th scope="col" class="px-6 py-3">작성일</th>
        <th scope="col" class="px-6 py-3">조회수</th>
      </tr>
      </thead>
      <tbody>
      {#each paginatedPosts as post (post.id)}
        <tr class="bg-white border-b hover:bg-gray-50">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {post.id}
          </th>
          <td class="px-6 py-4">
            <a href="/board/{post.id}?from={currentPage}" class="hover:underline hover:text-blue-600">{post.title}</a>
          </td>
          <td class="px-6 py-4">{post.author}</td>
          <td class="px-6 py-4">{post.createdAt}</td>
          <td class="px-6 py-4">{post.views}</td>
        </tr>
      {/each}
      </tbody>
    </table>
  </div>

  <!-- Pagination -->
  <div class="flex justify-center items-center mt-6">
    <nav class="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
      <button
        onclick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        이전
      </button>
      {#each { length: totalPages } as _, i}
        {@const page = i + 1}
        <button
          onclick={() => goToPage(page)}
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium {currentPage === page ? 'bg-blue-50 border-blue-500 text-blue-600 z-10' : 'bg-white text-gray-700 hover:bg-gray-50'}"
        >
          {page}
        </button>
      {/each}
      <button
        onclick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        다음
      </button>
    </nav>
  </div>
</div>