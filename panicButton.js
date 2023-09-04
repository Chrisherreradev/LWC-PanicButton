import { LightningElement, api, track } from 'lwc';

export default class MyComponent extends LightningElement {
    @api showLoader = false;
    @api showAlert = false;
    @api leftPickerDisabled = false;
    @track rightPickerDisabled = true;

    handleLeftPickerClick() {
        this.showLoader = true;
        this.leftPickerDisabled = true;
        this.rightPickerDisabled = true;

        setTimeout(() => {
            this.showLoader = false;
            this.showAlert = true;
            this.leftPickerDisabled = true;
            this.rightPickerDisabled = false;
        }, 2000);
    }

    handleRightPickerClick() {
        this.showLoader = true;      
        this.leftPickerDisabled = false;
        this.rightPickerDisabled = true;   
        
        setTimeout(() => {
            this.showLoader = false;
            this.showAlert = false;
            this.leftPickerDisabled = false;
            this.rightPickerDisabled = true;
        }, 1000);
    }

     // Restablecer ambos visual pickers al cargar la página o reiniciar
     connectedCallback() {
        this.leftPickerDisabled = false;
        this.rightPickerDisabled = true;
    }
}
