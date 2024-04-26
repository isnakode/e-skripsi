<script>
  import Header from "$comp/header.svelte";
  import alur from "$lib/alur_skripsi";
  import ProgressCard from "./ProgressCard.svelte";
</script>

<div class="static-body">
  <Header profile={true} />
  <div class="flex-1 grid grid-cols-3 p-8 gap-4 hidescroll overflow-y-scroll">
    {#each alur as progres, i}
      <ProgressCard {...progres} />
    {/each}
  </div>
</div>
