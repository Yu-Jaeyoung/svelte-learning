<script lang="ts">
type Props = {
  title: string;
  minLength: number;
};

let { title, minLength }: Props = $props();
</script>


<div class="bg-white dark:bg-gray-800 rounded-lg shadow p-5 flex items-center gap-4">
  <div>
    <h4 class="text-sm text-gray-500 dark-text-gray-400">
      {title}
    </h4>
    <p class="text-3xl font-bold">
      {minLength}
    </p>
  </div>
</div>
