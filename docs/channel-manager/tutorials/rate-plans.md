---
sidebar_position: 6
---

# Rate Plans (Channex)

Menu **Rate Plans** pada Channex digunakan untuk membuat, mengedit, menghapus, dan melihat daftar rate plan yang akan digunakan untuk pengelolaan harga dan promosi di berbagai OTA. Setiap rate plan yang berhasil dibuat akan otomatis muncul di menu Inventory untuk pengaturan harga dan ketersediaan.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{marginBottom: '1.5rem'}}>
  <!-- <img src="../../../static/img/cm/rate-plan-hero.png" alt="Rate Plan Management" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)'}} /> -->
</div>

## Mengapa Rate Plan Penting?

Rate plan adalah komponen utama dalam distribusi harga dan promosi ke OTA karena:

- **Dasar Harga Inventory**: Setiap rate plan yang dibuat akan otomatis muncul di menu Inventory
- **Mapping OTA**: Memudahkan mapping harga dan promosi antara PMS dan berbagai OTA
- **Konsistensi Data**: Memastikan harga dan aturan promosi konsisten di semua channel
- **Fleksibilitas**: Data boleh sama dengan PMS atau dibedakan sesuai kebutuhan

## Pengelolaan Rate Plan

<Tabs className="unique-tabs">
  <TabItem value="create" label="Buat Rate Plan" default>
    Untuk membuat rate plan baru:
    
    1. Klik tombol **"+ Create Rate Plan"** di pojok kanan atas.
    2. Isi form dengan data yang diperlukan.
    3. **Field dengan label merah wajib diisi** - pastikan tidak ada yang terlewat.
    4. Simpan, dan rate plan akan otomatis tersedia di Inventory.
    
    <!-- <img src="LINK_SCREENSHOT_1" alt="Create Rate Plan" style={{borderRadius: '8px', marginTop: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)'}} /> -->
    
    :::warning Field Wajib
    Pastikan semua field dengan **label merah** telah diisi dengan benar sebelum menyimpan rate plan.
    :::
  </TabItem>
  <TabItem value="list" label="Lihat Daftar">
    Pada halaman Rate Plans, Anda dapat melihat seluruh daftar rate plan yang telah dibuat.
    
    - Tabel menampilkan nama rate plan, tipe harga, periode berlaku, dan status.
    - Gunakan fitur search atau filter untuk pencarian cepat.
    - Setiap baris memiliki action button untuk edit dan delete.
    
    <!-- <img src="LINK_SCREENSHOT_2" alt="Rate Plan List" style={{borderRadius: '8px', marginTop: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)'}} /> -->
  </TabItem>
  <TabItem value="edit" label="Edit Rate Plan">
    Untuk mengedit rate plan yang sudah ada:
    
    - Klik tombol **Edit** pada baris rate plan yang ingin diubah.
    - Ubah data sesuai kebutuhan (field merah tetap wajib diisi).
    - Simpan perubahan, data akan terupdate di semua channel terkait.
    
    <!-- <img src="LINK_SCREENSHOT_3" alt="Edit Rate Plan" style={{borderRadius: '8px', marginTop: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)'}} /> -->
    
    :::info Auto-Update
    Perubahan rate plan akan otomatis tersinkron ke menu Inventory dan semua channel yang sudah terhubung.
    :::
  </TabItem>
  <TabItem value="delete" label="Hapus Rate Plan">
    Untuk menghapus rate plan:
    
    - Klik tombol **Delete** pada baris rate plan yang akan dihapus.
    - Konfirmasi penghapusan melalui dialog yang muncul.
    - Rate plan akan dihapus dari sistem dan tidak lagi tersedia di Inventory.
    
    <!-- <img src="LINK_SCREENSHOT_4" alt="Delete Rate Plan" style={{borderRadius: '8px', marginTop: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)'}} /> -->
    
    :::danger Peringatan
    Penghapusan rate plan akan menghapus semua data inventory terkait. Pastikan tidak ada booking aktif sebelum menghapus.
    :::
  </TabItem>
</Tabs>

## Detail Form Input Rate Plan

### Field Wajib (Label Merah)

- **Rate Plan Name**: Nama rate plan yang akan ditampilkan di OTA
- **Rate Plan Code**: Kode unik untuk identifikasi internal
- **Pricing Type**: Jenis harga (per kamar, per orang, dsb)
- **Cancellation Policy**: Aturan pembatalan yang berlaku

### Field Opsional

- **Meal Plan**: Jenis meal (tanpa sarapan, sarapan, half board, dll)
- **Promo Rules**: Aturan promosi atau diskon
- **Min/Max Stay**: Batas minimum/maksimum lama menginap
- **Description**: Deskripsi detail rate plan

## Integrasi dengan PMS

Rate Plan di Channex dapat:

- **Sinkron dengan PMS**: Gunakan nama dan data yang sama dengan PMS Anda
- **Customized**: Buat nama dan aturan harga yang berbeda untuk kebutuhan marketing
- **Mapping Fleksibel**: Satu rate plan PMS bisa di-mapping ke beberapa rate plan Channex

:::tip Best Practice
Buat nama rate plan yang jelas dan mudah dipahami tamu, serta pastikan aturan harga dan pembatalan sesuai kebutuhan bisnis.
:::

---

> **Catatan:**
> Setelah rate plan berhasil dibuat, segera cek menu Inventory untuk mulai mengatur harga dan ketersediaan. Ganti `LINK_SCREENSHOT_X` dengan link gambar screenshot sistem sesuai langkah di atas.
