Ext.onReady(function() {
	var header = new Ext.Panel({
		title: '面板头部Header',
		renderTo: Ext.getBody(),
		width: 400,
		height: 300,
		html: '<h1>面板主区域<h1>',
		tbar: [{		// 顶部工具栏
			text: 'top_btn_1'
		}, {
			text: 'top_btn_2'
		}],	
		bbar: [{		// 底部工具栏
			text: 'buttom_btn_1'
		}, {
			text: 'buttom_btn_2'
		}],
		buttons:[{
			text: 'Footer_btn1'
		}, {
			text: 'Footer_btn2'
		}]
	});
});