/**
 * Created by xeonwell on 2017-03-27.
 *
 * 针对项目的单独的配置，每个项目需要处理这个文件
 */

const proxyOption = {
  target:       process.env.PROXY_TARGET || 'http://localhost:8545',
  changeOrigin: true
};

module.exports = {
  env:        {
    // IP地址。使用 'localhost' 可以阻止外部访问
    // 不设置将直接读取系统IP， 装有虚拟网卡的， 可能会取到其他人无法访问的地址
    ip:         process.env.IP || '',
    // 端口号
    port:       process.env.PORT || 3000,
    // 代理转发配置
    proxyTable: {
      '/api':                 Object.assign({pathRewrite: {'^/api': ''}}, proxyOption),
      // '/Index':               Object.assign({}, proxyOption),
      '/Content/':            Object.assign({}, proxyOption),
      '/UeditorHandler.ashx': Object.assign({}, proxyOption),
    }
  }
};
