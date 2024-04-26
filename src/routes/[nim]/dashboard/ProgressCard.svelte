<script>
  import lock from "$asset/lock.svg";
  /**@type {string}*/
  export let path;
  /**@type {string}*/
  export let title;
  /**@type {string}*/
  export let description;
  /**@type {number}*/
  export let progress;
  /**@type {boolean}*/
  export let locked = false;
</script>

<a
  href={locked ? null : path}
  class="flex gap-1 flex-col p-8 rounded-xl transition-all {locked
    ? 'cursor-not-allowed bg-slate-300 items-center'
    : 'cursor-pointer hover:shadow-lg shadow-sm bg-white'}"
>
  <h2 class="font-bold text-lg">{title}</h2>
  {#if locked}
    <img src={lock} alt="" class="size-16 mt-4" />
  {:else}
    <p class="mb-2">{description}</p>
    <div class="flex justify-between items-center">
      <div class="bg-slate-300 h-6 basis-10/12 rounded-full overflow-hidden">
        <div
          style:width="{progress}%"
          class="bg-primary rounded-full h-full transition-all"
        ></div>
      </div>
      <p class="font-bold">{progress}%</p>
    </div>
  {/if}
</a>
