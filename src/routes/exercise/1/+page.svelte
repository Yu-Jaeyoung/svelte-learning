<script lang="ts">
let count = $state(0);
let message = $state("버튼을 클릭해주세요 !");

// count 값 증가, ??번 클릭 메시지 출력
function handleClick() {
  count++;
  message = `${count}번 클릭하셨습니다.`;
}

// count 값 초기화, 리셋 메시지 출력
function resetCount() {
  count = 0;
  message = "리셋되었습니다!";
}
</script>

<!--상태 표시 영역-->
<div class="p-8 max-w-2xl mx-auto">
  <h1 class="text-2xl font-bold mb-6 text-gray-800">
    1단계: 기본 상태와 이벤트 처리
  </h1>

  <div class="mb-6 p-4 bg-blue-50 rounded-lg">
    <p class="text-lg text-blue-800"
    >
      메시지: {message}
    </p>
    <p class="text-lg text-blue-800">
      카운트: {count}
    </p>
  </div>

  <!--이벤트 버튼-->
  <div class="flex gap-3">
    <button class="px-4 py-2 bg-blue-600
                 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            onclick={handleClick}>
      클릭({count})
    </button>
    <button class="px-4 py-2 bg-red-600
                 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
            onclick={resetCount}>
      리셋
    </button>
  </div>

</div>