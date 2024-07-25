import Mock from 'mockjs'

Mock.mock('/api/auth/login', 'post', () => {
    return {
        code: 0,
        data: {
            token: Mock.Random.guid(),
        }
    }
})

Mock.mock('/api/auth/userInfo', 'get', () => {
    return {
        code: 0,
        data: {
            name: Mock.Random.cname(),
            avatar: Mock.Random.image('200x200'),
        }
    }
})