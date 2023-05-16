<script>
import Header from '../components/Header.vue';
import TableRow from '../components/TableRow.vue';
import { mapWritableState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    components: {
        Header,
        TableRow,
    },
    methods: {
        ...mapActions(useCounterStore, ["fetchUser"]),
        changePage(){
            this.$router.push("add-user")
        }
    },
    computed: {
        ...mapWritableState(useCounterStore, ["users"])
    },
    created() {
        this.fetchUser()
    }
}
</script>


<template>
    <!-- <Header class=" h-1/6" /> -->
    <div class="bg-slate-600">

        <div class=" p-8 flex-col justify-around">
            <div class="bg-slate-400">
                <h1 class=" font-mono text-5xl">Data Master User PT X</h1>
            </div>
            <div class="pt-12">
                <button class="rounded-full h-12 bg-blue-500" @click=changePage()>Tambah User</button>
            </div>
        </div>
        <div class="w-full px-24">
            <table class=" border-solid border-black border-collapse">
                <thead class=" bg-slate-400 text-center text-xl  border-solid border-black border">
                    <td class="border">No.</td>
                    <td class="border">Nama</td>
                    <td class="border">Jenis Kelamin</td>
                    <td class="border">Tanggal Lahir</td>
                    <td class="border">Alamat</td>
                    <td class="border">Email</td>
                    <td class="border">Role</td>
                    <td class="border">Actions</td>
                </thead>
                <tbody>
                    <TableRow v-for="(user, index) in users" :key=+index :user="user" :index="index" />
                </tbody>
                <!-- <div class="flex justify-end ml-16">
                </div> -->
            </table>
            
        </div>
    </div>
</template>

<style></style>