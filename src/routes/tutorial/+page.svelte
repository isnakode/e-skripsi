<script>
  import profil from "$asset/profil9.jpeg";
  import Header from "$comp/header.svelte";
</script>

<div class="flex flex-col h-dvh overflow-hidden">
  <Header />
  <main class="p-8 grid grid-cols-4 gap-8 flex-1 overflow-y-scroll hidescroll">
    {#each { length: 8 } as item}
      <div class="flex flex-col gap-4 bg-white rounded-xl p-4">
        <img
          src={profil}
          alt="l"
          class="rounded-xl aspect-video object-cover"
        />
        <p class="text-lg">Cara memperbaiki judul yang ditolak</p>
        <a href="https://youtube.com" class="btn bg-blue-400">Tonton</a>
      </div>
    {/each}
  </main>
</div>
