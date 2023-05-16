<script>
export default {
    props: {
        user: Object
    },
        
}
</script>

<template>
    <tr class="text-left">
        <td>
            {{ user.name }}
        </td>
        <td  class="text-center">
            {{ user.jenis_kelamin }}
        </td>
        <td class="text-center">
            {{ (user.tanggal_lahir).substr(0,10) }}
        </td>
        <td>
            {{ user.alamat}}
        </td>
        <td>
            {{ user.email }}
        </td>
        <td>
            {{user.master_user_role.role_name }}
        </td>
        <td>
            <button class=" bg-green-400">edit</button>
            <button class=" bg-red-800">delete</button>
        </td>
    </tr>
</template>