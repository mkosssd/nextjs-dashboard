import Form from '@/app/ui/customers/addForm';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Add Customers',
  };
export default async function Page() {
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Add Customers',
            href: '/dashboard/customers/add',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}