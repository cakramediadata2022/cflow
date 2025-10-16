---
sidebar_position: 4
---

# Inventory (Channex)

Menu Inventory pada Channex digunakan untuk mengelola ketersediaan kamar (availability), harga (rates), dan pembatasan (restrictions) secara real-time ke berbagai OTA (Online Travel Agent).

<!-- ![Inventory Page](../../../static/img/cm/inventory-page.png) -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Fitur & Cara Penggunaan Inventory

<Tabs className="unique-tabs">
  <TabItem value="list" label="Lihat Inventory" default>
    Pada halaman Inventory, Anda dapat melihat seluruh data ketersediaan kamar, harga, dan pembatasan untuk setiap tanggal dan tipe kamar.
    
    - Tabel menampilkan tanggal, tipe kamar, jumlah tersedia, harga, dan pembatasan (min stay, max stay, dsb).
    - Gunakan filter tanggal atau tipe kamar untuk pencarian cepat.
    
    <!-- ![Screenshot Lihat Inventory](LINK_SCREENSHOT_1) -->
  </TabItem>
  <TabItem value="update" label="Update Inventory">
    Untuk memperbarui data inventory:
    
    - Pilih tanggal dan tipe kamar yang ingin diubah.
    - Masukkan jumlah ketersediaan, harga, atau pembatasan baru.
    - Simpan perubahan, data akan langsung tersinkron ke semua OTA.
    
    <!-- ![Screenshot Update Inventory](LINK_SCREENSHOT_2) -->
  </TabItem>
  <TabItem value="sync" label="Sinkronisasi">
    Semua perubahan inventory akan otomatis tersinkron ke OTA melalui Channex.
    
    - Tidak perlu update manual ke masing-masing OTA.
    - Sistem menampilkan status sinkronisasi (berhasil/gagal).
    
    <!-- ![Screenshot Sinkronisasi Inventory](LINK_SCREENSHOT_3) -->
  </TabItem>
  <TabItem value="log" label="Log Perubahan">
    Anda dapat melihat riwayat perubahan inventory:
    
    - Tersedia log siapa yang mengubah, kapan, dan detail perubahan.
    - Membantu audit dan troubleshooting jika ada masalah ketersediaan/harga di OTA.
    
    <!-- ![Screenshot Log Inventory](LINK_SCREENSHOT_4) -->
  </TabItem>
</Tabs>

## Informasi Tambahan

- **Real-Time Update**: Setiap perubahan langsung dikirim ke seluruh OTA yang terhubung.
- **Multi-Property**: Kelola inventory untuk banyak properti dalam satu dashboard.
- **Keamanan Data**: Hanya user berwenang yang dapat mengubah inventory.

:::info Penting
Menu inventory sangat penting untuk memastikan ketersediaan kamar dan harga di semua channel selalu akurat dan up-to-date.
:::

---

> **Catatan:**
> Ganti `LINK_SCREENSHOT_X` dengan link gambar screenshot sistem sesuai langkah di atas.
