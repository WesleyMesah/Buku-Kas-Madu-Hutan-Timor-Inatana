
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Buku Kas Madu Hutan Timor Ina Tana</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
  <link rel="manifest" href="data:application/manifest+json,{
    'name': 'Buku Kas Madu Hutan Timor Ina Tana',
    'short_name': 'MaduKas',
    'start_url': '.',
    'display': 'standalone',
    'background_color': '#ffffff',
    'theme_color': '#3B6D11',
    'icons': [{'src': 'WhatsApp Image 2025-07-19 at 10.26.46.jpeg','sizes':'192x192','type':'image/jpeg'}]
  }">
  <script>
    tailwind.config = {
      darkMode: 'class',
    }
  </script>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; }
    .toast { animation: slideUp 0.3s ease; }
    @keyframes slideUp { from { transform: translate(-50%, 100%); } to { transform: translate(-50%, 0); } }
    .tab-content { display: none; }
    .tab-content.active { display: block; }
  </style>
</head>
<body class="bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-200">

<div class="max-w-2xl mx-auto p-4 pb-24">

  <!-- ====================================================================== -->
  <!-- DI BAWAH INI ADALAH BODY BAGIAN LOGO YANG BISA ANDA SESUAIKAN/INPUT -->
  <!-- ====================================================================== -->
  <div class="flex items-center gap-4 mb-6">
    <!-- Kontainer Logo Kustom dengan fallback gambar jika bermasalah -->
    <div class="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center p-1 shadow-md border border-gray-100 dark:border-slate-700 overflow-hidden">
      <img 
        src="WhatsApp Image 2025-07-19 at 10.26.46.jpeg" 
        alt="Logo Madu Hutan Timor Ina Tana" 
        class="w-full h-full object-contain rounded-xl"
        onerror="this.onerror=null; this.src='https://placehold.co/150x150/3B6D11/ffffff?text=🍯';"
      >
    </div>
    <div>
      <h1 class="text-2xl font-bold tracking-tight">Buku Kas Madu</h1>
      <p id="tanggal-header" class="text-xs text-gray-500 dark:text-gray-400 font-medium"></p>
    </div>
    <button onclick="toggleDarkMode()" class="ml-auto w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm border border-gray-100 dark:border-slate-700 text-xl transition-all">
      <i class="fas fa-moon dark:hidden text-amber-500"></i>
      <i class="fas fa-sun hidden dark:block text-amber-400"></i>
    </button>
  </div>
  <!-- ====================================================================== -->
  <!-- AKHIR DARI BAGIAN LOGO UTAMA -->
  <!-- ====================================================================== -->

  <!-- Navigation -->
  <div class="grid grid-cols-5 gap-2 mb-6 text-sm sticky top-2 z-10 bg-gray-50/85 dark:bg-slate-900/85 backdrop-blur-md p-1 rounded-2xl">
    <button onclick="gotoTab('ringkasan')" class="nav-btn flex flex-col items-center py-2.5 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-transparent transition-all" id="btn-ringkasan">
      <i class="fas fa-home text-lg"></i><span class="text-[10px] sm:text-xs mt-1">Ringkasan</span>
    </button>
    <button onclick="gotoTab('jual')" class="nav-btn flex flex-col items-center py-2.5 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-transparent transition-all" id="btn-jual">
      <i class="fas fa-cash-register text-lg"></i><span class="text-[10px] sm:text-xs mt-1">Jual</span>
    </button>
    <button onclick="gotoTab('stok')" class="nav-btn flex flex-col items-center py-2.5 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-transparent transition-all" id="btn-stok">
      <i class="fas fa-box text-lg"></i><span class="text-[10px] sm:text-xs mt-1">Stok</span>
    </button>
    <button onclick="gotoTab('riwayat')" class="nav-btn flex flex-col items-center py-2.5 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-transparent transition-all" id="btn-riwayat">
      <i class="fas fa-history text-lg"></i><span class="text-[10px] sm:text-xs mt-1">Riwayat</span>
    </button>
    <button onclick="gotoTab('laporan')" class="nav-btn flex flex-col items-center py-2.5 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-transparent transition-all" id="btn-laporan">
      <i class="fas fa-chart-bar text-lg"></i><span class="text-[10px] sm:text-xs mt-1">Laporan</span>
    </button>
  </div>

  <!-- 1. TAB RINGKASAN -->
  <div class="tab-content" id="tab-ringkasan">
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-5 rounded-3xl shadow-lg">
        <p class="text-xs opacity-90 font-medium">Pemasukan Bulan Ini</p>
        <p id="stat-pemasukan" class="text-2xl font-bold mt-2">Rp 0</p>
      </div>
      <div class="bg-white dark:bg-slate-800 p-5 rounded-3xl shadow-md border border-gray-100 dark:border-slate-700">
        <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">Botol Terjual (Bulan Ini)</p>
        <p id="stat-terjual" class="text-2xl font-bold mt-2 text-amber-500">0 botol</p>
      </div>
    </div>

    <div class="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-gray-100 dark:border-slate-700 mb-6">
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-bold text-gray-800 dark:text-gray-100">Status Stok Saat Ini</h3>
        <button onclick="gotoTab('stok')" class="text-xs text-amber-600 hover:underline font-medium">Kelola Stok</button>
      </div>
      <div id="daftar-stok" class="space-y-4">
        <!-- Terisi lewat JS -->
      </div>
    </div>

    <div class="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-gray-100 dark:border-slate-700">
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-bold text-gray-800 dark:text-gray-100">Transaksi Terakhir</h3>
        <button onclick="gotoTab('riwayat')" class="text-xs text-amber-600 hover:underline font-medium">Semua Riwayat</button>
      </div>
      <div id="ringkasan-transaksi" class="divide-y divide-gray-100 dark:divide-slate-700">
        <!-- Terisi lewat JS -->
      </div>
    </div>
  </div>

  <!-- 2. TAB JUAL -->
  <div class="tab-content" id="tab-jual">
    <div class="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-gray-100 dark:border-slate-700">
      <h3 class="font-bold text-lg mb-4">Input Penjualan Madu</h3>
      
      <!-- Pilih Ukuran -->
      <div class="mb-5">
        <label class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Pilih Ukuran Madu</label>
        <div class="grid grid-cols-2 gap-3">
          <button type="button" onclick="pilihProduk('250ml')" id="pilih-250" class="border-2 border-gray-200 dark:border-slate-700 rounded-2xl p-4 text-center hover:border-amber-500 dark:hover:border-amber-500 transition-all flex flex-col items-center">
            <span class="text-2xl mb-1">🍯</span>
            <span class="font-semibold text-sm">Ukuran 250ml</span>
            <span class="text-xs text-emerald-600 dark:text-emerald-400 mt-1 font-bold">Rp 60.000</span>
            <span id="stok-jual-250" class="text-[10px] text-gray-400 mt-1">Stok: 0</span>
          </button>
          <button type="button" onclick="pilihProduk('550ml')" id="pilih-550" class="border-2 border-gray-200 dark:border-slate-700 rounded-2xl p-4 text-center hover:border-amber-500 dark:hover:border-amber-500 transition-all flex flex-col items-center">
            <span class="text-3xl mb-1">🏺</span>
            <span class="font-semibold text-sm">Ukuran 550ml</span>
            <span class="text-xs text-emerald-600 dark:text-emerald-400 mt-1 font-bold">Rp 135.000</span>
            <span id="stok-jual-550" class="text-[10px] text-gray-400 mt-1">Stok: 0</span>
          </button>
        </div>
      </div>

      <!-- Form Detail -->
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Jumlah Botol (Qty)</label>
          <div class="flex items-center gap-3">
            <button onclick="ubahQty(-1)" class="w-10 h-10 rounded-xl bg-gray-100 dark:bg-slate-700 flex items-center justify-center font-bold text-lg">-</button>
            <input type="number" id="input-qty" value="1" min="1" class="w-20 text-center bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl py-2 font-semibold">
            <button onclick="ubahQty(1)" class="w-10 h-10 rounded-xl bg-gray-100 dark:bg-slate-700 flex items-center justify-center font-bold text-lg">+</button>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Tanggal Transaksi</label>
          <input type="date" id="input-tanggal" class="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm font-medium">
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Metode Pembayaran</label>
          <select id="input-bayar" class="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-2.5">
            <option value="Tunai">Tunai</option>
            <option value="Transfer">Transfer</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Catatan Tambahan (Opsional)</label>
          <input type="text" id="input-catatan" placeholder="Contoh: Pembeli COD dekat Alun-alun" class="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm">
        </div>

        <div class="pt-4 border-t border-gray-100 dark:border-slate-700">
          <div class="flex justify-between items-center mb-4">
            <span class="font-medium text-gray-600 dark:text-gray-300">Total Harga:</span>
            <span id="label-total-harga" class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Rp 0</span>
          </div>
          <button onclick="simpanTransaksiPenjualan()" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2">
            <i class="fas fa-check-circle"></i> Simpan Penjualan
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- 3. TAB STOK -->
  <div class="tab-content" id="tab-stok">
    <div class="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-gray-100 dark:border-slate-700 mb-6">
      <h3 class="font-bold text-lg mb-4">Tambah / Sesuaikan Stok</h3>
      
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Pilih Produk</label>
          <select id="stok-pilih-produk" class="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-2.5">
            <option value="250ml">Madu Premium 250ml</option>
            <option value="550ml">Madu Premium 550ml</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Jenis Penyesuaian</label>
          <div class="grid grid-cols-2 gap-3">
            <button onclick="setJenisStok('tambah')" id="btn-stok-tambah" class="border-2 border-amber-500 rounded-xl py-2.5 text-center font-semibold text-sm bg-amber-500/10 transition-all text-amber-600 dark:text-amber-400">
              <i class="fas fa-plus-circle mr-1"></i>Tambah Stok
            </button>
            <button onclick="setJenisStok('set')" id="btn-stok-set" class="border-2 border-gray-200 dark:border-slate-700 rounded-xl py-2.5 text-center font-semibold text-sm transition-all text-gray-500 dark:text-gray-400">
              <i class="fas fa-sliders-h mr-1"></i>Atur Jumlah Baru
            </button>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Jumlah Botol</label>
          <input type="number" id="stok-input-qty" value="10" min="1" class="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-center font-bold text-xl">
        </div>

        <button onclick="simpanStok()" class="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3.5 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2">
          <i class="fas fa-save"></i> Perbarui Stok
        </button>
      </div>
    </div>
  </div>

  <!-- 4. TAB RIWAYAT -->
  <div class="tab-content" id="tab-riwayat">
    <div class="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-gray-100 dark:border-slate-700">
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-bold text-lg">Daftar Transaksi</h3>
        <button onclick="exportExcel()" class="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 px-3 py-1.5 rounded-xl text-xs font-semibold hover:bg-emerald-100 transition-all flex items-center gap-1.5">
          <i class="fas fa-file-excel"></i> Export CSV
        </button>
      </div>

      <div id="filter-riwayat" class="mb-4">
        <input type="text" id="cari-transaksi" oninput="renderRiwayat()" placeholder="Cari berdasarkan catatan..." class="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-2 text-sm">
      </div>

      <div id="daftar-riwayat" class="space-y-3 max-h-[450px] overflow-y-auto pr-1">
        <!-- Terisi lewat JS -->
      </div>
    </div>
  </div>

  <!-- 5. TAB LAPORAN -->
  <div class="tab-content" id="tab-laporan">
    <div class="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-gray-100 dark:border-slate-700 mb-6">
      <h3 class="font-bold text-lg mb-4">Analisis Keuangan</h3>
      
      <div class="space-y-4">
        <div class="p-4 rounded-2xl bg-amber-50 dark:bg-slate-900/50 border border-amber-100 dark:border-slate-800">
          <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">Total Akumulasi Pendapatan</p>
          <p id="lap-total-pendapatan" class="text-3xl font-extrabold text-amber-600 mt-1">Rp 0</p>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50">
            <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">Tunai/Cash</p>
            <p id="lap-cara-tunai" class="text-lg font-bold text-emerald-600 mt-1">Rp 0</p>
          </div>
          <div class="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50">
            <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">Transfer Bank</p>
            <p id="lap-cara-transfer" class="text-lg font-bold text-blue-600 mt-1">Rp 0</p>
          </div>
        </div>

        <div class="pt-4 border-t border-gray-100 dark:border-slate-700">
          <h4 class="font-semibold text-sm mb-3">Persentase Penjualan Produk</h4>
          <div class="space-y-3">
            <div>
              <div class="flex justify-between text-xs mb-1">
                <span>Madu 250ml</span>
                <span id="lap-persen-250" class="font-bold">0%</span>
              </div>
              <div class="w-full bg-gray-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div id="bar-persen-250" class="bg-amber-500 h-full transition-all" style="width: 0%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-xs mb-1">
                <span>Madu 550ml</span>
                <span id="lap-persen-550" class="font-bold">0%</span>
              </div>
              <div class="w-full bg-gray-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div id="bar-persen-550" class="bg-emerald-500 h-full transition-all" style="width: 0%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<!-- Toast Alert -->
