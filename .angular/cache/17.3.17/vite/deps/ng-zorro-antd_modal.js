import {
  NzI18nService
} from "./chunk-S4ZEFHRH.js";
import {
  NzButtonComponent,
  NzButtonModule
} from "./chunk-E7BESWDZ.js";
import {
  NzWaveDirective
} from "./chunk-SW22VAIQ.js";
import {
  NzTransitionPatchDirective
} from "./chunk-AHHI3LRL.js";
import {
  overlayZIndexSetter
} from "./chunk-NRLF7FKY.js";
import {
  BasePortalOutlet,
  CdkPortalOutlet,
  ComponentPortal,
  Overlay,
  OverlayConfig,
  OverlayRef,
  PortalModule,
  TemplatePortal,
  reqAnimFrame
} from "./chunk-FOBW4AEC.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-NROO6RSP.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-ME6SCOT7.js";
import "./chunk-5QBFNWJX.js";
import {
  NzConfigService
} from "./chunk-LSRBXSW2.js";
import "./chunk-5BZR2V47.js";
import {
  InputBoolean,
  getElementOffset,
  isNil,
  isNotNil,
  isNumberFinite,
  isPromise,
  sum,
  toDecimal,
  warn
} from "./chunk-VIDVLXHN.js";
import {
  CdkDrag,
  CdkDragHandle
} from "./chunk-E4WTHUF6.js";
import {
  FocusTrapFactory
} from "./chunk-A772IIPX.js";
import {
  ESCAPE,
  hasModifierKey
} from "./chunk-MIDMA3DW.js";
import {
  Directionality
} from "./chunk-YGXAJDFF.js";
import "./chunk-DK2OSQZY.js";
import "./chunk-D3VVDDLJ.js";
import "./chunk-MP52YHOT.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-43S5AF5U.js";
import {
  DomSanitizer
} from "./chunk-7PTO3OCS.js";
import "./chunk-BT5QD2DA.js";
import {
  DOCUMENT,
  NgClass,
  NgStyle
} from "./chunk-4AJHPEBT.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Pipe,
  Renderer2,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-DIXTE7KL.js";
