class Form{
    constructor(){
        this.title=createElement("h1")

        this.input=createInput("Enter Your Army Name")

        this.button=createButton("Go To War")

    }
    display(){
        this.title.html("Foot Wars")
        this.title.position(displayWidth/2,0)

        this.input.position(displayWidth/2,30)

        this.button.position(displayWidth/2,60)

        this.button.mousePressed(()=>{

            this.input.hide();

            this.button.hide();

            armyName=this.input.value()
        })
       
    }
    hide(){
         this.button.hide();
         
         this.input.hide();
         
         game.display();
    }
}