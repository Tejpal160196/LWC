import { LightningElement,track,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'; 
import existingAccount from '@salesforce/apex/NavigateToExistingAccount.existingAccount';

export default class LightningDatatableUsingLWC extends NavigationMixin(LightningElement) {
    value='';
    @api accountRecordId;
    @track accOption=[];

    get options(){
        return this.accOption;
    }

connectedCallback(){
    existingAccount ()
        .then(result =>{
                let arr = [];
                for(var i=0; i<result.length;i++){
                arr.push({
                        label : result[i].Name,
                        value : result[i].Id
                       })
                    }
                this.accOption = arr;    
                }) 
        .catch(error =>{
                this.error=error;
                }) 
            }
    onChangeHandler(event){
        this.accountRecordId = event.detail.value;
        this.navigateToNewContactPage();
       }

       navigateToNewContactPage() {
        let cmpDef = {
            componentDef: "c:screenTwoContact",
            attributes:{
                recordId:this.accountRecordId
            }
        };
        let encodeDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url: "/one/one.app#" + encodeDef  
            },
            
        });
    }
 
}