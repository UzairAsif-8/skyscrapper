import emailjs from '@emailjs/browser'

// Your EmailJS credentials
const PUBLIC_KEY = 'Pe3zsyH6a6Xc_tI7V'
const SERVICE_ID = 'service_kkk8hfy'
const TEMPLATE_ID = 'template_6z6uac5'

/**
 * Send a plumbing quote request via EmailJS
 * @param {Object} formData - The form data
 * @property {string} full_name
 * @property {string} phone
 * @property {string} email
 * @property {string} address
 * @property {string} service_needed
 * @property {string} description
 * @property {string} urgency
 * @property {string} preferred_date
 * @property {string} source
 */
export const sendQuoteRequest = async (formData) => {
  try {
    const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
    return result
  } catch (error) {
    console.error('EmailJS error:', error)
    throw new Error('Failed to send email. Please try again.')
  }
}