var posts=["2025/11/23/First post/","2025/11/23/UKY周报四/","2025/11/23/UKY周报二/","2025/11/23/UKY周报一/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };