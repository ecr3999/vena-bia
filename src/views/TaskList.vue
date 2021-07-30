
<template>
  <v-data-table
    :headers="headers"
    :items="listPengajuan"
    :items-per-page="20"
    class="elevation-1"
  ></v-data-table>
</template>

<script scoped>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'No Pengajuan',
            align: 'start',
            value: 'pengajuan',
          },
          { text: 'Cabang', value: 'cabang' },
          { text: 'Nama', value: 'nama' },
          { text: 'Grup Perusahaan', value: 'grup_perusahaan' },
          { text: 'Tanggal Request', value: 'tgl_request' },
          { text: 'Status', value: 'status' },
        ],
        listPengajuan: [
          {
            pengajuan: '98000000001',
            cabang: 'BCA KCU C',
            nama: 'Budi Santaso',
            grup_perusahaan: "PT. Dirgantoro Indonesia",
            bidang_usaha: "Jasa Pengangkutan",
            bentuk_usaha: "PT",
            tgl_request: "11 Juni 2021",
            status: "Menunggu Approval Management Vendor",
          }
        ],
      }
    },
  }
</script>