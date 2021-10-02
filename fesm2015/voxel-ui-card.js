import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, HostBinding, NgModule } from '@angular/core';

class CardComponent {
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

class CardModule {
}
CardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: CardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: CardModule, declarations: [CardComponent], exports: [CardComponent] });
CardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: CardModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: CardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CardComponent
                    ],
                    imports: [],
                    exports: [
                        CardComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of card
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CardComponent, CardModule };
//# sourceMappingURL=voxel-ui-card.js.map
