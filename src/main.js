import 'reset-css';
import './style.scss';
import intlTelInput from 'intl-tel-input';

const telInputs = document.querySelectorAll('.tel-input');

telInputs.forEach(item => {
  intlTelInput(item, {
    initialCountry: 'ru',
    loadUtils: () => import('intl-tel-input/utils'),
  });
});