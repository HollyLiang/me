import { Input, booleanAttribute, numberAttribute } from "@angular/core";

export function InputNumber() {
  return function (target: unknown, propertyKey: string) {
    Input({ transform: numberAttribute })(target, propertyKey);
  };
}

export function InputBoolean() {
  return function (target: unknown, propertyKey: string) {
    Input({ transform: booleanAttribute })(target, propertyKey);
  };
}
