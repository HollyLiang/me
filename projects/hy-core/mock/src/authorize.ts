/**
 * Mock Authorize
 *
 * Validation user's token from headers.
 *
 * ```ts
 * @MockAuthorize()
 * public static getData(req: MockRequest) { }
 * ```
 *
 */
export const MockAuthorize = (): any => {
  return (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
    const originalMethod = descriptor.value

    descriptor.value = (req) => {
      // Get http request headers for authorize.
      // console.dir(req.headers)
      originalMethod.call(target, req);
    }
  };
}
