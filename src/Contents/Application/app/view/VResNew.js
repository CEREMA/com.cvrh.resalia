App.view.define('VResNew', {
    extend: "Ext.window.Window",
    alias: 'widget.VResNew',
    initComponent: function() {
        this.width = 500;
        this.height = 400;
		
		this.title="Ressource";
		
        this.layout = {
            type: 'vbox'
        };

        this.bbar = [
		'->',
		{
			text: "Enregistrer",
            itemId: "record"
		}
        ];
		
		this.bodyStyle = "background-color: #FFFFFF";
		
        this.defaults = {
            split: true
        };

        this.items = [
		{
			layout: "hbox",
			border: false,
            itemId: "resa_site",
			padding: 10,
			width: "100%",
			items: [
			{
				xtype: "combo",
				itemId: "site",
				fieldLabel: "Site",
				labelAlign: "top",
				displayField: "nomsalle",				
				editable: false,
				valueField: "id_site",
                disabled: false,
				store: App.store.create('resalia://site',{autoLoad: true})
			},
			{
				xtype: "combo",
				itemId: "salle",
				fieldLabel: "Salle",
				bindTo: "id_salle",
				labelAlign: "top",
				margin: {
					left: 5
				},
				displayField: "nomSalle",
				editable: false,
				valueField: "id_salle",
				flex: 1,
				store: App.store.create('App.reservation.getFree')
			}
			]
		},
		{
			layout: "hbox",
			border: false,
			padding: 10,
			width: "100%",
			items: [
			{
				xtype: "datefield",
				itemId: "d0",
				bindTo: "d0",
				fieldLabel: "Début",
				labelAlign: "top",
				editable: false,
				valueField: "id_site",
				flex: 1
			},
			{
				xtype:"combo",
				itemId: "p0",
				bindTo: "p0",
				editable: false,
				fieldLabel: "Période",
				labelAlign: "top",
				margin: {
					left: 5
				},
				width: 60,
				displayField: "value",
				valueField: "id",
				store: App.store.create({
					fields: ["id","value"],
					data: [{id:"J",value:"J"},{id:"M",value:"M"},{id:"A",value:"A"}]
				}),
				
			},
			{
				xtype: "datefield",
				itemId: "d1",
				bindTo: "d1",
				margin: {
					left: 5
				},
				fieldLabel: "Fin",
				labelAlign: "top",
				editable: false,
				valueField: "id_salle",
				flex: 1
			},
			{
				xtype:"combo",
				itemId: "p1",
				bindTo: "p1",
				editable: false,
				fieldLabel: "Période",
				labelAlign: "top",
				margin: {
					left: 5
				},
				width: 60,
				displayField: "value",
				valueField: "id",
				store: App.store.create({
					fields: ["id","value"],
					data: [{id:"J",value:"J"},{id:"M",value:"M"},{id:"A",value:"A"}]
				}),
				
			}
			]			
		},
		{
			xtype: "boxselect",
			itemId: "cboChoix",
			padding: 10,
			width: "100%",
			fieldLabel: "Choix",
			bindTo: "choix",
			labelAlign: "top",
			editable: false,
			displayField: "nomChoix",
			valueField: "id_choix",
			store: App.store.create('resalia://choix',{autoLoad: true})
		},
		{
			xtype: "textarea",
            itemId: "comment",
			flex: 1,
			bindTo: "comment",
			fieldLabel: "Commentaires",
			labelAlign: "top",
			width: "100%",
			padding: 10
		},
		{
			layout: "hbox",
			width: "100%",
			padding: 10,
			border: false,
			items: [
			{
				xtype: "checkboxfield",
				boxLabel: 'Préparation',
				allowBlank: true,
                hidden: true,
				bindTo: "preparation",
				flex: 1,
				itemId: "check_preparation"
            },
			{
				xtype: "checkboxfield",
				boxLabel: 'Valider',
				bindTo: "valider",
				allowBlank: true,
				flex: 1,
				itemId: "check_valider"
            },
			{
				xtype: "checkboxfield",
				boxLabel: 'Afficher',
				bindTo: "afficher",
				allowBlank: true,
				flex: 1,
				itemId: "check_afficher"
            }
			]
		}
		];

        this.callParent();
    }
});