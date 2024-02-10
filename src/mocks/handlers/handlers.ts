/* eslint-disable import/no-extraneous-dependencies */
import { http, HttpResponse } from 'msw';

export const exampleGetResponseMocked = [
  {
    id: 1,
    name: 'mouse',
    description: 'mouse gaming',
    inStock: true,
  },
  {
    id: 2,
    name: 'keyboard',
    description: 'keyboard gaming',
    inStock: true,
  },
];

export const exampleNewProductMocked = {
  id: 3,
  name: 'screen',
  description: 'screen gaming',
  inStock: true,
};

// Handles a GET /example request
export const getExampleHappyResponseHandler = http.get(
  '/example',
  ({}) => {
    return HttpResponse.json(exampleGetResponseMocked)    
  }
);

// Handles a GET /example request with an empty res
export const getExampleEmptyResponseHandler = http.get(
  '/example',
  () => {
    return HttpResponse.json([])
  }
);

// Handles a GET /example request with a failed status
export const getExampleFailedResponseHandler = http.get(
  '/example',
  () => {
    return HttpResponse.error();
  }
);

// Handles a POST /example request
export const postExampleHappyResponseHandler = http.post(
  '/example',
  () => {
    return HttpResponse.json(exampleNewProductMocked);
  }
);

// Handles a POST /example request with a failed status
export const postExampleFailedResponseHandler = http.post(
  '/example',
  () => {
    return HttpResponse.error();
  }
);

export const handlers = [
  getExampleHappyResponseHandler,
  getExampleFailedResponseHandler,
  getExampleEmptyResponseHandler,
  postExampleHappyResponseHandler,
  postExampleFailedResponseHandler,
];
