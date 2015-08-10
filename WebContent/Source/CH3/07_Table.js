Ext.onReady(function() {
	var tablePanel = new Ext.Panel({
		title: 'TablePanel',
		width: 500,
		height: 300,
		layout: 'table',
		layoutConfig: {
			columns: 3
		},
		items: [{
			title: '子元素1',
			html: '这是子元素1中的内容',
			rowspan: 2,
			height: 100
		}, {
			title: '子元素2',
			html: '这是子元素2中的内容',
			colspan: 2
		}, {
			title: '子元素3',
			html: '这是子元素3中的内容'
		}, {
			title: '子元素4',
			html: '这是子元素4中的内容'
		}]
	});
	
	tablePanel.render(Ext.getBody());
});