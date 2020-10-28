import add_element_in_dom  from '/components/add_element_to_dom.js';
import extra_option_controller  from './components/extr_option_controller.js';
import dom_creator  from './components/seven_dom_creator.js';
import seven_element_controll from './components/events.js';
// import seven_smart_search  from './components/seven_smart_search.js';



prn('first activated')
window.init={
    class_names:{
        src:'src',
        col:`col-resizer`
        // class loc : allotated class name
                },
    worker_js:['./seven-worker.js'],
    class_demo_json:['./class.json'],
    option_in_drop_down:
    {
        // "option_name":[ list of option]
        
        Tools:['select element','drag-select'],
        cdn:['boot strap','jquery','w3.css','swiperjs','Glider.js','AOS ','wiv.js','7custom_url']

    },
    needed:{
        cdn:{
            'boot strap':{
                        'head':`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">`,
                          'body':` <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>`},
            'w3.css':{'head':`<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`},
            'jquery':{'head':`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>`}
            },
        }
    }
        
 


window.slc=document.querySelector('.edit-room');
window.elements_dom_regestration={
    // tag_name:{necessary_attr:help text}
    h1:{},
    h2:{},
    h3:{},
    h4:{},
    h5:{},
    h6:{},
    p:{},
    hr:{},
    a:{href:"url link"},
    img:{ src:"", alt:"", sizes:"", srcset:""},
    div:{},
    span:{}
}
function style_adt(){
    
    return {
        className:{},
    colon:{},
    child:{},
    }
}

