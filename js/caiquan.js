$(function () {
    /**
     * 人的选择
     */
    function person() {
        var img = $(".box_left img");
        var img_person = $("#img_person");
        img.on("click", function () {
            var index = img.index(this);
            switch (index) {
                case 0:
                    setImg(img_person, 0);
                    judge(0, computer());
                    break;
                case 1:
                    setImg(img_person, 1);
                    judge(1, computer());
                    break;
                case 2:
                    setImg(img_person, 2);
                    judge(2, computer());
                    break;
            }

        })
    }

    /**
     * 电脑的选择 随机
     * @returns {number} 返回的选择
     */
    function computer() {
        var cp_num = parseInt(Math.random() * 3);
        var img_computer = $("#img_computer");
        switch (cp_num) {
            case 0:
                setImg(img_computer, 0);
                break;
            case 1:
                setImg(img_computer, 1);
                break;
            case 2:
                setImg(img_computer, 2);
                break;
        }
        return cp_num;
    }

    /**
     * 判断是否获胜
     * @param person 人的选择
     * @param computer 电脑的选择
     */
    function judge(person, computer) {
        var box1 = $(".box_right");
        var box2 = $(".box_right2");
        var box3 = $(".box_right3");
        if (person === computer) {
            showOrHide(box1, box2, box3);
        } else if (person - computer === 1 || person - computer === -2) {
            showOrHide(box1, box3, box2);
        } else {
            showOrHide(box2, box3, box1);
        }
    }

    /**
     * 设置图片
     * @param imgID 图片id
     * @param imgSrc 图片路径
     */
    function setImg(imgID, imgSrc) {
        imgID.attr("src", "img/" + imgSrc + ".png");

    }

    /**
     * 设置结果显示/隐藏
     * @param box1 隐藏
     * @param box2 隐藏
     * @param box3 显示
     */
    function showOrHide(box1, box2, box3) {
        box1.hide();
        box2.hide();
        box3.show();
    }

    person();

});