var face_num = 5
var face_size = []
var face_x =[]
var face_y = []
var song
var songIsplay=false //設定此變數為"假"，收到按下滑鼠把變數改為"真"，音樂撥放
var amp

function preload(){
  song = loadSound("chi-la-ameng-zhu-ti-qu.mp3"); 
}


function setup() {
  angleMode(DEGREES)
  createCanvas(windowWidth, windowHeight);
  for(var i=0;i<face_num;i++){
    face_size[i] = random(20,100) //臉的大小20~100
    face_x[i] = random(0,width)
    face_y[i] = random(0,height)
  }
}

function draw() {
  background('#e3d5ca');
  textSize(50)
  fill(255)
  text("X:"+mouseX+"Y:"+mouseY,50,50)
  fill('#F1E2AB')
    ellipse(275+map(mouseX,0,width,-100,700),140+map(mouseY,0,height,-80,400),80)  //銅鑼燒底層
    fill('#BF6900')
    ellipse(275+map(mouseX,0,width,-100,700),140+map(mouseY,0,height,-80,400),65)  //銅鑼燒中間
  for(var j=0;j<face_num;j++)
  {
  push()  
  var f_s = face_size[j] 
  translate(face_x[j],face_y[j]) //把(0,0)座標原點移到視窗的中間
    fill('#3198E6')
    ellipse(0,0,f_s/0.345) //臉(藍色部分) 
    fill(255)
    ellipse(0,f_s/3.03,f_s/0.408,f_s/0.435) //臉(白色部分) 
    ellipse(-f_s/2.857,-f_s/1.316,f_s/1.429,f_s/1.111) //左眼白 
    ellipse(f_s/2.857,-f_s/1.316,f_s/1.429,f_s/1.111) //右眼白  
    fill(0)
    ellipse(-f_s/4+map(mouseX,0,width,-f_s/4.33,f_s/10),-f_s/1.72+map(mouseY,0,height,-f_s/3.222,f_s/12),f_s/5.882,f_s/3.704) //左眼球
    ellipse(f_s/4+map(mouseX,0,width,-f_s/10,f_s/4.33),-f_s/1.72+map(mouseY,0,height,-f_s/3.222,f_s/12),f_s/5.882,f_s/3.704) //右眼球
    fill(255)
    ellipse(-f_s/4.35+map(mouseX,0,width,-f_s/4.33,f_s/10),-f_s/1.69+map(mouseY,0,height,-f_s/3.222,f_s/12),f_s/11.11,f_s/7.143) //左眼睛亮光
    ellipse(f_s/4.35+map(mouseX,0,width,-f_s/10,f_s/4.33),-f_s/1.69+map(mouseY,0,height,-f_s/3.222,f_s/12),f_s/11.11,f_s/7.143) //右眼睛亮光
    fill('#DD0303')
    ellipse(0,-f_s/3.03,f_s/2.63,f_s/2.63) //鼻子(紅色)
    fill(255)
    ellipse(f_s/33.34,-f_s/2.38,f_s/8.334) //鼻子高光
  
    curve(f_s/1.818,-f_s/5.556,f_s/1.818,-f_s/5.556,f_s/0.862,-f_s/2.128,f_s/0.87,-f_s/2.128)
    curve(f_s/1.667,-f_s/100,f_s/1.667,-f_s/100,f_s/0.746,-f_s/7.692,f_s/0.87,-f_s/7.143)
    curve(f_s/1.613,f_s/5,f_s/1.613,f_s/5,f_s/0.73,f_s/4.167,f_s/0.87,f_s/3.571)
    //右邊鬍鬚
    curve(-f_s/1.818,-f_s/5.556,-f_s/1.818,-f_s/5.556,-f_s/0.862,-f_s/2.128,-f_s/0.87,-f_s/2.128)
    curve(-f_s/1.667,-f_s/100,-f_s/1.667,-f_s/100,-f_s/0.746,-f_s/7.692,-f_s/0.87,-f_s/7.143)
    curve(-f_s/1.613,f_s/5,-f_s/1.613,f_s/5,-f_s/0.73,f_s/4.167,-f_s/0.87,f_s/3.571)
    //左邊鬍鬚

    fill(255,0,0)
    rect(-f_s/1.334,f_s/0.787,f_s/0.667,f_s/5,f_s/5) //紅領繩
    fill(255,255,0)
    ellipse(0,f_s/0.633,f_s/2.857,f_s/2.857) //鈴鐺
    rect(-f_s/5,f_s/0.645,f_s/2.5,f_s/25,f_s/5)  //鈴鐺中間橫線
    fill('#897900')
    ellipse(0,f_s/0.602,f_s/12.5) //鈴鐺孔


     fill(255,0,0)
     if(mouseIsPressed)
       {//mouseIsPressed為true，代表有按下滑鼠
         arc(f_s/2,f_s/1.667,f_s/1.667,f_s/1.25,336,153) //下吐舌頭
      }
      else
       {   //mouseIsPressed為false，代表沒有按下滑鼠
        beginShape();
        curveVertex(f_s/1,f_s/2.631)
        curveVertex(f_s/1,f_s/2.631)
        curveVertex(0,f_s/1.176)
        curveVertex(0,f_s/1.176)
        endShape();         
       }

       if(!songIsplay){
         fill(255,0,0)
         arc(f_s/2,f_s/1.667,f_s/1.667,f_s/1.25,336,153)
       }
       else{
         vol = amp.getLevel() 
         fill(255,0,0)
         arc(f_s/2,f_s/1.667,f_s/1.667,f_s/1.25,map(vol,0,0.5,f_s/1,f_s/2.631),153,336)
       }

    beginShape();
        curveVertex(0,f_s/0.588)
        curveVertex(0,f_s/0.588)
        curveVertex(0,f_s/0.571)
        curveVertex(0,f_s/0.571)
    endShape(); //鈴鐺中間

    beginShape();
        curveVertex(0,-f_s/6.667)
        curveVertex(0,-f_s/6.667)
        curveVertex(0,f_s/1.176)
        curveVertex(0,f_s/1.176)
    endShape(); //嘴巴中間
    beginShape();
        curveVertex(-f_s/1,f_s/2.631)
        curveVertex(-f_s/1,f_s/2.631)
        curveVertex(0,f_s/1.176)
        curveVertex(0,f_s/1.176)
    endShape(); //左嘴巴
    beginShape();
        curveVertex(f_s/1,f_s/2.631)
        curveVertex(f_s/1,f_s/2.631)
        curveVertex(0,f_s/1.176)
        curveVertex(0,f_s/1.176)
    endShape(); //右嘴巴
    
    pop()

    function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
}
}
}