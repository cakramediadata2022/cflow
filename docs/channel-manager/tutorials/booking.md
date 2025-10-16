---
sidebar_position: 1
---

# Bookings (Channex)

Menu Bookings pada Channex digunakan untuk melihat, mengelola, dan memproses data pemesanan (booking) yang masuk dari berbagai OTA (Online Travel Agent) ke dalam sistem PMS Anda.

<!-- ![Bookings Page](../../../static/img/cm/bookings-page.png) -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Fitur & Cara Penggunaan Bookings

<Tabs className="unique-tabs">
  <TabItem value="list" label="Lihat Daftar Booking" default>
    Pada halaman Bookings, Anda dapat melihat seluruh daftar pemesanan yang masuk dari berbagai OTA.
    
    - Terdapat kolom nama tamu, tanggal check-in/check-out, status booking, dan sumber OTA.
    - Gunakan filter atau kolom pencarian untuk memudahkan pencarian booking.
    
    <!-- ![Screenshot Daftar Booking](LINK_SCREENSHOT_1) -->
  </TabItem>
  <TabItem value="detail" label="Detail Booking">
    Klik salah satu baris booking untuk melihat detail lengkap:
    
    - Informasi tamu, kamar, harga, permintaan khusus, dan riwayat perubahan.
    - Tersedia tombol untuk mengelola status booking.
    
    <!-- ![Screenshot Detail Booking](LINK_SCREENSHOT_2) -->
  </TabItem>
  <TabItem value="status" label="Ubah Status">
    Anda dapat mengubah status booking (misal: konfirmasi, cancel, check-in, check-out) sesuai kebutuhan operasional.
    
    - Pilih booking, lalu klik tombol status yang diinginkan.
    - Perubahan status akan otomatis tersinkron ke OTA terkait.
    
    <!-- ![Screenshot Ubah Status Booking](LINK_SCREENSHOT_3) -->
  </TabItem>
  <TabItem value="sync" label="Sinkronisasi">
    Semua perubahan booking akan tersinkron otomatis ke OTA terkait melalui Channex.
    
    - Tidak perlu update manual ke masing-masing OTA.
    - Sistem akan menampilkan notifikasi jika sinkronisasi berhasil/gagal.
    
    <!-- ![Screenshot Sinkronisasi Booking](LINK_SCREENSHOT_4) -->
  </TabItem>
</Tabs>

## Informasi Tambahan

- **Akses Cepat**: Menu Bookings dapat diakses langsung dari sidebar utama dashboard Channex.
- **Keamanan Data**: Semua data booking dienkripsi dan hanya dapat diakses oleh user yang berwenang.
- **Notifikasi**: Sistem akan mengirim notifikasi email jika ada booking baru, perubahan, atau pembatalan.

:::info Penting
Menu bookings ini sangat penting untuk memastikan semua pemesanan dari berbagai channel terkelola dengan baik dan terintegrasi secara real-time ke dalam sistem PMS Anda.
:::

---

> **Catatan:**
> Ganti `LINK_SCREENSHOT_X` dengan link gambar screenshot sistem sesuai langkah di atas.
