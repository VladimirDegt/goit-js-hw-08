import throttle from 'lodash.throttle';

import { refs } from './modules/refsElements';
import onEscClick from './Listeners/onEscClick';
import onFormInput from './Listeners/onFormInput';
import onFormSubmit from './Listeners/onFormSubmit';
import fillFieldsForm from './modules/fillFieldsForm';

fillFieldsForm(refs);

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
window.addEventListener('keyup', onEscClick);



