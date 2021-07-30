
<template>
  <v-data-table
    :headers="headers"
    :items="listPengajuan"
    sort-by="pengajuan"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Pengkinian Vendor</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
 
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Dessert name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.calories"
                      label="Calories"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.fat"
                      label="Fat (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.carbs"
                      label="Carbs (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Protein (g)"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="requestUpdate(item)"
      >
        mdi-card-account-mail
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script scoped>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'No Vendor',
            align: 'start',
            value: 'vendor_no',
          },
          { text: 'Cabang', value: 'cabang' },
          { text: 'Nama', value: 'nama' },
          { text: 'Grup Perusahaan', value: 'grup_perusahaan' },
          { text: 'Tanggal Request', value: 'tgl_request' },
          { text: 'Actions', value: 'actions', sortable: false }
        ],
        listPengajuan: [
          {
            vendor_no: '1000000013',
            cabang: 'BCA KCU C',
            nama: 'Budi Santaso',
            grup_perusahaan: "PT. Dirgantoro Indonesia",
            bidang_usaha: "Jasa Pengangkutan",
            bentuk_usaha: "PT",
            tgl_request: "11 Juni 2021",
            status: "Menunggu Approval PIC BCA",
          }
        ],
      dialog: false,
      dialogDelete: false,
        editedIndex: -1,
      editedItem: {
        vendor_no: '',
        cabang: '',
        nama: '',
        grup_perusahaan: '',
        bidang_usaha: '',
        bentuk_usaha: '',
        tgl_request: 0,
        status: ''
      },
      defaultItem: {
        vendor_no: '',
        cabang: '',
        nama: '',
        grup_perusahaan: '',
        bidang_usaha: '',
        bentuk_usaha: '',
        tgl_request: 0,
        status: ''
      }
    }
    },
    
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },
    methods: {
        editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      }
    }
  }
</script>