let $s={}//used by seven
let $e={}//used by event
let $u={}//user
let ui={}

var time = new Date();
class seven_logger
{
    constructor()
    {
        this.logg_data(1,'seven_loger_constructor','setup')
        
    }

       
    
    logg_data(tpy ,from,phase)//tpy  seven_setup=1   event_handelled=2  user=3
    {
        let buffer={}
        buffer[phase]=phase;
        

        if(tpy == 1)
        {
            $s[`${from}${time.getTime()}`]=buffer;
        }
        else
        if(tpy == 2)
        {
            $e[`${from}${time.getTime()}`]=buffer;
        }
        else
        if(tpy == 3)
        {
            $u[`${from}${time.getTime()}`]=buffer;
        }
        
    }


    
}

$L= new seven_logger();

function $D()
{
    console.table($s)

    console.table($e)

    console.table($u)
    
} 




seven_phases.logger_setup=true
