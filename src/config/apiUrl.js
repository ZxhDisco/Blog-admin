let ipUrl = 'http://127.0.0.1:7001/admin/'   //127部分可以改成以后上线的域名

let servicePath = {
    checkLogin: ipUrl + 'checkLogin' ,    // 检查用户名和密码
    getTypeInfo: ipUrl + 'getTypeInfo' ,  // 获得文章类别信息
    addArticle: ipUrl + 'addArticle' ,    // 添加文章
    updateArticle: ipUrl + 'updateArticle' ,    //修改文章
    getArticleList: ipUrl + 'getArticleList' ,    //获取文章列表
    delArticle: ipUrl + 'delArticle/' ,    //删除文章
    getArticleById: ipUrl + 'getArticleById/' ,    //根据Id获得文章
}
export default servicePath;