import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export default sanityClient({
  projectId: 'mgl75v01',
  dataset:'production',
  useCdn: true,
  apiVersion: "2021-03-25",
  //apiVersion:'2021-03-25',
  //useCdn:true,
  token:'skMc2dy2suFjPtIr91keDCXXEMDoVBxhfngP10MthvQovYei71q4MNkWkmthG489OO4gEy94vNENhWweDzhDW0ThXts7Xexq8az9iP6ch76nBdrPimv9gvHIwG8tlrncKQox7i5dP93dFUm1WzcGpD5P4DrrEYkBfuoIXOkO9nff351Y9Pko',
});

//const builder = imageUrlBuilder(client);

//export const urlFor = (source) => builder.image(source);