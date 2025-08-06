<script lang="ts">
  import ArticleDetail from "$lib/components/ArticleDetail.svelte";
  import type { Article } from "$lib/data";

  const { data } = $props<{ data: { article: Article } }>();
</script>

<div class="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
  <div class="max-w-4xl mx-auto">
    <ArticleDetail article={data.article}/>
  </div>
</div>
