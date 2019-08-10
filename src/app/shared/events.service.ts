import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum EventTypeEnum {
  UserMessageChanged = 0,
  XHRRequestStarted = 1,
  XHRRequestEnded = 2,
  BusinessError = 3,
  SystemError = 4
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private listeners: Array<Array<any>> = new Array();
  private eventsSubjects: Array<BehaviorSubject<object>> = new Array();

constructor() { 
  for (let i=0; i < Object.keys(EventTypeEnum).length / 2; i++) {
    this.eventsSubjects[i] = new BehaviorSubject<any>(null);
    this.eventsSubjects[i].subscribe((eventObject: any) => {
      if (eventObject && eventObject.listeners[eventObject.eventType]) {
        for(const listener of eventObject.listeners[eventObject.eventType]) {
          listener(...eventObject.args);
        }
      }
    });
  }
}

on(eventType: EventTypeEnum, listener: Function) {
  if(!this.listeners[eventType]) {
    this.listeners[eventType] = new Array();
  }
  this.listeners[eventType].push(listener);
}

off(eventType: EventTypeEnum, listener: Function) {
  this.listeners[eventType] = this.listeners[eventType].filter(x=>x!==listener);
}

broadcast(eventType: EventTypeEnum, ...args){
  this.eventsSubjects[eventType].next({
    eventType: eventType,
    args: args,
    listeners: this.listeners
  });
}
}
