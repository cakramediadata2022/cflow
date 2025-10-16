---
sidebar_position: 3
---

# Bookings

Menu **Bookings** digunakan untuk menampilkan dan memfilter daftar pemesanan (booking) yang masuk dari berbagai OTA (Online Travel Agent) ke dalam sistem PMS. Menu ini tidak menyediakan fitur untuk membuat, mengedit, atau menghapus booking secara manual. Semua data booking yang tampil adalah hasil sinkronisasi otomatis dari OTA.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{marginBottom: '1.5rem'}}>
  <img src="../../../static/img/cm/bookings-hero.png" alt="Bookings Management" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)'}} />
</div>

## Fungsi Utama Bookings

- **Monitoring Real-Time**: Semua booking terbaru dari OTA langsung muncul di dashboard.
- **Filter & Pencarian**: Dapat memfilter daftar booking berdasarkan tanggal, status, OTA, atau nama tamu.
- **Lihat Detail**: Dapat melihat detail lengkap data tamu, kamar, dan status booking yang diterima dari OTA.
- **Resolve Mapping**: Jika ada booking yang masuk namun room type atau rate belum di-mapping, menu ini menyediakan fitur resolve untuk menghubungkan data booking ke room type dan rate yang benar di sistem.

## Fitur Menu Bookings

<Tabs className="unique-tabs">
  <TabItem value="list" label="Lihat & Filter Booking" default>
    Pada halaman Bookings, Anda dapat:
    
    - Melihat seluruh daftar booking yang masuk dari berbagai OTA.
    - Tabel menampilkan nama tamu, tanggal check-in/check-out, status booking, sumber OTA, dan total pembayaran.
    - Menggunakan fitur search dan filter untuk pencarian cepat berdasarkan tanggal, status, OTA, atau nama tamu.
    
    <img src="LINK_SCREENSHOT_1" alt="Daftar Booking" style={{borderRadius: '8px', marginTop: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)'}} />
  </TabItem>
  <TabItem value="detail" label="Lihat Detail Booking">
    Klik salah satu baris booking untuk melihat detail lengkap:
    
    - Informasi tamu, kamar, harga, permintaan khusus, riwayat perubahan, dan status pembayaran yang diterima dari OTA.
    - Tidak ada fitur edit, hanya tampilan detail data booking.
    
    <img src="LINK_SCREENSHOT_2" alt="Detail Booking" style={{borderRadius: '8px', marginTop: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)'}} />
  </TabItem>
  <TabItem value="resolve" label="Resolve Mapping">
    Jika ada booking yang masuk namun room type atau rate belum di-mapping, akan muncul notifikasi dan tombol **Resolve**.
    
    - Klik **Resolve** untuk menghubungkan booking ke room type dan rate yang benar di sistem.
    - Setelah berhasil di-resolve, booking akan terhubung ke inventory dan dapat diproses lebih lanjut.
    
    <img src="LINK_SCREENSHOT_3" alt="Resolve Mapping" style={{borderRadius: '8px', marginTop: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)'}} />
    
    :::info Penting
    Fitur resolve hanya muncul jika ada booking yang belum terhubung ke room type atau rate di sistem.
    :::
  </TabItem>
</Tabs>

## Catatan Penting

- Menu bookings hanya untuk menampilkan, memfilter, dan melihat detail data booking yang diterima dari OTA.
- Tidak ada fitur create, edit, atau delete booking secara manual.
- Fitur resolve hanya muncul jika ada booking yang belum terhubung ke room type atau rate.
- Semua data booking yang tampil adalah hasil sinkronisasi otomatis dari OTA.

:::tip Best Practice
Selalu lakukan resolve mapping segera jika ada notifikasi booking yang belum terhubung ke room type atau rate, agar inventory dan laporan tetap akurat.
:::

---

> **Catatan:**
> Ganti `LINK_SCREENSHOT_X` dengan link gambar screenshot sistem sesuai langkah di atas.
