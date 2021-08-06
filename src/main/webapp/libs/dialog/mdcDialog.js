/*
    Document   : mdcDialog
    Created on : 05/08/2021, 08:00:00
    Author     : EB
*/

class mdcDialog{
    constructor(title, content, fnAceptar,id){
        var that = this;
        this.buttonsArray = [];
        this.body = $("body");
        this.dialogDiv = $("<div>").addClass("mdc-dialog").attr("id",id).appendTo(that.body);
            this.dialogContainer = $("<div>").addClass("mdc-dialog__container").appendTo(that.dialogDiv);
                this.dialogSurface = $("<div>").addClass("mdc-dialog__surface").attr("style","width:210%").appendTo(that.dialogContainer);
                    this.$dialogTitle = $("<h2>").addClass("mdc-dialog__title").html(title ? title : "").css({"text-align":"center"}).appendTo(that.dialogSurface);
                    this.$dialogContent = $("<div>").addClass("mdc-dialog__content").attr("style","width:100%").appendTo(that.dialogSurface);
                    typeof content === 'object' ? that.$dialogContent.append(content) : that.$dialogContent.html(content);
                this.dialogActions = $("<div>").addClass("mdc-dialog__actions").appendTo(that.dialogSurface);   
                    this.btCancelar = $("<button>").attr({"type":"button"}).addClass("mdc-button mdc-dialog__button").appendTo(that.dialogActions);
                        $("<div>").addClass("mdc-button__ripple").appendTo(that.btCancelar);
                        var objectText = $("<span>").addClass("mdc-button__label").attr({"data-mdc-dialog-action":"cancel"}).html("Cancelar").appendTo(that.btCancelar);                  
            $("<div>").addClass("mdc-dialog__scrim").appendTo(that.dialogDiv);        
            this.dialogNotif = new mdc.dialog.MDCDialog(that.dialogDiv.get(0)); 

            that.btCancelar.click(function(){
                if(that.fnClick){
                    that.fnClick("cancel");
                }
                that.close();
                that.remove();
            });   
            this.addToButtonsArray("cancel", "Cancelar", that.btCancelar, objectText);
            return this;
    }
    appendToBody(content){
         this.$dialogContent.append(content);
         return this;
     }
    appendToSurface(content){
        content.insertBefore(this.$dialogTitle);
        return this;
    }
    setTextButton(id, text){
        this.buttonsArray[id].objectText.html(text);
        return this;
    }
    addButton(id, text, preppend){
        var that = this;
        var button = $("<button>").attr({"type":"button"}).addClass("mdc-button mdc-dialog__button");
        $("<div>").addClass("mdc-button__ripple").appendTo(button);
        var objectText = $("<span>").addClass("mdc-button__label").attr({"data-mdc-dialog-action":id}).html(text).appendTo(button);
        button.click(function(){
            if(that.fnClick){
                that.fnClick(id);
            }
        });
        if(preppend){
            button.prependTo(that.dialogActions);
        }else {
            button.appendTo(that.dialogActions);
        }     
        this.addToButtonsArray(id, text, button, objectText);
        return this;
    }
    addToButtonsArray(id, text, button, objectText){
        this.buttonsArray[id] = {
            id:id,
            text:text,
            objectText: objectText,
            button: button
        };   
        return this;
    }
    setFnClick(fnClick){
        this.fnClick = fnClick;
        return this;
    }
    open(){
        this.dialogNotif.open();
        return this;
    }
    close(){
        this.dialogNotif.close();
        return this;
    }
    remove(){
        this.dialogDiv.remove();
        return this;
    }
}