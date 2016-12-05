/**
 * trigger TYPES
 */
pimcore.registerNS("pimcore.plugin.cmf.rule.triggers");

pimcore.registerNS("pimcore.plugin.cmf.rule.triggers.AbstractTrigger");
pimcore.plugin.cmf.rule.triggers.AbstractTrigger = Class.create({
    name: '',
    eventName: '',
    data: {},
    options: {},

    initialize: function (data) {

        this.data = data;
        this.options = typeof data.options == 'object' ? data.options : {}
    },

    getIcon: function(){
        return 'plugin_cmf_icon_actiontriggerrule_' + this.name
    },

    getEventName: function() {
        return this.eventName;
    },

    getId: function() {
        return 'plugin_cmf_actiontriggerrule_trigger' + this.name
    },

    getNiceName: function() {
        return t(this.getId());
    },

    getFormItems: function() {
        return [];
    },

    getTopBar: function (index, parent) {
        return [
            {
                iconCls: this.getIcon(),
                disabled: true
            },
            {
                xtype: "tbtext",
                text: "<b>" + this.getNiceName() + "</b>"
            },
            "->",
            {
                iconCls: "pimcore_icon_delete",
                handler: function (index, parent) {
                    parent.triggerContainer.remove(Ext.getCmp(index));
                }.bind(window, index, parent)
            }];
    }
});

pimcore.registerNS("pimcore.plugin.cmf.rule.triggers.NewActivity");
pimcore.plugin.cmf.rule.triggers.NewActivity = Class.create(pimcore.plugin.cmf.rule.triggers.AbstractTrigger,{
    name: 'NewActivity',
    eventName: 'plugin.cmf.new-activity',
    getFormItems: function() {

        return [{
            xtype: "textfield",
            name: "type",
            fieldLabel: t("type"),
            width: 350,
            value: this.options.type
        }];
    }
});