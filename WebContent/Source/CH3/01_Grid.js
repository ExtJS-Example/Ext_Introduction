Ext.onReady(function() {
	// 定义列
	var cm = new Ext.grid.ColumnModel([
		{header: '编号', dataIndex: 'id'},
		{header: '名称', dataIndex: 'name'},
		{header: '描述', dataIndex: 'desc'}
	]);
	
	// 定义数据
	var data = [
		['1', 'name1', 'desc1'],
		['2', 'name2', 'desc2'],
		['3', 'name3', 'desc3'],
		['4', 'name4', 'desc4'],
		['5', 'name5', 'desc5']
	];
	
	// 定义数据源
	var ds = new Ext.data.Store({
		proxy: new Ext.data.MemoryProxy(data),
		reader: new Ext.data.ArrayReader({}, [
			{name: 'id'},
			{name: 'name'},
			{name: 'desc'}
		])
	});
	// 加载数据源
	ds.load();
	
	var grid = new Ext.grid.GridPanel({
		title: 'GridPanel',
		ds: ds,
		cm: cm,
		width: 300,
		autoHeight: true
	});
	grid.render(Ext.getBody());
});