import z from 'zod/v4';

const newsletterSchema = z.email('Invalid email address');

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
