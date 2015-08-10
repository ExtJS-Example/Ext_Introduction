Ext.onReady(function() {
	var columnPanel = new Ext.Panel({
		title: 'Column布局',
		width: 500,
		height: 400,
		layout: 'column',
		items:[{
			title: '面板1',
			columnWidth: .5,
//			width: 200,		// columnWidth的优先级别比Width高
			height: 300
		}, {
			title: '面板2',
			columnWidth: .5,
			height: 300
		}]
	});
	columnPanel.render(Ext.getBody());
});