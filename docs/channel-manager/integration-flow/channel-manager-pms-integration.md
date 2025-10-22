---
title: Integrasi Channel Manager - PMS - Service
slug: /channel-manager/integration/cm-pms-service
sidebar_label: Integrasi CM-PMS-Service
description: Panduan lengkap integrasi Channel Manager dengan Property Management System melalui Service layer dengan diagram alur dan checklist validasi.
sidebar_position: 1
---

# Integrasi Channel Manager - PMS - Service

## Ringkasan Singkat

Dokumentasi ini menjelaskan alur lengkap integrasi antara **Channel Manager (CM)**, **Property Management System (PMS)**, dan **Service** sebagai middleware. Integrasi ini memungkinkan sinkronisasi real-time data property, room type, rate plan, inventory, dan booking antara sistem internal hotel dengan berbagai Online Travel Agent (OTA).

**Tujuan Integrasi:**

- Sinkronisasi data property, room, rate, dan inventory secara otomatis
- Centralized booking management dari multiple OTA
- Real-time availability dan pricing update
- Streamlined operation workflow antara CM dan PMS

---

## Diagram Alur Integrasi

### 1. High-Level Flowchart

```mermaid
flowchart LR
    A[1. Buat Property di CM] --> B[2. Buat PMS Connectivity]
    B --> C[3. Konfigurasi PMS Setting]
    C --> D[4. Sinkronisasi Room & Rate]
    D --> E[5. Daftarkan di Service]
    E --> F[6. Service Hubungkan CM ↔ PMS]
    F --> G[7. Testing & Go Live]

    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style C fill:#fff3e0
    style D fill:#e8f5e8
    style E fill:#fce4ec
    style F fill:#f1f8e9
    style G fill:#e0f2f1
```

### 2. Swimlane Diagram dengan Aktor

```mermaid
flowchart TD
    subgraph "Channel Manager"
        A1[Create Property]
        A2[Create PMS Connectivity]
        A3[Setup Room & Rate]
        A4[Mapping Room & Rate]
    end

    subgraph "PMS System"
        B1[Setup CM Connection]
        B2[Setup Room Rate di config]
        B3[Sync Availability & Rate]
    end

    subgraph "Developer/Service"
        C1[Register Property]
        C2[Map CM-PMS Credentials]
        C3[Enable Sync Service]
    end

    A1 --> A2
    A2 --> A3
    A3 --> A4
    A4 --> B1
    B1 --> B2
    B2 --> C1
    C1 --> C2
    C2 --> C3
    C3 --> B3


```

### 3. Standard flow integration

```mermaid
classDiagram

    class Cakrahub{
        1. Tambahkan/Create property.
        2. Lengkapi seluruh menu : 
           room type, rate plan, channel, rooms, mapping, dll.
        3. Tambahkan data property pada menu PMS Connectivity.
    }

    class PMS{
        1. Masuk ke setting -> channel manager.
        2. Lengkapi seluruh form dan sesuaikan 
           dengan permintaan hotelnya.
        3. Masuk ke menu room rate yang ada 
        diconfig → pilih room rate atau buat 
        baru → lengkapi data-data yang diperlukan.
        ------------------------------------------------------------
        Catatan:
        1. Untuk hotel id di isi dengan hotel code nya channel manager
        2. Jika di CM, PMS dan Service sudah selesai, bisa lakukan 
        _**Sync Rate**_ → ada di menu room rate → post to cm.
         **_Sync availability_** → ada pada menu room type availability
    }
    class Service{
        1. daftarkan property pada service
----------------------------------------------------------------------------------------
        Catatan: service berperan sebagai jembatan antara PMS dengan CM, 
        jadi jika ingin data terintegrasi automatis, seperti pengiriman availabilitiy
        daftarkan terlebih dahulu property pada service
    }


    Cakrahub --|> Service
    PMS --|> Service
```

---

## Langkah-Langkah Detil Integrasi

### 1. Channel Manager (CM) - Setup Property & Connectivity

#### Langkah A: Setup PMS Connectivity

