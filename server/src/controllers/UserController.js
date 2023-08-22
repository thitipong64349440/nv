module.exports = {
    // get all user
    index(req, res) {
        res.send('เรียกข้อมูลผใู้ชง้านทั้งหมด')
    },
    // create user
    create(req, res) {
        res.send('ทําการสร้างผู้ใช้งาน: ' + JSON.stringify(req.body))
    },
    // edit user, suspend, active
    put(req, res) {
        res.send('ทำการแก้ไขผู้ใช้งาน: ' + req.params.userId + ' : ' +
            JSON.stringify(req.body))
    },
    // delete user
    remove(req, res) {
        res.send('ทําการลบผู้ใช้งาน: ' + req.params.userId + ' : ' +
            JSON.stringify(req.body))
    },
    // get user by id
    show(req, res) {
        res.send('ดูข้อมูลผู้ใช้งาน: ' + req.params.userId)
    }
}