window.state={
    element:null,
    nimish:qs('.nimish'),
    ele_opt:qs('.extra-option'),
    iframe:document.querySelector('iframe'),
    get contentwindow() {
        return this.iframe.contentWindow
    },
    get contentDocument() {
        return this.iframe.contentDocument
    },
    col:document.querySelector(`.${init.class_names.col}`),
    x:0,y:0,
    move:false,
    offx:0,
    offy:0,
    range_slider:document.querySelector("#myRange"),
    range_slider_value:document.querySelector("#demo"),
    search_bar:document.querySelector('.search_bar'),
    view_div_up:document.querySelector('.iframe-width-changer'),
    view_div:document.querySelector('.iframe-width-changer-inner'),
    worker:{},
    class_style_demo:{
        "align": {
            "alignContent": "",
            "alignItems": "",
            "alignSelf": ""
        },
        "alignment": "",
        "all": "",
        "animation": {
            "animation": "",
            "animationDelay": "",
            "animationDirection": "",
            "animationDuration": "",
            "animationFillMode": "",
            "animationIterationCount": "",
            "animationName": "",
            "animationPlayState": "",
            "animationTimingFunction": ""
        },
        "appearance": "",
        "backdrop": "",
        "backface": "",
        "background": {
            "background": "",
            "backgroundAttachment": "",
            "backgroundBlendMode": "",
            "backgroundClip": "",
            "backgroundColor": "",
            "backgroundImage": "",
            "backgroundOrigin": "",
            "backgroundPosition": "",
            "backgroundPositionX": "",
            "backgroundPositionY": "",
            "backgroundRepeat": "",
            "backgroundRepeatX": "",
            "backgroundRepeatY": "",
            "backgroundSize": ""
        },
        "baseline": "",
        "block": "",
        "border": {
            "border": "",
            "borderBlockEnd": "",
            "borderBlockEndColor": "",
            "borderBlockEndStyle": "",
            "borderBlockEndWidth": "",
            "borderBlockStart": "",
            "borderBlockStartColor": "",
            "borderBlockStartStyle": "",
            "borderBlockStartWidth": "",
            "borderBottom": "",
            "borderBottomColor": "",
            "borderBottomLeftRadius": "",
            "borderBottomRightRadius": "",
            "borderBottomStyle": "",
            "borderBottomWidth": "",
            "borderCollapse": "",
            "borderColor": "",
            "borderImage": "",
            "borderImageOutset": "",
            "borderImageRepeat": "",
            "borderImageSlice": "",
            "borderImageSource": "",
            "borderImageWidth": "",
            "borderInlineEnd": "",
            "borderInlineEndColor": "",
            "borderInlineEndStyle": "",
            "borderInlineEndWidth": "",
            "borderInlineStart": "",
            "borderInlineStartColor": "",
            "borderInlineStartStyle": "",
            "borderInlineStartWidth": "",
            "borderLeft": "",
            "borderLeftColor": "",
            "borderLeftStyle": "",
            "borderLeftWidth": "",
            "borderRadius": "",
            "borderRight": "",
            "borderRightColor": "",
            "borderRightStyle": "",
            "borderRightWidth": "",
            "borderSpacing": "",
            "borderStyle": "",
            "borderTop": "",
            "borderTopColor": "",
            "borderTopLeftRadius": "",
            "borderTopRightRadius": "",
            "borderTopStyle": "",
            "borderTopWidth": "",
            "borderWidth": ""
        },
        "bottom": "",
        "box": {
            "boxShadow": "",
            "boxSizing": ""
        },
        "break": {
            "breakAfter": "",
            "breakBefore": "",
            "breakInside": ""
        },
        "buffered": "",
        "caption": "",
        "caret": "",
        "clear": "",
        "clip": {
            "clip": "",
            "clipPath": "",
            "clipRule": ""
        },
        "color": {
            "color": "",
            "colorInterpolation": "",
            "colorInterpolationFilters": "",
            "colorRendering": "",
            "colorScheme": ""
        },
        "column": {
            "columnCount": "",
            "columnFill": "",
            "columnGap": "",
            "columnRule": "",
            "columnRuleColor": "",
            "columnRuleStyle": "",
            "columnRuleWidth": "",
            "columnSpan": "",
            "columnWidth": ""
        },
        "columns": "",
        "contain": {
            "contain": "",
            "containIntrinsicSize": ""
        },
        "content": {
            "content": "",
            "contentVisibility": ""
        },
        "counter": {
            "counterIncrement": "",
            "counterReset": "",
            "counterSet": ""
        },
        "css": {
            "cssFloat": "",
            "cssText": ""
        },
        "cursor": "",
        "cx": "",
        "cy": "",
        "d": "",
        "direction": "",
        "display": "",
        "dominant": "",
        "empty": "",
        "fill": {
            "fill": "",
            "fillOpacity": "",
            "fillRule": ""
        },
        "filter": "",
        "flex": {
            "flex": "",
            "flexBasis": "",
            "flexDirection": "",
            "flexFlow": "",
            "flexGrow": "",
            "flexShrink": "",
            "flexWrap": ""
        },
        "float": "",
        "flood": {
            "floodColor": "",
            "floodOpacity": ""
        },
        "font": {
            "font": "",
            "fontDisplay": "",
            "fontFamily": "",
            "fontFeatureSettings": "",
            "fontKerning": "",
            "fontOpticalSizing": "",
            "fontSize": "",
            "fontStretch": "",
            "fontStyle": "",
            "fontVariant": "",
            "fontVariantCaps": "",
            "fontVariantEastAsian": "",
            "fontVariantLigatures": "",
            "fontVariantNumeric": "",
            "fontVariationSettings": "",
            "fontWeight": ""
        },
        "gap": "",
        "grid": {
            "grid": "",
            "gridArea": "",
            "gridAutoColumns": "",
            "gridAutoFlow": "",
            "gridAutoRows": "",
            "gridColumn": "",
            "gridColumnEnd": "",
            "gridColumnGap": "",
            "gridColumnStart": "",
            "gridGap": "",
            "gridRow": "",
            "gridRowEnd": "",
            "gridRowGap": "",
            "gridRowStart": "",
            "gridTemplate": "",
            "gridTemplateAreas": "",
            "gridTemplateColumns": "",
            "gridTemplateRows": ""
        },
        "height": "",
        "hyphens": "",
        "image": {
            "imageOrientation": "",
            "imageRendering": ""
        },
        "inherits": "",
        "initial": "",
        "inline": "",
        "isolation": "",
        "justify": {
            "justifyContent": "",
            "justifyItems": "",
            "justifySelf": ""
        },
        "left": "",
        "length": "",
        "letter": "",
        "lighting": "",
        "line": {
            "lineBreak": "",
            "lineHeight": ""
        },
        "list": {
            "listStyle": "",
            "listStyleImage": "",
            "listStylePosition": "",
            "listStyleType": ""
        },
        "margin": {
            "margin": "",
            "marginBlockEnd": "",
            "marginBlockStart": "",
            "marginBottom": "",
            "marginInlineEnd": "",
            "marginInlineStart": "",
            "marginLeft": "",
            "marginRight": "",
            "marginTop": ""
        },
        "marker": {
            "marker": "",
            "markerEnd": "",
            "markerMid": "",
            "markerStart": ""
        },
        "mask": {
            "mask": "",
            "maskType": ""
        },
        "max": {
            "maxBlockSize": "",
            "maxHeight": "",
            "maxInlineSize": "",
            "maxWidth": "",
            "maxZoom": ""
        },
        "min": {
            "minBlockSize": "",
            "minHeight": "",
            "minInlineSize": "",
            "minWidth": "",
            "minZoom": ""
        },
        "mix": "",
        "object": {
            "objectFit": "",
            "objectPosition": ""
        },
        "offset": {
            "offset": "",
            "offsetDistance": "",
            "offsetPath": "",
            "offsetRotate": ""
        },
        "opacity": "",
        "order": "",
        "orientation": "",
        "orphans": "",
        "outline": {
            "outline": "",
            "outlineColor": "",
            "outlineOffset": "",
            "outlineStyle": "",
            "outlineWidth": ""
        },
        "overflow": {
            "overflow": "",
            "overflowAnchor": "",
            "overflowWrap": "",
            "overflowX": "",
            "overflowY": ""
        },
        "overscroll": {
            "overscrollBehavior": "",
            "overscrollBehaviorBlock": "",
            "overscrollBehaviorInline": "",
            "overscrollBehaviorX": "",
            "overscrollBehaviorY": ""
        },
        "padding": {
            "padding": "",
            "paddingBlockEnd": "",
            "paddingBlockStart": "",
            "paddingBottom": "",
            "paddingInlineEnd": "",
            "paddingInlineStart": "",
            "paddingLeft": "",
            "paddingRight": "",
            "paddingTop": ""
        },
        "page": {
            "page": "",
            "pageBreakAfter": "",
            "pageBreakBefore": "",
            "pageBreakInside": "",
            "pageOrientation": ""
        },
        "paint": "",
        "parent": "",
        "perspective": {
            "perspective": "",
            "perspectiveOrigin": ""
        },
        "place": {
            "placeContent": "",
            "placeItems": "",
            "placeSelf": ""
        },
        "pointer": "",
        "position": "",
        "quotes": "",
        "r": "",
        "resize": "",
        "right": "",
        "row": "",
        "ruby": "",
        "rx": "",
        "ry": "",
        "scroll": {
            "scrollBehavior": "",
            "scrollMargin": "",
            "scrollMarginBlock": "",
            "scrollMarginBlockEnd": "",
            "scrollMarginBlockStart": "",
            "scrollMarginBottom": "",
            "scrollMarginInline": "",
            "scrollMarginInlineEnd": "",
            "scrollMarginInlineStart": "",
            "scrollMarginLeft": "",
            "scrollMarginRight": "",
            "scrollMarginTop": "",
            "scrollPadding": "",
            "scrollPaddingBlock": "",
            "scrollPaddingBlockEnd": "",
            "scrollPaddingBlockStart": "",
            "scrollPaddingBottom": "",
            "scrollPaddingInline": "",
            "scrollPaddingInlineEnd": "",
            "scrollPaddingInlineStart": "",
            "scrollPaddingLeft": "",
            "scrollPaddingRight": "",
            "scrollPaddingTop": "",
            "scrollSnapAlign": "",
            "scrollSnapStop": "",
            "scrollSnapType": ""
        },
        "shape": {
            "shapeImageThreshold": "",
            "shapeMargin": "",
            "shapeOutside": "",
            "shapeRendering": ""
        },
        "size": "",
        "speak": "",
        "src": "",
        "stop": {
            "stopColor": "",
            "stopOpacity": ""
        },
        "stroke": {
            "stroke": "",
            "strokeDasharray": "",
            "strokeDashoffset": "",
            "strokeLinecap": "",
            "strokeLinejoin": "",
            "strokeMiterlimit": "",
            "strokeOpacity": "",
            "strokeWidth": ""
        },
        "syntax": "",
        "tab": "",
        "table": "",
        "text": {
            "textAlign": "",
            "textAlignLast": "",
            "textAnchor": "",
            "textCombineUpright": "",
            "textDecoration": "",
            "textDecorationColor": "",
            "textDecorationLine": "",
            "textDecorationSkipInk": "",
            "textDecorationStyle": "",
            "textIndent": "",
            "textOrientation": "",
            "textOverflow": "",
            "textRendering": "",
            "textShadow": "",
            "textSizeAdjust": "",
            "textTransform": "",
            "textUnderlinePosition": ""
        },
        "top": "",
        "touch": "",
        "transform": {
            "transform": "",
            "transformBox": "",
            "transformOrigin": "",
            "transformStyle": ""
        },
        "transition": {
            "transition": "",
            "transitionDelay": "",
            "transitionDuration": "",
            "transitionProperty": "",
            "transitionTimingFunction": ""
        },
        "unicode": {
            "unicodeBidi": "",
            "unicodeRange": ""
        },
        "user": {
            "userSelect": "",
            "userZoom": ""
        },
        "vector": "",
        "vertical": "",
        "visibility": "",
        "webkit": {
            "webkitAlignContent": "",
            "webkitAlignItems": "",
            "webkitAlignSelf": "",
            "webkitAnimation": "",
            "webkitAnimationDelay": "",
            "webkitAnimationDirection": "",
            "webkitAnimationDuration": "",
            "webkitAnimationFillMode": "",
            "webkitAnimationIterationCount": "",
            "webkitAnimationName": "",
            "webkitAnimationPlayState": "",
            "webkitAnimationTimingFunction": "",
            "webkitAppRegion": "",
            "webkitAppearance": "",
            "webkitBackfaceVisibility": "",
            "webkitBackgroundClip": "",
            "webkitBackgroundOrigin": "",
            "webkitBackgroundSize": "",
            "webkitBorderAfter": "",
            "webkitBorderAfterColor": "",
            "webkitBorderAfterStyle": "",
            "webkitBorderAfterWidth": "",
            "webkitBorderBefore": "",
            "webkitBorderBeforeColor": "",
            "webkitBorderBeforeStyle": "",
            "webkitBorderBeforeWidth": "",
            "webkitBorderBottomLeftRadius": "",
            "webkitBorderBottomRightRadius": "",
            "webkitBorderEnd": "",
            "webkitBorderEndColor": "",
            "webkitBorderEndStyle": "",
            "webkitBorderEndWidth": "",
            "webkitBorderHorizontalSpacing": "",
            "webkitBorderImage": "",
            "webkitBorderRadius": "",
            "webkitBorderStart": "",
            "webkitBorderStartColor": "",
            "webkitBorderStartStyle": "",
            "webkitBorderStartWidth": "",
            "webkitBorderTopLeftRadius": "",
            "webkitBorderTopRightRadius": "",
            "webkitBorderVerticalSpacing": "",
            "webkitBoxAlign": "",
            "webkitBoxDecorationBreak": "",
            "webkitBoxDirection": "",
            "webkitBoxFlex": "",
            "webkitBoxOrdinalGroup": "",
            "webkitBoxOrient": "",
            "webkitBoxPack": "",
            "webkitBoxReflect": "",
            "webkitBoxShadow": "",
            "webkitBoxSizing": "",
            "webkitClipPath": "",
            "webkitColumnBreakAfter": "",
            "webkitColumnBreakBefore": "",
            "webkitColumnBreakInside": "",
            "webkitColumnCount": "",
            "webkitColumnGap": "",
            "webkitColumnRule": "",
            "webkitColumnRuleColor": "",
            "webkitColumnRuleStyle": "",
            "webkitColumnRuleWidth": "",
            "webkitColumnSpan": "",
            "webkitColumnWidth": "",
            "webkitColumns": "",
            "webkitFilter": "",
            "webkitFlex": "",
            "webkitFlexBasis": "",
            "webkitFlexDirection": "",
            "webkitFlexFlow": "",
            "webkitFlexGrow": "",
            "webkitFlexShrink": "",
            "webkitFlexWrap": "",
            "webkitFontFeatureSettings": "",
            "webkitFontSizeDelta": "",
            "webkitFontSmoothing": "",
            "webkitHighlight": "",
            "webkitHyphenateCharacter": "",
            "webkitJustifyContent": "",
            "webkitLineBreak": "",
            "webkitLineClamp": "",
            "webkitLocale": "",
            "webkitLogicalHeight": "",
            "webkitLogicalWidth": "",
            "webkitMarginAfter": "",
            "webkitMarginBefore": "",
            "webkitMarginEnd": "",
            "webkitMarginStart": "",
            "webkitMask": "",
            "webkitMaskBoxImage": "",
            "webkitMaskBoxImageOutset": "",
            "webkitMaskBoxImageRepeat": "",
            "webkitMaskBoxImageSlice": "",
            "webkitMaskBoxImageSource": "",
            "webkitMaskBoxImageWidth": "",
            "webkitMaskClip": "",
            "webkitMaskComposite": "",
            "webkitMaskImage": "",
            "webkitMaskOrigin": "",
            "webkitMaskPosition": "",
            "webkitMaskPositionX": "",
            "webkitMaskPositionY": "",
            "webkitMaskRepeat": "",
            "webkitMaskRepeatX": "",
            "webkitMaskRepeatY": "",
            "webkitMaskSize": "",
            "webkitMaxLogicalHeight": "",
            "webkitMaxLogicalWidth": "",
            "webkitMinLogicalHeight": "",
            "webkitMinLogicalWidth": "",
            "webkitOpacity": "",
            "webkitOrder": "",
            "webkitPaddingAfter": "",
            "webkitPaddingBefore": "",
            "webkitPaddingEnd": "",
            "webkitPaddingStart": "",
            "webkitPerspective": "",
            "webkitPerspectiveOrigin": "",
            "webkitPerspectiveOriginX": "",
            "webkitPerspectiveOriginY": "",
            "webkitPrintColorAdjust": "",
            "webkitRtlOrdering": "",
            "webkitRubyPosition": "",
            "webkitShapeImageThreshold": "",
            "webkitShapeMargin": "",
            "webkitShapeOutside": "",
            "webkitTapHighlightColor": "",
            "webkitTextCombine": "",
            "webkitTextDecorationsInEffect": "",
            "webkitTextEmphasis": "",
            "webkitTextEmphasisColor": "",
            "webkitTextEmphasisPosition": "",
            "webkitTextEmphasisStyle": "",
            "webkitTextFillColor": "",
            "webkitTextOrientation": "",
            "webkitTextSecurity": "",
            "webkitTextSizeAdjust": "",
            "webkitTextStroke": "",
            "webkitTextStrokeColor": "",
            "webkitTextStrokeWidth": "",
            "webkitTransform": "",
            "webkitTransformOrigin": "",
            "webkitTransformOriginX": "",
            "webkitTransformOriginY": "",
            "webkitTransformOriginZ": "",
            "webkitTransformStyle": "",
            "webkitTransition": "",
            "webkitTransitionDelay": "",
            "webkitTransitionDuration": "",
            "webkitTransitionProperty": "",
            "webkitTransitionTimingFunction": "",
            "webkitUserDrag": "",
            "webkitUserModify": "",
            "webkitUserSelect": "",
            "webkitWritingMode": ""
        },
        "white": "",
        "widows": "",
        "width": "",
        "will": "",
        "word": {
            "wordBreak": "",
            "wordSpacing": "",
            "wordWrap": ""
        },
        "writing": "",
        "x": "",
        "y": "",
        "z": "",
        "zoom": ""
                    }
    
}



