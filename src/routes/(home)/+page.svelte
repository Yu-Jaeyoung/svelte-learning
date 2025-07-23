<script lang="ts">
import StatCard from "$lib/components/ui/StatCard.svelte";
import StatCardTest from "$lib/components/ui/StatCardTest.svelte";

let firstName: string = $state("Jaeyoung");
let lastName: string = $state("Yu");

let fullName: string = $derived(`${firstName} ${lastName}`);

let activeUsers = $state(120);
let totalUsers = $state(120);

let userName = $state("");
let userNameLength = $derived(userName.length);

type Activity = {
  id: number;
  user: string;
  action: string;
};

let activities: Array<Activity> = $state([
  {
    id: 1,
    user: "Jaeyoung Yu",
    action: "Updated Profile",
  },
  {
    id: 2,
    user: "Jaeil Yu",
    action: "Create new Document",
  },
]);

let activatedStatus = $state(false);

$effect(() => {
  console.info(
    `[Effect] StatCardTest 'activatedStatus' 의 값이 '${activatedStatus}'로 업데이트`,
  );
});

const activityPromise = new Promise<string>((resolve) => {
  setTimeout(() => resolve("Completed load logs."), 2000);
});

function getTime() {
  const date = new Date();

  return date.toLocaleTimeString();
}

function timePromise() {
  new Promise<string>(() => {
    setTimeout(() => {
      strValue = getTime();
    }, 2000);
  });
}

function refresh() {
  strValue = "시간 정보 로딩 중...";
}

let strValue = $state("시간 정보 로딩 중...");
</script>

<h1 class="text-2xl font-bold mb-4">
  환영합니다.
</h1>
<p>
  이곳은 어드민 대시보드의 메인 페이지입니다.
</p>

<!--이름-->
<div class="mt-8 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <h3 class="font-bold text-lg mb-4">
    사용자 프로필(Rune Test)
  </h3>

  <div>
    <label for="firstName" class="pr-2">
      First Name:
    </label>

    <input id="firstName"
           bind:value={ firstName }
           class="border rounded px-2 py-1 dark:bg-gray-700"
    />
  </div>
  <div>
    <label for="lastName" class="pr-2">
      Last Name:
    </label>

    <input id="lastName"
           bind:value={ lastName }
           class="border rounded px-2 py-1 dark:bg-gray-700"
    />
  </div>

  <p class="mt-4">
    Full Name:
    <span class="font-bold text-blue-500">
    { fullName }
    </span>
  </p>

</div>

<!-- 버튼 -->
<div class="mt-4 flex gap-4">
  <button id="totalUsers"
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors"
          onclick={()=> totalUsers++}
  >
    총 방문자 버튼
  </button>

  <button id="activeUsers"
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors"
          onclick={()=> activeUsers++}
  >
    활성 사용자 버튼
  </button>
</div>

<!--통계: Prop 테스트-->
<div class="mt-6 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
    <StatCard title="총 방문자" value={totalUsers} icon="😘"/>
    <StatCard title="활성 사용자" value={activeUsers} icon="👏"/>
  </div>
</div>

<!--활동 로그-->
<div class="mt-8 bg-white rounded-lg shadow-md dark:bg-gray-800 p-6">
  <h3 class="font-bold text-lg mb-4">
    최근 활동
  </h3>

  {#await activityPromise}
    <p class="text-gray-500">
      불러오는 중...
    </p>
  {:then message}
    <p class="text-green-500 mb-4 font-semibold">
      {message}
    </p>
    <ul>
      {#each activities as activity (activity.id)}
        <li class="py-2 border-b dark:border-gray-700 last:border-b-0">
          <span class="font-semibold">
            {activity.user}
          </span>
          님이 {activity.action}
        </li>
      {:else}
        <p> 표시할 활동이 없습니다.</p>
      {/each}
    </ul>
  {:catch error}
    <p class="text-red-500">
      오류가 발생했습니다: {error.message}
    </p>
  {/await}
</div>

<br>
<!--Test-->
<StatCardTest title="사용자 이름 길이" minLength={userNameLength}/>
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
        길이: <span class="font-semibold text-blue-500 text-lg">{userNameLength}</span>
      </span>
    </div>
    {#if userNameLength > 10}
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
        onclick={()=> {
          activatedStatus = !activatedStatus;

          if(activatedStatus) {
              timePromise();
          } else {
            refresh();
          }

      }}>
        데이터 로딩
      </button>

      <div class="flex items-center gap-2">
        {#if activatedStatus}
          <span class="font-medium text-yellow-600 dark:text-yellow-400">{strValue}</span>
        {/if}
      </div>
    </div>
  </div>
</div>



