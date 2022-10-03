import myUtils from '~/utils/utils';

export default (ctx, inject) => {
  // inject the repository in the context (ctx.app.$repository)
  // And in the Vue instances (this.$repository in your components)
  const utilsWithAxios = myUtils(ctx.$firebase)
  inject('myUtils', utilsWithAxios())
}
