---
sidebar_position: 5
---

# Room Type (Channex)

Menu **Room Type** pada Channex adalah pusat pengelolaan tipe kamar yang akan digunakan sebagai dasar untuk inventory management dan distribusi ke berbagai OTA. Setiap room type yang dibuat akan otomatis tersedia di menu Inventory untuk pengelolaan ketersediaan dan harga.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{marginBottom: '1.5rem'}}>
  <img src="../../../static/img/cm/room-type-hero.png" alt="Room Type Management" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)'}} />
</div>

## Mengapa Room Type Penting?

Room Type adalah fondasi utama dalam channel management karena:

- **Dasar Inventory**: Setiap room type yang dibuat akan otomatis muncul di menu Inventory
- **Mapping OTA**: Memudahkan mapping tipe kamar antara PMS dan berbagai OTA
- **Konsistensi Data**: Memastikan nama dan kategori kamar konsisten di semua channel
- **Fleksibilitas**: Data boleh sama dengan PMS atau dibedakan sesuai kebutuhan

## Pengelolaan Room Type

<Tabs className="unique-tabs">
  <TabItem value="create" label="Buat Room Type" default>
    Untuk membuat room type baru:
    
    1. Klik tombol **"+ Create Room Type"** di pojok kanan atas.
    2. Isi form dengan data yang diperlukan.
    3. **Field dengan label merah wajib diisi** - pastikan tidak ada yang terlewat.
    4. Simpan, dan room type akan otomatis tersedia di Inventory.
    
    <img src="LINK_SCREENSHOT_1" alt="Create Room Type" style={{borderRadius: '8px', marginTop: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)'}} />
    
    :::warning Field Wajib
    Pastikan semua field dengan **label merah** telah diisi dengan benar sebelum menyimpan room type.
    :::
  </TabItem>
  <TabItem value="list" label="Lihat Daftar">
    Pada halaman Room Type, Anda dapat melihat seluruh daftar tipe kamar yang telah dibuat.
    
    - Tabel menampilkan nama room type, kapasitas, fasilitas, dan status.
    - Gunakan fitur search atau filter untuk pencarian cepat.
    - Setiap baris memiliki action button untuk edit dan delete.
    
    <img src="LINK_SCREENSHOT_2" alt="Room Type List" style={{borderRadius: '8px', marginTop: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)'}} />
  </TabItem>
  <TabItem value="edit" label="Edit Room Type">
    Untuk mengedit room type yang sudah ada:
    
    - Klik tombol **Edit** pada baris room type yang ingin diubah.
    - Ubah data sesuai kebutuhan (field merah tetap wajib diisi).
    - Simpan perubahan, data akan terupdate di semua channel terkait.
    
    <img src="LINK_SCREENSHOT_3" alt="Edit Room Type" style={{borderRadius: '8px', marginTop: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)'}} />
    
    :::info Auto-Update
    Perubahan room type akan otomatis tersinkron ke menu Inventory dan semua channel yang sudah terhubung.
    :::
  </TabItem>
  <TabItem value="delete" label="Hapus Room Type">
    Untuk menghapus room type:
    
    - Klik tombol **Delete** pada baris room type yang akan dihapus.
    - Konfirmasi penghapusan melalui dialog yang muncul.
    - Room type akan dihapus dari sistem dan tidak lagi tersedia di Inventory.
    
    <img src="LINK_SCREENSHOT_4" alt="Delete Room Type" style={{borderRadius: '8px', marginTop: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)'}} />
    
    :::danger Peringatan
    Penghapusan room type akan menghapus semua data inventory terkait. Pastikan tidak ada booking aktif sebelum menghapus.
    :::
  </TabItem>
</Tabs>

## Detail Form Input Room Type

### Field Wajib (Label Merah)

- **Room Type Name**: Nama tipe kamar yang akan ditampilkan di OTA
- **Room Type Code**: Kode unik untuk identifikasi internal
- **Max Occupancy**: Kapasitas maksimum tamu per kamar
- **Room Size**: Ukuran kamar dalam meter persegi

### Field Opsional

- **Bed Type**: Jenis tempat tidur (single, double, twin, dll)
- **Room Amenities**: Fasilitas kamar (AC, WiFi, TV, dll)
- **Room Description**: Deskripsi detail kamar
- **Photos**: Upload foto kamar untuk ditampilkan di OTA

## Integrasi dengan PMS

Room Type di Channex dapat:

- **Sinkron dengan PMS**: Gunakan nama dan data yang sama dengan PMS Anda
- **Customized**: Buat nama dan kategori yang berbeda untuk kebutuhan marketing
- **Mapping Fleksibel**: Satu room type PMS bisa di-mapping ke beberapa room type Channex

:::tip Best Practice
Disarankan untuk membuat nama room type yang menarik dan mudah dipahami tamu, meskipun berbeda dengan kode internal di PMS.
:::

---

> **Catatan:**
> Setelah room type berhasil dibuat, segera cek menu Inventory untuk mulai mengatur ketersediaan dan harga. Ganti `LINK_SCREENSHOT_X` dengan link gambar screenshot sistem sesuai langkah di atas.
