import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class ScreenThreeOpportunity extends NavigationMixin(LightningElement) {
    @api opportunityId;
    @api recordAccId;
    @api recordConId;
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Opportunity is created',
            message: 'Record ID: ' + event.detail.id ,
            variant: 'success'    
        });
        this.dispatchEvent(evt);
        this.opportunityId= event.detail.id;
        this.navigateToWebPage();
    }

    navigateToWebPage() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": "/lightning/r/OpportunityLineItem/"+this.opportunityId+"/related/OpportunityLineItems/view"
            }
        });
    }
}