import {
  Subject,
  __decorate,
  defer,
  filter,
  fromEvent,
  startWith,
  take,
  takeUntil
} from "./chunk-IYAEADMW.js";
import {
  __async,
  __objRest,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-pipes.mjs
var NzAggregatePipe = class _NzAggregatePipe {
  transform(value, method) {
    if (!Array.isArray(value)) {
      return value;
    }
    if (value.length === 0) {
      return void 0;
    }
    switch (method) {
      case "sum":
        return sum(value);
      case "avg":
        return sum(value) / value.length;
      case "max":
        return Math.max(...value);
      case "min":
        return Math.min(...value);
      default:
        throw Error(`Invalid Pipe Arguments: Aggregate pipe doesn't support this type`);
    }
  }
  static {
    this.ɵfac = function NzAggregatePipe_Factory(t) {
      return new (t || _NzAggregatePipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "nzAggregate",
      type: _NzAggregatePipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAggregatePipe, [{
    type: Pipe,
    args: [{
      name: "nzAggregate",
      standalone: true
    }]
  }], null, null);
})();
var NzBytesPipe = class _NzBytesPipe {
  static {
    this.formats = {
      B: {
        max: 1024
      },
      kB: {
        max: Math.pow(1024, 2),
        prev: "B"
      },
      KB: {
        max: Math.pow(1024, 2),
        prev: "B"
      },
      MB: {
        max: Math.pow(1024, 3),
        prev: "kB"
      },
      GB: {
        max: Math.pow(1024, 4),
        prev: "MB"
      },
      TB: {
        max: Number.MAX_SAFE_INTEGER,
        prev: "GB"
      }
    };
  }
  transform(input, decimal = 0, from = "B", to) {
    if (!(isNumberFinite(input) && isNumberFinite(decimal) && decimal % 1 === 0 && decimal >= 0)) {
      return input;
    }
    let bytes = input;
    let unit = from;
    while (unit !== "B") {
      bytes *= 1024;
      unit = _NzBytesPipe.formats[unit].prev;
    }
    if (to) {
      const format = _NzBytesPipe.formats[to];
      const result = toDecimal(_NzBytesPipe.calculateResult(format, bytes), decimal);
      return _NzBytesPipe.formatResult(result, to);
    }
    for (const key in _NzBytesPipe.formats) {
      if (_NzBytesPipe.formats.hasOwnProperty(key)) {
        const format = _NzBytesPipe.formats[key];
        if (bytes < format.max) {
          const result = toDecimal(_NzBytesPipe.calculateResult(format, bytes), decimal);
          return _NzBytesPipe.formatResult(result, key);
        }
      }
    }
  }
  static formatResult(result, unit) {
    return `${result} ${unit}`;
  }
  static calculateResult(format, bytes) {
    const prev = format.prev ? _NzBytesPipe.formats[format.prev] : void 0;
    return prev ? bytes / prev.max : bytes;
  }
  static {
    this.ɵfac = function NzBytesPipe_Factory(t) {
      return new (t || _NzBytesPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "nzBytes",
      type: _NzBytesPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBytesPipe, [{
    type: Pipe,
    args: [{
      name: "nzBytes",
      standalone: true
    }]
  }], null, null);
})();
var NzToCssUnitPipe = class _NzToCssUnitPipe {
  transform(value, defaultUnit = "px") {
    return typeof value === "number" ? `${value}${defaultUnit}` : value;
  }
  static {
    this.ɵfac = function NzToCssUnitPipe_Factory(t) {
      return new (t || _NzToCssUnitPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "nzToCssUnit",
      type: _NzToCssUnitPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzToCssUnitPipe, [{
    type: Pipe,
    args: [{
      name: "nzToCssUnit",
      standalone: true
    }]
  }], null, null);
})();
var NzEllipsisPipe = class _NzEllipsisPipe {
  transform(value, length, suffix = "") {
    if (typeof value !== "string") {
      return value;
    }
    const len = typeof length === "undefined" ? value.length : length;
    if (value.length <= len) {
      return value;
    }
    return value.substring(0, len) + suffix;
  }
  static {
    this.ɵfac = function NzEllipsisPipe_Factory(t) {
      return new (t || _NzEllipsisPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "nzEllipsis",
      type: _NzEllipsisPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEllipsisPipe, [{
    type: Pipe,
    args: [{
      name: "nzEllipsis",
      standalone: true
    }]
  }], null, null);
})();
var NzSafeNullPipe = class _NzSafeNullPipe {
  transform(value, replace = "") {
    if (isNil(value)) {
      return replace;
    }
    return value;
  }
  static {
    this.ɵfac = function NzSafeNullPipe_Factory(t) {
      return new (t || _NzSafeNullPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "nzSafeNull",
      type: _NzSafeNullPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSafeNullPipe, [{
    type: Pipe,
    args: [{
      name: "nzSafeNull",
      standalone: true
    }]
  }], null, null);
})();
var NzSanitizerPipe = class _NzSanitizerPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value, type = "html") {
    switch (type) {
      case "html":
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case "style":
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case "url":
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case "resourceUrl":
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Invalid safe type specified`);
    }
  }
  static {
    this.ɵfac = function NzSanitizerPipe_Factory(t) {
      return new (t || _NzSanitizerPipe)(ɵɵdirectiveInject(DomSanitizer, 16));
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "nzSanitizer",
      type: _NzSanitizerPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSanitizerPipe, [{
    type: Pipe,
    args: [{
      name: "nzSanitizer",
      standalone: true
    }]
  }], () => [{
    type: DomSanitizer
  }], null);
})();
var NzTrimPipe = class _NzTrimPipe {
  // TODO(chensimeng) trimEnd, trimStart
  transform(text) {
    return text.trim();
  }
  static {
    this.ɵfac = function NzTrimPipe_Factory(t) {
      return new (t || _NzTrimPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "nzTrim",
      type: _NzTrimPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTrimPipe, [{
    type: Pipe,
    args: [{
      name: "nzTrim",
      standalone: true
    }]
  }], null, null);
})();
var pipes = [NzToCssUnitPipe, NzSafeNullPipe, NzSanitizerPipe, NzTrimPipe, NzBytesPipe, NzAggregatePipe, NzEllipsisPipe];
var NzPipesModule = class _NzPipesModule {
  static {
    this.ɵfac = function NzPipesModule_Factory(t) {
      return new (t || _NzPipesModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzPipesModule,
      imports: [NzToCssUnitPipe, NzSafeNullPipe, NzSanitizerPipe, NzTrimPipe, NzBytesPipe, NzAggregatePipe, NzEllipsisPipe],
      exports: [NzToCssUnitPipe, NzSafeNullPipe, NzSanitizerPipe, NzTrimPipe, NzBytesPipe, NzAggregatePipe, NzEllipsisPipe]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPipesModule, [{
    type: NgModule,
    args: [{
      imports: [pipes],
      exports: [pipes]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-modal.mjs
var _c0 = ["nz-modal-close", ""];
function NzModalCloseComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const closeIcon_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("nzType", closeIcon_r1);
  }
}
var _c1 = ["modalElement"];
function NzModalConfirmContainerComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 16);
    ɵɵlistener("click", function NzModalConfirmContainerComponent_Conditional_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onCloseClick());
    });
    ɵɵelementEnd();
  }
}
function NzModalConfirmContainerComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("innerHTML", ctx_r1.config.nzTitle, ɵɵsanitizeHtml);
  }
}
function NzModalConfirmContainerComponent_ng_template_12_Template(rf, ctx) {
}
function NzModalConfirmContainerComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r1.config.nzContent, ɵɵsanitizeHtml);
  }
}
function NzModalConfirmContainerComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function NzModalConfirmContainerComponent_Conditional_15_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onCancel());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzLoading", ctx_r1.config.nzCancelLoading)("disabled", ctx_r1.config.nzCancelDisabled);
    ɵɵattribute("cdkFocusInitial", ctx_r1.config.nzAutofocus === "cancel" || null);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.config.nzCancelText || ctx_r1.locale.cancelText, " ");
  }
}
function NzModalConfirmContainerComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 18);
    ɵɵlistener("click", function NzModalConfirmContainerComponent_Conditional_16_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOk());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzType", ctx_r1.config.nzOkType)("nzLoading", ctx_r1.config.nzOkLoading)("disabled", ctx_r1.config.nzOkDisabled)("nzDanger", ctx_r1.config.nzOkDanger);
    ɵɵattribute("cdkFocusInitial", ctx_r1.config.nzAutofocus === "ok" || null);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.config.nzOkText || ctx_r1.locale.okText, " ");
  }
}
var _c2 = ["nz-modal-footer", ""];
var _c3 = (a0, a1) => ({
  $implicit: a0,
  modalRef: a1
});
function NzModalFooterComponent_Conditional_0_ng_container_0_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function NzModalFooterComponent_Conditional_0_ng_container_0_Conditional_1_For_1_Template_button_click_0_listener() {
      const button_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.onButtonClick(button_r2));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const button_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵproperty("hidden", !ctx_r2.getButtonCallableProp(button_r2, "show"))("nzLoading", ctx_r2.getButtonCallableProp(button_r2, "loading"))("disabled", ctx_r2.getButtonCallableProp(button_r2, "disabled"))("nzType", button_r2.type)("nzDanger", button_r2.danger)("nzShape", button_r2.shape)("nzSize", button_r2.size)("nzGhost", button_r2.ghost);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", button_r2.label, " ");
  }
}
function NzModalFooterComponent_Conditional_0_ng_container_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzModalFooterComponent_Conditional_0_ng_container_0_Conditional_1_For_1_Template, 2, 9, "button", 1, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵrepeater(ctx_r2.buttons);
  }
}
function NzModalFooterComponent_Conditional_0_ng_container_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("innerHTML", ctx_r2.config.nzFooter, ɵɵsanitizeHtml);
  }
}
function NzModalFooterComponent_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzModalFooterComponent_Conditional_0_ng_container_0_Conditional_1_Template, 2, 0)(2, NzModalFooterComponent_Conditional_0_ng_container_0_Conditional_2_Template, 1, 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(1, ctx_r2.buttonsFooter ? 1 : 2);
  }
}
function NzModalFooterComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzModalFooterComponent_Conditional_0_ng_container_0_Template, 3, 1, "ng-container", 0);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r2.config.nzFooter)("nzStringTemplateOutletContext", ɵɵpureFunction2(2, _c3, ctx_r2.config.nzData, ctx_r2.modalRef));
  }
}
function NzModalFooterComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function NzModalFooterComponent_Conditional_1_Conditional_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onCancel());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("nzLoading", ctx_r2.config.nzCancelLoading)("disabled", ctx_r2.config.nzCancelDisabled);
    ɵɵattribute("cdkFocusInitial", ctx_r2.config.nzAutofocus === "cancel" || null);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.config.nzCancelText || ctx_r2.locale.cancelText, " ");
  }
}
function NzModalFooterComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function NzModalFooterComponent_Conditional_1_Conditional_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onOk());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("nzType", ctx_r2.config.nzOkType)("nzDanger", ctx_r2.config.nzOkDanger)("nzLoading", ctx_r2.config.nzOkLoading)("disabled", ctx_r2.config.nzOkDisabled);
    ɵɵattribute("cdkFocusInitial", ctx_r2.config.nzAutofocus === "ok" || null);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.config.nzOkText || ctx_r2.locale.okText, " ");
  }
}
function NzModalFooterComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzModalFooterComponent_Conditional_1_Conditional_0_Template, 2, 4, "button", 4)(1, NzModalFooterComponent_Conditional_1_Conditional_1_Template, 2, 6, "button", 5);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(0, ctx_r2.config.nzCancelText !== null ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(1, ctx_r2.config.nzOkText !== null ? 1 : -1);
  }
}
var _c4 = ["nz-modal-title", ""];
function NzModalTitleComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("innerHTML", ctx_r0.config.nzTitle, ɵɵsanitizeHtml);
  }
}
function NzModalContainerComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function NzModalContainerComponent_Conditional_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onCloseClick());
    });
    ɵɵelementEnd();
  }
}
function NzModalContainerComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("cursor", ctx_r1.config.nzDraggable ? "move" : "auto");
  }
}
function NzModalContainerComponent_ng_template_7_Template(rf, ctx) {
}
function NzModalContainerComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r1.config.nzContent, ɵɵsanitizeHtml);
  }
}
function NzModalContainerComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 11);
    ɵɵlistener("cancelTriggered", function NzModalContainerComponent_Conditional_9_Template_div_cancelTriggered_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onCloseClick());
    })("okTriggered", function NzModalContainerComponent_Conditional_9_Template_div_okTriggered_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOkClick());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("modalRef", ctx_r1.modalRef);
  }
}
var noopFun = () => void 0;
var ModalOptions = class {
  constructor() {
    this.nzCentered = false;
    this.nzClosable = true;
    this.nzOkLoading = false;
    this.nzOkDisabled = false;
    this.nzCancelDisabled = false;
    this.nzCancelLoading = false;
    this.nzDraggable = false;
    this.nzNoAnimation = false;
    this.nzAutofocus = "auto";
    this.nzKeyboard = true;
    this.nzZIndex = 1e3;
    this.nzWidth = 520;
    this.nzCloseIcon = "close";
    this.nzOkType = "primary";
    this.nzOkDanger = false;
    this.nzModalType = "default";
    this.nzOnCancel = noopFun;
    this.nzOnOk = noopFun;
    this.nzIconType = "question-circle";
  }
};
var ZOOM_CLASS_NAME_MAP = {
  enter: "ant-zoom-enter",
  enterActive: "ant-zoom-enter-active",
  leave: "ant-zoom-leave",
  leaveActive: "ant-zoom-leave-active"
};
var FADE_CLASS_NAME_MAP = {
  enter: "ant-fade-enter",
  enterActive: "ant-fade-enter-active",
  leave: "ant-fade-leave",
  leaveActive: "ant-fade-leave-active"
};
var MODAL_MASK_CLASS_NAME = "ant-modal-mask";
var NZ_CONFIG_MODULE_NAME = "modal";
var NZ_MODAL_DATA = new InjectionToken("NZ_MODAL_DATA");
var nzModalAnimations = {
  modalContainer: trigger("modalContainer", [state("void, exit", style({})), state("enter", style({})), transition("* => enter", animate(".24s", style({}))), transition("* => void, * => exit", animate(".2s", style({})))])
};
var NzModalCloseComponent = class _NzModalCloseComponent {
  constructor(config) {
    this.config = config;
  }
  static {
    this.ɵfac = function NzModalCloseComponent_Factory(t) {
      return new (t || _NzModalCloseComponent)(ɵɵdirectiveInject(ModalOptions));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzModalCloseComponent,
      selectors: [["button", "nz-modal-close", ""]],
      hostAttrs: ["aria-label", "Close", 1, "ant-modal-close"],
      exportAs: ["NzModalCloseBuiltin"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c0,
      decls: 2,
      vars: 1,
      consts: [[1, "ant-modal-close-x"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 1, "ant-modal-close-icon", 3, "nzType"]],
      template: function NzModalCloseComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "span", 0);
          ɵɵtemplate(1, NzModalCloseComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("nzStringTemplateOutlet", ctx.config.nzCloseIcon);
        }
      },
      dependencies: [NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzModalCloseComponent, [{
    type: Component,
    args: [{
      selector: "button[nz-modal-close]",
      exportAs: "NzModalCloseBuiltin",
      template: `
    <span class="ant-modal-close-x">
      <ng-container *nzStringTemplateOutlet="config.nzCloseIcon; let closeIcon">
        <span nz-icon [nzType]="closeIcon" class="ant-modal-close-icon"></span>
      </ng-container>
    </span>
  `,
      host: {
        class: "ant-modal-close",
        "aria-label": "Close"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NzIconModule, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: ModalOptions
  }], null);
})();
function applyConfigDefaults(config, defaultOptions) {
  return __spreadValues(__spreadValues({}, defaultOptions), config);
}
function getValueWithConfig(userValue, configValue, defaultValue) {
  return typeof userValue === "undefined" ? typeof configValue === "undefined" ? defaultValue : configValue : userValue;
}
function getConfigFromComponent(component) {
  const {
    nzCentered,
    nzMask,
    nzMaskClosable,
    nzClosable,
    nzOkLoading,
    nzOkDisabled,
    nzCancelDisabled,
    nzCancelLoading,
    nzKeyboard,
    nzNoAnimation,
    nzDraggable,
    nzContent,
    nzFooter,
    nzZIndex,
    nzWidth,
    nzWrapClassName,
    nzClassName,
    nzStyle,
    nzTitle,
    nzCloseIcon,
    nzMaskStyle,
    nzBodyStyle,
    nzOkText,
    nzCancelText,
    nzOkType,
    nzOkDanger,
    nzIconType,
    nzModalType,
    nzOnOk,
    nzOnCancel,
    nzAfterOpen,
    nzAfterClose,
    nzCloseOnNavigation,
    nzAutofocus
  } = component;
  return {
    nzCentered,
    nzMask,
    nzMaskClosable,
    nzDraggable,
    nzClosable,
    nzOkLoading,
    nzOkDisabled,
    nzCancelDisabled,
    nzCancelLoading,
    nzKeyboard,
    nzNoAnimation,
    nzContent,
    nzFooter,
    nzZIndex,
    nzWidth,
    nzWrapClassName,
    nzClassName,
    nzStyle,
    nzTitle,
    nzCloseIcon,
    nzMaskStyle,
    nzBodyStyle,
    nzOkText,
    nzCancelText,
    nzOkType,
    nzOkDanger,
    nzIconType,
    nzModalType,
    nzOnOk,
    nzOnCancel,
    nzAfterOpen,
    nzAfterClose,
    nzCloseOnNavigation,
    nzAutofocus
  };
}
function throwNzModalContentAlreadyAttachedError() {
  throw Error("Attempting to attach modal content after content is already attached");
}
var BaseModalContainerComponent = class _BaseModalContainerComponent extends BasePortalOutlet {
  get showMask() {
    const defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
    return !!getValueWithConfig(this.config.nzMask, defaultConfig.nzMask, true);
  }
  get maskClosable() {
    const defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
    return !!getValueWithConfig(this.config.nzMaskClosable, defaultConfig.nzMaskClosable, true);
  }
  constructor(ngZone, host, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
    super();
    this.ngZone = ngZone;
    this.host = host;
    this.focusTrapFactory = focusTrapFactory;
    this.cdr = cdr;
    this.render = render;
    this.overlayRef = overlayRef;
    this.nzConfigService = nzConfigService;
    this.config = config;
    this.animationType = animationType;
    this.animationStateChanged = new EventEmitter();
    this.containerClick = new EventEmitter();
    this.cancelTriggered = new EventEmitter();
    this.okTriggered = new EventEmitter();
    this.state = "enter";
    this.isStringContent = false;
    this.dir = "ltr";
    this.elementFocusedBeforeModalWasOpened = null;
    this.mouseDown = false;
    this.oldMaskStyle = null;
    this.destroy$ = new Subject();
    this.document = document;
    this.dir = overlayRef.getDirection();
    this.isStringContent = typeof config.nzContent === "string";
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateMaskClassname();
    });
  }
  onContainerClick(e) {
    if (e.target === e.currentTarget && !this.mouseDown && this.showMask && this.maskClosable) {
      this.containerClick.emit();
    }
  }
  onCloseClick() {
    this.cancelTriggered.emit();
  }
  onOkClick() {
    this.okTriggered.emit();
  }
  attachComponentPortal(portal) {
    if (this.portalOutlet.hasAttached()) {
      throwNzModalContentAlreadyAttachedError();
    }
    this.savePreviouslyFocusedElement();
    this.setZIndexForBackdrop();
    return this.portalOutlet.attachComponentPortal(portal);
  }
  attachTemplatePortal(portal) {
    if (this.portalOutlet.hasAttached()) {
      throwNzModalContentAlreadyAttachedError();
    }
    this.savePreviouslyFocusedElement();
    this.setZIndexForBackdrop();
    return this.portalOutlet.attachTemplatePortal(portal);
  }
  attachStringContent() {
    this.savePreviouslyFocusedElement();
    this.setZIndexForBackdrop();
  }
  getNativeElement() {
    return this.host.nativeElement;
  }
  animationDisabled() {
    return this.config.nzNoAnimation || this.animationType === "NoopAnimations";
  }
  setModalTransformOrigin() {
    const modalElement = this.modalElementRef.nativeElement;
    if (this.elementFocusedBeforeModalWasOpened) {
      const previouslyDOMRect = this.elementFocusedBeforeModalWasOpened.getBoundingClientRect();
      const lastPosition = getElementOffset(this.elementFocusedBeforeModalWasOpened);
      const x = lastPosition.left + previouslyDOMRect.width / 2;
      const y = lastPosition.top + previouslyDOMRect.height / 2;
      const transformOrigin = `${x - modalElement.offsetLeft}px ${y - modalElement.offsetTop}px 0px`;
      this.render.setStyle(modalElement, "transform-origin", transformOrigin);
    }
  }
  savePreviouslyFocusedElement() {
    if (!this.focusTrap) {
      this.focusTrap = this.focusTrapFactory.create(this.host.nativeElement);
    }
    if (this.document) {
      this.elementFocusedBeforeModalWasOpened = this.document.activeElement;
      if (this.host.nativeElement.focus) {
        this.ngZone.runOutsideAngular(() => reqAnimFrame(() => this.host.nativeElement.focus()));
      }
    }
  }
  trapFocus() {
    const element = this.host.nativeElement;
    if (this.config.nzAutofocus) {
      this.focusTrap.focusInitialElementWhenReady();
    } else {
      const activeElement = this.document.activeElement;
      if (activeElement !== element && !element.contains(activeElement)) {
        element.focus();
      }
    }
  }
  restoreFocus() {
    const toFocus = this.elementFocusedBeforeModalWasOpened;
    if (toFocus && typeof toFocus.focus === "function") {
      const activeElement = this.document.activeElement;
      const element = this.host.nativeElement;
      if (!activeElement || activeElement === this.document.body || activeElement === element || element.contains(activeElement)) {
        toFocus.focus();
      }
    }
    if (this.focusTrap) {
      this.focusTrap.destroy();
    }
  }
  setEnterAnimationClass() {
    if (this.animationDisabled()) {
      return;
    }
    this.setModalTransformOrigin();
    const modalElement = this.modalElementRef.nativeElement;
    const backdropElement = this.overlayRef.backdropElement;
    modalElement.classList.add(ZOOM_CLASS_NAME_MAP.enter);
    modalElement.classList.add(ZOOM_CLASS_NAME_MAP.enterActive);
    if (backdropElement) {
      backdropElement.classList.add(FADE_CLASS_NAME_MAP.enter);
      backdropElement.classList.add(FADE_CLASS_NAME_MAP.enterActive);
    }
  }
  setExitAnimationClass() {
    const modalElement = this.modalElementRef.nativeElement;
    modalElement.classList.add(ZOOM_CLASS_NAME_MAP.leave);
    modalElement.classList.add(ZOOM_CLASS_NAME_MAP.leaveActive);
    this.setMaskExitAnimationClass();
  }
  setMaskExitAnimationClass(force = false) {
    const backdropElement = this.overlayRef.backdropElement;
    if (backdropElement) {
      if (this.animationDisabled() || force) {
        backdropElement.classList.remove(MODAL_MASK_CLASS_NAME);
        return;
      }
      backdropElement.classList.add(FADE_CLASS_NAME_MAP.leave);
      backdropElement.classList.add(FADE_CLASS_NAME_MAP.leaveActive);
    }
  }
  cleanAnimationClass() {
    if (this.animationDisabled()) {
      return;
    }
    const backdropElement = this.overlayRef.backdropElement;
    const modalElement = this.modalElementRef.nativeElement;
    if (backdropElement) {
      backdropElement.classList.remove(FADE_CLASS_NAME_MAP.enter);
      backdropElement.classList.remove(FADE_CLASS_NAME_MAP.enterActive);
    }
    modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.enter);
    modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.enterActive);
    modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.leave);
    modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.leaveActive);
  }
  setZIndexForBackdrop() {
    const backdropElement = this.overlayRef.backdropElement;
    if (backdropElement) {
      if (isNotNil(this.config.nzZIndex)) {
        this.render.setStyle(backdropElement, "z-index", this.config.nzZIndex);
      }
    }
  }
  bindBackdropStyle() {
    const backdropElement = this.overlayRef.backdropElement;
    if (backdropElement) {
      if (this.oldMaskStyle) {
        const styles = this.oldMaskStyle;
        Object.keys(styles).forEach((key) => {
          this.render.removeStyle(backdropElement, key);
        });
        this.oldMaskStyle = null;
      }
      this.setZIndexForBackdrop();
      if (typeof this.config.nzMaskStyle === "object" && Object.keys(this.config.nzMaskStyle).length) {
        const styles = __spreadValues({}, this.config.nzMaskStyle);
        Object.keys(styles).forEach((key) => {
          this.render.setStyle(backdropElement, key, styles[key]);
        });
        this.oldMaskStyle = styles;
      }
    }
  }
  updateMaskClassname() {
    const backdropElement = this.overlayRef.backdropElement;
    if (backdropElement) {
      if (this.showMask) {
        backdropElement.classList.add(MODAL_MASK_CLASS_NAME);
      } else {
        backdropElement.classList.remove(MODAL_MASK_CLASS_NAME);
      }
    }
  }
  onAnimationDone(event) {
    if (event.toState === "enter") {
      this.trapFocus();
    } else if (event.toState === "exit") {
      this.restoreFocus();
    }
    this.cleanAnimationClass();
    this.animationStateChanged.emit(event);
  }
  onAnimationStart(event) {
    if (event.toState === "enter") {
      this.setEnterAnimationClass();
      this.bindBackdropStyle();
    } else if (event.toState === "exit") {
      this.setExitAnimationClass();
    }
    this.animationStateChanged.emit(event);
  }
  startExitAnimation() {
    this.state = "exit";
    this.cdr.markForCheck();
  }
  ngOnDestroy() {
    this.setMaskExitAnimationClass(true);
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  setupMouseListeners(modalContainer) {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.host.nativeElement, "mouseup").pipe(takeUntil(this.destroy$)).subscribe(() => {
        if (this.mouseDown) {
          setTimeout(() => {
            this.mouseDown = false;
          });
        }
      });
      fromEvent(modalContainer.nativeElement, "mousedown").pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.mouseDown = true;
      });
    });
  }
  static {
    this.ɵfac = function BaseModalContainerComponent_Factory(t) {
      ɵɵinvalidFactory();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _BaseModalContainerComponent,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseModalContainerComponent, [{
    type: Directive
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: OverlayRef
  }, {
    type: NzConfigService
  }, {
    type: ModalOptions
  }, {
    type: void 0
  }, {
    type: void 0
  }], null);
})();
var NzModalConfirmContainerComponent = class _NzModalConfirmContainerComponent extends BaseModalContainerComponent {
  constructor(ngZone, i18n, host, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
    super(ngZone, host, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType);
    this.i18n = i18n;
    this.config = config;
    this.cancelTriggered = new EventEmitter();
    this.okTriggered = new EventEmitter();
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Modal");
    });
  }
  ngOnInit() {
    this.setupMouseListeners(this.modalElementRef);
  }
  onCancel() {
    this.cancelTriggered.emit();
  }
  onOk() {
    this.okTriggered.emit();
  }
  static {
    this.ɵfac = function NzModalConfirmContainerComponent_Factory(t) {
      return new (t || _NzModalConfirmContainerComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusTrapFactory), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(OverlayRef), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ModalOptions), ɵɵdirectiveInject(DOCUMENT, 8), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzModalConfirmContainerComponent,
      selectors: [["nz-modal-confirm-container"]],
      viewQuery: function NzModalConfirmContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(CdkPortalOutlet, 7);
          ɵɵviewQuery(_c1, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.portalOutlet = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modalElementRef = _t.first);
        }
      },
      hostAttrs: ["tabindex", "-1", "role", "dialog"],
      hostVars: 10,
      hostBindings: function NzModalConfirmContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵsyntheticHostListener("@modalContainer.start", function NzModalConfirmContainerComponent_animation_modalContainer_start_HostBindingHandler($event) {
            return ctx.onAnimationStart($event);
          })("@modalContainer.done", function NzModalConfirmContainerComponent_animation_modalContainer_done_HostBindingHandler($event) {
            return ctx.onAnimationDone($event);
          });
          ɵɵlistener("click", function NzModalConfirmContainerComponent_click_HostBindingHandler($event) {
            return ctx.onContainerClick($event);
          });
        }
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@.disabled", ctx.config.nzNoAnimation)("@modalContainer", ctx.state);
          ɵɵclassMap(ctx.config.nzWrapClassName ? "ant-modal-wrap " + ctx.config.nzWrapClassName : "ant-modal-wrap");
          ɵɵstyleProp("z-index", ctx.config.nzZIndex);
          ɵɵclassProp("ant-modal-wrap-rtl", ctx.dir === "rtl")("ant-modal-centered", ctx.config.nzCentered);
        }
      },
      outputs: {
        cancelTriggered: "cancelTriggered",
        okTriggered: "okTriggered"
      },
      exportAs: ["nzModalConfirmContainer"],
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      decls: 17,
      vars: 13,
      consts: [["modalElement", ""], ["role", "document", 1, "ant-modal", 3, "ngClass", "ngStyle"], [1, "ant-modal-content"], ["nz-modal-close", ""], [1, "ant-modal-body", 3, "ngStyle"], [1, "ant-modal-confirm-body-wrapper"], [1, "ant-modal-confirm-body"], ["nz-icon", "", 3, "nzType"], [1, "ant-modal-confirm-title"], [4, "nzStringTemplateOutlet"], [1, "ant-modal-confirm-content"], ["cdkPortalOutlet", ""], [3, "innerHTML"], [1, "ant-modal-confirm-btns"], ["nz-button", "", 3, "nzLoading", "disabled"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "nzDanger"], ["nz-modal-close", "", 3, "click"], ["nz-button", "", 3, "click", "nzLoading", "disabled"], ["nz-button", "", 3, "click", "nzType", "nzLoading", "disabled", "nzDanger"]],
      template: function NzModalConfirmContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1, 0);
          ɵɵpipe(2, "nzToCssUnit");
          ɵɵelementStart(3, "div", 2);
          ɵɵtemplate(4, NzModalConfirmContainerComponent_Conditional_4_Template, 1, 0, "button", 3);
          ɵɵelementStart(5, "div", 4)(6, "div", 5)(7, "div", 6);
          ɵɵelement(8, "span", 7);
          ɵɵelementStart(9, "span", 8);
          ɵɵtemplate(10, NzModalConfirmContainerComponent_ng_container_10_Template, 2, 1, "ng-container", 9);
          ɵɵelementEnd();
          ɵɵelementStart(11, "div", 10);
          ɵɵtemplate(12, NzModalConfirmContainerComponent_ng_template_12_Template, 0, 0, "ng-template", 11)(13, NzModalConfirmContainerComponent_Conditional_13_Template, 1, 1, "div", 12);
          ɵɵelementEnd()();
          ɵɵelementStart(14, "div", 13);
          ɵɵtemplate(15, NzModalConfirmContainerComponent_Conditional_15_Template, 2, 4, "button", 14)(16, NzModalConfirmContainerComponent_Conditional_16_Template, 2, 6, "button", 15);
          ɵɵelementEnd()()()()();
        }
        if (rf & 2) {
          ɵɵstyleProp("width", ɵɵpipeBind1(2, 11, ctx.config == null ? null : ctx.config.nzWidth));
          ɵɵproperty("ngClass", ctx.config.nzClassName)("ngStyle", ctx.config.nzStyle);
          ɵɵadvance(4);
          ɵɵconditional(4, ctx.config.nzClosable ? 4 : -1);
          ɵɵadvance();
          ɵɵproperty("ngStyle", ctx.config.nzBodyStyle);
          ɵɵadvance(3);
          ɵɵproperty("nzType", ctx.config.nzIconType);
          ɵɵadvance(2);
          ɵɵproperty("nzStringTemplateOutlet", ctx.config.nzTitle);
          ɵɵadvance(3);
          ɵɵconditional(13, ctx.isStringContent ? 13 : -1);
          ɵɵadvance(2);
          ɵɵconditional(15, ctx.config.nzCancelText !== null ? 15 : -1);
          ɵɵadvance();
          ɵɵconditional(16, ctx.config.nzOkText !== null ? 16 : -1);
        }
      },
      dependencies: [NgClass, NgStyle, NzPipesModule, NzToCssUnitPipe, NzIconModule, NzIconDirective, NzModalCloseComponent, NzOutletModule, NzStringTemplateOutletDirective, PortalModule, CdkPortalOutlet, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective],
      encapsulation: 2,
      data: {
        animation: [nzModalAnimations.modalContainer]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzModalConfirmContainerComponent, [{
    type: Component,
    args: [{
      selector: "nz-modal-confirm-container",
      exportAs: "nzModalConfirmContainer",
      template: `
    <div
      #modalElement
      role="document"
      class="ant-modal"
      [ngClass]="config.nzClassName!"
      [ngStyle]="config.nzStyle!"
      [style.width]="config?.nzWidth! | nzToCssUnit"
    >
      <div class="ant-modal-content">
        @if (config.nzClosable) {
          <button nz-modal-close (click)="onCloseClick()"></button>
        }

        <div class="ant-modal-body" [ngStyle]="config.nzBodyStyle!">
          <div class="ant-modal-confirm-body-wrapper">
            <div class="ant-modal-confirm-body">
              <span nz-icon [nzType]="config.nzIconType!"></span>
              <span class="ant-modal-confirm-title">
                <ng-container *nzStringTemplateOutlet="config.nzTitle">
                  <span [innerHTML]="config.nzTitle"></span>
                </ng-container>
              </span>
              <div class="ant-modal-confirm-content">
                <ng-template cdkPortalOutlet></ng-template>
                @if (isStringContent) {
                  <div [innerHTML]="config.nzContent"></div>
                }
              </div>
            </div>
            <div class="ant-modal-confirm-btns">
              @if (config.nzCancelText !== null) {
                <button
                  [attr.cdkFocusInitial]="config.nzAutofocus === 'cancel' || null"
                  nz-button
                  (click)="onCancel()"
                  [nzLoading]="config.nzCancelLoading"
                  [disabled]="config.nzCancelDisabled"
                >
                  {{ config.nzCancelText || locale.cancelText }}
                </button>
              }
              @if (config.nzOkText !== null) {
                <button
                  [attr.cdkFocusInitial]="config.nzAutofocus === 'ok' || null"
                  nz-button
                  [nzType]="config.nzOkType!"
                  (click)="onOk()"
                  [nzLoading]="config.nzOkLoading"
                  [disabled]="config.nzOkDisabled"
                  [nzDanger]="config.nzOkDanger"
                >
                  {{ config.nzOkText || locale.okText }}
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
      animations: [nzModalAnimations.modalContainer],
      // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
      changeDetection: ChangeDetectionStrategy.Default,
      host: {
        tabindex: "-1",
        role: "dialog",
        "[class]": 'config.nzWrapClassName ? "ant-modal-wrap " + config.nzWrapClassName : "ant-modal-wrap"',
        "[class.ant-modal-wrap-rtl]": `dir === 'rtl'`,
        "[class.ant-modal-centered]": "config.nzCentered",
        "[style.zIndex]": "config.nzZIndex",
        "[@.disabled]": "config.nzNoAnimation",
        "[@modalContainer]": "state",
        "(@modalContainer.start)": "onAnimationStart($event)",
        "(@modalContainer.done)": "onAnimationDone($event)",
        "(click)": "onContainerClick($event)"
      },
      imports: [NgClass, NgStyle, NzPipesModule, NzIconModule, NzModalCloseComponent, NzOutletModule, PortalModule, NzButtonModule],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: NzI18nService
  }, {
    type: ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: OverlayRef
  }, {
    type: NzConfigService
  }, {
    type: ModalOptions
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }],
    modalElementRef: [{
      type: ViewChild,
      args: ["modalElement", {
        static: true
      }]
    }],
    cancelTriggered: [{
      type: Output
    }],
    okTriggered: [{
      type: Output
    }]
  });
})();
var NzModalFooterComponent = class _NzModalFooterComponent {
  constructor(i18n, config) {
    this.i18n = i18n;
    this.config = config;
    this.buttonsFooter = false;
    this.buttons = [];
    this.cancelTriggered = new EventEmitter();
    this.okTriggered = new EventEmitter();
    this.destroy$ = new Subject();
    if (Array.isArray(config.nzFooter)) {
      this.buttonsFooter = true;
      this.buttons = config.nzFooter.map(mergeDefaultOption);
    }
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Modal");
    });
  }
  onCancel() {
    this.cancelTriggered.emit();
  }
  onOk() {
    this.okTriggered.emit();
  }
  /**
   * Returns the value of the specified key.
   * If it is a function, run and return the return value of the function.
   */
  getButtonCallableProp(options, prop) {
    const value = options[prop];
    const componentInstance = this.modalRef.getContentComponent();
    return typeof value === "function" ? value.apply(options, componentInstance && [componentInstance]) : value;
  }
  /**
   * Run function based on the type and set its `loading` prop if needed.
   */
  onButtonClick(options) {
    const loading = this.getButtonCallableProp(options, "loading");
    if (!loading) {
      const result = this.getButtonCallableProp(options, "onClick");
      if (options.autoLoading && isPromise(result)) {
        options.loading = true;
        result.then(() => options.loading = false).catch((e) => {
          options.loading = false;
          throw e;
        });
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzModalFooterComponent_Factory(t) {
      return new (t || _NzModalFooterComponent)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ModalOptions));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzModalFooterComponent,
      selectors: [["div", "nz-modal-footer", ""]],
      hostAttrs: [1, "ant-modal-footer"],
      inputs: {
        modalRef: "modalRef"
      },
      outputs: {
        cancelTriggered: "cancelTriggered",
        okTriggered: "okTriggered"
      },
      exportAs: ["NzModalFooterBuiltin"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c2,
      decls: 2,
      vars: 1,
      consts: [[4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzDanger", "nzShape", "nzSize", "nzGhost"], ["nz-button", "", 3, "click", "hidden", "nzLoading", "disabled", "nzType", "nzDanger", "nzShape", "nzSize", "nzGhost"], [3, "innerHTML"], ["nz-button", "", 3, "nzLoading", "disabled"], ["nz-button", "", 3, "nzType", "nzDanger", "nzLoading", "disabled"], ["nz-button", "", 3, "click", "nzLoading", "disabled"], ["nz-button", "", 3, "click", "nzType", "nzDanger", "nzLoading", "disabled"]],
      template: function NzModalFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzModalFooterComponent_Conditional_0_Template, 1, 5, "ng-container")(1, NzModalFooterComponent_Conditional_1_Template, 2, 2);
        }
        if (rf & 2) {
          ɵɵconditional(0, ctx.config.nzFooter ? 0 : 1);
        }
      },
      dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzModalFooterComponent, [{
    type: Component,
    args: [{
      selector: "div[nz-modal-footer]",
      exportAs: "NzModalFooterBuiltin",
      template: `
    @if (config.nzFooter) {
      <ng-container
        *nzStringTemplateOutlet="config.nzFooter; context: { $implicit: config.nzData, modalRef: modalRef }"
      >
        @if (buttonsFooter) {
          @for (button of buttons; track button) {
            <button
              nz-button
              (click)="onButtonClick(button)"
              [hidden]="!getButtonCallableProp(button, 'show')"
              [nzLoading]="getButtonCallableProp(button, 'loading')"
              [disabled]="getButtonCallableProp(button, 'disabled')"
              [nzType]="button.type!"
              [nzDanger]="button.danger"
              [nzShape]="button.shape!"
              [nzSize]="button.size!"
              [nzGhost]="button.ghost!"
            >
              {{ button.label }}
            </button>
          }
        } @else {
          <div [innerHTML]="config.nzFooter"></div>
        }
      </ng-container>
    } @else {
      @if (config.nzCancelText !== null) {
        <button
          [attr.cdkFocusInitial]="config.nzAutofocus === 'cancel' || null"
          nz-button
          (click)="onCancel()"
          [nzLoading]="config.nzCancelLoading"
          [disabled]="config.nzCancelDisabled"
        >
          {{ config.nzCancelText || locale.cancelText }}
        </button>
      }
      @if (config.nzOkText !== null) {
        <button
          [attr.cdkFocusInitial]="config.nzAutofocus === 'ok' || null"
          nz-button
          [nzType]="config.nzOkType!"
          [nzDanger]="config.nzOkDanger"
          (click)="onOk()"
          [nzLoading]="config.nzOkLoading"
          [disabled]="config.nzOkDisabled"
        >
          {{ config.nzOkText || locale.okText }}
        </button>
      }
    }
  `,
      host: {
        class: "ant-modal-footer"
      },
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [NzOutletModule, NzButtonModule],
      standalone: true
    }]
  }], () => [{
    type: NzI18nService
  }, {
    type: ModalOptions
  }], {
    cancelTriggered: [{
      type: Output
    }],
    okTriggered: [{
      type: Output
    }],
    modalRef: [{
      type: Input
    }]
  });
})();
function mergeDefaultOption(options) {
  return __spreadValues({
    type: null,
    size: "default",
    autoLoading: true,
    show: true,
    loading: false,
    disabled: false
  }, options);
}
var NzModalTitleComponent = class _NzModalTitleComponent {
  constructor(config) {
    this.config = config;
  }
  static {
    this.ɵfac = function NzModalTitleComponent_Factory(t) {
      return new (t || _NzModalTitleComponent)(ɵɵdirectiveInject(ModalOptions));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzModalTitleComponent,
      selectors: [["div", "nz-modal-title", ""]],
      hostAttrs: [1, "ant-modal-header"],
      exportAs: ["NzModalTitleBuiltin"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c4,
      decls: 2,
      vars: 1,
      consts: [[1, "ant-modal-title"], [4, "nzStringTemplateOutlet"], [3, "innerHTML"]],
      template: function NzModalTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, NzModalTitleComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("nzStringTemplateOutlet", ctx.config.nzTitle);
        }
      },
      dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzModalTitleComponent, [{
    type: Component,
    args: [{
      selector: "div[nz-modal-title]",
      exportAs: "NzModalTitleBuiltin",
      template: `
    <div class="ant-modal-title">
      <ng-container *nzStringTemplateOutlet="config.nzTitle">
        <div [innerHTML]="config.nzTitle"></div>
      </ng-container>
    </div>
  `,
      host: {
        class: "ant-modal-header"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: ModalOptions
  }], null);
})();
var NzModalContainerComponent = class _NzModalContainerComponent extends BaseModalContainerComponent {
  constructor(ngZone, host, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
    super(ngZone, host, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType);
    this.config = config;
  }
  ngOnInit() {
    this.setupMouseListeners(this.modalElementRef);
  }
  static {
    this.ɵfac = function NzModalContainerComponent_Factory(t) {
      return new (t || _NzModalContainerComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusTrapFactory), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(OverlayRef), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ModalOptions), ɵɵdirectiveInject(DOCUMENT, 8), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzModalContainerComponent,
      selectors: [["nz-modal-container"]],
      viewQuery: function NzModalContainerComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(CdkPortalOutlet, 7);
          ɵɵviewQuery(_c1, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.portalOutlet = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modalElementRef = _t.first);
        }
      },
      hostAttrs: ["tabindex", "-1", "role", "dialog"],
      hostVars: 10,
      hostBindings: function NzModalContainerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵsyntheticHostListener("@modalContainer.start", function NzModalContainerComponent_animation_modalContainer_start_HostBindingHandler($event) {
            return ctx.onAnimationStart($event);
          })("@modalContainer.done", function NzModalContainerComponent_animation_modalContainer_done_HostBindingHandler($event) {
            return ctx.onAnimationDone($event);
          });
          ɵɵlistener("click", function NzModalContainerComponent_click_HostBindingHandler($event) {
            return ctx.onContainerClick($event);
          });
        }
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@.disabled", ctx.config.nzNoAnimation)("@modalContainer", ctx.state);
          ɵɵclassMap(ctx.config.nzWrapClassName ? "ant-modal-wrap " + ctx.config.nzWrapClassName : "ant-modal-wrap");
          ɵɵstyleProp("z-index", ctx.config.nzZIndex);
          ɵɵclassProp("ant-modal-wrap-rtl", ctx.dir === "rtl")("ant-modal-centered", ctx.config.nzCentered);
        }
      },
      exportAs: ["nzModalContainer"],
      standalone: true,
      features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      decls: 10,
      vars: 12,
      consts: [["modalElement", ""], ["cdkDrag", "", "cdkDragBoundary", ".cdk-overlay-container", "role", "document", 1, "ant-modal", 3, "cdkDragDisabled", "ngClass", "ngStyle"], [1, "ant-modal-content"], ["nz-modal-close", ""], ["nz-modal-title", "", "cdkDragHandle", "", 3, "cursor"], [1, "ant-modal-body", 3, "ngStyle"], ["cdkPortalOutlet", ""], [3, "innerHTML"], ["nz-modal-footer", "", 3, "modalRef"], ["nz-modal-close", "", 3, "click"], ["nz-modal-title", "", "cdkDragHandle", ""], ["nz-modal-footer", "", 3, "cancelTriggered", "okTriggered", "modalRef"]],
      template: function NzModalContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1, 0);
          ɵɵpipe(2, "nzToCssUnit");
          ɵɵelementStart(3, "div", 2);
          ɵɵtemplate(4, NzModalContainerComponent_Conditional_4_Template, 1, 0, "button", 3)(5, NzModalContainerComponent_Conditional_5_Template, 1, 2, "div", 4);
          ɵɵelementStart(6, "div", 5);
          ɵɵtemplate(7, NzModalContainerComponent_ng_template_7_Template, 0, 0, "ng-template", 6)(8, NzModalContainerComponent_Conditional_8_Template, 1, 1, "div", 7);
          ɵɵelementEnd();
          ɵɵtemplate(9, NzModalContainerComponent_Conditional_9_Template, 1, 1, "div", 8);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵstyleProp("width", ɵɵpipeBind1(2, 10, ctx.config == null ? null : ctx.config.nzWidth));
          ɵɵproperty("cdkDragDisabled", !ctx.config.nzDraggable)("ngClass", ctx.config.nzClassName)("ngStyle", ctx.config.nzStyle);
          ɵɵadvance(4);
          ɵɵconditional(4, ctx.config.nzClosable ? 4 : -1);
          ɵɵadvance();
          ɵɵconditional(5, ctx.config.nzTitle ? 5 : -1);
          ɵɵadvance();
          ɵɵproperty("ngStyle", ctx.config.nzBodyStyle);
          ɵɵadvance(2);
          ɵɵconditional(8, ctx.isStringContent ? 8 : -1);
          ɵɵadvance();
          ɵɵconditional(9, ctx.config.nzFooter !== null ? 9 : -1);
        }
      },
      dependencies: [NgClass, NgStyle, NzModalCloseComponent, NzModalTitleComponent, PortalModule, CdkPortalOutlet, NzModalFooterComponent, NzPipesModule, NzToCssUnitPipe, CdkDrag, CdkDragHandle],
      encapsulation: 2,
      data: {
        animation: [nzModalAnimations.modalContainer]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzModalContainerComponent, [{
    type: Component,
    args: [{
      selector: "nz-modal-container",
      exportAs: "nzModalContainer",
      template: `
    <div
      #modalElement
      cdkDrag
      cdkDragBoundary=".cdk-overlay-container"
      [cdkDragDisabled]="!config.nzDraggable"
      role="document"
      class="ant-modal"
      [ngClass]="config.nzClassName!"
      [ngStyle]="config.nzStyle!"
      [style.width]="config?.nzWidth! | nzToCssUnit"
    >
      <div class="ant-modal-content">
        @if (config.nzClosable) {
          <button nz-modal-close (click)="onCloseClick()"></button>
        }
        @if (config.nzTitle) {
          <div nz-modal-title cdkDragHandle [style.cursor]="config.nzDraggable ? 'move' : 'auto'"></div>
        }

        <div class="ant-modal-body" [ngStyle]="config.nzBodyStyle!">
          <ng-template cdkPortalOutlet />
          @if (isStringContent) {
            <div [innerHTML]="config.nzContent"></div>
          }
        </div>
        @if (config.nzFooter !== null) {
          <div
            nz-modal-footer
            [modalRef]="modalRef"
            (cancelTriggered)="onCloseClick()"
            (okTriggered)="onOkClick()"
          ></div>
        }
      </div>
    </div>
  `,
      animations: [nzModalAnimations.modalContainer],
      // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
      changeDetection: ChangeDetectionStrategy.Default,
      host: {
        tabindex: "-1",
        role: "dialog",
        "[class]": 'config.nzWrapClassName ? "ant-modal-wrap " + config.nzWrapClassName : "ant-modal-wrap"',
        "[class.ant-modal-wrap-rtl]": `dir === 'rtl'`,
        "[class.ant-modal-centered]": "config.nzCentered",
        "[style.zIndex]": "config.nzZIndex",
        "[@.disabled]": "config.nzNoAnimation",
        "[@modalContainer]": "state",
        "(@modalContainer.start)": "onAnimationStart($event)",
        "(@modalContainer.done)": "onAnimationDone($event)",
        "(click)": "onContainerClick($event)"
      },
      imports: [NgClass, NgStyle, NzModalCloseComponent, NzModalTitleComponent, PortalModule, NzModalFooterComponent, NzPipesModule, CdkDrag, CdkDragHandle],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: OverlayRef
  }, {
    type: NzConfigService
  }, {
    type: ModalOptions
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }],
    modalElementRef: [{
      type: ViewChild,
      args: ["modalElement", {
        static: true
      }]
    }]
  });
})();
var NzModalRef = class {
  constructor(overlayRef, config, containerInstance) {
    this.overlayRef = overlayRef;
    this.config = config;
    this.containerInstance = containerInstance;
    this.componentInstance = null;
    this.componentRef = null;
    this.state = 0;
    this.afterClose = new Subject();
    this.afterOpen = new Subject();
    this.destroy$ = new Subject();
    containerInstance.animationStateChanged.pipe(filter((event) => event.phaseName === "done" && event.toState === "enter"), take(1)).subscribe(() => {
      this.afterOpen.next();
      this.afterOpen.complete();
      if (config.nzAfterOpen instanceof EventEmitter) {
        config.nzAfterOpen.emit();
      }
    });
    containerInstance.animationStateChanged.pipe(filter((event) => event.phaseName === "done" && event.toState === "exit"), take(1)).subscribe(() => {
      clearTimeout(this.closeTimeout);
      this._finishDialogClose();
    });
    containerInstance.containerClick.pipe(takeUntil(this.destroy$)).subscribe(() => {
      const cancelable = !this.config.nzCancelLoading && !this.config.nzOkLoading;
      if (cancelable) {
        this.trigger(
          "cancel"
          /* NzTriggerAction.CANCEL */
        );
      }
    });
    overlayRef.keydownEvents().pipe(filter((event) => this.config.nzKeyboard && !this.config.nzCancelLoading && !this.config.nzOkLoading && event.keyCode === ESCAPE && !hasModifierKey(event))).subscribe((event) => {
      event.preventDefault();
      this.trigger(
        "cancel"
        /* NzTriggerAction.CANCEL */
      );
    });
    containerInstance.cancelTriggered.pipe(takeUntil(this.destroy$)).subscribe(() => this.trigger(
      "cancel"
      /* NzTriggerAction.CANCEL */
    ));
    containerInstance.okTriggered.pipe(takeUntil(this.destroy$)).subscribe(() => this.trigger(
      "ok"
      /* NzTriggerAction.OK */
    ));
    overlayRef.detachments().subscribe(() => {
      this.afterClose.next(this.result);
      this.afterClose.complete();
      if (config.nzAfterClose instanceof EventEmitter) {
        config.nzAfterClose.emit(this.result);
      }
      this.componentInstance = null;
      this.componentRef = null;
      this.overlayRef.dispose();
    });
  }
  getContentComponent() {
    return this.componentInstance;
  }
  getContentComponentRef() {
    return this.componentRef;
  }
  getElement() {
    return this.containerInstance.getNativeElement();
  }
  destroy(result) {
    this.close(result);
  }
  triggerOk() {
    return this.trigger(
      "ok"
      /* NzTriggerAction.OK */
    );
  }
  triggerCancel() {
    return this.trigger(
      "cancel"
      /* NzTriggerAction.CANCEL */
    );
  }
  close(result) {
    if (this.state !== 0) {
      return;
    }
    this.result = result;
    this.containerInstance.animationStateChanged.pipe(filter((event) => event.phaseName === "start"), take(1)).subscribe((event) => {
      this.overlayRef.detachBackdrop();
      this.closeTimeout = setTimeout(() => {
        this._finishDialogClose();
      }, event.totalTime + 100);
    });
    this.containerInstance.startExitAnimation();
    this.state = 1;
  }
  updateConfig(config) {
    Object.assign(this.config, config);
    this.containerInstance.bindBackdropStyle();
    this.containerInstance.cdr.markForCheck();
  }
  getState() {
    return this.state;
  }
  getConfig() {
    return this.config;
  }
  getBackdropElement() {
    return this.overlayRef.backdropElement;
  }
  trigger(action) {
    return __async(this, null, function* () {
      if (this.state === 1) {
        return;
      }
      const trigger2 = {
        ok: this.config.nzOnOk,
        cancel: this.config.nzOnCancel
      }[action];
      const loadingKey = {
        ok: "nzOkLoading",
        cancel: "nzCancelLoading"
      }[action];
      const loading = this.config[loadingKey];
      if (loading) {
        return;
      }
      if (trigger2 instanceof EventEmitter) {
        trigger2.emit(this.getContentComponent());
      } else if (typeof trigger2 === "function") {
        const result = trigger2(this.getContentComponent());
        if (isPromise(result)) {
          this.config[loadingKey] = true;
          let doClose = false;
          try {
            doClose = yield result;
          } finally {
            this.config[loadingKey] = false;
            this.closeWhitResult(doClose);
          }
        } else {
          this.closeWhitResult(result);
        }
      }
    });
  }
  closeWhitResult(result) {
    if (result !== false) {
      this.close(result);
    }
  }
  _finishDialogClose() {
    this.state = 2;
    this.overlayRef.dispose();
    this.destroy$.next();
  }
};
var NzModalService = class _NzModalService {
  get openModals() {
    return this.parentModal ? this.parentModal.openModals : this.openModalsAtThisLevel;
  }
  get _afterAllClosed() {
    const parent = this.parentModal;
    return parent ? parent._afterAllClosed : this.afterAllClosedAtThisLevel;
  }
  constructor(overlay, injector, nzConfigService, parentModal, directionality) {
    this.overlay = overlay;
    this.injector = injector;
    this.nzConfigService = nzConfigService;
    this.parentModal = parentModal;
    this.directionality = directionality;
    this.openModalsAtThisLevel = [];
    this.afterAllClosedAtThisLevel = new Subject();
    this.afterAllClose = defer(() => this.openModals.length ? this._afterAllClosed : this._afterAllClosed.pipe(startWith(void 0)));
  }
  create(config) {
    return this.open(config.nzContent, config);
  }
  closeAll() {
    this.closeModals(this.openModals);
  }
  confirm(options = {}, confirmType = "confirm") {
    if ("nzFooter" in options) {
      warn(`The Confirm-Modal doesn't support "nzFooter", this property will be ignored.`);
    }
    if (!("nzWidth" in options)) {
      options.nzWidth = 416;
    }
    if (!("nzMaskClosable" in options)) {
      options.nzMaskClosable = false;
    }
    options.nzModalType = "confirm";
    options.nzClassName = `ant-modal-confirm ant-modal-confirm-${confirmType} ${options.nzClassName || ""}`;
    return this.create(options);
  }
  info(options = {}) {
    return this.confirmFactory(options, "info");
  }
  success(options = {}) {
    return this.confirmFactory(options, "success");
  }
  error(options = {}) {
    return this.confirmFactory(options, "error");
  }
  warning(options = {}) {
    return this.confirmFactory(options, "warning");
  }
  open(componentOrTemplateRef, config) {
    const configMerged = applyConfigDefaults(config || {}, new ModalOptions());
    const overlayRef = this.createOverlay(configMerged);
    const modalContainer = this.attachModalContainer(overlayRef, configMerged);
    const modalRef = this.attachModalContent(componentOrTemplateRef, modalContainer, overlayRef, configMerged);
    modalContainer.modalRef = modalRef;
    overlayZIndexSetter(overlayRef, config?.nzZIndex);
    this.openModals.push(modalRef);
    modalRef.afterClose.subscribe(() => this.removeOpenModal(modalRef));
    return modalRef;
  }
  removeOpenModal(modalRef) {
    const index = this.openModals.indexOf(modalRef);
    if (index > -1) {
      this.openModals.splice(index, 1);
      if (!this.openModals.length) {
        this._afterAllClosed.next();
      }
    }
  }
  closeModals(dialogs) {
    let i = dialogs.length;
    while (i--) {
      dialogs[i].close();
      if (!this.openModals.length) {
        this._afterAllClosed.next();
      }
    }
  }
  createOverlay(config) {
    const globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay.position().global(),
      disposeOnNavigation: getValueWithConfig(config.nzCloseOnNavigation, globalConfig.nzCloseOnNavigation, true),
      direction: getValueWithConfig(config.nzDirection, globalConfig.nzDirection, this.directionality.value)
    });
    if (getValueWithConfig(config.nzMask, globalConfig.nzMask, true)) {
      overlayConfig.backdropClass = MODAL_MASK_CLASS_NAME;
    }
    return this.overlay.create(overlayConfig);
  }
  attachModalContainer(overlayRef, config) {
    const userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;
    const injector = Injector.create({
      parent: userInjector || this.injector,
      providers: [{
        provide: OverlayRef,
        useValue: overlayRef
      }, {
        provide: ModalOptions,
        useValue: config
      }]
    });
    const ContainerComponent = config.nzModalType === "confirm" ? (
      // If the mode is `confirm`, use `NzModalConfirmContainerComponent`
      NzModalConfirmContainerComponent
    ) : (
      // If the mode is not `confirm`, use `NzModalContainerComponent`
      NzModalContainerComponent
    );
    const containerPortal = new ComponentPortal(ContainerComponent, config.nzViewContainerRef, injector);
    const containerRef = overlayRef.attach(containerPortal);
    return containerRef.instance;
  }
  attachModalContent(componentOrTemplateRef, modalContainer, overlayRef, config) {
    const modalRef = new NzModalRef(overlayRef, config, modalContainer);
    if (componentOrTemplateRef instanceof TemplateRef) {
      modalContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, {
        $implicit: config.nzData,
        modalRef
      }));
    } else if (isNotNil(componentOrTemplateRef) && typeof componentOrTemplateRef !== "string") {
      const injector = this.createInjector(modalRef, config);
      const contentRef = modalContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.nzViewContainerRef, injector));
      modalRef.componentRef = contentRef;
      modalRef.componentInstance = contentRef.instance;
    } else {
      modalContainer.attachStringContent();
    }
    return modalRef;
  }
  createInjector(modalRef, config) {
    const userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;
    return Injector.create({
      parent: userInjector || this.injector,
      providers: [{
        provide: NzModalRef,
        useValue: modalRef
      }, {
        provide: NZ_MODAL_DATA,
        useValue: config.nzData
      }]
    });
  }
  confirmFactory(options = {}, confirmType) {
    const iconMap = {
      info: "info-circle",
      success: "check-circle",
      error: "close-circle",
      warning: "exclamation-circle"
    };
    if (!("nzIconType" in options)) {
      options.nzIconType = iconMap[confirmType];
    }
    if (!("nzCancelText" in options)) {
      options.nzCancelText = null;
    }
    return this.confirm(options, confirmType);
  }
  ngOnDestroy() {
    this.closeModals(this.openModalsAtThisLevel);
    this.afterAllClosedAtThisLevel.complete();
  }
  static {
    this.ɵfac = function NzModalService_Factory(t) {
      return new (t || _NzModalService)(ɵɵinject(Overlay), ɵɵinject(Injector), ɵɵinject(NzConfigService), ɵɵinject(_NzModalService, 12), ɵɵinject(Directionality, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NzModalService,
      factory: _NzModalService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzModalService, [{
    type: Injectable
  }], () => [{
    type: Overlay
  }, {
    type: Injector
  }, {
    type: NzConfigService
  }, {
    type: NzModalService,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var NzModalContentDirective = class _NzModalContentDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static {
    this.ɵfac = function NzModalContentDirective_Factory(t) {
      return new (t || _NzModalContentDirective)(ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzModalContentDirective,
      selectors: [["", "nzModalContent", ""]],
      exportAs: ["nzModalContent"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzModalContentDirective, [{
    type: Directive,
    args: [{
      selector: "[nzModalContent]",
      exportAs: "nzModalContent",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var NzModalFooterDirective = class _NzModalFooterDirective {
  constructor(nzModalRef, templateRef) {
    this.nzModalRef = nzModalRef;
    this.templateRef = templateRef;
    if (this.nzModalRef) {
      this.nzModalRef.updateConfig({
        nzFooter: this.templateRef
      });
    }
  }
  static {
    this.ɵfac = function NzModalFooterDirective_Factory(t) {
      return new (t || _NzModalFooterDirective)(ɵɵdirectiveInject(NzModalRef, 8), ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzModalFooterDirective,
      selectors: [["", "nzModalFooter", ""]],
      exportAs: ["nzModalFooter"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzModalFooterDirective, [{
    type: Directive,
    args: [{
      selector: "[nzModalFooter]",
      exportAs: "nzModalFooter",
      standalone: true
    }]
  }], () => [{
    type: NzModalRef,
    decorators: [{
      type: Optional
    }]
  }, {
    type: TemplateRef
  }], null);
})();
var NzModalTitleDirective = class _NzModalTitleDirective {
  constructor(nzModalRef, templateRef) {
    this.nzModalRef = nzModalRef;
    this.templateRef = templateRef;
    if (this.nzModalRef) {
      this.nzModalRef.updateConfig({
        nzTitle: this.templateRef
      });
    }
  }
  static {
    this.ɵfac = function NzModalTitleDirective_Factory(t) {
      return new (t || _NzModalTitleDirective)(ɵɵdirectiveInject(NzModalRef, 8), ɵɵdirectiveInject(TemplateRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzModalTitleDirective,
      selectors: [["", "nzModalTitle", ""]],
      exportAs: ["nzModalTitle"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzModalTitleDirective, [{
    type: Directive,
    args: [{
      selector: "[nzModalTitle]",
      exportAs: "nzModalTitle",
      standalone: true
    }]
  }], () => [{
    type: NzModalRef,
    decorators: [{
      type: Optional
    }]
  }, {
    type: TemplateRef
  }], null);
})();
var NzModalComponent = class _NzModalComponent {
  set modalTitle(value) {
    if (value) {
      this.setTitleWithTemplate(value);
    }
  }
  set modalFooter(value) {
    if (value) {
      this.setFooterWithTemplate(value);
    }
  }
  get afterOpen() {
    return this.nzAfterOpen.asObservable();
  }
  get afterClose() {
    return this.nzAfterClose.asObservable();
  }
  constructor(cdr, modal, viewContainerRef) {
    this.cdr = cdr;
    this.modal = modal;
    this.viewContainerRef = viewContainerRef;
    this.nzVisible = false;
    this.nzClosable = true;
    this.nzOkLoading = false;
    this.nzOkDisabled = false;
    this.nzCancelDisabled = false;
    this.nzCancelLoading = false;
    this.nzKeyboard = true;
    this.nzNoAnimation = false;
    this.nzCentered = false;
    this.nzDraggable = false;
    this.nzZIndex = 1e3;
    this.nzWidth = 520;
    this.nzCloseIcon = "close";
    this.nzOkType = "primary";
    this.nzOkDanger = false;
    this.nzIconType = "question-circle";
    this.nzModalType = "default";
    this.nzAutofocus = "auto";
    this.nzOnOk = new EventEmitter();
    this.nzOnCancel = new EventEmitter();
    this.nzAfterOpen = new EventEmitter();
    this.nzAfterClose = new EventEmitter();
    this.nzVisibleChange = new EventEmitter();
    this.modalRef = null;
    this.destroy$ = new Subject();
  }
  open() {
    if (!this.nzVisible) {
      this.nzVisible = true;
      this.nzVisibleChange.emit(true);
    }
    if (!this.modalRef) {
      const config = this.getConfig();
      this.modalRef = this.modal.create(config);
      this.modalRef.afterClose.asObservable().pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.close();
      });
    }
  }
  close(result) {
    if (this.nzVisible) {
      this.nzVisible = false;
      this.nzVisibleChange.emit(false);
    }
    if (this.modalRef) {
      this.modalRef.close(result);
      this.modalRef = null;
    }
  }
  destroy(result) {
    this.close(result);
  }
  triggerOk() {
    this.modalRef?.triggerOk();
  }
  triggerCancel() {
    this.modalRef?.triggerCancel();
  }
  getContentComponent() {
    return this.modalRef?.getContentComponent();
  }
  getElement() {
    return this.modalRef?.getElement();
  }
  getModalRef() {
    return this.modalRef;
  }
  setTitleWithTemplate(templateRef) {
    this.nzTitle = templateRef;
    if (this.modalRef) {
      Promise.resolve().then(() => {
        this.modalRef.updateConfig({
          nzTitle: this.nzTitle
        });
      });
    }
  }
  setFooterWithTemplate(templateRef) {
    this.nzFooter = templateRef;
    if (this.modalRef) {
      Promise.resolve().then(() => {
        this.modalRef.updateConfig({
          nzFooter: this.nzFooter
        });
      });
    }
    this.cdr.markForCheck();
  }
  getConfig() {
    const componentConfig = getConfigFromComponent(this);
    componentConfig.nzViewContainerRef = this.viewContainerRef;
    componentConfig.nzContent = this.nzContent || this.contentFromContentChild;
    return componentConfig;
  }
  ngOnChanges(changes) {
    const _a = changes, {
      nzVisible
    } = _a, otherChanges = __objRest(_a, [
      "nzVisible"
    ]);
    if (Object.keys(otherChanges).length && this.modalRef) {
      this.modalRef.updateConfig(getConfigFromComponent(this));
    }
    if (nzVisible) {
      if (this.nzVisible) {
        this.open();
      } else {
        this.close();
      }
    }
  }
  ngOnDestroy() {
    this.modalRef?._finishDialogClose();
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzModalComponent_Factory(t) {
      return new (t || _NzModalComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzModalService), ɵɵdirectiveInject(ViewContainerRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzModalComponent,
      selectors: [["nz-modal"]],
      contentQueries: function NzModalComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NzModalTitleDirective, 7, TemplateRef);
          ɵɵcontentQuery(dirIndex, NzModalContentDirective, 7, TemplateRef);
          ɵɵcontentQuery(dirIndex, NzModalFooterDirective, 7, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modalTitle = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentFromContentChild = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modalFooter = _t.first);
        }
      },
      inputs: {
        nzMask: "nzMask",
        nzMaskClosable: "nzMaskClosable",
        nzCloseOnNavigation: "nzCloseOnNavigation",
        nzVisible: "nzVisible",
        nzClosable: "nzClosable",
        nzOkLoading: "nzOkLoading",
        nzOkDisabled: "nzOkDisabled",
        nzCancelDisabled: "nzCancelDisabled",
        nzCancelLoading: "nzCancelLoading",
        nzKeyboard: "nzKeyboard",
        nzNoAnimation: "nzNoAnimation",
        nzCentered: "nzCentered",
        nzDraggable: "nzDraggable",
        nzContent: "nzContent",
        nzFooter: "nzFooter",
        nzZIndex: "nzZIndex",
        nzWidth: "nzWidth",
        nzWrapClassName: "nzWrapClassName",
        nzClassName: "nzClassName",
        nzStyle: "nzStyle",
        nzTitle: "nzTitle",
        nzCloseIcon: "nzCloseIcon",
        nzMaskStyle: "nzMaskStyle",
        nzBodyStyle: "nzBodyStyle",
        nzOkText: "nzOkText",
        nzCancelText: "nzCancelText",
        nzOkType: "nzOkType",
        nzOkDanger: "nzOkDanger",
        nzIconType: "nzIconType",
        nzModalType: "nzModalType",
        nzAutofocus: "nzAutofocus",
        nzOnOk: "nzOnOk",
        nzOnCancel: "nzOnCancel"
      },
      outputs: {
        nzOnOk: "nzOnOk",
        nzOnCancel: "nzOnCancel",
        nzAfterOpen: "nzAfterOpen",
        nzAfterClose: "nzAfterClose",
        nzVisibleChange: "nzVisibleChange"
      },
      exportAs: ["nzModal"],
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function NzModalComponent_Template(rf, ctx) {
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
__decorate([InputBoolean()], NzModalComponent.prototype, "nzMask", void 0);
__decorate([InputBoolean()], NzModalComponent.prototype, "nzMaskClosable", void 0);
__decorate([InputBoolean()], NzModalComponent.prototype, "nzCloseOnNavigation", void 0);
__decorate([InputBoolean()], NzModalComponent.prototype, "nzVisible", void 0);
__decorate([InputBoolean()], NzModalComponent.prototype, "nzClosable", void 0);
__decorate([InputBoolean()], NzModalComponent.prototype, "nzOkLoading", void 0);
__decorate([InputBoolean()], NzModalComponent.prototype, "nzOkDisabled", void 0);
__decorate([InputBoolean()], NzModalComponent.prototype, "nzCancelDisabled", void 0);
__decorate([InputBoolean()], NzModalComponent.prototype, "nzCancelLoading", void 0);
__decorate([InputBoolean()], NzModalComponent.prototype, "nzKeyboard", void 0);
__decorate([InputBoolean()], NzModalComponent.prototype, "nzNoAnimation", void 0);
__decorate([InputBoolean()], NzModalComponent.prototype, "nzCentered", void 0);
__decorate([InputBoolean()], NzModalComponent.prototype, "nzDraggable", void 0);
__decorate([InputBoolean()], NzModalComponent.prototype, "nzOkDanger", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzModalComponent, [{
    type: Component,
    args: [{
      selector: "nz-modal",
      exportAs: "nzModal",
      template: ``,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzModalService
  }, {
    type: ViewContainerRef
  }], {
    nzMask: [{
      type: Input
    }],
    nzMaskClosable: [{
      type: Input
    }],
    nzCloseOnNavigation: [{
      type: Input
    }],
    nzVisible: [{
      type: Input
    }],
    nzClosable: [{
      type: Input
    }],
    nzOkLoading: [{
      type: Input
    }],
    nzOkDisabled: [{
      type: Input
    }],
    nzCancelDisabled: [{
      type: Input
    }],
    nzCancelLoading: [{
      type: Input
    }],
    nzKeyboard: [{
      type: Input
    }],
    nzNoAnimation: [{
      type: Input
    }],
    nzCentered: [{
      type: Input
    }],
    nzDraggable: [{
      type: Input
    }],
    nzContent: [{
      type: Input
    }],
    nzFooter: [{
      type: Input
    }],
    nzZIndex: [{
      type: Input
    }],
    nzWidth: [{
      type: Input
    }],
    nzWrapClassName: [{
      type: Input
    }],
    nzClassName: [{
      type: Input
    }],
    nzStyle: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzCloseIcon: [{
      type: Input
    }],
    nzMaskStyle: [{
      type: Input
    }],
    nzBodyStyle: [{
      type: Input
    }],
    nzOkText: [{
      type: Input
    }],
    nzCancelText: [{
      type: Input
    }],
    nzOkType: [{
      type: Input
    }],
    nzOkDanger: [{
      type: Input
    }],
    nzIconType: [{
      type: Input
    }],
    nzModalType: [{
      type: Input
    }],
    nzAutofocus: [{
      type: Input
    }],
    nzOnOk: [{
      type: Input
    }, {
      type: Output
    }],
    nzOnCancel: [{
      type: Input
    }, {
      type: Output
    }],
    nzAfterOpen: [{
      type: Output
    }],
    nzAfterClose: [{
      type: Output
    }],
    nzVisibleChange: [{
      type: Output
    }],
    modalTitle: [{
      type: ContentChild,
      args: [NzModalTitleDirective, {
        static: true,
        read: TemplateRef
      }]
    }],
    contentFromContentChild: [{
      type: ContentChild,
      args: [NzModalContentDirective, {
        static: true,
        read: TemplateRef
      }]
    }],
    modalFooter: [{
      type: ContentChild,
      args: [NzModalFooterDirective, {
        static: true,
        read: TemplateRef
      }]
    }]
  });
})();
var NzModalModule = class _NzModalModule {
  static {
    this.ɵfac = function NzModalModule_Factory(t) {
      return new (t || _NzModalModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzModalModule,
      imports: [NzModalComponent, NzModalFooterDirective, NzModalContentDirective, NzModalCloseComponent, NzModalFooterComponent, NzModalTitleComponent, NzModalTitleDirective, NzModalContainerComponent, NzModalConfirmContainerComponent],
      exports: [NzModalComponent, NzModalFooterDirective, NzModalContentDirective, NzModalTitleDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [NzModalService],
      imports: [NzModalCloseComponent, NzModalFooterComponent, NzModalTitleComponent, NzModalContainerComponent, NzModalConfirmContainerComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzModalModule, [{
    type: NgModule,
    args: [{
      imports: [NzModalComponent, NzModalFooterDirective, NzModalContentDirective, NzModalCloseComponent, NzModalFooterComponent, NzModalTitleComponent, NzModalTitleDirective, NzModalContainerComponent, NzModalConfirmContainerComponent],
      exports: [NzModalComponent, NzModalFooterDirective, NzModalContentDirective, NzModalTitleDirective],
      providers: [NzModalService]
    }]
  }], null, null);
})();
var NzModalLegacyAPI = class {
};
export {
  BaseModalContainerComponent,
  FADE_CLASS_NAME_MAP,
  MODAL_MASK_CLASS_NAME,
  ModalOptions,
  NZ_CONFIG_MODULE_NAME,
  NZ_MODAL_DATA,
  NzModalCloseComponent,
  NzModalComponent,
  NzModalConfirmContainerComponent,
  NzModalContainerComponent,
  NzModalContentDirective,
  NzModalFooterComponent,
  NzModalFooterDirective,
  NzModalLegacyAPI,
  NzModalModule,
  NzModalRef,
  NzModalService,
  NzModalTitleComponent,
  NzModalTitleDirective,
  ZOOM_CLASS_NAME_MAP,
  applyConfigDefaults,
  getConfigFromComponent,
  getValueWithConfig,
  nzModalAnimations,
  throwNzModalContentAlreadyAttachedError
};
//# sourceMappingURL=ng-zorro-antd_modal.js.map
