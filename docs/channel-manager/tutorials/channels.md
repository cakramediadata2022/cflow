---
sidebar_position: 7
---

# Channels

Menu **Channels** adalah pusat pengelolaan koneksi antara properti Anda dengan berbagai Online Travel Agent (OTA) seperti Booking.com, Expedia, Airbnb, Agoda, dan lainnya. Dengan menu ini, Anda dapat mengatur, menghubungkan, dan memonitor status integrasi setiap channel secara real-time.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{marginBottom: '1.5rem'}}>
  <img src="/img/cm/channel/channel-list.png" alt="Channels Hero" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)'}} />
</div>

## Fitur Utama Channels

- **Integrasi Multi-OTA**: Hubungkan properti ke puluhan OTA global & regional hanya dengan beberapa klik.
- **Status Koneksi Real-Time**: Pantau status koneksi (aktif, error, sinkronisasi) setiap channel secara langsung.
- **Mapping Otomatis**: Sesuaikan mapping kamar, rate, dan inventory ke masing-masing channel dengan mudah.
- **Deactivate/Activate** - You can deactivate or activate the channel connection
- **Full Sync** - This will push a full 500 day update to the channel
- **Pull Future Bookings** - Currently only available on Booking.com, This will pull all bookings that were created before connection
- **Remove** - This will delete the connection. If it is an Airbnb connection it will also disconnect in Airbnb. All other channels you need to manually disconnect Channex in the extranet.
## Cara Penggunaan Menu Channels

<Tabs className="unique-tabs">
  <TabItem value="list" label="Lihat & Kelola Channel" default>
    Pada halaman Channels, Anda akan melihat daftar semua channel OTA yang tersedia dan status koneksinya.
    
    - Klik tombol **_Action_** lalu pilih **_Edit_** untuk melihat detail channel, dan anda bisa langsung perbaiki jika memang ada yang salah atau mau di tambahkan.
    - Status channel ditampilkan dengan status _active_ dan _deactive_.
    
    <img
      src="/img/cm/channel/channel-list2.png"
      alt="Channels List"
      style={{
        borderRadius: "8px",
        marginTop: "1rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
       />
  </TabItem>
  <TabItem value="create" label="Create Channel">
    Untuk menghubungkan channel baru:
    
    1. Klik button **_Create_** yang ada pada pojok kanan atas.
    2. Pilih channel yang mau di mappingkan.
    3. Masukkan kredensial/ID properti dari OTA terkait.
    4. Setelah data dilengkapi, klik button **_Test Connection_**, jika data yang di inputkan valid akan muncul status successful connection.
    5. Klik button **_Next_** untuk melanjutkan memappingkan room type dan rate nya.
    
    <img
      src="/img/cm/channel/create-channel.png"
      alt="Create Channel"
      style={{
        borderRadius: "8px",
        marginTop: "1rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
       />
  </TabItem>
  <TabItem value="mapping" label="Mapping Kamar & Rate">
    Mapping digunakan untuk menyamakan tipe kamar dan rate plan antara PMS dan OTA.
    
    - Pilih kamar dan rate dari PMS, lalu sesuaikan dengan yang ada di OTA.
    - Pastikan mapping sudah benar agar sinkronisasi berjalan lancar.
    
    <img
      src="/img/cm/channel/mapping-channel.png"
      alt="Mapping Channel"
      style={{
        borderRadius: "8px",
        marginTop: "1rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
       />

       :::warning Mapping Standard
        Data list yang ada pada bagian kiri adalah data yang ada di masing-masing OTA, Data list yang kanan adalah data yang di inputkan pada menu room type dan rate plan di cakrahub dan berupa pilihan, jika pilihannya tidak muncul kemungkinan data kamar atau rate sudah di mappingkan.
        :::
  </TabItem>
  <TabItem value="rate logic" label="Rate Logic">
    Membuat aturan khusus untuk rate pada masing-masing OTA
    
    - **Increase By Amount**: Menaikan harga berdasarkan amount yang di inputkan, tambahkan amount pada column value
    - **Decrease By Amount**: Menurunkan harga berdasarkan amount yang di inputkan, tambahkan amount pada column value
    - **Increase By Percent**: Menaikan harga berdasarkan percentase dari base rate nya.
    - **Decrease By Percent**: Menurunkan harga berdasarkan percentase dari base rate nya.

    :::info Contoh Penggunaan
    **Base Rate 500**
    1. Jika rate logic ditambahkan dengan type Increase By Amount, kemudian valu di isi 10, maka rate yang dikirim ke _OTA_ akan menjadi 500 untuk _OTA_ ini, namun untuk _OTA_ lainnya akan tetap dikirim 500 oleh cakrahub, begitu juga sebaliknya.
    2. jika rate logic ditambahkan dengan type Increase By Percent, kemudian value di isi dengan 10, maka rate yang dikirim ke _OTA_ akan menjadi 550 **_(10% dari 500  -> 50)_** untuk _OTA_ ini.namun untuk _OTA_ lainnya akan tetap dikirim 500 oleh cakrahub, begitu juga sebaliknya.
    :::
    <img
      src="/img/cm/channel/rate-logic.png"
      alt="Rate Logic"
      style={{
        borderRadius: "8px",
        marginTop: "1rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
       />
  </TabItem>
</Tabs>

## Detail Form Channel

1. **Channel**: Pilihan OTA yang tersedia di cakrahub.
2. **Tittle**: Nama Channel yang akan tampil di table.
3. **Currency**: Mata uang yang digunakan pada property(_biasanya mengikuti OTA nya_).
4. **Hotel ID**: ID hotel yang terdaftar di masing-masing OTA.



## Tips Modern Penggunaan Channels

- Gunakan fitur filter & search untuk menemukan channel dengan cepat.
- Aktifkan notifikasi email untuk mendapatkan info terbaru dari bookingan tamu.
- Lakukan mapping ulang jika ada perubahan tipe kamar atau rate di PMS.

:::info Modern Experience
Menu Channels didesain dengan tampilan modern, dan navigasi intuitif agar pengelolaan integrasi OTA lebih mudah, cepat, dan minim error.
:::