class Beat{
    constructor(audiosrc){
        this.audio=new Audio(audiosrc);

    }
    play=()=>{
        this.audio.currentTime=0;
        this.audio.play();
    }
}


class  Button{
    constructor(color,keyCode){
        this.color=color;
        this.keyCode=keyCode;
        this.element=document.getElementById(keyCode);
        this.setButtoncolorinHTML();
    }

    setButtoncolorinHTML=()=>{
        this.element.style.borderColor=this.color;
    }

    createTransitionEndListener=()=>{
        this.element.addEventListener("transitionend",()=>{
            this.deselect();
        })
    }

    select=()=>{
        this.element.style.backgroundColor=this.color;
        this.element.style.boxShadow=`0px 0px 17px 0px ${this.color}`;
    }

    deselect=()=>{
        this.element.style.backgroundColor="transparent";
        this.element.style.boxShadow=`none`;
    }
}

