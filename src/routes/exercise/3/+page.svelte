<script lang="ts">
// 사용자 배열 상태 유지
let users = $state([
  { id: 1, name: "홍길동", email: "hong@example.com" },
  { id: 2, name: "이순신", email: "lee@example.com" },
]);

let newUserName = $state("");
let newUserEmail = $state("");
let formMessage = $state("");

function handleSubmit(event: SubmitEvent) {
  // 중요한: 기본 폼 제출 동작 방지
  event.preventDefault();

  if (newUserName && newUserEmail) {
    users.push({
      id: Date.now(), // 실제 앱에서는 서버에서 생성된 ID 사용
      name: newUserName,
      email: newUserEmail,
    });

    // 폼 리셋 및 성공 메시지
    newUserName = "";
    newUserEmail = "";
    formMessage = "사용자가 성공적으로 추가되었습니다!";

    // 3초 후 메시지 숨기기
    setTimeout(() => {
      formMessage = "";
    }, 2000);
  } else {
    formMessage = "이름과 이메일을 모두 입력해주세요!";
  }
}

function deleteUser(targetId: number) {
  users = users.filter((user) => user.id !== targetId);
}
</script>

<div class="p-8 max-w-4xl mx-auto">
  <h1 class="text-2xl font-bold mb-6 text-gray-800">
    3단계: 폼 제출과 이벤트 처리
  </h1>

  <!--onsubmit 이벤트가 발생하면 handleSubmit 함수를 호출합니다.-->
  <form onsubmit={handleSubmit} class="mb-8 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-xl font-semibold mb-4">
      사용자 추가
    </h2>


    <!--formMessage에 값이 있을 때만 내부의 div를 렌더링합니다.-->
    {#if formMessage}
      <div class="mb-4 p-3 rounded bg-green-100 text-green-800">
        {formMessage}
      </div>
    {/if}

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label class="block text-sm font-medium mb-1">
          이름
          <input
            type="text"
            bind:value={newUserName}
            class="w-full border rounded-md p-2"
            placeholder="이름 입력"
            required
          />
        </label>
      </div>
      <div>
        <label class="block text-sm font-medium mb-1">
          이메일
          <input
            type="email"
            bind:value={newUserEmail}
            class="w-full border rounded-md p-2"
            placeholder="이메일 입력"
            required
          />
        </label>
      </div>
    </div>

    <button
      type="submit"
      class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
    >
      사용자 추가
    </button>
  </form>

  <!-- 사용자 목록 -->
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <h2 class="text-xl font-semibold p-4 bg-gray-50">
      사용자 목록 ({users.length}명)
    </h2>
    <div class="divide-y">
      {#each users as user (user.id)}
        <div class="p-4 flex justify-between items-center">
          <div>
            <div class="font-medium">
              {user.name}
            </div>
            <div class="text-gray-600 text-sm">
              {user.email}
            </div>
          </div>
          <button
            onclick={() => deleteUser(user.id)}
            class="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded"
          >
            삭제
          </button>
        </div>
      {/each}
    </div>
  </div>
</div>