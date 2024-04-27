auto.waitFor();
// 启动函数
function startStudy() {
    app.launchApp("学习强国");
    sleep(6000);
}

// 读文章函数
function readArticle() {
    // 循环12次
    for (var i = 0; i < 12; i++) {
        // 点击文章
        click(175, 235);
        sleep(random(2000, 3000));
        // 点击阅读
        click(350, 560);
        sleep(random(2000, 3000));
        // 点击播报当前文章
        click(580, 140);
        // 等待60~90秒
        sleep(random(60000, 90000));
        sleep(random(2000, 3000));
        // 返回
        back();
        sleep(2000);
        // 下滑
        swipe(360, 1000, 500, 360, 2000);
        sleep(random(2000, 3000));
    }
}

// 看电视函数
function watchTV() {
    // 循环12次
    for (var i = 0; i < 12; i++) {
        // 点击电视台
        click(500, 1550);
        sleep(random(2000, 3000));
        // 点击播放
        click(350, 560);
        // 等待60~90秒
        sleep(random(60000, 90000));
        // 点个赞
        click(650, 890);
        sleep(random(2000, 3000));
        // 返回
        back();
        sleep(2000);
        // 下滑
        swipe(360, 1000, 500, 360, 2000);
        sleep(random(2000, 3000));
    }
}

// 统一执行函数
function executeTasks() {
    startStudy();
    sleep(random(2000, 3000));
    readArticle();
    watchTV();
    sleep(random(2000, 3000));
}
