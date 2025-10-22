---
sidebar_position: 5
---

# Room Type

Menu **Room Type** adalah pusat pengelolaan tipe kamar yang akan digunakan sebagai dasar untuk inventory management dan distribusi ke berbagai OTA. Setiap room type yang dibuat akan otomatis tersedia di menu Inventory untuk pengelolaan ketersediaan dan harga.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{marginBottom: '1.5rem'}}>
<img
      src="/img/cm/room-type/room-list.png"
      alt="Room List"
      style={{
        borderRadius: "8px",
        marginTop: "1rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
    />
</div>

## Mengapa Room Type Penting?

Room Type adalah fondasi utama dalam channel management karena:

- **Dasar Inventory**: Setiap room type yang dibuat akan otomatis muncul di menu Inventory
- **Mapping OTA**: Memudahkan mapping tipe kamar antara PMS dan berbagai OTA
- **Konsistensi Data**: Memastikan nama dan kategori kamar konsisten di semua channel
- **Fleksibilitas**: Data boleh sama dengan PMS atau dibedakan sesuai kebutuhan

## Pengelolaan Room Type

<Tabs className="unique-tabs">
  <TabItem value="create" label="Create" default>
    Untuk membuat room type baru:
    
    1. Klik tombol **"+ Create"** di pojok kanan atas.
    2. Isi form dengan data yang diperlukan.
    3. **Field dengan label merah wajib diisi** - pastikan tidak ada yang terlewat.
    4. Simpan, dan room type akan otomatis tersedia di Inventory.
    
    <img
      src="/img/cm/room-type/room-form.png"
      alt="Room Form"
      style={{
        borderRadius: "8px",
        marginTop: "1rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}P
    />
    :::warning Field Wajib
    Pastikan semua field dengan **label merah** telah diisi dengan benar sebelum menyimpan room type.
    :::
  </TabItem>
  <TabItem value="edit" label="Edit">
    Untuk mengedit room type yang sudah ada:
    
    - Klik tombol **Edit** pada baris room type yang ingin diubah.
    - Ubah data sesuai kebutuhan (field merah tetap wajib diisi).
    - Simpan perubahan, data akan terupdate di semua channel terkait.
    
    <img
      src="/img/cm/room-type/room-edit.png"
      alt="Room Edit"
      style={{
        borderRadius: "8px",
        marginTop: "1rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}P
    />
    
    :::info Auto-Update
    Perubahan room type akan otomatis tersinkron ke menu Inventory dan semua channel yang sudah terhubung.
    :::
  </TabItem>
  <TabItem value="delete" label="Remove">
    Untuk menghapus room type:
    
    - Klik tombol **Remove** pada baris room type yang akan dihapus.
    - Konfirmasi penghapusan melalui dialog yang muncul.
    - Room type akan dihapus dari sistem dan tidak lagi tersedia di Inventory.
    
    <img
      src="/img/cm/room-type/room-remove.png"
      alt="Room Remove"
      style={{
        borderRadius: "8px",
        marginTop: "1rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}P
    />
    
    :::danger Peringatan
    Penghapusan room type akan menghapus semua data inventory terkait. Pastikan tidak ada booking aktif sebelum menghapus.
    :::
  </TabItem>
</Tabs>

## Detail Form Input Room Type

### Field Wajib (Label Merah)

- **Room Type Code**: Kode unik untuk identifikasi internal
- **Room Type Name**: Nama tipe kamar yang akan ditampilkan di OTA

- **Count of Rooms**: Jumlah kamar yang menggunakan room type tersebut
- **Default Occupancy**: How many guests can stay in the room by default (without extra spaces). Keep in mind, this field can not be greater than `occ_adults` value. Typically this value is set equal to amount of adults.
- **Occupancy Adult**: How many Adult bed spaces have in this Room Type.

### Field Opsional

- **Occupancy Children**: How many Child only bed spaces in this Room Type. Children can sleep in adult beds also. If no Child only beds then set this to 0.
- **Occupancy Infant**: How many Infants cots available in this Room Type. 

## Integrasi dengan PMS

Room Type dapat:

- **Sinkron dengan PMS**: Gunakan nama dan data yang sama dengan PMS Anda
- **Customized**: Buat nama dan kategori yang berbeda untuk kebutuhan marketing
- **Mapping Fleksibel**: Satu room type PMS bisa di-mapping ke beberapa room type di sistem

:::tip Best Practice
Disarankan untuk membuat nama room type yang menarik dan mudah dipahami tamu, meskipun berbeda dengan kode internal di PMS.
:::