---
title: PMS Log
sidebar_label: PMS Log
sidebar_position: 3
---

# PMS Log

Menu **PMS Log** digunakan untuk memantau status pengiriman booking dari Channel Manager ke PMS. Dengan menu ini, Anda dapat melihat apakah booking berhasil, pending, atau gagal, sehingga proses monitoring integrasi menjadi lebih transparan dan mudah dipantau.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{marginBottom: '1.5rem'}}>
<img
			src="/img/cm/room-type/pms-log-list.png"
			alt="PMS Log List"
			style={{
				borderRadius: "8px",
				marginTop: "1rem",
				boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
			}}
/>
</div>

## Mengapa Menu PMS Log Penting?

- **Monitoring Real-Time**: Melihat status pengiriman booking ke PMS secara langsung
- **Transparansi Proses**: Mengetahui detail booking yang berhasil, pending, atau gagal
- **Troubleshooting**: Memudahkan identifikasi masalah integrasi booking

## Pengelolaan PMS Log

<Tabs className="unique-tabs">
	<TabItem value="view" label="View Log" default>
		Untuk melihat log booking:
    
		1. Buka menu PMS Log.
		2. Pilih tanggal atau filter yang diinginkan.
		3. Lihat status booking (berhasil, pending, gagal) beserta detailnya.
    
		<img
			src="/img/cm/room-type/pms-log-detail.png"
			alt="PMS Log Detail"
			style={{
				borderRadius: "8px",
				marginTop: "1rem",
				boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
			}}
		/>
		:::info Status Booking
		Status booking akan ditampilkan secara real-time sesuai hasil pengiriman ke PMS.
		:::
	</TabItem>
</Tabs>

## Detail Log Booking

- **Booking ID**: ID booking yang dikirim ke PMS
- **Status**: Berhasil, pending, atau gagal
- **Timestamp**: Waktu pengiriman booking
- **Error Message**: Pesan error jika terjadi kegagalan

## Integrasi dengan PMS

Menu PMS Log sangat penting untuk memastikan semua booking yang dikirim ke PMS tercatat dan dapat dipantau statusnya. Jika terjadi masalah, Anda dapat langsung melakukan troubleshooting berdasarkan log yang tersedia.

:::tip Best Practice
Selalu cek PMS Log secara berkala untuk memastikan integrasi booking berjalan lancar dan tidak ada booking yang gagal.
:::
