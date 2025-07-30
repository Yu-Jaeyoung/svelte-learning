<script lang="ts">
let users = $state([
  { id: 1, name: "홍길동", email: "hong@example.com" },
  { id: 2, name: "이순신", email: "lee@example.com" },
]);

let count = $derived(users.length);

// 사용자 추가를 위한 입력 상태
let newUserName = $state("");
let newUserEmail = $state("");

// 사용자 추가 함수
function addUser() {
  if (newUserName && newUserEmail) {
    users.push({
      id: users.length + 1,
      name: newUserName,
      email: newUserEmail,
    });

    newUserName = "";
    newUserEmail = "";
  }
}

// 사용자 삭제 함수
function deleteUser(targetId: number) {
  users = users.filter((user) => user.id !== targetId);
}
</script>

<div class="p-8 max-w-4xl mx-auto">
  <h1 class="text-2xl font-bold mb-6 text-gray-800">
    2단계: 배열 상태와 목록 관리
  </h1>

  <!-- 사용자 추가 폼 -->
  <div class="mb-8 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-xl font-semibold mb-4">
      사용자 추가
    </h2>
    <div class="flex gap-4 items-end">

      <div>
        <label class="block text-sm font-medium mb-1">
          이름
          <input
           type="text"
           class="w-full border rounded-md p-2"
           placeholder="이름 입력"
           bind:value={newUserName}
          />
        </label>
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">
          이메일
          <input
            type="email"
            class="w-full border rounded-md p-2"
            placeholder="이메일 입력"
            bind:value={newUserEmail}
            required
          />
        </label>
      </div>

      <button
        class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg"
        onsubmit={addUser}
      >
        추가
      </button>

    </div>
  </div>

  <!-- 통계 정보 -->
  <div class="mb-4 p-3 bg-blue-100 rounded-lg">
    총 사용자 수: {count}명
  </div>

  <!-- 사용자 목록 -->
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <h2 class="text-xl font-semibold p-4 bg-gray-50">
      사용자 목록
    </h2>
    <div class="divide-y">
      {#each users as user (user.id)}
        <div class="p-4 flex justify-between items-center">
          <div>
            <div class="font-medium">{user.name}</div>
            <div class="text-gray-600 text-sm">{user.email}</div>
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