import Mock from 'mockjs'

const Random = Mock.Random
const getList = function () {
  let list = []

  for (let i = 0; i < 10; i++) {
    
    let newList = {
      id: Random.csentence(5, 30),
      title: Random.csentence(5, 30),
      photo: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F08%2F20161108132107_UuMiv.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616076879&t=55e3ae5f42adff1d4827d1edaf304e36',
      name: Random.cname(),
      address: Random.cname(),
      date: `${Random.date()}${Random.time()}`,
      a: Random.cname(),
      b: Random.cname(),
      c: Random.cname(),
      d: Random.cname()
    }
    
    list.push(newList)
  }
  
  return {
    list
  }
}

// url为要拦截的请求地址
Mock.mock('/api/list', 'get', getList)