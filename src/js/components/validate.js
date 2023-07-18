import JustValidate from 'just-validate';

const validateAbout = new JustValidate('.js-form-about');

validateAbout
  .addField('.js-about-input', [
    {
      rule: 'required',
      errorMessage: 'Заполните поле E-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ])
  .onSuccess(event => {
    let formData = new FormData(event.target);
    console.log(...formData);
    event.target.reset();
  });

  const validateContacts = new JustValidate('.js-form-contacts');

  validateContacts
    .addField('[name="name"]', [
      {
        rule: 'required',
        errorMessage: 'Введите свое имя',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Имя слишком короткое',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Имя слишком длинное',
      },

      {
        rule: 'customRegexp',
        value: /[a-zA-Zа-яА-ЯЁё]+$/gi,
        errorMessage: 'Недопустимый формат',
      }
    ])
    .addField('[name="email"]', [
      {
        rule: 'required',
        errorMessage: 'Заполните поле E-mail',
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат',
      },
    ])
    .onSuccess(event => {
      let formData = new FormData(event.target);
      console.log(...formData);

      event.target.reset();

    });
