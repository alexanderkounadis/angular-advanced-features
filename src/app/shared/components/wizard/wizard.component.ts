import { WizardFooter } from './wizard-footer';
import { WizardItem } from './wizard-item';
import { WizardFooterRefDirective } from './../../directives/wizard-ref/wizard-footer-ref.directive';
import { WizardRefDirective } from './../../directives/wizard-ref/wizard-ref.directive';
import { EventsService, EventTypeEnum } from './../../events.service';
import { Component, OnInit, ComponentFactoryResolver, Input, ViewChild, Type } from '@angular/core';
import { Observable, PartialObserver } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

export enum StepDirection {
  None = 0,
  Forward = 1,
  Backward = 2
}

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  @Input() showProgressPanel: boolean = true;
  @ViewChild(WizardRefDirective, { static: false }) wizardRef: WizardRefDirective;
  @ViewChild(WizardFooterRefDirective, { static: false }) wizardFooterRef: WizardRefDirective;

  public currentItem: WizardItem<any, any>;
  private footer: WizardFooter;
  public currentIndex: number;
  public lastIndex: number;
  public mdClass: string;
  private wizardItems: Type<any>[] = new Array<Type<any>>();
  private wizardFooter: Type<any>;
  public wizardTitles: string[] = new Array<string>();
  public model: any;
  public inProcess: boolean = false;
  public transactionTitle: string = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private eventsService: EventsService) { }
  public addItem(stepType: Type<any>, title: string, isLast: boolean = false, data: object = {}) {
    this.wizardItems.push(stepType);
    this.wizardTitles.push(title);
    if (isLast) {
      this.lastIndex = this.wizardItems.length - 1;
      this.loadComponent(0);
    }
  }

  loadComponent(index: number) {
    const componentItemFactory = this.componentFactoryResolver.resolveComponentFactory(this.wizardItems[index]);
    if (this.currentItem) {
      this.currentItem.nextEvent.unsubscribe();
      this.currentItem.previousEvent.unsubscribe();
    }
    const viewContainerRef = this.wizardRef.viewContainerRef;
    viewContainerRef.clear();

    this.currentItem = <WizardItem<any, any>>(viewContainerRef.createComponent(componentItemFactory).instance);
    this.currentItem.nextEvent.subscribe(() => {
      this.next();
    });
    this.currentItem.previousEvent.subscribe(() => {
      this.previous();
    });

    // Apply shared model
    this.currentItem.model = this.model;
    this.currentIndex = index;

    if (this.footer) {
      // check if there is a footer
      this.footer.currentIndex = this.currentIndex;
    }

    const i = 12 * ((index + 1) / (this.lastIndex + 1));
    this.mdClass = 'col-md-' + i;
  }

  private onNavigating(observable: Observable<any>, observer: PartialObserver<any>): void {
    this.inProcess = true;
    observable.pipe(finalize(() => {
      this.inProcess = null;
    })
    )
      .subscribe(observer);
  }

  public previous() {
    this.onNavigating(this.currentItem.previous(), {
      next: result => {
        if (this.currentIndex === this.lastIndex) {
          this.loadComponent(0);
        } else {
          this.loadComponent(--this.currentIndex);
        }
      }, error: (error) => {
        this.eventsService.broadcast(error);
      }
    });
  }

  public clearWizardItems() {
    this.wizardItems = [];
    this.wizardTitles = [];
  }

  public setModel(model: any){
    this.model = model;
  }

  public addFooter(footerType: Type<any>): any{
    this.wizardFooter = footerType;
    const componentFooterFactory = this.componentFactoryResolver.resolveComponentFactory(this.wizardFooter);
    const viewContainerRef = this.wizardFooterRef.viewContainerRef;
    viewContainerRef.clear();
    this.footer = <WizardFooter>viewContainerRef.createComponent(componentFooterFactory).instance;
  }

  public setTransactionTitle(value: string): any {
    if(!isNullOrUndefined(value)){
      this.transactionTitle = value;
    }
  }

  public next() {
    this.onNavigating(this.currentItem.progress(), {
      next: result => {
        if (result && result.value !== false) {
          this.loadComponent(++this.currentIndex);
        }
      }, error: error => {
        if (!error) {
          this.eventsService.broadcast(error);
        }
      }
    });
  }

  ngOnInit() { }

}
