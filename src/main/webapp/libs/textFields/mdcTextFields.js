/*
    Document   : mdcTextFields
    Created on : 05/08/2021, 08:00:00
    Author     : EB
*/

class mdcTextFields {    
    constructor(content) {
        this.content = content;
        this.textFields = [];
    }
    
    getTextField(id){
        return this.textFields[id];
    }
    
    add(textField, id, text, input){
        this.textFields[id] = {
            id:id,
            text:text,
            textField:textField,
            input:input
        };
    }
   
    addTextFieldFilled(id, text, icon, position){        
        position = position ? position : "left";
        var divContent = $("<div>").addClass("text-field-content").appendTo(this.content);
        var label = $("<label>").addClass("mdc-text-field mdc-text-field--filled").appendTo(divContent);
        $("<span>").addClass("mdc-text-field__ripple").appendTo(label);        

        var i;
        if(icon){
            i = $("<i>").addClass("material-icons").html(icon);                    
        }
        if(position == "left"){
            i.appendTo(label);
        }
        var input = $("<input>").addClass("mdc-text-field__input").attr({type:"text"}).appendTo(label);
        if(position == "right"){
            i.appendTo(label);
        }

        $("<span>").addClass("mdc-floating-label").html(text).appendTo(label);
        var ripple = $("<span>").addClass("mdc-line-ripple");
        if(position == "left"){
            label.addClass("mdc-text-field--with-leading-icon");                
            i.addClass("mdc-text-field__icon mdc-text-field__icon--leading");
            ripple.css({transformOrigin:"86.5px center 0px"});
        }else if(position == "right"){
            label.addClass("mdc-text-field--with-trailing-icon");                
            i.addClass("mdc-text-field__icon mdc-text-field__icon--trailing");
            ripple.css({transformOrigin:"40.8333px center 0px"});
        }    
        ripple.appendTo(label);
        const textField = new  mdc.textField.MDCTextField(label.get(0));
        this.add(textField, id, text, input);
        return this;
    }

    addTextFieldOutlined(id, text, icon, widths, styles, position){        
        position = position ? position : "left";
        var divContent = $("<div>").attr({id:"dialog"+id}).css({"width": "0px","padding-top":"8px","padding-bottom":"4px"/*widths: styles ? styles :""*/}).addClass("text-field-content").appendTo(this.content);
        var label = $("<label>").addClass("mdc-text-field mdc-text-field--outlined").css({"width": "300px"}).appendTo(divContent);
        var i;
        if(icon){
            i = $("<i>").addClass("material-icons mdc-text-field__icon").html(icon);                    
        }else{
            i = $("<i>").addClass("").html(icon);
        }
        if(position == "left"){
            i.appendTo(label);
        }
        var input = $("<input>").addClass("mdc-text-field__input").attr({type:"text","aria-Labelledby":"label-"+id}).css({width: widths ? widths :"250px"}).appendTo(label);
        if(position == "right"){
            i.appendTo(label);
        }
        var divContent = $("<div>").addClass("mdc-notched-outline").appendTo(label);
            $("<div>").addClass("mdc-notched-outline__leading").appendTo(divContent);
            var nothc = $("<div>").addClass("mdc-notched-outline__notch").appendTo(divContent);
                $("<span>").attr({id:"label-"+id}).addClass("mdc-floating-label").html(text).appendTo(nothc);
                $("<div>").addClass("mdc-notched-outline__trailing").appendTo(divContent);
        
        if(position == "left"){
            label.addClass("mdc-text-field--with-leading-icon");                
            i.addClass("mdc-text-field__icon--leading");  
        }else if(position == "right"){
            label.addClass("mdc-text-field--with-trailing-icon");                
            i.addClass("mdc-text-field__icon--trailing");
        }
        const textField = new  mdc.textField.MDCTextField(label.get(0));
        this.add(textField, id, text, input);
        return this;
    }
    
    setValue(id, value){
        this.textFields[id].textField.value = value;
    }
    
    getValue(id){
        return this.textFields[id].textField.value;
    }
        
}