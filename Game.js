class Game{
    constructor(){}
    display(){
        if(backgroundImg){
            background(backgroundImg);
          }
                //for first country
        for(var j = 40; j<= width; j = j+50){
            plinkos.push(new Plinko(55 ,j))
        }
        for(var j = 15; j<= width-10; j = j+50){
            plinkos.push(new Plinko(85 ,j))
        }
        for(var j = 40; j<= width-10; j = j+50){
            plinkos.push(new Plinko(120 ,j))
        }
        for(var j = 15; j<= width-10; j = j+50){
            plinkos.push(new Plinko(150 ,j))
        }
        for(var j = 40; j<= width-10; j = j+50){
            plinkos.push(new Plinko(185 ,j))
        }
        for(var j = 15; j<= width-10; j = j+50){
            plinkos.push(new Plinko(225 ,j))
        }
        for(var j = 40; j<= width-10; j = j+50){
            plinkos.push(new Plinko(265 ,j))
        }
        for(var j = 15; j<= width-10; j = j+50){
            plinkos.push(new Plinko(305 ,j))
        }

        //for second country

        for(var j = 40; j<= width; j = j+50){
            plinkos.push(new Plinko(955 ,j))
        }
        for(var j = 15; j<= width-10; j = j+50){
            plinkos.push(new Plinko(985 ,j))
        }
        for(var j = 40; j<= width-10; j = j+50){
            plinkos.push(new Plinko(1020 ,j))
        }
        for(var j = 15; j<= width-10; j = j+50){
            plinkos.push(new Plinko(1050 ,j))
        }
        for(var j = 40; j<= width-10; j = j+50){
            plinkos.push(new Plinko(1085 ,j))
        }
        for(var j = 15; j<= width-10; j = j+50){
            plinkos.push(new Plinko(1125 ,j))
        }
        for(var j = 40; j<= width-10; j = j+50){
            plinkos.push(new Plinko(1165 ,j))
        }
        for(var j = 15; j<= width-10; j = j+50){
            plinkos.push(new Plinko(1205 ,j))
        }
        for(var j = 0; j<plinkos.length;j++){
            plinkos[j].display();
        }
    
        //draw line at the centre
        for (var i = 0; i < 700; i=i+20) {
        line(625,i,625,i+10);
        }
    
        football.display();
    }
}