Ext.onReady(function() {
	var itemPanel = new Ext.Panel({
		title: '测试Items属性',
		renderTo: Ext.getBody(),
		width: 600,
		height: 300,
		items: [{
			xtype: 'htmleditor'
		}]
	});
});