class seven_console
{

    constructor()
    {
        this.__init__()   
        // this.worker_init()
        this.src_controller()
        this.basic_iframe_setup()  
    }

    search_vincity=[]
    __init__()
    {
        state.range_slider.addEventListener('input',this.iframe_width_changer)
        state.view_div_up.addEventListener('click',this.display_slider)  
        state.search_bar.addEventListener('input',this.search_smartner)  
    }
    worker_init()
    {
        for (let x in init.worker_js)
        {
            // ('x')

            state.worker[init.worker_js[x].split('/')[1].split('.')[0]]=new Worker(init.worker_js[x]);
        }
    }


    search_smartner(ev)
    {
        
    }
    display_slider(ev)
    {
        // prn(state.view_div.style.display)
        
        if (state.view_div.style.display=="block")
        {
            state.view_div.style.display="none"
        }
        else
        {
            state.view_div.style.display="block"
        }
        
    }

    iframe_width_changer(ev)
    {
    //    prn(ev.target.value)
        state.iframe.style.width=`${ev.target.value}%`
        let value=(ev.target.value*900)/100;
        
        state.range_slider_value.innerText=`${value}px`
    
    }
    
    src_controller()
    {  
        
        let a=document.querySelector(`.${init.class_names.src}`);
        if(state.element==null)
        {
            
            a.className+=' before'
            a.innerHTML=`<div class="no-element">no element selected</div>
            <div class="before_inner">
            <button class="add-element">add element</button>
            <button class="edit-class-name">className editor </button>
            
            </div>
            `   
            setTimeout(ev=>{
                let a=document.querySelector('.add-element')
                a.addEventListener('click',seven.event_for_add_element)
            },4)
        }
        else
        if(state.element!=null)
        {

            
            a.className='src'
            a.innerHTML=`<div class="item" >elemnet selected -${state.element.localName }</div>
            <button class="js">JS</button>
            <button class="css">CSS</button>
            <button class="addelement">ADD ELEMENT</button>
            `
        }
    }

