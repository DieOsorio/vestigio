import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = t('contactUs.errors.name');
    if (!formData.email.trim()) {
      newErrors.email = t('contactUs.errors.email');
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = t('contactUs.errors.invalidEmail');
    }
    if (!formData.message.trim()) newErrors.message = t('contactUs.errors.message');

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Limpia el error al escribir
  };

  return (
    <article id="contacto" className="p-4">
      <h2 className="text-2xl font-semibold mb-2">{t('contactUs.title')}</h2>
      <hr className="mb-4" />
      <form
        id="contactForm"
        action="https://formsubmit.co/4ed8746e214916e5329f55159af1f164"
        method="POST"
        onSubmit={(e) => {
          if (!validateForm()) e.preventDefault(); // Evita envío si hay errores
        }}
        className="flex flex-col gap-4"
      >
        <div>
          <label htmlFor="nombre">{t('contactUs.name')}</label>
          <input
            id="nombre"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`border p-2 w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="apellido">{t('contactUs.lastName')}</label>
          <input
            id="apellido"
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="border p-2 w-full border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="celular">{t('contactUs.phone')}</label>
          <input
            type="tel"
            id="celular"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 w-full border-gray-300"
          />
        </div>

        <div>
          <label htmlFor="email">{t('contact.email')}</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`border p-2 w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="mensaje">{t('contactUs.message')}</label>
          <textarea
            id="mensaje"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`border p-2 w-full ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            required
          />
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </div>

        <div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            {t('contactUs.send')}
          </button>
        </div>

        <input type="hidden" name="_next" value="https://dieosorio.github.io/vestigio/thanks.html" />
        <input type="hidden" name="_captcha" value="false" />
      </form>
    </article>
  );
};

export default ContactUs;
