---
sidebar_position: 6
---

# Rate Plans

Menu **Rate Plans** digunakan untuk membuat, mengedit, menghapus, dan melihat daftar rate plan yang akan digunakan untuk pengelolaan harga dan promosi di berbagai OTA. Setiap rate plan yang berhasil dibuat akan otomatis muncul di menu Inventory untuk pengaturan harga dan ketersediaan.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{marginBottom: '1.5rem'}}>
<img
      src="/img/cm/rate-plan/rate-list.png"
      alt="Rate List"
      style={{
        borderRadius: "8px",
        marginTop: "1rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
    />
</div>


## Mengapa Rate Plan Penting?

Rate plan adalah komponen utama dalam distribusi harga dan promosi ke OTA karena:

- **Dasar Harga Inventory**: Setiap rate plan yang dibuat akan otomatis muncul di menu Inventory
- **Mapping OTA**: Memudahkan mapping harga dan promosi antara PMS dan berbagai OTA
- **Konsistensi Data**: Memastikan harga dan aturan promosi konsisten di semua channel
- **Fleksibilitas**: Data boleh sama dengan PMS atau dibedakan sesuai kebutuhan

## Pengelolaan Rate Plan

<Tabs className="unique-tabs">
  <TabItem value="create" label="Create" default>
    Untuk membuat rate plan baru:
    
    1. Klik tombol **"+ Create"** di pojok kanan atas.
    2. Isi form dengan data yang diperlukan.
    3. **Field dengan label merah wajib diisi** - pastikan tidak ada yang terlewat.
    4. Simpan, dan rate plan akan otomatis tersedia di Inventory.
    
    <div style={{marginBottom: '1.5rem'}}>
    <img
          src="/img/cm/rate-plan/rate-form.png"
          alt="Rate Form"
          style={{
            borderRadius: "8px",
            marginTop: "1rem",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}
        />
    </div>
    
    :::warning Field Wajib
    Pastikan semua field dengan **label merah** telah diisi dengan benar sebelum menyimpan rate plan.
    :::
  </TabItem>
  <TabItem value="edit" label="Edit">
    Untuk mengedit rate plan yang sudah ada:
    
    - Klik tombol **Edit** pada baris rate plan yang ingin diubah.
    - Ubah data sesuai kebutuhan (field merah tetap wajib diisi).
    - Simpan perubahan, data akan terupdate di semua channel terkait.
    
    <div style={{marginBottom: '1.5rem'}}>
    <img
          src="/img/cm/rate-plan/rate-edit.png"
          alt="Rate Edit"
          style={{
            borderRadius: "8px",
            marginTop: "1rem",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}
        />
    </div>
    
    :::info Auto-Update
    Perubahan rate plan akan otomatis tersinkron ke menu Inventory dan semua channel yang sudah terhubung.
    :::
  </TabItem>
  <TabItem value="remove" label="Remove">
    Untuk menghapus rate plan:
    
    - Klik tombol **Remove** pada baris rate plan yang akan dihapus.
    - Konfirmasi penghapusan melalui dialog yang muncul.
    - Rate plan akan dihapus dari sistem dan tidak lagi tersedia di Inventory.
    
      <div style={{marginBottom: '1.5rem'}}>
        <img
            src="/img/cm/rate-plan/rate-remove.png"
            alt="Rate Remove"
            style={{
              borderRadius: "8px",
              marginTop: "1rem",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}
          />
      </div>
    
    :::danger Peringatan
    Penghapusan rate plan akan menghapus semua data inventory terkait. Pastikan tidak ada booking aktif sebelum menghapus.
    :::
  </TabItem>
</Tabs>

## Detail Form Input Rate Plan

### Field Wajib (Label Merah)

- **Code**: Kode unik untuk identifikasi internal `required`
- **Name**: Nama rate plan yang akan ditampilkan di OTA `required`
- **Room Type**: Room type yang ingin anda hubungkan dengan tarif ini `required`
- **Currency**: By default system set Currency from associated Property.
Property can have Rate Plans with different Currencies. `required`
- **Occupancy**: Count of guests allowed for current Occupancy Option `required`

### Field Opsional

- **Default Rate**: This field represent default Rate value what will be applied to each date for new Rate Plan and for each date which is came into state after "UpdateDate" task when System open new future date.

## Integrasi dengan PMS

Rate Plan dapat:

- **Sinkron dengan PMS**: Gunakan nama dan data yang sama dengan PMS Anda
- **Customized**: Buat nama dan aturan harga yang berbeda untuk kebutuhan marketing
- **Mapping Fleksibel**: Satu rate plan PMS bisa di-mapping ke beberapa rate plan di sistem

:::tip Best Practice
Buat nama rate plan yang jelas dan mudah dipahami tamu, serta pastikan aturan harga dan pembatalan sesuai kebutuhan bisnis.
:::