<div id="toast" class="toast fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-2xl shadow-xl hidden font-medium text-sm flex items-center gap-2 z-50">
  <i class="fas fa-info-circle text-amber-500"></i>
  <span id="toast-text"></span>
</div>

<script>
// === DATA UTAMA ===
const PRODUK = { 
  '250ml': { nama: 'Madu Premium 250ml', harga: 60000 }, 
  '550ml': { nama: 'Madu Premium 550ml', harga: 135000 } 
};

let transaksi = JSON.parse(localStorage.getItem('madu_transaksi') || '[]');
let stok = JSON.parse(localStorage.getItem('madu_stok') || '{"250ml":10,"550ml":5}'); // stok default jika kosong

let produkDipilih = '250ml'; // Default produk terpilih saat di tab jual
let tipePenyesuaianStok = 'tambah'; // default stok penambahan

// === FUNGSI SIMPAN STORAGE ===
function simpan() {
  localStorage.setItem('madu_transaksi', JSON.stringify(transaksi));
  localStorage.setItem('madu_stok', JSON.stringify(stok));
}

// === NOTIFIKASI TOAST ===
function showToast(msg) {
  const t = document.getElementById('toast');
  const txt = document.getElementById('toast-text');
  if (t && txt) {
    txt.textContent = msg;
    t.classList.remove('hidden');
    setTimeout(() => t.classList.add('hidden'), 2500);
  }
}

