<script>
  import src from "$asset/profil9.jpeg";
  import Header from "$comp/header.svelte";
  import Tag from "$comp/tag.svelte";
  /**
   * @type {number[]}
   */
  let selected = [];
  let height = 0;
</script>

<div class="static-body">
  <Header profile />
  <div
    style="padding-bottom: {height + 8}px;"
    class="p-8 grid grid-cols-5 gap-4 overflow-y-scroll hidescroll"
  >
    {#each { length: 8 } as item}
      <div class="rounded-xl bg-white shadow-lg p-4 flex flex-col gap-4">
        <img
          {src}
          alt=""
          class="aspect-square w-full object-cover rounded-lg"
        />
        <p class="text-center font-bold text-xl">Ibu eleana</p>
        <div class="flex gap-1 flex-wrap justify-center">
          <Tag title="AI" />
          <Tag title="Website" />
          <Tag title="IOT" />
          <Tag title="Machine learning" />
        </div>
        <button
          on:click={() => {
            selected = [8, ...selected];
          }}
          class="btn bg-primary">Pilih Dosen</button
        >
      </div>
    {/each}
  </div>
</div>

{#if selected.length > 0}
  <div
    bind:clientHeight={height}
    class="absolute bottom-0 w-full flex justify-between items-end bg-white p-4 border-t-2 border-black"
  >
    <div class="flex flex-col gap-2">
      {#each selected as dosen}
        <p class="bg-blue-400 p-2 text-white font-bold rounded-lg">
          Ibu dosen imut tercinta
        </p>
      {/each}
    </div>
    <button
      on:click={() => {
        selected = [];
        height = 0;
      }}
      class="btn bg-primary">Pilih</button
    >
  </div>
{/if}
