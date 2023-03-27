import Iframe from 'sanity-plugin-iframe-pane';
import type { DefaultDocumentNodeResolver } from 'sanity/desk';

// S - structure
// https://www.sanity.io/plugins/iframe-pane

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  if (schemaType === 'post') {
    return S.document().views([
      // Form -> the post form on sanity backend
      S.view.form(),

      S.view
        .component(Iframe)
        .options({
          //Required: Accepts async function or string
          url: `${
            process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
          }/api/preview`,
          //Optional: Default size
          defaultSize: `desktop`,
          // Optional: Reload button or relead on document changes
          reload: {
            button: true, // default - undefined
          },
          // Optional: Pass attributes to iframe element
          // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
          attributes: {},
        })
        .title('Preview'),
    ]);
  }
};
