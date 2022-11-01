import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class ScreenOneAccount extends NavigationMixin(LightningElement) {


    navigateToNewAccountPage() {
        this[NavigationMixin.Navigate]({
            type: "standard__component",
            attributes: {
              componentName: "c__navigatetoNewAccountAura"
            }
          });
    }


    navigateToExisitngAccountPage() {
        let cmpDef = {
            componentDef: "c:navigateToExistingAccount"
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