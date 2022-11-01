import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToNewContact extends NavigationMixin(LightningElement) {
    @api objectApiName="Contact";
    @api accountRecordId;
    @api contactId;

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Contact is created',
            message: 'Record ID: ' + event.detail.id ,
            variant: 'success'    
        });
        this.dispatchEvent(evt);
        this.contactId= event.detail.id;
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