import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export const OverviewThresholdResolution = 1280;

@Injectable({
    providedIn: 'root'
})
export class WindowInspector {
    private windowTarget: BehaviorSubject<Window>;

    public getWindow(): Observable<Window> {
        return this.windowTarget.asObservable();
    }
    constructor(private eventManager: EventManager){
        this.windowTarget = new BehaviorSubject<Window>(window);
        this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
    }

    private onResize(event: UIEvent){
        this.windowTarget.next(<Window>event.target);
    }
}
