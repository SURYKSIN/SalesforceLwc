import { LightningElement, api, track } from 'lwc';

export default class Calculator extends LightningElement {
    isAdd = false;
    isSub = false;
    isMul = false;
    isDiv = false;
    @track res = 0;
    @track oldSummay = null;
    @track summary = null;
    onchangeHandler(event){
        if(this.isAdd == true){
        this.res = oldSummary+ event.target.value();
        this.summary = event.target.value();
        this.isAdd = false;
        console.log(summary, res, isAdd)
        }

        else if(this.isSub == true){
            this.res = summary - event.target.value();
            this.summary = event.target.value();
            this.isSub = false;
            console.log(summary, res);
       }
       else if(this.isMul == true){
        this.res = summary * event.target.value();
        this.summary = event.target.value();
        this.isMul = false;
        console.log(summary, res);
       }

       else if(this.isDiv == true){
        this.res = summary / event.target.value();
        this.summary = event.target.value();
        this.isDiv = false;
        console.log(summary, res);
       }
       else{
        this.oldSummay = event.target.value();
        console.log(summary, res);
    }
    }

     opHandler(event){
        let op= event.target.dataset.name;
        if(op == 'ADD'){
            isAdd = true;
            console.log('button :', op )
        }

        else if(op == 'SUB'){
            isSub= true;
            console.log('button :', op )
        }
        else if(op == 'MUL'){
            isMul= true;
            console.log('button :', op )
        }
        else if(op == 'DIV'){
            isDiv = true;
            console.log('button :', op )
        }


     }
}