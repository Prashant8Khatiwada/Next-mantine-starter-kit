import { ClientRouter } from '@/components/ClientRouter';

export function generateStaticParams() {
    return [{ slug: [''] }];
}

export default function Page() {
    return <ClientRouter />;
}
