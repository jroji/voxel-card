import { ChangeDetectionStrategy, Component, HostBinding, Input } from "@angular/core";
import * as i0 from "@angular/core";
export class CardComponent {
    constructor() {
        /** Reflects the provided value on is-featured attribute */
        this.isFeatured = false;
    }
    ngOnInit() {
        var _a;
        if (!this.alt) {
            this.alt = (_a = this.title) !== null && _a !== void 0 ? _a : 'Card image';
        }
    }
}
CardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: CardComponent, selector: "voxel-card", inputs: { title: "title", description: "description", image: "image", alt: "alt", isFeatured: "isFeatured" }, host: { properties: { "attr.is-featured": "this.isFeatured" } }, ngImport: i0, template: "<img *ngIf=\"image\" [src]=\"image\" [alt]=\"alt\">\n<h1 class=\"title\" *ngIf=\"title\"> {{ title }} </h1>\n<p class=\"description\" *ngIf=\"description\" data-testId=\"description\"> {{ description }} </p>", styles: [":host{--cat-card-background: var(--ds-layout-bright, #F2F2F2);--cat-card-spacing: var(--ds-spacing, 8px);--cat-card-title-size: var(--ds-title-text-size, 18px);--cat-card-description-size: var(--ds-text-size, 14px);--cat-card-text-color: var(--ds-text-color, #595959);--cat-card-image-height: 300px;background:var(--cat-card-background);color:var(--cat-card-text-color);padding:calc(var(--cat-card-spacing) * 2);display:flex;flex-direction:column;box-shadow:0 4px 4px #00000040}:host([is-featured=\"true\"]){background:#FFE588}:host-context([theme=\"dark\"]) :host{background:#26261F;color:#fff}h1,p{margin:0}.title{margin:var(--cat-card-spacing) 0 0;font-size:var(--cat-card-title-size)}.description{font-size:var(--cat-card-description-size);margin:calc(2 * var(--cat-card-spacing)) 0 0}.picture{width:100%;height:var(--cat-card-image-height);-o-object-fit:cover;object-fit:cover}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'voxel-card',
                    templateUrl: './card.component.html',
                    styleUrls: ['./card.component.css'],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], propDecorators: { title: [{
                type: Input
            }], description: [{
                type: Input
            }], image: [{
                type: Input
            }], alt: [{
                type: Input
            }], isFeatured: [{
                type: HostBinding,
                args: ['attr.is-featured']
            }, {
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jYXJkL3NyYy9saWIvY2FyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jYXJkL3NyYy9saWIvY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBUS9GLE1BQU0sT0FBTyxhQUFhO0lBTjFCO1FBZUUsMkRBQTJEO1FBQ1YsZUFBVSxHQUFZLEtBQUssQ0FBQztLQU85RTtJQUxRLFFBQVE7O1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDYixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQUEsSUFBSSxDQUFDLEtBQUssbUNBQUksWUFBWSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7MEdBaEJVLGFBQWE7OEZBQWIsYUFBYSxpT0NSMUIsaU5BRTRGOzJGRE0vRSxhQUFhO2tCQU56QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixXQUFXLEVBQUUsdUJBQXVCO29CQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDbkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzhCQUdpQixLQUFLO3NCQUFwQixLQUFLO2dCQUVVLFdBQVc7c0JBQTFCLEtBQUs7Z0JBRVUsS0FBSztzQkFBcEIsS0FBSztnQkFFVSxHQUFHO3NCQUFsQixLQUFLO2dCQUUyQyxVQUFVO3NCQUExRCxXQUFXO3VCQUFDLGtCQUFrQjs7c0JBQUcsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndm94ZWwtY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC5jb21wb25lbnQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKiogVGV4dCB3aXRoIHRoZSBjYXJkIHRpdGxlICovXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZT86IHN0cmluZztcbiAgLyoqIFRleHQgd2l0aCB0aGUgY2FyZCBkZXNjcmlwdGlvbiAqL1xuICBASW5wdXQoKSBwdWJsaWMgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8qKiBJbWFnZSByb3V0ZSB0byBiZSBzaG93biBpbiB0aGUgY2FyZCBoZWFkZXIgKi9cbiAgQElucHV0KCkgcHVibGljIGltYWdlPzogc3RyaW5nO1xuICAvKiogSW1hZ2UgYWx0ZXJuYXRpdmUgdGV4dC4gVGFrZXMgdGl0bGUgYXMgZGVmYXVsdCBpZiBub3QgcHJvdmlkZWQgKi9cbiAgQElucHV0KCkgcHVibGljIGFsdD86IHN0cmluZztcbiAgLyoqIFJlZmxlY3RzIHRoZSBwcm92aWRlZCB2YWx1ZSBvbiBpcy1mZWF0dXJlZCBhdHRyaWJ1dGUgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmlzLWZlYXR1cmVkJykgQElucHV0KCkgcHVibGljIGlzRmVhdHVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFsdCkge1xuICAgICAgdGhpcy5hbHQgPSB0aGlzLnRpdGxlID8/ICdDYXJkIGltYWdlJztcbiAgICB9XG4gIH1cbn0iLCI8aW1nICpuZ0lmPVwiaW1hZ2VcIiBbc3JjXT1cImltYWdlXCIgW2FsdF09XCJhbHRcIj5cbjxoMSBjbGFzcz1cInRpdGxlXCIgKm5nSWY9XCJ0aXRsZVwiPiB7eyB0aXRsZSB9fSA8L2gxPlxuPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiICpuZ0lmPVwiZGVzY3JpcHRpb25cIiBkYXRhLXRlc3RJZD1cImRlc2NyaXB0aW9uXCI+IHt7IGRlc2NyaXB0aW9uIH19IDwvcD4iXX0=