<template>
<v-container
    class="spacing-playground pa-6"
    fluid
  >
  <h1 class="mb-0">Vendor Data</h1>
    <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        Data Vendor
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        Rekening Pembayaran
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="3">
        Susunan Kepengurusan
      </v-stepper-step>
      
      <v-divider></v-divider>

      <v-stepper-step step="4">
        Pengalaman
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
          <v-select
      v-model="cabang"
      :items="list_cabang"
      :error-messages="cabangErrors"
      label="Cabang"
      required
      @change="$v.cabang.$touch()"
      @blur="$v.cabang.$touch()"
    ></v-select>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="35"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="grup_perusahaan"
      :error-messages="grupErrors"
      :counter="35"
      label="Grup Perusahaan"
      required
      @input="$v.grup_perusahaan.$touch()"
      @blur="$v.grup_perusahaan.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="perusahaan_terafiliasi"
      :error-messages="perusahaanTerafiliasiErrors"
      :counter="35"
      label="Perusahaan Terafiliasi"
      required
      @input="$v.perusahaan_terafiliasi.$touch()"
      @blur="$v.perusahaan_terafiliasi.$touch()"
    ></v-text-field>


    <v-text-field
      v-model="bidang_usaha"
      :error-messages="bidangUsahaErrors"
      :counter="35"
      label="Bidang Usaha"
      required
      @input="$v.bidang_usaha_sel.$touch()"
      @blur="$v.bidang_usaha.$touch()"
    ></v-text-field>

     <v-select
   v-model = "bentuk_usaha_sel"
      :items="list_bentuk_usaha"
      :error-messages="bidangUsahaErrors"
      label="Bentuk Usaha"
      required
      @change="$v.bentuk_usaha_sel.$touch()"
      @blur="$v.bentuk_usaha_sel.$touch()"
      
    ></v-select>
   <v-text-field
   v-model = "bentuk_usaha"
      :error-messages="bidangUsahaErrors"
      :counter="35"
      label="Bentuk Usaha"
      required
      v-show="toggleBentukUsahaLain"
      @input="$v.bentuk_usaha.$touch()"
      @blur="$v.bentuk_usaha.$touch()"
    ></v-text-field>

      <v-file-input
  multiple
    accept="pdf/*"
    label="Dokumen Pendukung"
  ></v-file-input>  

  <v-card>
    <v-card-text>
      Mohon melampirkan Dokumen-dokumen berikut:
      <ul v-if="bentuk_usaha_sel !== 'Perorangan'">
        <li>Akta Pendirian</li>
        <li>Nomor Induk Berusaha (NIB)/Tanda Daftar Perusahaan(TDP)</li>
        <li>Izin Usaha/Izin Komersial/Izin operasional</li>
        <li>Kartu Identitas Direksi/Pengurus</li>
        <li>Surat Pengukuhan Pengusaha Kena Pajak (SPPKP) atau surat pernyataan Pengusaha Non PKP</li>
        <li>NPWP</li>
    </ul>
    
   <ul v-if="bentuk_usaha_sel === 'Perorangan'">
        <li>Kartu Identitas</li>
        <li>Surat Pengukuhan Pengusaha Kena Pajak (SPPKP) atau surat pernyataan Pengusaha Non PKP</li>
        <li>NPWP</li>
        <li>KITAS/KITAP (Khusus WNA)</li>
    </ul>
    
    </v-card-text>
  </v-card>
  
    <v-spacer></v-spacer>
  
        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn text
          @click="clear()">
          Reset
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
           <v-text-field
  label = "Nomor Rekening"
      :counter="40"
      required
      @input="$v.bentuk_usaha.$touch()"
      @blur="$v.bentuk_usaha.$touch()"
    ></v-text-field>
           <v-text-field
   label = "Nama Pemilik Rekening"
      :counter="40"
      required
      @input="$v.bentuk_usaha.$touch()"
      @blur="$v.bentuk_usaha.$touch()"
    ></v-text-field>
    
           <v-text-field
   label = "Nama Bank"
      :counter="40"
      required
      @input="$v.bentuk_usaha.$touch()"
      @blur="$v.bentuk_usaha.$touch()"
    ></v-text-field>
        <v-btn
          color="primary"
          @click="e1 = 1"
          class="mr-4"
        >
        Back
        </v-btn>
        <v-btn
          color="primary"
          @click="e1 = 3"
          class="mr-4"
        >
          Continue
        </v-btn>

        <v-btn text
          @click="clear()">
          Reset
        </v-btn>
      <v-spacer></v-spacer>
    </v-row>
      </v-stepper-content>

      <v-stepper-content step="3">
   <v-text-field
   label= "Pengurus"
      :counter="40"
      required
      @input="$v.bentuk_usaha.$touch()"
      @blur="$v.bentuk_usaha.$touch()"
    ></v-text-field>
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Sudah Benar?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>
        <v-btn
          color="primary"
          @click="e1 = 2"
          class="mr-4"
        >
        Back
        </v-btn>
        <v-btn
          color="primary"
          @click="e1 = 4"
          class="mr-4"
        >
          Continue
        </v-btn>

        <v-btn text
          @click="clear()">
          Reset
        </v-btn>
      </v-stepper-content>
      
      <v-stepper-content step="4">
        <v-card
          class="mb-7"
          color="grey lighten-1"
          height="200px"
        ></v-card>


    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
     <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          @click="e1 = 2"
          class="mr-4"
        >
        Back
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text
          @click="clear()"
          class="mr-4">
          Reset
        </v-btn>
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Submit
        </v-btn>
      </template>

         <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Surat Pernyataan
        </v-card-title>

        <v-card-text>
          <ol>
            <li>Data yang dicantumkan pada Formulir Pendaftaran Pihak Eksternal (“Formulir”) ini adalah benar.</li>
            <li>Segala akibat yang timbul atas ketidakbenaran data dan keterangan yang kami berikan menjadi tanggung jawab kami sepenuhnya. Kami dengan ini membebaskan BCA dari segala tuntutan, gugatan, dan/atau tindakan hukum lainnya dari pihak manapun sehubungan dengan proses pengajuan menjadi rekanan BCA.</li>
            <li>Kami akan segera memberitahukan BCA setiap perubahan data kami dan mengirimkan dokumen pendukungnya kepada BCA.</li>
            <li>Lampiran-lampiran dalam Formulir ini merupakan satu kesatuan dan bagian yang tidak terpisahkan dari Formulir ini.</li>
          </ol>
       </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
      </v-stepper-content>

    </v-stepper-items>
  </v-stepper>


