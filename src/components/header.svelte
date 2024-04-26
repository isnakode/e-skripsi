<script>
  import { page } from "$app/stores";
  import avatar from "$asset/profil8.jpeg";

  export let background = "transparent";
  export let profile = false;
  let classname = "";
  export { classname as class };

  const menus = [
    { name: "Beranda", path: "/" },
    { name: "Tentang", path: "/tentang" },
    { name: "Tutorial", path: "/tutorial" },
  ];
</script>

<header
  style:background
  class="px-8 py-4 flex justify-between items-center {classname}"
>
  <a href="/">
    <h2 class="font-bold text-xl">E-SKRIPSI</h2>
  </a>
  <nav class="flex items-center gap-4">
    {#each menus as menu}
      <a
        href={menu.path}
        class="cursor-pointer border-y-[1.5px] border-y-transparent {$page.url
          .pathname == menu.path
          ? 'border-b-black'
          : 'hover:border-b-black/50'} transition-all"
      >
        {menu.name}
      </a>
    {/each}
  </nav>
  {#if profile}
    <button class="group relative">
      <img
        src={avatar}
        alt="/"
        class="object-cover rounded-full size-10 border-2 border-green-400"
      />
      <div
        class="hidden bg-white shadow-lg rounded-lg flex-col py-2 absolute top-[110%] right-0 group-focus-within:flex"
      >
        {#each { length: 4 } as i, index}
          <a href="/" class="text-nowrap hover:bg-primary/20 px-3 py-1"
            >index ke-{index}</a
          >
        {/each}
      </div>
    </button>
  {:else}
    <a href="/daftar" class="btn bg-primary">Daftar</a>
  {/if}
</header>
