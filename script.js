const gameContainer = document.querySelector(".container"),
 MomenResult = document.querySelector(".Momen_result img"),
 cpuResult = document.querySelector(".cpu_result img"),
 result = document.querySelector(".result"),
 optionImages = document.querySelectorAll(".option_image");
const u1=document.querySelector('#u');
const c1=document.querySelector('#c');

 optionImages.forEach((image,index)=>{
    image.addEventListener("click",(e) => {
        image.classList.add("active");

        MomenResult.src=cpuResult.src="images/rock.png";
        result.textContent="Wait...";

        optionImages.forEach((image2,index2) => {
            index!==index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");
        let time=setTimeout(() => {
        gameContainer.classList.remove("start");
            let imageSrc=e.target.querySelector("img").src;
            MomenResult.src=imageSrc;
    
            let randomNumber=Math.floor(Math.random()*3);
            let cpuImages=["images/rock.png","images/paper.png","images/scissors.png"];
        
            cpuResult.src=cpuImages[randomNumber];
    
            let cpuValue=["R","P","S"][randomNumber];
            let MomenValue=["R","P","S"][index];
    
            let outcomes={
                RR:"Draw",
                RP:"Cpu",
                RS:"Momen",
                PP:"Draw",
                PR:"Momen",
                PS:"Cpu",
                SS:"Draw",
                SR:"Cpu",
                SP:"Momen",
            };
            let outComeValue=outcomes[MomenValue+cpuValue];
            if(outComeValue==="Momen"){
                u1.innerText=+u1.innerText+ 1;
            }
            else if(outComeValue==="Cpu")
            {
                c1.innerText=+c1.innerText+ 1;
            }
            else{
                c1.innerText=+c1.innerText+ 1;
                u1.innerText=+u1.innerText+ 1;
            }
            result.textContent=MomenValue===cpuValue? "Match Draw": `${outComeValue} Won!`;
        }, 2500);

    });
 });
