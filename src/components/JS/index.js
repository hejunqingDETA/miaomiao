import Vue from 'vue';
import MessageBox from './MessageBox';

export var messageBox = (function(){
    //默认值
    let defaults = {
        title: '',
        content : '',
        cancel: '',
        ok: '',
        handleCancel: null,
        handleOK: null
    };

    let MyComponent = Vue.extend(MessageBox);

    return function(opts){
        
        //配置参数
        for(let attr in opts){
            defaults[attr] = opts[attr] 
        }

        let vm = new MyComponent({
            el:document.createElement('div'),
            data:{
                title: defaults.title,
                content: defaults.content,
                cancel: defaults.cancel,
                ok: defaults.ok
            },
            methods: {
                handleCancel(){
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    document.body.removeChild( vm.$el );
                },
                handleOK(){
                    defaults.handleOK && defaults.handleOK.call(this);
                    document.body.removeChild( vm.$el );
                }
            }
        });

        document.body.appendChild( vm.$el );
    }
})();