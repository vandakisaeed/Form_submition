import z from 'zod/v4';

const newsletterSchema = z.email('Invalid email address');

const contactFormSchema = z.object({
  firstName: z.string('First name needs to be a string').min(1, 'First name is required'),
  lastName: z.string('Last name needs to be a string').min(1, 'Last name is required'),
  email: z.email('Invalid email address'),
  message: z.string('Message needs to be a string').min(1, 'Message is required')
});

export const registerNewsletter = async email => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const { data, error } = newsletterSchema.safeParse(email);
  if (error) throw new Error(z.prettifyError(error));
  const newsletterList = JSON.parse(localStorage.getItem('newsletterList')) || [];
  if (newsletterList.includes(data)) throw new Error(`Email ${data} is already registered.`);
  newsletterList.push(data);
  localStorage.setItem('newsletterList', JSON.stringify(newsletterList));
  return `Successfully registered ${data} to the newsletter!`;
};

export const sendContactForm = async ({ firstName, lastName, email, message }) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const { data, error } = contactFormSchema.safeParse({
    firstName,
    lastName,
    email,
    message
  });
  if (error) throw new Error(z.prettifyError(error));
  return `Thank you for your message, ${data.firstName}! We will get back to you soon.`;
};
