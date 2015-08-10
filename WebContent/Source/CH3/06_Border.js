Ext.onReady(function() {
	var viewport = new Ext.Viewport({
		layout: 'border',
		items: [{
			title: 'north',
			region: 'north',
			split: true,
			border: true,
			collapsible: true,
			height: 100,
			minSize: 100,
			maxSize: 120
		}, {
			title: 'south',
			region: 'south',
			split: true,
			border: true,
			collapsible: true,
			height: 100,
			minSize: 100,
			maxSize: 120
		}, {
			title: 'east',
			region: 'east',
			split: true,
			border: true,
			collapsible: true,
			width: 100,
			minSize: 100,
			maxSize: 120
		}, {
			title: 'west',
			region: 'west',
			split: true,
			border: true,
			collapsible: true,
			width: 100,
			minSize: 100,
			maxSize: 120
		}, {
			title: 'center',
			region: 'center',
			split: true,
			border: true,
			collapsible: true
		}]
	});
});