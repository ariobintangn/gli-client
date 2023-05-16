<script>
export default {
    props: ["user", "index"]

}
</script>

<template>
    <tr class="text-left bg-slate-200 border border-black">
        <td class="border border-black w-1/12">
            {{ index+1 }}
        </td>
        <td class="border border-black">
            {{ user.name }}
        </td>
        <td class="text-center border border-black">
            {{ user.jenis_kelamin }}
        </td>
        <td class="text-center border border-black">
            {{ (user.tanggal_lahir).substr(0, 10) }}
        </td>
        <td class="border border-black">
            {{ user.alamat }}
        </td>
        <td class="border border-black">
            {{ user.email }}
        </td>
        <td class="border border-black">
            {{ user.master_user_role.role_name }}
        </td>
        <td class="border border-black">
            <div class=" flex justify-evenly">
                <button class="w-1/2 bg-green-400 rounded-md">edit</button>
                <button class="w-1/2 overflow-hidden bg-red-800 rounded-md">delete</button>
            </div>
        </td>
    </tr>
</template>