    col_assiner()
    {
        state.col.addEventListener("mousedown", this.mousedown_col, false);
        state.col.addEventListener("mouseup", this.mouseup_col, false);
        state.col.addEventListener("mousemove", this.mousemove_col, false);
        // document.addEventListener('mousemove',this.mousemove_col)
        
    }

    mousemove_col(ev)
    {
        prn('move',ev.offsetX)
        if (state.move)
            {
            state.element.style.width=state.x+ev.movementX-state.offx+"px";
            // state.element.style.top=state.y+ev.movementY-state.offy+"px";
            prn(ev.movementX,state.offx)

            state.x=ev.clientX;
            state.y=ev.clientY;
            }
    }

    mousedown_col(ev)
    {
        prn('down')
        state.x=ev.clientX;
        state.y=ev.clientY;
        state.offx=ev.offsetX;   
        state.offy=ev.offsetY;
        state.element=ev.target;
        state.move=true;
        
        
        
    }
   
    mouseup_col(ev)
    {
        prn('up')
        state.move=false;
        document.onmouseup=null;
        document.onmousemove=null
        state.element.onmousemove=null
    }



    basic_iframe_setup()
    {
        let a=document.createElement('style')
        a.className="custom_style"
        a.innerText=`body{background-color:cyan;}`
            // state.contentDocument.querySelector('head').appendChild(a)   
        a=document.createElement('script')
        a.className="custom_script"
        // state.contentDocument.querySelector('html').appendChild(a)
    }

