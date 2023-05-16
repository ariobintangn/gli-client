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
        ...mapActions(useCounterStore, ["fetchUser"])
    },
    computed: {
        ...mapWritableState(useCounterStore, ["users"])
    },
    created(){
        this.fetchUser()
    }
}
</script>


<template>
    <!-- <Header class=" h-1/6" /> -->
    <div class=" h-5/6 bg-slate-600">

        <div class=" p-8 flex-col justify-around">
            <div class="bg-slate-400">
                <h1 class=" font-mono text-5xl">testing 1</h1>
            </div>
            <div class="bg-slate-400">
                <h1 class=" font-mono text-5xl">testing 2</h1>
            </div>
        </div>
        <table>
            <thead class="text-center text-xl">
                <td>Nama</td>
                <td>Jenis Kelamin</td>
                <td>Tanggal Lahir</td>
                <td>Alamat</td>
                <td>Email</td>
                <td>Role</td>
                <td>Actions</td>
            </thead>
            <tbody>
                <TableRow v-for="user in users" :key="user.id" :user="user"/>
            </tbody>
        </table>
    </div>
</template>

<style></style>