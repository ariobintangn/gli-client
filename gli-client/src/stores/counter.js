import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "http://localhost:4002/"
export const useCounterStore = defineStore({
  id: "counter",

  state: () => ({
    users: [],
  }),
  actions: {
    async fetchUser(){
      console.log("<<MASUK FETCH USER");
      try {
        const {data} = await axios({
          method: "GET",
          url: baseUrl + "users/"
        })
        console.log(data, "<<<DATA FETCHED");

        this.users=data
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    },
    async registerHandler(value){
      try {
        console.log("<<<masuk ke registerHandler di counter.js");
        
        const {data} = await axios({
          method: "POST",
          url: baseUrl + "users",
          data: value
        })
        console.log("masuk register sini juga");
        console.log(data);

        
        this.router.push('users')

      } catch (error) {
        console.log(error);
      }
    },
  }
})
