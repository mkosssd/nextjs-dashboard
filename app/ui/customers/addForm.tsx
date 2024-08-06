'use client';
import { addCustomers, CustomerState, State } from '@/app/lib/actions';
import { Button } from '@/app/ui/button';
import Link from 'next/link';
import { useActionState } from 'react';

export default function Form() {
    const initialState: CustomerState = { message: null, errors: {} };

    const [state, formAction] = useActionState(addCustomers, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Customer name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter customer name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                required
              />
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Customer email
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter customer email"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                required
              />
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="image_url" className="mb-2 block text-sm font-medium">
            Image URL
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="image_url"
                name="image_url"
                type="text"
                placeholder="Enter Image URL"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Add Customer</Button>
      </div>
    </form>
  );
}
