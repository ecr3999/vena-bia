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
              Vendor Baru
            </v-card-title>

            <v-card-subtitle>
              Ingin melakukan pendaftaran vendor baru?
            </v-card-subtitle>

            <v-card-actions>
              <v-btn text>
                MULAI daftar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="text-h5">
              Vendor Terdaftar
            </v-card-title>

            <v-card-subtitle>
              Ingin melakukan pengkinian data?
            </v-card-subtitle>
    <v-dialog
      v-model="dialog"
      width="500"
    >
    
<template v-slot:activator="{ on, attrs }">
            <v-card-actions>
        <v-btn  
          v-bind="attrs"
          v-on="on"
          depressed
            color="#385F73"
        >
          Mulai Pengkinian Data
        </v-btn>
       </v-card-actions>
      </template>
        

         <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Surat Pernyataan
        </v-card-title>

        <v-card-text>
          HI
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
          </v-card>
        </v-col>
       </v-row>

    <v-row class="text-center">      
      <v-col class="mb-4">
<v-container fluid fill-height class="loginOverlay">
          <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6>
              <v-card>
                <v-card-text class="pt-4">
                  <div>
                      <v-form v-model="valid" ref="form">
                        <v-text-field
                          label="Enter your e-mail address"
                          prepend-inner-icon="mdi-account"
                          v-model="email"
                          :rules="[rules.required, rules.emailMatch]"

                          required
                        ></v-text-field>
                        <v-text-field
                          label="Enter your password"
                          prepend-inner-icon="mdi-lock"
                          v-model="password"
                          min="8"
                          :append-icon="e1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :append-icon-cb="() => (e1 = !e1)"
                          :type="e1 ? 'text' : 'password'"
                          :rules="[rules.required, rules.min]"
                          @click:append="e1 = !e1"
                          hint="At least 8 characters"
                          counter
                          required
                        ></v-text-field>
                        <v-layout justify-space-between>
                            <v-btn @click="submit" :class=" { 'blue darken-4 white--text' : valid, disabled: !valid }">Login</v-btn>
                            <a href="">Forgot Password</a>
                        </v-layout>
                      </v-form>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
       </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
     options: {
      isLoggingIn: true,
      shouldStayLoggedIn: true,
       },
    show1: true,
    dialog:'',
              
    rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(email))
      return;
      else
      return 'Invalid Email';
    },
        },
    }),  
  }
</script>
