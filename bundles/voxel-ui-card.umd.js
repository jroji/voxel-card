(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@voxel-ui/card', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["voxel-ui"] = global["voxel-ui"] || {}, global["voxel-ui"].card = {}), global.ng.core));
})(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var CardComponent = /** @class */ (function () {
        function CardComponent() {
            /** Reflects the provided value on is-featured attribute */
            this.isFeatured = false;
        }
        CardComponent.prototype.ngOnInit = function () {
            var _a;
            if (!this.alt) {
                this.alt = (_a = this.title) !== null && _a !== void 0 ? _a : 'Card image';
            }
        };
        return CardComponent;
    }());
    CardComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: CardComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CardComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: CardComponent, selector: "voxel-card", inputs: { title: "title", description: "description", image: "image", alt: "alt", isFeatured: "isFeatured" }, host: { properties: { "attr.is-featured": "this.isFeatured" } }, ngImport: i0__namespace, template: "<img *ngIf=\"image\" [src]=\"image\" [alt]=\"alt\">\n<h1 class=\"title\" *ngIf=\"title\"> {{ title }} </h1>\n<p class=\"description\" *ngIf=\"description\" data-testId=\"description\"> {{ description }} </p>", styles: [":host{--cat-card-background: var(--ds-layout-bright, #F2F2F2);--cat-card-spacing: var(--ds-spacing, 8px);--cat-card-title-size: var(--ds-title-text-size, 18px);--cat-card-description-size: var(--ds-text-size, 14px);--cat-card-text-color: var(--ds-text-color, #595959);--cat-card-image-height: 300px;background:var(--cat-card-background);color:var(--cat-card-text-color);padding:calc(var(--cat-card-spacing) * 2);display:flex;flex-direction:column;box-shadow:0 4px 4px #00000040}:host([is-featured=\"true\"]){background:#FFE588}:host-context([theme=\"dark\"]) :host{background:#26261F;color:#fff}h1,p{margin:0}.title{margin:var(--cat-card-spacing) 0 0;font-size:var(--cat-card-title-size)}.description{font-size:var(--cat-card-description-size);margin:calc(2 * var(--cat-card-spacing)) 0 0}.picture{width:100%;height:var(--cat-card-image-height);-o-object-fit:cover;object-fit:cover}\n"], changeDetection: i0__namespace.ChangeDetectionStrategy.OnPush });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: CardComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'voxel-card',
                        templateUrl: './card.component.html',
                        styleUrls: ['./card.component.css'],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], propDecorators: { title: [{
                    type: i0.Input
                }], description: [{
                    type: i0.Input
                }], image: [{
                    type: i0.Input
                }], alt: [{
                    type: i0.Input
                }], isFeatured: [{
                    type: i0.HostBinding,
                    args: ['attr.is-featured']
                }, {
                    type: i0.Input
                }] } });

    var CardModule = /** @class */ (function () {
        function CardModule() {
        }
        return CardModule;
    }());
    CardModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: CardModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CardModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: CardModule, declarations: [CardComponent], exports: [CardComponent] });
    CardModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: CardModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: CardModule, decorators: [{
                type: i0.NgModule,
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

    exports.CardComponent = CardComponent;
    exports.CardModule = CardModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=voxel-ui-card.umd.js.map
