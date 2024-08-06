import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { albert_Sans } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchCustomerPages, fetchCustomers, fetchFormattedCustomers, fetchInvoicesPages } from '@/app/lib/data';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Customers',
  };
 
export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchCustomerPages(query);

  return (
    <div className="w-full">
       <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}