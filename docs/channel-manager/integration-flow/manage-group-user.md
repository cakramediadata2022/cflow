---
title: Manage Group User
sidebar_label: Manage Group User
sidebar_position: 6
---

# Manage Group User

Menu **Manage Group User** adalah pusat pengelolaan grup/role user. Data yang diinputkan di sini akan digunakan untuk proses manajemen grup/role, pengaturan hak akses, dan pengelolaan anggota grup/role secara terstruktur.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{marginBottom: '1.5rem'}}>
<img
      src="/img/cm/manage-group-user/group-list.png"
      alt="Group User List"
      style={{
        borderRadius: "8px",
        marginTop: "1rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
/>
</div>

## Mengapa Menu Manage Group/role User Penting?

- **Manajemen Grup/role**: Mengelola grup/role user dan hak aksesnya
- **CRUD Data Grup/role**: Membuat, mengedit, dan menghapus grup/role user
- **Fleksibilitas**: Data grup/role dapat disesuaikan dengan kebutuhan operasional

## Pengelolaan Data Group/role User

<Tabs className="unique-tabs">
  <TabItem value="create" label="Create" default>
    Untuk membuat grup/role user baru:
    
    1. Klik tombol **"+ Create"** di pojok kanan atas.
    2. Isi form dengan data grup/role yang diperlukan.
    3. **Field dengan label merah wajib diisi** - pastikan tidak ada yang terlewat.
    4. Simpan, dan data akan otomatis tersedia pada list.
    
    <img
      src="/img/cm/manage-group-user/group-form.png"
      alt="Group User Form"
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
    Untuk mengedit data grup/role user yang sudah ada:
    
    - Klik tombol **Edit** pada baris data yang ingin diubah.
    - Ubah data sesuai kebutuhan (field merah tetap wajib diisi).
    - Simpan perubahan, data akan terupdate di sistem terkait.
    
    <img
      src="/img/cm/manage-group-user/group-edit.png"
      alt="Group User Edit"
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
    Untuk menghapus grup/role user:
    
    - Klik tombol **Remove** pada baris data yang akan dihapus.
    - Konfirmasi penghapusan melalui dialog yang muncul.
    - Data grup/role akan dihapus dari sistem dan tidak lagi tersedia.
    
    <img
      src="/img/cm/manage-group-user/group-remove.png"
      alt="Group User Remove"
      style={{
        borderRadius: "8px",
        marginTop: "1rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
    />
    :::danger Peringatan
    Penghapusan data grup/role akan menghapus semua hak akses dan anggota terkait. Pastikan tidak ada proses aktif sebelum menghapus.
    :::
  </TabItem>
</Tabs>

## Detail Form Input Group User

### Field Wajib (Label Merah)

- **Code**:  Code group/role user `required`
- **Name**: Nama grup/role user `required`

## Integrasi Hak Akses Grup

Data yang diinputkan di menu Manage Group User akan otomatis digunakan untuk pengaturan hak akses dan anggota grup/role di sistem integrasi.

:::tip Best Practice
Disarankan untuk menginput data grup/role user sesuai dengan kebutuhan operasional dan struktur organisasi.
:::
