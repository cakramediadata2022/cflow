---
title: Mapping
sidebar_label: Mapping
sidebar_position: 2
---

# Mapping

Menu **Mapping** adalah tempat untuk memetakan data antara Channel Manager (CM) dan Property Management System (PMS). Semua data yang diinputkan dari menu Rooms akan otomatis muncul di sini, sehingga proses mapping menjadi lebih mudah dan terstruktur.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserOnly from "@docusaurus/BrowserOnly";
import "react-image-gallery/styles/css/image-gallery.css";

<div style={{marginBottom: '1.5rem'}}>
<img
			src="/img/cm/mapping-pms/mapping-list.png"
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
		2. klik pada column `Cm Rate Plan Name` → List merah untuk data yang belum di mapping, list biru menandakan sudah di mapping dan bisa untuk di update.
		1. Lengkapi form sesuai dengan ketentuan (_Data kiri untuk pms, kanan untuk CM_).
		2. Pilih data CM yang sesuai.
		2. Jika data dari cm `static` (Biasanya dari traveloka ada rate static), anda bisa centang checkbox static, sehingga jika ada bookingan dengan room type dan rate plan `Static` dari OTA maka data tersebut automatis diubah menyesuaikan data pms nya.
		3. Simpan mapping, data akan langsung terhubung.
    
		<BrowserOnly fallback={<div>Loading gallery...</div>}>
			{() => {
				const React = require("react");
				const { useEffect, useState } = React;
				const [Gallery, setGallery] = useState(null);

				useEffect(() => {
				import("react-image-gallery").then((mod) => setGallery(() => mod.default));
				}, []);

				if (!Gallery) {
				return <div>Loading gallery...</div>;
				}

				const images = [
				{ original: "/img/cm/mapping-pms/mapping-form.png" },
				{ original: "/img/cm/mapping-pms/static-form.png" },
				];

				return (
				<Gallery
					items={images}
					showThumbnails={false}
					showFullscreenButton={false}
					showPlayButton={false}
					renderItem={item => (
					<img
						src={item.original}
						alt="Gallery Booking"
						style={{
						borderRadius: '8px',
						boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
						width: '100%',
						objectFit: 'cover'
						}}
					/>
					)}
				/>
				);
			}}
    	</BrowserOnly>
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
			src="/img/cm/mapping-pms/mapping-reset.png"
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

- **PMS Room Type Name**: Mapping tipe kamar PMS
- **PMS Rate Plan Name**: Mapping rate plan PMS
- **CM Room Type Name**: Data Room Type CM
- **CM Rate Plan Name**: Data Rate Plan CM

## Integrasi Otomatis

Setiap data yang dibuat di menu Rooms akan otomatis muncul di menu Mapping. Proses mapping sangat penting untuk memastikan data CM dan PMS saling terhubung dan sinkron.

:::tip Best Practice
Lakukan mapping secara teliti agar tidak terjadi kesalahan data antara CM dan PMS.
:::
