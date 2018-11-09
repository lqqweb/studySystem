   
//点击左侧哪个菜单，哪个菜单变色
$(function(){
                $(".menuLeft div").click(function(){
                    $(this).addClass('addColor').siblings().removeClass('addColor');
                })
})



var testMenu=[
    {
        "name": "华为业务",
        "submenu": [
            {
                "name": "一级菜单",
                "submenu": [
                    {
                        "name": "二级菜单",
                        "submenu": [
                            {
                                "name": "三级菜单",
                                "url": ""
                            },
                            {
                                "name": "三级菜单",
                                "url": ""
                            },
                            {
                                "name": "三级菜单",
                                "url": ""
                            },
                        ]
                    },
                ]
            },
           
            {
                "name": "一级菜单",
                "submenu": [
                    {
                        "name": "二级菜单",
                        "submenu": [
                            {
                                "name": "三级菜单",
                                "url": ""
                            },
                            {
                                "name": "三级菜单",
                                "url": ""
                               
                            }
                        ]
                    },
                ]
            },
        ]
    },

    {
        "name": "中兴业务",
        "submenu": [
            {
                "name": "一级菜单",
                "submenu": [
                    {
                        "name": "二级菜单",
                        "submenu": [
                            {
                                "name": "三级菜单",
                                "url": ""
                            },
                            {
                                "name": "三级菜单",
                                "url": ""
                            },
                            {
                                "name": "三级菜单",
                                "url": ""
                            },
                        ]
                    },
                ]
            },
           
            {
                "name": "一级菜单",
                "submenu": [
                    {
                        "name": "二级菜单",
                        "submenu": [
                            {
                                "name": "三级菜单",
                                "url": ""
                            },
                            {
                                "name": "三级菜单",
                                "url": ""
                               
                            }
                        ]
                    },
                ]
            },
        ]
    },

     {
        "name": "代维业务",
        "submenu": [
            {
                "name": "一级菜单",
                "submenu": [
                    {
                        "name": "二级菜单",
                        "submenu": [
                            {
                                "name": "三级菜单",
                                "url": ""
                            },
                            {
                                "name": "三级菜单",
                                "url": ""
                            },
                            {
                                "name": "三级菜单",
                                "url": ""
                            },
                        ]
                    },
                ]
            },
           
            {
                "name": "一级菜单",
                "submenu": [
                    {
                        "name": "二级菜单",
                        "submenu": [
                            {
                                "name": "三级菜单",
                                "url": ""
                            },
                            {
                                "name": "三级菜单",
                                "url": ""
                               
                            }
                        ]
                    },
                ]
            },
        ]
    }
    
    

];
$(function(){
        new AccordionMenu({menuArrs:testMenu});
    });