/* */ 
"format cjs";
/**
 * @module
 * @description
 * The `di` module provides dependency injection container services.
 */
export { InjectMetadata, OptionalMetadata, InjectableMetadata, SelfMetadata, HostMetadata, SkipSelfMetadata, DependencyMetadata } from './di/metadata';
// we have to reexport * because Dart and TS export two different sets of types
export * from './di/decorators';
export { forwardRef, resolveForwardRef } from './di/forward_ref';
export { Injector } from './di/injector';
export { Binding, ProviderBuilder, ResolvedFactory, Dependency, bind, Provider, provide } from './di/provider';
export { Key, TypeLiteral } from './di/key';
export { NoProviderError, AbstractProviderError, CyclicDependencyError, InstantiationError, InvalidProviderError, NoAnnotationError, OutOfBoundsError } from './di/exceptions';
export { OpaqueToken } from './di/opaque_token';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvY29yZS9kaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsU0FDRSxjQUFjLEVBQ2QsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osWUFBWSxFQUNaLGdCQUFnQixFQUNoQixrQkFBa0IsUUFDYixlQUFlLENBQUM7QUFFdkIsK0VBQStFO0FBQy9FLGNBQWMsaUJBQWlCLENBQUM7QUFFaEMsU0FBUSxVQUFVLEVBQUUsaUJBQWlCLFFBQXFCLGtCQUFrQixDQUFDO0FBQzdFLFNBQVEsUUFBUSxRQUFPLGVBQWUsQ0FBQztBQUN2QyxTQUNFLE9BQU8sRUFDUCxlQUFlLEVBRWYsZUFBZSxFQUNmLFVBQVUsRUFDVixJQUFJLEVBRUosUUFBUSxFQUVSLE9BQU8sUUFDRixlQUFlLENBQUM7QUFDdkIsU0FBUSxHQUFHLEVBQUUsV0FBVyxRQUFPLFVBQVUsQ0FBQztBQUMxQyxTQUNFLGVBQWUsRUFDZixxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLGtCQUFrQixFQUNsQixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGdCQUFnQixRQUNYLGlCQUFpQixDQUFDO0FBQ3pCLFNBQVEsV0FBVyxRQUFPLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBgZGlgIG1vZHVsZSBwcm92aWRlcyBkZXBlbmRlbmN5IGluamVjdGlvbiBjb250YWluZXIgc2VydmljZXMuXG4gKi9cblxuZXhwb3J0IHtcbiAgSW5qZWN0TWV0YWRhdGEsXG4gIE9wdGlvbmFsTWV0YWRhdGEsXG4gIEluamVjdGFibGVNZXRhZGF0YSxcbiAgU2VsZk1ldGFkYXRhLFxuICBIb3N0TWV0YWRhdGEsXG4gIFNraXBTZWxmTWV0YWRhdGEsXG4gIERlcGVuZGVuY3lNZXRhZGF0YVxufSBmcm9tICcuL2RpL21ldGFkYXRhJztcblxuLy8gd2UgaGF2ZSB0byByZWV4cG9ydCAqIGJlY2F1c2UgRGFydCBhbmQgVFMgZXhwb3J0IHR3byBkaWZmZXJlbnQgc2V0cyBvZiB0eXBlc1xuZXhwb3J0ICogZnJvbSAnLi9kaS9kZWNvcmF0b3JzJztcblxuZXhwb3J0IHtmb3J3YXJkUmVmLCByZXNvbHZlRm9yd2FyZFJlZiwgRm9yd2FyZFJlZkZufSBmcm9tICcuL2RpL2ZvcndhcmRfcmVmJztcbmV4cG9ydCB7SW5qZWN0b3J9IGZyb20gJy4vZGkvaW5qZWN0b3InO1xuZXhwb3J0IHtcbiAgQmluZGluZyxcbiAgUHJvdmlkZXJCdWlsZGVyLFxuICBSZXNvbHZlZEJpbmRpbmcsXG4gIFJlc29sdmVkRmFjdG9yeSxcbiAgRGVwZW5kZW5jeSxcbiAgYmluZCxcblxuICBQcm92aWRlcixcbiAgUmVzb2x2ZWRQcm92aWRlcixcbiAgcHJvdmlkZVxufSBmcm9tICcuL2RpL3Byb3ZpZGVyJztcbmV4cG9ydCB7S2V5LCBUeXBlTGl0ZXJhbH0gZnJvbSAnLi9kaS9rZXknO1xuZXhwb3J0IHtcbiAgTm9Qcm92aWRlckVycm9yLFxuICBBYnN0cmFjdFByb3ZpZGVyRXJyb3IsXG4gIEN5Y2xpY0RlcGVuZGVuY3lFcnJvcixcbiAgSW5zdGFudGlhdGlvbkVycm9yLFxuICBJbnZhbGlkUHJvdmlkZXJFcnJvcixcbiAgTm9Bbm5vdGF0aW9uRXJyb3IsXG4gIE91dE9mQm91bmRzRXJyb3Jcbn0gZnJvbSAnLi9kaS9leGNlcHRpb25zJztcbmV4cG9ydCB7T3BhcXVlVG9rZW59IGZyb20gJy4vZGkvb3BhcXVlX3Rva2VuJztcbiJdfQ==