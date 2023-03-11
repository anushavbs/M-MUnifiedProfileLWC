import { LightningElement } from 'lwc';

export default class Lwcunifiedprofilelookup extends LightningElement {
    data = false
    isLoading = false
    ownershipinfo = false
    customerexp = false
    custmertouchpts = false
    isinput = false
    fetchdata(e) {
        this.makedatatrue()
    }

    handleinputchange(e) {

    }

    makedatatrue() {
        this.isLoading = true;
        this.data = true
        this.isLoading = false;
    }
    handleOwnershipInfo(e) {
        this.ownershipinfo = true
    }
    closeModal(e) {
        this.ownershipinfo = false
        this.customerexp = false
        this.custmertouchpts = false
    }
    handleCustomerExp(e) {
        this.customerexp = true
    }
    handleleadshource(e) {
        
    }
    handleCustmertouchpts(e) {
        this.custmertouchpts = true
    }
    handleenquirytype(e){}

}