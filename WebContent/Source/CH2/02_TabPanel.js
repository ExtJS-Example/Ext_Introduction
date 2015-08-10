Ext.onReady(function() {
	var tab = new Ext.TabPanel({
		renderTo: Ext.getBody(),
		width: 400,
		height: 300,
		activeTab: 0,
		items:[{
			title: 'Tab1',
			height: 30,
			html: '面板1'
		}, {
			title: 'Tab2',
			height: 30,
			html: '面板2'
		}, {
			title: 'Tab3',
			height: 30,
			html: '面板3'
		}]
	});
});