'use server';

import type { Contact } from '@/types/blogs';
import { revalidateTag } from 'next/cache';

export const createContact = async (e: FormData) => {
  const name = e.get('name')?.toString();
  const avatar = e.get('avatar')?.toString();
  const age = e.get('age')?.toString();
  const description = e.get('description')?.toString();
  if (!age || !name || !avatar || !description) return;

  const createContact: Contact = {
    name,
    avatar,
    age,
    description,
  };

  await fetch(`${process.env.CONTACT_API}`, {
    method: 'POST',
    body: JSON.stringify(createContact),
    headers: { 'Content-Type': 'application/json' },
  });

  revalidateTag('contact-us');
};
