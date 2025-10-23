---
title: Log ARI
sidebar_label: Log ARI
sidebar_position: 7
---

# Log ARI

Menu **Log ARI** digunakan untuk memantau status pengiriman data ARI (Availability, Rate, Inventory) dari PMS ke Channel Manager. Dengan menu ini, Anda dapat melihat apakah data ARI berhasil, atau gagal, sehingga proses monitoring integrasi menjadi lebih transparan dan mudah dipantau.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{marginBottom: '1.5rem'}}>
<img
      src="/img/cm/log-ari/log-list.png"
      alt="Log ARI List"
      style={{
        borderRadius: "8px",
        marginTop: "1rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
/>
</div>

## Mengapa Menu Log ARI Penting?

- **Monitoring Real-Time**: Melihat status pengiriman data ARI ke CM secara langsung
- **Transparansi Proses**: Mengetahui detail data ARI yang berhasil, atau gagal
- **Troubleshooting**: Memudahkan identifikasi masalah integrasi ARI

## Pengelolaan Log ARI

<Tabs className="unique-tabs">
  <TabItem value="view" label="View Log" default>
    Untuk melihat detail log ARI yang dikirim PMS:
    
    1. Buka menu Log ARI.
    2. Pilih data yang mau dilihat dan klik icon `mata`
    3. Anda bisa lihat format `JSON` yang dikirim oleh PMS.
    
    <div style={{marginBottom: '1.5rem'}}>
        <img
            src="/img/cm/log-ari/log-detail.png"
            alt="Log ARI Detail"
            style={{
                borderRadius: "8px",
                marginTop: "1rem",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}
        />
    </div>
    :::info Status ARI
    Status data ARI akan ditampilkan secara real-time sesuai hasil pengiriman ke PMS. selalu cek detail data yang dikirim oleh PMS untuk memudahkan tracking masalahnya.
    :::
  </TabItem>
</Tabs>

## Detail Log ARI

- **PMS ID**: ID internal yang ada di PMS.
- **Status**: Status data yang dikirim PMS (success, failed).
- **Room Type Code**: Code room type.
- **Rate Plan Code**: Code rate plan.
- **CM Message**: Pesan yang dikembalikan oleh CM.
- **Action**: Untuk melihat detail `JSON` data yang dikirimkan PMS.

## Integrasi dengan PMS

Menu Log ARI sangat penting untuk memastikan semua data ARI yang dikirim ke PMS tercatat dan dapat dipantau statusnya. Jika terjadi masalah, Anda dapat langsung melakukan troubleshooting berdasarkan log yang tersedia.

:::tip Best Practice
Selalu cek Log ARI secara berkala untuk memastikan integrasi data ARI berjalan lancar dan tidak ada data yang gagal.
:::
