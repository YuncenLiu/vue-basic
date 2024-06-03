const express = require('express');
const app = express();
const PORT = 5003;

const path1 = '/node'
const path2 = '/link'

// 记录访问路径的中间件
app.use((req, res, next) => {
    console.log(`请求的资源是: ${req.url}`);
    console.log('请求来自于',req.get('Host'));
    next();
});

// 定义路由
app.get(path1, (req, res) => {
    // 返回 JSON 对象
    res.json([
        {
            id: "0",
            offset_x: 0,    //根节点位置偏移量
            text: "XXXXXX北京武汉长沙上海股份有限公司",  //节点文本
            width: 200,     //根节点宽度
            height: 40,
            color: "#0084ff",   //根节点背景色
            fontColor: "#ffffff",   //根节点字体颜色
            childrenLoaded: true,   //配置标识，点击展开节点按钮时判断，不需要重复请求接口（懒加载数据）
        },
        { id: "102", text: "102北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "103", text: "103北京武汉长沙上海股份有限公司",fontColor: "black" },

        { id: "110", text: "110北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "111", text: "111北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "112", text: "112北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "113", text: "113北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "114", text: "114北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "115", text: "115北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "116", text: "116北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "117", text: "117北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "118", text: "118北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "119", text: "119北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "120", text: "120北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "121", text: "121北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "122", text: "122北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "123", text: "123北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "124", text: "124北京武汉长沙上海股份有限公司",fontColor: "black"},
        { id: "125", text: "125北京武汉长沙上海股份有限公司",fontColor: "black"},
        { id: "126", text: "126北京武汉长沙上海股份有限公司",fontColor: "black"},
        { id: "127", text: "127北京武汉长沙上海股份有限公司",fontColor: "black"},
        { id: "128", text: "128北京武汉长沙上海股份有限公司",fontColor: "black"},
        { id: "129", text: "129北京武汉长沙上海股份有限公司",fontColor: "black"},
        { id: "130", text: "130北京武汉长沙上海股份有限公司",fontColor: "black"},
        { id: "131", text: "131北京武汉长沙上海股份有限公司",fontColor: "black"},
        { id: "132", text: "132北京武汉长沙上海股份有限公司",fontColor: "black"},


        { id: "140", text: "北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "141", text: "北京武汉长沙上海股份有限公司",fontColor: "black" },


        { id: "142", text: "北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "143", text: "北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "144", text: "北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "145", text: "北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "146", text: "北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "147", text: "北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "148", text: "北京武汉长沙上海股份有限公司",fontColor: "black" },

        { id: "150", text: "150北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "151", text: "151北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "152", text: "152北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "153", text: "153北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "154", text: "154北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "155", text: "155北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "156", text: "156北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "157", text: "157北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "158", text: "158北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "159", text: "159北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "160", text: "160北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "161", text: "161北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "162", text: "162北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "163", text: "163北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "164", text: "164北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "165", text: "165北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "166", text: "166北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "167", text: "167北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "168", text: "168北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "169", text: "169北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "170", text: "170北京武汉长沙上海股份有限公司",fontColor: "black" },

        { id: "180", text: "180北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "181", text: "181北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "182", text: "182北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "183", text: "183北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "184", text: "184北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "185", text: "185北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "186", text: "186北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "187", text: "187北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "188", text: "188北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "189", text: "189北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "190", text: "190北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "191", text: "191北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "192", text: "192北京武汉长沙上海股份有限公司",fontColor: "black" },

        { id: "193", text: "193北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "194", text: "194北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "195", text: "195北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "196", text: "196北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "197", text: "197北京武汉长沙上海股份有限公司",fontColor: "black" },

        { id: "198", text: "198北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "199", text: "199北京武汉长沙上海股份有限公司",fontColor: "black" },


        { id: "210", text: "210北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "211", text: "211北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "212", text: "212北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "213", text: "213北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "214", text: "214北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "215", text: "215北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "216", text: "216北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "217", text: "217北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "218", text: "218北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "219", text: "219北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "220", text: "220北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "221", text: "221北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "222", text: "222北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "223", text: "223北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "224", text: "224北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "225", text: "225北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "226", text: "226北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "227", text: "227北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "228", text: "228北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "229", text: "229北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "230", text: "230北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "231", text: "231北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "232", text: "232北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "233", text: "233北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "234", text: "234北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "235", text: "235北京武汉长沙上海股份有限公司",fontColor: "black" },


        { id: "236", text: "235北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "237", text: "235北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "238", text: "235北京武汉长沙上海股份有限公司",fontColor: "black" },
        { id: "239", text: "235北京武汉长沙上海股份有限公司",fontColor: "black" },
    ]);
    // 控制台打印一句话
});


app.get(path2, (req, res) => {
    // 返回 JSON 对象
    res.json([
        //根节点上方侧的关系数据，注意关系的方向，是从 节点--->根节点：
        { from: "0", to: "102", text: "100%" },
        { from: "0", to: "103", text: "100%" },
        { from: "102", to: "110", text: "100%" },
        { from: "102", to: "111", text: "100%" },
        { from: "102", to: "112", text: "100%" },
        { from: "102", to: "113", text: "100%" },
        { from: "102", to: "114", text: "100%" },
        { from: "102", to: "115", text: "100%" },
        { from: "102", to: "116", text: "100%" },
        { from: "102", to: "117", text: "100%" },
        { from: "102", to: "118", text: "100%" },
        { from: "102", to: "119", text: "100%" },
        { from: "102", to: "120", text: "100%" },
        { from: "102", to: "121", text: "100%" },
        { from: "102", to: "122", text: "100%" },
        { from: "102", to: "123", text: "100%" },
        { from: "102", to: "124", text: "100%" },
        { from: "102", to: "125", text: "100%" },
        { from: "102", to: "126", text: "100%" },
        { from: "102", to: "127", text: "100%" },
        { from: "102", to: "128", text: "100%" },
        { from: "102", to: "129", text: "100%" },
        { from: "102", to: "130", text: "100%" },
        { from: "102", to: "131", text: "100%" },
        { from: "102", to: "132", text: "100%" },

        { from: "111", to: "140", text: "100%" },
        { from: "140", to: "141", text: "100%" },

        { from: "112", to: "150", text: "100%" },
        { from: "112", to: "151", text: "100%" },
        { from: "112", to: "152", text: "100%" },
        { from: "112", to: "153", text: "100%" },
        { from: "112", to: "154", text: "100%" },
        { from: "112", to: "155", text: "100%" },
        { from: "112", to: "156", text: "100%" },
        { from: "112", to: "157", text: "100%" },
        { from: "112", to: "158", text: "100%" },
        { from: "112", to: "159", text: "100%" },
        { from: "112", to: "160", text: "100%" },
        { from: "112", to: "161", text: "100%" },
        { from: "112", to: "162", text: "100%" },
        { from: "112", to: "163", text: "100%" },
        { from: "112", to: "164", text: "100%" },
        { from: "112", to: "165", text: "100%" },
        { from: "112", to: "166", text: "100%" },
        { from: "112", to: "167", text: "100%" },
        { from: "112", to: "168", text: "100%" },
        { from: "112", to: "169", text: "100%" },
        { from: "112", to: "170", text: "100%" },


        { from: "152", to: "142", text: "100%" },
        { from: "152", to: "143", text: "100%" },
        { from: "152", to: "144", text: "100%" },

        { from: "142", to: "145", text: "100%" },
        { from: "145", to: "146", text: "100%" },
        { from: "146", to: "147", text: "100%" },

        { from: "153", to: "180", text: "100%" },
        { from: "153", to: "181", text: "100%" },
        { from: "153", to: "182", text: "100%" },
        { from: "153", to: "183", text: "100%" },
        { from: "153", to: "184", text: "100%" },
        { from: "153", to: "185", text: "100%" },
        { from: "153", to: "186", text: "100%" },
        { from: "153", to: "187", text: "100%" },
        { from: "153", to: "188", text: "100%" },
        { from: "153", to: "189", text: "100%" },
        { from: "153", to: "190", text: "100%" },
        { from: "153", to: "191", text: "100%" },
        { from: "153", to: "192", text: "100%" },

        { from: "180", to: "193", text: "100%" },
        { from: "180", to: "194", text: "100%" },
        { from: "180", to: "195", text: "100%" },
        { from: "180", to: "196", text: "100%" },
        { from: "180", to: "197", text: "100%" },

        { from: "184", to: "198", text: "100%" },

        { from: "189", to: "199", text: "100%" },
        { from: "189", to: "148", text: "100%" },


        { from: "128", to: "210", text: "100%" },
        { from: "128", to: "211", text: "100%" },
        { from: "128", to: "212", text: "100%" },
        { from: "128", to: "213", text: "100%" },
        { from: "128", to: "214", text: "100%" },
        { from: "128", to: "215", text: "100%" },
        { from: "128", to: "216", text: "100%" },
        { from: "128", to: "217", text: "100%" },
        { from: "128", to: "218", text: "100%" },
        { from: "128", to: "219", text: "100%" },
        { from: "128", to: "220", text: "100%" },
        { from: "128", to: "221", text: "100%" },
        { from: "128", to: "222", text: "100%" },
        { from: "128", to: "223", text: "100%" },
        { from: "128", to: "224", text: "100%" },
        { from: "128", to: "225", text: "100%" },
        { from: "128", to: "226", text: "100%" },
        { from: "128", to: "227", text: "100%" },
        { from: "128", to: "228", text: "100%" },
        { from: "128", to: "229", text: "100%" },
        { from: "128", to: "230", text: "100%" },
        { from: "128", to: "231", text: "100%" },
        { from: "128", to: "232", text: "100%" },
        { from: "128", to: "233", text: "100%" },
        { from: "128", to: "234", text: "100%" },
        { from: "128", to: "235", text: "100%" },


        { from: "231", to: "236", text: "100%" },
        { from: "231", to: "237", text: "100%" },
        { from: "231", to: "238", text: "100%" },
        { from: "230", to: "239", text: "100%" },
    ]);
    // 控制台打印一句话
});

// 监听端口
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} and url is http://localhost:${PORT}${path1}`);
    console.log(`Server is running on port ${PORT} and url is http://localhost:${PORT}${path2}`);
});
