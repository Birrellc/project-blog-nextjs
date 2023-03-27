// Higher Order Component for client-side routing of blog posts

'use client';

import React from 'react';
import Link from 'next/link';

const ClientRoute = ({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) => {
  return <Link href={route}>{children}</Link>;
};

export default ClientRoute;