// === NAVIGASI TAB ===
function gotoTab(tabName) {
  // Sembunyikan semua tab content
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  // Nonaktifkan semua button nav
  document.querySelectorAll('.nav-btn').forEach(el => {
    el.classList.remove('bg-amber-500', 'text-white', 'shadow-md', 'scale-95');
    el.classList.add('bg-white', 'dark:bg-slate-800', 'text-gray-500', 'dark:text-gray-400');
  });

  // Tampilkan tab yang dipilih
  const activeTab = document.getElementById(`tab-${tabName}`);
  if (activeTab) {
    activeTab.classList.add('active');
  }

  // Aktifkan button yang dipilih
  const activeBtn = document.getElementById(`btn-${tabName}`);
  if (activeBtn) {
    activeBtn.classList.add('bg-amber-500', 'text-white', 'shadow-md', 'scale-95');
    activeBtn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-gray-500', 'dark:text-gray-400');
  }

  // Update layout data yang berkaitan
  renderAll();
}

// === LOGIKA JUAL ===
function pilihProduk(key) {
  produkDipilih = key;
  
  const el250 = document.getElementById('pilih-250');
  const el550 = document.getElementById('pilih-550');
  if (el250) el250.classList.remove('border-amber-500', 'bg-amber-500/5');
  if (el550) el550.classList.remove('border-amber-500', 'bg-amber-500/5');

  const elSelected = document.getElementById(`pilih-${key}`);
  if (elSelected) {
    elSelected.classList.add('border-amber-500', 'bg-amber-500/5');
  }
  updateTotalHargaJual();
}

