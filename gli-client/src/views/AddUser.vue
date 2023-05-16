<script>
import { mapWritableState, mapActions } from 'pinia';
import { useCounterStore } from "../stores/counter"


    export default {
        data(){
            return {
                add_name: "",
                add_email: "",
                add_alamat: "",
                add_tanggal_lahir: "",
                add_jenis_kelamin: "",
                add_roleId: "",
            }
        },
        // components: {
        //     LoginForm
        // },
        methods: {
            ...mapActions(useCounterStore, ["registerHandler"]),
            registerHandlerComponent(){
                this.registerHandler({
                    name: this.add_name,
                    email: this.add_email,
                    alamat: this.add_alamat,
                    tanggal_lahir: this.add_tanggal_lahir,
                    jenis_kelamin: this.add_jenis_kelamin,
                    roleId: parseInt(this.add_roleId)
                });
            }
        }
    }
</script>

<template>

    <section class="container border mt-5 p-3" style="width: 400px">
        <h1 class="p-2 bg-secondary text-white text-center" style="border-radius:10px">Register Form</h1>
        <form id="login-form" @submit.prevent="registerHandlerComponent" >
            <div class="mb-3">
            <label for="exampleUsername" class="form-label">Nama</label>
            <input type="text" class="form-control" id="exampleUsername" aria-describedby="emailHelp" placeholder="ex: johndoe" v-model="add_name">
            </div>
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="someone@mail.com" v-model="add_email">
            </div>
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Alamat</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="alamat" v-model="add_alamat">
            </div>
            <div class="mb-3">
            <label for="examplePhone" class="form-label">Tanggal Lahir</label>
            <input type="date" class="form-control" id="examplePhone" aria-describedby="emailHelp" placeholder="0813xxxx" v-model="add_tanggal_lahir">
            </div>
            <div class="mb-3">
            <label for="exampleAddress" class="form-label">Jenis Kelamin</label>
            <!-- <input type="select" class="form-control" id="exampleAddress" aria-describedby="emailHelp" placeholder="jl. perintis kemerdekaan .... " v-model="add_jenis_kelamin"> -->
            <select v-model="add_jenis_kelamin">
                <option selected disabled>-</option>
                <option>L</option>
                <option>P</option>
            </select>
            </div>
            <div class="mb-3">
            <label for="exampleAddress" class="form-label">Role</label>
            <!-- <input type="select" class="form-control" id="exampleAddress" aria-describedby="emailHelp" placeholder="jl. perintis kemerdekaan .... " v-model="add_jenis_kelamin"> -->
            <select v-model="add_roleId">
                <option selected disabled>-</option>
                <option value="1">Admin</option>
                <option value="2">QA</option>
                <option value="3">Developer</option>
            </select>
            </div>
            <button type="submit" class="bg-blue-400">Submit</button>
        </form>
        
    </section>  
  
</template>