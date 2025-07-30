<script lang="ts">
import StatCard from "$lib/components/ui/StatCard.svelte";

let firstName: string = $state("Jaeyoung");
let lastName: string = $state("Yu");

let fullName: string = $derived(`${firstName} ${lastName}`);

let activeUsers = $state(120);
let totalUsers = $state(120);

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

const activityPromise = new Promise<string>((resolve) => {
  setTimeout(() => resolve("Completed load logs."), 2000);
});
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