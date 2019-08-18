<template>
    <div class="nav">
        <ul>
            <li>
                <a href="#bg1"></a>
                <p>人丑就要多读书</p>
            </li>
            <li>
                <a href="#bg2"></a>
                <p>人丑就要多读书</p>
            </li>
            <li>
                <a href="#bg3"></a>
                <p>人丑就要多读书</p>
            </li>
            <li>
                <a href="#bg4"></a>
                <p>人丑就要多读书</p>
            </li>
            <li>
                <a href="#bg5"></a>
                <p>人丑就要多读书</p>
            </li>
        </ul>
        <img src="../../assets/images/2.jpg" alt="#" class="bg bga2" id="bg2"/>
        <img src="../../assets/images/3.jpg" alt="#" class="bg bga3" id="bg3"/>
        <img src="../../assets/images/4.jpg" alt="#" class="bg bga4" id="bg4"/>
        <img src="../../assets/images/3.jpg" alt="#" class="bg bga3" id="bg5"/>
        <img src="../../assets/images/1.jpg" alt="#" class="bg bga1" id="bg1"/>
        <!--之所以将第一张图片放在最后面是为了让它在打开页面时第一张显示-->
    </div>
</template>
<style>
    ul {
        list-style: none
    }

    a {
        color: #000;
        text-decoration: none;
    }

    .nav {
        width: 100%;
        height: calc(100vh - 142px);
        position: relative;
    }

    /*设置背景图片全屏居中显示*/
    img.bg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .nav ul {
        position: absolute;
        top: 200px;
        left: 50%;
        width: 750px;
        margin-left: -350px;
    }

    /*预览块样式*/
    .nav ul li {
        position: relative;
        float: left;
        width: 130px;
        height: 120px;
        background-color: #00C;
        margin-right: 20px;
        z-index: 777;
    }

    .nav ul li p {
        height: 120px;
        line-height: 140px;
        color: #fff;
        font-size: 14px;
    }

    .nav ul li p:hover {
        background-color: #00C;
    }

    /*设置不同的列表色*/
    .nav ul li:nth-of-type(1) {
        background-color: #0F3;
    }

    .nav ul li:nth-of-type(2) {
        background-color: #939;
    }

    .nav ul li:nth-of-type(3) {
        background-color: #F9C;
    }

    .nav ul li:nth-of-type(4) {
        background-color: #FF0;
    }

    .nav ul li:nth-of-type(5) {
        background-color: #06F;
    }

    /*缩略图样式*/
    .nav ul li a::after {
        content: "";
        width: 100px;
        height: 100px;
        display: block;
        position: absolute;
        bottom: 80px;
        left: 15px;
        border: #FFF solid 2px;
        border-radius: 50%;
        z-index: 888;
    }

    /*缩略图图片*/
    .nav ul li:nth-of-type(1) a::after {
        background: url('../../assets/images/1.jpg') no-repeat center;
        background-size: 100%;
    }

    .nav ul li:nth-of-type(2) a::after {
        background: url('../../assets/images/2.jpg') no-repeat center;
        background-size: 100%;
    }

    .nav ul li:nth-of-type(3) a::after {
        background: url('../../assets/images/3.jpg') no-repeat center;
        background-size: 100%;
    }

    .nav ul li:nth-of-type(4) a::after {
        background: url('../../assets/images/4.jpg') no-repeat center;
        background-size: 100%;
    }

    .nav ul li:nth-of-type(5) a::after {
        background: url('../../assets/images/3.jpg') no-repeat center;
        background-size: 100%;
    }

    /*设置缩略图遮罩层*/
    .nav ul li a::before {
        content: "";
        width: 100px;
        height: 100px;
        display: block;
        position: absolute;
        background: rgba(0, 0, 0, 0.3);
        bottom: 80px;
        left: 15px;
        border: #FFF solid 2px;
        border-radius: 50%;
        z-index: 99999;
    }

    .nav ul li a:hover::before {
        background: rgba(0, 0, 0, 0);
    }

    /*背景图片切换*/
    .bga1:target {
        z-index: 100;
    }

    .bga2:target {
        z-index: 100;
    }

    .bga3:target {
        z-index: 100;
    }

    .bga4:target {
        z-index: 100;
    }

    /*设置其他图片隐藏*/
    .bg:not(:target) {
        z-index: 1;
    }
</style>
