<script>
  import Header from "$comp/header.svelte";
  import logo from "$lib/logo.png";
</script>

<div class="static-body">
  <Header />
  <main class="flex flex-1 items-center gap-8">
    <div class="flex flex-col p-8 gap-4 basis-1/2">
      <h3 class="text-5xl font-bold">Atur skripsi kamu dari satu tempat</h3>
      <p>
        Dosen pembimbing susah dihubungi?, atau murid tidak responsif?,
        selamat!!!, semua masalah itu bisa kamu tangani bersama kami disini
      </p>
      <div class="flex gap-2">
        <a href="/daftar" class="btn bg-primary">Daftar</a>
        <a
          href="/tutorial"
          class="btn border-2 text-primary border-primary bg-transparent"
          >Pelajari</a
        >
      </div>
    </div>
    <div class="basis-1/2 flex items-center justify-center p-8">
      <img src={logo} alt="" />
    </div>
  </main>
</div>
