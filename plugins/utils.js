import MFO_UTILS from '~/utils/utils';

export default (ctx, inject) => {
  // inject the repository in the context (ctx.app.$repository)
  // And in the Vue instances (this.$repository in your components)
  const LOCAL_MFO_UTILS = MFO_UTILS(ctx.$fire, ctx.$auth)
  inject('MFO_UTILS', LOCAL_MFO_UTILS())
}
