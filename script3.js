
let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width=400;
canvas.height=700;
document.body.appendChild(canvas);

let backgroundImage,spaceshipImage,bulletImage,enemyImage,gameoverImage;
let gameover=false // true이면 게임이 끝남, false이면 게임이 안끝남
//우주선 자표
let score=0
let spaceshipX = canvas.width/2 - 32;
let spaceshipY = canvas.height - 64;

let bulletList = [] //총알들을 저장하는 리스트
function Bullet(){
    this.x= 0;
    this.y= 0;
    this.init=function(){
        this.x = spaceshipX+20;
        this.y = spaceshipY
        this.alive = true //true면 살아있는 총알 false면 죽은 총알
        bulletList.push(this);
    };
        this.update = function(){
            this.y -= 7;

        };

//총알.y <= 적군.y And
//총알.x >= 적군.x and 총알.x <=적군.x + 적군의 넓이
        this.checkHit=function(){
            for(let i = 0; i < enemyList.length;i++){
                if(
                this.y <= enemyList[i].y && 
                this.x >= enemyList[i].x && 
                this.x <= enemyList[i].x + 40 
                ){
            //총알이 죽게됨 적군의 우주선이 없어짐, 점수 획득
            score++;
            this.alive = false //죽은총알
            enemyList.splice(i, 1);
                }
        }
        };
    }    
    

function generateRandomValue(min,max){
    let randomNom = Math.floor(Math.random()*(max-min+1))+min
    return randomNom

}

let enemyList = []; //적군 저장하는 리스트
function Enemy(){
    this.x=0;
    this.y=0;
    this.init = function(){
        this.y=0;
        this.x=generateRandomValue(0,canvas.width-48);
        enemyList.push(this);
    };
    this.update = function(){
        this.y += 2;//적군의 속도 조절
        if(this.y >= canvas.height-48){
            gameover = true
        }

    };

}

function loadImage(){
backgroundImage = new Image();
backgroundImage.src="img/background.gif";

spaceshipImage = new Image();
spaceshipImage.src="img/spaceship.png";

bulletImage = new Image();
bulletImage.src="img/bullet.png";

enemyImage = new Image();
enemyImage.src="img/enemy.png";

gameOverImage = new Image();
gameOverImage.src="img/gameover.png";

}
//방향키를 누르면
let keysDown={};
function setupkeyboardListener(){
        document.addEventListener("keydown",function(event){
        
        keysDown[event.keyCode] = true;
      
        });
        document.addEventListener("keyup",function(event){
            delete keysDown[event.keyCode];
            
            if(event,keyCode = 32){
                createBullet()//총알생성
            }
      
        });
    
}
function createBullet(){
    console.log("총알생성");
    let b = new Bullet()//총알 하나 생성
    b.init();
 //   console.log("총알 리스트",bulletList);

}
function createEnemy(){
         const interval = setInterval(function(){
            let e = new Enemy();
            e.init();
         },500);//호출하고싶은 함수,시간
}

function update(){
      if(39 in keysDown) //rigft
      spaceshipX += 5;//우주선의 속도

      if(37 in keysDown) //left
      spaceshipX -= 5;//우주선의 속도

      //우주선의 좌표값이 무한대로 업데이트가 되는게 아닌!경기장 안에서만 있게 하는방법
      if(spaceshipX <= 0)
         spaceshipX = 0
      if(spaceshipX >= canvas.width-64)
         spaceshipX = canvas.width-64;

         //총알의 y좌표 업데이트하는 함수 호출
         for(let i = 0; i < bulletList.length; i++){
         if(bulletList[i].alive){
         bulletList[i].update();
         bulletList[i].checkHit();
         }
        }
         for(let i = 0; i < enemyList.length; i++) {
         enemyList[i].update();
         }
}

function render(){
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage,spaceshipX,spaceshipY);
    ctx.fillText('Score:${score}',20,20);
    ctx.font = "20px Arial";
    ctx.fillStyle="black";
    
    for(let i = 0;i<bulletList.length;i++){
        if(bulletList[i].alive){
        ctx.drawImage(bulletImage,bulletList[i].x,bulletList[i].y);
    }
    }
    for(let i = 0;i < enemyList.length; i++){
        ctx.drawImage(enemyImage,enemyList[i].x,enemyList[i].y);

    }
} 
function main (){
    if(!gameover){

    
    update();//좌표값을 업데이트하고
    render();//그려주고
    requestAnimationFrame(main);
    }else
    {
        ctx.drawImage(gameOverImage,10,100,380,380)
    }
}
loadImage();
setupkeyboardListener();
createEnemy();
main();

//방향기를 누르면
//우주선의 xy 좌표가 바뀌고
//다시 render 그려준다

//총알만들기
//1.스페이스바를 누르면 총알 발사
//2.총알이 발사 = 총알의y값이 --,총알의 x값은? 스페이스를 누른 순간의 우주선의 x좌표
//3.발사된 총알들은 총알 배열에 저장을 한다
//4.총알들은 x,y좌표값이 있어야 한다.
//5.총알 배열을 가지고 render그려준다

//전군만들기
//귀엽다 ,x,y, init update
//적군은 위치가 랜덤하다
//적군은 밑으로 내려운다
//1초마다 하나씩 적군이 나온다
//적군은 우주선이 바닥에 닿으면 게임 오버
//적군과 총알이 만나면 우주선이 사라진다 점수 1점 획득

//적군이 죽는다
//총알.y <= 적군.y and
//총알.x >= 적군.x and 총알.x <=  적군.x +적군의 넓이

//닿았다

//총알이 죽게됨 적군의 우주선이 없어짐 , 점수 획득