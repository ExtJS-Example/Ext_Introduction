Ext.onReady(function() {
	Ext.QuickTips.init();

	var panel = new Ext.form.FormPanel({
		title : '表单验证',
		width : 600,
		height : 500,
		renderTo : Ext.getBody(),
		padding: '20',		// 对当前Panel下的子元素生效
		defaults : {
			xtype : 'textfield',
			allowBlank : false
		},
		items : [{
					fieldLabel : '名称',
					blankText : '名称不能为空!'
				}, {
					fieldLabel : '年龄',
					blankText : '名称不能为空!'
				}],
		buttons : [{
			text : '确认',
			handler : function(btn) {
//				if(panel.getForm().isValid()){
//					console.log('字段不为空!');
//				} else {
//					console.log('字段为空!');
//				}
				
				panel.getForm().submit({
					clientValidation : true,
					url : 'updateConsignment.php',
					success : function(form, action) {
						Ext.Msg.alert('Success', action.result.msg);
					},
					failure : function(form, action) {
						switch (action.failureType) {
							case Ext.form.Action.CLIENT_INVALID :
								Ext.Msg
										.alert('Failure',
												'Form fields may not be submitted with invalid values');
								break;
							case Ext.form.Action.CONNECT_FAILURE :
								Ext.Msg.alert('Failure',
										'Ajax communication failed');
								break;
							case Ext.form.Action.SERVER_INVALID :
								Ext.Msg.alert('Failure', action.result.msg);
						}
					}

				});
			}
		}, {
			text : '重置',
			handler : function(btn) {
				btn.ownerCt.ownerCt.reset();
			}
		}]
	});
});