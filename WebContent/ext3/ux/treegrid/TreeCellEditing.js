Ext.define("Ext.ux.TreeCellEditing", {
			extend : "Ext.grid.plugin.CellEditing",
			startEditByClick : function(c, a, h, b, g, d, f) {
				if (f.getTarget(c.expanderSelector)) {
					return
				}
				this.callParent(arguments)
			},
			startEdit : function(a, f) {
				if (!a || !f) {
					return
				}
				var d = this, b = d.getEditor(a, f), e = a.get(f.dataIndex), c = d
						.getEditingContext(a, f);
				a = c.record;
				f = c.column;
				d.completeEdit();
				if (f && !f.getEditor(a)) {
					return false
				}
				if (b) {
					c.originalValue = c.value = e;
					if (d.beforeEdit(c) === false
							|| d.fireEvent("beforeedit", c) === false || c.cancel) {
						return false
					}
					d.context = c;
					d.setActiveEditor(b);
					d.setActiveRecord(a);
					d.setActiveColumn(f);
					d.editTask.delay(15, b.startEdit, b, [d.getCell(a, f), c.value, c])
				} else {
					d.grid.getView().getEl(f).focus((Ext.isWebKit || Ext.isIE)
							? 10
							: false)
				}
			},
			getEditingContext : function(e, c) {
				var f = this, a = f.grid, i = a.store, b, d, g = a.getView(), h;
				if (Ext.isNumber(e)) {
					b = e;
					e = i.getAt(b)
				} else {
					if (i.indexOf) {
						b = i.indexOf(e)
					} else {
						b = g.indexOf(g.getNode(e))
					}
				}
				if (Ext.isNumber(c)) {
					d = c;
					c = a.headerCt.getHeaderAtIndex(d)
				} else {
					d = c.getIndex()
				}
				h = e.get(c.dataIndex);
				return {
					grid : a,
					record : e,
					field : c.dataIndex,
					value : h,
					row : g.getNode(b),
					column : c,
					rowIdx : b,
					colIdx : d
				}
			},
			startEditByPosition : function(a) {
				var e = this, c = e.grid, f = c.getSelectionModel(), b = e.view, d = this.view
						.getNode(a.row);
				editColumnHeader = c.headerCt.getHeaderAtIndex(a.column);
				editRecord = b.getRecord(d);
				if (f.selectByPosition) {
					f.selectByPosition(a)
				}
				e.startEdit(editRecord, editColumnHeader)
			}
		});