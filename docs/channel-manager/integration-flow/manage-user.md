---
title: Manager User
sidebar_label: Manage User
sidebar_position: 5
---
# Manage User

Menu **Manage User** adalah pusat pengelolaan seluruh user yang dapat diatur dalam sistem integrasi. Di sini Anda dapat membuat, mengedit, dan menghapus user, serta mengatur hak akses dan detail user sesuai kebutuhan operasional. Semua data user yang diinputkan akan digunakan untuk proses manajemen dan pengaturan hak akses agar integrasi berjalan lancar dan konsisten.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{marginBottom: '1.5rem'}}>
<img
      src="/img/cm/manage-user/manage-list.png"
      alt="Manage User List"
      style={{
        borderRadius: "8px",
        marginTop: "1rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
/>
</div>

## Mengapa Menu Manage User Penting?

- **Manajemen Hak Akses**: Mengatur user dan hak aksesnya sesuai kebutuhan
- **CRUD Data User**: Membuat, mengedit, dan menghapus data user
- **Konsistensi Data**: Memastikan data user selalu sinkron
- **Fleksibilitas**: Data user dapat disesuaikan dengan kebutuhan operasional

## Pengelolaan Data Manage User

<Tabs className="unique-tabs">
  <TabItem value="create" label="Create" default>
    Untuk membuat user baru:
    
    1. Klik tombol **"+ Create"** di pojok kanan atas.
    2. Isi form dengan data user yang diperlukan.
    3. **Field dengan label merah wajib diisi** - pastikan tidak ada yang terlewat.
    4. Simpan, dan data akan otomatis tersedia pada list.
    
    <img
      src="/img/cm/manage-user/manage-form.png"
      alt="Manage User Form"
      style={{
        borderRadius: "8px",
        marginTop: "1rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
    />
    :::warning Field Wajib
    Pastikan semua field dengan **label merah** telah diisi dengan benar sebelum menyimpan data.
    :::
  </TabItem>
  <TabItem value="edit" label="Edit">
    Untuk mengedit data user yang sudah ada:
    
    - Klik tombol **Edit** pada baris data yang ingin diubah.
    - Ubah data sesuai kebutuhan (field merah tetap wajib diisi).
    - Simpan perubahan, data akan terupdate di sistem terkait.
    
    <img
      src="/img/cm/manage-user/manage-edit.png"
      alt="Manage User Edit"
      style={{
        borderRadius: "8px",
        marginTop: "1rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
    />
    :::info Auto-Update
    Perubahan data akan otomatis tersinkron ke sistem yang terhubung.
    :::
  </TabItem>
  <TabItem value="delete" label="Remove">
    Untuk menghapus data user:
    
    - Klik tombol **Remove** pada baris data yang akan dihapus.
    - Konfirmasi penghapusan melalui dialog yang muncul.
    - Data akan dihapus dari sistem dan tidak lagi tersedia.
    
    <img
      src="/img/cm/manage-user/manage-remove.png"
      alt="Manage User Remove"
      style={{
        borderRadius: "8px",
        marginTop: "1rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
    />
    :::danger Peringatan
    Penghapusan data akan menghapus semua hak akses terkait. Pastikan tidak ada proses aktif sebelum menghapus.
    :::
  </TabItem>
</Tabs>

## Detail Form Input Manage User

### Field Wajib (Label Merah)

- **Username**: Nama user `required`
- **Group Code**: Pilih group/role/ peran user `required`
- **Email**: Email user `required`
- **Password**: Password unix `required`
- **User Api Key**: Untuk memberikan batasan mengelola property/hotel `required`
- **Active**: Activasi akun, set ke inactive jika diperlukan `default: active`


## Integrasi Hak Akses

Data yang diinputkan di menu Manage User akan otomatis digunakan untuk pengaturan hak akses user di sistem integrasi.

:::tip Best Practice
Disarankan untuk menginput data user sesuai dengan data asli dan kebutuhan operasional.
:::
