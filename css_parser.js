prn=console.log
css_output={}

data=`  
    @keyframes monFrame {
    0%   {left:0px; top:0px;}
    25%  {left:500px; top:0px;}
    50%  {left:500px; top:500px;}
    75%  {left:0px; top:500px;}
    100% {left:0px; top:0px;}
   } 


body,nimsih{
    background:blue;
}
body,nimsih{
    

body,nimsih{
    background:blue;
}


.nimish{
    background:blue;
}
#jrer{
    background:blue;
}
p::after {
    content: " - Remember this";
  }
a:active {
    background-color: yellow;
  }

   @import "navigation.css";



   @media only screen and (max-width: 600px) {
    body {
      background-color: lightblue;
    }
  }
`
function css_parser()
{
    css_data=data
    let parser_state={
        previous:'',
        first_check:['.','#','*'],
        present_no:false,
        'd@':false,
        'l@':[],
        'class':false,
        keyframe:false,
        media:false,
        imset:false,
        eleOrAt:true,
        inner_buffer:"",
        inner:false,
        identifier:'',
        ColonToSemi:false,
        braces_array:[]

    }
    for(x of css_data)
    {
        
        
        if(   x != '\n'  &&  parser_state['d@']==true   ||    x != '\n' && x !=' ')
        {
            let check=false
            
            //key class id or ele
            if(parser_state.eleOrAt)
            {
                if (x =="@")
                {
                    parser_state['d@']=true;
                    parser_state.eleOrAt=false;
                }
                for(y of parser_state.first_check)
                {
                    if(x == y)
                    {
                        check= true;
                        parser_state['class']=true;
                        parser_state.eleOrAt=false;
                        break
                    }
                }
                if(check==false)
                {
                    parser_state['class']=true;
                    parser_state.eleOrAt=false;
                }

            }
            //present_no helps to avoid { in  buffer
            if(parser_state.keyframe)
            {
                if(x == '{')
                {
                    

                    parser_state.braces_array.push(true);
                    
                    if(parser_state.braces_array.length==1)
                    {
                    parser_state['d@']=false;
                    parser_state.inner=true;
                    parser_state.present_no=true;
                    }
                }
                else
                if(x=='}')
                {


                    if(parser_state.braces_array.length==1)
                    {
                        
                        parser_state.inner=false
                        cssoutput(parser_state.identifier,parser_state.inner_buffer)
                        parser_state.identifier=""
                        parser_state.inner_buffer=""
                    }

                    parser_state.braces_array.pop()
                }


            }
            else{

                if(x == '{')
                {
                    parser_state['d@']=false;
                    parser_state.inner=true;
                    parser_state.present_no=true;
                }
            else
            if(x=='}')
                {
                    parser_state.inner=false
                    cssoutput(parser_state.identifier,parser_state.inner_buffer)
                    parser_state.identifier=""
                    parser_state.inner_buffer=""
                }
            
            }

                
            

            //writer
                if(parser_state.inner)
                {
                    
                    if(parser_state.present_no)
                    {
                        parser_state.present_no=false
                    }
                    else
                    {
                        parser_state.inner_buffer+=x
                        

                        if(x == ":")
                        {
                            parser_state.ColonToSemi=true;
                            parser_state['d@']=true;

                        }
                        else
                        if(x== ';')
                        {
                            parser_state.ColonToSemi=false;
                            parser_state['d@']=false;

                        }


                    
                    }
                    
                }
                else
                if(parser_state['d@']&& x!='}')
                {
                    
                        parser_state.identifier+=x
                     
                    //media  keyframes  import font-face charset
                    if(parser_state.identifier =='@media')
                    {
                        parser_state.media=true;
                    }else   
                    if(parser_state.identifier =='@keyframes')
                    {
                        parser_state.keyframe=true
                        // prn('key baida')
                    }
                    else   
                    if(parser_state.identifier =='@import' && parser_state.identifier =='@charset')
                    {
                        parser_state.imset=true;
                    }

   
                }
                else
                if(parser_state['class']&& x!='}')
                {
                    parser_state.identifier+=x;
                }
        }

        // if()
        //not key or notmedia 
        // class    and  colontosemi true
        //import true
        //\n detected
        //add ; 

    }
    prn(parser_state.identifier,parser_state.inner_buffer,'\n')
}
prn('hey')
css_parser()
prn('\nend')

// prn(data.split('}'))
function cssoutput(a,b)
{

    css_output[a]=b
}
prn(css_output)