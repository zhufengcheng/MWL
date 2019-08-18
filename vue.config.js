module.exports = {
    devServer: {
        // proxy: {//如需跨域请求多个域名，在此对象进行扩展即可
        //     '/api': {
        //         target: 'http://localhost:9303/', // 接口域名
        //         changeOrigin: true,  //是否跨域
        //         pathRewrite: {
        //             /* '^/api': '' */
        //             '^/api': '/uaa' //需要rewrite的,
        //         }
        //     }
        //
        // },
        before(app) {
            app.get('/api/goods', function (req, res) {
                res.json({
                    code: 0,
                    list: [{
                        id: 1, text: 'js', price: 100
                    },
                        {
                            id: 2, text: 'jquery', price: 200
                        }]
                })
            });
            app.get('/Product/QueryProductPackingMaterialGroupWithDataAuthority', function (req, res) {
                res.json({
                    list: [{
                        "label": "GBU",
                        "value": "2026",
                        "children": [{"label": "Concor2.5_分包", "value": "1075", "packing": "盒"}, {
                            "label": "Concor2.5_进口",
                            "value": "1076",
                            "packing": "盒"
                        }, {"label": "Concor5_分包", "value": "1077", "packing": "盒"}, {
                            "label": "Concor5_进口",
                            "value": "1078",
                            "packing": "盒"
                        }, {"label": "Sigmart100s_进口", "value": "1090", "packing": "盒"}, {
                            "label": "Sigmart30s_进口",
                            "value": "1091",
                            "packing": "盒"
                        }, {"label": "Doxium20OTC _进口", "value": "1125", "packing": "盒"}, {
                            "label": "Doxium20RX_进口",
                            "value": "1083",
                            "packing": "盒"
                        }, {"label": "Doxium60RX_进口", "value": "1084", "packing": "盒"}, {
                            "label": "GCG500_BMS压片",
                            "value": "1085",
                            "packing": "盒"
                        }, {"label": "GCG850_BMS压片", "value": "1095", "packing": "盒"}, {
                            "label": "GXR500_分包",
                            "value": "1102",
                            "packing": "盒"
                        }, {"label": "GXR500_进口", "value": "1101", "packing": "盒"}, {
                            "label": "Invokana 100_进口",
                            "value": "1124",
                            "packing": "盒"
                        }, {"label": "Invokana 300_进口", "value": "1123", "packing": "盒"}, {
                            "label": "SST_进口",
                            "value": "1098",
                            "packing": "盒"
                        }, {"label": "E100_分包", "value": "1072", "packing": "盒"}, {
                            "label": "E100_进口",
                            "value": "1073",
                            "packing": "盒"
                        }, {"label": "E50_分包", "value": "1086", "packing": "盒"}, {
                            "label": "E50_进口",
                            "value": "1087",
                            "packing": "盒"
                        }, {"label": "T10_分包", "value": "1088", "packing": "盒"}, {
                            "label": "T10_进口",
                            "value": "1089",
                            "packing": "盒"
                        }]
                    }, {
                        "label": "FBU",
                        "value": "2027",
                        "children": [{"label": "Crinone_进口", "value": "1082", "packing": "盒"}, {
                            "label": "CTT_进口",
                            "value": "1081",
                            "packing": "盒"
                        }, {"label": "GF300_进口", "value": "1079", "packing": "盒"}, {
                            "label": "GF450_进口",
                            "value": "1080",
                            "packing": "盒"
                        }, {"label": "GF75_进口", "value": "1096", "packing": "盒"}, {
                            "label": "Lu_进口",
                            "value": "1099",
                            "packing": "盒"
                        }, {"label": "OVD-L_进口", "value": "1097", "packing": "盒"}]
                    }, {
                        "label": "OBU",
                        "value": "2028",
                        "children": [{"label": "Erbitux5_进口", "value": "1074", "packing": "盒"}]
                    }, {
                        "label": "Allergy",
                        "value": "2029",
                        "children": [{"label": "NHD-I3_进口", "value": "1093", "packing": "盒"}, {
                            "label": "NHD-M1_进口",
                            "value": "1094",
                            "packing": "盒"
                        }, {"label": "TRUE Test_进口", "value": "1138", "packing": "10包/盒"}]
                    }, {
                        "label": "other",
                        "value": "2030",
                        "children": [{"label": "SZ4_进口", "value": "1136", "packing": "盒"}]
                    }]
                })
            });
            app.get('/Product/QueryProductLineAndProduct', function (req, res) {
                res.json({
                    list: [{
                        "label": "CV",
                        "value": "2014",
                        "indeterminate": false,
                        "selectedAll": false,
                        "selectedChildren": null,
                        "children": [{
                            "label": "Concor2.5",
                            "value": "3068",
                            "extension": "1"
                        }, {
                            "label": "Concor5",
                            "value": "3078",
                            "extension": "1"
                        }, {
                            "label": "Sigmart100s",
                            "value": "3091",
                            "extension": "1"
                        }, {
                            "label": "Sigmart30s",
                            "value": "3092",
                            "extension": "1"
                        }]
                    }, {
                        "label": "DIA",
                        "value": "2016",
                        "indeterminate": false,
                        "selectedAll": false,
                        "selectedChildren": null,
                        "children": [{
                            "label": "Doxium20OTC",
                            "value": "3116",
                            "extension": "1"
                        }, {
                            "label": "Doxium20RX",
                            "value": "3076",
                            "extension": "1"
                        }, {
                            "label": "Doxium60RX",
                            "value": "3077",
                            "extension": "1"
                        }, {
                            "label": "GCG500",
                            "value": "3073",
                            "extension": "1"
                        }, {
                            "label": "GCG850",
                            "value": "3080",
                            "extension": "1"
                        }, {
                            "label": "GXR500",
                            "value": "3083",
                            "extension": "1"
                        }, {
                            "label": "Invokana100",
                            "value": "3122",
                            "extension": "1"
                        }, {
                            "label": "Invokana300",
                            "value": "3121",
                            "extension": "1"
                        }]
                    }, {
                        "label": "Erbitux",
                        "value": "2018",
                        "indeterminate": false,
                        "selectedAll": false,
                        "selectedChildren": null,
                        "children": [{
                            "label": "Erbitux5",
                            "value": "3072",
                            "extension": "1"
                        }]
                    }, {
                        "label": "Fertility",
                        "value": "2021",
                        "indeterminate": false,
                        "selectedAll": false,
                        "selectedChildren": null,
                        "children": [ {
                            "label": "Crinone",
                            "value": "3069",
                            "extension": "1"
                        }, {
                            "label": "CTT",
                            "value": "3070",
                            "extension": "1"
                        }, {
                            "label": "GF300",
                            "value": "3074",
                            "extension": "1"
                        }, {
                            "label": "GF450",
                            "value": "3075",
                            "extension": "1"
                        }, {
                            "label": "GF75",
                            "value": "3081",
                            "extension": "1"
                        }, {
                            "label": "Lu",
                            "value": "3085",
                            "extension": "1"
                        }, {
                            "label": "OVD-L",
                            "value": "3089",
                            "extension": "1"
                        }]
                    }, {
                        "label": "Kuvan",
                        "value": "2022",
                        "indeterminate": false,
                        "selectedAll": false,
                        "selectedChildren": null,
                        "children": []
                    }, {
                        "label": "NHD",
                        "value": "2019",
                        "indeterminate": false,
                        "selectedAll": false,
                        "selectedChildren": null,
                        "children": [ {
                            "label": "NHD-I3",
                            "value": "3086",
                            "extension": "1"
                        }, {
                            "label": "NHD-M1",
                            "value": "3088",
                            "extension": "1"
                        }, {
                            "label": "TRUE Test",
                            "value": "3128",
                            "extension": "1"
                        }]
                    }, {
                        "label": "Rebif",
                        "value": "2023",
                        "indeterminate": false,
                        "selectedAll": false,
                        "selectedChildren": null,
                        "children": [{
                            "label": "zz-test",
                            "value": "3132",
                            "extension": "1"
                        }]
                    }, {
                        "label": "TD",
                        "value": "2017",
                        "indeterminate": false,
                        "selectedAll": false,
                        "selectedChildren": null,
                        "children": [{
                            "label": "E100",
                            "value": "3071",
                            "extension": "1"
                        }, {
                            "label": "E50",
                            "value": "3079",
                            "extension": "1"
                        }, {
                            "label": "T10",
                            "value": "3095",
                            "extension": "1"
                        }]
                    }]
                })
            });
        }
    },
    configureWebpack: config => {
        require('vux-loader').merge(config, {
            options: {},
            plugins: ['vux-ui']
        })
    }
}
