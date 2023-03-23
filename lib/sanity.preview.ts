'use client';
//clientside

import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from './sanity.client';

function onPublicAccessOnly() {
  throw new Error('Unable to load preview as not logged in');
}

if (!projectId || !dataset) {
  throw new Error('Missing Sanity project ID or dataset name');
}

// when pulling in usePreview hook - allow queries to sanity endpoints to get data inclucing drafts
export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
