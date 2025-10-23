---
title: Mapping
sidebar_label: Mapping
sidebar_position: 2
---

# Mapping

Menu **Mapping** adalah tempat untuk memetakan data antara Channel Manager (CM) dan Property Management System (PMS). Semua data yang diinputkan dari menu Rooms akan otomatis muncul di sini, sehingga proses mapping menjadi lebih mudah dan terstruktur.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{marginBottom: '1.5rem'}}>
<img
			src="/img/cm/room-type/mapping-list.png"
			alt="Mapping List"
			style={{
				borderRadius: "8px",
				marginTop: "1rem",
				boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
			}}
/>
</div>

## Mengapa Menu Mapping Penting?

- **Otomatisasi Data**: Data dari menu Rooms langsung tersedia untuk mapping
- **Konsistensi**: Memastikan data CM dan PMS saling terhubung dengan benar
- **Reset Mapping**: Fitur reset untuk melepas mapping jika terjadi perubahan

## Pengelolaan Mapping

<Tabs className="unique-tabs">
	<TabItem value="map" label="Mapping" default>
		Untuk melakukan mapping data:
    
		1. Pilih data PMS yang ingin dimappingkan.
		2. Pilih data CM yang sesuai.
		3. Simpan mapping, data akan langsung terhubung.
    
		<img
			src="/img/cm/room-type/mapping-form.png"
			alt="Mapping Form"
			style={{
				borderRadius: "8px",
				marginTop: "1rem",
				boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
			}}
		/>
		:::info Otomatisasi
		Data mapping akan langsung digunakan untuk proses sinkronisasi antara CM dan PMS.
		:::
	</TabItem>
	<TabItem value="reset" label="Reset Mapping">
		Untuk melepas mapping:
    
		- Klik tombol **Reset** pada baris mapping yang ingin dilepas.
		- Konfirmasi reset melalui dialog yang muncul.
		- Data mapping akan dilepas dan bisa dimapping ulang.
    
		<img
			src="/img/cm/room-type/mapping-reset.png"
			alt="Mapping Reset"
			style={{
				borderRadius: "8px",
				marginTop: "1rem",
				boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
			}}
		/>
		:::warning Peringatan
		Reset mapping akan memutus hubungan data CM dan PMS. Pastikan tidak ada proses aktif sebelum melakukan reset.
		:::
	</TabItem>
</Tabs>

## Detail Mapping

- **Room Type Mapping**: Mapping tipe kamar PMS ke tipe kamar CM
- **Rate Plan Mapping**: Mapping rate plan PMS ke rate plan CM

## Integrasi Otomatis

Setiap data yang dibuat di menu Rooms akan otomatis muncul di menu Mapping. Proses mapping sangat penting untuk memastikan data CM dan PMS saling terhubung dan sinkron.

:::tip Best Practice
Lakukan mapping secara teliti agar tidak terjadi kesalahan data antara CM dan PMS.
:::
