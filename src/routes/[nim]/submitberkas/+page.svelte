<script>
  import Header from "$comp/header.svelte";
</script>

<div class="static-body">
  <Header profile />
  <div class="flex items-start gap-8 flex-1 px-8">
    <div class="bg-white rounded-xl shadow-lg w-1/3 p-8">
      <h2 class="font-bold text-orange-400 text-lg">Syarat</h2>
      <br />
      <p class="mb-2">Pastikan kamu menyiapkan:</p>
      <ul>
        <li>✔️ Foto</li>
        <li>✔️ KHS</li>
        <li>✔️ KTP</li>
        <li>✔️ Ijazah</li>
      </ul>
    </div>
    <div class="bg-white rounded-xl shadow-lg flex-1 p-8">
      <h2 class="font-bold text-lg mb-4">Masukkan berkas-berkas anda</h2>
      <label for="" class="mb-1">Foto KTP / KK</label>
      <input type="file" class="w-full mb-2" />
      <label for="" class="mb-1">Foto Ijazah</label>
      <input type="file" class="w-full mb-2" />
      <label for="" class="mb-1">Foto KHS semester 1-7</label>
      <input type="file" class="w-full mb-4" />
      <button class="btn bg-primary">Kirim</button>
    </div>
  </div>
</div>
