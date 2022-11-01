import { LightningElement, api, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'; 
import existingContact from '@salesforce/apex/NavigateToExistingContact.existingContact';

export default class NavigateToExistingContact extends NavigationMixin(LightningElement) {
    @api accountRecordId;
    @api contactId;
    
    @track accOption=[];

    get options(){
        return this.accOption;
    }
    connectedCallback(){
        console.log('accountRecordId is',this.accountRecordId );
        existingContact({ accountRecordId : this.accountRecordId })
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
                    this.contactId = event.detail.value;
                    this.navigateToNewOpportunityPage();
                   }
                   navigateToNewOpportunityPage() {
                    let cmpDef = {
                        componentDef: "c:screenThreeOpportunity",
                        attributes:{
                            recordAccId : this.accountRecordId,
                            recordConId : this.contactId
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