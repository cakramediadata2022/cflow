---
title: Rooms
sidebar_label: Rooms
sidebar_position: 1
---

# Rooms

Menu **Rooms** adalah pusat pengelolaan tipe kamar dan rate plan yang berasal dari PMS. Data yang diinputkan di sini akan digunakan untuk proses mapping dengan data yang ada di Channel Manager (CM), sehingga integrasi berjalan lancar dan konsisten.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{marginBottom: '1.5rem'}}>
<img
			src="/img/cm/rooms-pms/rooms-list.png"
			alt="Room List"
			style={{
				borderRadius: "8px",
				marginTop: "1rem",
				boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
			}}
/>
</div>

## Mengapa Menu Rooms Penting?

Menu ini menjadi fondasi utama integrasi PMS dan CM karena:

- **Dasar Mapping**: Semua data room type dan rate plan PMS yang diinputkan akan otomatis tersedia untuk proses mapping ke CM
- **CRUD Data PMS**: Anda dapat membuat, mengedit, dan menghapus data PMS sesuai kebutuhan
- **Konsistensi Data**: Memastikan data kamar dan rate plan PMS selalu sinkron dengan CM
- **Fleksibilitas**: Data dapat disesuaikan dengan kebutuhan operasional hotel

## Pengelolaan Data Rooms

<Tabs className="unique-tabs">
	<TabItem value="create" label="Create" default>
		Untuk membuat data room type dan rate plan baru:
    
		1. Klik tombol **"+ Create"** di pojok kanan atas.
		2. Isi form dengan data PMS yang diperlukan.
		3. **Field dengan label merah wajib diisi** - pastikan tidak ada yang terlewat.
		4. Simpan, dan data akan otomatis tersedia pada list dan pada menu mapping.
    
		<img
			src="/img/cm/rooms-pms/rooms-form.png"
			alt="Rooms Form"
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
		Untuk mengedit data yang sudah ada:
    
		- Klik tombol **Edit** pada baris data yang ingin diubah.
		- Ubah data sesuai kebutuhan (field merah tetap wajib diisi).
		- Simpan perubahan, data akan terupdate di mapping dan sistem terkait.
    
		<img
			src="/img/cm/rooms-pms/rooms-edit.png"
			alt="Rooms Edit"
			style={{
				borderRadius: "8px",
				marginTop: "1rem",
				boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
			}}
		/>
		:::info Auto-Update
		Perubahan data akan otomatis tersinkron ke menu Mapping dan sistem yang terhubung.
		:::
	</TabItem>
	<TabItem value="delete" label="Remove">
		Untuk menghapus data:
    
		- Klik tombol **Remove** pada baris data yang akan dihapus.
		- Konfirmasi penghapusan melalui dialog yang muncul.
		- Data akan dihapus dari sistem dan tidak lagi tersedia untuk mapping.
    
		<img
			src="/img/cm/rooms-pms/rooms-remove.png"
			alt="Rooms Remove"
			style={{
				borderRadius: "8px",
				marginTop: "1rem",
				boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
			}}
		/>
		:::danger Peringatan
		Penghapusan data akan menghapus semua mapping terkait. Pastikan tidak ada booking aktif sebelum menghapus.
		:::
	</TabItem>
</Tabs>

## Detail Form Input Data Rooms

### Field Wajib (Label Merah)

- **Room Type Code**: Kode unik dari PMS `required`
- **Room Type Name**: Nama tipe kamar PMS `required`
- **Rate Plan Code**: Kode rate plan PMS `required`
- **Rate Plan Name**: Nama rate plan PMS `required`
- **Room Occupancy**: Jumlah kamar yang menggunakan rate ini `required`

:::info Penulisan room type code
 jika pihak hotel ingin menjual kamar berdasarkan bed type, penulisan room type berisi tanda pagar (#),
 ini berfungsi memisahkan antara room type dan bed type.

#### Contoh data pms: 
 - Room Type → Standard Room `(STD)`
 - Bed Type → Twin Bed `(TWN)`

#### Format yang valid → room_type_code#bed_type_code
 - Maka untuk Room Type Code di menu Rooms menjadi → `STD#TWN`
:::

## Integrasi dengan CM

Data yang diinputkan di menu Rooms akan otomatis tersedia pada menu mapping. Pastikan data PMS yang diinput sudah benar agar proses integrasi berjalan lancar.

:::tip Best Practice
Disarankan untuk menginput data PMS sesuai dengan data asli (_Harus sama dengan yang ada di pms_).
:::
