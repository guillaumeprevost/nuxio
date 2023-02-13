import { defineRule, configure } from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n';
import fr from '@vee-validate/i18n/dist/locale/fr.json';

// import * as rules from "@vee-validate/rules"
import { required, email, min, max, min_value, max_value,
  url, regex, one_of } from '@vee-validate/rules';

export default defineNuxtPlugin(() => {
  defineRule('required', required);
  defineRule('email', email);
  defineRule('min', min);
  defineRule('max', max);
  defineRule('min_value', min_value);
  defineRule('max_value', max_value);
  defineRule('url', url);
  defineRule('regex', regex);
  defineRule('one_of', one_of);
  defineRule('mfa_code', (value:string) => {
    if (/^([0-9]){4}-([0-9]){4}$/.test(value))
      return true;
    return "ASDFFFFFFF n'est pas un code de confirmation valide";
  });

  configure({
    validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
    validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
    validateOnInput: true, // controls if `input` events should trigger validation with `handleChange` handler
    validateOnModelUpdate: false, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
    generateMessage: localize({ fr, }),
  });
  setLocale('fr');
});