</v-container>

</template>

<script scoped>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(35) },
      grup_perusahaan: { maxLength: maxLength(35) },
      perusahaan_terafiliasi: { maxLength: maxLength(35) },
      bidang_usaha: { maxLength: maxLength(50) },
      email: { required, email },
      cabang: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      name: '',
      grup_perusahaan: '',
      perusahaan_terafiliasi: '',
      bidang_usaha:'',
      list_cabang: [
        '0901 KCU A',
        '0902 KCU B',
        '0903 KCU C',
        '0904 KCU D',
      ],
      email: '',
      cabang: '',
      list_bentuk_usaha: [
        'PT',
        'CV',
        'Perorangan',
        'Lain-lain',
      ],
      bentuk_usaha_sel: '',
      bentuk_usaha: '',
      dokumen_pendukung: '',
      toggleBentukUsahaLain: '',
      peroranganFlag: '',
      checkbox: false,
      dialog:'',
      e1: 1,
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      cabangErrors () {
        const errors = []
        if (!this.$v.cabang.$dirty) return errors
        !this.$v.cabang.required && errors.push('Cabang is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 35 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      grupErrors () {
        const errors = []
        if (!this.$v.grup_perusahaan.$dirty) return errors
        !this.$v.grup_perusahaan.maxLength && errors.push('Grup Perusahaan must be at most 35 characters long')
        return errors
      },
      perusahaanTerafiliasiErrors () {
        const errors = []
        if (!this.$v.perusahaan_terafiliasi.$dirty) return errors
        !this.$v.perusahaan_terafiliasi.maxLength && errors.push('Perusahaan Terafiliasi must be at most 35 characters long')
        return errors
      },
      bidangUsahaErrors () {
        const errors = []
        if (!this.$v.bidang_usaha.$dirty) return errors
        !this.$v.bidang_usaha.maxLength && errors.push('Bidang Usaha must be at most 50 characters long')
        return errors
      },
      bentukUsahaErrors () {
         const errors = []
        if (!this.$v.bentuk_usaha_sel.$dirty) return errors
        !this.$v.bentuk_usaha_sel.required && errors.push('Cabang is required')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
        updateBentukUsaha( val ){
          alert("HI");
        if(val = 'Lain-lain')
        {
        THIS.toggleBentukUsahaLain = 'X';
        }
        else
        {
        this.toggleBentukUsahaLain = '';
        this.bentuk_usaha = val;
        }
        return this.toggleBentukUsahaLain;
        }
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = '';
        this.email = '';
        this.cabang = null;
        this.checkbox = false;
        this.grup_perusahaan = null;
        this.bidang_usaha = '';
        this.bentuk_usaha_sel = '';
        this.bentuk_usaha = '';
        this.perusahaan_terafiliasi = '';
        this.dokumen_pendukung = '';
        this.e1 = '1';

      },
    },

        watch:{
      bentuk_usaha_sel: function( val ){
        if(val == "Lain-lain")
        {
        this.toggleBentukUsahaLain = 'X';
        this.bentuk_usaha = '';
        }
        else
        {
          if(val = "Perorangan")
          {
            this.peroranganFlag = 'X';
          }
        this.toggleBentukUsahaLain = '';
        this.bentuk_usaha = val;
        }
        }
    }
  }
</script scoped>