<script lang="ts">
import { articles } from "$lib/data";

const itemsPerPage = 10;
let currentPage = $state(1);

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// $derived.by 는 여러 개의 파생된 상태(derived state)를 한 번에 계산하고 반환해야 할 때 사용
// 일반적인 $derived 가 단일 값을 계산하는 반면,
// $derived.by는 함수를 실행하고 그 함수가 반환하는 객체의 속성들을 각각 파생된 상태로 만듬

// 코드의 가장 중요한 특징은 반응성(Reactivity)
// $derived.by 콜백 함수 내에서 사용된 반응형 상태(currentPage)가 변경될 때마다,
// 이 함수는 자동으로 재실행되어 paginatedArticles 와 totalPages 값을 다시 계산

const { paginatedArticles, totalPages } = $derived.by(() => {
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // 원본 articles 배열을 변경하지 않고, startIndex 부터 endIndex 이전까지의 요소를 복사하여 새로운 배열을 만듬
  const paginatedArticles = articles.slice(startIndex, endIndex);

  return { paginatedArticles, totalPages };
});

function goToPage(page: number) {
  if (page >= 1 && page <= totalPages) {
    currentPage = page;
  }
}
</script>

<div class="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
  <div class="max-w-7xl mx-auto">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">게시판</h2>

    <div class="bg-white shadow-md rounded-lg overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
        <tr>
          <th
            scope="col"
            class="w-1/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            ID
          </th>
          <th
            scope="col"
            class="w-6/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            제목
          </th>
          <th
            scope="col"
            class="w-2/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            작성자
          </th>
          <th
            scope="col"
            class="w-2/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            작성일
          </th>
          <th
            scope="col"
            class="w-1/12 px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            조회수
          </th>
        </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        {#each paginatedArticles as article (article.id)}
          <tr class="hover:bg-gray-50 transition-colors duration-200">
            <td class="px-6 py-5 whitespace-nowrap text-sm text-gray-500">
              {article.id}
            </td>
            <td class="px-6 py-5 whitespace-nowrap text-sm text-gray-900">
              <a href="/blog/{article.id}" class="hover:underline">{article.title}</a>
            </td>
            <td class="px-6 py-5 whitespace-nowrap text-sm text-gray-500">
              {article.author}
            </td>
            <td class="px-6 py-5 whitespace-nowrap text-sm text-gray-500">
              {formatDate(article.date)}
            </td>
            <td class="px-6 py-5 whitespace-nowrap text-sm text-gray-500 text-right">
              {article.viewCount.toLocaleString()}
            </td>
          </tr>
        {/each}
        </tbody>
      </table>
    </div>

    <div class="mt-6 flex justify-center items-center space-x-2">
      <button
        onclick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        이전
      </button>
      {#each Array.from({ length: totalPages }, (_, i) => i + 1) as page}
        <button
          onclick={() => goToPage(page)}
          class="px-4 py-2 text-sm font-medium border rounded-md {currentPage === page
						? 'bg-blue-500 text-white border-blue-500'
						: 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}"
        >
          {page}
        </button>
      {/each}
      <button
        onclick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        다음
      </button>
    </div>
  </div>
</div>
