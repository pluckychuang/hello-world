let googleMap = {
  show: function() {
    console.log('渲染谷歌地图')
  }
}

let baiduMap = {
  display: function() {
    console.log('渲染百度地图')
  }
}

let buiduMapAdapter = {
  show: function() {
    baiduMap.display()
  }
}

let render = function(map) {
  map.show()
}

render(googleMap) // 渲染谷歌地图
render(buiduMapAdapter) // 渲染百度地图