1. **Login ke Channel Manager** → Menu PMS Connectivity → Create New Connection
2. **Isi Field Wajib:**
   - `Hotel Code`: Pilih property yang akan di integrasikan (misal: "Hotel ABC - PMS Cakra") _(akan digunakan Service)_
   - `username`: Username untuk akses CM _(akan digunakan Service)_
   - `password`: Password untuk akses CM _(akan digunakan Service)_

**Contoh Data:**

```
hotel_code : CM_HTL_001
hotel_name: Hotel Grand Plaza
username: hotel_grand_api
password: P@ssw0rd123!
```

---

### 2. PMS System - Konfigurasi Channel Manager

#### Langkah A: Setting Koneksi CM

1. **Login PMS** → Setting → Channel Manager
2. **Isi Kredensial dari CM:**
   - Username: `hotel_grand_api` _(dari CM → PMS Connectivity)_
   - Password: `P@ssw0rd123!` _(dari CM → PMS Connectivity)_
   - Hotel ID: `CM_HTL_001` _(dari CM → PMS Connectivity)_
   - WSDL/Endpoint: `[URL dari CM]`

#### Langkah B: Sinkronisasi Room & Rate

1. **Menu Room & Rate Sync** → Setup Mapping
2. **Untuk setiap Room Rate, isi:**
   - **Inv Code**: Kode inventory internal PMS (misal: `STD`, `DLX`, `STE`) jika menggunakan bed type        **Inv Code** menjadi (`STD#DBL`, `DLX#SGL`, `STE#TWN`)
   - **Room Type Code**: ⚠️ **WAJIB UNIK** - hanya 1 kode per mapping
   - **Dynamic Rate**: Pilih opsi rate yang akan disinkron
     - `Base Occ`: Rate berdasarkan okupansi
     - `Base Session`: Rate berdasarkan session
   - **Start Date**: Tanggal mulai rate di aktifkan (format: YYYY-MM-DD)
   - **End Date**: Tanggal akhir rate dimatikan (format: YYYY-MM-DD)
   - **Online**: Type Checkbox, jangan lupa di centang
3. **Room Type:**
    - _tidak ada yang perlu di tambahkan disini, untuk room type akan mengikuti data dari pms_

**Contoh Mapping:**

```
Room Type Name: Standard Room
inv_code: STD
room_type_code: STD001  // ⚠️ Harus unik, jangan duplikasi!
dynamic_rate: Base Sessions
start_date: 2024-01-01
end_date: 2024-12-31
```

#### ⚠️ Validasi Wajib:

- `room_type_code` harus **TUNGGAL** per mapping (tidak boleh multiple)
- `start_date` `<=` `end_date`
- Timezone harus konsisten dengan CM
- Pastikan semua room type yang akan dijual online sudah dimapping // ⚠️**_ini dilakukan di channel manager_**

---

### 3. Service Layer - Developer Task

#### Langkah Developer: Register Property ke Service

1. **Akses Service Admin Panel** atau API endpoint
2. **Daftarkan Property Baru:**
   ```bash
   POST http://exp_lane/properties
   {
     "hotel_id": "CM_HTL_001",
     "hotel_code": "[KODE_DARI_PMS]",  // TODO: Ambil dari PMS
     "unit_code": "[KODE_DARI_PMS]",  // TODO: Ambil dari PMS → bisa string kosong
     "hotel_name": "[BEBAS]",  // TODO: Bisa ambil dari pms atau dari CM
     "username": "hotel_grand_api",      // Dari CM → PMS Connectivity
     "password": "P@ssw0rd123!",         // Dari CM → PMS Connectivity
     "WSDL": "http://exp_lane/cakra",
     "vendor": "CKHU", // Dari PMS
     "type_code": "CM", // Default CM
     "is_active": 1, // Default 1
     "interval": 20, // Berapa detik request di jalankan, set ke 20 detik untuk interval terbaiknya
   }
   ```

#### Mapping Data yang Diperlukan:

- **Dari CM PMS Connectivity:**
  - `username` → Service `username`
  - `password` → Service `password`
  - `hotel_code` → Service `hotel_id`
  - `CM Endpoint` → Service `WSDL`

- **Dari PMS:**
  - Hotel Code → Service `hotel_code`
  - Unit Code → Service `unit_code` → bisa string kosong

