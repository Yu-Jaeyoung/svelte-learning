<script lang="ts">
import StatCardQuiz from "$lib/components/ui/StatCardQuiz.svelte";

let userName = $state<string>("");
let dateLoadPromise = $state<Promise<string> | null>(null);

function getTime() {
  dateLoadPromise = new Promise<string>((resolve) => {
    const intl = new Intl.DateTimeFormat("ko-KR", {
      dateStyle: "full",
      timeStyle: "medium",
    });

    setTimeout(() => {
      resolve(intl.format(new Date()));
    }, 2000);
  });
}
</script>

<h1 class="text-2xl font-bold mb-4">
  환영합니다.
</h1>

<StatCardQuiz title="사용자 이름 길이" minLength={userName.length}/>
<div class="mt-8 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <h3 class="font-bold text-lg mb-4">
    기능 테스트 섹션
  </h3>

  <!-- 사용자 이름 입력 -->
  <div class="mb-6">
    <label for="userName" class="block mb-2 font-medium text-gray-800 dark:text-gray-200">
      사용자 이름 입력 (Derived State)
    </label>
    <div class="flex items-center gap-3">
      <input id="userName"
             type="text"
             bind:value={userName}
             class="border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 w-full max-w-xs"
             placeholder="이름을 입력하여 글자 수 확인"
      >
      <span class="text-gray-600 dark:text-gray-400">
        길이: <span class="font-semibold text-blue-500 text-lg">{userName.length}</span>
      </span>
    </div>
    {#if userName.length > 8}
      <p class="mt-2 text-sm text-green-600 dark:text-green-500">
        환영합니다, <span class="font-bold">{userName}</span> 님!
      </p>
    {/if}
  </div>

  <!-- 데이터 로딩 테스트 -->
  <div class="mt-6 border-t pt-6 dark:border-gray-700">
    <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-3">비동기 데이터 로딩 (Await Block)</h4>
    <div class="flex items-center gap-4">
      <button
        id="dataLoadButton"
        class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors"
        onclick={getTime}>
        데이터 로딩
      </button>

      <div class="flex items-center gap-2">
        {#if dateLoadPromise}
          {#await dateLoadPromise}
            <p class="font-semibold">로딩중...</p>
            {:then date}
          <p class="font-medium text-yellow-600 dark:text-yellow-400">{date}</p>
            {:catch e}
              <p class="font-semibold text-red-500">에러 발생 : {e.message}</p>
            {/await}
        {/if}
      </div>
    </div>
  </div>
</div>