    event_for_add_element(ev)
    {
        let a=document.querySelector('.element-option')
        a.className+=' Add_Element'

        let buffer_text=""

        for(let x of Object.keys(elements_dom_regestration))
        {
            let y=elements_dom_regestration[x];
            
            
            

            buffer_text+=`   <div name="${x}" class="add_element_inner" draggable="true"  id="<${x}></${x}>"> <p>${x}</p></div>`

        }
        a.innerHTML=buffer_text

        setTimeout(ev=>{
            let abc=document.querySelectorAll('.add_element_inner')
           
            abc.forEach(ev=>{
                // prn(ev)
                ev.addEventListener('dragstart',seven.add_element_inner_event_handler)
                ev.addEventListener('dragend',aeid.dragend)
            })
        },100)



    }   





    add_element_inner_event_handler(e)
    {
        // prn('drag start',e)
        aeid.tag_element=e.target
    }

}






window.seven= new seven_console()
window.sec= new seven_element_controll()
window.eoc= new extra_option_controller()
window.a=setTimeout(
    ev=>{
    window.dm= new dom_creator()    
        // prn('hey')
    
    window.aeid=new add_element_in_dom()
        let vent={
            target:{
                value:"Tools"
            }
        }
    eoc.event_handler(vent)
    aeid.show_element_magic(false)
         state.contentDocument.querySelector('body').addEventListener('drop',aeid.dragdrop)
        state.contentDocument.querySelector('body').addEventListener('dragover',aeid.dragover)
        // qs('.dom_mapper').innerHTML=buffer_text_for_dom_mapper;
        abc(dm.dom["BODY ||  || null"],name="BODY ||  || null")
        // abc(dm.dom["BODY ||  || null"].inner["H1 ||  || null"],name=)
    },1000)

window.buffer_text_for_dom_mapper=""
function abc(a,name)
{
    // prn("name=",name)
    // dom_mapper
    buffer_text_for_dom_mapper+=`<div><p>${name}</p>`
    
    let buffer=Object.entries (a.inner);
    prn()
    if(buffer.length >0)
    {
        prn( Object.entries (a.inner)) 
            Object.entries (a.inner).forEach(ev=>{
            // abc(ev)
            abc(ev[1],ev[0])
                        })

    }
    else{
        prn('0')
    }
    buffer_text_for_dom_mapper+=`</div>`
  
    // prn( Object.entries (a.inner))
    // try {
    //     Object.entries (a.inner).forEach(ev=>{
    //         abc(ev)
    //                     })

    // } catch (error) {
        
    // }
    
    
}
