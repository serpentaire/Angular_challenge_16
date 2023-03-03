import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    // One uppercase at least
    const emailRegex = RegExp('^[\\w\\.-]+@[\\w-]+(\\.[\\w-]+)*\\.[\\w-]{2,4}$');
    const valid = emailRegex.test(control.value);

    const errors = {
        email: {
            rules: ''
        }
    };

    return !valid ? errors : null;
}
