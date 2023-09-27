<template>
    <div>
        <h1>Get All Users</h1>
        <div>จํานวนผู้ใช้งาน {{ users.length }}</div>
        <div v-for="user in users" v-bind:key="user.id">
            <div>ชื่อ: {{ user.name }}</div>
            <div>นามสกุล: {{ user.lastname }}</div>
            <div>status: {{ user.status }}</div>
            <div>type: {{ user.type }}</div>
            <button v-on:click="navigateTo('/user/' + user.id)">ดูข้อมูลผู้ใช้</button>
            <button v-on:click="navigateTo('/user/edit/' + user.id)">แก้ไขข้อมูล</button>
            <button v-on:click="deleteUser(user)">ลบข้อมูล</button>
            <hr>
        </div>
    </div>
</template>
<script>
import UsersService from '@/services/UsersService'
export default {
    data() {
        return {
            users: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.users = (await UsersService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
// ลบข้อมูล
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteUser(user) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await UsersService.delete(user)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.users = (await UsersService.index()).data
        }
    },


    catch(error) {
        console.log(error)
    }
}
</script>
<style scoped></style>
   