function ubahQty(amount) {
  const qtyInput = document.getElementById('input-qty');
  if (qtyInput) {
    let val = parseInt(qtyInput.value) || 1;
    val = Math.max(1, val + amount);
    qtyInput.value = val;
    updateTotalHargaJual();
  }
}

function updateTotalHargaJual() {
  const qtyInput = document.getElementById('input-qty');
  const qty = qtyInput ? (parseInt(qtyInput.value) || 1) : 1;
  const total = PRODUK[produkDipilih].harga * qty;
  
  const labelTotal = document.getElementById('label-total-harga');
  if (labelTotal) {
    labelTotal.textContent = formatRupiah(total);
  }
}

// Skenario event listener setelah DOM siap
document.addEventListener('DOMContentLoaded', () => {
  const inputQty = document.getElementById('input-qty');
  if (inputQty) {
    inputQty.addEventListener('input', updateTotalHargaJual);
  }
});

function simpanTransaksiPenjualan() {
  const qtyInput = document.getElementById('input-qty');
  const qty = qtyInput ? (parseInt(qtyInput.value) || 0) : 0;
  
  const inputBayar = document.getElementById('input-bayar');
  const metode = inputBayar ? inputBayar.value : 'Tunai';
  
  const inputCatatan = document.getElementById('input-catatan');
  const catatan = inputCatatan ? inputCatatan.value : '';

  const inputTanggal = document.getElementById('input-tanggal');
  let tglTimestamp = Date.now();
  if (inputTanggal && inputTanggal.value) {
    const selectedDate = new Date(inputTanggal.value);
    const now = new Date();
    // Berikan jam, menit, detik saat ini agar urutan sorting di hari yang sama tetap rapi sesuai input terakhir
    selectedDate.setHours(now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
    tglTimestamp = selectedDate.getTime();
  }

  if (qty <= 0) {
    showToast("Jumlah botol tidak valid.");
    return;
  }

  // Validasi stok mencukupi
  if (stok[produkDipilih] < qty) {
    showToast(`Stok tidak cukup! Sisa stok saat ini: ${stok[produkDipilih]} botol.`);
    return;
  }

  // Potong stok
  stok[produkDipilih] -= qty;

  const total = PRODUK[produkDipilih].harga * qty;

  // Catat transaksi baru
  const transBaru = {
    id: Date.now(),
    ts: tglTimestamp,
    produk: produkDipilih,
    qty: qty,
    total: total,
    metode: metode,
    catatan: catatan
  };

  transaksi.unshift(transBaru); // tambah di awal
  simpan();
  
  // Reset form
  if (qtyInput) qtyInput.value = "1";
  if (inputCatatan) inputCatatan.value = "";
  
  // Reset tanggal ke hari ini setelah disimpan
  if (inputTanggal) {
    const today = new Date();
    inputTanggal.value = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
  }
  
  updateTotalHargaJual();

  showToast("Penjualan berhasil disimpan!");
  gotoTab('ringkasan');
}

// === LOGIKA STOK ===
function setJenisStok(jenis) {
  tipePenyesuaianStok = jenis;
  const btnTambah = document.getElementById('btn-stok-tambah');
  const btnSet = document.getElementById('btn-stok-set');

  if (btnTambah && btnSet) {
    if (jenis === 'tambah') {
      btnTambah.className = "border-2 border-amber-500 rounded-xl py-2.5 text-center font-semibold text-sm bg-amber-500/10 text-amber-600 dark:text-amber-400";
      btnSet.className = "border-2 border-gray-200 dark:border-slate-700 rounded-xl py-2.5 text-center font-semibold text-sm text-gray-500 dark:text-gray-400";
    } else {
      btnSet.className = "border-2 border-amber-500 rounded-xl py-2.5 text-center font-semibold text-sm bg-amber-500/10 text-amber-600 dark:text-amber-400";
      btnTambah.className = "border-2 border-gray-200 dark:border-slate-700 rounded-xl py-2.5 text-center font-semibold text-sm text-gray-500 dark:text-gray-400";
    }
  }
}

function simpanStok() {
  const selectProd = document.getElementById('stok-pilih-produk');
  const prod = selectProd ? selectProd.value : '250ml';
  
  const inputStokQty = document.getElementById('stok-input-qty');
  const jumlah = inputStokQty ? (parseInt(inputStokQty.value) || 0) : 0;

  if (jumlah < 0) {
    showToast("Jumlah stok tidak valid.");
    return;
  }

  if (tipePenyesuaianStok === 'tambah') {
    stok[prod] += jumlah;
    showToast(`Berhasil menambahkan ${jumlah} botol ke stok ${PRODUK[prod].nama}.`);
  } else {
    stok[prod] = jumlah;
    showToast(`Stok ${PRODUK[prod].nama} berhasil diatur ke ${jumlah} botol.`);
  }

  simpan();
  gotoTab('ringkasan');
}

// === FORMAT RUPIAH ===
function formatRupiah(num) {
  return 'Rp ' + num.toLocaleString('id-ID');
}

// === PENGHAPUSAN TRANSAKSI ===
function hapusTransaksi(id) {
  // Kembalikan stok terlebih dahulu
  const idx = transaksi.findIndex(t => t.id === id);
  if (idx !== -1) {
    const t = transaksi[idx];
    stok[t.produk] += t.qty; // kembalikan stok
    transaksi.splice(idx, 1); // hapus data
    simpan();
    showToast("Transaksi berhasil dihapus & stok dikembalikan.");
    renderAll();
  }
}

// === RENDERING DATA ===
function renderAll() {
  renderRingkasan();
  renderRiwayat();
  renderLaporan();
  
  // Update info stok di form penjualan
  const stokJual250 = document.getElementById('stok-jual-250');
  const stokJual550 = document.getElementById('stok-jual-550');
  if (stokJual250) stokJual250.textContent = `Stok: ${stok['250ml']}`;
  if (stokJual550) stokJual550.textContent = `Stok: ${stok['550ml']}`;
}

function renderRingkasan() {
  // Hitung Stat Pemasukan Bulan Ini
  const date = new Date();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  let totalBulanIni = 0;
  let botolBulanIni = 0;

  transaksi.forEach(t => {
    const tDate = new Date(t.ts);
    if (tDate.getMonth() === currentMonth && tDate.getFullYear() === currentYear) {
      totalBulanIni += t.total;
      botolBulanIni += t.qty;
    }
  });

  const statPemasukan = document.getElementById('stat-pemasukan');
  const statTerjual = document.getElementById('stat-terjual');
  if (statPemasukan) statPemasukan.textContent = formatRupiah(totalBulanIni);
  if (statTerjual) statTerjual.textContent = `${botolBulanIni} botol`;

  // Render status stok di ringkasan
  const stokEl = document.getElementById('daftar-stok');
  if (stokEl) {
    stokEl.innerHTML = `
      <div class="flex items-center justify-between border-b pb-2 dark:border-slate-700">
        <div class="flex items-center gap-2">
          <span class="text-xl">🍯</span>
          <div>
            <p class="font-medium text-sm">Madu 250ml</p>
            <p class="text-[10px] text-gray-400">Harga: Rp 60.000</p>
          </div>
        </div>
        <div class="text-right">
          <p class="font-bold text-base ${stok['250ml'] < 5 ? 'text-red-500' : 'text-emerald-600'}">${stok['250ml']} botol</p>
          <p class="text-[9px] ${stok['250ml'] < 5 ? 'text-red-400' : 'text-gray-400'}">${stok['250ml'] < 5 ? 'Stok Hampir Habis' : 'Stok Tersedia'}</p>
        </div>
      </div>
      <div class="flex items-center justify-between pt-1">
        <div class="flex items-center gap-2">
          <span class="text-2xl">🏺</span>
          <div>
            <p class="font-medium text-sm">Madu 550ml</p>
            <p class="text-[10px] text-gray-400">Harga: Rp 135.000</p>
          </div>
        </div>
        <div class="text-right">
          <p class="font-bold text-base ${stok['550ml'] < 5 ? 'text-red-500' : 'text-emerald-600'}">${stok['550ml']} botol</p>
          <p class="text-[9px] ${stok['550ml'] < 5 ? 'text-red-400' : 'text-gray-400'}">${stok['550ml'] < 5 ? 'Stok Hampir Habis' : 'Stok Tersedia'}</p>
        </div>
      </div>
    `;
  }

  // Render transaksi terakhir (3 Transaksi terbaru)
  const ringkasanTrEl = document.getElementById('ringkasan-transaksi');
  if (ringkasanTrEl) {
    ringkasanTrEl.innerHTML = '';
    
    if (transaksi.length === 0) {
      ringkasanTrEl.innerHTML = `<p class="text-xs text-gray-400 text-center py-4">Belum ada transaksi</p>`;
    } else {
      const limitTrans = transaksi.slice(0, 3);
      limitTrans.forEach(t => {
        const el = document.createElement('div');
        el.className = "flex justify-between items-center py-3";
        el.innerHTML = `
          <div>
            <p class="text-sm font-semibold">${PRODUK[t.produk].nama} (${t.qty}x)</p>
            <p class="text-[10px] text-gray-400">${new Date(t.ts).toLocaleDateString('id-ID', {day: 'numeric', month: 'short'})} • ${t.metode}</p>
          </div>
          <p class="text-sm font-bold text-emerald-600 dark:text-emerald-400">+${formatRupiah(t.total)}</p>
        `;
        ringkasanTrEl.appendChild(el);
      });
    }
  }
}

function renderRiwayat() {
  const riwayatEl = document.getElementById('daftar-riwayat');
  if (!riwayatEl) return;

  const searchInputEl = document.getElementById('cari-transaksi');
  const searchInput = searchInputEl ? searchInputEl.value.toLowerCase() : '';
  riwayatEl.innerHTML = '';

  const filteredTrans = transaksi.filter(t => {
    const namaProd = PRODUK[t.produk].nama.toLowerCase();
    const catatan = (t.catatan || '').toLowerCase();
    return namaProd.includes(searchInput) || catatan.includes(searchInput);
  });

  if (filteredTrans.length === 0) {
    riwayatEl.innerHTML = `<p class="text-xs text-gray-400 text-center py-8">Tidak ada riwayat penjualan yang cocok.</p>`;
    return;
  }

  filteredTrans.forEach(t => {
    const el = document.createElement('div');
    el.className = "bg-gray-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-gray-100 dark:border-slate-800/80 flex justify-between items-center";
    el.innerHTML = `
      <div class="space-y-1">
        <p class="text-sm font-bold">${PRODUK[t.produk].nama}</p>
        <div class="flex flex-wrap gap-x-2 gap-y-0.5 text-xs text-gray-500 dark:text-gray-400">
          <span>${new Date(t.ts).toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})}</span>
          <span>•</span>
          <span class="font-semibold text-emerald-600">${t.qty} Botol</span>
          <span>•</span>
          <span class="bg-gray-200/50 dark:bg-slate-700/50 px-1.5 rounded-md text-[10px]">${t.metode}</span>
        </div>
        ${t.catatan ? `<p class="text-xs italic text-gray-400">"${t.catatan}"</p>` : ''}
      </div>
      <div class="text-right flex flex-col items-end gap-1.5">
        <span class="text-sm font-bold text-emerald-600 dark:text-emerald-400">${formatRupiah(t.total)}</span>
        <button onclick="hapusTransaksi(${t.id})" class="text-red-500 hover:text-red-700 text-xs w-7 h-7 bg-red-50 dark:bg-red-950/20 rounded-lg flex items-center justify-center transition-all" title="Hapus transaksi">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;
    riwayatEl.appendChild(el);
  });
}

function renderLaporan() {
  let totalSemua = 0;
  let tunai = 0;
  let transfer = 0;
  let qty250 = 0;
  let qty550 = 0;

  transaksi.forEach(t => {
    totalSemua += t.total;
    if (t.metode === 'Tunai') tunai += t.total;
    if (t.metode === 'Transfer') transfer += t.total;

    if (t.produk === '250ml') qty250 += t.qty;
    if (t.produk === '550ml') qty550 += t.qty;
  });

  const lapTotalPendapatan = document.getElementById('lap-total-pendapatan');
  const lapCaraTunai = document.getElementById('lap-cara-tunai');
  const lapCaraTransfer = document.getElementById('lap-cara-transfer');

  if (lapTotalPendapatan) lapTotalPendapatan.textContent = formatRupiah(totalSemua);
  if (lapCaraTunai) lapCaraTunai.textContent = formatRupiah(tunai);
  if (lapCaraTransfer) lapCaraTransfer.textContent = formatRupiah(transfer);

  const totalBotol = qty250 + qty550;
  const persen250 = totalBotol > 0 ? Math.round((qty250 / totalBotol) * 100) : 0;
  const persen550 = totalBotol > 0 ? Math.round((qty550 / totalBotol) * 100) : 0;

  const lapPersen250 = document.getElementById('lap-persen-250');
  const barPersen250 = document.getElementById('bar-persen-250');
  if (lapPersen250) lapPersen250.textContent = `${persen250}% (${qty250} botol)`;
  if (barPersen250) barPersen250.style.width = `${persen250}%`;

  const lapPersen550 = document.getElementById('lap-persen-550');
  const barPersen550 = document.getElementById('bar-persen-550');
  if (lapPersen550) lapPersen550.textContent = `${persen550}% (${qty550} botol)`;
  if (barPersen550) barPersen550.style.width = `${persen550}%`;
}

// === EXPORT TO EXCEL / CSV ===
function exportExcel() {
  if (transaksi.length === 0) {
    showToast("Belum ada data transaksi untuk diexport!");
    return;
  }
  let csv = "ID Transaksi,Tanggal,Produk,Jumlah,Total,Metode Pembayaran,Catatan\n";
  transaksi.forEach(t => {
    const tanggal = new Date(t.ts).toLocaleDateString('id-ID');
    const catatanSih = t.catatan ? t.catatan.replace(/"/g, '""') : '';
    csv += `${t.id},${tanggal},${PRODUK[t.produk].nama},${t.qty},${t.total},${t.metode},"${catatanSih}"\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Laporan_Buku_Kas_Madu_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
}

// === TOGGLE DARK MODE ===
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

// === INISIALISASI HALAMAN ===
document.addEventListener('DOMContentLoaded', () => {
  const tanggalHeader = document.getElementById('tanggal-header');
  if (tanggalHeader) {
    tanggalHeader.textContent = new Date().toLocaleDateString('id-ID', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
  }

  // Set default tanggal transaksi di form jual ke hari ini secara lokal
  const inputTanggal = document.getElementById('input-tanggal');
  if (inputTanggal) {
    const today = new Date();
    inputTanggal.value = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
  }

  // Load Setelan Tema Terakhir
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Mulai aplikasi dengan membuka tab ringkasan & inisialisasi visual tombol terpilih
  gotoTab('ringkasan');
  pilihProduk('250ml');
});
</script>
</body>
</html>
