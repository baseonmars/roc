import resolveRequest from './resolveRequest';

/* Using global variables here to make sure that we can access the values set from different projects.
 * This guarantees that the variables will live outside the require cache, something that we need for stability.
 */
global.roc = global.roc || {};
global.roc.resolveRequest = global.roc.resolveRequest || undefined;

export function setResolveRequest(exports, directory, dependencyContext) {
    global.roc.resolveRequest = resolveRequest(exports, directory, dependencyContext);
}

export function getResolveRequest(identifier) {
    return global.roc.resolveRequest(identifier);
}
