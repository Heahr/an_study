import { AbstractControl } from '@angular/forms';
import { NumberSymbol } from '@angular/common';

export class PasswordValidator {
    static match(form: AbstractControl) {
        const password = form.get('password').value;
        const confirmPassword = form.get('confirmPassword').value;

        if(password !== confirmPassword) {
            return { match: {password, confirmPassword}};
        } else {
            return null;
        }
    }
}