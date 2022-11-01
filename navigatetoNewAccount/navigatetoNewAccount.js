import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class NavigatetoNewAccount extends NavigationMixin(LightningElement) {
    @api objectApiName="Account";
    @api accountRecordId;
    fields = [NAME_FIELD, REVENUE_FIELD];

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Account created',
            message: 'Record ID: ' + event.detail.id ,
            variant: 'success'    
        });
        this.dispatchEvent(evt);
        this.accountRecordId= event.detail.id;
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