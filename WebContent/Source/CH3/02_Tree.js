Ext.onReady(function() {
	var root = new Ext.tree.TreeNode({
		id: 'root',
		text: '树的根'
	});
	root.appendChild(new Ext.tree.TreeNode({
		id: 'c1',
		text: '子节点1'
	}));
	root.appendChild(new Ext.tree.TreeNode({
		id: 'c2',
		text: '子节点2'
	}));
	
	var tree = new Ext.tree.TreePanel({
		renderTo: Ext.getBody(),
		root: root,
		width: 100
	});
});