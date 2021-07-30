<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/v-logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to VENA
        </h1>
      </v-col>
    </v-row>

       <v-row dense>

         <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="text-h5">
              Pendaftaran Vendor
            </v-card-title>

            <v-card-subtitle>
              Approve / Reject Vendor
            </v-card-subtitle>

            <v-card-actions >
              <v-btn  to="/tasklist" depressed 
              color="#385F73">
                Cek request pendaftaran
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>     
      
       </v-row>

              <v-row dense>

         <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="text-h5">
              Pengkinian Vendor
            </v-card-title>

            <v-card-subtitle>
              Ubah / Request pengkinian data Vendor
            </v-card-subtitle>

            <v-card-actions >
              <v-btn  to="/new" depressed 
              color="#385F73">
                Mulai lihat semua vendor
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>     
      
       </v-row>
  </v-container>
</template>
 