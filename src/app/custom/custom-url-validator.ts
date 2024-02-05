import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function createUrlValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const urlPattern =new RegExp(getUrlPattern());
        const hasUrl = urlPattern.test(value);

        return !hasUrl ? { urlStrength:true }: null;
    }
}

function getUrlPattern(): string {
    return '^(http|https):\\/\\/([a-zA-Z0-9.-]+)\\.([a-zA-Z]{2,6})(:[0-9]+)?(\\/[a-zA-Z0-9%_.-]*)*(\\?[a-zA-Z0-9%_.-]+(=[a-zA-Z0-9%_.-]*)?(&[a-zA-Z0-9%_.-]+(=[a-zA-Z0-9%_.-]*)?)*)?$';
}