#### Sync Avail & Rate
_jika sudah terdaftar di cm, service dan pms, sync avail dan rate dapat dilakukan dengan cara:_
- **Sync Avail**
    - Login Ke PMS → Room Type Availability
    - Klik button `Sync Availability`
    - Pilih Room Type yang akan di sync kan
    - Pilih Start Date dan End Date // Beerfungsi untuk mengirim Availability dari tanggal berapa sampai tanggal berapa Availability mau dikirimkan(misal: `11-10-2025` sampai `11-10-2026`) maka Avail yang dikirim ke cm dari tanggla `11-10-2025` sampai ``11-10-2026``

#### Tugas Teknis Developer:

- **Enkripsi Kredensial:** Simpan username/password
- **Retry Logic:** Implementasi retry untuk API call yang gagal
- **Logging:** Log semua aktivitas sinkronisasi
- **Monitoring:** Setup alert untuk connection failure

---

## Checklist Validasi Pre Go-Live

### ☐ Channel Manager Validation

- [ ] Property data lengkap dan valid
- [ ] PMS Connectivity tersimpan dengan benar
- [ ] Username/password dapat diakses Service
- [ ] Hotel ID unik dan konsisten
- [ ] Room Rate dan Room Type sudah termapping

### ☐ PMS System Validation

- [ ] Koneksi CM berhasil established
- [ ] Room type mapping komplet (semua room type yang dijual)
- [ ] Rate mapping sesuai strategi pricing
- [ ] Date range valid (start_date `<=` end_date)
- [ ] Dynamic rate option sudah dipilih

### ☐ Service Integration Validation

- [ ] Property terdaftar di Service database
- [ ] CM credentials tersimpan
- [ ] CM endpoint dapat diakses
- [ ] Retry logic dan error handling aktif
- [ ] Monitoring dan logging berjalan
- [ ] Test sync CM → Service → PMS berhasil

### ☐ End-to-End Testing

- [ ] Test create/update inventory dari PMS → CM
- [ ] Test booking notification CM → PMS
- [ ] Test rate update PMS → OTA (via CM)
- [ ] Test availability update real-time
- [ ] Verify timezone consistency
- [ ] Load testing untuk high-volume sync

---

## Template Komunikasi untuk Developer

### Email Template: Request Property Registration

```
Subject: [URGENT] Registrasi Property Baru ke Service - Hotel [NAMA]

Hi Tim Developer,

Mohon bantuan untuk mendaftarkan property baru ke Service dengan data berikut:

**Property Information:**
- Hotel Name: [NAMA_HOTEL]
- Hotel Code (PMS): [HOTEL_CODE]  // TODO: Koordinasi dengan PMS team

**CM PMS Connectivity Data:**
- Username: [USERNAME_FROM_CM]
- Password: [PASSWORD_FROM_CM]  // Akan dishare via secure channel
- Hotel ID: [HOTEL_CODE]
- WSDL/Endpoint: [ENDPOINT_URL]
- Vendor: [VENDOR_CM] // Cakrahub

**Request:**
1. Tambahkan property ke Service database
2. Setup credential mapping (CM ↔ PMS)
3. Enable sync service
4. Lakukan testing end-to-end

**Timeline:** Go-live target: [TANGGAL_TARGET]

Please confirm receipt dan estimasi completion time.

Thanks,
[EXP_LANE CAKRA]
```

---

## Catatan Teknis & Best Practices

### Security

- **API Access:** Gunakan HTTPS untuk semua komunikasi antar service
- **API Key:** Simpan api key dengan aman untuk memudahkan anda mengelola kedepannya
- **Audit Trail:** Log semua perubahan data untuk audit

### Error Handling

- **Cek Log:** Setiap komunikasi antara cm dan pms, log aliran data nya sudah tercatat di dalam service, anda bisa melakukan tracking data disini untuk menemukan error nya dimana

---

**💡 Tips:** Selalu lakukan testing di staging environment sebelum production deployment. Koordinasikan dengan semua stakeholder (Hotel Ops, PMS Team, Developer) untuk memastikan integrasi berjalan smooth.   