import throttle from 'lodash.throttle';

import refs from './modules/refsElements';
import onEscClick from './Listeners/onEscClick';
import onFormInput from './Listeners/onFormInput';
import onFormSubmit from './Listeners/onFormSubmit';
import fillFieldsForm from './modules/fillFieldsForm';

const STORAGE_KEY = "feedback-form-state";

fillFieldsForm(STORAGE_KEY, refs);

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
window.addEventListener('keyup', onEscClick);



