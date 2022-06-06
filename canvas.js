//지도 데이터
const gg = [[102,158,163],[111,154,176],[120,143,191],[130,134,201],[139,134,201],[149,125,201],[159,134,150],[159,172,205],[168,135,140],[168,182,215],[178,181,225],[188,144,223],[197,144,211],[206,143,210],[216,144,201],[225,153,191]];
const sl = [[159,156,165],[168,146,175],[178,144,175]];
const gw = [[82,263,269],[91,182,230],[92,249,269],[101,173,278],[111,182,278],[121,202,287],[131,211,288],[140,211,297],[150,211,306],[160,211,316],[170,221,326],[180,231,327],[190,230,337],[200,221,336],[210,220,230],[210,268,340],[219,278,336]];
const cn = [[225,108,126],[235,97,172],[245,97,182],[255,106,182],[265,116,163],[275,125,163],[285,125,163],[295,125,163],[305,125,173],[315,134,205],[322,190,201],[328,192,198]];
const cb = [[211,237,263],[219,211,269],[227,202,279],[236,183,280],[246,191,279],[256,191,239],[266,191,222],[276,191,220],[286,211,220],[296,211,220],[306,211,231],[316,211,240],[324,211,231]]
const sj = [[266,172,182],[274,170,184],[282,172,182]];
const dj = [[287,192,205],[294,175,205],[302,180,205]];
const gb = [[221,342],[229,288,345],[237,288,355],[246,286,355],[256,249,355],[266,230,356],[276,226,356],[286,230,356],[296,230,356],[306,240,355],[316,249,355],[316,366],[326,240,366],[336,240,269],[336,307,366],[346,240,259],[346,307,356],[356,307,355],[366,297,316],[366,345,355],[376,288,307]];
const gn = [[345,211,221],[355,220,250],[365,217,250],[375,216,278],[375,313],[385,220,316],[395,220,326],[405,211,317],[415,211,278],[415,297],[425,212,268],[435,224,230],[435,249,270]]
const bs = [[405,325,330],[415,285,290],[415,305,325],[425,288,319]];
const us = [[365,326,336],[375,320,354],[386,320,354],[395,335,340]];
const dg = [[335,275,300],[345,265,300],[355,260,300],[365,258,290]];
const jb = [[326,144,183],[336,144,230],[346,144,202],[346,230],[356,135,211],[366,125,211],[376,125,213],[386,114,211],[396,125,135],[396,173,211]]
const jn = [[397,112,120],[397,144,163],[407,107,203],[417,115,125],[417,163,201],[427,115,125],[427,163,205],[437,115,212],[447,115,192],[457,115,183],[467,125,154],[477,115,154],[487,115,144]]
const gj = [[418,132,157],[428,132,157]];
const dd = [[197,408,415]];
const jj = [[545,107,146],[555,97,146],[565,97,136]];
const region = [gg,sl,gw,cn,cb,sj,dj,gb,gn,bs,us,dg,jb,jn,gj,dd,jj]
const len_region = region.length
const city = [sl,sj,dj,dg,us,bs,gj]
const len_city = city.length
const others = [gg,gw,cn,cb,gb,gn,jb,jn,dd,jj]
const len_others = others.length
const region_words = [
    ['경','서','강','충','충','세','대','경','경','부','울','대','전','전','광','독','제'],
    ['기','울','원','청','청','종','전','상','상','산','산','구','라','라','주','도','주'],
    ['도','특','도','남','북','특','광','북','남','광','광','광','북','남','광',' ', '특'],
    [' ','별',' ','도','도','별','역','도','도','역','역','역','도','도','역',' ', '별'],
    [' ','시',' ',' ',' ', '자','시',' ',' ',  '시','시', '시',' ',' ' ,'시',' ', '자'],
    [' ',' ',' ',' ',' ',   '치',' ',' ',' ',   ' ',' ', ' ', ' ', ' ', ' ',' ' , '치'],
    [' ',' ',' ',' ',' ',   '시',' ',' ',' ',   ' ',' ',' ' ,' ' ,' ' ,' ' ,' ' , '도']
]
const len_region_words = region_words.length


//요소 선택
const canvas = document.getElementById("canvas_komap");
const obj = document.getElementById('obj');
//자식 선택자 조작을 위한 노드리스트 생성
const typo_face = document.getElementById('region_info_typo_sene').children

//canvas 넓이,높이 설정 및 캔버스 위치 변수 생성
canvas.width = 450;
canvas.height = 630;

//지도 변수
const r = 1.5;
const color ='#0c3025'
colot_city = '#2D2BF5'
space = 1.4


if (canvas.getContext){
    //canvas type 설정
    const ctx = canvas.getContext('2d');
    //점 찍기용 함수 표현식
    const drawDot = function(x, y, r,color){
        ctx.fillStyle=color
        ctx.moveTo(x+r,y)
        ctx.beginPath();
        ctx.arc(x+r,y,r,0,Math.PI*2,false)
        ctx.fill()

    }
    //데이터에 부합하는 그리기 함수 정의
    const draw = function(arr,r,color,space,hTime=30,vTime=200){
        const len_arr = arr.length
        for(let i = 0; i<len_arr;i++){
            const len = arr[i].length
            setTimeout(function(){
                if (len == 2){
                    setTimeout(function(){
                        drawDot(arr[i][1],arr[i][0],r,color)
                    },250*i)
                }
                else{
                    for (let k = arr[i][1]; k <= arr[i][2]; k+=2*r+space){
                        setTimeout(function(){
                            drawDot(k,arr[i][0],r,color)
                        },hTime*(k-arr[i][1]))
                    }
                }
            },vTime*i)
        }
    }
    //전국지도-단색 그리기 함수
    const OthersSingleColor = function(color){
        for (let i = 0;i<len_others;i++){
            draw(others[i],r,color,space)
        }
    }
    const CitySingleColor = function(color){
        for (let i = 0;i<len_city;i++){
            draw(city[i],r,color,space,40)
        }
    }
    const drawborder = function(arr,r,color,space,hTime=30,vTime=200){
        const len_arr = arr.length
        for(let i = 0; i<len_arr;i++){
            const len = arr[i].length
            setTimeout(function(){
                if (len == 2){
                    setTimeout(function(){
                        drawDot(arr[i][1],arr[i][0],r,color)
                    },250*i)
                }
                else{
                    drawDot(arr[i][1],arr[i][0],r,color)
                    drawDot(arr[i][1],arr[i][0],r,color)
                }
            },vTime*i)
        }
    }
    //basic map generate
    OthersSingleColor(color);
    CitySingleColor(colot_city);
    


    canvas.addEventListener('mouseup',(e)=>{
        let x_clk = e.offsetX;
        let y_clk = e.offsetY;
        let count = 0;
        for (let i = 0; i < len_region; i++){
            for(idx of region[i]){
                if ((Math.abs(idx[0]-y_clk) <= 5) && (x_clk > idx[1]) && (x_clk < idx[2])){
                    for (let c = 0; c<len_region_words; c++){
                        (function(x){
                            setTimeout(function(){
                                typo_face.item(x).innerHTML = region_words[x][i]
                            
                            },150*x)
                        })(c)
                    }
                }
            }
            count++;
        }
    })

    

} 
else {
    alert("2d canvas doesn't supported")
}
