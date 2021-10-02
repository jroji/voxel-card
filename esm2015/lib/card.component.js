import { ChangeDetectionStrategy, Component, HostBinding, Input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 *
 * [🌅 View on Figma](https://www.figma.com/file/PAZbL8SeNxl6yauLCv56jT/Ecommerce?node-id=4%3A316)
 *
 * Card component shows an image, a title and a description providing
 * the correct inputs.
 *
 * ## 🖌 Style Customization
 *
 * |  name                       | value   |
 * |-----------------------------|---------|
 * | --cat-card-background       | #F2F2F2 |
 * | --cat-card-spacing          | 8px     |
 * | --cat-card-title-size       | 18px    |
 * | --cat-card-description-size | 14px    |
 * | --cat-card-text-color       | #595959 |
 * | --cat-card-image-height     | 300px   |
 *
 * <voxel-card
 *    style="max-width: 320px"
 *    [image]="image"
 *    [title]="title"
 *    [description]="description"
 *    alt="Image alt"
 * ></voxel-card
*/
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
CardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: CardComponent, selector: "voxel-card", inputs: { title: "title", description: "description", image: "image", alt: "alt", isFeatured: "isFeatured" }, host: { properties: { "attr.is-featured": "this.isFeatured" } }, ngImport: i0, template: "<img *ngIf=\"image\" [src]=\"image\" [alt]=\"alt\">\n<h1 class=\"title\" *ngIf=\"title\"> {{ title }} </h1>\n<p class=\"description\" *ngIf=\"description\" data-testId=\"description\"> {{ description }} </p>", styles: [":host{--cat-card-background: var(--ds-layout-bright, #F2F2F2);--cat-card-spacing: var(--ds-spacing, 8px);--cat-card-title-size: var(--ds-title-text-size, 18px);--cat-card-description-size: var(--ds-text-size, 14px);--cat-card-text-color: var(--ds-text-color, #595959);--cat-card-image-height: 300px;background:var(--cat-card-background);color:var(--cat-card-text-color);padding:calc(var(--cat-card-spacing) * 2);display:flex;flex-direction:column;box-shadow:0 4px 4px #00000040}:host([is-featured=\"true\"]){background:#FFE588}:host-context([theme=\"dark\"]) :host{background:#26261F;color:#fff}h1,p{margin:0}.title{margin:var(--cat-card-spacing) 0 0;font-size:var(--cat-card-title-size)}.description{font-size:var(--cat-card-description-size);margin:calc(2 * var(--cat-card-spacing)) 0 0}.picture{width:100%;height:var(--cat-card-image-height);-o-object-fit:cover;object-fit:cover}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jYXJkL3NyYy9saWIvY2FyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jYXJkL3NyYy9saWIvY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQUUvRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXlCRTtBQU9GLE1BQU0sT0FBTyxhQUFhO0lBTjFCO1FBZUUsMkRBQTJEO1FBQ1YsZUFBVSxHQUFZLEtBQUssQ0FBQztLQU85RTtJQUxRLFFBQVE7O1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDYixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQUEsSUFBSSxDQUFDLEtBQUssbUNBQUksWUFBWSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7MEdBaEJVLGFBQWE7OEZBQWIsYUFBYSxpT0NsQzFCLGlOQUU0RjsyRkRnQy9FLGFBQWE7a0JBTnpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFdBQVcsRUFBRSx1QkFBdUI7b0JBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUNuQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OEJBR2lCLEtBQUs7c0JBQXBCLEtBQUs7Z0JBRVUsV0FBVztzQkFBMUIsS0FBSztnQkFFVSxLQUFLO3NCQUFwQixLQUFLO2dCQUVVLEdBQUc7c0JBQWxCLEtBQUs7Z0JBRTJDLFVBQVU7c0JBQTFELFdBQVc7dUJBQUMsa0JBQWtCOztzQkFBRyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG4vKipcbiAqXG4gKiBb8J+MhSBWaWV3IG9uIEZpZ21hXShodHRwczovL3d3dy5maWdtYS5jb20vZmlsZS9QQVpiTDhTZU54bDZ5YXVMQ3Y1NmpUL0Vjb21tZXJjZT9ub2RlLWlkPTQlM0EzMTYpXG4gKlxuICogQ2FyZCBjb21wb25lbnQgc2hvd3MgYW4gaW1hZ2UsIGEgdGl0bGUgYW5kIGEgZGVzY3JpcHRpb24gcHJvdmlkaW5nXG4gKiB0aGUgY29ycmVjdCBpbnB1dHMuXG4gKlxuICogIyMg8J+WjCBTdHlsZSBDdXN0b21pemF0aW9uXG4gKlxuICogfCAgbmFtZSAgICAgICAgICAgICAgICAgICAgICAgfCB2YWx1ZSAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18XG4gKiB8IC0tY2F0LWNhcmQtYmFja2dyb3VuZCAgICAgICB8ICNGMkYyRjIgfFxuICogfCAtLWNhdC1jYXJkLXNwYWNpbmcgICAgICAgICAgfCA4cHggICAgIHxcbiAqIHwgLS1jYXQtY2FyZC10aXRsZS1zaXplICAgICAgIHwgMThweCAgICB8XG4gKiB8IC0tY2F0LWNhcmQtZGVzY3JpcHRpb24tc2l6ZSB8IDE0cHggICAgfFxuICogfCAtLWNhdC1jYXJkLXRleHQtY29sb3IgICAgICAgfCAjNTk1OTU5IHxcbiAqIHwgLS1jYXQtY2FyZC1pbWFnZS1oZWlnaHQgICAgIHwgMzAwcHggICB8XG4gKlxuICogPHZveGVsLWNhcmRcbiAqICAgIHN0eWxlPVwibWF4LXdpZHRoOiAzMjBweFwiXG4gKiAgICBbaW1hZ2VdPVwiaW1hZ2VcIlxuICogICAgW3RpdGxlXT1cInRpdGxlXCJcbiAqICAgIFtkZXNjcmlwdGlvbl09XCJkZXNjcmlwdGlvblwiXG4gKiAgICBhbHQ9XCJJbWFnZSBhbHRcIlxuICogPjwvdm94ZWwtY2FyZFxuKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZveGVsLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQuY29tcG9uZW50LmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqIFRleHQgd2l0aCB0aGUgY2FyZCB0aXRsZSAqL1xuICBASW5wdXQoKSBwdWJsaWMgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKiBUZXh0IHdpdGggdGhlIGNhcmQgZGVzY3JpcHRpb24gKi9cbiAgQElucHV0KCkgcHVibGljIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKiogSW1hZ2Ugcm91dGUgdG8gYmUgc2hvd24gaW4gdGhlIGNhcmQgaGVhZGVyICovXG4gIEBJbnB1dCgpIHB1YmxpYyBpbWFnZT86IHN0cmluZztcbiAgLyoqIEltYWdlIGFsdGVybmF0aXZlIHRleHQuIFRha2VzIHRpdGxlIGFzIGRlZmF1bHQgaWYgbm90IHByb3ZpZGVkICovXG4gIEBJbnB1dCgpIHB1YmxpYyBhbHQ/OiBzdHJpbmc7XG4gIC8qKiBSZWZsZWN0cyB0aGUgcHJvdmlkZWQgdmFsdWUgb24gaXMtZmVhdHVyZWQgYXR0cmlidXRlICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5pcy1mZWF0dXJlZCcpIEBJbnB1dCgpIHB1YmxpYyBpc0ZlYXR1cmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hbHQpIHtcbiAgICAgIHRoaXMuYWx0ID0gdGhpcy50aXRsZSA/PyAnQ2FyZCBpbWFnZSc7XG4gICAgfVxuICB9XG59IiwiPGltZyAqbmdJZj1cImltYWdlXCIgW3NyY109XCJpbWFnZVwiIFthbHRdPVwiYWx0XCI+XG48aDEgY2xhc3M9XCJ0aXRsZVwiICpuZ0lmPVwidGl0bGVcIj4ge3sgdGl0bGUgfX0gPC9oMT5cbjxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIiAqbmdJZj1cImRlc2NyaXB0aW9uXCIgZGF0YS10ZXN0SWQ9XCJkZXNjcmlwdGlvblwiPiB7eyBkZXNjcmlwdGlvbiB9fSA8L3A+Il19