<template>
    <div>
        <h1>Get All Users</h1>
        <p><button v-on:click="create">Create User</button></p>
        <div>จํานวนผู้ใช้งาน {{ users.length }}</div>
        <div v-for="user in users" v-bind:key="user.id">
            <div>ชื่อ: {{ user.name }}</div>
            <div>นามสกุล: {{ user.lastname }}</div>
            <div>status: {{ user.status }}</div>
            <div>type: {{ user.type }}</div>
            <div>kuy: {{ user.kuy }}</div>
            <button v-on:click="navigateTo('/user/' + user.id)">ดูข้อมูลผู้ใช้</button>
            <button v-on:click="navigateTo('/user/edit/' + user.id)">แก้ไขข้อมูล</button>
            <button v-on:click="deleteUser(user)">ลบข้อมูล</button>
            <hr>
        </div>
        <p><button v-on:click="logout">Logout</button></p>
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
    methods: {
        // ออกจากระบบ
        logout() {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({name: 'login'});
        },
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({name: 'users-create'})
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
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
        },
    },


    catch(error) {
        console.log(error)
    }
}
</script>
<style scoped></style>
   