import { LightningElement, api, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'; 
export default class ScreenTwoContact extends NavigationMixin(LightningElement) {
    @api recordId;
  
   
    navigateToNewContactPage() {
        let cmpDef = {
            componentDef: "c:navigateToNewContact",
            attributes : {
                accountRecordId: this.recordId
            }
        };
        let encodeDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url: "/one/one.app#" + encodeDef  
            }
        });

    }

    navigateToExisitngContactPage() {
        let cmpDef = {
            componentDef: "c:navigateToExistingContact",
            attributes : {
                accountRecordId: this.recordId
            }
        };
        let encodeDef = btoa(JSON.stringify(cmpDef));
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url: "/one/one.app#" + encodeDef  
            }
        });
    }
}