// #settings 
prn=console.log;
qs=(ev)=>{
    return document.querySelector(`${ev}`);
    };
qsA=(ev)=>{
    return document.querySelectorAll(`${ev}`);
    }




 __init__={base:'',

            js:['seven_logger.js','seven.js']
        }

ds={
    body:qs('body'),
    head:qs('head')
}


seven_phases={logger_setup:false}



buffer_logger={}

class seven_setup{
    constructor()
    {
        buffer_logger['seven_controler']=['initated']
        this.find_base()
        this.loop_js()
    }
    find_base()
    {
        __init__.base=window.location.href.substring(0,window.location.href.lastIndexOf('/'))
          
    }

    add_setup_js_file(to)
    {   
        let buff=document.createElement('script')
        buff.src=`${__init__.base}/${to}`;
        
        if(to=="seven.js")
        {
            buff.type="module"
        }

        ds.head.appendChild(buff)
        
        if(seven_phases.logger_setup)
        {
            $L.logg_data(1,'seven_loger_constructor','setup')

        }
        else
        {
            buffer_logger[`${to}`]='script_added'
        }
    }
    loop_js()
    {
        __init__.js.forEach(ev=>{
            this.add_setup_js_file(ev)
        })
    }
}
seven=new seven_setup()