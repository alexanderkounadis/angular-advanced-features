import { FormGroup } from '@angular/forms';
import { EventEmitter, Type } from '@angular/core';
import { Observable } from 'rxjs';


export abstract class WizardItem<T, Z> {
    public nextEvent: EventEmitter<any> = new EventEmitter();
    public previousEvent: EventEmitter<any> = new EventEmitter();

    private wizardForm: FormGroup = null;

    public model: Z;
    public showNavigationPanel: boolean = true;
    public isWizardDirty: boolean = false;

    public progress(): Observable<T> {
        return this.next();
    }

    private get IsWizardDirty() {
        return this.isWizardDirty;
    }

    private set IsWizardDirty(value: boolean){
        this.isWizardDirty = value;
    }

    get WizardForm(): FormGroup{
        return this.wizardForm;
    }

    set WizardForm(value: FormGroup) {
        if(!this.wizardForm && value) {
            this.wizardForm = value;
            this.wizardForm.valueChanges.subscribe(()=>{
                if(!this.IsWizardDirty) {
                    this.IsWizardDirty = true;
                }
            });
        }
    }

    public abstract next(data?: any):Observable<T>;
    public abstract previous(): Observable<T>;
    public abstract isValid(): boolean;

    constructor(public component: Type<any>, public data: any = {}){}
}
