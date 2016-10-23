/* The function of this file is to determine if tree shaking works with Webpack@2 and Typescript */

export function cube(x) {
  return x * x * x
}

export function square(x) {
  return x * x
}


/**
 * Conclusions:
 * * Won't work with the typescript "module" option set to "commonjs", which makes sense because Typescript transforms
 * the "import"- and "export"-statements required for tree shaking before they can reach webpack
 *
 * * Will actually work with the typescript "module"-option set to "es2015" with target "es5"
 * (Doc mentions so that the config might be ignored when targeting es5). Webpack will remove the output in the
 * minified version of the build, and mark the export correctly as "unused" in dev
 */
